# Competitive Boundary Checklist (Cierre)

Fecha: 2026-03-03  
Branch: `audit/competitive-boundary-v1`

## Regla

- Servidor: todo lo que afecta resultado competitivo.
- Cliente: todo lo sensorial/feedback.

## Estado actual

### Server-authoritative (OK)

- Movimiento valido y colisiones finales (`player_move` + resolución de mapa).
- Hitreg y daño final (normal, headshot, especiales, expansión).
- Recursos competitivos:
  - vida
  - escudo
  - mana
  - munición balística (`ammoInMag` / `ammoReserve`)
  - recarga de arma balística
- Pickups autoritativos (spawn/activo/respawn/validación por distancia).
- Respawn autoritativo con timer del backend:
  - FreeForAll: 10s
  - Versus: 3s
- Estado de partida, kills/deaths, winner/reset por backend.
- Rate-limit backend para eventos sensibles:
  - `player_shoot`
  - `player_special_*`
  - `player_pickup_*`
  - `player_reload`
  - `player_respawn`
- Validación de sincronía de mapa por `mapSeed + mapCollisionHash`.

### Client-feedback (OK)

- Cámara, input, animaciones, VFX, SFX, HUD, crosshair.
- Predicción local de movimiento + reconciliación visual.
- Disparo visual inmediato (feedback), con confirmación de disparo válido vía `player_shot_ack`.
- Métricas competitivas en panel `P` y snapshot `J`:
  - RTT ACK
  - Shot ACK avg/p95/pendientes/s
  - correcciones de reconciliación
  - `mapSync`

## Superficie bloqueada / reducida

- `player_resources` ya no se usa como polling de cliente para decidir estado.
- Respawn prematuro por cliente bloqueado en backend.
- Pickup forzado por cliente bloqueado si no cumple estado/distancia.

## Evidencia de implementación (resumen)

- `map-sync`: `c00aa03`
- pickups autoritativos: `0cd1a98`
- ammo/reload autoritativos: `d158780`
- shot ack + sin polling resources: `fbcb5f8`
- métricas shot ack (`P`/`J`): `9876281`
- hitreg targets en movimiento: `fb0f24c`
- respawn autoritativo + bloqueo request prematuro: `9858d00`
- rate-limit backend eventos sensibles: `c82e490`

## Reglas de no-regresión

- No aceptar cambios donde el cliente decida daño, recursos, cooldowns, respawn o ganador.
- No agregar lógica de colisión competitiva distinta entre backend y frontend.
- Cualquier nuevo evento de combate debe:
  - validarse en backend
  - tener límites/rate-limit
  - reflejarse en cliente solo como estado/render.
