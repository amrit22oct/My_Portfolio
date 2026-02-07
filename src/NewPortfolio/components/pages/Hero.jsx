// // src/components/pages/HomeContainer.jsx

// import Home from "./Home";
// import About from "./About";
// import Journey from "./Journey";

// import { useState, useEffect } from "react";
// import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

// import CodeBox from "../molecules/CodeBox";
// import IntroSection from "../organisms/IntroSection";

// const animatedTexts = [
//   "Software Developer.",
//   "Full-Stack Developer.",
//   "MERN Stack Developer.",
//   "Node Js Developer.",
// ];

// const Hero = () => {
//   const [currentText, setCurrentText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [typing, setTyping] = useState(true);
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     let timeout;

//     if (typing) {
//       if (charIndex < animatedTexts[currentIndex].length) {
//         timeout = setTimeout(() => {
//           setCharIndex((prev) => prev + 1);
//           setCurrentText(
//             animatedTexts[currentIndex].slice(0, charIndex + 1)
//           );
//         }, 120);
//       } else {
//         timeout = setTimeout(() => setTyping(false), 1500);
//       }
//     } else {
//       if (charIndex > 0) {
//         timeout = setTimeout(() => {
//           setCharIndex((prev) => prev - 1);
//           setCurrentText(
//             animatedTexts[currentIndex].slice(0, charIndex - 1)
//           );
//         }, 80);
//       } else {
//         setTyping(true);
//         setCurrentIndex((prev) => (prev + 1) % animatedTexts.length);
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [charIndex, typing, currentIndex]);

//   return (
//     <section
//       id="home"
//       className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 px-4 sm:px-8 lg:px-20 pt-[100px] sm:pt-[120px] pb-12 text-white font-mono overflow-hidden"
//     >
//       <IntroSection currentText={currentText} />
//       <CodeBox />
//     </section>
//   );
// };

// export default Hero;

// import { useState, useMemo, useCallback } from "react";

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

// export default function Hero() {
//   const [focusCode, setFocusCode] = useState(false);
//   const lines = useMemo(() => code.split("\n"), []);

//   const highlight = useCallback((line) => {
//     let s = line
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;");
//     s = s.replace(/"([^"]*)"/g, '<span class="text-[#00ff90]">$&</span>');
//     s = s.replace(/\b(const|return)\b/g, '<span class="text-[#00e0ff]">$1</span>');
//     s = s.replace(/\b(portfolio)\b/g, '<span class="text-[#ff4fff]">$1</span>');
//     return s;
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden flex items-center justify-center text-white font-mono">

//       {/* ===== Background Aura ===== */}
//       <div className="absolute inset-0 aurora -z-20" />

//       {/* ================= CODE WINDOW ================= */}
//       <div
//   onClick={() => setFocusCode(true)}
//   className={`
//     absolute transition-all duration-700 ease-in-out cursor-pointer
//     ${focusCode
//       ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 z-40 w-[85%] max-w-5xl"
//       : "left-[6%] top-[12%] scale-[0.8] opacity-70 z-20 w-[520px] animate-drift"}
//   `}
// >

//         <CodeWindow lines={lines} highlight={highlight} />
//       </div>

//       {/* ================= INTRO CARD ================= */}
//       <div
//   onClick={() => setFocusCode(false)}
//   className={`
//     absolute transition-all duration-700 ease-in-out cursor-pointer
//     ${focusCode
//       ? "left-[6%] top-[12%] scale-[0.8] opacity-60 z-20 animate-drift"
//       : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 z-40"}
//   `}
// >

//         <div className="glass-card p-14 text-center">
//           <h1 className="text-6xl font-bold tracking-wide">
//             Hi, I'm <span className="text-cyan-400">Amrit Rai</span>
//           </h1>
//           <p className="mt-6 text-xl text-white/70 max-w-xl">
//             I build modern, interactive and visually rich web experiences.
//           </p>
//           <p className="mt-6 text-sm text-white/40">
//             (click code • click intro to swap)
//           </p>
//         </div>
//       </div>

//       {/* Decorative floating panels */}
//       <MiniWindows />

//       <style>{`
//         .aurora {
//           background:
//             radial-gradient(circle at 20% 30%, #00e0ff55, transparent 40%),
//             radial-gradient(circle at 80% 70%, #ff4fff55, transparent 40%),
//             #0d1117;
//           filter: blur(120px);
//         }

//         .glass-card {
//           backdrop-filter: blur(30px);
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 30px;
//           box-shadow: 0 20px 80px rgba(0,0,0,0.5);
//         }

//         @keyframes drift {
//           0%,100% { transform: translateY(0px); }
//           50% { transform: translateY(-18px); }
//         }

//         .animate-drift {
//           animation: drift 8s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// /* ================= Code Window ================= */

// function CodeWindow({ lines, highlight }) {
//   return (
//     <div className="bg-[#0d1117] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
//       <div className="flex gap-2 p-3 bg-[#161b22]">
//         <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
//         <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
//         <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
//       </div>

//       <pre className="p-6 text-[13px] text-[#c9d1d9] max-h-[500px] overflow-auto">
//         {lines.map((ln, i) => (
//           <div key={i} dangerouslySetInnerHTML={{ __html: highlight(ln) }} />
//         ))}
//       </pre>
//     </div>
//   );
// }

// /* ================= Floating decorative panels ================= */

// function MiniWindows() {
//   return (
//     <>
//       <div className="absolute right-[8%] top-[15%] w-[260px] h-[160px] bg-white/5 backdrop-blur-xl rotate-12 rounded-2xl border border-white/10 animate-drift" />
//       <div className="absolute right-[15%] bottom-[12%] w-[220px] h-[140px] bg-white/5 backdrop-blur-xl -rotate-6 rounded-2xl border border-white/10 animate-drift" />
//     </>
//   );
// }

import { useState, useMemo, useCallback, useEffect } from "react";
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
    s = s.replace(
      /\b(const|return)\b/g,
      '<span class="text-[#00e0ff]">$1</span>'
    );
    s = s.replace(/\b(portfolio)\b/g, '<span class="text-[#ff4fff]">$1</span>');
    return s;
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden  text-white font-mono flex items-center justify-center">
      <AnimatedGrid />

      {/* ================= CODE WINDOW (always visible) ================= */}
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

      {/* ================= INTRO CARD ================= */}
      {/* ================= INTRO CARD ================= */}
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
        {/* <div className="
      glass-card
      w-[92vw] max-w-3xl
      px-16 py-16
      text-center
    "
  >
    <h1 className="text-[clamp(2.8rem,5vw,4rem)] font-bold leading-tight">
      Hi, I'm <span className="text-cyan-400">Amrit Rai</span>
    </h1>

    <p className="mt-8 text-white/70 text-xl leading-relaxed">
      I design and build immersive, modern and performance-driven web
      experiences using the MERN stack with strong focus on UI, motion and
      architecture.
    </p>

    <div className="mt-10 flex justify-center gap-6 text-sm text-white/40">
      <span>React</span>
      <span>Node</span>
      <span>MongoDB</span>
      <span>Tailwind</span>
      <span>UI/UX</span>
    </div>

    <p className="mt-8 text-white/30 text-xs tracking-wider">
      Click code • Click intro to swap
    </p>
  </div> */}
        <IntroSection currentText={animatedTexts} />
      </div>

      <SidePanels />
      <MiniTerminal />

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

/* ===== Side Panels ===== */
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

/* ===== Mini Terminal ===== */
function MiniTerminal() {
  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/3 w-[420px] glass-small p-4 text-green-300 text-xs">
      $ npm start
      <br />
      $ git push origin main
      <br />$ portfolio running...
    </div>
  );
}
