mod rooms;
mod ws_rooms;

use std::{env, net::SocketAddr, path::PathBuf, sync::Arc};

use anyhow::{Context, Result};
use axum::{
    Json, Router,
    extract::{ConnectInfo, State, ws::WebSocketUpgrade},
    http::StatusCode,
    response::IntoResponse,
    routing::get,
};
use tokio::{fs, net::TcpListener};
use tracing::info;

#[derive(Clone)]
struct AppState {
    ws_rooms_state: Arc<ws_rooms::WsRoomsState>,
    front_public_dir: PathBuf,
}

#[tokio::main]
async fn main() -> Result<()> {
    init_tracing();

    let listen_host = env::var("LISTEN_HOST").unwrap_or_else(|_| "0.0.0.0".to_string());
    let listen_port = env::var("PORT")
        .ok()
        .and_then(|v| v.parse::<u16>().ok())
        .unwrap_or(3001);

    let front_public_dir = resolve_front_public_dir();
    info!(
        "backend_v2 using FRONT_PUBLIC_DIR={}",
        front_public_dir.display()
    );

    let state = Arc::new(AppState {
        ws_rooms_state: ws_rooms::WsRoomsState::new(
            env::var("MAX_CUSTOM_ROOMS")
                .ok()
                .and_then(|v| v.parse::<usize>().ok())
                .unwrap_or(6),
            env::var("MAX_PLAYERS_PER_ROOM")
                .ok()
                .and_then(|v| v.parse::<usize>().ok())
                .unwrap_or(5),
        ),
        front_public_dir,
    });

    let app = Router::new()
        .route("/_v2/health", get(v2_health))
        .route("/health", get(health))
        .route("/version", get(version))
        .route("/characters", get(characters))
        .route("/weapons", get(weapons))
        .route("/ws", get(ws_upgrade))
        .with_state(state);

    let addr: SocketAddr = format!("{listen_host}:{listen_port}")
        .parse()
        .context("invalid LISTEN_HOST/PORT")?;
    let listener = TcpListener::bind(addr)
        .await
        .with_context(|| format!("failed binding {addr}"))?;

    info!("backend_v2 standalone listening on http://{}", addr);

    axum::serve(
        listener,
        app.into_make_service_with_connect_info::<SocketAddr>(),
    )
    .await
    .context("axum server failed")?;
    Ok(())
}

fn init_tracing() {
    let filter = tracing_subscriber::EnvFilter::try_from_default_env()
        .unwrap_or_else(|_| tracing_subscriber::EnvFilter::new("info"));
    tracing_subscriber::fmt().with_env_filter(filter).init();
}

fn resolve_front_public_dir() -> PathBuf {
    if let Ok(explicit) = env::var("FRONT_PUBLIC_DIR") {
        let path = PathBuf::from(explicit);
        if path.exists() {
            return path;
        }
    }

    let candidates = [
        PathBuf::from("/front_public"),
        PathBuf::from("../front/public"),
        PathBuf::from("front/public"),
    ];
    for candidate in candidates {
        if candidate.exists() {
            return candidate;
        }
    }

    PathBuf::from("../front/public")
}

fn ok_json(data: serde_json::Value) -> Json<serde_json::Value> {
    Json(serde_json::json!({ "ok": true, "data": data }))
}

async fn v2_health() -> impl IntoResponse {
    (StatusCode::OK, "ok")
}

async fn health() -> impl IntoResponse {
    ok_json(serde_json::json!({ "status": "up" }))
}

async fn version() -> impl IntoResponse {
    ok_json(serde_json::json!({ "version": env!("CARGO_PKG_VERSION") }))
}

async fn characters(State(state): State<Arc<AppState>>) -> impl IntoResponse {
    let dir = state.front_public_dir.join("characters");
    let mut out = Vec::<String>::new();
    if let Ok(mut rd) = fs::read_dir(dir).await {
        loop {
            match rd.next_entry().await {
                Ok(Some(entry)) => {
                    if let Ok(ft) = entry.file_type().await {
                        if ft.is_dir() {
                            out.push(entry.file_name().to_string_lossy().to_string());
                        }
                    }
                }
                Ok(None) => break,
                Err(_) => break,
            }
        }
    }
    out.sort();
    ok_json(serde_json::json!(out))
}

async fn weapons(State(state): State<Arc<AppState>>) -> impl IntoResponse {
    let dir = state.front_public_dir.join("weapons");
    let mut out = Vec::<String>::new();
    if let Ok(mut rd) = fs::read_dir(dir).await {
        loop {
            match rd.next_entry().await {
                Ok(Some(entry)) => {
                    if let Ok(ft) = entry.file_type().await {
                        if ft.is_file() {
                            let name = entry.file_name().to_string_lossy().to_string();
                            let lower = name.to_lowercase();
                            if lower.ends_with(".glb") || lower.ends_with(".gltf") {
                                out.push(name);
                            }
                        }
                    }
                }
                Ok(None) => break,
                Err(_) => break,
            }
        }
    }
    out.sort();
    ok_json(serde_json::json!(out))
}

async fn ws_upgrade(
    ws: WebSocketUpgrade,
    State(state): State<Arc<AppState>>,
    ConnectInfo(addr): ConnectInfo<SocketAddr>,
) -> impl IntoResponse {
    let ws_state = state.ws_rooms_state.clone();
    ws.on_upgrade(move |socket| async move {
        info!("ws connected from {}", addr);
        ws_rooms::handle_connection(socket, ws_state).await;
        info!("ws disconnected from {}", addr);
    })
}
