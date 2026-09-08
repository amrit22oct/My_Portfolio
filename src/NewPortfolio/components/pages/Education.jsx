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
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ delay: index * 0.1 }}
//     className="relative pl-12 mb-12"
//   >
//     {/* Connector Line */}
//     <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 to-transparent opacity-40" />
    
//     {/* Icon Node */}
//     <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#00e0ff]" />

//     <div className="bg-[#111] border border-white/10 p-6 rounded-xl hover:bg-[#151515] hover:border-cyan-500 transition-all duration-500">
//       <div className="flex justify-between items-start mb-2">
//         <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
//           {item.tag || "N/A"}
//         </span>
//         <span className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
//           <FaCalendarAlt /> {item.date || "N/A"}
//         </span>
//       </div>

//       <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors">
//         {item.title || "No Title"}
//       </h3>
//       <p className="text-zinc-400 text-sm mb-3 italic">{item.sub || "No Subtitle"}</p>
//       <p className="text-zinc-500 text-xs leading-relaxed mb-3">
//         {item.details || "No details available."}
//       </p>

//       <div className="flex items-center gap-2 text-[10px] font-bold text-[#00ff90] uppercase tracking-tighter">
//         <FaAward /> {item.score || "N/A"}
//       </div>
//     </div>
//   </motion.div>
// );

// const Career = () => {
//   const [activeTab, setActiveTab] = useState("all");

//   return (
//     <section className=" py-24 px-6 md:px-16 relative overflow-hidden">
//       {/* Background Text */}
//       {/* <div className="absolute top-10 right-[8%] text-[15vw] font-black text-white/[0.04] uppercase pointer-events-none select-none italic">
//         Journey
//       </div> */}

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <header className="mb-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-6"
//           >
//             Experience <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> & Education</span>
//           </motion.h2>

//           {/* Tabs */}
//           <div className="flex gap-6 border-b border-white/10 pb-4">
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

//         {/* Timeline Columns */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           {/* Education */}
//           {(activeTab === "all" || activeTab === "education") && (
//             <div>
//               <div className="flex items-center gap-4 mb-10">
//                 <FaGraduationCap className="text-cyan-400 text-2xl" />
//                 <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-white italic">Academic Foundation</h3>
//               </div>
//               <div className="space-y-6">
//                 {careerData.education.map((edu, i) => (
//                   <TimelineItem key={i} item={edu} index={i} type="edu" />
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Experience */}
//           {(activeTab === "all" || activeTab === "experience") && (
//             <div>
//               <div className="flex items-center gap-4 mb-10">
//                 <FaBriefcase className="text-[#ff4fff] text-2xl" />
//                 <h3 className="text-xs font-mono uppercase tracking-[0.5em] text-white italic">Professional Trajectory</h3>
//               </div>
//               <div className="space-y-6">
//                 {careerData.experience.map((exp, i) => (
//                   <TimelineItem key={i} item={exp} index={i} type="exp" />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Cinematic Noise */}
//       <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0 bg-[url('https://res.cloudinary.com/dvwth98as/image/upload/v1710234567/noise_pc0qxw.png')]" />
//     </section>
//   );
// };

// export default Career;
















import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const careerData = [
  {
    id: 1,
    year: "2021",
    period: "2021 — 2025",
    type: "education",
    eyebrow: "THE FOUNDATION",
    title: "B.E. Computer Science & Engineering",
    organization: "IET, Dr. B.R. Ambedkar University, Agra",
    description:
      "Started my journey into Computer Science and built a strong foundation in programming, algorithms, databases and software engineering.",
    result: "CGPA 6.5",
    skills: ["Algorithms", "DBMS", "Software Engineering"],
  },
  {
    id: 2,
    year: "2024",
    period: "2024",
    type: "experience",
    eyebrow: "FIRST REAL-WORLD EXPERIENCE",
    title: "Full Stack Intern",
    organization: "Edureka",
    description:
      "Gained practical experience building full-stack applications while working with frontend interfaces, backend APIs and database-driven systems.",
    result: "Live Projects",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    year: "2025",
    period: "2025",
    type: "education",
    eyebrow: "SPECIALIZATION",
    title: "Web Development Training",
    organization: "Internshala",
    description:
      "Strengthened my modern web development skills with a focus on MERN stack development, responsive interfaces and API integration.",
    result: "84% Score",
    skills: ["MERN", "REST APIs", "Responsive UI"],
  },
  {
    id: 4,
    year: "2025",
    period: "2025 — 2026",
    type: "experience",
    eyebrow: "PROFESSIONAL GROWTH",
    title: "Full Stack Developer Intern",
    organization: "Tycho Technology Pvt. Ltd.",
    description:
      "Worked on real-world applications involving authentication, REST APIs, databases and full-stack application architecture.",
    result: "6 Months",
    skills: ["MERN", "JWT", "REST APIs", "MongoDB"],
  },
  {
    id: 5,
    year: "2026",
    period: "2026 — PRESENT",
    type: "experience",
    eyebrow: "EXPANDING THE STACK",
    title: "MERN + Spring Boot",
    organization: "Building Beyond One Ecosystem",
    description:
      "Expanding beyond the JavaScript ecosystem into Java and Spring Boot while working with Spring Security, Hibernate, JPA, SQL and real-time communication.",
    result: "CURRENTLY BUILDING",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "MySQL",
    ],
    current: true,
  },
];

const Career = () => {
  const [activeIndex, setActiveIndex] = useState(4);

  const active = careerData[activeIndex];

  const next = () => {
    setActiveIndex((prev) =>
      prev === careerData.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setActiveIndex((prev) =>
      prev === 0 ? careerData.length - 1 : prev - 1
    );
  };

  const selectYear = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="career"
      className="
        relative
        min-h-screen
        overflow-hidden
      
        px-5
        py-28
        text-white
        md:px-10
        md:py-36
        lg:px-16
        xl:px-24
      "
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

     


      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="mb-20 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-cyan-400" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-cyan-300/70
                "
              >
                Career / Experience
              </span>
            </div>

            <h2
              className="
                max-w-5xl
                text-[clamp(4rem,9vw,9rem)]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.09em]
                !bg-gradient-to-r
                from-white
                via-cyan-100
                to-cyan-400
                !bg-clip-text
                !text-transparent
              "
            >
              The story
              <br />
              so far.
            </h2>

            <p
              className="
                mt-10
                max-w-xl
                text-sm
                leading-7
                text-white/45
                md:text-base
              "
            >
              A timeline of the places, experiences and technologies
              that shaped the way I build software.
            </p>
          </div>

          {/* Current status */}

          <div
            className="
              hidden
              lg:block
              lg:pb-2
            "
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-cyan-400
                    opacity-50
                  "
                />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                Currently building
              </span>
            </div>

            <p className="mt-3 text-right text-sm font-semibold text-white/80">
              MERN + Spring Boot
            </p>
          </div>
        </div>

        {/* =========================================================
            YEAR NAVIGATION
        ========================================================== */}

        <div className="relative mb-12">
          {/* line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-[18px]
              h-px
              bg-white/[0.08]
            "
          />

          {/* progress */}

          <motion.div
            className="
              absolute
              left-0
              top-[18px]
              h-px
              bg-gradient-to-r
              from-cyan-400
              to-cyan-200
            "
            animate={{
              width: `${(activeIndex / (careerData.length - 1)) * 100}%`,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          />

          <div className="relative flex justify-between">
            {careerData.map((item, index) => {
              const activeYear = index === activeIndex;

              return (
                <button
                  key={item.id}
                  onClick={() => selectYear(index)}
                  className="group flex flex-col items-center"
                >
                  <motion.span
                    animate={{
                      scale: activeYear ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.35 }}
                    className={`
                      relative
                      z-10
                      h-9
                      w-9
                      rounded-full
                      border
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500
                      ${
                        activeYear
                          ? "border-cyan-300 bg-[#050608] shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                          : "border-white/10 bg-[#050608] group-hover:border-white/30"
                      }
                    `}
                  >
                    <span
                      className={`
                        h-1.5
                        w-1.5
                        rounded-full
                        transition-all
                        ${
                          activeYear
                            ? "bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                            : "bg-white/20 group-hover:bg-white/50"
                        }
                      `}
                    />
                  </motion.span>

                  <span
                    className={`
                      mt-4
                      text-[11px]
                      font-bold
                      tracking-[0.12em]
                      transition-colors
                      md:text-sm
                      ${
                        activeYear
                          ? "text-white"
                          : "text-white/20 group-hover:text-white/50"
                      }
                    `}
                  >
                    {item.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            MAIN STORY
        ========================================================== */}

        <div
          className="
            relative
            min-h-[620px]
            overflow-hidden
            rounded-[32px]
            border
            border-white/[0.07]
            bg-white/[0.018]
          "
        >
          {/* giant background year */}

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="
                pointer-events-none
                absolute
                right-[-3%]
                top-1/2
                -translate-y-1/2
                select-none
                text-[clamp(12rem,30vw,34rem)]
                font-black
                leading-none
                tracking-[-0.1em]
                text-white/[0.018]
              "
            >
              {active.year}
            </motion.div>
          </AnimatePresence>

          {/* cyan edge */}

          <motion.div
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-[2px]
              bg-gradient-to-b
              from-transparent
              via-cyan-400
              to-transparent
            "
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                grid
                min-h-[620px]
                gap-16
                p-8
                md:p-12
                lg:grid-cols-[0.9fr_1.5fr]
                lg:p-16
                xl:p-20
              "
            >
              {/* LEFT */}

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.025]
                        text-cyan-300
                      "
                    >
                      {active.type === "education" ? (
                        <FaGraduationCap size={14} />
                      ) : (
                        <FaBriefcase size={14} />
                      )}
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                      {active.eyebrow}
                    </span>
                  </div>

                  <div className="mt-16">
                    <span className="block text-xs font-medium uppercase tracking-[0.2em] text-white/25">
                      {active.period}
                    </span>

                    <motion.div
                      className="
                        mt-5
                        h-px
                        w-16
                        bg-cyan-400
                      "
                      initial={{ width: 0 }}
                      animate={{ width: 64 }}
                      transition={{ duration: 0.6 }}
                    />

                    <span
                      className="
                        mt-5
                        block
                        text-7xl
                        font-black
                        leading-none
                        tracking-[-0.08em]
                        text-white/[0.08]
                        md:text-8xl
                      "
                    >
                      {active.year}
                    </span>
                  </div>
                </div>

                <div className="mt-12">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/25">
                    Outcome
                  </span>

                  <p className="mt-3 text-lg font-semibold text-white/80">
                    {active.result}
                  </p>
                </div>
              </div>

              {/* RIGHT */}

              <div className="flex flex-col justify-center">
                <div className="max-w-3xl">
                  <h3
                    className="
                      text-[clamp(2.7rem,5vw,6rem)]
                      font-black
                      leading-[0.9]
                      tracking-[-0.075em]
                      !bg-gradient-to-r
                      from-white
                      via-cyan-100
                      to-cyan-400
                      !bg-clip-text
                      !text-transparent
                    "
                  >
                    {active.title}
                  </h3>

                  <p
                    className="
                      mt-6
                      text-base
                      font-medium
                      text-white/60
                      md:text-lg
                    "
                  >
                    {active.organization}
                  </p>

                  <p
                    className="
                      mt-10
                      max-w-2xl
                      text-sm
                      leading-8
                      text-white/40
                      md:text-base
                    "
                  >
                    {active.description}
                  </p>

                  {/* Skills */}

                  <div className="mt-10 flex flex-wrap gap-2">
                    {active.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-white/[0.08]
                          bg-white/[0.025]
                          px-4
                          py-2
                          text-[11px]
                          font-medium
                          text-white/50
                          transition-colors
                          hover:border-cyan-400/30
                          hover:text-cyan-200
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* navigation */}

                <div
                  className="
                    mt-16
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/[0.07]
                    pt-7
                  "
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(careerData.length).padStart(2, "0")}
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={previous}
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.02]
                        text-white/40
                        transition-all
                        hover:border-white/20
                        hover:bg-white/[0.05]
                        hover:text-white
                      "
                    >
                      <FaArrowLeft size={12} />
                    </button>

                    <button
                      onClick={next}
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.02]
                        text-white/40
                        transition-all
                        hover:border-cyan-400/40
                        hover:bg-cyan-400/[0.05]
                        hover:text-cyan-300
                      "
                    >
                      <FaArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================== */}

        <div className="mt-24 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/20">
              And the journey continues
            </span>

            <h4
              className="
                mt-5
                text-[clamp(3.5rem,7vw,7rem)]
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.09em]
                !bg-gradient-to-r
                from-white
                via-cyan-100
                to-cyan-400
                !bg-clip-text
                !text-transparent
              "
            >
              More to
              <br />
              build.
            </h4>
          </div>

          <div className="max-w-xs md:text-right">
            <p className="text-sm leading-7 text-white/30">
              Learning never really stops. Every project adds another
              layer to the way I think, design and engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;