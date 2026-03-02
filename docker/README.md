# Docker Compose (desarrollo)

Guía para levantar frontend y backend con un solo comando usando `docker/docker-compose.yml`.

Estructura actual del proyecto:
- `game1/front`
- `game1/backend`

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
- En dev no existe servicio `backend` separado.
- `backend_v2` levanta internamente el backend legacy solo como dependencia temporal de compatibilidad.
- Opcional: `RUST_WS_ROOMS_ENABLED=true` para probar el lobby/salas WS implementado en Rust.

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

El servicio `backend` está configurado para ejecutar:

```bash
node index.js
```

Asegurate de tener `game1/backend/index.js`. Si tu entrypoint es otro (por ejemplo `src/server.js`), cambiá el `command` del servicio `backend` en `docker/docker-compose.yml`.

## Variables del frontend

- `VITE_API_BASE_URL` (ya configurada en compose): base HTTP del backend.
- `VITE_WS_URL` (opcional): si la defines, el frontend usará esta URL para WebSocket.

## Variables del backend (latencia / impacto)

Podés tunear estos valores sin cambiar código:

- `LAG_COMP_MS` (default `120`): ventana de lag compensation para impactos.
- `MAX_AIM_DELTA_DEG` (default `95`): tolerancia angular entre aim cliente y aim autoritativo servidor.
- `MAX_CUSTOM_ROOMS` (default `6`): máximo de salas custom `versusmatch`.
- `VERSUS_ROOM_MAX` (default `4`): capacidad inicial máxima de una sala `versusmatch` antes de elegir `1v1`/`2v2`.

Ejemplo para EC2 (Chile -> `us-east-2`):

```bash
LAG_COMP_MS=160 MAX_AIM_DELTA_DEG=95 docker compose -f docker/docker-compose.yml up --build
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
- `backend` (Fastify + WebSocket)
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
- Backend interno: `backend:3000` (no expuesto directo)
- Web PWA: habilitada solo en producción HTTPS para `misterrii.com` (dev no registra service worker).
  Si no aparece el prompt de instalación, limpia datos del sitio en Chrome móvil y recarga `https://misterrii.com` 1-2 veces.

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
- `LAG_COMP_MS` (default `160`): lag compensation backend.
- `MAX_AIM_DELTA_DEG` (default `95`): tolerancia de aim backend.

Ejemplo:

```bash
WEB_DOMAIN=misterrii.com GAME_DOMAIN=koketria.misterrii.com \
ACME_EMAIL=tu-correo@dominio.com \
LAG_COMP_MS=160 MAX_AIM_DELTA_DEG=95 \
docker compose -f docker/docker-compose.prod.yml up -d --build
```

Detener producción:

```bash
docker compose -f docker/docker-compose.prod.yml down
```
