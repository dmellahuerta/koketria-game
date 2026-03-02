use std::{collections::HashMap, env, fs, time::Duration};

use anyhow::{anyhow, bail, Context, Result};
use futures_util::{SinkExt, StreamExt};
use serde_json::Value;
use tokio_tungstenite::tungstenite::Message;

#[derive(Debug, Clone)]
struct HttpRule {
    path: String,
    status: u16,
    body_equals: Option<String>,
    json_path_equals: HashMap<String, Value>,
    json_path_type: HashMap<String, String>,
}

#[derive(Debug, Clone)]
struct WsRule {
    required_events: Vec<String>,
    required_paths: HashMap<String, Vec<String>>,
}

#[derive(Debug, Clone)]
struct Golden {
    http: Vec<HttpRule>,
    ws: WsRule,
}

#[tokio::main]
async fn main() -> Result<()> {
    let base_url = env::var("BASE_URL").unwrap_or_else(|_| "http://127.0.0.1:3001".to_string());
    let ws_url = env::var("WS_URL").unwrap_or_else(|_| to_ws_url(&base_url));
    let golden_path = env::var("GOLDEN_PATH")
        .unwrap_or_else(|_| "contract/golden/core_flow.json".to_string());

    let golden = load_golden(&golden_path)?;

    println!("[contract] BASE_URL={base_url}");
    println!("[contract] WS_URL={ws_url}");
    println!("[contract] GOLDEN_PATH={golden_path}");

    let client = reqwest::Client::builder()
        .timeout(Duration::from_secs(8))
        .build()
        .context("build reqwest client")?;

    for rule in &golden.http {
        validate_http_rule(&client, &base_url, rule).await?;
    }

    validate_ws_flow(&ws_url, &golden.ws).await?;

    println!("[contract] OK");
    Ok(())
}

fn to_ws_url(base_url: &str) -> String {
    if let Some(rest) = base_url.strip_prefix("https://") {
        return format!("wss://{rest}/ws");
    }
    if let Some(rest) = base_url.strip_prefix("http://") {
        return format!("ws://{rest}/ws");
    }
    format!("ws://{base_url}/ws")
}

fn load_golden(path: &str) -> Result<Golden> {
    let raw = fs::read_to_string(path).with_context(|| format!("read golden {path}"))?;
    let v: Value = serde_json::from_str(&raw).with_context(|| format!("parse golden {path}"))?;

    let http_rules = v
        .get("http")
        .and_then(Value::as_array)
        .ok_or_else(|| anyhow!("golden.http must be an array"))?;
    let mut http = Vec::with_capacity(http_rules.len());
    for item in http_rules {
        let path = item
            .get("path")
            .and_then(Value::as_str)
            .ok_or_else(|| anyhow!("http rule missing path"))?
            .to_string();
        let status = item
            .get("status")
            .and_then(Value::as_u64)
            .ok_or_else(|| anyhow!("http rule missing status"))? as u16;
        let body_equals = item
            .get("body_equals")
            .and_then(Value::as_str)
            .map(ToString::to_string);

        let mut json_path_equals = HashMap::new();
        if let Some(map) = item.get("json_path_equals").and_then(Value::as_object) {
            for (k, val) in map {
                json_path_equals.insert(k.clone(), val.clone());
            }
        }

        let mut json_path_type = HashMap::new();
        if let Some(map) = item.get("json_path_type").and_then(Value::as_object) {
            for (k, val) in map {
                let type_name = val
                    .as_str()
                    .ok_or_else(|| anyhow!("json_path_type value for '{k}' must be string"))?;
                json_path_type.insert(k.clone(), type_name.to_string());
            }
        }

        http.push(HttpRule {
            path,
            status,
            body_equals,
            json_path_equals,
            json_path_type,
        });
    }

    let ws = v.get("ws").ok_or_else(|| anyhow!("golden.ws is required"))?;
    let required_events = ws
        .get("required_events")
        .and_then(Value::as_array)
        .ok_or_else(|| anyhow!("golden.ws.required_events must be an array"))?
        .iter()
        .map(|x| {
            x.as_str()
                .map(ToString::to_string)
                .ok_or_else(|| anyhow!("golden.ws.required_events values must be strings"))
        })
        .collect::<Result<Vec<_>>>()?;

    let mut required_paths = HashMap::new();
    if let Some(map) = ws.get("required_paths").and_then(Value::as_object) {
        for (event_name, paths_val) in map {
            let arr = paths_val
                .as_array()
                .ok_or_else(|| anyhow!("required_paths.{event_name} must be array"))?;
            let paths = arr
                .iter()
                .map(|x| {
                    x.as_str()
                        .map(ToString::to_string)
                        .ok_or_else(|| anyhow!("required_paths.{event_name} values must be strings"))
                })
                .collect::<Result<Vec<_>>>()?;
            required_paths.insert(event_name.to_string(), paths);
        }
    }

    Ok(Golden {
        http,
        ws: WsRule {
            required_events,
            required_paths,
        },
    })
}

async fn validate_http_rule(client: &reqwest::Client, base_url: &str, rule: &HttpRule) -> Result<()> {
    let url = format!("{}{}", base_url.trim_end_matches('/'), rule.path);
    let res = client
        .get(&url)
        .send()
        .await
        .with_context(|| format!("GET {url}"))?;
    let status = res.status().as_u16();
    let body = res.text().await.unwrap_or_default();

    if status != rule.status {
        bail!("http {} expected status {}, got {}", rule.path, rule.status, status);
    }

    if let Some(expected_body) = &rule.body_equals {
        if body.trim() != expected_body {
            bail!("http {} body mismatch. expected '{expected_body}', got '{}'", rule.path, body.trim());
        }
        println!("[contract][http] {} OK", rule.path);
        return Ok(());
    }

    let json: Value = serde_json::from_str(&body)
        .with_context(|| format!("http {} expected json response", rule.path))?;

    for (path, expected) in &rule.json_path_equals {
        let actual = get_path(&json, path).ok_or_else(|| anyhow!("missing json path '{path}' in {}", rule.path))?;
        if actual != expected {
            bail!(
                "http {} json path '{}' mismatch. expected {}, got {}",
                rule.path,
                path,
                expected,
                actual
            );
        }
    }

    for (path, expected_type) in &rule.json_path_type {
        let actual = get_path(&json, path).ok_or_else(|| anyhow!("missing json path '{path}' in {}", rule.path))?;
        let matches = match expected_type.as_str() {
            "array" => actual.is_array(),
            "object" => actual.is_object(),
            "string" => actual.is_string(),
            "number" => actual.is_number(),
            "boolean" => actual.is_boolean(),
            "null" => actual.is_null(),
            _ => false,
        };
        if !matches {
            bail!(
                "http {} json path '{}' type mismatch. expected {}, got {}",
                rule.path,
                path,
                expected_type,
                describe_type(actual)
            );
        }
    }

    println!("[contract][http] {} OK", rule.path);
    Ok(())
}

async fn validate_ws_flow(ws_url: &str, rules: &WsRule) -> Result<()> {
    let (mut ws, _) = tokio_tungstenite::connect_async(ws_url)
        .await
        .with_context(|| format!("connect ws {ws_url}"))?;

    let mut captured: HashMap<String, Value> = HashMap::new();

    let connected = wait_for_event(&mut ws, "connected", Duration::from_secs(8)).await?;
    captured.insert("connected".to_string(), connected.clone());

    send_json(&mut ws, serde_json::json!({ "type": "list_rooms" })).await?;
    let rooms_list = wait_for_event(&mut ws, "rooms_list", Duration::from_secs(8)).await?;
    captured.insert("rooms_list".to_string(), rooms_list.clone());

    send_json(
        &mut ws,
        serde_json::json!({
          "type": "join_room",
          "roomId": "main",
          "playerName": "contract-smoke",
          "character": "silentman"
        }),
    )
    .await?;

    let room_joined = wait_for_event(&mut ws, "room_joined", Duration::from_secs(8)).await?;
    captured.insert("room_joined".to_string(), room_joined.clone());

    let probe_id = format!("contract-{}", chrono_like_now_ms());
    send_json(
        &mut ws,
        serde_json::json!({
          "type": "ping",
          "probeId": probe_id,
          "clientTs": chrono_like_now_ms(),
          "rttMs": 0
        }),
    )
    .await?;
    let pong = wait_for_event(&mut ws, "pong", Duration::from_secs(8)).await?;
    if get_path(&pong, "data.probeId").and_then(Value::as_str) != Some(probe_id.as_str()) {
        bail!("ws pong probeId mismatch");
    }
    captured.insert("pong".to_string(), pong);

    let chat_text = format!("contract-smoke-{}", chrono_like_now_ms());
    send_json(
        &mut ws,
        serde_json::json!({
          "type": "chat_message",
          "text": chat_text
        }),
    )
    .await?;
    let chat_message = wait_for_event(&mut ws, "chat_message", Duration::from_secs(8)).await?;
    if get_path(&chat_message, "data.text").and_then(Value::as_str) != Some(chat_text.as_str()) {
        bail!("ws chat_message text mismatch");
    }
    captured.insert("chat_message".to_string(), chat_message);

    send_json(&mut ws, serde_json::json!({ "type": "leave_room" })).await?;
    let left_room = wait_for_event(&mut ws, "left_room", Duration::from_secs(8)).await?;
    captured.insert("left_room".to_string(), left_room);

    for required in &rules.required_events {
        if !captured.contains_key(required) {
            bail!("missing required ws event '{required}'");
        }
    }
    for (event, paths) in &rules.required_paths {
        let payload = captured
            .get(event)
            .ok_or_else(|| anyhow!("missing payload for required_paths event '{event}'"))?;
        for path in paths {
            if get_path(payload, path).is_none() {
                bail!("event '{event}' missing required path '{path}'");
            }
        }
    }

    ws.close(None).await.ok();
    println!("[contract][ws] core flow OK");
    Ok(())
}

async fn send_json(
    ws: &mut tokio_tungstenite::WebSocketStream<tokio_tungstenite::MaybeTlsStream<tokio::net::TcpStream>>,
    payload: Value,
) -> Result<()> {
    ws.send(Message::Text(payload.to_string().into()))
        .await
        .context("ws send")?;
    Ok(())
}

async fn wait_for_event(
    ws: &mut tokio_tungstenite::WebSocketStream<tokio_tungstenite::MaybeTlsStream<tokio::net::TcpStream>>,
    event_type: &str,
    timeout: Duration,
) -> Result<Value> {
    let deadline = tokio::time::Instant::now() + timeout;

    loop {
        let now = tokio::time::Instant::now();
        if now >= deadline {
            bail!("timeout waiting ws event '{event_type}'");
        }
        let remaining = deadline - now;
        let next = tokio::time::timeout(remaining, ws.next())
            .await
            .with_context(|| format!("timeout waiting next ws frame for '{event_type}'"))?;

        let message = match next {
            Some(Ok(msg)) => msg,
            Some(Err(err)) => return Err(anyhow!("ws receive error: {err}")),
            None => return Err(anyhow!("ws closed while waiting event '{event_type}'")),
        };

        let value = match message {
            Message::Text(text) => serde_json::from_str::<Value>(&text)
                .with_context(|| format!("invalid ws json: {text}"))?,
            Message::Binary(bin) => serde_json::from_slice::<Value>(&bin)
                .context("invalid ws binary json")?,
            Message::Ping(_) | Message::Pong(_) => continue,
            Message::Close(frame) => return Err(anyhow!("ws closed: {frame:?}")),
            Message::Frame(_) => continue,
        };

        let ty = value.get("type").and_then(Value::as_str).unwrap_or("");
        if ty == event_type {
            return Ok(value);
        }
    }
}

fn chrono_like_now_ms() -> i64 {
    use std::time::{SystemTime, UNIX_EPOCH};
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default();
    now.as_millis() as i64
}

fn get_path<'a>(root: &'a Value, path: &str) -> Option<&'a Value> {
    let mut cur = root;
    for part in path.split('.') {
        cur = cur.get(part)?;
    }
    Some(cur)
}

fn describe_type(v: &Value) -> &'static str {
    if v.is_null() {
        "null"
    } else if v.is_boolean() {
        "boolean"
    } else if v.is_number() {
        "number"
    } else if v.is_string() {
        "string"
    } else if v.is_array() {
        "array"
    } else if v.is_object() {
        "object"
    } else {
        "unknown"
    }
}
