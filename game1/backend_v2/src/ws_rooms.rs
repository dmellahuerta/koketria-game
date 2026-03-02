use std::{collections::HashMap, sync::Arc, time::{SystemTime, UNIX_EPOCH}};

use axum::extract::ws::{Message as AxumWsMessage, WebSocket};
use futures_util::{sink::SinkExt, stream::StreamExt};
use serde_json::{json, Value};
use tokio::sync::{mpsc, Mutex};
use tracing::{debug, info, warn};

use crate::rooms::{JoinError, RoomManager, StartValidationError, Team, VersusType};

pub struct WsRoomsState {
    inner: Mutex<Inner>,
}

struct Inner {
    rooms: RoomManager,
    clients: HashMap<String, ClientSession>,
    client_seq: u64,
}

#[derive(Clone)]
struct ClientSession {
    id: String,
    name: String,
    character: Option<String>,
    room_id: Option<String>,
    state: PlayerState,
    state_ts: i64,
    tx: mpsc::UnboundedSender<String>,
}

#[derive(Clone)]
struct PlayerState {
    position: Vec3,
    rotation: Rotation,
    jumping: bool,
    moving: bool,
}

#[derive(Clone)]
struct Vec3 {
    x: f64,
    y: f64,
    z: f64,
}

#[derive(Clone)]
struct Rotation {
    yaw: f64,
    pitch: f64,
}

impl WsRoomsState {
    pub fn new(max_custom_rooms: usize, max_players_per_room: usize) -> Arc<Self> {
        let mut rooms = RoomManager::new(max_custom_rooms, max_players_per_room);
        rooms.ensure_server_room("main", "Main");
        Arc::new(Self {
            inner: Mutex::new(Inner {
                rooms,
                clients: HashMap::new(),
                client_seq: 0,
            }),
        })
    }
}

impl Inner {
    fn send_to(&self, client_id: &str, payload: Value) {
        if let Some(client) = self.clients.get(client_id) {
            let _ = client.tx.send(payload.to_string());
        }
    }

    fn broadcast_room(&self, room_id: &str, payload: Value, exclude_client_id: Option<&str>) {
        let Some(room) = self.rooms.rooms.get(room_id) else {
            return;
        };
        let data = payload.to_string();
        for player_id in &room.players {
            if exclude_client_id == Some(player_id.as_str()) {
                continue;
            }
            if let Some(client) = self.clients.get(player_id) {
                let _ = client.tx.send(data.clone());
            }
        }
    }

    fn room_summary_json(&self, room_id: &str) -> Option<Value> {
        let room = self.rooms.rooms.get(room_id)?;
        Some(json!({
          "id": room.id,
          "name": room.name,
          "players": room.players.len(),
          "hostId": room.host_id,
          "status": room.status.as_wire(),
          "mode": room.mode.as_wire(),
          "versusType": room.versus_type.map(|v| v.as_wire()),
          "requiredPlayers": room.required_players,
          "maxPlayers": room.max_players,
          "weather": "night",
          "battleTheme": "battle1",
          "mapSeed": 1
        }))
    }

    fn player_json(&self, room_id: &str, player_id: &str) -> Option<Value> {
        let room = self.rooms.rooms.get(room_id)?;
        let client = self.clients.get(player_id)?;
        let team = room.teams.get(player_id).copied().map(|t| t.as_wire());
        let ready = room.ready.get(player_id).copied().unwrap_or(false);
        Some(json!({
          "id": client.id,
          "name": client.name,
          "character": client.character,
          "team": team,
          "ready": ready,
          "kills": 0,
          "deaths": 0,
          "health": 100,
          "shield": 0,
          "mana": 100,
          "alive": true,
          "lunarRainCooldownMs": 0,
          "pendingHealthRegen": 0,
          "state": player_state_json(&client.state),
          "ts": client.state_ts
        }))
    }

    fn room_state_json(&self, room_id: &str) -> Option<Value> {
        let room = self.rooms.rooms.get(room_id)?;
        let room_json = self.room_summary_json(room_id)?;
        let mut players = Vec::new();
        for player_id in &room.players {
            if let Some(player) = self.player_json(room_id, player_id) {
                players.push(player);
            }
        }
        Some(json!({ "room": room_json, "players": players }))
    }

    fn public_rooms_json(&self) -> Value {
        let mut rooms = Vec::new();
        for room_id in self.rooms.rooms.keys() {
            if let Some(summary) = self.room_summary_json(room_id) {
                rooms.push(summary);
            }
        }
        Value::Array(rooms)
    }

    fn broadcast_rooms_list_all(&self) {
        let payload = json!({
          "type": "rooms_list",
          "ok": true,
          "data": self.public_rooms_json()
        });
        let text = payload.to_string();
        for client in self.clients.values() {
            let _ = client.tx.send(text.clone());
        }
    }

    fn broadcast_room_state(&self, room_id: &str) {
        if let Some(state) = self.room_state_json(room_id) {
            self.broadcast_room(
                room_id,
                json!({ "type": "room_state", "ok": true, "data": state }),
                None,
            );
        }
    }
}

pub async fn handle_connection(socket: WebSocket, state: Arc<WsRoomsState>) {
    let (mut ws_tx, mut ws_rx) = socket.split();
    let (out_tx, mut out_rx) = mpsc::unbounded_channel::<String>();

    let write_task = tokio::spawn(async move {
        while let Some(msg) = out_rx.recv().await {
            if ws_tx.send(AxumWsMessage::Text(msg.into())).await.is_err() {
                break;
            }
        }
    });

    let (client_id, connected_payload) = {
        let mut inner = state.inner.lock().await;
        inner.client_seq += 1;
        let client_id = format!("p-{}", inner.client_seq);
        let name = format!("Player-{:04}", inner.client_seq % 10000);
        let initial_state = default_player_state();
        inner.clients.insert(
            client_id.clone(),
            ClientSession {
                id: client_id.clone(),
                name: name.clone(),
                character: None,
                room_id: None,
                state: initial_state.clone(),
                state_ts: now_ms(),
                tx: out_tx.clone(),
            },
        );
        let connected_payload = json!({
          "type": "connected",
          "ok": true,
          "data": {
            "player": {
              "id": client_id,
              "name": name,
              "character": Value::Null,
              "ts": now_ms(),
              "state": player_state_json(&initial_state)
            },
            "rooms": inner.public_rooms_json()
          }
        });
        (client_id, connected_payload)
    };
    info!("[ws_rooms] connected client_id={}", client_id);
    let _ = out_tx.send(connected_payload.to_string());

    while let Some(next) = ws_rx.next().await {
        let msg = match next {
            Ok(v) => v,
            Err(err) => {
                warn!("ws_rooms receive error: {}", err);
                break;
            }
        };
        let text = match msg {
            AxumWsMessage::Text(v) => v.to_string(),
            AxumWsMessage::Binary(_) => continue,
            AxumWsMessage::Ping(_) | AxumWsMessage::Pong(_) => continue,
            AxumWsMessage::Close(_) => break,
        };
        let parsed = match serde_json::from_str::<Value>(&text) {
            Ok(v) => v,
            Err(_) => {
                let _ = out_tx.send(
                    json!({
                      "type": "error",
                      "ok": false,
                      "error": { "code": "INVALID_JSON", "message": "Mensaje invalido" }
                    })
                    .to_string(),
                );
                continue;
            }
        };
        if let Some(event_type) = parsed.get("type").and_then(Value::as_str) {
            debug!("[ws_rooms] recv client_id={} event={}", client_id, event_type);
        }
        process_message(&state, &client_id, parsed).await;
    }

    let mut inner = state.inner.lock().await;
    if let Some(client) = inner.clients.get(&client_id).cloned() {
        if let Some(room_id) = client.room_id {
            inner.rooms.leave_room(&room_id, &client_id);
            inner.broadcast_room(
                &room_id,
                json!({
                  "type": "player_left",
                  "ok": true,
                  "data": { "playerId": client_id }
                }),
                None,
            );
            inner.broadcast_room_state(&room_id);
            inner.broadcast_rooms_list_all();
        }
    }
    inner.clients.remove(&client_id);
    drop(inner);
    info!("[ws_rooms] disconnected client_id={}", client_id);
    write_task.abort();
}

async fn process_message(state: &Arc<WsRoomsState>, client_id: &str, message: Value) {
    let event_type = message.get("type").and_then(Value::as_str).unwrap_or("");
    let mut inner = state.inner.lock().await;

    let Some(client) = inner.clients.get(client_id).cloned() else {
        return;
    };

    match event_type {
        "list_rooms" => {
            inner.send_to(
                client_id,
                json!({ "type": "rooms_list", "ok": true, "data": inner.public_rooms_json() }),
            );
        }
        "ping" => {
            inner.send_to(
                client_id,
                json!({
                  "type": "pong",
                  "ok": true,
                  "data": {
                    "probeId": message.get("probeId").and_then(Value::as_str).unwrap_or(""),
                    "clientTs": message.get("clientTs").and_then(Value::as_i64).unwrap_or(0),
                    "serverTs": now_ms()
                  }
                }),
            );
        }
        "create_room" => {
            let mode = message
                .get("mode")
                .and_then(Value::as_str)
                .unwrap_or("")
                .trim()
                .to_lowercase();
            if mode != "versusmatch" {
                inner.send_to(
                    client_id,
                    json!({
                      "type": "error",
                      "ok": false,
                      "error": { "code": "UNSUPPORTED_MODE", "message": "Modo de sala no soportado" }
                    }),
                );
                return;
            }
            let room_name = message.get("roomName").and_then(Value::as_str);
            let Some(room_id) = inner.rooms.create_versus_room(client_id, room_name) else {
                inner.send_to(
                    client_id,
                    json!({
                      "type": "error",
                      "ok": false,
                      "error": { "code": "ROOM_LIMIT_REACHED", "message": "Se alcanzo el maximo de salas" }
                    }),
                );
                return;
            };
            if let Some(name) = message.get("playerName").and_then(Value::as_str) {
                if let Some(entry) = inner.clients.get_mut(client_id) {
                    entry.name = name.trim().chars().take(24).collect();
                }
            }
            if let Some(character) = message.get("character").and_then(Value::as_str) {
                if let Some(entry) = inner.clients.get_mut(client_id) {
                    entry.character = Some(character.trim().chars().take(96).collect());
                }
            }
            join_room_internal(&mut inner, client_id, &room_id);
        }
        "join_room" => {
            let room_id = message
                .get("roomId")
                .and_then(Value::as_str)
                .unwrap_or("")
                .trim()
                .to_string();
            if room_id.is_empty() {
                inner.send_to(
                    client_id,
                    json!({
                      "type": "error",
                      "ok": false,
                      "error": { "code": "ROOM_NOT_FOUND", "message": "Sala no encontrada" }
                    }),
                );
                return;
            }
            if let Some(name) = message.get("playerName").and_then(Value::as_str) {
                if let Some(entry) = inner.clients.get_mut(client_id) {
                    entry.name = name.trim().chars().take(24).collect();
                }
            }
            if let Some(character) = message.get("character").and_then(Value::as_str) {
                if let Some(entry) = inner.clients.get_mut(client_id) {
                    entry.character = Some(character.trim().chars().take(96).collect());
                }
            }
            join_room_internal(&mut inner, client_id, &room_id);
        }
        "leave_room" => {
            leave_room_internal(&mut inner, client_id, true);
        }
        "room_set_versus_type" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let is_host = inner
                .rooms
                .rooms
                .get(&room_id)
                .and_then(|r| r.host_id.as_deref())
                == Some(client_id);
            if !is_host {
                inner.send_to(
                    client_id,
                    json!({
                      "type":"error",
                      "ok": false,
                      "error": { "code":"FORBIDDEN", "message":"Solo el host puede configurar el versus" }
                    }),
                );
                return;
            }
            let Some(vs) = message
                .get("versusType")
                .and_then(Value::as_str)
                .and_then(VersusType::from_wire)
            else {
                inner.send_to(
                    client_id,
                    json!({
                      "type":"error",
                      "ok": false,
                      "error": { "code":"INVALID_VERSUS_TYPE", "message":"Tipo de versus invalido" }
                    }),
                );
                return;
            };
            if !inner.rooms.set_versus_type(&room_id, vs) {
                inner.send_to(
                    client_id,
                    json!({
                      "type":"error",
                      "ok": false,
                      "error": { "code":"TOO_MANY_PLAYERS", "message":"Hay demasiados jugadores para este tipo" }
                    }),
                );
                return;
            }
            inner.broadcast_room_state(&room_id);
            inner.broadcast_rooms_list_all();
        }
        "versus_set_ready" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let ready = message.get("ready").and_then(Value::as_bool).unwrap_or(false);
            if inner.rooms.set_ready(&room_id, client_id, ready) {
                inner.broadcast_room_state(&room_id);
            }
        }
        "versus_switch_team" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let target = message
                .get("team")
                .and_then(Value::as_str)
                .and_then(Team::from_wire);
            if inner.rooms.switch_team(&room_id, client_id, target) {
                inner.broadcast_room_state(&room_id);
            }
        }
        "start_game" | "end_game" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let is_host = inner
                .rooms
                .rooms
                .get(&room_id)
                .and_then(|r| r.host_id.as_deref())
                == Some(client_id);
            if !is_host {
                inner.send_to(
                    client_id,
                    json!({
                      "type":"error",
                      "ok": false,
                      "error": { "code":"FORBIDDEN", "message":"Solo el host puede cambiar el estado de partida" }
                    }),
                );
                return;
            }
            if event_type == "start_game" {
                match inner.rooms.validate_start(&room_id) {
                    Ok(()) => {}
                    Err(err) => {
                        let (code, message) = match err {
                            StartValidationError::MissingVersusType => {
                                ("VERSUS_TYPE_REQUIRED", "Debes elegir 1v1 o 2v2 antes de iniciar")
                            }
                            StartValidationError::NotEnoughPlayers => {
                                ("NOT_ENOUGH_PLAYERS", "No hay suficientes jugadores")
                            }
                            StartValidationError::UnbalancedTeams => {
                                ("UNBALANCED_TEAMS", "Equipos desbalanceados")
                            }
                            StartValidationError::NotAllReady => {
                                ("NOT_ALL_READY", "Todos los jugadores deben estar Ready")
                            }
                        };
                        inner.send_to(
                            client_id,
                            json!({
                              "type":"error",
                              "ok": false,
                              "error": { "code": code, "message": message }
                            }),
                        );
                        return;
                    }
                }
            }
            if let Some(room) = inner.rooms.rooms.get_mut(&room_id) {
                room.status = if event_type == "start_game" {
                    crate::rooms::RoomStatus::InGame
                } else {
                    crate::rooms::RoomStatus::Finished
                };
            }
            if let Some(summary) = inner.room_summary_json(&room_id) {
                inner.broadcast_room(
                    &room_id,
                    json!({
                      "type":"game_state",
                      "ok": true,
                      "data": {
                        "roomId": summary.get("id").cloned().unwrap_or(Value::Null),
                        "status": summary.get("status").cloned().unwrap_or(Value::Null),
                        "hostId": summary.get("hostId").cloned().unwrap_or(Value::Null),
                        "mode": summary.get("mode").cloned().unwrap_or(Value::Null),
                        "versusType": summary.get("versusType").cloned().unwrap_or(Value::Null),
                        "requiredPlayers": summary.get("requiredPlayers").cloned().unwrap_or(Value::Null),
                        "maxPlayers": summary.get("maxPlayers").cloned().unwrap_or(Value::Null),
                        "weather": summary.get("weather").cloned().unwrap_or(Value::Null),
                        "battleTheme": summary.get("battleTheme").cloned().unwrap_or(Value::Null)
                      }
                    }),
                    None,
                );
                inner.broadcast_room_state(&room_id);
                inner.broadcast_rooms_list_all();
            }
        }
        "chat_message" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let text = message
                .get("text")
                .and_then(Value::as_str)
                .unwrap_or("")
                .trim()
                .chars()
                .take(180)
                .collect::<String>();
            if text.is_empty() {
                return;
            }
            inner.broadcast_room(
                &room_id,
                json!({
                  "type":"chat_message",
                  "ok": true,
                  "data": {
                    "playerId": client_id,
                    "playerName": client.name,
                    "text": text,
                    "ts": now_ms()
                  }
                }),
                None,
            );
        }
        "player_funny" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            inner.broadcast_room(
                &room_id,
                json!({
                  "type":"player_funny",
                  "ok": true,
                  "data": {
                    "playerId": client_id,
                    "ts": now_ms()
                  }
                }),
                Some(client_id),
            );
        }
        "player_shoot" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status.as_wire() != "in_game" {
                return;
            }
            let origin = message.get("origin");
            let direction = message.get("direction");
            let (
                Some(ox),
                Some(oy),
                Some(oz),
                Some(dx),
                Some(dy),
                Some(dz),
            ) = (
                origin.and_then(|v| v.get("x")).and_then(Value::as_f64),
                origin.and_then(|v| v.get("y")).and_then(Value::as_f64),
                origin.and_then(|v| v.get("z")).and_then(Value::as_f64),
                direction.and_then(|v| v.get("x")).and_then(Value::as_f64),
                direction.and_then(|v| v.get("y")).and_then(Value::as_f64),
                direction.and_then(|v| v.get("z")).and_then(Value::as_f64),
            ) else {
                return;
            };
            let distance = message.get("distance").and_then(Value::as_f64).unwrap_or(100.0);
            let distance = clamp(distance, 0.0, 300.0);
            inner.broadcast_room(
                &room_id,
                json!({
                  "type":"player_shoot",
                  "ok": true,
                  "data": {
                    "playerId": client_id,
                    "character": client.character,
                    "origin": { "x": ox, "y": oy, "z": oz },
                    "direction": { "x": dx, "y": dy, "z": dz },
                    "distance": distance,
                    "ts": now_ms()
                  }
                }),
                None,
            );
        }
        "player_respawn" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let Some(entry) = inner.clients.get_mut(client_id) else {
                return;
            };
            entry.state = default_player_state();
            entry.state_ts = now_ms();
            let position = json!({
              "x": entry.state.position.x,
              "y": entry.state.position.y,
              "z": entry.state.position.z
            });
            inner.broadcast_room(
                &room_id,
                json!({
                  "type":"player_respawned",
                  "ok": true,
                  "data": {
                    "playerId": client_id,
                    "position": position,
                    "health": 100,
                    "shield": 0,
                    "mana": 100,
                    "ts": now_ms()
                  }
                }),
                None,
            );
            inner.broadcast_room_state(&room_id);
        }
        "player_move" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status.as_wire() != "in_game" {
                return;
            }

            let position = message.get("position");
            let rotation = message.get("rotation");
            let (
                Some(px),
                Some(py),
                Some(pz),
                Some(yaw),
                Some(pitch),
            ) = (
                position.and_then(|v| v.get("x")).and_then(Value::as_f64),
                position.and_then(|v| v.get("y")).and_then(Value::as_f64),
                position.and_then(|v| v.get("z")).and_then(Value::as_f64),
                rotation.and_then(|v| v.get("yaw")).and_then(Value::as_f64),
                rotation.and_then(|v| v.get("pitch")).and_then(Value::as_f64),
            ) else {
                return;
            };

            let jumping = message.get("jumping").and_then(Value::as_bool).unwrap_or(false);
            let moving = message.get("moving").and_then(Value::as_bool).unwrap_or(false);

            let next_state = PlayerState {
                position: Vec3 {
                    x: clamp(px, -200.0, 200.0),
                    y: clamp(py, 0.5, 4.0),
                    z: clamp(pz, -200.0, 200.0),
                },
                rotation: Rotation {
                    yaw: clamp(yaw, -std::f64::consts::PI * 100.0, std::f64::consts::PI * 100.0),
                    pitch: clamp(
                        pitch,
                        -std::f64::consts::FRAC_PI_2,
                        std::f64::consts::FRAC_PI_2,
                    ),
                },
                jumping,
                moving,
            };
            let ts = now_ms();
            if let Some(entry) = inner.clients.get_mut(client_id) {
                entry.state = next_state.clone();
                entry.state_ts = ts;
            }

            inner.broadcast_room(
                &room_id,
                json!({
                  "type":"player_move",
                  "ok": true,
                  "data": {
                    "playerId": client_id,
                    "character": client.character,
                    "position": {
                      "x": next_state.position.x,
                      "y": next_state.position.y,
                      "z": next_state.position.z
                    },
                    "rotation": {
                      "yaw": next_state.rotation.yaw,
                      "pitch": next_state.rotation.pitch
                    },
                    "jumping": next_state.jumping,
                    "moving": next_state.moving,
                    "ts": ts
                  }
                }),
                Some(client_id),
            );
        }
        _ => {
            // During incremental migration we ignore unsupported events
            // so the frontend does not surface noisy errors.
            debug!(
                "[ws_rooms] unsupported event ignored client_id={} event={}",
                client_id, event_type
            );
        }
    }
}

fn join_room_internal(inner: &mut Inner, client_id: &str, room_id: &str) {
    if let Some(existing_room) = inner.clients.get(client_id).and_then(|c| c.room_id.clone()) {
        if existing_room != room_id {
            leave_room_internal(inner, client_id, false);
        }
    }

    match inner.rooms.join_room(room_id, client_id) {
        Ok(()) => {}
        Err(err) => {
            let (code, message) = match err {
                JoinError::RoomNotFound => ("ROOM_NOT_FOUND", "Sala no encontrada"),
                JoinError::RoomFull => ("ROOM_FULL", "La sala alcanzo el maximo de jugadores"),
                JoinError::MatchAlreadyStarted => ("MATCH_ALREADY_STARTED", "La partida versus ya inicio"),
            };
            inner.send_to(
                client_id,
                json!({
                  "type":"error",
                  "ok": false,
                  "error": { "code": code, "message": message }
                }),
            );
            return;
        }
    }
    if let Some(client) = inner.clients.get_mut(client_id) {
        client.room_id = Some(room_id.to_string());
    }
    if let Some(state) = inner.room_state_json(room_id) {
        inner.send_to(client_id, json!({ "type": "room_joined", "ok": true, "data": state }));
    }
    if let Some(player) = inner.player_json(room_id, client_id) {
        inner.broadcast_room(
            room_id,
            json!({
              "type":"player_joined",
              "ok": true,
              "data": { "player": player, "roomId": room_id }
            }),
            Some(client_id),
        );
    }
    inner.broadcast_room_state(room_id);
    inner.broadcast_rooms_list_all();
}

fn leave_room_internal(inner: &mut Inner, client_id: &str, send_left_room: bool) {
    let Some(room_id) = inner.clients.get(client_id).and_then(|c| c.room_id.clone()) else {
        if send_left_room {
            inner.send_to(client_id, json!({ "type": "left_room", "ok": true, "data": Value::Null }));
        }
        return;
    };
    inner.rooms.leave_room(&room_id, client_id);
    if let Some(client) = inner.clients.get_mut(client_id) {
        client.room_id = None;
    }
    inner.broadcast_room(
        &room_id,
        json!({
          "type":"player_left",
          "ok": true,
          "data": { "playerId": client_id, "roomId": room_id }
        }),
        Some(client_id),
    );
    inner.broadcast_room_state(&room_id);
    inner.broadcast_rooms_list_all();
    if send_left_room {
        inner.send_to(client_id, json!({ "type": "left_room", "ok": true, "data": Value::Null }));
    }
}

fn default_player_state() -> PlayerState {
    PlayerState {
        position: Vec3 {
            x: 0.0,
            y: 1.7,
            z: 0.0,
        },
        rotation: Rotation { yaw: 0.0, pitch: 0.0 },
        jumping: false,
        moving: false,
    }
}

fn player_state_json(state: &PlayerState) -> Value {
    json!({
      "position": {
        "x": state.position.x,
        "y": state.position.y,
        "z": state.position.z
      },
      "rotation": {
        "yaw": state.rotation.yaw,
        "pitch": state.rotation.pitch
      },
      "jumping": state.jumping,
      "moving": state.moving
    })
}

fn clamp(value: f64, min: f64, max: f64) -> f64 {
    value.max(min).min(max)
}

fn now_ms() -> i64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis() as i64
}
