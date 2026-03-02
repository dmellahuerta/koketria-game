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
