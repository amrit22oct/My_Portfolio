// import React from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaCodeBranch, FaStar, FaCode, FaHistory } from "react-icons/fa";
// import { SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiTailwindcss } from "react-icons/si";

// const GithubStats = () => {
//   // These represent the data points from your GitHub: amrit22oct
//   const stats = [
//     { label: "Repositories", value: "20+", icon: <FaCodeBranch />, color: "text-cyan-400" },
//     { label: "Primary Stack", value: "MERN", icon: <FaCode />, color: "text-purple-500" },
//     { label: "Commit Velocity", value: "High", icon: <FaHistory />, color: "text-green-400" },
//     { label: "Contributed", value: "Open Source", icon: <FaStar />, color: "text-yellow-400" },
//   ];

//   const languages = [
//     { name: "JavaScript", icon: <SiJavascript />, level: "90%", color: "#f7df1e" },
//     { name: "React", icon: <SiReact />, level: "85%", color: "#61dafb" },
//     { name: "Node.js", icon: <SiNodedotjs />, level: "80%", color: "#339933" },
//     { name: "MongoDB", icon: <SiMongodb />, level: "75%", color: "#47a248" },
//     { name: "Tailwind", icon: <SiTailwindcss />, level: "95%", color: "#06b6d4" },
//   ];

//   return (
//     <section id="github-intelligence" className="bg-[#020202] py-24 px-6 md:px-[10%] relative overflow-hidden">

//       {/* 1. HEADER: THE REPO IDENTITY */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
//         <div className="space-y-4">
//           <div className="flex items-center gap-3">
//              <FaGithub className="text-4xl text-white" />
//              <span className="font-mono text-cyan-500 text-xs tracking-[0.4em]">SOURCE_CORE // AMRIT22OCT</span>
//           </div>
//           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
//             Code <span className="text-transparent" style={{ WebkitTextStroke: "1px #444" }}>Intelligence</span>
//           </h2>
//         </div>

//         <a
//           href="https://github.com/amrit22oct"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-8 py-3 bg-white text-black font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-cyan-500 transition-colors rounded-sm"
//         >
//           View Live Profile
//         </a>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

//         {/* 2. STATS BENTO (Left Column) */}
//         <div className="lg:col-span-4 grid grid-cols-2 gap-4">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -5 }}
//               className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl flex flex-col justify-between aspect-square hover:border-cyan-500/50 transition-all"
//             >
//               <div className={`text-2xl ${stat.color}`}>{stat.icon}</div>
//               <div>
//                 <h4 className="text-3xl font-black text-white">{stat.value}</h4>
//                 <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-tighter">{stat.label}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* 3. REPO ACTIVITY GRID (Center Column) */}
//         <div className="lg:col-span-5 bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl relative overflow-hidden group">
//           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
//             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//           </div>
//           <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
//              <span className="w-8 h-[1px] bg-cyan-500" /> Technology Breadth
//           </h3>

//           <div className="space-y-6">
//             {languages.map((lang, i) => (
//               <div key={i} className="space-y-2">
//                 <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-400">
//                   <span className="flex items-center gap-2" style={{ color: lang.color }}>{lang.icon} {lang.name}</span>
//                   <span>{lang.level}</span>
//                 </div>
//                 <div className="h-[2px] w-full bg-zinc-900 overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: lang.level }}
//                     transition={{ duration: 1, delay: i * 0.1 }}
//                     className="h-full"
//                     style={{ backgroundColor: lang.color }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 4. VISUAL IDENTITY (Right Column) */}
//         <div className="lg:col-span-3 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/5 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
//            <div className="relative mb-6">
//               <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 animate-pulse" />
//               <img
//                 src="https://github.com/amrit22oct.png"
//                 alt="Amrit"
//                 className="w-32 h-32 rounded-full border-2 border-white/10 relative z-10"
//               />
//            </div>
//            <h4 className="text-white font-bold text-lg mb-1">Amrit22Oct</h4>
//            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest italic mb-6">MERN System Engineer</p>

//            <div className="w-full bg-black/40 p-4 rounded-lg border border-white/5">
//               <p className="text-[9px] font-mono text-cyan-400 text-left">
//                 &gt; Status: Online <br />
//                 &gt; Location: Remote <br />
//                 &gt; Latency: 22ms
//               </p>
//            </div>
//         </div>

//       </div>

//       {/* 5. BACKGROUND DECOR */}
//       <div className="absolute bottom-[-10%] left-[-5%] text-[20vw] font-black text-white/[0.02] uppercase pointer-events-none italic">
//         AMRIT
//       </div>
//     </section>
//   );
// };

// export default GithubStats;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaCodeBranch, FaStar, FaCode, FaHistory, FaTerminal } from "react-icons/fa";
// import { SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiTailwindcss } from "react-icons/si";
// import { GitHubCalendar } from "react-github-calendar";

// const GithubStats = () => {
//   // These represent the data points from your GitHub: amrit22oct

//   const contributionGrid = Array.from({ length: 280 }, () => Math.floor(Math.random() * 4));

//   const stats = [
//     { label: "Repositories", value: "20+", icon: <FaCodeBranch />, color: "text-cyan-400" },
//     { label: "Primary Stack", value: "MERN", icon: <FaCode />, color: "text-purple-500" },
//     { label: "Commit Velocity", value: "High", icon: <FaHistory />, color: "text-green-400" },
//     { label: "Contributed", value: "Open Source", icon: <FaStar />, color: "text-yellow-400" },
//   ];

//   const languages = [
//     { name: "JavaScript", icon: <SiJavascript />, level: "90%", color: "#f7df1e" },
//     { name: "React", icon: <SiReact />, level: "85%", color: "#61dafb" },
//     { name: "Node.js", icon: <SiNodedotjs />, level: "80%", color: "#339933" },
//     { name: "MongoDB", icon: <SiMongodb />, level: "75%", color: "#47a248" },
//     { name: "Tailwind", icon: <SiTailwindcss />, level: "95%", color: "#06b6d4" },
//   ];

//   const calendarTheme = {
//     dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
//   };
//   return (
//     <section id="github-intelligence" className="bg-[#020202] py-24 px-6 md:px-[10%] relative overflow-hidden">

//       {/* 1. HEADER: THE REPO IDENTITY */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
//         <div className="space-y-4">
//           <div className="flex items-center gap-3">
//              <FaGithub className="text-4xl text-white" />
//              <span className="font-mono text-cyan-500 text-xs tracking-[0.4em]">SOURCE_CORE // AMRIT22OCT</span>
//           </div>
//           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
//             Code <span className="text-transparent" style={{ WebkitTextStroke: "1px #444" }}>Intelligence</span>
//           </h2>
//         </div>

//         <a
//           href="https://github.com/amrit22oct"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-8 py-3 bg-white text-black font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-cyan-500 transition-colors rounded-sm"
//         >
//           View Live Profile
//         </a>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

//         {/* 2. STATS BENTO (Left Column) */}
//         <div className="lg:col-span-4 grid grid-cols-2 gap-4">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -5 }}
//               className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl flex flex-col justify-between aspect-square hover:border-cyan-500/50 transition-all"
//             >
//               <div className={`text-2xl ${stat.color}`}>{stat.icon}</div>
//               <div>
//                 <h4 className="text-3xl font-black text-white">{stat.value}</h4>
//                 <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-tighter">{stat.label}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* 3. REPO ACTIVITY GRID (Center Column) */}
//         <div className="lg:col-span-5 bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl relative overflow-hidden group">
//           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
//             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//           </div>
//           <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
//              <span className="w-8 h-[1px] bg-cyan-500" /> Technology Breadth
//           </h3>

//           <div className="space-y-6">
//             {languages.map((lang, i) => (
//               <div key={i} className="space-y-2">
//                 <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-400">
//                   <span className="flex items-center gap-2" style={{ color: lang.color }}>{lang.icon} {lang.name}</span>
//                   <span>{lang.level}</span>
//                 </div>
//                 <div className="h-[2px] w-full bg-zinc-900 overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: lang.level }}
//                     transition={{ duration: 1, delay: i * 0.1 }}
//                     className="h-full"
//                     style={{ backgroundColor: lang.color }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 4. VISUAL IDENTITY (Right Column) */}
//         <div className="lg:col-span-3 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/5 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
//            <div className="relative mb-6">
//               <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 animate-pulse" />
//               <img
//                 src="https://github.com/amrit22oct.png"
//                 alt="Amrit"
//                 className="w-32 h-32 rounded-full border-2 border-white/10 relative z-10"
//               />
//            </div>
//            <h4 className="text-white font-bold text-lg mb-1">Amrit22Oct</h4>
//            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest italic mb-6">MERN System Engineer</p>

//            <div className="w-full bg-black/40 p-4 rounded-lg border border-white/5">
//               <p className="text-[9px] font-mono text-cyan-400 text-left">
//                 &gt; Status: Online <br />
//                 &gt; Location: Remote <br />
//                 &gt; Latency: 22ms
//               </p>
//            </div>
//         </div>

//       </div>

//       {/* 5. BACKGROUND DECOR */}
//       <div className="absolute bottom-[-10%] left-[-5%] text-[20vw] font-black text-white/[0.02] uppercase pointer-events-none italic">
//         AMRIT
//       </div>

//       <div className="lg:col-span-4 bg-[#080808] border border-white/5 p-8 rounded-3xl flex flex-col">
//            <div className="flex justify-between items-center mb-6">
//               <h3 className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Commit_Pulse</h3>
//               <FaTerminal className="text-zinc-700 text-xs" />
//            </div>

//           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
//             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//           </div>
//           <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
//              <span className="w-8 h-[1px] bg-cyan-500" /> Annual Contribution Graph
//           </h3>

//           <div className="flex justify-center items-center overflow-x-auto pb-4 no-scrollbar">
//             {/* The Library handles the month labels and year automatically */}
//             <GitHubCalendar
//               username="amrit22oct"
//               theme={calendarTheme}
//               fontSize={12}
//               blockSize={12}
//               blockMargin={4}
//               colorScheme="dark"
//             />
//           </div>

//            <div className="mt-8 pt-6 border-t border-white/5">
//               <div className="flex justify-between text-[9px] font-mono text-zinc-500 uppercase mb-4">
//                  <span>Less</span>
//                  <div className="flex gap-1">
//                     <div className="w-2 h-2 bg-zinc-900" />
//                     <div className="w-2 h-2 bg-cyan-950" />
//                     <div className="w-2 h-2 bg-cyan-700" />
//                     <div className="w-2 h-2 bg-cyan-400" />
//                  </div>
//                  <span>More</span>
//               </div>

//            </div>
//         </div>

//     </section>
//   );
// };

// export default GithubStats;





// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaGithub,
//   FaCodeBranch,
//   FaStar,
//   FaCode,
//   FaHistory,
//   FaTerminal,
// } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiReact,
//   SiMongodb,
//   SiNodedotjs,
//   SiTailwindcss,
// } from "react-icons/si";
// import { GitHubCalendar } from "react-github-calendar";

// const GithubStats = () => {
//   // These represent the data points from your GitHub: amrit22oct

//   const contributionGrid = Array.from({ length: 280 }, () =>
//     Math.floor(Math.random() * 4)
//   );

//   const stats = [
//     {
//       label: "Repositories",
//       value: "20+",
//       icon: <FaCodeBranch />,
//       color: "text-cyan-400",
//     },
//     {
//       label: "Primary Stack",
//       value: "MERN",
//       icon: <FaCode />,
//       color: "text-purple-500",
//     },
//     {
//       label: "Commit Velocity",
//       value: "High",
//       icon: <FaHistory />,
//       color: "text-green-400",
//     },
//     {
//       label: "Contributed",
//       value: "Open Source",
//       icon: <FaStar />,
//       color: "text-yellow-400",
//     },
//   ];

//   const languages = [
//     {
//       name: "JavaScript",
//       icon: <SiJavascript />,
//       level: "90%",
//       color: "#f7df1e",
//     },
//     { name: "React", icon: <SiReact />, level: "85%", color: "#61dafb" },
//     { name: "Node.js", icon: <SiNodedotjs />, level: "80%", color: "#339933" },
//     { name: "MongoDB", icon: <SiMongodb />, level: "75%", color: "#47a248" },
//     {
//       name: "Tailwind",
//       icon: <SiTailwindcss />,
//       level: "95%",
//       color: "#06b6d4",
//     },
//   ];

//   const calendarTheme = {
//     dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
//   };
//   return (
//     <section
//       id="github-intelligence"
//       className=" py-24 px-6 md:px-[10%] relative overflow-hidden"
//     >
//       {/* 1. HEADER: THE REPO IDENTITY */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
//         <div className="space-y-4">
//           <div className="flex items-center gap-3">
//             <FaGithub className="text-4xl text-white" />
//             <span className="font-mono text-cyan-500 text-xs tracking-[0.4em]">
//               SOURCE_CORE // AMRIT22OCT
//             </span>
//           </div>
//           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
//             Github{" "}
//             <span
//               className="text-transparent "
//               style={{ WebkitTextStroke: "1px #00e0ff" }}
//             >
//               Stats
//             </span>
//           </h2>
//         </div>

//         {/* <a
//           href="https://github.com/amrit22oct"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-8 py-3 bg-white text-black font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-cyan-500 transition-colors rounded-sm"
//         >
//           View Live Profile
//         </a> */}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//         {/* 2. STATS BENTO (Left Column) */}
//         {/* <div className="lg:col-span-4 grid grid-cols-2 gap-4"> */}
//         <div className="order-3 lg:order-1 lg:col-span-4 grid grid-cols-2 gap-4">
//           {stats.map((stat, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -5 }}
//               className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl flex flex-col justify-between aspect-square hover:border-cyan-500/50 transition-all"
//             >
//               <div className={`text-2xl ${stat.color}`}>{stat.icon}</div>
//               <div>
//                 <h4 className="text-3xl font-black text-white">{stat.value}</h4>
//                 <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-tighter">
//                   {stat.label}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* 3. REPO ACTIVITY GRID (Center Column) */}
//         {/* <div className="lg:col-span-5 bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl relative overflow-hidden group"> */}
//         <div className="order-2 lg:order-2 lg:col-span-5 bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl relative overflow-hidden group">
//           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
//             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//           </div>
//           <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
//             <span className="w-10 h-[2px] bg-cyan-500" /> Technology <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> Breadth</span>
//           </h3>

//           <div className="space-y-6 w-full p-5 ">
//             {languages.map((lang, i) => (
//               <div key={i} className="space-y-2">
//                 <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-400">
//                   <span
//                     className="flex items-center gap-2"
//                     style={{ color: lang.color }}
//                   >
//                     {lang.icon} {lang.name}
//                   </span>
//                   <span>{lang.level}</span>
//                 </div>
//                 <div className="h-[2px] w-full bg-zinc-900 overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: lang.level }}
//                     transition={{ duration: 1, delay: i * 0.1 }}
//                     className="h-full"
//                     style={{ backgroundColor: lang.color }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 4. VISUAL IDENTITY (Right Column) */}
//         {/* <div className="lg:col-span-3 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/5 p-8 rounded-2xl flex flex-col justify-center items-center text-center"> */}
//         <div className="order-1 lg:order-3 lg:col-span-3 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/5 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
//           <div className="relative mb-6">
//             <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 animate-pulse" />
//             <img
//               src="https://github.com/amrit22oct.png"
//               alt="Amrit"
//               className="w-32 h-32 rounded-full border-2 border-white/10 relative z-10"
//             />
//           </div>
//           <h4 className="text-white font-bold text-lg mb-1">Amrit22Oct</h4>
//           <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest italic mb-6">
//             Software Developer Engineer
//           </p>

//           <div className="w-full bg-black/40 p-4 rounded-lg border border-white/5">
//             <p className="text-[9px] font-mono text-cyan-400 text-left">
//               &gt; Status: Online <br />
//               &gt; Location: Remote <br />
//               &gt; Latency: 22ms
//             </p>

           
//           </div>

//           <a
//           href="https://github.com/amrit22oct"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-8 py-3 m-2  text-black font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-cyan-500 transition-colors  text-white w-full bg-black/40 p-4 rounded-lg border border-white/5"
//         >
//           View Live Profile
//         </a>
         

//         </div>
//       </div>

//       {/* 5. BACKGROUND DECOR */}
//       {/* <div className="absolute bottom-[-10%] left-[-5%] text-[20vw] font-black text-white/[0.02] uppercase pointer-events-none italic">
//         AMRIT
//       </div> */}

//       <div className="lg:col-span-4 bg-[#080808] border border-white/5 p-8 mt-3 rounded-3xl flex flex-col">
//         <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
//           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//         </div>
//         <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
//           <span className="w-8 h-[1px] bg-cyan-500" /> Github Contribution
//         </h3>

//         <div className="flex justify-center items-center overflow-x-auto p-4 no-scrollbar">
//           {/* The Library handles the month labels and year automatically */}

//           <GitHubCalendar
//             username="amrit22oct"
//             theme={calendarTheme} // your color blocks
//             fontSize={12}
//             blockSize={12}
//             blockMargin={4}
//             colorScheme="dark"
//             hideTotalCount={false}
//             showWeekdayLabels={true}
//             style={{
//               color: "#cbd5e1", // Light gray for labels
//             }}
//             // transformData={(data) =>
//             //   data.filter((d) => new Date(d.date).getFullYear() === year)
//             // }
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GithubStats;










import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
  FaStar,
  FaCode,
  FaHistory,
  FaTerminal,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { GitHubCalendar } from "react-github-calendar";

const GithubStats = () => {
  const stats = [
    {
      label: "Repositories",
      value: "20+",
      icon: <FaCodeBranch />,
      accent: "cyan",
    },
    {
      label: "Primary Stack",
      value: "MERN",
      icon: <FaCode />,
      accent: "purple",
    },
    {
      label: "Activity",
      value: "Active",
      icon: <FaHistory />,
      accent: "green",
    },
    {
      label: "Focus",
      value: "Open Source",
      icon: <FaStar />,
      accent: "yellow",
    },
  ];

  const technologies = [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      level: 90,
      color: "#f7df1e",
    },
    {
      name: "React",
      icon: <SiReact />,
      level: 85,
      color: "#61dafb",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      level: 80,
      color: "#339933",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: 75,
      color: "#47a248",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: 95,
      color: "#06b6d4",
    },
  ];

  const calendarTheme = {
    dark: [
      "#0a0f0d",
      "#063b25",
      "#087f4d",
      "#12a866",
      "#21d17a",
    ],
  };

  return (
    <section
      id="github-intelligence"
      className="
        relative
        overflow-hidden
        px-6
        py-28
        md:px-[8%]
        lg:px-[10%]
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute
            left-1/2
            top-[25%]
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/[0.025]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            h-[300px]
            w-[300px]
            rounded-full
            bg-purple-500/[0.02]
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          SECTION HEADER
      ====================================================== */}

      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          {/* Terminal Label */}

          <div className="mb-5 flex items-center gap-3 font-mono">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
              <FaTerminal className="text-[11px]" />
            </span>

            <span className="text-[10px] uppercase tracking-[0.35em] text-cyan-400/70">
              ~/github/intelligence
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              text-5xl
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.06em]
              text-white
              sm:text-6xl
              md:text-7xl
            "
          >
            GitHub
            <br />

            <span
              className="
                bg-gradient-to-r
                from-white
                via-cyan-100
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Intelligence
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500">
            A snapshot of my development activity, technologies,
            repositories and contribution history.
          </p>
        </div>

        {/* GitHub Link */}

        <motion.a
          href="https://github.com/amrit22oct"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          className="
            group
            inline-flex
            items-center
            gap-3
            self-start
            rounded-lg
            border
            border-white/10
            bg-white/[0.025]
            px-5
            py-3
            font-mono
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-zinc-300
            transition-all
            duration-300
            hover:border-cyan-400/30
            hover:bg-cyan-400/[0.05]
            hover:text-cyan-300
            md:self-end
          "
        >
          <FaGithub className="text-sm" />

          <span>View Profile</span>

          <FaArrowRight
            className="
              text-[9px]
              opacity-50
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </motion.a>
      </div>

      {/* =====================================================
          MAIN GRID
      ====================================================== */}

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">

        {/* =================================================
            PROFILE / IDENTITY
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.07]
            bg-[#070a0a]/80
            p-6
            backdrop-blur-xl
            xl:col-span-3
          "
        >
          {/* Top Glow */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-400/60
              to-transparent
            "
          />

          {/* Profile */}

          <div className="flex items-center gap-4">
            <div className="relative">
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-cyan-400/20
                  blur-xl
                "
              />

              <img
                src="https://github.com/amrit22oct.png"
                alt="Amrit Rai"
                className="
                  relative
                  h-16
                  w-16
                  rounded-full
                  border
                  border-white/10
                  object-cover
                "
              />

              <span
                className="
                  absolute
                  bottom-0
                  right-0
                  h-3
                  w-3
                  rounded-full
                  border-2
                  border-[#070a0a]
                  bg-emerald-400
                "
              />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Amrit Rai
              </h3>

              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Divider */}

          <div className="my-6 h-px bg-white/[0.06]" />

          {/* Terminal Status */}

          <div className="font-mono text-[10px] leading-7">
            <div className="text-zinc-600">
              $ systemctl status developer
            </div>

            <div className="text-emerald-400">
              ● active (running)
            </div>

            <div className="mt-3 text-zinc-600">
              $ environment
            </div>

            <div className="text-zinc-400">
              NODE_ENV=production
            </div>

            <div className="text-zinc-400">
              STACK=MERN
            </div>

            <div className="text-zinc-400">
              STATUS=building
            </div>
          </div>

          {/* Bottom Command */}

          <div className="mt-6 rounded-lg border border-white/[0.05] bg-black/30 px-4 py-3">
            <span className="font-mono text-[9px] text-cyan-400/70">
              amrit@dev:~${" "}
            </span>

            <span className="font-mono text-[9px] text-zinc-500">
              git status
            </span>

            <span className="ml-1 inline-block h-3 w-1 animate-pulse bg-cyan-400/60 align-middle" />
          </div>
        </motion.div>

        {/* =================================================
            TECHNOLOGY BREADTH
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            rounded-2xl
            border
            border-white/[0.07]
            bg-[#070a0a]/80
            p-7
            backdrop-blur-xl
            xl:col-span-4
          "
        >
          {/* Heading */}

          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400/60">
                01 // stack
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                Technology
              </h3>
            </div>

            <div className="font-mono text-[9px] text-zinc-700">
              5 MODULES
            </div>
          </div>

          {/* Technologies */}

          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div key={tech.name}>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="text-sm"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                      {tech.name}
                    </span>
                  </div>

                  <span className="font-mono text-[9px] text-zinc-600">
                    {tech.level}%
                  </span>
                </div>

                <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.045]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.12,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: tech.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            QUICK STATS
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-3 xl:col-span-5"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.07]
                bg-[#070a0a]/80
                p-5
                backdrop-blur-xl
              "
            >
              {/* Hover Glow */}

              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  h-24
                  w-24
                  rounded-full
                  bg-cyan-400/[0.04]
                  blur-2xl
                  transition-opacity
                  group-hover:opacity-100
                "
              />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span
                    className={`
                      text-lg
                      ${
                        stat.accent === "cyan"
                          ? "text-cyan-400"
                          : stat.accent === "purple"
                          ? "text-purple-400"
                          : stat.accent === "green"
                          ? "text-emerald-400"
                          : "text-yellow-400"
                      }
                    `}
                  >
                    {stat.icon}
                  </span>

                  <span className="font-mono text-[8px] text-zinc-700">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-8">
                  <div className="text-2xl font-black tracking-tight text-white">
                    {stat.value}
                  </div>

                  <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-600">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =================================================
            GITHUB CONTRIBUTION CALENDAR
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.07]
            bg-[#070a0a]/80
            p-6
            backdrop-blur-xl
            xl:col-span-12
          "
        >
          {/* Top Line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-emerald-400/50
              to-transparent
            "
          />

          {/* Header */}

          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-emerald-400/60">
                  02 // activity.log
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold text-white">
                Contribution Activity
              </h3>
            </div>

            <div className="font-mono text-[9px] text-zinc-600">
              github.com/amrit22oct
            </div>
          </div>

          {/* Calendar */}

          <div
            className="
              overflow-x-auto
              rounded-xl
              border
              border-white/[0.04]
              bg-black/20
              p-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <GitHubCalendar
              username="amrit22oct"
              theme={calendarTheme}
              fontSize={11}
              blockSize={12}
              blockMargin={4}
              colorScheme="dark"
              hideTotalCount={false}
              showWeekdayLabels={true}
              style={{
                color: "#71717a",
              }}
            />
          </div>

          {/* Footer */}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="font-mono text-[9px] text-zinc-600">
              <span className="text-zinc-500">amrit@github:~$</span>{" "}
              contribution --visualize
            </div>

            <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-widest text-zinc-600">
              Less

              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#0a0f0d]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#063b25]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#087f4d]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#12a866]" />
              <span className="h-2.5 w-2.5 rounded-[2px] bg-[#21d17a]" />

              More
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM DECORATIVE TERMINAL TEXT
      ====================================================== */}

      <div className="pointer-events-none mt-8 hidden justify-between px-1 font-mono text-[8px] uppercase tracking-[0.25em] text-white/[0.08] md:flex">
        <span>connection: github</span>
        <span>protocol: https</span>
        <span>status: synchronized</span>
      </div>
    </section>
  );
};

export default GithubStats;
