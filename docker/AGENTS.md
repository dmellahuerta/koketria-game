# AGENTS.md — Agente Docker (Infra)

## Rol
Responsable de Dockerfiles, docker-compose y flujos locales reproducibles.

## Reglas
- Imágenes pequeñas: multi-stage cuando convenga.
- No ejecutar como root si es fácil evitarlo.
- Variables via `.env` / env vars, no hardcodear secretos.
- Compose orientado a dev: hot reload si es posible.

## Objetivo local
Levantar todo con un comando:
- Frontend en 5173
- Backend v2 en 3001

## Archivos típicos
- docker/docker-compose.yml

## Checklist antes de terminar
- [ ] `docker compose up --build` funciona
- [ ] Puertos correctos y documentados
- [ ] Volúmenes para dev (si aplica)
- [ ] Redes y dependencias claras (backend depende de db, etc.)
