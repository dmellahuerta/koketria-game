use std::{
    collections::HashMap,
    env,
    sync::{
        atomic::{AtomicI64, AtomicU64, Ordering},
        Arc,
    },
    time::{Duration, Instant},
};

use anyhow::{Context, Result};
use futures_util::{SinkExt, StreamExt};
use serde_json::json;
use tokio::time::interval;
use tokio_tungstenite::{connect_async, tungstenite::Message};

#[derive(Debug, Clone)]
struct Config {
    ws_url: String,
    room_id: String,
    bots: usize,
    duration_secs: u64,
    move_hz: u64,
    shoot_ms: u64,
    ping_ms: u64,
    jitter: f64,
}

#[derive(Default)]
struct SharedStats {
    connected: AtomicU64,
    disconnected: AtomicU64,
    recv_msgs: AtomicU64,
    sent_msgs: AtomicU64,
    errors: AtomicU64,
    pong_count: AtomicU64,
    pong_rtt_sum_ms: AtomicI64,
    pong_rtt_max_ms: AtomicI64,
}

fn parse_args() -> Config {
    let mut cfg = Config {
        ws_url: env::var("WS_URL").unwrap_or_else(|_| "ws://127.0.0.1:3001/ws".to_string()),
        room_id: "main".to_string(),
        bots: 10,
        duration_secs: 120,
        move_hz: 16,
        shoot_ms: 1600,
        ping_ms: 1500,
        jitter: 0.45,
    };

    let args: Vec<String> = env::args().collect();
    let mut i = 1;
    while i < args.len() {
        let key = args[i].as_str();
        let next = |idx: usize| args.get(idx + 1).cloned();
        match key {
            "--url" => {
                if let Some(v) = next(i) {
                    cfg.ws_url = v;
                    i += 1;
                }
            }
            "--room" => {
                if let Some(v) = next(i) {
                    cfg.room_id = v;
                    i += 1;
                }
            }
            "--bots" => {
                if let Some(v) = next(i) {
                    if let Ok(n) = v.parse::<usize>() {
                        cfg.bots = n.max(1);
                    }
                    i += 1;
                }
            }
            "--duration" => {
                if let Some(v) = next(i) {
                    if let Ok(n) = v.parse::<u64>() {
                        cfg.duration_secs = n.max(5);
                    }
                    i += 1;
                }
            }
            "--move-hz" => {
                if let Some(v) = next(i) {
                    if let Ok(n) = v.parse::<u64>() {
                        cfg.move_hz = n.clamp(4, 40);
                    }
                    i += 1;
                }
            }
            "--shoot-ms" => {
                if let Some(v) = next(i) {
                    if let Ok(n) = v.parse::<u64>() {
                        cfg.shoot_ms = n.max(250);
                    }
                    i += 1;
                }
            }
            "--ping-ms" => {
                if let Some(v) = next(i) {
                    if let Ok(n) = v.parse::<u64>() {
                        cfg.ping_ms = n.max(250);
                    }
                    i += 1;
                }
            }
            "--jitter" => {
                if let Some(v) = next(i) {
                    if let Ok(n) = v.parse::<f64>() {
                        cfg.jitter = n.clamp(0.0, 2.0);
                    }
                    i += 1;
                }
            }
            _ => {}
        }
        i += 1;
    }
    cfg
}

#[tokio::main]
async fn main() -> Result<()> {
    let cfg = parse_args();
    let shared = Arc::new(SharedStats::default());
    let end_at = Instant::now() + Duration::from_secs(cfg.duration_secs);

    println!(
        "[ws_load] start url={} room={} bots={} duration={}s move_hz={} shoot_ms={} ping_ms={} jitter={}",
        cfg.ws_url,
        cfg.room_id,
        cfg.bots,
        cfg.duration_secs,
        cfg.move_hz,
        cfg.shoot_ms,
        cfg.ping_ms,
        cfg.jitter
    );

    let mut handles = Vec::with_capacity(cfg.bots);
    for idx in 0..cfg.bots {
        let bot_cfg = cfg.clone();
        let bot_stats = Arc::clone(&shared);
        handles.push(tokio::spawn(async move {
            run_bot(idx, bot_cfg, bot_stats, end_at).await
        }));
        tokio::time::sleep(Duration::from_millis(18)).await;
    }

    for h in handles {
        match h.await {
            Ok(Ok(())) => {}
            Ok(Err(err)) => {
                shared.errors.fetch_add(1, Ordering::Relaxed);
                eprintln!("[ws_load] bot task error: {err:#}");
            }
            Err(err) => {
                shared.errors.fetch_add(1, Ordering::Relaxed);
                eprintln!("[ws_load] join error: {err}");
            }
        }
    }

    let connected = shared.connected.load(Ordering::Relaxed);
    let disconnected = shared.disconnected.load(Ordering::Relaxed);
    let sent = shared.sent_msgs.load(Ordering::Relaxed);
    let recv = shared.recv_msgs.load(Ordering::Relaxed);
    let errors = shared.errors.load(Ordering::Relaxed);
    let pongs = shared.pong_count.load(Ordering::Relaxed);
    let pong_sum = shared.pong_rtt_sum_ms.load(Ordering::Relaxed);
    let pong_max = shared.pong_rtt_max_ms.load(Ordering::Relaxed);
    let pong_avg = if pongs > 0 {
        pong_sum as f64 / pongs as f64
    } else {
        0.0
    };

    println!("[ws_load] done");
    println!("[ws_load] connected/disconnected: {connected}/{disconnected}");
    println!("[ws_load] sent/recv/errors: {sent}/{recv}/{errors}");
    println!("[ws_load] pong avg/max ms: {:.2}/{}", pong_avg, pong_max);

    Ok(())
}

async fn run_bot(
    idx: usize,
    cfg: Config,
    stats: Arc<SharedStats>,
    end_at: Instant,
) -> Result<()> {
    let (ws, _) = connect_async(&cfg.ws_url)
        .await
        .with_context(|| format!("bot#{idx} connect {}", cfg.ws_url))?;
    stats.connected.fetch_add(1, Ordering::Relaxed);

    let (mut sink, mut stream) = ws.split();

    let base_name = format!("bot-{idx:02}");
    let character = "silentman";
    let join = json!({
      "type": "join_room",
      "roomId": cfg.room_id,
      "playerName": base_name,
      "character": character
    });
    sink.send(Message::Text(join.to_string().into())).await?;
    stats.sent_msgs.fetch_add(1, Ordering::Relaxed);

    let mut move_tick = interval(Duration::from_millis((1000 / cfg.move_hz.max(1)).max(20)));
    let mut shoot_tick = interval(Duration::from_millis(cfg.shoot_ms.max(250)));
    let mut ping_tick = interval(Duration::from_millis(cfg.ping_ms.max(250)));

    let mut probe_sent_at: HashMap<String, Instant> = HashMap::new();
    let phase = (idx as f64) * 0.37;
    let jitter_sign = if idx % 2 == 0 { 1.0 } else { -1.0 };

    while Instant::now() < end_at {
        tokio::select! {
            _ = move_tick.tick() => {
                let elapsed = (Instant::now() + Duration::from_millis((idx as u64) * 3))
                    .duration_since(end_at - Duration::from_secs(cfg.duration_secs))
                    .as_secs_f64();
                let ang = elapsed * (0.7 + (idx as f64 * 0.03)) + phase;
                let r = 26.0 + ((idx % 7) as f64) * 3.0;
                let x = r * ang.cos() + (jitter_sign * cfg.jitter * (elapsed * 2.7).sin());
                let z = r * ang.sin() + (jitter_sign * cfg.jitter * (elapsed * 3.1).cos());
                let yaw = (-ang).rem_euclid(std::f64::consts::TAU);
                let msg = json!({
                  "type":"player_move",
                  "position": { "x": x, "y": 1.7, "z": z },
                  "rotation": { "yaw": yaw, "pitch": 0.0 },
                  "jumping": false,
                  "moving": true
                });
                if sink.send(Message::Text(msg.to_string().into())).await.is_ok() {
                    stats.sent_msgs.fetch_add(1, Ordering::Relaxed);
                } else {
                    stats.errors.fetch_add(1, Ordering::Relaxed);
                    break;
                }
            }
            _ = shoot_tick.tick() => {
                let elapsed = Instant::now()
                    .duration_since(end_at - Duration::from_secs(cfg.duration_secs))
                    .as_secs_f64();
                let a = elapsed * 0.9 + phase;
                let direction = json!({
                  "x": a.cos(),
                  "y": 0.01,
                  "z": a.sin()
                });
                let msg = json!({
                  "type":"player_shoot",
                  "origin": { "x": 0.0, "y": 1.7, "z": 0.0 },
                  "direction": direction,
                  "distance": 90.0
                });
                if sink.send(Message::Text(msg.to_string().into())).await.is_ok() {
                    stats.sent_msgs.fetch_add(1, Ordering::Relaxed);
                } else {
                    stats.errors.fetch_add(1, Ordering::Relaxed);
                    break;
                }
            }
            _ = ping_tick.tick() => {
                let probe = format!("b{}-{}", idx, Instant::now().elapsed().as_nanos());
                probe_sent_at.insert(probe.clone(), Instant::now());
                if probe_sent_at.len() > 64 {
                    probe_sent_at.clear();
                }
                let msg = json!({
                  "type":"ping",
                  "probeId": probe,
                  "clientTs": 0,
                  "rttMs": 0
                });
                if sink.send(Message::Text(msg.to_string().into())).await.is_ok() {
                    stats.sent_msgs.fetch_add(1, Ordering::Relaxed);
                } else {
                    stats.errors.fetch_add(1, Ordering::Relaxed);
                    break;
                }
            }
            incoming = stream.next() => {
                match incoming {
                    Some(Ok(Message::Text(text))) => {
                        stats.recv_msgs.fetch_add(1, Ordering::Relaxed);
                        if let Ok(v) = serde_json::from_str::<serde_json::Value>(&text) {
                            let typ = v.get("type").and_then(|x| x.as_str()).unwrap_or_default();
                            if typ == "pong" {
                                if let Some(probe_id) = v
                                    .get("data")
                                    .and_then(|d| d.get("probeId"))
                                    .and_then(|x| x.as_str())
                                {
                                    if let Some(sent_at) = probe_sent_at.remove(probe_id) {
                                        let rtt = sent_at.elapsed().as_millis() as i64;
                                        stats.pong_count.fetch_add(1, Ordering::Relaxed);
                                        stats.pong_rtt_sum_ms.fetch_add(rtt, Ordering::Relaxed);
                                        let mut cur_max = stats.pong_rtt_max_ms.load(Ordering::Relaxed);
                                        while rtt > cur_max
                                            && stats
                                                .pong_rtt_max_ms
                                                .compare_exchange(cur_max, rtt, Ordering::Relaxed, Ordering::Relaxed)
                                                .is_err()
                                        {
                                            cur_max = stats.pong_rtt_max_ms.load(Ordering::Relaxed);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    Some(Ok(Message::Close(_))) => break,
                    Some(Ok(_)) => {}
                    Some(Err(_)) | None => {
                        stats.errors.fetch_add(1, Ordering::Relaxed);
                        break;
                    }
                }
            }
        }
    }

    let _ = sink
        .send(Message::Text(json!({ "type": "leave_room" }).to_string().into()))
        .await;
    stats.disconnected.fetch_add(1, Ordering::Relaxed);
    Ok(())
}
