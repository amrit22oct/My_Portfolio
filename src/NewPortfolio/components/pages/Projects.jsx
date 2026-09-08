// import React from "react";
// import { motion } from "framer-motion";
// import {
//   SiMongodb,
//   SiExpress,
//   SiReact,
//   SiNodedotjs,
//   SiTailwindcss,
//   SiJavascript,
//   SiPython,
// } from "react-icons/si";
// import { FaServer, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const projects = [
//   {
//     name: "Web Career Portal",
//     description:
//       "A modern job portal connecting students and recruiters, built with MERN stack and Tailwind CSS.",
//     tools: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss],
//     github: "https://github.com/amrit22oct/Web_career_portal.git",
//     live: "https://web-career-portal-5.onrender.com",
//   },
//   {
//     name: "Blog Website",
//     description:
//       "A sleek blog platform that allows users to create, edit, and comment in real-time.",
//     tools: [SiJavascript, SiReact, SiExpress, SiMongodb, FaServer],
//     github: "https://github.com/yourusername/blog-app",
//     live: "https://blog-app.vercel.app/",
//   },
//   {
//     name: "Chit Chat",
//     description:
//       "A real-time messaging app using Socket.IO and MERN stack with smooth UI.",
//     tools: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss],
//     github: "https://github.com/amrit22oct/Chit_chat.git",
//     live: "https://chit-chat-y7r4.onrender.com",
//   },
//   {
//     name: "Jarvis Chatbot",
//     description:
//       "An AI-powered chatbot integrating Gemini API for natural conversations.",
//     tools: [SiReact, SiNodedotjs, SiExpress, SiMongodb],
//     github: "https://github.com/amrit22oct/jarvis.git",
//     live: "https://jarvis-jpyh.onrender.com/",
//   },
//   {
//     name: "Object Detection",
//     description:
//       "Real-time object detection using Python, OpenCV, and YOLOv5.",
//     tools: [SiPython, SiReact, SiNodedotjs, SiExpress],
//     github: "https://github.com/amrit22oct/Object_detection.git",
//     live: "https://object-detection-live.vercel.app/",
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="w-full bg-[#0a0a0a] text-white px-6 md:px-12 lg:px-24 py-20"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold text-[#00e0ff] tracking-wide"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           My Projects
//         </motion.h1>
//         <p className="text-gray-400 mt-3 text-base md:text-lg">
//           A showcase of my recent work — built with modern technologies.
//         </p>
//       </div>

//       {/* Project Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             viewport={{ once: true }}
//             className="relative bg-[#121212] border border-[#1f1f1f] p-6 flex flex-col justify-between shadow-lg cursor-pointer 
//             transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.008] hover:drop-shadow-[0_0_6px_#00e0ff]"
//           >
//             {/* Content */}
//             <div className="flex flex-col gap-3">
//               <h2 className="text-xl font-semibold text-[#00e0ff] group-hover:text-[#00ff90] transition-colors duration-300">
//                 {project.name}
//               </h2>
//               <p className="text-gray-300 text-sm md:text-base leading-relaxed">
//                 {project.description}
//               </p>

//               {/* Tools */}
//               <div className="flex flex-wrap gap-2 text-[#00ff90] text-lg mt-2">
//                 {project.tools.map((Tool, idx) => (
//                   <Tool key={idx} className="transition-transform duration-300 hover:scale-110" />
//                 ))}
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-3 mt-4">
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-[#00e0ff] text-[#00e0ff] hover:bg-[#00e0ff] hover:text-black transition-all duration-200"
//               >
//                 <FaGithub /> Code
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-[#00e0ff] text-black font-semibold hover:bg-[#00bcd4] transition-all duration-200"
//               >
//                 <FaExternalLinkAlt /> Live
//               </motion.a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;









// import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { projects } from "./data";

// const Projects = () => {
//   return (
//     <div className="bg-[#030303] text-white">
//       {/* Cinematic Intro */}
//       <section className="h-screen flex flex-col items-center justify-center text-center px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
//         >
//           <span className="text-[#00e0ff] font-mono tracking-[0.5em] uppercase text-xs mb-6 block">
//             Portfolio Vol. III
//           </span>
//           <h1 className="text-[15vw] md:text-[10vw] font-black leading-none tracking-tighter uppercase italic">
//             Impact<span className="not-italic text-outline">Full</span>
//           </h1>
//           <p className="mt-8 text-gray-500 max-w-lg mx-auto text-lg font-light leading-relaxed">
//             A deep dive into high-fidelity interactions and the future of digital architecture.
//           </p>
//         </motion.div>
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-[#00e0ff] to-transparent"></div>
//       </section>

//       {/* The Stacked Gallery */}
//       <div className="relative">
//         {projects.map((project, index) => (
//           <ProjectCard key={project.id} project={project} index={index} total={projects.length} />
//         ))}
//       </div>

//       <footer className="h-[50vh] flex items-center justify-center bg-white text-black">
//         <h2 className="text-6xl font-black italic tracking-tighter">LET'S BUILD.</h2>
//       </footer>
//     </div>
//   );
// };

// const ProjectCard = ({ project, index, total }) => {
//   const navigate = useNavigate();
//   const container = useRef(null);
  
//   // Track scroll progress for this specific card
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "start start"]
//   });

//   // Sophisticated Parallax & Scale effects
//   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
//   const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

//   return (
//     <div ref={container} className="h-screen sticky top-0 flex items-center justify-center overflow-hidden">
//       <motion.div 
//         style={{ scale, opacity, y }}
//         className="relative w-[90%] md:w-[80%] h-[70vh] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
//       >
//         {/* Background Layer (Visual) */}
//         <div className="absolute inset-0 z-0 bg-[#0f0f0f]">
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 z-10" />
          
//           {/* Big Background Text */}
//           <div className="absolute inset-0 flex items-center justify-center select-none overflow-hidden">
//             <span className="text-[40vw] font-black text-white/[0.02] leading-none uppercase">
//               {project.name.charAt(0)}
//             </span>
//           </div>
          
//           {/* Mockup/Image Placeholder Area */}
//           <div className="absolute inset-0 flex items-center justify-center">
//              <motion.div 
//                whileHover={{ scale: 1.05 }}
//                className="w-[80%] h-[60%] bg-zinc-900/50 backdrop-blur-3xl border border-white/5 rounded-xl shadow-[0_0_100px_rgba(0,0,0,0.5)] flex items-center justify-center"
//              >
//                 <span className="text-2xl font-mono text-white/20 italic tracking-widest uppercase">
//                   {project.name} Visual
//                 </span>
//              </motion.div>
//           </div>
//         </div>

//         {/* Content Layer (UI) */}
//         <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 flex flex-col md:flex-row justify-between items-end gap-8">
//           <div className="max-w-xl">
//             <div className="flex items-center gap-4 mb-4">
//               <span className="px-3 py-1 rounded-full bg-[#00e0ff] text-black text-[10px] font-bold uppercase">
//                 New Release
//               </span>
//               <span className="text-white/40 font-mono text-sm tracking-tighter">
//                 {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
//               </span>
//             </div>
//             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 italic">
//               {project.name}
//             </h2>
//             <p className="text-gray-400 text-lg line-clamp-2 md:line-clamp-none">
//               {project.description}
//             </p>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => navigate(`/projects/${project.id}`)}
//             className="whitespace-nowrap px-10 py-5 rounded-full border border-white text-white font-bold tracking-widest uppercase text-xs transition-colors"
//           >
//             Explore Case Study
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Projects;






// import React, { useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { projects } from "./data";

// gsap.registerPlugin(ScrollTrigger);

// const Projects = () => {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // This calculates the total width of the internal track
//     const totalWidth = sectionRef.current.offsetWidth;
//     // We want to scroll until the end of the track is at the end of the screen
//     const scrollAmount = totalWidth - window.innerWidth;

//     const ctx = gsap.context(() => {
//       gsap.to(sectionRef.current, {
//         x: -scrollAmount,
//         ease: "none",
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: `+=${totalWidth}`, // Distance to scroll is now based on content size
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true, // Recalculates if window is resized
//         },
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className=" overflow-x-hidden">
//       {/* 1. Pre-section Intro (Standard Vertical) */}
//       {/* <div className="h-[40vh] flex items-end px-[10vw] pb-10">
//         <p className="text-zinc-500 font-mono text-xs tracking-[0.5em] uppercase">
//           Archive 2024 — 2026
//         </p>
//       </div> */}

//       {/* 2. The Pinned Section */}
//       <div ref={triggerRef} className="overflow-hidden">
//         <div 
//           ref={sectionRef} 
//           className="h-screen flex items-center relative w-fit whitespace-nowrap px-[10vw]"
//         >
//           {/* Headline Slide */}
//           <div className="w-[70vw] md:w-[35vw] flex-shrink-0 mr-[10vw]">
//             <h2 className="text-[12vw] font-black uppercase leading-[0.8] text-white italic tracking-tighter">
//               Featured <br />
//               <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}>
//                 Project's
//               </span>
//             </h2>
//           </div>

//           {/* Project Mapping */}
//           <div className="flex gap-[5vw]">
//             {projects.map((project, index) => (
//               <ProjectCard 
//                 key={project.id} 
//                 project={project} 
//                 index={index} 
//                 navigate={navigate} 
//               />
//             ))}
//           </div>

//           {/* Outro Slide */}
//           <div className="w-[60vw] flex-shrink-0 ml-[15vw] pr-[10vw]">
//             <h2 className="text-[8vw] font-bold text-white uppercase leading-none">
//               Ready to Build More<br />  <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}>Project.</span>
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* 3. Post-section (Standard Vertical) */}
//       {/* <div className="h-[60vh] flex items-center justify-center border-t border-zinc-900">
//         <div className="text-center">
//             <p className="text-zinc-600 mb-4 font-mono uppercase tracking-widest text-xs">Back to vertical</p>
//             <h2 className="text-white text-4xl font-light">More Below</h2>
//         </div>
//       </div> */}
//     </div>
//   );
// };




// const ProjectCard = ({ project, index, navigate }) => {
//   return (
//     <motion.div 
//       className="w-[85vw] md:w-[45vw] flex-shrink-0 group"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 0.1 }}
//     >
//       {/* Metadata */}
//       <div className="flex justify-between items-end mb-6">
//         <span className="font-mono text-cyan-300  text-md">
//           № 0{index + 1}
//         </span>

//         <div className="flex gap-2">
//           {project.techStack?.slice(0, 2).map((t) => (
//             <span
//               key={t}
//               className="text-sm uppercase tracking-tighter text-cyan-300 border-2 border-y-emerald-300 px-2 py-0.5 rounded"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>
      
//       {/* Image Container */}
//       {/* <div 
//         onClick={() => navigate(`/projects/${project.id}`)}
//         className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/60 cursor-pointer"
//       >
      
//         <motion.img
//           src={project.image}
//           alt={project.name}
//           className="absolute inset-0 w-full h-full object-cover"
//           whileHover={{ scale: 1.08 }}
//           transition={{ duration: 0.6 }}
//         />

        
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        
//         <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

       
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
//           <div className="w-28 h-28 rounded-full bg-white text-black flex flex-col items-center justify-center font-black text-[10px] uppercase leading-none tracking-tighter shadow-2xl">
//             <span>View</span>
//             <span className="text-lg">↗</span>
//           </div>
//         </div>
//       </div> */}

// <div
//   onClick={() => navigate(`/projects/${project.id}`)}
//   className="group relative aspect-[16/10] overflow-hidden rounded-2xl 
//   cursor-pointer bg-[#0f172a]/40 border border-white/10 backdrop-blur-sm
//   transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
// >
//   {/* 1. Animated Mesh Gradient (Background) */}
//   <div className="absolute inset-0 bg-gradient-to-br 
//   from-cyan-500/10 via-transparent to-purple-500/10 
//   opacity-60 group-hover:opacity-100 transition duration-700" />

//   {/* 2. Focused Radial Glow */}
//   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
//   bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)]" />

//   {/* 3. Main Content Container */}
//   <div className="relative z-10 h-full flex flex-col p-6">
    
//     {/* Top Label (Small & Elegant) */}
//     <div className="flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
//        <span className="text-[10px] tracking-[0.3em] text-cyan-400 uppercase font-bold">Project_Log</span>
//        <span className="text-[10px] text-white/40">ID: {project.id}</span>
//     </div>

//     {/* CENTERED PROJECT NAME */}
//     <div className="flex-1 flex flex-col items-center justify-center text-center">
//       <h2 className="text-3xl md:text-4xl font-black text-white 
//       tracking-tighter transition-all duration-500 
//       group-hover:scale-110 group-hover:text-cyan-400">
//         {project.name}
//       </h2>
//       {/* Decorative Line under name */}
//       <div className="w-0 group-hover:w-12 h-[2px] bg-cyan-500 transition-all duration-500 mt-2" />
//     </div>

//     {/* Bottom Section */}
//     <div className="flex items-center justify-between">
//       <span className="text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
//         View_Details
//       </span>

//       <div className="w-10 h-10 rounded-full border border-white/10 
//       flex items-center justify-center text-white
//       transition-all duration-500 
//       group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-black group-hover:rotate-45">
//         ↗
//       </div>
//     </div>
//   </div>

//   {/* 4. Scanning Line Overlay (Hacker aesthetic) */}
//   <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/20 group-hover:animate-[scan_2s_linear_infinite] pointer-events-none" />

//   <style jsx>{`
//     @keyframes scan {
//       0% { top: 0%; opacity: 0; }
//       50% { opacity: 1; }
//       100% { top: 100%; opacity: 0; }
//     }
//   `}</style>
// </div>

      
//       <div className="mt-8 space-y-4">
//         <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase group-hover:text-cyan-400 transition-colors">
          
//         <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}>{project.name} </span>
//         </h3>

//         <p className="text-white text-sm max-w-sm leading-relaxed whitespace-normal line-clamp-2 italic font-light">
//           {project.description}
//         </p>
//       </div>
//     </motion.div>
//   );
// };


// export default Projects;










import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "./data";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      const horizontalTween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const refresh = () => ScrollTrigger.refresh();

      window.addEventListener("resize", refresh);

      const images = track.querySelectorAll("img");

      images.forEach((image) => {
        if (!image.complete) {
          image.addEventListener("load", refresh);
        }
      });

      ScrollTrigger.refresh();

      return () => {
        horizontalTween.kill();
        window.removeEventListener("resize", refresh);

        images.forEach((image) => {
          image.removeEventListener("load", refresh);
        });
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden  text-white"
    >
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

 

      {/* ===================================================== */}
      {/* HORIZONTAL TRACK */}
      {/* ===================================================== */}

      <div
        ref={trackRef}
        className="relative flex h-screen w-max items-center"
      >
        {/* ================================================= */}
        {/* INTRO */}
        {/* ================================================= */}

        <Intro projects={projects} />

        {/* ================================================= */}
        {/* PROJECTS */}
        {/* ================================================= */}

        <div className="flex items-center gap-[7vw] px-[6vw]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              navigate={navigate}
            />
          ))}
        </div>

        {/* ================================================= */}
        {/* OUTRO */}
        {/* ================================================= */}

        <Outro />
      </div>

      {/* ===================================================== */}
      {/* FIXED UI */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute bottom-7 left-[6vw] right-[6vw] flex items-center justify-between">
        <span className="font-bold text-[8px] uppercase tracking-[0.35em]  !bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             bg-clip-text
             !text-transparent ">
          AMRIT RAI / WORK
        </span>

        <span className="hidden font-bold text-[8px] uppercase tracking-[0.35em]  !bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             bg-clip-text
             !text-transparent md:block">
          Horizontal Archive
        </span>

        <span className="font-bold text-[8px] uppercase tracking-[0.35em]  !bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             bg-clip-text
             !text-transparent">
          2021 — 2026
        </span>
      </div>
    </section>
  );
};

/* ========================================================= */
/* INTRO */
/* ========================================================= */

const Intro = ({ projects }) => {
  return (
    <div className="relative flex h-screen w-screen flex-shrink-0 items-center px-[6vw]">
      {/* LEFT VERTICAL LABEL */}

      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 md:block">
        <span className="font-mono text-[8px] uppercase tracking-[0.5em] text-cyan-100 ">
          Selected digital work
        </span>
      </div>

      <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.72fr]">
        {/* ================================================= */}
        {/* LEFT */}
        {/* ================================================= */}

        <div>
          {/* eyebrow */}

          {/* <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-[9px] text-cyan-400">
              01
            </span>

            <span className="h-px w-10 bg-white/10" />

            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/25">
              Selected Projects
            </span>
          </div> */}
           <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-white" />

            <span
              className="
             text-2xl
             uppercase
             tracking-[0.35em]
             font-extrabold
           
             bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             bg-clip-text
             text-transparent
             drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
           "
            >
              SELECTED PROJECTS
            </span>
          </div>

          {/* heading */}

          <div className="text-[17vw]  !bg-gradient-to-r
             from-white
             via-cyan-200
             to-cyan-400
             !bg-clip-text
             !text-transparent  uppercase leading-[0.72] tracking-[-0.1em] sm:text-[14vw] lg:text-[9vw] py-4">
            Things
            <br />

            <span
              className="text-transparent py-2 "
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,.55)",
              }}
            >
              I've built.
            </span>
          </div>

          {/* description */}

          <p className="mt-10 max-w-xl text-sm leading-7 text-white/90 md:text-base">
            Interfaces, APIs, real-time systems and full-stack applications
            built while exploring the intersection between thoughtful design
            and solid engineering.
          </p>

          {/* STACK */}

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Spring Boot",
              "MongoDB",
              "MySQL",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] uppercase tracking-wider text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT VISUAL */}
        {/* ================================================= */}

        <div className="relative hidden lg:block">
          <div className="relative ml-auto w-[430px]">
            {/* main panel */}

            <div className="relative aspect-[0.82] overflow-hidden rounded-[30px] border border-white/[0.1] bg-[#0a0a0a] shadow-[0_40px_100px_rgba(0,0,0,.45)]">
              {/* preview image */}

              {projects[0]?.image ? (
                <img
                  src={projects[0].image}
                  alt={projects[0].name}
                  className="absolute inset-0 h-full w-full object-cover opacity-75"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-black to-violet-500/10" />
              )}

              {/* overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* top */}

              <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white">
                  Featured
                </span>

                <span className="font-mono text-[8px] text-white">
                  01 / {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              {/* bottom */}

              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-cyan-300">
                  Latest build
                </span>

                <h3 className="mt-2 text-3xl font-bold tracking-[-0.04em]">
                  {projects[0]?.name}
                </h3>
              </div>
            </div>

            {/* floating information card */}

            <div className="absolute -bottom-7 -left-16 w-[230px] rounded-2xl border border-white/[0.1] bg-[#0b0b0b]/90 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white">
                  Archive
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="text-3xl font-black tracking-[-0.07em]">
                    {String(projects.length).padStart(2, "0")}+
                  </div>

                  <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.25em] text-white">
                    Projects
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-medium text-white">
                    Full Stack
                  </div>

                  <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.2em] text-white">
                    Engineering
                  </div>
                </div>
              </div>
            </div>

            {/* floating number */}

            <div className="absolute -right-12 top-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/[0.08] bg-black/50 backdrop-blur-xl">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white">
                2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* bottom hint */}

      <div className="absolute bottom-14 left-[6vw] flex items-center gap-4">
        <div className="relative h-px w-20 overflow-hidden bg-white/10">
          <div className="absolute inset-y-0 left-0 w-8 animate-[moveLine_2s_ease-in-out_infinite] bg-cyan-400" />
        </div>

        <span className=" text-xs uppercase tracking-[0.35em]  bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             bg-clip-text
             text-transparent font-bold">
          Scroll to explore
        </span>
      </div>

      <style>{`
        @keyframes moveLine {
          0% {
            transform: translateX(-120%);
          }

          50% {
            transform: translateX(250%);
          }

          100% {
            transform: translateX(250%);
          }
        }
      `}</style>
    </div>
  );
};

/* ========================================================= */
/* PROJECT CARD */
/* ========================================================= */

const ProjectCard = ({ project, index, navigate }) => {
  const openProject = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-[82vw] flex-shrink-0 md:w-[44vw]"
    >
      {/* number */}

      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[12px]  bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             bg-clip-text
             text-transparent ">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="h-px w-7 bg-white" />

          <span className="font-bold text-[12px] uppercase tracking-[0.3em]  bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             bg-clip-text
             text-transparent">
            Case Study
          </span>
        </div>

        <span className="font-mono text-[8px] text-white">
          0{index + 1} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      {/* image */}

      <div
        onClick={openProject}
        className="group relative aspect-[16/10] cursor-pointer overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#090909] transition-all duration-700 hover:border-cyan-400/30 hover:shadow-[0_35px_100px_rgba(0,0,0,.55)]"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-black to-violet-500/10" />
        )}

        {/* overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />

        {/* hover */}

        <div className="absolute inset-0 bg-cyan-400/[0.03] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* top */}

        <div className="absolute left-6 right-6 top-6 flex justify-between">
          <span className=" text-[10px] font-bold uppercase tracking-[0.3em]  bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             bg-clip-text
             text-transparent">
            Project_Log
          </span>

          <span className="text-[10px] font-bold uppercase tracking-[0.3em]  bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             bg-clip-text
             text-transparent">
            {project.id}
          </span>
        </div>

        {/* center */}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="font-mono text-[16px] font-bold uppercase tracking-[0.4em] text-cyan-300/70">
              0{index + 1}
            </span>

            <h3 className="mt-3 !text-4xl font-black tracking-[-0.06em]  md:text-6xl text-[10px]  !bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             bg-clip-text
             !text-transparent">
              {project.name}
            </h3>

            <div className="mx-auto mt-5 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-16" />
          </div>
        </div>

        {/* bottom */}

        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white">
              Explore
            </span>

            <div className="mt-2 text-sm  !bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             bg-clip-text
             !text-transparent">
              View project
            </div>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/30 text-lg backdrop-blur-xl transition-all duration-500 group-hover:rotate-45 group-hover:border-cyan-400 group-hover:bg-cyan-200/80 group-hover:text-black">
            ↗
          </div>
        </div>

        {/* corners */}

        <span className="absolute left-5 top-5 h-5 w-5 border-l border-t border-white/20 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-cyan-400/60" />

        <span className="absolute bottom-5 right-5 h-5 w-5 border-b border-r border-white/20 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-cyan-400/60" />
      </div>

      {/* information */}

      <div className="mt-7 grid grid-cols-[1fr_auto] gap-8">
        <div>
          <span className="  text-2xl !bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             !bg-clip-text
             !text-transparent
               !font-bold tracking-[-0.04em] ">
            {project.name}
          </span>

          <p className="mt-3 max-w-md text-sm leading-6  !bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             bg-clip-text
             !text-transparent">
            {project.description}
          </p>
        </div>

        <button
          type="button"
          onClick={openProject}
          className="mt-1 hidden self-start border-b border-white/10 pb-1 font-mono text-[8px] uppercase tracking-[0.25em] text-white transition-colors hover:border-cyan-400 hover:text-cyan-300 md:block"
        >
          View
        </button>
      </div>
    </motion.article>
  );
};

/* ========================================================= */
/* OUTRO */
/* ========================================================= */

const Outro = () => {
  return (
    <div className="flex h-screen w-[85vw] flex-shrink-0 items-center px-[8vw] md:w-[65vw]">
      <div>
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white">
          Archive complete
        </span>

        <h2 className="mt-7 font-black uppercase leading-[0.78] tracking-[-0.08em] md:text-[7vw]  !bg-gradient-to-r
             from-white
             via-cyan-200
             to-cyan-400
             !bg-clip-text
             !text-transparent">
          More ideas.
          <br />

          <span
            className="!bg-gradient-to-r
            from-white
            via-cyan-100
            to-cyan-400
            bg-clip-text
            !text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,.5)",
            }}
          >
            More to build.
          </span>
        </h2>

        <p className="mt-9 max-w-lg text-sm leading-7 text-white">
          The archive ends here. The next build is already somewhere ahead.
        </p>

        <div className="mt-9 flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cyan-300/55">
            →
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white">
            Keep building
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;