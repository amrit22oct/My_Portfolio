// import { useState, useMemo, useCallback, useEffect } from "react";
// import IntroSection from "../organisms/IntroSection";

// const code = `
// const portfolio = () => {
//   const name = "Amrit Rai";

//   const skills = [
//     "JavaScript", "React", "Node.js", "MongoDB", "Express.js",
//     "Bootstrap", "Tailwind CSS", "PostgreSQL", "Git", "GitHub",
//     "REST API", "MySQL", "C++", "Python", "Java", "Postman",
//     "API Integration"
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
//   "MERN Stack Developer.",
//   "Node Js Developer.",
// ];

// export default function Hero() {
//   const [focusCode, setFocusCode] = useState(false);
//   const lines = useMemo(() => code.split("\n"), []);

//   const highlight = useCallback((line) => {
//     let s = line
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;");
//     s = s.replace(/"([^"]*)"/g, '<span class="text-[#00ff90]">$&</span>');
//     s = s.replace(
//       /\b(const|return)\b/g,
//       '<span class="text-[#00e0ff]">$1</span>'
//     );
//     s = s.replace(/\b(portfolio)\b/g, '<span class="text-[#ff4fff]">$1</span>');
//     return s;
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden  text-white font-mono flex items-center justify-center">
//       <AnimatedGrid />

//       {/* ================= CODE WINDOW (always visible) ================= */}
//       <div
//         onClick={() => setFocusCode(true)}
//         className={`
//           absolute transition-all duration-700 ease-in-out cursor-pointer max-w-3xl!
//           ${
//             focusCode
//               ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 z-40 w-[88%] max-w-6xl"
//               : "left-[6%] top-[14%] scale-[0.78] opacity-70 z-10 w-[80%] "
//           }
//         `}
//       >
//         <CodeWindow lines={lines} highlight={highlight} />
//       </div>

//       {/* ================= INTRO CARD ================= */}
//       <div
//         onClick={() => setFocusCode(false)}
//         className={`
//     absolute transition-all duration-700 ease-in-out cursor-pointer
//     ${
//       focusCode
//         ? "right-[6%] bottom-[12%] scale-[0.75] opacity-60 z-10 animate-float"
//         : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 z-40"
//     }
//   `}
//       >
       
//         <IntroSection currentText={animatedTexts} />
//       </div>

//       <SidePanels />
//       <MiniTerminal />

//       <style>{`
//         .glass-card {
//           backdrop-filter: blur(30px);
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 28px;
//           box-shadow: 0 40px 120px rgba(0,0,0,0.6);
//         }
//         @keyframes float {
//           0%,100% { transform: translateY(0); }
//           50% { transform: translateY(-18px); }
//         }
//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// /* ===== Code Window ===== */
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

// /* ===== Background Grid ===== */
// function AnimatedGrid() {
//   return <div className="absolute inset-0 grid-bg opacity-20 -z-20" />;
// }

// /* ===== Side Panels ===== */
// function SidePanels() {
//   return (
//     <>
//       <div className="absolute left-10 bottom-35 glass-small p-5">
//         MERN Stack Developer
//       </div>
//       <div className="absolute right-15 top-2/7 glass-small p-5">
//         UI / UX / Performance
//       </div>

//       <style>{`
//         .glass-small {
//           backdrop-filter: blur(20px);
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 16px;
//         }
//         .grid-bg {
//           background-image:
//             linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
//           background-size: 40px 40px;
//           animation: moveGrid 20s linear infinite;
//         }
//         @keyframes moveGrid {
//           from { background-position: 0 0; }
//           to { background-position: 40px 40px; }
//         }
//       `}</style>
//     </>
//   );
// }

// /* ===== Mini Terminal ===== */
// function MiniTerminal() {
//   return (
//     <div className="absolute top-6 left-1/2 -translate-x-1/3 w-[420px] glass-small p-4 text-green-300 text-xs">
//       $ git add .
//       <br />
//       $ git commit -m "initialising Portfolio....."
//       <br />
//       $ git push origin master
//       {/* <br />$ portfolio running... */}
//     </div>
//   );
// }

























import { useState, useMemo, useCallback } from "react";
import IntroSection from "../organisms/IntroSection";

const code = `
const portfolio = () => {
  const name = "Amrit Rai";

  const skills = [
    "JavaScript", "React", "Node.js", "MongoDB", "Express.js",
    "Bootstrap", "Tailwind CSS", "PostgreSQL", "Git", "GitHub",
    "REST API", "MySQL", "C++", "Python", "Java", "Postman",
    "API Integration"
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

        <SidePanels />
        <MiniTerminal />
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
function CodeWindow({ lines, highlight }) {
  return (
    <div className="bg-[#0d1117] rounded-3xl overflow-hidden border  border-white/10 shadow-2xl">
      <div className="flex items-center justify-start gap-2  bg-[#161b22]">
        <div className="flex gap-2 p-3 bg-[#161b22]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div>Portfolio.js</div>
      </div>

      <pre className="p-6 text-[13px] text-[#c9d1d9] max-h-[500px] overflow-auto ">
        {lines.map((ln, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: highlight(ln) }} />
        ))}
      </pre>
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