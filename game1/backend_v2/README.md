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
