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

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
  FaStar,
  FaCode,
  FaHistory,
  FaTerminal,
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
  // These represent the data points from your GitHub: amrit22oct

  const contributionGrid = Array.from({ length: 280 }, () =>
    Math.floor(Math.random() * 4)
  );

  const stats = [
    {
      label: "Repositories",
      value: "20+",
      icon: <FaCodeBranch />,
      color: "text-cyan-400",
    },
    {
      label: "Primary Stack",
      value: "MERN",
      icon: <FaCode />,
      color: "text-purple-500",
    },
    {
      label: "Commit Velocity",
      value: "High",
      icon: <FaHistory />,
      color: "text-green-400",
    },
    {
      label: "Contributed",
      value: "Open Source",
      icon: <FaStar />,
      color: "text-yellow-400",
    },
  ];

  const languages = [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      level: "90%",
      color: "#f7df1e",
    },
    { name: "React", icon: <SiReact />, level: "85%", color: "#61dafb" },
    { name: "Node.js", icon: <SiNodedotjs />, level: "80%", color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb />, level: "75%", color: "#47a248" },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      level: "95%",
      color: "#06b6d4",
    },
  ];

  const calendarTheme = {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };
  return (
    <section
      id="github-intelligence"
      className=" py-24 px-6 md:px-[10%] relative overflow-hidden"
    >
      {/* 1. HEADER: THE REPO IDENTITY */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaGithub className="text-4xl text-white" />
            <span className="font-mono text-cyan-500 text-xs tracking-[0.4em]">
              SOURCE_CORE // AMRIT22OCT
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
            Github{" "}
            <span
              className="text-transparent "
              style={{ WebkitTextStroke: "1px #00e0ff" }}
            >
              Stats
            </span>
          </h2>
        </div>

        {/* <a
          href="https://github.com/amrit22oct"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-white text-black font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-cyan-500 transition-colors rounded-sm"
        >
          View Live Profile
        </a> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 2. STATS BENTO (Left Column) */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl flex flex-col justify-between aspect-square hover:border-cyan-500/50 transition-all"
            >
              <div className={`text-2xl ${stat.color}`}>{stat.icon}</div>
              <div>
                <h4 className="text-3xl font-black text-white">{stat.value}</h4>
                <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-tighter">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. REPO ACTIVITY GRID (Center Column) */}
        <div className="lg:col-span-5 bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-cyan-500" /> Technology <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> Breadth</span>
          </h3>

          <div className="space-y-6 w-full p-5 ">
            {languages.map((lang, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  <span
                    className="flex items-center gap-2"
                    style={{ color: lang.color }}
                  >
                    {lang.icon} {lang.name}
                  </span>
                  <span>{lang.level}</span>
                </div>
                <div className="h-[2px] w-full bg-zinc-900 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: lang.level }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full"
                    style={{ backgroundColor: lang.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. VISUAL IDENTITY (Right Column) */}
        <div className="lg:col-span-3 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/5 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 animate-pulse" />
            <img
              src="https://github.com/amrit22oct.png"
              alt="Amrit"
              className="w-32 h-32 rounded-full border-2 border-white/10 relative z-10"
            />
          </div>
          <h4 className="text-white font-bold text-lg mb-1">Amrit22Oct</h4>
          <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest italic mb-6">
            MERN System Engineer
          </p>

          <div className="w-full bg-black/40 p-4 rounded-lg border border-white/5">
            <p className="text-[9px] font-mono text-cyan-400 text-left">
              &gt; Status: Online <br />
              &gt; Location: Remote <br />
              &gt; Latency: 22ms
            </p>

           
          </div>

          <a
          href="https://github.com/amrit22oct"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 m-2  text-black font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-cyan-500 transition-colors  text-white w-full bg-black/40 p-4 rounded-lg border border-white/5"
        >
          View Live Profile
        </a>
         

        </div>
      </div>

      {/* 5. BACKGROUND DECOR */}
      {/* <div className="absolute bottom-[-10%] left-[-5%] text-[20vw] font-black text-white/[0.02] uppercase pointer-events-none italic">
        AMRIT
      </div> */}

      <div className="lg:col-span-4 bg-[#080808] border border-white/5 p-8 mt-3 rounded-3xl flex flex-col">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-cyan-500" /> Github Contribution
        </h3>

        <div className="flex justify-center items-center overflow-x-auto p-4 no-scrollbar">
          {/* The Library handles the month labels and year automatically */}

          <GitHubCalendar
            username="amrit22oct"
            theme={calendarTheme} // your color blocks
            fontSize={12}
            blockSize={12}
            blockMargin={4}
            colorScheme="dark"
            hideTotalCount={false}
            showWeekdayLabels={true}
            style={{
              color: "#cbd5e1", // Light gray for labels
            }}
            // transformData={(data) =>
            //   data.filter((d) => new Date(d.date).getFullYear() === year)
            // }
          />
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
