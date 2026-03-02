# backend_v2 (Rust)

Backend `v2` en Rust para `game1`, con compatibilidad inmediata:
- Proxy HTTP hacia backend actual
- Proxy WebSocket (`/ws`) hacia backend actual

Esto permite mantener el comportamiento del juego mientras se migra la logica interna por etapas.

## Variables de entorno

- `LISTEN_HOST` (default: `0.0.0.0`)
- `PORT` (default: `3001`)
- `BACKEND_V1_URL` (default: `http://127.0.0.1:3000`)
- `BACKEND_V1_WS_URL` (opcional; si no se define, se deriva desde `BACKEND_V1_URL`)

## Ejecutar local

```bash
cargo run
```

Por defecto queda escuchando en `http://127.0.0.1:3001` y reenviando a `http://127.0.0.1:3000`.

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
- `RUST_WS_ROOMS_ENABLED` (default `false`): si esta activo, `/ws` maneja lobby/salas desde Rust.

## Progreso fase 2 (salas en Rust)

Se agrego el dominio de salas/versus en:

- `src/rooms.rs`

Incluye reglas de:
- `create_versus_room`
- `join/leave`
- `set_versus_type`
- `set_ready`
- `switch_team`
- validacion de `start` para `1v1` / `2v2`

Con tests unitarios en el mismo archivo. En este commit todavia no esta conectado al runtime WS principal (siguiente paso de integracion).

## Integracion WS de salas (fase 2 parcial)

Se agrego `src/ws_rooms.rs` con soporte WS local para:

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

Queda detras de feature flag por env:

```bash
RUST_WS_ROOMS_ENABLED=true
```

Si no se habilita, `/ws` sigue funcionando como proxy al backend legacy.
