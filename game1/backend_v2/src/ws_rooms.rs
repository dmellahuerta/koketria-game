use std::{
    collections::{HashMap, HashSet},
    sync::Arc,
    time::{SystemTime, UNIX_EPOCH},
};

use axum::extract::ws::{Message as AxumWsMessage, WebSocket};
use futures_util::{sink::SinkExt, stream::StreamExt};
use serde_json::{Value, json};
use tokio::sync::{Mutex, mpsc};
use tokio::time::{Duration, MissedTickBehavior, interval, sleep};
use tracing::{debug, info, warn};

use crate::rooms::{
    JoinError, RoomManager, RoomMode, RoomStatus, StartValidationError, Team, VersusType,
};

pub struct WsRoomsState {
    inner: Mutex<Inner>,
}

struct Inner {
    rooms: RoomManager,
    clients: HashMap<String, ClientSession>,
    room_meta: HashMap<String, RoomMeta>,
    client_seq: u64,
}

#[derive(Clone)]
struct RoomMeta {
    weather: String,
    battle_theme: String,
    map_seed: i64,
    map_collision_hash: String,
    map_profile: MapProfile,
    map_collision: Vec<MapBox>,
    mana_pickups: Vec<PickupState>,
    shield_pickups: Vec<PickupState>,
    health_pickups: Vec<PickupState>,
}

#[derive(Clone)]
struct MapProfile {
    axis_x: f64,
    axis_z: f64,
    amp1: f64,
    amp2: f64,
    amp3: f64,
    freq1: f64,
    freq2: f64,
    freq3: f64,
    phase1: f64,
    phase2: f64,
    phase3: f64,
}

#[derive(Clone)]
struct MapBox {
    min_x: f64,
    max_x: f64,
    min_y: f64,
    max_y: f64,
    min_z: f64,
    max_z: f64,
}

#[derive(Clone)]
struct PickupState {
    x: f64,
    z: f64,
    respawn_at_ms: i64,
}

#[derive(Clone)]
struct ClientSession {
    id: String,
    name: String,
    character: Option<String>,
    room_id: Option<String>,
    state: PlayerState,
    state_ts: i64,
    combat: CombatState,
    kills: i64,
    deaths: i64,
    latency_ms: f64,
    latency_probe_seq: u64,
    latency_probe_sent_at: i64,
    latency_probe_id: u64,
    state_history: Vec<StateSnapshot>,
    last_shoot_req_at_ms: i64,
    last_special_req_at_ms: i64,
    last_pickup_req_at_ms: i64,
    last_reload_req_at_ms: i64,
    last_respawn_req_at_ms: i64,
    is_bot: bool,
    bot_orbit_phase: f64,
    bot_orbit_radius: f64,
    bot_orbit_speed: f64,
    bot_move_speed: f64,
    tx: mpsc::UnboundedSender<String>,
}

#[derive(Clone)]
struct StateSnapshot {
    ts: i64,
    position: Vec3,
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

#[derive(Clone)]
struct CombatState {
    health: f64,
    shield: f64,
    mana: f64,
    ammo_in_mag: i64,
    ammo_reserve: i64,
    reload_ends_at_ms: i64,
    pending_health_regen: f64,
    last_health_regen_at: i64,
    last_mana_regen_at: i64,
    last_shot_at: i64,
    alive: bool,
    respawn_available_at_ms: i64,
    lunar_cd_until_ms: i64,
    silent_cd_until_ms: i64,
    neoorphen_cd_until_ms: i64,
    pumori_cd_until_ms: i64,
}

impl WsRoomsState {
    pub fn new(max_custom_rooms: usize, max_players_per_room: usize) -> Arc<Self> {
        let mut rooms = RoomManager::new(max_custom_rooms, max_players_per_room);
        rooms.ensure_server_room("main", "Main");
        let mut room_meta = HashMap::new();
        room_meta.insert("main".to_string(), RoomMeta::random_for("main"));
        Arc::new(Self {
            inner: Mutex::new(Inner {
                rooms,
                clients: HashMap::new(),
                room_meta,
                client_seq: 0,
            }),
        })
    }
}

const MAX_HEALTH: f64 = 100.0;
const MAX_SHIELD: f64 = 25.0;
const START_SHIELD: f64 = 0.0;
const MAX_MANA: f64 = 100.0;
const MAX_AMMO_IN_MAG: i64 = 30;
const MAX_AMMO_TOTAL: i64 = 120;
const AMMO_PICKUP_AMOUNT: i64 = 12;
const RELOAD_TIME_MS: i64 = 1_200;
const MANA_PICKUP_AMOUNT: f64 = 20.0;
const SHIELD_PICKUP_AMOUNT: f64 = 25.0;
const HEALTH_PICKUP_REGEN_AMOUNT: f64 = MAX_HEALTH / 3.0;
const HEALTH_REGEN_PER_SECOND: f64 = 18.0;
const MANA_REGEN_PER_SECOND: f64 = 12.0;
const HIT_DAMAGE: f64 = 50.0;
const SHIELD_DAMAGE_REDUCTION: f64 = 0.6;
const SHIELD_HIT_COST_PER_HIT: f64 = 25.0;
const HEADSHOT_RADIUS: f64 = 0.62;
const BODYSHOT_RADIUS: f64 = 1.15;
const TORSO_RADIUS: f64 = 1.02;
const TORSO_CAPSULE_RADIUS: f64 = 0.78;
const LEGS_CAPSULE_RADIUS: f64 = 0.66;
const CAPSULE_SAMPLE_STEPS: usize = 7;
const HEAD_CENTER_OFFSET_Y: f64 = 0.18;
const BODY_CENTER_OFFSET_Y: f64 = -0.45;
const LUNAR_SPECIAL_COOLDOWN_MS: i64 = 30_000;
const SILENT_SPECIAL_COOLDOWN_MS: i64 = 5_000;
const NEOORPHEN_SPECIAL_COOLDOWN_MS: i64 = 30_000;
const PUMORI_SPECIAL_COOLDOWN_MS: i64 = 30_000;
const LUNAR_SPECIAL_DURATION_MS: i64 = 5_000;
const NEOORPHEN_SPECIAL_DURATION_MS: i64 = 5_000;
const LUNAR_SPECIAL_WAVE_INTERVAL_MS: i64 = 420;
const NEOORPHEN_SPECIAL_WAVE_INTERVAL_MS: i64 = 320;
const LUNAR_STRIKES_PER_WAVE: usize = 16;
const NEOORPHEN_STRIKES_PER_WAVE: usize = 18;
const FFA_KILLS_TO_WIN: i64 = 20;
const VERSUS_1V1_KILLS_TO_WIN: i64 = 5;
const VERSUS_2V2_KILLS_TO_WIN: i64 = 20;
const ROUND_RESET_SECONDS: i64 = 10;
const FFA_RESPAWN_MS: i64 = 10_000;
const VERSUS_RESPAWN_MS: i64 = 3_000;
const WEATHER_TYPES: &[&str] = &["rainy", "sunny", "night", "snow"];
const BATTLE_THEMES: &[&str] = &["battle1", "battle2", "battle3"];
const SPAWN_BASE_Y: f64 = 1.7;
const SPAWN_INNER_RADIUS: f64 = 22.0;
const SPAWN_OUTER_RADIUS: f64 = 44.0;
const SPAWN_POINT_COUNT: usize = 20;
const MAP_PILLAR_COUNT: usize = 220;
const MAP_AXIS_X_BASE: f64 = 118.0;
const MAP_AXIS_Z_BASE: f64 = 96.0;
const MAP_BOUNDARY_MIN_RADIUS: f64 = 0.74;
const MAP_BOUNDARY_MAX_RADIUS: f64 = 1.24;
const PLAYER_COLLISION_RADIUS: f64 = 0.55;
const PLAYER_PILLAR_COLLISION_FACTOR: f64 = 0.82;
const PLAYER_MAX_SPEED_UNITS_PER_SECOND: f64 = 13.5;
const PLAYER_MAX_MOVE_DT_MS: i64 = 220;
const PLAYER_MOVE_TOLERANCE_UNITS: f64 = 0.85;
const MIN_WALL_HIT_DISTANCE: f64 = 0.12;
const GROUND_HIT_Y: f64 = 0.2;
const MAGIC_ATTACK_INTERVAL_MS: i64 = 1000;
const BULLET_ATTACK_INTERVAL_MS: i64 = 125;
const MANA_COST_PER_SHOT: f64 = 34.0;
const MAX_ORIGIN_DRIFT: f64 = 2.8;
const MAX_AIM_ANGLE_DELTA_DEG: f64 = 95.0;
const LAG_COMP_BULLET_MS: i64 = 120;
const LAG_COMP_MAGIC_MS: i64 = 150;
const LAG_COMP_RTT_FACTOR: f64 = 0.35;
const LAG_COMP_EXTRA_MAX_MS: i64 = 120;
const STATE_HISTORY_WINDOW_MS: i64 = 1500;
const SPECIAL_HIT_DAMAGE: f64 = HIT_DAMAGE * 0.5;
const LUNAR_SPECIAL_HIT_DAMAGE: f64 = SPECIAL_HIT_DAMAGE;
const NEOORPHEN_SPECIAL_HIT_DAMAGE: f64 = SPECIAL_HIT_DAMAGE;
const PUMORI_SPECIAL_HIT_DAMAGE: f64 = SPECIAL_HIT_DAMAGE;
const NORMAL_SHOCKWAVE_RADIUS: f64 = 2.1;
const NORMAL_SHOCKWAVE_MIN_FACTOR: f64 = 0.18;
const NORMAL_SHOCKWAVE_MAX_FACTOR: f64 = 0.9;
const SILENT_SPECIAL_EXPLOSION_RADIUS: f64 = 2.0;
const SILENT_SPECIAL_MIN_FACTOR: f64 = 0.22;
const SILENT_SPECIAL_MAX_FACTOR: f64 = 1.0;
const LUNAR_STRIKE_AOE_RADIUS: f64 = 2.1;
const LUNAR_SPECIAL_MIN_FACTOR: f64 = 0.28;
const LUNAR_SPECIAL_MAX_FACTOR: f64 = 1.0;
const NEOORPHEN_STRIKE_AOE_RADIUS: f64 = 2.1;
const NEO_SPECIAL_MIN_FACTOR: f64 = 0.28;
const NEO_SPECIAL_MAX_FACTOR: f64 = 1.0;
const SILENT_SPECIAL_MAX_DISTANCE: f64 = 90.0;
const SILENT_SPECIAL_PROJECTILE_SPEED: f64 = 85.0;
const LUNAR_SPECIAL_IMPACT_DELAY_MS: u64 = 460;
const NEOORPHEN_SPECIAL_IMPACT_DELAY_MS: u64 = 620;
const LUNAR_SPECIAL_MIN_RADIUS: f64 = 6.0;
const LUNAR_SPECIAL_MAX_RADIUS: f64 = 28.0;
const NEO_SPECIAL_MIN_RADIUS: f64 = 5.0;
const NEO_SPECIAL_MAX_RADIUS: f64 = 24.0;
const PUMORI_ORBIT_DURATION_MS: i64 = 10_000;
const PUMORI_ORBIT_DAMAGE_TICK_MS: i64 = 110;
const PUMORI_ORBIT_DAMAGE_RADIUS: f64 = 22.0;
const PUMORI_ORBIT_SPAWN_INTERVAL_MS: i64 = 220;
const PUMORI_ORBIT_MAX_ACTIVE_HAMMERS: usize = 28;
const PUMORI_SPECIAL_EXPLOSION_RADIUS: f64 = 1.4;
const PUMORI_SPECIAL_MIN_FACTOR: f64 = 0.35;
const PUMORI_SPECIAL_MAX_FACTOR: f64 = 1.0;
const PUMORI_HAMMER_HEAD_RADIUS: f64 = 0.5;
const PUMORI_HAMMER_BODY_RADIUS: f64 = 0.95;
const PUMORI_ORBIT_CENTER_HEIGHT: f64 = 0.25;
const PUMORI_ORBIT_HEIGHT_WAVE: f64 = 0.18;
const SERVER_LATENCY_PING_INTERVAL_MS: u64 = 200;
const LATENCY_SMOOTH_ALPHA: f64 = 0.28;
const MAGIC_IMPACT_REVALIDATION_MARGIN: f64 = 0.24;
const MAGIC_IMPACT_REVALIDATION_SPEED_FACTOR: f64 = 0.012;
const MAGIC_IMPACT_REVALIDATION_SPEED_MAX: f64 = 0.16;
const MAGIC_IMPACT_REVALIDATION_WINDOW_MS: i64 = 90;
const SHOOT_REQ_MIN_INTERVAL_MS: i64 = 20;
const SPECIAL_REQ_MIN_INTERVAL_MS: i64 = 140;
const PICKUP_REQ_MIN_INTERVAL_MS: i64 = 90;
const RELOAD_REQ_MIN_INTERVAL_MS: i64 = 120;
const RESPAWN_REQ_MIN_INTERVAL_MS: i64 = 220;
const HITBOX_MOTION_INFLATE_FACTOR: f64 = 0.018;
const HITBOX_MOTION_INFLATE_MAX: f64 = 0.28;
const HITBOX_MOTION_INFLATE_HEAD_MAX: f64 = 0.06;
const HITREG_SWEEP_BASE_WINDOW_MS: i64 = 36;
const HITREG_SWEEP_SPEED_WINDOW_FACTOR: f64 = 3.0;
const HITREG_SWEEP_MAX_WINDOW_MS: i64 = 84;
const MANA_PICKUP_COUNT: usize = 50;
const SHIELD_PICKUP_COUNT: usize = 30;
const HEALTH_PICKUP_COUNT: usize = 20;
const PICKUP_RESPAWN_MS: i64 = 60_000;
const PICKUP_TAKE_RADIUS: f64 = 1.35;
const PICKUP_CLIENT_POS_MAX_DRIFT: f64 = 3.0;

fn pickup_trace_enabled() -> bool {
    match std::env::var("WS_PICKUP_TRACE") {
        Ok(value) => matches!(
            value.trim().to_ascii_lowercase().as_str(),
            "1" | "true" | "yes" | "on"
        ),
        Err(_) => false,
    }
}

fn log_pickup_trace(
    event: &str,
    client_id: &str,
    room_id: &str,
    index: usize,
    accepted: bool,
    reason: &str,
    player_pos: (f64, f64),
    client_pos: Option<(f64, f64)>,
) {
    if !pickup_trace_enabled() {
        return;
    }
    debug!(
        "[ws_rooms][pickup] event={} client_id={} room_id={} index={} accepted={} reason={} player=({:.3},{:.3}) client_pos={:?}",
        event,
        client_id,
        room_id,
        index,
        accepted,
        reason,
        player_pos.0,
        player_pos.1,
        client_pos
    );
}
const BOT_MAX_PER_ROOM: usize = 8;
const BOT_MOVE_TICK_MS: u64 = 60;
const BOT_SHOOT_TICK_MS: u64 = 1250;
const BOT_RESPAWN_TICK_MS: u64 = 700;
const BOT_SPECIAL_TICK_MS: u64 = 650;
const BOT_PILLAR_COLLISION_RADIUS_FACTOR: f64 = 1.2;
const RADIAL_LOS_CLEARANCE_UNITS: f64 = 0.24;
const RADIAL_VERTICAL_FACTOR: f64 = 0.35;
const RADIAL_VERTICAL_MAX_DELTA: f64 = 1.6;

fn parse_addbot_count(text: &str) -> Option<usize> {
    let mut parts = text.split_whitespace();
    let cmd = parts.next()?;
    if !cmd.eq_ignore_ascii_case("/addbot") {
        return None;
    }
    let requested = parts
        .next()
        .and_then(|v| v.parse::<usize>().ok())
        .unwrap_or(1);
    Some(requested.clamp(1, BOT_MAX_PER_ROOM))
}

fn compute_rewind_timestamp(
    now_ms_v: i64,
    client_shot_ts: Option<i64>,
    base_rewind_ms: i64,
    latency_ms: f64,
) -> i64 {
    let dynamic_extra = ((latency_ms * LAG_COMP_RTT_FACTOR).round() as i64).clamp(0, LAG_COMP_EXTRA_MAX_MS);
    let rewind_floor = now_ms_v - STATE_HISTORY_WINDOW_MS;
    let fallback = now_ms_v - (base_rewind_ms + dynamic_extra);
    match client_shot_ts {
        Some(ts) => clamp_i64(ts, rewind_floor, now_ms_v),
        None => clamp_i64(fallback, rewind_floor, now_ms_v),
    }
}

#[derive(Clone)]
struct PumoriOrbitHammer {
    spawn_at_ms: i64,
    base_angle: f64,
    max_radius: f64,
    position: Vec3,
    active: bool,
}

impl RoomMeta {
    fn random_for(room_id: &str) -> Self {
        let seed = room_seed(room_id, now_ms());
        let map_seed = positive_seed(seed);
        let map_profile = create_map_profile(map_seed as u64);
        let map_collision = create_map_collision(map_seed as u64);
        let map_collision_hash = map_collision_hash(&map_profile, &map_collision);
        let mana_pickups = create_pickups(map_seed as u64, 0x85EB_CA6B, MANA_PICKUP_COUNT);
        let shield_pickups = create_pickups(map_seed as u64, 0xC2B2_AE35, SHIELD_PICKUP_COUNT);
        let health_pickups = create_pickups(map_seed as u64, 0x27D4_EB2F, HEALTH_PICKUP_COUNT);
        Self {
            weather: pick_from(WEATHER_TYPES, seed, None).to_string(),
            battle_theme: pick_from(BATTLE_THEMES, seed ^ 0x9E37_79B9, None).to_string(),
            map_seed,
            map_collision_hash,
            map_profile,
            map_collision,
            mana_pickups,
            shield_pickups,
            health_pickups,
        }
    }

    fn rotate(&mut self, room_id: &str) {
        let seed = room_seed(room_id, now_ms());
        self.weather = pick_from(WEATHER_TYPES, seed, Some(self.weather.as_str())).to_string();
        self.battle_theme = pick_from(
            BATTLE_THEMES,
            seed ^ 0x85EB_CA6B,
            Some(self.battle_theme.as_str()),
        )
        .to_string();
        reset_pickups(&mut self.mana_pickups);
        reset_pickups(&mut self.shield_pickups);
        reset_pickups(&mut self.health_pickups);
    }
}

impl Inner {
    fn ensure_room_meta(&mut self, room_id: &str) {
        if self.room_meta.contains_key(room_id) {
            return;
        }
        self.room_meta
            .insert(room_id.to_string(), RoomMeta::random_for(room_id));
    }

    fn cleanup_removed_room_meta(&mut self) {
        self.room_meta
            .retain(|room_id, _| self.rooms.rooms.contains_key(room_id));
    }

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

    fn lobby_waiting_players_json(&self) -> Vec<Value> {
        let mut players: Vec<Value> = self
            .clients
            .values()
            .filter(|client| !client.is_bot && client.room_id.is_none())
            .map(|client| {
                json!({
                  "id": client.id,
                  "name": client.name,
                  "character": client.character,
                })
            })
            .collect();
        players.sort_by(|a, b| {
            let an = a
                .get("name")
                .and_then(Value::as_str)
                .unwrap_or("")
                .to_ascii_lowercase();
            let bn = b
                .get("name")
                .and_then(Value::as_str)
                .unwrap_or("")
                .to_ascii_lowercase();
            an.cmp(&bn)
        });
        players
    }

    fn broadcast_lobby_waiting_clients(&self, payload: Value) {
        let text = payload.to_string();
        for client in self.clients.values() {
            if client.is_bot || client.room_id.is_some() {
                continue;
            }
            let _ = client.tx.send(text.clone());
        }
    }

    fn broadcast_lobby_presence(&self) {
        self.broadcast_lobby_waiting_clients(json!({
          "type": "lobby_presence",
          "ok": true,
          "data": {
            "players": self.lobby_waiting_players_json()
          }
        }));
    }

    fn broadcast_lobby_chat(&self, from_client_id: &str, from_name: &str, text: &str, ts: i64) {
        self.broadcast_lobby_waiting_clients(json!({
          "type":"lobby_chat_message",
          "ok": true,
          "data": {
            "playerId": from_client_id,
            "playerName": from_name,
            "text": text,
            "ts": ts
          }
        }));
    }

    fn room_summary_json(&self, room_id: &str) -> Option<Value> {
        let room = self.rooms.rooms.get(room_id)?;
        let meta = self.room_meta.get(room_id);
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
          "weather": meta.map(|m| m.weather.clone()).unwrap_or_else(|| "night".to_string()),
          "battleTheme": meta.map(|m| m.battle_theme.clone()).unwrap_or_else(|| "battle1".to_string()),
          "mapSeed": meta.map(|m| m.map_seed).unwrap_or(1),
          "mapCollisionHash": meta.map(|m| m.map_collision_hash.clone()).unwrap_or_else(|| "".to_string())
        }))
    }

    fn player_json(&self, room_id: &str, player_id: &str) -> Option<Value> {
        let room = self.rooms.rooms.get(room_id)?;
        let client = self.clients.get(player_id)?;
        let now = now_ms();
        let team = room.teams.get(player_id).copied().map(|t| t.as_wire());
        let ready = room.ready.get(player_id).copied().unwrap_or(false);
        let is_mana = is_mana_character(client.character.as_deref());
        let is_reloading = !is_mana && client.combat.reload_ends_at_ms > now;
        let reload_remaining_ms = if is_reloading {
            client.combat.reload_ends_at_ms - now
        } else {
            0
        };
        Some(json!({
          "id": client.id,
          "name": client.name,
          "character": client.character,
          "team": team,
          "ready": ready,
          "kills": client.kills,
          "deaths": client.deaths,
          "health": client.combat.health.round() as i64,
          "shield": client.combat.shield.round() as i64,
        "mana": client.combat.mana.round() as i64,
        "ammoInMag": client.combat.ammo_in_mag,
        "ammoReserve": client.combat.ammo_reserve,
        "respawnAvailableAtMs": client.combat.respawn_available_at_ms,
        "isReloading": is_reloading,
          "reloadRemainingMs": reload_remaining_ms,
          "alive": client.combat.alive,
          "lunarRainCooldownMs": current_special_cooldown_remaining_ms(
            &client.combat,
            client.character.as_deref(),
            now
          ),
          "pendingHealthRegen": client.combat.pending_health_regen,
          "state": player_state_json(&client.state),
          "ts": client.state_ts
        }))
    }

    fn room_state_json(&self, room_id: &str) -> Option<Value> {
        let room = self.rooms.rooms.get(room_id)?;
        let mut room_json = self.room_summary_json(room_id)?;
        if let Some(room_obj) = room_json.as_object_mut() {
            if let Some(meta) = self.room_meta.get(room_id) {
                room_obj.insert("pickups".to_string(), pickup_state_payload(meta, now_ms()));
            }
        }
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
        for room in self.rooms.rooms.values() {
            if !should_expose_room_in_list(room) {
                continue;
            }
            if let Some(summary) = self.room_summary_json(&room.id) {
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
                combat: default_combat_state(),
                kills: 0,
                deaths: 0,
                latency_ms: 0.0,
                latency_probe_seq: 0,
                latency_probe_sent_at: 0,
                latency_probe_id: 0,
                state_history: vec![StateSnapshot {
                    ts: now_ms(),
                    position: initial_state.position.clone(),
                }],
                last_shoot_req_at_ms: 0,
                last_special_req_at_ms: 0,
                last_pickup_req_at_ms: 0,
                last_reload_req_at_ms: 0,
                last_respawn_req_at_ms: 0,
                is_bot: false,
                bot_orbit_phase: 0.0,
                bot_orbit_radius: 0.0,
                bot_orbit_speed: 0.0,
                bot_move_speed: 0.0,
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
            "rooms": inner.public_rooms_json(),
            "lobby": {
              "players": inner.lobby_waiting_players_json()
            }
          }
        });
        (client_id, connected_payload)
    };
    info!("[ws_rooms] connected client_id={}", client_id);
    let _ = out_tx.send(connected_payload.to_string());
    {
        let inner = state.inner.lock().await;
        inner.broadcast_lobby_presence();
    }
    let ping_state = Arc::clone(&state);
    let ping_client_id = client_id.clone();
    let ping_task = tokio::spawn(async move {
        let mut ticker = interval(Duration::from_millis(SERVER_LATENCY_PING_INTERVAL_MS));
        ticker.set_missed_tick_behavior(MissedTickBehavior::Skip);
        loop {
            ticker.tick().await;
            let mut inner = ping_state.inner.lock().await;
            let now = now_ms();
            let Some(entry) = inner.clients.get_mut(&ping_client_id) else {
                break;
            };
            update_combat_regen(&mut entry.combat, now);
            entry.latency_probe_seq = entry.latency_probe_seq.wrapping_add(1);
            entry.latency_probe_id = entry.latency_probe_seq;
            entry.latency_probe_sent_at = now;
            let payload = json!({
              "type": "ping",
              "ok": true,
              "data": {
                "probeId": entry.latency_probe_id,
                "serverTs": now
              }
            });
            let _ = entry.tx.send(payload.to_string());
            let resources_payload =
                player_resources_payload(&entry.combat, entry.character.as_deref(), now);
            let _ = entry.tx.send(resources_payload.to_string());
            let room_id_for_public = entry.room_id.clone();
            let public_resources = Some((
                entry.combat.health.round() as i64,
                entry.combat.shield.round() as i64,
                entry.combat.mana.round() as i64,
            ));
            if let (Some(room_id), Some((health, shield, mana))) =
                (room_id_for_public, public_resources)
            {
                inner.broadcast_room(
                    &room_id,
                    json!({
                      "type":"player_resources_public",
                      "ok": true,
                      "data": {
                        "playerId": ping_client_id,
                        "health": health,
                        "shield": shield,
                        "mana": mana,
                        "ts": now
                      }
                    }),
                    Some(&ping_client_id),
                );
            }
        }
    });

    while let Some(next) = ws_rx.next().await {
        let msg = match next {
            Ok(v) => v,
            Err(err) => {
                let err_text = err.to_string();
                if err_text.contains("Connection reset without closing handshake") {
                    debug!("ws_rooms receive closed/reset connection: {}", err_text);
                } else {
                    warn!("ws_rooms receive error: {}", err_text);
                }
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
            debug!(
                "[ws_rooms] recv client_id={} event={}",
                client_id, event_type
            );
        }
        process_message(&state, &client_id, parsed).await;
    }

    let maybe_versus_countdown = {
        let mut inner = state.inner.lock().await;
        let countdown = leave_room_internal(&mut inner, &client_id, false);
        inner.clients.remove(&client_id);
        inner.broadcast_lobby_presence();
        countdown
    };
    if let Some((room_id, winner_team)) = maybe_versus_countdown {
        tokio::spawn(start_versus_room_deletion_countdown(
            Arc::clone(&state),
            room_id,
            winner_team,
        ));
    }
    info!("[ws_rooms] disconnected client_id={}", client_id);
    ping_task.abort();
    write_task.abort();
}

async fn process_message(state: &Arc<WsRoomsState>, client_id: &str, message: Value) {
    let event_type = message.get("type").and_then(Value::as_str).unwrap_or("");
    let mut inner = state.inner.lock().await;

    let Some(client) = inner.clients.get(client_id).cloned() else {
        return;
    };
    let now = now_ms();
    if !accept_rate_limited_event(&mut inner, client_id, event_type, now) {
        return;
    }

    match event_type {
        "list_rooms" => {
            inner.send_to(
                client_id,
                json!({ "type": "rooms_list", "ok": true, "data": inner.public_rooms_json() }),
            );
        }
        "set_profile" => {
            let mut changed = false;
            if let Some(name) = message.get("playerName").and_then(Value::as_str) {
                let trimmed = name.trim().chars().take(24).collect::<String>();
                if trimmed.chars().count() >= 2 {
                    if let Some(entry) = inner.clients.get_mut(client_id) {
                        if entry.name != trimmed {
                            entry.name = trimmed;
                            changed = true;
                        }
                    }
                }
            }
            if let Some(character) = message.get("character").and_then(Value::as_str) {
                let normalized = normalize_character(Some(character));
                if let Some(entry) = inner.clients.get_mut(client_id) {
                    if entry.character.as_deref() != Some(normalized.as_str()) {
                        entry.character = Some(normalized);
                        changed = true;
                    }
                }
            }
            if changed {
                inner.broadcast_lobby_presence();
            }
            if let Some(entry) = inner.clients.get(client_id) {
                inner.send_to(
                    client_id,
                    json!({
                      "type": "profile_updated",
                      "ok": true,
                      "data": {
                        "player": {
                          "id": entry.id,
                          "name": entry.name,
                          "character": entry.character
                        }
                      }
                    }),
                );
            }
        }
        "ping" => {
            // legacy ping from old clients, kept for compatibility.
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
        "pong" => {
            let probe_id = message.get("probeId").and_then(Value::as_u64).unwrap_or(0);
            let now = now_ms();
            let mut measured = None;
            if let Some(entry) = inner.clients.get_mut(client_id) {
                if probe_id != 0
                    && probe_id == entry.latency_probe_id
                    && entry.latency_probe_sent_at > 0
                    && now >= entry.latency_probe_sent_at
                {
                    let sample_ms = clamp((now - entry.latency_probe_sent_at) as f64, 0.0, 450.0);
                    let next_latency = if entry.latency_ms <= 0.0001 {
                        sample_ms
                    } else {
                        (entry.latency_ms * (1.0 - LATENCY_SMOOTH_ALPHA))
                            + (sample_ms * LATENCY_SMOOTH_ALPHA)
                    };
                    entry.latency_ms = clamp(next_latency, 0.0, 450.0);
                    measured = Some(entry.latency_ms);
                }
            }
            if let Some(latency_ms) = measured {
                inner.send_to(
                    client_id,
                    json!({
                      "type":"latency_update",
                      "ok": true,
                      "data": {
                        "latencyMs": latency_ms,
                        "probeId": probe_id,
                        "serverTs": now
                      }
                    }),
                );
            }
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
            inner.ensure_room_meta(&room_id);
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
            let maybe_versus_countdown = leave_room_internal(&mut inner, client_id, true);
            if let Some((room_id, winner_team)) = maybe_versus_countdown {
                tokio::spawn(start_versus_room_deletion_countdown(
                    Arc::clone(state),
                    room_id,
                    winner_team,
                ));
            }
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
            let ready = message
                .get("ready")
                .and_then(Value::as_bool)
                .unwrap_or(false);
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
                            StartValidationError::MissingVersusType => (
                                "VERSUS_TYPE_REQUIRED",
                                "Debes elegir 1v1 o 2v2 antes de iniciar",
                            ),
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
                    RoomStatus::InGame
                } else {
                    RoomStatus::Finished
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
            let Some(room_id) = client.room_id.clone() else {
                inner.broadcast_lobby_chat(client_id, &client.name, &text, now_ms());
                return;
            };
            if let Some(requested) = parse_addbot_count(&text) {
                let mut added_ids: Vec<String> = Vec::new();
                for _ in 0..requested {
                    let Some(bot_id) = handle_add_bot_command(&mut inner, &room_id) else {
                        break;
                    };
                    added_ids.push(bot_id);
                }
                if added_ids.is_empty() {
                    inner.send_to(
                        client_id,
                        system_chat_payload(
                            "No se pudo agregar bots (modo o capacidad).",
                            now_ms(),
                        ),
                    );
                } else {
                    inner.broadcast_room(
                        &room_id,
                        system_chat_payload(
                            &format!("Bots agregados: {} / {}", added_ids.len(), requested),
                            now_ms(),
                        ),
                        None,
                    );
                    for bot_id in added_ids {
                        let state_cloned = Arc::clone(state);
                        tokio::spawn(async move {
                            run_room_bot(state_cloned, bot_id).await;
                        });
                    }
                }
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
            let now = now_ms();
            let origin = message.get("origin");
            let direction = message.get("direction");
            let (Some(ox), Some(oy), Some(oz), Some(dx), Some(dy), Some(dz)) = (
                origin.and_then(|v| v.get("x")).and_then(Value::as_f64),
                origin.and_then(|v| v.get("y")).and_then(Value::as_f64),
                origin.and_then(|v| v.get("z")).and_then(Value::as_f64),
                direction.and_then(|v| v.get("x")).and_then(Value::as_f64),
                direction.and_then(|v| v.get("y")).and_then(Value::as_f64),
                direction.and_then(|v| v.get("z")).and_then(Value::as_f64),
            ) else {
                return;
            };
            let distance = message
                .get("distance")
                .and_then(Value::as_f64)
                .unwrap_or(100.0);
            let distance = clamp(distance, 0.0, 300.0);
            let reported_origin = Vec3 {
                x: clamp(ox, -250.0, 250.0),
                y: clamp(oy, 0.0, 10.0),
                z: clamp(oz, -250.0, 250.0),
            };
            let reported_direction = normalize_vec3(Vec3 {
                x: clamp(dx, -1.0, 1.0),
                y: clamp(dy, -1.0, 1.0),
                z: clamp(dz, -1.0, 1.0),
            });
            let Some(reported_direction) = reported_direction else {
                return;
            };
            let maybe_resources_payload: Option<Value>;
            let mut shot_blocked = false;
            let client_shot_ts = message.get("shotTs").and_then(Value::as_i64);
            let client_shot_id = message.get("shotId").and_then(Value::as_u64);
            let mut prepared_shot: Option<(Vec3, Vec3, Option<String>, f64, Option<i64>)> = None;
            {
                let Some(shooter) = inner.clients.get_mut(client_id) else {
                    return;
                };
                update_combat_regen(&mut shooter.combat, now);
                if !shooter.combat.alive {
                    return;
                }
                let shot_interval = get_shot_interval_ms(shooter.character.as_deref());
                let elapsed = now - shooter.combat.last_shot_at;
                if elapsed < shot_interval {
                    return;
                }
                let is_mana = is_mana_character(shooter.character.as_deref());
                if is_mana {
                    if shooter.combat.mana + 0.0001 < MANA_COST_PER_SHOT {
                        maybe_resources_payload = Some(player_resources_payload(
                            &shooter.combat,
                            shooter.character.as_deref(),
                            now,
                        ));
                        shot_blocked = true;
                    } else {
                        shooter.combat.mana = (shooter.combat.mana - MANA_COST_PER_SHOT).max(0.0);
                        maybe_resources_payload = Some(player_resources_payload(
                            &shooter.combat,
                            shooter.character.as_deref(),
                            now,
                        ));
                    }
                } else if shooter.combat.reload_ends_at_ms > now {
                    maybe_resources_payload = Some(player_resources_payload(
                        &shooter.combat,
                        shooter.character.as_deref(),
                        now,
                    ));
                    shot_blocked = true;
                } else if shooter.combat.ammo_in_mag <= 0 {
                    if shooter.combat.ammo_reserve > 0 {
                        shooter.combat.reload_ends_at_ms = now + RELOAD_TIME_MS;
                    }
                    maybe_resources_payload = Some(player_resources_payload(
                        &shooter.combat,
                        shooter.character.as_deref(),
                        now,
                    ));
                    shot_blocked = true;
                } else {
                    shooter.combat.ammo_in_mag = (shooter.combat.ammo_in_mag - 1).max(0);
                    maybe_resources_payload = Some(player_resources_payload(
                        &shooter.combat,
                        shooter.character.as_deref(),
                        now,
                    ));
                }
                if !shot_blocked {
                    shooter.combat.last_shot_at = now;
                    let server_origin = server_eye_origin_from_state(&shooter.state);
                    let origin = if distance_sq(&reported_origin, &server_origin).sqrt()
                        <= MAX_ORIGIN_DRIFT
                    {
                        reported_origin.clone()
                    } else {
                        server_origin
                    };
                    let server_direction =
                        server_aim_direction_from_rotation(&shooter.state.rotation);
                    let direction = match server_direction {
                        Some(server_dir)
                            if angle_between_degrees(&reported_direction, &server_dir)
                                > MAX_AIM_ANGLE_DELTA_DEG =>
                        {
                            server_dir
                        }
                        _ => reported_direction.clone(),
                    };
                    prepared_shot = Some((
                        origin,
                        direction,
                        shooter.character.clone(),
                        shooter.latency_ms,
                        client_shot_ts,
                    ));
                }
            }
            if let Some(payload) = maybe_resources_payload {
                inner.send_to(client_id, payload);
            }
            if shot_blocked {
                return;
            }
            let Some((origin, direction, character_for_shot, shooter_latency_ms, client_shot_ts)) = prepared_shot
            else {
                return;
            };
            inner.send_to(
                client_id,
                json!({
                  "type":"player_shot_ack",
                  "ok": true,
                  "data": {
                    "shotId": client_shot_id,
                    "ts": now
                  }
                }),
            );
            let is_mana = is_mana_character(character_for_shot.as_deref());
            let base_rewind = if is_mana {
                LAG_COMP_MAGIC_MS
            } else {
                LAG_COMP_BULLET_MS
            };
            let rewind_ts =
                compute_rewind_timestamp(now, client_shot_ts, base_rewind, shooter_latency_ms);
            let wall_hit_distance =
                resolve_wall_hit_distance(&inner, &room_id, &origin, &direction, distance);
            let ground_hit_distance = if is_mana && direction.y > -0.35 {
                None
            } else {
                resolve_ground_hit_distance(&origin, &direction, distance)
            };
            let effective_distance = match (wall_hit_distance, ground_hit_distance) {
                (Some(w), Some(g)) => w.min(g).min(distance),
                (Some(w), None) => w.min(distance),
                (None, Some(g)) => g.min(distance),
                (None, None) => distance,
            };
            inner.broadcast_room(
                &room_id,
                json!({
                  "type":"player_shoot",
                  "ok": true,
                  "data": {
                    "playerId": client_id,
                    "character": character_for_shot,
                    "origin": { "x": origin.x, "y": origin.y, "z": origin.z },
                    "direction": { "x": direction.x, "y": direction.y, "z": direction.z },
                    "distance": effective_distance,
                    "ts": now
                  }
                }),
                Some(client_id),
            );

            let hit = find_best_hit(
                &inner,
                &room_id,
                client_id,
                &origin,
                &direction,
                effective_distance,
                rewind_ts,
            );
            if let Some((victim_id, _headshot, hit_dist)) = hit {
                if is_mana {
                    let projectile_speed =
                        projectile_speed_units_per_second(character_for_shot.as_deref());
                    let travel_ms = ((hit_dist / projectile_speed.max(1.0)) * 1000.0).round();
                    let impact_delay_ms = (travel_ms as i64).clamp(30, 900) as u64;
                    let impact_point = Vec3 {
                        x: origin.x + (direction.x * hit_dist),
                        y: origin.y + (direction.y * hit_dist),
                        z: origin.z + (direction.z * hit_dist),
                    };
                    tokio::spawn(apply_delayed_authoritative_hit(
                        Arc::clone(state),
                        room_id.clone(),
                        client_id.to_string(),
                        victim_id.clone(),
                        false,
                        HIT_DAMAGE,
                        impact_point,
                        Some(now),
                        impact_delay_ms,
                        true,
                    ));
                } else {
                    inner.send_to(
                        client_id,
                        json!({
                          "type":"hit_confirm",
                          "ok": true,
                          "data": {
                            "victimId": victim_id,
                            "headshot": false,
                            "ts": now
                          }
                        }),
                    );
                    let winner = apply_hit_and_emit(
                        &mut inner, &room_id, client_id, &victim_id, false, HIT_DAMAGE, now,
                    );
                    if winner {
                        tokio::spawn(schedule_match_reset(
                            Arc::clone(state),
                            room_id.clone(),
                            ROUND_RESET_SECONDS as u64,
                        ));
                    }
                }
            } else {
                let impact_point = Vec3 {
                    x: origin.x + (direction.x * effective_distance),
                    y: origin.y + (direction.y * effective_distance),
                    z: origin.z + (direction.z * effective_distance),
                };
                if is_mana {
                    let projectile_speed =
                        projectile_speed_units_per_second(character_for_shot.as_deref());
                    let travel_ms =
                        ((effective_distance / projectile_speed.max(1.0)) * 1000.0).round();
                    let impact_delay_ms = (travel_ms as i64).clamp(30, 900) as u64;
                    tokio::spawn(apply_delayed_normal_shockwave_damage(
                        Arc::clone(state),
                        room_id.clone(),
                        client_id.to_string(),
                        impact_point,
                        impact_delay_ms,
                    ));
                } else {
                    let winner = apply_normal_shockwave_damage(
                        &mut inner,
                        &room_id,
                        client_id,
                        &impact_point,
                        NORMAL_SHOCKWAVE_RADIUS,
                        HIT_DAMAGE,
                        now,
                    );
                    if winner {
                        tokio::spawn(schedule_match_reset(
                            Arc::clone(state),
                            room_id.clone(),
                            ROUND_RESET_SECONDS as u64,
                        ));
                    }
                }
            }
        }
        "player_special_lunar_rain" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status.as_wire() != "in_game" {
                return;
            }

            let (origin, allow_cast, payload) = {
                let Some(entry) = inner.clients.get_mut(client_id) else {
                    return;
                };
                let now = now_ms();
                if !entry.combat.alive {
                    (
                        entry.state.position.clone(),
                        false,
                        player_resources_payload(&entry.combat, entry.character.as_deref(), now),
                    )
                } else {
                    let can_cast = now >= entry.combat.lunar_cd_until_ms;
                    if can_cast {
                        entry.combat.lunar_cd_until_ms = now + LUNAR_SPECIAL_COOLDOWN_MS;
                    }
                    (
                        entry.state.position.clone(),
                        can_cast,
                        player_resources_payload(&entry.combat, entry.character.as_deref(), now),
                    )
                }
            };
            inner.send_to(client_id, payload);
            if !allow_cast {
                return;
            }
            tokio::spawn(run_lunar_rain_special(
                Arc::clone(state),
                room_id.clone(),
                client_id.to_string(),
                origin,
            ));
        }
        "player_special_silent_cone" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status.as_wire() != "in_game" {
                return;
            }

            let (origin, allow_cast, payload, caster_latency_ms) = {
                let Some(entry) = inner.clients.get_mut(client_id) else {
                    return;
                };
                let now = now_ms();
                if !entry.combat.alive {
                    (
                        entry.state.position.clone(),
                        false,
                        player_resources_payload(&entry.combat, entry.character.as_deref(), now),
                        entry.latency_ms,
                    )
                } else {
                    let can_cast = now >= entry.combat.silent_cd_until_ms;
                    if can_cast {
                        entry.combat.silent_cd_until_ms = now + SILENT_SPECIAL_COOLDOWN_MS;
                    }
                    (
                        entry.state.position.clone(),
                        can_cast,
                        player_resources_payload(&entry.combat, entry.character.as_deref(), now),
                        entry.latency_ms,
                    )
                }
            };
            inner.send_to(client_id, payload);
            if !allow_cast {
                return;
            }
            let mut rays = Vec::new();
            for i in 0..50 {
                let t = (i as f64) / 50.0;
                let angle = t * std::f64::consts::TAU;
                rays.push(json!({
                  "direction": { "x": angle.cos(), "y": 0.0, "z": angle.sin() },
                  "distance": 90.0
                }));
            }
            inner.broadcast_room(
                &room_id,
                json!({
                  "type":"special_silent_cone",
                  "ok": true,
                  "data": {
                    "playerId": client_id,
                    "character": client.character,
                    "origin": { "x": origin.x, "y": origin.y, "z": origin.z },
                    "rays": rays,
                    "ts": now_ms()
                  }
                }),
                None,
            );
            let room_players: Vec<String> = inner
                .rooms
                .rooms
                .get(&room_id)
                .map(|r| r.players.iter().cloned().collect())
                .unwrap_or_default();
            let now_hit = now_ms();
            let rewind_ts = compute_rewind_timestamp(now_hit, None, LAG_COMP_MAGIC_MS, caster_latency_ms);
            let mut pending_impacts: Vec<(Vec3, u64)> = Vec::new();
            for victim_id in &room_players {
                if victim_id == client_id {
                    continue;
                }
                if is_friendly_fire_blocked(&inner, &room_id, client_id, victim_id) {
                    continue;
                }
                let Some(victim) = inner.clients.get(victim_id) else {
                    continue;
                };
                if !victim.combat.alive {
                    continue;
                }
                let rewound = client_position_at(victim, rewind_ts);
                let to_target = Vec3 {
                    x: rewound.x - origin.x,
                    y: rewound.y - origin.y,
                    z: rewound.z - origin.z,
                };
                let distance = distance_sq(&rewound, &origin).sqrt();
                if distance <= 0.0001 || distance > SILENT_SPECIAL_MAX_DISTANCE {
                    continue;
                }
                let Some(direction) = normalize_vec3(to_target) else {
                    continue;
                };
                if let Some(wall_distance) =
                    resolve_wall_hit_distance(&inner, &room_id, &origin, &direction, distance)
                {
                    if wall_distance + 0.2 < distance {
                        continue;
                    }
                }
                let delay_ms = ((distance / SILENT_SPECIAL_PROJECTILE_SPEED.max(1.0)) * 1000.0)
                    .round()
                    .clamp(25.0, 900.0) as u64;
                pending_impacts.push((rewound, delay_ms));
            }
            for (impact, delay_ms) in pending_impacts {
                tokio::spawn(apply_delayed_radial_falloff_damage(
                    Arc::clone(state),
                    room_id.clone(),
                    client_id.to_string(),
                    impact,
                    SILENT_SPECIAL_EXPLOSION_RADIUS,
                    HIT_DAMAGE,
                    SILENT_SPECIAL_MIN_FACTOR,
                    SILENT_SPECIAL_MAX_FACTOR,
                    delay_ms,
                ));
            }
        }
        "player_special_neoorphen_meteor" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status.as_wire() != "in_game" {
                return;
            }

            let (origin, allow_cast, payload) = {
                let Some(entry) = inner.clients.get_mut(client_id) else {
                    return;
                };
                let now = now_ms();
                if !entry.combat.alive {
                    (
                        entry.state.position.clone(),
                        false,
                        player_resources_payload(&entry.combat, entry.character.as_deref(), now),
                    )
                } else {
                    let can_cast = now >= entry.combat.neoorphen_cd_until_ms;
                    if can_cast {
                        entry.combat.neoorphen_cd_until_ms = now + NEOORPHEN_SPECIAL_COOLDOWN_MS;
                    }
                    (
                        entry.state.position.clone(),
                        can_cast,
                        player_resources_payload(&entry.combat, entry.character.as_deref(), now),
                    )
                }
            };
            inner.send_to(client_id, payload);
            if !allow_cast {
                return;
            }
            tokio::spawn(run_neoorphen_meteor_special(
                Arc::clone(state),
                room_id.clone(),
                client_id.to_string(),
                origin,
            ));
        }
        "player_special_pumori_orbit" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status.as_wire() != "in_game" {
                return;
            }

            let (allow_cast, payload) = {
                let Some(entry) = inner.clients.get_mut(client_id) else {
                    return;
                };
                let now = now_ms();
                if !entry.combat.alive {
                    (
                        false,
                        player_resources_payload(&entry.combat, entry.character.as_deref(), now),
                    )
                } else {
                    let can_cast = now >= entry.combat.pumori_cd_until_ms;
                    if can_cast {
                        entry.combat.pumori_cd_until_ms = now + PUMORI_SPECIAL_COOLDOWN_MS;
                    }
                    (
                        can_cast,
                        player_resources_payload(&entry.combat, entry.character.as_deref(), now),
                    )
                }
            };
            inner.send_to(client_id, payload);
            if !allow_cast {
                return;
            }
            inner.broadcast_room(
                &room_id,
                json!({
                  "type":"special_pumori_orbit_start",
                  "ok": true,
                  "data": {
                    "playerId": client_id,
                    "durationMs": PUMORI_ORBIT_DURATION_MS,
                    "ts": now_ms()
                  }
                }),
                None,
            );
            tokio::spawn(run_pumori_orbit_damage(
                Arc::clone(state),
                room_id.clone(),
                client_id.to_string(),
            ));
        }
        "player_respawn" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status != RoomStatus::InGame {
                return;
            }
            let now = now_ms();
            let can_respawn = inner
                .clients
                .get(client_id)
                .map(|entry| {
                    if entry.combat.alive {
                        return false;
                    }
                    // Fallback defensivo: si por desincronización no hay timestamp,
                    // permitimos respawn inmediato en vez de quedar bloqueado.
                    if entry.combat.respawn_available_at_ms <= 0 {
                        return true;
                    }
                    now >= entry.combat.respawn_available_at_ms
                })
                .unwrap_or(false);
            if !can_respawn {
                return;
            }
            let spawn = pick_spawn_position(&inner, &room_id, Some(client_id));
            let (position, health, shield, mana, ammo_in_mag, ammo_reserve) = {
                let Some(entry) = inner.clients.get_mut(client_id) else {
                    return;
                };
                entry.state = default_player_state();
                entry.state.position = spawn;
                entry.state_ts = now_ms();
                entry.combat = default_combat_state();
                entry.state_history.clear();
                entry.state_history.push(StateSnapshot {
                    ts: entry.state_ts,
                    position: entry.state.position.clone(),
                });
                (
                    json!({
                      "x": entry.state.position.x,
                      "y": entry.state.position.y,
                      "z": entry.state.position.z
                    }),
                    entry.combat.health.round() as i64,
                    entry.combat.shield.round() as i64,
                    entry.combat.mana.round() as i64,
                    entry.combat.ammo_in_mag,
                    entry.combat.ammo_reserve,
                )
            };
            inner.broadcast_room(
                &room_id,
                json!({
                  "type":"player_respawned",
                  "ok": true,
                  "data": {
                    "playerId": client_id,
                    "position": position,
                    "health": health,
                    "shield": shield,
                    "mana": mana,
                    "ammoInMag": ammo_in_mag,
                    "ammoReserve": ammo_reserve,
                    "isReloading": false,
                    "reloadRemainingMs": 0,
                    "ts": now_ms()
                  }
                }),
                None,
            );
            inner.broadcast_room_state(&room_id);
        }
        "player_reload" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status != RoomStatus::InGame {
                return;
            }
            let payload = {
                let Some(entry) = inner.clients.get_mut(client_id) else {
                    return;
                };
                let now = now_ms();
                update_combat_regen(&mut entry.combat, now);
                if !entry.combat.alive || is_mana_character(entry.character.as_deref()) {
                    return;
                }
                if entry.combat.reload_ends_at_ms <= now
                    && entry.combat.ammo_in_mag < MAX_AMMO_IN_MAG
                    && entry.combat.ammo_reserve > 0
                {
                    entry.combat.reload_ends_at_ms = now + RELOAD_TIME_MS;
                }
                player_resources_payload(&entry.combat, entry.character.as_deref(), now)
            };
            inner.send_to(client_id, payload);
        }
        "player_pickup_ammo" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status != RoomStatus::InGame {
                return;
            }
            let pickup_index = message.get("index").and_then(Value::as_u64).unwrap_or(u64::MAX) as usize;
            let client_pickup_position = message
                .get("position")
                .and_then(|v| {
                    let x = v.get("x").and_then(Value::as_f64)?;
                    let z = v.get("z").and_then(Value::as_f64)?;
                    if x.is_finite() && z.is_finite() {
                        Some((x, z))
                    } else {
                        None
                    }
                });
            let now = now_ms();
            let Some(player_state) = inner.clients.get(client_id).cloned() else {
                return;
            };
            if !player_state.combat.alive || is_mana_character(player_state.character.as_deref()) {
                log_pickup_trace(
                    "player_pickup_ammo",
                    client_id,
                    &room_id,
                    pickup_index,
                    false,
                    "invalid_character_or_dead",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
                return;
            }
            if player_state.combat.ammo_reserve >= MAX_AMMO_TOTAL {
                log_pickup_trace(
                    "player_pickup_ammo",
                    client_id,
                    &room_id,
                    pickup_index,
                    false,
                    "ammo_full",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
                return;
            }
            let consumed = if let Some(meta) = inner.room_meta.get_mut(&room_id) {
                consume_pickup(
                    &mut meta.mana_pickups,
                    pickup_index,
                    player_state.state.position.x,
                    player_state.state.position.z,
                    client_pickup_position,
                    now,
                )
            } else {
                None
            };
            if let Some(respawn_at) = consumed {
                log_pickup_trace(
                    "player_pickup_ammo",
                    client_id,
                    &room_id,
                    pickup_index,
                    true,
                    "consumed",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
                let payload = {
                    let Some(entry) = inner.clients.get_mut(client_id) else {
                        return;
                    };
                    update_combat_regen(&mut entry.combat, now);
                    entry.combat.ammo_reserve =
                        (entry.combat.ammo_reserve + AMMO_PICKUP_AMOUNT).min(MAX_AMMO_TOTAL);
                    player_resources_payload(&entry.combat, entry.character.as_deref(), now)
                };
                inner.send_to(client_id, payload);
                inner.broadcast_room(
                    &room_id,
                    json!({
                      "type":"pickup_state",
                      "ok": true,
                      "data": {
                        "kind": PickupKind::Mana.as_wire(),
                        "index": pickup_index,
                        "active": false,
                        "respawnAtMs": respawn_at
                      }
                    }),
                    None,
                );
            } else {
                log_pickup_trace(
                    "player_pickup_ammo",
                    client_id,
                    &room_id,
                    pickup_index,
                    false,
                    "out_of_range_or_respawning",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
            }
        }
        "player_pickup_health" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status != RoomStatus::InGame {
                return;
            }
            let pickup_index = message.get("index").and_then(Value::as_u64).unwrap_or(u64::MAX) as usize;
            let client_pickup_position = message
                .get("position")
                .and_then(|v| {
                    let x = v.get("x").and_then(Value::as_f64)?;
                    let z = v.get("z").and_then(Value::as_f64)?;
                    if x.is_finite() && z.is_finite() {
                        Some((x, z))
                    } else {
                        None
                    }
                });
            let now = now_ms();
            let Some(player_state) = inner.clients.get(client_id).cloned() else {
                return;
            };
            if !player_state.combat.alive {
                log_pickup_trace(
                    "player_pickup_health",
                    client_id,
                    &room_id,
                    pickup_index,
                    false,
                    "dead",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
                return;
            }
            let recoverable = (MAX_HEALTH
                - (player_state.combat.health + player_state.combat.pending_health_regen))
                .max(0.0);
            if recoverable <= 0.0001 {
                log_pickup_trace(
                    "player_pickup_health",
                    client_id,
                    &room_id,
                    pickup_index,
                    false,
                    "health_full",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
                return;
            }
            let consumed = if let Some(meta) = inner.room_meta.get_mut(&room_id) {
                consume_pickup(
                    &mut meta.health_pickups,
                    pickup_index,
                    player_state.state.position.x,
                    player_state.state.position.z,
                    client_pickup_position,
                    now,
                )
            } else {
                None
            };
            if let Some(respawn_at) = consumed {
                log_pickup_trace(
                    "player_pickup_health",
                    client_id,
                    &room_id,
                    pickup_index,
                    true,
                    "consumed",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
                let payload = {
                    let Some(entry) = inner.clients.get_mut(client_id) else {
                        return;
                    };
                    update_combat_regen(&mut entry.combat, now);
                    let recoverable_now = (MAX_HEALTH
                        - (entry.combat.health + entry.combat.pending_health_regen))
                        .max(0.0);
                    if recoverable_now > 0.0001 {
                        entry.combat.pending_health_regen +=
                            HEALTH_PICKUP_REGEN_AMOUNT.min(recoverable_now);
                    }
                    player_resources_payload(&entry.combat, entry.character.as_deref(), now)
                };
                inner.send_to(client_id, payload);
                inner.broadcast_room(
                    &room_id,
                    json!({
                      "type":"pickup_state",
                      "ok": true,
                      "data": {
                        "kind": PickupKind::Health.as_wire(),
                        "index": pickup_index,
                        "active": false,
                        "respawnAtMs": respawn_at
                      }
                    }),
                    None,
                );
            } else {
                log_pickup_trace(
                    "player_pickup_health",
                    client_id,
                    &room_id,
                    pickup_index,
                    false,
                    "out_of_range_or_respawning",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
            }
        }
        "player_pickup_mana" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status != RoomStatus::InGame {
                return;
            }
            let pickup_index = message.get("index").and_then(Value::as_u64).unwrap_or(u64::MAX) as usize;
            let client_pickup_position = message
                .get("position")
                .and_then(|v| {
                    let x = v.get("x").and_then(Value::as_f64)?;
                    let z = v.get("z").and_then(Value::as_f64)?;
                    if x.is_finite() && z.is_finite() {
                        Some((x, z))
                    } else {
                        None
                    }
                });
            let now = now_ms();
            let Some(player_state) = inner.clients.get(client_id).cloned() else {
                return;
            };
            if !player_state.combat.alive || !is_mana_character(player_state.character.as_deref()) {
                log_pickup_trace(
                    "player_pickup_mana",
                    client_id,
                    &room_id,
                    pickup_index,
                    false,
                    "invalid_character_or_dead",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
                return;
            }
            if player_state.combat.mana >= MAX_MANA - 0.0001 {
                log_pickup_trace(
                    "player_pickup_mana",
                    client_id,
                    &room_id,
                    pickup_index,
                    false,
                    "mana_full",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
                return;
            }
            let consumed = if let Some(meta) = inner.room_meta.get_mut(&room_id) {
                consume_pickup(
                    &mut meta.mana_pickups,
                    pickup_index,
                    player_state.state.position.x,
                    player_state.state.position.z,
                    client_pickup_position,
                    now,
                )
            } else {
                None
            };
            if let Some(respawn_at) = consumed {
                log_pickup_trace(
                    "player_pickup_mana",
                    client_id,
                    &room_id,
                    pickup_index,
                    true,
                    "consumed",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
                let payload = {
                    let Some(entry) = inner.clients.get_mut(client_id) else {
                        return;
                    };
                    update_combat_regen(&mut entry.combat, now);
                    entry.combat.mana = (entry.combat.mana + MANA_PICKUP_AMOUNT).min(MAX_MANA);
                    player_resources_payload(&entry.combat, entry.character.as_deref(), now)
                };
                inner.send_to(client_id, payload);
                inner.broadcast_room(
                    &room_id,
                    json!({
                      "type":"pickup_state",
                      "ok": true,
                      "data": {
                        "kind": PickupKind::Mana.as_wire(),
                        "index": pickup_index,
                        "active": false,
                        "respawnAtMs": respawn_at
                      }
                    }),
                    None,
                );
            } else {
                log_pickup_trace(
                    "player_pickup_mana",
                    client_id,
                    &room_id,
                    pickup_index,
                    false,
                    "out_of_range_or_respawning",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
            }
        }
        "player_pickup_shield" => {
            let Some(room_id) = client.room_id.clone() else {
                return;
            };
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status != RoomStatus::InGame {
                return;
            }
            let pickup_index = message.get("index").and_then(Value::as_u64).unwrap_or(u64::MAX) as usize;
            let client_pickup_position = message
                .get("position")
                .and_then(|v| {
                    let x = v.get("x").and_then(Value::as_f64)?;
                    let z = v.get("z").and_then(Value::as_f64)?;
                    if x.is_finite() && z.is_finite() {
                        Some((x, z))
                    } else {
                        None
                    }
                });
            let now = now_ms();
            let Some(player_state) = inner.clients.get(client_id).cloned() else {
                return;
            };
            if !player_state.combat.alive {
                log_pickup_trace(
                    "player_pickup_shield",
                    client_id,
                    &room_id,
                    pickup_index,
                    false,
                    "dead",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
                return;
            }
            if player_state.combat.shield > 0.0001 {
                log_pickup_trace(
                    "player_pickup_shield",
                    client_id,
                    &room_id,
                    pickup_index,
                    false,
                    "shield_not_empty",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
                return;
            }
            let consumed = if let Some(meta) = inner.room_meta.get_mut(&room_id) {
                consume_pickup(
                    &mut meta.shield_pickups,
                    pickup_index,
                    player_state.state.position.x,
                    player_state.state.position.z,
                    client_pickup_position,
                    now,
                )
            } else {
                None
            };
            if let Some(respawn_at) = consumed {
                log_pickup_trace(
                    "player_pickup_shield",
                    client_id,
                    &room_id,
                    pickup_index,
                    true,
                    "consumed",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
                let payload = {
                    let Some(entry) = inner.clients.get_mut(client_id) else {
                        return;
                    };
                    update_combat_regen(&mut entry.combat, now);
                    entry.combat.shield = (entry.combat.shield + SHIELD_PICKUP_AMOUNT).min(MAX_SHIELD);
                    player_resources_payload(&entry.combat, entry.character.as_deref(), now)
                };
                inner.send_to(client_id, payload);
                inner.broadcast_room(
                    &room_id,
                    json!({
                      "type":"pickup_state",
                      "ok": true,
                      "data": {
                        "kind": PickupKind::Shield.as_wire(),
                        "index": pickup_index,
                        "active": false,
                        "respawnAtMs": respawn_at
                      }
                    }),
                    None,
                );
            } else {
                log_pickup_trace(
                    "player_pickup_shield",
                    client_id,
                    &room_id,
                    pickup_index,
                    false,
                    "out_of_range_or_respawning",
                    (player_state.state.position.x, player_state.state.position.z),
                    client_pickup_position,
                );
            }
        }
        "player_resources" => {}
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
            let (Some(px), Some(py), Some(pz), Some(yaw), Some(pitch)) = (
                position.and_then(|v| v.get("x")).and_then(Value::as_f64),
                position.and_then(|v| v.get("y")).and_then(Value::as_f64),
                position.and_then(|v| v.get("z")).and_then(Value::as_f64),
                rotation.and_then(|v| v.get("yaw")).and_then(Value::as_f64),
                rotation
                    .and_then(|v| v.get("pitch"))
                    .and_then(Value::as_f64),
            ) else {
                return;
            };

            let jumping = message
                .get("jumping")
                .and_then(Value::as_bool)
                .unwrap_or(false);
            let moving = message
                .get("moving")
                .and_then(Value::as_bool)
                .unwrap_or(false);
            let input_seq = message.get("inputSeq").and_then(Value::as_u64).unwrap_or(0);

            let ts = now_ms();
            let (next_x, next_z) = if let Some(current_entry) = inner.clients.get(client_id) {
                let dt_ms = clamp_i64(ts - current_entry.state_ts, 16, PLAYER_MAX_MOVE_DT_MS);
                let (limited_x, limited_z) = clamp_move_step(
                    current_entry.state.position.x,
                    current_entry.state.position.z,
                    clamp(px, -200.0, 200.0),
                    clamp(pz, -200.0, 200.0),
                    dt_ms,
                );
                resolve_player_position(
                    &inner,
                    &room_id,
                    current_entry.state.position.x,
                    current_entry.state.position.z,
                    limited_x,
                    limited_z,
                )
            } else {
                (clamp(px, -200.0, 200.0), clamp(pz, -200.0, 200.0))
            };

            let next_state = PlayerState {
                position: Vec3 {
                    x: next_x,
                    y: clamp(py, 0.5, 4.0),
                    z: next_z,
                },
                rotation: Rotation {
                    yaw: clamp(
                        yaw,
                        -std::f64::consts::PI * 100.0,
                        std::f64::consts::PI * 100.0,
                    ),
                    pitch: clamp(
                        pitch,
                        -std::f64::consts::FRAC_PI_2,
                        std::f64::consts::FRAC_PI_2,
                    ),
                },
                jumping,
                moving,
            };
            let mut resources_for_move: Option<(i64, i64, i64)> = None;
            if let Some(entry) = inner.clients.get_mut(client_id) {
                update_combat_regen(&mut entry.combat, ts);
                entry.state = next_state.clone();
                entry.state_ts = ts;
                push_state_snapshot(entry, ts);
                resources_for_move = Some((
                    entry.combat.health.round() as i64,
                    entry.combat.shield.round() as i64,
                    entry.combat.mana.round() as i64,
                ));
            }

            inner.send_to(
                client_id,
                json!({
                  "type":"player_move_ack",
                  "ok": true,
                  "data": {
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
                    "inputSeq": input_seq,
                    "ts": ts
                  }
                }),
            );

            let (health_wire, shield_wire, mana_wire) = resources_for_move.unwrap_or((
                MAX_HEALTH as i64,
                START_SHIELD as i64,
                MAX_MANA as i64,
            ));
            inner.broadcast_room(
                &room_id,
                json!({
                  "type":"player_move",
                  "ok": true,
                  "data": {
                    "playerId": client_id,
                    "character": client.character,
                    "health": health_wire,
                    "shield": shield_wire,
                    "mana": mana_wire,
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

fn accept_rate_limited_event(inner: &mut Inner, client_id: &str, event_type: &str, now: i64) -> bool {
    let Some(client) = inner.clients.get_mut(client_id) else {
        return false;
    };
    match event_type {
        "player_shoot" => {
            if now - client.last_shoot_req_at_ms < SHOOT_REQ_MIN_INTERVAL_MS {
                return false;
            }
            client.last_shoot_req_at_ms = now;
            true
        }
        "player_special_lunar_rain"
        | "player_special_silent_cone"
        | "player_special_neoorphen_meteor"
        | "player_special_pumori_orbit" => {
            if now - client.last_special_req_at_ms < SPECIAL_REQ_MIN_INTERVAL_MS {
                return false;
            }
            client.last_special_req_at_ms = now;
            true
        }
        "player_pickup_ammo"
        | "player_pickup_mana"
        | "player_pickup_shield"
        | "player_pickup_health" => {
            if now - client.last_pickup_req_at_ms < PICKUP_REQ_MIN_INTERVAL_MS {
                if pickup_trace_enabled() {
                    debug!(
                        "[ws_rooms][pickup] rate_limited client_id={} event={} delta_ms={}",
                        client_id,
                        event_type,
                        now - client.last_pickup_req_at_ms
                    );
                }
                return false;
            }
            client.last_pickup_req_at_ms = now;
            true
        }
        "player_reload" => {
            if now - client.last_reload_req_at_ms < RELOAD_REQ_MIN_INTERVAL_MS {
                return false;
            }
            client.last_reload_req_at_ms = now;
            true
        }
        "player_respawn" => {
            if now - client.last_respawn_req_at_ms < RESPAWN_REQ_MIN_INTERVAL_MS {
                return false;
            }
            client.last_respawn_req_at_ms = now;
            true
        }
        _ => true,
    }
}

fn join_room_internal(inner: &mut Inner, client_id: &str, room_id: &str) {
    if let Some(existing_room) = inner.clients.get(client_id).and_then(|c| c.room_id.clone()) {
        if existing_room != room_id {
            let _ = leave_room_internal(inner, client_id, false);
        }
    }

    match inner.rooms.join_room(room_id, client_id) {
        Ok(()) => {}
        Err(err) => {
            let (code, message) = match err {
                JoinError::RoomNotFound => ("ROOM_NOT_FOUND", "Sala no encontrada"),
                JoinError::RoomFull => ("ROOM_FULL", "La sala alcanzo el maximo de jugadores"),
                JoinError::MatchAlreadyStarted => {
                    ("MATCH_ALREADY_STARTED", "La partida versus ya inicio")
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
    inner.ensure_room_meta(room_id);
    let spawn = pick_spawn_position(inner, room_id, Some(client_id));
    if let Some(client) = inner.clients.get_mut(client_id) {
        client.room_id = Some(room_id.to_string());
        client.kills = 0;
        client.deaths = 0;
        client.combat = default_combat_state();
        client.state = default_player_state();
        client.state.position = spawn;
        client.state_ts = now_ms();
        client.state_history.clear();
        client.state_history.push(StateSnapshot {
            ts: client.state_ts,
            position: client.state.position.clone(),
        });
    }
    if let Some(state) = inner.room_state_json(room_id) {
        inner.send_to(
            client_id,
            json!({ "type": "room_joined", "ok": true, "data": state }),
        );
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
    inner.broadcast_lobby_presence();
}

fn leave_room_internal(
    inner: &mut Inner,
    client_id: &str,
    send_left_room: bool,
) -> Option<(String, Team)> {
    let Some(room_id) = inner.clients.get(client_id).and_then(|c| c.room_id.clone()) else {
        if send_left_room {
            inner.send_to(
                client_id,
                json!({ "type": "left_room", "ok": true, "data": Value::Null }),
            );
        }
        return None;
    };
    let leaving_team = inner
        .rooms
        .rooms
        .get(&room_id)
        .and_then(|room| room.teams.get(client_id).copied());
    inner.rooms.leave_room(&room_id, client_id);
    inner.cleanup_removed_room_meta();
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
    let maybe_versus_winner_team = infer_versus_winner_after_leave(inner, &room_id, leaving_team);
    inner.broadcast_room_state(&room_id);
    inner.broadcast_rooms_list_all();
    inner.broadcast_lobby_presence();
    if send_left_room {
        inner.send_to(
            client_id,
            json!({ "type": "left_room", "ok": true, "data": Value::Null }),
        );
    }
    maybe_versus_winner_team.map(|team| (room_id, team))
}

fn system_chat_payload(text: &str, ts: i64) -> Value {
    json!({
      "type":"chat_message",
      "ok": true,
      "data": {
        "playerId": "system",
        "playerName": "SYSTEM",
        "text": text,
        "ts": ts
      }
    })
}

fn handle_add_bot_command(inner: &mut Inner, room_id: &str) -> Option<String> {
    let room = inner.rooms.rooms.get(room_id)?;
    if room.mode != RoomMode::FreeForAll {
        return None;
    }
    let bot_count = room
        .players
        .iter()
        .filter(|id| inner.clients.get(*id).map(|c| c.is_bot).unwrap_or(false))
        .count();
    if bot_count >= BOT_MAX_PER_ROOM || room.players.len() >= room.max_players {
        return None;
    }

    inner.client_seq = inner.client_seq.wrapping_add(1);
    let bot_id = format!("bot-{}", inner.client_seq);
    let mut rng = SeededRng::new((now_ms() as u64) ^ hash_room_id(room_id) ^ hash_room_id(&bot_id));
    let names = [
        "Agent_Neo",
        "HexRider",
        "ZeroPulse",
        "NovaByte",
        "K0ketron",
        "NoxShard",
        "Valkyr",
        "EchoRune",
        "GhostIO",
        "RiftNine",
    ];
    let characters = ["silentman", "pumori", "neoorphen", "pezunalunar"];
    let name_idx = ((rng.next_f64() * names.len() as f64).floor() as usize).min(names.len() - 1);
    let num = 10 + ((rng.next_f64() * 90.0).floor() as i64).clamp(0, 89);
    let character_idx =
        ((rng.next_f64() * characters.len() as f64).floor() as usize).min(characters.len() - 1);
    let bot_name = format!("{}-{}", names[name_idx], num);
    let character = characters[character_idx].to_string();
    let bot_orbit_phase = rng.next_f64() * std::f64::consts::TAU;
    let bot_orbit_radius = 18.0 + (rng.next_f64() * 30.0);
    let bot_orbit_speed = 0.55 + (rng.next_f64() * 0.75);
    let bot_move_speed = 6.8 + (rng.next_f64() * 3.6);

    let (tx, mut rx) = mpsc::unbounded_channel::<String>();
    tokio::spawn(async move {
        while rx.recv().await.is_some() {}
    });

    let initial_state = default_player_state();
    inner.clients.insert(
        bot_id.clone(),
        ClientSession {
            id: bot_id.clone(),
            name: bot_name,
            character: Some(character),
            room_id: None,
            state: initial_state.clone(),
            state_ts: now_ms(),
            combat: default_combat_state(),
            kills: 0,
            deaths: 0,
            latency_ms: 0.0,
            latency_probe_seq: 0,
            latency_probe_sent_at: 0,
            latency_probe_id: 0,
            state_history: vec![StateSnapshot {
                ts: now_ms(),
                position: initial_state.position.clone(),
            }],
            last_shoot_req_at_ms: 0,
            last_special_req_at_ms: 0,
            last_pickup_req_at_ms: 0,
            last_reload_req_at_ms: 0,
            last_respawn_req_at_ms: 0,
            is_bot: true,
            bot_orbit_phase,
            bot_orbit_radius,
            bot_orbit_speed,
            bot_move_speed,
            tx,
        },
    );
    join_room_internal(inner, &bot_id, room_id);
    Some(bot_id)
}

async fn run_room_bot(state: Arc<WsRoomsState>, bot_id: String) {
    let mut move_ticker = interval(Duration::from_millis(BOT_MOVE_TICK_MS));
    let mut shoot_ticker = interval(Duration::from_millis(BOT_SHOOT_TICK_MS));
    let mut respawn_ticker = interval(Duration::from_millis(BOT_RESPAWN_TICK_MS));
    let mut special_ticker = interval(Duration::from_millis(BOT_SPECIAL_TICK_MS));
    move_ticker.set_missed_tick_behavior(MissedTickBehavior::Skip);
    shoot_ticker.set_missed_tick_behavior(MissedTickBehavior::Skip);
    respawn_ticker.set_missed_tick_behavior(MissedTickBehavior::Skip);
    special_ticker.set_missed_tick_behavior(MissedTickBehavior::Skip);

    loop {
        tokio::select! {
            _ = move_ticker.tick() => {
                let mut inner = state.inner.lock().await;
                let (room_id, payload) = {
                    let Some(bot) = inner.clients.get(&bot_id) else {
                        break;
                    };
                    let Some(room_id) = bot.room_id.clone() else {
                        break;
                    };
                    let Some(room) = inner.rooms.rooms.get(&room_id) else {
                        break;
                    };
                    if room.mode != RoomMode::FreeForAll {
                        break;
                    }
                    if !bot.combat.alive {
                        continue;
                    }
                    let ts = now_ms();
                    let dt_ms = clamp_i64(ts - bot.state_ts, 16, PLAYER_MAX_MOVE_DT_MS);
                    let dt_s = dt_ms as f64 / 1000.0;
                    let angle = (ts as f64 * 0.001 * bot.bot_orbit_speed) + bot.bot_orbit_phase;
                    let target_x = bot.bot_orbit_radius * angle.cos();
                    let target_z = bot.bot_orbit_radius * angle.sin();
                    let to_target_x = target_x - bot.state.position.x;
                    let to_target_z = target_z - bot.state.position.z;
                    let to_target_len = (to_target_x * to_target_x + to_target_z * to_target_z).sqrt();
                    let step = (bot.bot_move_speed.clamp(3.2, PLAYER_MAX_SPEED_UNITS_PER_SECOND) * dt_s)
                        .max(0.04);
                    let (req_x, req_z) = if to_target_len > 0.0001 {
                        let ratio = (step / to_target_len).min(1.0);
                        (
                            bot.state.position.x + (to_target_x * ratio),
                            bot.state.position.z + (to_target_z * ratio),
                        )
                    } else {
                        (bot.state.position.x, bot.state.position.z)
                    };
                    let (x, z) = resolve_player_position_with_radius(
                        &inner,
                        &room_id,
                        bot.state.position.x,
                        bot.state.position.z,
                        req_x,
                        req_z,
                        PLAYER_COLLISION_RADIUS * BOT_PILLAR_COLLISION_RADIUS_FACTOR,
                    );
                    let move_dx = x - bot.state.position.x;
                    let move_dz = z - bot.state.position.z;
                    let moved_len = (move_dx * move_dx + move_dz * move_dz).sqrt();
                    let yaw = if moved_len > 0.0001 {
                        move_dz.atan2(move_dx)
                    } else {
                        bot.state.rotation.yaw
                    };
                    let moving = moved_len > 0.01;
                    {
                        let Some(bot_mut) = inner.clients.get_mut(&bot_id) else {
                            continue;
                        };
                        bot_mut.state.position.x = x;
                        bot_mut.state.position.y = SPAWN_BASE_Y;
                        bot_mut.state.position.z = z;
                        bot_mut.state.rotation.yaw = yaw;
                        bot_mut.state.rotation.pitch = 0.0;
                        bot_mut.state.moving = moving;
                        bot_mut.state.jumping = false;
                        bot_mut.state_ts = ts;
                        push_state_snapshot(bot_mut, ts);
                    }
                    let payload = json!({
                      "type":"player_move",
                      "ok": true,
                      "data": {
                        "playerId": bot_id,
                        "position": { "x": x, "y": SPAWN_BASE_Y, "z": z },
                        "rotation": { "yaw": yaw, "pitch": 0.0 },
                        "jumping": false,
                        "moving": moving,
                        "ts": ts
                      }
                    });
                    (room_id, payload)
                };
                inner.broadcast_room(&room_id, payload, Some(&bot_id));
            }
            _ = shoot_ticker.tick() => {
                let mut inner = state.inner.lock().await;
                let room_id = {
                    let Some(bot) = inner.clients.get(&bot_id) else {
                        break;
                    };
                    let Some(room_id) = bot.room_id.clone() else {
                        break;
                    };
                    if !inner.rooms.rooms.contains_key(&room_id) {
                        break;
                    }
                    room_id
                };
                bot_apply_authoritative_shot(&mut inner, &state, &room_id, &bot_id);
            }
            _ = special_ticker.tick() => {
                let mut inner = state.inner.lock().await;
                let room_id = {
                    let Some(bot) = inner.clients.get(&bot_id) else {
                        break;
                    };
                    let Some(room_id) = bot.room_id.clone() else {
                        break;
                    };
                    let Some(room) = inner.rooms.rooms.get(&room_id) else {
                        break;
                    };
                    if room.mode != RoomMode::FreeForAll || room.status != RoomStatus::InGame {
                        continue;
                    }
                    room_id
                };
                bot_try_cast_special(&mut inner, &state, &room_id, &bot_id);
            }
            _ = respawn_ticker.tick() => {
                let mut inner = state.inner.lock().await;
                let can_respawn = {
                    let Some(bot) = inner.clients.get(&bot_id) else {
                        break;
                    };
                    let Some(room_id) = bot.room_id.clone() else {
                        break;
                    };
                    let Some(room) = inner.rooms.rooms.get(&room_id) else {
                        break;
                    };
                    room.status == RoomStatus::InGame
                        && !bot.combat.alive
                        && now_ms() >= bot.combat.respawn_available_at_ms
                };
                if !can_respawn {
                    continue;
                }
                let room_id = match inner.clients.get(&bot_id).and_then(|bot| bot.room_id.clone()) {
                    Some(v) => v,
                    None => break,
                };
                let spawn = pick_spawn_position(&inner, &room_id, Some(&bot_id));
                let (position, health, shield, mana, ammo_in_mag, ammo_reserve) = {
                    let Some(bot) = inner.clients.get_mut(&bot_id) else {
                        break;
                    };
                    bot.state = default_player_state();
                    bot.state.position = spawn;
                    bot.state_ts = now_ms();
                    bot.combat = default_combat_state();
                    bot.state_history.clear();
                    bot.state_history.push(StateSnapshot {
                        ts: bot.state_ts,
                        position: bot.state.position.clone(),
                    });
                    (
                        json!({ "x": bot.state.position.x, "y": bot.state.position.y, "z": bot.state.position.z }),
                        bot.combat.health.round() as i64,
                        bot.combat.shield.round() as i64,
                        bot.combat.mana.round() as i64,
                        bot.combat.ammo_in_mag,
                        bot.combat.ammo_reserve,
                    )
                };
                inner.broadcast_room(
                    &room_id,
                    json!({
                      "type":"player_respawned",
                      "ok": true,
                      "data": {
                        "playerId": bot_id,
                        "position": position,
                        "health": health,
                        "shield": shield,
                        "mana": mana,
                        "ammoInMag": ammo_in_mag,
                        "ammoReserve": ammo_reserve,
                        "isReloading": false,
                        "reloadRemainingMs": 0,
                        "ts": now_ms()
                      }
                    }),
                    None,
                );
                inner.broadcast_room_state(&room_id);
            }
        }
    }
}

fn bot_apply_authoritative_shot(
    inner: &mut Inner,
    state: &Arc<WsRoomsState>,
    room_id: &str,
    bot_id: &str,
) {
    let now = now_ms();
    let (origin, fallback_direction, character_for_shot) = {
        let Some(entry) = inner.clients.get_mut(bot_id) else {
            return;
        };
        if !entry.combat.alive {
            return;
        }
        update_combat_regen(&mut entry.combat, now);
        let shot_interval = get_shot_interval_ms(entry.character.as_deref());
        if now - entry.combat.last_shot_at < shot_interval {
            return;
        }
        if entry.combat.mana + 0.0001 < MANA_COST_PER_SHOT {
            return;
        }
        entry.combat.mana = (entry.combat.mana - MANA_COST_PER_SHOT).max(0.0);
        entry.combat.last_shot_at = now;
        let origin = server_eye_origin_from_state(&entry.state);
        let direction =
            server_aim_direction_from_rotation(&entry.state.rotation).unwrap_or(Vec3 {
                x: entry.state.rotation.yaw.cos(),
                y: 0.0,
                z: entry.state.rotation.yaw.sin(),
            });
        (origin, direction, entry.character.clone())
    };
    let direction = bot_pick_target_direction(inner, room_id, bot_id, &origin, &fallback_direction);

    let wall_hit_distance = resolve_wall_hit_distance(inner, room_id, &origin, &direction, 95.0);
    let is_mana = is_mana_character(character_for_shot.as_deref());
    let ground_hit_distance = if is_mana && direction.y > -0.35 {
        None
    } else {
        resolve_ground_hit_distance(&origin, &direction, 95.0)
    };
    let effective_distance = match (wall_hit_distance, ground_hit_distance) {
        (Some(w), Some(g)) => w.min(g).min(95.0),
        (Some(w), None) => w.min(95.0),
        (None, Some(g)) => g.min(95.0),
        (None, None) => 95.0,
    };
    inner.broadcast_room(
        room_id,
        json!({
          "type":"player_shoot",
          "ok": true,
          "data": {
            "playerId": bot_id,
            "character": character_for_shot.clone(),
            "origin": { "x": origin.x, "y": origin.y, "z": origin.z },
            "direction": { "x": direction.x, "y": direction.y, "z": direction.z },
            "distance": effective_distance,
            "ts": now
          }
        }),
        Some(bot_id),
    );

    let rewind_ts = compute_rewind_timestamp(now, None, LAG_COMP_MAGIC_MS, 0.0);
    let hit = find_best_hit(
        inner,
        room_id,
        bot_id,
        &origin,
        &direction,
        effective_distance,
        rewind_ts,
    );
    if let Some((victim_id, headshot, hit_dist)) = hit {
        let projectile_speed =
            projectile_speed_units_per_second(character_for_shot.as_deref());
        let travel_ms = ((hit_dist / projectile_speed.max(1.0)) * 1000.0).round();
        let impact_delay_ms = (travel_ms as i64).clamp(30, 900) as u64;
        let impact_point = Vec3 {
            x: origin.x + (direction.x * hit_dist),
            y: origin.y + (direction.y * hit_dist),
            z: origin.z + (direction.z * hit_dist),
        };
        tokio::spawn(apply_delayed_authoritative_hit(
            Arc::clone(state),
            room_id.to_string(),
            bot_id.to_string(),
            victim_id,
            headshot,
            HIT_DAMAGE,
            impact_point,
            Some(now),
            impact_delay_ms,
            false,
        ));
    } else {
        let impact_point = Vec3 {
            x: origin.x + (direction.x * effective_distance),
            y: origin.y + (direction.y * effective_distance),
            z: origin.z + (direction.z * effective_distance),
        };
        let projectile_speed =
            projectile_speed_units_per_second(character_for_shot.as_deref());
        let travel_ms = ((effective_distance / projectile_speed.max(1.0)) * 1000.0).round();
        let impact_delay_ms = (travel_ms as i64).clamp(30, 900) as u64;
        tokio::spawn(apply_delayed_normal_shockwave_damage(
            Arc::clone(state),
            room_id.to_string(),
            bot_id.to_string(),
            impact_point,
            impact_delay_ms,
        ));
    }
}

fn bot_pick_target_direction(
    inner: &Inner,
    room_id: &str,
    bot_id: &str,
    origin: &Vec3,
    fallback: &Vec3,
) -> Vec3 {
    let Some(room) = inner.rooms.rooms.get(room_id) else {
        return fallback.clone();
    };
    let mut best_dir: Option<Vec3> = None;
    let mut best_d2 = f64::MAX;
    for victim_id in &room.players {
        if victim_id == bot_id {
            continue;
        }
        if is_friendly_fire_blocked(inner, room_id, bot_id, victim_id) {
            continue;
        }
        let Some(victim) = inner.clients.get(victim_id) else {
            continue;
        };
        if !victim.combat.alive {
            continue;
        }
        let target = Vec3 {
            x: victim.state.position.x,
            y: victim.state.position.y + (BODY_CENTER_OFFSET_Y * 0.45),
            z: victim.state.position.z,
        };
        let to = Vec3 {
            x: target.x - origin.x,
            y: target.y - origin.y,
            z: target.z - origin.z,
        };
        let d2 = to.x * to.x + to.y * to.y + to.z * to.z;
        if d2 < 0.001 || d2 >= best_d2 {
            continue;
        }
        if let Some(normalized) = normalize_vec3(to) {
            best_d2 = d2;
            best_dir = Some(normalized);
        }
    }
    best_dir.unwrap_or_else(|| fallback.clone())
}

fn bot_try_cast_special(
    inner: &mut Inner,
    state: &Arc<WsRoomsState>,
    room_id: &str,
    bot_id: &str,
) {
    let (character_key, origin, allow_cast, caster_latency_ms) = {
        let Some(entry) = inner.clients.get_mut(bot_id) else {
            return;
        };
        if !entry.combat.alive {
            return;
        }
        let now = now_ms();
        let key = normalize_character(entry.character.as_deref());
        let allow = match key.as_str() {
            "silentman" | "silenmant" => {
                if now >= entry.combat.silent_cd_until_ms {
                    entry.combat.silent_cd_until_ms = now + SILENT_SPECIAL_COOLDOWN_MS;
                    true
                } else {
                    false
                }
            }
            "pumori" => {
                if now >= entry.combat.pumori_cd_until_ms {
                    entry.combat.pumori_cd_until_ms = now + PUMORI_SPECIAL_COOLDOWN_MS;
                    true
                } else {
                    false
                }
            }
            "neoorphen" => {
                if now >= entry.combat.neoorphen_cd_until_ms {
                    entry.combat.neoorphen_cd_until_ms = now + NEOORPHEN_SPECIAL_COOLDOWN_MS;
                    true
                } else {
                    false
                }
            }
            _ => {
                if now >= entry.combat.lunar_cd_until_ms {
                    entry.combat.lunar_cd_until_ms = now + LUNAR_SPECIAL_COOLDOWN_MS;
                    true
                } else {
                    false
                }
            }
        };
        (key, entry.state.position.clone(), allow, entry.latency_ms)
    };
    if !allow_cast {
        return;
    }

    match character_key.as_str() {
        "silentman" | "silenmant" => {
            let mut rays = Vec::new();
            for i in 0..50 {
                let t = (i as f64) / 50.0;
                let angle = t * std::f64::consts::TAU;
                rays.push(json!({
                  "direction": { "x": angle.cos(), "y": 0.0, "z": angle.sin() },
                  "distance": 90.0
                }));
            }
            inner.broadcast_room(
                room_id,
                json!({
                  "type":"special_silent_cone",
                  "ok": true,
                  "data": {
                    "playerId": bot_id,
                    "character": "silentman",
                    "origin": { "x": origin.x, "y": origin.y, "z": origin.z },
                    "rays": rays,
                    "ts": now_ms()
                  }
                }),
                None,
            );
            let room_players: Vec<String> = inner
                .rooms
                .rooms
                .get(room_id)
                .map(|r| r.players.iter().cloned().collect())
                .unwrap_or_default();
            let now_hit = now_ms();
            let rewind_ts = compute_rewind_timestamp(now_hit, None, LAG_COMP_MAGIC_MS, caster_latency_ms);
            let mut pending_impacts: Vec<(Vec3, u64)> = Vec::new();
            for victim_id in &room_players {
                if victim_id == bot_id {
                    continue;
                }
                if is_friendly_fire_blocked(inner, room_id, bot_id, victim_id) {
                    continue;
                }
                let Some(victim) = inner.clients.get(victim_id) else {
                    continue;
                };
                if !victim.combat.alive {
                    continue;
                }
                let rewound = client_position_at(victim, rewind_ts);
                let to_target = Vec3 {
                    x: rewound.x - origin.x,
                    y: rewound.y - origin.y,
                    z: rewound.z - origin.z,
                };
                let distance = distance_sq(&rewound, &origin).sqrt();
                if distance <= 0.0001 || distance > SILENT_SPECIAL_MAX_DISTANCE {
                    continue;
                }
                let Some(direction) = normalize_vec3(to_target) else {
                    continue;
                };
                if let Some(wall_distance) =
                    resolve_wall_hit_distance(inner, room_id, &origin, &direction, distance)
                {
                    if wall_distance + 0.2 < distance {
                        continue;
                    }
                }
                let delay_ms = ((distance / SILENT_SPECIAL_PROJECTILE_SPEED.max(1.0)) * 1000.0)
                    .round()
                    .clamp(25.0, 900.0) as u64;
                pending_impacts.push((rewound, delay_ms));
            }
            for (impact, delay_ms) in pending_impacts {
                tokio::spawn(apply_delayed_radial_falloff_damage(
                    Arc::clone(state),
                    room_id.to_string(),
                    bot_id.to_string(),
                    impact,
                    SILENT_SPECIAL_EXPLOSION_RADIUS,
                    HIT_DAMAGE,
                    SILENT_SPECIAL_MIN_FACTOR,
                    SILENT_SPECIAL_MAX_FACTOR,
                    delay_ms,
                ));
            }
        }
        "pumori" => {
            inner.broadcast_room(
                room_id,
                json!({
                  "type":"special_pumori_orbit_start",
                  "ok": true,
                  "data": {
                    "playerId": bot_id,
                    "durationMs": PUMORI_ORBIT_DURATION_MS,
                    "ts": now_ms()
                  }
                }),
                None,
            );
            tokio::spawn(run_pumori_orbit_damage(
                Arc::clone(state),
                room_id.to_string(),
                bot_id.to_string(),
            ));
        }
        "neoorphen" => {
            tokio::spawn(run_neoorphen_meteor_special(
                Arc::clone(state),
                room_id.to_string(),
                bot_id.to_string(),
                origin,
            ));
        }
        _ => {
            tokio::spawn(run_lunar_rain_special(
                Arc::clone(state),
                room_id.to_string(),
                bot_id.to_string(),
                origin,
            ));
        }
    }
}

fn game_state_payload(inner: &Inner, room_id: &str) -> Value {
    if let Some(summary) = inner.room_summary_json(room_id) {
        return json!({
          "roomId": summary.get("id").cloned().unwrap_or(Value::Null),
          "status": summary.get("status").cloned().unwrap_or(Value::Null),
          "hostId": summary.get("hostId").cloned().unwrap_or(Value::Null),
          "mode": summary.get("mode").cloned().unwrap_or(Value::Null),
          "versusType": summary.get("versusType").cloned().unwrap_or(Value::Null),
          "requiredPlayers": summary.get("requiredPlayers").cloned().unwrap_or(Value::Null),
          "maxPlayers": summary.get("maxPlayers").cloned().unwrap_or(Value::Null),
          "weather": summary.get("weather").cloned().unwrap_or(Value::Null),
          "battleTheme": summary.get("battleTheme").cloned().unwrap_or(Value::Null)
        });
    }
    json!({
      "roomId": room_id,
      "status": "waiting",
      "hostId": Value::Null,
      "mode": "freeforall",
      "versusType": Value::Null,
      "requiredPlayers": 0,
      "maxPlayers": 0,
      "weather": "night",
      "battleTheme": "battle1"
    })
}

fn kills_to_win_for_room(inner: &Inner, room_id: &str) -> i64 {
    let Some(room) = inner.rooms.rooms.get(room_id) else {
        return FFA_KILLS_TO_WIN;
    };
    match (room.mode, room.versus_type) {
        (RoomMode::VersusMatch, Some(VersusType::OneVsOne)) => VERSUS_1V1_KILLS_TO_WIN,
        (RoomMode::VersusMatch, Some(VersusType::TwoVsTwo)) => VERSUS_2V2_KILLS_TO_WIN,
        _ => FFA_KILLS_TO_WIN,
    }
}

fn respawn_delay_ms_for_room(inner: &Inner, room_id: &str) -> i64 {
    let Some(room) = inner.rooms.rooms.get(room_id) else {
        return FFA_RESPAWN_MS;
    };
    if room.mode == RoomMode::VersusMatch {
        return VERSUS_RESPAWN_MS;
    }
    FFA_RESPAWN_MS
}

fn team_kills(inner: &Inner, room_id: &str, team: Team) -> i64 {
    let Some(room) = inner.rooms.rooms.get(room_id) else {
        return 0;
    };
    let mut total = 0;
    for player_id in &room.players {
        if room.teams.get(player_id).copied() != Some(team) {
            continue;
        }
        if let Some(client) = inner.clients.get(player_id) {
            total += client.kills;
        }
    }
    total
}

fn maybe_resolve_match_winner(
    inner: &Inner,
    room_id: &str,
    killer_id: &str,
    killer_kills: i64,
) -> Option<(Value, Value, i64, i64)> {
    let room = inner.rooms.rooms.get(room_id)?;
    let kills_to_win = kills_to_win_for_room(inner, room_id);
    let killer = inner.clients.get(killer_id);

    match room.mode {
        RoomMode::FreeForAll => {
            if killer_kills < kills_to_win {
                return None;
            }
            let winner = if let Some(c) = killer {
                json!({
                  "id": c.id,
                  "name": c.name,
                  "character": c.character
                })
            } else {
                json!({
                  "id": killer_id,
                  "name": "Desconocido",
                  "character": Value::Null
                })
            };
            Some((winner, Value::Null, killer_kills, kills_to_win))
        }
        RoomMode::VersusMatch => {
            let Some(winner_team) = room.teams.get(killer_id).copied() else {
                return None;
            };
            let winner_score = team_kills(inner, room_id, winner_team);
            if winner_score < kills_to_win {
                return None;
            }
            let winner = if let Some(c) = killer {
                json!({
                  "id": c.id,
                  "name": c.name,
                  "character": c.character,
                  "team": winner_team.as_wire()
                })
            } else {
                json!({
                  "id": killer_id,
                  "name": "Desconocido",
                  "character": Value::Null,
                  "team": winner_team.as_wire()
                })
            };
            Some((
                winner,
                json!(winner_team.as_wire()),
                winner_score,
                kills_to_win,
            ))
        }
    }
}

fn apply_hit_and_emit(
    inner: &mut Inner,
    room_id: &str,
    attacker_id: &str,
    victim_id: &str,
    _headshot: bool,
    base_damage: f64,
    ts: i64,
) -> bool {
    let respawn_delay_ms = respawn_delay_ms_for_room(inner, room_id);
    let mut died = false;
    let headshot = false;
    let (health, shield) = {
        let Some(victim) = inner.clients.get_mut(victim_id) else {
            return false;
        };
        if !victim.combat.alive {
            return false;
        }
        if victim.combat.shield > 0.0 {
            let reduced = (base_damage * (1.0 - SHIELD_DAMAGE_REDUCTION)).ceil();
            victim.combat.shield = (victim.combat.shield - SHIELD_HIT_COST_PER_HIT).max(0.0);
            victim.combat.health = (victim.combat.health - reduced).max(0.0);
        } else {
            victim.combat.health = (victim.combat.health - base_damage).max(0.0);
        }
        victim.combat.pending_health_regen = 0.0;
        if victim.combat.health <= 0.0 {
            victim.combat.alive = false;
            victim.combat.respawn_available_at_ms = ts + respawn_delay_ms;
            died = true;
        }
        (victim.combat.health, victim.combat.shield)
    };

    inner.send_to(
        victim_id,
        json!({
          "type":"player_damage",
          "ok": true,
          "data": {
            "fromPlayerId": attacker_id,
            "headshot": headshot,
            "health": health,
            "shield": shield,
            "ts": ts
          }
        }),
    );

    if !died {
        inner.broadcast_room_state(room_id);
        return false;
    }

    if let Some(victim) = inner.clients.get_mut(victim_id) {
        victim.deaths += 1;
    }
    let mut killer_kills = 0;
    if let Some(killer) = inner.clients.get_mut(attacker_id) {
        killer.kills += 1;
        killer_kills = killer.kills;
    }

    inner.broadcast_room(
        room_id,
        json!({
          "type":"player_death",
          "ok": true,
          "data": {
            "playerId": victim_id,
            "killerId": attacker_id,
            "headshot": headshot,
            "respawnAvailableAtMs": ts + respawn_delay_ms,
            "ts": ts
          }
        }),
        None,
    );

    if let Some((winner_payload, winner_team, winner_score, kills_to_win)) =
        maybe_resolve_match_winner(inner, room_id, attacker_id, killer_kills)
    {
        if let Some(room) = inner.rooms.rooms.get_mut(room_id) {
            room.status = RoomStatus::Cooldown;
        }
        inner.broadcast_room(
            room_id,
            json!({
              "type":"game_state",
              "ok": true,
              "data": game_state_payload(inner, room_id)
            }),
            None,
        );
        inner.broadcast_room(
            room_id,
            json!({
              "type":"match_winner",
              "ok": true,
              "data": {
                "winner": winner_payload,
                "winnerTeam": winner_team,
                "winnerScore": winner_score,
                "killsToWin": kills_to_win,
                "countdownSeconds": ROUND_RESET_SECONDS
              }
            }),
            None,
        );
        inner.broadcast_room_state(room_id);
        inner.broadcast_rooms_list_all();
        return true;
    }

    inner.broadcast_room_state(room_id);
    false
}

async fn run_pumori_orbit_damage(state: Arc<WsRoomsState>, room_id: String, caster_id: String) {
    let ticks = (PUMORI_ORBIT_DURATION_MS / PUMORI_ORBIT_DAMAGE_TICK_MS).max(1);
    let cast_start_ms = now_ms();
    let cast_end_ms = cast_start_ms + PUMORI_ORBIT_DURATION_MS;
    let mut next_spawn_at_ms = cast_start_ms;
    let mut spawn_count: usize = 0;
    let mut orbit_hammers: Vec<PumoriOrbitHammer> = Vec::new();
    let mut rng =
        SeededRng::new((cast_start_ms as u64) ^ hash_room_id(&room_id) ^ hash_room_id(&caster_id));
    let phase = rng.next_f64() * std::f64::consts::TAU;
    let mut ticker = interval(Duration::from_millis(PUMORI_ORBIT_DAMAGE_TICK_MS as u64));
    ticker.set_missed_tick_behavior(MissedTickBehavior::Skip);

    for _ in 0..ticks {
        ticker.tick().await;

        let winner = {
            let mut inner = state.inner.lock().await;
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status != RoomStatus::InGame || !room.players.contains(&caster_id) {
                return;
            }
            let Some(caster) = inner.clients.get(&caster_id) else {
                return;
            };
            if !caster.combat.alive {
                return;
            }
            let center = caster.state.position.clone();
            let now = now_ms();
            let life_ratio = clamp(
                (now - cast_start_ms) as f64 / (PUMORI_ORBIT_DURATION_MS as f64),
                0.0,
                1.0,
            );
            let elapsed_s = ((now - cast_start_ms) as f64) / 1000.0;

            while next_spawn_at_ms <= now && next_spawn_at_ms < cast_end_ms {
                let active_count = orbit_hammers.iter().filter(|h| h.active).count();
                if active_count < PUMORI_ORBIT_MAX_ACTIVE_HAMMERS {
                    let spawn_progress = clamp(
                        (next_spawn_at_ms - cast_start_ms) as f64 / (PUMORI_ORBIT_DURATION_MS as f64),
                        0.0,
                        1.0,
                    );
                    let max_radius =
                        (PUMORI_ORBIT_DAMAGE_RADIUS * (0.22 + (spawn_progress * 0.78))).max(2.2);
                    orbit_hammers.push(PumoriOrbitHammer {
                        spawn_at_ms: next_spawn_at_ms,
                        base_angle: (rng.next_f64() * std::f64::consts::TAU)
                            + (((spawn_count % 4) as f64) * (std::f64::consts::PI * 0.5)),
                        max_radius,
                        position: center.clone(),
                        active: true,
                    });
                }
                spawn_count += 1;
                next_spawn_at_ms += PUMORI_ORBIT_SPAWN_INTERVAL_MS;
            }

            let mut winner = false;
            for (idx, hammer) in orbit_hammers.iter_mut().enumerate() {
                if !hammer.active {
                    continue;
                }

                let appeared_ratio =
                    clamp((now - hammer.spawn_at_ms) as f64 / 1200.0, 0.0, 1.0);
                let expanding_radius = hammer.max_radius * (0.25 + (0.75 * life_ratio * appeared_ratio));
                let angle = phase
                    + (elapsed_s * 5.4)
                    + hammer.base_angle
                    + ((idx as f64) * 0.11);
                let radius = expanding_radius + ((elapsed_s * 3.4) + idx as f64).sin() * 0.12;
                let next_pos = Vec3 {
                    x: center.x + (angle.cos() * radius),
                    y: center.y
                        + PUMORI_ORBIT_CENTER_HEIGHT
                        + ((elapsed_s * 3.1) + idx as f64).sin() * PUMORI_ORBIT_HEIGHT_WAVE,
                    z: center.z + (angle.sin() * radius),
                };

                let segment = sub(&next_pos, &hammer.position);
                let segment_len =
                    (segment.x * segment.x + segment.y * segment.y + segment.z * segment.z).sqrt();
                if segment_len <= 1e-4 {
                    hammer.position = next_pos;
                    continue;
                }
                let Some(segment_dir) = normalize_vec3(segment) else {
                    hammer.position = next_pos;
                    continue;
                };

                let wall_hit_dist = resolve_wall_hit_distance(
                    &inner,
                    &room_id,
                    &hammer.position,
                    &segment_dir,
                    segment_len,
                );
                let max_hit_distance = wall_hit_dist.unwrap_or(segment_len).min(segment_len);
                let segment_end = Vec3 {
                    x: hammer.position.x + (segment_dir.x * max_hit_distance),
                    y: hammer.position.y + (segment_dir.y * max_hit_distance),
                    z: hammer.position.z + (segment_dir.z * max_hit_distance),
                };

                let mut victim_hit = find_pumori_hammer_hit(
                    &inner,
                    &room_id,
                    &caster_id,
                    &hammer.position,
                    &segment_dir,
                    max_hit_distance,
                );
                if victim_hit.is_none() {
                    victim_hit = find_pumori_hammer_overlap_hit(
                        &inner,
                        &room_id,
                        &caster_id,
                        &segment_end,
                    );
                }

                hammer.position = next_pos;

                if victim_hit.is_some() {
                    hammer.active = false;
                    let impact_center = victim_hit
                        .as_ref()
                        .and_then(|victim_id| inner.clients.get(victim_id))
                        .map(|victim| Vec3 {
                            x: victim.state.position.x,
                            y: victim.state.position.y + (BODY_CENTER_OFFSET_Y * 0.45),
                            z: victim.state.position.z,
                        })
                        .unwrap_or_else(|| segment_end.clone());
                    if apply_radial_falloff_damage(
                        &mut inner,
                        &room_id,
                        &caster_id,
                        &impact_center,
                        PUMORI_SPECIAL_EXPLOSION_RADIUS,
                        PUMORI_SPECIAL_HIT_DAMAGE,
                        PUMORI_SPECIAL_MIN_FACTOR,
                        PUMORI_SPECIAL_MAX_FACTOR,
                        now,
                    ) {
                        winner = true;
                        break;
                    }
                    continue;
                }

                if wall_hit_dist.is_some() {
                    hammer.active = false;
                }
            }

            orbit_hammers.retain(|h| h.active);
            winner
        };

        if winner {
            tokio::spawn(schedule_match_reset(
                Arc::clone(&state),
                room_id.clone(),
                ROUND_RESET_SECONDS as u64,
            ));
            return;
        }
    }
}

async fn apply_delayed_authoritative_hit(
    state: Arc<WsRoomsState>,
    room_id: String,
    attacker_id: String,
    victim_id: String,
    headshot: bool,
    base_damage: f64,
    impact_point: Vec3,
    shot_ts: Option<i64>,
    impact_delay_ms: u64,
    send_hit_confirm: bool,
) {
    sleep(Duration::from_millis(impact_delay_ms)).await;

    let winner = {
        let mut inner = state.inner.lock().await;
        let Some(room) = inner.rooms.rooms.get(&room_id) else {
            return;
        };
        if room.status != RoomStatus::InGame {
            return;
        }
        if !room.players.contains(&attacker_id) || !room.players.contains(&victim_id) {
            return;
        }
        if is_friendly_fire_blocked(&inner, &room_id, &attacker_id, &victim_id) {
            return;
        }
        let Some(victim) = inner.clients.get(&victim_id) else {
            return;
        };
        if !victim.combat.alive {
            return;
        }
        if !inner.clients.contains_key(&attacker_id) {
            return;
        }
        let Some(_revalidated_headshot) = classify_point_hit_on_player_with_history(
            victim,
            &impact_point,
            headshot,
            shot_ts,
            impact_delay_ms as i64,
        ) else {
            if send_hit_confirm {
                let mut data = json!({
                  "reason": "revalidation_failed",
                  "ts": now_ms()
                });
                if let Some(shot_ts_value) = shot_ts {
                    data["shotTs"] = json!(shot_ts_value);
                }
                inner.send_to(
                    &attacker_id,
                    json!({
                      "type":"hit_miss",
                      "ok": true,
                      "data": data
                    }),
                );
            }
            return;
        };
        let ts = now_ms();
        if send_hit_confirm {
            let mut data = json!({
              "victimId": victim_id,
              "headshot": false,
              "ts": ts
            });
            if let Some(shot_ts_value) = shot_ts {
                data["shotTs"] = json!(shot_ts_value);
            }
            inner.send_to(
                &attacker_id,
                json!({
                  "type":"hit_confirm",
                  "ok": true,
                  "data": data
                }),
            );
        }
        apply_hit_and_emit(
            &mut inner,
            &room_id,
            &attacker_id,
            &victim_id,
            false,
            base_damage,
            ts,
        )
    };

    if winner {
        tokio::spawn(schedule_match_reset(
            Arc::clone(&state),
            room_id,
            ROUND_RESET_SECONDS as u64,
        ));
    }
}

fn apply_radial_falloff_damage(
    inner: &mut Inner,
    room_id: &str,
    attacker_id: &str,
    impact: &Vec3,
    radius: f64,
    base_damage: f64,
    min_factor: f64,
    max_factor: f64,
    ts: i64,
) -> bool {
    let Some(room) = inner.rooms.rooms.get(room_id) else {
        return false;
    };
    let room_players: Vec<String> = room.players.iter().cloned().collect();
    let mut winner = false;
    for victim_id in room_players {
        if victim_id == attacker_id {
            continue;
        }
        if is_friendly_fire_blocked(inner, room_id, attacker_id, &victim_id) {
            continue;
        }
        let Some(victim) = inner.clients.get(&victim_id) else {
            continue;
        };
        if !victim.combat.alive {
            continue;
        }
        let victim_aim = Vec3 {
            x: victim.state.position.x,
            y: victim.state.position.y + (BODY_CENTER_OFFSET_Y * 0.45),
            z: victim.state.position.z,
        };
        if !has_line_of_sight_with_margin(
            inner,
            room_id,
            impact,
            &victim_aim,
            RADIAL_LOS_CLEARANCE_UNITS,
        ) {
            continue;
        }
        let dx = victim.state.position.x - impact.x;
        let dz = victim.state.position.z - impact.z;
        let dy_raw = (victim_aim.y - impact.y).abs();
        let dy = dy_raw.min(RADIAL_VERTICAL_MAX_DELTA) * RADIAL_VERTICAL_FACTOR;
        let dist = (dx * dx + dz * dz + dy * dy).sqrt();
        if dist > radius {
            continue;
        }
        let t = (1.0 - (dist / radius.max(0.001))).clamp(0.0, 1.0);
        let factor = min_factor + ((max_factor - min_factor) * t);
        let mut splash_damage = base_damage * factor;
        if max_factor < 1.0 {
            splash_damage = splash_damage.min((base_damage - 0.1).max(0.0));
        } else {
            splash_damage = splash_damage.min(base_damage);
        }
        splash_damage = splash_damage.max(1.0);
        if apply_hit_and_emit(
            inner,
            room_id,
            attacker_id,
            &victim_id,
            false,
            splash_damage,
            ts,
        ) {
            winner = true;
            break;
        }
    }
    winner
}

fn apply_normal_shockwave_damage(
    inner: &mut Inner,
    room_id: &str,
    attacker_id: &str,
    impact: &Vec3,
    radius: f64,
    normal_hit_damage: f64,
    ts: i64,
) -> bool {
    apply_radial_falloff_damage(
        inner,
        room_id,
        attacker_id,
        impact,
        radius,
        normal_hit_damage,
        NORMAL_SHOCKWAVE_MIN_FACTOR,
        NORMAL_SHOCKWAVE_MAX_FACTOR,
        ts,
    )
}

async fn apply_delayed_normal_shockwave_damage(
    state: Arc<WsRoomsState>,
    room_id: String,
    attacker_id: String,
    impact: Vec3,
    delay_ms: u64,
) {
    sleep(Duration::from_millis(delay_ms)).await;

    let winner = {
        let mut inner = state.inner.lock().await;
        let Some(room) = inner.rooms.rooms.get(&room_id) else {
            return;
        };
        if room.status != RoomStatus::InGame || !room.players.contains(&attacker_id) {
            return;
        }
        if !inner.clients.contains_key(&attacker_id) {
            return;
        }
        apply_normal_shockwave_damage(
            &mut inner,
            &room_id,
            &attacker_id,
            &impact,
            NORMAL_SHOCKWAVE_RADIUS,
            HIT_DAMAGE,
            now_ms(),
        )
    };

    if winner {
        tokio::spawn(schedule_match_reset(
            Arc::clone(&state),
            room_id,
            ROUND_RESET_SECONDS as u64,
        ));
    }
}

async fn apply_delayed_radial_falloff_damage(
    state: Arc<WsRoomsState>,
    room_id: String,
    attacker_id: String,
    impact: Vec3,
    radius: f64,
    base_damage: f64,
    min_factor: f64,
    max_factor: f64,
    delay_ms: u64,
) {
    sleep(Duration::from_millis(delay_ms)).await;

    let winner = {
        let mut inner = state.inner.lock().await;
        let Some(room) = inner.rooms.rooms.get(&room_id) else {
            return;
        };
        if room.status != RoomStatus::InGame || !room.players.contains(&attacker_id) {
            return;
        }
        if !inner.clients.contains_key(&attacker_id) {
            return;
        }
        apply_radial_falloff_damage(
            &mut inner,
            &room_id,
            &attacker_id,
            &impact,
            radius,
            base_damage,
            min_factor,
            max_factor,
            now_ms(),
        )
    };

    if winner {
        tokio::spawn(schedule_match_reset(
            Arc::clone(&state),
            room_id,
            ROUND_RESET_SECONDS as u64,
        ));
    }
}

async fn apply_delayed_area_wave_damage(
    state: Arc<WsRoomsState>,
    room_id: String,
    caster_id: String,
    impacts: Vec<Vec3>,
    aoe_radius: f64,
    base_damage: f64,
    min_factor: f64,
    max_factor: f64,
    delay_ms: u64,
) {
    if impacts.is_empty() {
        return;
    }
    sleep(Duration::from_millis(delay_ms)).await;

    let winner = {
        let mut inner = state.inner.lock().await;
        let Some(room) = inner.rooms.rooms.get(&room_id) else {
            return;
        };
        if room.status != RoomStatus::InGame || !room.players.contains(&caster_id) {
            return;
        }
        if !inner.clients.contains_key(&caster_id) {
            return;
        }
        let room_players: Vec<String> = room.players.iter().cloned().collect();
        let mut hit_once = HashSet::new();
        let mut winner = false;
        let now_hit = now_ms();
        for impact in &impacts {
            for victim_id in &room_players {
                if victim_id == &caster_id || hit_once.contains(victim_id) {
                    continue;
                }
                if is_friendly_fire_blocked(&inner, &room_id, &caster_id, victim_id) {
                    continue;
                }
                let Some(victim) = inner.clients.get(victim_id) else {
                    continue;
                };
                if !victim.combat.alive {
                    continue;
                }
                let victim_aim = Vec3 {
                    x: victim.state.position.x,
                    y: victim.state.position.y + (BODY_CENTER_OFFSET_Y * 0.45),
                    z: victim.state.position.z,
                };
                if !has_line_of_sight_with_margin(
                    &inner,
                    &room_id,
                    impact,
                    &victim_aim,
                    RADIAL_LOS_CLEARANCE_UNITS,
                ) {
                    continue;
                }
                let dx = victim.state.position.x - impact.x;
                let dz = victim.state.position.z - impact.z;
                let dy_raw = (victim_aim.y - impact.y).abs();
                let dy = dy_raw.min(RADIAL_VERTICAL_MAX_DELTA) * RADIAL_VERTICAL_FACTOR;
                let dist = (dx * dx + dz * dz + dy * dy).sqrt();
                if dist > aoe_radius {
                    continue;
                }
                hit_once.insert(victim_id.clone());
                let t = (1.0 - (dist / aoe_radius.max(0.001))).clamp(0.0, 1.0);
                let factor = min_factor + ((max_factor - min_factor) * t);
                let mut damage = base_damage * factor;
                if max_factor < 1.0 {
                    damage = damage.min((base_damage - 0.1).max(0.0));
                } else {
                    damage = damage.min(base_damage);
                }
                damage = damage.max(1.0);
                if apply_hit_and_emit(
                    &mut inner,
                    &room_id,
                    &caster_id,
                    victim_id,
                    false,
                    damage,
                    now_hit,
                ) {
                    winner = true;
                    break;
                }
            }
            if winner {
                break;
            }
        }
        winner
    };

    if winner {
        tokio::spawn(schedule_match_reset(
            Arc::clone(&state),
            room_id,
            ROUND_RESET_SECONDS as u64,
        ));
    }
}

fn build_special_impacts(
    center: &Vec3,
    wave_seed: u64,
    strikes_per_wave: usize,
    min_radius: f64,
    max_radius: f64,
) -> Vec<Vec3> {
    let mut rng = SeededRng::new(wave_seed ^ 0xD0E5_51A1);
    let mut impacts = Vec::with_capacity(strikes_per_wave);
    for i in 0..strikes_per_wave {
        let angle = rng.next_f64() * std::f64::consts::TAU;
        let radius = min_radius + (rng.next_f64() * (max_radius - min_radius));
        let jitter = ((i as f64) / (strikes_per_wave.max(1) as f64)) * 0.55;
        impacts.push(Vec3 {
            x: center.x + angle.cos() * (radius + jitter),
            y: 0.2,
            z: center.z + angle.sin() * (radius + jitter),
        });
    }
    impacts
}

async fn run_lunar_rain_special(
    state: Arc<WsRoomsState>,
    room_id: String,
    caster_id: String,
    cast_origin: Vec3,
) {
    let waves = (LUNAR_SPECIAL_DURATION_MS / LUNAR_SPECIAL_WAVE_INTERVAL_MS).max(1);
    let base_seed = now_ms() as u64 ^ hash_room_id(&room_id) ^ hash_room_id(&caster_id);
    let mut ticker = interval(Duration::from_millis(LUNAR_SPECIAL_WAVE_INTERVAL_MS as u64));
    ticker.set_missed_tick_behavior(MissedTickBehavior::Skip);
    for wave_idx in 0..waves {
        ticker.tick().await;

        let impacts = {
            let inner = state.inner.lock().await;
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status != RoomStatus::InGame || !room.players.contains(&caster_id) {
                return;
            }
            let Some(caster) = inner.clients.get(&caster_id) else {
                return;
            };
            if !caster.combat.alive {
                return;
            }
            let center = caster.state.position.clone();
            let impacts = build_special_impacts(
                &center,
                base_seed ^ ((wave_idx as u64) * 0x9E37_79B9) ^ 0xAA11_BBCC,
                LUNAR_STRIKES_PER_WAVE,
                LUNAR_SPECIAL_MIN_RADIUS,
                LUNAR_SPECIAL_MAX_RADIUS,
            );
            let mut strikes = Vec::with_capacity(impacts.len());
            for (i, impact) in impacts.iter().enumerate() {
                let start = Vec3 {
                    x: impact.x + ((i as f64) * 0.17).sin() * 1.3,
                    y: 36.0 + (((wave_idx + i as i64) % 4) as f64) * 5.0,
                    z: impact.z + ((i as f64) * 0.19).cos() * 1.3,
                };
                strikes.push(json!({
                  "start": { "x": start.x, "y": start.y, "z": start.z },
                  "impact": { "x": impact.x, "y": impact.y, "z": impact.z }
                }));
            }
            inner.broadcast_room(
                &room_id,
                json!({
                  "type":"special_lunar_rain_wave",
                  "ok": true,
                  "data": {
                    "playerId": caster_id,
                    "strikes": strikes,
                    "ts": now_ms()
                  }
                }),
                None,
            );
            impacts
        };
        tokio::spawn(apply_delayed_area_wave_damage(
            Arc::clone(&state),
            room_id.clone(),
            caster_id.clone(),
            impacts,
            LUNAR_STRIKE_AOE_RADIUS,
            LUNAR_SPECIAL_HIT_DAMAGE,
            LUNAR_SPECIAL_MIN_FACTOR,
            LUNAR_SPECIAL_MAX_FACTOR,
            LUNAR_SPECIAL_IMPACT_DELAY_MS,
        ));
    }
    let _ = cast_origin;
}

async fn run_neoorphen_meteor_special(
    state: Arc<WsRoomsState>,
    room_id: String,
    caster_id: String,
    cast_origin: Vec3,
) {
    let waves = (NEOORPHEN_SPECIAL_DURATION_MS / NEOORPHEN_SPECIAL_WAVE_INTERVAL_MS).max(1);
    let base_seed = now_ms() as u64 ^ hash_room_id(&room_id) ^ hash_room_id(&caster_id) ^ 0x77CC_1144;
    let mut ticker = interval(Duration::from_millis(NEOORPHEN_SPECIAL_WAVE_INTERVAL_MS as u64));
    ticker.set_missed_tick_behavior(MissedTickBehavior::Skip);
    for wave_idx in 0..waves {
        ticker.tick().await;

        let impacts = {
            let inner = state.inner.lock().await;
            let Some(room) = inner.rooms.rooms.get(&room_id) else {
                return;
            };
            if room.status != RoomStatus::InGame || !room.players.contains(&caster_id) {
                return;
            }
            let Some(caster) = inner.clients.get(&caster_id) else {
                return;
            };
            if !caster.combat.alive {
                return;
            }
            let center = caster.state.position.clone();
            let impacts = build_special_impacts(
                &center,
                base_seed ^ ((wave_idx as u64) * 0x85EB_CA6B) ^ 0x33AA_22FF,
                NEOORPHEN_STRIKES_PER_WAVE,
                NEO_SPECIAL_MIN_RADIUS,
                NEO_SPECIAL_MAX_RADIUS,
            );
            let mut strikes = Vec::with_capacity(impacts.len());
            for (i, impact) in impacts.iter().enumerate() {
                let start = Vec3 {
                    x: impact.x + ((i as f64) * 0.13).sin() * 0.9,
                    y: 62.0 + (((wave_idx + i as i64) % 6) as f64) * 7.0,
                    z: impact.z + ((i as f64) * 0.16).cos() * 0.9,
                };
                strikes.push(json!({
                  "start": { "x": start.x, "y": start.y, "z": start.z },
                  "impact": { "x": impact.x, "y": impact.y, "z": impact.z }
                }));
            }
            inner.broadcast_room(
                &room_id,
                json!({
                  "type":"special_neoorphen_meteor_wave",
                  "ok": true,
                  "data": {
                    "playerId": caster_id,
                    "strikes": strikes,
                    "ts": now_ms()
                  }
                }),
                None,
            );
            impacts
        };
        tokio::spawn(apply_delayed_area_wave_damage(
            Arc::clone(&state),
            room_id.clone(),
            caster_id.clone(),
            impacts,
            NEOORPHEN_STRIKE_AOE_RADIUS,
            NEOORPHEN_SPECIAL_HIT_DAMAGE,
            NEO_SPECIAL_MIN_FACTOR,
            NEO_SPECIAL_MAX_FACTOR,
            NEOORPHEN_SPECIAL_IMPACT_DELAY_MS,
        ));
    }
    let _ = cast_origin;
}

async fn schedule_match_reset(state: Arc<WsRoomsState>, room_id: String, seconds: u64) {
    sleep(Duration::from_secs(seconds)).await;

    let mut inner = state.inner.lock().await;
    let Some(status) = inner.rooms.rooms.get(&room_id).map(|r| r.status) else {
        return;
    };
    if status != RoomStatus::Cooldown {
        return;
    }
    inner.ensure_room_meta(&room_id);
    let player_ids: Vec<String> = inner
        .rooms
        .rooms
        .get(&room_id)
        .map(|r| r.players.iter().cloned().collect())
        .unwrap_or_default();
    if let Some(room_mut) = inner.rooms.rooms.get_mut(&room_id) {
        room_mut.status = RoomStatus::InGame;
    }
    if let Some(meta) = inner.room_meta.get_mut(&room_id) {
        meta.rotate(&room_id);
    }
    for player_id in player_ids {
        let spawn = pick_spawn_position(&inner, &room_id, Some(&player_id));
        if let Some(client) = inner.clients.get_mut(&player_id) {
            client.kills = 0;
            client.deaths = 0;
            client.combat = default_combat_state();
            client.state = default_player_state();
            client.state.position = spawn;
            client.state_ts = now_ms();
            client.state_history.clear();
            client.state_history.push(StateSnapshot {
                ts: client.state_ts,
                position: client.state.position.clone(),
            });
        }
    }

    inner.broadcast_room(
        &room_id,
        json!({
          "type":"game_state",
          "ok": true,
          "data": game_state_payload(&inner, &room_id)
        }),
        None,
    );
    inner.broadcast_room(
        &room_id,
        json!({
          "type":"match_reset",
          "ok": true,
          "data": { "roomId": room_id }
        }),
        None,
    );
    inner.broadcast_room_state(&room_id);
    inner.broadcast_rooms_list_all();
}

fn should_expose_room_in_list(room: &crate::rooms::Room) -> bool {
    if room.is_server_managed {
        return true;
    }
    if room.mode == RoomMode::VersusMatch && room.status == RoomStatus::Cooldown {
        return false;
    }
    true
}

fn infer_versus_winner_after_leave(
    inner: &Inner,
    room_id: &str,
    leaving_team: Option<Team>,
) -> Option<Team> {
    let room = inner.rooms.rooms.get(room_id)?;
    if room.mode != RoomMode::VersusMatch || room.status != RoomStatus::InGame {
        return None;
    }
    if room.players.is_empty() {
        return None;
    }

    let mut red_count: usize = 0;
    let mut blue_count: usize = 0;
    for player_id in &room.players {
        match room.teams.get(player_id).copied() {
            Some(Team::Red) => red_count += 1,
            Some(Team::Blue) => blue_count += 1,
            None => {}
        }
    }

    let required_players = room.required_players.max(2);
    if room.players.len() < required_players {
        if let Some(remaining_team) = room
            .players
            .iter()
            .find_map(|id| room.teams.get(id).copied())
        {
            return Some(remaining_team);
        }
        if let Some(team) = leaving_team {
            return Some(team.opposite());
        }
        if red_count > blue_count {
            return Some(Team::Red);
        }
        if blue_count > red_count {
            return Some(Team::Blue);
        }
    }

    if red_count == 0 && blue_count > 0 {
        return Some(Team::Blue);
    }
    if blue_count == 0 && red_count > 0 {
        return Some(Team::Red);
    }
    if red_count == 0 && blue_count == 0 {
        if let Some(team) = leaving_team {
            return Some(team.opposite());
        }
    }

    None
}

async fn start_versus_room_deletion_countdown(
    state: Arc<WsRoomsState>,
    room_id: String,
    winner_team: Team,
) {
    {
        let mut inner = state.inner.lock().await;
        let Some(room) = inner.rooms.rooms.get(&room_id) else {
            return;
        };
        if room.mode != RoomMode::VersusMatch
            || room.is_server_managed
            || room.status != RoomStatus::InGame
        {
            return;
        }
        if let Some(room_mut) = inner.rooms.rooms.get_mut(&room_id) {
            room_mut.status = RoomStatus::Cooldown;
        }

        let winner_client_id = inner.rooms.rooms.get(&room_id).and_then(|r| {
            r.players
                .iter()
                .find(|id| r.teams.get(*id).copied() == Some(winner_team))
                .cloned()
        });
        let winner_payload = if let Some(winner_id) = winner_client_id {
            if let Some(client) = inner.clients.get(&winner_id) {
                json!({
                  "id": client.id,
                  "name": client.name,
                  "character": client.character,
                  "team": winner_team.as_wire()
                })
            } else {
                json!({
                  "id": winner_id,
                  "name": format!("Equipo {}", if winner_team == Team::Red { "Rojo" } else { "Azul" }),
                  "character": Value::Null,
                  "team": winner_team.as_wire()
                })
            }
        } else {
            json!({
              "id": "",
              "name": format!("Equipo {}", if winner_team == Team::Red { "Rojo" } else { "Azul" }),
              "character": Value::Null,
              "team": winner_team.as_wire()
            })
        };

        inner.broadcast_room(
            &room_id,
            json!({
              "type":"game_state",
              "ok": true,
              "data": game_state_payload(&inner, &room_id)
            }),
            None,
        );
        inner.broadcast_room(
            &room_id,
            json!({
              "type":"match_winner",
              "ok": true,
              "data": {
                "winner": winner_payload,
                "winnerTeam": winner_team.as_wire(),
                "winnerScore": team_kills(&inner, &room_id, winner_team),
                "killsToWin": kills_to_win_for_room(&inner, &room_id),
                "countdownSeconds": ROUND_RESET_SECONDS
              }
            }),
            None,
        );
        inner.broadcast_room_state(&room_id);
        inner.broadcast_rooms_list_all();
    }

    sleep(Duration::from_secs(ROUND_RESET_SECONDS as u64)).await;

    let mut inner = state.inner.lock().await;
    let Some(room) = inner.rooms.rooms.get(&room_id) else {
        return;
    };
    if room.mode != RoomMode::VersusMatch
        || room.is_server_managed
        || room.status != RoomStatus::Cooldown
    {
        return;
    }
    let player_ids: Vec<String> = room.players.iter().cloned().collect();
    for player_id in player_ids {
        if let Some(client) = inner.clients.get_mut(&player_id) {
            client.room_id = None;
        }
        inner.send_to(
            &player_id,
            json!({
              "type":"left_room",
              "ok": true,
              "data": Value::Null
            }),
        );
    }
    inner.rooms.rooms.remove(&room_id);
    inner.cleanup_removed_room_meta();
    inner.broadcast_rooms_list_all();
}

fn default_player_state() -> PlayerState {
    PlayerState {
        position: Vec3 {
            x: 0.0,
            y: 1.7,
            z: 0.0,
        },
        rotation: Rotation {
            yaw: 0.0,
            pitch: 0.0,
        },
        jumping: false,
        moving: false,
    }
}

fn default_combat_state() -> CombatState {
    let now = now_ms();
    CombatState {
        health: MAX_HEALTH,
        shield: START_SHIELD,
        mana: MAX_MANA,
        ammo_in_mag: MAX_AMMO_IN_MAG,
        ammo_reserve: (MAX_AMMO_TOTAL - MAX_AMMO_IN_MAG).max(0),
        reload_ends_at_ms: 0,
        respawn_available_at_ms: 0,
        pending_health_regen: 0.0,
        last_health_regen_at: now,
        last_mana_regen_at: now,
        last_shot_at: 0,
        alive: true,
        lunar_cd_until_ms: 0,
        silent_cd_until_ms: 0,
        neoorphen_cd_until_ms: 0,
        pumori_cd_until_ms: 0,
    }
}

fn update_combat_regen(combat: &mut CombatState, now_ms_v: i64) {
    if !combat.alive {
        return;
    }
    let dt_health = ((now_ms_v - combat.last_health_regen_at).max(0) as f64) / 1000.0;
    let dt_mana = ((now_ms_v - combat.last_mana_regen_at).max(0) as f64) / 1000.0;
    combat.last_health_regen_at = now_ms_v;
    combat.last_mana_regen_at = now_ms_v;

    if combat.pending_health_regen > 0.0001 && dt_health > 0.0 {
        let missing = (MAX_HEALTH - combat.health).max(0.0);
        if missing > 0.0001 {
            let recover = (HEALTH_REGEN_PER_SECOND * dt_health)
                .min(combat.pending_health_regen)
                .min(missing);
            combat.health += recover;
            combat.pending_health_regen = (combat.pending_health_regen - recover).max(0.0);
        } else {
            combat.pending_health_regen = 0.0;
        }
    }

    if dt_mana > 0.0 {
        combat.mana = (combat.mana + MANA_REGEN_PER_SECOND * dt_mana).min(MAX_MANA);
    }

    if combat.reload_ends_at_ms > 0 && now_ms_v >= combat.reload_ends_at_ms {
        combat.reload_ends_at_ms = 0;
        let needed = (MAX_AMMO_IN_MAG - combat.ammo_in_mag).max(0);
        let reloaded = needed.min(combat.ammo_reserve.max(0));
        combat.ammo_in_mag += reloaded;
        combat.ammo_reserve = (combat.ammo_reserve - reloaded).max(0);
    }

    combat.health = combat.health.clamp(0.0, MAX_HEALTH);
    combat.shield = combat.shield.clamp(0.0, MAX_SHIELD);
    combat.ammo_in_mag = combat.ammo_in_mag.clamp(0, MAX_AMMO_IN_MAG);
    combat.ammo_reserve = combat.ammo_reserve.clamp(0, MAX_AMMO_TOTAL);
}

fn player_resources_payload(combat: &CombatState, character: Option<&str>, now_ms_v: i64) -> Value {
    let is_mana = is_mana_character(character);
    let is_reloading = !is_mana && combat.reload_ends_at_ms > now_ms_v;
    let reload_remaining_ms = if is_reloading {
        (combat.reload_ends_at_ms - now_ms_v).max(0)
    } else {
        0
    };
    json!({
      "type": "player_resources",
      "ok": true,
      "data": {
        "health": combat.health,
        "shield": combat.shield.round() as i64,
        "mana": combat.mana.round() as i64,
        "ammoInMag": combat.ammo_in_mag,
        "ammoReserve": combat.ammo_reserve,
        "isReloading": is_reloading,
        "reloadRemainingMs": reload_remaining_ms,
        "pendingHealthRegen": combat.pending_health_regen,
        "lunarRainCooldownMs": current_special_cooldown_remaining_ms(combat, character, now_ms_v)
      }
    })
}

fn current_special_cooldown_remaining_ms(
    combat: &CombatState,
    character: Option<&str>,
    now_ms_v: i64,
) -> i64 {
    let key = normalize_character(character);
    let until = match key.as_str() {
        "silentman" => combat.silent_cd_until_ms,
        "pumori" => combat.pumori_cd_until_ms,
        "neoorphen" => combat.neoorphen_cd_until_ms,
        "pezunalunar" => combat.lunar_cd_until_ms,
        _ => combat.lunar_cd_until_ms,
    };
    (until - now_ms_v).max(0)
}

fn normalize_character(character: Option<&str>) -> String {
    character
        .unwrap_or("")
        .trim()
        .to_lowercase()
        .replace('ñ', "n")
}

fn push_state_snapshot(client: &mut ClientSession, ts: i64) {
    client.state_history.push(StateSnapshot {
        ts,
        position: client.state.position.clone(),
    });
    let cutoff = ts - STATE_HISTORY_WINDOW_MS;
    while client.state_history.len() > 2 {
        let first_ts = client.state_history.first().map(|s| s.ts).unwrap_or(ts);
        if first_ts >= cutoff {
            break;
        }
        client.state_history.remove(0);
    }
}

fn client_position_at(client: &ClientSession, target_ts: i64) -> Vec3 {
    if client.state_history.is_empty() {
        return client.state.position.clone();
    }
    if target_ts <= client.state_history[0].ts {
        return client.state_history[0].position.clone();
    }
    if let Some(last) = client.state_history.last() {
        if target_ts >= last.ts {
            return last.position.clone();
        }
    }
    for i in 1..client.state_history.len() {
        let prev = &client.state_history[i - 1];
        let next = &client.state_history[i];
        if target_ts < prev.ts || target_ts > next.ts {
            continue;
        }
        let span = (next.ts - prev.ts).max(1) as f64;
        let t = ((target_ts - prev.ts) as f64 / span).clamp(0.0, 1.0);
        return Vec3 {
            x: prev.position.x + (next.position.x - prev.position.x) * t,
            y: prev.position.y + (next.position.y - prev.position.y) * t,
            z: prev.position.z + (next.position.z - prev.position.z) * t,
        };
    }
    client.state.position.clone()
}

fn client_speed_at_ts(client: &ClientSession, target_ts: i64) -> f64 {
    if client.state_history.len() < 2 {
        return 0.0;
    }
    let mut prev_opt: Option<&StateSnapshot> = None;
    let mut next_opt: Option<&StateSnapshot> = None;
    for i in 1..client.state_history.len() {
        let prev = &client.state_history[i - 1];
        let next = &client.state_history[i];
        if target_ts >= prev.ts && target_ts <= next.ts {
            prev_opt = Some(prev);
            next_opt = Some(next);
            break;
        }
    }
    let (prev, next) = match (prev_opt, next_opt) {
        (Some(prev), Some(next)) => (prev, next),
        _ => {
            let len = client.state_history.len();
            (&client.state_history[len - 2], &client.state_history[len - 1])
        }
    };
    let dt_s = ((next.ts - prev.ts).max(1) as f64) / 1000.0;
    let dx = next.position.x - prev.position.x;
    let dz = next.position.z - prev.position.z;
    ((dx * dx + dz * dz).sqrt() / dt_s).clamp(0.0, PLAYER_MAX_SPEED_UNITS_PER_SECOND * 1.35)
}

fn is_mana_character(character: Option<&str>) -> bool {
    matches!(
        normalize_character(character).as_str(),
        "silentman" | "silenmant" | "pumori" | "neoorphen" | "pezunalunar" | "pezuanalunar"
    )
}

fn get_shot_interval_ms(character: Option<&str>) -> i64 {
    if is_mana_character(character) {
        MAGIC_ATTACK_INTERVAL_MS
    } else {
        BULLET_ATTACK_INTERVAL_MS
    }
}

fn projectile_speed_units_per_second(character: Option<&str>) -> f64 {
    let key = normalize_character(character);
    match key.as_str() {
        "silentman" | "silenmant" => 85.0,
        "neoorphen" => 60.0,
        "pezunalunar" | "pezuanalunar" => 80.0,
        "pumori" => 36.0,
        _ => 120.0,
    }
}

fn server_eye_origin_from_state(state: &PlayerState) -> Vec3 {
    Vec3 {
        x: clamp(state.position.x, -250.0, 250.0),
        y: clamp(state.position.y, 0.5, 4.0),
        z: clamp(state.position.z, -250.0, 250.0),
    }
}

fn server_aim_direction_from_rotation(rotation: &Rotation) -> Option<Vec3> {
    let yaw = rotation.yaw;
    let pitch = rotation.pitch;
    let cos_pitch = pitch.cos();
    normalize_vec3(Vec3 {
        x: -yaw.sin() * cos_pitch,
        y: pitch.sin(),
        z: -yaw.cos() * cos_pitch,
    })
}

fn angle_between_degrees(a: &Vec3, b: &Vec3) -> f64 {
    let d = clamp(dot(a, b), -1.0, 1.0);
    d.acos().to_degrees()
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

fn clamp_i64(value: i64, min: i64, max: i64) -> i64 {
    value.max(min).min(max)
}

fn clamp_move_step(
    prev_x: f64,
    prev_z: f64,
    desired_x: f64,
    desired_z: f64,
    dt_ms: i64,
) -> (f64, f64) {
    let dx = desired_x - prev_x;
    let dz = desired_z - prev_z;
    let step_len = (dx * dx + dz * dz).sqrt();
    if step_len <= 1e-8 {
        return (desired_x, desired_z);
    }
    let dt_s = (clamp_i64(dt_ms, 1, PLAYER_MAX_MOVE_DT_MS) as f64) / 1000.0;
    let max_step = (PLAYER_MAX_SPEED_UNITS_PER_SECOND * dt_s) + PLAYER_MOVE_TOLERANCE_UNITS;
    if step_len <= max_step {
        return (desired_x, desired_z);
    }
    let ratio = max_step / step_len;
    (prev_x + (dx * ratio), prev_z + (dz * ratio))
}

fn normalize_vec3(v: Vec3) -> Option<Vec3> {
    let len_sq = v.x * v.x + v.y * v.y + v.z * v.z;
    if len_sq <= 1e-8 {
        return None;
    }
    let inv = len_sq.sqrt().recip();
    Some(Vec3 {
        x: v.x * inv,
        y: v.y * inv,
        z: v.z * inv,
    })
}

fn dot(a: &Vec3, b: &Vec3) -> f64 {
    a.x * b.x + a.y * b.y + a.z * b.z
}

fn sub(a: &Vec3, b: &Vec3) -> Vec3 {
    Vec3 {
        x: a.x - b.x,
        y: a.y - b.y,
        z: a.z - b.z,
    }
}

fn distance_sq(a: &Vec3, b: &Vec3) -> f64 {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    let dz = a.z - b.z;
    dx * dx + dy * dy + dz * dz
}

fn ray_hit_sphere(
    origin: &Vec3,
    direction_norm: &Vec3,
    center: &Vec3,
    radius: f64,
    max_distance: f64,
) -> Option<f64> {
    let to_center = sub(center, origin);
    let projection = dot(&to_center, direction_norm);
    if projection < 0.0 || projection > max_distance {
        return None;
    }
    let projected = Vec3 {
        x: origin.x + direction_norm.x * projection,
        y: origin.y + direction_norm.y * projection,
        z: origin.z + direction_norm.z * projection,
    };
    if distance_sq(&projected, center) <= radius * radius {
        Some(projection)
    } else {
        None
    }
}

fn ray_hit_vertical_capsule(
    origin: &Vec3,
    direction_norm: &Vec3,
    center_x: f64,
    center_z: f64,
    min_y: f64,
    max_y: f64,
    radius: f64,
    max_distance: f64,
) -> Option<f64> {
    let low = min_y.min(max_y);
    let high = min_y.max(max_y);
    let steps = CAPSULE_SAMPLE_STEPS.max(2);
    let mut best: Option<f64> = None;
    for i in 0..steps {
        let t = (i as f64) / ((steps - 1) as f64);
        let center = Vec3 {
            x: center_x,
            y: low + ((high - low) * t),
            z: center_z,
        };
        let Some(dist) = ray_hit_sphere(origin, direction_norm, &center, radius, max_distance) else {
            continue;
        };
        match best {
            Some(cur) if dist >= cur => {}
            _ => best = Some(dist),
        }
    }
    best
}

fn is_friendly_fire_blocked(
    inner: &Inner,
    room_id: &str,
    attacker_id: &str,
    victim_id: &str,
) -> bool {
    let Some(room) = inner.rooms.rooms.get(room_id) else {
        return false;
    };
    if room.mode != RoomMode::VersusMatch || room.versus_type != Some(VersusType::TwoVsTwo) {
        return false;
    }
    let attacker_team = room.teams.get(attacker_id).copied();
    let victim_team = room.teams.get(victim_id).copied();
    matches!((attacker_team, victim_team), (Some(a), Some(v)) if a == v)
}

fn find_best_hit(
    inner: &Inner,
    room_id: &str,
    shooter_id: &str,
    origin: &Vec3,
    direction_norm: &Vec3,
    max_distance: f64,
    rewind_ts: i64,
) -> Option<(String, bool, f64)> {
    let room = inner.rooms.rooms.get(room_id)?;
    let mut best: Option<(String, bool, f64)> = None;
    for candidate_id in &room.players {
        if candidate_id == shooter_id {
            continue;
        }
        if is_friendly_fire_blocked(inner, room_id, shooter_id, candidate_id) {
            continue;
        }
        let Some(candidate) = inner.clients.get(candidate_id) else {
            continue;
        };
        if !candidate.combat.alive {
            continue;
        }

        let rewound = client_position_at(candidate, rewind_ts);
        let target_speed = client_speed_at_ts(candidate, rewind_ts);
        let motion_inflate =
            (target_speed * HITBOX_MOTION_INFLATE_FACTOR).clamp(0.0, HITBOX_MOTION_INFLATE_MAX);
        let sweep_window_ms = ((HITREG_SWEEP_BASE_WINDOW_MS as f64)
            + (target_speed * HITREG_SWEEP_SPEED_WINDOW_FACTOR))
            .round() as i64;
        let sweep_window_ms = sweep_window_ms.clamp(0, HITREG_SWEEP_MAX_WINDOW_MS);
        let mut sample_positions = Vec::with_capacity(3);
        if sweep_window_ms > 0 {
            sample_positions.push(client_position_at(candidate, rewind_ts - sweep_window_ms));
        }
        sample_positions.push(rewound.clone());
        if sweep_window_ms > 0 {
            sample_positions.push(client_position_at(candidate, rewind_ts + sweep_window_ms));
        }
        let head_radius = HEADSHOT_RADIUS + motion_inflate.min(HITBOX_MOTION_INFLATE_HEAD_MAX);
        let body_radius = BODYSHOT_RADIUS + motion_inflate;
        let torso_radius = TORSO_RADIUS + motion_inflate;
        let torso_capsule_radius = TORSO_CAPSULE_RADIUS + motion_inflate;
        let legs_capsule_radius = LEGS_CAPSULE_RADIUS + (motion_inflate * 0.85);
        let head_center = Vec3 {
            x: rewound.x,
            y: rewound.y + HEAD_CENTER_OFFSET_Y,
            z: rewound.z,
        };

        let mut candidate_hit: Option<(bool, f64)> = None;
        if let Some(head_dist) = ray_hit_sphere(
            origin,
            direction_norm,
            &head_center,
            head_radius,
            max_distance,
        ) {
            candidate_hit = Some((true, head_dist));
        }
        for sample in &sample_positions {
            if let Some(body_dist) = ray_hit_sphere(
                origin,
                direction_norm,
                &Vec3 {
                    x: sample.x,
                    y: sample.y + BODY_CENTER_OFFSET_Y,
                    z: sample.z,
                },
                body_radius,
                max_distance,
            ) {
                match candidate_hit {
                    Some((_is_head, cur)) if body_dist < cur => {
                        candidate_hit = Some((false, body_dist));
                    }
                    None => {
                        candidate_hit = Some((false, body_dist));
                    }
                    _ => {}
                }
            }
            if let Some(torso_dist) = ray_hit_sphere(
                origin,
                direction_norm,
                &Vec3 {
                    x: sample.x,
                    y: sample.y + (BODY_CENTER_OFFSET_Y * 0.45),
                    z: sample.z,
                },
                torso_radius,
                max_distance,
            ) {
                match candidate_hit {
                    Some((_is_head, cur)) if torso_dist < cur => {
                        candidate_hit = Some((false, torso_dist));
                    }
                    None => {
                        candidate_hit = Some((false, torso_dist));
                    }
                    _ => {}
                }
            }
            let torso_min_y = sample.y - 0.28;
            let torso_max_y = sample.y + 0.58;
            let legs_min_y = sample.y - 1.05;
            let legs_max_y = sample.y - 0.18;
            if let Some(torso_capsule_dist) = ray_hit_vertical_capsule(
                origin,
                direction_norm,
                sample.x,
                sample.z,
                torso_min_y,
                torso_max_y,
                torso_capsule_radius,
                max_distance,
            ) {
                match candidate_hit {
                    Some((_is_head, cur)) if torso_capsule_dist < cur => {
                        candidate_hit = Some((false, torso_capsule_dist));
                    }
                    None => {
                        candidate_hit = Some((false, torso_capsule_dist));
                    }
                    _ => {}
                }
            }
            if let Some(legs_capsule_dist) = ray_hit_vertical_capsule(
                origin,
                direction_norm,
                sample.x,
                sample.z,
                legs_min_y,
                legs_max_y,
                legs_capsule_radius,
                max_distance,
            ) {
                match candidate_hit {
                    Some((_is_head, cur)) if legs_capsule_dist < cur => {
                        candidate_hit = Some((false, legs_capsule_dist));
                    }
                    None => {
                        candidate_hit = Some((false, legs_capsule_dist));
                    }
                    _ => {}
                }
            }
        }

        if let Some((is_headshot, dist)) = candidate_hit {
            match &best {
                Some((_id, _h, best_dist)) if dist >= *best_dist => {}
                _ => best = Some((candidate_id.clone(), is_headshot, dist)),
            }
        }
    }
    best
}

fn find_pumori_hammer_hit(
    inner: &Inner,
    room_id: &str,
    caster_id: &str,
    origin: &Vec3,
    direction_norm: &Vec3,
    max_distance: f64,
) -> Option<String> {
    let room = inner.rooms.rooms.get(room_id)?;
    let mut best: Option<(String, f64)> = None;
    for candidate_id in &room.players {
        if candidate_id == caster_id {
            continue;
        }
        if is_friendly_fire_blocked(inner, room_id, caster_id, candidate_id) {
            continue;
        }
        let Some(candidate) = inner.clients.get(candidate_id) else {
            continue;
        };
        if !candidate.combat.alive {
            continue;
        }

        let center = &candidate.state.position;
        let head_center = Vec3 {
            x: center.x,
            y: center.y + HEAD_CENTER_OFFSET_Y,
            z: center.z,
        };
        let body_center = Vec3 {
            x: center.x,
            y: center.y + BODY_CENTER_OFFSET_Y,
            z: center.z,
        };

        let mut hit_dist: Option<f64> = None;
        if let Some(d) = ray_hit_sphere(
            origin,
            direction_norm,
            &head_center,
            PUMORI_HAMMER_HEAD_RADIUS,
            max_distance,
        ) {
            hit_dist = Some(d);
        }
        if let Some(d) = ray_hit_sphere(
            origin,
            direction_norm,
            &body_center,
            PUMORI_HAMMER_BODY_RADIUS,
            max_distance,
        ) {
            match hit_dist {
                Some(cur) if d >= cur => {}
                _ => hit_dist = Some(d),
            }
        }

        let Some(dist) = hit_dist else {
            continue;
        };
        match &best {
            Some((_id, cur)) if dist >= *cur => {}
            _ => best = Some((candidate_id.clone(), dist)),
        }
    }
    best.map(|(id, _)| id)
}

fn find_pumori_hammer_overlap_hit(
    inner: &Inner,
    room_id: &str,
    caster_id: &str,
    hammer_pos: &Vec3,
) -> Option<String> {
    let room = inner.rooms.rooms.get(room_id)?;
    let mut best: Option<(String, f64)> = None;
    for candidate_id in &room.players {
        if candidate_id == caster_id {
            continue;
        }
        if is_friendly_fire_blocked(inner, room_id, caster_id, candidate_id) {
            continue;
        }
        let Some(candidate) = inner.clients.get(candidate_id) else {
            continue;
        };
        if !candidate.combat.alive {
            continue;
        }

        let center = &candidate.state.position;
        let head_center = Vec3 {
            x: center.x,
            y: center.y + HEAD_CENTER_OFFSET_Y,
            z: center.z,
        };
        let body_center = Vec3 {
            x: center.x,
            y: center.y + BODY_CENTER_OFFSET_Y,
            z: center.z,
        };
        let head_d2 = distance_sq(hammer_pos, &head_center);
        let body_d2 = distance_sq(hammer_pos, &body_center);
        let in_head = head_d2 <= (PUMORI_HAMMER_HEAD_RADIUS * PUMORI_HAMMER_HEAD_RADIUS);
        let in_body = body_d2 <= (PUMORI_HAMMER_BODY_RADIUS * PUMORI_HAMMER_BODY_RADIUS);
        if !in_head && !in_body {
            continue;
        }
        let metric = if in_head { head_d2 } else { body_d2 };
        match &best {
            Some((_id, cur)) if metric >= *cur => {}
            _ => best = Some((candidate_id.clone(), metric)),
        }
    }
    best.map(|(id, _)| id)
}

fn ray_aabb_intersection_t(
    origin: &Vec3,
    dir: &Vec3,
    aabb: &MapBox,
    max_distance: f64,
) -> Option<f64> {
    let mut tmin = 0.0;
    let mut tmax = max_distance;
    let epsilon = 1e-6;

    let axes = [
        (origin.x, dir.x, aabb.min_x, aabb.max_x),
        (origin.y, dir.y, aabb.min_y, aabb.max_y),
        (origin.z, dir.z, aabb.min_z, aabb.max_z),
    ];

    for (o, d, min, max) in axes {
        if d.abs() < epsilon {
            if o < min || o > max {
                return None;
            }
            continue;
        }

        let inv_d = 1.0 / d;
        let mut t1 = (min - o) * inv_d;
        let mut t2 = (max - o) * inv_d;
        if t1 > t2 {
            std::mem::swap(&mut t1, &mut t2);
        }
        if t1 > tmin {
            tmin = t1;
        }
        if t2 < tmax {
            tmax = t2;
        }
        if tmax < tmin {
            return None;
        }
    }

    if tmin > max_distance {
        return None;
    }
    if tmin >= 0.0 {
        Some(tmin)
    } else if tmax >= 0.0 {
        Some(0.0)
    } else {
        None
    }
}

fn resolve_wall_hit_distance(
    inner: &Inner,
    room_id: &str,
    origin: &Vec3,
    direction_norm: &Vec3,
    max_distance: f64,
) -> Option<f64> {
    let meta = inner.room_meta.get(room_id)?;
    let mut best: Option<f64> = None;
    for box3 in &meta.map_collision {
        let Some(t) = ray_aabb_intersection_t(origin, direction_norm, box3, max_distance) else {
            continue;
        };
        if t < MIN_WALL_HIT_DISTANCE {
            continue;
        }
        match best {
            Some(current) if t >= current => {}
            _ => best = Some(t),
        }
    }
    best
}

fn resolve_ground_hit_distance(
    origin: &Vec3,
    direction_norm: &Vec3,
    max_distance: f64,
) -> Option<f64> {
    let dy = direction_norm.y;
    if dy >= -1e-6 {
        return None;
    }
    let t = (GROUND_HIT_Y - origin.y) / dy;
    if !t.is_finite() || t < MIN_WALL_HIT_DISTANCE || t > max_distance {
        return None;
    }
    Some(t)
}

fn has_line_of_sight_with_margin(
    inner: &Inner,
    room_id: &str,
    from: &Vec3,
    to: &Vec3,
    clearance: f64,
) -> bool {
    let segment = sub(to, from);
    let total_distance = (segment.x * segment.x + segment.y * segment.y + segment.z * segment.z).sqrt();
    if total_distance <= 0.0001 {
        return true;
    }
    let Some(direction) = normalize_vec3(segment) else {
        return true;
    };
    match resolve_wall_hit_distance(inner, room_id, from, &direction, total_distance) {
        Some(wall_dist) => wall_dist + clearance >= total_distance,
        None => true,
    }
}

fn classify_point_hit_on_player(
    impact_point: &Vec3,
    base_position: &Vec3,
    prefer_headshot: bool,
    margin: f64,
) -> Option<bool> {
    let head_center = Vec3 {
        x: base_position.x,
        y: base_position.y + HEAD_CENTER_OFFSET_Y,
        z: base_position.z,
    };
    let body_center = Vec3 {
        x: base_position.x,
        y: base_position.y + BODY_CENTER_OFFSET_Y,
        z: base_position.z,
    };
    let head_radius = HEADSHOT_RADIUS + margin;
    if distance_sq(impact_point, &head_center) <= head_radius * head_radius {
        return Some(true);
    }
    let body_radius = BODYSHOT_RADIUS + margin;
    if distance_sq(impact_point, &body_center) <= body_radius * body_radius {
        return Some(false);
    }
    let torso_center = Vec3 {
        x: base_position.x,
        y: base_position.y + (BODY_CENTER_OFFSET_Y * 0.45),
        z: base_position.z,
    };
    let torso_radius = TORSO_RADIUS + margin;
    if distance_sq(impact_point, &torso_center) <= torso_radius * torso_radius {
        return Some(false);
    }
    if prefer_headshot {
        return None;
    }
    None
}

fn classify_point_hit_on_player_with_history(
    victim: &ClientSession,
    impact_point: &Vec3,
    prefer_headshot: bool,
    shot_ts: Option<i64>,
    impact_delay_ms: i64,
) -> Option<bool> {
    let now = now_ms();
    let target_ts = match shot_ts {
        Some(ts) => clamp_i64(ts + impact_delay_ms, now - STATE_HISTORY_WINDOW_MS, now),
        None => now,
    };
    let sample_ts = [
        target_ts - MAGIC_IMPACT_REVALIDATION_WINDOW_MS,
        target_ts - (MAGIC_IMPACT_REVALIDATION_WINDOW_MS / 2),
        target_ts,
        target_ts + (MAGIC_IMPACT_REVALIDATION_WINDOW_MS / 2),
    ];

    let mut fallback_body: Option<bool> = None;
    for ts in sample_ts {
        let clamped_ts = clamp_i64(ts, now - STATE_HISTORY_WINDOW_MS, now);
        let pos = client_position_at(victim, clamped_ts);
        let speed = client_speed_at_ts(victim, clamped_ts);
        let margin = MAGIC_IMPACT_REVALIDATION_MARGIN
            + (speed * MAGIC_IMPACT_REVALIDATION_SPEED_FACTOR)
                .clamp(0.0, MAGIC_IMPACT_REVALIDATION_SPEED_MAX);
        if let Some(result) = classify_point_hit_on_player(impact_point, &pos, prefer_headshot, margin) {
            return Some(result);
        }
        if prefer_headshot {
            fallback_body = classify_point_hit_on_player(impact_point, &pos, false, margin)
                .or(fallback_body);
        }
    }

    fallback_body
}

fn pick_spawn_position(inner: &Inner, room_id: &str, exclude_player_id: Option<&str>) -> Vec3 {
    let Some(room) = inner.rooms.rooms.get(room_id) else {
        return Vec3 {
            x: 0.0,
            y: SPAWN_BASE_Y,
            z: 0.0,
        };
    };
    let seed = inner
        .room_meta
        .get(room_id)
        .map(|m| m.map_seed as u64)
        .unwrap_or_else(|| hash_room_id(room_id));
    let meta = inner.room_meta.get(room_id);
    let now_salt = (now_ms() as u64) & 0xffff;
    let mut rng = SeededRng::new(seed ^ now_salt ^ 0xA5A5_1F1F);

    let mut best = Vec3 {
        x: 0.0,
        y: SPAWN_BASE_Y,
        z: 0.0,
    };
    let mut best_min_dist_sq = -1.0_f64;

    for i in 0..SPAWN_POINT_COUNT {
        let angle = ((i as f64) / (SPAWN_POINT_COUNT as f64)) * std::f64::consts::TAU
            + (rng.next_f64() * 0.7);
        let ring =
            SPAWN_INNER_RADIUS + (rng.next_f64() * (SPAWN_OUTER_RADIUS - SPAWN_INNER_RADIUS));
        let candidate = Vec3 {
            x: angle.cos() * ring,
            y: SPAWN_BASE_Y,
            z: angle.sin() * ring,
        };
        if let Some(room_meta) = meta {
            if !is_valid_player_position(
                room_meta,
                candidate.x,
                candidate.z,
                PLAYER_COLLISION_RADIUS * PLAYER_PILLAR_COLLISION_FACTOR,
            ) {
                continue;
            }
        }
        let mut min_dist_sq = f64::MAX;
        for player_id in &room.players {
            if Some(player_id.as_str()) == exclude_player_id {
                continue;
            }
            let Some(other) = inner.clients.get(player_id) else {
                continue;
            };
            let d2 = distance_sq(&candidate, &other.state.position);
            if d2 < min_dist_sq {
                min_dist_sq = d2;
            }
        }
        if min_dist_sq.is_finite() && min_dist_sq > best_min_dist_sq {
            best = candidate;
            best_min_dist_sq = min_dist_sq;
        }
    }

    best
}

fn resolve_player_position(
    inner: &Inner,
    room_id: &str,
    prev_x: f64,
    prev_z: f64,
    desired_x: f64,
    desired_z: f64,
) -> (f64, f64) {
    resolve_player_position_with_radius(
        inner,
        room_id,
        prev_x,
        prev_z,
        desired_x,
        desired_z,
        PLAYER_COLLISION_RADIUS * PLAYER_PILLAR_COLLISION_FACTOR,
    )
}

fn resolve_player_position_with_radius(
    inner: &Inner,
    room_id: &str,
    prev_x: f64,
    prev_z: f64,
    desired_x: f64,
    desired_z: f64,
    collision_radius: f64,
) -> (f64, f64) {
    let Some(meta) = inner.room_meta.get(room_id) else {
        return (desired_x, desired_z);
    };

    if is_valid_player_position(meta, desired_x, desired_z, collision_radius) {
        return (desired_x, desired_z);
    }
    // Axis slide fallback reduces corner snagging against AABB pillars.
    if is_valid_player_position(meta, desired_x, prev_z, collision_radius) {
        return (desired_x, prev_z);
    }
    if is_valid_player_position(meta, prev_x, desired_z, collision_radius) {
        return (prev_x, desired_z);
    }
    if is_valid_player_position(meta, prev_x, prev_z, collision_radius) {
        return (prev_x, prev_z);
    }

    let mut best_x = prev_x;
    for i in 1..=10 {
        let t = (i as f64) / 10.0;
        let x = prev_x + (desired_x - prev_x) * t;
        if is_valid_player_position(meta, x, prev_z, collision_radius) {
            best_x = x;
        } else {
            break;
        }
    }
    if is_valid_player_position(meta, best_x, prev_z, collision_radius) {
        return (best_x, prev_z);
    }

    let mut best_z = prev_z;
    for i in 1..=10 {
        let t = (i as f64) / 10.0;
        let z = prev_z + (desired_z - prev_z) * t;
        if is_valid_player_position(meta, prev_x, z, collision_radius) {
            best_z = z;
        } else {
            break;
        }
    }
    if is_valid_player_position(meta, prev_x, best_z, collision_radius) {
        return (prev_x, best_z);
    }

    let mut last_valid = (prev_x, prev_z);
    for i in 1..=10 {
        let t = (i as f64) / 10.0;
        let x = prev_x + (desired_x - prev_x) * t;
        let z = prev_z + (desired_z - prev_z) * t;
        if is_valid_player_position(meta, x, z, collision_radius) {
            last_valid = (x, z);
        } else {
            break;
        }
    }
    last_valid
}

fn is_valid_player_position(meta: &RoomMeta, x: f64, z: f64, collision_radius: f64) -> bool {
    is_inside_map_bounds(&meta.map_profile, x, z, PLAYER_COLLISION_RADIUS + 0.05)
        && !collides_with_map_box(meta, x, z, collision_radius)
}

fn collides_with_map_box(meta: &RoomMeta, x: f64, z: f64, radius: f64) -> bool {
    for b in &meta.map_collision {
        if x + radius > b.min_x
            && x - radius < b.max_x
            && z + radius > b.min_z
            && z - radius < b.max_z
        {
            return true;
        }
    }
    false
}

fn create_map_profile(seed: u64) -> MapProfile {
    let mut rng = SeededRng::new(seed ^ 0x5f35_6495);
    MapProfile {
        axis_x: MAP_AXIS_X_BASE * (0.94 + rng.next_f64() * 0.1),
        axis_z: MAP_AXIS_Z_BASE * (0.94 + rng.next_f64() * 0.1),
        amp1: 0.1 + rng.next_f64() * 0.09,
        amp2: 0.07 + rng.next_f64() * 0.07,
        amp3: 0.05 + rng.next_f64() * 0.06,
        freq1: (2 + ((rng.next_f64() * 3.0).floor() as i64)) as f64,
        freq2: (3 + ((rng.next_f64() * 3.0).floor() as i64)) as f64,
        freq3: (5 + ((rng.next_f64() * 4.0).floor() as i64)) as f64,
        phase1: rng.next_f64() * std::f64::consts::TAU,
        phase2: rng.next_f64() * std::f64::consts::TAU,
        phase3: rng.next_f64() * std::f64::consts::TAU,
    }
}

fn create_map_collision(seed: u64) -> Vec<MapBox> {
    let mut boxes = Vec::with_capacity(MAP_PILLAR_COUNT);
    let mut rng = SeededRng::new(seed ^ 0x9E37_79B9);
    for _ in 0..MAP_PILLAR_COUNT {
        let w = 1.0 + rng.next_f64() * 3.0;
        let d = 1.0 + rng.next_f64() * 3.0;
        let h = 3.0 + rng.next_f64() * 24.0;
        let x = (rng.next_f64() - 0.5) * 220.0;
        let z = (rng.next_f64() - 0.5) * 220.0;
        boxes.push(MapBox {
            min_x: x - (w / 2.0),
            max_x: x + (w / 2.0),
            min_y: 0.0,
            max_y: h,
            min_z: z - (d / 2.0),
            max_z: z + (d / 2.0),
        });
    }
    boxes
}

fn create_pickups(seed: u64, salt: u64, count: usize) -> Vec<PickupState> {
    let mut rng = SeededRng::new(seed ^ salt);
    let mut pickups = Vec::with_capacity(count);
    for _ in 0..count {
        pickups.push(PickupState {
            x: (rng.next_f64() - 0.5) * 180.0,
            z: (rng.next_f64() - 0.5) * 180.0,
            respawn_at_ms: 0,
        });
    }
    pickups
}

fn reset_pickups(pickups: &mut [PickupState]) {
    for pickup in pickups {
        pickup.respawn_at_ms = 0;
    }
}

fn pickup_state_payload(meta: &RoomMeta, now: i64) -> Value {
    json!({
      "mana": pickup_vec_payload(&meta.mana_pickups, now),
      "shield": pickup_vec_payload(&meta.shield_pickups, now),
      "health": pickup_vec_payload(&meta.health_pickups, now),
    })
}

fn pickup_vec_payload(pickups: &[PickupState], now: i64) -> Vec<Value> {
    let mut out = Vec::with_capacity(pickups.len());
    for (index, pickup) in pickups.iter().enumerate() {
        let active = pickup.respawn_at_ms <= now;
        out.push(json!({
          "index": index,
          "active": active,
          "respawnAtMs": if active { 0 } else { pickup.respawn_at_ms }
        }));
    }
    out
}

#[derive(Clone, Copy)]
enum PickupKind {
    Mana,
    Shield,
    Health,
}

impl PickupKind {
    fn as_wire(self) -> &'static str {
        match self {
            PickupKind::Mana => "mana",
            PickupKind::Shield => "shield",
            PickupKind::Health => "health",
        }
    }
}

fn consume_pickup(
    pickups: &mut [PickupState],
    pickup_index: usize,
    player_x: f64,
    player_z: f64,
    client_position: Option<(f64, f64)>,
    now: i64,
) -> Option<i64> {
    let pickup = pickups.get_mut(pickup_index)?;
    if pickup.respawn_at_ms > now {
        return None;
    }

    let server_dx = player_x - pickup.x;
    let server_dz = player_z - pickup.z;
    let mut can_take = ((server_dx * server_dx) + (server_dz * server_dz)).sqrt() <= PICKUP_TAKE_RADIUS;

    if !can_take {
        if let Some((client_x, client_z)) = client_position {
            let drift_dx = client_x - player_x;
            let drift_dz = client_z - player_z;
            let drift = ((drift_dx * drift_dx) + (drift_dz * drift_dz)).sqrt();
            if drift <= PICKUP_CLIENT_POS_MAX_DRIFT {
                let client_dx = client_x - pickup.x;
                let client_dz = client_z - pickup.z;
                can_take = ((client_dx * client_dx) + (client_dz * client_dz)).sqrt()
                    <= PICKUP_TAKE_RADIUS;
            }
        }
    }
    if !can_take {
        return None;
    }
    let respawn_at = now + PICKUP_RESPAWN_MS;
    pickup.respawn_at_ms = respawn_at;
    Some(respawn_at)
}

fn map_collision_hash(profile: &MapProfile, boxes: &[MapBox]) -> String {
    let mut hash = 0xcbf2_9ce4_8422_2325u64;
    hash = fnv1a_update_u64(hash, boxes.len() as u64);
    hash = fnv1a_update_i64(hash, quantized_map_value(profile.axis_x));
    hash = fnv1a_update_i64(hash, quantized_map_value(profile.axis_z));
    hash = fnv1a_update_i64(hash, quantized_map_value(profile.amp1));
    hash = fnv1a_update_i64(hash, quantized_map_value(profile.amp2));
    hash = fnv1a_update_i64(hash, quantized_map_value(profile.amp3));
    hash = fnv1a_update_i64(hash, quantized_map_value(profile.freq1));
    hash = fnv1a_update_i64(hash, quantized_map_value(profile.freq2));
    hash = fnv1a_update_i64(hash, quantized_map_value(profile.freq3));
    hash = fnv1a_update_i64(hash, quantized_map_value(profile.phase1));
    hash = fnv1a_update_i64(hash, quantized_map_value(profile.phase2));
    hash = fnv1a_update_i64(hash, quantized_map_value(profile.phase3));

    for b in boxes {
        hash = fnv1a_update_i64(hash, quantized_map_value(b.min_x));
        hash = fnv1a_update_i64(hash, quantized_map_value(b.max_x));
        hash = fnv1a_update_i64(hash, quantized_map_value(b.min_z));
        hash = fnv1a_update_i64(hash, quantized_map_value(b.max_z));
    }
    format!("{hash:016x}")
}

fn quantized_map_value(v: f64) -> i64 {
    (v * 1000.0).round() as i64
}

fn fnv1a_update_u64(mut hash: u64, value: u64) -> u64 {
    for byte in value.to_le_bytes() {
        hash ^= byte as u64;
        hash = hash.wrapping_mul(0x100_0000_01b3);
    }
    hash
}

fn fnv1a_update_i64(hash: u64, value: i64) -> u64 {
    fnv1a_update_u64(hash, value as u64)
}

fn map_boundary_radius(profile: &MapProfile, theta: f64) -> f64 {
    let wave_a = ((theta * profile.freq1) + profile.phase1).sin() * profile.amp1;
    let wave_b = ((theta * profile.freq2) + profile.phase2).sin() * profile.amp2;
    let wave_c = ((theta * profile.freq3) + profile.phase3).cos() * profile.amp3;
    clamp(
        1.0 + wave_a + wave_b + wave_c,
        MAP_BOUNDARY_MIN_RADIUS,
        MAP_BOUNDARY_MAX_RADIUS,
    )
}

fn is_inside_map_bounds(profile: &MapProfile, x: f64, z: f64, padding: f64) -> bool {
    let theta = (z / profile.axis_z.max(1.0)).atan2(x / profile.axis_x.max(1.0));
    let boundary = map_boundary_radius(profile, theta);
    let norm = ((x * x) / (profile.axis_x * profile.axis_x)
        + (z * z) / (profile.axis_z * profile.axis_z))
        .sqrt();
    let normalized_padding = padding / profile.axis_x.min(profile.axis_z).max(1.0);
    norm <= (boundary - normalized_padding)
}

struct SeededRng {
    state: u64,
}

impl SeededRng {
    fn new(seed: u64) -> Self {
        Self {
            state: seed ^ 0xD1B5_4A32_D192_ED03,
        }
    }

    fn next_u32(&mut self) -> u32 {
        self.state = self.state.wrapping_mul(6364136223846793005).wrapping_add(1);
        (self.state >> 32) as u32
    }

    fn next_f64(&mut self) -> f64 {
        (self.next_u32() as f64) / (u32::MAX as f64)
    }
}

fn positive_seed(seed: u64) -> i64 {
    ((seed & 0x7fff_ffff) as i64).max(1)
}

fn hash_room_id(room_id: &str) -> u64 {
    let mut hash: u64 = 0xcbf2_9ce4_8422_2325;
    for b in room_id.as_bytes() {
        hash ^= *b as u64;
        hash = hash.wrapping_mul(0x1000_0000_01b3);
    }
    hash
}

fn room_seed(room_id: &str, now_ms_v: i64) -> u64 {
    hash_room_id(room_id) ^ (now_ms_v as u64) ^ 0x9E37_79B9_7F4A_7C15
}

fn pick_from<'a>(choices: &'a [&'a str], seed: u64, avoid: Option<&str>) -> &'a str {
    if choices.is_empty() {
        return "";
    }
    if choices.len() == 1 {
        return choices[0];
    }
    let index = (seed as usize) % choices.len();
    let picked = choices[index];
    if avoid == Some(picked) {
        choices[(index + 1) % choices.len()]
    } else {
        picked
    }
}

fn now_ms() -> i64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis() as i64
}
