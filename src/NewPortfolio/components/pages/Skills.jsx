

// import React, { useEffect, useRef } from "react";
// import Matter from "matter-js";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiReact,
//   SiBootstrap,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiMysql,
//   SiPostgresql,
//   SiGit,
//   SiGithub,
//   SiPostman,
//   SiVercel,
//   SiCplusplus,
//   SiPython,
// } from "react-icons/si";
// import { FaJava, FaServer } from "react-icons/fa";

// const skills = [
//   { name: "C++", icon: SiCplusplus, color: "#00599C" },
//   { name: "Java", icon: FaJava, color: "#ED8B00" },
//   { name: "Python", icon: SiPython, color: "#3776AB" },
//   { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
//   { name: "React", icon: SiReact, color: "#61DAFB" },
//   { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
//   { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
//   { name: "Express", icon: SiExpress, color: "#ffffff" },
//   { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
//   { name: "CSS3", icon: SiCss3, color: "#1572B6" },
//   { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
//   { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
//   { name: "Git", icon: SiGit, color: "#F05032" },
//   { name: "GitHub", icon: SiGithub, color: "#ffffff" },
//   { name: "Postman", icon: SiPostman, color: "#FF6C37" },
//   { name: "Vercel", icon: SiVercel, color: "#ffffff" },
//   { name: "MySQL", icon: SiMysql, color: "#4479A1" },
//   { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
//   { name: "REST API", icon: FaServer, color: "#FFD43B" },
// ];

// export default function SkillsPhysics() {
//   const containerRef = useRef(null);
//   const engineRef = useRef(null);
//   const bodiesRef = useRef([]);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint } =
//       Matter;

//     const engine = Engine.create();
//     engine.gravity.y = 1.2;
//     engineRef.current = engine;

//     const container = containerRef.current;
//     const width = container.clientWidth;
//     const height = container.clientHeight;

//     // Allow mobile scrolling
//     container.style.touchAction = "auto";

//     // Walls
//     const thickness = 80;
//     const walls = [
//       Bodies.rectangle(width / 2, height + thickness / 2, width, thickness, {
//         isStatic: true,
//       }),
//       Bodies.rectangle(width / 2, -thickness / 2, width, thickness, {
//         isStatic: true,
//       }),
//       Bodies.rectangle(-thickness / 2, height / 2, thickness, height, {
//         isStatic: true,
//       }),
//       Bodies.rectangle(width + thickness / 2, height / 2, thickness, height, {
//         isStatic: true,
//       }),
//     ];

//     // Skill Bodies
//     const bodies = skills.map(() =>
//       Bodies.rectangle(
//         Math.random() * (width - 200) + 100,
//         Math.random() * 200,
//         180,
//         70,
//         {
//           restitution: 0.3,
//           friction: 0.5,
//         }
//       )
//     );

//     bodiesRef.current = bodies;
//     Composite.add(engine.world, [...walls, ...bodies]);

//     // Mouse
//     const mouse = Mouse.create(container);

//     // 🔥 FIX: Allow page scrolling while hovering container
//     mouse.element.removeEventListener("wheel", mouse.mousewheel);
//     mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

//     const mouseConstraint = MouseConstraint.create(engine, {
//       mouse,
//       constraint: {
//         stiffness: 0.12,
//         render: { visible: false },
//       },
//     });

//     Composite.add(engine.world, mouseConstraint);

//     const runner = Runner.create();
//     Runner.run(runner, engine);

//     // Sync DOM
//     const update = () => {
//       bodies.forEach((body, i) => {
//         const el = cardRefs.current[i];
//         if (!el) return;

//         el.style.transform = `
//           translate(${body.position.x - 90}px, ${body.position.y - 35}px)
//           rotate(${body.angle}rad)
//         `;
//       });
//       requestAnimationFrame(update);
//     };

//     update();

//     return () => {
//       Runner.stop(runner);
//       Composite.clear(engine.world);
//       Engine.clear(engine);
//     };
//   }, []);

//   return (
//     <section className="min-h-screen  flex flex-col items-center px-8 py-24">
//       {/* <h1 className="text-5xl text-white font-light tracking-wide mb-14">
//        Skils 
//       </h1> */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-6"
//       >
//         My{" "}
//         <span
//           className="text-transparent"
//           style={{ WebkitTextStroke: "1px #00e0ff" }}
//         >
//           Skills
//         </span>
//       </motion.h2>
//       <div
//         ref={containerRef}
//         className="relative w-full  h-[450px] rounded-3xl  overflow-hidden"
//       >
//         {skills.map((skill, i) => {
//           const Icon = skill.icon;
//           return (
//             <div
//               key={i}
//               ref={(el) => (cardRefs.current[i] = el)}
//               className="absolute w-[180px] h-[70px] rounded-2xl  border border-white/10 backdrop-blur-lg shadow-xl flex items-center gap-4 px-5 cursor-grab active:cursor-grabbing select-none"
//               style={{
//                 boxShadow: `0 0 20px ${skill.color}55`,
//               }}
//             >
//               <Icon size={28} color={skill.color} />
//               {/* <span className="text-white font-medium tracking-wide"> */}
//               <span
//                 className="text-transparent font-medium tracking-wide"
//                 style={{ WebkitTextStroke: "1px #00e0ff" }}
//               >
//                 {skill.name}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }




import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiGit,
  SiGithub, SiPostman, SiVercel, SiCplusplus, SiPython,
} from "react-icons/si";
import { FaJava, FaServer } from "react-icons/fa";

const skills = [
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
];

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 12, 
        rotateX: -8,
        z: 50 
      }}
      className="relative group cursor-default"
    >
      {/* Background Glow - Matches Icon Color */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500 rounded-2xl"
        style={{ backgroundColor: skill.color }}
      />
      
      {/* Transparent Main Card */}
      <div className="relative border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.02] backdrop-blur-sm overflow-hidden">
        
        {/* Animated Corner Accent */}
        <div 
          className="absolute top-0 right-0 w-8 h-8 opacity-10 group-hover:opacity-100 transition-opacity"
          style={{ 
            background: `linear-gradient(to bottom left, ${skill.color}, transparent)` 
          }}
        />

        <Icon size={42} color={skill.color} className="filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
        
        <h3 
          className="text-lg font-black tracking-tighter text-transparent uppercase transition-all duration-500 group-hover:opacity-100 opacity-40"
          style={{ WebkitTextStroke: `1px ${skill.color}` }}
        >
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

export default function SkillsPerspective() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center px-6 py-24 relative">
      
      {/* Header Section */}
      <div className="text-center mb-20 z-10">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#00ff90] font-mono text-[10px] sm:text-xs tracking-[0.5em] uppercase mb-4"
        >
          // Expertise & Tools
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white"
        >
          My{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1.5px #00e0ff" }}
          >
            Stack
          </span>
        </motion.h2>
      </div>

      {/* The Grid - Works on top of any background */}
      <div className="w-full max-w-[1400px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 perspective-1000">
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} index={i} />
        ))}
      </div>

      {/* Bottom Visual Divider */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "circOut" }}
        className="w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#00e0ff]/40 to-transparent mt-24"
      />
    </section>
  );
}