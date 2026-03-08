#!/bin/sh
set -eu

echo "[backend_v2] starting rust standalone on :${PORT:-3001}"
cd /app
echo "[backend_v2] dev mode enabled (debug assertions on)"
cargo run --bin backend_v2
