// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaAward } from "react-icons/fa";

// const careerData = {
//   education: [
//     {
//       title: "B.E. Computer Science & Engineering",
//       sub: "IET, Dr. B.R. Ambedkar University, Agra",
//       date: "2021 – 2025",
//       tag: "Degree",
//       score: "CGPA: 6.5",
//       details: "Focused on Algorithm Design, DBMS, and Software Engineering."
//     },
//     {
//       title: "Web Development Training",
//       sub: "Internshala",
//       date: "2025",
//       tag: "Certification",
//       score: "84% Score",
//       details: "Specialized in MERN stack development and responsive UI design."
//     },
//     {
//       title: "Intermediate (CBSE)",
//       sub: "Dinapur Public School",
//       date: "2019 – 2021",
//       tag: "High School",
//       score: "61%",
//       details: "Science & Mathematics Stream."
//     }
//   ],
//   experience: [
//     {
//       title: "Full Stack Intern",
//       sub: "Edureka",
//       date: "2024",
//       tag: "Internship",
//       score: "Live Projects",
//       details: "Developed full-stack applications using React, Node.js, and MongoDB."
//     },
//     {
//       title: "Full Stack Training",
//       sub: "Internshala",
//       date: "2025",
//       tag: "Professional",
//       score: "A+ Grade",
//       details: "Engineered scalable backend architectures and API integrations."
//     }
//   ]
// };

// const TimelineItem = ({ item, index, type }) => (
//   <motion.div 
//     initial={{ opacity: 0, x: type === "edu" ? -20 : 20 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     transition={{ delay: index * 0.1 }}
//     className="relative pl-8 pb-12 group"
//   >
//     {/* Vertical Line Anchor */}
//     <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-[#00e0ff] to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />
    
//     {/* Icon Node */}
//     <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-[#00e0ff] shadow-[0_0_10px_#00e0ff]" />

//     <div className="bg-[#111] border border-white/5 p-6 rounded-sm hover:border-[#00e0ff]/40 transition-all duration-500 hover:bg-[#151515]">
//       <div className="flex justify-between items-start mb-2">
//         <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-2 py-1">
//           {item.tag}
//         </span>
//         <span className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
//           <FaCalendarAlt /> {item.date}
//         </span>
//       </div>
      
//       <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#ff4fff] transition-colors">
//         {item.title}
//       </h3>
//       <p className="text-zinc-400 text-sm mb-4 italic">{item.sub}</p>
      
//       <p className="text-zinc-500 text-xs leading-relaxed mb-4">
//         {item.details}
//       </p>

//       <div className="flex items-center gap-2 text-[10px] font-bold text-[#00ff90] uppercase tracking-tighter">
//         <FaAward /> {item.score}
//       </div>
//     </div>
//   </motion.div>
// );

// const Career = () => {
//   const [activeTab, setActiveTab] = useState("all");

//   return (
//     <section id="career" className="bg-[#050505] py-24 px-[5%] md:px-[10%] relative overflow-hidden">
//       {/* Background Decorative Text */}
//       <div className="absolute top-10 right-[-5%] text-[15vw] font-black text-white/[0.02] uppercase pointer-events-none select-none italic">
//         Journey
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <header className="mb-20">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-6"
//           >
//             Experience <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}>& Education</span>
//           </motion.h2>
          
//           {/* Custom Filter Toggle */}
//           <div className="flex gap-4 border-b border-white/5 pb-4">
//             {["all", "education", "experience"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`text-[10px] font-mono uppercase tracking-[0.3em] transition-all ${
//                   activeTab === tab ? "text-cyan-400 underline underline-offset-8" : "text-zinc-600 hover:text-zinc-300"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           {/* Education Column */}
//           {(activeTab === "all" || activeTab === "education") && (
//             <div>
//               <div className="flex items-center gap-4 mb-10">
//                 <FaGraduationCap className="text-cyan-400 text-2xl" />
//                 <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-zinc-500 italic">Academic Foundation</h3>
//               </div>
//               <div className="space-y-2">
//                 {careerData.education.map((edu, i) => (
//                   <TimelineItem key={i} item={edu} index={i} type="edu" />
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Experience Column */}
//           {(activeTab === "all" || activeTab === "experience") && (
//             <div>
//               <div className="flex items-center gap-4 mb-10">
//                 <FaBriefcase className="text-[#ff4fff] text-2xl" />
//                 <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-zinc-500 italic">Professional Trajectory</h3>
//               </div>
//               <div className="space-y-2">
//                 {careerData.experience.map((exp, i) => (
//                   <TimelineItem key={i} item={exp} index={i} type="exp" />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Cinematic Noise Layer */}
//       <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[1] bg-[url('https://res.cloudinary.com/dvwth98as/image/upload/v1710234567/noise_pc0qxw.png')]" />
//     </section>
//   );
// };

// export default Career;













import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaAward } from "react-icons/fa";

const careerData = {
  education: [
    {
      title: "B.E. Computer Science & Engineering",
      sub: "IET, Dr. B.R. Ambedkar University, Agra",
      date: "2021 – 2025",
      tag: "Degree",
      score: "CGPA: 6.5",
      details: "Focused on Algorithm Design, DBMS, and Software Engineering."
    },
    {
      title: "Web Development Training",
      sub: "Internshala",
      date: "2025",
      tag: "Certification",
      score: "84% Score",
      details: "Specialized in MERN stack development and responsive UI design."
    },
    {
      title: "Intermediate (CBSE)",
      sub: "Dinapur Public School",
      date: "2019 – 2021",
      tag: "High School",
      score: "61%",
      details: "Science & Mathematics Stream."
    }
  ],
  experience: [
    {
      title: "Full Stack Intern",
      sub: "Edureka",
      date: "2024",
      tag: "Internship",
      score: "Live Projects",
      details: "Developed full-stack applications using React, Node.js, and MongoDB."
    },
    {
      title: "Full Stack Training",
      sub: "Internshala",
      date: "2025",
      tag: "Professional",
      score: "A+ Grade",
      details: "Engineered scalable backend architectures and API integrations."
    }
  ]
};

const TimelineItem = ({ item, index, type }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-12 mb-12"
  >
    {/* Connector Line */}
    <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 to-transparent opacity-40" />
    
    {/* Icon Node */}
    <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#00e0ff]" />

    <div className="bg-[#111] border border-white/10 p-6 rounded-xl hover:bg-[#151515] hover:border-cyan-500 transition-all duration-500">
      <div className="flex justify-between items-start mb-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
          {item.tag || "N/A"}
        </span>
        <span className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
          <FaCalendarAlt /> {item.date || "N/A"}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors">
        {item.title || "No Title"}
      </h3>
      <p className="text-zinc-400 text-sm mb-3 italic">{item.sub || "No Subtitle"}</p>
      <p className="text-zinc-500 text-xs leading-relaxed mb-3">
        {item.details || "No details available."}
      </p>

      <div className="flex items-center gap-2 text-[10px] font-bold text-[#00ff90] uppercase tracking-tighter">
        <FaAward /> {item.score || "N/A"}
      </div>
    </div>
  </motion.div>
);

const Career = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className=" py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background Text */}
      {/* <div className="absolute top-10 right-[8%] text-[15vw] font-black text-white/[0.04] uppercase pointer-events-none select-none italic">
        Journey
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-6"
          >
            Experience <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> & Education</span>
          </motion.h2>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-white/10 pb-4">
            {["all", "education", "experience"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[10px] font-mono uppercase tracking-[0.3em] transition-all ${
                  activeTab === tab ? "text-cyan-400 underline underline-offset-8" : "text-zinc-600 hover:text-zinc-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        {/* Timeline Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          {(activeTab === "all" || activeTab === "education") && (
            <div>
              <div className="flex items-center gap-4 mb-10">
                <FaGraduationCap className="text-cyan-400 text-2xl" />
                <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-white italic">Academic Foundation</h3>
              </div>
              <div className="space-y-6">
                {careerData.education.map((edu, i) => (
                  <TimelineItem key={i} item={edu} index={i} type="edu" />
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {(activeTab === "all" || activeTab === "experience") && (
            <div>
              <div className="flex items-center gap-4 mb-10">
                <FaBriefcase className="text-[#ff4fff] text-2xl" />
                <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-white italic">Professional Trajectory</h3>
              </div>
              <div className="space-y-6">
                {careerData.experience.map((exp, i) => (
                  <TimelineItem key={i} item={exp} index={i} type="exp" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cinematic Noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0 bg-[url('https://res.cloudinary.com/dvwth98as/image/upload/v1710234567/noise_pc0qxw.png')]" />
    </section>
  );
};

export default Career;
