import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';

const app = document.querySelector('#app');

if (!import.meta.env.DEV) {
  app.innerHTML = `
    <div style="padding:24px; color:#d7ffd7; font-family:Consolas, monospace;">
      <h1 style="margin:0 0 8px;">Config no disponible</h1>
      <p style="margin:0; opacity:.85;">Esta herramienta solo se habilita en entorno dev.</p>
    </div>
  `;
  throw new Error('Config tool only available in dev');
}

app.innerHTML = `
  <aside class="panel">
    <h1>Koketria Collision Config</h1>
    <p>Visualiza el modelo y ajusta colision cuerpo(capsula) + cabeza(esfera).</p>
    <div class="field">
      <label for="characterSelect">Personaje</label>
      <select id="characterSelect"></select>
    </div>
    <div class="field">
      <label for="animSelect">Animacion</label>
      <select id="animSelect">
        <option value="idle">idle</option>
        <option value="running">running</option>
        <option value="dead">dead</option>
        <option value="attack">attack</option>
        <option value="jump">jump</option>
        <option value="funny">funny</option>
      </select>
    </div>

    <div class="field">
      <label for="headRadius">Head radius <span class="value" id="headRadiusVal"></span></label>
      <input id="headRadius" type="range" min="0.1" max="0.8" step="0.01" value="0.38" />
    </div>
    <div class="field">
      <label for="headOffsetY">Head offset Y <span class="value" id="headOffsetYVal"></span></label>
      <input id="headOffsetY" type="range" min="-0.3" max="0.6" step="0.01" value="0.18" />
    </div>
    <div class="field">
      <label for="capsuleRadius">Capsule radius <span class="value" id="capsuleRadiusVal"></span></label>
      <input id="capsuleRadius" type="range" min="0.2" max="1.2" step="0.01" value="0.42" />
    </div>
    <div class="field">
      <label for="capsuleTopY">Capsule top Y <span class="value" id="capsuleTopYVal"></span></label>
      <input id="capsuleTopY" type="range" min="-0.8" max="0.8" step="0.01" value="0.05" />
    </div>
    <div class="field">
      <label for="capsuleBottomY">Capsule bottom Y <span class="value" id="capsuleBottomYVal"></span></label>
      <input id="capsuleBottomY" type="range" min="-2.2" max="0.2" step="0.01" value="-1.55" />
    </div>

    <div class="field actions">
      <button id="copyBtn" type="button">Copiar JSON</button>
      <button id="resetBtn" type="button">Reset</button>
    </div>
    <div class="field">
      <label for="jsonOut">Valores</label>
      <textarea id="jsonOut" readonly></textarea>
    </div>
    <p id="status" class="value">Cargando...</p>
  </aside>
  <section class="viewport">
    <div class="badge">Mouse: orbitar/zoom</div>
    <div id="canvasWrap"></div>
  </section>
`;

const characterSelect = document.querySelector('#characterSelect');
const animSelect = document.querySelector('#animSelect');
const statusEl = document.querySelector('#status');
const jsonOut = document.querySelector('#jsonOut');
const copyBtn = document.querySelector('#copyBtn');
const resetBtn = document.querySelector('#resetBtn');
const canvasWrap = document.querySelector('#canvasWrap');

const sliders = {
  headRadius: document.querySelector('#headRadius'),
  headOffsetY: document.querySelector('#headOffsetY'),
  capsuleRadius: document.querySelector('#capsuleRadius'),
  capsuleTopY: document.querySelector('#capsuleTopY'),
  capsuleBottomY: document.querySelector('#capsuleBottomY'),
};
const labels = {
  headRadius: document.querySelector('#headRadiusVal'),
  headOffsetY: document.querySelector('#headOffsetYVal'),
  capsuleRadius: document.querySelector('#capsuleRadiusVal'),
  capsuleTopY: document.querySelector('#capsuleTopYVal'),
  capsuleBottomY: document.querySelector('#capsuleBottomYVal'),
};

const defaults = {
  headRadius: 0.38,
  headOffsetY: 0.18,
  capsuleRadius: 0.42,
  capsuleTopY: 0.05,
  capsuleBottomY: -1.55,
};

const gltfLoader = new GLTFLoader();
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x06110a);
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
camera.position.set(0, 1.7, 4.2);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
canvasWrap.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 1.0, 0);

scene.add(new THREE.HemisphereLight(0xc6ffd8, 0x132014, 0.95));
const key = new THREE.DirectionalLight(0xffffff, 0.9);
key.position.set(3, 6, 4);
scene.add(key);
scene.add(new THREE.GridHelper(14, 28, 0x45aa63, 0x1e4f2b));

const modelRoot = new THREE.Group();
scene.add(modelRoot);
const collisionRoot = new THREE.Group();
scene.add(collisionRoot);

const state = {
  character: '',
  characters: [],
  sceneModel: null,
  mixer: null,
  animationSet: {},
};

const getCharacterAssetKey = (characterId) => {
  const raw = String(characterId || '').trim();
  if (!raw) return '';
  const normalized = raw
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  if (normalized === 'pezunalunar') return 'pezunalunar';
  return raw;
};

const resolveApiBase = () => {
  const envBase = String(import.meta.env.VITE_API_BASE || '').trim();
  if (envBase) return envBase.replace(/\/$/, '');
  const host = String(window.location.hostname || '').toLowerCase();
  if (host === 'localhost' || host === '127.0.0.1') return 'http://localhost:3001';
  return `${window.location.protocol}//${window.location.host}`;
};

const getCharacterActionUrl = (characterId, actionFile) => {
  return `/characters/${encodeURIComponent(getCharacterAssetKey(characterId))}/${encodeURIComponent(actionFile)}`;
};

const loadModel = (url) => {
  return new Promise((resolve, reject) => {
    gltfLoader.load(url, resolve, undefined, reject);
  });
};

const loadModelByCandidates = async (candidates) => {
  for (let i = 0; i < candidates.length; i += 1) {
    const url = candidates[i];
    try {
      const gltf = await loadModel(url);
      if (gltf?.scene) return gltf;
    } catch {
      // continue
    }
  }
  return null;
};

const extractClip = (gltf, clipName) => {
  if (!gltf?.animations || gltf.animations.length === 0) return null;
  const clip = gltf.animations[0].clone();
  clip.name = clipName;
  return clip;
};

const updateSliderLabels = () => {
  Object.keys(sliders).forEach((k) => {
    labels[k].textContent = Number(sliders[k].value).toFixed(2);
  });
};

const getConfig = () => {
  return {
    headshotRadius: Number(sliders.headRadius.value),
    headCenterOffsetY: Number(sliders.headOffsetY.value),
    bodyCapsuleRadius: Number(sliders.capsuleRadius.value),
    bodyCapsuleTopOffsetY: Number(sliders.capsuleTopY.value),
    bodyCapsuleBottomOffsetY: Number(sliders.capsuleBottomY.value),
  };
};

const updateJsonOutput = () => {
  jsonOut.value = JSON.stringify(getConfig(), null, 2);
};

const clearCollisionPreview = () => {
  while (collisionRoot.children.length > 0) {
    const node = collisionRoot.children.pop();
    if (node.geometry) node.geometry.dispose();
    if (node.material) node.material.dispose();
  }
};

const rebuildCollisionPreview = () => {
  clearCollisionPreview();
  const cfg = getConfig();

  const head = new THREE.Mesh(
    new THREE.SphereGeometry(cfg.headshotRadius, 16, 12),
    new THREE.MeshBasicMaterial({ color: 0xff5d5d, wireframe: true }),
  );
  head.position.set(0, cfg.headCenterOffsetY, 0);

  const segmentLen = Math.max(0.01, (cfg.bodyCapsuleTopOffsetY - cfg.bodyCapsuleBottomOffsetY) - (cfg.bodyCapsuleRadius * 2));
  const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(cfg.bodyCapsuleRadius, segmentLen, 8, 14),
    new THREE.MeshBasicMaterial({ color: 0x5de6ff, wireframe: true }),
  );
  body.position.set(0, (cfg.bodyCapsuleTopOffsetY + cfg.bodyCapsuleBottomOffsetY) * 0.5, 0);

  collisionRoot.add(head);
  collisionRoot.add(body);
};

const clearModel = () => {
  if (state.sceneModel) {
    modelRoot.remove(state.sceneModel);
    state.sceneModel = null;
  }
  state.mixer = null;
  state.animationSet = {};
};

const playSelectedAnimation = () => {
  if (!state.mixer) return;
  const keyName = String(animSelect.value || 'idle');
  const action = state.animationSet[keyName] || state.animationSet.running || state.animationSet.idle || null;
  if (!action) return;
  Object.values(state.animationSet).forEach((a) => {
    if (a && a !== action) a.stop();
  });
  action.reset();
  action.setLoop(THREE.LoopRepeat, Infinity);
  action.clampWhenFinished = false;
  action.play();
};

const loadCharacter = async (characterId) => {
  statusEl.textContent = `Cargando ${characterId}...`;
  clearModel();
  const actions = ['idle', 'running', 'dead', 'attack', 'jump', 'funny'];
  const loaded = [];

  for (let i = 0; i < actions.length; i += 1) {
    const action = actions[i];
    const candidates = [
      getCharacterActionUrl(characterId, action),
      getCharacterActionUrl(characterId, `${action}.glb`),
      getCharacterActionUrl(characterId, `${action}.gltf`),
    ];
    const gltf = await loadModelByCandidates(candidates);
    if (gltf?.scene) loaded.push({ action, gltf });
  }

  const base = loaded.find((x) => x.action === 'idle')
    || loaded.find((x) => x.action === 'running')
    || loaded[0];

  if (!base?.gltf?.scene) {
    statusEl.textContent = 'No se pudo cargar el modelo.';
    statusEl.classList.add('error');
    return;
  }

  const clone = cloneSkinned(base.gltf.scene);
  const box = new THREE.Box3().setFromObject(clone);
  const center = box.getCenter(new THREE.Vector3());
  clone.position.set(-center.x, -box.min.y, -center.z);
  modelRoot.add(clone);
  state.sceneModel = clone;

  const size = box.getSize(new THREE.Vector3());
  camera.position.set(0, Math.max(1.2, size.y * 0.7), Math.max(2.8, size.y * 1.1));
  controls.target.set(0, Math.max(0.8, size.y * 0.45), 0);
  controls.update();

  const mixer = new THREE.AnimationMixer(clone);
  state.mixer = mixer;
  const set = {};
  loaded.forEach(({ action, gltf }) => {
    const clip = extractClip(gltf, action);
    if (clip) set[action] = mixer.clipAction(clip);
  });
  state.animationSet = set;
  playSelectedAnimation();

  statusEl.classList.remove('error');
  statusEl.textContent = `OK: ${characterId}`;
};

const loadCharactersCatalog = async () => {
  const apiBase = resolveApiBase();
  try {
    const res = await fetch(`${apiBase}/characters`);
    const payload = await res.json();
    if (payload?.ok && Array.isArray(payload.data) && payload.data.length > 0) {
      return payload.data;
    }
  } catch {
    // fallback below
  }
  return ['silentman', 'pumori', 'neoorphen', 'pezunalunar'];
};

const resize = () => {
  const w = Math.max(1, canvasWrap.clientWidth);
  const h = Math.max(1, canvasWrap.clientHeight);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h, false);
};

copyBtn.addEventListener('click', async () => {
  const text = jsonOut.value;
  try {
    await navigator.clipboard.writeText(text);
    statusEl.textContent = 'JSON copiado.';
  } catch {
    statusEl.textContent = 'No se pudo copiar.';
    statusEl.classList.add('error');
  }
});

resetBtn.addEventListener('click', () => {
  Object.keys(defaults).forEach((k) => {
    sliders[k].value = String(defaults[k]);
  });
  updateSliderLabels();
  updateJsonOutput();
  rebuildCollisionPreview();
});

Object.values(sliders).forEach((el) => {
  el.addEventListener('input', () => {
    updateSliderLabels();
    updateJsonOutput();
    rebuildCollisionPreview();
  });
});

characterSelect.addEventListener('change', async () => {
  state.character = String(characterSelect.value || '');
  if (!state.character) return;
  await loadCharacter(state.character);
});

animSelect.addEventListener('change', () => {
  playSelectedAnimation();
});

window.addEventListener('resize', resize);

const init = async () => {
  state.characters = await loadCharactersCatalog();
  characterSelect.innerHTML = '';
  state.characters.forEach((name) => {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;
    characterSelect.appendChild(opt);
  });
  state.character = state.characters[0] || 'silentman';
  characterSelect.value = state.character;

  updateSliderLabels();
  updateJsonOutput();
  rebuildCollisionPreview();
  await loadCharacter(state.character);
  resize();

  const clock = new THREE.Clock();
  const tick = () => {
    requestAnimationFrame(tick);
    const dt = Math.min(clock.getDelta(), 0.05);
    if (state.mixer) state.mixer.update(dt);
    controls.update();
    renderer.render(scene, camera);
  };
  tick();
};

init();
