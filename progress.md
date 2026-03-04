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
