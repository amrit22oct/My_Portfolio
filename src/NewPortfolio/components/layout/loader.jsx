import React, { useEffect, useRef, useState } from 'react';

const CyberCoreLoader = () => {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;

    // Responsive State Variables
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cx = width / 2;
    let cy = height / 2;
    let scale = Math.min(width, height) / 750;

    const DOT_SIZE = Math.max(1.5, Math.min(2.5, 2 * scale));
    const cyan = '#00f3ff';

    // TIMING & MOTION CONFIGURATION
    const DURATION = 7000; // 7.0 seconds assembly timeline
    const ROTATION_SPEED = 0.018; // Smooth continuous spin speed

    // Cinematic Quintic Ease-Out curve for smooth particle landing
    const easeOutQuint = (x) => 1 - Math.pow(1 - x, 5);

    // Stagger helper for individual particle landing timing
    const getStaggerProgress = (overallLinearProgress, delayRatio, windowRatio) => {
      if (overallLinearProgress < delayRatio) return 0;
      const progressInWindow = (overallLinearProgress - delayRatio) / windowRatio;
      return Math.min(1, easeOutQuint(Math.min(1, Math.max(0, progressInWindow))));
    };

    // Particle Data Storage
    let coreParticles = [];
    let shellNodes = [];
    let outerSpikes = [];

    // Generator function to scale elements dynamically
    const initParticles = () => {
      coreParticles = [];
      shellNodes = [];
      outerSpikes = [];

      // 1. DENSE INNER CORE CLUSTER (800 Particles)
      const coreCount = 800;
      for (let i = 0; i < coreCount; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / coreCount);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const targetR = Math.pow(Math.random(), 0.6) * (75 * scale);

        const dist = (500 + Math.random() * 500) * scale;
        const sPhi = Math.acos(1 - 2 * Math.random());
        const sTheta = Math.PI * 2 * Math.random();

        coreParticles.push({
          tx: targetR * Math.sin(phi) * Math.cos(theta),
          ty: targetR * Math.sin(phi) * Math.sin(theta),
          tz: targetR * Math.cos(phi),
          sx: dist * Math.sin(sPhi) * Math.cos(sTheta),
          sy: dist * Math.sin(sPhi) * Math.sin(sTheta),
          sz: dist * Math.cos(sPhi),
          delay: Math.random() * 0.15,
          window: 0.7 + Math.random() * 0.15,
        });
      }

      // 2. DENSE GEODESIC SHELL
      const radius = 220 * scale;
      const lats = 36;
      const lons = 50;

      for (let i = 0; i <= lats; i++) {
        const latAngle = (Math.PI / lats) * i;
        for (let j = 0; j < lons; j++) {
          const lonAngle = ((Math.PI * 2) / lons) * j;

          const targetX = radius * Math.sin(latAngle) * Math.cos(lonAngle);
          const targetY = radius * Math.sin(latAngle) * Math.sin(lonAngle);
          const targetZ = radius * Math.cos(latAngle);

          const dist = (600 + Math.random() * 700) * scale;
          const sPhi = Math.acos(1 - 2 * Math.random());
          const sTheta = Math.PI * 2 * Math.random();

          shellNodes.push({
            tx: targetX,
            ty: targetY,
            tz: targetZ,
            sx: dist * Math.sin(sPhi) * Math.cos(sTheta),
            sy: dist * Math.sin(sPhi) * Math.sin(sTheta),
            sz: dist * Math.cos(sPhi),
            delay: (i / lats) * 0.25 + Math.random() * 0.1,
            window: 0.65 + Math.random() * 0.1,
            radius: radius,
          });
        }
      }

      // 3. OUTWARD SPIKES / NEEDLES (220 Spikes)
      const spikeCount = 220;
      const spikeRadius = 220 * scale;
      for (let i = 0; i < spikeCount; i++) {
        const phi = Math.acos(1 - 2 * Math.random());
        const theta = Math.PI * 2 * Math.random();
        const len = (20 + Math.random() * 45) * scale;

        const tX1 = spikeRadius * Math.sin(phi) * Math.cos(theta);
        const tY1 = spikeRadius * Math.sin(phi) * Math.sin(theta);
        const tZ1 = spikeRadius * Math.cos(phi);

        const tX2 = (spikeRadius + len) * Math.sin(phi) * Math.cos(theta);
        const tY2 = (spikeRadius + len) * Math.sin(phi) * Math.sin(theta);
        const tZ2 = (spikeRadius + len) * Math.cos(phi);

        const dist = (700 + Math.random() * 600) * scale;
        const sPhi = Math.acos(1 - 2 * Math.random());
        const sTheta = Math.PI * 2 * Math.random();

        outerSpikes.push({
          tx1: tX1, ty1: tY1, tz1: tZ1,
          tx2: tX2, ty2: tY2, tz2: tZ2,
          sx1: dist * Math.sin(sPhi) * Math.cos(sTheta),
          sy1: dist * Math.sin(sPhi) * Math.sin(sTheta),
          sz1: dist * Math.cos(sPhi),
          sx2: dist * Math.sin(sPhi) * Math.cos(sTheta),
          sy2: dist * Math.sin(sPhi) * Math.sin(sTheta),
          sz2: dist * Math.cos(sPhi),
          delay: 0.2 + Math.random() * 0.2,
          window: 0.6,
          radius: spikeRadius,
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      cx = width / 2;
      cy = height / 2;
      scale = Math.min(width, height) / 750;
      initParticles();
    };

    resize();
    window.addEventListener('resize', resize);

    let rotY = 0;
    let animationFrameId;
    const startTime = performance.now();

    // 3D Projection Matrix (Zero camera jittering)
    const project = (p, rX, rY) => {
      const x1 = p.x * Math.cos(rY) - p.z * Math.sin(rY);
      const z1 = p.z * Math.cos(rY) + p.x * Math.sin(rY);
      const y2 = p.y * Math.cos(rX) - z1 * Math.sin(rX);
      const z2 = z1 * Math.cos(rX) + p.y * Math.sin(rX);

      return { x: cx + x1, y: cy + y2, z: z2 };
    };

    const animate = (now) => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      const elapsed = now - startTime;
      const linearRatio = Math.min(1, elapsed / DURATION);

      rotY += ROTATION_SPEED;
      const rotX = 0.25;

      setProgress(Math.floor(linearRatio * 100));

      // --- A. DENSE CORE CLUSTER ---
      ctx.save();
      ctx.fillStyle = cyan;

      const projectedCore = coreParticles.map((p) => {
        const easeRatio = getStaggerProgress(linearRatio, p.delay, p.window);
        const x = p.sx + (p.tx - p.sx) * easeRatio;
        const y = p.sy + (p.ty - p.sy) * easeRatio;
        const z = p.sz + (p.tz - p.sz) * easeRatio;
        return project({ x, y, z }, rotX, rotY);
      });

      projectedCore.forEach((p) => {
        const alpha = (p.z + 120 * scale) / (240 * scale);
        ctx.globalAlpha = Math.min(1, Math.max(0.35, alpha));
        ctx.fillRect(
          Math.round(p.x - DOT_SIZE / 2),
          Math.round(p.y - DOT_SIZE / 2),
          DOT_SIZE,
          DOT_SIZE
        );
      });
      ctx.restore();

      // --- B. GEODESIC SHELL MESH ---
      ctx.save();
      ctx.fillStyle = cyan;

      const projectedShell = shellNodes.map((p) => {
        const easeRatio = getStaggerProgress(linearRatio, p.delay, p.window);
        const x = p.sx + (p.tx - p.sx) * easeRatio;
        const y = p.sy + (p.ty - p.sy) * easeRatio;
        const z = p.sz + (p.tz - p.sz) * easeRatio;
        return { ...project({ x, y, z }, rotX, rotY), radius: p.radius };
      });

      const maxConnectDist = 35 * scale;
      for (let i = 0; i < projectedShell.length; i++) {
        const p1 = projectedShell[i];
        const currentRadius = p1.radius || 220 * scale;

        const nodeAlpha = (p1.z + currentRadius) / (currentRadius * 2);
        ctx.globalAlpha = Math.max(0.1, Math.min(0.95, nodeAlpha));

        ctx.fillRect(
          Math.round(p1.x - DOT_SIZE / 2),
          Math.round(p1.y - DOT_SIZE / 2),
          DOT_SIZE,
          DOT_SIZE
        );

        if (linearRatio > 0.2) {
          const lineFadeIn = Math.min(1, (linearRatio - 0.2) / 0.3);
          for (let j = i + 1; j < projectedShell.length; j += 3) {
            const p2 = projectedShell[j];
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

            if (dist < maxConnectDist) {
              const lineAlpha = (1 - dist / maxConnectDist) * nodeAlpha * 0.4 * lineFadeIn;
              ctx.globalAlpha = lineAlpha;

              const steps = Math.floor(dist / 6);
              for (let s = 0; s <= steps; s++) {
                const lx = p1.x + (p2.x - p1.x) * (s / (steps || 1));
                const ly = p1.y + (p2.y - p1.y) * (s / (steps || 1));
                ctx.fillRect(Math.round(lx), Math.round(ly), 1, 1);
              }
            }
          }
        }
      }
      ctx.restore();

      // --- C. OUTWARD NEEDLES/SPIKES ---
      ctx.save();
      ctx.fillStyle = cyan;

      outerSpikes.forEach((s) => {
        const easeRatio = getStaggerProgress(linearRatio, s.delay, s.window);
        const x1 = s.sx1 + (s.tx1 - s.sx1) * easeRatio;
        const y1 = s.sy1 + (s.ty1 - s.sy1) * easeRatio;
        const z1 = s.sz1 + (s.tz1 - s.sz1) * easeRatio;
        const x2 = s.sx2 + (s.tx2 - s.sx2) * easeRatio;
        const y2 = s.sy2 + (s.ty2 - s.sy2) * easeRatio;
        const z2 = s.sz2 + (s.tz2 - s.sz2) * easeRatio;

        const p1 = project({ x: x1, y: y1, z: z1 }, rotX, rotY);
        const p2 = project({ x: x2, y: y2, z: z2 }, rotX, rotY);

        const currentRadius = s.radius || 220 * scale;
        const spikeAlpha = (p1.z + currentRadius) / (currentRadius * 2);
        ctx.globalAlpha = Math.max(0.15, spikeAlpha * 0.8);

        ctx.fillRect(
          Math.round(p2.x - DOT_SIZE / 2),
          Math.round(p2.y - DOT_SIZE / 2),
          DOT_SIZE,
          DOT_SIZE
        );

        if (linearRatio > 0.3) {
          const steps = 5;
          for (let k = 0; k <= steps; k++) {
            const rx = p1.x + (p2.x - p1.x) * (k / steps);
            const ry = p1.y + (p2.y - p1.y) * (k / steps);
            ctx.fillRect(Math.round(rx), Math.round(ry), 1, 1);
          }
        }
      });
      ctx.restore();

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Global CSS Reset Injection to completely eliminate scrollbars */}
      <style>{`
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
          overflow: hidden !important;
          background-color: #000000 !important;
          touch-action: none;
        }
      `}</style>

      <div style={styles.container}>
        <canvas ref={canvasRef} style={styles.canvas} />

        <div style={styles.progressContainer}>
          <div style={styles.progressTrack}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }} />
          </div>
          <div style={styles.progressText}>
            {progress < 100
              ? `LOADING..   ${progress}%`
              : `SYSTEM_ONLINE // MATRIX_READY`}
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    width: '100vw',
    height: '100dvh', // Uses Dynamic Viewport Height to prevent mobile scrollbars
    backgroundColor: '#000000',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Courier New', Courier, monospace",
    position: 'fixed', // Fixed positioning prevents any body shifting
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 0,
    padding: 0,
  },
  canvas: {
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    imageRendering: 'pixelated',
    filter: 'drop-shadow(0 0 18px rgba(0, 243, 255, 0.9))',
  },
  progressContainer: {
    position: 'absolute',
    bottom: '6dvh',
    width: '80%',
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 10,
    pointerEvents: 'none',
  },
  progressTrack: {
    width: '100%',
    height: '4px',
    background: 'rgba(0, 243, 255, 0.15)',
    borderRadius: '2px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 243, 255, 0.2)',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#00f3ff',
    boxShadow: '0 0 12px #00f3ff',
    transition: 'width 0.1s linear',
  },
  progressText: {
    marginTop: '12px',
    color: '#00f3ff',
    fontFamily: "'Syncopate', sans-serif",
    
    fontWeight: 700,
    fontSize: 'clamp(9px, 2vw, 12px)',
    letterSpacing: '3px',
    textAlign: 'center',
    textShadow: '0 0 8px rgba(0, 243, 255, 0.8)',
    whiteSpace: 'nowrap',
  },
};

export default CyberCoreLoader;