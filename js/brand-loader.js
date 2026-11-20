/**
 * Krishna Infotech — 3D Motion Graphics Brand Loader
 * Features:
 * - 3D Perspective assembly of the Krishna emblem (peacock feather, flute, laptop, CCTV, circuits)
 * - Self-drawing cursive calligraphy handwriting ("Krishna Infotech") with traveling laser pen-tip spark
 * - Holographic circuit alignment & 3D tilt physics
 * - Telemetry progression (0% -> 100%)
 * - Skip button, Escape key dismissal, and Replay support
 */

(function() {
  'use strict';

  // Inject Google Fonts for Cursive Handwriting if not present
  if (!document.getElementById('brand-cursive-font')) {
    const link = document.createElement('link');
    link.id = 'brand-cursive-font';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Alex+Brush&family=Dancing+Script:wght@600;700&display=swap';
    document.head.appendChild(link);
  }

  // Inject Favicon if not present
  let fav = document.querySelector("link[rel*='icon']");
  if (!fav) {
    fav = document.createElement('link');
    fav.rel = 'icon';
    fav.type = 'image/png';
    document.head.appendChild(fav);
  }
  fav.href = 'assets/favicon.png';

  // HTML Template for the 3D Motion Graphics Loader
  const loaderHtml = `
  <div id="brand-loader-stage" class="brand-loader-stage" role="dialog" aria-modal="true" aria-label="Krishna Infotech Loading Presentation">
    <!-- Ambient 3D Laser Grid & Dust Particles -->
    <div class="loader-bg-grid"></div>
    <div class="loader-ambient-glow"></div>
    <div class="loader-scanlines"></div>

    <!-- Skip Button -->
    <button type="button" class="loader-skip-btn" id="loader-skip-btn" onclick="window.dismissBrandLoader()" title="Skip intro (or press Esc)">
      SKIP INTRO <span>✕</span>
    </button>

    <!-- 3D Perspective Motion Graphics Rig -->
    <div class="brand-3d-rig" id="brand-3d-rig">
      
      <!-- Central Circular Assembly Rig -->
      <div class="emblem-assembly-pod">
        <!-- Concentric Cyber Orbit Rings -->
        <svg class="orbit-circuit-svg" viewBox="0 0 360 360">
          <circle class="orbit-ring-base" cx="180" cy="180" r="168" />
          <circle class="orbit-ring-dash" cx="180" cy="180" r="168" />
          <circle class="orbit-ring-inner" cx="180" cy="180" r="152" />
          <circle class="orbit-ring-nodes" cx="180" cy="180" r="136" />
        </svg>

        <!-- Dynamic Laser Sparks Travelling the Perimeter -->
        <div class="laser-orbit-spark spark-1"></div>
        <div class="laser-orbit-spark spark-2"></div>

        <!-- The Cleaned Official Krishna Emblem Core -->
        <div class="emblem-disc-core" id="emblem-disc-core">
          <img src="assets/logo-emblem.png" alt="Krishna Infotech Emblem" class="emblem-img-layer" id="emblem-img-layer">
          <div class="emblem-sheen-overlay"></div>
          <div class="emblem-hologram-scan"></div>
        </div>
      </div>

      <!-- Cursive Handwriting & Typography Assembly Deck -->
      <div class="loader-text-assembly">
        
        <!-- Live Cursive Handwriting Drawing Canvas / SVG -->
        <div class="cursive-handwriting-box" id="cursive-box">
          <div class="cursive-laser-spark" id="cursive-spark"></div>
          
          <svg class="cursive-draw-svg" viewBox="0 0 620 120" id="cursive-draw-svg">
            <defs>
              <linearGradient id="cursiveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#00f2fe" />
                <stop offset="45%" stop-color="#4facfe" />
                <stop offset="85%" stop-color="#00e676" />
                <stop offset="100%" stop-color="#a8ff78" />
              </linearGradient>
              <filter id="cursiveGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Cursive Path / Text with stroke-dashoffset drawing animation -->
            <text x="310" y="78" text-anchor="middle" class="cursive-calligraphy-text" id="cursive-text">
              Krishna Infotech
            </text>

            <!-- Cursive Flourish Underline Ribbon -->
            <path class="cursive-ribbon-path" id="cursive-ribbon" d="M 60,98 Q 180,118 310,98 T 560,98 Q 575,98 555,108 T 310,105" />
          </svg>

          <div class="cursive-handwritten-lead">
            The Team of Experts
          </div>
        </div>

        <!-- Final Converged Logotype (Revealed at peak convergence) -->
        <div class="final-brand-converge" id="final-brand-converge">
          <img src="assets/logo.png" alt="Krishna Infotech" class="final-logo-glow-img">
        </div>

        <!-- Technical Telemetry / Progress HUD -->
        <div class="loader-telemetry-hud">
          <div class="telemetry-log" id="telemetry-log">
            [ INITIALIZING KRISHNA HARDWARE LOGIC ]
          </div>
          
          <div class="loader-progress-bar-track">
            <div class="loader-progress-bar-fill" id="loader-progress-fill"></div>
          </div>

          <div class="telemetry-meta-row">
            <span class="telemetry-hub-tag">MUMBAI • THANE • NAVI MUMBAI</span>
            <span class="telemetry-percent" id="telemetry-percent">0%</span>
          </div>
        </div>

      </div>

    </div>
  </div>
  `;

  // Insert loader into DOM if not present
  function ensureLoaderInDOM() {
    let stage = document.getElementById('brand-loader-stage');
    if (!stage) {
      document.body.insertAdjacentHTML('afterbegin', loaderHtml);
      stage = document.getElementById('brand-loader-stage');
    }
    return stage;
  }

  // Synthesize gentle cyber audio cue (fails gracefully if autoplay restricted)
  function playCyberAudioCue() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      // Gentle chord: C5 (523Hz), E5 (659Hz), G5 (784Hz), B5 (987Hz)
      const freqs = [523.25, 659.25, 783.99, 987.77];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.0001, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.035, now + idx * 0.08 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 1.3);
      });
    } catch (e) {
      // Audio autoplay restrictions are completely normal
    }
  }

  // Active animation state
  let animationInterval = null;
  let isLoaderActive = false;

  window.playBrandLoader = function(force = false) {
    // If not forced and already seen in this session, skip automatically
    if (!force && sessionStorage.getItem('krishna_intro_viewed') === 'true') {
      return;
    }

    const stage = ensureLoaderInDOM();
    if (!stage) return;

    isLoaderActive = true;
    document.body.style.overflow = 'hidden';
    stage.classList.remove('loader-fade-out');
    stage.style.display = 'flex';
    stage.style.opacity = '1';
    stage.style.visibility = 'visible';

    const rig = document.getElementById('brand-3d-rig');
    const emblemCore = document.getElementById('emblem-disc-core');
    const cursiveText = document.getElementById('cursive-text');
    const cursiveRibbon = document.getElementById('cursive-ribbon');
    const cursiveSpark = document.getElementById('cursive-spark');
    const finalConverge = document.getElementById('final-brand-converge');
    const telemetryLog = document.getElementById('telemetry-log');
    const progressFill = document.getElementById('loader-progress-fill');
    const percentText = document.getElementById('telemetry-percent');

    // Reset initial states
    if (rig) rig.className = 'brand-3d-rig phase-start';
    if (emblemCore) emblemCore.className = 'emblem-disc-core';
    if (cursiveText) cursiveText.style.strokeDashoffset = '1200';
    if (cursiveRibbon) cursiveRibbon.style.strokeDashoffset = '600';
    if (cursiveSpark) {
      cursiveSpark.style.opacity = '1';
      cursiveSpark.style.transform = 'translate(60px, 60px)';
    }
    if (finalConverge) finalConverge.style.opacity = '0';
    if (progressFill) progressFill.style.width = '0%';
    if (percentText) percentText.textContent = '0%';

    playCyberAudioCue();

    // Progress counter animation (0 to 100%)
    let startTime = performance.now();
    const duration = 2400; // 2.4s sequence

    if (animationInterval) clearInterval(animationInterval);

    animationInterval = setInterval(() => {
      if (!isLoaderActive) {
        clearInterval(animationInterval);
        return;
      }

      const elapsed = performance.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      const percent = Math.round(progress * 100);

      if (progressFill) progressFill.style.width = `${percent}%`;
      if (percentText) percentText.textContent = `${percent}%`;

      // Telemetry & Stage Phase Triggers
      if (percent < 25) {
        if (telemetryLog) telemetryLog.textContent = '[ 01: SYNTHESIZING KRISHNA CIRCUIT MATRIX... ]';
        if (rig) rig.className = 'brand-3d-rig phase-circuits';
      } else if (percent < 60) {
        if (telemetryLog) telemetryLog.textContent = '[ 02: CALLIGRAPHY LASER RENDERING TEXT... ]';
        if (rig) rig.className = 'brand-3d-rig phase-cursive';
        if (emblemCore) emblemCore.classList.add('glow-active');
        
        // Move cursive laser spark dynamically across text
        if (cursiveSpark) {
          const sparkProgress = (percent - 25) / 35; // 0 to 1
          const sparkX = 60 + sparkProgress * 480;
          const sparkY = 55 + Math.sin(sparkProgress * Math.PI * 4) * 14;
          cursiveSpark.style.transform = `translate(${sparkX}px, ${sparkY}px)`;
        }
      } else if (percent < 90) {
        if (telemetryLog) telemetryLog.textContent = '[ 03: CONVERGING 3D HARDWARE OPTICS... ]';
        if (rig) rig.className = 'brand-3d-rig phase-converge';
        if (cursiveSpark) cursiveSpark.style.opacity = '0';
        if (finalConverge) finalConverge.style.opacity = '1';
      } else {
        if (telemetryLog) telemetryLog.textContent = '[ 04: KRISHNA INFOTECH SYSTEMS READY (100%) ]';
        if (rig) rig.className = 'brand-3d-rig phase-complete';
      }

      if (progress >= 1) {
        clearInterval(animationInterval);
        sessionStorage.setItem('krishna_intro_viewed', 'true');
        setTimeout(() => {
          window.dismissBrandLoader();
        }, 350);
      }
    }, 25);
  };

  window.dismissBrandLoader = function() {
    isLoaderActive = false;
    if (animationInterval) clearInterval(animationInterval);
    sessionStorage.setItem('krishna_intro_viewed', 'true');

    const stage = document.getElementById('brand-loader-stage');
    if (stage) {
      stage.classList.add('loader-fade-out');
      setTimeout(() => {
        stage.style.display = 'none';
        document.body.style.overflow = '';
      }, 550);
    } else {
      document.body.style.overflow = '';
    }
  };

  // Keyboard shortcut: Esc skips intro
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isLoaderActive) {
      window.dismissBrandLoader();
    }
  });

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.playBrandLoader(false);
    });
  } else {
    window.playBrandLoader(false);
  }

})();
