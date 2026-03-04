Original prompt: $develop-web-game prueba los ultimos cambios implementados

- Contexto: Validar últimos cambios de pickups/sincronización usando skill develop-web-game.
- Estado inicial: progress.md no existía, creado en este paso.
- TODO inmediato: habilitar entorno Playwright (faltante paquete playwright), levantar juego y ejecutar cliente del skill.

- Hallazgo test Playwright #1: CORS bloqueaba `GET /characters` desde `http://localhost:5173` a `http://localhost:3001`.
- Acción: agregado `tower-http` + `CorsLayer` global en backend_v2.
- Estado: `cargo check` OK.

- Test loop Playwright ejecutado con skill (`output/web-game/shot-0..2.png`).
- Resultado: sin errores de consola luego del fix CORS (antes sí existía error de `/characters`).
- Observación visual: canvas renderiza escena matrix correctamente en las 3 capturas.
- Gap técnico detectado: no se generaron `state-*.json` porque `window.render_game_to_text` no está expuesto en esta app (el cliente del skill solo lo guarda si existe).
- Siguiente paso sugerido: exponer `window.render_game_to_text` mínimo para test automatizado completo de pickups/vida/mana.

- Implementado `window.render_game_to_text` en `front/src/main.js`.
- Incluye: room/mode/status/weather, posición jugador, recursos (vida/escudo/mana/ammo/pending regen), resumen pickups activos + distancia al más cercano.
- Objetivo: que el cliente Playwright del skill exporte `state-*.json` para auditoría de sincronía de pickups.

- Re-test Playwright con `--click-selector ".room-card button"` para entrar a sala.
- Resultado in-game confirmado en `state-*.json`: `mode=freeforall`, `room.status=in_game`, `canPlay=true`.
- Recursos en estado: `health=100`, `shield=25`, `mana=100`.
- Pickups reportados por estado: `mana.active=50`, `shield.active=29`, `health.active=20` + distancia al más cercano.
- Inspección visual de `shot-0..2.png`: HUD y escena OK, sin artefactos críticos.
- Sin `errors-*.json` en esta corrida (sin errores de consola capturados).

- Ajuste para testabilidad del skill: soporte de flechas (`ArrowUp/Down/Left/Right`) mapeadas a `WASD` en keydown/keyup.
- Motivo: el cliente Playwright del skill usa `left/right/up/down`; sin este mapping no se movía el jugador durante la prueba automatizada.

- `render_game_to_text` extendido para pruebas dirigidas:
  - player yaw/pitch + vector forward(x,z)
  - para cada tipo de pickup: nearestIndex, nearestPosition, nearestDelta(x,z), nearestDistance.
- Motivo: poder diseñar trayectorias Playwright precisas hacia pickups y validar toma/sincronía.

- Nuevo helper local: `scripts/wgtest.sh`
  - Encapsula `nodenv` + variables (`CODEX_HOME`, `WEB_GAME_CLIENT`, `WEB_GAME_ACTIONS`) para no repetir el comando largo.
  - Uso base: `./scripts/wgtest.sh`
  - Overrides útiles: `WG_URL`, `WG_ITERATIONS`, `WG_PAUSE_MS`, `WG_SCREENSHOT_DIR`, `WG_ACTIONS_FILE`.
