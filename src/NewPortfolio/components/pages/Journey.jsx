// import React, { useState } from "react";

// const achievements = [
//   { year: "2022", title: "TalentPool@IET", description: "Gained exposure to projects and enhanced technical skills." },
//   { year: "2023", title: "TalentHunt@IET", description: "Participated in coding competitions and workshops." },
//   { year: "2024", title: "Full Stack Dev Internship – Edureka", description: "Learned MERN stack and built real-time applications." },
//   { year: "2024", title: "JavaScript – HackerRank", description: "Mastered ES6+, DOM, async programming." },
//   { year: "2025", title: "Node.js – HackerRank", description: "Built backend APIs with Express & MongoDB." },
//   { year: "2025", title: "Web Dev Certification – Internshala", description: "Scored 84%. Learned responsive design & core web." },
// ];

// export default function Journey() {
//   const [active, setActive] = useState(null);

//   return (
//     <section
//       onClick={() => setActive(null)}
//       className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-6"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 " />
//       {/* <div className="absolute inset-0 blur-[120px] bg-[radial-gradient(circle_at_20%_30%,#00e0ff55,transparent_40%),radial-gradient(circle_at_80%_70%,#ff4fff55,transparent_40%)]" /> */}

//       {/* Center Title Core */}
//       <div className="relative z-10 text-center backdrop-blur-3xl bg-white/5 border border-white/10 rounded-[40px] px-16 py-20 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
//          <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold">
//            My{" "}
//            {/* <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"> */}
//            <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> 
//              Engineering Journey
//            </span>
//          </h1>
//          <p className="text-white/50 mt-6 max-w-xl mx-auto">
//            A progression of learning, building, breaking things, and leveling up as a developer.
//          </p>
//        </div>

//       {/* Floating Cards */}
//       {achievements.map((item, i) => (
//         <FloatingCard
//           key={i}
//           item={item}
//           index={i}
//           active={active}
//           setActive={setActive}
//         />
//       ))}
//     </section>
//   );
// }

// /* ================= Floating Card ================= */

// function FloatingCard({ item, index }) {
//   const [open, setOpen] = useState(false);

//   const positions = [
//     "top-[12%] left-[22%]",
//     "top-[3%] right-[26%]",
//     "bottom-[18%] left-[13%]",
//     "bottom-[17%] right-[18%]",
//     "top-[22%] left-[6%]",
//     "top-[19%] right-[7%]",
//   ];

//   return (
//     <>
//       {/* ORIGINAL CARD (never moves) */}
//       <div
//         onClick={() => setOpen(true)}
//         className={`
//           absolute ${positions[index]}
//           w-[280px] cursor-pointer
//           backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6
//           shadow-[0_20px_60px_rgba(0,224,255,0.25)]
//           hover:scale-105 hover:-translate-y-2
//           transition-all duration-500 z-10
//         `}
//       >
//         <div className="text-sm text-cyan-400 font-bold tracking-widest">
//           {item.year}
//         </div>

//         <h3 className="text-lg font-semibold mt-3">
//           {item.title}
//         </h3>

//         <p className="text-white/60 text-sm mt-3 leading-relaxed line-clamp-3">
//           {item.description}
//         </p>
//       </div>

//       {/* CENTER OPEN CARD (duplicate) */}
//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="
//             fixed inset-0 flex items-center justify-center z-[100]
//             bg-black/40 backdrop-blur-md
//           "
//         >
//           <div
//             className="
//               min-w-3xl
//               backdrop-blur-2xl bg-[#0d1117]/90 border border-white/10
//               rounded-3xl p-10 shadow-[0_30px_100px_rgba(0,224,255,0.35)]
//               animate-[popup_.5s_ease]
//               text-center
//             "
//           >
//             <div className="text-cyan-400 font-bold tracking-widest text-sm">
//               {item.year}
//             </div>

//             <h3 className="text-2xl font-semibold mt-4">
//               {item.title}
//             </h3>

//             <p className="text-white/70 mt-6 leading-relaxed">
//               {item.description}
//             </p>

//             <p className="text-white/30 text-xs mt-8">
//               (click anywhere to close)
//             </p>
//           </div>
//         </div>
//       )}

//       <style>{`
//         @keyframes popup {
//           from { transform: scale(.7); opacity:0 }
//           to { transform: scale(1); opacity:1 }
//         }
//       `}</style>
//     </>
//   );
// }






import React from "react";

const achievements = [
  { 
    year: "2024", 
    title: "Full Stack Internship", 
    description: "Architected MERN applications at Edureka. Focused on scalability and real-time data flow.", 
    category: "Professional", 
    color: "from-blue-500 to-cyan-400",
    size: "md:col-span-2 md:row-span-1" 
  },
  { 
    year: "2025", 
    title: "Node.js Expert", 
    description: "HackerRank Gold. Express, MongoDB, & Security.", 
    category: "Backend", 
    color: "from-green-500 to-emerald-400",
    size: "md:col-span-1 md:row-span-1" 
  },
 
  { 
    year: "2024", 
    title: "JS Specialist", 
    description: "Mastered ES6+, Async/Await, and DOM manipulation logic.", 
    category: "Language", 
    color: "from-yellow-400 to-orange-500",
    size: "md:col-span-1 md:row-span-1" 
  },
  { 
    year: "2022", 
    title: "TalentPool @IET", 
    description: "Initial technical immersion and logic building foundations.", 
    category: "Origins", 
    color: "from-purple-500 to-indigo-500",
    size: "md:col-span-1 md:row-span-1" 
  },
  { 
    year: "2023", 
    title: "TalentHunt", 
    description: "Competitive coding and algorithmic workshops.", 
    category: "Logic", 
    color: "from-pink-500 to-rose-400",
    size: "md:col-span-1 md:row-span-1" 
  },
  { 
    year: "2025", 
    title: "Web Dev Cert", 
    description: "84% Score. Responsive UI & Core Web Vitals.", 
    category: "Frontend", 
    color: "from-orange-400 to-yellow-400",
    size: "md:col-span-2 md:row-span-1" 
  },
 
];

export default function JourneyOS() {
  return (
    <section className="min-h-screen  text-white p-6 md:p-12 font-sans ">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Glass Header */}
        <header className="mb-12 backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
              Engineering <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> Log</span>
            </h1>
            <p className="text-white/40 mt-2 font-mono text-sm uppercase tracking-widest">v2.0.25 // status: active</p>
          </div>
          <div className="flex gap-4">
            <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold">2021 — 2025</div>
            <div className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold animate-pulse">AVAILABLE FOR HIRE</div>
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows">
          {achievements.map((item, i) => (
            <div
              key={i}
              className={`
                ${item.size} group relative rounded-[2rem] p-8 overflow-hidden  justify-start
                bg-[#111] border border-white/5 hover:border-white/20 
                transition-all duration-500 shadow-xl flex flex-col justify-between
              `}
            >
              {/* Dynamic Gradient Corner Glow */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 blur-3xl group-hover:opacity-40 transition-opacity duration-700`} />

              <div className="relative z-10 flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                  <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-tighter">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-white/40 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-4">
                <span className="text-2xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  {item.year}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                  <span className="text-xs">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}













// import React from "react";

// const achievements = [
//   { year: "2022", title: "TalentPool@IET", description: "Gained exposure to projects and enhanced technical skills." },
//   { year: "2023", title: "TalentHunt@IET", description: "Participated in coding competitions and workshops." },
//   { year: "2024", title: "Full Stack Dev Internship – Edureka", description: "Learned MERN stack and built real-time applications." },
//   { year: "2024", title: "JavaScript – HackerRank", description: "Mastered ES6+, DOM, async programming." },
//   { year: "2025", title: "Node.js – HackerRank", description: "Built backend APIs with Express & MongoDB." },
//   { year: "2025", title: "Web Dev Certification – Internshala", description: "Scored 84%. Learned responsive design & core web." },
// ];

// export default function Journey() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-6">

//       {/* ===== Background like Hero ===== */}
//       <div className="absolute inset-0 bg-[#0d1117]" />
//       <div className="absolute inset-0 blur-[120px] bg-[radial-gradient(circle_at_20%_30%,#00e0ff55,transparent_40%),radial-gradient(circle_at_80%_70%,#ff4fff55,transparent_40%)]" />

//       {/* ===== Center Core ===== */}
//       <div className="relative z-10 text-center backdrop-blur-3xl bg-white/5 border border-white/10 rounded-[40px] px-16 py-20 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
//         <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold">
//           My{" "}
//           <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
//             Engineering Journey
//           </span>
//         </h1>
//         <p className="text-white/50 mt-6 max-w-xl mx-auto">
//           A progression of learning, building, breaking things, and leveling up as a developer.
//         </p>
//       </div>

//       {/* ===== Floating Achievement Windows ===== */}
//       {achievements.map((item, i) => (
//         <FloatingCard key={i} item={item} index={i} />
//       ))}
//     </section>
//   );
// }

// /* ================= Floating Cards ================= */

// function FloatingCard({ item, index }) {
//   const positions = [
//     "top-[12%] left-[10%]",
//     "top-[18%] right-[12%]",
//     "bottom-[15%] left-[12%]",
//     "bottom-[18%] right-[10%]",
//     "top-[45%] left-[3%]",
//     "top-[50%] right-[3%]",
//   ];

//   return (
//     <div
//       className={`absolute ${positions[index]} w-[280px] backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6
//       shadow-[0_20px_60px_rgba(0,224,255,0.25)] text-white
//       transition-all duration-700 hover:scale-105 hover:-translate-y-2`}
//     >
//       <div className="text-sm text-cyan-400 font-bold tracking-widest">
//         {item.year}
//       </div>

//       <h3 className="text-lg font-semibold mt-3">
//         {item.title}
//       </h3>

//       <p className="text-white/60 text-sm mt-3 leading-relaxed">
//         {item.description}
//       </p>
//     </div>
//   );
// }
