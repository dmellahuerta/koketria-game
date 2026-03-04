# Competitive Boundary Plan (Server vs Client)

Branch objetivo: `audit/competitive-boundary-v1`

## Objetivo
Restaurar jugabilidad estable y asegurar una frontera estricta:

- Servidor: todo lo que afecta resultado competitivo.
- Cliente: todo lo que afecta sensacion, respuesta visual y audio.

## Reglas de frontera
- Servidor autoritativo:
  - vida, escudo, mana
  - daño/hit confirm/headshot
  - kills/deaths/winner/respawn
  - estado de sala y modo de partida
  - validacion final de movimiento/colisiones
- Cliente sensorial:
  - prediccion local de movimiento
  - camara, HUD, crosshair, animaciones, audio, VFX
  - interpolacion de jugadores remotos
- Prohibido:
  - decisiones competitivas finales en cliente
  - colision de mapa con logica distinta entre cliente y servidor

## Fase 1: Auditoria de contrato (sin gameplay changes)
- Inventario de eventos WS por categoria:
  - `server-authoritative`
  - `client-feedback`
- Tabla de flujo por sistema:
  - movimiento, disparo, daño, recursos, respawn, score
- Salida:
  - documento de contrato actualizado

## Fase 2: Sincronia de mapa (obligatoria)
- Exponer desde backend:
  - `mapSeed`
  - `mapCollisionHash`
- Calcular en frontend:
  - `mapCollisionHash` local tras `rebuildMapFromSeed`
- Validar:
  - `seed` igual y `hash` igual en todos los clientes
- Salida:
  - snapshot `J` con `mapSync: true/false`

## Fase 3: Movimiento estable
- Mantener politica simple:
  - prediccion local inmediata
  - reconciliacion con reglas minimas y fijas
- Evitar heuristicas en cascada
- Salida:
  - sin "caminar en el lugar"
  - sin "paso atras" recurrente

## Fase 4: Hitreg y lag compensation
- Revisar consistencia de todos los ataques:
  - normales
  - especiales
  - ondas expansivas
- Rewind uniforme por tipo de ataque
- Salida:
  - hit percibido ~ hit confirmado en pruebas 50/150/250ms

## Fase 5: Performance competitiva
- Limitar carga de VFX remotos bajo estres
- Mantener estabilidad de frame-time (no solo FPS promedio)
- Salida:
  - p95 de frame-time estable
  - sin impacto en resultado de combate

## Metricas objetivo iniciales
- `mapSync`: siempre `true`
- `soft corrections/s`: bajo y sin rachas largas
- `hard corrections/s`: cercano a 0 en local y bajo en WAN
- `late ACK/s`: bajo y no sostenido
- `predErr p95`: bajo y estable
- `frame ms p95`: estable en combate

## Protocolo de cambios
- Un cambio de netcode por commit.
- Validar local antes de WAN.
- Si rompe jugabilidad:
  - revert inmediato en la branch
  - documentar causa en este plan

## Criterio de salida de la branch
- Movimiento jugable y estable en local.
- Sin desincronizacion de mapa cliente-servidor.
- Prueba real Chile vs US con comportamiento controlado.
- Checklist de frontera server/client aprobado.
