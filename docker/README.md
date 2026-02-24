# Docker Compose (dev)

Levanta frontend y backend en modo desarrollo.

## Comando

```bash
docker compose -f docker/docker-compose.yml up --build
```

## Servicios

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Nota

El servicio `backend` ejecuta `node index.js`.
Asegurate de tener `backend/index.js` (o ajusta el `command` en `docker/docker-compose.yml` si tu entrypoint es otro).
