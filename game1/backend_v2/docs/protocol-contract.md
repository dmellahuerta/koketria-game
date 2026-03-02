# Protocol Contract (Freeze v1)

Fecha de congelamiento: 2026-03-02  
Objetivo: mantener compatibilidad 1:1 entre `backend` legacy y `backend_v2` durante la migracion.

## Envelope comun

Mensajes WS y respuestas HTTP usan este sobre:

```json
{
  "type": "event_name",
  "ok": true,
  "data": {},
  "error": null
}
```

- `ok=false` implica `error` con `code` y `message`.
- En HTTP, no siempre existe `type`; si aplica, el payload sigue `ok/data/error`.

## HTTP (actual)

- `GET /_v2/health`
  - `200`
  - body: `"ok"` (health interna de gateway Rust)

- `GET /health`
  - `200`
  - `{"ok":true,"data":{"status":"up"}}`

- `GET /version`
  - `200`
  - `{"ok":true,"data":{"version":"x.y.z"}}`

- `GET /characters`
  - `200`
  - `{"ok":true,"data":["silentman","pumori", ...]}`

- `GET /weapons`
  - `200`
  - `{"ok":true,"data":["weapon1.glb", ...]}`

## WS cliente -> servidor (actual)

- `list_rooms`
- `leave_room`
- `ping` `{ probeId, clientTs, rttMs }`
- `create_room` `{ mode:'versusmatch', roomName?, playerName?, character? }`
- `join_room` `{ roomId, playerName?, character? }`
- `room_set_versus_type` `{ versusType:'1v1'|'2v2' }`
- `versus_set_ready` `{ ready:boolean }`
- `versus_switch_team` `{ team?:'red'|'blue' }`
- `start_game`
- `end_game`
- `player_move` `{ position, rotation, jumping, moving }`
- `player_shoot` `{ origin, direction, distance }`
- `player_special_lunar_rain`
- `player_special_silent_cone`
- `player_special_neoorphen_meteor`
- `player_special_pumori_orbit`
- `player_funny`
- `player_pickup_health`
- `chat_message` `{ text }`
- `player_respawn`

## WS servidor -> cliente (actual)

- Lobby/sala:
  - `connected`
  - `rooms_list`
  - `room_joined`
  - `room_state`
  - `left_room`
  - `game_state`
  - `match_winner`
  - `match_reset`
  - `error`

- Red/telemetria:
  - `pong`

- Jugadores/combate:
  - `player_joined`
  - `player_left`
  - `player_move`
  - `player_shoot`
  - `player_damage`
  - `hit_confirm`
  - `player_resources`
  - `player_death`
  - `player_respawned`
  - `player_funny`

- Especiales:
  - `special_lunar_rain_wave`
  - `special_silent_cone`
  - `special_neoorphen_meteor_wave`
  - `special_pumori_orbit_start`

- Chat:
  - `chat_message`

## Alcance de validacion automatica (fase 1)

El smoke de contrato valida:

1. HTTP critico:
   - `/_v2/health`
   - `/health`
   - `/characters`

2. Flujo WS minimo:
   - `connected`
   - `rooms_list`
   - `room_joined`
   - `pong`
   - `chat_message`
   - `left_room`

3. Campos requeridos minimos:
   - `connected.data.player.id`
   - `connected.data.player.name`
   - `connected.data.rooms` (array)
   - `room_joined.data.room.id`
   - `room_joined.data.players` (array)

