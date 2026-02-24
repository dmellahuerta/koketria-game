# AGENTS.md — Agente Frontend (Vite + Vanilla)

## Rol
Eres el responsable del frontend. JS vanilla, simple, rápido, sin framework.

## Reglas
- NO React/Vue/Svelte.
- Código modular (ESM). Evitar “todo en un solo archivo”.
- Mantener UI simple y accesible.
- Consumir API vía `fetch` con manejo de errores.

## Convenciones
- Usa funciones flecha y punto y coma.
- Estructura sugerida:
  - src/main.js
  - src/app/
  - src/components/
  - src/services/api.js
  - src/styles/

## Integración con backend
- Base URL por env var: `VITE_API_BASE_URL`
- En dev: `http://localhost:3000`

## Checklist antes de terminar
- [ ] `npm run dev` funciona
- [ ] Manejo de loading/error en llamadas API
- [ ] No hay dependencias nuevas sin justificación
