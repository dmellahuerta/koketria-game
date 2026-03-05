import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';

const shouldRegisterServiceWorker = import.meta.env.PROD
  && 'serviceWorker' in navigator
  && window.isSecureContext;

if (shouldRegisterServiceWorker) {
  window.addEventListener('load', () => {
    let reloadedBySw = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (reloadedBySw) {
        return;
      }
      reloadedBySw = true;
      window.location.reload();
    });
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        registration.update().catch(() => {});
      })
      .catch(() => {});
  });
}

const app = document.querySelector('#app');
app.innerHTML = `
  <section id="bootLoader">
    <div class="boot-card">
      <h1>Cargando Assets</h1>
      <p id="bootLoaderText">Inicializando...</p>
      <div class="boot-track">
        <div id="bootLoaderFill" class="boot-fill"></div>
      </div>
      <p id="bootLoaderPercent">0%</p>
    </div>
  </section>
  <div id="lobbyMatrixBackdrop" aria-hidden="true"></div>

  <section id="nameGate" class="hidden">
    <div class="name-gate-card">
      <h1>Koketria Game</h1>
      <p>Ingresa tu nombre para entrar al lobby</p>
      <label>
        Nombre de jugador
        <input id="nameGateInput" maxlength="24" placeholder="Neo" autocomplete="off" />
      </label>
      <button id="nameGateSubmitBtn" type="button">Entrar al Lobby</button>
      <p id="nameGateError" class="error hidden"></p>
    </div>
  </section>

  <section id="lobby" class="hidden">
    <div class="lobby-layout">
      <aside class="lobby-side lobby-left-side">
        <h3>Conectados en Lobby</h3>
        <div id="lobbyUsersList" class="lobby-users-list"></div>
        <h3>Chat Lobby</h3>
        <div id="lobbyChatLog" class="lobby-chat-log"></div>
        <div class="lobby-chat-input">
          <input id="lobbyChatInput" type="text" maxlength="180" placeholder="Escribe para el lobby..." autocomplete="off" />
          <button id="lobbyChatSendBtn" type="button">Enviar</button>
        </div>
      </aside>
      <div class="lobby-main">
        <h1>Koketria Game</h1>
        <p id="connectionStatus">Conectando al backend...</p>
        <input id="playerName" type="hidden" />
        <p id="playerNameBadge" class="player-name-badge">Jugador: -</p>
        <label>
          Personaje
          <select id="characterSelect">
            <option value="">Cargando...</option>
          </select>
        </label>
        <div id="characterPreview" class="character-preview"></div>
        <div class="lobby-actions">
          <button id="refreshRoomsBtn" type="button">Refrescar</button>
          <button id="createVersusBtn" type="button">Crear Versusmatch</button>
          <button id="profileLogoutBtn" type="button">Salir</button>
          <a id="mainPortalLink" class="lobby-link-btn" href="https://misterrii.com">Web principal</a>
        </div>
        <div class="lobby-music-row">
          <label for="lobbyMusicVolume">Volumen música lobby</label>
          <input id="lobbyMusicVolume" type="range" min="0" max="1" step="0.01" />
          <span id="lobbyMusicVolumeValue">100%</span>
        </div>
        <p id="lobbyError" class="error hidden"></p>
      </div>
      <aside class="lobby-side lobby-right-side">
        <h3>Salas activas</h3>
        <div id="roomList" class="room-list"></div>
      </aside>
    </div>
  </section>

  <section id="versusLobby" class="hidden">
    <div class="versus-card">
      <div class="versus-layout">
        <div class="versus-main">
          <h2>Lobby 2 - Versusmatch</h2>
          <p id="versusRoomInfo">Sala: -</p>
          <label>
            Modalidad
            <select id="versusTypeSelect">
              <option value="">Selecciona tipo...</option>
              <option value="1v1">1v1</option>
              <option value="2v2">2v2</option>
            </select>
          </label>
          <p id="versusWaitingInfo">Esperando jugadores...</p>
          <div id="versusTeams" class="versus-teams">
            <div class="versus-team team-red">
              <h3>Equipo Rojo</h3>
              <div id="versusLeftPlayers" class="versus-players"></div>
            </div>
            <div class="versus-team team-blue">
              <h3>Equipo Azul</h3>
              <div id="versusRightPlayers" class="versus-players"></div>
            </div>
          </div>
          <div class="versus-bottom-bar">
            <div class="lobby-actions versus-actions">
              <button id="versusReadyBtn" type="button">Ready: OFF</button>
              <button id="versusStartBtn" type="button">Iniciar partida</button>
              <button id="versusLeaveBtn" type="button">Volver al lobby</button>
            </div>
          </div>
          <div class="lobby-music-row versus-music-row">
            <label for="versusLobbyMusicVolume">Volumen música lobby1</label>
            <input id="versusLobbyMusicVolume" type="range" min="0" max="1" step="0.01" />
            <span id="versusLobbyMusicVolumeValue">100%</span>
          </div>
          <p id="versusHint">Las partidas versus aparecen en estado waiting hasta completar jugadores.</p>
        </div>
        <div class="versus-chat-side">
          <h3>Chat Lobby 2</h3>
          <div id="versusChatLog" class="versus-chat-log"></div>
          <div class="versus-chat-input">
            <input id="versusChatInput" type="text" maxlength="180" placeholder="Escribe para el lobby 2..." autocomplete="off" />
            <button id="versusChatSendBtn" type="button">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div id="hud">
    <div id="teamScoreHud" class="team-score-hud hidden">
      <span id="teamScoreRed" class="team-score red">ROJO 0</span>
      <span id="teamScoreBlue" class="team-score blue">AZUL 0</span>
      <span id="teamScoreTarget" class="team-score-target">META 10</span>
    </div>

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

    <div id="abilityHud" class="ability-hud hidden">
      <p class="ability-title">Especial R</p>
      <p id="abilityCooldownText" class="ability-value">-</p>
      <div class="ability-track"><div id="abilityCooldownFill" class="ability-fill"></div></div>
    </div>

    <div id="matchInfo">
      <h2>Panel (I)</h2>
      <p><strong>Movimiento:</strong> W A S D</p>
      <p><strong>Saltar:</strong> Space</p>
      <p>Click para capturar el mouse</p>
      <p>Disparar: Mouse izquierdo</p>
      <p>Recargar: R</p>
      <p>Animación Funny: F</p>
      <p>Cambiar cámara: C</p>
      <p>Panel: I</p>
      <p>Marcador: Tab</p>
      <p>FPS + Latencia: P</p>
      <p>Salir: ESC</p>
      <p><strong>Habilidades:</strong> silentman, pumori, neoorphen, pezuñalunar</p>
      <p id="healthStat">Vida: 100</p>
      <p id="shieldStat">Escudo: 0</p>
      <p id="ammoStat">Balas: 30 / 90</p>
      <p id="specialStat">Especial R: -</p>
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
      <p>Frame ms avg/p95: <span id="frameMsValue">0.0 / 0.0</span></p>
      <p>Latencia: <span id="latencyValue">--</span></p>
      <p>ACK RTT avg/p95: <span id="ackRttValue">0.0 / 0.0</span></p>
      <p>Shot ACK avg/p95 pend/s: <span id="shotAckValue">0.0 / 0.0 / 0 / 0.0</span></p>
      <p>WS out msg/s kb/s: <span id="wsOutValue">0.0 / 0.0</span></p>
      <p>Move send/s pendientes: <span id="moveFlowValue">0.0 / 0</span></p>
      <p>Draw calls: <span id="drawCallsValue">0</span></p>
      <p>Triángulos: <span id="trianglesValue">0</span></p>
      <p>Geometrías: <span id="geometriesValue">0</span></p>
      <p>Texturas: <span id="texturesValue">0</span></p>
      <p>VFX activos: <span id="vfxValue">0</span></p>
      <p>Pred err avg/p95: <span id="predErrValue">0.00 / 0.00</span></p>
      <p>Correcciones/s: <span id="corrRateValue">0.00</span></p>
      <p>Corr soft/hard s: <span id="corrSplitValue">0.00 / 0.00</span></p>
      <p>Late ACK/s: <span id="lateAckRateValue">0.00</span></p>
      <p>Remote interp/extrap ms: <span id="remoteNetWindowValue">0 / 0</span></p>
      <p>Streak corr max: <span id="corrStreakValue">0 / 0</span></p>
      <p>Velocidad local: <span id="localSpeedValue">0.00</span></p>
      <p>Bypass colisión ms: <span id="collisionBypassValue">0</span></p>
      <p>Map sync: <span id="mapSyncValue">-</span></p>
      <p>Objetivo comp: <span id="perfGoalValue">-</span></p>
      <p>Runtime: <span id="runtimeHealthValue">OK</span></p>
    </div>
  </div>

  <div id="respawnScreen" class="hidden">
    <div class="respawn-card">
      <h2>Eliminado</h2>
      <p>Respawn en <strong id="respawnCounter">5</strong>s</p>
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
  <div id="damageIndicator"></div>

  <div id="mobileControls" class="mobile-controls hidden">
    <div id="mobileLookZone" class="mobile-look-zone"></div>
    <button id="mobileOptionsBtn" type="button" class="mobile-menu-btn">ESC</button>
    <div class="mobile-left">
      <div id="mobileJoystick" class="mobile-joystick">
        <div class="mobile-joystick-base"></div>
        <div id="mobileJoystickThumb" class="mobile-joystick-thumb"></div>
      </div>
    </div>
    <div class="mobile-right">
      <button id="mobileJumpBtn" type="button" class="mobile-btn jump">Saltar</button>
      <button id="mobileSpecialBtn" type="button" class="mobile-btn special">Especial</button>
      <button id="mobileFireBtn" type="button" class="mobile-btn fire">Ataque</button>
    </div>
  </div>
  <div id="mobileFullscreenPrompt" class="mobile-fullscreen-prompt hidden">
    <div class="mobile-fullscreen-card">
      <h3>Modo Pantalla Completa</h3>
      <p>Para jugar mejor en celular, activa pantalla completa en horizontal.</p>
      <div class="mobile-fullscreen-actions">
        <button id="mobileFsAcceptBtn" type="button">Pantalla completa</button>
        <button id="mobileFsSkipBtn" type="button" class="secondary">Ahora no</button>
      </div>
    </div>
  </div>

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
  <div id="killFeed" class="kill-feed"></div>

  <div id="chatPanel" class="chat-panel">
    <div id="chatInputWrap" class="chat-input-wrap hidden">
      <input id="chatInput" type="text" maxlength="180" placeholder="Escribe un mensaje..." autocomplete="off" />
    </div>
  </div>

  <div id="optionsScreen" class="hidden">
    <div class="options-card">
      <h2>Opciones</h2>
      <label>
        Sensibilidad mouse
        <input id="optMouseSensitivity" type="range" min="0.4" max="2.5" step="0.05" />
        <span id="optMouseSensitivityValue">1.00</span>
      </label>
      <label>
        Volumen maestro
        <input id="optMasterVolume" type="range" min="0" max="1" step="0.01" />
        <span id="optMasterVolumeValue">100%</span>
      </label>
      <label>
        Volumen musica
        <input id="optMusicVolume" type="range" min="0" max="1" step="0.01" />
        <span id="optMusicVolumeValue">100%</span>
      </label>
      <label>
        Volumen efectos
        <input id="optSfxVolume" type="range" min="0" max="1" step="0.01" />
        <span id="optSfxVolumeValue">100%</span>
      </label>
      <label>
        FOV
        <input id="optFov" type="range" min="60" max="100" step="1" />
        <span id="optFovValue">75</span>
      </label>
      <label class="checkbox-line">
        <input id="optShowPerf" type="checkbox" />
        Mostrar panel FPS/latencia por defecto
      </label>
      <div class="options-actions">
        <button id="optResumeBtn" type="button">Volver al juego</button>
        <button id="optLeaveLobbyBtn" type="button">Volver al lobby</button>
        <button id="optCollisionViewBtn" type="button">Colisiones: OFF</button>
      </div>
      <p class="options-hint">ESC: abrir/cerrar opciones</p>
    </div>
  </div>
`;

const bootLoader = document.querySelector('#bootLoader');
const bootLoaderText = document.querySelector('#bootLoaderText');
const bootLoaderFill = document.querySelector('#bootLoaderFill');
const bootLoaderPercent = document.querySelector('#bootLoaderPercent');
const nameGate = document.querySelector('#nameGate');
const nameGateInput = document.querySelector('#nameGateInput');
const nameGateSubmitBtn = document.querySelector('#nameGateSubmitBtn');
const nameGateError = document.querySelector('#nameGateError');
const lobbySection = document.querySelector('#lobby');
const connectionStatus = document.querySelector('#connectionStatus');
const playerNameInput = document.querySelector('#playerName');
const playerNameBadge = document.querySelector('#playerNameBadge');
const characterSelect = document.querySelector('#characterSelect');
const characterPreview = document.querySelector('#characterPreview');
const refreshRoomsBtn = document.querySelector('#refreshRoomsBtn');
const createVersusBtn = document.querySelector('#createVersusBtn');
const profileLogoutBtn = document.querySelector('#profileLogoutBtn');
const mainPortalLink = document.querySelector('#mainPortalLink');
const lobbyMusicVolume = document.querySelector('#lobbyMusicVolume');
const lobbyMusicVolumeValue = document.querySelector('#lobbyMusicVolumeValue');
const roomList = document.querySelector('#roomList');
const lobbyError = document.querySelector('#lobbyError');
const lobbyUsersList = document.querySelector('#lobbyUsersList');
const lobbyChatLog = document.querySelector('#lobbyChatLog');
const lobbyChatInput = document.querySelector('#lobbyChatInput');
const lobbyChatSendBtn = document.querySelector('#lobbyChatSendBtn');
const versusLobby = document.querySelector('#versusLobby');
const versusLobbyMusicVolume = document.querySelector('#versusLobbyMusicVolume');
const versusLobbyMusicVolumeValue = document.querySelector('#versusLobbyMusicVolumeValue');
const versusRoomInfo = document.querySelector('#versusRoomInfo');
const versusTypeSelect = document.querySelector('#versusTypeSelect');
const versusWaitingInfo = document.querySelector('#versusWaitingInfo');
const versusLeftPlayers = document.querySelector('#versusLeftPlayers');
const versusRightPlayers = document.querySelector('#versusRightPlayers');
const versusHint = document.querySelector('#versusHint');
const versusReadyBtn = document.querySelector('#versusReadyBtn');
const versusStartBtn = document.querySelector('#versusStartBtn');
const versusLeaveBtn = document.querySelector('#versusLeaveBtn');
const versusChatLog = document.querySelector('#versusChatLog');
const versusChatInput = document.querySelector('#versusChatInput');
const versusChatSendBtn = document.querySelector('#versusChatSendBtn');
const matchInfo = document.querySelector('#matchInfo');
const respawnScreen = document.querySelector('#respawnScreen');
const respawnCounter = document.querySelector('#respawnCounter');
const winnerScreen = document.querySelector('#winnerScreen');
const winnerText = document.querySelector('#winnerText');
const winnerCounter = document.querySelector('#winnerCounter');
const damageOverlay = document.querySelector('#damageOverlay');
const damageIndicator = document.querySelector('#damageIndicator');
const scoreboard = document.querySelector('#scoreboard');
const scoreboardBody = document.querySelector('#scoreboardBody');
const healthStat = document.querySelector('#healthStat');
const shieldStat = document.querySelector('#shieldStat');
const ammoStat = document.querySelector('#ammoStat');
const specialStat = document.querySelector('#specialStat');
const healthSideLabel = document.querySelector('#healthSideLabel');
const shieldSideLabel = document.querySelector('#shieldSideLabel');
const ammoSideLabel = document.querySelector('#ammoSideLabel');
const abilityHud = document.querySelector('#abilityHud');
const abilityCooldownText = document.querySelector('#abilityCooldownText');
const abilityCooldownFill = document.querySelector('#abilityCooldownFill');
const healthBarFill = document.querySelector('#healthBarFill');
const shieldBarFill = document.querySelector('#shieldBarFill');
const ammoBarFill = document.querySelector('#ammoBarFill');
const teamScoreHud = document.querySelector('#teamScoreHud');
const teamScoreRed = document.querySelector('#teamScoreRed');
const teamScoreBlue = document.querySelector('#teamScoreBlue');
const teamScoreTarget = document.querySelector('#teamScoreTarget');
const stats = document.querySelector('#stats');
const roomHud = document.querySelector('#roomHud');
const stateHud = document.querySelector('#stateHud');
const weatherHud = document.querySelector('#weatherHud');
const playersHud = document.querySelector('#playersHud');
const perfPanel = document.querySelector('#perfPanel');
const fpsValue = document.querySelector('#fpsValue');
const frameMsValue = document.querySelector('#frameMsValue');
const latencyValue = document.querySelector('#latencyValue');
const ackRttValue = document.querySelector('#ackRttValue');
const shotAckValue = document.querySelector('#shotAckValue');
const wsOutValue = document.querySelector('#wsOutValue');
const moveFlowValue = document.querySelector('#moveFlowValue');
const drawCallsValue = document.querySelector('#drawCallsValue');
const trianglesValue = document.querySelector('#trianglesValue');
const geometriesValue = document.querySelector('#geometriesValue');
const texturesValue = document.querySelector('#texturesValue');
const vfxValue = document.querySelector('#vfxValue');
const predErrValue = document.querySelector('#predErrValue');
const corrRateValue = document.querySelector('#corrRateValue');
const corrSplitValue = document.querySelector('#corrSplitValue');
const lateAckRateValue = document.querySelector('#lateAckRateValue');
const remoteNetWindowValue = document.querySelector('#remoteNetWindowValue');
const corrStreakValue = document.querySelector('#corrStreakValue');
const localSpeedValue = document.querySelector('#localSpeedValue');
const collisionBypassValue = document.querySelector('#collisionBypassValue');
const mapSyncValue = document.querySelector('#mapSyncValue');
const perfGoalValue = document.querySelector('#perfGoalValue');
const runtimeHealthValue = document.querySelector('#runtimeHealthValue');
const hostControls = document.querySelector('#hostControls');
const startGameBtn = document.querySelector('#startGameBtn');
const endGameBtn = document.querySelector('#endGameBtn');
const leaveRoomHudBtn = document.querySelector('#leaveRoomHudBtn');
const chatFeed = document.querySelector('#chatFeed');
const chatPanel = document.querySelector('#chatPanel');
const chatLog = document.querySelector('#chatLog');
const killFeed = document.querySelector('#killFeed');
const chatInputWrap = document.querySelector('#chatInputWrap');
const chatInput = document.querySelector('#chatInput');
const crosshair = document.querySelector('#crosshair');
const mobileControls = document.querySelector('#mobileControls');
const mobileLookZone = document.querySelector('#mobileLookZone');
const mobileJoystick = document.querySelector('#mobileJoystick');
const mobileJoystickThumb = document.querySelector('#mobileJoystickThumb');
const mobileFireBtn = document.querySelector('#mobileFireBtn');
const mobileSpecialBtn = document.querySelector('#mobileSpecialBtn');
const mobileJumpBtn = document.querySelector('#mobileJumpBtn');
const mobileOptionsBtn = document.querySelector('#mobileOptionsBtn');
const mobileFullscreenPrompt = document.querySelector('#mobileFullscreenPrompt');
const mobileFsAcceptBtn = document.querySelector('#mobileFsAcceptBtn');
const mobileFsSkipBtn = document.querySelector('#mobileFsSkipBtn');
const teamAimIndicator = document.querySelector('#teamAimIndicator');
const teamMiniMap = document.querySelector('#teamMiniMap');
const optionsScreen = document.querySelector('#optionsScreen');
const optMouseSensitivity = document.querySelector('#optMouseSensitivity');
const optMouseSensitivityValue = document.querySelector('#optMouseSensitivityValue');
const optMasterVolume = document.querySelector('#optMasterVolume');
const optMasterVolumeValue = document.querySelector('#optMasterVolumeValue');
const optMusicVolume = document.querySelector('#optMusicVolume');
const optMusicVolumeValue = document.querySelector('#optMusicVolumeValue');
const optSfxVolume = document.querySelector('#optSfxVolume');
const optSfxVolumeValue = document.querySelector('#optSfxVolumeValue');
const optFov = document.querySelector('#optFov');
const optFovValue = document.querySelector('#optFovValue');
const optShowPerf = document.querySelector('#optShowPerf');
const optResumeBtn = document.querySelector('#optResumeBtn');
const optLeaveLobbyBtn = document.querySelector('#optLeaveLobbyBtn');
const optCollisionViewBtn = document.querySelector('#optCollisionViewBtn');

const state = {
  ws: null,
  self: null,
  rooms: [],
  joinedRoom: null,
  profileReady: false,
  lobbyUsers: [],
  remotePlayers: new Map(),
  lastStateSentAt: 0,
  showMatchInfo: false,
  showScoreboard: false,
  showPerf: false,
  showHitboxDebug: false,
  showCollisionOnly: false,
  fps: 0,
  latencyMs: null,
};
const renderPerfStats = {
  drawCalls: 0,
  triangles: 0,
  geometries: 0,
  textures: 0,
  vfx: 0,
};
const tuningPerfStats = {
  frameMsSamples: [],
  ackRttSamples: [],
  shotAckSamples: [],
  shotAcksInWindow: 0,
  shotAcksPerSec: 0,
  wsOutMsgsInWindow: 0,
  wsOutBytesInWindow: 0,
  wsOutMsgsPerSec: 0,
  wsOutKbps: 0,
  moveMsgsInWindow: 0,
  moveMsgsPerSec: 0,
  softCorrectionsInWindow: 0,
  softCorrectionsPerSec: 0,
  hardCorrectionsInWindow: 0,
  hardCorrectionsPerSec: 0,
  correctionStreak: 0,
  correctionStreakMax: 0,
  lastCorrectionAt: 0,
  lastFrameAt: performance.now(),
  localSpeed: 0,
  freezeEventsInWindow: 0,
  freezeEventsPerSec: 0,
};
const competitiveTargets = {
  maxCorrectionsPerSec: 6,
  maxPredErrP95: 2,
};
const runtimeHealth = {
  animateErrors: 0,
  lastAnimateErrorAt: 0,
  lastLoggedAt: 0,
  webglContextLosses: 0,
  freezeWarnUntil: 0,
  freezeSample: {
    at: 0,
    x: 0,
    z: 0,
  },
};

const chatMessages = [];
const maxChatMessages = 40;
const chatMessageTtlMs = 8000;
const killFeedMessages = [];
const maxKillFeedMessages = 8;
const killFeedMessageTtlMs = 7000;
const lobbyChatMessages = [];
const maxLobbyChatMessages = 80;
const versusChatMessages = [];
const maxVersusChatMessages = 60;
let isChatTyping = false;
let isOptionsOpen = false;
let hitboxDebugBeforeCollisionOnly = false;
const settingsStorageKey = 'koketria_settings_v1';
const playerNameStorageKey = 'koketria_player_name_v1';
const settings = {
  mouseSensitivity: 1,
  masterVolume: 1,
  musicVolume: 1,
  sfxVolume: 1,
  fov: 75,
  showPerfByDefault: false,
};
const battleThemeIds = ['battle1', 'battle2', 'battle3'];
const mobileInput = {
  enabled: false,
  active: false,
  moveTouchId: null,
  lookTouchId: null,
  movePointerId: null,
  lookPointerId: null,
  moveX: 0,
  moveY: 0,
  lookLastX: 0,
  lookLastY: 0,
};
let mobileFullscreenPromptDismissed = false;
let mobileFullscreenPromptActionLockUntil = 0;

const clearMovementKeys = () => {
  keys.KeyW = false;
  keys.KeyA = false;
  keys.KeyS = false;
  keys.KeyD = false;
  keys.Space = false;
};

const resetMobileInput = () => {
  mobileInput.moveTouchId = null;
  mobileInput.lookTouchId = null;
  mobileInput.movePointerId = null;
  mobileInput.lookPointerId = null;
  mobileInput.moveX = 0;
  mobileInput.moveY = 0;
  isFiring = false;
  keys.KeyW = false;
  keys.KeyA = false;
  keys.KeyS = false;
  keys.KeyD = false;
  if (mobileJoystickThumb) {
    mobileJoystickThumb.style.transform = 'translate(-50%, -50%)';
  }
};

const detectMobileControlsEnabled = () => {
  const userAgent = String(navigator.userAgent || '');
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    || window.matchMedia('(any-pointer: coarse)').matches;
  const hasFineHoverPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const mobileUserAgent = /android|iphone|ipad|ipod|mobile/i.test(userAgent);
  const touchPoints = Number(navigator.maxTouchPoints || navigator.msMaxTouchPoints || 0);
  const smallScreen = Math.min(window.innerWidth, window.innerHeight) <= 1024;
  if (mobileUserAgent) {
    return true;
  }
  return !hasFineHoverPointer && smallScreen && (coarsePointer || touchPoints > 0);
};

const isMobileChromeForFullscreen = () => {
  const userAgent = String(navigator.userAgent || '');
  const isAndroid = /android/i.test(userAgent);
  const isChrome = /chrome\//i.test(userAgent);
  const isExcluded = /edga|opr|samsungbrowser|ucbrowser|yabrowser|duckduckgo|firefox|fxios/i.test(userAgent);
  return isAndroid && isChrome && !isExcluded;
};

const isFullscreenActive = () => {
  return Boolean(document.fullscreenElement || document.webkitFullscreenElement);
};

const hideMobileFullscreenPrompt = () => {
  if (mobileFullscreenPrompt) {
    mobileFullscreenPrompt.classList.add('hidden');
  }
};

const lockLandscapeIfPossible = async () => {
  try {
    if (screen.orientation?.lock) {
      await screen.orientation.lock('landscape');
    }
  } catch {
    // orientation lock depends on browser permissions/fullscreen support
  }
};

const requestMobileFullscreen = async () => {
  if (!isMobileChromeForFullscreen()) {
    return false;
  }
  if (isFullscreenActive()) {
    await lockLandscapeIfPossible();
    return true;
  }

  const targets = [document.documentElement, app, renderer?.domElement].filter(Boolean);
  for (let i = 0; i < targets.length; i += 1) {
    const target = targets[i];
    try {
      if (typeof target.requestFullscreen === 'function') {
        await target.requestFullscreen({ navigationUI: 'hide' });
      } else if (typeof target.webkitRequestFullscreen === 'function') {
        target.webkitRequestFullscreen();
      } else {
        continue;
      }
      await lockLandscapeIfPossible();
      return true;
    } catch {
      // Try next compatible element.
    }
  }
  return false;
};

const syncMobileFullscreenPrompt = () => {
  if (!mobileFullscreenPrompt) {
    return;
  }

  const isInGameRoom = Boolean(
    state.joinedRoom
    && state.joinedRoom.room
    && state.joinedRoom.room.status === 'in_game'
    && app.classList.contains('in-room'),
  );

  const shouldShow = mobileInput.enabled
    && isMobileChromeForFullscreen()
    && isInGameRoom
    && !isInVersusWaitingLobby()
    && !isFullscreenActive()
    && !mobileFullscreenPromptDismissed;

  mobileFullscreenPrompt.classList.toggle('hidden', !shouldShow);
};

const syncMobileControlsVisibility = () => {
  const wasActive = mobileInput.active;
  mobileInput.enabled = detectMobileControlsEnabled();
  const canShow = mobileInput.enabled
    && Boolean(state.joinedRoom)
    && app.classList.contains('in-room')
    && !isInVersusWaitingLobby()
    && !isOptionsOpen;
  mobileInput.active = canShow;
  if (!mobileControls) {
    return;
  }
  mobileControls.classList.toggle('hidden', !canShow);
  app.classList.toggle('mobile-input', canShow);
  if (!canShow && wasActive) {
    resetMobileInput();
  }
  syncMobileFullscreenPrompt();
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

const getPlayerNameById = (playerId) => {
  const id = String(playerId || '').trim();
  if (!id) {
    return 'Player';
  }
  if (state.self && String(state.self.id || '') === id) {
    return sanitizePlayerName(state.self.name || 'Tú') || 'Tú';
  }
  const remote = state.remotePlayers.get(id);
  if (remote && remote.name) {
    return sanitizePlayerName(remote.name) || 'Player';
  }
  const players = state.joinedRoom?.room?.players;
  if (Array.isArray(players)) {
    const found = players.find((player) => String(player?.id || '') === id);
    if (found && found.name) {
      return sanitizePlayerName(found.name) || 'Player';
    }
  }
  return 'Player';
};

const renderKillFeed = () => {
  if (!killFeed) {
    return;
  }
  const now = Date.now();
  for (let i = killFeedMessages.length - 1; i >= 0; i -= 1) {
    if (now - killFeedMessages[i].ts > killFeedMessageTtlMs) {
      killFeedMessages.splice(i, 1);
    }
  }
  if (killFeedMessages.length <= 0) {
    killFeed.innerHTML = '';
    killFeed.classList.remove('open');
    return;
  }
  killFeed.classList.add('open');
  killFeed.innerHTML = killFeedMessages.map((entry) => {
    const killerSelf = entry.killerId && state.self && entry.killerId === state.self.id ? ' (Tú)' : '';
    const victimSelf = entry.victimId && state.self && entry.victimId === state.self.id ? ' (Tú)' : '';
    return `<p><strong>${entry.killerName}${killerSelf}</strong> eliminó a <strong>${entry.victimName}${victimSelf}</strong></p>`;
  }).join('');
};

const pushKillFeedMessage = (killerId, victimId) => {
  const normalizedKillerId = String(killerId || '').trim();
  const normalizedVictimId = String(victimId || '').trim();
  if (!normalizedVictimId) {
    return;
  }
  const killerName = getPlayerNameById(normalizedKillerId);
  const victimName = getPlayerNameById(normalizedVictimId);
  killFeedMessages.push({
    killerId: normalizedKillerId,
    victimId: normalizedVictimId,
    killerName,
    victimName,
    ts: Date.now(),
  });
  if (killFeedMessages.length > maxKillFeedMessages) {
    killFeedMessages.splice(0, killFeedMessages.length - maxKillFeedMessages);
  }
  renderKillFeed();
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

const renderVersusChat = () => {
  if (!versusChatLog) {
    return;
  }
  const recent = versusChatMessages.slice(-12);
  versusChatLog.innerHTML = recent.map((msg) => {
    const selfTag = msg.isSelf ? ' (Tú)' : '';
    return `<p><strong>${msg.playerName}${selfTag}:</strong> ${msg.text}</p>`;
  }).join('');
  versusChatLog.scrollTop = versusChatLog.scrollHeight;
};

const pushVersusChatMessage = (playerName, text) => {
  if (!text) {
    return;
  }
  const isSelf = Boolean(state.self && String(playerName || '') === String(state.self.name || ''));
  versusChatMessages.push({
    playerName: String(playerName || 'Player'),
    text: String(text || ''),
    isSelf,
    ts: Date.now(),
  });
  if (versusChatMessages.length > maxVersusChatMessages) {
    versusChatMessages.splice(0, versusChatMessages.length - maxVersusChatMessages);
  }
  renderVersusChat();
};

setInterval(() => {
  if (chatMessages.length > 0 && !isChatTyping) {
    renderChat();
  }
  if (killFeedMessages.length > 0) {
    renderKillFeed();
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

const setNameGateError = (message = '') => {
  if (!nameGateError) {
    return;
  }
  if (!message) {
    nameGateError.classList.add('hidden');
    nameGateError.textContent = '';
    return;
  }
  nameGateError.classList.remove('hidden');
  nameGateError.textContent = message;
};

const sanitizePlayerName = (value) => {
  const trimmed = String(value || '').trim().replace(/\s+/g, ' ');
  return trimmed.slice(0, 24);
};

const getStoredPlayerName = () => sanitizePlayerName(localStorage.getItem(playerNameStorageKey) || '');

const renderPlayerNameBadge = () => {
  if (!playerNameBadge) {
    return;
  }
  const fallback = sanitizePlayerName(playerNameInput?.value || '');
  const name = sanitizePlayerName(state.self?.name || fallback || 'Sin nombre');
  playerNameBadge.textContent = `Jugador: ${name}`;
};

const renderLobbyUsers = () => {
  if (!lobbyUsersList) {
    return;
  }
  const users = Array.isArray(state.lobbyUsers) ? state.lobbyUsers : [];
  if (users.length === 0) {
    lobbyUsersList.innerHTML = '<p class="room-empty">No hay jugadores esperando.</p>';
    return;
  }
  lobbyUsersList.innerHTML = users.map((user) => {
    const name = sanitizePlayerName(user?.name || 'Player');
    const me = state.self && String(user?.id || '') === String(state.self.id || '') ? ' (Tú)' : '';
    return `<p><strong>${name}${me}</strong></p>`;
  }).join('');
};

const renderLobbyChat = () => {
  if (!lobbyChatLog) {
    return;
  }
  const recent = lobbyChatMessages.slice(-18);
  lobbyChatLog.innerHTML = recent.map((msg) => {
    const selfTag = msg.isSelf ? ' (Tú)' : '';
    return `<p><strong>${msg.playerName}${selfTag}:</strong> ${msg.text}</p>`;
  }).join('');
  lobbyChatLog.scrollTop = lobbyChatLog.scrollHeight;
};

const pushLobbyChatMessage = (playerName, text) => {
  const normalizedText = String(text || '').trim();
  if (!normalizedText) {
    return;
  }
  const normalizedName = sanitizePlayerName(playerName || 'Player');
  const isSelf = Boolean(state.self && normalizedName === sanitizePlayerName(state.self.name || ''));
  lobbyChatMessages.push({
    playerName: normalizedName,
    text: normalizedText.slice(0, 180),
    isSelf,
    ts: Date.now(),
  });
  if (lobbyChatMessages.length > maxLobbyChatMessages) {
    lobbyChatMessages.splice(0, lobbyChatMessages.length - maxLobbyChatMessages);
  }
  renderLobbyChat();
};

const setProfileReady = (value) => {
  state.profileReady = Boolean(value);
  syncLobbyScreens();
};

const logoutToNameGate = () => {
  localStorage.removeItem(playerNameStorageKey);
  setProfileReady(false);
  if (nameGateInput) {
    nameGateInput.value = '';
  }
  if (playerNameInput) {
    playerNameInput.value = '';
  }
  if (lobbyChatInput) {
    lobbyChatInput.value = '';
  }
  setNameGateError();
  renderPlayerNameBadge();
  if (nameGateInput) {
    nameGateInput.focus();
  }
};

const getCurrentPlayerName = () => sanitizePlayerName(playerNameInput?.value || state.self?.name || '');

const canUseProfileForLobby = () => {
  const name = getCurrentPlayerName();
  return name.length >= 2;
};

const clampSetting = (value, min, max, fallback) => {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    return fallback;
  }
  return Math.max(min, Math.min(max, num));
};

const loadSettings = () => {
  try {
    const raw = localStorage.getItem(settingsStorageKey);
    if (!raw) {
      return;
    }
    const parsed = JSON.parse(raw);
    settings.mouseSensitivity = clampSetting(parsed.mouseSensitivity, 0.4, 2.5, settings.mouseSensitivity);
    settings.masterVolume = clampSetting(parsed.masterVolume, 0, 1, settings.masterVolume);
    settings.musicVolume = clampSetting(parsed.musicVolume, 0, 1, settings.musicVolume);
    settings.sfxVolume = clampSetting(parsed.sfxVolume, 0, 1, settings.sfxVolume);
    settings.fov = clampSetting(parsed.fov, 60, 100, settings.fov);
    settings.showPerfByDefault = Boolean(parsed.showPerfByDefault);
  } catch {
    // ignore persisted settings parse errors
  }
};

const saveSettings = () => {
  localStorage.setItem(settingsStorageKey, JSON.stringify(settings));
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
  refreshBackgroundMusic();
  if (!value && document.pointerLockElement) {
    document.exitPointerLock();
  }
  if (!value) {
    closeOptionsMenu();
    chatMessages.length = 0;
    renderChat();
    closeChatInput();
    chatFeed.classList.remove('open');
    resetMobileInput();
    mobileFullscreenPromptDismissed = false;
    hideMobileFullscreenPrompt();
  }
  syncMobileControlsVisibility();
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

  const rowHtml = (player) => {
    const me = state.self && player.id === state.self.id ? ' (Tú)' : '';
    return `<tr><td>${player.name}${me}</td><td>${player.kills || 0}</td><td>${player.deaths || 0}</td></tr>`;
  };

  const room = state.joinedRoom.room || {};
  const isVersus2v2 = isVersusRoom(room) && String(room.versusType || '').toLowerCase() === '2v2';
  if (isVersus2v2) {
    const redPlayers = players.filter((player) => normalizePlayerTeam(player.team) === 'red');
    const bluePlayers = players.filter((player) => normalizePlayerTeam(player.team) === 'blue');
    const unknownPlayers = players.filter((player) => !normalizePlayerTeam(player.team));

    const renderTeamRows = (teamClass, teamLabel, teamPlayers) => {
      const rows = [];
      rows.push(`<tr class="scoreboard-team-row ${teamClass}"><td colspan="3">${teamLabel}</td></tr>`);
      if (teamPlayers.length <= 0) {
        rows.push('<tr class="scoreboard-empty-row"><td colspan="3">Esperando jugador...</td></tr>');
      } else {
        for (let i = 0; i < teamPlayers.length; i += 1) {
          rows.push(rowHtml(teamPlayers[i]));
        }
      }
      return rows.join('');
    };

    const html = [
      renderTeamRows('team-red', 'Equipo Rojo', redPlayers),
      renderTeamRows('team-blue', 'Equipo Azul', bluePlayers),
    ];
    if (unknownPlayers.length > 0) {
      html.push('<tr class="scoreboard-team-row team-unknown"><td colspan="3">Sin equipo</td></tr>');
      for (let i = 0; i < unknownPlayers.length; i += 1) {
        html.push(rowHtml(unknownPlayers[i]));
      }
    }
    scoreboardBody.innerHTML = html.join('');
  } else {
    scoreboardBody.innerHTML = players.map(rowHtml).join('');
  }

  scoreboard.classList.remove('hidden');
};

const renderPerfPanel = () => {
  if (!state.joinedRoom || !state.showPerf) {
    perfPanel.classList.add('hidden');
    return;
  }

  fpsValue.textContent = String(state.fps);
  const frameAvg = tuningPerfStats.frameMsSamples.length > 0
    ? tuningPerfStats.frameMsSamples.reduce((sum, value) => sum + value, 0) / tuningPerfStats.frameMsSamples.length
    : 0;
  const frameP95 = percentileFromSamples(tuningPerfStats.frameMsSamples, 0.95);
  frameMsValue.textContent = `${frameAvg.toFixed(1)} / ${frameP95.toFixed(1)}`;
  latencyValue.textContent = Number.isFinite(state.latencyMs)
    ? `${Math.round(state.latencyMs)} ms`
    : '--';
  const ackAvg = tuningPerfStats.ackRttSamples.length > 0
    ? tuningPerfStats.ackRttSamples.reduce((sum, value) => sum + value, 0) / tuningPerfStats.ackRttSamples.length
    : 0;
  const ackP95 = percentileFromSamples(tuningPerfStats.ackRttSamples, 0.95);
  const shotAckAvg = tuningPerfStats.shotAckSamples.length > 0
    ? tuningPerfStats.shotAckSamples.reduce((sum, value) => sum + value, 0) / tuningPerfStats.shotAckSamples.length
    : 0;
  const shotAckP95 = percentileFromSamples(tuningPerfStats.shotAckSamples, 0.95);
  ackRttValue.textContent = `${ackAvg.toFixed(1)} / ${ackP95.toFixed(1)}`;
  shotAckValue.textContent = `${shotAckAvg.toFixed(1)} / ${shotAckP95.toFixed(1)} / ${pendingShotAcks.size} / ${tuningPerfStats.shotAcksPerSec.toFixed(1)}`;
  wsOutValue.textContent = `${tuningPerfStats.wsOutMsgsPerSec.toFixed(1)} / ${tuningPerfStats.wsOutKbps.toFixed(1)}`;
  moveFlowValue.textContent = `${tuningPerfStats.moveMsgsPerSec.toFixed(1)} / ${pendingMoveInputs.length}`;
  drawCallsValue.textContent = String(Math.round(renderPerfStats.drawCalls));
  trianglesValue.textContent = String(Math.round(renderPerfStats.triangles));
  geometriesValue.textContent = String(Math.round(renderPerfStats.geometries));
  texturesValue.textContent = String(Math.round(renderPerfStats.textures));
  vfxValue.textContent = String(Math.round(renderPerfStats.vfx));
  const samples = reconcileStats.errorSamples;
  const avgErr = samples.length > 0
    ? samples.reduce((sum, value) => sum + value, 0) / samples.length
    : 0;
  const p95Err = percentileFromSamples(samples, 0.95);
  predErrValue.textContent = `${avgErr.toFixed(2)} / ${p95Err.toFixed(2)}`;
  corrRateValue.textContent = reconcileStats.correctionsPerSec.toFixed(2);
  corrSplitValue.textContent = `${tuningPerfStats.softCorrectionsPerSec.toFixed(2)} / ${tuningPerfStats.hardCorrectionsPerSec.toFixed(2)}`;
  lateAckRateValue.textContent = reconcileStats.lateAcksPerSec.toFixed(2);
  remoteNetWindowValue.textContent = `${Math.round(remoteInterpolationDynamicMs)} / ${Math.round(remoteExtrapolationDynamicMs)}`;
  corrStreakValue.textContent = `${tuningPerfStats.correctionStreak} / ${tuningPerfStats.correctionStreakMax}`;
  localSpeedValue.textContent = tuningPerfStats.localSpeed.toFixed(2);
  collisionBypassValue.textContent = String(Math.max(0, Math.ceil(localCollisionBypassUntil - performance.now())));
  const serverSeed = Number.isFinite(Number(state.joinedRoom?.room?.mapSeed))
    ? Number(state.joinedRoom.room.mapSeed)
    : null;
  const seedMatch = serverSeed !== null && Number.isFinite(currentMapSeed) && Number(currentMapSeed) === serverSeed;
  const hasServerHash = Boolean(serverMapCollisionHash);
  const hashMatch = hasServerHash && currentMapCollisionHash === serverMapCollisionHash;
  if (hasServerHash) {
    mapSyncValue.textContent = (seedMatch && hashMatch)
      ? `OK (${String(serverMapCollisionHash).slice(0, 8)})`
      : `MISMATCH seed:${seedMatch ? 'ok' : 'bad'} hash:${hashMatch ? 'ok' : 'bad'}`;
  } else {
    mapSyncValue.textContent = seedMatch ? 'SEED OK / HASH N/A' : 'SEED MISMATCH';
  }
  const corrOk = reconcileStats.correctionsPerSec < competitiveTargets.maxCorrectionsPerSec;
  const predOk = p95Err < competitiveTargets.maxPredErrP95;
  const freezeOk = tuningPerfStats.freezeEventsPerSec < 0.1 && performance.now() >= runtimeHealth.freezeWarnUntil;
  perfGoalValue.textContent = (corrOk && predOk && freezeOk)
    ? 'OK'
    : `WARN corr:${corrOk ? 'ok' : 'bad'} pred:${predOk ? 'ok' : 'bad'} freeze:${freezeOk ? 'ok' : 'bad'}`;
  const runtimeOk = runtimeHealth.animateErrors <= 0 && runtimeHealth.webglContextLosses <= 0;
  runtimeHealthValue.textContent = runtimeOk
    ? 'OK'
    : `WARN errors:${runtimeHealth.animateErrors} contextLost:${runtimeHealth.webglContextLosses}`;
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
  stars.visible = value === 'night' || value === 'snow';
  lowSparks.visible = false;
  moon.visible = false;
  secondMoon.visible = false;

  if (value === 'sunny') {
    scene.background = new THREE.Color(0xb7dfff);
    scene.fog.color.set(0xb7dfff);
    scene.fog.near = 90;
    scene.fog.far = 400;
    ambient.intensity = 0.74;
    keyLight.intensity = 1.2;
    keyLight.color.set(0xfff2c2);
    lowSparkMat.opacity = 0.35;
  } else if (value === 'rainy') {
    scene.background = new THREE.Color(0x5b6670);
    scene.fog.color.set(0x5b6670);
    scene.fog.near = 10;
    scene.fog.far = 95;
    ambient.intensity = 0.26;
    keyLight.intensity = 0.42;
    keyLight.color.set(0x8bb7d7);
    lowSparkMat.opacity = 0.25;
  } else if (value === 'snow') {
    scene.background = new THREE.Color(0xd8e9f4);
    scene.fog.color.set(0xd8e9f4);
    scene.fog.near = 26;
    scene.fog.far = 200;
    ambient.intensity = 0.65;
    keyLight.intensity = 0.9;
    keyLight.color.set(0xe7f6ff);
    lowSparkMat.opacity = 0.42;
  } else {
    scene.background = new THREE.Color(0x070b14);
    scene.fog.color.set(0x070b14);
    scene.fog.near = 16;
    scene.fog.far = 140;
    ambient.intensity = 0.26;
    keyLight.intensity = 0.38;
    keyLight.color.set(0x7f79c8);
    lowSparkMat.opacity = 0.6;
  }
};

const sendWs = (payload) => {
  if (!state.ws || state.ws.readyState !== WebSocket.OPEN) {
    setLobbyError('WebSocket no conectado');
    return;
  }
  const wire = JSON.stringify(payload);
  tuningPerfStats.wsOutMsgsInWindow += 1;
  tuningPerfStats.wsOutBytesInWindow += wire.length;
  if (payload?.type === 'player_move') {
    tuningPerfStats.moveMsgsInWindow += 1;
  }
  state.ws.send(wire);
};

let latencyProbeSeq = 0;
let pendingLatencyProbe = null;
let lastLatencyProbeAt = 0;
const latencyProbeIntervalMs = 2_000;
let fpsFrames = 0;
let fpsSampleStartedAt = performance.now();
let vfxQuality = 1;

const requestLatencyProbe = (force = false) => {
  void force;
  // Latencia ahora se mide server-driven con ping/pong.
};

const updatePerfMetrics = () => {
  const now = performance.now();
  if (pendingShotAcks.size > 0) {
    for (const [shotId, sentAt] of pendingShotAcks.entries()) {
      if (now - sentAt > 3000) {
        pendingShotAcks.delete(shotId);
      }
    }
  }
  const frameMs = Math.max(0, Math.min(250, now - tuningPerfStats.lastFrameAt));
  tuningPerfStats.lastFrameAt = now;
  if (frameMs > 0) {
    tuningPerfStats.frameMsSamples.push(frameMs);
    if (tuningPerfStats.frameMsSamples.length > 240) {
      tuningPerfStats.frameMsSamples.splice(0, tuningPerfStats.frameMsSamples.length - 240);
    }
  }
  tuningPerfStats.localSpeed = Math.sqrt((moveVelocity.x * moveVelocity.x) + (moveVelocity.z * moveVelocity.z));
  const wantsMove = Boolean(keys.KeyW || keys.KeyA || keys.KeyS || keys.KeyD);
  const freezeSample = runtimeHealth.freezeSample;
  if (freezeSample.at <= 0) {
    freezeSample.at = now;
    freezeSample.x = camera.position.x;
    freezeSample.z = camera.position.z;
  } else if (wantsMove && canPlay()) {
    const sampleElapsed = now - freezeSample.at;
    if (sampleElapsed >= 300) {
      const distance = Math.hypot(camera.position.x - freezeSample.x, camera.position.z - freezeSample.z);
      if (distance < 0.03 && tuningPerfStats.localSpeed > 6.5 && now >= localCollisionBypassUntil) {
        tuningPerfStats.freezeEventsInWindow += 1;
        runtimeHealth.freezeWarnUntil = now + 1800;
      }
      freezeSample.at = now;
      freezeSample.x = camera.position.x;
      freezeSample.z = camera.position.z;
    }
  } else {
    freezeSample.at = now;
    freezeSample.x = camera.position.x;
    freezeSample.z = camera.position.z;
  }
  if (tuningPerfStats.lastCorrectionAt > 0 && now - tuningPerfStats.lastCorrectionAt > 900) {
    tuningPerfStats.correctionStreak = 0;
  }

  fpsFrames += 1;
  const elapsed = now - fpsSampleStartedAt;

  if (elapsed >= 500) {
    state.fps = Math.max(0, Math.round((fpsFrames * 1000) / elapsed));
    reconcileStats.correctionsPerSec = (reconcileStats.correctionsInWindow * 1000) / elapsed;
    reconcileStats.lateAcksPerSec = (reconcileStats.lateAcksInWindow * 1000) / elapsed;
    tuningPerfStats.wsOutMsgsPerSec = (tuningPerfStats.wsOutMsgsInWindow * 1000) / elapsed;
    tuningPerfStats.wsOutKbps = ((tuningPerfStats.wsOutBytesInWindow * 8) / elapsed);
    tuningPerfStats.moveMsgsPerSec = (tuningPerfStats.moveMsgsInWindow * 1000) / elapsed;
    tuningPerfStats.shotAcksPerSec = (tuningPerfStats.shotAcksInWindow * 1000) / elapsed;
    tuningPerfStats.softCorrectionsPerSec = (tuningPerfStats.softCorrectionsInWindow * 1000) / elapsed;
    tuningPerfStats.hardCorrectionsPerSec = (tuningPerfStats.hardCorrectionsInWindow * 1000) / elapsed;
    tuningPerfStats.freezeEventsPerSec = (tuningPerfStats.freezeEventsInWindow * 1000) / elapsed;
    reconcileStats.correctionsInWindow = 0;
    reconcileStats.lateAcksInWindow = 0;
    tuningPerfStats.wsOutMsgsInWindow = 0;
    tuningPerfStats.wsOutBytesInWindow = 0;
    tuningPerfStats.moveMsgsInWindow = 0;
    tuningPerfStats.shotAcksInWindow = 0;
    tuningPerfStats.softCorrectionsInWindow = 0;
    tuningPerfStats.hardCorrectionsInWindow = 0;
    tuningPerfStats.freezeEventsInWindow = 0;
    const fps = state.fps;
    if (fps >= 58) {
      vfxQuality = 1;
    } else if (fps >= 48) {
      vfxQuality = 0.82;
    } else if (fps >= 38) {
      vfxQuality = 0.62;
    } else if (fps >= 30) {
      vfxQuality = 0.48;
    } else {
      vfxQuality = 0.34;
    }
    fpsFrames = 0;
    fpsSampleStartedAt = now;
    if (state.showPerf && state.joinedRoom) {
      renderPerfPanel();
    }
  }

};

const isVersusRoom = (room) => {
  return String(room?.mode || '').toLowerCase() === 'versusmatch';
};

const normalizePlayerTeam = (team) => {
  const value = String(team || '').trim().toLowerCase();
  if (value === 'red' || value === 'blue') {
    return value;
  }
  return null;
};

const shouldShowTeamMarkers = () => {
  return false;
};

const getTeamPalette = (team) => {
  const normalized = normalizePlayerTeam(team);
  if (normalized === 'red') {
    return {
      tracer: 0xff6b6b,
      impactA: 0xff9c9c,
      impactB: 0xff6b6b,
      label: 'Aliado',
    };
  }
  if (normalized === 'blue') {
    return {
      tracer: 0x66a4ff,
      impactA: 0xa8c8ff,
      impactB: 0x66a4ff,
      label: 'Enemigo',
    };
  }
  return {
    tracer: 0xa2ffae,
    impactA: 0xbff3ff,
    impactB: 0x7dff92,
    label: '-',
  };
};

const getAbilityPalette = (kind, team = null) => {
  void team;
  const key = String(kind || '').toLowerCase();
  if (key === 'holy') {
    return { tracer: 0xfff3c2, impactA: 0xfff7db, impactB: 0x9fe7ff };
  }
  if (key === 'hammer') {
    return { tracer: 0xffd77a, impactA: 0xfff0bc, impactB: 0x8fdfff };
  }
  if (key === 'poison') {
    return { tracer: 0x62ff7a, impactA: 0x9dffb0, impactB: 0x2ecf57 };
  }
  if (key === 'lunar') {
    return { tracer: 0x9fd8ff, impactA: 0xf0f9ff, impactB: 0x8fe9ff };
  }
  return getTeamPalette(team);
};

const getTeamByPlayerId = (playerId) => {
  const id = String(playerId || '');
  if (!id) {
    return null;
  }
  if (state.self && id === state.self.id) {
    return normalizePlayerTeam(localAvatar.team);
  }
  const entry = state.remotePlayers.get(id);
  return normalizePlayerTeam(entry?.team);
};

const getVersusScoreTarget = (room) => {
  const type = String(room?.versusType || '').trim().toLowerCase();
  if (type === '1v1') {
    return 5;
  }
  if (type === '2v2') {
    return 20;
  }
  return 20;
};

const getRespawnDurationSeconds = () => {
  if (state.joinedRoom && isVersusRoom(state.joinedRoom.room)) {
    return 3;
  }
  return 5;
};

const updateTeamScoreHud = () => {
  if (!teamScoreHud || !teamScoreRed || !teamScoreBlue || !teamScoreTarget) {
    return;
  }
  const room = state.joinedRoom?.room;
  const versusType = String(room?.versusType || '').toLowerCase();
  const isValidVersusType = versusType === '1v1' || versusType === '2v2';
  if (!state.joinedRoom || !isVersusRoom(room) || !isValidVersusType || room.status !== 'in_game') {
    teamScoreHud.classList.add('hidden');
    return;
  }

  let red = 0;
  let blue = 0;
  const players = Array.isArray(state.joinedRoom.players) ? state.joinedRoom.players : [];
  for (let i = 0; i < players.length; i += 1) {
    const player = players[i];
    const killsCount = Math.max(0, Number(player.kills || 0));
    const team = normalizePlayerTeam(player.team);
    if (team === 'red') {
      red += killsCount;
    } else if (team === 'blue') {
      blue += killsCount;
    }
  }
  const target = getVersusScoreTarget(room);
  teamScoreRed.textContent = `ROJO ${red}`;
  teamScoreBlue.textContent = `AZUL ${blue}`;
  teamScoreTarget.textContent = `META ${target}`;
  teamScoreHud.classList.remove('hidden');
};

const forceHideTeamModeUiIfNeeded = (room) => {
  if (!room) {
    return;
  }
  const roomMode = String(room.mode || 'freeforall').toLowerCase();
  if (roomMode !== 'versusmatch' && teamScoreHud) {
    teamScoreHud.classList.add('hidden');
  }
};

const syncModeUiClass = () => {
  const room = state.joinedRoom?.room;
  const isVersusMode = Boolean(room && isVersusRoom(room));
  app.classList.toggle('versus-mode', isVersusMode);
};

const isInVersusWaitingLobby = () => {
  return Boolean(state.joinedRoom && isVersusRoom(state.joinedRoom.room) && state.joinedRoom.room.status === 'waiting');
};

const syncLobbyScreens = () => {
  const bootHidden = !bootLoader || bootLoader.classList.contains('hidden');
  const showNameGate = bootHidden && !state.profileReady && !state.joinedRoom;
  const showVersusLobby = isInVersusWaitingLobby();
  if (nameGate) {
    nameGate.classList.toggle('hidden', !showNameGate);
  }
  if (versusLobby) {
    versusLobby.classList.toggle('hidden', !showVersusLobby);
  }
  if (lobbySection) {
    if (showNameGate || showVersusLobby) {
      lobbySection.classList.add('hidden');
    } else {
      lobbySection.classList.remove('hidden');
    }
  }
};

const syncVersusPlayerPreviews = () => {
  const nodes = document.querySelectorAll('.versus-player-model[data-preview-key]');
  const activeKeys = new Set();
  nodes.forEach((node) => {
    const key = String(node.dataset.previewKey || '').trim();
    const characterId = String(node.dataset.character || '').trim();
    if (!key) {
      return;
    }
    activeKeys.add(key);
    const existing = versusPreviewSlots.get(key);
    if (existing && existing.characterId === characterId && existing.renderer?.domElement?.parentElement === node) {
      return;
    }
    if (existing) {
      disposeVersusPreviewSlot(key);
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    const width = Math.max(60, node.clientWidth || 92);
    const height = Math.max(60, node.clientHeight || 92);
    renderer.setSize(width, height, false);
    node.innerHTML = '';
    node.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0xc8ffe2, 0x102010, 0.95);
    scene.add(hemi);
    const keyLight = new THREE.DirectionalLight(0xffffff, 0.85);
    keyLight.position.set(2.8, 4.8, 3.4);
    scene.add(keyLight);

    const slot = {
      key,
      characterId,
      node,
      renderer,
      scene,
      camera,
      mixer: null,
      model: null,
      rotateSpeed: 0.32 + (Math.random() * 0.2),
    };
    versusPreviewSlots.set(key, slot);

    if (!characterId) {
      return;
    }

    const mountCharacter = (resource) => {
      if (!resource?.loaded || !resource.scene || !versusPreviewSlots.has(key)) {
        return;
      }
      const current = versusPreviewSlots.get(key);
      if (!current || current.characterId !== characterId) {
        return;
      }
      const cloned = cloneSkinned(resource.scene);
      const box = new THREE.Box3().setFromObject(cloned);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      cloned.position.set(-center.x, -box.min.y, -center.z);
      current.scene.add(cloned);
      current.model = cloned;

      current.camera.position.set(0, Math.max(0.95, size.y * 0.62), Math.max(1.45, size.y * 0.9));
      current.camera.lookAt(0, Math.max(0.72, size.y * 0.45), 0);

      const clip = resolvePreviewClip(resource);
      if (clip) {
        const mixer = new THREE.AnimationMixer(cloned);
        const action = mixer.clipAction(clip);
        action.reset();
        action.setLoop(THREE.LoopRepeat, Infinity);
        action.play();
        current.mixer = mixer;
      }
    };

    const cached = characterResources.get(characterId);
    if (cached?.loaded && cached.scene) {
      mountCharacter(cached);
    } else {
      ensureCharacterResource(characterId).then((resource) => {
        mountCharacter(resource);
      });
    }
  });

  const existingKeys = [...versusPreviewSlots.keys()];
  for (let i = 0; i < existingKeys.length; i += 1) {
    if (!activeKeys.has(existingKeys[i])) {
      disposeVersusPreviewSlot(existingKeys[i]);
    }
  }
};

const renderVersusSlots = (container, players, slotCount, containerKey, options = {}) => {
  if (!container) {
    return false;
  }
  const { showOnlyActualPlayers = false } = options;
  const safePlayers = Array.isArray(players) ? players : [];
  const playerCount = Math.max(1, safePlayers.length);
  container.style.setProperty('--team-count', String(playerCount));
  const slots = showOnlyActualPlayers
    ? safePlayers.length
    : Math.max(1, Number(slotCount) || 1);
  const renderKeyParts = [String(containerKey || ''), String(slots)];
  const iterations = showOnlyActualPlayers ? safePlayers.length : slots;
  for (let i = 0; i < iterations; i += 1) {
    const player = safePlayers[i];
    if (player) {
      renderKeyParts.push(`${player.id}|${player.name}|${player.character || ''}|${normalizePlayerTeam(player.team) || ''}|${Boolean(player.ready)}`);
    } else {
      renderKeyParts.push('empty');
    }
  }
  const renderKey = renderKeyParts.join('::');
  if (container.dataset.renderKey === renderKey) {
    return false;
  }
  const rows = [];
  for (let i = 0; i < slots; i += 1) {
    const player = safePlayers[i];
    if (player) {
      const name = String(player.name || `Player ${i + 1}`);
      const character = getCharacterLabel(player.character || '-');
      const ready = Boolean(player.ready);
      const me = state.self && player.id === state.self.id;
      const team = normalizePlayerTeam(player.team);
      const switchLabel = team === 'red' ? 'Cambiar a Azul' : 'Cambiar a Rojo';
      rows.push(`
        <div class="versus-player">
          <div class="versus-player-model" data-preview-key="${container.id}-${i}" data-character="${String(player.character || '')}"></div>
          <strong>${name}</strong>
          <span>${character}</span>
          <span class="versus-ready ${ready ? 'on' : 'off'}">${ready ? 'Ready' : 'No Ready'}</span>
          ${me ? `<button class="versus-team-switch-btn" type="button" data-action="switch-team" data-player-id="${player.id}">${switchLabel}</button>` : ''}
        </div>
      `);
    } else if (!showOnlyActualPlayers) {
      rows.push(`
        <div class="versus-player empty">
          <div class="versus-player-model placeholder"></div>
          <strong>Esperando...</strong>
          <span>Slot libre</span>
        </div>
      `);
    }
  }
  container.innerHTML = rows.join('');
  container.dataset.renderKey = renderKey;
  const switchButtons = container.querySelectorAll('[data-action="switch-team"]');
  switchButtons.forEach((button) => {
    button.addEventListener('click', () => {
      sendWs({ type: 'versus_switch_team' });
    });
  });
  return true;
};

const updateVersusLobbyUi = () => {
  if (!versusLobby) {
    return;
  }
  if (!isInVersusWaitingLobby()) {
    if (state.joinedRoom?.room?.mode === 'versusmatch' && state.joinedRoom?.room?.status === 'in_game' && versusChatMessages.length > 0) {
      versusChatMessages.length = 0;
      renderVersusChat();
    }
    versusLobby.classList.add('hidden');
    clearVersusPreviewSlots();
    return;
  }
  const room = state.joinedRoom.room;
  const currentPlayers = Number(state.joinedRoom.players?.length || 0);
  const requiredPlayers = Number(room.requiredPlayers || 0);
  const maxPlayers = Number(room.maxPlayers || 4);
  const versusType = String(room.versusType || '');
  const isHostPlayer = isHost();
  const hasType = versusType === '1v1' || versusType === '2v2';
  const players = Array.isArray(state.joinedRoom.players) ? [...state.joinedRoom.players] : [];
  players.sort((a, b) => {
    if (a.id === state.self?.id) return -1;
    if (b.id === state.self?.id) return 1;
    return String(a.name || '').localeCompare(String(b.name || ''));
  });
  const teamSize = hasType ? (versusType === '2v2' ? 2 : 1) : Math.max(1, Math.ceil(maxPlayers / 2));
  let leftPlayers = players.filter((p) => normalizePlayerTeam(p.team) === 'red');
  let rightPlayers = players.filter((p) => normalizePlayerTeam(p.team) === 'blue');
  if (leftPlayers.length === 0 && rightPlayers.length === 0) {
    leftPlayers = players.slice(0, teamSize);
    rightPlayers = players.slice(teamSize, teamSize * 2);
  }
  const leftCount = leftPlayers.length;
  const rightCount = rightPlayers.length;
  const layoutKey = `${versusType}|${teamSize}|${leftPlayers.map((p) => `${p.id}:${p.character || ''}:${normalizePlayerTeam(p.team) || '-'}`).join(',')}|${rightPlayers.map((p) => `${p.id}:${p.character || ''}:${normalizePlayerTeam(p.team) || '-'}`).join(',')}`;
  const enoughPlayers = hasType && requiredPlayers > 0 && currentPlayers === requiredPlayers;
  const requiredTeamSize = hasType ? (versusType === '2v2' ? 2 : 1) : 0;
  const redCount = players.filter((player) => normalizePlayerTeam(player.team) === 'red').length;
  const blueCount = players.filter((player) => normalizePlayerTeam(player.team) === 'blue').length;
  const teamsBalanced = hasType && redCount === requiredTeamSize && blueCount === requiredTeamSize;
  const readyPlayers = players.filter((player) => Boolean(player.ready)).length;
  const allReady = enoughPlayers && players.every((player) => Boolean(player.ready));
  const selfPlayer = state.self ? players.find((player) => player.id === state.self.id) : null;
  const selfReady = Boolean(selfPlayer?.ready);
  versusLobby.classList.remove('hidden');
  versusRoomInfo.textContent = `Sala: ${room.name} (${room.id})`;
  versusTypeSelect.value = hasType ? versusType : '';
  versusTypeSelect.disabled = !isHostPlayer;
  versusWaitingInfo.textContent = hasType
    ? `Esperando: ${currentPlayers}/${requiredPlayers} (${versusType}) | Equipos: Rojo ${redCount}/${requiredTeamSize} - Azul ${blueCount}/${requiredTeamSize} | Ready: ${readyPlayers}/${requiredPlayers}`
    : `Esperando selección de modalidad (${currentPlayers}/${maxPlayers})`;
  const leftChanged = renderVersusSlots(versusLeftPlayers, leftPlayers, teamSize, 'left', { showOnlyActualPlayers: true });
  const rightChanged = renderVersusSlots(versusRightPlayers, rightPlayers, teamSize, 'right', { showOnlyActualPlayers: true });
  versusLeftPlayers.classList.toggle('empty-team', leftCount === 0);
  versusRightPlayers.classList.toggle('empty-team', rightCount === 0);
  if (leftCount === 0) {
    versusLeftPlayers.innerHTML = `
      <div class="versus-player empty">
        <div class="versus-player-model placeholder"></div>
        <strong>Esperando...</strong>
        <span>Sin jugadores en Rojo</span>
      </div>
    `;
  }
  if (rightCount === 0) {
    versusRightPlayers.innerHTML = `
      <div class="versus-player empty">
        <div class="versus-player-model placeholder"></div>
        <strong>Esperando...</strong>
        <span>Sin jugadores en Azul</span>
      </div>
    `;
  }
  if (leftChanged || rightChanged || layoutKey !== lastVersusLobbyLayoutKey || versusPreviewSlots.size === 0) {
    syncVersusPlayerPreviews();
    lastVersusLobbyLayoutKey = layoutKey;
  }
  versusReadyBtn.disabled = !selfPlayer;
  versusReadyBtn.textContent = selfReady ? 'Ready: ON' : 'Ready: OFF';
  versusStartBtn.disabled = !isHostPlayer || !allReady || !teamsBalanced;
  if (enoughPlayers && !teamsBalanced) {
    versusHint.textContent = `Equipos desbalanceados. Deben quedar ${requiredTeamSize} en Rojo y ${requiredTeamSize} en Azul.`;
  } else if (enoughPlayers && !allReady) {
    versusHint.textContent = 'Faltan jugadores por marcar Ready para iniciar.';
  } else if (allReady) {
    versusHint.textContent = 'Todos listos. El host puede iniciar la partida.';
  } else {
    versusHint.textContent = 'Las partidas versus aparecen en estado waiting hasta completar jugadores.';
  }
  renderVersusChat();
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
    const mode = isVersusRoom(room) ? 'versusmatch' : 'freeforall';
    const versusType = room.versusType ? ` (${room.versusType})` : '';
    const maxPlayers = Number(room.maxPlayers) > 0 ? Number(room.maxPlayers) : 5;
    const card = document.createElement('article');
    card.className = 'room-card';
    card.innerHTML = `
      <div>
        <strong>${room.name}</strong>
        <p>ID: ${room.id}</p>
        <p>Modo: ${mode}${versusType}</p>
        <p>Jugadores: ${room.players}/${maxPlayers}</p>
        <p>Estado: ${room.status}</p>
      </div>
      <button type="button">Unirse</button>
    `;

    card.querySelector('button').addEventListener('click', () => {
      if (!canUseProfileForLobby()) {
        setNameGateError('Define tu nombre para unirte a una sala.');
        setProfileReady(false);
        return;
      }
      setLobbyError();
      sendWs({
        type: 'join_room',
        roomId: room.id,
        playerName: getCurrentPlayerName(),
        character: characterSelect.value || activeCharacter,
      });
    });

    roomList.appendChild(card);
  });
  updateVersusLobbyUi();
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
renderer.domElement.classList.add('game-render-canvas');
app.appendChild(renderer.domElement);
let isMainWebglContextLost = false;
renderer.domElement.addEventListener('webglcontextlost', (event) => {
  event.preventDefault();
  isMainWebglContextLost = true;
  runtimeHealth.webglContextLosses += 1;
});
renderer.domElement.addEventListener('webglcontextrestored', () => {
  isMainWebglContextLost = false;
  renderer.setSize(window.innerWidth, window.innerHeight);
  applyWeather(currentWeather || 'night');
});

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

let terrainMesh = null;
let edgeMistMesh = null;

const blockMat = new THREE.MeshStandardMaterial({
  color: 0x5b5264,
  emissive: 0x2a2532,
  emissiveIntensity: 0.18,
  metalness: 0.06,
  roughness: 0.9,
});
const borderMat = new THREE.MeshStandardMaterial({
  color: 0x7b6f84,
  emissive: 0x2c2536,
  emissiveIntensity: 0.14,
  metalness: 0.04,
  roughness: 0.92,
});
const mushroomRockMat = new THREE.MeshStandardMaterial({
  color: 0x8f768f,
  emissive: 0x34253d,
  emissiveIntensity: 0.11,
  metalness: 0.04,
  roughness: 0.9,
});

const shootables = [];
shootables.push(floor);
const pillarBounds = [];
const playerCollisionRadius = 0.55;
const playerPillarCollisionFactor = 0.82;
const mapPillarCount = 180;
const mapBorderSegments = 42;
const mapAxisXBase = 118;
const mapAxisZBase = 96;
const mapBoundaryMinRadius = 1.02;
const mapBoundaryMaxRadius = 1.14;
const mapHalfExtent = 156;
const mapPlayableHalfExtent = mapHalfExtent - 6;
const mapWallHeight = 5.2;
const mapWallThickness = 1.6;
const terrainBaseY = -2.25;
const mapBoundsPadding = playerCollisionRadius * 0.2;
let currentMapSeed = null;
let currentMapProfile = null;
let currentMapCollisionHash = null;
let serverMapCollisionHash = null;
let lastCollisionBlockReason = 'none';
let lastCollisionBlockAt = 0;

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

const lowSparkCount = 900;
const lowSparkPos = new Float32Array(lowSparkCount * 3);
const lowSparkVel = new Float32Array(lowSparkCount);
for (let i = 0; i < lowSparkCount; i += 1) {
  lowSparkPos[i * 3] = (Math.random() - 0.5) * 300;
  lowSparkPos[i * 3 + 1] = 8 + Math.random() * 34;
  lowSparkPos[i * 3 + 2] = (Math.random() - 0.5) * 300;
  lowSparkVel[i] = 0.4 + Math.random() * 0.9;
}
const lowSparkGeo = new THREE.BufferGeometry();
lowSparkGeo.setAttribute('position', new THREE.BufferAttribute(lowSparkPos, 3));
const lowSparkMat = new THREE.PointsMaterial({
  color: 0xfff0bf,
  size: 0.18,
  transparent: true,
  opacity: 0.62,
  sizeAttenuation: true,
  depthWrite: false,
});
const lowSparks = new THREE.Points(lowSparkGeo, lowSparkMat);
scene.add(lowSparks);

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(8.5, 24, 24),
  new THREE.MeshBasicMaterial({ color: 0xe9f1ff, transparent: true, opacity: 0.9 }),
);
moon.position.set(78, 95, -124);
scene.add(moon);

const secondMoon = new THREE.Mesh(
  new THREE.SphereGeometry(4.2, 18, 18),
  new THREE.MeshBasicMaterial({ color: 0xf9d8a0, transparent: true, opacity: 0.74 }),
);
secondMoon.position.set(-104, 76, -112);
scene.add(secondMoon);

const koketriaDecor = [];
const reactiveNatureMaterials = [];
let naturePulse = 0;
const naturePulseOrigin = new THREE.Vector3();

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
const versusPreviewSlots = new Map();
let lastVersusLobbyLayoutKey = '';

const localAvatar = {
  group: null,
  avatarRoot: null,
  mixer: null,
  actions: null,
  currentAnimation: '',
  shootUntil: 0,
  loadingKey: '',
  funnyUntil: 0,
  team: null,
  teamOutline: null,
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

const disposeVersusPreviewSlot = (key) => {
  const slot = versusPreviewSlots.get(key);
  if (!slot) {
    return;
  }
  if (slot.model && slot.scene) {
    slot.scene.remove(slot.model);
  }
  if (slot.renderer && slot.renderer.domElement?.parentElement) {
    slot.renderer.domElement.parentElement.removeChild(slot.renderer.domElement);
  }
  slot.renderer?.dispose();
  versusPreviewSlots.delete(key);
};

const clearVersusPreviewSlots = () => {
  const keys = [...versusPreviewSlots.keys()];
  for (let i = 0; i < keys.length; i += 1) {
    disposeVersusPreviewSlot(keys[i]);
  }
  lastVersusLobbyLayoutKey = '';
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

const pickupModelSpecs = {
  mana: { url: '/items/mana.glb', targetHeight: 0.62 },
  defensa: { url: '/items/defensa.glb', targetHeight: 0.7 },
  vida: { url: '/items/vida.glb', targetHeight: 0.68 },
};
const pickupModelTemplateCache = new Map();
const pickupModelPromiseCache = new Map();

const normalizePickupTemplate = (root, targetHeight) => {
  const box = new THREE.Box3().setFromObject(root);
  const size = box.getSize(new THREE.Vector3());
  if (Number.isFinite(size.y) && size.y > 0.0001) {
    const scaleFactor = targetHeight / size.y;
    root.scale.setScalar(scaleFactor);
    box.setFromObject(root);
  }
  const center = box.getCenter(new THREE.Vector3());
  const minY = Number.isFinite(box.min.y) ? box.min.y : 0;
  root.position.set(-center.x, -minY, -center.z);
  root.traverse((node) => {
    if (node.isMesh) {
      node.frustumCulled = true;
    }
  });
  return root;
};

const loadPickupModelTemplate = async (kind) => {
  const key = String(kind || '').trim();
  if (!key || !pickupModelSpecs[key]) {
    return null;
  }
  if (pickupModelTemplateCache.has(key)) {
    return pickupModelTemplateCache.get(key);
  }
  if (pickupModelPromiseCache.has(key)) {
    return pickupModelPromiseCache.get(key);
  }

  const { url, targetHeight } = pickupModelSpecs[key];
  const promise = new Promise((resolve) => {
    gltfLoader.load(
      url,
      (gltf) => {
        const sceneRoot = gltf?.scene ? gltf.scene.clone(true) : null;
        if (!sceneRoot) {
          pickupModelTemplateCache.set(key, null);
          resolve(null);
          return;
        }
        const normalized = normalizePickupTemplate(sceneRoot, targetHeight);
        pickupModelTemplateCache.set(key, normalized);
        resolve(normalized);
      },
      undefined,
      () => {
        pickupModelTemplateCache.set(key, null);
        resolve(null);
      },
    );
  }).finally(() => {
    pickupModelPromiseCache.delete(key);
  });
  pickupModelPromiseCache.set(key, promise);
  return promise;
};

const createPickupVisualGroup = (kind, fallbackMeshFactory) => {
  const group = new THREE.Group();
  const content = new THREE.Group();
  group.add(content);
  const fallback = fallbackMeshFactory();
  fallback.name = '__pickup_fallback__';
  content.add(fallback);

  loadPickupModelTemplate(kind).then((template) => {
    if (!template || !group.parent) {
      return;
    }
    while (content.children.length > 0) {
      content.remove(content.children[0]);
    }
    const model = template.clone(true);
    model.name = `pickup_${kind}`;
    content.add(model);
    group.userData.modelLoaded = true;
  });

  return group;
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

const updateBootLoader = (done, total, label = '') => {
  const safeTotal = Math.max(1, total);
  const progress = Math.max(0, Math.min(1, done / safeTotal));
  const percent = Math.round(progress * 100);
  if (bootLoaderFill) {
    bootLoaderFill.style.width = `${percent}%`;
  }
  if (bootLoaderPercent) {
    bootLoaderPercent.textContent = `${percent}%`;
  }
  if (bootLoaderText && label) {
    bootLoaderText.textContent = label;
  }
};

const fetchCharactersCatalog = async () => {
  const apiBase = resolveApiBaseUrl();
  try {
    const charactersRes = await fetch(`${apiBase}/characters`);
    const charactersPayload = await charactersRes.json();
    if (charactersPayload?.ok && Array.isArray(charactersPayload.data) && charactersPayload.data.length > 0) {
      return charactersPayload.data;
    }
  } catch {
    // fallback below
  }
  return ['silentman', 'pumori', 'neoorphen', 'pezunalunar'];
};

const resolveMainPortalUrl = () => {
  const host = String(window.location.hostname || '').toLowerCase();
  if (!host || host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local')) {
    return 'http://localhost';
  }
  if (host === 'koketria.misterrii.com') {
    return 'https://misterrii.com';
  }
  if (host.startsWith('koketria.')) {
    return `https://${host.slice('koketria.'.length)}`;
  }
  return 'https://misterrii.com';
};

const preloadedAudioSources = new Set();

const preloadAudioSource = (src, timeoutMs = 6000) => {
  return new Promise((resolve) => {
    if (!src) {
      resolve(false);
      return;
    }
    if (preloadedAudioSources.has(src)) {
      resolve(true);
      return;
    }
    const audio = new Audio();
    let done = false;
    const finish = (ok) => {
      if (done) {
        return;
      }
      done = true;
      audio.removeEventListener('canplaythrough', onReady);
      audio.removeEventListener('loadedmetadata', onReady);
      audio.removeEventListener('error', onError);
      if (ok) {
        preloadedAudioSources.add(src);
      }
      resolve(ok);
    };
    const onReady = () => finish(true);
    const onError = () => finish(false);
    audio.preload = 'auto';
    audio.addEventListener('canplaythrough', onReady, { once: true });
    audio.addEventListener('loadedmetadata', onReady, { once: true });
    audio.addEventListener('error', onError, { once: true });
    audio.src = src;
    audio.load();
    setTimeout(() => finish(false), timeoutMs);
  });
};

const preloadCharacterAttackSound = async (character) => {
  const src = await resolveCharacterAttackSoundUrl(character);
  const firstTry = await preloadAudioSource(src, 6000);
  if (firstTry) {
    return true;
  }
  return preloadAudioSource(src, 10000);
};

const bootLobbyLoader = async () => {
  if (bootLoader) {
    bootLoader.classList.remove('hidden');
  }
  if (lobbySection) {
    lobbySection.classList.add('hidden');
  }

  const characters = await fetchCharactersCatalog();
  populateCharacterSelect(characters);
  configureLocalAttackSound(activeCharacter);

  const charList = [...availableCharacters];
  const totalTasks = 1
    + 1
    + (charList.length * 2)
    + 1
    + battleThemeIds.length
    + 2
    + 3
    + 1;
  const preloadWarnings = [];
  let done = 0;
  const tick = (label) => {
    done += 1;
    updateBootLoader(done, totalTasks, label);
  };
  const markWarning = (label) => {
    preloadWarnings.push(label);
    console.warn('[boot-loader][warn]', label);
  };

  updateBootLoader(0, totalTasks, 'Cargando tema pre-lobby...');
  if (!(await preloadAudioSource(preLobbyTrackPath, 10000))) {
    markWarning(`audio: ${preLobbyTrackPath}`);
  }
  tick('Tema pre-lobby cargado');
  refreshBackgroundMusic();

  updateBootLoader(done, totalTasks, 'Preparando catalogo...');
  setupCharacterPreview();
  tick('Catalogo listo');

  for (let i = 0; i < charList.length; i += 1) {
    const character = charList[i];
    // eslint-disable-next-line no-await-in-loop
    await ensureCharacterResource(character);
    tick(`Modelo: ${getCharacterLabel(character)}`);
  }

  for (let i = 0; i < charList.length; i += 1) {
    const character = charList[i];
    // eslint-disable-next-line no-await-in-loop
    await preloadCharacterAttackSound(character);
    // eslint-disable-next-line no-await-in-loop
    const attackSrc = await resolveCharacterAttackSoundUrl(character);
    if (!preloadedAudioSources.has(attackSrc)) {
      markWarning(`attack_sound: ${character}`);
    }
    tick(`Audio ataque: ${getCharacterLabel(character)}`);
  }

  if (!(await preloadAudioSource(defaultAttackSoundUrl, 6000))) {
    markWarning(`audio: ${defaultAttackSoundUrl}`);
  }
  tick('Audio base cargado');
  for (let i = 0; i < battleThemeIds.length; i += 1) {
    const themeId = battleThemeIds[i];
    const themePath = getBattleThemeTrackPath(themeId);
    // eslint-disable-next-line no-await-in-loop
    if (!(await preloadAudioSource(themePath, 10000))) {
      markWarning(`audio: ${themePath}`);
    }
    tick(`Tema batalla: ${themeId}`);
  }
  if (!(await preloadAudioSource(lobbyTrackPath, 10000))) {
    markWarning(`audio: ${lobbyTrackPath}`);
  }
  tick('Audio lobby cargado');
  if (!(await preloadAudioSource(versusLobbyTrackPath, 10000))) {
    markWarning(`audio: ${versusLobbyTrackPath}`);
  }
  tick('Audio lobby2 cargado');
  if (!(await loadPickupModelTemplate('mana'))) {
    markWarning('item: mana.glb');
  }
  tick('Item mana cargado');
  if (!(await loadPickupModelTemplate('defensa'))) {
    markWarning('item: defensa.glb');
  }
  tick('Item defensa cargado');
  if (!(await loadPickupModelTemplate('vida'))) {
    markWarning('item: vida.glb');
  }
  tick('Item vida cargado');

  await ensureLocalAvatar();
  mountPreviewModel();
  for (const entry of state.remotePlayers.values()) {
    upgradeRemotePlayerToCharacter(entry);
  }
  tick('Lobby listo');

  if (bootLoader) {
    bootLoader.classList.add('hidden');
  }
  syncLobbyScreens();
  renderPlayerNameBadge();
  renderLobbyUsers();
  renderLobbyChat();
  if (preloadWarnings.length > 0) {
    updateBootLoader(done, totalTasks, `Cargado con advertencias (${preloadWarnings.length})`);
  }
  refreshBackgroundMusic();
};

const loadCatalogs = async () => {
  const characters = await fetchCharactersCatalog();
  populateCharacterSelect(characters);
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

  const clip = resolvePreviewClip(resource);

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
const preLobbyTrackPath = '/themes/pre-lobby.mp3';
const lobbyTrackPath = '/themes/lobby.mp3';
const versusLobbyTrackPath = '/lobby/2.mp3';
const battleThemeTrackById = {
  battle1: '/themes/battle1.mp3',
  battle2: '/themes/battle2.mp3',
  battle3: '/themes/battle3.mp3',
};
const getBattleThemeTrackPath = (themeId) => {
  return battleThemeTrackById[themeId] || battleThemeTrackById.battle1;
};
const preLobbyMusic = new Audio(preLobbyTrackPath);
preLobbyMusic.preload = 'auto';
preLobbyMusic.loop = false;
preLobbyMusic.volume = 0.28;
const lobbyMusic = new Audio(lobbyTrackPath);
lobbyMusic.preload = 'auto';
lobbyMusic.loop = true;
lobbyMusic.volume = 0.34;
const battleMusic = new Audio(getBattleThemeTrackPath('battle1'));
battleMusic.preload = 'auto';
battleMusic.loop = true;
battleMusic.volume = 0.38;
let audioUnlocked = false;
let preLobbyMusicActive = false;
let lobbyMusicActive = false;
let battleMusicActive = false;
let waitForPreLobbyToEndForLobby = false;
let activeBattleThemeId = 'battle1';
const defaultAttackSoundUrl = '/8d82b5_Doom_Chaingun_Firing_Sound_Effect.mp3';
const attackSoundExtensions = ['.ogg', '.mp3', '.wav', '.m4a', ''];
const attackSoundUrlCache = new Map();
const attackSoundRetryAtMs = new Map();
const attackSoundResolveRetryDelayMs = 15_000;
let localAttackSoundCharacter = '';
const remoteShootMaxDistance = 140;
const remoteShootMinDistance = 6;
const remoteAttackVoices = [];
const maxRemoteAttackVoices = 24;
const lunarSpecialCooldownMs = 30_000;
const silentSpecialCooldownMs = 5_000;
let lunarRainCooldownEndsAt = 0;
let lastLunarCooldownShown = null;

const applyLoopAudioSource = (audio, src, attrName) => {
  const current = audio.getAttribute(attrName) || '';
  if (current === src) {
    return;
  }
  audio.pause();
  audio.currentTime = 0;
  audio.src = src;
  audio.setAttribute(attrName, src);
  audio.load();
};

const shouldPlayPreLobbyMusic = () => {
  return !state.joinedRoom && bootLoader && !bootLoader.classList.contains('hidden');
};

const shouldPlayLobbyMusic = () => {
  const inClassicLobby = !state.joinedRoom
    && lobbySection
    && !lobbySection.classList.contains('hidden')
    && (!bootLoader || bootLoader.classList.contains('hidden'));
  return inClassicLobby || isInVersusWaitingLobby();
};

const getLobbyMusicTrackPath = () => {
  if (isInVersusWaitingLobby()) {
    return versusLobbyTrackPath;
  }
  return lobbyTrackPath;
};

const shouldPlayBattleMusic = () => {
  return Boolean(state.joinedRoom && state.joinedRoom.room?.status === 'in_game');
};

const stopPreLobbyMusic = () => {
  if (!preLobbyMusicActive && preLobbyMusic.paused) {
    return;
  }
  preLobbyMusic.pause();
  preLobbyMusic.currentTime = 0;
  preLobbyMusicActive = false;
  waitForPreLobbyToEndForLobby = false;
};

const stopLobbyMusic = () => {
  if (!lobbyMusicActive && lobbyMusic.paused) {
    return;
  }
  lobbyMusic.pause();
  lobbyMusic.currentTime = 0;
  lobbyMusicActive = false;
};

const stopBattleMusic = () => {
  if (!battleMusicActive && battleMusic.paused) {
    return;
  }
  battleMusic.pause();
  battleMusic.currentTime = 0;
  battleMusicActive = false;
};

const startPreLobbyMusic = () => {
  if (!audioUnlocked || preLobbyMusicActive || !shouldPlayPreLobbyMusic()) {
    return;
  }
  preLobbyMusicActive = true;
  const maybePromise = preLobbyMusic.play();
  if (maybePromise && typeof maybePromise.catch === 'function') {
    maybePromise.catch(() => {
      preLobbyMusicActive = false;
    });
  }
};

const startLobbyMusic = () => {
  if (!audioUnlocked || lobbyMusicActive || !shouldPlayLobbyMusic()) {
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

const startBattleMusic = () => {
  if (!audioUnlocked || battleMusicActive || !shouldPlayBattleMusic()) {
    return;
  }
  battleMusicActive = true;
  const maybePromise = battleMusic.play();
  if (maybePromise && typeof maybePromise.catch === 'function') {
    maybePromise.catch(() => {
      battleMusicActive = false;
    });
  }
};

const refreshBackgroundMusic = () => {
  if (shouldPlayBattleMusic()) {
    waitForPreLobbyToEndForLobby = false;
    stopPreLobbyMusic();
    stopLobbyMusic();
    startBattleMusic();
    return;
  }
  if (shouldPlayPreLobbyMusic()) {
    waitForPreLobbyToEndForLobby = false;
    stopBattleMusic();
    stopLobbyMusic();
    startPreLobbyMusic();
    return;
  }
  if (shouldPlayLobbyMusic()) {
    const targetTrack = getLobbyMusicTrackPath();
    const currentTrack = lobbyMusic.getAttribute('data-lobby-src') || '';
    if (currentTrack !== targetTrack) {
      applyLoopAudioSource(lobbyMusic, targetTrack, 'data-lobby-src');
      lobbyMusicActive = false;
    }
    stopBattleMusic();
    if (preLobbyMusicActive && !preLobbyMusic.ended) {
      waitForPreLobbyToEndForLobby = true;
      stopLobbyMusic();
      return;
    }
    waitForPreLobbyToEndForLobby = false;
    stopPreLobbyMusic();
    startLobbyMusic();
    return;
  }
  waitForPreLobbyToEndForLobby = false;
  stopBattleMusic();
  stopPreLobbyMusic();
  stopLobbyMusic();
};

const setBattleTheme = (themeId) => {
  const normalized = String(themeId || '').trim();
  const nextId = battleThemeTrackById[normalized] ? normalized : 'battle1';
  if (nextId === activeBattleThemeId) {
    return;
  }
  activeBattleThemeId = nextId;
  applyLoopAudioSource(battleMusic, getBattleThemeTrackPath(activeBattleThemeId), 'data-bgm-src');
  battleMusicActive = false;
  refreshBackgroundMusic();
};

const applyGameSettings = () => {
  const effectiveMaster = Math.max(0, Math.min(1, settings.masterVolume));
  shootSound.volume = 0.24 * effectiveMaster * settings.sfxVolume;
  preLobbyMusic.volume = 0.28 * effectiveMaster * settings.musicVolume;
  lobbyMusic.volume = 0.34 * effectiveMaster * settings.musicVolume;
  battleMusic.volume = 0.38 * effectiveMaster * settings.musicVolume;
  camera.fov = settings.fov;
  camera.updateProjectionMatrix();
  thirdPersonCamera.fov = settings.fov;
  thirdPersonCamera.updateProjectionMatrix();
  state.showPerf = settings.showPerfByDefault || state.showPerf;
  renderPerfPanel();
};

const syncLobbyMusicUi = () => {
  const value = clampSetting(settings.musicVolume, 0, 1, 1);
  const label = `${Math.round(value * 100)}%`;
  if (lobbyMusicVolume) {
    lobbyMusicVolume.value = String(value);
  }
  if (lobbyMusicVolumeValue) {
    lobbyMusicVolumeValue.textContent = label;
  }
  if (versusLobbyMusicVolume) {
    versusLobbyMusicVolume.value = String(value);
  }
  if (versusLobbyMusicVolumeValue) {
    versusLobbyMusicVolumeValue.textContent = label;
  }
};

const syncOptionsUi = () => {
  optMouseSensitivity.value = String(settings.mouseSensitivity);
  optMouseSensitivityValue.textContent = settings.mouseSensitivity.toFixed(2);
  optMasterVolume.value = String(settings.masterVolume);
  optMasterVolumeValue.textContent = `${Math.round(settings.masterVolume * 100)}%`;
  optMusicVolume.value = String(settings.musicVolume);
  optMusicVolumeValue.textContent = `${Math.round(settings.musicVolume * 100)}%`;
  optSfxVolume.value = String(settings.sfxVolume);
  optSfxVolumeValue.textContent = `${Math.round(settings.sfxVolume * 100)}%`;
  optFov.value = String(Math.round(settings.fov));
  optFovValue.textContent = String(Math.round(settings.fov));
  optShowPerf.checked = Boolean(settings.showPerfByDefault);
  if (optCollisionViewBtn) {
    optCollisionViewBtn.textContent = `Colisiones: ${state.showCollisionOnly ? 'ON' : 'OFF'}`;
  }
  syncLobbyMusicUi();
};

const closeOptionsMenu = () => {
  isOptionsOpen = false;
  optionsScreen.classList.add('hidden');
  syncMobileControlsVisibility();
};

const openOptionsMenu = () => {
  if (!state.joinedRoom) {
    return;
  }
  isOptionsOpen = true;
  isFiring = false;
  clearMovementKeys();
  optionsScreen.classList.remove('hidden');
  if (document.pointerLockElement) {
    document.exitPointerLock();
  }
  syncMobileControlsVisibility();
};

const toggleOptionsMenu = () => {
  if (isOptionsOpen) {
    closeOptionsMenu();
  } else {
    openOptionsMenu();
  }
};

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
    const cached = attackSoundUrlCache.get(normalized);
    if (cached && cached !== defaultAttackSoundUrl) {
      return cached;
    }
  }

  const retryAt = Number(attackSoundRetryAtMs.get(normalized) || 0);
  if (retryAt > Date.now()) {
    return defaultAttackSoundUrl;
  }

  const candidates = buildAttackSoundCandidates(normalized);
  for (let i = 0; i < candidates.length; i += 1) {
    const candidate = candidates[i];
    // eslint-disable-next-line no-await-in-loop
    if (await canPlayAudioUrl(candidate)) {
      attackSoundUrlCache.set(normalized, candidate);
      attackSoundRetryAtMs.delete(normalized);
      return candidate;
    }
  }

  attackSoundRetryAtMs.set(normalized, Date.now() + attackSoundResolveRetryDelayMs);
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

const unlockBackgroundMusic = () => {
  if (audioUnlocked) {
    return;
  }
  audioUnlocked = true;
  refreshBackgroundMusic();
};

window.addEventListener('pointerdown', unlockBackgroundMusic, { once: true });
window.addEventListener('keydown', unlockBackgroundMusic, { once: true });
window.addEventListener('touchstart', unlockBackgroundMusic, { once: true, passive: true });
preLobbyMusic.addEventListener('ended', () => {
  preLobbyMusicActive = false;
  if (waitForPreLobbyToEndForLobby) {
    waitForPreLobbyToEndForLobby = false;
    refreshBackgroundMusic();
  }
});

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

const stopRemoteShootSound = () => {
  for (let i = 0; i < remoteAttackVoices.length; i += 1) {
    const voice = remoteAttackVoices[i];
    voice.pause();
    voice.currentTime = 0;
  }
  remoteAttackVoices.length = 0;
};

const registerRemoteShootSound = async (origin, characterId = '') => {
  const volume = getRemoteShootVolume(origin);
  if (volume <= 0.02) {
    return;
  }

  let src = defaultAttackSoundUrl;
  if (characterId) {
    src = await resolveCharacterAttackSoundUrl(characterId);
  }

  const voice = new Audio(src || defaultAttackSoundUrl);
  voice.preload = 'auto';
  voice.loop = false;
  voice.volume = volume * settings.masterVolume * settings.sfxVolume;

  if (remoteAttackVoices.length >= maxRemoteAttackVoices) {
    const oldVoice = remoteAttackVoices.shift();
    if (oldVoice) {
      oldVoice.pause();
      oldVoice.currentTime = 0;
    }
  }
  remoteAttackVoices.push(voice);

  const cleanup = () => {
    const idx = remoteAttackVoices.indexOf(voice);
    if (idx >= 0) {
      remoteAttackVoices.splice(idx, 1);
    }
  };
  voice.addEventListener('ended', cleanup, { once: true });
  voice.addEventListener('pause', cleanup, { once: true });

  const maybePromise = voice.play();
  if (maybePromise && typeof maybePromise.catch === 'function') {
    maybePromise.catch(() => {
      cleanup();
    });
  }
};

const updateRemoteShootSound = () => {};

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
const hitWaveGeometry = new THREE.RingGeometry(0.16, 0.24, 28);
const hitWaveMaterial = new THREE.MeshBasicMaterial({
  color: 0x9fffb6,
  transparent: true,
  opacity: 0.9,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  side: THREE.DoubleSide,
});
const activeTracers = [];
const activeImpacts = [];
const activeHitWaves = [];
const activeHolyProjectiles = [];
const activeHammerProjectiles = [];
const activePoisonProjectiles = [];
const activeLunarProjectiles = [];
const activeNormalShotCollisionVisuals = [];
const activePumoriOrbitSpecials = [];
const maxSilentSpecialVisualRays = 24;
const pickupSparkGeometry = new THREE.SphereGeometry(0.045, 6, 6);
const activePickupSparks = [];
const maxActiveTracers = 420;
const maxActiveImpacts = 680;
const maxActivePickupSparks = 980;
const hitWaveYOffset = 0.04;
const hitWaveStartScale = 0.9;
const hitWaveLife = 0.2;
const hitWaveExpand = 5.8;
const vfxNearDistance = 35;
const vfxFarDistance = 165;
const tmpSegDir = new THREE.Vector3();
const tmpSegToCenter = new THREE.Vector3();
const tmpClosestPoint = new THREE.Vector3();
const tmpTravelVec = new THREE.Vector3();
const tmpLocalHead = new THREE.Vector3();
const tmpLocalBody = new THREE.Vector3();
const tracerUpAxis = new THREE.Vector3(0, 1, 0);
const tmpWorldQuatA = new THREE.Quaternion();
const tmpWorldQuatB = new THREE.Quaternion();

const getVfxLoadSheddingFactor = () => {
  let factor = 1;
  const calls = renderPerfStats.drawCalls || 0;
  const liveVfx = renderPerfStats.vfx || 0;
  const fps = state.fps || 0;
  if (calls > 520) factor *= 0.88;
  if (calls > 620) factor *= 0.78;
  if (liveVfx > 680) factor *= 0.82;
  if (liveVfx > 820) factor *= 0.68;
  if (fps > 0 && fps < 50) factor *= 0.9;
  if (fps > 0 && fps < 40) factor *= 0.78;
  return Math.max(0.32, Math.min(1, factor));
};

const getVfxSpawnBudget = (position) => {
  const cam = getRenderCamera();
  if (!cam || !position) {
    return vfxQuality * getVfxLoadSheddingFactor();
  }
  const dx = position.x - cam.position.x;
  const dy = position.y - cam.position.y;
  const dz = position.z - cam.position.z;
  const dist = Math.sqrt((dx * dx) + (dy * dy) + (dz * dz));
  if (dist <= vfxNearDistance) {
    return vfxQuality * getVfxLoadSheddingFactor();
  }
  if (dist >= vfxFarDistance) {
    return vfxQuality * 0.35 * getVfxLoadSheddingFactor();
  }
  const t = (dist - vfxNearDistance) / (vfxFarDistance - vfxNearDistance);
  return vfxQuality * (1 - (t * 0.65)) * getVfxLoadSheddingFactor();
};

const getDynamicMaxTracers = () => {
  const calls = renderPerfStats.drawCalls || 0;
  const pressure = calls > 620 ? 0.68 : (calls > 520 ? 0.82 : 1);
  return Math.max(96, Math.round(maxActiveTracers * (0.45 + (vfxQuality * 0.55)) * pressure));
};
const getDynamicMaxImpacts = () => {
  const calls = renderPerfStats.drawCalls || 0;
  const pressure = calls > 620 ? 0.68 : (calls > 520 ? 0.82 : 1);
  return Math.max(140, Math.round(maxActiveImpacts * (0.4 + (vfxQuality * 0.6)) * pressure));
};

const keys = { KeyW: false, KeyA: false, KeyS: false, KeyD: false, Space: false };
let devCollectNearestRequestKind = null;
let devCollectCycleIndex = 0;
const appEnv = String(import.meta.env.VITE_APP_ENV || import.meta.env.MODE || 'dev').toLowerCase();
const isProdAppEnv = appEnv === 'prod' || appEnv === 'production';
const isTestAppEnv = appEnv === 'test';
const isTestControlsEnabled = () => (
  !isProdAppEnv
  && (isTestAppEnv
    || (
    window.__KOKETRIA_TEST_CONTROLS__ === true
    || (new URLSearchParams(window.location.search)).get('testControls') === '1'
  ))
);
let isLocked = false;
let yaw = 0;
let pitch = 0;
const speed = 9;
const moveAcceleration = 24;
const moveDeceleration = 18;
const airControlFactor = 0.45;
const strafeOnlySpeedFactor = 0.92;
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
const maxShotSpread = 1.2;
const spreadDecayPerSecond = 2.25;
const reloadTime = 1.2;
const maxHealth = 100;
const maxShield = 25;
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
const maxHealthPickups = 20;
const healthPickupRespawnMs = 60_000;
const healthPickupRegenAmount = maxHealth / 3;
const healthRegenPerSecond = 18;
const hitDamage = Math.ceil(maxHealth / 3);
const headshotRadius = 0.62;
const bodyshotRadius = 1.15;
const torsoRadius = 1.02;
const headCenterOffsetY = 0.18;
const bodyCenterOffsetY = -0.45;
const remoteHeadCenterOffsetY = playerGroundY + headCenterOffsetY;
const remoteBodyCenterOffsetY = playerGroundY + bodyCenterOffsetY;
const remoteTorsoCenterOffsetY = playerGroundY + (bodyCenterOffsetY * 0.45);
const remoteHealthBarYOffset = 2.45;
const remoteHealthBarWidth = 0.9;
const remoteHealthBarHeight = 0.09;
const remoteResourceBarWidth = remoteHealthBarWidth;
const remoteResourceBarHeight = 0.04;
const remoteResourceBarsYOffset = remoteHealthBarYOffset
  - ((remoteHealthBarHeight + remoteResourceBarHeight) * 0.5);
const remoteResourceBarGapY = remoteResourceBarHeight;
const remoteHealthBarMaxVisibleDistance = 320;
let kills = 0;
let health = maxHealth;
let shield = startShield;
let ammoInMag = maxAmmoInMag;
let ammoReserve = maxAmmoTotal - maxAmmoInMag;
let mana = maxMana;
let manaHudValue = Math.round(maxMana);
let pendingHealthRegen = 0;
let isReloading = false;
let reloadCooldown = 0;
let isJumping = false;
let jumpVelocity = 0;
let isRespawning = false;
let respawnEndsAt = 0;
let respawnSecondsLeft = getRespawnDurationSeconds();
let respawnRequestPending = false;
let lastRespawnRequestAt = 0;
const respawnRequestRetryMs = 700;
let isMatchEnding = false;
let matchWinnerEndsAt = 0;
let matchWinnerSecondsLeft = 0;
let bleedIntensity = 0;
let bleedHitFlash = 0;
let recoilKick = 0;
let shotSpread = 0;
let crosshairHitUntil = 0;
let crosshairHeadshotUntil = 0;
let crosshairKillUntil = 0;
let damageIndicatorUntil = 0;
let damageIndicatorAngle = 0;
let miniMapLastRenderAt = 0;

const euler = new THREE.Euler(0, 0, 0, 'YXZ');
const forward = new THREE.Vector3();
const right = new THREE.Vector3();
const move = new THREE.Vector3();
const moveVelocity = new THREE.Vector3();
const dir = new THREE.Vector3();
const clock = new THREE.Clock();
const remoteFacingYawOffset = Math.PI;
const DEBUG_WEAPON_ATTACH = false;
const debugHitboxColors = {
  head: 0xff4d4d,
  body: 0x4de2ff,
  torso: 0xb28cff,
};
const remoteInterpolationBaseMs = 235;
const remoteInterpolationMinMs = 180;
const remoteInterpolationMaxMs = 380;
const remoteInterpolationLatencyFactor = 0.52;
const remoteInterpolationCorrectionBoostMs = 120;
const remoteExtrapolationBaseMs = 125;
const remoteExtrapolationMinMs = 75;
const remoteExtrapolationMaxMs = 190;
const remoteExtrapolationLatencyFactor = 0.2;
const remoteExtrapolationCorrectionCutMs = 42;
const remoteExtrapolationMaxSpeed = 10.8;
const remoteExtrapolationDamping = 0.72;
const remoteNetSmoothingPerSecond = 2.4;
const remoteHardCatchupDistance = 6.2;
const remoteMediumCatchupDistance = 3.1;
const remoteSnapDistance = 11.5;
const remoteAnimMoveSpeedOn = 0.55;
const remoteAnimMoveSpeedOff = 0.32;
const remoteAnimSwitchCooldownMs = 140;
const remoteMovingSignalHoldMs = 220;
const localReconcileSoftError = 0.12;
const localReconcileHardSnapDistance = 3.2;
const localReconcileRatePerSecond = 7.5;
const localReconcileExpireMs = 320;
const localInputHistoryLimit = 180;
let serverTimeOffsetMs = 0;
let hasServerTimeSync = false;
let remoteInterpolationDynamicMs = remoteInterpolationBaseMs;
let remoteExtrapolationDynamicMs = remoteExtrapolationBaseMs;
let localReconcileTarget = null;
let localReconcileExpiresAt = 0;
let localCollisionBypassUntil = 0;
let localInputSeq = 0;
const pendingMoveInputs = [];
let localShotSeq = 0;
const pendingShotAcks = new Map();
const reconcileStats = {
  errorSamples: [],
  correctionsInWindow: 0,
  correctionsPerSec: 0,
  lateAcksInWindow: 0,
  lateAcksPerSec: 0,
};

const getEstimatedServerNowMs = () => Date.now() + (hasServerTimeSync ? serverTimeOffsetMs : 0);

const updateServerTimeOffset = (serverTs) => {
  const ts = Number(serverTs);
  if (!Number.isFinite(ts)) {
    return;
  }
  const sample = ts - Date.now();
  if (!hasServerTimeSync) {
    serverTimeOffsetMs = sample;
    hasServerTimeSync = true;
    return;
  }
  const delta = sample - serverTimeOffsetMs;
  const boundedDelta = Math.max(-30, Math.min(30, delta));
  serverTimeOffsetMs += boundedDelta * 0.35;
};

const updateRemoteNetTimings = (delta) => {
  const rtt = Number.isFinite(state.latencyMs) ? Math.max(0, state.latencyMs) : 0;
  const corrections = Number.isFinite(reconcileStats.correctionsPerSec)
    ? Math.max(0, reconcileStats.correctionsPerSec)
    : 0;
  const correctionPressure = Math.max(0, Math.min(1, (corrections - 4) / 14));
  const targetInterpolation = Math.max(
    remoteInterpolationMinMs,
    Math.min(
      remoteInterpolationMaxMs,
      remoteInterpolationBaseMs
        + (rtt * remoteInterpolationLatencyFactor)
        + (correctionPressure * remoteInterpolationCorrectionBoostMs),
    ),
  );
  const targetExtrapolation = Math.max(
    remoteExtrapolationMinMs,
    Math.min(
      remoteExtrapolationMaxMs,
      remoteExtrapolationBaseMs
        + (rtt * remoteExtrapolationLatencyFactor)
        - (correctionPressure * remoteExtrapolationCorrectionCutMs),
    ),
  );
  const smoothing = Math.max(0.01, Math.min(1, delta * remoteNetSmoothingPerSecond));
  remoteInterpolationDynamicMs += (targetInterpolation - remoteInterpolationDynamicMs) * smoothing;
  remoteExtrapolationDynamicMs += (targetExtrapolation - remoteExtrapolationDynamicMs) * smoothing;
};

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
const healthPickups = [];

const createSeededRng = (seed) => {
  // Keep deterministic parity with backend_v2 SeededRng (u64 LCG).
  let state = (BigInt(Number(seed) >>> 0) ^ 0xD1B54A32D192ED03n) & 0xFFFFFFFFFFFFFFFFn;
  const mul = 6364136223846793005n;
  const inc = 1n;
  const mask64 = 0xFFFFFFFFFFFFFFFFn;
  const maxU32 = 4294967295;
  return () => {
    state = (state * mul + inc) & mask64;
    const u32 = Number((state >> 32n) & 0xFFFFFFFFn);
    return u32 / maxU32;
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

const mapHashOffset = 0xcbf29ce484222325n;
const mapHashPrime = 0x100000001b3n;
const mapHashMask = 0xFFFFFFFFFFFFFFFFn;

const fnv1aUpdateU64 = (hash, value) => {
  let next = BigInt.asUintN(64, hash);
  const raw = BigInt.asUintN(64, BigInt(value));
  for (let i = 0n; i < 8n; i += 1n) {
    const byte = (raw >> (i * 8n)) & 0xFFn;
    next ^= byte;
    next = (next * mapHashPrime) & mapHashMask;
  }
  return next;
};

const quantizeMapValue = (value) => {
  return BigInt(Math.round(Number(value) * 1000));
};

const computeMapCollisionHash = (profile, bounds) => {
  if (!profile || !Array.isArray(bounds)) {
    return '';
  }
  let hash = mapHashOffset;
  hash = fnv1aUpdateU64(hash, BigInt(bounds.length));
  hash = fnv1aUpdateU64(hash, quantizeMapValue(profile.axisX));
  hash = fnv1aUpdateU64(hash, quantizeMapValue(profile.axisZ));
  hash = fnv1aUpdateU64(hash, quantizeMapValue(profile.amp1));
  hash = fnv1aUpdateU64(hash, quantizeMapValue(profile.amp2));
  hash = fnv1aUpdateU64(hash, quantizeMapValue(profile.amp3));
  hash = fnv1aUpdateU64(hash, quantizeMapValue(profile.freq1));
  hash = fnv1aUpdateU64(hash, quantizeMapValue(profile.freq2));
  hash = fnv1aUpdateU64(hash, quantizeMapValue(profile.freq3));
  hash = fnv1aUpdateU64(hash, quantizeMapValue(profile.phase1));
  hash = fnv1aUpdateU64(hash, quantizeMapValue(profile.phase2));
  hash = fnv1aUpdateU64(hash, quantizeMapValue(profile.phase3));
  for (let i = 0; i < bounds.length; i += 1) {
    const box = bounds[i];
    hash = fnv1aUpdateU64(hash, quantizeMapValue(box.minX));
    hash = fnv1aUpdateU64(hash, quantizeMapValue(box.maxX));
    hash = fnv1aUpdateU64(hash, quantizeMapValue(box.minZ));
    hash = fnv1aUpdateU64(hash, quantizeMapValue(box.maxZ));
  }
  return hash.toString(16).padStart(16, '0');
};

const createMapProfile = (seed) => {
  const rnd = createSeededRng((Number(seed) ^ 0x5f356495) >>> 0);
  return {
    axisX: mapAxisXBase * (0.94 + rnd() * 0.1),
    axisZ: mapAxisZBase * (0.94 + rnd() * 0.1),
    amp1: 0.1 + rnd() * 0.09,
    amp2: 0.07 + rnd() * 0.07,
    amp3: 0.05 + rnd() * 0.06,
    freq1: 2 + Math.floor(rnd() * 3),
    freq2: 3 + Math.floor(rnd() * 3),
    freq3: 5 + Math.floor(rnd() * 4),
    phase1: rnd() * Math.PI * 2,
    phase2: rnd() * Math.PI * 2,
    phase3: rnd() * Math.PI * 2,
    terrainPhase: rnd() * Math.PI * 2,
    terrainPhaseB: rnd() * Math.PI * 2,
    terrainPhaseC: rnd() * Math.PI * 2,
  };
};

const getMapBoundaryRadius = (profile, theta) => {
  if (!profile) {
    return 1;
  }
  const waveA = Math.sin((theta * profile.freq1) + profile.phase1) * profile.amp1;
  const waveB = Math.sin((theta * profile.freq2) + profile.phase2) * profile.amp2;
  const waveC = Math.cos((theta * profile.freq3) + profile.phase3) * profile.amp3;
  return Math.max(mapBoundaryMinRadius, Math.min(mapBoundaryMaxRadius, 1 + waveA + waveB + waveC));
};

const getBoundaryPointAt = (profile, theta, extra = 0) => {
  const radius = getMapBoundaryRadius(profile, theta) + extra;
  return {
    x: Math.cos(theta) * profile.axisX * radius,
    z: Math.sin(theta) * profile.axisZ * radius,
  };
};

const getMapTheta = (profile, x, z) => {
  return Math.atan2(z / Math.max(1, profile.axisZ), x / Math.max(1, profile.axisX));
};

const isInsideMapBounds = (x, z, padding = 0) => {
  if (!currentMapProfile) {
    return true;
  }
  const theta = getMapTheta(currentMapProfile, x, z);
  const boundary = getMapBoundaryRadius(currentMapProfile, theta);
  const norm = Math.sqrt(
    (x * x) / (currentMapProfile.axisX * currentMapProfile.axisX)
    + (z * z) / (currentMapProfile.axisZ * currentMapProfile.axisZ),
  );
  const normalizedPadding = padding / Math.max(1, Math.min(currentMapProfile.axisX, currentMapProfile.axisZ));
  return norm <= (boundary - normalizedPadding);
};

const isInsidePlayableBounds = (x, z, padding = 0) => {
  const limit = Math.max(8, mapPlayableHalfExtent - Math.max(0, padding));
  return Math.abs(x) <= limit && Math.abs(z) <= limit;
};

const getMapEdgeMargin = (x, z, padding = 0) => {
  const limit = Math.max(8, mapPlayableHalfExtent - Math.max(0, padding));
  return Math.min(limit - Math.abs(x), limit - Math.abs(z));
};

const clampPointToMapBounds = (x, z, padding = 0) => {
  if (!currentMapProfile) {
    return { x, z };
  }
  const theta = getMapTheta(currentMapProfile, x, z);
  const boundary = getMapBoundaryRadius(currentMapProfile, theta);
  const norm = Math.sqrt(
    (x * x) / (currentMapProfile.axisX * currentMapProfile.axisX)
    + (z * z) / (currentMapProfile.axisZ * currentMapProfile.axisZ),
  );
  const normalizedPadding = padding / Math.max(1, Math.min(currentMapProfile.axisX, currentMapProfile.axisZ));
  const maxNorm = Math.max(0.12, boundary - normalizedPadding);
  if (norm <= maxNorm) {
    return { x, z };
  }
  const safeNorm = Math.max(0.0001, norm);
  const ratio = maxNorm / safeNorm;
  return { x: x * ratio, z: z * ratio };
};

const clampPointToPlayableBounds = (x, z, padding = 0) => {
  const limit = Math.max(8, mapPlayableHalfExtent - Math.max(0, padding));
  return {
    x: Math.max(-limit, Math.min(limit, x)),
    z: Math.max(-limit, Math.min(limit, z)),
  };
};

const getTerrainSurfaceYAt = (x, z) => {
  if (!currentMapProfile) {
    return 0;
  }
  const theta = getMapTheta(currentMapProfile, x, z);
  const boundary = getMapBoundaryRadius(currentMapProfile, theta);
  const norm = Math.sqrt(
    (x * x) / (currentMapProfile.axisX * currentMapProfile.axisX)
    + (z * z) / (currentMapProfile.axisZ * currentMapProfile.axisZ),
  );
  const edgeFactor = Math.max(0, Math.min(1, (norm - (boundary * 0.72)) / (boundary * 0.34)));
  const wave = (
    Math.sin((x * 0.042) + currentMapProfile.terrainPhase) * 1.45
    + Math.cos((z * 0.038) + currentMapProfile.terrainPhaseB) * 1.2
    + Math.sin(((x + z) * 0.025) + currentMapProfile.terrainPhaseC) * 1.05
    + Math.cos(((x - z) * 0.018) + (currentMapProfile.terrainPhaseB * 0.8)) * 0.85
  ) * 0.58;
  const edgeDrop = Math.pow(edgeFactor, 2.1) * 8.4;
  return terrainBaseY + wave - edgeDrop;
};

const registerShootableMesh = (mesh) => {
  if (!mesh) {
    return;
  }
  scene.add(mesh);
  shootables.push(mesh);
  const box = new THREE.Box3().setFromObject(mesh);
  if (Number.isFinite(box.min.x) && Number.isFinite(box.max.x) && Number.isFinite(box.min.z) && Number.isFinite(box.max.z)) {
    pillarBounds.push({
      minX: box.min.x,
      maxX: box.max.x,
      minZ: box.min.z,
      maxZ: box.max.z,
    });
  }
};

const clearKoketriaDecor = () => {
  for (let i = koketriaDecor.length - 1; i >= 0; i -= 1) {
    const obj = koketriaDecor[i];
    if (!obj) {
      continue;
    }
    scene.remove(obj);
    obj.traverse((node) => {
      if (!node.isMesh) {
        return;
      }
      if (node.geometry) {
        node.geometry.dispose();
      }
      if (node.material) {
        const mats = Array.isArray(node.material) ? node.material : [node.material];
        mats.forEach((mat) => mat.dispose());
      }
    });
  }
  koketriaDecor.length = 0;
  reactiveNatureMaterials.length = 0;
};

const registerReactiveMaterial = (material, baseEmissive = 0.08) => {
  if (!material) {
    return;
  }
  reactiveNatureMaterials.push({
    material,
    base: baseEmissive,
    phase: Math.random() * Math.PI * 2,
  });
  material.emissiveIntensity = baseEmissive;
};

const placeDecorAt = (obj, x, z) => {
  if (!obj) {
    return false;
  }
  if (!isInsideMapBounds(x, z, 6)) {
    return false;
  }
  for (let i = 0; i < pillarBounds.length; i += 1) {
    const pillar = pillarBounds[i];
    if (x > pillar.minX && x < pillar.maxX && z > pillar.minZ && z < pillar.maxZ) {
      return false;
    }
  }
  obj.position.x = x;
  obj.position.z = z;
  scene.add(obj);
  koketriaDecor.push(obj);
  return true;
};

const spawnMushroomHouse = (x, z, rnd) => {
  const mushroom = new THREE.Group();
  const stemH = 3.2 + rnd() * 3.8;
  const stemW = 1.1 + rnd() * 1.4;
  const stemMat = new THREE.MeshStandardMaterial({
    color: 0xcab48f,
    roughness: 0.88,
    metalness: 0.02,
    emissive: 0x2e2218,
    emissiveIntensity: 0.05,
  });
  const capMat = new THREE.MeshStandardMaterial({
    color: rnd() > 0.5 ? 0x925d8a : 0x8c6645,
    roughness: 0.72,
    metalness: 0.04,
    emissive: 0x3a2230,
    emissiveIntensity: 0.07,
  });
  const windowMat = new THREE.MeshStandardMaterial({
    color: 0xffebb2,
    emissive: 0xf3cb7a,
    emissiveIntensity: rnd() > 0.56 ? 0.62 : 0.28,
    roughness: 0.2,
    metalness: 0.05,
  });

  const stem = new THREE.Mesh(new THREE.CylinderGeometry(stemW * 0.75, stemW, stemH, 12), stemMat);
  stem.position.y = stemH / 2;
  mushroom.add(stem);

  const cap = new THREE.Mesh(new THREE.SphereGeometry(stemW * 1.95, 20, 16, 0, Math.PI * 2, 0, Math.PI / 1.8), capMat);
  cap.position.y = stemH + (stemW * 0.8);
  cap.scale.set(1.2, 0.84, 1.2);
  mushroom.add(cap);

  const door = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.36, 1.05, 12), new THREE.MeshStandardMaterial({
    color: 0x5f4532,
    roughness: 0.85,
    metalness: 0.05,
  }));
  door.position.set(0, 0.52, stemW * 0.75);
  mushroom.add(door);

  const windows = 2 + Math.floor(rnd() * 2);
  for (let i = 0; i < windows; i += 1) {
    const ang = (i / windows) * Math.PI * 2 + (rnd() * 0.4);
    const win = new THREE.Mesh(new THREE.SphereGeometry(0.23, 10, 10), windowMat.clone());
    win.position.set(Math.cos(ang) * stemW * 0.68, 1.4 + rnd() * 1.3, Math.sin(ang) * stemW * 0.68);
    registerReactiveMaterial(win.material, 0.2 + rnd() * 0.25);
    mushroom.add(win);
  }

  if (rnd() > 0.72) {
    mushroom.position.y += 0.5 + rnd() * 0.7;
  }
  return placeDecorAt(mushroom, x, z);
};

const spawnLivingTree = (x, z, rnd) => {
  const tree = new THREE.Group();
  const trunkMat = new THREE.MeshStandardMaterial({
    color: 0x5e4b3a,
    roughness: 0.92,
    metalness: 0.02,
    emissive: 0x2a2018,
    emissiveIntensity: 0.05,
  });
  const leafMat = new THREE.MeshStandardMaterial({
    color: 0x6ea16d,
    roughness: 0.78,
    metalness: 0.04,
    emissive: 0x355f34,
    emissiveIntensity: 0.08,
  });
  const trunkH = 5 + rnd() * 5;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.9, trunkH, 10), trunkMat);
  trunk.position.y = trunkH / 2;
  trunk.rotation.z = (rnd() - 0.5) * 0.22;
  tree.add(trunk);

  const crowns = 2 + Math.floor(rnd() * 3);
  for (let i = 0; i < crowns; i += 1) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(1.1 + rnd() * 1.3, 14, 14),
      leafMat.clone(),
    );
    puff.position.set((rnd() - 0.5) * 1.8, trunkH - 1 + (rnd() * 2.4), (rnd() - 0.5) * 1.8);
    registerReactiveMaterial(puff.material, 0.06 + rnd() * 0.06);
    tree.add(puff);
  }

  if (rnd() > 0.68) {
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xf2ddb1,
      emissive: 0xb98f59,
      emissiveIntensity: 0.22,
      roughness: 0.48,
      metalness: 0.05,
    });
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 10), eyeMat);
    const eyeR = eyeL.clone();
    eyeL.position.set(-0.22, trunkH * 0.54, 0.62);
    eyeR.position.set(0.22, trunkH * 0.56, 0.62);
    tree.add(eyeL);
    tree.add(eyeR);
  }

  return placeDecorAt(tree, x, z);
};

const spawnOrganicRock = (x, z, rnd) => {
  const rock = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.8 + rnd() * 1.4, 1),
    new THREE.MeshStandardMaterial({
      color: rnd() > 0.5 ? 0x6f7686 : 0x7f7a74,
      roughness: 0.95,
      metalness: 0.02,
      emissive: 0x262a35,
      emissiveIntensity: 0.06,
    }),
  );
  rock.scale.set(1 + rnd(), 0.6 + rnd() * 0.8, 1 + rnd());
  rock.rotation.set(rnd() * 0.35, rnd() * Math.PI, rnd() * 0.35);
  rock.position.y = 0.3;
  return placeDecorAt(rock, x, z);
};

const spawnGlowFlower = (x, z, rnd) => {
  const flower = new THREE.Group();
  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.07, 0.68, 8),
    new THREE.MeshStandardMaterial({
      color: 0x5f8f5f,
      roughness: 0.88,
      metalness: 0.02,
    }),
  );
  stem.position.y = 0.34;
  flower.add(stem);

  const petalMat = new THREE.MeshStandardMaterial({
    color: rnd() > 0.5 ? 0xf4a3da : 0x8ce0ff,
    roughness: 0.4,
    metalness: 0.08,
    emissive: 0x6d7cb0,
    emissiveIntensity: 0.16,
  });
  for (let i = 0; i < 6; i += 1) {
    const petal = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 10), petalMat.clone());
    const ang = (i / 6) * Math.PI * 2;
    petal.position.set(Math.cos(ang) * 0.18, 0.72 + Math.sin(ang * 2) * 0.02, Math.sin(ang) * 0.18);
    registerReactiveMaterial(petal.material, 0.13 + rnd() * 0.08);
    flower.add(petal);
  }
  const center = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 10), new THREE.MeshStandardMaterial({
    color: 0xffe4a8,
    emissive: 0xfad889,
    emissiveIntensity: 0.25,
    roughness: 0.36,
  }));
  center.position.y = 0.72;
  flower.add(center);
  return placeDecorAt(flower, x, z);
};

const triggerNaturePulse = (origin) => {
  naturePulse = Math.min(1, naturePulse + 0.5);
  if (origin) {
    naturePulseOrigin.copy(origin);
  }
};

const rebuildMapFromSeed = (seed, force = false) => {
  const normalizedSeed = Number(seed);
  if (!Number.isFinite(normalizedSeed)) {
    return;
  }
  if (currentMapSeed === normalizedSeed && !force) {
    return;
  }
  currentMapSeed = normalizedSeed;
  currentMapProfile = createMapProfile(normalizedSeed);

  for (let i = shootables.length - 1; i >= 0; i -= 1) {
    const mesh = shootables[i];
    if (mesh === floor) {
      continue;
    }
    scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();
  }
  shootables.length = 0;
  shootables.push(floor);
  pillarBounds.length = 0;
  clearKoketriaDecor();

  if (terrainMesh) {
    scene.remove(terrainMesh);
    terrainMesh.geometry.dispose();
    terrainMesh.material.dispose();
    terrainMesh = null;
  }
  if (edgeMistMesh) {
    scene.remove(edgeMistMesh);
    edgeMistMesh.geometry.dispose();
    edgeMistMesh.material.dispose();
    edgeMistMesh = null;
  }

  for (let i = ammoPickups.length - 1; i >= 0; i -= 1) {
    scene.remove(ammoPickups[i].mesh);
  }
  ammoPickups.length = 0;

  for (let i = shieldPickups.length - 1; i >= 0; i -= 1) {
    scene.remove(shieldPickups[i].mesh);
  }
  shieldPickups.length = 0;

  for (let i = healthPickups.length - 1; i >= 0; i -= 1) {
    scene.remove(healthPickups[i].mesh);
  }
  healthPickups.length = 0;

  const pillarRnd = createSeededRng(normalizedSeed ^ 0x9E3779B9);
  for (let i = 0; i < 220; i += 1) {
    const w = 1 + pillarRnd() * 3;
    const d = 1 + pillarRnd() * 3;
    const h = 3 + pillarRnd() * 24;
    const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), blockMat.clone());
    box.position.set((pillarRnd() - 0.5) * 220, h / 2, (pillarRnd() - 0.5) * 220);
    // Keep RNG sequence aligned with backend map generation.
    box.userData.hp = 1;
    scene.add(box);
    shootables.push(box);
    pillarBounds.push({
      minX: box.position.x - (w / 2),
      maxX: box.position.x + (w / 2),
      minZ: box.position.z - (d / 2),
      maxZ: box.position.z + (d / 2),
    });
  }

  // Visual perimeter walls to make map limits explicit for players.
  const wallLimit = Math.max(12, mapPlayableHalfExtent + (mapWallThickness * 0.5));
  const wallMat = borderMat.clone();
  wallMat.emissiveIntensity = 0.2;
  const northWall = new THREE.Mesh(
    new THREE.BoxGeometry((wallLimit * 2) + (mapWallThickness * 2), mapWallHeight, mapWallThickness),
    wallMat.clone(),
  );
  northWall.position.set(0, mapWallHeight * 0.5, wallLimit);
  scene.add(northWall);
  shootables.push(northWall);

  const southWall = new THREE.Mesh(
    new THREE.BoxGeometry((wallLimit * 2) + (mapWallThickness * 2), mapWallHeight, mapWallThickness),
    wallMat.clone(),
  );
  southWall.position.set(0, mapWallHeight * 0.5, -wallLimit);
  scene.add(southWall);
  shootables.push(southWall);

  const eastWall = new THREE.Mesh(
    new THREE.BoxGeometry(mapWallThickness, mapWallHeight, wallLimit * 2),
    wallMat.clone(),
  );
  eastWall.position.set(wallLimit, mapWallHeight * 0.5, 0);
  scene.add(eastWall);
  shootables.push(eastWall);

  const westWall = new THREE.Mesh(
    new THREE.BoxGeometry(mapWallThickness, mapWallHeight, wallLimit * 2),
    wallMat.clone(),
  );
  westWall.position.set(-wallLimit, mapWallHeight * 0.5, 0);
  scene.add(westWall);
  shootables.push(westWall);

  const ammoRnd = createSeededRng(normalizedSeed ^ 0x85EBCA6B);
  const ammoPhaseRnd = createSeededRng(normalizedSeed ^ 0xA0D31F2B);
  for (let i = 0; i < maxAmmoPickups; i += 1) {
    const mesh = createPickupVisualGroup('mana', () => {
      return new THREE.Mesh(ammoPickupGeometry, ammoPickupMaterial.clone());
    });
    const x = (ammoRnd() - 0.5) * 180;
    const z = (ammoRnd() - 0.5) * 180;
    const baseY = 0.35;
    mesh.position.set(x, baseY, z);
    scene.add(mesh);
    ammoPickups.push({
      index: i,
      mesh,
      baseY,
      phase: ammoPhaseRnd() * Math.PI * 2,
      active: true,
      respawnAtMs: 0,
      pendingRequestUntil: 0,
    });
  }

  const shieldRnd = createSeededRng(normalizedSeed ^ 0xC2B2AE35);
  const shieldPhaseRnd = createSeededRng(normalizedSeed ^ 0xD28EA8B9);
  for (let i = 0; i < maxShieldPickups; i += 1) {
    const mesh = createPickupVisualGroup('defensa', () => {
      return new THREE.Mesh(shieldPickupGeometry, shieldPickupMaterial.clone());
    });
    const x = (shieldRnd() - 0.5) * 180;
    const z = (shieldRnd() - 0.5) * 180;
    const baseY = 0.6;
    mesh.position.set(x, baseY, z);
    scene.add(mesh);
    shieldPickups.push({
      index: i,
      mesh,
      baseY,
      phase: shieldPhaseRnd() * Math.PI * 2,
      active: true,
      respawnAtMs: 0,
      pendingRequestUntil: 0,
    });
  }

  const healthRnd = createSeededRng(normalizedSeed ^ 0x27D4EB2F);
  const healthPhaseRnd = createSeededRng(normalizedSeed ^ 0x14C5F317);
  for (let i = 0; i < maxHealthPickups; i += 1) {
    const mesh = createPickupVisualGroup('vida', () => {
      return new THREE.Mesh(new THREE.OctahedronGeometry(0.34, 0), new THREE.MeshStandardMaterial({
        color: 0x90ff9f,
        emissive: 0x2d8f42,
        emissiveIntensity: 0.8,
        roughness: 0.32,
        metalness: 0.25,
      }));
    });
    const x = (healthRnd() - 0.5) * 180;
    const z = (healthRnd() - 0.5) * 180;
    const baseY = 0.55;
    mesh.position.set(x, baseY, z);
    scene.add(mesh);
    healthPickups.push({
      index: i,
      mesh,
      baseY,
      phase: healthPhaseRnd() * Math.PI * 2,
      active: true,
      respawnAtMs: 0,
      pendingRequestUntil: 0,
    });
  }

  currentMapCollisionHash = computeMapCollisionHash(currentMapProfile, pillarBounds);
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

const hasCharacterSpecial = (characterId) => {
  return isSilentmanCharacter(characterId)
    || isNeoorphenCharacter(characterId)
    || isPezunalunarCharacter(characterId)
    || isPumoriCharacter(characterId);
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

const getLunarRainCooldownRemainingMs = () => {
  return Math.max(0, lunarRainCooldownEndsAt - performance.now());
};

const setLunarRainCooldownRemainingMs = (remainingMs) => {
  const numeric = Number(remainingMs);
  if (!Number.isFinite(numeric) || numeric <= 0) {
    lunarRainCooldownEndsAt = 0;
    return;
  }
  lunarRainCooldownEndsAt = performance.now() + numeric;
};

const renderSpecialStat = (force = false) => {
  if (!specialStat) {
    return;
  }
  const inRoom = Boolean(state.joinedRoom);
  if (!hasCharacterSpecial(activeCharacter)) {
    if (force || lastLunarCooldownShown !== -1) {
      specialStat.textContent = 'Especial R: -';
      lastLunarCooldownShown = -1;
    }
    if (abilityHud) {
      abilityHud.classList.add('hidden');
    }
    return;
  }

  const remainingMs = getLunarRainCooldownRemainingMs();
  const secondsLeft = remainingMs > 0 ? Math.ceil(remainingMs / 1000) : 0;
  if (!force && lastLunarCooldownShown === secondsLeft) {
    return;
  }
  lastLunarCooldownShown = secondsLeft;
  specialStat.textContent = secondsLeft > 0
    ? `Especial R: ${secondsLeft}s`
    : 'Especial R: LISTO';

  if (abilityHud) {
    if (inRoom) {
      abilityHud.classList.remove('hidden');
    } else {
      abilityHud.classList.add('hidden');
    }
  }
  if (abilityCooldownText) {
    abilityCooldownText.textContent = secondsLeft > 0 ? `${secondsLeft}s` : 'LISTO';
  }
  if (abilityCooldownFill) {
    const cooldownTotalMs = isSilentmanCharacter(activeCharacter)
      ? silentSpecialCooldownMs
      : lunarSpecialCooldownMs;
    const ratio = Math.max(0, Math.min(1, remainingMs / cooldownTotalMs));
    abilityCooldownFill.style.width = `${Math.round((1 - ratio) * 100)}%`;
  }
};

rebuildMapFromSeed(1);

const updateHud = () => {
  const usingMana = isManaCharacter(activeCharacter);
  const currentAmmoLikeValue = usingMana ? Math.round(mana) : ammoInMag;
  const reserveAmmoLikeValue = usingMana ? maxMana : ammoReserve;
  const ammoLabel = usingMana ? 'Mana' : 'Balas';
  const shownHealth = Math.round(health);
  const shownShield = Math.round(shield);

  healthStat.textContent = `Vida: ${shownHealth}`;
  shieldStat.textContent = `Escudo: ${shownShield}`;
  ammoStat.textContent = `${ammoLabel}: ${currentAmmoLikeValue} / ${reserveAmmoLikeValue}${!usingMana && isReloading ? ' (recargando...)' : ''}`;
  renderSpecialStat(true);
  stats.textContent = `Kills: ${kills}`;
  healthSideLabel.textContent = `${shownHealth}`;
  shieldSideLabel.textContent = `${shownShield}`;
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
    updateTeamScoreHud();
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
    const roomPlayers = Number(state.joinedRoom.players?.length || 0);
    const roomMode = String(room.mode || 'freeforall').toLowerCase();
    const requiredPlayers = Number(room.requiredPlayers || 0);
    const canStartVersus = roomMode !== 'versusmatch'
      || (requiredPlayers > 0 && roomPlayers === requiredPlayers);
    startGameBtn.disabled = room.status === 'in_game' || !canStartVersus;
    endGameBtn.disabled = room.status !== 'in_game';
  } else {
    hostControls.classList.add('hidden');
  }

  syncInfoVisibility();
  renderScoreboard();
  renderPerfPanel();
  updateBleedEffect();
  updateTeamScoreHud();
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
  const winnerTeam = normalizePlayerTeam(winner?.team);
  const safeCountdown = Math.max(1, Number(countdownSeconds) || 10);

  isMatchEnding = true;
  matchWinnerEndsAt = performance.now() + (safeCountdown * 1000);
  matchWinnerSecondsLeft = safeCountdown;
  if (winnerTeam === 'red') {
    winnerText.textContent = 'Ganador: Equipo Rojo';
  } else if (winnerTeam === 'blue') {
    winnerText.textContent = 'Ganador: Equipo Azul';
  } else {
    winnerText.textContent = `Ganador: ${winnerName} (${winnerCharacter})`;
  }
  winnerCounter.textContent = String(matchWinnerSecondsLeft);
  winnerScreen.classList.remove('hidden');

  if (document.pointerLockElement) {
    document.exitPointerLock();
  }
  isFiring = false;
  if (isRespawning) {
    isRespawning = false;
    respawnRequestPending = false;
    lastRespawnRequestAt = 0;
    respawnEndsAt = 0;
    respawnSecondsLeft = getRespawnDurationSeconds();
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

const triggerHitConfirm = (headshot = false) => {
  const now = performance.now();
  crosshairHitUntil = now + 140;
  if (headshot) {
    crosshairHeadshotUntil = now + 220;
  }
};

const triggerKillConfirm = () => {
  crosshairKillUntil = performance.now() + 320;
};

const triggerDamageIndicator = (fromPlayerId) => {
  if (!fromPlayerId || !state.remotePlayers.has(fromPlayerId)) {
    return;
  }
  const attacker = state.remotePlayers.get(fromPlayerId);
  if (!attacker?.group) {
    return;
  }
  const dx = attacker.group.position.x - camera.position.x;
  const dz = attacker.group.position.z - camera.position.z;
  const worldAngle = Math.atan2(dx, -dz);
  const relative = worldAngle - yaw;
  damageIndicatorAngle = (relative * 180) / Math.PI;
  damageIndicatorUntil = performance.now() + 520;
};

const updateCrosshair = () => {
  if (!crosshair) {
    return;
  }
  const now = performance.now();
  const movingSpeed = Math.sqrt((moveVelocity.x * moveVelocity.x) + (moveVelocity.z * moveVelocity.z));
  const moveSpread = Math.min(1, movingSpeed / Math.max(0.001, speed));
  const jumpSpread = isJumping ? 0.85 : 0;
  const gap = 5 + (moveSpread * 7.5) + (jumpSpread * 6) + (recoilKick * 10) + (shotSpread * 6.5);
  crosshair.style.setProperty('--crosshair-gap', `${gap.toFixed(2)}px`);
  crosshair.classList.toggle('hit', now <= crosshairHitUntil);
  crosshair.classList.toggle('headshot', now <= crosshairHeadshotUntil);
  crosshair.classList.toggle('kill', now <= crosshairKillUntil);
};

const updateDamageIndicator = () => {
  if (!damageIndicator) {
    return;
  }
  const visible = performance.now() <= damageIndicatorUntil;
  if (!visible) {
    damageIndicator.classList.remove('visible');
    return;
  }
  damageIndicator.classList.add('visible');
  damageIndicator.style.setProperty('--damage-angle', `${damageIndicatorAngle.toFixed(1)}deg`);
};

const updateTeamAimIndicator = () => {
  if (!teamAimIndicator) {
    return;
  }
  if (!shouldShowTeamMarkers() || !isLocked || isRespawning) {
    teamAimIndicator.classList.add('hidden');
    return;
  }

  camera.getWorldDirection(dir);
  const origin = camera.position;
  const direction = dir.clone().normalize();
  let best = null;
  for (const entry of state.remotePlayers.values()) {
    if (!entry?.group || entry.isDead) {
      continue;
    }
    const toTarget = new THREE.Vector3().subVectors(entry.group.position, origin);
    const proj = toTarget.dot(direction);
    if (proj <= 0 || proj > 140) {
      continue;
    }
    const closestPoint = origin.clone().add(direction.clone().multiplyScalar(proj));
    const distToLineSq = closestPoint.distanceToSquared(entry.group.position);
    if (distToLineSq > (1.45 * 1.45)) {
      continue;
    }
    if (!best || proj < best.proj) {
      best = { proj, team: normalizePlayerTeam(entry.team) };
    }
  }

  if (!best || !best.team || !normalizePlayerTeam(localAvatar.team)) {
    teamAimIndicator.classList.add('hidden');
    return;
  }
  const isFriendly = best.team === normalizePlayerTeam(localAvatar.team);
  teamAimIndicator.textContent = isFriendly ? 'ALIADO' : 'ENEMIGO';
  teamAimIndicator.classList.toggle('friendly', isFriendly);
  teamAimIndicator.classList.toggle('enemy', !isFriendly);
  teamAimIndicator.classList.remove('hidden');
};

const updateMiniMap = () => {
  if (!teamMiniMap) {
    return;
  }
  if (!state.joinedRoom || !shouldShowTeamMarkers()) {
    teamMiniMap.classList.add('hidden');
    return;
  }
  const now = performance.now();
  if (now - miniMapLastRenderAt < 100) {
    return;
  }
  miniMapLastRenderAt = now;
  teamMiniMap.classList.remove('hidden');
  const ctx = teamMiniMap.getContext('2d');
  if (!ctx) {
    return;
  }
  const w = teamMiniMap.width;
  const h = teamMiniMap.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(4, 12, 18, 0.86)';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'rgba(130, 210, 255, 0.45)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(w / 2, h / 2, (Math.min(w, h) * 0.46), 0, Math.PI * 2);
  ctx.stroke();

  const mapRadius = Math.max(60, mapHalfExtent);
  const toMap = (x, z) => {
    const nx = Math.max(-1, Math.min(1, x / mapRadius));
    const nz = Math.max(-1, Math.min(1, z / mapRadius));
    return {
      x: (w / 2) + (nx * (w * 0.42)),
      y: (h / 2) + (nz * (h * 0.42)),
    };
  };

  const drawDot = (x, z, color, size) => {
    const p = toMap(x, z);
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
    ctx.fill();
  };

  for (const entry of state.remotePlayers.values()) {
    if (!entry?.group) {
      continue;
    }
    const team = normalizePlayerTeam(entry.team);
    const color = team === 'red' ? '#ff7f7f' : team === 'blue' ? '#7fa8ff' : '#bfffbf';
    drawDot(entry.group.position.x, entry.group.position.z, color, 3.3);
  }
  const myTeam = normalizePlayerTeam(localAvatar.team);
  const myColor = myTeam === 'red' ? '#ff3f3f' : myTeam === 'blue' ? '#4f7fff' : '#c9ffc9';
  drawDot(camera.position.x, camera.position.z, myColor, 4.2);
};

const resetCombatStats = () => {
  clearAllPumoriOrbitSpecials();
  health = maxHealth;
  shield = startShield;
  ammoInMag = maxAmmoInMag;
  ammoReserve = maxAmmoTotal - maxAmmoInMag;
  mana = maxMana;
  manaHudValue = Math.round(maxMana);
  pendingHealthRegen = 0;
  lunarRainCooldownEndsAt = 0;
  lastLunarCooldownShown = null;
  isReloading = false;
  reloadCooldown = 0;
  isJumping = false;
  jumpVelocity = 0;
  kills = 0;
  isRespawning = false;
  respawnRequestPending = false;
  lastRespawnRequestAt = 0;
  respawnSecondsLeft = getRespawnDurationSeconds();
  respawnEndsAt = 0;
  hideWinnerOverlay();
  isFiring = false;
  crosshairKillUntil = 0;
  damageIndicatorUntil = 0;
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

  sendWs({ type: 'player_reload' });
};

const triggerCharacterSpecial = () => {
  if (!canPlay()) {
    return false;
  }
  if (!hasCharacterSpecial(activeCharacter)) {
    return false;
  }
  const remainingMs = getLunarRainCooldownRemainingMs();
  if (remainingMs > 0) {
    renderSpecialStat(true);
    return true;
  }
  if (isPezunalunarCharacter(activeCharacter)) {
    sendWs({ type: 'player_special_lunar_rain' });
    return true;
  }
  if (isSilentmanCharacter(activeCharacter)) {
    sendWs({ type: 'player_special_silent_cone' });
    return true;
  }
  if (isNeoorphenCharacter(activeCharacter)) {
    sendWs({ type: 'player_special_neoorphen_meteor' });
    return true;
  }
  if (isPumoriCharacter(activeCharacter)) {
    sendWs({ type: 'player_special_pumori_orbit' });
    return true;
  }
  return true;
};

const triggerMobileJump = () => {
  cancelLocalFunnyAnimation();
  if (canPlay() && !isJumping && camera.position.y <= (playerGroundY + 0.001)) {
    isJumping = true;
    jumpVelocity = jumpInitialVelocity;
    sendLocalPlayerState(true);
  }
};

const respawnPlayer = () => {
  if (!isRespawning || !isMatchRunning()) {
    return;
  }
  const now = performance.now();
  if (respawnRequestPending && now - lastRespawnRequestAt < respawnRequestRetryMs) {
    return;
  }
  respawnRequestPending = true;
  lastRespawnRequestAt = now;
  sendWs({ type: 'player_respawn' });
};

const startRespawnCountdown = (serverRespawnAtMs = null) => {
  if (!isMatchRunning()) {
    return;
  }

  isRespawning = true;
  respawnRequestPending = false;
  lastRespawnRequestAt = 0;
  isFiring = false;
  isJumping = false;
  jumpVelocity = 0;
  const estimatedServerNow = getEstimatedServerNowMs();
  const serverRespawnTs = Number(serverRespawnAtMs);
  if (Number.isFinite(serverRespawnTs) && serverRespawnTs > estimatedServerNow) {
    const msUntilRespawn = Math.max(200, serverRespawnTs - estimatedServerNow);
    respawnEndsAt = performance.now() + msUntilRespawn;
    respawnSecondsLeft = Math.max(1, Math.ceil(msUntilRespawn / 1000));
  } else {
    const respawnDurationSeconds = getRespawnDurationSeconds();
    respawnEndsAt = performance.now() + respawnDurationSeconds * 1000;
    respawnSecondsLeft = respawnDurationSeconds;
  }

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

const resolvePreviewClip = (resource) => {
  const animations = resource?.animations || [];
  return resource?.animationSet?.idle
    || resource?.animationSet?.dead
    || resource?.animationSet?.running
    || resource?.animationSet?.funny
    || resource?.animationSet?.attack
    || resource?.animationSet?.jump
    || findAnimationByName(animations, 'idle', ['idle', 'dead', 'stand', 'running', 'walk']);
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
  if (localAvatar.teamOutline) {
    disposeTeamMarker(localAvatar.teamOutline);
  }
  if (localAvatar.group) {
    scene.remove(localAvatar.group);
  }
  localAvatar.group = null;
  localAvatar.avatarRoot = null;
  localAvatar.mixer = null;
  localAvatar.actions = null;
  localAvatar.currentAnimation = '';
  localAvatar.funnyUntil = 0;
  localAvatar.teamOutline = null;
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
  localAvatar.avatarRoot = built.avatarRoot;
  localAvatar.mixer = built.mixer;
  localAvatar.actions = built.actions;
  localAvatar.currentAnimation = '';
  localAvatar.shootUntil = 0;
  localAvatar.funnyUntil = 0;
  ensureLocalTeamOutline();
  setLocalAvatarAnimation('idle');
};

const updateLocalAvatar = (delta) => {
  if (!localAvatar.group) {
    return;
  }
  if (localAvatar.teamOutline) {
    localAvatar.teamOutline.visible = shouldShowTeamMarkers() && !isRespawning;
  }

  const visible = Boolean(state.joinedRoom && isThirdPerson && !isRespawning);
  localAvatar.group.visible = visible;
  if (localAvatar.avatarRoot && localAvatar.avatarRoot !== localAvatar.group) {
    localAvatar.avatarRoot.visible = !state.showCollisionOnly;
  }
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
  ensureRemoteTeamOutline(liveEntry);
  const hpBar = createRemoteHealthBar();
  liveEntry.group.add(hpBar.holder);
  liveEntry.healthBar = hpBar;
  updateRemoteHealthBar(liveEntry);
  ensureRemoteHitboxDebug(liveEntry);
  setRemoteIdle(liveEntry);
};

const disposeRemotePlayer = (entry) => {
  disposeRemoteHitboxDebug(entry);
  if (entry.teamOutline) {
    disposeTeamMarker(entry.teamOutline);
    entry.teamOutline = null;
  }
  if (entry.healthBar) {
    if (entry.healthBar.holder?.parent) {
      entry.healthBar.holder.parent.remove(entry.healthBar.holder);
    }
    if (entry.healthBar.bg) {
      entry.healthBar.bg.geometry.dispose();
      entry.healthBar.bg.material.dispose();
    }
    if (entry.healthBar.fill) {
      entry.healthBar.fill.geometry.dispose();
      entry.healthBar.fill.material.dispose();
    }
    if (entry.healthBar.shieldBg) {
      entry.healthBar.shieldBg.geometry.dispose();
      entry.healthBar.shieldBg.material.dispose();
    }
    if (entry.healthBar.shieldFill) {
      entry.healthBar.shieldFill.geometry.dispose();
      entry.healthBar.shieldFill.material.dispose();
    }
    if (entry.healthBar.manaBg) {
      entry.healthBar.manaBg.geometry.dispose();
      entry.healthBar.manaBg.material.dispose();
    }
    if (entry.healthBar.manaFill) {
      entry.healthBar.manaFill.geometry.dispose();
      entry.healthBar.manaFill.material.dispose();
    }
    if (entry.healthBar.text) {
      entry.healthBar.text.geometry.dispose();
      entry.healthBar.text.material.dispose();
    }
    if (entry.healthBar.textTexture) {
      entry.healthBar.textTexture.dispose();
    }
    entry.healthBar = null;
  }
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
    name: 'Player',
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
    health: maxHealth,
    shield: startShield,
    mana: maxMana,
    isJumping: false,
    deadAt: 0,
    targetPosition: new THREE.Vector3(0, 0, 0),
    targetYaw: 0,
    targetPitch: 0,
    netSnapshots: [],
    netInitialized: false,
    smoothedMoveSpeed: 0,
    movingUntil: 0,
    lastAnimationAt: 0,
    healthBar: null,
    team: null,
    teamOutline: null,
    hitboxDebug: null,
  });

  const entry = state.remotePlayers.get(id);
  const hpBar = createRemoteHealthBar();
  entry.group.add(hpBar.holder);
  entry.healthBar = hpBar;
  updateRemoteHealthBar(entry);
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
  ensureRemoteTeamOutline(entry);
  ensureRemoteHitboxDebug(entry);
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
  if (player.name) {
    entry.name = String(player.name);
  }
  entry.team = normalizePlayerTeam(player.team);
  ensureRemoteTeamOutline(entry);
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
  const moving = Boolean(player.state?.moving);
  const snapshotTs = Number.isFinite(Number(player.ts)) ? Number(player.ts) : Date.now();
  entry.isJumping = Boolean(player.state?.jumping);
  if (moving) {
    entry.movingUntil = Math.max(Number(entry.movingUntil || 0), performance.now() + remoteMovingSignalHoldMs);
  }
  let resourcesChanged = false;
  if (Number.isFinite(Number(player.health))) {
    entry.health = Math.max(0, Math.min(maxHealth, Math.round(Number(player.health))));
    resourcesChanged = true;
  }
  if (Number.isFinite(Number(player.shield))) {
    entry.shield = Math.max(0, Math.min(maxShield, Math.round(Number(player.shield))));
    resourcesChanged = true;
  }
  if (Number.isFinite(Number(player.mana))) {
    entry.mana = Math.max(0, Math.min(maxMana, Math.round(Number(player.mana))));
    resourcesChanged = true;
  }
  if (resourcesChanged) {
    updateRemoteHealthBar(entry);
  }
  const hasAliveFlag = typeof player.alive === 'boolean';
  if (hasAliveFlag) {
    if (!player.alive && !entry.isDead) {
      entry.isDead = true;
      entry.deadAt = performance.now();
      entry.animationUntil = 0;
      setRemoteAnimation(entry, 'death');
      updateRemoteHealthBar(entry);
    } else if (player.alive && entry.isDead) {
      entry.isDead = false;
      entry.deadAt = 0;
      entry.animationUntil = 0;
      setRemoteIdle(entry);
      if (!Number.isFinite(Number(player.health))) {
        entry.health = maxHealth;
      }
      updateRemoteHealthBar(entry);
    }
  }

  const snapshot = {
    ts: snapshotTs,
    x: pos.x,
    y: pos.y - playerGroundY,
    z: pos.z,
    yaw: rot.yaw,
    pitch: rot.pitch,
    jumping: Boolean(player.state?.jumping),
    moving,
  };
  const lastSnapshot = entry.netSnapshots.length > 0
    ? entry.netSnapshots[entry.netSnapshots.length - 1]
    : null;
  if (lastSnapshot && snapshot.ts <= Number(lastSnapshot.ts)) {
    return;
  }
  entry.netSnapshots.push(snapshot);
  if (entry.netSnapshots.length > 32) {
    entry.netSnapshots.splice(0, entry.netSnapshots.length - 32);
  }

  if (!entry.netInitialized) {
    entry.group.position.set(snapshot.x, snapshot.y, snapshot.z);
    entry.targetPosition.set(snapshot.x, snapshot.y, snapshot.z);
    entry.group.rotation.y = snapshot.yaw + remoteFacingYawOffset;
    entry.targetYaw = snapshot.yaw;
    entry.targetPitch = snapshot.pitch;
    entry.smoothedMoveSpeed = 0;
    entry.netInitialized = true;
  }
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
  if (state.showCollisionOnly) {
    return;
  }
  tmpTravelVec.subVectors(end, start);
  const distance = tmpTravelVec.length();
  if (distance <= 0.0001) {
    return;
  }
  const mid = tmpClosestPoint.copy(start).add(end).multiplyScalar(0.5);
  const budget = getVfxSpawnBudget(mid);
  if (budget < 0.999 && Math.random() > budget) {
    return;
  }

  const radiusScale = Number.isFinite(options.radiusScale) ? options.radiusScale : 1;
  const life = Number.isFinite(options.life) ? options.life : 0.14;
  const opacity = Number.isFinite(options.opacity) ? options.opacity : 1;

  const material = tracerMaterial.clone();
  material.color = new THREE.Color(color);
  material.opacity = opacity;
  const tracer = new THREE.Mesh(tracerGeometry, material);
  tracer.position.copy(mid);
  tracer.quaternion.setFromUnitVectors(tracerUpAxis, tmpTravelVec.multiplyScalar(1 / distance));
  tracer.scale.set(radiusScale, distance, radiusScale);
  tracer.userData.life = life;
  scene.add(tracer);
  activeTracers.push(tracer);
  if (activeTracers.length > getDynamicMaxTracers()) {
    const old = activeTracers.shift();
    if (old) {
      scene.remove(old);
      old.material.dispose();
    }
  }
};

const createNormalShotCollisionVisual = (start, end, color = 0xf7ff80) => {
  tmpTravelVec.subVectors(end, start);
  const distance = tmpTravelVec.length();
  if (distance <= 0.0001) {
    return;
  }
  const line = new THREE.Mesh(
    tracerGeometry,
    new THREE.MeshBasicMaterial({
      color,
      wireframe: true,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  const mid = tmpClosestPoint.copy(start).add(end).multiplyScalar(0.5);
  line.position.copy(mid);
  line.quaternion.setFromUnitVectors(tracerUpAxis, tmpTravelVec.multiplyScalar(1 / distance));
  line.scale.set(1.9, distance, 1.9);
  line.userData.life = 0.12;
  scene.add(line);
  activeNormalShotCollisionVisuals.push(line);
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

  const palette = options.palette || getAbilityPalette('holy', options.team);
  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 14, 14),
    new THREE.MeshBasicMaterial({
      color: palette.impactA,
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
    colors: {
      a: palette.impactA,
      b: palette.impactB,
      tracer: palette.tracer,
    },
  });
};

const createHammerMesh = (scale = 1, opacity = 1, team = null) => {
  const palette = getAbilityPalette('hammer', team);
  const hammer = new THREE.Group();
  const head = new THREE.Mesh(
    new THREE.BoxGeometry(0.46 * scale, 0.26 * scale, 0.22 * scale),
    new THREE.MeshBasicMaterial({
      color: palette.impactA,
      transparent: true,
      opacity: Math.max(0.1, Math.min(1, 0.98 * opacity)),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  const handle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05 * scale, 0.05 * scale, 0.7 * scale, 10),
    new THREE.MeshBasicMaterial({
      color: palette.tracer,
      transparent: true,
      opacity: Math.max(0.1, Math.min(1, 0.95 * opacity)),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  handle.rotation.z = Math.PI / 2;
  hammer.add(head);
  hammer.add(handle);
  return hammer;
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

  const palette = options.palette || getAbilityPalette('hammer', options.team);
  const hammer = createHammerMesh(1, 1, options.team);
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
    colors: {
      a: palette.impactA,
      b: palette.impactB,
      tracer: palette.tracer,
    },
  });
};

const clearPumoriOrbitSpecialByOwner = (ownerId) => {
  const targetOwner = String(ownerId || '');
  for (let i = activePumoriOrbitSpecials.length - 1; i >= 0; i -= 1) {
    const special = activePumoriOrbitSpecials[i];
    if (special.ownerId !== targetOwner) {
      continue;
    }
    for (let j = 0; j < special.hammers.length; j += 1) {
      const hammerEntry = special.hammers[j];
      const hammer = hammerEntry?.mesh;
      if (!hammer) {
        continue;
      }
      if (hammerEntry.disposed) {
        continue;
      }
      scene.remove(hammer);
      hammer.traverse((node) => {
        if (!node.isMesh) {
          return;
        }
        if (node.geometry) {
          node.geometry.dispose();
        }
        if (node.material) {
          node.material.dispose();
        }
      });
      hammerEntry.disposed = true;
    }
    activePumoriOrbitSpecials.splice(i, 1);
  }
};

const clearAllPumoriOrbitSpecials = () => {
  for (let i = activePumoriOrbitSpecials.length - 1; i >= 0; i -= 1) {
    clearPumoriOrbitSpecialByOwner(activePumoriOrbitSpecials[i]?.ownerId);
  }
};

const getPlayerPositionById = (playerId) => {
  const id = String(playerId || '');
  if (!id) {
    return null;
  }
  if (state.self && id === state.self.id) {
    return camera.position.clone();
  }
  const entry = state.remotePlayers.get(id);
  if (entry?.group) {
    return entry.group.position.clone();
  }
  return null;
};

const startPumoriOrbitSpecialVisual = (playerId, durationMs, elapsedMs = 0, fallbackCenter = null) => {
  const ownerId = String(playerId || '');
  if (!ownerId) {
    return;
  }
  clearPumoriOrbitSpecialByOwner(ownerId);
  const center = getPlayerPositionById(ownerId)
    || (fallbackCenter instanceof THREE.Vector3 ? fallbackCenter.clone() : null);
  const now = performance.now();
  const safeElapsedMs = Math.max(0, Number(elapsedMs) || 0);
  const visualStartAt = now - safeElapsedMs;
  const hammers = [];
  const duration = Math.max(500, Number(durationMs) || 10_000);
  const ownerTeam = getTeamByPlayerId(ownerId);

  activePumoriOrbitSpecials.push({
    ownerId,
    team: ownerTeam,
    hammers,
    createdAt: visualStartAt,
    endAt: visualStartAt + duration,
    spawnIntervalMs: 220,
    nextSpawnAt: visualStartAt,
    spawnCount: 0,
    maxOrbitRadius: 22,
    maxActiveHammers: 28,
    phase: Math.random() * Math.PI * 2,
    waitingOwnerUntil: center ? 0 : now + 10000,
  });
};

const disposePumoriOrbitHammer = (hammerEntry, impactPoint = null) => {
  if (!hammerEntry?.mesh || hammerEntry.disposed) {
    return;
  }
  const hammer = hammerEntry.mesh;
  scene.remove(hammer);
  hammer.traverse((node) => {
    if (!node.isMesh) {
      return;
    }
    if (node.geometry) {
      node.geometry.dispose();
    }
    if (node.material) {
      node.material.dispose();
    }
  });
  hammerEntry.disposed = true;
  hammer.visible = false;
  disposeProjectileCollisionDebug(hammerEntry);

  if (impactPoint) {
    const impactA = createImpact(impactPoint, 0xfff2c6);
    const impactB = createImpact(impactPoint, 0x9af0ff);
    if (impactA) {
      impactA.scale.setScalar(1.9);
      impactA.userData.life = 0.28;
    }
    if (impactB) {
      impactB.scale.setScalar(1.45);
      impactB.userData.life = 0.24;
    }
  }
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

  const palette = options.palette || getAbilityPalette('poison', options.team);
  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 16, 16),
    new THREE.MeshBasicMaterial({
      color: palette.tracer,
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
    colors: {
      a: palette.impactA,
      b: palette.impactB,
      tracer: palette.tracer,
    },
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

  const palette = options.palette || getAbilityPalette('lunar', options.team);
  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 16, 16),
    new THREE.MeshBasicMaterial({
      color: palette.impactA,
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
    colors: {
      a: palette.impactA,
      b: palette.impactB,
      tracer: palette.tracer,
    },
  });
};

const createImpact = (position, color = 0x7dff92) => {
  if (state.showCollisionOnly) {
    return null;
  }
  const budget = getVfxSpawnBudget(position);
  if (budget < 0.999 && Math.random() > budget) {
    return null;
  }
  if (activeImpacts.length >= getDynamicMaxImpacts()) {
    return null;
  }
  const impact = new THREE.Mesh(impactGeometry, impactMaterial.clone());
  impact.material.color = new THREE.Color(color);
  impact.position.copy(position);
  impact.userData.life = 0.26;
  scene.add(impact);
  activeImpacts.push(impact);
  return impact;
};

const createHitWave = (position, color = 0x9fffb6) => {
  if (state.showCollisionOnly) {
    return null;
  }
  if (!position) {
    return null;
  }
  const budget = getVfxSpawnBudget(position);
  if (budget < 0.999 && Math.random() > budget) {
    return null;
  }
  if (activeHitWaves.length >= getDynamicMaxImpacts()) {
    return null;
  }
  const wave = new THREE.Mesh(hitWaveGeometry, hitWaveMaterial.clone());
  wave.material.color = new THREE.Color(color);
  wave.position.copy(position);
  wave.position.y += hitWaveYOffset;
  wave.rotation.x = -Math.PI / 2;
  wave.scale.setScalar(hitWaveStartScale);
  wave.userData.life = hitWaveLife;
  wave.userData.expand = hitWaveExpand;
  scene.add(wave);
  activeHitWaves.push(wave);
  return wave;
};

const testSegmentSphereHit = (segStart, segEnd, center, radius) => {
  tmpSegDir.subVectors(segEnd, segStart);
  const segLen = tmpSegDir.length();
  if (segLen <= 0.0001) {
    return null;
  }
  tmpSegDir.multiplyScalar(1 / segLen);
  tmpSegToCenter.subVectors(center, segStart);
  const proj = tmpSegToCenter.dot(tmpSegDir);
  if (proj < 0 || proj > segLen) {
    return null;
  }
  tmpClosestPoint.copy(tmpSegDir).multiplyScalar(proj).add(segStart);
  if (tmpClosestPoint.distanceToSquared(center) <= radius * radius) {
    return tmpClosestPoint.clone();
  }
  return null;
};

const getSegmentWallImpact = (segStart, segEnd, pad = 0.2) => {
  tmpTravelVec.subVectors(segEnd, segStart);
  const distance = tmpTravelVec.length();
  if (distance <= 0.0001) {
    return null;
  }
  tmpTravelVec.multiplyScalar(1 / distance);
  raycaster.set(segStart, tmpTravelVec);
  raycaster.far = distance + pad;
  const hits = raycaster.intersectObjects(shootables, false);
  const wallPoint = hits.length > 0 ? hits[0].point.clone() : null;

  const dy = segEnd.y - segStart.y;
  let groundPoint = null;
  if (Math.abs(dy) > 1e-6) {
    const t = (0.2 - segStart.y) / dy;
    if (t >= 0 && t <= 1) {
      groundPoint = new THREE.Vector3(
        segStart.x + ((segEnd.x - segStart.x) * t),
        0.2,
        segStart.z + ((segEnd.z - segStart.z) * t),
      );
    }
  }

  if (!wallPoint) {
    return groundPoint;
  }
  if (!groundPoint) {
    return wallPoint;
  }
  return segStart.distanceToSquared(groundPoint) < segStart.distanceToSquared(wallPoint)
    ? groundPoint
    : wallPoint;
};

const getLocalSegmentCharacterImpact = (segStart, segEnd) => {
  tmpLocalHead.set(camera.position.x, camera.position.y + headCenterOffsetY, camera.position.z);
  tmpLocalBody.set(camera.position.x, camera.position.y + bodyCenterOffsetY, camera.position.z);
  const head = testSegmentSphereHit(segStart, segEnd, tmpLocalHead, headshotRadius);
  if (head) {
    return { point: head, headshot: true };
  }
  const body = testSegmentSphereHit(segStart, segEnd, tmpLocalBody, bodyshotRadius);
  if (body) {
    return { point: body, headshot: false };
  }
  tmpLocalBody.set(
    camera.position.x,
    camera.position.y + (bodyCenterOffsetY * 0.45),
    camera.position.z,
  );
  const torso = testSegmentSphereHit(segStart, segEnd, tmpLocalBody, torsoRadius);
  if (torso) {
    return { point: torso, headshot: false };
  }
  return null;
};

const getRemoteSegmentCharacterImpact = (entry, segStart, segEnd) => {
  if (!entry?.group || entry.isDead) {
    return null;
  }
  const headCenter = new THREE.Vector3(
    entry.group.position.x,
    entry.group.position.y + remoteHeadCenterOffsetY,
    entry.group.position.z,
  );
  const bodyCenter = new THREE.Vector3(
    entry.group.position.x,
    entry.group.position.y + remoteBodyCenterOffsetY,
    entry.group.position.z,
  );
  const torsoCenter = new THREE.Vector3(
    entry.group.position.x,
    entry.group.position.y + remoteTorsoCenterOffsetY,
    entry.group.position.z,
  );
  return testSegmentSphereHit(segStart, segEnd, headCenter, headshotRadius)
    || testSegmentSphereHit(segStart, segEnd, bodyCenter, bodyshotRadius)
    || testSegmentSphereHit(segStart, segEnd, torsoCenter, torsoRadius);
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
  localAvatar.team = normalizePlayerTeam(selfPlayer.team);
  ensureLocalTeamOutline();

  const pos = selfPlayer.state?.position;
  const rot = selfPlayer.state?.rotation;

  if (pos) {
    camera.position.set(pos.x, pos.y, pos.z);
    constrainPlayerToWorld();
    clearLocalPredictionHistory();
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
    health = Math.max(0, Math.min(maxHealth, Number(selfPlayer.health)));
  }
  if (Number.isFinite(selfPlayer.shield)) {
    shield = Math.max(0, Math.min(maxShield, Math.round(selfPlayer.shield)));
  }
  if (Number.isFinite(selfPlayer.mana)) {
    mana = Math.max(0, Math.min(maxMana, Math.round(selfPlayer.mana)));
    manaHudValue = Math.round(mana);
  }
  if (Number.isFinite(Number(selfPlayer.ammoInMag))) {
    ammoInMag = Math.max(0, Math.min(maxAmmoInMag, Math.round(Number(selfPlayer.ammoInMag))));
  }
  if (Number.isFinite(Number(selfPlayer.ammoReserve))) {
    ammoReserve = Math.max(0, Math.min(maxAmmoTotal, Math.round(Number(selfPlayer.ammoReserve))));
  }
  if (typeof selfPlayer.isReloading === 'boolean') {
    isReloading = Boolean(selfPlayer.isReloading);
  }
  if (Number.isFinite(Number(selfPlayer.reloadRemainingMs))) {
    reloadCooldown = Math.max(0, Number(selfPlayer.reloadRemainingMs) / 1000);
  }
  if (Number.isFinite(Number(selfPlayer.pendingHealthRegen))) {
    pendingHealthRegen = Math.max(0, Number(selfPlayer.pendingHealthRegen));
  }
  if (Number.isFinite(Number(selfPlayer.lunarRainCooldownMs))) {
    setLunarRainCooldownRemainingMs(Number(selfPlayer.lunarRainCooldownMs));
  }
  clampPendingHealthRegenToMissing();
  if (selfPlayer.alive === false && !isRespawning && isMatchRunning()) {
    startRespawnCountdown(selfPlayer.respawnAvailableAtMs);
  }
  if (selfPlayer.alive === true && isRespawning) {
    isRespawning = false;
    respawnRequestPending = false;
    lastRespawnRequestAt = 0;
    respawnEndsAt = 0;
    respawnSecondsLeft = getRespawnDurationSeconds();
    updateRespawnOverlay();
  }
};

const syncLocalTeamFromRoom = (roomState) => {
  if (!state.self || !roomState?.players) {
    return;
  }
  const selfPlayer = roomState.players.find((player) => player.id === state.self.id);
  if (!selfPlayer) {
    return;
  }
  localAvatar.team = normalizePlayerTeam(selfPlayer.team);
  ensureLocalTeamOutline();
};

const applyRoomState = (roomState, options = {}) => {
  const wasOutsideRoom = !state.joinedRoom;
  if (wasOutsideRoom) {
    resetCombatStats();
  }
  state.joinedRoom = roomState;
  const roomSeed = Number.isFinite(roomState.room?.mapSeed)
    ? roomState.room.mapSeed
    : hashStringToSeed(roomState.room?.id);
  const backendMapHash = String(roomState.room?.mapCollisionHash || '').trim().toLowerCase();
  serverMapCollisionHash = backendMapHash || null;
  const shouldForceMapRebuild = Boolean(
    serverMapCollisionHash
      && currentMapSeed === Number(roomSeed)
      && currentMapCollisionHash
      && currentMapCollisionHash !== serverMapCollisionHash,
  );
  rebuildMapFromSeed(roomSeed, shouldForceMapRebuild);
  applyPickupStateSnapshot(roomState.room?.pickups);
  syncRemotePlayersFromRoom(roomState);
  syncLocalTeamFromRoom(roomState);
  applyWeather(roomState.room?.weather);
  setBattleTheme(roomState.room?.battleTheme);

  if (options.applyOwnState || wasOutsideRoom) {
    applyOwnStateFromRoom(roomState);
  }

  const keepMatchSceneVisible = roomState.room.status === 'in_game' || roomState.room.status === 'cooldown';
  setInRoom(keepMatchSceneVisible);
  syncModeUiClass();
  forceHideTeamModeUiIfNeeded(roomState.room);
  syncLobbyScreens();
  if (roomState.room.status !== 'cooldown') {
    hideWinnerOverlay();
  }
  updateVersusLobbyUi();
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
      const storedName = getStoredPlayerName();
      const preferredName = storedName || sanitizePlayerName(state.self.name || '');
      playerNameInput.value = preferredName;
      if (nameGateInput) {
        nameGateInput.value = preferredName;
      }
      if (!state.profileReady && storedName.length >= 2) {
        setProfileReady(true);
      }
      state.lobbyUsers = Array.isArray(payload.data?.lobby?.players) ? payload.data.lobby.players : [];
      if (state.self.character && availableCharacters.includes(state.self.character)) {
        activeCharacter = state.self.character;
        characterSelect.value = state.self.character;
      }
      configureLocalAttackSound(state.self.character || activeCharacter);
      state.rooms = payload.data.rooms || [];
      renderPlayerNameBadge();
      renderLobbyUsers();
      renderLobbyChat();
      mountPreviewModel();
      renderRooms();
      syncLobbyScreens();
      if (state.profileReady) {
        sendWs({
          type: 'set_profile',
          playerName: sanitizePlayerName(playerNameInput.value),
          character: characterSelect.value || activeCharacter,
        });
      }
      return;
    }

    if (payload.type === 'rooms_list') {
      state.rooms = payload.data || [];
      renderRooms();
      return;
    }

    if (payload.type === 'lobby_presence') {
      state.lobbyUsers = Array.isArray(payload.data?.players) ? payload.data.players : [];
      renderLobbyUsers();
      return;
    }

    if (payload.type === 'lobby_chat_message') {
      const msg = payload.data || {};
      const playerName = String(msg.playerName || 'Player');
      const text = String(msg.text || '');
      pushLobbyChatMessage(playerName, text);
      return;
    }

    if (payload.type === 'profile_updated') {
      const nextName = sanitizePlayerName(payload.data?.player?.name || '');
      if (nextName) {
        if (state.self) {
          state.self.name = nextName;
        }
        playerNameInput.value = nextName;
        renderPlayerNameBadge();
      }
      return;
    }

    if (payload.type === 'room_joined') {
      clearLocalPredictionHistory();
      applyRoomState(payload.data, { applyOwnState: true });
      return;
    }

    if (payload.type === 'room_state') {
      applyRoomState(payload.data);
      return;
    }

    if (payload.type === 'left_room') {
      clearLocalPredictionHistory();
      state.joinedRoom = null;
      state.showScoreboard = false;
      pendingLatencyProbe = null;
      state.latencyMs = null;
      clearRemotePlayers();
      setInRoom(false);
      syncModeUiClass();
      stopRemoteShootSound();
      applyWeather('night');
      setBattleTheme('battle1');
      resetCombatStats();
      respawnRequestPending = false;
      lastRespawnRequestAt = 0;
      hideWinnerOverlay();
      localAvatar.team = null;
      ensureLocalTeamOutline();
      versusChatMessages.length = 0;
      killFeedMessages.length = 0;
      renderKillFeed();
      renderVersusChat();
      updateHud();
      syncLobbyScreens();
      updateVersusLobbyUi();
      refreshBackgroundMusic();
      return;
    }

    if (payload.type === 'pong') {
      const probeId = String(payload.data?.probeId || '');
      updateServerTimeOffset(payload.data?.serverTs);
      if (pendingLatencyProbe && probeId === pendingLatencyProbe.id) {
        state.latencyMs = performance.now() - pendingLatencyProbe.sentAt;
        pendingLatencyProbe = null;
        renderPerfPanel();
      }
      return;
    }

    if (payload.type === 'ping') {
      const probeId = payload.data?.probeId;
      updateServerTimeOffset(payload.data?.serverTs);
      if (Number.isFinite(Number(probeId))) {
        sendWs({
          type: 'pong',
          probeId: Number(probeId),
          clientTs: Date.now(),
        });
      }
      return;
    }

    if (payload.type === 'latency_update') {
      const latency = Number(payload.data?.latencyMs);
      if (Number.isFinite(latency) && latency >= 0) {
        state.latencyMs = latency;
        renderPerfPanel();
      }
      updateServerTimeOffset(payload.data?.serverTs);
      return;
    }

    if (payload.type === 'player_move_ack') {
      const pos = payload.data?.position;
      if (
        pos
        && Number.isFinite(Number(pos.x))
        && Number.isFinite(Number(pos.y))
        && Number.isFinite(Number(pos.z))
      ) {
        const ackPos = new THREE.Vector3(Number(pos.x), Number(pos.y), Number(pos.z));
        const ackSeq = Number(payload.data?.inputSeq);
        let errorBaseX = camera.position.x;
        let errorBaseY = camera.position.y;
        let errorBaseZ = camera.position.z;
        if (Number.isFinite(ackSeq) && ackSeq > 0) {
          const idx = pendingMoveInputs.findIndex((entry) => entry.seq === ackSeq);
          if (idx >= 0) {
            const predicted = pendingMoveInputs[idx].predictedPosition;
            const sentAt = Number(pendingMoveInputs[idx].sentAt);
            if (Number.isFinite(sentAt) && sentAt > 0) {
              registerAckRttSample(performance.now() - sentAt);
            }
            if (predicted) {
              errorBaseX = predicted.x;
              errorBaseY = predicted.y;
              errorBaseZ = predicted.z;
            }
            pendingMoveInputs.splice(0, idx + 1);
          } else if (pendingMoveInputs.length > 0) {
            reconcileStats.lateAcksInWindow += 1;
            const pruneUntil = pendingMoveInputs.findIndex((entry) => entry.seq > ackSeq);
            if (pruneUntil > 0) {
              pendingMoveInputs.splice(0, pruneUntil);
            }
          }
        }
        const dx = ackPos.x - errorBaseX;
        const dy = ackPos.y - errorBaseY;
        const dz = ackPos.z - errorBaseZ;
        const error = Math.sqrt((dx * dx) + (dy * dy) + (dz * dz));
        registerReconcileErrorSample(error);
        const correctedTarget = camera.position.clone().add(new THREE.Vector3(dx, dy, dz));
        if (error >= localReconcileHardSnapDistance) {
          reconcileStats.correctionsInWindow += 1;
          registerCorrectionEvent('hard');
          camera.position.copy(correctedTarget);
          constrainPlayerToWorld();
          localReconcileTarget = null;
          localReconcileExpiresAt = 0;
        } else if (error >= localReconcileSoftError) {
          reconcileStats.correctionsInWindow += 1;
          registerCorrectionEvent('soft');
          localReconcileTarget = correctedTarget;
          localReconcileExpiresAt = performance.now() + localReconcileExpireMs;
        }
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
      clearPumoriOrbitSpecialByOwner(playerId);
      if (playerId && state.remotePlayers.has(playerId)) {
        disposeRemotePlayer(state.remotePlayers.get(playerId));
        state.remotePlayers.delete(playerId);
      }
      return;
    }

    if (payload.type === 'player_move') {
      const {
        playerId, position, rotation, character, jumping, moving, ts, health: remoteHealth, shield: remoteShield, mana: remoteMana,
      } = payload.data || {};
      if (!playerId || (state.self && playerId === state.self.id)) {
        return;
      }

      syncRemotePlayer({
        id: playerId,
        ts,
        character,
        health: remoteHealth,
        shield: remoteShield,
        mana: remoteMana,
        state: { position, rotation, jumping, moving },
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
      const shooterTeam = normalizePlayerTeam(shooterEntry?.team || getTeamByPlayerId(shot.playerId));
      const shooterPalette = getTeamPalette(shooterTeam);
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
        createHolyShotVisual(origin, visualEnd, { source: 'remote', ownerId: shot.playerId, team: shooterTeam });
        triggerNaturePulse(origin);
      } else if (shooterUsesHammer) {
        createSacredHammerVisual(origin, visualEnd, { source: 'remote', ownerId: shot.playerId, team: shooterTeam });
        triggerNaturePulse(origin);
      } else if (shooterUsesPoison) {
        createPoisonGasVisual(origin, visualEnd, { source: 'remote', ownerId: shot.playerId, team: shooterTeam });
        triggerNaturePulse(origin);
      } else if (shooterUsesLunar) {
        createLunarFireVisual(origin, visualEnd, { source: 'remote', ownerId: shot.playerId, team: shooterTeam });
        triggerNaturePulse(origin);
      } else {
        if (state.showCollisionOnly) {
          createNormalShotCollisionVisual(origin, visualEnd, shooterPalette.tracer);
        } else {
          createTracer(origin, visualEnd, shooterPalette.tracer);
          createImpact(visualEnd, shooterPalette.impactB);
          createHitWave(visualEnd, shooterPalette.impactA);
        }
      }
      registerRemoteShootSound(origin, shooterCharacter);
      return;
    }

    if (payload.type === 'player_shot_ack') {
      const ackShotId = Number(payload.data?.shotId);
      if (Number.isFinite(ackShotId)) {
        const sentAt = pendingShotAcks.get(ackShotId);
        if (Number.isFinite(sentAt)) {
          registerShotAckSample(performance.now() - sentAt);
          pendingShotAcks.delete(ackShotId);
        }
      }
      localAvatar.shootUntil = performance.now() + 420;
      startShootSound();
      return;
    }

    if (payload.type === 'special_lunar_rain_wave') {
      const data = payload.data || {};
      const ownerId = String(data.playerId || '');
      const ownerTeam = getTeamByPlayerId(ownerId);
      const ownerPalette = getAbilityPalette('lunar', ownerTeam);
      const strikes = Array.isArray(data.strikes) ? data.strikes : [];
      for (let i = 0; i < strikes.length; i += 1) {
        const strike = strikes[i] || {};
        const start = strike.start || {};
        const impact = strike.impact || {};
        if (
          !Number.isFinite(Number(start.x))
          || !Number.isFinite(Number(start.y))
          || !Number.isFinite(Number(start.z))
          || !Number.isFinite(Number(impact.x))
          || !Number.isFinite(Number(impact.y))
          || !Number.isFinite(Number(impact.z))
        ) {
          continue;
        }
        const startVec = new THREE.Vector3(Number(start.x), Number(start.y), Number(start.z));
        const impactVec = new THREE.Vector3(Number(impact.x), Number(impact.y), Number(impact.z));
        createLunarFireVisual(startVec, impactVec, { source: 'local', ownerId, team: ownerTeam });
        createImpact(impactVec, Math.random() > 0.5 ? ownerPalette.impactA : ownerPalette.impactB);
      }
      return;
    }

    if (payload.type === 'special_silent_cone') {
      const data = payload.data || {};
      const ownerId = String(data.playerId || '');
      const originData = data.origin || {};
      const rays = Array.isArray(data.rays) ? data.rays : [];
      if (
        !ownerId
        || !Number.isFinite(Number(originData.x))
        || !Number.isFinite(Number(originData.y))
        || !Number.isFinite(Number(originData.z))
      ) {
        return;
      }
      const origin = new THREE.Vector3(Number(originData.x), Number(originData.y), Number(originData.z));
      const shooterEntry = state.remotePlayers.get(ownerId);
      const ownerTeam = getTeamByPlayerId(ownerId);
      const shooterCharacter = data.character || shooterEntry?.character || 'silentman';
      if (ownerId !== state.self?.id && shooterEntry && !shooterEntry.isDead) {
        setRemoteAnimation(shooterEntry, 'shoot');
        shooterEntry.animationUntil = performance.now() + 420;
      }
      const step = Math.max(1, Math.ceil(rays.length / maxSilentSpecialVisualRays));
      for (let i = 0; i < rays.length; i += step) {
        const ray = rays[i] || {};
        const direction = ray.direction || {};
        const distance = Number(ray.distance || 0);
        if (
          !Number.isFinite(Number(direction.x))
          || !Number.isFinite(Number(direction.y))
          || !Number.isFinite(Number(direction.z))
          || !Number.isFinite(distance)
          || distance <= 0
        ) {
          continue;
        }
        const dir = new THREE.Vector3(Number(direction.x), Number(direction.y), Number(direction.z)).normalize();
        const end = origin.clone().add(dir.multiplyScalar(distance));
        createHolyShotVisual(origin.clone(), end, { source: 'local', ownerId, team: ownerTeam });
      }
      triggerNaturePulse(origin);
      if (ownerId !== state.self?.id) {
        registerRemoteShootSound(origin, shooterCharacter);
      }
      return;
    }

    if (payload.type === 'special_neoorphen_meteor_wave') {
      const data = payload.data || {};
      const ownerId = String(data.playerId || '');
      const ownerTeam = getTeamByPlayerId(ownerId);
      const ownerPalette = getAbilityPalette('poison', ownerTeam);
      const strikes = Array.isArray(data.strikes) ? data.strikes : [];
      let firstImpact = null;
      for (let i = 0; i < strikes.length; i += 1) {
        const strike = strikes[i] || {};
        const start = strike.start || {};
        const impact = strike.impact || {};
        if (
          !Number.isFinite(Number(start.x))
          || !Number.isFinite(Number(start.y))
          || !Number.isFinite(Number(start.z))
          || !Number.isFinite(Number(impact.x))
          || !Number.isFinite(Number(impact.y))
          || !Number.isFinite(Number(impact.z))
        ) {
          continue;
        }
        const startVec = new THREE.Vector3(Number(start.x), Number(start.y), Number(start.z));
        const impactVec = new THREE.Vector3(Number(impact.x), Number(impact.y), Number(impact.z));
        if (!firstImpact) {
          firstImpact = impactVec.clone();
        }
        createPoisonGasVisual(startVec, impactVec, { source: 'local', ownerId, team: ownerTeam });
        createTracer(startVec, impactVec, ownerPalette.tracer, { radiusScale: 1.6, life: 0.52, opacity: 0.98 });
        const cloudA = createImpact(impactVec, ownerPalette.tracer);
        const cloudB = createImpact(impactVec, ownerPalette.impactB);
        if (cloudA) {
          cloudA.scale.setScalar(2.6);
          cloudA.userData.life = 0.48;
        }
        if (cloudB) {
          cloudB.scale.setScalar(2.1);
          cloudB.userData.life = 0.42;
        }
      }
      if (firstImpact) {
        triggerNaturePulse(firstImpact);
      }
      return;
    }

    if (payload.type === 'special_pumori_orbit_start') {
      const ownerId = String(payload.data?.playerId || '');
      const durationMs = Number(payload.data?.durationMs || 10_000);
      const castTs = Number(payload.data?.ts);
      const originData = payload.data?.origin || {};
      if (!ownerId) {
        return;
      }
      let fallbackCenter = null;
      if (
        Number.isFinite(Number(originData.x))
        && Number.isFinite(Number(originData.y))
        && Number.isFinite(Number(originData.z))
      ) {
        fallbackCenter = new THREE.Vector3(
          Number(originData.x),
          Number(originData.y),
          Number(originData.z),
        );
      }
      const elapsedMs = Number.isFinite(castTs)
        ? Math.max(0, getEstimatedServerNowMs() - castTs)
        : 0;
      startPumoriOrbitSpecialVisual(ownerId, durationMs, elapsedMs, fallbackCenter);
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
        health = Math.max(0, Math.min(maxHealth, nextHealth));
      }
      if (Number.isFinite(nextShield)) {
        shield = Math.max(0, Math.min(maxShield, Math.round(nextShield)));
      }
      clampPendingHealthRegenToMissing();
      bleedHitFlash = Math.min(0.45, bleedHitFlash + (isHeadshot ? 0.35 : 0.2));
      triggerDamageIndicator(payload.data?.fromPlayerId);
      updateHud();
      return;
    }

    if (payload.type === 'hit_confirm') {
      triggerHitConfirm(Boolean(payload.data?.headshot));
      return;
    }

    if (payload.type === 'player_resources') {
      const nextMana = Number(payload.data?.mana);
      const nextHealth = Number(payload.data?.health);
      const nextShield = Number(payload.data?.shield);
      const nextAmmoInMag = Number(payload.data?.ammoInMag);
      const nextAmmoReserve = Number(payload.data?.ammoReserve);
      const nextPendingHealthRegen = Number(payload.data?.pendingHealthRegen);
      const nextLunarRainCooldownMs = Number(payload.data?.lunarRainCooldownMs);
      const nextIsReloading = payload.data?.isReloading;
      const nextReloadRemainingMs = Number(payload.data?.reloadRemainingMs);
      let changed = false;
      if (Number.isFinite(nextMana)) {
        mana = Math.max(0, Math.min(maxMana, Math.round(nextMana)));
        manaHudValue = Math.round(mana);
        changed = true;
      }
      if (Number.isFinite(nextHealth)) {
        health = Math.max(0, Math.min(maxHealth, nextHealth));
        changed = true;
      }
      if (Number.isFinite(nextShield)) {
        shield = Math.max(0, Math.min(maxShield, Math.round(nextShield)));
        changed = true;
      }
      if (Number.isFinite(nextAmmoInMag)) {
        ammoInMag = Math.max(0, Math.min(maxAmmoInMag, Math.round(nextAmmoInMag)));
        changed = true;
      }
      if (Number.isFinite(nextAmmoReserve)) {
        ammoReserve = Math.max(0, Math.min(maxAmmoTotal, Math.round(nextAmmoReserve)));
        changed = true;
      }
      if (Number.isFinite(nextPendingHealthRegen)) {
        pendingHealthRegen = Math.max(0, nextPendingHealthRegen);
      }
      if (Number.isFinite(nextLunarRainCooldownMs)) {
        setLunarRainCooldownRemainingMs(nextLunarRainCooldownMs);
      }
      if (typeof nextIsReloading === 'boolean') {
        isReloading = Boolean(nextIsReloading);
        changed = true;
      }
      if (Number.isFinite(nextReloadRemainingMs)) {
        reloadCooldown = Math.max(0, nextReloadRemainingMs / 1000);
        changed = true;
      }
      clampPendingHealthRegenToMissing();
      if (changed) {
        updateHud();
      }
      return;
    }

    if (payload.type === 'player_resources_public') {
      const playerId = String(payload.data?.playerId || '');
      if (!playerId || (state.self && playerId === state.self.id)) {
        return;
      }
      const entry = state.remotePlayers.get(playerId);
      if (!entry) {
        return;
      }
      const nextHealth = Number(payload.data?.health);
      const nextShield = Number(payload.data?.shield);
      const nextMana = Number(payload.data?.mana);
      let changed = false;
      if (Number.isFinite(nextHealth)) {
        entry.health = Math.max(0, Math.min(maxHealth, Math.round(nextHealth)));
        changed = true;
      }
      if (Number.isFinite(nextShield)) {
        entry.shield = Math.max(0, Math.min(maxShield, Math.round(nextShield)));
        changed = true;
      }
      if (Number.isFinite(nextMana)) {
        entry.mana = Math.max(0, Math.min(maxMana, Math.round(nextMana)));
        changed = true;
      }
      if (changed) {
        updateRemoteHealthBar(entry);
      }
      return;
    }

    if (payload.type === 'pickup_state') {
      const kind = String(payload.data?.kind || '').trim().toLowerCase();
      const index = Number(payload.data?.index);
      const active = Boolean(payload.data?.active);
      const respawnAtMs = Number(payload.data?.respawnAtMs || 0);
      if (!Number.isFinite(index) || !kind) {
        return;
      }
      if (kind === 'mana') {
        applyPickupClientState(ammoPickups, index, active, respawnAtMs);
      } else if (kind === 'shield') {
        applyPickupClientState(shieldPickups, index, active, respawnAtMs);
      } else if (kind === 'health') {
        applyPickupClientState(healthPickups, index, active, respawnAtMs);
      }
      return;
    }

    if (payload.type === 'player_death') {
      const playerId = payload.data?.playerId;
      if (!playerId) {
        return;
      }
      pushKillFeedMessage(payload.data?.killerId, playerId);
      clearPumoriOrbitSpecialByOwner(playerId);
      if (state.self && payload.data?.killerId === state.self.id && playerId !== state.self.id) {
        triggerKillConfirm();
      }

      if (state.self && playerId === state.self.id) {
        health = 0;
        pendingHealthRegen = 0;
        updateHud();
        startRespawnCountdown(payload.data?.respawnAvailableAtMs);
        return;
      }

      if (!state.remotePlayers.has(playerId)) {
        return;
      }

      const player = state.remotePlayers.get(playerId);
      player.isDead = true;
      player.health = 0;
      player.isJumping = false;
      player.deadAt = performance.now();
      setRemoteAnimation(player, 'death');
      player.animationUntil = 0;
      updateRemoteHealthBar(player);
      return;
    }

    if (payload.type === 'player_respawned') {
      const playerId = payload.data?.playerId;
      if (!playerId) {
        return;
      }

      if (state.self && playerId === state.self.id) {
        const respawnPos = payload.data?.position;
        if (
          respawnPos
          && Number.isFinite(Number(respawnPos.x))
          && Number.isFinite(Number(respawnPos.y))
          && Number.isFinite(Number(respawnPos.z))
        ) {
          camera.position.set(Number(respawnPos.x), Number(respawnPos.y), Number(respawnPos.z));
          constrainPlayerToWorld();
          clearLocalPredictionHistory();
        }
        health = Number.isFinite(payload.data?.health) ? Number(payload.data.health) : maxHealth;
        shield = Number.isFinite(payload.data?.shield) ? Math.round(payload.data.shield) : startShield;
        if (Number.isFinite(payload.data?.mana)) {
          mana = Math.round(payload.data.mana);
          manaHudValue = Math.round(mana);
        }
        if (Number.isFinite(Number(payload.data?.ammoInMag))) {
          ammoInMag = Math.max(0, Math.min(maxAmmoInMag, Math.round(Number(payload.data.ammoInMag))));
        }
        if (Number.isFinite(Number(payload.data?.ammoReserve))) {
          ammoReserve = Math.max(0, Math.min(maxAmmoTotal, Math.round(Number(payload.data.ammoReserve))));
        }
        isReloading = Boolean(payload.data?.isReloading);
        reloadCooldown = Number.isFinite(Number(payload.data?.reloadRemainingMs))
          ? Math.max(0, Number(payload.data.reloadRemainingMs) / 1000)
          : 0;
        pendingHealthRegen = 0;
        isRespawning = false;
        respawnRequestPending = false;
        lastRespawnRequestAt = 0;
        respawnEndsAt = 0;
        respawnSecondsLeft = getRespawnDurationSeconds();
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
      remote.health = Number.isFinite(Number(payload.data?.health))
        ? Math.max(0, Math.min(maxHealth, Math.round(Number(payload.data.health))))
        : maxHealth;
      if (Number.isFinite(Number(payload.data?.shield))) {
        remote.shield = Math.max(0, Math.min(maxShield, Math.round(Number(payload.data.shield))));
      }
      if (Number.isFinite(Number(payload.data?.mana))) {
        remote.mana = Math.max(0, Math.min(maxMana, Math.round(Number(payload.data.mana))));
      }
      remote.animationUntil = 0;
      setRemoteIdle(remote);
      const remoteRespawnPos = payload.data?.position;
      if (
        remoteRespawnPos
        && Number.isFinite(Number(remoteRespawnPos.x))
        && Number.isFinite(Number(remoteRespawnPos.y))
        && Number.isFinite(Number(remoteRespawnPos.z))
      ) {
        const rx = Number(remoteRespawnPos.x);
        const ry = Number(remoteRespawnPos.y) - playerGroundY;
        const rz = Number(remoteRespawnPos.z);
        remote.group.position.set(rx, ry, rz);
        remote.targetPosition.set(rx, ry, rz);
      }
      updateRemoteHealthBar(remote);
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
      pushVersusChatMessage(playerName, text);
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
        if (payload.data.mode) {
          state.joinedRoom.room.mode = payload.data.mode;
        }
        if (Object.prototype.hasOwnProperty.call(payload.data, 'versusType')) {
          state.joinedRoom.room.versusType = payload.data.versusType;
        }
        if (Number.isFinite(Number(payload.data.requiredPlayers))) {
          state.joinedRoom.room.requiredPlayers = Number(payload.data.requiredPlayers);
        }
        if (Number.isFinite(Number(payload.data.maxPlayers))) {
          state.joinedRoom.room.maxPlayers = Number(payload.data.maxPlayers);
        }
        if (payload.data.weather) {
          state.joinedRoom.room.weather = payload.data.weather;
          applyWeather(payload.data.weather);
        }
        if (payload.data.battleTheme) {
          state.joinedRoom.room.battleTheme = payload.data.battleTheme;
          setBattleTheme(payload.data.battleTheme);
        }
        if (payload.data.status !== 'in_game' && isRespawning) {
          isRespawning = false;
          respawnRequestPending = false;
          lastRespawnRequestAt = 0;
          respawnEndsAt = 0;
          respawnSecondsLeft = getRespawnDurationSeconds();
          updateRespawnOverlay();
        }
        if (payload.data.status !== 'cooldown') {
          hideWinnerOverlay();
        }
        const keepMatchSceneVisible = payload.data.status === 'in_game' || payload.data.status === 'cooldown';
        setInRoom(keepMatchSceneVisible);
        syncModeUiClass();
        forceHideTeamModeUiIfNeeded(state.joinedRoom.room);
        syncLobbyScreens();
        updateVersusLobbyUi();
        updateHud();
        refreshBackgroundMusic();
      }
      return;
    }

    if (payload.type === 'match_winner') {
      if (!state.joinedRoom) {
        return;
      }
      const winnerData = payload.data?.winner || {};
      if (payload.data?.winnerTeam) {
        winnerData.team = payload.data.winnerTeam;
      }
      showWinnerOverlay(winnerData, payload.data?.countdownSeconds);
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
    syncModeUiClass();
    stopRemoteShootSound();
    applyWeather('night');
    setBattleTheme('battle1');
    resetCombatStats();
    hideWinnerOverlay();
    localAvatar.team = null;
    ensureLocalTeamOutline();
    versusChatMessages.length = 0;
    state.lobbyUsers = [];
    renderLobbyUsers();
    renderVersusChat();
    updateHud();
    syncLobbyScreens();
    updateVersusLobbyUi();
    refreshBackgroundMusic();
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
  if (state.profileReady) {
    sendWs({
      type: 'set_profile',
      playerName: getCurrentPlayerName(),
      character: activeCharacter,
    });
  }
  updateHud();
});

const submitNameGate = () => {
  const candidate = sanitizePlayerName(nameGateInput?.value || '');
  if (candidate.length < 2) {
    setNameGateError('Ingresa un nombre de al menos 2 caracteres.');
    return;
  }
  setNameGateError();
  playerNameInput.value = candidate;
  if (state.self) {
    state.self.name = candidate;
  }
  localStorage.setItem(playerNameStorageKey, candidate);
  renderPlayerNameBadge();
  setProfileReady(true);
  sendWs({
    type: 'set_profile',
    playerName: candidate,
    character: characterSelect.value || activeCharacter,
  });
};

nameGateSubmitBtn?.addEventListener('click', () => {
  submitNameGate();
});

nameGateInput?.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') {
    return;
  }
  event.preventDefault();
  submitNameGate();
});

refreshRoomsBtn.addEventListener('click', () => {
  if (!state.profileReady) {
    setNameGateError('Define tu nombre para entrar al lobby.');
    return;
  }
  sendWs({ type: 'list_rooms' });
  loadCatalogs();
});

createVersusBtn.addEventListener('click', () => {
  if (!canUseProfileForLobby()) {
    setNameGateError('Define tu nombre para crear una sala.');
    setProfileReady(false);
    return;
  }
  setLobbyError();
  sendWs({
    type: 'create_room',
    mode: 'versusmatch',
    playerName: getCurrentPlayerName(),
    character: characterSelect.value || activeCharacter,
  });
});

profileLogoutBtn?.addEventListener('click', () => {
  logoutToNameGate();
});

const sendLobbyChatMessage = () => {
  if (!state.profileReady || state.joinedRoom) {
    return;
  }
  const text = String(lobbyChatInput?.value || '').trim();
  if (!text) {
    return;
  }
  sendWs({ type: 'chat_message', text });
  lobbyChatInput.value = '';
  lobbyChatInput.focus();
};

lobbyChatSendBtn?.addEventListener('click', () => {
  sendLobbyChatMessage();
});

lobbyChatInput?.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') {
    return;
  }
  event.preventDefault();
  sendLobbyChatMessage();
});

versusTypeSelect.addEventListener('change', () => {
  if (!isInVersusWaitingLobby()) {
    return;
  }
  const versusType = versusTypeSelect.value;
  if (!versusType) {
    return;
  }
  sendWs({ type: 'room_set_versus_type', versusType });
});

versusReadyBtn.addEventListener('click', () => {
  if (!isInVersusWaitingLobby() || !state.self || !state.joinedRoom) {
    return;
  }
  const selfPlayer = (state.joinedRoom.players || []).find((player) => player.id === state.self.id);
  const nextReady = !Boolean(selfPlayer?.ready);
  sendWs({ type: 'versus_set_ready', ready: nextReady });
});

versusStartBtn.addEventListener('click', () => {
  if (!isInVersusWaitingLobby()) {
    return;
  }
  sendWs({ type: 'start_game' });
});

versusLeaveBtn.addEventListener('click', () => {
  sendWs({ type: 'leave_room' });
});

const sendVersusChatMessage = () => {
  if (!isInVersusWaitingLobby()) {
    return;
  }
  const text = String(versusChatInput.value || '').trim();
  if (!text) {
    return;
  }
  sendWs({ type: 'chat_message', text });
  versusChatInput.value = '';
  versusChatInput.focus();
};

versusChatSendBtn.addEventListener('click', () => {
  sendVersusChatMessage();
});

versusChatInput.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') {
    return;
  }
  event.preventDefault();
  sendVersusChatMessage();
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

optResumeBtn.addEventListener('click', () => {
  closeOptionsMenu();
});

optLeaveLobbyBtn.addEventListener('click', () => {
  closeOptionsMenu();
  sendWs({ type: 'leave_room' });
});

optCollisionViewBtn?.addEventListener('click', () => {
  setCollisionOnlyMode(!state.showCollisionOnly);
});

const runOnceMobilePromptAction = (handler) => (event) => {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const now = performance.now();
  if (now < mobileFullscreenPromptActionLockUntil) {
    return;
  }
  mobileFullscreenPromptActionLockUntil = now + 450;
  handler();
};

const acceptMobileFullscreenPrompt = runOnceMobilePromptAction(async () => {
  mobileFullscreenPromptDismissed = true;
  hideMobileFullscreenPrompt();
  await requestMobileFullscreen();
});

const skipMobileFullscreenPrompt = runOnceMobilePromptAction(() => {
  mobileFullscreenPromptDismissed = true;
  hideMobileFullscreenPrompt();
});

mobileFsAcceptBtn?.addEventListener('click', acceptMobileFullscreenPrompt);
mobileFsAcceptBtn?.addEventListener('touchstart', acceptMobileFullscreenPrompt, { passive: false });
mobileFsAcceptBtn?.addEventListener('pointerdown', acceptMobileFullscreenPrompt);

mobileFsSkipBtn?.addEventListener('click', skipMobileFullscreenPrompt);
mobileFsSkipBtn?.addEventListener('touchstart', skipMobileFullscreenPrompt, { passive: false });
mobileFsSkipBtn?.addEventListener('pointerdown', skipMobileFullscreenPrompt);

optMouseSensitivity.addEventListener('input', () => {
  settings.mouseSensitivity = clampSetting(optMouseSensitivity.value, 0.4, 2.5, settings.mouseSensitivity);
  optMouseSensitivityValue.textContent = settings.mouseSensitivity.toFixed(2);
  saveSettings();
});

optMasterVolume.addEventListener('input', () => {
  settings.masterVolume = clampSetting(optMasterVolume.value, 0, 1, settings.masterVolume);
  optMasterVolumeValue.textContent = `${Math.round(settings.masterVolume * 100)}%`;
  applyGameSettings();
  saveSettings();
});

optMusicVolume.addEventListener('input', () => {
  settings.musicVolume = clampSetting(optMusicVolume.value, 0, 1, settings.musicVolume);
  optMusicVolumeValue.textContent = `${Math.round(settings.musicVolume * 100)}%`;
  applyGameSettings();
  syncLobbyMusicUi();
  saveSettings();
});

const onLobbyMusicVolumeInput = (rawValue) => {
  settings.musicVolume = clampSetting(rawValue, 0, 1, settings.musicVolume);
  applyGameSettings();
  syncOptionsUi();
  saveSettings();
};

lobbyMusicVolume?.addEventListener('input', () => {
  onLobbyMusicVolumeInput(lobbyMusicVolume.value);
});

versusLobbyMusicVolume?.addEventListener('input', () => {
  onLobbyMusicVolumeInput(versusLobbyMusicVolume.value);
});

optSfxVolume.addEventListener('input', () => {
  settings.sfxVolume = clampSetting(optSfxVolume.value, 0, 1, settings.sfxVolume);
  optSfxVolumeValue.textContent = `${Math.round(settings.sfxVolume * 100)}%`;
  applyGameSettings();
  saveSettings();
});

optFov.addEventListener('input', () => {
  settings.fov = clampSetting(optFov.value, 60, 100, settings.fov);
  optFovValue.textContent = String(Math.round(settings.fov));
  applyGameSettings();
  saveSettings();
});

optShowPerf.addEventListener('change', () => {
  settings.showPerfByDefault = Boolean(optShowPerf.checked);
  if (!state.showPerf && settings.showPerfByDefault) {
    state.showPerf = true;
    requestLatencyProbe(true);
  }
  renderPerfPanel();
  saveSettings();
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

const getClosestRemoteCharacterHitPoint = (origin, direction, maxDistance, options = {}) => {
  let closestDistance = maxDistance;
  let closestPoint = null;
  const tmpCenter = new THREE.Vector3();
  const toCenter = new THREE.Vector3();
  const projectedPoint = new THREE.Vector3();
  const headRadius = Number.isFinite(options.headRadius) ? options.headRadius : headshotRadius;
  const bodyRadius = Number.isFinite(options.bodyRadius) ? options.bodyRadius : bodyshotRadius;
  const torsoHitRadius = Number.isFinite(options.torsoRadius) ? options.torsoRadius : torsoRadius;

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

    tmpCenter.set(
      entry.group.position.x,
      entry.group.position.y + remoteHeadCenterOffsetY,
      entry.group.position.z,
    );
    tryHitSphere(tmpCenter, headRadius);

    tmpCenter.set(
      entry.group.position.x,
      entry.group.position.y + remoteBodyCenterOffsetY,
      entry.group.position.z,
    );
    tryHitSphere(tmpCenter, bodyRadius);

    tmpCenter.set(
      entry.group.position.x,
      entry.group.position.y + remoteTorsoCenterOffsetY,
      entry.group.position.z,
    );
    tryHitSphere(tmpCenter, torsoHitRadius);
  }

  if (!closestPoint) {
    return null;
  }

  return {
    point: closestPoint,
    distance: closestDistance,
  };
};

const createRemoteHealthBar = () => {
  const holder = new THREE.Group();

  const bg = new THREE.Mesh(
    new THREE.PlaneGeometry(remoteHealthBarWidth, remoteHealthBarHeight),
    new THREE.MeshBasicMaterial({
      color: 0x1b1b1b,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      depthTest: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    }),
  );
  bg.renderOrder = 999;
  bg.position.set(0, remoteHealthBarYOffset, 0);
  holder.add(bg);

  const fill = new THREE.Mesh(
    new THREE.PlaneGeometry(remoteHealthBarWidth - 0.02, remoteHealthBarHeight - 0.02),
    new THREE.MeshBasicMaterial({
      color: 0x56ff6d,
      transparent: true,
      opacity: 0.96,
      depthWrite: false,
      depthTest: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    }),
  );
  fill.renderOrder = 1000;
  fill.position.set(0, remoteHealthBarYOffset, 0.001);
  holder.add(fill);

  const makeHorizontalBar = (y, color) => {
    const bgMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(remoteResourceBarWidth, remoteResourceBarHeight),
      new THREE.MeshBasicMaterial({
        color: 0x151515,
        transparent: true,
        opacity: 0.82,
        depthWrite: false,
        depthTest: false,
        side: THREE.DoubleSide,
        toneMapped: false,
      }),
    );
    bgMesh.renderOrder = 999;
    bgMesh.position.set(0, y, 0);
    holder.add(bgMesh);

    const fillMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(remoteResourceBarWidth - 0.012, remoteResourceBarHeight - 0.012),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
        depthTest: false,
        side: THREE.DoubleSide,
        toneMapped: false,
      }),
    );
    fillMesh.renderOrder = 1000;
    fillMesh.position.set(0, y, 0.001);
    holder.add(fillMesh);
    return { bg: bgMesh, fill: fillMesh };
  };

  const manaBar = makeHorizontalBar(remoteResourceBarsYOffset, 0x5f8dff);
  const shieldBar = makeHorizontalBar(
    remoteResourceBarsYOffset - remoteResourceBarGapY,
    0x67d5ff,
  );

  const textCanvas = document.createElement('canvas');
  textCanvas.width = 256;
  textCanvas.height = 64;
  const textCtx = textCanvas.getContext('2d');
  const textTexture = new THREE.CanvasTexture(textCanvas);
  textTexture.minFilter = THREE.LinearFilter;
  textTexture.magFilter = THREE.LinearFilter;
  textTexture.generateMipmaps = false;
  const text = new THREE.Mesh(
    new THREE.PlaneGeometry(1.05, 0.18),
    new THREE.MeshBasicMaterial({
      map: textTexture,
      transparent: true,
      opacity: 0.96,
      depthWrite: false,
      depthTest: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    }),
  );
  text.renderOrder = 1001;
  text.position.set(0, remoteHealthBarYOffset + 0.16, 0.001);
  holder.add(text);

  return {
    holder,
    bg,
    fill,
    shieldBg: shieldBar.bg,
    shieldFill: shieldBar.fill,
    manaBg: manaBar.bg,
    manaFill: manaBar.fill,
    text,
    textCanvas,
    textCtx,
    textTexture,
    lastText: '',
  };
};

const disposeTeamMarker = (marker) => {
  if (!marker) {
    return;
  }
  if (marker.parent) {
    marker.parent.remove(marker);
  }
  if (marker.geometry) {
    marker.geometry.dispose();
  }
  if (marker.material) {
    marker.material.dispose();
  }
};

const disposeRemoteHitboxDebug = (entry) => {
  if (!entry?.hitboxDebug) {
    return;
  }
  if (entry.hitboxDebug.group?.parent) {
    entry.hitboxDebug.group.parent.remove(entry.hitboxDebug.group);
  }
  const meshes = Array.isArray(entry.hitboxDebug.meshes) ? entry.hitboxDebug.meshes : [];
  for (let i = 0; i < meshes.length; i += 1) {
    const mesh = meshes[i];
    if (!mesh) {
      continue;
    }
    if (mesh.geometry) {
      mesh.geometry.dispose();
    }
    if (mesh.material) {
      mesh.material.dispose();
    }
  }
  entry.hitboxDebug = null;
};

const ensureRemoteHitboxDebug = (entry) => {
  if (!entry?.group) {
    return;
  }
  if (!entry.hitboxDebug) {
    const group = new THREE.Group();
    const mk = (radius, y, color) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 14, 10),
        new THREE.MeshBasicMaterial({
          color,
          wireframe: true,
          transparent: true,
          opacity: 0.55,
          depthWrite: false,
          toneMapped: false,
        }),
      );
      mesh.position.set(0, y, 0);
      return mesh;
    };
    const head = mk(headshotRadius, remoteHeadCenterOffsetY, debugHitboxColors.head);
    const body = mk(bodyshotRadius, remoteBodyCenterOffsetY, debugHitboxColors.body);
    const torso = mk(torsoRadius, remoteTorsoCenterOffsetY, debugHitboxColors.torso);
    group.add(head);
    group.add(body);
    group.add(torso);
    group.visible = false;
    group.renderOrder = 1800;
    entry.group.add(group);
    entry.hitboxDebug = {
      group,
      meshes: [head, body, torso],
    };
  } else if (entry.hitboxDebug.group.parent !== entry.group) {
    entry.group.add(entry.hitboxDebug.group);
  }
  entry.hitboxDebug.group.visible = Boolean(state.showHitboxDebug);
};

const refreshRemoteHitboxDebugVisibility = () => {
  for (const entry of state.remotePlayers.values()) {
    ensureRemoteHitboxDebug(entry);
  }
};

const localHitboxDebug = {
  group: null,
  meshes: [],
};
const projectileCollisionDebug = new Map();

const ensureLocalHitboxDebug = () => {
  if (localHitboxDebug.group) {
    return;
  }
  const group = new THREE.Group();
  const mk = (radius, y, color) => {
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 14, 10),
      new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
        toneMapped: false,
      }),
    );
    mesh.position.set(0, y, 0);
    return mesh;
  };
  const head = mk(headshotRadius, headCenterOffsetY, debugHitboxColors.head);
  const body = mk(bodyshotRadius, bodyCenterOffsetY, debugHitboxColors.body);
  const torso = mk(torsoRadius, bodyCenterOffsetY * 0.45, debugHitboxColors.torso);
  group.add(head);
  group.add(body);
  group.add(torso);
  group.renderOrder = 1801;
  group.visible = false;
  scene.add(group);
  localHitboxDebug.group = group;
  localHitboxDebug.meshes = [head, body, torso];
};

const updateLocalHitboxDebug = () => {
  if (!localHitboxDebug.group) {
    return;
  }
  localHitboxDebug.group.position.set(camera.position.x, camera.position.y, camera.position.z);
  localHitboxDebug.group.visible = Boolean(state.showCollisionOnly && state.joinedRoom);
};

const disposeProjectileCollisionDebug = (projectile) => {
  const marker = projectileCollisionDebug.get(projectile);
  if (!marker) {
    return;
  }
  if (marker.parent) {
    marker.parent.remove(marker);
  }
  if (marker.geometry) {
    marker.geometry.dispose();
  }
  if (marker.material) {
    marker.material.dispose();
  }
  projectileCollisionDebug.delete(projectile);
};

const ensureProjectileCollisionDebug = (projectile, radius, color) => {
  if (!projectile?.pos) {
    return;
  }
  let marker = projectileCollisionDebug.get(projectile);
  if (!marker) {
    marker = new THREE.Mesh(
      new THREE.SphereGeometry(Math.max(0.05, Number(radius) || 0.22), 10, 8),
      new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.72,
        depthWrite: false,
        toneMapped: false,
      }),
    );
    marker.renderOrder = 1802;
    scene.add(marker);
    projectileCollisionDebug.set(projectile, marker);
  }
  marker.position.copy(projectile.pos);
  marker.visible = Boolean(state.showCollisionOnly);
};

const sweepProjectileCollisionDebug = () => {
  const active = new Set();
  for (let i = 0; i < activeHolyProjectiles.length; i += 1) active.add(activeHolyProjectiles[i]);
  for (let i = 0; i < activeHammerProjectiles.length; i += 1) active.add(activeHammerProjectiles[i]);
  for (let i = 0; i < activePoisonProjectiles.length; i += 1) active.add(activePoisonProjectiles[i]);
  for (let i = 0; i < activeLunarProjectiles.length; i += 1) active.add(activeLunarProjectiles[i]);
  for (let i = 0; i < activePumoriOrbitSpecials.length; i += 1) {
    const special = activePumoriOrbitSpecials[i];
    if (!special?.hammers) {
      continue;
    }
    for (let j = 0; j < special.hammers.length; j += 1) {
      active.add(special.hammers[j]);
    }
  }
  for (const projectile of projectileCollisionDebug.keys()) {
    if (!active.has(projectile)) {
      disposeProjectileCollisionDebug(projectile);
    }
  }
};

const syncCollisionOnlyModeVisuals = () => {
  ensureLocalHitboxDebug();
  refreshRemoteHitboxDebugVisibility();
  updateLocalHitboxDebug();
  for (const entry of state.remotePlayers.values()) {
    if (!entry) {
      continue;
    }
    if (entry.avatarRoot && entry.avatarRoot !== entry.group) {
      entry.avatarRoot.visible = !state.showCollisionOnly;
    }
    if (entry.body) {
      entry.body.visible = !state.showCollisionOnly;
    }
    if (entry.head) {
      entry.head.visible = !state.showCollisionOnly;
    }
    if (entry.healthBar?.holder) {
      entry.healthBar.holder.visible = !state.showCollisionOnly && !entry.isDead;
    }
    if (entry.teamOutline) {
      entry.teamOutline.visible = !state.showCollisionOnly && entry.teamOutline.visible;
    }
  }
};

const setCollisionOnlyMode = (enabled) => {
  const next = Boolean(enabled);
  if (state.showCollisionOnly === next) {
    if (optCollisionViewBtn) {
      optCollisionViewBtn.textContent = `Colisiones: ${next ? 'ON' : 'OFF'}`;
    }
    return;
  }
  if (next) {
    hitboxDebugBeforeCollisionOnly = Boolean(state.showHitboxDebug);
    state.showHitboxDebug = true;
  } else {
    state.showHitboxDebug = hitboxDebugBeforeCollisionOnly;
  }
  state.showCollisionOnly = next;
  if (optCollisionViewBtn) {
    optCollisionViewBtn.textContent = `Colisiones: ${next ? 'ON' : 'OFF'}`;
  }
  syncCollisionOnlyModeVisuals();
};

const createTeamOutline = (team) => {
  const normalizedTeam = normalizePlayerTeam(team);
  const color = normalizedTeam === 'red' ? 0xff7f7f : 0x7fa8ff;
  const outline = new THREE.Mesh(
    new THREE.SphereGeometry(0.62, 18, 14),
    new THREE.MeshBasicMaterial({
      color,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  outline.position.set(0, 1.18, 0);
  outline.userData.team = normalizedTeam;
  outline.renderOrder = 70;
  return outline;
};

const ensureLocalTeamOutline = () => {
  if (localAvatar.teamOutline) {
    disposeTeamMarker(localAvatar.teamOutline);
    localAvatar.teamOutline = null;
  }
};

const ensureRemoteTeamOutline = (entry) => {
  if (entry?.teamOutline) {
    disposeTeamMarker(entry.teamOutline);
    entry.teamOutline = null;
  }
};

const updateRemoteHealthBar = (entry) => {
  if (!entry?.healthBar?.fill) {
    return;
  }
  const safeHealth = Number.isFinite(Number(entry.health)) ? Number(entry.health) : maxHealth;
  const safeShield = Number.isFinite(Number(entry.shield)) ? Number(entry.shield) : startShield;
  const safeMana = Number.isFinite(Number(entry.mana)) ? Number(entry.mana) : maxMana;
  const normalized = Math.max(0, Math.min(1, safeHealth / maxHealth));
  const normalizedShield = Math.max(0, Math.min(1, safeShield / maxShield));
  const normalizedMana = Math.max(0, Math.min(1, safeMana / maxMana));
  entry.healthBar.fill.scale.x = Math.max(0.001, normalized);
  entry.healthBar.fill.position.x = ((normalized - 1) * (remoteHealthBarWidth - 0.02)) * 0.5;
  if (normalized > 0.66) {
    entry.healthBar.fill.material.color.set(0x56ff6d);
  } else if (normalized > 0.33) {
    entry.healthBar.fill.material.color.set(0xffe36a);
  } else {
    entry.healthBar.fill.material.color.set(0xff6767);
  }
  if (entry.healthBar.shieldFill) {
    entry.healthBar.shieldFill.scale.x = Math.max(0.001, normalizedShield);
    entry.healthBar.shieldFill.position.x = ((normalizedShield - 1) * (remoteResourceBarWidth - 0.012)) * 0.5;
  }
  if (entry.healthBar.manaFill) {
    entry.healthBar.manaFill.scale.x = Math.max(0.001, normalizedMana);
    entry.healthBar.manaFill.position.x = ((normalizedMana - 1) * (remoteResourceBarWidth - 0.012)) * 0.5;
  }
  const team = normalizePlayerTeam(entry.team);
  const hpText = `${String(entry.name || 'Player')} ${Math.round(safeHealth)}`;
  const hpTextKey = `${team || 'none'}:${hpText}`;
  if (entry.healthBar.lastText !== hpTextKey && entry.healthBar.textCtx) {
    const ctx = entry.healthBar.textCtx;
    ctx.clearRect(0, 0, entry.healthBar.textCanvas.width, entry.healthBar.textCanvas.height);
    ctx.font = 'bold 24px Courier New, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.lineWidth = 6;
    ctx.strokeText(hpText, entry.healthBar.textCanvas.width / 2, 32);
    if (team === 'red') {
      ctx.fillStyle = '#ffb6b6';
    } else if (team === 'blue') {
      ctx.fillStyle = '#b9d2ff';
    } else {
      ctx.fillStyle = '#d8ffd8';
    }
    ctx.fillText(hpText, entry.healthBar.textCanvas.width / 2, 32);
    entry.healthBar.textTexture.needsUpdate = true;
    entry.healthBar.lastText = hpTextKey;
  }
  entry.healthBar.holder.visible = !state.showCollisionOnly && !entry.isDead;
};

const clearLocalPredictionHistory = () => {
  pendingMoveInputs.length = 0;
  pendingShotAcks.clear();
  localInputSeq = 0;
  localShotSeq = 0;
  localReconcileTarget = null;
  localReconcileExpiresAt = 0;
  localCollisionBypassUntil = 0;
  reconcileStats.errorSamples.length = 0;
  reconcileStats.correctionsInWindow = 0;
  reconcileStats.correctionsPerSec = 0;
  reconcileStats.lateAcksInWindow = 0;
  reconcileStats.lateAcksPerSec = 0;
  tuningPerfStats.frameMsSamples.length = 0;
  tuningPerfStats.ackRttSamples.length = 0;
  tuningPerfStats.shotAckSamples.length = 0;
  tuningPerfStats.shotAcksInWindow = 0;
  tuningPerfStats.shotAcksPerSec = 0;
  tuningPerfStats.wsOutMsgsInWindow = 0;
  tuningPerfStats.wsOutBytesInWindow = 0;
  tuningPerfStats.wsOutMsgsPerSec = 0;
  tuningPerfStats.wsOutKbps = 0;
  tuningPerfStats.moveMsgsInWindow = 0;
  tuningPerfStats.moveMsgsPerSec = 0;
  tuningPerfStats.softCorrectionsInWindow = 0;
  tuningPerfStats.softCorrectionsPerSec = 0;
  tuningPerfStats.hardCorrectionsInWindow = 0;
  tuningPerfStats.hardCorrectionsPerSec = 0;
  tuningPerfStats.correctionStreak = 0;
  tuningPerfStats.correctionStreakMax = 0;
  tuningPerfStats.lastCorrectionAt = 0;
};

const registerReconcileErrorSample = (error) => {
  if (!Number.isFinite(error) || error < 0) {
    return;
  }
  reconcileStats.errorSamples.push(error);
  if (reconcileStats.errorSamples.length > 140) {
    reconcileStats.errorSamples.splice(0, reconcileStats.errorSamples.length - 140);
  }
};

const registerAckRttSample = (rttMs) => {
  if (!Number.isFinite(rttMs) || rttMs < 0) {
    return;
  }
  tuningPerfStats.ackRttSamples.push(Math.min(1000, rttMs));
  if (tuningPerfStats.ackRttSamples.length > 180) {
    tuningPerfStats.ackRttSamples.splice(0, tuningPerfStats.ackRttSamples.length - 180);
  }
};

const registerShotAckSample = (rttMs) => {
  if (!Number.isFinite(rttMs) || rttMs < 0) {
    return;
  }
  tuningPerfStats.shotAckSamples.push(Math.min(2000, rttMs));
  if (tuningPerfStats.shotAckSamples.length > 180) {
    tuningPerfStats.shotAckSamples.splice(0, tuningPerfStats.shotAckSamples.length - 180);
  }
  tuningPerfStats.shotAcksInWindow += 1;
};

const registerCorrectionEvent = (kind) => {
  const now = performance.now();
  if (now - tuningPerfStats.lastCorrectionAt > 900) {
    tuningPerfStats.correctionStreak = 0;
  }
  tuningPerfStats.correctionStreak += 1;
  if (tuningPerfStats.correctionStreak > tuningPerfStats.correctionStreakMax) {
    tuningPerfStats.correctionStreakMax = tuningPerfStats.correctionStreak;
  }
  tuningPerfStats.lastCorrectionAt = now;
  if (kind === 'hard') {
    tuningPerfStats.hardCorrectionsInWindow += 1;
    return;
  }
  tuningPerfStats.softCorrectionsInWindow += 1;
};

const percentileFromSamples = (samples, p) => {
  if (!Array.isArray(samples) || samples.length <= 0) {
    return 0;
  }
  const ordered = samples.slice().sort((a, b) => a - b);
  const idx = Math.max(0, Math.min(ordered.length - 1, Math.floor((ordered.length - 1) * p)));
  return ordered[idx];
};

const logTuningSnapshot = () => {
  const now = performance.now();
  const frameAvg = tuningPerfStats.frameMsSamples.length > 0
    ? tuningPerfStats.frameMsSamples.reduce((sum, value) => sum + value, 0) / tuningPerfStats.frameMsSamples.length
    : 0;
  const frameP95 = percentileFromSamples(tuningPerfStats.frameMsSamples, 0.95);
  const ackAvg = tuningPerfStats.ackRttSamples.length > 0
    ? tuningPerfStats.ackRttSamples.reduce((sum, value) => sum + value, 0) / tuningPerfStats.ackRttSamples.length
    : 0;
  const ackP95 = percentileFromSamples(tuningPerfStats.ackRttSamples, 0.95);
  const shotAckAvg = tuningPerfStats.shotAckSamples.length > 0
    ? tuningPerfStats.shotAckSamples.reduce((sum, value) => sum + value, 0) / tuningPerfStats.shotAckSamples.length
    : 0;
  const shotAckP95 = percentileFromSamples(tuningPerfStats.shotAckSamples, 0.95);
  const predAvg = reconcileStats.errorSamples.length > 0
    ? reconcileStats.errorSamples.reduce((sum, value) => sum + value, 0) / reconcileStats.errorSamples.length
    : 0;
  const predP95 = percentileFromSamples(reconcileStats.errorSamples, 0.95);
  const pendingAgesMs = pendingMoveInputs.slice(-8).map((entry) => Math.max(0, now - Number(entry.sentAt || now)));
  const snapshotServerSeed = Number.isFinite(Number(state.joinedRoom?.room?.mapSeed))
    ? Number(state.joinedRoom.room.mapSeed)
    : null;
  const snapshotSeedMatch = snapshotServerSeed !== null
    && Number.isFinite(currentMapSeed)
    && Number(currentMapSeed) === snapshotServerSeed;
  const snapshotHashMatch = Boolean(serverMapCollisionHash)
    && Boolean(currentMapCollisionHash)
    && currentMapCollisionHash === serverMapCollisionHash;
  const edgeMarginNow = getMapEdgeMargin(camera.position.x, camera.position.z, mapBoundsPadding);
  const nearestPillarNow = getNearestExpandedPillarDistance(camera.position.x, camera.position.z);
  const snapshot = {
    at: new Date().toISOString(),
    room: {
      id: state.joinedRoom?.room?.id || null,
      mode: state.joinedRoom?.room?.mode || null,
      status: state.joinedRoom?.room?.status || null,
      weather: state.joinedRoom?.room?.weather || null,
      players: Array.isArray(state.joinedRoom?.room?.players) ? state.joinedRoom.room.players.length : null,
    },
    net: {
      latencyMs: Number.isFinite(state.latencyMs) ? Number(state.latencyMs.toFixed(2)) : null,
      ackRttAvgMs: Number(ackAvg.toFixed(2)),
      ackRttP95Ms: Number(ackP95.toFixed(2)),
      remoteInterpMs: Number(remoteInterpolationDynamicMs.toFixed(1)),
      remoteExtrapMs: Number(remoteExtrapolationDynamicMs.toFixed(1)),
      shotAckAvgMs: Number(shotAckAvg.toFixed(2)),
      shotAckP95Ms: Number(shotAckP95.toFixed(2)),
      shotAckPerSec: Number(tuningPerfStats.shotAcksPerSec.toFixed(2)),
      pendingShotAcks: pendingShotAcks.size,
      wsOutMsgPerSec: Number(tuningPerfStats.wsOutMsgsPerSec.toFixed(2)),
      wsOutKbps: Number(tuningPerfStats.wsOutKbps.toFixed(2)),
      moveSendPerSec: Number(tuningPerfStats.moveMsgsPerSec.toFixed(2)),
      pendingInputs: pendingMoveInputs.length,
      pendingInputAgesMs: pendingAgesMs.map((v) => Number(v.toFixed(1))),
      lateAckPerSec: Number(reconcileStats.lateAcksPerSec.toFixed(2)),
    },
    reconcile: {
      predErrAvg: Number(predAvg.toFixed(3)),
      predErrP95: Number(predP95.toFixed(3)),
      correctionsPerSec: Number(reconcileStats.correctionsPerSec.toFixed(2)),
      softPerSec: Number(tuningPerfStats.softCorrectionsPerSec.toFixed(2)),
      hardPerSec: Number(tuningPerfStats.hardCorrectionsPerSec.toFixed(2)),
      streak: tuningPerfStats.correctionStreak,
      streakMax: tuningPerfStats.correctionStreakMax,
      hasTarget: Boolean(localReconcileTarget),
      targetExpiresInMs: Math.max(0, Math.ceil(localReconcileExpiresAt - now)),
      collisionBypassMs: Math.max(0, Math.ceil(localCollisionBypassUntil - now)),
    },
    movement: {
      canPlay: canPlay(),
      pos: {
        x: Number(camera.position.x.toFixed(3)),
        y: Number(camera.position.y.toFixed(3)),
        z: Number(camera.position.z.toFixed(3)),
      },
      velocity: {
        x: Number(moveVelocity.x.toFixed(3)),
        z: Number(moveVelocity.z.toFixed(3)),
        speed: Number(tuningPerfStats.localSpeed.toFixed(3)),
      },
      keys: { ...keys },
      isJumping,
      isFiring,
      isThirdPerson,
    },
    collisionDebug: {
      lastBlockReason: lastCollisionBlockReason,
      lastBlockAgoMs: lastCollisionBlockAt > 0 ? Math.max(0, Math.round(now - lastCollisionBlockAt)) : null,
      mapEdgeMargin: Number.isFinite(edgeMarginNow) ? Number(edgeMarginNow.toFixed(3)) : null,
      nearestPillarDist: Number.isFinite(nearestPillarNow) ? Number(nearestPillarNow.toFixed(3)) : null,
    },
    mapSync: {
      seedClient: Number.isFinite(currentMapSeed) ? Number(currentMapSeed) : null,
      seedServer: snapshotServerSeed,
      seedMatch: snapshotSeedMatch,
      collisionHashClient: currentMapCollisionHash || null,
      collisionHashServer: serverMapCollisionHash || null,
      collisionHashMatch: snapshotHashMatch,
    },
    render: {
      fps: state.fps,
      frameMsAvg: Number(frameAvg.toFixed(2)),
      frameMsP95: Number(frameP95.toFixed(2)),
      drawCalls: renderPerfStats.drawCalls,
      triangles: renderPerfStats.triangles,
      geometries: renderPerfStats.geometries,
      textures: renderPerfStats.textures,
      vfx: renderPerfStats.vfx,
      vfxQuality: Number(vfxQuality.toFixed(2)),
    },
  };
  window.__koketriaLastSnapshot = snapshot;
  console.groupCollapsed('[koketria][snapshot:J]', snapshot.at);
  console.log(snapshot);
  console.groupEnd();
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
  localInputSeq += 1;
  const moving = (keys.KeyW || keys.KeyA || keys.KeyS || keys.KeyD)
    || moveVelocity.lengthSq() > 0.5;
  const predictedPosition = new THREE.Vector3(
    camera.position.x,
    camera.position.y,
    camera.position.z,
  );
  pendingMoveInputs.push({
    seq: localInputSeq,
    predictedPosition,
    sentAt: now,
  });
  if (pendingMoveInputs.length > localInputHistoryLimit) {
    pendingMoveInputs.splice(0, pendingMoveInputs.length - localInputHistoryLimit);
  }
  sendWs({
    type: 'player_move',
    position: {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    },
    rotation: { yaw, pitch },
    jumping: isJumping,
    moving,
    inputSeq: localInputSeq,
  });
};

const collidesWithPillar = (x, z) => {
  const pillarRadius = playerCollisionRadius * playerPillarCollisionFactor;
  for (let i = 0; i < pillarBounds.length; i += 1) {
    const pillar = pillarBounds[i];
    if (
      x + pillarRadius > pillar.minX
      && x - pillarRadius < pillar.maxX
      && z + pillarRadius > pillar.minZ
      && z - pillarRadius < pillar.maxZ
    ) {
      return true;
    }
  }

  return false;
};

const getNearestExpandedPillarDistance = (x, z) => {
  if (pillarBounds.length <= 0) {
    return Number.POSITIVE_INFINITY;
  }
  const pillarRadius = playerCollisionRadius * playerPillarCollisionFactor;
  let nearest = Number.POSITIVE_INFINITY;
  for (let i = 0; i < pillarBounds.length; i += 1) {
    const pillar = pillarBounds[i];
    const minX = pillar.minX - pillarRadius;
    const maxX = pillar.maxX + pillarRadius;
    const minZ = pillar.minZ - pillarRadius;
    const maxZ = pillar.maxZ + pillarRadius;
    const dx = x < minX ? (minX - x) : (x > maxX ? (x - maxX) : 0);
    const dz = z < minZ ? (minZ - z) : (z > maxZ ? (z - maxZ) : 0);
    const distance = Math.hypot(dx, dz);
    if (distance < nearest) {
      nearest = distance;
    }
  }
  return nearest;
};

const getWalkabilityState = (x, z) => {
  const insideMap = isInsidePlayableBounds(x, z, mapBoundsPadding);
  const pillarHit = collidesWithPillar(x, z);
  return {
    insideMap,
    pillarHit,
    walkable: insideMap && !pillarHit,
  };
};

const isWalkablePoint = (x, z) => {
  return getWalkabilityState(x, z).walkable;
};

const findNearestWalkablePoint = (originX, originZ) => {
  const start = clampPointToPlayableBounds(originX, originZ, mapBoundsPadding);
  if (isWalkablePoint(start.x, start.z)) {
    return start;
  }

  const maxRadius = 14;
  for (let radius = 0.6; radius <= maxRadius; radius += 0.6) {
    const samples = 24;
    for (let i = 0; i < samples; i += 1) {
      const theta = (i / samples) * Math.PI * 2;
      const candidate = clampPointToPlayableBounds(
        start.x + (Math.cos(theta) * radius),
        start.z + (Math.sin(theta) * radius),
        mapBoundsPadding,
      );
      if (isWalkablePoint(candidate.x, candidate.z)) {
        return candidate;
      }
    }
  }

  return start;
};

const applyWorldCollisions = (targetX, targetZ) => {
  const currentX = camera.position.x;
  const currentZ = camera.position.z;
  const targetInsideMap = isInsidePlayableBounds(targetX, targetZ, mapBoundsPadding);
  const bounded = clampPointToPlayableBounds(targetX, targetZ, mapBoundsPadding);
  const desiredX = bounded.x;
  const desiredZ = bounded.z;
  const desiredState = getWalkabilityState(desiredX, desiredZ);
  if (!targetInsideMap || !desiredState.walkable) {
    if (!targetInsideMap && desiredState.pillarHit) {
      lastCollisionBlockReason = 'map+pillar';
    } else if (!targetInsideMap || !desiredState.insideMap) {
      lastCollisionBlockReason = 'map';
    } else if (desiredState.pillarHit) {
      lastCollisionBlockReason = 'pillar';
    } else {
      lastCollisionBlockReason = 'unknown';
    }
    lastCollisionBlockAt = performance.now();
  } else {
    lastCollisionBlockReason = 'none';
  }

  // Mirror backend_v2 resolve_player_position to avoid client/server drift.
  if (desiredState.walkable) {
    return { x: desiredX, z: desiredZ };
  }
  // Axis slide fallback reduces corner snagging against AABB pillars.
  if (isWalkablePoint(desiredX, currentZ)) {
    return { x: desiredX, z: currentZ };
  }
  if (isWalkablePoint(currentX, desiredZ)) {
    return { x: currentX, z: desiredZ };
  }
  if (isWalkablePoint(currentX, currentZ)) {
    return { x: currentX, z: currentZ };
  }

  let bestX = currentX;
  for (let i = 1; i <= 10; i += 1) {
    const t = i / 10;
    const sampleX = currentX + ((desiredX - currentX) * t);
    if (isWalkablePoint(sampleX, currentZ)) {
      bestX = sampleX;
    } else {
      break;
    }
  }
  if (isWalkablePoint(bestX, currentZ)) {
    return { x: bestX, z: currentZ };
  }

  let bestZ = currentZ;
  for (let i = 1; i <= 10; i += 1) {
    const t = i / 10;
    const sampleZ = currentZ + ((desiredZ - currentZ) * t);
    if (isWalkablePoint(currentX, sampleZ)) {
      bestZ = sampleZ;
    } else {
      break;
    }
  }
  if (isWalkablePoint(currentX, bestZ)) {
    return { x: currentX, z: bestZ };
  }

  let lastValidX = currentX;
  let lastValidZ = currentZ;
  for (let i = 1; i <= 10; i += 1) {
    const t = i / 10;
    const sampleX = currentX + ((desiredX - currentX) * t);
    const sampleZ = currentZ + ((desiredZ - currentZ) * t);
    if (isWalkablePoint(sampleX, sampleZ)) {
      lastValidX = sampleX;
      lastValidZ = sampleZ;
    } else {
      break;
    }
  }

  return { x: lastValidX, z: lastValidZ };
};

const constrainPlayerToWorld = () => {
  if (!isWalkablePoint(camera.position.x, camera.position.z)) {
    const safe = findNearestWalkablePoint(camera.position.x, camera.position.z);
    camera.position.x = safe.x;
    camera.position.z = safe.z;
  }
  const fixed = applyWorldCollisions(camera.position.x, camera.position.z);
  camera.position.x = fixed.x;
  camera.position.z = fixed.z;
  camera.position.y = Math.max(playerGroundY, camera.position.y);
};

renderer.domElement.addEventListener('click', () => {
  if (!mobileInput.enabled && !isLocked && state.joinedRoom) {
    renderer.domElement.requestPointerLock();
  }
});

document.addEventListener('pointerlockchange', () => {
  isLocked = document.pointerLockElement === renderer.domElement;
  app.classList.toggle('locked', isLocked);
  if (!isLocked) {
    isFiring = false;
    if (state.joinedRoom && !isOptionsOpen && !isRespawning && !isMatchEnding && !isChatTyping) {
      openOptionsMenu();
    }
  }
  syncMobileControlsVisibility();
});

document.addEventListener('mousemove', (event) => {
  if (!isLocked || !canPlay()) {
    return;
  }
  const sensitivity = 0.0021 * settings.mouseSensitivity;
  yaw -= event.movementX * sensitivity;
  pitch -= event.movementY * sensitivity;
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

const applyMobileLookDelta = (dx, dy) => {
  if (!mobileInput.active || !canPlay()) {
    return;
  }
  const sensitivity = 0.0024 * settings.mouseSensitivity;
  yaw -= dx * sensitivity;
  pitch -= dy * sensitivity;
  pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, pitch));
  updateLook();
  sendLocalPlayerState();
};

const updateMobileJoystickFromTouch = (touch) => {
  if (!mobileJoystick || !mobileJoystickThumb || !touch) {
    return;
  }
  const rect = mobileJoystick.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = touch.clientX - cx;
  const dy = touch.clientY - cy;
  const maxRadius = Math.max(28, Math.min(rect.width, rect.height) * 0.36);
  const dist = Math.sqrt((dx * dx) + (dy * dy));
  const clamped = dist > maxRadius && dist > 0
    ? { x: (dx / dist) * maxRadius, y: (dy / dist) * maxRadius }
    : { x: dx, y: dy };
  mobileInput.moveX = maxRadius > 0 ? clamped.x / maxRadius : 0;
  mobileInput.moveY = maxRadius > 0 ? clamped.y / maxRadius : 0;
  mobileJoystickThumb.style.transform = `translate(calc(-50% + ${clamped.x}px), calc(-50% + ${clamped.y}px))`;
};

const bindMobileTouchControls = () => {
  if (!mobileControls || !mobileJoystick || !mobileLookZone) {
    return;
  }
  const canUseMobileControls = () => mobileInput.active && canPlay();
  let optionsTapLockUntil = 0;

  mobileJoystick.addEventListener('touchstart', (event) => {
    if (!canUseMobileControls() || mobileInput.moveTouchId !== null) {
      return;
    }
    const touch = event.changedTouches[0];
    if (!touch) {
      return;
    }
    mobileInput.moveTouchId = touch.identifier;
    updateMobileJoystickFromTouch(touch);
    event.preventDefault();
  }, { passive: false });

  mobileJoystick.addEventListener('touchmove', (event) => {
    if (!canUseMobileControls() || mobileInput.moveTouchId === null) {
      return;
    }
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === mobileInput.moveTouchId) {
        updateMobileJoystickFromTouch(touch);
        event.preventDefault();
        break;
      }
    }
  }, { passive: false });

  const releaseMoveTouch = (event) => {
    if (mobileInput.moveTouchId === null) {
      return;
    }
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === mobileInput.moveTouchId) {
        mobileInput.moveTouchId = null;
        mobileInput.moveX = 0;
        mobileInput.moveY = 0;
        if (mobileJoystickThumb) {
          mobileJoystickThumb.style.transform = 'translate(-50%, -50%)';
        }
        event.preventDefault();
        break;
      }
    }
  };
  mobileJoystick.addEventListener('touchend', releaseMoveTouch, { passive: false });
  mobileJoystick.addEventListener('touchcancel', releaseMoveTouch, { passive: false });

  mobileLookZone.addEventListener('touchstart', (event) => {
    if (!canUseMobileControls() || mobileInput.lookTouchId !== null) {
      return;
    }
    const touch = event.changedTouches[0];
    if (!touch) {
      return;
    }
    mobileInput.lookTouchId = touch.identifier;
    mobileInput.lookLastX = touch.clientX;
    mobileInput.lookLastY = touch.clientY;
    event.preventDefault();
  }, { passive: false });

  mobileLookZone.addEventListener('touchmove', (event) => {
    if (!canUseMobileControls() || mobileInput.lookTouchId === null) {
      return;
    }
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === mobileInput.lookTouchId) {
        const dx = touch.clientX - mobileInput.lookLastX;
        const dy = touch.clientY - mobileInput.lookLastY;
        mobileInput.lookLastX = touch.clientX;
        mobileInput.lookLastY = touch.clientY;
        applyMobileLookDelta(dx, dy);
        event.preventDefault();
        break;
      }
    }
  }, { passive: false });

  const releaseLookTouch = (event) => {
    if (mobileInput.lookTouchId === null) {
      return;
    }
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === mobileInput.lookTouchId) {
        mobileInput.lookTouchId = null;
        event.preventDefault();
        break;
      }
    }
  };
  mobileLookZone.addEventListener('touchend', releaseLookTouch, { passive: false });
  mobileLookZone.addEventListener('touchcancel', releaseLookTouch, { passive: false });

  const holdFireStart = (event) => {
    if (!canUseMobileControls()) {
      return;
    }
    cancelLocalFunnyAnimation();
    isFiring = true;
    event.preventDefault();
  };
  const holdFireEnd = (event) => {
    isFiring = false;
    event.preventDefault();
  };
  mobileFireBtn?.addEventListener('touchstart', holdFireStart, { passive: false });
  mobileFireBtn?.addEventListener('touchend', holdFireEnd, { passive: false });
  mobileFireBtn?.addEventListener('touchcancel', holdFireEnd, { passive: false });

  mobileSpecialBtn?.addEventListener('touchstart', (event) => {
    if (canUseMobileControls()) {
      cancelLocalFunnyAnimation();
      triggerCharacterSpecial();
      event.preventDefault();
    }
  }, { passive: false });

  mobileJumpBtn?.addEventListener('touchstart', (event) => {
    if (canUseMobileControls()) {
      triggerMobileJump();
      event.preventDefault();
    }
  }, { passive: false });

  const toggleMobileOptions = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!mobileInput.enabled || !state.joinedRoom || isInVersusWaitingLobby()) {
      return;
    }
    const now = performance.now();
    if (now < optionsTapLockUntil) {
      return;
    }
    optionsTapLockUntil = now + 350;
    toggleOptionsMenu();
  };
  mobileOptionsBtn?.addEventListener('touchstart', toggleMobileOptions, { passive: false });

  mobileJoystick.addEventListener('pointerdown', (event) => {
    if (!canUseMobileControls() || mobileInput.movePointerId !== null) {
      return;
    }
    mobileInput.movePointerId = event.pointerId;
    updateMobileJoystickFromTouch(event);
    event.preventDefault();
  });

  mobileJoystick.addEventListener('pointermove', (event) => {
    if (!canUseMobileControls() || mobileInput.movePointerId !== event.pointerId) {
      return;
    }
    updateMobileJoystickFromTouch(event);
    event.preventDefault();
  });

  const releaseMovePointer = (event) => {
    if (mobileInput.movePointerId !== event.pointerId) {
      return;
    }
    mobileInput.movePointerId = null;
    mobileInput.moveX = 0;
    mobileInput.moveY = 0;
    if (mobileJoystickThumb) {
      mobileJoystickThumb.style.transform = 'translate(-50%, -50%)';
    }
    event.preventDefault();
  };
  mobileJoystick.addEventListener('pointerup', releaseMovePointer);
  mobileJoystick.addEventListener('pointercancel', releaseMovePointer);

  mobileLookZone.addEventListener('pointerdown', (event) => {
    if (!canUseMobileControls() || mobileInput.lookPointerId !== null) {
      return;
    }
    mobileInput.lookPointerId = event.pointerId;
    mobileInput.lookLastX = event.clientX;
    mobileInput.lookLastY = event.clientY;
    event.preventDefault();
  });

  mobileLookZone.addEventListener('pointermove', (event) => {
    if (!canUseMobileControls() || mobileInput.lookPointerId !== event.pointerId) {
      return;
    }
    const dx = event.clientX - mobileInput.lookLastX;
    const dy = event.clientY - mobileInput.lookLastY;
    mobileInput.lookLastX = event.clientX;
    mobileInput.lookLastY = event.clientY;
    applyMobileLookDelta(dx, dy);
    event.preventDefault();
  });

  const releaseLookPointer = (event) => {
    if (mobileInput.lookPointerId !== event.pointerId) {
      return;
    }
    mobileInput.lookPointerId = null;
    event.preventDefault();
  };
  mobileLookZone.addEventListener('pointerup', releaseLookPointer);
  mobileLookZone.addEventListener('pointercancel', releaseLookPointer);

  mobileFireBtn?.addEventListener('pointerdown', holdFireStart);
  mobileFireBtn?.addEventListener('pointerup', holdFireEnd);
  mobileFireBtn?.addEventListener('pointercancel', holdFireEnd);
  mobileFireBtn?.addEventListener('pointerleave', holdFireEnd);

  mobileSpecialBtn?.addEventListener('pointerdown', (event) => {
    if (!canUseMobileControls()) {
      return;
    }
    cancelLocalFunnyAnimation();
    triggerCharacterSpecial();
    event.preventDefault();
  });

  mobileJumpBtn?.addEventListener('pointerdown', (event) => {
    if (!canUseMobileControls()) {
      return;
    }
    triggerMobileJump();
    event.preventDefault();
  });
  mobileOptionsBtn?.addEventListener('pointerdown', toggleMobileOptions);
};

window.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowUp') {
    keys.KeyW = true;
    event.preventDefault();
  } else if (event.code === 'ArrowDown') {
    keys.KeyS = true;
    event.preventDefault();
  } else if (event.code === 'ArrowLeft') {
    keys.KeyA = true;
    event.preventDefault();
  } else if (event.code === 'ArrowRight') {
    keys.KeyD = true;
    event.preventDefault();
  }

  const active = document.activeElement;
  const isEditableFocused = Boolean(
    active
      && (
        active.tagName === 'INPUT'
        || active.tagName === 'TEXTAREA'
        || active.isContentEditable
      ),
  );

  if (event.code === 'Escape' && !isChatTyping) {
    event.preventDefault();
    toggleOptionsMenu();
    return;
  }

  if (event.code === 'Enter') {
    event.preventDefault();
    if (!state.joinedRoom) {
      return;
    }
    if (isInVersusWaitingLobby()) {
      if (document.activeElement === versusChatInput) {
        sendVersusChatMessage();
      } else {
        versusChatInput.focus();
      }
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

  if (isEditableFocused) {
    return;
  }

  if (isChatTyping) {
    if (event.code === 'Escape') {
      event.preventDefault();
      closeChatInput();
    }
    return;
  }

  if (isTestControlsEnabled() && event.code === 'KeyB') {
    event.preventDefault();
    const cycle = ['shield', 'mana', 'health', 'auto'];
    devCollectNearestRequestKind = cycle[devCollectCycleIndex % cycle.length];
    devCollectCycleIndex = (devCollectCycleIndex + 1) % cycle.length;
    return;
  }
  if (isTestControlsEnabled() && event.code === 'KeyN') {
    event.preventDefault();
    devCollectNearestRequestKind = 'mana';
    return;
  }
  if (isTestControlsEnabled() && event.code === 'KeyV') {
    event.preventDefault();
    devCollectNearestRequestKind = 'shield';
    return;
  }
  if (isTestControlsEnabled() && event.code === 'KeyH') {
    event.preventDefault();
    devCollectNearestRequestKind = 'health';
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

  if (event.code === 'KeyJ') {
    event.preventDefault();
    logTuningSnapshot();
    return;
  }

  if (event.code === 'F9') {
    event.preventDefault();
    state.showHitboxDebug = !state.showHitboxDebug;
    refreshRemoteHitboxDebugVisibility();
    if (!state.showHitboxDebug && state.showCollisionOnly) {
      setCollisionOnlyMode(false);
    }
    return;
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
    if (!triggerCharacterSpecial()) {
      reloadWeapon();
    }
  }

  if (event.code in keys) {
    if (event.code === 'KeyW' || event.code === 'KeyA' || event.code === 'KeyS' || event.code === 'KeyD') {
      cancelLocalFunnyAnimation();
    }
    keys[event.code] = true;
  }
});

window.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowUp') {
    keys.KeyW = false;
    event.preventDefault();
  } else if (event.code === 'ArrowDown') {
    keys.KeyS = false;
    event.preventDefault();
  } else if (event.code === 'ArrowLeft') {
    keys.KeyA = false;
    event.preventDefault();
  } else if (event.code === 'ArrowRight') {
    keys.KeyD = false;
    event.preventDefault();
  }

  const active = document.activeElement;
  const isEditableFocused = Boolean(
    active
      && (
        active.tagName === 'INPUT'
        || active.tagName === 'TEXTAREA'
        || active.isContentEditable
      ),
  );

  if (isEditableFocused) {
    return;
  }

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

const applyMobileMoveKeys = () => {
  if (!mobileInput.active || !canPlay() || isChatTyping) {
    if (mobileInput.active) {
      keys.KeyW = false;
      keys.KeyA = false;
      keys.KeyS = false;
      keys.KeyD = false;
    }
    return;
  }
  const deadZone = 0.18;
  keys.KeyW = mobileInput.moveY < -deadZone;
  keys.KeyS = mobileInput.moveY > deadZone;
  keys.KeyA = mobileInput.moveX < -deadZone;
  keys.KeyD = mobileInput.moveX > deadZone;
};

const shoot = () => {
  const usingHoly = isSilentmanCharacter(activeCharacter);
  const usingHammer = isPumoriCharacter(activeCharacter);
  const usingPoison = isNeoorphenCharacter(activeCharacter);
  const usingLunar = isPezunalunarCharacter(activeCharacter);
  const usingMana = usingHoly || usingHammer || usingPoison || usingLunar;
  const myTeam = normalizePlayerTeam(localAvatar.team);
  const myPalette = getTeamPalette(myTeam);
  if (usingMana && mana < manaCostPerShot) {
    return;
  }

  if (!usingMana && ammoInMag <= 0) {
    reloadWeapon();
    return;
  }

  camera.getWorldDirection(dir);
  const baseDirection = dir.clone().normalize();
  const origin = camera.position.clone().add(baseDirection.clone().multiplyScalar(0.55));
  const movingSpeed = Math.sqrt((moveVelocity.x * moveVelocity.x) + (moveVelocity.z * moveVelocity.z));
  const moveFactor = Math.min(1, movingSpeed / Math.max(0.001, speed));
  const isBulletWeapon = !usingMana;
  const bulletSpread = isBulletWeapon
    ? ((0.0018 + (moveFactor * 0.0032) + (isJumping ? 0.0055 : 0) + (shotSpread * 0.0048)) * (1 / settings.mouseSensitivity))
    : 0;
  const shotDirection = baseDirection.clone();
  if (bulletSpread > 0) {
    const rightAxis = new THREE.Vector3().crossVectors(shotDirection, camera.up).normalize();
    const upAxis = new THREE.Vector3().crossVectors(rightAxis, shotDirection).normalize();
    const jitterX = (Math.random() * 2 - 1) * bulletSpread;
    const jitterY = (Math.random() * 2 - 1) * bulletSpread;
    shotDirection
      .add(rightAxis.multiplyScalar(jitterX))
      .add(upAxis.multiplyScalar(jitterY))
      .normalize();
  }

  raycaster.set(origin, shotDirection);
  raycaster.far = 220;
  const hits = raycaster.intersectObjects(shootables, false);

  let hitPoint = hits.length > 0
    ? hits[0].point
    : origin.clone().add(shotDirection.clone().multiplyScalar(120));

  if (usingHammer) {
    const currentDistance = origin.distanceTo(hitPoint);
    if (currentDistance > pumoriMaxThrowDistance) {
      hitPoint = origin.clone().add(shotDirection.clone().multiplyScalar(pumoriMaxThrowDistance));
    }
  }

  const distance = origin.distanceTo(hitPoint);

  if (usingHoly) {
    createHolyShotVisual(origin, hitPoint, { source: 'local', ownerId: state.self?.id, team: myTeam });
    triggerNaturePulse(origin);
  } else if (usingHammer) {
    createSacredHammerVisual(origin, hitPoint, { source: 'local', ownerId: state.self?.id, team: myTeam });
    triggerNaturePulse(origin);
  } else if (usingPoison) {
    createPoisonGasVisual(origin, hitPoint, { source: 'local', ownerId: state.self?.id, team: myTeam });
    triggerNaturePulse(origin);
  } else if (usingLunar) {
    createLunarFireVisual(origin, hitPoint, { source: 'local', ownerId: state.self?.id, team: myTeam });
    triggerNaturePulse(origin);
  } else {
    if (state.showCollisionOnly) {
      createNormalShotCollisionVisual(origin, hitPoint, myPalette.tracer);
    } else {
      createTracer(origin, hitPoint, myPalette.tracer);
      createImpact(hitPoint, myPalette.impactB);
      createHitWave(hitPoint, myPalette.impactA);
    }
  }

  localShotSeq += 1;
  const shotId = localShotSeq;
  pendingShotAcks.set(shotId, performance.now());

  sendWs({
    type: 'player_shoot',
    shotId,
    origin: { x: origin.x, y: origin.y, z: origin.z },
    direction: {
      x: shotDirection.x,
      y: shotDirection.y,
      z: shotDirection.z,
    },
    distance,
    shotTs: Math.round(getEstimatedServerNowMs()),
  });

  muzzleFlash.intensity = 2.3;
  recoilKick = Math.min(1.3, recoilKick + 0.52 + (moveFactor * 0.14) + (isJumping ? 0.18 : 0));
  shotSpread = Math.min(maxShotSpread, shotSpread + (isBulletWeapon ? (0.22 + moveFactor * 0.18 + (isJumping ? 0.24 : 0)) : 0.08));

  pitch += (Math.random() * 0.5 + 0.5) * recoilVertical;
  yaw += (Math.random() - 0.5) * recoilHorizontal;
  pitch = Math.min(pitch, Math.PI / 2 - 0.01);
  updateLook();

  if (hits.length > 0) {
    const target = hits[0].object;
    target.material.emissiveIntensity = 1.3;
  }
};

const pickupRequestCooldownMs = 300;
const pickupTakeRadius = 1.35;
const pickupTakeRadiusSq = pickupTakeRadius * pickupTakeRadius;

const tryRequestPickup = (pickup, eventType) => {
  if (!pickup || !Number.isFinite(Number(pickup.index))) {
    return;
  }
  const now = Date.now();
  if (now < Number(pickup.pendingRequestUntil || 0)) {
    return;
  }
  pickup.pendingRequestUntil = now + pickupRequestCooldownMs;
  sendWs({
    type: eventType,
    index: Number(pickup.index),
    position: {
      x: Number(camera.position.x || 0),
      z: Number(camera.position.z || 0),
    },
  });
};

const getNearestActivePickup = (collection) => {
  if (!Array.isArray(collection) || collection.length === 0) {
    return null;
  }
  let best = null;
  let bestSq = Number.POSITIVE_INFINITY;
  for (let i = 0; i < collection.length; i += 1) {
    const pickup = collection[i];
    if (!pickup?.active || !pickup.mesh?.visible) {
      continue;
    }
    const dx = Number(camera.position.x) - Number(pickup.mesh.position.x);
    const dz = Number(camera.position.z) - Number(pickup.mesh.position.z);
    const d2 = (dx * dx) + (dz * dz);
    if (d2 < bestSq) {
      bestSq = d2;
      best = pickup;
    }
  }
  return best;
};

const requestNearestPickupCollection = (kind) => {
  if (!import.meta.env.DEV || !canPlay()) {
    return false;
  }
  const normalizedKind = String(kind || 'auto').toLowerCase();
  const candidates = [];
  if (normalizedKind === 'shield') {
    candidates.push({ collection: shieldPickups, type: 'player_pickup_shield' });
  } else if (normalizedKind === 'mana') {
    candidates.push({
      collection: ammoPickups,
      type: isManaCharacter(activeCharacter) ? 'player_pickup_mana' : 'player_pickup_ammo',
    });
  } else if (normalizedKind === 'health') {
    candidates.push({ collection: healthPickups, type: 'player_pickup_health' });
  } else {
    candidates.push({ collection: shieldPickups, type: 'player_pickup_shield' });
    candidates.push({
      collection: ammoPickups,
      type: isManaCharacter(activeCharacter) ? 'player_pickup_mana' : 'player_pickup_ammo',
    });
    candidates.push({ collection: healthPickups, type: 'player_pickup_health' });
  }

  let best = null;
  let bestSq = Number.POSITIVE_INFINITY;
  for (let i = 0; i < candidates.length; i += 1) {
    const candidate = candidates[i];
    const pickup = getNearestActivePickup(candidate.collection);
    if (!pickup?.mesh) {
      continue;
    }
    const dx = Number(camera.position.x) - Number(pickup.mesh.position.x);
    const dz = Number(camera.position.z) - Number(pickup.mesh.position.z);
    const d2 = (dx * dx) + (dz * dz);
    if (d2 < bestSq) {
      bestSq = d2;
      best = { pickup, type: candidate.type };
    }
  }
  if (!best?.pickup?.mesh) {
    return false;
  }

  camera.position.x = Number(best.pickup.mesh.position.x);
  camera.position.z = Number(best.pickup.mesh.position.z);
  constrainPlayerToWorld();
  sendLocalPlayerState(true);
  tryRequestPickup(best.pickup, best.type);
  return true;
};

const updateDevCollectionRequests = () => {
  if (!import.meta.env.DEV || !devCollectNearestRequestKind) {
    return;
  }
  requestNearestPickupCollection(devCollectNearestRequestKind);
  devCollectNearestRequestKind = null;
};

const applyPickupClientState = (collection, index, active, respawnAtMs = 0) => {
  if (!Array.isArray(collection) || !Number.isFinite(Number(index))) {
    return;
  }
  const pickup = collection[Number(index)];
  if (!pickup?.mesh) {
    return;
  }
  pickup.active = Boolean(active);
  pickup.respawnAtMs = pickup.active ? 0 : Math.max(0, Number(respawnAtMs) || 0);
  pickup.pendingRequestUntil = 0;
  pickup.mesh.visible = pickup.active;
};

const applyPickupStateSnapshot = (pickupsPayload) => {
  if (!pickupsPayload || typeof pickupsPayload !== 'object') {
    return;
  }
  const applyList = (kind, collection) => {
    const list = pickupsPayload[kind];
    if (!Array.isArray(list)) {
      return;
    }
    for (let i = 0; i < list.length; i += 1) {
      const item = list[i] || {};
      const index = Number(item.index);
      if (!Number.isFinite(index)) {
        continue;
      }
      applyPickupClientState(collection, index, Boolean(item.active), Number(item.respawnAtMs) || 0);
    }
  };
  applyList('mana', ammoPickups);
  applyList('shield', shieldPickups);
  applyList('health', healthPickups);
};

const updateHealthRegen = (delta) => {
  void delta;
};

const clampPendingHealthRegenToMissing = () => {
  const maxRecoverable = Math.max(0, maxHealth - health);
  pendingHealthRegen = Math.max(0, Math.min(pendingHealthRegen, maxRecoverable));
};

const pickupFloatSpeed = 2.2;
const pickupFloatAmplitude = 0.1;

const spawnPickupSpark = (pickup, color) => {
  if (!pickup?.mesh || !pickup.active || !pickup.mesh.visible) {
    return;
  }

  if (activePickupSparks.length >= maxActivePickupSparks) {
    const oldSpark = activePickupSparks.shift();
    if (oldSpark) {
      scene.remove(oldSpark.mesh);
      oldSpark.mesh.geometry.dispose();
      oldSpark.mesh.material.dispose();
    }
  }

  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.55 + (Math.random() * 0.25),
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const spark = new THREE.Mesh(pickupSparkGeometry, material);
  const angle = Math.random() * Math.PI * 2;
  const radius = 0.11 + (Math.random() * 0.28);
  spark.position.set(
    pickup.mesh.position.x + Math.cos(angle) * radius,
    pickup.mesh.position.y + 0.08 + (Math.random() * 0.32),
    pickup.mesh.position.z + Math.sin(angle) * radius,
  );
  scene.add(spark);

  const life = 0.95 + (Math.random() * 0.85);
  activePickupSparks.push({
    mesh: spark,
    life,
    initialLife: life,
    velocity: new THREE.Vector3(
      (Math.random() - 0.5) * 0.16,
      1.6 + (Math.random() * 1.25),
      (Math.random() - 0.5) * 0.16,
    ),
  });
};

const updatePickupSparks = (delta) => {
  for (let i = activePickupSparks.length - 1; i >= 0; i -= 1) {
    const spark = activePickupSparks[i];
    spark.life -= delta;
    spark.mesh.position.addScaledVector(spark.velocity, delta);
    spark.velocity.y += delta * 0.55;
    spark.mesh.scale.multiplyScalar(1 + (delta * 1.45));

    const opacityFactor = Math.max(0, spark.life / spark.initialLife);
    spark.mesh.material.opacity = opacityFactor * 0.75;

    if (spark.life <= 0) {
      scene.remove(spark.mesh);
      spark.mesh.geometry.dispose();
      spark.mesh.material.dispose();
      activePickupSparks.splice(i, 1);
    }
  }
};

const updateMovement = (delta) => {
  if (!canPlay() || isOptionsOpen) {
    moveVelocity.multiplyScalar(Math.max(0, 1 - (delta * 10)));
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

  const hasInput = move.lengthSq() > 0;
  if (hasInput) {
    move.normalize().multiplyScalar(speed);
    const strafeOnly = (keys.KeyA || keys.KeyD) && !(keys.KeyW || keys.KeyS);
    if (strafeOnly) {
      move.multiplyScalar(strafeOnlySpeedFactor);
    }
  }

  const controlFactor = isJumping ? airControlFactor : 1;
  const response = 1 - Math.exp(-((hasInput ? moveAcceleration : moveDeceleration) * controlFactor) * delta);
  moveVelocity.x += ((hasInput ? move.x : 0) - moveVelocity.x) * response;
  moveVelocity.z += ((hasInput ? move.z : 0) - moveVelocity.z) * response;

  if (Math.abs(moveVelocity.x) < 0.0001) moveVelocity.x = 0;
  if (Math.abs(moveVelocity.z) < 0.0001) moveVelocity.z = 0;

  if (moveVelocity.lengthSq() > 0) {
    const totalDx = moveVelocity.x * delta;
    const totalDz = moveVelocity.z * delta;
    const travel = Math.sqrt((totalDx * totalDx) + (totalDz * totalDz));
    const steps = Math.max(1, Math.min(6, Math.ceil(travel / 0.35)));
    const stepDx = totalDx / steps;
    const stepDz = totalDz / steps;
    let moved = false;

    for (let i = 0; i < steps; i += 1) {
      const startX = camera.position.x;
      const startZ = camera.position.z;
      const desiredX = startX + stepDx;
      const desiredZ = startZ + stepDz;
      const next = applyWorldCollisions(desiredX, desiredZ);
      const stepMovedX = Math.abs(next.x - startX) > 0.0001;
      const stepMovedZ = Math.abs(next.z - startZ) > 0.0001;
      if (!stepMovedX && !stepMovedZ) {
        moveVelocity.x = 0;
        moveVelocity.z = 0;
        break;
      }
      if (!stepMovedX) {
        moveVelocity.x = 0;
      }
      if (!stepMovedZ) {
        moveVelocity.z = 0;
      }
      camera.position.x = next.x;
      camera.position.z = next.z;
      moved = true;
    }

    camera.position.y = Math.max(playerGroundY, camera.position.y);
    if (moved) {
      sendLocalPlayerState();
    }
  }
};

const applyLocalMovementReconciliation = (delta) => {
  if (!localReconcileTarget) {
    return;
  }
  if (!canPlay()) {
    localReconcileTarget = null;
    localReconcileExpiresAt = 0;
    return;
  }
  const now = performance.now();
  if (now > localReconcileExpiresAt) {
    localReconcileTarget = null;
    localReconcileExpiresAt = 0;
    return;
  }
  const factor = Math.max(0.01, Math.min(1, delta * localReconcileRatePerSecond));
  camera.position.lerp(localReconcileTarget, factor);
  constrainPlayerToWorld();
  if (camera.position.distanceToSquared(localReconcileTarget) <= (localReconcileSoftError * localReconcileSoftError)) {
    localReconcileTarget = null;
    localReconcileExpiresAt = 0;
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
  const nowMs = Date.now();
  const nowSeconds = performance.now() / 1000;

  for (let i = 0; i < ammoPickups.length; i += 1) {
    const pickup = ammoPickups[i];

    if (!pickup.active) {
      if (nowMs >= Number(pickup.respawnAtMs || 0)) {
        pickup.active = true;
        pickup.respawnAtMs = 0;
        pickup.mesh.visible = true;
      } else {
        continue;
      }
    }

    pickup.mesh.rotation.y += delta * 2.2;
    pickup.mesh.position.y = pickup.baseY + Math.sin(nowSeconds * pickupFloatSpeed + pickup.phase) * pickupFloatAmplitude;
    if (Math.random() < delta * 2.9) {
      spawnPickupSpark(pickup, 0x8fc3ff);
      if (Math.random() < 0.72) {
        spawnPickupSpark(pickup, 0x8fc3ff);
      }
    }

    if (!canPlay() || (!isManaCharacter(activeCharacter) && ammoReserve >= maxAmmoTotal)) {
      continue;
    }

    const dx = camera.position.x - pickup.mesh.position.x;
    const dz = camera.position.z - pickup.mesh.position.z;
    const horizontalDistanceSq = dx * dx + dz * dz;
    if (horizontalDistanceSq <= pickupTakeRadiusSq) {
      if (isManaCharacter(activeCharacter)) {
        tryRequestPickup(pickup, 'player_pickup_mana');
      } else {
        tryRequestPickup(pickup, 'player_pickup_ammo');
      }
    }
  }
};

const updateShieldPickups = (delta) => {
  const nowMs = Date.now();
  const nowSeconds = performance.now() / 1000;

  for (let i = 0; i < shieldPickups.length; i += 1) {
    const pickup = shieldPickups[i];

    if (!pickup.active) {
      if (nowMs >= Number(pickup.respawnAtMs || 0)) {
        pickup.active = true;
        pickup.respawnAtMs = 0;
        pickup.mesh.visible = true;
      } else {
        continue;
      }
    }

    pickup.mesh.position.y = pickup.baseY + Math.sin(nowSeconds * pickupFloatSpeed + pickup.phase) * pickupFloatAmplitude;
    if (Math.random() < delta * 3.1) {
      spawnPickupSpark(pickup, 0x8ff7ff);
      if (Math.random() < 0.75) {
        spawnPickupSpark(pickup, 0x8ff7ff);
      }
    }

    if (!canPlay()) {
      continue;
    }

    const dx = camera.position.x - pickup.mesh.position.x;
    const dz = camera.position.z - pickup.mesh.position.z;
    const horizontalDistanceSq = dx * dx + dz * dz;
    if (horizontalDistanceSq <= pickupTakeRadiusSq) {
      tryRequestPickup(pickup, 'player_pickup_shield');
    }
  }
};

const updateHealthPickups = (delta) => {
  const nowMs = Date.now();
  const nowSeconds = performance.now() / 1000;

  for (let i = 0; i < healthPickups.length; i += 1) {
    const pickup = healthPickups[i];

    if (!pickup.active) {
      if (nowMs >= Number(pickup.respawnAtMs || 0)) {
        pickup.active = true;
        pickup.respawnAtMs = 0;
        pickup.mesh.visible = true;
      } else {
        continue;
      }
    }

    pickup.mesh.rotation.y += delta * 1.9;
    pickup.mesh.position.y = pickup.baseY + Math.sin(nowSeconds * pickupFloatSpeed + pickup.phase) * pickupFloatAmplitude;
    if (Math.random() < delta * 3.5) {
      spawnPickupSpark(pickup, 0xa5ffb0);
      if (Math.random() < 0.82) {
        spawnPickupSpark(pickup, 0xa5ffb0);
      }
    }

    if (!canPlay() || isRespawning) {
      continue;
    }

    const dx = camera.position.x - pickup.mesh.position.x;
    const dz = camera.position.z - pickup.mesh.position.z;
    const horizontalDistanceSq = dx * dx + dz * dz;
    if (horizontalDistanceSq <= pickupTakeRadiusSq) {
      tryRequestPickup(pickup, 'player_pickup_health');
    }
  }
};

if (import.meta.env.DEV) {
  window.__dev_collect_nearest_pickup = (kind = 'auto') => requestNearestPickupCollection(kind);
}

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

const updateKoketriaNature = (delta) => {
  const pulseDecay = currentWeather === 'night' ? 0.35 : 0.55;
  naturePulse = Math.max(0, naturePulse - (delta * pulseDecay));

  const now = performance.now() * 0.001;
  const positions = lowSparkGeo.attributes.position.array;
  for (let i = 0; i < lowSparkCount; i += 1) {
    const idx = i * 3;
    positions[idx + 1] += Math.sin((now * lowSparkVel[i]) + i) * 0.003;
    positions[idx] += Math.cos((now * 0.7) + i) * 0.0025;
    positions[idx + 2] += Math.sin((now * 0.5) + i) * 0.0025;
  }
  lowSparkGeo.attributes.position.needsUpdate = true;

  const pulseBoost = naturePulse * 0.95;
  for (let i = 0; i < reactiveNatureMaterials.length; i += 1) {
    const entry = reactiveNatureMaterials[i];
    const jitter = (Math.sin((now * 1.6) + entry.phase) + 1) * 0.035;
    entry.material.emissiveIntensity = entry.base + jitter + pulseBoost;
    if (entry.material.color && pulseBoost > 0.08) {
      entry.material.color.offsetHSL(Math.sin(now + entry.phase) * 0.0003, 0.0004, 0.0003);
    }
  }

  if (edgeMistMesh?.material) {
    edgeMistMesh.material.opacity = 0.14 + (Math.sin(now * 0.7) * 0.025) + (naturePulse * 0.08);
  }
};

const updateRemotePlayers = (delta) => {
  updateRemoteNetTimings(delta);
  const baseFactor = Math.min(1, delta * 8);
  const now = performance.now();
  const renderTs = getEstimatedServerNowMs() - remoteInterpolationDynamicMs;

  for (const entry of state.remotePlayers.values()) {
    const snapshots = entry.netSnapshots || [];
    if (snapshots.length > 0) {
      const pruneBefore = renderTs - 1000;
      while (snapshots.length > 2 && snapshots[0].ts < pruneBefore) {
        snapshots.shift();
      }

      let targetState = snapshots[snapshots.length - 1];
      for (let i = 1; i < snapshots.length; i += 1) {
        const prev = snapshots[i - 1];
        const next = snapshots[i];
        if (renderTs < prev.ts || renderTs > next.ts) {
          continue;
        }
        const span = Math.max(1, next.ts - prev.ts);
        const t = Math.max(0, Math.min(1, (renderTs - prev.ts) / span));
        targetState = {
          x: prev.x + ((next.x - prev.x) * t),
          y: prev.y + ((next.y - prev.y) * t),
          z: prev.z + ((next.z - prev.z) * t),
          yaw: prev.yaw + (((next.yaw - prev.yaw + Math.PI * 3) % (Math.PI * 2) - Math.PI) * t),
          pitch: prev.pitch + ((next.pitch - prev.pitch) * t),
          jumping: prev.jumping || next.jumping,
          moving: prev.moving || next.moving,
          ts: renderTs,
        };
        break;
      }

      if (snapshots.length >= 2 && renderTs > snapshots[snapshots.length - 1].ts) {
        const last = snapshots[snapshots.length - 1];
        const prev = snapshots[snapshots.length - 2];
        const lateByMs = renderTs - last.ts;
        if (lateByMs <= remoteExtrapolationDynamicMs) {
          const dt = Math.max(1, last.ts - prev.ts);
          const dtSeconds = dt / 1000;
          const rawVx = (last.x - prev.x) / dtSeconds;
          const rawVy = (last.y - prev.y) / dtSeconds;
          const rawVz = (last.z - prev.z) / dtSeconds;
          const rawSpeed = Math.hypot(rawVx, rawVy, rawVz);
          const speedClamp = rawSpeed > 0
            ? Math.min(1, remoteExtrapolationMaxSpeed / rawSpeed)
            : 1;
          const factorByLate = Math.max(0, Math.min(1, 1 - (lateByMs / Math.max(1, remoteExtrapolationDynamicMs))));
          const damp = remoteExtrapolationDamping * factorByLate;
          const vx = rawVx * speedClamp * damp;
          const vy = rawVy * speedClamp * damp;
          const vz = rawVz * speedClamp * damp;
          const lateSeconds = lateByMs / 1000;
          const extrapX = last.x + (vx * lateSeconds);
          const extrapY = last.y + (vy * lateSeconds);
          const extrapZ = last.z + (vz * lateSeconds);
          targetState = {
            x: last.moving ? extrapX : last.x,
            y: last.moving ? extrapY : last.y,
            z: last.moving ? extrapZ : last.z,
            yaw: last.yaw,
            pitch: last.pitch,
            jumping: last.jumping,
            moving: last.moving,
            ts: renderTs,
          };
        } else {
          targetState = last;
        }
      }

      entry.targetPosition.set(targetState.x, targetState.y, targetState.z);
      entry.targetYaw = targetState.yaw;
      entry.targetPitch = targetState.pitch;
      entry.isJumping = Boolean(targetState.jumping);
      if (targetState.moving) {
        entry.movingUntil = Math.max(Number(entry.movingUntil || 0), now + remoteMovingSignalHoldMs);
      }
    }

    const positionError = entry.group.position.distanceTo(entry.targetPosition);
    let factor = baseFactor;
    if (positionError > remoteHardCatchupDistance) {
      factor = Math.max(factor, Math.min(1, delta * 12));
    } else if (positionError > remoteMediumCatchupDistance) {
      factor = Math.max(factor, Math.min(1, delta * 10));
    }
    const prevX = entry.group.position.x;
    const prevY = entry.group.position.y;
    const prevZ = entry.group.position.z;
    if (positionError > remoteSnapDistance) {
      entry.group.position.copy(entry.targetPosition);
    } else {
      entry.group.position.lerp(entry.targetPosition, factor);
    }
    entry.group.rotation.y = lerpAngle(
      entry.group.rotation.y,
      entry.targetYaw + remoteFacingYawOffset,
      factor,
    );
    const dxMoved = entry.group.position.x - prevX;
    const dyMoved = entry.group.position.y - prevY;
    const dzMoved = entry.group.position.z - prevZ;
    const movedDistance = Math.sqrt((dxMoved * dxMoved) + (dyMoved * dyMoved) + (dzMoved * dzMoved));
    const instantMoveSpeed = delta > 0 ? (movedDistance / delta) : 0;
    const moveFilter = Math.min(1, delta * 10);
    entry.smoothedMoveSpeed = THREE.MathUtils.lerp(
      Number(entry.smoothedMoveSpeed || 0),
      instantMoveSpeed,
      moveFilter,
    );
    const movingNow = entry.currentAnimation === 'move'
      ? entry.smoothedMoveSpeed > remoteAnimMoveSpeedOff
      : entry.smoothedMoveSpeed > remoteAnimMoveSpeedOn;
    const movingBySignal = now < Number(entry.movingUntil || 0);
    const shouldMoveAnim = movingBySignal || movingNow;
    const isAirborne = entry.isJumping || entry.targetPosition.y > 0.08 || entry.group.position.y > 0.08;
    const canSwitchAnim = (now - Number(entry.lastAnimationAt || 0)) >= remoteAnimSwitchCooldownMs;

    if (entry.head) {
      entry.head.rotation.x = lerpAngle(entry.head.rotation.x, entry.targetPitch, factor);
    }
    if (entry.avatarRoot && entry.avatarRoot !== entry.group) {
      entry.avatarRoot.visible = !state.showCollisionOnly;
    }
    if (entry.body) {
      entry.body.visible = !state.showCollisionOnly;
    }
    if (entry.head) {
      entry.head.visible = !state.showCollisionOnly;
    }
    if (entry.healthBar?.holder) {
      const cam = getRenderCamera();
      const holder = entry.healthBar.holder;
      cam.getWorldQuaternion(tmpWorldQuatA);
      if (holder.parent) {
        holder.parent.getWorldQuaternion(tmpWorldQuatB);
        tmpWorldQuatB.invert();
        holder.quaternion.copy(tmpWorldQuatB.multiply(tmpWorldQuatA));
      } else {
        holder.quaternion.copy(tmpWorldQuatA);
      }
      const distance = entry.group.position.distanceTo(getRenderCamera().position);
      const visibleByDistance = distance <= remoteHealthBarMaxVisibleDistance;
      const scale = Math.max(0.74, Math.min(1.06, 1.12 - (distance / 170)));
      holder.scale.setScalar(scale);
      holder.visible = !state.showCollisionOnly && !entry.isDead && visibleByDistance;
    }
    if (entry.teamOutline) {
      const distance = entry.group.position.distanceTo(getRenderCamera().position);
      entry.teamOutline.visible = !state.showCollisionOnly && shouldShowTeamMarkers() && !entry.isDead && distance <= 55;
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
        entry.lastAnimationAt = now;
      } else if (shouldMoveAnim) {
        setRemoteAnimation(entry, 'move');
        entry.lastAnimationAt = now;
      } else {
        setRemoteIdle(entry);
        entry.lastAnimationAt = now;
      }
      entry.animationUntil = 0;
    }

    if (!entry.isDead && entry.animationUntil <= 0) {
      if (isAirborne) {
        if (entry.currentAnimation !== 'jump') {
          setRemoteAnimation(entry, 'jump');
          entry.lastAnimationAt = now;
        }
      } else if (shouldMoveAnim) {
        if (entry.currentAnimation !== 'move' && canSwitchAnim) {
          setRemoteAnimation(entry, 'move');
          entry.lastAnimationAt = now;
        }
      } else if (entry.currentAnimation !== 'idle' && canSwitchAnim) {
        setRemoteIdle(entry);
        entry.lastAnimationAt = now;
      }
    }
  }
};

const updateEffects = (delta) => {
  muzzleFlash.intensity = Math.max(0, muzzleFlash.intensity - 20 * delta);
  recoilKick = Math.max(0, recoilKick - (delta * 4.8));
  shotSpread = Math.max(0, shotSpread - (delta * spreadDecayPerSecond));
  updatePickupSparks(delta);

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

  for (let i = activeNormalShotCollisionVisuals.length - 1; i >= 0; i -= 1) {
    const line = activeNormalShotCollisionVisuals[i];
    line.userData.life -= delta;
    line.material.opacity = Math.max(0, line.userData.life * 8);
    if (line.userData.life <= 0) {
      scene.remove(line);
      line.material.dispose();
      activeNormalShotCollisionVisuals.splice(i, 1);
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

  for (let i = activeHitWaves.length - 1; i >= 0; i -= 1) {
    const wave = activeHitWaves[i];
    wave.userData.life -= delta;
    wave.scale.multiplyScalar(1 + (wave.userData.expand * delta));
    wave.material.opacity = Math.max(0, wave.userData.life * 6);
    if (wave.userData.life <= 0) {
      scene.remove(wave);
      wave.material.dispose();
      activeHitWaves.splice(i, 1);
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
    projectile.mesh.visible = !state.showCollisionOnly;
    ensureProjectileCollisionDebug(projectile, 0.22, 0x9af6ff);

    projectile.mesh.scale.setScalar(1.25 + (Math.sin(performance.now() * 0.02) * 0.24));

    projectile.trailTimer += delta;
    const trailInterval = projectile.source === 'remote' ? 0.028 : 0.012;
    if (projectile.trailTimer >= trailInterval) {
      projectile.trailTimer = 0;
      const spark = createImpact(pos, Math.random() > 0.5 ? projectile.colors.a : projectile.colors.b);
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
      disposeProjectileCollisionDebug(projectile);
      activeHolyProjectiles.splice(i, 1);

      const impactCenter = impactPoint ? impactPoint.clone() : projectile.end.clone();
      if (impactPoint && projectile.source === 'remote') {
        applyIncomingProjectileHit({ point: impactCenter, headshot: impactHeadshot }, projectile.ownerId);
      }
      const headGlow = createImpact(impactCenter, projectile.colors.a);
      if (headGlow) {
        headGlow.scale.setScalar(2.3);
        headGlow.userData.life = 0.42;
      }
      const coreBlast = createImpact(impactCenter, projectile.colors.b);
      if (coreBlast) {
        coreBlast.scale.setScalar(1.7);
        coreBlast.userData.life = 0.36;
      }
      createHitWave(impactCenter, projectile.colors.tracer);

      createTracer(
        impactCenter.clone().add(projectile.up.clone().multiplyScalar(1.05)),
        impactCenter.clone().add(projectile.up.clone().multiplyScalar(-1.05)),
        projectile.colors.a,
        { radiusScale: 2.2, life: 0.34, opacity: 1 },
      );
      createTracer(
        impactCenter.clone().add(projectile.right.clone().multiplyScalar(0.7)),
        impactCenter.clone().add(projectile.right.clone().multiplyScalar(-0.7)),
        projectile.colors.tracer,
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
    projectile.mesh.visible = !state.showCollisionOnly;
    ensureProjectileCollisionDebug(projectile, 0.4, 0xffeaa5);

    const traveledStep = projectile.pos.distanceTo(projectile.prevPos);
    projectile.traveledDistance += traveledStep;
    const lifetimeT = Math.max(0, Math.min(1, projectile.traveledDistance / pumoriMaxThrowDistance));

    const spin = projectile.phase + (lifetimeT * projectile.spin);
    projectile.mesh.rotation.set(spin * 0.9, spin * 1.1, spin * 0.75);

    projectile.trailTimer += delta;
    const trailInterval = projectile.source === 'remote' ? 0.032 : 0.018;
    if (projectile.trailTimer >= trailInterval) {
      projectile.trailTimer = 0;
      const spark = createImpact(projectile.pos, Math.random() > 0.5 ? projectile.colors.a : projectile.colors.b);
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
          impactPoint = getRemoteSegmentCharacterImpact(entry, projectile.prevPos, projectile.pos);
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
      disposeProjectileCollisionDebug(projectile);
      activeHammerProjectiles.splice(i, 1);

      if (impactPoint) {
        const impactCenter = impactPoint.clone();
        if (projectile.source === 'remote') {
          applyIncomingProjectileHit({ point: impactCenter, headshot: impactHeadshot }, projectile.ownerId);
        }
        const blastA = createImpact(impactCenter, projectile.colors.a);
        const blastB = createImpact(impactCenter, projectile.colors.b);
        if (blastA) {
          blastA.scale.setScalar(2.5);
          blastA.userData.life = 0.42;
        }
        if (blastB) {
          blastB.scale.setScalar(1.9);
          blastB.userData.life = 0.35;
        }
        createHitWave(impactCenter, projectile.colors.tracer);

        createTracer(
          impactCenter.clone().add(projectile.up.clone().multiplyScalar(1.15)),
          impactCenter.clone().add(projectile.up.clone().multiplyScalar(-1.15)),
          projectile.colors.a,
          { radiusScale: 2.3, life: 0.34, opacity: 1 },
        );
        createTracer(
          impactCenter.clone().add(projectile.right.clone().multiplyScalar(0.8)),
          impactCenter.clone().add(projectile.right.clone().multiplyScalar(-0.8)),
          projectile.colors.tracer,
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
    projectile.mesh.visible = !state.showCollisionOnly;
    ensureProjectileCollisionDebug(projectile, 0.22, 0x70ff8a);

    projectile.mesh.scale.setScalar(1.12 + (Math.sin(performance.now() * 0.02) * 0.28));

    projectile.trailTimer += delta;
    const trailInterval = projectile.source === 'remote' ? 0.016 : 0.007;
    if (projectile.trailTimer >= trailInterval) {
      projectile.trailTimer = 0;
      const colorA = Math.random() > 0.5 ? projectile.colors.tracer : projectile.colors.a;
      const colorB = Math.random() > 0.5 ? projectile.colors.tracer : projectile.colors.b;
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
      disposeProjectileCollisionDebug(projectile);
      activePoisonProjectiles.splice(i, 1);

      const impactCenter = impactPoint ? impactPoint.clone() : projectile.end.clone();
      if (impactPoint && projectile.source === 'remote') {
        applyIncomingProjectileHit({ point: impactCenter, headshot: impactHeadshot }, projectile.ownerId);
      }

      const cloudA = createImpact(impactCenter, projectile.colors.tracer);
      if (cloudA) {
        cloudA.scale.setScalar(2.45);
        cloudA.userData.life = 0.45;
      }
      const cloudB = createImpact(impactCenter, projectile.colors.b);
      if (cloudB) {
        cloudB.scale.setScalar(1.9);
        cloudB.userData.life = 0.38;
      }
      createHitWave(impactCenter, projectile.colors.tracer);
      createTracer(
        impactCenter.clone().add(projectile.up.clone().multiplyScalar(0.95)),
        impactCenter.clone().add(projectile.up.clone().multiplyScalar(-0.95)),
        projectile.colors.tracer,
        { radiusScale: 2, life: 0.28, opacity: 1 },
      );
      createTracer(
        impactCenter.clone().add(projectile.right.clone().multiplyScalar(0.75)),
        impactCenter.clone().add(projectile.right.clone().multiplyScalar(-0.75)),
        projectile.colors.a,
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
    projectile.mesh.visible = !state.showCollisionOnly;
    ensureProjectileCollisionDebug(projectile, 0.24, 0x9fd9ff);
    projectile.mesh.scale.setScalar(1.25 + (Math.sin(performance.now() * 0.03) * 0.18));

    projectile.trailTimer += delta;
    const trailInterval = projectile.source === 'remote' ? 0.012 : 0.005;
    if (projectile.trailTimer >= trailInterval) {
      projectile.trailTimer = 0;
      const tailLen = 2.9 + Math.random() * 1.4;
      const tailEnd = pos.clone().add(projectile.dir.clone().multiplyScalar(-tailLen));
      const tailColor = Math.random() > 0.5 ? projectile.colors.a : projectile.colors.tracer;
      createTracer(pos, tailEnd, tailColor, { radiusScale: 1.8, life: 0.36, opacity: 0.92 });

      const ember = createImpact(tailEnd, Math.random() > 0.5 ? projectile.colors.a : projectile.colors.b);
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
      disposeProjectileCollisionDebug(projectile);
      activeLunarProjectiles.splice(i, 1);

      const impactCenter = impactPoint ? impactPoint.clone() : projectile.end.clone();
      if (impactPoint && projectile.source === 'remote') {
        applyIncomingProjectileHit({ point: impactCenter, headshot: impactHeadshot }, projectile.ownerId);
      }

      const blastCore = createImpact(impactCenter, projectile.colors.a);
      const blastAura = createImpact(impactCenter, projectile.colors.b);
      if (blastCore) {
        blastCore.scale.setScalar(2.2);
        blastCore.userData.life = 0.4;
      }
      if (blastAura) {
        blastAura.scale.setScalar(2.8);
        blastAura.userData.life = 0.46;
      }
      createHitWave(impactCenter, projectile.colors.tracer);
      createTracer(
        impactCenter.clone().add(projectile.up.clone().multiplyScalar(1.35)),
        impactCenter.clone().add(projectile.up.clone().multiplyScalar(-1.35)),
        projectile.colors.a,
        { radiusScale: 2.35, life: 0.36, opacity: 1 },
      );
      createTracer(
        impactCenter.clone().add(projectile.right.clone().multiplyScalar(1.05)),
        impactCenter.clone().add(projectile.right.clone().multiplyScalar(-1.05)),
        projectile.colors.tracer,
        { radiusScale: 2.15, life: 0.36, opacity: 0.98 },
      );
    }
  }
};

const updatePumoriOrbitSpecials = (delta) => {
  void delta;
  const now = performance.now();
  for (let i = activePumoriOrbitSpecials.length - 1; i >= 0; i -= 1) {
    const special = activePumoriOrbitSpecials[i];
    if (!special || now >= special.endAt) {
      clearPumoriOrbitSpecialByOwner(special?.ownerId);
      continue;
    }
    const center = getPlayerPositionById(special.ownerId);
    if (!center) {
      if (now > (special.waitingOwnerUntil || 0)) {
        clearPumoriOrbitSpecialByOwner(special.ownerId);
      }
      continue;
    }
    // Compact disposed entries in place to avoid per-frame array allocations.
    if (special.hammers.length > 0) {
      let write = 0;
      for (let read = 0; read < special.hammers.length; read += 1) {
        const entry = special.hammers[read];
        if (!entry?.disposed) {
          special.hammers[write] = entry;
          write += 1;
        }
      }
      special.hammers.length = write;
    }

    while (special.nextSpawnAt <= now && special.nextSpawnAt < special.endAt) {
      if (special.hammers.length < special.maxActiveHammers) {
        const hammer = createHammerMesh(0.82, 0.95, special.team);
        hammer.position.copy(center);
        hammer.visible = true;
        scene.add(hammer);
        const spawnProgress = Math.max(
          0,
          Math.min(1, (special.nextSpawnAt - special.createdAt) / Math.max(1, special.endAt - special.createdAt)),
        );
        special.hammers.push({
          mesh: hammer,
          spawnAt: special.nextSpawnAt,
          baseAngle: (Math.random() * Math.PI * 2) + ((special.spawnCount % 4) * (Math.PI * 0.5)),
          maxRadius: Math.max(2.2, special.maxOrbitRadius * (0.22 + (spawnProgress * 0.78))),
          prevPos: center.clone(),
          disposed: false,
        });
      }
      special.spawnCount += 1;
      special.nextSpawnAt += special.spawnIntervalMs;
    }

    const t = (now - special.createdAt) / 1000;
    const lifeRatio = Math.max(0, Math.min(1, (now - special.createdAt) / Math.max(1, special.endAt - special.createdAt)));
    const lift = 0.2 + (Math.sin(t * 5.5) * 0.1);
    const ownerIsSelf = Boolean(state.self && special.ownerId === state.self.id);
    for (let j = 0; j < special.hammers.length; j += 1) {
      const hammerEntry = special.hammers[j];
      const hammer = hammerEntry.mesh;
      if (!hammer || hammerEntry.disposed) {
        continue;
      }
      hammer.visible = true;

      const appearedRatio = Math.max(0, Math.min(1, (now - hammerEntry.spawnAt) / 1200));
      const expandingRadius = hammerEntry.maxRadius * (0.25 + (0.75 * lifeRatio * appearedRatio));
      const angle = special.phase + (t * 5.4) + hammerEntry.baseAngle + (j * 0.11);
      const radius = expandingRadius + Math.sin((t * 3.4) + j) * 0.12;
      hammerEntry.prevPos.copy(hammer.position);
      hammer.position.set(
        center.x + (Math.cos(angle) * radius),
        center.y + lift + (Math.sin((t * 3.1) + j) * 0.18),
        center.z + (Math.sin(angle) * radius),
      );
      hammer.rotation.set((t * 5.8) + j, (t * 6.5) + (j * 0.7), (t * 4.9) + j);
      hammer.visible = !state.showCollisionOnly;
      hammerEntry.pos = hammer.position;
      ensureProjectileCollisionDebug(hammerEntry, 0.34, 0xffe8b8);

      let impactPoint = null;
      if (hammer.position.y <= 0.22) {
        impactPoint = hammer.position.clone();
        impactPoint.y = 0.22;
      }
      if (!impactPoint) {
        impactPoint = getSegmentWallImpact(hammerEntry.prevPos, hammer.position, 0.34);
      }
      if (!impactPoint) {
        if (ownerIsSelf) {
          for (const entry of state.remotePlayers.values()) {
            impactPoint = getRemoteSegmentCharacterImpact(
              entry,
              hammerEntry.prevPos,
              hammer.position,
            );
            if (impactPoint) {
              break;
            }
          }
        } else {
          const localImpact = getLocalSegmentCharacterImpact(hammerEntry.prevPos, hammer.position);
          if (localImpact) {
            impactPoint = localImpact.point;
          }
        }
      }
      if (impactPoint) {
        disposePumoriOrbitHammer(hammerEntry, impactPoint);
        continue;
      }

      if (Math.random() < 0.45) {
        const spark = createImpact(hammer.position, Math.random() > 0.5 ? 0xfff2c6 : 0x9af0ff);
        if (spark) {
          spark.scale.setScalar(0.45 + Math.random() * 0.35);
          spark.userData.life = 0.1 + Math.random() * 0.1;
        }
      }
    }
  }
};

const getPumoriOrbitVfxCount = () => {
  let total = 0;
  for (let i = 0; i < activePumoriOrbitSpecials.length; i += 1) {
    const special = activePumoriOrbitSpecials[i];
    if (!special?.hammers) {
      continue;
    }
    for (let j = 0; j < special.hammers.length; j += 1) {
      if (special.hammers[j]?.mesh?.visible && !special.hammers[j]?.disposed) {
        total += 1;
      }
    }
  }
  return total;
};

const updateShooting = (delta) => {
  const usingMana = isManaCharacter(activeCharacter);

  if (!canPlay()) {
    return;
  }

  if (usingMana && isReloading) {
    isReloading = false;
    reloadCooldown = 0;
  }

  cooldown -= delta;
  if (isOptionsOpen) {
    isFiring = false;
    return;
  }
  if ((isLocked || mobileInput.active) && isFiring && cooldown <= 0 && !isReloading) {
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
      respawnRequestPending = false;
      lastRespawnRequestAt = 0;
      respawnEndsAt = 0;
      respawnSecondsLeft = getRespawnDurationSeconds();
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

const updateResourceSync = () => {
  // Competitive state now comes from authoritative server pushes.
};

const summarizePickups = (collection) => {
  if (!Array.isArray(collection) || collection.length === 0) {
    return {
      active: 0,
      nearestDistance: null,
      nearestIndex: null,
      nearestPosition: null,
      nearestDelta: null,
    };
  }
  let active = 0;
  let nearestSq = Number.POSITIVE_INFINITY;
  let nearestIndex = null;
  let nearestPosition = null;
  for (let i = 0; i < collection.length; i += 1) {
    const pickup = collection[i];
    if (!pickup?.active || !pickup.mesh?.visible) {
      continue;
    }
    active += 1;
    const dx = Number(camera.position.x) - Number(pickup.mesh.position.x);
    const dz = Number(camera.position.z) - Number(pickup.mesh.position.z);
    const d2 = (dx * dx) + (dz * dz);
    if (d2 < nearestSq) {
      nearestSq = d2;
      nearestIndex = Number.isFinite(Number(pickup.index)) ? Number(pickup.index) : i;
      nearestPosition = {
        x: Number(pickup.mesh.position.x.toFixed(3)),
        y: Number(pickup.mesh.position.y.toFixed(3)),
        z: Number(pickup.mesh.position.z.toFixed(3)),
      };
    }
  }
  const nearestDistance = Number.isFinite(nearestSq) ? Math.sqrt(nearestSq) : null;
  let nearestDelta = null;
  if (nearestPosition) {
    nearestDelta = {
      x: Number((nearestPosition.x - Number(camera.position.x)).toFixed(3)),
      z: Number((nearestPosition.z - Number(camera.position.z)).toFixed(3)),
    };
  }
  return {
    active,
    nearestDistance: nearestDistance == null ? null : Number(nearestDistance.toFixed(3)),
    nearestIndex,
    nearestPosition,
    nearestDelta,
  };
};

const renderGameToText = () => {
  const room = state.joinedRoom?.room || null;
  const manaSummary = summarizePickups(ammoPickups);
  const shieldSummary = summarizePickups(shieldPickups);
  const healthSummary = summarizePickups(healthPickups);
  camera.getWorldDirection(forward);
  const payload = {
    note: 'coords: x derecha(+), z adelante(+), y arriba(+)',
    mode: room?.mode || 'lobby',
    room: room
      ? {
        id: room.id || null,
        status: room.status || null,
        weather: room.weather || null,
      }
      : null,
    player: {
      x: Number(camera.position.x.toFixed(3)),
      y: Number(camera.position.y.toFixed(3)),
      z: Number(camera.position.z.toFixed(3)),
      yaw: Number(yaw.toFixed(4)),
      pitch: Number(pitch.toFixed(4)),
      forward: {
        x: Number(forward.x.toFixed(4)),
        z: Number(forward.z.toFixed(4)),
      },
      isJumping: Boolean(isJumping),
      canPlay: Boolean(canPlay()),
    },
    resources: {
      health: Math.round(health),
      shield: Math.round(shield),
      mana: Math.round(mana),
      ammoInMag: Math.round(ammoInMag),
      ammoReserve: Math.round(ammoReserve),
      pendingHealthRegen: Number(pendingHealthRegen.toFixed(3)),
    },
    pickups: {
      mana: manaSummary,
      shield: shieldSummary,
      health: healthSummary,
    },
    timing: {
      nowMs: Date.now(),
    },
  };
  return JSON.stringify(payload);
};

window.render_game_to_text = renderGameToText;

const shouldRenderLobbyPreview = () => {
  return !state.joinedRoom
    && lobbySection
    && !lobbySection.classList.contains('hidden');
};

const shouldRenderVersusPreviews = () => {
  return isInVersusWaitingLobby()
    && versusLobby
    && !versusLobby.classList.contains('hidden');
};

const animate = () => {
  requestAnimationFrame(animate);
  if (isMainWebglContextLost) {
    return;
  }
  try {
    const delta = Math.min(clock.getDelta(), 0.05);
    syncMobileControlsVisibility();
    updatePerfMetrics();
    applyMobileMoveKeys();
    updateMovement(delta);
    updateJump(delta);
    applyLocalMovementReconciliation(delta);
    updateHealthRegen(delta);
    updateLocalAvatar(delta);
    updateLocalHitboxDebug();
    updateThirdPersonCamera();
    updateAmmoPickups(delta);
    updateShieldPickups(delta);
    updateHealthPickups(delta);
    updateDevCollectionRequests();
    updateRain(delta);
    updateSnow(delta);
    updateKoketriaNature(delta);
    updateRemotePlayers(delta);
    updateHolyProjectiles(delta);
    updateHammerProjectiles(delta);
    updatePoisonProjectiles(delta);
    updateLunarProjectiles(delta);
    updatePumoriOrbitSpecials(delta);
    sweepProjectileCollisionDebug();
    updateShooting(delta);
    updateResourceSync();
    updateRespawnCountdown();
    updateWinnerCountdown();
    updateEffects(delta);
    updateCrosshair();
    updateDamageIndicator();
    renderSpecialStat(false);
    updateRemoteShootSound(delta);
    updateBleedEffect(delta);
    if (shouldRenderLobbyPreview() && previewState.mixer) {
      previewState.mixer.update(delta);
    }
    if (shouldRenderLobbyPreview() && previewState.model) {
      previewState.model.rotation.y += delta * 0.45;
    }
    if (shouldRenderLobbyPreview() && previewState.renderer && previewState.scene && previewState.camera) {
      resizeCharacterPreview();
      previewState.renderer.render(previewState.scene, previewState.camera);
    }
    if (shouldRenderVersusPreviews() && versusPreviewSlots.size > 0) {
      for (const slot of versusPreviewSlots.values()) {
        if (!slot.renderer || !slot.scene || !slot.camera || !slot.node?.isConnected) {
          continue;
        }
        const width = Math.max(60, slot.node.clientWidth || 92);
        const height = Math.max(60, slot.node.clientHeight || 92);
        const dom = slot.renderer.domElement;
        if (dom && (dom.width !== width || dom.height !== height)) {
          slot.renderer.setSize(width, height, false);
        }
        slot.camera.aspect = width / height;
        slot.camera.updateProjectionMatrix();
        if (slot.mixer) {
          slot.mixer.update(delta);
        }
        if (slot.model) {
          slot.model.rotation.y += delta * slot.rotateSpeed;
        }
        try {
          slot.renderer.render(slot.scene, slot.camera);
        } catch {
          disposeVersusPreviewSlot(slot.key);
        }
      }
    }
    try {
      renderer.render(scene, getRenderCamera());
    } catch {
      isMainWebglContextLost = true;
      return;
    }
    renderPerfStats.drawCalls = renderer.info.render.calls || 0;
    renderPerfStats.triangles = renderer.info.render.triangles || 0;
    renderPerfStats.geometries = renderer.info.memory.geometries || 0;
    renderPerfStats.textures = renderer.info.memory.textures || 0;
    renderPerfStats.vfx = activeTracers.length
      + activeImpacts.length
      + activeHitWaves.length
      + activePickupSparks.length
      + activeHolyProjectiles.length
      + activeHammerProjectiles.length
      + activePoisonProjectiles.length
      + activeLunarProjectiles.length
      + getPumoriOrbitVfxCount();
  } catch (error) {
    runtimeHealth.animateErrors += 1;
    runtimeHealth.lastAnimateErrorAt = performance.now();
    if ((runtimeHealth.lastLoggedAt + 1000) < runtimeHealth.lastAnimateErrorAt) {
      runtimeHealth.lastLoggedAt = runtimeHealth.lastAnimateErrorAt;
      console.error('[koketria][animate]', error);
    }
  }
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
  syncMobileControlsVisibility();
});
window.addEventListener('orientationchange', syncMobileControlsVisibility);
document.addEventListener('fullscreenchange', syncMobileFullscreenPrompt);

loadSettings();
syncOptionsUi();
applyGameSettings();
const initialStoredName = getStoredPlayerName();
if (initialStoredName && nameGateInput) {
  nameGateInput.value = initialStoredName;
  playerNameInput.value = initialStoredName;
  setProfileReady(true);
}
setInRoom(false);
applyWeather('night');
setupCharacterPreview();
bindMobileTouchControls();
syncMobileControlsVisibility();
updateRespawnOverlay();
updateHud();
renderRooms();
renderLobbyUsers();
renderLobbyChat();
renderPlayerNameBadge();
syncLobbyScreens();
if (mainPortalLink) {
  mainPortalLink.href = resolveMainPortalUrl();
}
updateLook();
animate();
connectWebSocket();
bootLobbyLoader();
