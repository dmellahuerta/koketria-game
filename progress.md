Original prompt: Lista completa de implementación — Quad Damage

- 2026-03-08: implementación en curso de Quad Damage backend+frontend.
- Backend: estado de spawn, pickup, buff x2, anuncio global, estado público `quadDamageUntilMs`, handler DEV `dev_trigger_quad_damage`.
- Frontend: pickup visual con caída, HUD/overlay local, sonido, kill feed anuncio, efecto cyan remoto, recolección local, preload de modelo/sonido.
- Pendiente inmediato: validar con build + Playwright y dejar commit.

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
  - Ajuste: por defecto ahora crea directorio único por corrida (`output/web-game-<run_id>`) y no borra salidas previas.
  - Limpieza opcional: `WG_CLEAN_OUTPUT=1`.

- Auditoría colisiones (2026-03-05):
  - Front: build OK tras cambios de onda expansiva esférica + health bars en collision mode.
  - Backend Rust: `cargo check` OK.
  - Carga ws: `run_ws_load_matrix` con 5 bots / 10s => errores 0, desconexiones esperadas 5/5, pong avg/max 2.57/5ms.
  - Revisión estática: rutas de impacto normal/habilidades y daño radial existen para normal shot, silent R, neo R, pezuna R y pumori R.
  - Gap pendiente: validar visualmente en sesión real de 2+ jugadores que cada habilidad especial remota muestre exactamente la misma onda de impacto en collision-only.

- Quad Damage (2026-03-08):
  - Backend: spawn/cooldown/buff x2 integrado, pickup `player_pickup_quad`, broadcast `quad_damage_incoming`/`quad_damage_collected`, estado `quadDamageUntilMs`, trigger DEV `dev_trigger_quad_damage`.
  - Frontend: pickup meteor con caída, HUD/overlay local, sonido, anuncio en kill feed, glow cyan remoto, preload de asset/sonido.
  - Validación: `cargo check -q` OK, `npm run build` OK, Playwright básico OK en lobby sin `pageerror`; `state-0.json` generado en `output/web-game-quad-check-basic`.
  - Limitación de test: la corrida con `.room-card button` no entró a sala por timeout del selector; no se validó el flujo completo de recolección in-game en esta pasada.

- 2026-03-08: perf pass aplicado. Backend: room_state coalesced por dirty flag + flush interval, payload compartido con Arc<str>, state_history con limite duro. Frontend: cache de materials para impacts, pooling de pickup sparks, menos allocaciones por frame en quad damage/hammer, rain/snow usan performance.now() una vez por frame, audio one-shot con pool por src.
- 2026-03-08: perf follow-up. Holy projectiles ahora usan scratch vectors en update loop; connected payload se arma fuera del write lock tras capturar los datos necesarios.
- 2026-03-08: perf follow-up. Holy projectiles ahora usan scratch vectors en update loop; connected payload se arma fuera del write lock tras capturar los datos necesarios.
- 2026-03-08: perf follow-up. Holy projectiles ahora usan scratch vectors en update loop; connected payload se arma fuera del write lock tras capturar los datos necesarios.
- 2026-03-08: lifecycle fixes. Guard WS listeners against stale sockets, dispose Quad custom meshes on clear, include quadDamageUntilMs in player_move, restart bot tasks cleanly after match reset, harden pickup respawn parsing, clear pending missile timers on disconnect.
- 2026-03-08: lifecycle fixes. Guard WS listeners against stale sockets, dispose Quad custom meshes on clear, include quadDamageUntilMs in player_move, restart bot tasks cleanly after match reset, harden pickup respawn parsing, clear pending missile timers on disconnect.
