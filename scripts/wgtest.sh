#!/usr/bin/env bash
set -euo pipefail

export PATH="$HOME/.nodenv/bin:$PATH"
eval "$(nodenv init -)"
nodenv shell "${NODE_VERSION:-24.11.0}"

export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export WEB_GAME_CLIENT="${WEB_GAME_CLIENT:-$CODEX_HOME/skills/develop-web-game/scripts/web_game_playwright_client.js}"
export WEB_GAME_ACTIONS="${WEB_GAME_ACTIONS:-$CODEX_HOME/skills/develop-web-game/references/action_payloads.json}"

if [[ ! -f "$WEB_GAME_CLIENT" ]]; then
  echo "No existe WEB_GAME_CLIENT: $WEB_GAME_CLIENT" >&2
  exit 1
fi

URL="${WG_URL:-http://localhost:5173}"
CLICK_SELECTOR="${WG_CLICK_SELECTOR:-.room-card button}"
ITERATIONS="${WG_ITERATIONS:-2}"
PAUSE_MS="${WG_PAUSE_MS:-250}"
SCREENSHOT_DIR="${WG_SCREENSHOT_DIR:-output/web-game-latest}"
ACTION_FILE="${WG_ACTIONS_FILE:-$WEB_GAME_ACTIONS}"

rm -rf "$SCREENSHOT_DIR"

node "$WEB_GAME_CLIENT" \
  --url "$URL" \
  --click-selector "$CLICK_SELECTOR" \
  --actions-file "$ACTION_FILE" \
  --iterations "$ITERATIONS" \
  --pause-ms "$PAUSE_MS" \
  --screenshot-dir "$SCREENSHOT_DIR" \
  "$@"
