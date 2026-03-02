mod rooms;

use std::{env, net::SocketAddr, sync::Arc};

use anyhow::{Context, Result};
use axum::{
    body::{to_bytes, Body},
    extract::{
        ws::{Message as AxumWsMessage, WebSocket, WebSocketUpgrade},
        ConnectInfo, OriginalUri, Request, State,
    },
    http::{header::HOST, HeaderMap, Method, Response, StatusCode, Uri},
    response::IntoResponse,
    routing::{any, get},
    Router,
};
use futures_util::{sink::SinkExt, stream::StreamExt};
use reqwest::Client;
use tokio::net::TcpListener;
use tokio_tungstenite::{
    connect_async,
    tungstenite::Message as TungsteniteMessage,
};
use tracing::{debug, error, info, warn};

#[derive(Clone)]
struct AppState {
    client: Client,
    upstream_http: String,
    upstream_ws: String,
}

#[tokio::main]
async fn main() -> Result<()> {
    init_tracing();

    let listen_host = env::var("LISTEN_HOST").unwrap_or_else(|_| "0.0.0.0".to_string());
    let listen_port = env::var("PORT")
        .ok()
        .and_then(|v| v.parse::<u16>().ok())
        .unwrap_or(3001);
    let upstream_http =
        env::var("BACKEND_V1_URL").unwrap_or_else(|_| "http://127.0.0.1:3000".to_string());

    let upstream_ws = match env::var("BACKEND_V1_WS_URL") {
        Ok(value) => value,
        Err(_) => http_to_ws(&upstream_http)?,
    };

    let state = Arc::new(AppState {
        client: Client::builder()
            .pool_max_idle_per_host(32)
            .tcp_nodelay(true)
            .build()
            .context("failed to build reqwest client")?,
        upstream_http,
        upstream_ws,
    });

    let app = Router::new()
        .route("/_v2/health", get(v2_health))
        .route("/ws", get(proxy_ws_upgrade))
        .fallback(any(proxy_http))
        .with_state(state);

    let addr: SocketAddr = format!("{listen_host}:{listen_port}")
        .parse()
        .context("invalid LISTEN_HOST/PORT")?;
    let listener = TcpListener::bind(addr)
        .await
        .with_context(|| format!("failed binding {addr}"))?;

    info!(
        "backend_v2 listening on http://{} and proxying HTTP={} WS={}",
        addr,
        env::var("BACKEND_V1_URL").unwrap_or_else(|_| "http://127.0.0.1:3000".to_string()),
        env::var("BACKEND_V1_WS_URL")
            .unwrap_or_else(|_| "derived from BACKEND_V1_URL".to_string())
    );

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

fn http_to_ws(http_url: &str) -> Result<String> {
    if let Some(rest) = http_url.strip_prefix("https://") {
        return Ok(format!("wss://{rest}"));
    }
    if let Some(rest) = http_url.strip_prefix("http://") {
        return Ok(format!("ws://{rest}"));
    }
    anyhow::bail!("BACKEND_V1_URL must start with http:// or https://");
}

async fn v2_health() -> impl IntoResponse {
    (StatusCode::OK, "ok")
}

async fn proxy_ws_upgrade(
    ws: WebSocketUpgrade,
    State(state): State<Arc<AppState>>,
    ConnectInfo(addr): ConnectInfo<SocketAddr>,
) -> impl IntoResponse {
    ws.on_upgrade(move |socket| async move {
        if let Err(err) = proxy_ws(socket, state, addr).await {
            error!("ws proxy error from {}: {err:#}", addr);
        }
    })
}

async fn proxy_ws(client_socket: WebSocket, state: Arc<AppState>, addr: SocketAddr) -> Result<()> {
    let upstream_url = format!("{}/ws", state.upstream_ws.trim_end_matches('/'));
    debug!("upgrading ws for {} -> {}", addr, upstream_url);

    let (upstream_socket, _) =
        connect_async(&upstream_url).await.with_context(|| format!("connect {upstream_url}"))?;
    let (mut client_tx, mut client_rx) = client_socket.split();
    let (mut upstream_tx, mut upstream_rx) = upstream_socket.split();

    let client_to_upstream = async {
        while let Some(next) = client_rx.next().await {
            let message = match next {
                Ok(msg) => msg,
                Err(err) => {
                    warn!("client ws recv error ({}): {}", addr, err);
                    break;
                }
            };

            let mapped = match map_client_ws_message(message) {
                Some(msg) => msg,
                None => continue,
            };

            if let Err(err) = upstream_tx.send(mapped).await {
                warn!("upstream ws send error ({}): {}", addr, err);
                break;
            }
        }
    };

    let upstream_to_client = async {
        while let Some(next) = upstream_rx.next().await {
            let message = match next {
                Ok(msg) => msg,
                Err(err) => {
                    warn!("upstream ws recv error ({}): {}", addr, err);
                    break;
                }
            };

            let mapped = match map_upstream_ws_message(message) {
                Some(msg) => msg,
                None => continue,
            };

            if let Err(err) = client_tx.send(mapped).await {
                warn!("client ws send error ({}): {}", addr, err);
                break;
            }
        }
    };

    tokio::select! {
        _ = client_to_upstream => {}
        _ = upstream_to_client => {}
    }

    Ok(())
}

fn map_client_ws_message(message: AxumWsMessage) -> Option<TungsteniteMessage> {
    match message {
        AxumWsMessage::Text(text) => Some(TungsteniteMessage::Text(text.to_string().into())),
        AxumWsMessage::Binary(bin) => Some(TungsteniteMessage::Binary(bin)),
        AxumWsMessage::Ping(v) => Some(TungsteniteMessage::Ping(v)),
        AxumWsMessage::Pong(v) => Some(TungsteniteMessage::Pong(v)),
        AxumWsMessage::Close(_) => Some(TungsteniteMessage::Close(None)),
    }
}

fn map_upstream_ws_message(message: TungsteniteMessage) -> Option<AxumWsMessage> {
    match message {
        TungsteniteMessage::Text(text) => Some(AxumWsMessage::Text(text.to_string().into())),
        TungsteniteMessage::Binary(bin) => Some(AxumWsMessage::Binary(bin)),
        TungsteniteMessage::Ping(v) => Some(AxumWsMessage::Ping(v)),
        TungsteniteMessage::Pong(v) => Some(AxumWsMessage::Pong(v)),
        TungsteniteMessage::Close(_) => Some(AxumWsMessage::Close(None)),
        TungsteniteMessage::Frame(_) => None,
    }
}

async fn proxy_http(
    State(state): State<Arc<AppState>>,
    method: Method,
    headers: HeaderMap,
    OriginalUri(original_uri): OriginalUri,
    request: Request,
) -> impl IntoResponse {
    if let Err(err) = ensure_http_request_has_valid_uri(&original_uri) {
        return response_with_body(StatusCode::BAD_REQUEST, format!("invalid uri: {err}"));
    }

    match forward_http_request(state, method, headers, original_uri, request).await {
        Ok(response) => response,
        Err(err) => {
            error!("http proxy error: {err:#}");
            response_with_body(StatusCode::BAD_GATEWAY, "upstream request failed".to_string())
        }
    }
}

fn ensure_http_request_has_valid_uri(uri: &Uri) -> Result<()> {
    if uri.path().is_empty() {
        anyhow::bail!("path is empty");
    }
    Ok(())
}

async fn forward_http_request(
    state: Arc<AppState>,
    method: Method,
    incoming_headers: HeaderMap,
    original_uri: Uri,
    request: Request,
) -> Result<Response<Body>> {
    let target = format!(
        "{}{}",
        state.upstream_http.trim_end_matches('/'),
        original_uri
            .path_and_query()
            .map(|pq| pq.as_str())
            .unwrap_or(original_uri.path())
    );

    let body_bytes = to_bytes(request.into_body(), usize::MAX)
        .await
        .context("read request body")?;

    let mut builder = state.client.request(method.clone(), &target);
    builder = apply_forward_headers(builder, &incoming_headers);
    let upstream_response = builder
        .body(body_bytes)
        .send()
        .await
        .with_context(|| format!("proxy {method} {target}"))?;

    let status = upstream_response.status();
    let headers = upstream_response.headers().clone();
    let body = upstream_response.bytes().await.context("read upstream body")?;

    let mut response_builder = Response::builder().status(status);
    for (name, value) in headers.iter() {
        response_builder = response_builder.header(name, value);
    }
    let response = response_builder
        .body(Body::from(body))
        .context("build downstream response")?;
    Ok(response)
}

fn apply_forward_headers(
    mut builder: reqwest::RequestBuilder,
    incoming_headers: &HeaderMap,
) -> reqwest::RequestBuilder {
    for (name, value) in incoming_headers.iter() {
        if name == HOST {
            continue;
        }
        builder = builder.header(name, value);
    }
    builder
}

fn response_with_body(status: StatusCode, body: String) -> Response<Body> {
    let mut response = Response::new(Body::from(body));
    *response.status_mut() = status;
    response
}
