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

## Flujo multiplayer (salas)

- Eventos cliente -> servidor:
  - `create_room`, `join_room`, `leave_room`, `list_rooms`
  - `start_game`, `end_game` (solo host)
  - `player_move`, `player_shoot`
- Eventos servidor -> cliente:
  - `connected`, `rooms_list`, `room_joined`, `room_state`, `left_room`
  - `player_joined`, `player_left`, `player_move`, `player_shoot`, `game_state`

Estados de sala:
- `waiting`: lobby de sala
- `in_game`: partida activa
- `finished`: partida finalizada
