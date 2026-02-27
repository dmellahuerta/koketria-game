const Fastify = require('fastify');
const { WebSocket, WebSocketServer } = require('ws');
const { randomUUID } = require('node:crypto');
const { readdir } = require('node:fs/promises');
const path = require('node:path');
const pkg = require('./package.json');

const app = Fastify({ logger: true });

const envNumber = (name, fallback) => {
  const value = Number(process.env[name]);
  return Number.isFinite(value) ? value : fallback;
};

const rooms = new Map();
const clients = new Map();
const weatherTypes = ['rainy', 'sunny', 'night', 'snow'];
const maxRooms = 1;
const maxPlayersPerRoom = 5;
const serverRoomId = 'main';
const killsToWin = 20;
const roundResetSeconds = 10;
const maxHealth = 100;
const maxShield = 100;
const startShield = 0;
const hitDamage = 18;
const shieldDamageReduction = 0.6;
const shieldDamageCostFactor = 0.85;
const headshotRadius = 0.42;
const bodyshotRadius = 0.75;
const headCenterOffsetY = 0.18;
const bodyCenterOffsetY = -0.45;
const magicAttackIntervalMs = 1000;
const bulletAttackIntervalMs = 125;
const maxMana = 100;
const manaCostPerShot = Math.ceil(maxMana / 3);
const manaRegenPerSecond = 12;
const maxAimAngleDeltaDeg = envNumber('MAX_AIM_DELTA_DEG', 95);
const maxOriginDrift = 2.8;
const minWallHitDistance = 0.12;
const lagCompensationMs = envNumber('LAG_COMP_MS', 120);
const stateHistoryWindowMs = 1500;
const roomStateSyncIntervalMs = 1000;

const json = (ok, data, error) => {
  return { ok, data, error };
};

const clamp = (value, min, max) => {
  return Math.max(min, Math.min(max, value));
};

const validNumber = (value) => {
  return Number.isFinite(value);
};

const pickWeather = () => {
  const index = Math.floor(Math.random() * weatherTypes.length);
  return weatherTypes[index];
};

const pickWeatherDifferentFrom = (currentWeather) => {
  const current = String(currentWeather || '').trim();
  if (!current || weatherTypes.length < 2 || !weatherTypes.includes(current)) {
    return pickWeather();
  }

  const candidates = weatherTypes.filter((weather) => weather !== current);
  const index = Math.floor(Math.random() * candidates.length);
  return candidates[index];
};

const ensureServerRoom = () => {
  const existing = rooms.get(serverRoomId);
  if (existing) {
    return existing;
  }

  const room = {
    id: serverRoomId,
    name: 'Sala Principal',
    hostId: null,
    status: 'in_game',
    weather: pickWeather(),
    mapSeed: Math.floor(Math.random() * 0x7fffffff),
    isServerManaged: true,
    players: new Set(),
    stats: new Map(),
    combat: new Map(),
    mapCollision: null,
    roundResetTimer: null,
  };
  rooms.set(room.id, room);
  return room;
};

const clearRoundResetTimer = (room) => {
  if (!room || !room.roundResetTimer) {
    return;
  }
  clearTimeout(room.roundResetTimer);
  room.roundResetTimer = null;
};

const resetRoomStats = (room) => {
  if (!room) {
    return;
  }
  room.players.forEach((playerId) => {
    room.stats.set(playerId, { kills: 0, deaths: 0 });
  });
};

const resetRoomCombat = (room) => {
  if (!room) {
    return;
  }
  const now = Date.now();
  room.players.forEach((playerId) => {
    room.combat.set(playerId, {
      health: maxHealth,
      shield: startShield,
      alive: true,
      mana: maxMana,
      lastManaRegenAt: now,
      lastShotAt: 0,
    });
  });
};

const getCombatState = (room, playerId) => {
  if (!room.combat.has(playerId)) {
    const now = Date.now();
    room.combat.set(playerId, {
      health: maxHealth,
      shield: startShield,
      alive: true,
      mana: maxMana,
      lastManaRegenAt: now,
      lastShotAt: 0,
    });
  }
  return room.combat.get(playerId);
};

const updateRoomCombatRegen = (room, nowMs = Date.now()) => {
  if (!room) {
    return;
  }
  room.players.forEach((playerId) => {
    const combat = getCombatState(room, playerId);
    updateCombatMana(combat, nowMs);
  });
};

const pushClientStateSnapshot = (client, tsMs = Date.now()) => {
  if (!client) {
    return;
  }
  if (!Array.isArray(client.stateHistory)) {
    client.stateHistory = [];
  }
  const pos = client.state?.position || {};
  const rot = client.state?.rotation || {};
  client.stateHistory.push({
    ts: tsMs,
    position: {
      x: Number(pos.x || 0),
      y: Number(pos.y || 1.7),
      z: Number(pos.z || 0),
    },
    rotation: {
      yaw: Number(rot.yaw || 0),
      pitch: Number(rot.pitch || 0),
    },
    jumping: Boolean(client.state?.jumping),
  });

  const cutoff = tsMs - stateHistoryWindowMs;
  while (client.stateHistory.length > 2 && client.stateHistory[0].ts < cutoff) {
    client.stateHistory.shift();
  }
};

const getClientPositionAt = (client, targetTsMs) => {
  if (!client?.state) {
    return null;
  }
  const history = Array.isArray(client.stateHistory) ? client.stateHistory : [];
  if (history.length === 0) {
    const p = client.state.position || {};
    return { x: Number(p.x || 0), y: Number(p.y || 1.7), z: Number(p.z || 0) };
  }

  if (targetTsMs <= history[0].ts) {
    const p = history[0].position;
    return { x: p.x, y: p.y, z: p.z };
  }
  const last = history[history.length - 1];
  if (targetTsMs >= last.ts) {
    const p = last.position;
    return { x: p.x, y: p.y, z: p.z };
  }

  for (let i = 1; i < history.length; i += 1) {
    const prev = history[i - 1];
    const next = history[i];
    if (targetTsMs < prev.ts || targetTsMs > next.ts) {
      continue;
    }
    const span = Math.max(1, next.ts - prev.ts);
    const t = Math.max(0, Math.min(1, (targetTsMs - prev.ts) / span));
    return {
      x: prev.position.x + ((next.position.x - prev.position.x) * t),
      y: prev.position.y + ((next.position.y - prev.position.y) * t),
      z: prev.position.z + ((next.position.z - prev.position.z) * t),
    };
  }

  const p = last.position;
  return { x: p.x, y: p.y, z: p.z };
};

const vectorSub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
const vectorDot = (a, b) => ((a.x * b.x) + (a.y * b.y) + (a.z * b.z));
const vectorLenSq = (a) => vectorDot(a, a);
const vectorNorm = (v) => {
  const lenSq = vectorLenSq(v);
  if (lenSq <= 0.0000001) {
    return null;
  }
  const inv = 1 / Math.sqrt(lenSq);
  return { x: v.x * inv, y: v.y * inv, z: v.z * inv };
};
const vectorScale = (v, s) => ({ x: v.x * s, y: v.y * s, z: v.z * s });
const vectorAdd = (a, b) => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });

const createSeededRng = (seed) => {
  let t = Number(seed) >>> 0;
  return () => {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
};

const normalizeCharacterId = (value) => {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
};

const isManaCharacter = (characterId) => {
  const id = normalizeCharacterId(characterId);
  return id === 'silentman'
    || id === 'silenmant'
    || id === 'pumori'
    || id === 'neoorphen'
    || id === 'pezunalunar'
    || id === 'pezuanalunar';
};

const getShotIntervalMs = (characterId) => {
  return isManaCharacter(characterId) ? magicAttackIntervalMs : bulletAttackIntervalMs;
};

const getServerAimDirection = (client) => {
  const yaw = Number(client?.state?.rotation?.yaw || 0);
  const pitch = Number(client?.state?.rotation?.pitch || 0);
  const cosPitch = Math.cos(pitch);
  return vectorNorm({
    x: -Math.sin(yaw) * cosPitch,
    y: Math.sin(pitch),
    z: -Math.cos(yaw) * cosPitch,
  });
};

const getServerEyeOrigin = (client) => {
  return {
    x: clamp(Number(client?.state?.position?.x || 0), -250, 250),
    y: clamp(Number(client?.state?.position?.y || 1.7), 0.5, 4),
    z: clamp(Number(client?.state?.position?.z || 0), -250, 250),
  };
};

const getAimDeltaDegrees = (dirA, dirB) => {
  if (!dirA || !dirB) {
    return 180;
  }
  const dot = clamp(vectorDot(dirA, dirB), -1, 1);
  return (Math.acos(dot) * 180) / Math.PI;
};

const rayAabbIntersectionT = (origin, dir, aabb, maxDistance) => {
  let tmin = 0;
  let tmax = maxDistance;
  const epsilon = 0.000001;

  const axes = ['x', 'y', 'z'];
  for (let i = 0; i < axes.length; i += 1) {
    const axis = axes[i];
    const d = dir[axis];
    const o = origin[axis];
    const min = aabb[`min${axis.toUpperCase()}`];
    const max = aabb[`max${axis.toUpperCase()}`];

    if (Math.abs(d) < epsilon) {
      if (o < min || o > max) {
        return null;
      }
      continue;
    }

    const invD = 1 / d;
    let t1 = (min - o) * invD;
    let t2 = (max - o) * invD;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
    }
    if (t1 > tmin) tmin = t1;
    if (t2 < tmax) tmax = t2;
    if (tmax < tmin) {
      return null;
    }
  }

  if (tmin > maxDistance) {
    return null;
  }
  return tmin >= 0 ? tmin : tmax >= 0 ? 0 : null;
};

const getRoomMapCollision = (room) => {
  const seed = ensureRoomMapSeed(room);
  if (room.mapCollision && room.mapCollision.seed === seed) {
    return room.mapCollision.boxes;
  }

  const boxes = [];
  const rnd = createSeededRng((seed ^ 0x9E3779B9) >>> 0);
  for (let i = 0; i < 220; i += 1) {
    const w = 1 + rnd() * 3;
    const d = 1 + rnd() * 3;
    const h = 3 + rnd() * 24;
    const x = (rnd() - 0.5) * 220;
    const z = (rnd() - 0.5) * 220;
    boxes.push({
      minX: x - (w / 2),
      maxX: x + (w / 2),
      minY: 0,
      maxY: h,
      minZ: z - (d / 2),
      maxZ: z + (d / 2),
    });
  }

  room.mapCollision = { seed, boxes };
  return boxes;
};

const resolveWallHitDistance = (room, origin, directionNorm, maxDistance) => {
  const boxes = getRoomMapCollision(room);
  let best = null;
  for (let i = 0; i < boxes.length; i += 1) {
    const t = rayAabbIntersectionT(origin, directionNorm, boxes[i], maxDistance);
    if (t === null) {
      continue;
    }
    if (t < minWallHitDistance) {
      continue;
    }
    if (best === null || t < best) {
      best = t;
    }
  }
  return best;
};

const updateCombatMana = (combat, nowMs) => {
  if (!combat) {
    return;
  }
  const last = Number(combat.lastManaRegenAt || nowMs);
  const deltaSec = Math.max(0, (nowMs - last) / 1000);
  combat.lastManaRegenAt = nowMs;
  combat.mana = Math.min(maxMana, (Number(combat.mana || maxMana) + (manaRegenPerSecond * deltaSec)));
};

const intersectRaySphere = (origin, directionNorm, maxDistance, center, radius) => {
  const m = vectorSub(origin, center);
  const b = vectorDot(m, directionNorm);
  const c = vectorDot(m, m) - (radius * radius);

  if (c > 0 && b > 0) {
    return null;
  }

  const discr = (b * b) - c;
  if (discr < 0) {
    return null;
  }

  let t = -b - Math.sqrt(discr);
  if (t < 0) {
    t = 0;
  }
  if (t > maxDistance) {
    return null;
  }

  return t;
};

const resolveShotHitOnPlayers = (room, shooterId, origin, directionNorm, maxDistance, rewindTsMs) => {
  let best = null;

  room.players.forEach((candidateId) => {
    if (candidateId === shooterId) {
      return;
    }
    const target = getClientById(candidateId);
    if (!target) {
      return;
    }
    const combat = getCombatState(room, candidateId);
    if (!combat.alive) {
      return;
    }
    const pos = getClientPositionAt(target, rewindTsMs);
    if (!pos || !validNumber(pos.x) || !validNumber(pos.y) || !validNumber(pos.z)) {
      return;
    }

    const headCenter = { x: pos.x, y: pos.y + headCenterOffsetY, z: pos.z };
    const bodyCenter = { x: pos.x, y: pos.y + bodyCenterOffsetY, z: pos.z };
    const headT = intersectRaySphere(origin, directionNorm, maxDistance, headCenter, headshotRadius);
    const bodyT = intersectRaySphere(origin, directionNorm, maxDistance, bodyCenter, bodyshotRadius);

    if (headT !== null) {
      if (!best || headT < best.t) {
        best = {
          victimId: candidateId,
          t: headT,
          hitType: 'head',
        };
      }
      return;
    }

    if (bodyT !== null) {
      if (!best || bodyT < best.t) {
        best = {
          victimId: candidateId,
          t: bodyT,
          hitType: 'body',
        };
      }
    }
  });

  return best;
};

const processPlayerDeath = (room, victimId, killerId) => {
  const victim = getClientById(victimId);
  if (!victim) {
    return;
  }

  const victimCombat = getCombatState(room, victimId);
  if (!victimCombat.alive) {
    return;
  }
  victimCombat.alive = false;

  const victimStats = getPlayerStats(room, victimId);
  room.stats.set(victimId, {
    kills: victimStats.kills,
    deaths: victimStats.deaths + 1,
  });

  let killerKills = 0;
  const killer = String(killerId || '').trim();
  if (killer && killer !== victimId && room.players.has(killer)) {
    const killerStats = getPlayerStats(room, killer);
    killerKills = killerStats.kills + 1;
    room.stats.set(killer, {
      kills: killerKills,
      deaths: killerStats.deaths,
    });
  }

  broadcastToRoom(room, {
    type: 'player_death',
    ...json(true, {
      playerId: victimId,
      killerId: killer || null,
      ts: Date.now(),
    }),
  });

  broadcastRoomState(room);
  if (killer && killerKills >= killsToWin) {
    startRoundResetCountdown(room, killer);
  }
};

const startRoundResetCountdown = (room, winnerId) => {
  if (!room || room.roundResetTimer) {
    return;
  }

  const winner = getClientById(winnerId);
  room.status = 'cooldown';

  broadcastToRoom(room, {
    type: 'game_state',
    ...json(true, {
      roomId: room.id,
      status: room.status,
      hostId: room.hostId,
      weather: room.weather,
    }),
  });

  broadcastToRoom(room, {
    type: 'match_winner',
    ...json(true, {
      winner: winner ? {
        id: winner.id,
        name: winner.name,
        character: winner.character || null,
      } : { id: winnerId, name: 'Desconocido', character: null },
      killsToWin,
      countdownSeconds: roundResetSeconds,
    }),
  });

  broadcastRoomState(room);
  broadcastRoomList();

  room.roundResetTimer = setTimeout(() => {
    room.roundResetTimer = null;
    resetRoomStats(room);
    resetRoomCombat(room);
    room.weather = pickWeatherDifferentFrom(room.weather);
    room.status = 'in_game';

    broadcastToRoom(room, {
      type: 'game_state',
      ...json(true, {
        roomId: room.id,
        status: room.status,
        hostId: room.hostId,
        weather: room.weather,
      }),
    });

    broadcastToRoom(room, {
      type: 'match_reset',
      ...json(true, {
        roomId: room.id,
      }),
    });

    broadcastRoomState(room);
    broadcastRoomList();
  }, roundResetSeconds * 1000);
};

const ensureRoomMapSeed = (room) => {
  if (!room) {
    return 1;
  }
  if (Number.isFinite(room.mapSeed)) {
    return room.mapSeed;
  }
  room.mapSeed = Math.floor(Math.random() * 0x7fffffff);
  return room.mapSeed;
};

const send = (ws, payload) => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(payload));
  }
};

const getClientById = (id) => {
  for (const client of clients.values()) {
    if (client.id === id) {
      return client;
    }
  }

  return null;
};

const getRoomSummary = (room) => {
  return {
    id: room.id,
    name: room.name,
    players: room.players.size,
    hostId: room.hostId,
    status: room.status,
    weather: room.weather,
    mapSeed: ensureRoomMapSeed(room),
  };
};

const getPlayerStats = (room, playerId) => {
  return room.stats.get(playerId) || { kills: 0, deaths: 0 };
};

const serializePlayer = (client) => {
  return {
    id: client.id,
    name: client.name,
    character: client.character || null,
    state: {
      position: { ...client.state.position },
      rotation: { ...client.state.rotation },
      jumping: Boolean(client.state.jumping),
    },
  };
};

const getRoomState = (room) => {
  updateRoomCombatRegen(room, Date.now());
  const players = [];

  room.players.forEach((playerId) => {
    const client = getClientById(playerId);
    if (client) {
      const combat = getCombatState(room, playerId);
      players.push({
        ...serializePlayer(client),
        ...getPlayerStats(room, playerId),
        health: Math.round(combat.health),
        shield: Math.round(combat.shield),
        mana: Math.round(combat.mana),
        alive: Boolean(combat.alive),
      });
    }
  });

  return {
    room: getRoomSummary(room),
    players,
  };
};

const broadcastRoomList = () => {
  const data = Array.from(rooms.values()).map(getRoomSummary);

  for (const socket of clients.keys()) {
    send(socket, {
      type: 'rooms_list',
      ...json(true, data),
    });
  }
};

const broadcastToRoom = (room, payload, excludeClientId = null) => {
  room.players.forEach((playerId) => {
    if (excludeClientId && playerId === excludeClientId) {
      return;
    }

    const client = getClientById(playerId);
    if (client) {
      send(client.ws, payload);
    }
  });
};

const broadcastRoomState = (room) => {
  broadcastToRoom(room, {
    type: 'room_state',
    ...json(true, getRoomState(room)),
  });
};

const leaveCurrentRoom = (client) => {
  if (!client.roomId) {
    return;
  }

  const room = rooms.get(client.roomId);
  client.roomId = null;

  if (!room) {
    return;
  }

  room.players.delete(client.id);
  room.stats.delete(client.id);
  room.combat.delete(client.id);

  broadcastToRoom(room, {
    type: 'player_left',
    ...json(true, { playerId: client.id }),
  });

  if (room.players.size === 0) {
    if (!room.isServerManaged) {
      clearRoundResetTimer(room);
      rooms.delete(room.id);
    } else {
      clearRoundResetTimer(room);
      resetRoomStats(room);
      resetRoomCombat(room);
      room.hostId = null;
      room.status = 'in_game';
      room.weather = pickWeatherDifferentFrom(room.weather);
      broadcastRoomState(room);
    }
    broadcastRoomList();
    return;
  }

  if (room.hostId === client.id) {
    room.hostId = room.isServerManaged ? null : room.players.values().next().value;
  }

  if (!room.isServerManaged && room.status === 'in_game' && room.players.size < 2) {
    room.status = 'finished';
  }

  broadcastRoomState(room);
  broadcastRoomList();
};

const joinRoom = (client, room) => {
  leaveCurrentRoom(client);
  const wasEmpty = room.players.size === 0;

  if (wasEmpty) {
    room.weather = pickWeatherDifferentFrom(room.weather);
  }

  room.players.add(client.id);
  if (!room.stats.has(client.id)) {
    room.stats.set(client.id, { kills: 0, deaths: 0 });
  }
  const now = Date.now();
  room.combat.set(client.id, {
    health: maxHealth,
    shield: startShield,
    alive: true,
    mana: maxMana,
    lastManaRegenAt: now,
    lastShotAt: 0,
  });
  client.stateHistory = [];
  pushClientStateSnapshot(client, Date.now());
  client.roomId = room.id;

  send(client.ws, {
    type: 'room_joined',
    ...json(true, getRoomState(room)),
  });

  broadcastToRoom(room, {
    type: 'player_joined',
    ...json(true, {
      player: serializePlayer(client),
      roomId: room.id,
    }),
  }, client.id);

  broadcastRoomState(room);
  broadcastRoomList();
};

app.get('/health', async () => {
  return json(true, { status: 'up' });
});

app.get('/version', async () => {
  return json(true, { version: pkg.version });
});

app.get('/characters', async () => {
  try {
    const dir = path.resolve(__dirname, '../front/public/characters');
    const files = await readdir(dir, { withFileTypes: true });
    const characters = files
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b));

    return json(true, characters);
  } catch {
    return json(true, []);
  }
});

app.get('/weapons', async () => {
  try {
    const dir = path.resolve(__dirname, '../front/public/weapons');
    const files = await readdir(dir, { withFileTypes: true });
    const weapons = files
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => /\.(glb|gltf)$/i.test(name))
      .sort((a, b) => a.localeCompare(b));

    return json(true, weapons);
  } catch {
    return json(true, []);
  }
});

const start = async () => {
  const port = Number(process.env.PORT || 3000);

  try {
    await app.listen({ host: '0.0.0.0', port });
    ensureServerRoom();

    const wss = new WebSocketServer({ noServer: true });

    app.server.on('upgrade', (request, socket, head) => {
      if (request.url !== '/ws') {
        socket.destroy();
        return;
      }

      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
      });
    });

    wss.on('connection', (ws) => {
      const playerId = randomUUID();
      const client = {
        id: playerId,
        name: `Player-${playerId.slice(0, 4)}`,
        character: null,
        roomId: null,
        state: {
          position: { x: Math.random() * 10 - 5, y: 1.7, z: Math.random() * 10 - 5 },
          rotation: { yaw: 0, pitch: 0 },
          jumping: false,
        },
        stateHistory: [],
        ws,
      };

      pushClientStateSnapshot(client, Date.now());
      clients.set(ws, client);

      send(ws, {
        type: 'connected',
        ...json(true, {
          player: serializePlayer(client),
          rooms: Array.from(rooms.values()).map(getRoomSummary),
        }),
      });

      ws.on('message', (raw) => {
        let message;

        try {
          message = JSON.parse(String(raw));
        } catch {
          send(ws, {
            type: 'error',
            ...json(false, null, { code: 'INVALID_JSON', message: 'Mensaje invalido' }),
          });
          return;
        }

        const current = clients.get(ws);
        if (!current) {
          return;
        }

        if (message.type === 'list_rooms') {
          send(ws, {
            type: 'rooms_list',
            ...json(true, Array.from(rooms.values()).map(getRoomSummary)),
          });
          return;
        }

        if (message.type === 'leave_room') {
          leaveCurrentRoom(current);
          send(ws, { type: 'left_room', ...json(true, null) });
          return;
        }

        if (message.type === 'ping') {
          send(ws, {
            type: 'pong',
            ...json(true, {
              probeId: String(message.probeId || ''),
              clientTs: Number(message.clientTs || 0),
              serverTs: Date.now(),
            }),
          });
          return;
        }

        if (message.type === 'create_room') {
          send(ws, {
            type: 'error',
            ...json(false, null, {
              code: 'ROOM_CREATION_DISABLED',
              message: 'La sala es gestionada por el servidor',
            }),
          });
          return;
        }

        if (message.type === 'join_room') {
          const roomId = String(message.roomId || '').trim();
          const playerName = String(message.playerName || '').trim();
          const character = String(message.character || '').trim();
          const room = rooms.get(roomId);

          if (!room) {
            send(ws, {
              type: 'error',
              ...json(false, null, { code: 'ROOM_NOT_FOUND', message: 'Sala no encontrada' }),
            });
            return;
          }

          if (!room.players.has(current.id) && room.players.size >= maxPlayersPerRoom) {
            send(ws, {
              type: 'error',
              ...json(false, null, { code: 'ROOM_FULL', message: `La sala alcanzo el maximo de ${maxPlayersPerRoom} jugadores` }),
            });
            return;
          }

          if (playerName) {
            current.name = playerName.slice(0, 24);
          }
          if (character) {
            current.character = character.slice(0, 96);
          }

          joinRoom(current, room);
          return;
        }

        if (message.type === 'start_game' || message.type === 'end_game') {
          if (!current.roomId) {
            return;
          }

          const room = rooms.get(current.roomId);
          if (!room) {
            return;
          }

          if (room.isServerManaged) {
            send(ws, {
              type: 'error',
              ...json(false, null, {
                code: 'SERVER_MANAGED_ROOM',
                message: 'La partida es controlada por el servidor',
              }),
            });
            return;
          }

          if (room.hostId !== current.id) {
            send(ws, {
              type: 'error',
              ...json(false, null, { code: 'FORBIDDEN', message: 'Solo el host puede cambiar el estado de partida' }),
            });
            return;
          }

          room.status = message.type === 'start_game' ? 'in_game' : 'finished';

          broadcastToRoom(room, {
            type: 'game_state',
            ...json(true, {
              roomId: room.id,
              status: room.status,
              hostId: room.hostId,
              weather: room.weather,
            }),
          });

          broadcastRoomState(room);
          broadcastRoomList();
          return;
        }

        if (message.type === 'player_move') {
          if (!current.roomId) {
            return;
          }

          const room = rooms.get(current.roomId);
          if (!room) {
            return;
          }
          if (room.status !== 'in_game') {
            return;
          }

          const position = message.position || {};
          const rotation = message.rotation || {};
          const jumping = Boolean(message.jumping);

          if (
            !validNumber(position.x)
            || !validNumber(position.y)
            || !validNumber(position.z)
            || !validNumber(rotation.yaw)
            || !validNumber(rotation.pitch)
          ) {
            return;
          }

          current.state.position = {
            x: clamp(position.x, -200, 200),
            y: clamp(position.y, 0.5, 4),
            z: clamp(position.z, -200, 200),
          };
          current.state.rotation = {
            yaw: clamp(rotation.yaw, -Math.PI * 100, Math.PI * 100),
            pitch: clamp(rotation.pitch, -Math.PI / 2, Math.PI / 2),
          };
          current.state.jumping = jumping;
          pushClientStateSnapshot(current, Date.now());

          broadcastToRoom(room, {
            type: 'player_move',
            ...json(true, {
              playerId: current.id,
              character: current.character || null,
              position: current.state.position,
              rotation: current.state.rotation,
              jumping: current.state.jumping,
              ts: Date.now(),
            }),
          }, current.id);

          return;
        }

        if (message.type === 'player_shoot') {
          if (!current.roomId) {
            return;
          }

          const room = rooms.get(current.roomId);
          if (!room) {
            return;
          }
          if (room.status !== 'in_game') {
            return;
          }

          const origin = message.origin || {};
          const direction = message.direction || {};
          const distance = Number(message.distance || 0);

          if (
            !validNumber(origin.x)
            || !validNumber(origin.y)
            || !validNumber(origin.z)
            || !validNumber(direction.x)
            || !validNumber(direction.y)
            || !validNumber(direction.z)
          ) {
            return;
          }

          const shooterCombat = getCombatState(room, current.id);
          if (!shooterCombat.alive) {
            return;
          }

          const nowMs = Date.now();
          const shooterIsMana = isManaCharacter(current.character || '');
          updateCombatMana(shooterCombat, nowMs);

          const shotIntervalMs = getShotIntervalMs(current.character || '');
          const elapsedSinceLastShot = nowMs - Number(shooterCombat.lastShotAt || 0);
          if (elapsedSinceLastShot < shotIntervalMs) {
            return;
          }

          if (shooterIsMana) {
            if (shooterCombat.mana < manaCostPerShot) {
              send(ws, {
                type: 'player_resources',
                ...json(true, {
                  mana: Math.round(shooterCombat.mana),
                }),
              });
              return;
            }
            shooterCombat.mana = Math.max(0, shooterCombat.mana - manaCostPerShot);
            send(ws, {
              type: 'player_resources',
              ...json(true, {
                mana: Math.round(shooterCombat.mana),
              }),
            });
          }

          shooterCombat.lastShotAt = nowMs;

          const maxDistance = clamp(distance, 1, 220);
          const serverOrigin = getServerEyeOrigin(current);
          const clientOrigin = {
            x: clamp(origin.x, -250, 250),
            y: clamp(origin.y, 0, 10),
            z: clamp(origin.z, -250, 250),
          };
          const driftVec = vectorSub(clientOrigin, serverOrigin);
          const drift = Math.sqrt(vectorLenSq(driftVec));
          const originClamped = drift <= maxOriginDrift ? clientOrigin : serverOrigin;

          const clientDirectionNorm = vectorNorm({
            x: clamp(direction.x, -1, 1),
            y: clamp(direction.y, -1, 1),
            z: clamp(direction.z, -1, 1),
          });
          if (!clientDirectionNorm) {
            return;
          }
          const serverDirectionNorm = getServerAimDirection(current);
          if (!serverDirectionNorm) {
            return;
          }

          const aimDelta = getAimDeltaDegrees(clientDirectionNorm, serverDirectionNorm);
          const directionNorm = aimDelta <= maxAimAngleDeltaDeg ? clientDirectionNorm : serverDirectionNorm;

          const wallHitDistance = resolveWallHitDistance(room, originClamped, directionNorm, maxDistance);
          const effectiveDistance = wallHitDistance === null
            ? maxDistance
            : Math.max(0, Math.min(maxDistance, wallHitDistance));

          broadcastToRoom(room, {
            type: 'player_shoot',
            ...json(true, {
              playerId: current.id,
              character: current.character || null,
              origin: {
                x: originClamped.x,
                y: originClamped.y,
                z: originClamped.z,
              },
              direction: {
                x: directionNorm.x,
                y: directionNorm.y,
                z: directionNorm.z,
              },
              distance: effectiveDistance,
              ts: nowMs,
            }),
          }, current.id);

          const rewindTsMs = nowMs - lagCompensationMs;
          const hit = resolveShotHitOnPlayers(
            room,
            current.id,
            originClamped,
            directionNorm,
            effectiveDistance,
            rewindTsMs,
          );
          if (!hit) {
            return;
          }

          const victimCombat = getCombatState(room, hit.victimId);
          if (!victimCombat.alive) {
            return;
          }

          if (hit.hitType === 'head') {
            victimCombat.health = 0;
            victimCombat.shield = Math.max(0, victimCombat.shield);
          } else {
            if (victimCombat.shield > 0) {
              const reducedDamage = Math.ceil(hitDamage * (1 - shieldDamageReduction));
              const shieldCost = Math.ceil(hitDamage * shieldDamageCostFactor);
              victimCombat.shield = Math.max(0, victimCombat.shield - shieldCost);
              victimCombat.health = Math.max(0, victimCombat.health - reducedDamage);
            } else {
              victimCombat.health = Math.max(0, victimCombat.health - hitDamage);
            }
          }

          const victim = getClientById(hit.victimId);
          if (victim) {
            send(victim.ws, {
              type: 'player_damage',
              ...json(true, {
                fromPlayerId: current.id,
                health: victimCombat.health,
                shield: victimCombat.shield,
                headshot: hit.hitType === 'head',
              }),
            });
          }
          broadcastRoomState(room);

          if (victimCombat.health <= 0) {
            processPlayerDeath(room, hit.victimId, current.id);
          }

          return;
        }

        if (message.type === 'player_funny') {
          if (!current.roomId) {
            return;
          }

          const room = rooms.get(current.roomId);
          if (!room) {
            return;
          }

          broadcastToRoom(room, {
            type: 'player_funny',
            ...json(true, {
              playerId: current.id,
              ts: Date.now(),
            }),
          }, current.id);

          return;
        }

        if (message.type === 'chat_message') {
          if (!current.roomId) {
            return;
          }

          const room = rooms.get(current.roomId);
          if (!room) {
            return;
          }

          const rawText = String(message.text || '').trim();
          if (!rawText) {
            return;
          }
          const text = rawText.slice(0, 180);

          broadcastToRoom(room, {
            type: 'chat_message',
            ...json(true, {
              playerId: current.id,
              playerName: current.name,
              text,
              ts: Date.now(),
            }),
          });
          return;
        }

        if (message.type === 'player_death') {
          // Deprecated on client side: deaths are server-authoritative via player_shoot
          return;
        }

        if (message.type === 'player_respawn') {
          if (!current.roomId) {
            return;
          }

          const room = rooms.get(current.roomId);
          if (!room) {
            return;
          }
          if (room.status !== 'in_game') {
            return;
          }
          const combat = getCombatState(room, current.id);
          if (combat.alive) {
            return;
          }
          combat.health = maxHealth;
          combat.shield = startShield;
          combat.alive = true;
          combat.mana = maxMana;
          combat.lastManaRegenAt = Date.now();
          combat.lastShotAt = 0;
          pushClientStateSnapshot(current, Date.now());

          broadcastToRoom(room, {
            type: 'player_respawned',
            ...json(true, {
              playerId: current.id,
              health: Math.round(combat.health),
              shield: Math.round(combat.shield),
              mana: Math.round(combat.mana),
              ts: Date.now(),
            }),
          });
          broadcastRoomState(room);

          return;
        }

        send(ws, {
          type: 'error',
          ...json(false, null, { code: 'UNKNOWN_EVENT', message: 'Evento no soportado' }),
        });
      });

      ws.on('close', () => {
        const current = clients.get(ws);
        if (!current) {
          return;
        }

        leaveCurrentRoom(current);
        clients.delete(ws);
      });
    });

    setInterval(() => {
      const now = Date.now();
      rooms.forEach((room) => {
        if (room.players.size === 0) {
          return;
        }
        updateRoomCombatRegen(room, now);
        broadcastRoomState(room);
      });
    }, roomStateSyncIntervalMs);

    app.log.info(`HTTP listo en http://0.0.0.0:${port}`);
    app.log.info(`WS listo en ws://0.0.0.0:${port}/ws`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
