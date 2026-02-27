import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';

const app = document.querySelector('#app');
app.innerHTML = `
  <section id="lobby">
    <div class="lobby-layout">
      <div class="lobby-main">
        <h1>Matrix Lobby</h1>
        <p id="connectionStatus">Conectando al backend...</p>
        <label>
          Nombre de jugador
          <input id="playerName" maxlength="24" placeholder="Neo" />
        </label>
        <label>
          Personaje
          <select id="characterSelect">
            <option value="">Cargando...</option>
          </select>
        </label>
        <div id="characterPreview" class="character-preview"></div>
        <div class="lobby-actions">
          <button id="refreshRoomsBtn" type="button">Refrescar</button>
        </div>
        <h2>Salas activas</h2>
        <div id="roomList" class="room-list"></div>
        <p id="lobbyError" class="error hidden"></p>
      </div>

      <aside class="lobby-controls">
        <h2>Controles</h2>
        <p><strong>Movimiento:</strong> W A S D</p>
        <p><strong>Saltar:</strong> Space</p>
        <p><strong>Disparar:</strong> Mouse izquierdo</p>
        <p><strong>Recargar:</strong> R</p>
        <p><strong>Animación Funny:</strong> F</p>
        <p><strong>Cambiar cámara:</strong> C</p>
        <p><strong>Info partida:</strong> I</p>
        <p><strong>Marcador:</strong> Tab</p>
        <p><strong>FPS + Latencia:</strong> P</p>
        <p><strong>Capturar mouse:</strong> Click en juego</p>
        <p><strong>Liberar mouse:</strong> ESC</p>
        <h2>Habilidades</h2>
        <p><strong>silentman:</strong> magia sagrada en espiral</p>
        <p><strong>pumori:</strong> martillo sagrado en parábola</p>
      </aside>
    </div>
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
      <p id="weatherHud">Clima: -</p>
      <p id="playersHud">Jugadores: -</p>
      <div id="hostControls" class="host-controls hidden">
        <button id="startGameBtn" type="button">Iniciar partida</button>
        <button id="endGameBtn" type="button">Finalizar partida</button>
      </div>
      <button id="leaveRoomHudBtn" type="button">Salir de sala</button>
    </div>

    <div id="perfPanel" class="hidden">
      <p>FPS: <span id="fpsValue">0</span></p>
      <p>Latencia: <span id="latencyValue">--</span></p>
    </div>
  </div>

  <div id="respawnScreen" class="hidden">
    <div class="respawn-card">
      <h2>Eliminado</h2>
      <p>Respawn en <strong id="respawnCounter">10</strong>s</p>
    </div>
  </div>

  <div id="winnerScreen" class="hidden">
    <div class="winner-card">
      <h2>Fin de ronda</h2>
      <p id="winnerText">Ganador: -</p>
      <p>Reiniciando en <strong id="winnerCounter">10</strong>s</p>
    </div>
  </div>

  <div id="damageOverlay"></div>

  <div id="scoreboard" class="hidden">
    <div class="scoreboard-card">
      <h2>Jugadores conectados</h2>
      <table>
        <thead>
          <tr><th>Jugador</th><th>K</th><th>M</th></tr>
        </thead>
        <tbody id="scoreboardBody"></tbody>
      </table>
    </div>
  </div>

  <div id="crosshair" aria-hidden="true"></div>

  <div id="chatFeed" class="chat-feed">
    <div id="chatLog" class="chat-log"></div>
  </div>

  <div id="chatPanel" class="chat-panel">
    <div id="chatInputWrap" class="chat-input-wrap hidden">
      <input id="chatInput" type="text" maxlength="180" placeholder="Escribe un mensaje..." autocomplete="off" />
    </div>
  </div>
`;

const connectionStatus = document.querySelector('#connectionStatus');
const playerNameInput = document.querySelector('#playerName');
const characterSelect = document.querySelector('#characterSelect');
const characterPreview = document.querySelector('#characterPreview');
const refreshRoomsBtn = document.querySelector('#refreshRoomsBtn');
const roomList = document.querySelector('#roomList');
const lobbyError = document.querySelector('#lobbyError');
const matchInfo = document.querySelector('#matchInfo');
const respawnScreen = document.querySelector('#respawnScreen');
const respawnCounter = document.querySelector('#respawnCounter');
const winnerScreen = document.querySelector('#winnerScreen');
const winnerText = document.querySelector('#winnerText');
const winnerCounter = document.querySelector('#winnerCounter');
const damageOverlay = document.querySelector('#damageOverlay');
const scoreboard = document.querySelector('#scoreboard');
const scoreboardBody = document.querySelector('#scoreboardBody');
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
const weatherHud = document.querySelector('#weatherHud');
const playersHud = document.querySelector('#playersHud');
const perfPanel = document.querySelector('#perfPanel');
const fpsValue = document.querySelector('#fpsValue');
const latencyValue = document.querySelector('#latencyValue');
const hostControls = document.querySelector('#hostControls');
const startGameBtn = document.querySelector('#startGameBtn');
const endGameBtn = document.querySelector('#endGameBtn');
const leaveRoomHudBtn = document.querySelector('#leaveRoomHudBtn');
const chatFeed = document.querySelector('#chatFeed');
const chatPanel = document.querySelector('#chatPanel');
const chatLog = document.querySelector('#chatLog');
const chatInputWrap = document.querySelector('#chatInputWrap');
const chatInput = document.querySelector('#chatInput');

const state = {
  ws: null,
  self: null,
  rooms: [],
  joinedRoom: null,
  remotePlayers: new Map(),
  lastStateSentAt: 0,
  showMatchInfo: false,
  showScoreboard: false,
  showPerf: false,
  fps: 0,
  latencyMs: null,
};

const chatMessages = [];
const maxChatMessages = 40;
const chatMessageTtlMs = 8000;
let isChatTyping = false;

const clearMovementKeys = () => {
  keys.KeyW = false;
  keys.KeyA = false;
  keys.KeyS = false;
  keys.KeyD = false;
  keys.Space = false;
};

const renderChat = () => {
  if (!chatLog) {
    return;
  }
  const now = Date.now();
  for (let i = chatMessages.length - 1; i >= 0; i -= 1) {
    if (now - chatMessages[i].ts > chatMessageTtlMs) {
      chatMessages.splice(i, 1);
    }
  }
  chatFeed.classList.toggle('open', chatMessages.length > 0);
  const recent = chatMessages.slice(-8);
  chatLog.innerHTML = recent.map((msg) => {
    const selfTag = msg.isSelf ? ' (Tú)' : '';
    return `<p><strong>${msg.playerName}${selfTag}:</strong> ${msg.text}</p>`;
  }).join('');
  chatLog.scrollTop = chatLog.scrollHeight;
};

const pushChatMessage = (playerName, text) => {
  if (!text) {
    return;
  }
  const isSelf = Boolean(state.self && String(playerName || '') === String(state.self.name || ''));
  chatMessages.push({
    playerName: String(playerName || 'Player'),
    text: String(text || ''),
    isSelf,
    ts: Date.now(),
  });
  if (chatMessages.length > maxChatMessages) {
    chatMessages.splice(0, chatMessages.length - maxChatMessages);
  }
  renderChat();
};

setInterval(() => {
  if (chatMessages.length > 0 && !isChatTyping) {
    renderChat();
  }
}, 500);

const openChatInput = () => {
  if (!state.joinedRoom) {
    return;
  }
  isChatTyping = true;
  clearMovementKeys();
  isFiring = false;
  chatPanel.classList.add('open');
  chatInputWrap.classList.remove('hidden');
  if (document.pointerLockElement) {
    document.exitPointerLock();
  }
  chatInput.value = '';
  chatInput.focus();
};

const closeChatInput = () => {
  isChatTyping = false;
  chatPanel.classList.remove('open');
  chatInputWrap.classList.add('hidden');
  chatInput.blur();
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

const shuffleArray = (values) => {
  const out = [...values];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
};

const setInRoom = (value) => {
  app.classList.toggle('in-room', value);
  if (value) {
    stopLobbyMusic();
  } else {
    startLobbyMusic();
  }
  if (!value && document.pointerLockElement) {
    document.exitPointerLock();
  }
  if (!value) {
    chatMessages.length = 0;
    renderChat();
    closeChatInput();
    chatFeed.classList.remove('open');
  }
};

const syncInfoVisibility = () => {
  if (state.showMatchInfo && state.joinedRoom) {
    matchInfo.classList.add('visible');
  } else {
    matchInfo.classList.remove('visible');
  }
};

const renderScoreboard = () => {
  if (!state.joinedRoom || !state.showScoreboard) {
    scoreboard.classList.add('hidden');
    return;
  }

  const players = [...state.joinedRoom.players].sort((a, b) => {
    if ((b.kills || 0) !== (a.kills || 0)) {
      return (b.kills || 0) - (a.kills || 0);
    }
    return (a.deaths || 0) - (b.deaths || 0);
  });

  scoreboardBody.innerHTML = players.map((player) => {
    const me = state.self && player.id === state.self.id ? ' (Tú)' : '';
    return `<tr><td>${player.name}${me}</td><td>${player.kills || 0}</td><td>${player.deaths || 0}</td></tr>`;
  }).join('');

  scoreboard.classList.remove('hidden');
};

const renderPerfPanel = () => {
  if (!state.joinedRoom || !state.showPerf) {
    perfPanel.classList.add('hidden');
    return;
  }

  fpsValue.textContent = String(state.fps);
  latencyValue.textContent = Number.isFinite(state.latencyMs)
    ? `${Math.round(state.latencyMs)} ms`
    : '--';
  perfPanel.classList.remove('hidden');
};

const isHost = () => {
  return Boolean(state.joinedRoom && state.self && state.joinedRoom.room.hostId === state.self.id);
};

const canPlay = () => {
  return Boolean(state.joinedRoom && state.joinedRoom.room.status === 'in_game' && !isRespawning && !isMatchEnding);
};

const isMatchRunning = () => {
  return Boolean(state.joinedRoom && state.joinedRoom.room.status === 'in_game');
};

const formatWeather = (weather) => {
  if (weather === 'rainy') return 'Lluvioso';
  if (weather === 'sunny') return 'Soleado';
  if (weather === 'night') return 'Noche';
  if (weather === 'snow') return 'Nieve';
  return weather || '-';
};

const applyWeather = (weather) => {
  const value = weather || 'night';
  currentWeather = value;

  rain.visible = value === 'rainy';
  snow.visible = value === 'snow';
  stars.visible = value === 'night';

  if (value === 'sunny') {
    scene.background = new THREE.Color(0x8dd5ff);
    scene.fog.color.set(0x8dd5ff);
    scene.fog.near = 90;
    scene.fog.far = 400;
    ambient.intensity = 0.74;
    keyLight.intensity = 1.2;
    keyLight.color.set(0xfff2c2);
  } else if (value === 'rainy') {
    scene.background = new THREE.Color(0x4b5e69);
    scene.fog.color.set(0x4b5e69);
    scene.fog.near = 10;
    scene.fog.far = 95;
    ambient.intensity = 0.26;
    keyLight.intensity = 0.42;
    keyLight.color.set(0x8bb7d7);
  } else if (value === 'snow') {
    scene.background = new THREE.Color(0xc9e4f2);
    scene.fog.color.set(0xc9e4f2);
    scene.fog.near = 26;
    scene.fog.far = 200;
    ambient.intensity = 0.65;
    keyLight.intensity = 0.9;
    keyLight.color.set(0xe7f6ff);
  } else {
    scene.background = new THREE.Color(0x020409);
    scene.fog.color.set(0x020409);
    scene.fog.near = 16;
    scene.fog.far = 140;
    ambient.intensity = 0.2;
    keyLight.intensity = 0.32;
    keyLight.color.set(0x5c6bb3);
  }
};

const sendWs = (payload) => {
  if (!state.ws || state.ws.readyState !== WebSocket.OPEN) {
    setLobbyError('WebSocket no conectado');
    return;
  }

  state.ws.send(JSON.stringify(payload));
};

let latencyProbeSeq = 0;
let pendingLatencyProbe = null;
let lastLatencyProbeAt = 0;
const latencyProbeIntervalMs = 2_000;
let fpsFrames = 0;
let fpsSampleStartedAt = performance.now();

const requestLatencyProbe = (force = false) => {
  const now = performance.now();
  if (!state.showPerf || !state.joinedRoom || !state.ws || state.ws.readyState !== WebSocket.OPEN) {
    return;
  }

  if (pendingLatencyProbe && now - pendingLatencyProbe.sentAt < 5000) {
    return;
  }

  if (!force && now - lastLatencyProbeAt < latencyProbeIntervalMs) {
    return;
  }

  const probeId = `${Date.now()}-${latencyProbeSeq}`;
  latencyProbeSeq += 1;
  pendingLatencyProbe = { id: probeId, sentAt: now };
  lastLatencyProbeAt = now;
  sendWs({
    type: 'ping',
    probeId,
    clientTs: Date.now(),
  });
};

const updatePerfMetrics = () => {
  const now = performance.now();
  fpsFrames += 1;
  const elapsed = now - fpsSampleStartedAt;

  if (elapsed >= 500) {
    state.fps = Math.max(0, Math.round((fpsFrames * 1000) / elapsed));
    fpsFrames = 0;
    fpsSampleStartedAt = now;
    if (state.showPerf && state.joinedRoom) {
      renderPerfPanel();
    }
  }

  requestLatencyProbe();
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
        character: characterSelect.value || activeCharacter,
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

const resolveApiBaseUrl = () => {
  const explicit = import.meta.env.VITE_API_BASE_URL;
  if (explicit) {
    return explicit.replace(/\/+$/, '');
  }

  return `${window.location.protocol}//${window.location.host}`;
};

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x010501);
scene.fog = new THREE.Fog(0x010501, 18, 160);
let currentWeather = 'night';

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(0, 1.7, 10);
const thirdPersonCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
let isThirdPerson = false;
const thirdPersonDistance = 4.6;
const thirdPersonHeight = 1.25;
const thirdPersonShoulder = 0.7;
const thirdPersonLerp = 0.18;
const tpLookAt = new THREE.Vector3();
const tpTargetPos = new THREE.Vector3();
const tpForward = new THREE.Vector3();
const tpRight = new THREE.Vector3();
const tpAimForward = new THREE.Vector3();

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
const pillarBounds = [];
const playerCollisionRadius = 0.55;
const mapHalfExtent = 156;
let currentMapSeed = null;
for (let i = 0; i < 220; i += 1) {
  const w = 1 + Math.random() * 3;
  const d = 1 + Math.random() * 3;
  const h = 3 + Math.random() * 24;
  const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), blockMat.clone());
  box.position.set((Math.random() - 0.5) * 220, h / 2, (Math.random() - 0.5) * 220);
  box.userData.hp = 1 + Math.floor(Math.random() * 3);
  scene.add(box);
  shootables.push(box);
  pillarBounds.push({
    minX: box.position.x - (w / 2),
    maxX: box.position.x + (w / 2),
    minZ: box.position.z - (d / 2),
    maxZ: box.position.z + (d / 2),
  });
}

const rainCount = 5600;
const rainPos = new Float32Array(rainCount * 3);
const rainVel = new Float32Array(rainCount);
for (let i = 0; i < rainCount; i += 1) {
  rainPos[i * 3] = (Math.random() - 0.5) * 260;
  rainPos[i * 3 + 1] = Math.random() * 120 + 6;
  rainPos[i * 3 + 2] = (Math.random() - 0.5) * 260;
  rainVel[i] = 22 + Math.random() * 26;
}

const rainGeo = new THREE.BufferGeometry();
rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
const rainMat = new THREE.PointsMaterial({
  color: 0x66ff66,
  size: 0.26,
  transparent: true,
  opacity: 0.98,
  sizeAttenuation: true,
});
const rain = new THREE.Points(rainGeo, rainMat);
scene.add(rain);

const snowCount = 1700;
const snowPos = new Float32Array(snowCount * 3);
const snowVel = new Float32Array(snowCount);
for (let i = 0; i < snowCount; i += 1) {
  snowPos[i * 3] = (Math.random() - 0.5) * 260;
  snowPos[i * 3 + 1] = Math.random() * 120 + 6;
  snowPos[i * 3 + 2] = (Math.random() - 0.5) * 260;
  snowVel[i] = 1.6 + Math.random() * 2.7;
}

const snowGeo = new THREE.BufferGeometry();
snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
const snowMat = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.22,
  transparent: true,
  opacity: 0.85,
  sizeAttenuation: true,
});
const snow = new THREE.Points(snowGeo, snowMat);
scene.add(snow);

const starCount = 1200;
const starPos = new Float32Array(starCount * 3);
for (let i = 0; i < starCount; i += 1) {
  starPos[i * 3] = (Math.random() - 0.5) * 420;
  starPos[i * 3 + 1] = 70 + Math.random() * 80;
  starPos[i * 3 + 2] = (Math.random() - 0.5) * 420;
}
const starGeo = new THREE.BufferGeometry();
starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
const starMat = new THREE.PointsMaterial({
  color: 0xbfd8ff,
  size: 0.36,
  transparent: true,
  opacity: 0.78,
  sizeAttenuation: true,
});
const stars = new THREE.Points(starGeo, starMat);
scene.add(stars);

const gltfLoader = new GLTFLoader();
const characterResources = new Map();
const availableCharacters = [];
let activeCharacter = '';
const characterActions = ['attack', 'dead', 'running', 'idle', 'jump', 'funny'];

const previewState = {
  renderer: null,
  scene: null,
  camera: null,
  mixer: null,
  model: null,
  lastWidth: 0,
  lastHeight: 0,
};

const localAvatar = {
  group: null,
  mixer: null,
  actions: null,
  currentAnimation: '',
  shootUntil: 0,
  loadingKey: '',
  funnyUntil: 0,
};

const getCharacterAssetKey = (characterId) => {
  const raw = String(characterId || '').trim();
  if (!raw) {
    return '';
  }
  const normalized = raw
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  if (normalized === 'pezunalunar') {
    return 'pezunalunar';
  }
  return raw;
};

const getCharacterActionUrl = (characterId, actionFile) => {
  return `/characters/${encodeURIComponent(getCharacterAssetKey(characterId))}/${encodeURIComponent(actionFile)}`;
};

const getCharacterLabel = (characterId) => {
  if (getCharacterAssetKey(characterId) === 'pezunalunar') {
    return 'pezuñalunar';
  }
  return characterId;
};

const getWeaponLabel = (weaponFile) => {
  return String(weaponFile || '').replace(/\.[^.]+$/, '');
};

const hasModelExtension = (value) => {
  return /\.(glb|gltf)$/i.test(String(value || '').trim());
};

const getCharacterLoadCandidates = (characterId) => {
  const normalized = String(characterId || '').trim();
  if (!normalized) {
    return [];
  }
  const canonical = getCharacterAssetKey(normalized);
  if (canonical === normalized) {
    return [normalized];
  }
  return [canonical, normalized];
};

const loadModelByCandidates = (urls) => {
  return new Promise((resolve) => {
    const tryLoad = (index) => {
      if (index >= urls.length) {
        resolve(null);
        return;
      }
      gltfLoader.load(
        urls[index],
        (gltf) => resolve(gltf),
        undefined,
        () => tryLoad(index + 1),
      );
    };
    tryLoad(0);
  });
};

const extractClipWithName = (gltf, clipName) => {
  if (!gltf?.animations || gltf.animations.length === 0) {
    return null;
  }
  const clip = gltf.animations[0].clone();
  clip.name = clipName;
  return clip;
};

const ensureCharacterResource = async (characterId) => {
  if (!characterId) {
    return null;
  }

  const existing = characterResources.get(characterId);
  if (existing?.loaded) {
    return existing;
  }
  if (existing?.loadingPromise) {
    return existing.loadingPromise;
  }

  const resource = existing || {
    loaded: false,
    scene: null,
    animations: [],
    animationSet: {},
    loadingPromise: null,
  };
  characterResources.set(characterId, resource);

  resource.loadingPromise = new Promise((resolve) => {
    const candidates = getCharacterLoadCandidates(characterId);
    if (candidates.length === 0) {
      resource.loaded = false;
      resource.scene = null;
      resource.animations = [];
      resource.animationSet = {};
      resource.loadingPromise = null;
      resolve(resource);
      return;
    }

    Promise.all(characterActions.map(async (actionName) => {
      const actionCandidates = hasModelExtension(actionName)
        ? [actionName]
        : [actionName, `${actionName}.glb`, `${actionName}.gltf`];
      const urls = candidates.flatMap((candidate) => {
        return actionCandidates.map((fileName) => getCharacterActionUrl(candidate, fileName));
      });
      const gltf = await loadModelByCandidates(urls);
      return { actionName, gltf };
    })).then((loadedActions) => {
      const deadModel = loadedActions.find((entry) => entry.actionName === 'dead' && entry.gltf?.scene)?.gltf;
      const idleModel = loadedActions.find((entry) => entry.actionName === 'idle' && entry.gltf?.scene)?.gltf;
      const runningModel = loadedActions.find((entry) => entry.actionName === 'running' && entry.gltf?.scene)?.gltf;
      const jumpModel = loadedActions.find((entry) => entry.actionName === 'jump' && entry.gltf?.scene)?.gltf;
      const funnyModel = loadedActions.find((entry) => entry.actionName === 'funny' && entry.gltf?.scene)?.gltf;
      const attackModel = loadedActions.find((entry) => entry.actionName === 'attack' && entry.gltf?.scene)?.gltf;
      const base = idleModel || runningModel || jumpModel || funnyModel || deadModel || attackModel;

      if (!base?.scene) {
        resource.loaded = false;
        resource.scene = null;
        resource.animations = [];
        resource.animationSet = {};
        resource.loadingPromise = null;
        resolve(resource);
        return;
      }

      const animationSet = {
        attack: extractClipWithName(attackModel, 'attack'),
        dead: extractClipWithName(deadModel, 'dead'),
        running: extractClipWithName(runningModel, 'running'),
        idle: extractClipWithName(idleModel, 'idle'),
        jump: extractClipWithName(jumpModel, 'jump'),
        funny: extractClipWithName(funnyModel, 'funny'),
      };
      const animations = Object.values(animationSet).filter(Boolean);

      resource.loaded = true;
      resource.scene = base.scene;
      resource.animations = animations;
      resource.animationSet = animationSet;
      resource.loadingPromise = null;
      resolve(resource);
    });
  });

  return resource.loadingPromise;
};

const getWeaponMountBone = (root) => {
  const armatureChain = [
    'armature',
    'spine02',
    'spine01',
    'spine',
    'rightshoulder',
    'rightarm',
    'rightforearm',
    'righthand',
  ];

  const findByName = (parent, targetName) => {
    return parent.children.find((child) => String(child.name || '').toLowerCase() === targetName) || null;
  };

  let armatureRoot = null;
  root.traverse((node) => {
    if (!armatureRoot && String(node.name || '').toLowerCase() === armatureChain[0]) {
      armatureRoot = node;
    }
  });

  if (armatureRoot) {
    let current = armatureRoot;
    let valid = true;
    for (let i = 1; i < armatureChain.length; i += 1) {
      const next = findByName(current, armatureChain[i]);
      if (!next) {
        valid = false;
        break;
      }
      current = next;
    }
    if (valid) {
      if (DEBUG_WEAPON_ATTACH) {
        console.log('[weapon][bone:path]', { bone: current.name });
      }
      return current;
    }
  }

  let strictRightHand = null;
  root.traverse((node) => {
    if (strictRightHand || !node.isBone) {
      return;
    }
    const name = String(node.name || '').toLowerCase();
    if (name === 'righthand') {
      strictRightHand = node;
    }
  });
  if (strictRightHand) {
    if (DEBUG_WEAPON_ATTACH) {
      console.log('[weapon][bone:exact]', { bone: strictRightHand.name });
    }
    return strictRightHand;
  }

  const boneHints = [
    'mixamorigrighthand',
    'righthand',
    'hand_r',
    'right_hand',
    'right hand',
    'r_hand',
    'bip001 r hand',
    'weapon',
    'gun',
  ];
  let candidate = null;

  root.traverse((node) => {
    if (candidate || !node.isBone) {
      return;
    }
    const name = String(node.name || '').toLowerCase();
    if (boneHints.some((hint) => name.includes(hint))) {
      candidate = node;
    }
  });

  if (DEBUG_WEAPON_ATTACH) {
    console.log('[weapon][bone:fallback]', { bone: candidate ? candidate.name : 'ROOT' });
  }
  return candidate;
};

const getLeftHandBone = (root) => {
  let strictLeftHand = null;
  root.traverse((node) => {
    if (strictLeftHand || !node.isBone) {
      return;
    }
    const name = String(node.name || '').toLowerCase();
    if (name === 'lefthand') {
      strictLeftHand = node;
    }
  });
  if (strictLeftHand) {
    return strictLeftHand;
  }

  const hints = ['left_hand', 'hand_l', 'left hand', 'l_hand', 'mixamoriglefthand'];
  let candidate = null;
  root.traverse((node) => {
    if (candidate || !node.isBone) {
      return;
    }
    const name = String(node.name || '').toLowerCase();
    if (hints.some((hint) => name.includes(hint))) {
      candidate = node;
    }
  });
  return candidate;
};

const getWeaponMountNode = (root) => {
  const preferred = getWeaponMountBone(root);
  if (preferred) {
    return preferred;
  }
  return root;
};

const getBackMountBone = (root) => {
  const names = ['spine02', 'spine01', 'spine', 'hips'];
  let found = null;
  root.traverse((node) => {
    if (found || !node.isBone) {
      return;
    }
    const name = String(node.name || '').toLowerCase();
    if (names.includes(name)) {
      found = node;
    }
  });
  return found;
};

const normalizeWeaponModel = (weaponRoot) => {
  const box = new THREE.Box3().setFromObject(weaponRoot);
  if (!Number.isFinite(box.min.x) || !Number.isFinite(box.max.x)) {
    return;
  }

  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z, 0.0001);
  const targetSize = 0.85;
  const uniformScale = targetSize / maxDim;
  weaponRoot.scale.multiplyScalar(uniformScale);

  const fittedBox = new THREE.Box3().setFromObject(weaponRoot);
  const center = fittedBox.getCenter(new THREE.Vector3());
  weaponRoot.position.sub(center);
  weaponRoot.position.x += 0.12;
  weaponRoot.position.z += 0.1;
};

const attachWeaponToModel = (characterRoot, weaponResource, options = {}) => {
  if (!characterRoot || !weaponResource?.loaded || !weaponResource.scene) {
    return null;
  }

  const { forceRootMount = false, rootScale = 1, debugRemote = false } = options;
  const weaponClone = weaponResource.scene.clone(true);
  let meshCount = 0;
  weaponClone.traverse((node) => {
    if (node.isMesh) {
      meshCount += 1;
      node.frustumCulled = false;
      node.castShadow = false;
      node.receiveShadow = false;
      if (node.material) {
        const materials = Array.isArray(node.material) ? node.material : [node.material];
        materials.forEach((mat) => {
          mat.depthTest = false;
          if ('transparent' in mat) {
            mat.transparent = false;
          }
          if ('opacity' in mat) {
            mat.opacity = 1;
          }
          mat.side = THREE.DoubleSide;
          if (debugRemote && DEBUG_WEAPON_ATTACH && mat.color) {
            mat.color.set(0xffee33);
          }
        });
      }
      node.visible = true;
      if (debugRemote && DEBUG_WEAPON_ATTACH) {
        node.renderOrder = 999;
      }
    }
  });
  normalizeWeaponModel(weaponClone);

  const mount = forceRootMount ? characterRoot : getWeaponMountNode(characterRoot);
  const attachedToRoot = mount === characterRoot;
  const pivot = new THREE.Group();
  if (attachedToRoot) {
    pivot.position.set(0.4, 1.1, 0.2);
    pivot.rotation.set(Math.PI / 2, 0.35, -Math.PI / 2);
    pivot.scale.setScalar(rootScale);
  } else {
    pivot.position.set(0.22, 0.02, 0.1);
    pivot.rotation.set(Math.PI / 2, 0.25, -Math.PI / 2);
    pivot.scale.setScalar(debugRemote && DEBUG_WEAPON_ATTACH ? 3.2 : 1.5);
  }
  mount.add(pivot);
  pivot.add(weaponClone);
  if (DEBUG_WEAPON_ATTACH) {
    const worldPos = new THREE.Vector3();
    const bbox = new THREE.Box3().setFromObject(weaponClone);
    const size = bbox.getSize(new THREE.Vector3());
    pivot.getWorldPosition(worldPos);
    console.log('[weapon][attach]', {
      mount: mount.name || '(unnamed)',
      attachedToRoot,
      world: { x: worldPos.x, y: worldPos.y, z: worldPos.z },
      meshCount,
      size: { x: size.x, y: size.y, z: size.z },
      debugRemote,
    });
  }
  if (DEBUG_WEAPON_ATTACH && debugRemote) {
    const marker = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 10, 10),
      new THREE.MeshBasicMaterial({ color: 0xff3333 }),
    );
    pivot.add(marker);
  }
  return pivot;
};

let localWeaponPivot = null;

const unmountLocalWeaponView = () => {
  if (!localWeaponPivot) {
    return;
  }

  camera.remove(localWeaponPivot);
  localWeaponPivot = null;
};

const mountLocalWeaponView = async () => {
  if (!state.joinedRoom || !activeWeapon) {
    unmountLocalWeaponView();
    return;
  }

  const targetWeapon = activeWeapon;
  const resource = await ensureWeaponResource(targetWeapon);
  if (!resource?.loaded || targetWeapon !== activeWeapon) {
    return;
  }

  unmountLocalWeaponView();

  const weaponClone = resource.scene.clone(true);
  weaponClone.traverse((node) => {
    if (node.isMesh) {
      node.frustumCulled = false;
      node.castShadow = false;
      node.receiveShadow = false;
    }
  });
  normalizeWeaponModel(weaponClone);

  const pivot = new THREE.Group();
  pivot.position.set(0.34, -0.34, -0.7);
  pivot.rotation.set(Math.PI / 2, 0.08, -Math.PI / 2);
  pivot.scale.setScalar(1.25);
  pivot.add(weaponClone);
  camera.add(pivot);
  localWeaponPivot = pivot;
};

const populateCharacterSelect = (characters) => {
  const previousSelection = characterSelect.value || activeCharacter;
  characterSelect.innerHTML = '';
  availableCharacters.length = 0;
  const randomizedCharacters = shuffleArray(characters);
  randomizedCharacters.forEach((character) => availableCharacters.push(character));

  if (availableCharacters.length === 0) {
    const opt = document.createElement('option');
    opt.value = '';
    opt.textContent = 'Sin personajes';
    characterSelect.appendChild(opt);
    characterSelect.disabled = true;
    activeCharacter = '';
    return;
  }

  characterSelect.disabled = false;
  availableCharacters.forEach((character) => {
    const opt = document.createElement('option');
    opt.value = character;
    opt.textContent = getCharacterLabel(character);
    characterSelect.appendChild(opt);
  });

  activeCharacter = availableCharacters.includes(previousSelection)
    ? previousSelection
    : availableCharacters[0];
  characterSelect.value = activeCharacter;
};

const loadCatalogs = async () => {
  const apiBase = resolveApiBaseUrl();
  let characters = null;

  try {
    const charactersRes = await fetch(`${apiBase}/characters`);
    const charactersPayload = await charactersRes.json();

    if (charactersPayload?.ok && Array.isArray(charactersPayload.data) && charactersPayload.data.length > 0) {
      characters = charactersPayload.data;
    }
  } catch {
    // fallback below
  }

  populateCharacterSelect(characters || ['silentman', 'pumori', 'neoorphen', 'pezunalunar']);
  configureLocalAttackSound(activeCharacter);
  await ensureCharacterResource(activeCharacter);
  await ensureLocalAvatar();
  mountPreviewModel();
  for (const entry of state.remotePlayers.values()) {
    upgradeRemotePlayerToCharacter(entry);
  }
};

const mountPreviewModel = () => {
  if (!previewState.scene) {
    return;
  }

  const selectedCharacter = characterSelect.value || activeCharacter;
  if (!selectedCharacter) {
    return;
  }

  if (previewState.model) {
    previewState.scene.remove(previewState.model);
    previewState.model = null;
    previewState.mixer = null;
  }

  const resource = characterResources.get(selectedCharacter);
  if (!resource?.loaded || !resource.scene) {
    ensureCharacterResource(selectedCharacter).then((loadedResource) => {
      if (loadedResource?.loaded && (characterSelect.value || activeCharacter) === selectedCharacter) {
        mountPreviewModel();
      }
    });
    return;
  }

  const cloned = cloneSkinned(resource.scene);
  const box = new THREE.Box3().setFromObject(cloned);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  cloned.position.set(-center.x, -box.min.y, -center.z);
  previewState.scene.add(cloned);
  previewState.model = cloned;
  previewState.camera.position.set(0, Math.max(1.2, size.y * 0.55), Math.max(2.3, size.y * 0.95));
  previewState.camera.lookAt(0, Math.max(0.9, size.y * 0.45), 0);

  const clip = resource.animationSet?.running || findAnimationByName(resource.animations || [], 'running', ['running']);

  if (clip) {
    const mixer = new THREE.AnimationMixer(cloned);
    const action = mixer.clipAction(clip);
    action.reset();
    action.setLoop(THREE.LoopRepeat, Infinity);
    action.play();
    previewState.mixer = mixer;
  }
};

const setupCharacterPreview = () => {
  if (!characterPreview || previewState.renderer) {
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const w = characterPreview.clientWidth || 280;
  const h = characterPreview.clientHeight || 220;
  renderer.setSize(w, h, false);
  characterPreview.appendChild(renderer.domElement);

  const hemi = new THREE.HemisphereLight(0xbef5ff, 0x1e261e, 0.95);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xffffff, 1);
  key.position.set(3.5, 5, 4);
  scene.add(key);

  previewState.scene = scene;
  previewState.camera = camera;
  previewState.renderer = renderer;
  previewState.lastWidth = w;
  previewState.lastHeight = h;

  mountPreviewModel();
};

const resizeCharacterPreview = () => {
  if (!previewState.renderer || !previewState.camera) {
    return;
  }

  const w = characterPreview.clientWidth || 280;
  const h = characterPreview.clientHeight || 220;
  if (w === previewState.lastWidth && h === previewState.lastHeight) {
    return;
  }

  previewState.lastWidth = w;
  previewState.lastHeight = h;
  previewState.camera.aspect = w / h;
  previewState.camera.updateProjectionMatrix();
  previewState.renderer.setSize(w, h, false);
};

const shootSound = new Audio('/8d82b5_Doom_Chaingun_Firing_Sound_Effect.mp3');
shootSound.preload = 'auto';
shootSound.loop = false;
shootSound.volume = 0.24;
let shootSoundActive = false;
const localAttackVoices = [];
const maxLocalAttackVoices = 8;
const lobbyTrackPath = '/lobby/1.mp3';
const lobbyMusic = new Audio(lobbyTrackPath);
lobbyMusic.preload = 'auto';
lobbyMusic.loop = true;
lobbyMusic.volume = 0.34;
let lobbyMusicUnlocked = false;
let lobbyMusicActive = false;
const remoteShootSound = new Audio('/8d82b5_Doom_Chaingun_Firing_Sound_Effect.mp3');
remoteShootSound.preload = 'auto';
remoteShootSound.loop = true;
remoteShootSound.volume = 0.12;
const defaultAttackSoundUrl = '/8d82b5_Doom_Chaingun_Firing_Sound_Effect.mp3';
const attackSoundExtensions = ['.ogg', '.mp3', '.wav', '.m4a', ''];
const attackSoundUrlCache = new Map();
let localAttackSoundCharacter = '';
let remoteAttackSoundCharacter = '';
const remoteShootMaxDistance = 140;
const remoteShootMinDistance = 6;
const remoteShootHoldMs = 220;
let remoteShootSoundActive = false;
let remoteShootSoundUntil = 0;
let remoteShootTargetVolume = 0;

const buildAttackSoundCandidates = (characterId) => {
  const normalized = getCharacterAssetKey(characterId);
  if (!normalized) {
    return [];
  }

  return attackSoundExtensions.map((ext) => {
    return `/characters/${encodeURIComponent(normalized)}/attack_sound${ext}`;
  });
};

const canPlayAudioUrl = (url) => {
  return new Promise((resolve) => {
    const probe = new Audio();
    let done = false;

    const finish = (ok) => {
      if (done) {
        return;
      }
      done = true;
      probe.removeEventListener('canplaythrough', onCanPlay);
      probe.removeEventListener('loadedmetadata', onCanPlay);
      probe.removeEventListener('error', onError);
      resolve(ok);
    };

    const onCanPlay = () => finish(true);
    const onError = () => finish(false);

    probe.preload = 'metadata';
    probe.addEventListener('canplaythrough', onCanPlay, { once: true });
    probe.addEventListener('loadedmetadata', onCanPlay, { once: true });
    probe.addEventListener('error', onError, { once: true });
    probe.src = url;
    probe.load();

    setTimeout(() => finish(false), 900);
  });
};

const resolveCharacterAttackSoundUrl = async (characterId) => {
  const normalized = getCharacterAssetKey(characterId);
  if (!normalized) {
    return defaultAttackSoundUrl;
  }

  if (attackSoundUrlCache.has(normalized)) {
    return attackSoundUrlCache.get(normalized);
  }

  const candidates = buildAttackSoundCandidates(normalized);
  for (let i = 0; i < candidates.length; i += 1) {
    const candidate = candidates[i];
    // eslint-disable-next-line no-await-in-loop
    if (await canPlayAudioUrl(candidate)) {
      attackSoundUrlCache.set(normalized, candidate);
      return candidate;
    }
  }

  attackSoundUrlCache.set(normalized, defaultAttackSoundUrl);
  return defaultAttackSoundUrl;
};

const applyAudioSource = (audio, src) => {
  const current = audio.getAttribute('data-attack-src') || '';
  if (current === src) {
    return;
  }
  audio.pause();
  audio.currentTime = 0;
  audio.src = src;
  audio.setAttribute('data-attack-src', src);
  audio.removeAttribute('data-fallback-applied');
  audio.load();
};

const configureLocalAttackSound = async (characterId) => {
  const normalized = String(characterId || '').trim();
  if (normalized === localAttackSoundCharacter && shootSound.getAttribute('data-attack-src')) {
    return;
  }

  localAttackSoundCharacter = normalized;
  const src = await resolveCharacterAttackSoundUrl(normalized);
  if (normalized !== localAttackSoundCharacter) {
    return;
  }

  stopShootSound();
  applyAudioSource(shootSound, src);
};

const configureRemoteAttackSound = async (characterId) => {
  const normalized = String(characterId || '').trim();
  if (normalized === remoteAttackSoundCharacter && remoteShootSound.getAttribute('data-attack-src')) {
    return;
  }

  remoteAttackSoundCharacter = normalized;
  const src = await resolveCharacterAttackSoundUrl(normalized);
  if (normalized !== remoteAttackSoundCharacter) {
    return;
  }

  stopRemoteShootSound();
  applyAudioSource(remoteShootSound, src);
};

const shouldPlayLobbyMusic = () => {
  return !state.joinedRoom;
};

const startLobbyMusic = () => {
  if (!lobbyMusicUnlocked || lobbyMusicActive || !shouldPlayLobbyMusic()) {
    return;
  }

  lobbyMusicActive = true;
  const maybePromise = lobbyMusic.play();
  if (maybePromise && typeof maybePromise.catch === 'function') {
    maybePromise.catch(() => {
      lobbyMusicActive = false;
    });
  }
};

const stopLobbyMusic = () => {
  if (!lobbyMusicActive && lobbyMusic.paused) {
    return;
  }

  lobbyMusic.pause();
  lobbyMusic.currentTime = 0;
  lobbyMusicActive = false;
};

const unlockLobbyMusic = () => {
  if (lobbyMusicUnlocked) {
    return;
  }

  lobbyMusicUnlocked = true;
  startLobbyMusic();
};

window.addEventListener('pointerdown', unlockLobbyMusic, { once: true });
window.addEventListener('keydown', unlockLobbyMusic, { once: true });
window.addEventListener('touchstart', unlockLobbyMusic, { once: true, passive: true });

const startShootSound = () => {
  const currentSrc = shootSound.getAttribute('data-attack-src') || shootSound.src || defaultAttackSoundUrl;
  const voice = new Audio(currentSrc);
  voice.preload = 'auto';
  voice.loop = false;
  voice.volume = shootSound.volume;

  if (localAttackVoices.length >= maxLocalAttackVoices) {
    const oldVoice = localAttackVoices.shift();
    if (oldVoice) {
      oldVoice.pause();
      oldVoice.currentTime = 0;
    }
  }
  localAttackVoices.push(voice);

  const cleanup = () => {
    const idx = localAttackVoices.indexOf(voice);
    if (idx >= 0) {
      localAttackVoices.splice(idx, 1);
    }
  };
  voice.addEventListener('ended', cleanup, { once: true });
  voice.addEventListener('pause', cleanup, { once: true });

  const maybePromise = voice.play();
  if (maybePromise && typeof maybePromise.catch === 'function') {
    maybePromise.catch(() => {
      cleanup();
      const fallbackApplied = shootSound.getAttribute('data-fallback-applied') === '1';
      if (currentSrc !== defaultAttackSoundUrl && !fallbackApplied) {
        shootSound.setAttribute('data-fallback-applied', '1');
        applyAudioSource(shootSound, defaultAttackSoundUrl);
      }
    });
  }
};

const stopShootSound = () => {
  shootSoundActive = false;
};

const getRemoteShootVolume = (origin) => {
  const distance = origin.distanceTo(camera.position);
  if (distance >= remoteShootMaxDistance) {
    return 0;
  }

  const clamped = Math.max(remoteShootMinDistance, distance);
  const normalized = 1 - ((clamped - remoteShootMinDistance) / (remoteShootMaxDistance - remoteShootMinDistance));
  const shaped = Math.pow(Math.max(0, normalized), 1.6);
  return 0.02 + shaped * 0.2;
};

const startRemoteShootSound = () => {
  if (remoteShootSoundActive) {
    return;
  }

  remoteShootSoundActive = true;
  const maybePromise = remoteShootSound.play();
  if (maybePromise && typeof maybePromise.catch === 'function') {
    maybePromise.catch(() => {
      const currentSrc = remoteShootSound.getAttribute('data-attack-src') || '';
      const fallbackApplied = remoteShootSound.getAttribute('data-fallback-applied') === '1';
      if (currentSrc !== defaultAttackSoundUrl && !fallbackApplied) {
        remoteShootSound.setAttribute('data-fallback-applied', '1');
        applyAudioSource(remoteShootSound, defaultAttackSoundUrl);
        const retry = remoteShootSound.play();
        if (retry && typeof retry.catch === 'function') {
          retry.catch(() => {
            remoteShootSoundActive = false;
          });
        }
        return;
      }
      remoteShootSoundActive = false;
    });
  }
};

const stopRemoteShootSound = () => {
  if (!remoteShootSoundActive) {
    return;
  }

  remoteShootSound.pause();
  remoteShootSound.currentTime = 0;
  remoteShootSoundActive = false;
  remoteShootTargetVolume = 0;
  remoteShootSoundUntil = 0;
};

const registerRemoteShootSound = (origin, characterId = '') => {
  const volume = getRemoteShootVolume(origin);
  if (volume <= 0.02) {
    return;
  }

  if (characterId) {
    configureRemoteAttackSound(characterId);
  }

  remoteShootTargetVolume = Math.max(remoteShootTargetVolume, volume);
  remoteShootSoundUntil = performance.now() + remoteShootHoldMs;
  startRemoteShootSound();
};

const updateRemoteShootSound = (delta) => {
  if (!remoteShootSoundActive) {
    return;
  }

  const now = performance.now();
  if (now > remoteShootSoundUntil || !state.joinedRoom || !isMatchRunning()) {
    stopRemoteShootSound();
    return;
  }

  const volLerp = Math.min(1, delta * 10);
  remoteShootSound.volume += (remoteShootTargetVolume - remoteShootSound.volume) * volLerp;
  remoteShootTargetVolume = Math.max(0.02, remoteShootTargetVolume - delta * 0.18);
};

const raycaster = new THREE.Raycaster();
const centerAim = new THREE.Vector2(0, 0);
const tracerGeometry = new THREE.CylinderGeometry(0.028, 0.028, 1, 10, 1, true);
const tracerMaterial = new THREE.MeshBasicMaterial({
  color: 0xa2ffae,
  transparent: true,
  opacity: 1,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
});
const impactGeometry = new THREE.SphereGeometry(0.11, 8, 8);
const impactMaterial = new THREE.MeshBasicMaterial({ color: 0x7dff92, transparent: true, opacity: 0.9 });
const activeTracers = [];
const activeImpacts = [];
const activeHolyProjectiles = [];
const activeHammerProjectiles = [];
const activePoisonProjectiles = [];
const activeLunarProjectiles = [];

const keys = { KeyW: false, KeyA: false, KeyS: false, KeyD: false, Space: false };
let isLocked = false;
let yaw = 0;
let pitch = 0;
const speed = 9;
const playerGroundY = 1.7;
const jumpInitialVelocity = 6.8;
const jumpGravity = 18;

let isFiring = false;
let cooldown = 0;
const fireRate = 8;
const magicAttackIntervalSeconds = 1;
const pumoriMaxThrowDistance = 55;
const hammerGravity = 19;
const hammerAbsurdDistance = 260;
const recoilVertical = 0.018;
const recoilHorizontal = 0.008;
const reloadTime = 1.2;
const respawnDurationSeconds = 10;
const maxHealth = 100;
const maxShield = 100;
const startShield = 0;
const shieldDamageReduction = 0.6;
const maxAmmoInMag = 30;
const maxAmmoTotal = 120;
const maxMana = 100;
const manaCostPerShot = Math.ceil(maxMana / 3);
const manaRegenPerSecond = 12;
const maxAmmoPickups = 50;
const ammoPickupRespawnMs = 60_000;
const ammoPickupAmount = 12;
const manaPickupAmount = 20;
const maxShieldPickups = 30;
const shieldPickupRespawnMs = 60_000;
const shieldPickupAmount = 25;
const hitDamage = 18;
const headshotRadius = 0.35;
const bodyshotRadius = 0.55;
const headCenterOffsetY = 0.18;
const bodyCenterOffsetY = -0.45;
let kills = 0;
let health = maxHealth;
let shield = startShield;
let ammoInMag = maxAmmoInMag;
let ammoReserve = maxAmmoTotal - maxAmmoInMag;
let mana = maxMana;
let manaHudValue = Math.round(maxMana);
let isReloading = false;
let reloadCooldown = 0;
let isJumping = false;
let jumpVelocity = 0;
let isRespawning = false;
let respawnEndsAt = 0;
let respawnSecondsLeft = respawnDurationSeconds;
let isMatchEnding = false;
let matchWinnerEndsAt = 0;
let matchWinnerSecondsLeft = 0;
let bleedIntensity = 0;
let bleedHitFlash = 0;

const euler = new THREE.Euler(0, 0, 0, 'YXZ');
const forward = new THREE.Vector3();
const right = new THREE.Vector3();
const move = new THREE.Vector3();
const dir = new THREE.Vector3();
const clock = new THREE.Clock();
const remoteFacingYawOffset = Math.PI;
const DEBUG_WEAPON_ATTACH = false;

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

const createSeededRng = (seed) => {
  let t = Number(seed) >>> 0;
  return () => {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
};

const hashStringToSeed = (value) => {
  const text = String(value || '');
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) || 1;
};

const rebuildMapFromSeed = (seed) => {
  const normalizedSeed = Number(seed);
  if (!Number.isFinite(normalizedSeed)) {
    return;
  }
  if (currentMapSeed === normalizedSeed) {
    return;
  }
  currentMapSeed = normalizedSeed;

  for (let i = shootables.length - 1; i >= 0; i -= 1) {
    const mesh = shootables[i];
    scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();
  }
  shootables.length = 0;
  pillarBounds.length = 0;

  for (let i = ammoPickups.length - 1; i >= 0; i -= 1) {
    scene.remove(ammoPickups[i].mesh);
  }
  ammoPickups.length = 0;

  for (let i = shieldPickups.length - 1; i >= 0; i -= 1) {
    scene.remove(shieldPickups[i].mesh);
  }
  shieldPickups.length = 0;

  const pillarRnd = createSeededRng(normalizedSeed ^ 0x9E3779B9);
  for (let i = 0; i < 220; i += 1) {
    const w = 1 + pillarRnd() * 3;
    const d = 1 + pillarRnd() * 3;
    const h = 3 + pillarRnd() * 24;
    const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), blockMat.clone());
    box.position.set((pillarRnd() - 0.5) * 220, h / 2, (pillarRnd() - 0.5) * 220);
    box.userData.hp = 1 + Math.floor(pillarRnd() * 3);
    scene.add(box);
    shootables.push(box);
    pillarBounds.push({
      minX: box.position.x - (w / 2),
      maxX: box.position.x + (w / 2),
      minZ: box.position.z - (d / 2),
      maxZ: box.position.z + (d / 2),
    });
  }

  const ammoRnd = createSeededRng(normalizedSeed ^ 0x85EBCA6B);
  for (let i = 0; i < maxAmmoPickups; i += 1) {
    const mesh = new THREE.Mesh(ammoPickupGeometry, ammoPickupMaterial.clone());
    const x = (ammoRnd() - 0.5) * 180;
    const z = (ammoRnd() - 0.5) * 180;
    const baseY = 0.35;
    mesh.position.set(x, baseY, z);
    scene.add(mesh);
    ammoPickups.push({
      mesh,
      baseY,
      phase: ammoRnd() * Math.PI * 2,
      active: true,
      respawnAt: 0,
    });
  }

  const shieldRnd = createSeededRng(normalizedSeed ^ 0xC2B2AE35);
  for (let i = 0; i < maxShieldPickups; i += 1) {
    const mesh = new THREE.Mesh(shieldPickupGeometry, shieldPickupMaterial.clone());
    const x = (shieldRnd() - 0.5) * 180;
    const z = (shieldRnd() - 0.5) * 180;
    const baseY = 0.6;
    mesh.position.set(x, baseY, z);
    scene.add(mesh);
    shieldPickups.push({
      mesh,
      baseY,
      phase: shieldRnd() * Math.PI * 2,
      active: true,
      respawnAt: 0,
    });
  }
};

const normalizeCharacterId = (characterId) => {
  return String(characterId || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
};

const isSilentmanCharacter = (characterId) => {
  const normalized = normalizeCharacterId(characterId);
  return normalized === 'silentman' || normalized === 'silenmant';
};

const isPumoriCharacter = (characterId) => {
  const normalized = normalizeCharacterId(characterId);
  return normalized === 'pumori';
};

const isNeoorphenCharacter = (characterId) => {
  const normalized = normalizeCharacterId(characterId);
  return normalized === 'neoorphen';
};

const isPezunalunarCharacter = (characterId) => {
  const normalized = normalizeCharacterId(characterId);
  return normalized === 'pezunalunar' || normalized === 'pezuanalunar';
};

const isUsingMana = () => {
  return isManaCharacter(activeCharacter);
};

const isManaCharacter = (characterId) => {
  return isSilentmanCharacter(characterId)
    || isPumoriCharacter(characterId)
    || isNeoorphenCharacter(characterId)
    || isPezunalunarCharacter(characterId);
};

const getCurrentAttackIntervalSeconds = () => {
  if (isManaCharacter(activeCharacter)) {
    return magicAttackIntervalSeconds;
  }
  return 1 / fireRate;
};

rebuildMapFromSeed(1);

const updateHud = () => {
  const usingMana = isManaCharacter(activeCharacter);
  const currentAmmoLikeValue = usingMana ? Math.round(mana) : ammoInMag;
  const reserveAmmoLikeValue = usingMana ? maxMana : ammoReserve;
  const ammoLabel = usingMana ? 'Mana' : 'Balas';

  healthStat.textContent = `Vida: ${health}`;
  shieldStat.textContent = `Escudo: ${shield}`;
  ammoStat.textContent = `${ammoLabel}: ${currentAmmoLikeValue} / ${reserveAmmoLikeValue}${!usingMana && isReloading ? ' (recargando...)' : ''}`;
  stats.textContent = `Kills: ${kills}`;
  healthSideLabel.textContent = `${health}`;
  shieldSideLabel.textContent = `${shield}`;
  ammoSideLabel.textContent = `${currentAmmoLikeValue} / ${reserveAmmoLikeValue}`;
  healthBarFill.style.width = `${Math.max(0, Math.min(100, (health / maxHealth) * 100))}%`;
  shieldBarFill.style.width = `${Math.max(0, Math.min(100, (shield / maxShield) * 100))}%`;
  ammoBarFill.style.height = `${Math.max(0, Math.min(100, (currentAmmoLikeValue / reserveAmmoLikeValue) * 100))}%`;

  if (!state.joinedRoom) {
    roomHud.textContent = 'Sala: -';
    stateHud.textContent = 'Estado: waiting';
    weatherHud.textContent = 'Clima: -';
    playersHud.textContent = 'Jugadores: -';
    hostControls.classList.add('hidden');
    return;
  }

  const room = state.joinedRoom.room;
  const playerNames = state.joinedRoom.players.map((player) => player.name).join(', ');
  roomHud.textContent = `Sala: ${room.name} (${room.id})`;
  stateHud.textContent = `Estado: ${room.status}`;
  weatherHud.textContent = `Clima: ${formatWeather(room.weather)}`;
  playersHud.textContent = `Jugadores: ${playerNames || '-'}`;

  if (isHost()) {
    hostControls.classList.remove('hidden');
    startGameBtn.disabled = room.status === 'in_game';
    endGameBtn.disabled = room.status !== 'in_game';
  } else {
    hostControls.classList.add('hidden');
  }

  syncInfoVisibility();
  renderScoreboard();
  renderPerfPanel();
  updateBleedEffect();
};

const updateRespawnOverlay = () => {
  if (!isRespawning || !state.joinedRoom || !isMatchRunning()) {
    respawnScreen.classList.add('hidden');
    return;
  }

  respawnCounter.textContent = String(respawnSecondsLeft);
  respawnScreen.classList.remove('hidden');
};

const hideWinnerOverlay = () => {
  isMatchEnding = false;
  matchWinnerEndsAt = 0;
  matchWinnerSecondsLeft = 0;
  winnerScreen.classList.add('hidden');
};

const showWinnerOverlay = (winner, countdownSeconds) => {
  const winnerName = String(winner?.name || 'Desconocido');
  const winnerCharacter = String(winner?.character || 'Sin personaje');
  const safeCountdown = Math.max(1, Number(countdownSeconds) || 10);

  isMatchEnding = true;
  matchWinnerEndsAt = performance.now() + (safeCountdown * 1000);
  matchWinnerSecondsLeft = safeCountdown;
  winnerText.textContent = `Ganador: ${winnerName} (${winnerCharacter})`;
  winnerCounter.textContent = String(matchWinnerSecondsLeft);
  winnerScreen.classList.remove('hidden');

  if (document.pointerLockElement) {
    document.exitPointerLock();
  }
  isFiring = false;
  if (isRespawning) {
    isRespawning = false;
    respawnEndsAt = 0;
    respawnSecondsLeft = respawnDurationSeconds;
    updateRespawnOverlay();
  }
};

const updateBleedEffect = (delta = 0) => {
  if (!damageOverlay) {
    return;
  }

  const hasMatch = Boolean(state.joinedRoom && state.joinedRoom.room.status === 'in_game');
  const healthRatio = Math.max(0, Math.min(1, health / maxHealth));
  const lowHealthFactor = 1 - healthRatio;
  let targetBleed = hasMatch && !isRespawning ? lowHealthFactor * 0.62 : 0;

  if (!hasMatch) {
    bleedHitFlash = 0;
  }

  const smoothFactor = delta > 0 ? Math.min(1, delta * 4.8) : 1;
  bleedIntensity += (targetBleed - bleedIntensity) * smoothFactor;
  bleedHitFlash = Math.max(0, bleedHitFlash - (delta > 0 ? delta * 1.7 : 0));

  const pulse = hasMatch && !isRespawning
    ? ((Math.sin(performance.now() * 0.01) + 1) * 0.5) * lowHealthFactor * 0.22
    : 0;

  const opacity = Math.max(0, Math.min(0.92, bleedIntensity + pulse + bleedHitFlash));
  damageOverlay.style.opacity = opacity.toFixed(3);
  damageOverlay.style.setProperty('--bleed-inner', `${20 + lowHealthFactor * 24}%`);
};

const resetCombatStats = () => {
  health = maxHealth;
  shield = startShield;
  ammoInMag = maxAmmoInMag;
  ammoReserve = maxAmmoTotal - maxAmmoInMag;
  mana = maxMana;
  manaHudValue = Math.round(maxMana);
  isReloading = false;
  reloadCooldown = 0;
  isJumping = false;
  jumpVelocity = 0;
  kills = 0;
  isRespawning = false;
  respawnSecondsLeft = respawnDurationSeconds;
  respawnEndsAt = 0;
  hideWinnerOverlay();
  isFiring = false;
  updateRespawnOverlay();
  updateHud();
};

const reloadWeapon = () => {
  if (isManaCharacter(activeCharacter)) {
    return;
  }

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
  mana = maxMana;
  manaHudValue = Math.round(maxMana);
  isReloading = false;
  reloadCooldown = 0;
  isJumping = false;
  jumpVelocity = 0;
  isRespawning = false;
  respawnSecondsLeft = respawnDurationSeconds;
  respawnEndsAt = 0;
  updateRespawnOverlay();
  camera.position.set((Math.random() - 0.5) * 12, playerGroundY, (Math.random() - 0.5) * 12);
  constrainPlayerToWorld();
  sendLocalPlayerState(true);
  sendWs({ type: 'player_respawn' });
  updateHud();
};

const startRespawnCountdown = () => {
  if (!isMatchRunning()) {
    return;
  }

  isRespawning = true;
  isFiring = false;
  isJumping = false;
  jumpVelocity = 0;
  respawnEndsAt = performance.now() + respawnDurationSeconds * 1000;
  respawnSecondsLeft = respawnDurationSeconds;

  if (document.pointerLockElement) {
    document.exitPointerLock();
  }

  updateRespawnOverlay();
};

const lerpAngle = (from, to, factor) => {
  const delta = ((to - from + Math.PI) % (Math.PI * 2)) - Math.PI;
  return from + delta * factor;
};

const findAnimationByName = (animations, expectedName, fallbackKeywords) => {
  const byExact = animations.find((clip) => clip.name === expectedName);
  if (byExact) {
    return byExact;
  }

  return animations.find((clip) => {
    const name = String(clip.name || '').toLowerCase();
    return fallbackKeywords.some((keyword) => name.includes(keyword));
  });
};

const resolveCharacterForPlayer = (character) => {
  const normalized = String(character || '').trim();
  if (!normalized) {
    return availableCharacters[0] || activeCharacter || 'silentman';
  }
  if (availableCharacters.includes(normalized)) {
    return normalized;
  }
  const lower = normalized.toLowerCase();
  const byBase = availableCharacters.find((file) => getCharacterLabel(file).toLowerCase() === lower);
  if (byBase) {
    return byBase;
  }
  return normalized;
};

const resolveWeaponForPlayer = (weapon) => {
  return '';
};

const resolveRemoteWeaponOrDefault = (weapon) => {
  return '';
};

const setRemoteAnimation = (entry, stateName) => {
  if (!entry.actions) {
    return;
  }

  const nextAction = entry.actions[stateName] || entry.actions.move || null;
  if (!nextAction) {
    return;
  }

  if (entry.currentAnimation === stateName) {
    return;
  }

  Object.values(entry.actions).forEach((action) => {
    if (!action || action === nextAction) {
      return;
    }
    action.fadeOut(0.12);
  });

  if (stateName === 'death') {
    nextAction.reset();
    nextAction.setLoop(THREE.LoopOnce, 1);
    nextAction.clampWhenFinished = true;
    nextAction.fadeIn(0.08).play();
  } else {
    nextAction.reset();
    nextAction.setLoop(THREE.LoopRepeat, Infinity);
    nextAction.clampWhenFinished = false;
    nextAction.fadeIn(0.1).play();
  }

  entry.currentAnimation = stateName;
};

const setRemoteIdle = (entry) => {
  if (!entry.actions) {
    return;
  }

  setRemoteAnimation(entry, 'idle');
};

const setLocalAvatarAnimation = (stateName) => {
  if (!localAvatar.actions) {
    return;
  }

  const nextAction = localAvatar.actions[stateName] || localAvatar.actions.move || null;
  if (!nextAction) {
    return;
  }

  if (localAvatar.currentAnimation === stateName) {
    return;
  }

  Object.values(localAvatar.actions).forEach((action) => {
    if (!action || action === nextAction) {
      return;
    }
    action.fadeOut(0.1);
  });

  if (stateName === 'death' || stateName === 'funny') {
    nextAction.reset();
    nextAction.setLoop(THREE.LoopOnce, 1);
    nextAction.clampWhenFinished = true;
    nextAction.fadeIn(0.08).play();
  } else {
    nextAction.reset();
    nextAction.setLoop(THREE.LoopRepeat, Infinity);
    nextAction.clampWhenFinished = false;
    nextAction.fadeIn(0.08).play();
  }

  localAvatar.currentAnimation = stateName;
};

const cancelLocalFunnyAnimation = () => {
  if (localAvatar.funnyUntil <= 0) {
    return;
  }
  localAvatar.funnyUntil = 0;
  if (localAvatar.currentAnimation === 'funny') {
    setLocalAvatarAnimation('idle');
  }
};

const buildAnimatedRemoteModel = (resource) => {
  const group = new THREE.Group();
  const model = cloneSkinned(resource.scene);
  const box = new THREE.Box3().setFromObject(model);
  const minY = Number.isFinite(box.min.y) ? box.min.y : 0;
  model.position.y -= minY;
  group.add(model);

  const mixer = new THREE.AnimationMixer(model);
  const animations = resource.animations || [];
  const actionIdleClip = resource.animationSet?.idle || findAnimationByName(animations, 'idle', ['idle']);
  const actionMoveClip = resource.animationSet?.running || findAnimationByName(animations, 'running', ['running']);
  const actionJumpClip = resource.animationSet?.jump || findAnimationByName(animations, 'jump', ['jump']);
  const actionFunnyClip = resource.animationSet?.funny || findAnimationByName(animations, 'funny', ['funny']);
  const actionShootClip = resource.animationSet?.attack || findAnimationByName(animations, 'attack', ['attack']);
  const actionDeathClip = resource.animationSet?.dead || findAnimationByName(animations, 'dead', ['dead']);

  const actions = {
    idle: actionIdleClip ? mixer.clipAction(actionIdleClip) : null,
    move: actionMoveClip ? mixer.clipAction(actionMoveClip) : null,
    jump: actionJumpClip ? mixer.clipAction(actionJumpClip) : null,
    funny: actionFunnyClip ? mixer.clipAction(actionFunnyClip) : null,
    shoot: actionShootClip ? mixer.clipAction(actionShootClip) : null,
    death: actionDeathClip ? mixer.clipAction(actionDeathClip) : null,
  };

  if (DEBUG_WEAPON_ATTACH) {
    const testMount = getWeaponMountNode(model);
    const testBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.08, 0.28),
      new THREE.MeshBasicMaterial({ color: 0xff00ff }),
    );
    testBox.position.set(0.12, 0.02, 0.05);
    testBox.rotation.set(0, 0.35, 0);
    testMount.add(testBox);
  }

  scene.add(group);

  return {
    group,
    avatarRoot: model,
    mixer,
    actions,
    body: null,
    head: null,
  };
};

const disposeLocalAvatar = () => {
  if (localAvatar.group) {
    scene.remove(localAvatar.group);
  }
  localAvatar.group = null;
  localAvatar.mixer = null;
  localAvatar.actions = null;
  localAvatar.currentAnimation = '';
  localAvatar.funnyUntil = 0;
};

const ensureLocalAvatar = async () => {
  const characterId = characterSelect.value || activeCharacter;
  if (!characterId) {
    return;
  }

  const requestKey = `${characterId}`;
  localAvatar.loadingKey = requestKey;
  const resource = await ensureCharacterResource(characterId);
  if (!resource?.loaded || localAvatar.loadingKey !== requestKey) {
    return;
  }

  disposeLocalAvatar();
  const built = buildAnimatedRemoteModel(resource);
  localAvatar.group = built.group;
  localAvatar.mixer = built.mixer;
  localAvatar.actions = built.actions;
  localAvatar.currentAnimation = '';
  localAvatar.shootUntil = 0;
  localAvatar.funnyUntil = 0;
  setLocalAvatarAnimation('idle');
};

const updateLocalAvatar = (delta) => {
  if (!localAvatar.group) {
    return;
  }

  const visible = Boolean(state.joinedRoom && isThirdPerson && !isRespawning);
  localAvatar.group.visible = visible;
  if (!visible) {
    return;
  }

  localAvatar.group.position.set(
    camera.position.x,
    camera.position.y - playerGroundY,
    camera.position.z,
  );
  localAvatar.group.rotation.y = yaw + remoteFacingYawOffset;

  const now = performance.now();
  const moving = keys.KeyW || keys.KeyA || keys.KeyS || keys.KeyD;
  if (localAvatar.funnyUntil > now) {
    setLocalAvatarAnimation('funny');
  } else if (isJumping) {
    setLocalAvatarAnimation('jump');
  } else if (localAvatar.shootUntil > now) {
    setLocalAvatarAnimation('shoot');
  } else if (moving) {
    setLocalAvatarAnimation('move');
  } else {
    setLocalAvatarAnimation('idle');
  }

  if (localAvatar.mixer) {
    localAvatar.mixer.update(delta);
  }
};

const buildFallbackRemoteModel = (isCurrentHost) => {
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

  return {
    group,
    avatarRoot: group,
    body,
    head,
    mixer: null,
    actions: null,
  };
};

const createRemoteWeaponProxy = () => {
  const proxy = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 0.1, 0.5),
    new THREE.MeshBasicMaterial({ color: 0xffcc00 }),
  );
  proxy.position.set(0.42, 1.05, 0.18);
  proxy.rotation.set(0, 0.35, 0);
  return proxy;
};

const ensureForcedRemoteGun = (entry) => {
  if (!DEBUG_WEAPON_ATTACH || !entry?.group) {
    return;
  }

  let forced = entry.group.getObjectByName('__forced_remote_gun__');
  if (!forced) {
    forced = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.12, 0.55),
      new THREE.MeshBasicMaterial({ color: 0x00e5ff }),
    );
    forced.name = '__forced_remote_gun__';
    entry.group.add(forced);
  }

  forced.position.set(0.48, 1.05, 0.22);
  forced.rotation.set(0, 0.45, 0);
  forced.visible = true;
};

const applyRemoteWeaponPose = (entry, stateName = 'idle') => {
  if (!entry?.weaponPivot) {
    return;
  }

  const avatarRoot = entry.avatarRoot || entry.group;
  const useHand = stateName === 'move' || stateName === 'shoot';
  const targetNode = useHand
    ? (getLeftHandBone(avatarRoot) || entry.group)
    : (getBackMountBone(avatarRoot) || entry.group);

  if (entry.weaponPivot.parent !== targetNode) {
    targetNode.add(entry.weaponPivot);
  }

  const ws = new THREE.Vector3(1, 1, 1);
  targetNode.getWorldScale(ws);
  const avgScale = Math.max(0.0001, (ws.x + ws.y + ws.z) / 3);
  const comp = targetNode === entry.group ? 1 : 1 / avgScale;

  if (useHand) {
    // Hand-attached during move/shoot.
    entry.weaponPivot.position.set(0.004 * comp, -0.014 * comp, 0.03 * comp);
    entry.weaponPivot.rotation.set(Math.PI / 2, -0.08, -1.48);
    entry.weaponPivot.scale.setScalar(1.5 * comp);
  } else {
    // Back-attached during idle/death.
    entry.weaponPivot.position.set(0, 0.02 * comp, -0.14 * comp);
    entry.weaponPivot.rotation.set(0, Math.PI, -0.18);
    entry.weaponPivot.scale.setScalar(1.35 * comp);
  }
};

const attachWeaponToRemoteGroup = (entry, weaponResource) => {
  if (!entry?.group || !weaponResource?.loaded || !weaponResource.scene) {
    return null;
  }

  const weaponClone = weaponResource.scene.clone(true);
  weaponClone.traverse((node) => {
    if (!node.isMesh) {
      return;
    }
    node.frustumCulled = false;
    node.castShadow = false;
    node.receiveShadow = false;
    node.visible = true;
    if (node.material) {
      const mats = Array.isArray(node.material) ? node.material : [node.material];
      mats.forEach((mat) => {
        mat.transparent = false;
        mat.opacity = 1;
        mat.side = THREE.DoubleSide;
      });
    }
  });

  normalizeWeaponModel(weaponClone);

  const pivot = new THREE.Group();
  const mountNode = entry.group;
  pivot.add(weaponClone);
  mountNode.add(pivot);
  return pivot;
};

const mountWeaponOnRemoteEntry = (entry, options = {}) => {
  if (!entry || !entry.weapon) {
    return;
  }

  ensureWeaponResource(entry.weapon).then((weaponResource) => {
    const live = state.remotePlayers.get(entry.id);
    if (!live) {
      return;
    }

    if (live.weaponPivot && live.weaponPivot.parent) {
      live.weaponPivot.parent.remove(live.weaponPivot);
    }
    const oldBackup = live.group.getObjectByName('__remote_weapon_backup__');
    if (oldBackup && oldBackup.parent) {
      oldBackup.parent.remove(oldBackup);
    }

    if (weaponResource?.loaded) {
      live.weaponPivot = attachWeaponToRemoteGroup(live, weaponResource);
      applyRemoteWeaponPose(live, live.currentAnimation || 'idle');
      const forced = live.group.getObjectByName('__forced_remote_gun__');
      if (forced) {
        forced.visible = false;
      }
    } else {
      const proxy = createRemoteWeaponProxy();
      live.group.add(proxy);
      live.weaponPivot = proxy;
    }
  });
};

const upgradeRemotePlayerToCharacter = async (entry) => {
  const character = resolveCharacterForPlayer(entry.character);
  if (!character) {
    return;
  }

  const resource = await ensureCharacterResource(character);
  if (!resource?.loaded || !state.remotePlayers.has(entry.id)) {
    return;
  }

  const liveEntry = state.remotePlayers.get(entry.id);
  if (!liveEntry) {
    return;
  }
  liveEntry.character = character;

  const prevPos = liveEntry.group.position.clone();
  const prevYaw = liveEntry.group.rotation.y;
  disposeRemotePlayer(liveEntry);

  const upgraded = buildAnimatedRemoteModel(resource);
  upgraded.group.position.copy(prevPos);
  upgraded.group.rotation.y = prevYaw;
  liveEntry.group = upgraded.group;
  liveEntry.avatarRoot = upgraded.avatarRoot;
  liveEntry.body = upgraded.body;
  liveEntry.head = upgraded.head;
  liveEntry.mixer = upgraded.mixer;
  liveEntry.actions = upgraded.actions;
  liveEntry.currentAnimation = null;
  liveEntry.animationUntil = 0;
  liveEntry.isDead = false;
  liveEntry.isJumping = false;
  liveEntry.deadAt = 0;
  setRemoteIdle(liveEntry);
};

const disposeRemotePlayer = (entry) => {
  scene.remove(entry.group);
  if (entry.body) {
    entry.body.geometry.dispose();
    entry.body.material.dispose();
  }
  if (entry.head) {
    entry.head.geometry.dispose();
    entry.head.material.dispose();
  }
};

const createRemotePlayer = (id, isCurrentHost, character) => {
  const model = buildFallbackRemoteModel(isCurrentHost);
  const resolvedCharacter = resolveCharacterForPlayer(character);

  state.remotePlayers.set(id, {
    id,
    character: resolvedCharacter,
    group: model.group,
    avatarRoot: model.avatarRoot,
    body: model.body,
    head: model.head,
    mixer: model.mixer,
    actions: model.actions,
    currentAnimation: null,
    animationUntil: 0,
    isDead: false,
    isJumping: false,
    deadAt: 0,
    targetPosition: new THREE.Vector3(0, 0, 0),
    targetYaw: 0,
    targetPitch: 0,
  });

  const entry = state.remotePlayers.get(id);
  if (DEBUG_WEAPON_ATTACH) {
    const remoteTotem = new THREE.Mesh(
      new THREE.BoxGeometry(0.15, 0.7, 0.15),
      new THREE.MeshBasicMaterial({ color: 0x00ffff }),
    );
    remoteTotem.position.set(0, 2.4, 0);
    entry.group.add(remoteTotem);
  }
  if (!entry.character) {
    entry.character = availableCharacters[0] || activeCharacter || 'silentman';
  }
  upgradeRemotePlayerToCharacter(entry);
};

const syncRemotePlayer = (player) => {
  if (state.self && player.id === state.self.id) {
    return;
  }

  if (!state.remotePlayers.has(player.id)) {
    createRemotePlayer(
      player.id,
      state.joinedRoom?.room?.hostId === player.id,
      player.character,
    );
  }

  const entry = state.remotePlayers.get(player.id);
  const hasCharacterUpdate = typeof player.character === 'string' && player.character.length > 0;
  const resolvedCharacter = hasCharacterUpdate ? resolveCharacterForPlayer(player.character) : entry.character;
  if (resolvedCharacter !== entry.character) {
    if (DEBUG_WEAPON_ATTACH) {
      console.log('[weapon][remote:update]', {
        playerId: player.id,
        character: resolvedCharacter,
      });
    }
    entry.character = resolvedCharacter || entry.character;
    upgradeRemotePlayerToCharacter(entry);
  }

  if (!entry.mixer) {
    if (!entry.character) {
      entry.character = availableCharacters[0] || activeCharacter || 'silentman';
    }
    if (entry.character) {
      upgradeRemotePlayerToCharacter(entry);
    }
  }
  const pos = player.state?.position || { x: 0, y: playerGroundY, z: 0 };
  const rot = player.state?.rotation || { yaw: 0, pitch: 0 };
  entry.isJumping = Boolean(player.state?.jumping);
  const hasAliveFlag = typeof player.alive === 'boolean';
  if (hasAliveFlag) {
    if (!player.alive && !entry.isDead) {
      entry.isDead = true;
      entry.deadAt = performance.now();
      entry.animationUntil = 0;
      setRemoteAnimation(entry, 'death');
    } else if (player.alive && entry.isDead) {
      entry.isDead = false;
      entry.deadAt = 0;
      entry.animationUntil = 0;
      setRemoteIdle(entry);
    }
  }

  entry.targetPosition.set(pos.x, pos.y - playerGroundY, pos.z);
  entry.targetYaw = rot.yaw;
  entry.targetPitch = rot.pitch;
};

const syncRemotePlayersFromRoom = (roomState) => {
  const expected = new Set();

  roomState.players.forEach((player) => {
    const isSelf = state.self ? player.id === state.self.id : false;
    if (!isSelf) {
      expected.add(player.id);
      syncRemotePlayer(player);
    }
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

const createTracer = (start, end, color = 0xa2ffae, options = {}) => {
  const direction = end.clone().sub(start);
  const distance = direction.length();
  if (distance <= 0.0001) {
    return;
  }

  const radiusScale = Number.isFinite(options.radiusScale) ? options.radiusScale : 1;
  const life = Number.isFinite(options.life) ? options.life : 0.14;
  const opacity = Number.isFinite(options.opacity) ? options.opacity : 1;

  const material = tracerMaterial.clone();
  material.color = new THREE.Color(color);
  material.opacity = opacity;
  const tracer = new THREE.Mesh(tracerGeometry, material);
  tracer.position.copy(start).add(end).multiplyScalar(0.5);
  tracer.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  tracer.scale.set(radiusScale, distance, radiusScale);
  tracer.userData.life = life;
  scene.add(tracer);
  activeTracers.push(tracer);
};

const createHolyShotVisual = (start, end, options = {}) => {
  const direction = end.clone().sub(start);
  const distance = direction.length();
  if (distance <= 0.0001) {
    return;
  }

  const dirNorm = direction.clone().normalize();
  let rightAxis = new THREE.Vector3().crossVectors(dirNorm, new THREE.Vector3(0, 1, 0));
  if (rightAxis.lengthSq() < 0.0001) {
    rightAxis = new THREE.Vector3(1, 0, 0);
  } else {
    rightAxis.normalize();
  }
  const upAxis = new THREE.Vector3().crossVectors(rightAxis, dirNorm).normalize();

  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 14, 14),
    new THREE.MeshBasicMaterial({
      color: 0x9af0ff,
      transparent: true,
      opacity: 0.96,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  orb.position.copy(start);
  scene.add(orb);

  activeHolyProjectiles.push({
    mesh: orb,
    start: start.clone(),
    end: end.clone(),
    prevPos: start.clone(),
    pos: start.clone(),
    dir: dirNorm,
    right: rightAxis,
    up: upAxis,
    distance,
    traveled: 0,
    speed: 85,
    phase: Math.random() * Math.PI * 2,
    spin: (Math.PI * 15) + (Math.random() * Math.PI * 6),
    radius: 0.72,
    radiusFalloff: 0.22,
    trailTimer: 0,
    source: options.source === 'remote' ? 'remote' : 'local',
    ownerId: String(options.ownerId || ''),
  });
};

const createSacredHammerVisual = (start, end, options = {}) => {
  const direction = end.clone().sub(start);
  const distance = direction.length();
  if (distance <= 0.0001) {
    return;
  }

  const dirNorm = direction.clone().normalize();
  let rightAxis = new THREE.Vector3().crossVectors(dirNorm, new THREE.Vector3(0, 1, 0));
  if (rightAxis.lengthSq() < 0.0001) {
    rightAxis = new THREE.Vector3(1, 0, 0);
  } else {
    rightAxis.normalize();
  }
  const upAxis = new THREE.Vector3().crossVectors(rightAxis, dirNorm).normalize();

  const hammer = new THREE.Group();
  const head = new THREE.Mesh(
    new THREE.BoxGeometry(0.46, 0.26, 0.22),
    new THREE.MeshBasicMaterial({
      color: 0xfff2c6,
      transparent: true,
      opacity: 0.98,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  const handle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 0.7, 10),
    new THREE.MeshBasicMaterial({
      color: 0x9af0ff,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  handle.rotation.z = Math.PI / 2;
  hammer.add(head);
  hammer.add(handle);
  hammer.position.copy(start);
  scene.add(hammer);

  activeHammerProjectiles.push({
    mesh: hammer,
    prevPos: start.clone(),
    pos: start.clone(),
    velocity: dirNorm.clone().multiplyScalar(34).add(upAxis.clone().multiplyScalar(7.2)),
    origin: start.clone(),
    right: rightAxis,
    up: upAxis,
    traveledDistance: 0,
    spin: (Math.random() > 0.5 ? 1 : -1) * ((Math.PI * 6.5) + Math.random()),
    phase: Math.random() * Math.PI * 2,
    trailTimer: 0,
    source: options.source === 'remote' ? 'remote' : 'local',
    ownerId: String(options.ownerId || ''),
  });
};

const createPoisonGasVisual = (start, end, options = {}) => {
  const direction = end.clone().sub(start);
  const distance = direction.length();
  if (distance <= 0.0001) {
    return;
  }

  const dirNorm = direction.clone().normalize();
  let rightAxis = new THREE.Vector3().crossVectors(dirNorm, new THREE.Vector3(0, 1, 0));
  if (rightAxis.lengthSq() < 0.0001) {
    rightAxis = new THREE.Vector3(1, 0, 0);
  } else {
    rightAxis.normalize();
  }
  const upAxis = new THREE.Vector3().crossVectors(rightAxis, dirNorm).normalize();

  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 16, 16),
    new THREE.MeshBasicMaterial({
      color: 0x5bff66,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  orb.position.copy(start);
  scene.add(orb);

  activePoisonProjectiles.push({
    mesh: orb,
    start: start.clone(),
    end: end.clone(),
    prevPos: start.clone(),
    pos: start.clone(),
    dir: dirNorm,
    right: rightAxis,
    up: upAxis,
    distance,
    traveled: 0,
    speed: 60,
    phase: Math.random() * Math.PI * 2,
    spin: (Math.PI * 9) + (Math.random() * Math.PI * 3),
    waveAmpA: 1.05,
    waveAmpB: 0.42,
    trailTimer: 0,
    source: options.source === 'remote' ? 'remote' : 'local',
    ownerId: String(options.ownerId || ''),
  });
};

const createLunarFireVisual = (start, end, options = {}) => {
  const direction = end.clone().sub(start);
  const distance = direction.length();
  if (distance <= 0.0001) {
    return;
  }

  const dirNorm = direction.clone().normalize();
  let rightAxis = new THREE.Vector3().crossVectors(dirNorm, new THREE.Vector3(0, 1, 0));
  if (rightAxis.lengthSq() < 0.0001) {
    rightAxis = new THREE.Vector3(1, 0, 0);
  } else {
    rightAxis.normalize();
  }
  const upAxis = new THREE.Vector3().crossVectors(rightAxis, dirNorm).normalize();

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 16, 16),
    new THREE.MeshBasicMaterial({
      color: 0xe8f7ff,
      transparent: true,
      opacity: 0.96,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  core.position.copy(start);
  scene.add(core);

  activeLunarProjectiles.push({
    mesh: core,
    start: start.clone(),
    end: end.clone(),
    prevPos: start.clone(),
    pos: start.clone(),
    dir: dirNorm,
    right: rightAxis,
    up: upAxis,
    distance,
    traveled: 0,
    speed: 80,
    phase: Math.random() * Math.PI * 2,
    spin: (Math.PI * 10) + (Math.random() * Math.PI * 4),
    waveAmpA: 0.4,
    waveAmpB: 0.2,
    trailTimer: 0,
    source: options.source === 'remote' ? 'remote' : 'local',
    ownerId: String(options.ownerId || ''),
  });
};

const createImpact = (position, color = 0x7dff92) => {
  const impact = new THREE.Mesh(impactGeometry, impactMaterial.clone());
  impact.material.color = new THREE.Color(color);
  impact.position.copy(position);
  impact.userData.life = 0.26;
  scene.add(impact);
  activeImpacts.push(impact);
  return impact;
};

const testSegmentSphereHit = (segStart, segEnd, center, radius) => {
  const segDir = segEnd.clone().sub(segStart);
  const segLen = segDir.length();
  if (segLen <= 0.0001) {
    return null;
  }
  segDir.multiplyScalar(1 / segLen);
  const segToCenter = center.clone().sub(segStart);
  const proj = segToCenter.dot(segDir);
  if (proj < 0 || proj > segLen) {
    return null;
  }
  const closest = segDir.multiplyScalar(proj).add(segStart);
  if (closest.distanceToSquared(center) <= radius * radius) {
    return closest;
  }
  return null;
};

const getSegmentWallImpact = (segStart, segEnd, pad = 0.2) => {
  const travel = segEnd.clone().sub(segStart);
  const distance = travel.length();
  if (distance <= 0.0001) {
    return null;
  }
  const dirNorm = travel.multiplyScalar(1 / distance);
  raycaster.set(segStart, dirNorm);
  raycaster.far = distance + pad;
  const hits = raycaster.intersectObjects(shootables, false);
  return hits.length > 0 ? hits[0].point.clone() : null;
};

const getLocalSegmentCharacterImpact = (segStart, segEnd) => {
  const localHead = camera.position.clone().add(new THREE.Vector3(0, headCenterOffsetY, 0));
  const localBody = camera.position.clone().add(new THREE.Vector3(0, bodyCenterOffsetY, 0));
  const head = testSegmentSphereHit(segStart, segEnd, localHead, headshotRadius);
  if (head) {
    return { point: head, headshot: true };
  }
  const body = testSegmentSphereHit(segStart, segEnd, localBody, bodyshotRadius);
  if (body) {
    return { point: body, headshot: false };
  }
  return null;
};

const applyIncomingProjectileHit = (hitInfo, killerId) => {
  // Damage is now authoritative on backend.
  void hitInfo;
  void killerId;
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
    constrainPlayerToWorld();
    isJumping = Boolean(selfPlayer.state?.jumping);
    if (!isJumping && camera.position.y <= (playerGroundY + 0.001)) {
      jumpVelocity = 0;
    }
  }

  if (rot) {
    yaw = rot.yaw;
    pitch = rot.pitch;
    updateLook();
  }

  kills = Number.isFinite(selfPlayer.kills) ? selfPlayer.kills : 0;
  if (Number.isFinite(selfPlayer.health)) {
    health = Math.max(0, Math.min(maxHealth, Math.round(selfPlayer.health)));
  }
  if (Number.isFinite(selfPlayer.shield)) {
    shield = Math.max(0, Math.min(maxShield, Math.round(selfPlayer.shield)));
  }
  if (Number.isFinite(selfPlayer.mana)) {
    mana = Math.max(0, Math.min(maxMana, Math.round(selfPlayer.mana)));
    manaHudValue = Math.round(mana);
  }
  if (selfPlayer.alive === false && !isRespawning && isMatchRunning()) {
    startRespawnCountdown();
  }
  if (selfPlayer.alive === true && isRespawning) {
    isRespawning = false;
    respawnEndsAt = 0;
    respawnSecondsLeft = respawnDurationSeconds;
    updateRespawnOverlay();
  }
};

const applyRoomState = (roomState, options = {}) => {
  const wasOutsideRoom = !state.joinedRoom;
  state.joinedRoom = roomState;
  const roomSeed = Number.isFinite(roomState.room?.mapSeed)
    ? roomState.room.mapSeed
    : hashStringToSeed(roomState.room?.id);
  rebuildMapFromSeed(roomSeed);
  syncRemotePlayersFromRoom(roomState);
  applyWeather(roomState.room?.weather);

  if (options.applyOwnState || wasOutsideRoom) {
    applyOwnStateFromRoom(roomState);
  }

  if (wasOutsideRoom) {
    resetCombatStats();
  }

  setInRoom(true);
  if (isHost() && roomState.room.status !== 'in_game') {
    sendWs({ type: 'start_game' });
  }
  if (roomState.room.status !== 'cooldown') {
    hideWinnerOverlay();
  }
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
      if (state.self.character && availableCharacters.includes(state.self.character)) {
        activeCharacter = state.self.character;
        characterSelect.value = state.self.character;
      }
      configureLocalAttackSound(state.self.character || activeCharacter);
      state.rooms = payload.data.rooms || [];
      mountPreviewModel();
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
      state.showScoreboard = false;
      pendingLatencyProbe = null;
      state.latencyMs = null;
      clearRemotePlayers();
      setInRoom(false);
      stopRemoteShootSound();
      applyWeather('night');
      resetCombatStats();
      hideWinnerOverlay();
      updateHud();
      return;
    }

    if (payload.type === 'pong') {
      const probeId = String(payload.data?.probeId || '');
      if (pendingLatencyProbe && probeId === pendingLatencyProbe.id) {
        state.latencyMs = performance.now() - pendingLatencyProbe.sentAt;
        pendingLatencyProbe = null;
        renderPerfPanel();
      }
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
      const {
        playerId, position, rotation, character, jumping,
      } = payload.data || {};
      if (!playerId || (state.self && playerId === state.self.id)) {
        return;
      }

      syncRemotePlayer({
        id: playerId,
        character,
        state: { position, rotation, jumping },
      });

      return;
    }

    if (payload.type === 'player_shoot') {
      const shot = payload.data;
      if (!shot) {
        return;
      }

      const shooterEntry = shot.playerId ? state.remotePlayers.get(shot.playerId) : null;
      const shooterCharacter = shot.character || shooterEntry?.character || '';
      const shooterUsesHolyShots = isSilentmanCharacter(shooterCharacter);
      const shooterUsesHammer = isPumoriCharacter(shooterCharacter);
      const shooterUsesPoison = isNeoorphenCharacter(shooterCharacter);
      const shooterUsesLunar = isPezunalunarCharacter(shooterCharacter);

      if (shot.playerId && state.remotePlayers.has(shot.playerId)) {
        const shooter = state.remotePlayers.get(shot.playerId);
        if (!shooter.isDead) {
          setRemoteAnimation(shooter, 'shoot');
          shooter.animationUntil = performance.now() + 420;
        }
      }

      const origin = new THREE.Vector3(shot.origin.x, shot.origin.y, shot.origin.z);
      const direction = new THREE.Vector3(shot.direction.x, shot.direction.y, shot.direction.z).normalize();
      const shotDistance = shot.distance || 100;
      const end = origin.clone().add(direction.clone().multiplyScalar(shotDistance));
      const visualEnd = end.clone();

      if (shooterUsesHolyShots) {
        createHolyShotVisual(origin, visualEnd, { source: 'remote', ownerId: shot.playerId });
      } else if (shooterUsesHammer) {
        createSacredHammerVisual(origin, visualEnd, { source: 'remote', ownerId: shot.playerId });
      } else if (shooterUsesPoison) {
        createPoisonGasVisual(origin, visualEnd, { source: 'remote', ownerId: shot.playerId });
      } else if (shooterUsesLunar) {
        createLunarFireVisual(origin, visualEnd, { source: 'remote', ownerId: shot.playerId });
      } else {
        createTracer(origin, visualEnd, 0x59ccff);
        createImpact(visualEnd, 0x59ccff);
      }
      registerRemoteShootSound(origin, shooterCharacter);
      return;
    }

    if (payload.type === 'player_damage') {
      if (!state.self || !canPlay()) {
        return;
      }
      const nextHealth = Number(payload.data?.health);
      const nextShield = Number(payload.data?.shield);
      const isHeadshot = Boolean(payload.data?.headshot);
      if (Number.isFinite(nextHealth)) {
        health = Math.max(0, Math.min(maxHealth, Math.round(nextHealth)));
      }
      if (Number.isFinite(nextShield)) {
        shield = Math.max(0, Math.min(maxShield, Math.round(nextShield)));
      }
      bleedHitFlash = Math.min(0.45, bleedHitFlash + (isHeadshot ? 0.35 : 0.2));
      updateHud();
      return;
    }

    if (payload.type === 'player_resources') {
      const nextMana = Number(payload.data?.mana);
      if (Number.isFinite(nextMana)) {
        mana = Math.max(0, Math.min(maxMana, Math.round(nextMana)));
        manaHudValue = Math.round(mana);
        updateHud();
      }
      return;
    }

    if (payload.type === 'player_death') {
      const playerId = payload.data?.playerId;
      if (!playerId) {
        return;
      }

      if (state.self && playerId === state.self.id) {
        health = 0;
        updateHud();
        startRespawnCountdown();
        return;
      }

      if (!state.remotePlayers.has(playerId)) {
        return;
      }

      const player = state.remotePlayers.get(playerId);
      player.isDead = true;
      player.isJumping = false;
      player.deadAt = performance.now();
      setRemoteAnimation(player, 'death');
      player.animationUntil = 0;
      return;
    }

    if (payload.type === 'player_respawned') {
      const playerId = payload.data?.playerId;
      if (!playerId) {
        return;
      }

      if (state.self && playerId === state.self.id) {
        health = Number.isFinite(payload.data?.health) ? Math.round(payload.data.health) : maxHealth;
        shield = Number.isFinite(payload.data?.shield) ? Math.round(payload.data.shield) : startShield;
        if (Number.isFinite(payload.data?.mana)) {
          mana = Math.round(payload.data.mana);
          manaHudValue = Math.round(mana);
        }
        isRespawning = false;
        respawnEndsAt = 0;
        respawnSecondsLeft = respawnDurationSeconds;
        updateRespawnOverlay();
        updateHud();
        return;
      }

      const remote = state.remotePlayers.get(playerId);
      if (!remote) {
        return;
      }
      remote.isDead = false;
      remote.deadAt = 0;
      remote.animationUntil = 0;
      setRemoteIdle(remote);
      return;
    }

    if (payload.type === 'chat_message') {
      const msg = payload.data || {};
      const playerName = String(msg.playerName || 'Player');
      const text = String(msg.text || '').trim();
      if (!text) {
        return;
      }
      pushChatMessage(playerName, text);
      chatFeed.classList.add('open');
      return;
    }

    if (payload.type === 'player_funny') {
      const playerId = payload.data?.playerId;
      if (!playerId || !state.remotePlayers.has(playerId)) {
        return;
      }

      const player = state.remotePlayers.get(playerId);
      if (player.isDead) {
        return;
      }

      if (player.currentAnimation === 'funny') {
        player.currentAnimation = '';
      }
      setRemoteAnimation(player, 'funny');
      const funnyAction = player.actions?.funny;
      const funnyDurationMs = Math.max(500, Math.round(((funnyAction?.getClip()?.duration) || 1) * 1000));
      player.animationUntil = performance.now() + funnyDurationMs;
      return;
    }

    if (payload.type === 'game_state') {
      if (state.joinedRoom && state.joinedRoom.room.id === payload.data.roomId) {
        state.joinedRoom.room.status = payload.data.status;
        state.joinedRoom.room.hostId = payload.data.hostId;
        if (payload.data.weather) {
          state.joinedRoom.room.weather = payload.data.weather;
          applyWeather(payload.data.weather);
        }
        if (payload.data.status !== 'in_game' && isRespawning) {
          isRespawning = false;
          respawnEndsAt = 0;
          respawnSecondsLeft = respawnDurationSeconds;
          updateRespawnOverlay();
        }
        if (payload.data.status !== 'cooldown') {
          hideWinnerOverlay();
        }
        updateHud();
      }
      return;
    }

    if (payload.type === 'match_winner') {
      if (!state.joinedRoom) {
        return;
      }
      showWinnerOverlay(payload.data?.winner, payload.data?.countdownSeconds);
      return;
    }

    if (payload.type === 'match_reset') {
      hideWinnerOverlay();
      resetCombatStats();
      updateHud();
      return;
    }
  });

  ws.addEventListener('close', () => {
    connectionStatus.textContent = 'Desconectado. Reintentando...';
    state.joinedRoom = null;
    state.showScoreboard = false;
    pendingLatencyProbe = null;
    state.latencyMs = null;
    clearRemotePlayers();
    setInRoom(false);
    stopRemoteShootSound();
    applyWeather('night');
    resetCombatStats();
    hideWinnerOverlay();
    updateHud();
    setTimeout(connectWebSocket, 1200);
  });

  ws.addEventListener('error', () => {
    setLobbyError('No se pudo conectar al WebSocket');
  });
};

characterSelect.addEventListener('change', () => {
  activeCharacter = characterSelect.value || activeCharacter;
  if (state.self) {
    state.self.character = activeCharacter;
  }
  configureLocalAttackSound(activeCharacter);
  ensureCharacterResource(activeCharacter);
  ensureLocalAvatar();
  mountPreviewModel();
  updateHud();
});

refreshRoomsBtn.addEventListener('click', () => {
  sendWs({ type: 'list_rooms' });
  loadCatalogs();
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

const updateThirdPersonCamera = () => {
  if (!isThirdPerson) {
    return;
  }

  tpLookAt.copy(camera.position);
  camera.getWorldDirection(tpAimForward);
  tpAimForward.normalize();
  const aimTarget = tpLookAt.clone().add(tpAimForward.clone().multiplyScalar(18));

  tpForward.set(-Math.sin(yaw), 0, -Math.cos(yaw)).normalize();
  tpRight.set(Math.cos(yaw), 0, -Math.sin(yaw)).normalize();

  tpTargetPos.copy(camera.position)
    .addScaledVector(tpAimForward, -0.8)
    .add(new THREE.Vector3(0, thirdPersonHeight, 0))
    .addScaledVector(tpForward, -thirdPersonDistance)
    .addScaledVector(tpRight, thirdPersonShoulder);

  tpTargetPos.y = Math.max(playerGroundY + 0.6, tpTargetPos.y);
  thirdPersonCamera.position.lerp(tpTargetPos, thirdPersonLerp);
  thirdPersonCamera.lookAt(aimTarget);
};

const getRenderCamera = () => {
  return isThirdPerson ? thirdPersonCamera : camera;
};

const getClosestRemoteCharacterHitPoint = (origin, direction, maxDistance) => {
  let closestDistance = maxDistance;
  let closestPoint = null;
  const tmpCenter = new THREE.Vector3();
  const toCenter = new THREE.Vector3();
  const projectedPoint = new THREE.Vector3();

  const tryHitSphere = (center, radius) => {
    toCenter.copy(center).sub(origin);
    const projection = toCenter.dot(direction);
    if (projection < 0 || projection > closestDistance) {
      return;
    }

    projectedPoint.copy(direction).multiplyScalar(projection).add(origin);
    if (projectedPoint.distanceToSquared(center) <= radius * radius) {
      closestDistance = projection;
      closestPoint = projectedPoint.clone();
    }
  };

  for (const entry of state.remotePlayers.values()) {
    if (!entry?.group || entry.isDead) {
      continue;
    }

    tmpCenter.set(entry.group.position.x, entry.group.position.y + 1.85, entry.group.position.z);
    tryHitSphere(tmpCenter, headshotRadius);

    tmpCenter.set(entry.group.position.x, entry.group.position.y + 1.1, entry.group.position.z);
    tryHitSphere(tmpCenter, bodyshotRadius);
  }

  if (!closestPoint) {
    return null;
  }

  return {
    point: closestPoint,
    distance: closestDistance,
  };
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
    jumping: isJumping,
  });
};

const clampToMap = (value) => {
  const edge = mapHalfExtent - playerCollisionRadius;
  return Math.max(-edge, Math.min(edge, value));
};

const collidesWithPillar = (x, z) => {
  for (let i = 0; i < pillarBounds.length; i += 1) {
    const pillar = pillarBounds[i];
    if (
      x + playerCollisionRadius > pillar.minX
      && x - playerCollisionRadius < pillar.maxX
      && z + playerCollisionRadius > pillar.minZ
      && z - playerCollisionRadius < pillar.maxZ
    ) {
      return true;
    }
  }

  return false;
};

const applyWorldCollisions = (targetX, targetZ) => {
  const currentX = camera.position.x;
  const currentZ = camera.position.z;
  const clampedX = clampToMap(targetX);
  const clampedZ = clampToMap(targetZ);

  let resolvedX = currentX;
  let resolvedZ = currentZ;

  if (!collidesWithPillar(clampedX, currentZ)) {
    resolvedX = clampedX;
  }
  if (!collidesWithPillar(resolvedX, clampedZ)) {
    resolvedZ = clampedZ;
  }

  return { x: resolvedX, z: resolvedZ };
};

const constrainPlayerToWorld = () => {
  const fixed = applyWorldCollisions(camera.position.x, camera.position.z);
  camera.position.x = fixed.x;
  camera.position.z = fixed.z;
  camera.position.y = Math.max(playerGroundY, camera.position.y);
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
    cancelLocalFunnyAnimation();
    isFiring = true;
  }
});

window.addEventListener('mouseup', (event) => {
  if (event.button === 0) {
    isFiring = false;
  }
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    event.preventDefault();
    if (!state.joinedRoom) {
      return;
    }
    if (!isChatTyping) {
      openChatInput();
      return;
    }
    const text = chatInput.value.trim();
    if (text) {
      sendWs({ type: 'chat_message', text });
    }
    closeChatInput();
    return;
  }

  if (isChatTyping) {
    if (event.code === 'Escape') {
      event.preventDefault();
      closeChatInput();
    }
    return;
  }

  if (event.code === 'Tab') {
    event.preventDefault();
    if (state.joinedRoom) {
      state.showScoreboard = true;
      renderScoreboard();
    }
  }

  if (event.code === 'KeyI') {
    state.showMatchInfo = !state.showMatchInfo;
    syncInfoVisibility();
  }

  if (event.code === 'KeyP') {
    state.showPerf = !state.showPerf;
    if (state.showPerf) {
      requestLatencyProbe(true);
    }
    renderPerfPanel();
  }

  if (event.code === 'KeyF') {
    event.preventDefault();
    if (state.joinedRoom && localAvatar.actions?.funny) {
      const funnyClip = localAvatar.actions.funny.getClip();
      const funnyMs = Math.max(500, Math.round((funnyClip?.duration || 1) * 1000));
      localAvatar.funnyUntil = performance.now() + funnyMs;
      setLocalAvatarAnimation('funny');
      sendWs({ type: 'player_funny' });
    }
    return;
  }

  if (event.code === 'KeyC') {
    isThirdPerson = !isThirdPerson;
    if (isThirdPerson) {
      updateThirdPersonCamera();
    }
  }

  if (event.code === 'Space') {
    event.preventDefault();
    cancelLocalFunnyAnimation();
    if (canPlay() && !isJumping && camera.position.y <= (playerGroundY + 0.001)) {
      isJumping = true;
      jumpVelocity = jumpInitialVelocity;
      sendLocalPlayerState(true);
    }
  }

  if (event.code === 'KeyR') {
    cancelLocalFunnyAnimation();
    reloadWeapon();
  }

  if (event.code in keys) {
    if (event.code === 'KeyW' || event.code === 'KeyA' || event.code === 'KeyS' || event.code === 'KeyD') {
      cancelLocalFunnyAnimation();
    }
    keys[event.code] = true;
  }
});

window.addEventListener('keyup', (event) => {
  if (isChatTyping) {
    return;
  }

  if (event.code === 'Space') {
    event.preventDefault();
  }

  if (event.code === 'Tab') {
    state.showScoreboard = false;
    renderScoreboard();
  }

  if (event.code in keys) {
    keys[event.code] = false;
  }
});

const shoot = () => {
  const usingHoly = isSilentmanCharacter(activeCharacter);
  const usingHammer = isPumoriCharacter(activeCharacter);
  const usingPoison = isNeoorphenCharacter(activeCharacter);
  const usingLunar = isPezunalunarCharacter(activeCharacter);
  const usingMana = usingHoly || usingHammer || usingPoison || usingLunar;
  if (usingMana && mana < manaCostPerShot) {
    return;
  }

  if (!usingMana && ammoInMag <= 0) {
    reloadWeapon();
    return;
  }

  if (usingMana) {
    mana = Math.max(0, mana - manaCostPerShot);
    manaHudValue = Math.round(mana);
  } else {
    ammoInMag -= 1;
  }
  startShootSound();
  localAvatar.shootUntil = performance.now() + 420;
  updateHud();

  camera.getWorldDirection(dir);
  const origin = camera.position.clone().add(dir.clone().multiplyScalar(0.55));

  raycaster.setFromCamera(centerAim, getRenderCamera());
  raycaster.far = 220;
  const hits = raycaster.intersectObjects(shootables, false);

  let hitPoint = hits.length > 0
    ? hits[0].point
    : origin.clone().add(raycaster.ray.direction.clone().multiplyScalar(120));

  if (usingMana || usingHammer || usingPoison) {
    const characterHit = getClosestRemoteCharacterHitPoint(
      origin,
      raycaster.ray.direction,
      origin.distanceTo(hitPoint),
    );
    if (characterHit?.point) {
      hitPoint.copy(characterHit.point);
    }
  }

  if (usingHammer) {
    const currentDistance = origin.distanceTo(hitPoint);
    if (currentDistance > pumoriMaxThrowDistance) {
      hitPoint = origin.clone().add(raycaster.ray.direction.clone().multiplyScalar(pumoriMaxThrowDistance));
    }
  }

  const distance = origin.distanceTo(hitPoint);

  if (usingHoly) {
    createHolyShotVisual(origin, hitPoint, { source: 'local', ownerId: state.self?.id });
  } else if (usingHammer) {
    createSacredHammerVisual(origin, hitPoint, { source: 'local', ownerId: state.self?.id });
  } else if (usingPoison) {
    createPoisonGasVisual(origin, hitPoint, { source: 'local', ownerId: state.self?.id });
  } else if (usingLunar) {
    createLunarFireVisual(origin, hitPoint, { source: 'local', ownerId: state.self?.id });
  } else {
    createTracer(origin, hitPoint);
    createImpact(hitPoint);
  }

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

  if (isManaCharacter(activeCharacter)) {
    mana = Math.min(maxMana, mana + manaPickupAmount);
    manaHudValue = Math.round(mana);
  } else {
    ammoReserve = Math.min(maxAmmoTotal, ammoReserve + ammoPickupAmount);
  }
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
    const next = applyWorldCollisions(
      camera.position.x + move.x,
      camera.position.z + move.z,
    );
    const moved = Math.abs(next.x - camera.position.x) > 0.0001 || Math.abs(next.z - camera.position.z) > 0.0001;
    camera.position.x = next.x;
    camera.position.z = next.z;
    camera.position.y = Math.max(playerGroundY, camera.position.y);
    if (moved) {
      sendLocalPlayerState();
    }
  }
};

const updateJump = (delta) => {
  if (!isJumping && camera.position.y <= (playerGroundY + 0.001) && jumpVelocity <= 0) {
    return;
  }

  jumpVelocity -= jumpGravity * delta;
  camera.position.y += jumpVelocity * delta;

  if (camera.position.y <= playerGroundY) {
    camera.position.y = playerGroundY;
    jumpVelocity = 0;
    if (isJumping) {
      isJumping = false;
      sendLocalPlayerState(true);
    }
  } else {
    isJumping = true;
  }

  sendLocalPlayerState();
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

    if (!canPlay() || (isManaCharacter(activeCharacter) ? mana >= maxMana : ammoReserve >= maxAmmoTotal)) {
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
  if (!rain.visible) {
    return;
  }

  const wind = 0.15 + (Math.sin(performance.now() * 0.0024) * 0.2);
  for (let i = 0; i < rainCount; i += 1) {
    const xIndex = i * 3;
    const yIndex = i * 3 + 1;
    const zIndex = i * 3 + 2;
    rainPos[yIndex] -= rainVel[i] * delta;
    rainPos[xIndex] += wind * delta * rainVel[i] * 0.35;
    rainPos[zIndex] += Math.sin((performance.now() * 0.0015) + i) * 0.015;
    if (rainPos[yIndex] < 0.2) {
      rainPos[yIndex] = Math.random() * 120 + 25;
      rainPos[xIndex] = camera.position.x + (Math.random() - 0.5) * 220;
      rainPos[zIndex] = camera.position.z + (Math.random() - 0.5) * 220;
    }
  }
  rainGeo.attributes.position.needsUpdate = true;
};

const updateSnow = (delta) => {
  if (!snow.visible) {
    return;
  }

  for (let i = 0; i < snowCount; i += 1) {
    const xIndex = i * 3;
    const yIndex = xIndex + 1;
    const zIndex = xIndex + 2;
    snowPos[yIndex] -= snowVel[i] * delta;
    snowPos[xIndex] += Math.sin((performance.now() * 0.0009) + i) * 0.02;
    snowPos[zIndex] += Math.cos((performance.now() * 0.0007) + i) * 0.02;
    if (snowPos[yIndex] < 0.2) {
      snowPos[yIndex] = Math.random() * 120 + 25;
      snowPos[xIndex] = camera.position.x + (Math.random() - 0.5) * 180;
      snowPos[zIndex] = camera.position.z + (Math.random() - 0.5) * 180;
    }
  }
  snowGeo.attributes.position.needsUpdate = true;
};

const updateRemotePlayers = (delta) => {
  const factor = Math.min(1, delta * 9);
  const now = performance.now();

  for (const entry of state.remotePlayers.values()) {
    entry.group.position.lerp(entry.targetPosition, factor);
    entry.group.rotation.y = lerpAngle(
      entry.group.rotation.y,
      entry.targetYaw + remoteFacingYawOffset,
      factor,
    );
    const stillMoving = entry.group.position.distanceToSquared(entry.targetPosition) > 0.01;
    const isAirborne = entry.isJumping || entry.targetPosition.y > 0.08 || entry.group.position.y > 0.08;

    if (entry.head) {
      entry.head.rotation.x = lerpAngle(entry.head.rotation.x, entry.targetPitch, factor);
    }

    if (entry.mixer) {
      entry.mixer.update(delta);
    }

    if (entry.animationUntil > 0 && now >= entry.animationUntil) {
      if (entry.isDead) {
        entry.isDead = false;
      }
      if (isAirborne) {
        setRemoteAnimation(entry, 'jump');
      } else if (stillMoving) {
        setRemoteAnimation(entry, 'move');
      } else {
        setRemoteIdle(entry);
      }
      entry.animationUntil = 0;
    }

    if (!entry.isDead && entry.animationUntil <= 0) {
      if (isAirborne) {
        if (entry.currentAnimation !== 'jump') {
          setRemoteAnimation(entry, 'jump');
        }
      } else if (stillMoving) {
        if (entry.currentAnimation !== 'move') {
          setRemoteAnimation(entry, 'move');
        }
      } else if (entry.currentAnimation !== 'idle') {
        setRemoteIdle(entry);
      }
    }
  }
};

const updateEffects = (delta) => {
  muzzleFlash.intensity = Math.max(0, muzzleFlash.intensity - 20 * delta);

  for (let i = activeTracers.length - 1; i >= 0; i -= 1) {
    const tracer = activeTracers[i];
    tracer.userData.life -= delta;
    tracer.material.opacity = Math.max(0, tracer.userData.life * 7.5);
    if (tracer.userData.life <= 0) {
      scene.remove(tracer);
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

const updateHolyProjectiles = (delta) => {
  for (let i = activeHolyProjectiles.length - 1; i >= 0; i -= 1) {
    const projectile = activeHolyProjectiles[i];
    projectile.prevPos.copy(projectile.pos);
    projectile.traveled += projectile.speed * delta;
    const t = Math.max(0, Math.min(1, projectile.traveled / projectile.distance));

    const angle = projectile.phase + (t * projectile.spin);
    const spiralRadius = Math.max(0, projectile.radius * (1 - (t * projectile.radiusFalloff)));
    const wobbleA = Math.cos(angle) * spiralRadius;
    const wobbleB = Math.sin(angle) * spiralRadius;
    const basePos = projectile.start.clone().lerp(projectile.end, t);
    const pos = basePos
      .add(projectile.right.clone().multiplyScalar(wobbleA))
      .add(projectile.up.clone().multiplyScalar(wobbleB));
    projectile.pos.copy(pos);
    projectile.mesh.position.copy(pos);

    projectile.mesh.scale.setScalar(1.25 + (Math.sin(performance.now() * 0.02) * 0.24));

    projectile.trailTimer += delta;
    if (projectile.trailTimer >= 0.012) {
      projectile.trailTimer = 0;
      const spark = createImpact(pos, Math.random() > 0.5 ? 0xfff2c6 : 0x9af0ff);
      if (spark) {
        spark.scale.setScalar(1.35 + Math.random() * 0.95);
        spark.userData.life = 0.3 + Math.random() * 0.18;
      }
    }

    let impactPoint = null;
    let impactHeadshot = false;
    if (projectile.source === 'remote') {
      const localImpact = getLocalSegmentCharacterImpact(projectile.prevPos, projectile.pos);
      if (localImpact) {
        impactPoint = localImpact.point;
        impactHeadshot = localImpact.headshot;
      }
    }

    if (!impactPoint) {
      impactPoint = getSegmentWallImpact(projectile.prevPos, projectile.pos, 0.22);
    }

    if (impactPoint || t >= 1) {
      scene.remove(projectile.mesh);
      projectile.mesh.geometry.dispose();
      projectile.mesh.material.dispose();
      activeHolyProjectiles.splice(i, 1);

      const impactCenter = impactPoint ? impactPoint.clone() : projectile.end.clone();
      if (impactPoint && projectile.source === 'remote') {
        applyIncomingProjectileHit({ point: impactCenter, headshot: impactHeadshot }, projectile.ownerId);
      }
      const headGlow = createImpact(impactCenter, 0xfff7d1);
      if (headGlow) {
        headGlow.scale.setScalar(2.3);
        headGlow.userData.life = 0.42;
      }
      const coreBlast = createImpact(impactCenter, 0xbff3ff);
      if (coreBlast) {
        coreBlast.scale.setScalar(1.7);
        coreBlast.userData.life = 0.36;
      }

      createTracer(
        impactCenter.clone().add(projectile.up.clone().multiplyScalar(1.05)),
        impactCenter.clone().add(projectile.up.clone().multiplyScalar(-1.05)),
        0xfff2c6,
        { radiusScale: 2.2, life: 0.34, opacity: 1 },
      );
      createTracer(
        impactCenter.clone().add(projectile.right.clone().multiplyScalar(0.7)),
        impactCenter.clone().add(projectile.right.clone().multiplyScalar(-0.7)),
        0x9af0ff,
        { radiusScale: 1.9, life: 0.34, opacity: 1 },
      );
    }
  }
};

const updateHammerProjectiles = (delta) => {
  for (let i = activeHammerProjectiles.length - 1; i >= 0; i -= 1) {
    const projectile = activeHammerProjectiles[i];
    projectile.prevPos.copy(projectile.pos);
    projectile.velocity.y -= hammerGravity * delta;
    projectile.pos.add(projectile.velocity.clone().multiplyScalar(delta));
    projectile.mesh.position.copy(projectile.pos);

    const traveledStep = projectile.pos.distanceTo(projectile.prevPos);
    projectile.traveledDistance += traveledStep;
    const lifetimeT = Math.max(0, Math.min(1, projectile.traveledDistance / pumoriMaxThrowDistance));

    const spin = projectile.phase + (lifetimeT * projectile.spin);
    projectile.mesh.rotation.set(spin * 0.9, spin * 1.1, spin * 0.75);

    projectile.trailTimer += delta;
    if (projectile.trailTimer >= 0.018) {
      projectile.trailTimer = 0;
      const spark = createImpact(projectile.pos, Math.random() > 0.5 ? 0xfff2c6 : 0x9af0ff);
      if (spark) {
        spark.scale.setScalar(1 + Math.random() * 0.9);
        spark.userData.life = 0.22 + Math.random() * 0.16;
      }
    }

    let impactPoint = null;
    let impactHeadshot = false;

    if (projectile.pos.y <= 0.2) {
      impactPoint = projectile.pos.clone();
      impactPoint.y = 0.2;
    }

    if (!impactPoint && traveledStep > 0.0001) {
      impactPoint = getSegmentWallImpact(projectile.prevPos, projectile.pos, 0.4);
    }

    if (!impactPoint) {
      if (projectile.source === 'local') {
        for (const entry of state.remotePlayers.values()) {
          if (!entry?.group || entry.isDead) {
            continue;
          }
          const headCenter = new THREE.Vector3(entry.group.position.x, entry.group.position.y + 1.85, entry.group.position.z);
          const bodyCenter = new THREE.Vector3(entry.group.position.x, entry.group.position.y + 1.1, entry.group.position.z);
          impactPoint = testSegmentSphereHit(projectile.prevPos, projectile.pos, headCenter, headshotRadius)
            || testSegmentSphereHit(projectile.prevPos, projectile.pos, bodyCenter, bodyshotRadius);
          if (impactPoint) {
            break;
          }
        }
      } else if (projectile.source === 'remote') {
        const localImpact = getLocalSegmentCharacterImpact(projectile.prevPos, projectile.pos);
        if (localImpact) {
          impactPoint = localImpact.point;
          impactHeadshot = localImpact.headshot;
        }
      }
    }

    if (!impactPoint && projectile.traveledDistance >= hammerAbsurdDistance) {
      impactPoint = null;
    }

    if (impactPoint || projectile.traveledDistance >= hammerAbsurdDistance) {
      scene.remove(projectile.mesh);
      projectile.mesh.traverse((node) => {
        if (node.isMesh) {
          node.geometry.dispose();
          node.material.dispose();
        }
      });
      activeHammerProjectiles.splice(i, 1);

      if (impactPoint) {
        const impactCenter = impactPoint.clone();
        if (projectile.source === 'remote') {
          applyIncomingProjectileHit({ point: impactCenter, headshot: impactHeadshot }, projectile.ownerId);
        }
        const blastA = createImpact(impactCenter, 0xfff2c6);
        const blastB = createImpact(impactCenter, 0x9af0ff);
        if (blastA) {
          blastA.scale.setScalar(2.5);
          blastA.userData.life = 0.42;
        }
        if (blastB) {
          blastB.scale.setScalar(1.9);
          blastB.userData.life = 0.35;
        }

        createTracer(
          impactCenter.clone().add(projectile.up.clone().multiplyScalar(1.15)),
          impactCenter.clone().add(projectile.up.clone().multiplyScalar(-1.15)),
          0xfff2c6,
          { radiusScale: 2.3, life: 0.34, opacity: 1 },
        );
        createTracer(
          impactCenter.clone().add(projectile.right.clone().multiplyScalar(0.8)),
          impactCenter.clone().add(projectile.right.clone().multiplyScalar(-0.8)),
          0x9af0ff,
          { radiusScale: 2, life: 0.34, opacity: 1 },
        );
      }
    }
  }
};

const updatePoisonProjectiles = (delta) => {
  for (let i = activePoisonProjectiles.length - 1; i >= 0; i -= 1) {
    const projectile = activePoisonProjectiles[i];
    projectile.prevPos.copy(projectile.pos);
    projectile.traveled += projectile.speed * delta;
    const t = Math.max(0, Math.min(1, projectile.traveled / projectile.distance));

    const angle = projectile.phase + (t * projectile.spin);
    const waveA = Math.sin(angle) * projectile.waveAmpA * (1 - (t * 0.22));
    const waveB = Math.sin((angle * 0.5) + (Math.PI * 0.35)) * projectile.waveAmpB;
    const basePos = projectile.start.clone().lerp(projectile.end, t);
    const pos = basePos
      .add(projectile.right.clone().multiplyScalar(waveA))
      .add(projectile.up.clone().multiplyScalar(waveB));
    projectile.pos.copy(pos);
    projectile.mesh.position.copy(pos);

    projectile.mesh.scale.setScalar(1.12 + (Math.sin(performance.now() * 0.02) * 0.28));

    projectile.trailTimer += delta;
    if (projectile.trailTimer >= 0.007) {
      projectile.trailTimer = 0;
      const colorA = Math.random() > 0.5 ? 0x66ff73 : 0x9dff7a;
      const colorB = Math.random() > 0.5 ? 0x5dff6c : 0x8fff79;
      const puffA = createImpact(pos, colorA);
      const puffB = createImpact(pos.clone().add(projectile.right.clone().multiplyScalar((Math.random() - 0.5) * 0.12)), colorB);
      if (puffA) {
        puffA.scale.setScalar(0.72 + (Math.random() * 0.35));
        puffA.userData.life = 0.22 + (Math.random() * 0.08);
      }
      if (puffB) {
        puffB.scale.setScalar(0.62 + (Math.random() * 0.28));
        puffB.userData.life = 0.18 + (Math.random() * 0.08);
      }
    }

    let impactPoint = null;
    let impactHeadshot = false;
    if (projectile.source === 'remote') {
      const localImpact = getLocalSegmentCharacterImpact(projectile.prevPos, projectile.pos);
      if (localImpact) {
        impactPoint = localImpact.point;
        impactHeadshot = localImpact.headshot;
      }
    }

    if (!impactPoint) {
      impactPoint = getSegmentWallImpact(projectile.prevPos, projectile.pos, 0.22);
    }

    if (impactPoint || t >= 1) {
      scene.remove(projectile.mesh);
      projectile.mesh.geometry.dispose();
      projectile.mesh.material.dispose();
      activePoisonProjectiles.splice(i, 1);

      const impactCenter = impactPoint ? impactPoint.clone() : projectile.end.clone();
      if (impactPoint && projectile.source === 'remote') {
        applyIncomingProjectileHit({ point: impactCenter, headshot: impactHeadshot }, projectile.ownerId);
      }

      const cloudA = createImpact(impactCenter, 0x58ff66);
      if (cloudA) {
        cloudA.scale.setScalar(2.45);
        cloudA.userData.life = 0.45;
      }
      const cloudB = createImpact(impactCenter, 0xa8ff8c);
      if (cloudB) {
        cloudB.scale.setScalar(1.9);
        cloudB.userData.life = 0.38;
      }
      createTracer(
        impactCenter.clone().add(projectile.up.clone().multiplyScalar(0.95)),
        impactCenter.clone().add(projectile.up.clone().multiplyScalar(-0.95)),
        0x75ff64,
        { radiusScale: 2, life: 0.28, opacity: 1 },
      );
      createTracer(
        impactCenter.clone().add(projectile.right.clone().multiplyScalar(0.75)),
        impactCenter.clone().add(projectile.right.clone().multiplyScalar(-0.75)),
        0xb8ff95,
        { radiusScale: 1.75, life: 0.28, opacity: 0.95 },
      );
    }
  }
};

const updateLunarProjectiles = (delta) => {
  for (let i = activeLunarProjectiles.length - 1; i >= 0; i -= 1) {
    const projectile = activeLunarProjectiles[i];
    projectile.prevPos.copy(projectile.pos);
    projectile.traveled += projectile.speed * delta;
    const t = Math.max(0, Math.min(1, projectile.traveled / projectile.distance));

    const angle = projectile.phase + (t * projectile.spin);
    const waveA = Math.sin(angle) * projectile.waveAmpA;
    const waveB = Math.cos((angle * 0.7) + Math.PI * 0.3) * projectile.waveAmpB;
    const basePos = projectile.start.clone().lerp(projectile.end, t);
    const pos = basePos
      .add(projectile.right.clone().multiplyScalar(waveA))
      .add(projectile.up.clone().multiplyScalar(waveB));
    projectile.pos.copy(pos);
    projectile.mesh.position.copy(pos);
    projectile.mesh.scale.setScalar(1.25 + (Math.sin(performance.now() * 0.03) * 0.18));

    projectile.trailTimer += delta;
    if (projectile.trailTimer >= 0.005) {
      projectile.trailTimer = 0;
      const tailLen = 2.9 + Math.random() * 1.4;
      const tailEnd = pos.clone().add(projectile.dir.clone().multiplyScalar(-tailLen));
      const tailColor = Math.random() > 0.5 ? 0x9ad8ff : 0x7ec9ff;
      createTracer(pos, tailEnd, tailColor, { radiusScale: 1.8, life: 0.36, opacity: 0.92 });

      const ember = createImpact(tailEnd, Math.random() > 0.5 ? 0xbce9ff : 0x84cfff);
      if (ember) {
        ember.scale.setScalar(0.7 + Math.random() * 0.3);
        ember.userData.life = 0.22 + Math.random() * 0.08;
      }
    }

    let impactPoint = null;
    let impactHeadshot = false;
    if (projectile.source === 'remote') {
      const localImpact = getLocalSegmentCharacterImpact(projectile.prevPos, projectile.pos);
      if (localImpact) {
        impactPoint = localImpact.point;
        impactHeadshot = localImpact.headshot;
      }
    }

    if (!impactPoint) {
      impactPoint = getSegmentWallImpact(projectile.prevPos, projectile.pos, 0.24);
    }

    if (impactPoint || t >= 1) {
      scene.remove(projectile.mesh);
      projectile.mesh.geometry.dispose();
      projectile.mesh.material.dispose();
      activeLunarProjectiles.splice(i, 1);

      const impactCenter = impactPoint ? impactPoint.clone() : projectile.end.clone();
      if (impactPoint && projectile.source === 'remote') {
        applyIncomingProjectileHit({ point: impactCenter, headshot: impactHeadshot }, projectile.ownerId);
      }

      const blastCore = createImpact(impactCenter, 0xeef9ff);
      const blastAura = createImpact(impactCenter, 0x8ed1ff);
      if (blastCore) {
        blastCore.scale.setScalar(2.2);
        blastCore.userData.life = 0.4;
      }
      if (blastAura) {
        blastAura.scale.setScalar(2.8);
        blastAura.userData.life = 0.46;
      }
      createTracer(
        impactCenter.clone().add(projectile.up.clone().multiplyScalar(1.35)),
        impactCenter.clone().add(projectile.up.clone().multiplyScalar(-1.35)),
        0xdff6ff,
        { radiusScale: 2.35, life: 0.36, opacity: 1 },
      );
      createTracer(
        impactCenter.clone().add(projectile.right.clone().multiplyScalar(1.05)),
        impactCenter.clone().add(projectile.right.clone().multiplyScalar(-1.05)),
        0x8acfff,
        { radiusScale: 2.15, life: 0.36, opacity: 0.98 },
      );
    }
  }
};

const updateShooting = (delta) => {
  const usingMana = isManaCharacter(activeCharacter);

  if (!canPlay()) {
    return;
  }

  if (usingMana) {
    const beforeHudValue = manaHudValue;
    mana = Math.min(maxMana, mana + (manaRegenPerSecond * delta));
    manaHudValue = Math.round(mana);
    if (isReloading) {
      isReloading = false;
      reloadCooldown = 0;
    }
    if (manaHudValue !== beforeHudValue) {
      updateHud();
    }
  }

  if (!usingMana && isReloading) {
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
    cooldown = getCurrentAttackIntervalSeconds();

    if (!usingMana && ammoInMag <= 0 && ammoReserve > 0) {
      reloadWeapon();
    }
  }
};

const updateRespawnCountdown = () => {
  if (!isRespawning || !state.joinedRoom || !isMatchRunning()) {
    if (isRespawning && !isMatchRunning()) {
      isRespawning = false;
      respawnEndsAt = 0;
      respawnSecondsLeft = respawnDurationSeconds;
      updateRespawnOverlay();
    }
    return;
  }

  const msLeft = Math.max(0, respawnEndsAt - performance.now());
  const secondsLeft = Math.ceil(msLeft / 1000);

  if (secondsLeft !== respawnSecondsLeft) {
    respawnSecondsLeft = secondsLeft;
    updateRespawnOverlay();
  }

  if (msLeft <= 0) {
    respawnPlayer();
  }
};

const updateWinnerCountdown = () => {
  if (!isMatchEnding || !state.joinedRoom || state.joinedRoom.room.status !== 'cooldown') {
    if (isMatchEnding) {
      hideWinnerOverlay();
    }
    return;
  }

  const msLeft = Math.max(0, matchWinnerEndsAt - performance.now());
  const secondsLeft = Math.ceil(msLeft / 1000);
  if (secondsLeft !== matchWinnerSecondsLeft) {
    matchWinnerSecondsLeft = secondsLeft;
    winnerCounter.textContent = String(matchWinnerSecondsLeft);
  }
  if (msLeft <= 0) {
    winnerCounter.textContent = '0';
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05);
  updatePerfMetrics();
  updateMovement(delta);
  updateJump(delta);
  updateLocalAvatar(delta);
  updateThirdPersonCamera();
  updateAmmoPickups(delta);
  updateShieldPickups(delta);
  updateRain(delta);
  updateSnow(delta);
  updateRemotePlayers(delta);
  updateHolyProjectiles(delta);
  updateHammerProjectiles(delta);
  updatePoisonProjectiles(delta);
  updateLunarProjectiles(delta);
  updateShooting(delta);
  updateRespawnCountdown();
  updateWinnerCountdown();
  updateEffects(delta);
  updateRemoteShootSound(delta);
  updateBleedEffect(delta);
  if (previewState.mixer) {
    previewState.mixer.update(delta);
  }
  if (previewState.model) {
    previewState.model.rotation.y += delta * 0.45;
  }
  if (previewState.renderer && previewState.scene && previewState.camera) {
    resizeCharacterPreview();
    previewState.renderer.render(previewState.scene, previewState.camera);
  }
  renderer.render(scene, getRenderCamera());
};

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  thirdPersonCamera.aspect = window.innerWidth / window.innerHeight;
  thirdPersonCamera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  if (previewState.renderer && previewState.camera) {
    resizeCharacterPreview();
  }
});

setInRoom(false);
applyWeather('night');
setupCharacterPreview();
updateRespawnOverlay();
updateHud();
renderRooms();
updateLook();
animate();
connectWebSocket();
loadCatalogs();
