#!/bin/sh
set -eu

echo "[backend_v2] starting rust standalone on :${PORT:-3001}"
cd /app
cargo run --release --bin backend_v2
