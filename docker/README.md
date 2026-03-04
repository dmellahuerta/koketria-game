# Docker Compose (desarrollo)

Guía para levantar frontend y backend con un solo comando usando `docker/docker-compose.yml`.

Estructura actual del proyecto:
- `game1/front`
- `game1/backend_v2`

## Prerrequisitos

- Docker instalado
- Docker Compose v2 (`docker compose`)

## Levantar servicios

Desde la raíz del proyecto:

```bash
docker compose -f docker/docker-compose.yml up --build
```

Servicios expuestos:

- Web (HTML/CSS estática): `http://localhost:80`
- Frontend juego (Vite dev): `http://localhost:5173`
- Backend v2 (Rust, endpoint dev expuesto): `http://localhost:3001`
- Health backend v2: `http://localhost:3001/_v2/health`

Nota:
- En dev no existe servicio `backend` legacy.
- `backend_v2` corre standalone (HTTP + WS + salas) en Rust.
- Opcional: `RUST_LOG=debug` para ver logs detallados de conexiones/eventos WS en backend_v2.

## Detener servicios

```bash
docker compose -f docker/docker-compose.yml down
```

## Reiniciar reconstruyendo imágenes

```bash
docker compose -f docker/docker-compose.yml up --build --force-recreate
```

## Ver logs

```bash
docker compose -f docker/docker-compose.yml logs -f
```

Logs por servicio:

```bash
docker compose -f docker/docker-compose.yml logs -f front
docker compose -f docker/docker-compose.yml logs -f backend_v2
```

## Consideraciones del backend

`backend_v2` expone:
- `GET /_v2/health` -> `ok`
- `GET /health` -> `{ ok: true, data: { status: "up" } }`
- `GET /version`
- `GET /characters`
- `GET /weapons`
- `WS /ws`

## Variables del frontend

- `VITE_API_BASE_URL` (ya configurada en compose): base HTTP del backend.
- `VITE_WS_URL` (opcional): si la defines, el frontend usará esta URL para WebSocket.
- `VITE_APP_ENV`:
  - `dev`: entorno de desarrollo normal (tu uso diario).
  - `test`: entorno de pruebas automatizadas (habilita controles de test cuando corresponde).
  - `prod`: producción (desactiva controles de test).

## Variables del backend

Podés tunear estos valores sin cambiar código:

- `MAX_CUSTOM_ROOMS` (default `6`): máximo de salas custom `versusmatch`.
- `MAX_PLAYERS_PER_ROOM` (default `5`): capacidad máxima por sala.
- `FRONT_PUBLIC_DIR` (en compose ya configurada): directorio de assets para `/characters` y `/weapons`.

Ejemplo para EC2 (Chile -> `us-east-2`):

```bash
MAX_CUSTOM_ROOMS=6 MAX_PLAYERS_PER_ROOM=5 docker compose -f docker/docker-compose.yml up --build
```

## Flujo multiplayer (salas)

- Eventos cliente -> servidor:
  - `create_room`, `join_room`, `leave_room`, `list_rooms`
  - `room_set_versus_type` (host de `versusmatch`: `1v1` o `2v2`)
  - `start_game`, `end_game` (solo host)
  - `player_move`, `player_shoot`, `player_death`
- Eventos servidor -> cliente:
  - `connected`, `rooms_list`, `room_joined`, `room_state`, `left_room`
  - `player_joined`, `player_left`, `player_move`, `player_shoot`, `player_death`, `game_state`

Estados de sala:
- `waiting`: lobby de sala
- `in_game`: partida activa
- `finished`: partida finalizada

Modos de sala:
- `freeforall`: sala principal gestionada por servidor.
- `versusmatch`: sala custom creada desde lobby, con espera en `lobby2` hasta completar cupo (`1v1` o `2v2`).

Clima por partida (asignado al crear sala):
- `rainy`
- `sunny`
- `night`
- `snow`

## Producción (EC2 + HTTPS por dominio)

El stack productivo usa:
- `web` (sitio estático HTML/CSS)
- `front` (Nginx con assets estáticos + proxy interno a backend para `/ws` y API)
- `backend_v2` (Rust standalone HTTP + WS)
- `nginx` (routing interno por `Host`)
- `caddy` (TLS automático Let's Encrypt)

Para `misterrii.com` (web) y `koketria.misterrii.com` (juego), asegurate antes:
- DNS `A` de ambos dominios apuntando al Elastic IP de la EC2.
- Security Group con puertos `80` y `443` abiertos.

Para levantar producción con HTTPS:

```bash
WEB_DOMAIN=misterrii.com GAME_DOMAIN=koketria.misterrii.com \
ACME_EMAIL=tu-correo@dominio.com \
docker compose -f docker/docker-compose.prod.yml up -d --build
```

Servicios públicos:

- Web: `https://misterrii.com`
- Juego: `https://koketria.misterrii.com`
- Backend interno: `backend_v2:3001` (no expuesto directo)
- Web PWA: habilitada solo en producción HTTPS para `misterrii.com` (dev no registra service worker).
  Si no aparece el prompt de instalación, limpia datos del sitio en Chrome móvil y recarga `https://misterrii.com` 1-2 veces.
- Game PWA: habilitada solo en producción HTTPS para `https://koketria.misterrii.com` (dev no registra service worker).
  Si no aparece instalación, limpia datos del sitio y recarga 1-2 veces.

Cache de navegador en producción:

- `index.html`: sin cache (para tomar updates al recargar).
- `dist/assets/*` (hash de Vite): cache agresivo (`1 año`, `immutable`).
- assets públicos (`.glb`, `.gltf`, `.mp3`, etc.): cache `7 días`.

Si cambias un asset público con el mismo nombre, para invalidar más rápido:
- cambia el nombre del archivo, o
- agrega query string de versión (por ejemplo `modelo.glb?v=2`).

Variables útiles (opcional):

- `HTTP_PORT` (default `80`): puerto HTTP público.
- `HTTPS_PORT` (default `443`): puerto HTTPS público.
- `WEB_DOMAIN` (default `misterrii.com`): dominio de la web.
- `GAME_DOMAIN` (default `koketria.misterrii.com`): dominio del juego.
- `ACME_EMAIL` (recomendado): email para Let's Encrypt.
- `MAX_CUSTOM_ROOMS` (default `6`): salas custom máximas.
- `MAX_PLAYERS_PER_ROOM` (default `5`): jugadores máximos por sala.

Ejemplo:

```bash
WEB_DOMAIN=misterrii.com GAME_DOMAIN=koketria.misterrii.com \
ACME_EMAIL=tu-correo@dominio.com \
MAX_CUSTOM_ROOMS=6 MAX_PLAYERS_PER_ROOM=5 \
docker compose -f docker/docker-compose.prod.yml up -d --build
```

Detener producción:

```bash
docker compose -f docker/docker-compose.prod.yml down
```
