#!/bin/sh
set -eu

LEGACY_PORT="${LEGACY_PORT:-3000}"

echo "[backend_v2] starting embedded legacy backend on :${LEGACY_PORT}"
cd /legacy_backend
npm ci
PORT="${LEGACY_PORT}" node index.js &
LEGACY_PID=$!

cleanup() {
  echo "[backend_v2] stopping embedded legacy backend (pid=${LEGACY_PID})"
  kill "${LEGACY_PID}" 2>/dev/null || true
}

trap cleanup EXIT INT TERM

echo "[backend_v2] starting rust gateway on :${PORT:-3001}"
cd /app
export BACKEND_V1_URL="http://127.0.0.1:${LEGACY_PORT}"
cargo run --release --bin backend_v2
