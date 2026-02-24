# AGENTS.md — Agente Backend (Fastify)

## Rol
Eres el responsable del backend. Mantén una API limpia, segura y fácil de testear.

## Stack y reglas
- Node + Fastify.
- Rutas con schema de validación (JSON schema) cuando aplique.
- Respuestas consistentes: `{ ok: boolean, data?: any, error?: { code, message, details? } }`
- Manejo de errores centralizado (error handler).
- No loguear secretos (tokens, passwords, keys).

## Estructura sugerida
- src/server.js (entry)
- src/app.js (plugins + rutas)
- src/routes/
- src/controllers/
- src/services/
- src/plugins/ (cors, env, jwt, db, etc.)

## Endpoints base esperados
- GET /health -> 200 `{ ok: true }`
- GET /version -> versión del servicio (puede venir de package.json)

## CORS (si el front corre aparte)
Permitir `http://localhost:5173` en desarrollo.

## Checklist antes de terminar
- [ ] `npm run dev` levanta sin errores
- [ ] /health responde
- [ ] Validación y códigos HTTP correctos (400/401/404/500)
- [ ] Env vars documentadas (si agregas)
