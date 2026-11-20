/**
 * Krishna Infotech — GTA VI Interactive 3D Battlestation Room Experience
 * Integrated with Real Live Webpage in 3D Monitor + Pixel-Perfect Screen Fit Camera Zoom
 *
 * Models:
 * - ROOM:   models/room/glb.gltf (Complete high-poly gaming room architecture & furniture)
 * - CHAIR:  models/chair/source/Office Chair37.fbx (Ergonomic gaming chair)
 * - SETUP:  models/pc/source/gaming desktop pc2.fbx (Gaming desktop, AORUS motherboard, GPU, RAM, mouse, keyboard & dual screens)
 *
 * Real Webpage in 3D Monitor:
 * - Powered by Three.js CSS3DRenderer + CSS3DObject
 * - Renders the REAL live interactive website (products.html?embed=1) inside the monitor in 3D space
 * - Adapts dynamically to window aspect ratio
 * - Camera zoom calculates the exact trigonometric distance D = (H / 2) / tan(FOV / 2)
 *   so the monitor screen PERFECTLY FITS the viewport (100% corner-to-corner NDC [-1, 1])
 *   before seamlessly handing direct access to the live store!
 *
 * Live RGB & Animation:
 * - Physically orbiting movable 3D point lights inside chassis and desk
 * - Live animated RGB color shifting (Chroma Wave, Vice City Neon, Cyberpunk, Pulse) [Key: R]
 * - Continuously spinning case fans and cooler blades
 * - First-person WASD + Mouse look free-roam with mini-map radar and HUD
 */

(function() {
  'use strict';

  // Check if we are running inside the 3D monitor iframe embed
  const urlParams = new URLSearchParams(window.location.search);
  const isEmbed = urlParams.has('embed') || (window.self !== window.top);
  if (isEmbed) {
    // Inside the 3D monitor iframe: render the real website, do not run the 3D room
    return;
  }

  let scene, cssScene, camera, renderer, cssRenderer;
  let roomContainer, canvasEl, monitorCssObject, monitorIframeEl;
  let isRunning = false;
  let isCutscene = false;
  let animationFrameId = null;

  // Model References
  let fallbackWallsGroup = null;
  let fallbackDeskGroup = null;
  let fallbackChair = null;
  let loadedRoomModel = null;
  let loadedChairModel = null;
  let loadedPcSetupModel = null;

  // Screen dimensions in 3D world space
  const SCREEN_HEIGHT_3D = 0.52; // meters
  const SCREEN_CENTER_3D = { x: 0, y: 1.25, z: -0.248 };

  // Animated elements
  const caseFans = [];
  const rgbMeshParts = [];
  let liveRgbLight1 = null;
  let liveRgbLight2 = null;
  let liveRgbLight3 = null;

  // Live RGB controller modes
  const rgbModes = ['chroma', 'vice_city', 'cyberpunk', 'pulse'];
  let currentRgbModeIndex = 0;
  const rgbModeLabels = {
    'chroma': 'CHROMA WAVE [R]',
    'vice_city': 'VICE CITY NEON [R]',
    'cyberpunk': 'CYBERPUNK GLOW [R]',
    'pulse': 'BREATHING PULSE [R]'
  };

  // Sound Synthesizer via Web Audio API
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.04);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'whoosh') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.6);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.6);
      } else if (type === 'boot') {
        [220, 330, 440, 660, 880].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);
          gain.gain.setValueAtTime(0.08, now + idx * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.06);
          osc.stop(now + 1.2);
        });
      }
    } catch(e) {}
  }

  // Player state
  const player = {
    pos: { x: 0, y: 1.7, z: 3.8 },
    rot: { pitch: -0.05, yaw: 0 },
    vel: { x: 0, z: 0 },
    speed: 3.8,
    sprintSpeed: 6.2,
    keys: { forward: false, backward: false, left: false, right: false, sprint: false },
    isSitting: false,
    canSit: false
  };

  // Radar canvas
  let radarCanvas, radarCtx;

  // HTML HUD Template
  const hudHtml = `
    <div class="gta-letterbox-top"></div>
    <div class="gta-letterbox-bottom"></div>
    <div class="gta-vignette"></div>
    <div class="gta-crosshair" id="gta-crosshair"></div>

    <div class="gta-hud" id="gta-hud">
      <!-- Top Right: Time, Cash, RGB Mode & Skip -->
      <div class="gta-top-hud">
        <div class="gta-time-row">
          <span class="gta-badge-state">LEONIDA</span>
          <span class="gta-clock" id="gta-clock">21:57</span>
        </div>
        <div class="gta-cash">$50,000,000</div>
        <div class="gta-zone-title">KRISHNA INFOTECH BATTLESTATION</div>
        <button type="button" class="gta-skip-btn" id="gta-skip-btn" title="Skip 3D Intro & Enter Store">
          <span>ENTER STORE [ESC]</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      <!-- Live RGB Controller Badge -->
      <div class="gta-rgb-badge" id="gta-rgb-toggle" title="Click or press [R] to cycle live RGB lighting mode">
        <span class="gta-rgb-dot"></span>
        <span id="gta-rgb-text">LIVE RGB: CHROMA WAVE [R]</span>
      </div>

      <!-- Asset Stream Loader Progress Bar -->
      <div class="gta-asset-loader" id="gta-asset-loader">
        <div class="gta-asset-bar"><div class="gta-asset-fill" id="gta-asset-fill" style="width: 25%;"></div></div>
        <span id="gta-asset-label">STREAMING 3D MODELS • REAL STORE LINKED</span>
      </div>

      <!-- Top Center: Objective Banner -->
      <div class="gta-objective-card" id="gta-objective">
        <span class="gta-objective-tag">MISSION:</span>
        <span class="gta-objective-text">Approach battlestation and press [E] to sit &amp; launch real store into fullscreen.</span>
      </div>

      <!-- Interaction Prompt -->
      <div class="gta-interact-prompt" id="gta-interact-prompt">
        <div class="gta-key-pill">E</div>
        <span class="gta-interact-text">SIT AT BATTLESTATION</span>
      </div>

      <!-- Bottom Left: Radar Mini-Map -->
      <div class="gta-radar-wrapper">
        <div class="gta-radar-ring">
          <canvas class="gta-radar-canvas" id="gta-radar-canvas" width="128" height="128"></canvas>
        </div>
        <div class="gta-radar-hud-labels">
          <span class="gta-radar-city">VICE CITY / THANE</span>
          <span class="gta-radar-street">MADANE SUITE 302</span>
        </div>
      </div>

      <!-- Bottom Controls Helper -->
      <div class="gta-controls-bar">
        <span class="gta-ctrl-item"><span class="gta-kbd">W</span><span class="gta-kbd">A</span><span class="gta-kbd">S</span><span class="gta-kbd">D</span> Move</span>
        <span class="gta-ctrl-item"><span class="gta-kbd">Mouse</span> Look Around</span>
        <span class="gta-ctrl-item"><span class="gta-kbd">E</span> Sit at PC</span>
        <span class="gta-ctrl-item"><span class="gta-kbd">R</span> Live RGB</span>
        <span class="gta-ctrl-item"><span class="gta-kbd">Shift</span> Sprint</span>
        <span class="gta-ctrl-item"><span class="gta-kbd">ESC</span> Skip</span>
      </div>

      <!-- Mobile Touch Controls -->
      <div class="gta-mobile-controls">
        <button type="button" class="gta-touch-btn" id="gta-touch-fwd">▲ MOVE FWD</button>
        <button type="button" class="gta-touch-btn" id="gta-touch-rgb" style="background:#ff2a85; color:#fff;">RGB [R]</button>
        <button type="button" class="gta-touch-btn" id="gta-touch-sit" style="background:#00f2fe; color:#000;">SIT AT PC [E]</button>
      </div>
    </div>
  `;

  // Create or retrieve container
  function setupDOM() {
    let container = document.getElementById('gta-intro-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'gta-intro-container';
      container.className = 'gta-intro-container';

      const canvas = document.createElement('canvas');
      canvas.id = 'gta-canvas';
      container.appendChild(canvas);

      const hudWrap = document.createElement('div');
      hudWrap.innerHTML = hudHtml;
      while (hudWrap.firstChild) {
        container.appendChild(hudWrap.firstChild);
      }

      document.body.appendChild(container);
    }
    roomContainer = container;
    canvasEl = document.getElementById('gta-canvas');
    radarCanvas = document.getElementById('gta-radar-canvas');
    if (radarCanvas) radarCtx = radarCanvas.getContext('2d');

    // Attach Skip Button
    const skipBtn = document.getElementById('gta-skip-btn');
    if (skipBtn) skipBtn.onclick = () => window.dismissGTARoomIntro();

    // Attach Interact Prompt Click
    const promptEl = document.getElementById('gta-interact-prompt');
    if (promptEl) promptEl.onclick = () => triggerSitDownSequence();

    // Attach RGB toggle click
    const rgbBtn = document.getElementById('gta-rgb-toggle');
    if (rgbBtn) rgbBtn.onclick = () => cycleRgbMode();

    // Mobile buttons
    const fwdBtn = document.getElementById('gta-touch-fwd');
    if (fwdBtn) {
      fwdBtn.ontouchstart = (e) => { e.preventDefault(); player.keys.forward = true; };
      fwdBtn.ontouchend = (e) => { e.preventDefault(); player.keys.forward = false; };
    }
    const sitBtn = document.getElementById('gta-touch-sit');
    if (sitBtn) {
      sitBtn.onclick = (e) => { e.preventDefault(); triggerSitDownSequence(); };
    }
    const touchRgb = document.getElementById('gta-touch-rgb');
    if (touchRgb) {
      touchRgb.onclick = (e) => { e.preventDefault(); cycleRgbMode(); };
    }
  }

  // Cycle Live RGB lighting modes
  function cycleRgbMode() {
    currentRgbModeIndex = (currentRgbModeIndex + 1) % rgbModes.length;
    const mode = rgbModes[currentRgbModeIndex];
    const textEl = document.getElementById('gta-rgb-text');
    if (textEl) {
      textEl.textContent = `LIVE RGB: ${rgbModeLabels[mode]}`;
    }
    playSound('click');
  }

  // --- Real Webpage CSS3D Monitor Integration ---
  function setupRealWebpageCSS3D() {
    if (typeof THREE.CSS3DRenderer === 'undefined') return;

    cssScene = new THREE.Scene();

    cssRenderer = new THREE.CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.domElement.style.position = 'absolute';
    cssRenderer.domElement.style.top = '0';
    cssRenderer.domElement.style.left = '0';
    cssRenderer.domElement.style.width = '100%';
    cssRenderer.domElement.style.height = '100%';
    cssRenderer.domElement.style.zIndex = '2';
    cssRenderer.domElement.style.pointerEvents = 'none';

    roomContainer.appendChild(cssRenderer.domElement);

    // Create Real Webpage Iframe
    const isIndex = window.location.pathname.endsWith('index.html');
    const pageUrl = (isIndex ? 'index.html' : 'products.html') + '?embed=1';

    monitorIframeEl = document.createElement('iframe');
    monitorIframeEl.id = 'gta-real-page-frame';
    monitorIframeEl.src = pageUrl;
    monitorIframeEl.style.width = window.innerWidth + 'px';
    monitorIframeEl.style.height = window.innerHeight + 'px';
    monitorIframeEl.style.border = '2px solid rgba(0, 242, 254, 0.4)';
    monitorIframeEl.style.borderRadius = '4px';
    monitorIframeEl.style.background = '#0a0814';
    monitorIframeEl.style.boxShadow = '0 0 35px rgba(0, 242, 254, 0.35)';

    // Exact scale factor matching screen height to 3D world units
    const scale = SCREEN_HEIGHT_3D / window.innerHeight;

    monitorCssObject = new THREE.CSS3DObject(monitorIframeEl);
    monitorCssObject.scale.set(scale, scale, scale);
    monitorCssObject.position.set(SCREEN_CENTER_3D.x, SCREEN_CENTER_3D.y, SCREEN_CENTER_3D.z);
    cssScene.add(monitorCssObject);
  }

  // --- Dynamic Model Loader (Room, Chair, PC Setup) ---
  function loadCustomModels() {
    const assetFill = document.getElementById('gta-asset-fill');
    const assetLabel = document.getElementById('gta-asset-label');
    const assetLoader = document.getElementById('gta-asset-loader');

    let loadedCount = 0;
    const totalAssets = 3;

    function onAssetProgress() {
      loadedCount++;
      const pct = Math.round((loadedCount / totalAssets) * 100);
      if (assetFill) assetFill.style.width = pct + '%';
      if (assetLabel) assetLabel.textContent = `STREAMING 3D ASSETS: ${pct}% READY`;
      if (loadedCount >= totalAssets) {
        if (assetLabel) assetLabel.textContent = `ALL 3D ASSETS ONLINE • REAL STORE EMBEDDED`;
        setTimeout(() => {
          if (assetLoader) assetLoader.classList.add('fade-out');
        }, 1200);
      }
    }

    // 1. Load ROOM (GLTF)
    if (typeof THREE.GLTFLoader !== 'undefined') {
      const gltfLoader = new THREE.GLTFLoader();
      gltfLoader.load('models/room/glb.gltf', (gltf) => {
        loadedRoomModel = gltf.scene;
        loadedRoomModel.scale.setScalar(0.42);
        loadedRoomModel.position.set(0, 0, 0.4);

        loadedRoomModel.traverse(child => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            const name = (child.name || '').toLowerCase();
            if (name.includes('gaming chair') || name.includes('sit_30') || name.includes('gaming_chair')) {
              child.visible = false;
            }
          }
        });

        scene.add(loadedRoomModel);
        if (fallbackWallsGroup) fallbackWallsGroup.visible = false;
        onAssetProgress();
      }, undefined, () => onAssetProgress());
    } else {
      onAssetProgress();
    }

    // 2. Load CHAIR (FBX)
    if (typeof THREE.FBXLoader !== 'undefined') {
      const fbxLoader = new THREE.FBXLoader();
      fbxLoader.load('models/chair/source/Office Chair37.fbx', (chair) => {
        loadedChairModel = chair;
        chair.scale.setScalar(0.0028);
        chair.rotation.y = Math.PI; // Face the battlestation desk
        chair.position.set(0, 0, 0.95);

        chair.traverse(child => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              const mats = Array.isArray(child.material) ? child.material : [child.material];
              mats.forEach(m => {
                m.roughness = 0.45;
                m.metalness = 0.25;
              });
            }
          }
        });

        scene.add(chair);
        if (fallbackChair) fallbackChair.visible = false;
        onAssetProgress();
      }, undefined, () => onAssetProgress());

      // 3. Load PC SETUP & Battlestation (FBX)
      fbxLoader.load('models/pc/source/gaming desktop pc2.fbx', (pcSetup) => {
        loadedPcSetupModel = pcSetup;
        pcSetup.scale.setScalar(0.0022);
        pcSetup.rotation.y = -Math.PI / 2;
        pcSetup.position.set(0.34, 0.505, -0.25);

        pcSetup.traverse(child => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            const nameLower = (child.name || '').toLowerCase();
            const matNameLower = (child.material && child.material.name ? child.material.name : '').toLowerCase();

            // Screen frame alignment: make the screen mesh a see-through glass portal
            if (child.name === 'MY_SCREEN') {
              child.material = new THREE.MeshBasicMaterial({
                color: 0x000000,
                transparent: true,
                opacity: 0.05
              });
            }

            // Collect case fans & GPU cooler blades
            if (nameLower.includes('fan') || matNameLower.includes('fan')) {
              caseFans.push(child);
            }

            // Collect RGB elements (RAM, Motherboard, GPU, Mouse, HDD cover)
            if (nameLower.includes('rgb') || matNameLower.includes('rgb') ||
                nameLower.includes('aorusram') || matNameLower.includes('aorusram') ||
                nameLower.includes('moboaorus') || matNameLower.includes('moboaorus') ||
                nameLower.includes('souris') || matNameLower.includes('souris') ||
                nameLower.includes('gpu') || nameLower.includes('nvidia') ||
                nameLower.includes('gigabyte')) {

              const emissiveMat = new THREE.MeshStandardMaterial({
                color: 0x07050d,
                emissive: new THREE.Color(0x00f2fe),
                emissiveIntensity: 1.8,
                roughness: 0.2,
                metalness: 0.8
              });
              if (child.material && child.material.map) {
                emissiveMat.map = child.material.map;
                emissiveMat.emissiveMap = child.material.map;
              }
              child.material = emissiveMat;
              rgbMeshParts.push({ mesh: child, phaseOffset: Math.random() });
            }
          }
        });

        scene.add(pcSetup);
        if (fallbackDeskGroup) fallbackDeskGroup.visible = false;
        onAssetProgress();
      }, undefined, () => onAssetProgress());
    } else {
      onAssetProgress();
      onAssetProgress();
    }
  }

  // Build the 3D Battlestation Room in Three.js
  let isSceneBuilt = false;
  function buildScene() {
    if (isSceneBuilt) return;
    if (typeof THREE === 'undefined') return;
    isSceneBuilt = true;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06050a);
    scene.fog = new THREE.FogExp2(0x06050a, 0.045);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 100);
    camera.position.set(player.pos.x, player.pos.y, player.pos.z);

    renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // --- Atmospheric Room Lighting ---
    const ambientLight = new THREE.AmbientLight(0x181528, 0.95);
    scene.add(ambientLight);

    const windowLight = new THREE.DirectionalLight(0x7dd3fc, 1.4);
    windowLight.position.set(-5, 4, -3);
    windowLight.castShadow = true;
    windowLight.shadow.mapSize.width = 1024;
    windowLight.shadow.mapSize.height = 1024;
    scene.add(windowLight);

    // --- LIVE MOVABLE RGB POINT LIGHTS ---
    liveRgbLight1 = new THREE.PointLight(0x00f2fe, 2.4, 3.2);
    liveRgbLight1.position.set(0.95, 1.15, -0.10);
    scene.add(liveRgbLight1);

    liveRgbLight2 = new THREE.PointLight(0xff2a85, 2.2, 3.2);
    liveRgbLight2.position.set(0.82, 1.25, 0.15);
    scene.add(liveRgbLight2);

    liveRgbLight3 = new THREE.PointLight(0x7c3aed, 2.6, 4.2);
    liveRgbLight3.position.set(0, 0.80, -0.20);
    scene.add(liveRgbLight3);

    // --- Fallback Room Structure (Visible while high-poly models stream) ---
    fallbackWallsGroup = new THREE.Group();

    const floorGeo = new THREE.PlaneGeometry(14, 12);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x110f17, roughness: 0.35, metalness: 0.15 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    fallbackWallsGroup.add(floor);

    const wallMat = new THREE.MeshStandardMaterial({ color: 0x0c0a13, roughness: 0.85 });
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(14, 5.5), wallMat);
    backWall.position.set(0, 2.75, -2.2);
    backWall.receiveShadow = true;
    fallbackWallsGroup.add(backWall);

    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(12, 5.5), wallMat);
    leftWall.position.set(-6.5, 2.75, 3.5);
    leftWall.rotation.y = Math.PI / 2;
    fallbackWallsGroup.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(12, 5.5), wallMat);
    rightWall.position.set(6.5, 2.75, 3.5);
    rightWall.rotation.y = -Math.PI / 2;
    fallbackWallsGroup.add(rightWall);

    // Panoramic Window with Night Cityscape
    const cityCanvas = document.createElement('canvas');
    cityCanvas.width = 512;
    cityCanvas.height = 256;
    const cctx = cityCanvas.getContext('2d');
    const cgrad = cctx.createLinearGradient(0, 0, 0, 256);
    cgrad.addColorStop(0, '#040208');
    cgrad.addColorStop(0.6, '#110c24');
    cgrad.addColorStop(1, '#ff2a85');
    cctx.fillStyle = cgrad;
    cctx.fillRect(0, 0, 512, 256);
    cctx.fillStyle = '#05030a';
    for (let s = 0; s < 18; s++) {
      const sx = s * 30;
      const sh = 80 + Math.sin(s * 2.3) * 60;
      cctx.fillRect(sx, 256 - sh, 24, sh);
      cctx.fillStyle = (s % 2 === 0) ? '#00f2fe' : '#ffbd2e';
      for (let wy = 256 - sh + 8; wy < 250; wy += 12) {
        cctx.fillRect(sx + 5, wy, 3, 4);
        cctx.fillRect(sx + 14, wy, 3, 4);
      }
      cctx.fillStyle = '#05030a';
    }
    const cityTex = new THREE.CanvasTexture(cityCanvas);
    const cityBackdrop = new THREE.Mesh(new THREE.PlaneGeometry(4.1, 2.7), new THREE.MeshBasicMaterial({ map: cityTex }));
    cityBackdrop.position.set(-2.5, 2.6, -2.17);
    fallbackWallsGroup.add(cityBackdrop);

    // Venetian Blinds
    for (let b = 0; b < 16; b++) {
      const blind = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.04, 0.08), new THREE.MeshStandardMaterial({ color: 0x1f1b2c, roughness: 0.6 }));
      blind.position.set(-2.5, 1.4 + b * 0.16, -2.14);
      blind.rotation.x = 0.35;
      fallbackWallsGroup.add(blind);
    }
    scene.add(fallbackWallsGroup);

    // --- Fallback Desk Group (Replaced once FBX loads) ---
    fallbackDeskGroup = new THREE.Group();
    const deskTop = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 0.05, 1.0),
      new THREE.MeshStandardMaterial({ color: 0x1b1424, roughness: 0.4, metalness: 0.1 })
    );
    deskTop.position.set(0, 0.75, 0);
    fallbackDeskGroup.add(deskTop);

    // Metallic Monitor Stand
    const standMat = new THREE.MeshStandardMaterial({ color: 0x1a1628, metalness: 0.8, roughness: 0.3 });
    const standPillar = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.45, 0.08), standMat);
    standPillar.position.set(0, 0.98, -0.28);
    fallbackDeskGroup.add(standPillar);
    const standBase = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.02, 0.25), standMat);
    standBase.position.set(0, 0.78, -0.22);
    fallbackDeskGroup.add(standBase);
    scene.add(fallbackDeskGroup);

    // Fallback Chair
    fallbackChair = new THREE.Group();
    fallbackChair.position.set(0, 0, 0.95);
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.08, 0.52), new THREE.MeshStandardMaterial({ color: 0x110e1c, roughness: 0.7 }));
    seat.position.y = 0.52;
    fallbackChair.add(seat);
    const backrest = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.75, 0.08), new THREE.MeshStandardMaterial({ color: 0x151224, roughness: 0.7 }));
    backrest.position.set(0, 0.90, 0.22);
    fallbackChair.add(backrest);
    scene.add(fallbackChair);

    // --- Embed Real Live Webpage into 3D Monitor ---
    setupRealWebpageCSS3D();

    // --- Stream in User Downloaded Models ---
    loadCustomModels();

    // Window resize handler
    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize() {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (cssRenderer) {
      cssRenderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Keep real webpage iframe pixel dimensions and scale locked to user's browser window
    if (monitorIframeEl && monitorCssObject) {
      monitorIframeEl.style.width = window.innerWidth + 'px';
      monitorIframeEl.style.height = window.innerHeight + 'px';
      const scale = SCREEN_HEIGHT_3D / window.innerHeight;
      monitorCssObject.scale.set(scale, scale, scale);
    }
  }

  // --- Keyboard & Mouse Controls ---
  let isControlsSetup = false;
  let isPointerLocked = false;
  let isMouseDown = false;
  let prevMouseX = 0;
  let prevMouseY = 0;

  function setupControls() {
    if (isControlsSetup) return;
    isControlsSetup = true;

    window.addEventListener('keydown', (e) => {
      if (!isRunning) return;
      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') player.keys.forward = true;
      if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') player.keys.backward = true;
      if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') player.keys.left = true;
      if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') player.keys.right = true;
      if (e.key === 'Shift') player.keys.sprint = true;

      // Sit down trigger key
      if ((e.key === 'e' || e.key === 'E') && player.canSit && !isCutscene) {
        triggerSitDownSequence();
      }

      // Live RGB mode toggle key
      if (e.key === 'r' || e.key === 'R') {
        cycleRgbMode();
      }

      // Skip trigger
      if (e.key === 'Escape') {
        window.dismissGTARoomIntro();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') player.keys.forward = false;
      if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') player.keys.backward = false;
      if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') player.keys.left = false;
      if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') player.keys.right = false;
      if (e.key === 'Shift') player.keys.sprint = false;
    });

    // Pointer Lock & Drag Look
    canvasEl.addEventListener('click', () => {
      if (!isCutscene && canvasEl.requestPointerLock) {
        canvasEl.requestPointerLock();
      }
    });

    document.addEventListener('pointerlockchange', () => {
      isPointerLocked = (document.pointerLockElement === canvasEl);
    });

    document.addEventListener('mousemove', (e) => {
      if (!isRunning || isCutscene) return;

      if (isPointerLocked) {
        player.rot.yaw -= e.movementX * 0.0022;
        player.rot.pitch -= e.movementY * 0.0022;
      } else if (isMouseDown) {
        const dx = e.clientX - prevMouseX;
        const dy = e.clientY - prevMouseY;
        player.rot.yaw -= dx * 0.003;
        player.rot.pitch -= dy * 0.003;
      }

      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      // Clamp pitch (-80 to +80 deg)
      player.rot.pitch = Math.max(-1.4, Math.min(1.4, player.rot.pitch));
    });

    canvasEl.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      isMouseDown = false;
    });
  }

  // --- Sit Down Cutscene & Pixel-Perfect Screen Fit Fullscreen Zoom ---
  function triggerSitDownSequence() {
    if (isCutscene) return;
    isCutscene = true;
    player.canSit = false;

    const promptEl = document.getElementById('gta-interact-prompt');
    if (promptEl) promptEl.classList.remove('visible');

    const objEl = document.getElementById('gta-objective');
    if (objEl) {
      objEl.innerHTML = `<span class="gta-objective-tag">CUTSCENE:</span> <span class="gta-objective-text">Sitting at battlestation &amp; launching real store into fullscreen...</span>`;
    }

    if (roomContainer) roomContainer.classList.add('cinematic');

    playSound('whoosh');

    // Enable pointer events on the real webpage iframe so user can immediately click/scroll
    if (monitorIframeEl) {
      monitorIframeEl.style.pointerEvents = 'auto';
    }
    if (cssRenderer && cssRenderer.domElement) {
      cssRenderer.domElement.style.pointerEvents = 'auto';
    }

    // 1. Camera Tween from Player Pos to Chair View (sitting at desk)
    const startCamPos = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
    const chairCamPos = { x: 0, y: 1.25, z: 0.85 };
    const startTime = performance.now();
    const duration = 1200;

    function animateToChair(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Smooth easeInOutCubic
      const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      camera.position.x = startCamPos.x + (chairCamPos.x - startCamPos.x) * ease;
      camera.position.y = startCamPos.y + (chairCamPos.y - startCamPos.y) * ease;
      camera.position.z = startCamPos.z + (chairCamPos.z - startCamPos.z) * ease;
      camera.lookAt(SCREEN_CENTER_3D.x, SCREEN_CENTER_3D.y, SCREEN_CENTER_3D.z);

      if (progress < 1) {
        requestAnimationFrame(animateToChair);
      } else {
        playSound('boot');
        // Brief pause at chair view, then trigger the pixel-perfect fullscreen zoom
        setTimeout(triggerPerfectFitFullscreenZoom, 400);
      }
    }
    requestAnimationFrame(animateToChair);
  }

  // Zoom camera so monitor screen PERFECTLY FITS the browser window (Corner to corner)
  function triggerPerfectFitFullscreenZoom() {
    playSound('whoosh');
    if (roomContainer) {
      roomContainer.classList.add('fullscreen-fitting');
    }

    const startPos = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
    const startFov = camera.fov;

    // TARGET FOV: 45 degrees
    const targetFov = 45;
    const targetFovRad = (targetFov * Math.PI) / 180;

    // Exact trigonometric distance D where the 3D monitor screen fills 100% of the viewport:
    // Visible Height = 2 * D * tan(FOV / 2) = SCREEN_HEIGHT_3D (0.52m)
    // => D = (SCREEN_HEIGHT_3D / 2) / tan(FOV / 2) = 0.6277028 meters
    const exactD = (SCREEN_HEIGHT_3D / 2) / Math.tan(targetFovRad / 2);

    const targetPos = {
      x: SCREEN_CENTER_3D.x,
      y: SCREEN_CENTER_3D.y,
      z: SCREEN_CENTER_3D.z + exactD
    };

    const zoomStart = performance.now();
    const zoomDuration = 1400;

    function zoomLoop(now) {
      const elapsed = now - zoomStart;
      const progress = Math.min(1, elapsed / zoomDuration);
      // Smooth easeInOutQuad acceleration
      const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      camera.position.x = startPos.x + (targetPos.x - startPos.x) * ease;
      camera.position.y = startPos.y + (targetPos.y - startPos.y) * ease;
      camera.position.z = startPos.z + (targetPos.z - startPos.z) * ease;
      camera.fov = startFov + (targetFov - startFov) * ease;
      camera.updateProjectionMatrix();
      camera.lookAt(SCREEN_CENTER_3D.x, SCREEN_CENTER_3D.y, SCREEN_CENTER_3D.z);

      if (progress < 1) {
        requestAnimationFrame(zoomLoop);
      } else {
        // Pixel-perfect alignment achieved: the monitor screen exactly occupies the full window
        // Seamlessly dismiss 3D intro container and reveal live top-level webpage
        window.dismissGTARoomIntro();
      }
    }
    requestAnimationFrame(zoomLoop);
  }

  // Dismiss intro and reveal real website
  window.dismissGTARoomIntro = function() {
    try {
      sessionStorage.setItem('krishna_gta_dismissed_session', 'true');
    } catch (e) {}
    if (document.exitPointerLock) {
      try { document.exitPointerLock(); } catch (e) {}
    }
    if (roomContainer) {
      roomContainer.classList.add('hidden');
      setTimeout(() => {
        roomContainer.style.display = 'none';
        isRunning = false;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      }, 400);
    }
  };

  // Replay GTA 6 Room Intro
  window.playGTARoomIntro = function() {
    if (!roomContainer) setupDOM();
    if (!isSceneBuilt) buildScene();
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    roomContainer.style.display = 'block';
    roomContainer.style.opacity = '1';
    roomContainer.classList.remove('hidden', 'cinematic', 'fullscreen-fitting');

    // Reset player position
    player.pos = { x: 0, y: 1.7, z: 3.8 };
    player.rot = { pitch: -0.05, yaw: 0 };
    player.vel = { x: 0, z: 0 };
    player.canSit = false;
    isCutscene = false;

    if (camera) {
      camera.fov = 60;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }

    if (monitorIframeEl) {
      monitorIframeEl.style.pointerEvents = 'none';
    }
    if (cssRenderer && cssRenderer.domElement) {
      cssRenderer.domElement.style.pointerEvents = 'none';
    }

    const objEl = document.getElementById('gta-objective');
    if (objEl) {
      objEl.innerHTML = '<span class="gta-objective-tag">MISSION:</span> <span class="gta-objective-text">Approach battlestation and press [E] to sit &amp; launch real store into fullscreen.</span>';
    }

    isRunning = true;
    lastTime = performance.now();
    animate();
  };

  // Update Radar Map
  function updateRadar() {
    if (!radarCtx) return;
    const w = 128;
    const h = 128;
    radarCtx.clearRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;

    radarCtx.strokeStyle = 'rgba(0, 242, 254, 0.2)';
    radarCtx.lineWidth = 1;
    radarCtx.beginPath();
    radarCtx.arc(cx, cy, 32, 0, Math.PI * 2);
    radarCtx.arc(cx, cy, 54, 0, Math.PI * 2);
    radarCtx.stroke();

    const relDeskX = (0 - player.pos.x) * 12;
    const relDeskZ = (0 - player.pos.z) * 12;

    const cosY = Math.cos(-player.rot.yaw);
    const sinY = Math.sin(-player.rot.yaw);
    const rx = relDeskX * cosY - relDeskZ * sinY;
    const ry = relDeskX * sinY + relDeskZ * cosY;

    // Draw PC blip (Yellow/Cyan pulse)
    radarCtx.fillStyle = '#00f2fe';
    radarCtx.beginPath();
    radarCtx.arc(cx + rx, cy + ry, 4, 0, Math.PI * 2);
    radarCtx.fill();

    // Player arrow in center
    radarCtx.fillStyle = '#ffffff';
    radarCtx.beginPath();
    radarCtx.moveTo(cx, cy - 6);
    radarCtx.lineTo(cx - 5, cy + 6);
    radarCtx.lineTo(cx, cy + 3);
    radarCtx.lineTo(cx + 5, cy + 6);
    radarCtx.closePath();
    radarCtx.fill();
  }

  // --- Main Animation Loop (Live Movable RGB & Fan Rotations) ---
  let lastTime = performance.now();

  function animate(now = performance.now()) {
    if (!isRunning) return;
    animationFrameId = requestAnimationFrame(animate);

    const delta = Math.min(0.08, (now - lastTime) / 1000);
    lastTime = now;

    // 1. ROTATE ALL CASE FANS & GPU COOLERS
    caseFans.forEach((fan, i) => {
      const dir = (i % 2 === 0) ? 1 : -1;
      fan.rotation.z += dir * 20.0 * delta;
    });

    // 2. LIVE MOVABLE PC LIGHTS (Orbiting in 3D Space)
    const t = now * 0.0022;
    if (liveRgbLight1) {
      liveRgbLight1.position.x = 0.95 + Math.sin(t * 1.6) * 0.16;
      liveRgbLight1.position.y = 1.18 + Math.cos(t * 2.1) * 0.12;
      liveRgbLight1.position.z = -0.08 + Math.sin(t * 1.3) * 0.12;
    }
    if (liveRgbLight2) {
      liveRgbLight2.position.x = 0.82 + Math.cos(t * 1.4) * 0.14;
      liveRgbLight2.position.y = 1.28 + Math.sin(t * 1.9) * 0.14;
      liveRgbLight2.position.z = 0.12 + Math.cos(t * 1.1) * 0.10;
    }
    if (liveRgbLight3) {
      liveRgbLight3.position.x = Math.sin(t * 0.9) * 0.85;
      liveRgbLight3.position.y = 0.80 + Math.sin(t * 1.5) * 0.08;
      liveRgbLight3.position.z = -0.18 + Math.cos(t * 0.8) * 0.14;
    }

    // 3. COLOR CYCLING BY ACTIVE RGB MODE
    const mode = rgbModes[currentRgbModeIndex];
    let baseColor1 = new THREE.Color();
    let baseColor2 = new THREE.Color();
    let baseColor3 = new THREE.Color();

    if (mode === 'chroma') {
      const h1 = (now * 0.00025) % 1.0;
      const h2 = (h1 + 0.33) % 1.0;
      const h3 = (h1 + 0.66) % 1.0;
      baseColor1.setHSL(h1, 1.0, 0.55);
      baseColor2.setHSL(h2, 1.0, 0.55);
      baseColor3.setHSL(h3, 1.0, 0.55);
    } else if (mode === 'vice_city') {
      const blend = (Math.sin(now * 0.003) + 1) / 2;
      baseColor1.setRGB(1.0 * blend, 0.16 * blend + 0.95 * (1 - blend), 0.52 * blend + 0.99 * (1 - blend));
      baseColor2.setRGB(1.0 * (1 - blend), 0.16 * (1 - blend) + 0.95 * blend, 0.52 * (1 - blend) + 0.99 * blend);
      baseColor3.setHex(0x7c3aed);
    } else if (mode === 'cyberpunk') {
      const pulse3 = (Math.sin(now * 0.004) + 1) / 2;
      baseColor1.setHex(0x7c3aed);
      baseColor2.setHex(0xffb703);
      baseColor3.setHex(0x00f2fe);
      if (liveRgbLight1) liveRgbLight1.intensity = 1.8 + pulse3 * 1.2;
    } else if (mode === 'pulse') {
      const breathe = (Math.sin(now * 0.005) + 1) / 2;
      baseColor1.setHex(0x00f2fe);
      baseColor2.setHex(0xff2a85);
      baseColor3.setHex(0x00f2fe);
      if (liveRgbLight1) liveRgbLight1.intensity = 1.0 + breathe * 2.2;
      if (liveRgbLight2) liveRgbLight2.intensity = 1.0 + breathe * 2.2;
      if (liveRgbLight3) liveRgbLight3.intensity = 1.2 + breathe * 2.0;
    }

    if (liveRgbLight1) liveRgbLight1.color.copy(baseColor1);
    if (liveRgbLight2) liveRgbLight2.color.copy(baseColor2);
    if (liveRgbLight3) liveRgbLight3.color.copy(baseColor3);

    // 4. ANIMATE ALL RGB MESHES
    rgbMeshParts.forEach((part, i) => {
      if (part.mesh && part.mesh.material && part.mesh.material.emissive) {
        if (mode === 'chroma') {
          const partHue = ((now * 0.00028) + part.phaseOffset) % 1.0;
          part.mesh.material.emissive.setHSL(partHue, 1.0, 0.6);
        } else if (mode === 'vice_city') {
          part.mesh.material.emissive.copy((i % 2 === 0) ? baseColor1 : baseColor2);
        } else {
          part.mesh.material.emissive.copy(baseColor1);
        }
        part.mesh.material.emissiveIntensity = 1.4 + Math.sin(now * 0.006 + part.phaseOffset * 6) * 0.6;
      }
    });

    if (!isCutscene) {
      // Player Physics & Movement
      const currentSpeed = player.keys.sprint ? player.sprintSpeed : player.speed;
      const moveForward = (player.keys.forward ? 1 : 0) - (player.keys.backward ? 1 : 0);
      const moveRight = (player.keys.right ? 1 : 0) - (player.keys.left ? 1 : 0);

      if (moveForward !== 0 || moveRight !== 0) {
        const length = Math.hypot(moveForward, moveRight);
        const normFwd = moveForward / length;
        const normRight = moveRight / length;

        const forwardX = -Math.sin(player.rot.yaw);
        const forwardZ = -Math.cos(player.rot.yaw);
        const rightX = Math.cos(player.rot.yaw);
        const rightZ = -Math.sin(player.rot.yaw);

        player.pos.x += (normFwd * forwardX + normRight * rightX) * currentSpeed * delta;
        player.pos.z += (normFwd * forwardZ + normRight * rightZ) * currentSpeed * delta;
      }

      // Room boundaries collision
      player.pos.x = Math.max(-4.2, Math.min(4.2, player.pos.x));
      player.pos.z = Math.max(0.65, Math.min(4.4, player.pos.z));

      // Desk proximity check: distance to chair (0, 0, 0.95)
      const distToChair = Math.hypot(player.pos.x - 0, player.pos.z - 0.95);
      const promptEl = document.getElementById('gta-interact-prompt');
      const crosshair = document.getElementById('gta-crosshair');

      if (distToChair < 2.2) {
        player.canSit = true;
        if (promptEl) promptEl.classList.add('visible');
        if (crosshair) crosshair.classList.add('active');
      } else {
        player.canSit = false;
        if (promptEl) promptEl.classList.remove('visible');
        if (crosshair) crosshair.classList.remove('active');
      }

      // Update camera
      camera.position.set(player.pos.x, player.pos.y, player.pos.z);
      camera.rotation.order = 'YXZ';
      camera.rotation.y = player.rot.yaw;
      camera.rotation.x = player.rot.pitch;
    }

    // Render Radar Mini-map
    updateRadar();

    // Render WebGL 3D Room
    renderer.render(scene, camera);

    // Render Real Live Webpage CSS3D Object in 3D Perspective
    if (cssRenderer && cssScene) {
      cssRenderer.render(cssScene, camera);
    }
  }

  // --- Auto Initialization ---
  document.addEventListener('DOMContentLoaded', () => {
    setupDOM();
    buildScene();
    setupControls();

    const forceIntro = urlParams.has('intro') || urlParams.has('room') || urlParams.has('gta');
    let hasDismissed = false;
    try {
      hasDismissed = sessionStorage.getItem('krishna_gta_dismissed_session') === 'true';
    } catch (e) {}

    if (forceIntro || !hasDismissed) {
      window.playGTARoomIntro();
    } else {
      if (roomContainer) roomContainer.style.display = 'none';
    }
  });

})();
