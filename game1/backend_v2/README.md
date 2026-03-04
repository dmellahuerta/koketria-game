# backend_v2 (Rust)

Backend `v2` en Rust para `game1` (standalone).

## Variables de entorno

- `LISTEN_HOST` (default: `0.0.0.0`)
- `PORT` (default: `3001`)
- `FRONT_PUBLIC_DIR` (opcional): ruta absoluta de `front/public` para endpoints `/characters` y `/weapons`.

## Ejecutar local

```bash
cargo run
```

Por defecto queda escuchando en `http://127.0.0.1:3001`.

## Contrato congelado (fase 1)

Documentacion de contrato:

- `docs/protocol-contract.md`
- `contract/golden/core_flow.json`

Smoke de contrato (HTTP + WS):

```bash
cargo run --release --bin contract_smoke
```

Variables opcionales:

- `BASE_URL` (default `http://127.0.0.1:3001`)
- `WS_URL` (default derivada de `BASE_URL`)
- `GOLDEN_PATH` (default `contract/golden/core_flow.json`)
- `/ws` siempre corre sobre salas Rust.

## Carga WS con bots (simula jugadores)

Runner de carga sin dependencias extra:

```bash
cargo run --release --bin ws_load -- \
  --url ws://127.0.0.1:3001/ws \
  --room main \
  --bots 20 \
  --duration 180 \
  --move-hz 16 \
  --shoot-ms 1600 \
  --ping-ms 1500
```

Parámetros principales:

- `--bots`: cantidad de bots concurrentes.
- `--duration`: duración en segundos.
- `--move-hz`: frecuencia de `player_move` por bot.
- `--shoot-ms`: intervalo de `player_shoot` por bot.
- `--ping-ms`: intervalo de `ping` por bot.

Matriz automática por escalones (`5 10 20 30` por defecto):

```bash
WS_URL=ws://127.0.0.1:3001/ws \
ROOM_ID=main \
DURATION_SECS=120 \
BOTS_MATRIX="5 10 20 30" \
bash game1/backend_v2/scripts/run_ws_load_matrix.sh
```

## Salas y jugabilidad (Rust)

Se agrego el dominio de salas/versus en:

- `src/rooms.rs`

Incluye reglas de:
- `create_versus_room`
- `join/leave`
- `set_versus_type`
- `set_ready`
- `switch_team`
- validacion de `start` para `1v1` / `2v2`

Se implementa `src/ws_rooms.rs` con soporte WS para:

- `connected`, `rooms_list`, `room_joined`, `room_state`, `left_room`
- `create_room`, `join_room`, `leave_room`
- `room_set_versus_type`, `versus_set_ready`, `versus_switch_team`
- `start_game`, `end_game`
- `ping`/`pong`
- `chat_message`
- `player_move` (autoritativo en Rust con validacion y clamp)
- `player_shoot` (relay validado en Rust)
- `player_funny`
- `player_respawn` -> `player_respawned` basico
- `player_pickup_health` + `player_resources` (vida/mana/regeneracion basica en Rust)
- hitreg basico en Rust sobre `player_shoot` con eventos:
  - `hit_confirm`
  - `player_damage`
  - `player_death`
- `player_special_*` (lunar/silent/neoorphen/pumori) en Rust:
  - cooldown por personaje
  - emision visual
  - daño autoritativo y K/D para specials

## Bot de sala por chat

En sala `freeforall`, cualquier jugador puede escribir en chat:

```text
/addbot
```

Esto agrega 1 bot (nombre/personaje aleatorio) que simula jugador:
- movimiento continuo
- disparo visual periódico
- respawn automático

Límite por sala: `8` bots.
