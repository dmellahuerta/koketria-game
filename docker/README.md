# Docker Compose (desarrollo)

Guía para levantar frontend y backend con un solo comando usando `docker/docker-compose.yml`.

## Prerrequisitos

- Docker instalado
- Docker Compose v2 (`docker compose`)

## Levantar servicios

Desde la raíz del proyecto:

```bash
docker compose -f docker/docker-compose.yml up --build
```

Servicios expuestos:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`
- WebSocket salas: `ws://localhost:3000/ws`

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
docker compose -f docker/docker-compose.yml logs -f backend
```

## Consideraciones del backend

El servicio `backend` está configurado para ejecutar:

```bash
node index.js
```

Asegurate de tener `backend/index.js`. Si tu entrypoint es otro (por ejemplo `src/server.js`), cambiá el `command` del servicio `backend` en `docker/docker-compose.yml`.

## Variables del frontend

- `VITE_API_BASE_URL` (ya configurada en compose): base HTTP del backend.
- `VITE_WS_URL` (opcional): si la defines, el frontend usará esta URL para WebSocket.

## Variables del backend (latencia / impacto)

Podés tunear estos valores sin cambiar código:

- `LAG_COMP_MS` (default `120`): ventana de lag compensation para impactos.
- `MAX_AIM_DELTA_DEG` (default `95`): tolerancia angular entre aim cliente y aim autoritativo servidor.

Ejemplo para EC2 (Chile -> `us-east-2`):

```bash
LAG_COMP_MS=160 MAX_AIM_DELTA_DEG=95 docker compose -f docker/docker-compose.yml up --build
```

## Flujo multiplayer (salas)

- Eventos cliente -> servidor:
  - `create_room`, `join_room`, `leave_room`, `list_rooms`
  - `start_game`, `end_game` (solo host)
  - `player_move`, `player_shoot`, `player_death`
- Eventos servidor -> cliente:
  - `connected`, `rooms_list`, `room_joined`, `room_state`, `left_room`
  - `player_joined`, `player_left`, `player_move`, `player_shoot`, `player_death`, `game_state`

Estados de sala:
- `waiting`: lobby de sala
- `in_game`: partida activa
- `finished`: partida finalizada

Clima por partida (asignado al crear sala):
- `rainy`
- `sunny`
- `night`
- `snow`

## Producción (EC2 + HTTPS)

El stack productivo usa:
- `front` (Nginx con assets estáticos + proxy interno a backend para `/ws` y API)
- `backend` (Fastify + WebSocket)
- `caddy` (terminación TLS con Let's Encrypt)

Para `koketria.misterrii.com`, asegurate antes:
- DNS `A` del dominio apuntando al Elastic IP de la EC2.
- Security Group con puertos `80` y `443` abiertos.

Para levantar producción con HTTPS:

```bash
DOMAIN=koketria.misterrii.com ACME_EMAIL=tu-correo@dominio.com \
docker compose -f docker/docker-compose.prod.yml up -d --build
```

Servicios:

- App (HTTPS): `https://koketria.misterrii.com`
- Backend interno: `backend:3000` (no expuesto directo)

Cache de navegador en producción:

- `index.html`: sin cache (para tomar updates al recargar).
- `dist/assets/*` (hash de Vite): cache agresivo (`1 año`, `immutable`).
- assets públicos (`.glb`, `.gltf`, `.mp3`, etc.): cache `7 días`.

Si cambias un asset público con el mismo nombre, para invalidar más rápido:
- cambia el nombre del archivo, o
- agrega query string de versión (por ejemplo `modelo.glb?v=2`).

Variables útiles (opcional):

- `DOMAIN` (default `koketria.misterrii.com`): dominio para certificado TLS.
- `ACME_EMAIL` (opcional): email para Let's Encrypt.
- `HTTP_PORT` (default `80`): puerto HTTP público.
- `HTTPS_PORT` (default `443`): puerto HTTPS público.
- `LAG_COMP_MS` (default `160`): lag compensation backend.
- `MAX_AIM_DELTA_DEG` (default `95`): tolerancia de aim backend.

Ejemplo:

```bash
DOMAIN=koketria.misterrii.com ACME_EMAIL=tu-correo@dominio.com \
LAG_COMP_MS=160 MAX_AIM_DELTA_DEG=95 \
docker compose -f docker/docker-compose.prod.yml up -d --build
```

Detener producción:

```bash
docker compose -f docker/docker-compose.prod.yml down
```
