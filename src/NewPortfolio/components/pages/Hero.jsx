import { useState, useMemo, useCallback } from "react";
import IntroSection from "../organisms/IntroSection";

const code = `
const portfolio = () => {
  const name = "Amrit Rai";

  const skills = [
    "Java","Spring-boot","MicroServices","JavaScript", "Jpa & Hibernet",
    "React", "Node.js", "MongoDB", "Express.js", "Bootstrap", "Tailwind CSS","Git",
    "GitHub","REST API", "MySQL","Postman","API Integration","Agile methodlogy"
  ];

  const traits = [
    "Hardworking", "Quick Learner",
    "Critical Thinking", "Problem Solver",
    "Teamwork", "Adaptability"
  ];

  return { name, skills, traits };
};
console.log(portfolio());
`;

const animatedTexts = [
  "Software Developer.",
  "Full-Stack Developer.",
  "Spring-boot Developer.",
  "Java Developer.",
  "Backend Developer.",
  "MERN Stack Developer.",
  "Node Js Developer.",
];

export default function Hero() {
  const [focusCode, setFocusCode] = useState(false);
  const lines = useMemo(() => code.split("\n"), []);

  const highlight = useCallback((line) => {
    let s = line
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    s = s.replace(/"([^"]*)"/g, '<span class="text-[#00ff90]">$&</span>');
    s = s.replace(/\b(const|return)\b/g,'<span class="text-[#00e0ff]">$1</span>');
    s = s.replace(/\b(portfolio)\b/g,'<span class="text-[#ff4fff]">$1</span>');
    return s;
  }, []);

  return (
    <section className="relative w-full text-white font-mono overflow-hidden">

      <AnimatedGrid />

      {/* ================= MOBILE LAYOUT ================= */}
      <div className="flex flex-col gap-16 px-4 py-20 lg:hidden">

        {/* CODE ABOVE */}
        <CodeWindow lines={lines} highlight={highlight} />

        {/* INTRO BELOW */}
        <IntroSection currentText={animatedTexts} />

      </div>

      {/* ================= DESKTOP / LAPTOP LAYOUT (UNCHANGED) ================= */}
      <div className="hidden lg:flex relative h-screen items-center justify-center">

        {/* CODE WINDOW */}
        <div
        onClick={() => setFocusCode(true)}
        className={`
          absolute transition-all duration-700 ease-in-out cursor-pointer max-w-3xl!
          ${
            focusCode
              ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 z-40 w-[88%] max-w-6xl"
              : "left-[6%] top-[14%] scale-[0.78] opacity-70 z-10 w-[80%] "
          }
        `}
      >
        <CodeWindow lines={lines} highlight={highlight} />
      </div>

        {/* INTRO CARD */}
        <div
          onClick={() => setFocusCode(false)}
          className={`
            absolute transition-all duration-700 ease-in-out cursor-pointer
            ${
              focusCode
                ? "right-[6%] bottom-[12%] scale-[0.75] opacity-60 z-10 animate-float"
                : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 z-40"
            }
          `}
        >
          <IntroSection currentText={animatedTexts} />
        </div>

        {/* <SidePanels /> */}
        {/* <MiniTerminal /> */}
      </div>

      <style>{`
        .glass-card {
          backdrop-filter: blur(30px);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 28px;
          box-shadow: 0 40px 120px rgba(0,0,0,0.6);
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

/* ===== Code Window ===== */
// function CodeWindow({ lines, highlight }) {
//   return (
//     <div className="bg-[#0d1117] rounded-3xl overflow-hidden border  border-white/10 shadow-2xl">
//       <div className="flex items-center justify-start gap-2  bg-[#161b22]">
//         <div className="flex gap-2 p-3 bg-[#161b22]">
//           <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
//           <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
//           <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
//         </div>
//         <div>Portfolio.js</div>
//       </div>

//       <pre className="p-6 text-[13px] text-[#c9d1d9] max-h-[500px] overflow-auto ">
//         {lines.map((ln, i) => (
//           <div key={i} dangerouslySetInnerHTML={{ __html: highlight(ln) }} />
//         ))}
//       </pre>
//     </div>
//   );
// }

function CodeWindow({ lines, highlight }) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[22px]
        border
        border-white/[0.08]
        bg-[#090c10]/95
        shadow-[0_30px_100px_rgba(0,0,0,0.55)]
        backdrop-blur-2xl
      "
    >

      {/* Header */}
      <div
        className="
          flex
          h-12
          items-center
          justify-between
          border-b
          border-white/[0.06]
          bg-white/[0.025]
          px-4
        "
      >

        <div className="flex items-center gap-2">

          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />

        </div>


        <div className="flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]" />

          <span className="text-[11px] font-medium tracking-wide text-white/40">
            Portfolio.js
          </span>

        </div>


        <div className="w-12" />

      </div>


      {/* Editor */}
      <div className="overflow-auto">

        <pre
          className="
            m-0
            min-w-max
            p-6
            text-[12px]
            leading-[1.8]
            text-[#9da7b3]
          "
        >

          {lines.map((line, index) => (
            <div
              key={index}
              className="flex"
            >

              {/* Line number */}
              <span
                className="
                  mr-6
                  inline-block
                  w-6
                  select-none
                  text-right
                  text-white/20
                "
              >
                {index + 1}
              </span>


              {/* Code */}
              <span
                dangerouslySetInnerHTML={{
                  __html: highlight(line),
                }}
              />

            </div>
          ))}

        </pre>

      </div>


      {/* Bottom status */}
      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-white/[0.06]
          bg-white/[0.02]
          px-4
          py-2
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-white/25
        "
      >

        <span>JavaScript</span>

        <span>UTF-8</span>

      </div>

    </div>
  );
}

/* ===== Background Grid ===== */
function AnimatedGrid() {
  return <div className="absolute inset-0 grid-bg opacity-20 -z-20" />;
}

/* ===== Side Panels (Desktop Only) ===== */
function SidePanels() {
  return (
    <>
      <div className="absolute left-10 bottom-35 glass-small p-5">
        MERN Stack Developer
      </div>
      <div className="absolute right-15 top-2/7 glass-small p-5">
        UI / UX / Performance
      </div>

      <style>{`
        .glass-small {
          backdrop-filter: blur(20px);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
        }
        .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: moveGrid 20s linear infinite;
        }
        @keyframes moveGrid {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }
      `}</style>
    </>
  );
}

/* ===== Mini Terminal (Desktop Only) ===== */
function MiniTerminal() {
  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/3 w-[420px] glass-small p-4 text-green-300 text-xs">
      $ git add .
      <br />
      $ git commit -m "initialising Portfolio....."
      <br />
      $ git push origin master
    </div>
  );
}



// import { useState, useMemo, useCallback } from "react";
// import IntroSection from "../organisms/IntroSection";

// const code = `
// const portfolio = () => {
//   const name = "Amrit Rai";

//   const skills = [
//     "Java","Spring-boot","MicroServices","JavaScript", "Jpa & Hibernet",
//     "React", "Node.js", "MongoDB", "Express.js", "Bootstrap", "Tailwind CSS",
//     "Git", "GitHub","REST API", "MySQL","Postman",
//     "API Integration","Agile methodlogy"
//   ];

//   const traits = [
//     "Hardworking", "Quick Learner",
//     "Critical Thinking", "Problem Solver",
//     "Teamwork", "Adaptability"
//   ];

//   return { name, skills, traits };
// };
// console.log(portfolio());
// `;


// const animatedTexts = [
//   "Software Developer.",
//   "Full-Stack Developer.",
//   "Spring Boot Developer.",
//   "Java Developer.",
//   "Backend Developer.",
//   "MERN Stack Developer.",
//   "Node.js Developer.",
// ];

// export default function Hero() {
//   const [focusCode, setFocusCode] = useState(false);

//   const lines = useMemo(() => code.split("\n"), []);

//   const highlight = useCallback((line) => {
//     let result = line
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;");

//     result = result.replace(
//       /"([^"]*)"/g,
//       '<span class="code-string">"$1"</span>'
//     );

//     result = result.replace(
//       /\b(const|return)\b/g,
//       '<span class="code-keyword">$1</span>'
//     );

//     result = result.replace(
//       /\b(console|log)\b/g,
//       '<span class="code-function">$1</span>'
//     );

//     result = result.replace(
//       /\b(portfolio|name|skills|traits)\b/g,
//       '<span class="code-variable">$1</span>'
//     );

//     return result;
//   }, []);

//   return (
//     <section className="hero-section relative min-h-screen w-full overflow-hidden bg-[#05070a] text-white">

//       {/* =====================================================
//           BACKGROUND
//       ====================================================== */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">

//         {/* Main cyan glow */}
//         <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[140px]" />

//         {/* Purple glow */}
//         <div className="absolute right-[-120px] top-[25%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[150px]" />

//         {/* Bottom glow */}
//         <div className="absolute bottom-[-200px] left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-[140px]" />

//         {/* Grid */}
//         <div className="hero-grid absolute inset-0 opacity-[0.18]" />

//         {/* Vignette */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#05070a_85%)]" />
//       </div>


//       {/* =====================================================
//           MOBILE
//       ====================================================== */}

//       <div className="relative z-10 flex min-h-screen flex-col justify-center gap-12 px-5 py-24 lg:hidden">

//         <div className="flex justify-center">
//           <IntroSection currentText={animatedTexts} />
//         </div>

//         <div className="relative">
//           <CodeWindow
//             lines={lines}
//             highlight={highlight}
//           />
//         </div>

//       </div>


//       {/* =====================================================
//           DESKTOP
//       ====================================================== */}

//       <div className="relative z-10 hidden min-h-screen lg:block">

//         {/* Top status */}
//         <StatusBar />


//         {/* Main Intro */}
//         <div
//           className={`
//             absolute
//             left-1/2
//             top-1/2
//             z-30
//             -translate-x-1/2
//             -translate-y-1/2
//             transition-all
//             duration-700
//             ease-out
//             ${
//               focusCode
//                 ? "scale-[0.78] opacity-60 blur-[0.2px]"
//                 : "scale-100 opacity-100"
//             }
//           `}
//           onClick={() => setFocusCode(false)}
//         >
//           <IntroSection currentText={animatedTexts} />
//         </div>


//         {/* Code Editor */}
//         <div
//           onClick={() => setFocusCode(true)}
//           className={`
//             absolute
//             z-20
//             cursor-pointer
//             transition-all
//             duration-700
//             ease-out
//             ${
//               focusCode
//                 ? `
//                   left-1/2
//                   top-1/2
//                   w-[82%]
//                   -translate-x-1/2
//                   -translate-y-1/2
//                   scale-100
//                   opacity-100
//                   z-50
//                 `
//                 : `
//                   left-[5%]
//                   top-[17%]
//                   w-[48%]
//                   scale-[0.82]
//                   opacity-55
//                 `
//             }
//           `}
//         >
//           <CodeWindow
//             lines={lines}
//             highlight={highlight}
//           />
//         </div>


//         {/* Floating cards */}
//         <FloatingCards focusCode={focusCode} />


//         {/* Terminal */}
//         <MiniTerminal />


//         {/* Scroll indicator */}
//         {!focusCode && (
//           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
//             <div className="mb-2 text-[10px] uppercase tracking-[0.35em] text-white/30">
//               Scroll to explore
//             </div>

//             <div className="mx-auto h-8 w-[1px] overflow-hidden bg-white/10">
//               <div className="scroll-line h-1/2 w-full bg-cyan-300" />
//             </div>
//           </div>
//         )}

//       </div>


//       {/* =====================================================
//           STYLES
//       ====================================================== */}

//       <style>{`

//         /* =========================
//            GRID
//         ========================== */

//         .hero-grid {
//           background-image:
//             linear-gradient(
//               rgba(255,255,255,0.045) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(255,255,255,0.045) 1px,
//               transparent 1px
//             );

//           background-size: 55px 55px;

//           mask-image:
//             radial-gradient(
//               ellipse at center,
//               black 20%,
//               transparent 80%
//             );

//           animation: gridMove 25s linear infinite;
//         }

//         @keyframes gridMove {
//           from {
//             background-position: 0 0;
//           }

//           to {
//             background-position: 55px 55px;
//           }
//         }


//         /* =========================
//            FLOATING
//         ========================== */

//         .floating-card {
//           animation: floating 7s ease-in-out infinite;
//         }

//         .floating-card-delay {
//           animation: floating 7s ease-in-out 2s infinite;
//         }

//         @keyframes floating {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-10px);
//           }
//         }


//         /* =========================
//            TERMINAL
//         ========================== */

//         .terminal-cursor {
//           animation: blink 1s step-end infinite;
//         }

//         @keyframes blink {
//           50% {
//             opacity: 0;
//           }
//         }


//         /* =========================
//            SCROLL
//         ========================== */

//         .scroll-line {
//           animation: scrollDown 2s ease-in-out infinite;
//         }

//         @keyframes scrollDown {
//           0% {
//             transform: translateY(-100%);
//           }

//           50% {
//             transform: translateY(100%);
//           }

//           100% {
//             transform: translateY(200%);
//           }
//         }


//         /* =========================
//            CODE COLORS
//         ========================== */

//         .code-keyword {
//           color: #00d9ff;
//         }

//         .code-string {
//           color: #5ee7a0;
//         }

//         .code-function {
//           color: #d78cff;
//         }

//         .code-variable {
//           color: #ff72df;
//         }

//       `}</style>
//     </section>
//   );
// }


// /* =========================================================
//    CODE WINDOW
// ========================================================= */

// function CodeWindow({ lines, highlight }) {
//   return (
//     <div
//       className="
//         group
//         overflow-hidden
//         rounded-[22px]
//         border
//         border-white/[0.08]
//         bg-[#090c10]/95
//         shadow-[0_30px_100px_rgba(0,0,0,0.55)]
//         backdrop-blur-2xl
//       "
//     >

//       {/* Header */}
//       <div
//         className="
//           flex
//           h-12
//           items-center
//           justify-between
//           border-b
//           border-white/[0.06]
//           bg-white/[0.025]
//           px-4
//         "
//       >

//         <div className="flex items-center gap-2">

//           <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
//           <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
//           <span className="h-3 w-3 rounded-full bg-[#28c840]" />

//         </div>


//         <div className="flex items-center gap-2">

//           <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]" />

//           <span className="text-[11px] font-medium tracking-wide text-white/40">
//             Portfolio.js
//           </span>

//         </div>


//         <div className="w-12" />

//       </div>


//       {/* Editor */}
//       <div className="overflow-auto">

//         <pre
//           className="
//             m-0
//             min-w-max
//             p-6
//             text-[12px]
//             leading-[1.8]
//             text-[#9da7b3]
//           "
//         >

//           {lines.map((line, index) => (
//             <div
//               key={index}
//               className="flex"
//             >

//               {/* Line number */}
//               <span
//                 className="
//                   mr-6
//                   inline-block
//                   w-6
//                   select-none
//                   text-right
//                   text-white/20
//                 "
//               >
//                 {index + 1}
//               </span>


//               {/* Code */}
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: highlight(line),
//                 }}
//               />

//             </div>
//           ))}

//         </pre>

//       </div>


//       {/* Bottom status */}
//       <div
//         className="
//           flex
//           items-center
//           justify-between
//           border-t
//           border-white/[0.06]
//           bg-white/[0.02]
//           px-4
//           py-2
//           text-[9px]
//           uppercase
//           tracking-[0.2em]
//           text-white/25
//         "
//       >

//         <span>JavaScript</span>

//         <span>UTF-8</span>

//       </div>

//     </div>
//   );
// }


// /* =========================================================
//    TOP STATUS BAR
// ========================================================= */

// function StatusBar() {
//   return (
//     <div
//       className="
//         absolute
//         left-1/2
//         top-8
//         flex
//         -translate-x-1/2
//         items-center
//         gap-3
//         rounded-full
//         border
//         border-white/[0.08]
//         bg-white/[0.025]
//         px-4
//         py-2
//         backdrop-blur-xl
//       "
//     >

//       <span
//         className="
//           h-1.5
//           w-1.5
//           rounded-full
//           bg-emerald-400
//           shadow-[0_0_10px_rgba(52,211,153,0.8)]
//         "
//       />

//       <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
//         Available for opportunities
//       </span>

//     </div>
//   );
// }


// /* =========================================================
//    FLOATING CARDS
// ========================================================= */

// function FloatingCards({ focusCode }) {
//   if (focusCode) return null;

//   return (
//     <>
//       {/* Left card */}
//       <div
//         className="
//           floating-card
//           absolute
//           bottom-[17%]
//           left-[7%]
//           z-20
//           rounded-2xl
//           border
//           border-white/[0.08]
//           bg-white/[0.035]
//           px-5
//           py-4
//           backdrop-blur-xl
//           shadow-[0_20px_60px_rgba(0,0,0,0.35)]
//         "
//       >

//         <div className="mb-1 text-[9px] uppercase tracking-[0.25em] text-cyan-300/60">
//           Stack
//         </div>

//         <div className="text-sm font-medium text-white/80">
//           MERN + Spring Boot
//         </div>

//       </div>


//       {/* Right card */}
//       <div
//         className="
//           floating-card-delay
//           absolute
//           right-[7%]
//           top-[30%]
//           z-20
//           rounded-2xl
//           border
//           border-white/[0.08]
//           bg-white/[0.035]
//           px-5
//           py-4
//           backdrop-blur-xl
//           shadow-[0_20px_60px_rgba(0,0,0,0.35)]
//         "
//       >

//         <div className="mb-1 text-[9px] uppercase tracking-[0.25em] text-purple-300/60">
//           Focus
//         </div>

//         <div className="text-sm font-medium text-white/80">
//           Performance · APIs · UX
//         </div>

//       </div>
//     </>
//   );
// }


// /* =========================================================
//    MINI TERMINAL
// ========================================================= */

// function MiniTerminal() {
//   return (
//     <div
//       className="
//         absolute
//         bottom-[9%]
//         right-[8%]
//         w-[330px]
//         overflow-hidden
//         rounded-xl
//         border
//         border-white/[0.07]
//         bg-[#070a0d]/80
//         shadow-[0_20px_60px_rgba(0,0,0,0.35)]
//         backdrop-blur-xl
//       "
//     >

//       {/* Terminal header */}
//       <div
//         className="
//           flex
//           items-center
//           gap-1.5
//           border-b
//           border-white/[0.06]
//           px-3
//           py-2
//         "
//       >

//         <span className="h-2 w-2 rounded-full bg-red-400/70" />
//         <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
//         <span className="h-2 w-2 rounded-full bg-green-400/70" />

//         <span className="ml-2 text-[9px] text-white/25">
//           terminal
//         </span>

//       </div>


//       {/* Commands */}
//       <div
//         className="
//           p-4
//           font-mono
//           text-[10px]
//           leading-6
//           text-white/35
//         "
//       >

//         <div>
//           <span className="text-cyan-300/70">$</span>{" "}
//           git status
//         </div>

//         <div className="text-emerald-300/50">
//           ✓ working tree clean
//         </div>

//         <div>
//           <span className="text-cyan-300/70">$</span>{" "}
//           git push origin master
//         </div>

//         <div className="text-white/25">
//           deploying portfolio
//           <span className="terminal-cursor ml-1">
//             █
//           </span>
//         </div>

//       </div>

//     </div>
//   );
// }

