


// import React, { useEffect, useState, useMemo } from "react";

// const Background = () => {
//   const [cursor, setCursor] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);

//   // Generate nodes once to prevent re-renders
//   const nodes = useMemo(() => {
//     return Array.from({ length: 50 }, () => ({
//       top: Math.random() * 100,
//       left: Math.random() * 100,
//       size: Math.random() * 2.5 + 1.5, // Slightly larger nodes
//       color: ["#00e0ff", "#00ff90", "#ff4fff"][Math.floor(Math.random() * 3)],
//       depth: Math.random() * 0.12 + 0.05,
//     }));
//   }, []);

//   useEffect(() => {
//     const handleMouse = (e) => setCursor({ x: e.clientX, y: e.clientY });
//     const handleScroll = () => setScrollY(window.scrollY);

//     window.addEventListener("mousemove", handleMouse);
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("mousemove", handleMouse);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden bg-[#020204]">
      
//       {/* 1. PERSPECTIVE GRID - Increased opacity from 0.15 to 0.3 for visibility */}
//       <div 
//         className="absolute inset-0 opacity-[0.3]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, #00e0ff 1px, transparent 1px),
//             linear-gradient(to bottom, #00e0ff 1px, transparent 1px)
//           `,
//           backgroundSize: '80px 80px', // Slightly larger grid for impact
//           maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)',
//           transform: `perspective(800px) rotateX(60deg) translateY(${scrollY * 0.02}px) translateZ(0)`,
//           transformOrigin: 'top',
//         }}
//       />

//       {/* 2. AMBIENT NEBULA GLOWS - Increased opacity and size */}
//       <div 
//         className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-[#00e0ff]/20 blur-[130px] animate-pulse"
//         style={{
//           transform: `translate(${(cursor.x - window.innerWidth / 2) * 0.03}px, ${(cursor.y - window.innerHeight / 2) * 0.03}px)`
//         }}
//       />
//       <div 
//         className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-[#ff4fff]/15 blur-[130px]"
//         style={{
//           transform: `translate(${(cursor.x - window.innerWidth / 2) * -0.03}px, ${(cursor.y - window.innerHeight / 2) * -0.03}px)`
//         }}
//       />

//       {/* 3. FLOATING DATA NODES - Increased size and opacity */}
//       {nodes.map((node, idx) => {
//         const moveX = (cursor.x - window.innerWidth / 2) * node.depth;
//         const moveY = (cursor.y - window.innerHeight / 2 + scrollY) * node.depth;

//         return (
//           <div
//             key={idx}
//             className="absolute rounded-full transition-transform duration-300 ease-out"
//             style={{
//               width: `${node.size}px`,
//               height: `${node.size}px`,
//               top: `${node.top}%`,
//               left: `${node.left}%`,
//               backgroundColor: node.color,
//               // Stronger Glow Effect
//               boxShadow: `0 0 12px ${node.color}, 0 0 24px ${node.color}66`,
//               transform: `translate(${moveX}px, ${moveY}px)`,
//               opacity: 0.8, // Increased from 0.6
//             }}
//           />
//         );
//       })}

//       {/* 4. OVERLAY VIGNETTE - Softened to show more background */}
//       {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020204]/80 pointer-events-none" /> */}
//     </div>
//   );
// };

// export default Background;



// import React, { useEffect, useState, useMemo } from "react";

// const Background = () => {
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);

//   // Generate unique data strips and geometric shapes
//   const elements = useMemo(() => ({
//     strips: Array.from({ length: 12 }, (_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       width: Math.random() * 2 + 1,
//       speed: Math.random() * 0.5 + 0.2,
//       opacity: Math.random() * 0.3 + 0.1,
//       color: i % 2 === 0 ? "#00e0ff" : "#ff4fff",
//     })),
//     shapes: Array.from({ length: 6 }, (_, i) => ({
//       id: i,
//       top: Math.random() * 100,
//       left: Math.random() * 100,
//       size: Math.random() * 300 + 100,
//       rotate: Math.random() * 360,
//       depth: Math.random() * 0.08 + 0.02,
//     }))
//   }), []);

//   useEffect(() => {
//     const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
//     const handleScroll = () => setScrollY(window.scrollY);

//     window.addEventListener("mousemove", handleMove);
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("mousemove", handleMove);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-0 bg-[#020204] overflow-hidden font-mono">
//       {/* 1. DEPTH LAYER: VIRTUAL GRID (Distorted) */}
//       <div 
//         className="absolute inset-[-20%] opacity-[0.15]"
//         style={{
//           backgroundImage: `linear-gradient(#00e0ff 1px, transparent 1px), linear-gradient(90deg, #00e0ff 1px, transparent 1px)`,
//           backgroundSize: '100px 100px',
//           transform: `perspective(1000px) rotateX(45deg) translateY(${scrollY * 0.1}px)`,
//           maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
//         }}
//       />

//       {/* 2. MID LAYER: FALLING DATA STRIPS */}
//       {elements.strips.map((strip) => (
//         <div
//           key={strip.id}
//           className="absolute top-[-20%] bottom-[-20%] transition-transform duration-300 ease-out"
//           style={{
//             left: `${strip.left}%`,
//             width: `${strip.width}px`,
//             background: `linear-gradient(to bottom, transparent, ${strip.color}, transparent)`,
//             opacity: strip.opacity,
//             transform: `translateY(${(scrollY * strip.speed) % 100}px)`,
//           }}
//         />
//       ))}

//       {/* 3. FOREGROUND: WIREFRAME GEOMETRIES */}
//       {elements.shapes.map((shape) => (
//         <div
//           key={shape.id}
//           className="absolute border border-white/5 rounded-full transition-transform duration-700 ease-out pointer-events-none"
//           style={{
//             width: `${shape.size}px`,
//             height: `${shape.size}px`,
//             top: `${shape.top}%`,
//             left: `${shape.left}%`,
//             transform: `
//               translate(${(mouse.x - window.innerWidth / 2) * shape.depth}px, 
//               ${(mouse.y - window.innerHeight / 2) * shape.depth}px) 
//               rotate(${shape.rotate + scrollY * 0.05}deg)
//             `,
//             boxShadow: `inset 0 0 40px rgba(0, 224, 255, 0.05)`,
//           }}
//         >
//             {/* Inner "Radar" line */}
//             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 animate-spin-slow" />
//         </div>
//       ))}

//       {/* 4. MOUSE SCANNER (The active focus) */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(0, 224, 255, 0.05), transparent 70%)`
//         }}
//       />

//       {/* 5. TOP LAYER: SCANLINE INTERFERENCE */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

//       <style jsx>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Background;

import React, { useEffect, useRef, useState, useMemo } from "react";

const Background = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // 1. Windows remain in your exact layout but with added "Depth" (Z-index/Parallax)
  const windows = useMemo(() => [
    { id: 1, title: "KERNEL_SHELL", top: "15%", left: "6%", w: "240px", h: "130px", color: "#00f7ff", factor: 0.01 },
    { id: 2, title: "NETWORK_TRAFFIC", bottom: "12%", right: "6%", w: "280px", h: "200px", color: "#00ffae", factor: 0.015 },
    { id: 3, title: "DATA_ENCRYPTOR", top: "45%", right: "10%", w: "200px", h: "120px", color: "#7a5cff", factor: 0.02 },
  ], []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

    const handleMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMove);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Enhanced character set with Glitch symbols
    const chars = "01<>[]{}$#@アァイウヴエΣΩπμλ".split("");
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0).map(() => Math.random() * -100);

    const draw = () => {
      // Deeper trail for better readability
      ctx.fillStyle = "rgba(2, 4, 10, 0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;

        const distance = Math.sqrt(
          Math.pow(mouseRef.current.x - x, 2) + 
          Math.pow(mouseRef.current.y - y * fontSize, 2)
        );
        
        const glowStrength = Math.max(0, 200 - distance) / 200;

        // Reactive Color logic: Cyan base, White highlight near mouse
        if (glowStrength > 0.6) {
          ctx.fillStyle = "#ffffff";
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#00fff7";
        } else {
          ctx.fillStyle = `rgba(0, 255, 200, ${0.1 + glowStrength * 0.5})`;
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          // Subtle variance in speed
          drops[i] += 0.8 + Math.random() * 0.5;
        }
      });

      // ADDED: Neural Connection Lines near mouse
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 247, 255, 0.05)";
      ctx.lineWidth = 0.5;
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 100, 0, Math.PI * 2);
      ctx.stroke();

      requestAnimationFrame(draw);
    };

    draw();
    return () => {
      clearInterval(timer);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#02040a] overflow-hidden font-mono select-none">
      
      {/* MATRIX CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />

      {/* 3D GRID FLOOR (Enhanced Perspective) */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#00f7ff 1px, transparent 1px), linear-gradient(90deg, #00f7ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: `perspective(1000px) rotateX(70deg) translateY(${mouseRef.current.y * 0.02}px)`,
          transformOrigin: "center bottom",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 90%)",
        }}
      />

      {/* TOP BAR (Added Scanning Line) */}
      <div className="
  absolute top-0 w-full
  min-h-[48px] md:h-12
  bg-black/80 backdrop-blur-xl
  border-b border-cyan-500/30
  flex flex-col md:flex-row
  md:items-center
  justify-center md:justify-between
  px-4 md:px-10
  py-2 md:py-0
  z-50
">

  {/* LEFT SIDE */}
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
    <span className="text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.4em] text-cyan-400 whitespace-nowrap">
      AMRIT_SHELL_v5
    </span>
  </div>

  {/* RIGHT SIDE */}
  <div className="
    flex items-center
    gap-3 md:gap-6
    text-[9px] md:text-[10px]
    text-cyan-700 font-bold
    mt-1 md:mt-0
  ">
    <span className="text-cyan-400 px-4">{time}</span>
    <span className="hidden md:inline text-cyan-400">LATENCY: 12ms</span>
  </div>

</div>

      {/* WINDOWS (Added Smooth Parallax) */}
      {windows.map((win) => (
        <div
          key={win.id}
          className="absolute bg-black/60 backdrop-blur-2xl border border-white/10 rounded-lg shadow-2xl shadow-cyan-950/20 transition-transform duration-1000 ease-out overflow-hidden"
          style={{
            top: win.top, left: win.left, right: win.right, bottom: win.bottom,
            width: win.w, height: win.h,
            transform: `translate3d(${(mouseRef.current.x - window.innerWidth / 2) * win.factor}px, ${(mouseRef.current.y - window.innerHeight / 2) * win.factor}px, 0)`
          }}
        >
          {/* Header */}
          <div className="h-7 flex items-center justify-between px-3 border-b border-white/10 bg-white/5">
            <span className="text-[9px] font-black tracking-widest opacity-80" style={{ color: win.color }}>
               {`// ${win.title}`}
            </span>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 border border-white/20 rounded-full" />
              <div className="w-1.5 h-1.5 bg-white/10 rounded-full" />
            </div>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3">
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500/50 animate-[scan_2s_infinite]" style={{ width: '40%' }} />
            </div>
            <div className="space-y-1">
               <div className="text-[8px] text-white/20 leading-tight">
                  S_ADDR: 0x{Math.random().toString(16).slice(2, 8).toUpperCase()}<br/>
                  PACKET_ID: {Math.floor(Math.random() * 9000)}
               </div>
            </div>
          </div>
        </div>
      ))}

      {/* CROSSHAIR (Minimal & Sharp) */}
      <div
        className="absolute pointer-events-none transition-transform duration-150 ease-out"
        style={{ left: mouseRef.current.x, top: mouseRef.current.y }}
      >
        <div className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 border border-cyan-400/20 rounded-sm rotate-45 flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_#fff]" />
        </div>
        <div className="ml-6 mt-4 px-2 py-1 bg-black/80 border border-white/10 text-[8px] text-cyan-400/50 rounded">
            TRK_{mouseRef.current.x}.{mouseRef.current.y}
        </div>
      </div>

      {/* VIGNETTE */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_40%,_#02040a_100%)] opacity-90" />

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
    </div>
  );
};

export default Background;