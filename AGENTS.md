# AGENTS.md (raíz) — Reglas comunes

## Objetivo
Monorepo con:
- Frontend: Vite + JavaScript vanilla
- Backend: Fastify (API)
- Infra: Docker / Docker Compose

## Reglas globales (prioridad alta)
- Cambios pequeños y enfocados. Evita refactors grandes.
- No agregues dependencias nuevas sin justificar (por qué, alternativa, impacto).
- Mantén consistencia con el estilo existente.
- Si falta un dato clave (puertos, rutas, env vars), pregunta o propone defaults razonables y explícitalos.

## Calidad mínima
- No romper el build.
- Actualizar README o docs si cambias comandos, env vars o flujos.

## Entrega
- Devuelve: resumen + archivos tocados + cómo probar local.
