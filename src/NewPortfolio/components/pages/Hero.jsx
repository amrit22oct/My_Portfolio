// import { useState, useMemo, useCallback } from "react";
// import IntroSection from "../organisms/IntroSection";

// const code = `
// const portfolio = () => {
//   const name = "Amrit Rai";

//   const skills = [
//     "Java","Spring-boot","MicroServices","JavaScript", "Jpa & Hibernet",
//     "React", "Node.js", "MongoDB", "Express.js", "Bootstrap", "Tailwind CSS","Git",
//     "GitHub","REST API", "MySQL","Postman","API Integration","Agile methodlogy"
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
//   "Spring-boot Developer.",
//   "Java Developer.",
//   "Backend Developer.",
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
//     s = s.replace(/\b(const|return)\b/g,'<span class="text-[#00e0ff]">$1</span>');
//     s = s.replace(/\b(portfolio)\b/g,'<span class="text-[#ff4fff]">$1</span>');
//     return s;
//   }, []);

//   return (
//     <section className="relative w-full text-white font-mono overflow-hidden">

//       <AnimatedGrid />

//       {/* ================= MOBILE LAYOUT ================= */}
//       <div className="flex flex-col gap-16 px-4 py-20 lg:hidden">

//         {/* CODE ABOVE */}
//         <CodeWindow lines={lines} highlight={highlight} />

//         {/* INTRO BELOW */}
//         <IntroSection currentText={animatedTexts} />

//       </div>

//       {/* ================= DESKTOP / LAPTOP LAYOUT (UNCHANGED) ================= */}
//       <div className="hidden lg:flex relative h-screen items-center justify-center">

//         {/* CODE WINDOW */}
//         <div
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

//         {/* INTRO CARD */}
//         <div
//           onClick={() => setFocusCode(false)}
//           className={`
//             absolute transition-all duration-700 ease-in-out cursor-pointer
//             ${
//               focusCode
//                 ? "right-[6%] bottom-[12%] scale-[0.75] opacity-60 z-10 animate-float"
//                 : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 z-40"
//             }
//           `}
//         >
//           <IntroSection currentText={animatedTexts} />
//         </div>

//         {/* <SidePanels /> */}
//         {/* <MiniTerminal /> */}
//       </div>

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
// // function CodeWindow({ lines, highlight }) {
// //   return (
// //     <div className="bg-[#0d1117] rounded-3xl overflow-hidden border  border-white/10 shadow-2xl">
// //       <div className="flex items-center justify-start gap-2  bg-[#161b22]">
// //         <div className="flex gap-2 p-3 bg-[#161b22]">
// //           <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
// //           <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
// //           <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
// //         </div>
// //         <div>Portfolio.js</div>
// //       </div>

// //       <pre className="p-6 text-[13px] text-[#c9d1d9] max-h-[500px] overflow-auto ">
// //         {lines.map((ln, i) => (
// //           <div key={i} dangerouslySetInnerHTML={{ __html: highlight(ln) }} />
// //         ))}
// //       </pre>
// //     </div>
// //   );
// // }

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

// /* ===== Background Grid ===== */
// function AnimatedGrid() {
//   return <div className="absolute inset-0 grid-bg opacity-20 -z-20" />;
// }

// /* ===== Side Panels (Desktop Only) ===== */
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

// /* ===== Mini Terminal (Desktop Only) ===== */
// function MiniTerminal() {
//   return (
//     <div className="absolute top-6 left-1/2 -translate-x-1/3 w-[420px] glass-small p-4 text-green-300 text-xs">
//       $ git add .
//       <br />
//       $ git commit -m "initialising Portfolio....."
//       <br />
//       $ git push origin master
//     </div>
//   );
// }












import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  Layers,
  Cpu,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("java");

  const scrollToAbout = () => {
    const target = document.getElementById("about");

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({
        top: window.innerHeight - 80,
        behavior: "smooth",
      });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("amritrai22oct@gmail.com");
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden  text-white select-none"
    >
  

      {/* -------------------------------------------------
          HERO CONTENT
      -------------------------------------------------- */}
      <div className="relative mt-3 z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1700px] items-center px-3 py-10 sm:px-8 sm:py-12 lg:px-12 xl:px-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16 pt-4">
          {/* =================================================
              LEFT COLUMN
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7 xl:col-span-7"
          >
            <div className="max-w-3xl ">
          

              {/* HEADING */}
              <h1 className="max-w-3xl text-[2.7rem] font-extrabold leading-[1.03] tracking-[-0.035em] text-white md:text-6xl lg:text-[4.25rem] xl:text-[4.7rem]">
                Crafting{" "}
                <span className="!bg-gradient-to-r
              from-white
              via-cyan-200
              to-cyan-400
              bg-clip-text
              !text-transparent
              drop-shadow-[0_0_12px_rgba(0,224,255,0.25)] sm:text-5xl ">
                  Robust
                </span>{" "}
                Systems.
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-zinc-400 sm:text-base lg:mt-6 lg:text-[17px]">
                <span  className="text-2xl text-white font-mono font-bold"> Hi,</span>
                 I'm{" "}
                <span className="font-semibold  bg-gradient-to-r
              from-white
              via-cyan-100
              to-cyan-400
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]">Amrit Rai</span>
                . A Software Development Engineer (SDE) specializing in{" "}
                <span className="font-medium  bg-gradient-to-r
              from-white
              via-cyan-100
              to-cyan-400
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]">
                  Java, Spring Boot
                </span>{" "}
                and responsive React frontend architectures.
              </p>

              {/* TECHNOLOGY CHIPS */}
              <div className="mt-6 flex max-w-2xl flex-wrap gap-2">
                {[
                  "Java 21",
                  "Spring Boot",
                  "REST APIs",
                  "PostgreSQL",
                  "React.js",
                  "Docker",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.25 + index * 0.05,
                      duration: 0.4,
                    }}
                    className=" border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#projects" 
                  className="group inline-flex items-center gap-2  border border-white/[0.09] bg-white/[0.025] px-5 py-3 text-md font-medium !text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-white/20   hover:bg-white/[0.07] hover:text-white active:scale-[0.98] sm:py-3.5"
                >
                  View Selected Work

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.025] px-5 py-3 text-md font-medium text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white active:scale-[0.98] sm:py-3.5"
                >
                  {copied ? (
                    <Check size={16} className="text-emerald-400" />
                  ) : (
                    <Copy size={16} />
                  )}

                  <span>{copied ? "Email Copied!" : "Copy Email"}</span>
                </button>
              </div>

              {/* SOCIAL + LOCATION */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/[0.08] pt-5">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/amrit22oct"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className=" border border-white/[0.08] bg-white/[0.02] p-2.5 !text-zinc-500 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.07] hover:!text-cyan-200"
                  >
                    <Github size={17} />
                  </a>

                  <a
                    href="https://linkedin.com/in/amrit-rai9335014143"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className=" border border-white/[0.08] bg-white/[0.02] p-2.5 !text-zinc-500 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.07] hover:!text-cyan-200"
                  >
                    <Linkedin size={17} />
                  </a>

                  <a
                    href="mailto:amritrai22oct@gmail.com"
                    aria-label="Mail"
                    className=" border border-white/[0.08] bg-white/[0.02] p-2.5 !text-zinc-500 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-200/[0.07] hover:!text-cyan-200"
                  >
                    <Mail size={17} />
                  </a>
                </div>

                <div className="hidden h-5 w-px bg-cyan-200/[0.5] sm:block" />

                <div className="flex items-center gap-2  border border-white/[0.06] bg-white/[0.025] px-3 py-2 text-sm font-medium text-zinc-400">
                  <MapPin size={17} className="text-cyan-400" />
                  New Delhi, India
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT COLUMN
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:col-span-5 xl:col-span-5"
          >
            {/* OUTER GLOW */}
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-cyan-400/[0.025] blur-3xl" />

            <div className="relative overflow-hidden  border border-white/[0.12] bg-[#0a0c10] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              {/* TERMINAL BAR */}
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0d0f14] px-4 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>

                <div className="flex items-center  border border-white/[0.05] bg-black/40 p-1 text-[10px] font-medium sm:text-[11px]">
                  <button
                    onClick={() => setActiveTab("java")}
                    className={`flex items-center gap-1  px-2.5 py-1.5 transition-all ${
                      activeTab === "java"
                        ? "border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-400"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    <Terminal size={12} />
                    Service.java
                  </button>

                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`flex items-center gap-1 rounded-md px-2.5 py-1.5 transition-all ${
                      activeTab === "architecture"
                        ? "border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-400"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    <Layers size={12} />
                    Overview
                  </button>
                </div>
              </div>

              {/* EDITOR */}
              <div className="min-h-[310px] bg-[#07080b] p-4 font-mono text-[11px] leading-[1.85] text-zinc-300 sm:min-h-[325px] sm:p-2 sm:text-xs">
                <AnimatePresence mode="wait">
                  {activeTab === "java" ? (
                    <motion.div
                      key="java"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1"
                    >
                      <p className="mb-3 text-zinc-600">
                        // Spring Boot REST Service
                      </p>

                      <p>
                        <span className="text-purple-400">
                          @RestController
                        </span>
                      </p>

                      <p>
                        <span className="text-purple-400">
                          @RequestMapping
                        </span>
                        <span className="text-emerald-300">
                          ("/api/v1/engineer")
                        </span>
                      </p>

                      <p>
                        <span className="text-blue-400">public class</span>{" "}
                        <span className="text-yellow-200">
                          DeveloperService
                        </span>{" "}
                        {"{"}
                      </p>

                      <p className="pl-4">
                        <span className="text-purple-400">@GetMapping</span>
                      </p>

                      <p className="pl-4">
                        <span className="text-blue-400">public</span> Profile{" "}
                        <span className="text-cyan-300">getProfile</span>(){" "}
                        {"{"}
                      </p>

                      <p className="pl-8 text-zinc-400">
                        <span className="text-blue-400">return</span>{" "}
                        Profile.builder()
                      </p>

                      <p className="pl-12 text-teal-300">
                        .name(
                        <span className="text-emerald-300">
                          "Amrit Rai"
                        </span>
                        )
                      </p>

                      <p className="pl-12 text-teal-300">
                        .primaryStack(
                        <span className="text-emerald-300">
                          "Java & Spring"
                        </span>
                        )
                      </p>

                      <p className="pl-12 text-teal-300">
                        .status(
                        <span className="text-emerald-300">
                          "Ready for Impact"
                        </span>
                        )
                      </p>

                      <p className="pl-12 text-teal-300">.build();</p>

                      <p className="pl-4">{"}"}</p>

                      <p>{"}"}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="arch"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4 font-sans text-xs text-zinc-300"
                    >
                      {/* SYSTEM STATUS */}
                      <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3.5">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="flex items-center gap-1.5 font-semibold text-white">
                            <Cpu size={14} className="text-cyan-400" />
                            System Metrics
                          </span>

                          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2 py-0.5 text-[9px] text-emerald-400">
                            OPTIMAL
                          </span>
                        </div>

                        <p className="text-[11px] leading-5 text-zinc-500">
                          Clean N-Tier Architecture, Microservice-ready,
                          Optimized Queries & Indexing.
                        </p>
                      </div>

                      {/* METRICS GRID */}
                      <div className="grid grid-cols-2 gap-2.5 text-[11px]">
                        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                          <span className="mb-1 block text-[9px] tracking-wide text-zinc-600">
                            BACKEND
                          </span>
                          <span className="font-medium text-zinc-200">
                            Spring Boot 3.x
                          </span>
                        </div>

                        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                          <span className="mb-1 block text-[9px] tracking-wide text-zinc-600">
                            FRONTEND
                          </span>
                          <span className="font-medium text-zinc-200">
                            React + Tailwind
                          </span>
                        </div>

                        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                          <span className="mb-1 block text-[9px] tracking-wide text-zinc-600">
                            DATABASE
                          </span>
                          <span className="font-medium text-zinc-200">
                            PostgreSQL / MySQL
                          </span>
                        </div>

                        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                          <span className="mb-1 block text-[9px] tracking-wide text-zinc-600">
                            CONTAINER
                          </span>
                          <span className="font-medium text-zinc-200">
                            Docker / Git
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* TERMINAL FOOTER */}
              <div className="flex items-center justify-between border-t border-white/[0.08] bg-[#0d0f14] px-4 py-2.5 text-[10px] text-zinc-500 sm:px-5">
                <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                  <CheckCircle2 size={13} />
                  All Systems Operational
                </span>

                <span className="font-mono text-zinc-600">UTF-8</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* -------------------------------------------------
          SCROLL INDICATOR
      -------------------------------------------------- */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
        }}
        className="group absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-zinc-600 transition-colors duration-300 hover:text-cyan-400 sm:flex"
        aria-label="Scroll to explore"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em]">
          Explore
        </span>

        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
