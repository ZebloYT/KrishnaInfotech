/**
 * Krishna Infotech — 3D IT Infrastructure Background (Three.js)
 * Interactive 3D CCTV Cameras & Enterprise PC Workstations that track the mouse
 * Zero external asset dependencies • 100% procedural WebGL • High performance 60 FPS
 */

(function() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  // Ensure Three.js is available (dynamically load if missing)
  if (typeof THREE === 'undefined') {
    const script = document.createElement('script');
    script.src = 'js/three.min.js';
    script.onload = init3DScene;
    script.onerror = () => {
      // Fallback to CDN if local script fails
      const cdnScript = document.createElement('script');
      cdnScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      cdnScript.onload = init3DScene;
      document.head.appendChild(cdnScript);
    };
    document.head.appendChild(script);
  } else {
    init3DScene();
  }

  function init3DScene() {
    // Enforce strict background layering and non-interfering pointer events
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene, Camera & WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Lighting Rig (Plum Graphite, Regal Amethyst & Emerald Accents)
    const ambientLight = new THREE.AmbientLight(0x241d38, 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xc4b5fd, 2.4);
    dirLight1.position.set(8, 12, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x7c3aed, 3.2); // Amethyst rim
    dirLight2.position.set(-10, -6, -4);
    scene.add(dirLight2);

    const emeraldPoint = new THREE.PointLight(0x10b981, 1.4, 18);
    emeraldPoint.position.set(0, -3, 6);
    scene.add(emeraldPoint);

    // 3. Shared Materials
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x141022,
      metalness: 0.85,
      roughness: 0.25
    });

    const bodyMetalMat = new THREE.MeshStandardMaterial({
      color: 0x1d172e,
      metalness: 0.75,
      roughness: 0.35
    });

    const brushedSteelMat = new THREE.MeshStandardMaterial({
      color: 0x3b3354,
      metalness: 0.9,
      roughness: 0.2
    });

    const purpleAccentMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      emissive: 0x6d28d9,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.5
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x2e1a5a,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.8,
      transparent: true,
      opacity: 0.75,
      reflectivity: 0.9
    });

    const lensGlassMat = new THREE.MeshStandardMaterial({
      color: 0x090514,
      roughness: 0.05,
      metalness: 0.95
    });

    const recLedMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const greenLedMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const purpleLedMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });

    // =========================================================================
    // MODEL 1: High-Tech Security CCTV Bullet Camera (Top-Right)
    // =========================================================================
    const cctvGroup = new THREE.Group();
    cctvGroup.position.set(5.8, 3.2, 0);

    // Base Mount (fixed)
    const cctvBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.45, 0.52, 0.14, 20),
      darkMetalMat
    );
    cctvBase.rotation.x = Math.PI / 2;
    cctvGroup.add(cctvBase);

    // Mount Articulated Arm
    const cctvArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.7, 16),
      brushedSteelMat
    );
    cctvArm.position.set(0, -0.2, 0.35);
    cctvArm.rotation.x = -Math.PI / 4;
    cctvGroup.add(cctvArm);

    // Swivel Joint Sphere
    const cctvSwivel = new THREE.Mesh(
      new THREE.SphereGeometry(0.24, 16, 16),
      brushedSteelMat
    );
    cctvSwivel.position.set(0, -0.45, 0.65);
    cctvGroup.add(cctvSwivel);

    // Camera Head Group (Pivots and aims at mouse cursor)
    const cctvHead = new THREE.Group();
    cctvHead.position.copy(cctvSwivel.position);

    // Main Camera Barrel (Tapered Cylinder)
    const cameraBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 0.46, 1.4, 24),
      bodyMetalMat
    );
    cameraBody.rotation.x = Math.PI / 2;
    cameraBody.position.z = 0.5;
    cctvHead.add(cameraBody);

    // Top Sunshield Visor
    const visor = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 0.08, 1.6),
      bodyMetalMat
    );
    visor.position.set(0, 0.44, 0.55);
    cctvHead.add(visor);

    // Visor Accent Stripe
    const visorStripe = new THREE.Mesh(
      new THREE.BoxGeometry(0.87, 0.02, 0.18),
      purpleAccentMat
    );
    visorStripe.position.set(0, 0.46, 1.25);
    cctvHead.add(visorStripe);

    // Front Lens Housing
    const lensRing = new THREE.Mesh(
      new THREE.CylinderGeometry(0.36, 0.38, 0.22, 24),
      darkMetalMat
    );
    lensRing.rotation.x = Math.PI / 2;
    lensRing.position.z = 1.25;
    cctvHead.add(lensRing);

    // Front Glass Aperture
    const lensAperture = new THREE.Mesh(
      new THREE.CircleGeometry(0.3, 24),
      lensGlassMat
    );
    lensAperture.position.z = 1.365;
    cctvHead.add(lensAperture);

    // Inner Lens Pupil (Reflective Core)
    const lensCore = new THREE.Mesh(
      new THREE.CircleGeometry(0.12, 16),
      purpleAccentMat
    );
    lensCore.position.z = 1.37;
    cctvHead.add(lensCore);

    // Blinking REC Status LED
    const recLed = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 10, 10),
      recLedMat
    );
    recLed.position.set(0.24, 0.26, 1.36);
    cctvHead.add(recLed);

    // IR Night Vision Ring (Array of 8 tiny emitters)
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const irLed = new THREE.Mesh(
        new THREE.SphereGeometry(0.025, 8, 8),
        purpleLedMat
      );
      irLed.position.set(Math.cos(angle) * 0.24, Math.sin(angle) * 0.24, 1.36);
      cctvHead.add(irLed);
    }

    cctvGroup.add(cctvHead);
    scene.add(cctvGroup);

    // =========================================================================
    // MODEL 2: Ceiling/Wall Dome PTZ Security Camera (Top-Left)
    // =========================================================================
    const domeGroup = new THREE.Group();
    domeGroup.position.set(-6.2, 3.5, -0.5);

    // Base Flange
    const domeBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.85, 0.95, 0.22, 28),
      darkMetalMat
    );
    domeGroup.add(domeBase);

    // Smoked Glass Outer Bubble
    const domeGlass = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 32, 24, 0, Math.PI * 2, 0, Math.PI / 2),
      glassMat
    );
    domeGlass.rotation.x = Math.PI;
    domeGroup.add(domeGlass);

    // Internal Eyeball Gimbal (Tracks mouse inside the dome)
    const domeEyeball = new THREE.Group();
    domeEyeball.position.set(0, -0.15, 0);

    const eyeCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 24, 24),
      bodyMetalMat
    );
    domeEyeball.add(eyeCore);

    // Eyeball Lens Barrel
    const domeLens = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.26, 0.4, 20),
      darkMetalMat
    );
    domeLens.rotation.x = Math.PI / 2;
    domeLens.position.z = 0.45;
    domeEyeball.add(domeLens);

    const domeAperture = new THREE.Mesh(
      new THREE.CircleGeometry(0.18, 20),
      purpleAccentMat
    );
    domeAperture.position.z = 0.66;
    domeEyeball.add(domeAperture);

    // Dome Status Indicator
    const domeLed = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 8, 8),
      greenLedMat
    );
    domeLed.position.set(0.2, 0.2, 0.5);
    domeEyeball.add(domeLed);

    domeGroup.add(domeEyeball);
    scene.add(domeGroup);

    // =========================================================================
    // MODEL 3: Enterprise PC Workstation & Ultrawide Monitor (Lower-Left)
    // =========================================================================
    const pcGroup = new THREE.Group();
    pcGroup.position.set(-5.4, -2.4, 0.5);

    // A. Desktop PC Tower Chassis
    const towerGroup = new THREE.Group();
    towerGroup.position.set(2.4, 0, -0.5);

    // Main Tower Frame
    const towerCase = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 2.1, 1.8),
      darkMetalMat
    );
    towerGroup.add(towerCase);

    // Front Airflow Grille
    const frontGrille = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 1.95, 0.05),
      bodyMetalMat
    );
    frontGrille.position.set(0, 0, 0.92);
    towerGroup.add(frontGrille);

    // Front Dual RGB Intake Fans
    for (let f = 0; f < 2; f++) {
      const fanRing = new THREE.Mesh(
        new THREE.RingGeometry(0.18, 0.28, 24),
        purpleAccentMat
      );
      fanRing.position.set(0, 0.45 - f * 0.8, 0.96);
      towerGroup.add(fanRing);
    }

    // Tempered Glass Side Window
    const glassSide = new THREE.Mesh(
      new THREE.PlaneGeometry(1.6, 1.9),
      glassMat
    );
    glassSide.position.set(-0.435, 0, 0);
    glassSide.rotation.y = -Math.PI / 2;
    towerGroup.add(glassSide);

    // Internal High-End GPU Card (Visible through glass)
    const gpuCard = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.4, 1.2),
      brushedSteelMat
    );
    gpuCard.position.set(-0.15, -0.2, 0);
    towerGroup.add(gpuCard);

    // Internal RAM Sticks with Purple Glow
    const ramSticks = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.45, 0.25),
      purpleAccentMat
    );
    ramSticks.position.set(-0.15, 0.45, 0.15);
    towerGroup.add(ramSticks);

    // Power LED
    const pwrLed = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 8, 8),
      purpleLedMat
    );
    pwrLed.position.set(0.3, 0.95, 0.92);
    towerGroup.add(pwrLed);

    pcGroup.add(towerGroup);

    // B. Ultrawide Curved Workstation Monitor
    const monitorGroup = new THREE.Group();
    monitorGroup.position.set(-0.6, 0.2, 0);

    // Display Frame
    const monitorFrame = new THREE.Mesh(
      new THREE.BoxGeometry(3.2, 1.7, 0.08),
      darkMetalMat
    );
    monitorGroup.add(monitorFrame);

    // Screen Canvas Texture (Simulated Telemetry Dashboard)
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 256;
    const sCtx = screenCanvas.getContext('2d');
    
    // Draw initial screen content
    sCtx.fillStyle = '#0d0a17';
    sCtx.fillRect(0, 0, 512, 256);
    sCtx.fillStyle = '#7c3aed';
    sCtx.fillRect(0, 0, 512, 24);
    sCtx.fillStyle = '#ffffff';
    sCtx.font = 'bold 12px monospace';
    sCtx.fillText('KRISHNA INFOTECH // ENTERPRISE TELEMETRY', 14, 17);
    
    // Grid lines
    sCtx.strokeStyle = 'rgba(124, 58, 237, 0.25)';
    sCtx.lineWidth = 1;
    for (let x = 0; x < 512; x += 32) {
      sCtx.beginPath(); sCtx.moveTo(x, 24); sCtx.lineTo(x, 256); sCtx.stroke();
    }
    for (let y = 24; y < 256; y += 24) {
      sCtx.beginPath(); sCtx.moveTo(0, y); sCtx.lineTo(512, y); sCtx.stroke();
    }

    // Uptime graph line
    sCtx.strokeStyle = '#10b981';
    sCtx.lineWidth = 2.5;
    sCtx.beginPath();
    sCtx.moveTo(20, 180);
    sCtx.lineTo(90, 160);
    sCtx.lineTo(160, 175);
    sCtx.lineTo(240, 120);
    sCtx.lineTo(340, 140);
    sCtx.lineTo(420, 90);
    sCtx.lineTo(490, 110);
    sCtx.stroke();

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture
    });

    const screenMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(3.1, 1.6),
      screenMat
    );
    screenMesh.position.z = 0.045;
    monitorGroup.add(screenMesh);

    // Monitor Stand Arm & Base
    const standArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.08, 1.1, 12),
      brushedSteelMat
    );
    standArm.position.set(0, -0.65, -0.2);
    standArm.rotation.x = -Math.PI / 14;
    monitorGroup.add(standArm);

    const standBase = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.05, 0.7),
      darkMetalMat
    );
    standBase.position.set(0, -1.2, -0.05);
    monitorGroup.add(standBase);

    pcGroup.add(monitorGroup);
    scene.add(pcGroup);

    // =========================================================================
    // MODEL 4: Enterprise Server Blade Chassis (Lower-Right)
    // =========================================================================
    const serverGroup = new THREE.Group();
    serverGroup.position.set(5.5, -2.6, -0.2);

    // 2U Chassis
    const serverBody = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 0.9, 2.0),
      darkMetalMat
    );
    serverGroup.add(serverBody);

    // Front Faceplate
    const serverFront = new THREE.Mesh(
      new THREE.BoxGeometry(2.35, 0.85, 0.06),
      bodyMetalMat
    );
    serverFront.position.set(0, 0, 1.03);
    serverGroup.add(serverFront);

    // Drive Bays (6 Enterprise Hot-Swap Trays)
    for (let d = 0; d < 6; d++) {
      const bay = new THREE.Mesh(
        new THREE.BoxGeometry(0.32, 0.65, 0.04),
        brushedSteelMat
      );
      bay.position.set(-0.85 + d * 0.35, 0, 1.07);
      serverGroup.add(bay);

      // Status LED for each drive
      const dLed = new THREE.Mesh(
        new THREE.SphereGeometry(0.02, 6, 6),
        d % 2 === 0 ? greenLedMat : purpleLedMat
      );
      dLed.position.set(-0.85 + d * 0.35, 0.24, 1.1);
      serverGroup.add(dLed);
    }

    scene.add(serverGroup);

    // =========================================================================
    // MODEL 5: Constellation Ambient Particles & Network Hairlines
    // =========================================================================
    const particleCount = 50;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleData = [];

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 26;
      const y = (Math.random() - 0.5) * 16;
      const z = (Math.random() - 0.5) * 8;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      particleData.push({
        vx: (Math.random() - 0.5) * 0.008,
        vy: (Math.random() - 0.5) * 0.008,
        vz: (Math.random() - 0.5) * 0.005
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xa78bfa,
      size: 0.14,
      transparent: true,
      opacity: 0.6
    });
    const particleSystem = new THREE.Points(particleGeo, pMat);
    scene.add(particleSystem);

    // =========================================================================
    // MOUSE INTERACTION & TRACKING
    // =========================================================================
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    window.addEventListener('mousemove', (e) => {
      targetMouse.x = (e.clientX / width) * 2 - 1;
      targetMouse.y = -(e.clientY / height) * 2 + 1;
    });

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      // Adjust positions for mobile screens
      if (width < 768) {
        cctvGroup.position.set(2.4, 3.8, -2);
        cctvGroup.scale.set(0.65, 0.65, 0.65);
        domeGroup.position.set(-2.4, 4.0, -2);
        domeGroup.scale.set(0.65, 0.65, 0.65);
        pcGroup.position.set(-1.6, -3.2, -1);
        pcGroup.scale.set(0.6, 0.6, 0.6);
        serverGroup.position.set(1.8, -3.5, -2);
        serverGroup.scale.set(0.6, 0.6, 0.6);
      } else {
        cctvGroup.position.set(5.8, 3.2, 0);
        cctvGroup.scale.set(1, 1, 1);
        domeGroup.position.set(-6.2, 3.5, -0.5);
        domeGroup.scale.set(1, 1, 1);
        pcGroup.position.set(-5.4, -2.4, 0.5);
        pcGroup.scale.set(1, 1, 1);
        serverGroup.position.set(5.5, -2.6, -0.2);
        serverGroup.scale.set(1, 1, 1);
      }
    });

    // Trigger initial responsive positioning
    if (width < 768) {
      cctvGroup.position.set(2.4, 3.8, -2);
      cctvGroup.scale.set(0.65, 0.65, 0.65);
      domeGroup.position.set(-2.4, 4.0, -2);
      domeGroup.scale.set(0.65, 0.65, 0.65);
      pcGroup.position.set(-1.6, -3.2, -1);
      pcGroup.scale.set(0.6, 0.6, 0.6);
      serverGroup.position.set(1.8, -3.5, -2);
      serverGroup.scale.set(0.6, 0.6, 0.6);
    }

    // Target 3D coordinate vector for CCTV lookAt
    const aimTarget = new THREE.Vector3();
    const clock = new THREE.Clock();

    // =========================================================================
    // MAIN RENDER LOOP (60 FPS)
    // =========================================================================
    function animate() {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouse.x += (targetMouse.x - mouse.x) * 0.06;
      mouse.y += (targetMouse.y - mouse.y) * 0.06;

      // 1. CCTV Bullet Camera: Actively pivots to follow mouse cursor
      aimTarget.set(mouse.x * 9, mouse.y * 6, 5);
      cctvHead.lookAt(aimTarget);

      // Blinking red recording LED (realistic 1Hz pulse)
      const recPulse = Math.sin(elapsedTime * 4.5) > 0.1 ? 1 : 0.15;
      recLedMat.color.setRGB(recPulse, 0.05, 0.05);

      // 2. Dome Camera: Internal eyeball swivels inside glass dome to track mouse
      domeEyeball.lookAt(aimTarget);

      // 3. PC Workstation: 3D perspective tilt & gentle zero-gravity hover
      const floatY = Math.sin(elapsedTime * 1.4) * 0.08;
      pcGroup.position.y = (width < 768 ? -3.2 : -2.4) + floatY;
      pcGroup.rotation.y = 0.35 + mouse.x * 0.4;
      pcGroup.rotation.x = 0.1 - mouse.y * 0.25;

      // 4. Server Chassis: Parallax depth response
      serverGroup.position.y = (width < 768 ? -3.5 : -2.6) + Math.cos(elapsedTime * 1.2) * 0.06;
      serverGroup.rotation.y = -0.3 + mouse.x * 0.3;
      serverGroup.rotation.x = -mouse.y * 0.2;

      // 5. Ambient Particles drift
      const posArr = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3] += particleData[i].vx;
        posArr[i * 3 + 1] += particleData[i].vy;
        posArr[i * 3 + 2] += particleData[i].vz;

        if (posArr[i * 3] < -13 || posArr[i * 3] > 13) particleData[i].vx *= -1;
        if (posArr[i * 3 + 1] < -8 || posArr[i * 3 + 1] > 8) particleData[i].vy *= -1;
        if (posArr[i * 3 + 2] < -4 || posArr[i * 3 + 2] > 4) particleData[i].vz *= -1;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Camera subtle parallax
      camera.position.x = mouse.x * 0.8;
      camera.position.y = mouse.y * 0.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }

    animate();
  }
})();
