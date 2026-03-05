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

    <div class="field actions">
      <button id="undoBtn" type="button">Deshacer</button>
      <button id="redoBtn" type="button">Rehacer</button>
    </div>

    <div class="field actions">
      <button id="flattenBtn" type="button">Plano base</button>
      <button id="exportBtn" type="button">Exportar alturas</button>
    </div>

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
const radiusValue = document.querySelector('#radiusValue');
const strengthValue = document.querySelector('#strengthValue');
const undoBtn = document.querySelector('#undoBtn');
const redoBtn = document.querySelector('#redoBtn');
const flattenBtn = document.querySelector('#flattenBtn');
const exportBtn = document.querySelector('#exportBtn');
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
const mouse = new THREE.Vector2();
const hitPoint = new THREE.Vector3();
let isPainting = false;
let strokeBeforeHeights = null;
let strokeChanged = false;

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
  brushHelper.scale.setScalar(Number(radiusRange.value));
};

const resize = () => {
  const w = Math.max(1, canvasWrap.clientWidth);
  const h = Math.max(1, canvasWrap.clientHeight);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h, false);
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
radiusRange.addEventListener('input', updateLabels);
strengthRange.addEventListener('input', updateLabels);
window.addEventListener('resize', resize);

updateLabels();
updateHistoryButtons();
resize();

const clock = new THREE.Clock();
const tick = () => {
  requestAnimationFrame(tick);
  clock.getDelta();
  controls.update();
  renderer.render(scene, camera);
};
tick();
