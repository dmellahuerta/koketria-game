#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MANIFEST_PATH="${ROOT_DIR}/Cargo.toml"

WS_URL="${WS_URL:-ws://127.0.0.1:3001/ws}"
ROOM_ID="${ROOM_ID:-main}"
DURATION_SECS="${DURATION_SECS:-120}"
MOVE_HZ="${MOVE_HZ:-16}"
SHOOT_MS="${SHOOT_MS:-1600}"
PING_MS="${PING_MS:-1500}"
JITTER="${JITTER:-0.45}"
BOTS_MATRIX="${BOTS_MATRIX:-5 10 20 30}"

echo "[ws_load_matrix] url=${WS_URL} room=${ROOM_ID} duration=${DURATION_SECS}s"
echo "[ws_load_matrix] move_hz=${MOVE_HZ} shoot_ms=${SHOOT_MS} ping_ms=${PING_MS} jitter=${JITTER}"
echo "[ws_load_matrix] bots=${BOTS_MATRIX}"

for bots in ${BOTS_MATRIX}; do
  echo
  echo "============================================================"
  echo "[ws_load_matrix] stage bots=${bots}"
  echo "============================================================"
  cargo run --release --manifest-path "${MANIFEST_PATH}" --bin ws_load -- \
    --url "${WS_URL}" \
    --room "${ROOM_ID}" \
    --bots "${bots}" \
    --duration "${DURATION_SECS}" \
    --move-hz "${MOVE_HZ}" \
    --shoot-ms "${SHOOT_MS}" \
    --ping-ms "${PING_MS}" \
    --jitter "${JITTER}"
done

echo
echo "[ws_load_matrix] done"
