

// import React, { useEffect, useRef, useState, useMemo } from "react";

// const Background = () => {
//   const canvasRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   // 1. Windows remain in your exact layout but with added "Depth" (Z-index/Parallax)
//   const windows = useMemo(() => [
//     { id: 1, title: "KERNEL_SHELL", top: "15%", left: "6%", w: "240px", h: "130px", color: "#00f7ff", factor: 0.01 },
//     { id: 2, title: "NETWORK_TRAFFIC", bottom: "12%", right: "6%", w: "280px", h: "200px", color: "#00ffae", factor: 0.015 },
//     { id: 3, title: "DATA_ENCRYPTOR", top: "45%", right: "10%", w: "200px", h: "120px", color: "#7a5cff", factor: 0.02 },
//   ], []);

//   useEffect(() => {
//     const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

//     const handleMove = (e) => {
//       mouseRef.current = { x: e.clientX, y: e.clientY };
//     };
//     window.addEventListener("mousemove", handleMove);

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     // Enhanced character set with Glitch symbols
//     const chars = "01<>[]{}$#@アァイウヴエΣΩπμλ".split("");
//     const fontSize = 14;
//     const columns = Math.floor(canvas.width / fontSize);
//     const drops = Array(columns).fill(0).map(() => Math.random() * -100);

//     const draw = () => {
//       // Deeper trail for better readability
//       ctx.fillStyle = "rgba(2, 4, 10, 0.18)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.font = `bold ${fontSize}px monospace`;

//       drops.forEach((y, i) => {
//         const text = chars[Math.floor(Math.random() * chars.length)];
//         const x = i * fontSize;

//         const distance = Math.sqrt(
//           Math.pow(mouseRef.current.x - x, 2) + 
//           Math.pow(mouseRef.current.y - y * fontSize, 2)
//         );
        
//         const glowStrength = Math.max(0, 200 - distance) / 200;

//         // Reactive Color logic: Cyan base, White highlight near mouse
//         if (glowStrength > 0.6) {
//           ctx.fillStyle = "#ffffff";
//           ctx.shadowBlur = 15;
//           ctx.shadowColor = "#00fff7";
//         } else {
//           ctx.fillStyle = `rgba(0, 255, 200, ${0.1 + glowStrength * 0.5})`;
//           ctx.shadowBlur = 0;
//         }

//         ctx.fillText(text, x, y * fontSize);

//         if (y * fontSize > canvas.height && Math.random() > 0.975) {
//           drops[i] = 0;
//         } else {
//           // Subtle variance in speed
//           drops[i] += 0.8 + Math.random() * 0.5;
//         }
//       });

//       // ADDED: Neural Connection Lines near mouse
//       ctx.beginPath();
//       ctx.strokeStyle = "rgba(0, 247, 255, 0.05)";
//       ctx.lineWidth = 0.5;
//       ctx.arc(mouseRef.current.x, mouseRef.current.y, 100, 0, Math.PI * 2);
//       ctx.stroke();

//       requestAnimationFrame(draw);
//     };

//     draw();
//     return () => {
//       clearInterval(timer);
//       window.removeEventListener("mousemove", handleMove);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-0 bg-[#02040a] overflow-hidden font-mono select-none">
      
//       {/* MATRIX CANVAS */}
//       <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />

//       {/* 3D GRID FLOOR (Enhanced Perspective) */}
//       <div
//         className="absolute inset-0 opacity-20 pointer-events-none"
//         style={{
//           backgroundImage: "linear-gradient(#00f7ff 1px, transparent 1px), linear-gradient(90deg, #00f7ff 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//           transform: `perspective(1000px) rotateX(70deg) translateY(${mouseRef.current.y * 0.02}px)`,
//           transformOrigin: "center bottom",
//           maskImage: "radial-gradient(ellipse at center, black 20%, transparent 90%)",
//         }}
//       />

//       {/* TOP BAR (Added Scanning Line) */}
//       <div className="
//   absolute top-0 w-full
//   min-h-[64px] md:h-12
//   bg-black/20 backdrop-blur-xl
//   border-b border-cyan-500/30
//   flex flex-col md:flex-row
//   md:items-center
//   justify-center md:justify-between
//   px-4 md:px-10
//   py-2 md:py-0
//   z-50
// ">

//   {/* LEFT SIDE */}
//   <div className="flex items-center gap-3">
//     <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
//     <span className="text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.4em] text-cyan-400 whitespace-nowrap">
//       _Amrit_Shell_
//     </span>
//   </div>

//   {/* RIGHT SIDE */}
//   <div className="
//     flex items-center
//     gap-3 md:gap-6
//     text-[9px] md:text-[10px]
//     text-cyan-700 font-bold
//     mt-1 md:mt-0
//   ">
//     <span className="text-cyan-400 px-4">{time}</span>
//     <span className="hidden md:inline text-cyan-400">LATENCY: 12ms</span>
//   </div>

// </div>

//       {/* WINDOWS (Added Smooth Parallax) */}
//       {windows.map((win) => (
//         <div
//           key={win.id}
//           className="absolute bg-black/60 backdrop-blur-2xl border border-white/10 rounded-lg shadow-2xl shadow-cyan-950/20 transition-transform duration-1000 ease-out overflow-hidden"
//           style={{
//             top: win.top, left: win.left, right: win.right, bottom: win.bottom,
//             width: win.w, height: win.h,
//             transform: `translate3d(${(mouseRef.current.x - window.innerWidth / 2) * win.factor}px, ${(mouseRef.current.y - window.innerHeight / 2) * win.factor}px, 0)`
//           }}
//         >
//           {/* Header */}
//           <div className="h-7 flex items-center justify-between px-3 border-b border-white/10 bg-white/5">
//             <span className="text-[9px] font-black tracking-widest opacity-80" style={{ color: win.color }}>
//                {`// ${win.title}`}
//             </span>
//             <div className="flex gap-1.5">
//               <div className="w-1.5 h-1.5 border border-white/20 rounded-full" />
//               <div className="w-1.5 h-1.5 bg-white/10 rounded-full" />
//             </div>
//           </div>

//           {/* Body */}
//           <div className="p-4 space-y-3">
//             <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
//                 <div className="h-full bg-cyan-500/50 animate-[scan_2s_infinite]" style={{ width: '40%' }} />
//             </div>
//             <div className="space-y-1">
//                <div className="text-[8px] text-white/20 leading-tight">
//                   S_ADDR: 0x{Math.random().toString(16).slice(2, 8).toUpperCase()}<br/>
//                   PACKET_ID: {Math.floor(Math.random() * 9000)}
//                </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* CROSSHAIR (Minimal & Sharp) */}
//       <div
//         className="absolute pointer-events-none transition-transform duration-150 ease-out"
//         style={{ left: mouseRef.current.x, top: mouseRef.current.y }}
//       >
//         <div className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 border border-cyan-400/20 rounded-sm rotate-45 flex items-center justify-center">
//             <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_#fff]" />
//         </div>
//         <div className="ml-6 mt-4 px-2 py-1 bg-black/80 border border-white/10 text-[8px] text-cyan-400/50 rounded">
//             TRK_{mouseRef.current.x}.{mouseRef.current.y}
//         </div>
//       </div>

//       {/* VIGNETTE */}
//       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_40%,_#02040a_100%)] opacity-90" />

//       <style jsx>{`
//         @keyframes scan {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(250%); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Background;




import { useEffect, useRef } from "react";

const terminalLines = [
  "amrit@linux:~$ whoami",
  "amrit",
  "amrit@linux:~$ pwd",
  "/home/amrit/portfolio",
  "amrit@linux:~$ git status",
  "On branch main",
  "working tree clean",
  "amrit@linux:~$ npm run dev",
  "vite v7.x.x",
  "Local: http://localhost:5173/",
  "ready in 428ms",
  "amrit@linux:~$ systemctl status portfolio",
  "● portfolio.service - Running",
  "Active: active (running)",
  "amrit@linux:~$ ./build.sh",
  "[OK] compiling source",
  "[OK] optimizing assets",
  "[OK] build completed",
  "amrit@linux:~$ ping localhost",
  "64 bytes from localhost",
  "time=0.042 ms",
  "amrit@linux:~$",
];

const sideCode = [
  "const developer = {",
  '  name: "Amrit Rai",',
  '  role: "Full Stack Developer",',
  '  stack: ["React", "Java", "Spring"],',
  '  status: "building",',
  "};",
  "",
  "function createSolution() {",
  "  return cleanCode();",
  "}",
];

const commands = [
  "git",
  "npm",
  "node",
  "java",
  "spring",
  "react",
  "docker",
  "linux",
];

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let animationFrame;

    const particles = [];
    const chars = "01";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;

      const count = Math.min(80, Math.floor(width / 18));

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          char: chars[Math.floor(Math.random() * chars.length)],
          size: Math.random() > 0.7 ? 10 : 8,
          opacity: Math.random() * 0.12 + 0.025,
          speed: Math.random() * 0.12 + 0.03,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      /*
       * ------------------------------------------------
       * Very subtle terminal-style ambient glow
       * ------------------------------------------------
       */

      const glowLeft = ctx.createRadialGradient(
        width * 0.08,
        height * 0.45,
        0,
        width * 0.08,
        height * 0.45,
        width * 0.45
      );

      glowLeft.addColorStop(0, "rgba(34,197,94,0.055)");
      glowLeft.addColorStop(1, "rgba(34,197,94,0)");

      ctx.fillStyle = glowLeft;
      ctx.fillRect(0, 0, width, height);

      const glowRight = ctx.createRadialGradient(
        width * 0.92,
        height * 0.55,
        0,
        width * 0.92,
        height * 0.55,
        width * 0.42
      );

      glowRight.addColorStop(0, "rgba(6,182,212,0.045)");
      glowRight.addColorStop(1, "rgba(6,182,212,0)");

      ctx.fillStyle = glowRight;
      ctx.fillRect(0, 0, width, height);

      /*
       * ------------------------------------------------
       * Binary particles
       * ------------------------------------------------
       */

      ctx.font = "10px monospace";
      ctx.textAlign = "center";

      particles.forEach((particle) => {
        particle.y += particle.speed;

        if (particle.y > height + 20) {
          particle.y = -20;
          particle.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(34,197,94,${particle.opacity})`;

        ctx.fillText(
          particle.char,
          particle.x,
          particle.y
        );
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#010303]">

      {/* ============================================
          BASE
      ============================================ */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(8,20,17,0.35),transparent_55%)]" />

      {/* ============================================
          CANVAS
      ============================================ */}

      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-70"
      />

      {/* ============================================
          LEFT TERMINAL TRACE
      ============================================ */}

      <div
        className="
          absolute
          left-[3%]
          top-[18%]
          hidden
          w-[270px]
          font-mono
          text-[10px]
          leading-[1.9]
          text-emerald-400/[0.14]
          lg:block
        "
      >
        {terminalLines.slice(0, 12).map((line, index) => (
          <div
            key={index}
            className={
              line.includes("$")
                ? "text-emerald-300/[0.24]"
                : ""
            }
          >
            {line || "\u00A0"}
          </div>
        ))}
      </div>

      {/* ============================================
          RIGHT CODE TRACE
      ============================================ */}

      <div
        className="
          absolute
          right-[3%]
          top-[27%]
          hidden
          w-[300px]
          font-mono
          text-[10px]
          leading-[1.9]
          text-cyan-300/[0.13]
          lg:block
        "
      >
        {sideCode.map((line, index) => (
          <div key={index}>
            {line || "\u00A0"}
          </div>
        ))}
      </div>

      {/* ============================================
          TOP LEFT SHELL
      ============================================ */}

      <div
        className="
          absolute
          left-[4%]
          top-[9%]
          hidden
          font-mono
          text-[10px]
          text-emerald-400/[0.18]
          md:block
        "
      >
        <span className="text-emerald-300/[0.28]">
          amrit@linux
        </span>
        <span className="text-white/[0.12]">:</span>
        <span className="text-cyan-300/[0.22]">~</span>
        <span className="text-white/[0.12]">$</span>{" "}
        <span>_</span>
      </div>

      {/* ============================================
          TOP RIGHT SYSTEM INFO
      ============================================ */}

      <div
        className="
          absolute
          right-[4%]
          top-[9%]
          hidden
          font-mono
          text-[9px]
          tracking-[0.15em]
          text-white/[0.11]
          md:block
        "
      >
        <span className="text-emerald-400/[0.2]">
          SYS
        </span>{" "}
        //{" "}
        <span className="text-cyan-400/[0.2]">
          ONLINE
        </span>
      </div>

      {/* ============================================
          FLOATING COMMANDS
      ============================================ */}

      <div className="absolute inset-0 hidden md:block">

        {commands.map((command, index) => {
          const positions = [
            "left-[12%] top-[75%]",
            "left-[26%] top-[16%]",
            "left-[68%] top-[77%]",
            "right-[12%] top-[17%]",
            "left-[8%] top-[50%]",
            "right-[8%] top-[51%]",
            "left-[42%] top-[10%]",
            "right-[32%] top-[89%]",
          ];

          return (
            <div
              key={command}
              className={`
                absolute
                ${positions[index]}
                font-mono
                text-[8px]
                tracking-[0.2em]
                text-white/[0.07]
              `}
            >
              {`./${command}`}
            </div>
          );
        })}

      </div>

      {/* ============================================
          HORIZONTAL TERMINAL SCANLINES
      ============================================ */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)]
          bg-[length:100%_4px]
        "
      />

      {/* ============================================
          VERY SUBTLE GRID
      ============================================ */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.018]
          bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* ============================================
          CENTER VIGNETTE
          Keeps hero content readable
      ============================================ */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(1,3,3,0.25)_48%,rgba(1,3,3,0.85)_100%)]
        "
      />

      {/* ============================================
          EDGE VIGNETTE
      ============================================ */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.72)_100%)]
        "
      />

      {/* ============================================
          TERMINAL CURSOR
      ============================================ */}

      <div
        className="
          absolute
          bottom-[8%]
          left-[6%]
          hidden
          h-[11px]
          w-[6px]
          animate-pulse
          bg-emerald-400/[0.18]
          md:block
        "
      />

      {/* ============================================
          NOISE
      ============================================ */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          mix-blend-overlay
          [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]
        "
      />
    </div>
  );
}

export default Background;