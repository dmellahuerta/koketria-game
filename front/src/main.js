import './style.css';
import * as THREE from 'three';

const app = document.querySelector('#app');
app.innerHTML = `
  <section id="lobby">
    <h1>Matrix Lobby</h1>
    <p id="connectionStatus">Conectando al backend...</p>
    <label>
      Nombre de jugador
      <input id="playerName" maxlength="24" placeholder="Neo" />
    </label>
    <label>
      Nombre de sala
      <input id="roomName" maxlength="32" placeholder="Sala Zion" />
    </label>
    <div class="lobby-actions">
      <button id="createRoomBtn" type="button">Crear sala</button>
      <button id="refreshRoomsBtn" type="button">Refrescar</button>
    </div>
    <h2>Salas activas</h2>
    <div id="roomList" class="room-list"></div>
    <p id="lobbyError" class="error hidden"></p>
  </section>

  <div id="hud">
    <div id="ammoBarWrap" class="side-bar left">
      <span id="ammoSideLabel">30 / 90</span>
      <div class="bar-track"><div id="ammoBarFill" class="bar-fill ammo"></div></div>
    </div>

    <div id="healthBarWrap" class="side-bar right right-top">
      <span id="healthSideLabel">100</span>
      <div class="bar-track"><div id="healthBarFill" class="bar-fill health"></div></div>
    </div>

    <div id="shieldBarWrap" class="side-bar right right-bottom">
      <span id="shieldSideLabel">0</span>
      <div class="bar-track"><div id="shieldBarFill" class="bar-fill shield"></div></div>
    </div>

    <div id="matchInfo">
      <h2>MATRIX SIMULATION</h2>
      <p>Click para capturar el mouse</p>
      <p>Moverse: W A S D</p>
      <p>Disparar: Mouse izquierdo</p>
      <p>Recargar: R</p>
      <p>Info: I</p>
      <p>Salir: ESC</p>
      <p id="healthStat">Vida: 100</p>
      <p id="shieldStat">Escudo: 0</p>
      <p id="ammoStat">Balas: 30 / 90</p>
      <p id="stats">Kills: 0</p>
      <p id="roomHud">Sala: -</p>
      <p id="stateHud">Estado: waiting</p>
      <p id="playersHud">Jugadores: -</p>
      <div id="hostControls" class="host-controls hidden">
        <button id="startGameBtn" type="button">Iniciar partida</button>
        <button id="endGameBtn" type="button">Finalizar partida</button>
      </div>
      <button id="leaveRoomHudBtn" type="button">Salir de sala</button>
    </div>
  </div>

  <div id="crosshair" aria-hidden="true"></div>
`;

const connectionStatus = document.querySelector('#connectionStatus');
const playerNameInput = document.querySelector('#playerName');
const roomNameInput = document.querySelector('#roomName');
const createRoomBtn = document.querySelector('#createRoomBtn');
const refreshRoomsBtn = document.querySelector('#refreshRoomsBtn');
const roomList = document.querySelector('#roomList');
const lobbyError = document.querySelector('#lobbyError');
const matchInfo = document.querySelector('#matchInfo');
const healthStat = document.querySelector('#healthStat');
const shieldStat = document.querySelector('#shieldStat');
const ammoStat = document.querySelector('#ammoStat');
const healthSideLabel = document.querySelector('#healthSideLabel');
const shieldSideLabel = document.querySelector('#shieldSideLabel');
const ammoSideLabel = document.querySelector('#ammoSideLabel');
const healthBarFill = document.querySelector('#healthBarFill');
const shieldBarFill = document.querySelector('#shieldBarFill');
const ammoBarFill = document.querySelector('#ammoBarFill');
const stats = document.querySelector('#stats');
const roomHud = document.querySelector('#roomHud');
const stateHud = document.querySelector('#stateHud');
const playersHud = document.querySelector('#playersHud');
const hostControls = document.querySelector('#hostControls');
const startGameBtn = document.querySelector('#startGameBtn');
const endGameBtn = document.querySelector('#endGameBtn');
const leaveRoomHudBtn = document.querySelector('#leaveRoomHudBtn');

const state = {
  ws: null,
  self: null,
  rooms: [],
  joinedRoom: null,
  remotePlayers: new Map(),
  lastStateSentAt: 0,
  showMatchInfo: false,
};

const setLobbyError = (message = '') => {
  if (!message) {
    lobbyError.classList.add('hidden');
    lobbyError.textContent = '';
    return;
  }

  lobbyError.classList.remove('hidden');
  lobbyError.textContent = message;
};

const setInRoom = (value) => {
  app.classList.toggle('in-room', value);
  if (!value && document.pointerLockElement) {
    document.exitPointerLock();
  }
};

const syncInfoVisibility = () => {
  if (state.showMatchInfo && state.joinedRoom) {
    matchInfo.classList.add('visible');
  } else {
    matchInfo.classList.remove('visible');
  }
};

const isHost = () => {
  return Boolean(state.joinedRoom && state.self && state.joinedRoom.room.hostId === state.self.id);
};

const canPlay = () => {
  return Boolean(state.joinedRoom && state.joinedRoom.room.status === 'in_game');
};

const sendWs = (payload) => {
  if (!state.ws || state.ws.readyState !== WebSocket.OPEN) {
    setLobbyError('WebSocket no conectado');
    return;
  }

  state.ws.send(JSON.stringify(payload));
};

const renderRooms = () => {
  roomList.innerHTML = '';

  if (state.rooms.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'room-empty';
    empty.textContent = 'No hay salas activas.';
    roomList.appendChild(empty);
    return;
  }

  state.rooms.forEach((room) => {
    const card = document.createElement('article');
    card.className = 'room-card';
    card.innerHTML = `
      <div>
        <strong>${room.name}</strong>
        <p>ID: ${room.id}</p>
        <p>Jugadores: ${room.players}</p>
        <p>Estado: ${room.status}</p>
      </div>
      <button type="button">Unirse</button>
    `;

    card.querySelector('button').addEventListener('click', () => {
      setLobbyError();
      sendWs({
        type: 'join_room',
        roomId: room.id,
        playerName: playerNameInput.value.trim(),
      });
    });

    roomList.appendChild(card);
  });
};

const resolveWsUrl = () => {
  const explicit = import.meta.env.VITE_WS_URL;
  if (explicit) {
    return explicit;
  }

  const apiBase = import.meta.env.VITE_API_BASE_URL;
  if (apiBase) {
    const url = new URL(apiBase);
    url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
    url.pathname = '/ws';
    url.search = '';
    url.hash = '';
    return url.toString();
  }

  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  return `${protocol}//${window.location.host}/ws`;
};

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x010501);
scene.fog = new THREE.Fog(0x010501, 18, 160);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(0, 1.7, 10);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
app.appendChild(renderer.domElement);

const ambient = new THREE.AmbientLight(0x66ff88, 0.3);
scene.add(ambient);

const keyLight = new THREE.DirectionalLight(0x49ff73, 0.8);
keyLight.position.set(15, 30, 10);
scene.add(keyLight);

const muzzleFlash = new THREE.PointLight(0x98ff98, 0, 8, 2);
camera.add(muzzleFlash);
muzzleFlash.position.set(0.2, -0.18, -0.6);
scene.add(camera);

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(320, 320),
  new THREE.MeshStandardMaterial({ color: 0x021102, roughness: 1 }),
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

const grid = new THREE.GridHelper(320, 80, 0x3fff66, 0x0f4a1f);
grid.position.y = 0.01;
scene.add(grid);

const blockMat = new THREE.MeshStandardMaterial({
  color: 0x071d0b,
  emissive: 0x0f5e24,
  emissiveIntensity: 0.5,
  metalness: 0.1,
  roughness: 0.85,
});

const shootables = [];
for (let i = 0; i < 220; i += 1) {
  const w = 1 + Math.random() * 3;
  const d = 1 + Math.random() * 3;
  const h = 3 + Math.random() * 24;
  const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), blockMat.clone());
  box.position.set((Math.random() - 0.5) * 220, h / 2, (Math.random() - 0.5) * 220);
  box.userData.hp = 1 + Math.floor(Math.random() * 3);
  scene.add(box);
  shootables.push(box);
}

const rainCount = 2200;
const rainPos = new Float32Array(rainCount * 3);
const rainVel = new Float32Array(rainCount);
for (let i = 0; i < rainCount; i += 1) {
  rainPos[i * 3] = (Math.random() - 0.5) * 260;
  rainPos[i * 3 + 1] = Math.random() * 120 + 6;
  rainPos[i * 3 + 2] = (Math.random() - 0.5) * 260;
  rainVel[i] = 8 + Math.random() * 14;
}

const rainGeo = new THREE.BufferGeometry();
rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
const rainMat = new THREE.PointsMaterial({
  color: 0x66ff66,
  size: 0.14,
  transparent: true,
  opacity: 0.85,
  sizeAttenuation: true,
});
const rain = new THREE.Points(rainGeo, rainMat);
scene.add(rain);

const raycaster = new THREE.Raycaster();
const centerAim = new THREE.Vector2(0, 0);
const tracerMaterial = new THREE.LineBasicMaterial({ color: 0xa2ffae, transparent: true, opacity: 0.9 });
const impactGeometry = new THREE.SphereGeometry(0.08, 6, 6);
const impactMaterial = new THREE.MeshBasicMaterial({ color: 0x7dff92, transparent: true, opacity: 0.9 });
const activeTracers = [];
const activeImpacts = [];

const keys = { KeyW: false, KeyA: false, KeyS: false, KeyD: false };
let isLocked = false;
let yaw = 0;
let pitch = 0;
const speed = 9;

let isFiring = false;
let cooldown = 0;
const fireRate = 8;
const recoilVertical = 0.018;
const recoilHorizontal = 0.008;
const reloadTime = 1.2;
const maxHealth = 100;
const maxShield = 100;
const startShield = 0;
const shieldDamageReduction = 0.6;
const maxAmmoInMag = 30;
const maxAmmoTotal = 120;
const maxAmmoPickups = 50;
const ammoPickupRespawnMs = 60_000;
const ammoPickupAmount = 12;
const maxShieldPickups = 30;
const shieldPickupRespawnMs = 60_000;
const shieldPickupAmount = 25;
const hitDamage = 18;
let kills = 0;
let health = maxHealth;
let shield = startShield;
let ammoInMag = maxAmmoInMag;
let ammoReserve = maxAmmoTotal - maxAmmoInMag;
let isReloading = false;
let reloadCooldown = 0;

const euler = new THREE.Euler(0, 0, 0, 'YXZ');
const forward = new THREE.Vector3();
const right = new THREE.Vector3();
const move = new THREE.Vector3();
const dir = new THREE.Vector3();
const clock = new THREE.Clock();

const ammoPickupGeometry = new THREE.CapsuleGeometry(0.2, 0.18, 4, 8);
const ammoPickupMaterial = new THREE.MeshStandardMaterial({
  color: 0x4d8dff,
  emissive: 0x1a3d90,
  emissiveIntensity: 0.85,
  roughness: 0.35,
  metalness: 0.4,
});
const ammoPickups = [];
const shieldPickupGeometry = new THREE.IcosahedronGeometry(0.32, 0);
const shieldPickupMaterial = new THREE.MeshStandardMaterial({
  color: 0x45f4ff,
  emissive: 0x0f5d80,
  emissiveIntensity: 0.9,
  roughness: 0.25,
  metalness: 0.3,
});
const shieldPickups = [];

for (let i = 0; i < maxAmmoPickups; i += 1) {
  const mesh = new THREE.Mesh(ammoPickupGeometry, ammoPickupMaterial.clone());
  const x = (Math.random() - 0.5) * 180;
  const z = (Math.random() - 0.5) * 180;
  const baseY = 0.35;
  mesh.position.set(x, baseY, z);
  scene.add(mesh);

  ammoPickups.push({
    mesh,
    baseY,
    phase: Math.random() * Math.PI * 2,
    active: true,
    respawnAt: 0,
  });
}

for (let i = 0; i < maxShieldPickups; i += 1) {
  const mesh = new THREE.Mesh(shieldPickupGeometry, shieldPickupMaterial.clone());
  const x = (Math.random() - 0.5) * 180;
  const z = (Math.random() - 0.5) * 180;
  const baseY = 0.6;
  mesh.position.set(x, baseY, z);
  scene.add(mesh);

  shieldPickups.push({
    mesh,
    baseY,
    phase: Math.random() * Math.PI * 2,
    active: true,
    respawnAt: 0,
  });
}

const updateHud = () => {
  healthStat.textContent = `Vida: ${health}`;
  shieldStat.textContent = `Escudo: ${shield}`;
  ammoStat.textContent = `Balas: ${ammoInMag} / ${ammoReserve}${isReloading ? ' (recargando...)' : ''}`;
  stats.textContent = `Kills: ${kills}`;
  healthSideLabel.textContent = `${health}`;
  shieldSideLabel.textContent = `${shield}`;
  ammoSideLabel.textContent = `${ammoInMag} / ${ammoReserve}`;
  healthBarFill.style.height = `${Math.max(0, Math.min(100, (health / maxHealth) * 100))}%`;
  shieldBarFill.style.height = `${Math.max(0, Math.min(100, (shield / maxShield) * 100))}%`;
  ammoBarFill.style.height = `${Math.max(0, Math.min(100, (ammoInMag / maxAmmoInMag) * 100))}%`;

  if (!state.joinedRoom) {
    roomHud.textContent = 'Sala: -';
    stateHud.textContent = 'Estado: waiting';
    playersHud.textContent = 'Jugadores: -';
    hostControls.classList.add('hidden');
    return;
  }

  const room = state.joinedRoom.room;
  const playerNames = state.joinedRoom.players.map((player) => player.name).join(', ');
  roomHud.textContent = `Sala: ${room.name} (${room.id})`;
  stateHud.textContent = `Estado: ${room.status}`;
  playersHud.textContent = `Jugadores: ${playerNames || '-'}`;

  if (isHost()) {
    hostControls.classList.remove('hidden');
    startGameBtn.disabled = room.status === 'in_game';
    endGameBtn.disabled = room.status !== 'in_game';
  } else {
    hostControls.classList.add('hidden');
  }

  syncInfoVisibility();
};

const resetCombatStats = () => {
  health = maxHealth;
  shield = startShield;
  ammoInMag = maxAmmoInMag;
  ammoReserve = maxAmmoTotal - maxAmmoInMag;
  isReloading = false;
  reloadCooldown = 0;
  kills = 0;
  updateHud();
};

const reloadWeapon = () => {
  if (isReloading || ammoInMag >= maxAmmoInMag || ammoReserve <= 0 || !canPlay()) {
    return;
  }

  isReloading = true;
  reloadCooldown = reloadTime;
  updateHud();
};

const respawnPlayer = () => {
  health = maxHealth;
  shield = startShield;
  ammoInMag = maxAmmoInMag;
  ammoReserve = maxAmmoTotal - maxAmmoInMag;
  isReloading = false;
  reloadCooldown = 0;
  camera.position.set((Math.random() - 0.5) * 12, 1.7, (Math.random() - 0.5) * 12);
  sendLocalPlayerState(true);
  updateHud();
};

const lerpAngle = (from, to, factor) => {
  const delta = ((to - from + Math.PI) % (Math.PI * 2)) - Math.PI;
  return from + delta * factor;
};

const disposeRemotePlayer = (entry) => {
  scene.remove(entry.group);
  entry.body.geometry.dispose();
  entry.body.material.dispose();
  entry.head.geometry.dispose();
  entry.head.material.dispose();
};

const createRemotePlayer = (id, isCurrentHost) => {
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({
    color: isCurrentHost ? 0x49c9ff : 0x67ff67,
    emissive: isCurrentHost ? 0x0b2a36 : 0x0f4f1a,
    emissiveIntensity: 0.6,
    roughness: 0.6,
  });
  const headMat = bodyMat.clone();

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, 0.9, 4, 8), bodyMat);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), headMat);
  body.position.y = 1.15;
  head.position.y = 1.95;

  group.add(body);
  group.add(head);
  scene.add(group);

  state.remotePlayers.set(id, {
    id,
    group,
    body,
    head,
    targetPosition: new THREE.Vector3(0, 0, 0),
    targetYaw: 0,
    targetPitch: 0,
  });
};

const syncRemotePlayer = (player) => {
  if (!state.self || player.id === state.self.id) {
    return;
  }

  if (!state.remotePlayers.has(player.id)) {
    createRemotePlayer(player.id, state.joinedRoom?.room?.hostId === player.id);
  }

  const entry = state.remotePlayers.get(player.id);
  const pos = player.state?.position || { x: 0, y: 1.7, z: 0 };
  const rot = player.state?.rotation || { yaw: 0, pitch: 0 };

  entry.targetPosition.set(pos.x, pos.y - 1.7, pos.z);
  entry.targetYaw = rot.yaw;
  entry.targetPitch = rot.pitch;
};

const syncRemotePlayersFromRoom = (roomState) => {
  const expected = new Set();

  roomState.players.forEach((player) => {
    if (state.self && player.id !== state.self.id) {
      expected.add(player.id);
    }
    syncRemotePlayer(player);
  });

  for (const [id, entry] of state.remotePlayers.entries()) {
    if (!expected.has(id)) {
      disposeRemotePlayer(entry);
      state.remotePlayers.delete(id);
    }
  }
};

const clearRemotePlayers = () => {
  for (const entry of state.remotePlayers.values()) {
    disposeRemotePlayer(entry);
  }
  state.remotePlayers.clear();
};

const createTracer = (start, end, color = 0xa2ffae) => {
  const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
  const material = tracerMaterial.clone();
  material.color = new THREE.Color(color);
  const line = new THREE.Line(geometry, material);
  line.userData.life = 0.08;
  scene.add(line);
  activeTracers.push(line);
};

const createImpact = (position, color = 0x7dff92) => {
  const impact = new THREE.Mesh(impactGeometry, impactMaterial.clone());
  impact.material.color = new THREE.Color(color);
  impact.position.copy(position);
  impact.userData.life = 0.2;
  scene.add(impact);
  activeImpacts.push(impact);
};

const applyOwnStateFromRoom = (roomState) => {
  if (!state.self) {
    return;
  }

  const selfPlayer = roomState.players.find((player) => player.id === state.self.id);
  if (!selfPlayer) {
    return;
  }

  const pos = selfPlayer.state?.position;
  const rot = selfPlayer.state?.rotation;

  if (pos) {
    camera.position.set(pos.x, pos.y, pos.z);
  }

  if (rot) {
    yaw = rot.yaw;
    pitch = rot.pitch;
    updateLook();
  }
};

const applyRoomState = (roomState, options = {}) => {
  const wasOutsideRoom = !state.joinedRoom;
  state.joinedRoom = roomState;
  syncRemotePlayersFromRoom(roomState);

  if (options.applyOwnState || wasOutsideRoom) {
    applyOwnStateFromRoom(roomState);
  }

  if (wasOutsideRoom) {
    resetCombatStats();
  }

  setInRoom(true);
  updateHud();
};

const connectWebSocket = () => {
  const wsUrl = resolveWsUrl();
  const ws = new WebSocket(wsUrl);
  state.ws = ws;

  connectionStatus.textContent = `Conectando a ${wsUrl}`;

  ws.addEventListener('open', () => {
    connectionStatus.textContent = 'Conectado';
    setLobbyError();
    sendWs({ type: 'list_rooms' });
  });

  ws.addEventListener('message', (event) => {
    let payload;

    try {
      payload = JSON.parse(event.data);
    } catch {
      setLobbyError('Respuesta invalida del servidor');
      return;
    }

    if (payload.ok === false && payload.error) {
      setLobbyError(payload.error.message || 'Error del servidor');
      return;
    }

    if (payload.type === 'connected') {
      state.self = payload.data.player;
      playerNameInput.value = state.self.name;
      state.rooms = payload.data.rooms || [];
      renderRooms();
      return;
    }

    if (payload.type === 'rooms_list') {
      state.rooms = payload.data || [];
      renderRooms();
      return;
    }

    if (payload.type === 'room_joined') {
      applyRoomState(payload.data, { applyOwnState: true });
      return;
    }

    if (payload.type === 'room_state') {
      applyRoomState(payload.data);
      return;
    }

    if (payload.type === 'left_room') {
      state.joinedRoom = null;
      clearRemotePlayers();
      setInRoom(false);
      resetCombatStats();
      updateHud();
      return;
    }

    if (payload.type === 'player_joined') {
      if (payload.data?.player) {
        syncRemotePlayer(payload.data.player);
      }
      return;
    }

    if (payload.type === 'player_left') {
      const playerId = payload.data?.playerId;
      if (playerId && state.remotePlayers.has(playerId)) {
        disposeRemotePlayer(state.remotePlayers.get(playerId));
        state.remotePlayers.delete(playerId);
      }
      return;
    }

    if (payload.type === 'player_move') {
      const { playerId, position, rotation } = payload.data || {};
      if (!playerId || (state.self && playerId === state.self.id)) {
        return;
      }

      syncRemotePlayer({
        id: playerId,
        state: { position, rotation },
      });

      return;
    }

    if (payload.type === 'player_shoot') {
      const shot = payload.data;
      if (!shot) {
        return;
      }

      const origin = new THREE.Vector3(shot.origin.x, shot.origin.y, shot.origin.z);
      const direction = new THREE.Vector3(shot.direction.x, shot.direction.y, shot.direction.z).normalize();
      const shotDistance = shot.distance || 100;
      const end = origin.clone().add(direction.clone().multiplyScalar(shotDistance));
      createTracer(origin, end, 0x59ccff);
      createImpact(end, 0x59ccff);

      if (canPlay()) {
        const toCamera = camera.position.clone().sub(origin);
        const projection = toCamera.dot(direction);
        if (projection >= 0 && projection <= shotDistance) {
          const closest = origin.clone().add(direction.clone().multiplyScalar(projection));
          const hitDistanceSq = closest.distanceToSquared(camera.position);
          if (hitDistanceSq <= 0.55 * 0.55) {
            if (shield > 0) {
              const reducedDamage = Math.ceil(hitDamage * (1 - shieldDamageReduction));
              const shieldCost = Math.ceil(hitDamage * 0.85);
              shield = Math.max(0, shield - shieldCost);
              health = Math.max(0, health - reducedDamage);
            } else {
              health = Math.max(0, health - hitDamage);
            }
            if (health <= 0) {
              respawnPlayer();
            } else {
              updateHud();
            }
          }
        }
      }
      return;
    }

    if (payload.type === 'game_state') {
      if (state.joinedRoom && state.joinedRoom.room.id === payload.data.roomId) {
        state.joinedRoom.room.status = payload.data.status;
        state.joinedRoom.room.hostId = payload.data.hostId;
        updateHud();
      }
    }
  });

  ws.addEventListener('close', () => {
    connectionStatus.textContent = 'Desconectado. Reintentando...';
    state.joinedRoom = null;
    clearRemotePlayers();
    setInRoom(false);
    resetCombatStats();
    updateHud();
    setTimeout(connectWebSocket, 1200);
  });

  ws.addEventListener('error', () => {
    setLobbyError('No se pudo conectar al WebSocket');
  });
};

createRoomBtn.addEventListener('click', () => {
  const roomName = roomNameInput.value.trim();

  if (!roomName) {
    setLobbyError('Ingresa un nombre de sala');
    return;
  }

  setLobbyError();
  sendWs({
    type: 'create_room',
    roomName,
    playerName: playerNameInput.value.trim(),
  });
});

refreshRoomsBtn.addEventListener('click', () => {
  sendWs({ type: 'list_rooms' });
});

leaveRoomHudBtn.addEventListener('click', () => {
  sendWs({ type: 'leave_room' });
});

startGameBtn.addEventListener('click', () => {
  sendWs({ type: 'start_game' });
});

endGameBtn.addEventListener('click', () => {
  sendWs({ type: 'end_game' });
});

const updateLook = () => {
  euler.set(pitch, yaw, 0);
  camera.quaternion.setFromEuler(euler);
};

const sendLocalPlayerState = (force = false) => {
  if (!state.joinedRoom) {
    return;
  }

  const now = performance.now();
  if (!force && now - state.lastStateSentAt < 55) {
    return;
  }

  state.lastStateSentAt = now;
  sendWs({
    type: 'player_move',
    position: {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    },
    rotation: { yaw, pitch },
  });
};

renderer.domElement.addEventListener('click', () => {
  if (!isLocked && state.joinedRoom) {
    renderer.domElement.requestPointerLock();
  }
});

document.addEventListener('pointerlockchange', () => {
  isLocked = document.pointerLockElement === renderer.domElement;
  app.classList.toggle('locked', isLocked);
  if (!isLocked) {
    isFiring = false;
  }
});

document.addEventListener('mousemove', (event) => {
  if (!isLocked || !canPlay()) {
    return;
  }
  yaw -= event.movementX * 0.0021;
  pitch -= event.movementY * 0.0021;
  pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, pitch));
  updateLook();
  sendLocalPlayerState();
});

window.addEventListener('mousedown', (event) => {
  if (event.button === 0 && isLocked && canPlay()) {
    isFiring = true;
  }
});

window.addEventListener('mouseup', (event) => {
  if (event.button === 0) {
    isFiring = false;
  }
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'KeyI') {
    state.showMatchInfo = !state.showMatchInfo;
    syncInfoVisibility();
  }

  if (event.code === 'KeyR') {
    reloadWeapon();
  }

  if (event.code in keys) {
    keys[event.code] = true;
  }
});

window.addEventListener('keyup', (event) => {
  if (event.code in keys) {
    keys[event.code] = false;
  }
});

const shoot = () => {
  if (ammoInMag <= 0) {
    reloadWeapon();
    return;
  }

  ammoInMag -= 1;
  updateHud();

  camera.getWorldDirection(dir);
  const origin = camera.position.clone().add(dir.clone().multiplyScalar(0.55));

  raycaster.setFromCamera(centerAim, camera);
  raycaster.far = 220;
  const hits = raycaster.intersectObjects(shootables, false);

  const hitPoint = hits.length > 0
    ? hits[0].point
    : origin.clone().add(raycaster.ray.direction.clone().multiplyScalar(120));

  const distance = origin.distanceTo(hitPoint);

  createTracer(origin, hitPoint);
  createImpact(hitPoint);

  sendWs({
    type: 'player_shoot',
    origin: { x: origin.x, y: origin.y, z: origin.z },
    direction: {
      x: raycaster.ray.direction.x,
      y: raycaster.ray.direction.y,
      z: raycaster.ray.direction.z,
    },
    distance,
  });

  muzzleFlash.intensity = 2.3;

  pitch += (Math.random() * 0.5 + 0.5) * recoilVertical;
  yaw += (Math.random() - 0.5) * recoilHorizontal;
  pitch = Math.min(pitch, Math.PI / 2 - 0.01);
  updateLook();

  if (hits.length > 0) {
    const target = hits[0].object;
    target.material.emissiveIntensity = 1.3;
  }
};

const collectAmmoPickup = (pickup, nowMs) => {
  pickup.active = false;
  pickup.respawnAt = nowMs + ammoPickupRespawnMs;
  pickup.mesh.visible = false;

  ammoReserve = Math.min(maxAmmoTotal, ammoReserve + ammoPickupAmount);
  updateHud();
};

const collectShieldPickup = (pickup, nowMs) => {
  pickup.active = false;
  pickup.respawnAt = nowMs + shieldPickupRespawnMs;
  pickup.mesh.visible = false;

  shield = Math.min(maxShield, shield + shieldPickupAmount);
  updateHud();
};

const updateMovement = (delta) => {
  if (!canPlay()) {
    return;
  }

  move.set(0, 0, 0);
  camera.getWorldDirection(forward);
  forward.y = 0;
  forward.normalize();
  right.crossVectors(forward, camera.up).normalize();

  if (keys.KeyW) move.add(forward);
  if (keys.KeyS) move.sub(forward);
  if (keys.KeyA) move.sub(right);
  if (keys.KeyD) move.add(right);

  if (move.lengthSq() > 0) {
    move.normalize().multiplyScalar(speed * delta);
    camera.position.add(move);
    camera.position.y = 1.7;
    sendLocalPlayerState();
  }
};

const updateAmmoPickups = (delta) => {
  const nowMs = performance.now();
  const nowSeconds = nowMs / 1000;

  for (let i = 0; i < ammoPickups.length; i += 1) {
    const pickup = ammoPickups[i];

    if (!pickup.active) {
      if (nowMs >= pickup.respawnAt) {
        pickup.active = true;
        pickup.mesh.visible = true;
      } else {
        continue;
      }
    }

    pickup.mesh.rotation.y += delta * 2.2;
    pickup.mesh.position.y = pickup.baseY + Math.sin(nowSeconds * 2.4 + pickup.phase) * 0.09;

    if (!canPlay() || ammoReserve >= maxAmmoTotal) {
      continue;
    }

    const dx = camera.position.x - pickup.mesh.position.x;
    const dz = camera.position.z - pickup.mesh.position.z;
    const horizontalDistanceSq = dx * dx + dz * dz;
    if (horizontalDistanceSq <= 1.1 * 1.1) {
      collectAmmoPickup(pickup, nowMs);
    }
  }
};

const updateShieldPickups = (delta) => {
  const nowMs = performance.now();
  const nowSeconds = nowMs / 1000;

  for (let i = 0; i < shieldPickups.length; i += 1) {
    const pickup = shieldPickups[i];

    if (!pickup.active) {
      if (nowMs >= pickup.respawnAt) {
        pickup.active = true;
        pickup.mesh.visible = true;
      } else {
        continue;
      }
    }

    pickup.mesh.rotation.x += delta * 1.3;
    pickup.mesh.rotation.y += delta * 1.7;
    pickup.mesh.position.y = pickup.baseY + Math.sin(nowSeconds * 2 + pickup.phase) * 0.1;

    if (!canPlay() || shield >= maxShield) {
      continue;
    }

    const dx = camera.position.x - pickup.mesh.position.x;
    const dz = camera.position.z - pickup.mesh.position.z;
    const horizontalDistanceSq = dx * dx + dz * dz;
    if (horizontalDistanceSq <= 1.1 * 1.1) {
      collectShieldPickup(pickup, nowMs);
    }
  }
};

const updateRain = (delta) => {
  for (let i = 0; i < rainCount; i += 1) {
    const yIndex = i * 3 + 1;
    rainPos[yIndex] -= rainVel[i] * delta;
    if (rainPos[yIndex] < 0.2) {
      rainPos[yIndex] = Math.random() * 120 + 25;
      rainPos[i * 3] = camera.position.x + (Math.random() - 0.5) * 180;
      rainPos[i * 3 + 2] = camera.position.z + (Math.random() - 0.5) * 180;
    }
  }
  rainGeo.attributes.position.needsUpdate = true;
};

const updateRemotePlayers = (delta) => {
  const factor = Math.min(1, delta * 9);

  for (const entry of state.remotePlayers.values()) {
    entry.group.position.lerp(entry.targetPosition, factor);
    entry.group.rotation.y = lerpAngle(entry.group.rotation.y, entry.targetYaw, factor);
    entry.head.rotation.x = lerpAngle(entry.head.rotation.x, entry.targetPitch, factor);
  }
};

const updateEffects = (delta) => {
  muzzleFlash.intensity = Math.max(0, muzzleFlash.intensity - 20 * delta);

  for (let i = activeTracers.length - 1; i >= 0; i -= 1) {
    const tracer = activeTracers[i];
    tracer.userData.life -= delta;
    tracer.material.opacity = Math.max(0, tracer.userData.life * 12);
    if (tracer.userData.life <= 0) {
      scene.remove(tracer);
      tracer.geometry.dispose();
      tracer.material.dispose();
      activeTracers.splice(i, 1);
    }
  }

  for (let i = activeImpacts.length - 1; i >= 0; i -= 1) {
    const impact = activeImpacts[i];
    impact.userData.life -= delta;
    impact.scale.multiplyScalar(1 + 7 * delta);
    impact.material.opacity = Math.max(0, impact.userData.life * 5);
    if (impact.userData.life <= 0) {
      scene.remove(impact);
      impact.material.dispose();
      activeImpacts.splice(i, 1);
    }
  }

  for (let i = 0; i < shootables.length; i += 1) {
    const target = shootables[i];
    if (target.material.emissiveIntensity > 0.5) {
      target.material.emissiveIntensity = Math.max(0.5, target.material.emissiveIntensity - 3 * delta);
    }
  }
};

const updateShooting = (delta) => {
  if (!canPlay()) {
    return;
  }

  if (isReloading) {
    reloadCooldown -= delta;
    if (reloadCooldown <= 0) {
      const needed = maxAmmoInMag - ammoInMag;
      const reloaded = Math.min(needed, ammoReserve);
      ammoInMag += reloaded;
      ammoReserve -= reloaded;
      isReloading = false;
      updateHud();
    }
  }

  cooldown -= delta;
  if (isLocked && isFiring && cooldown <= 0 && !isReloading) {
    shoot();
    cooldown = 1 / fireRate;

    if (ammoInMag <= 0 && ammoReserve > 0) {
      reloadWeapon();
    }
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05);
  updateMovement(delta);
  updateAmmoPickups(delta);
  updateShieldPickups(delta);
  updateRain(delta);
  updateRemotePlayers(delta);
  updateShooting(delta);
  updateEffects(delta);
  renderer.render(scene, camera);
};

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

setInRoom(false);
updateHud();
renderRooms();
updateLook();
animate();
connectWebSocket();
