import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const app = document.querySelector('#app');
app.innerHTML = `
  <aside class="panel">
    <h1>Map Editor Base</h1>
    <p>Terreno plano con limites y pincel para subir/bajar altura.</p>

    <div class="field">
      <label for="modeSelect">Modo de pincel</label>
      <select id="modeSelect">
        <option value="raise">Subir terreno</option>
        <option value="lower">Bajar terreno</option>
      </select>
    </div>

    <div class="field">
      <label for="radiusRange">Radio <span id="radiusValue" class="value"></span></label>
      <input id="radiusRange" type="range" min="1" max="20" step="0.5" value="5" />
    </div>

    <div class="field">
      <label for="strengthRange">Fuerza <span id="strengthValue" class="value"></span></label>
      <input id="strengthRange" type="range" min="0.1" max="4" step="0.1" value="1.2" />
    </div>

    <div class="field">
      <label for="fovRange">FOV <span id="fovValue" class="value"></span></label>
      <input id="fovRange" type="range" min="60" max="100" step="1" value="75" />
    </div>

    <div class="field actions">
      <button id="undoBtn" type="button">Deshacer</button>
      <button id="redoBtn" type="button">Rehacer</button>
    </div>

    <div class="field actions">
      <button id="flattenBtn" type="button">Plano base</button>
      <button id="exportBtn" type="button">Exportar alturas</button>
    </div>
    <div class="field actions">
      <button id="testModeBtn" type="button">Probar mapa</button>
      <button id="resetPlayerBtn" type="button">Reset personaje</button>
    </div>
    <p id="testModeInfo" class="value">Editor activo</p>

    <div class="field">
      <label for="exportOut">Datos (JSON)</label>
      <textarea id="exportOut" readonly></textarea>
    </div>
  </aside>
  <section class="viewport">
    <div class="badge">Click + arrastrar: editar | Shift: modo inverso | Mouse: orbitar/zoom</div>
    <div id="canvasWrap"></div>
  </section>
`;

const modeSelect = document.querySelector('#modeSelect');
const radiusRange = document.querySelector('#radiusRange');
const strengthRange = document.querySelector('#strengthRange');
const fovRange = document.querySelector('#fovRange');
const radiusValue = document.querySelector('#radiusValue');
const strengthValue = document.querySelector('#strengthValue');
const fovValue = document.querySelector('#fovValue');
const undoBtn = document.querySelector('#undoBtn');
const redoBtn = document.querySelector('#redoBtn');
const flattenBtn = document.querySelector('#flattenBtn');
const exportBtn = document.querySelector('#exportBtn');
const testModeBtn = document.querySelector('#testModeBtn');
const resetPlayerBtn = document.querySelector('#resetPlayerBtn');
const testModeInfo = document.querySelector('#testModeInfo');
const exportOut = document.querySelector('#exportOut');
const canvasWrap = document.querySelector('#canvasWrap');

const terrainSize = 240;
const terrainSegments = 120;
const brushHeightFactor = 0.2;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050e08);

const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 900);
camera.position.set(0, 120, 145);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
canvasWrap.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 0, 0);
controls.maxPolarAngle = Math.PI * 0.48;
controls.minDistance = 20;
controls.maxDistance = 420;

scene.add(new THREE.AmbientLight(0xb5ffc8, 0.45));
const dir = new THREE.DirectionalLight(0xffffff, 0.9);
dir.position.set(60, 110, 40);
scene.add(dir);

const terrainGeometry = new THREE.PlaneGeometry(terrainSize, terrainSize, terrainSegments, terrainSegments);
terrainGeometry.rotateX(-Math.PI / 2);
const terrainMaterial = new THREE.MeshStandardMaterial({
  color: 0x1a5133,
  roughness: 0.95,
  metalness: 0.03,
  flatShading: false,
});
const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
terrain.receiveShadow = false;
scene.add(terrain);

const terrainWire = new THREE.LineSegments(
  new THREE.WireframeGeometry(terrainGeometry),
  new THREE.LineBasicMaterial({ color: 0x76ff9b, transparent: true, opacity: 0.18 }),
);
scene.add(terrainWire);

const boundaryY = 0.4;
const half = terrainSize * 0.5;
const boundaryPoints = [
  new THREE.Vector3(-half, boundaryY, -half),
  new THREE.Vector3(half, boundaryY, -half),
  new THREE.Vector3(half, boundaryY, half),
  new THREE.Vector3(-half, boundaryY, half),
  new THREE.Vector3(-half, boundaryY, -half),
];
const boundary = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints(boundaryPoints),
  new THREE.LineBasicMaterial({ color: 0x9effb8 }),
);
scene.add(boundary);

const brushHelper = new THREE.Mesh(
  new THREE.RingGeometry(0.98, 1, 36),
  new THREE.MeshBasicMaterial({
    color: 0xc6ffd3,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
    toneMapped: false,
  }),
);
brushHelper.rotation.x = -Math.PI / 2;
brushHelper.visible = false;
scene.add(brushHelper);

const raycaster = new THREE.Raycaster();
const terrainHeightRaycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const hitPoint = new THREE.Vector3();
let isPainting = false;
let strokeBeforeHeights = null;
let strokeChanged = false;
let isTestMode = false;
const inputKeys = {
  KeyW: false,
  KeyA: false,
  KeyS: false,
  KeyD: false,
};
const tmpHeightOrigin = new THREE.Vector3();
const downDirection = new THREE.Vector3(0, -1, 0);
const tmpFollowPos = new THREE.Vector3();
const tmpMoveDir = new THREE.Vector3();
const playerMoveSpeed = 15;
const playerHeightOffset = 1.7;
const testCameraDistance = 9.5;
const testCameraHeight = 4.5;
const testPlayer = new THREE.Group();
testPlayer.visible = false;
const playerBody = new THREE.Mesh(
  new THREE.CapsuleGeometry(0.42, 1.0, 4, 8),
  new THREE.MeshStandardMaterial({ color: 0x8de7ab, roughness: 0.55, metalness: 0.05 }),
);
const playerHead = new THREE.Mesh(
  new THREE.SphereGeometry(0.26, 16, 12),
  new THREE.MeshStandardMaterial({ color: 0xd6ffe2, roughness: 0.5, metalness: 0.02 }),
);
playerBody.position.set(0, 0.5, 0);
playerHead.position.set(0, 1.35, 0);
testPlayer.add(playerBody);
testPlayer.add(playerHead);
scene.add(testPlayer);

const historyUndo = [];
const historyRedo = [];
const maxHistoryEntries = 80;

const captureHeights = () => {
  const position = terrainGeometry.attributes.position;
  const heights = new Float32Array(position.count);
  for (let i = 0; i < position.count; i += 1) {
    heights[i] = position.getY(i);
  }
  return heights;
};

const applyHeights = (heights) => {
  if (!(heights instanceof Float32Array)) {
    return;
  }
  const position = terrainGeometry.attributes.position;
  const count = Math.min(position.count, heights.length);
  for (let i = 0; i < count; i += 1) {
    position.setY(i, heights[i]);
  }
  position.needsUpdate = true;
  terrainGeometry.computeVertexNormals();
  terrainGeometry.attributes.normal.needsUpdate = true;
};

const updateHistoryButtons = () => {
  undoBtn.disabled = historyUndo.length <= 0;
  redoBtn.disabled = historyRedo.length <= 0;
};

const pushHistoryEntry = (before, after) => {
  if (!(before instanceof Float32Array) || !(after instanceof Float32Array)) {
    return;
  }
  historyUndo.push({
    before,
    after,
  });
  if (historyUndo.length > maxHistoryEntries) {
    historyUndo.shift();
  }
  historyRedo.length = 0;
  updateHistoryButtons();
};

const updateLabels = () => {
  radiusValue.textContent = Number(radiusRange.value).toFixed(1);
  strengthValue.textContent = Number(strengthRange.value).toFixed(1);
  fovValue.textContent = String(Math.round(Number(fovRange.value)));
  brushHelper.scale.setScalar(Number(radiusRange.value));
};

const getTerrainHeightAt = (x, z) => {
  tmpHeightOrigin.set(x, 300, z);
  terrainHeightRaycaster.set(tmpHeightOrigin, downDirection);
  terrainHeightRaycaster.far = 700;
  const hits = terrainHeightRaycaster.intersectObject(terrain, false);
  if (hits.length <= 0) {
    return 0;
  }
  return Number(hits[0].point.y) || 0;
};

const clampInsideBounds = (x, z, margin = 1.4) => {
  return {
    x: Math.max(-half + margin, Math.min(half - margin, x)),
    z: Math.max(-half + margin, Math.min(half - margin, z)),
  };
};

const updateTestModeUi = () => {
  const testing = isTestMode;
  testModeBtn.textContent = testing ? 'Volver al editor' : 'Probar mapa';
  testModeInfo.textContent = testing
    ? 'Test activo: WASD para mover personaje'
    : 'Editor activo';
  modeSelect.disabled = testing;
  radiusRange.disabled = testing;
  strengthRange.disabled = testing;
  undoBtn.disabled = testing || historyUndo.length <= 0;
  redoBtn.disabled = testing || historyRedo.length <= 0;
  flattenBtn.disabled = testing;
  exportBtn.disabled = testing;
  controls.enabled = !testing;
  brushHelper.visible = !testing && brushHelper.visible;
  testPlayer.visible = testing;
};

const resetTestPlayer = () => {
  const startX = 0;
  const startZ = 0;
  const h = getTerrainHeightAt(startX, startZ);
  testPlayer.position.set(startX, h + playerHeightOffset, startZ);
  testPlayer.rotation.set(0, 0, 0);
};

const setTestMode = (enabled) => {
  isTestMode = Boolean(enabled);
  if (isTestMode) {
    isPainting = false;
    strokeBeforeHeights = null;
    strokeChanged = false;
    resetTestPlayer();
  }
  updateTestModeUi();
};

const applyFov = (fov, keepFraming = true) => {
  const safeFov = Math.max(60, Math.min(100, Number(fov) || 75));
  camera.fov = safeFov;
  camera.updateProjectionMatrix();
  if (keepFraming) {
    const halfW = terrainSize * 0.5;
    const halfH = terrainSize * 0.5;
    const fovRad = THREE.MathUtils.degToRad(camera.fov);
    const minDistByHeight = halfH / Math.tan(fovRad * 0.5);
    const minDistByWidth = halfW / (Math.tan(fovRad * 0.5) * Math.max(0.2, camera.aspect));
    const fitDistance = Math.max(minDistByHeight, minDistByWidth) * 1.03;
    const viewDir = camera.position.clone().sub(controls.target).normalize();
    camera.position.copy(controls.target.clone().addScaledVector(viewDir, fitDistance));
    if (camera.position.y < 34) {
      camera.position.y = 34;
    }
  }
};

const loadStoredGameFov = () => {
  try {
    const raw = localStorage.getItem('koketria_settings_v1');
    if (!raw) return 75;
    const parsed = JSON.parse(raw);
    const fov = Number(parsed?.fov);
    if (!Number.isFinite(fov)) return 75;
    return Math.max(60, Math.min(100, fov));
  } catch {
    return 75;
  }
};

const resize = () => {
  const w = Math.max(1, canvasWrap.clientWidth);
  const h = Math.max(1, canvasWrap.clientHeight);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h, false);
  applyFov(camera.fov, true);
};

const getPointerHit = (event) => {
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObject(terrain, false);
  if (hits.length <= 0) return null;
  return hits[0].point;
};

const applyBrush = (point, invert = false) => {
  const radius = Number(radiusRange.value);
  const strength = Number(strengthRange.value) * brushHeightFactor;
  const mode = String(modeSelect.value || 'raise');
  const direction = (mode === 'lower') ? -1 : 1;
  const sign = invert ? -direction : direction;

  const position = terrainGeometry.attributes.position;
  let changed = false;
  for (let i = 0; i < position.count; i += 1) {
    const vx = position.getX(i);
    const vz = position.getZ(i);
    const dx = vx - point.x;
    const dz = vz - point.z;
    const dist = Math.sqrt((dx * dx) + (dz * dz));
    if (dist > radius) continue;
    const falloff = 1 - (dist / radius);
    const delta = strength * falloff * sign;
    if (Math.abs(delta) <= 1e-6) continue;
    position.setY(i, position.getY(i) + delta);
    changed = true;
  }
  if (!changed) return false;
  position.needsUpdate = true;
  terrainGeometry.computeVertexNormals();
  terrainGeometry.attributes.normal.needsUpdate = true;
  return true;
};

const flattenTerrain = () => {
  const before = captureHeights();
  const position = terrainGeometry.attributes.position;
  for (let i = 0; i < position.count; i += 1) {
    position.setY(i, 0);
  }
  position.needsUpdate = true;
  terrainGeometry.computeVertexNormals();
  terrainGeometry.attributes.normal.needsUpdate = true;
  const after = captureHeights();
  pushHistoryEntry(before, after);
};

const exportTerrainHeights = () => {
  const position = terrainGeometry.attributes.position;
  const heights = [];
  for (let i = 0; i < position.count; i += 1) {
    heights.push(Number(position.getY(i).toFixed(3)));
  }
  const payload = {
    size: terrainSize,
    segments: terrainSegments,
    heights,
  };
  exportOut.value = JSON.stringify(payload, null, 2);
};

renderer.domElement.addEventListener('pointerdown', (event) => {
  if (isTestMode) return;
  if (event.button !== 0) return;
  const p = getPointerHit(event);
  if (!p) return;
  isPainting = true;
  strokeBeforeHeights = captureHeights();
  strokeChanged = false;
  controls.enabled = false;
  hitPoint.copy(p);
  strokeChanged = applyBrush(hitPoint, event.shiftKey) || strokeChanged;
});

window.addEventListener('pointerup', () => {
  if (isTestMode) return;
  if (!isPainting) return;
  isPainting = false;
  controls.enabled = true;
  if (strokeChanged && strokeBeforeHeights) {
    const after = captureHeights();
    pushHistoryEntry(strokeBeforeHeights, after);
  }
  strokeBeforeHeights = null;
  strokeChanged = false;
});

renderer.domElement.addEventListener('pointermove', (event) => {
  if (isTestMode) {
    brushHelper.visible = false;
    return;
  }
  const p = getPointerHit(event);
  if (!p) {
    brushHelper.visible = false;
    return;
  }
  hitPoint.copy(p);
  brushHelper.visible = true;
  brushHelper.position.set(hitPoint.x, hitPoint.y + 0.04, hitPoint.z);
  if (isPainting) {
    strokeChanged = applyBrush(hitPoint, event.shiftKey) || strokeChanged;
  }
});

window.addEventListener('keydown', (event) => {
  if (!(event.code in inputKeys)) {
    return;
  }
  inputKeys[event.code] = true;
  if (isTestMode) {
    event.preventDefault();
  }
});

window.addEventListener('keyup', (event) => {
  if (!(event.code in inputKeys)) {
    return;
  }
  inputKeys[event.code] = false;
});

undoBtn.addEventListener('click', () => {
  const entry = historyUndo.pop();
  if (!entry) return;
  applyHeights(entry.before);
  historyRedo.push(entry);
  updateHistoryButtons();
});

redoBtn.addEventListener('click', () => {
  const entry = historyRedo.pop();
  if (!entry) return;
  applyHeights(entry.after);
  historyUndo.push(entry);
  updateHistoryButtons();
});

flattenBtn.addEventListener('click', flattenTerrain);
exportBtn.addEventListener('click', exportTerrainHeights);
testModeBtn.addEventListener('click', () => {
  setTestMode(!isTestMode);
});
resetPlayerBtn.addEventListener('click', () => {
  resetTestPlayer();
});
radiusRange.addEventListener('input', updateLabels);
strengthRange.addEventListener('input', updateLabels);
fovRange.addEventListener('input', () => {
  updateLabels();
  applyFov(Number(fovRange.value), true);
});
window.addEventListener('resize', resize);

const initialFov = loadStoredGameFov();
fovRange.value = String(initialFov);
updateLabels();
updateHistoryButtons();
applyFov(initialFov, true);
resize();
updateTestModeUi();

const clock = new THREE.Clock();
const tick = () => {
  requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.05);
  if (isTestMode) {
    tmpMoveDir.set(0, 0, 0);
    if (inputKeys.KeyW) tmpMoveDir.z -= 1;
    if (inputKeys.KeyS) tmpMoveDir.z += 1;
    if (inputKeys.KeyA) tmpMoveDir.x -= 1;
    if (inputKeys.KeyD) tmpMoveDir.x += 1;
    if (tmpMoveDir.lengthSq() > 0.0001) {
      tmpMoveDir.normalize();
      const nextX = testPlayer.position.x + (tmpMoveDir.x * playerMoveSpeed * dt);
      const nextZ = testPlayer.position.z + (tmpMoveDir.z * playerMoveSpeed * dt);
      const clamped = clampInsideBounds(nextX, nextZ, 1.8);
      const nextY = getTerrainHeightAt(clamped.x, clamped.z) + playerHeightOffset;
      testPlayer.position.set(clamped.x, nextY, clamped.z);
      testPlayer.rotation.y = Math.atan2(tmpMoveDir.x, tmpMoveDir.z);
    } else {
      const stayY = getTerrainHeightAt(testPlayer.position.x, testPlayer.position.z) + playerHeightOffset;
      testPlayer.position.y = stayY;
    }
    const forward = new THREE.Vector3(
      Math.sin(testPlayer.rotation.y),
      0,
      Math.cos(testPlayer.rotation.y),
    );
    tmpFollowPos.copy(testPlayer.position)
      .addScaledVector(forward, -testCameraDistance)
      .add(new THREE.Vector3(0, testCameraHeight, 0));
    camera.position.lerp(tmpFollowPos, 0.12);
    controls.target.lerp(testPlayer.position, 0.18);
    camera.lookAt(controls.target);
  } else {
    controls.update();
  }
  renderer.render(scene, camera);
};
tick();
