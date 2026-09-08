


// import React, { useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { projects } from "./data";
// import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Scroll to top on mount
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Find project or fallback
//   const project = projects.find((p) => p.id === id) || {
//     name: "Project Not Found",
//     image: "https://via.placeholder.com/1200x600?text=No+Image",
//     details: "No details available for this project.",
//     techStack: ["N/A"],
//     features: ["No features available"],
//     github: "#",
//     live: "#",
//     year: "N/A",
//     status: "N/A",
//     client: "Internal",
//   };

//   return (
//     <section className="min-h-screen bg-[#0b0f19] text-white selection:bg-cyan-500 selection:text-black">
      
//       {/* Hero Section */}
//       <div className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
//         <img
//           src={ "https://via.placeholder.com/1200x600?text=No+Image" || project.image}
//           alt={project.name}
//           className="absolute inset-0 w-full h-full object-cover opacity-50"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10" />
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-20 text-center px-6 max-w-4xl"
//         >
//           <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
//             Case Study / {project.year}
//           </span>
//           <h1 className="text-[10vw] md:text-[6vw] font-black uppercase tracking-tighter leading-none">
//             {project.name}
//           </h1>
//         </motion.div>

//         {/* Back Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute top-8 left-6 md:left-12 z-30 flex items-center gap-2 text-sm text-white/50 hover:text-white transition-all group"
//         >
//           <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" />
//           <span>Back</span>
//         </button>
//       </div>

//       {/* Sticky Metadata Bar */}
//       <div className="border-y border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4 text-[10px] font-mono uppercase text-white/60">
//           <span><strong className="text-cyan-400">Category:</strong> {project.category}</span>
//           <span><strong className="text-cyan-400">Status:</strong> {project.status}</span>
//           <span><strong className="text-cyan-400">Client:</strong> {project.client}</span>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
//         {/* Left Sidebar: Tech Stack & Features */}
//         <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-12">
          
//           {/* Tech Stack */}
//           <div>
//             <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-500 mb-4">Tech Stack</h2>
//             <div className="flex flex-wrap gap-2">
//               {project.techStack?.map((tool, i) => (
//                 <motion.span
//                   key={i}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                   className="px-4 py-2 text-[10px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold cursor-default"
//                 >
//                   {tool}
//                 </motion.span>
//               )) || (
//                 <span className="px-4 py-2 rounded-full bg-gray-700 text-white text-[10px]">N/A</span>
//               )}
//             </div>
//           </div>

//           {/* Features */}
//           <div>
//             <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-500 mb-4">Features</h2>
//             <ul className="space-y-3">
//               {project.features?.map((feat, i) => (
//                 <motion.li
//                   key={i}
//                   whileHover={{ x: 4 }}
//                   className="flex items-start gap-2 text-sm text-white/70"
//                 >
//                   <FaCheckCircle className="text-cyan-400 mt-1" />
//                   <span>{feat}</span>
//                 </motion.li>
//               )) || (
//                 <li className="flex items-start gap-2 text-sm text-white/50">
//                   <FaCheckCircle className="text-gray-500 mt-1" /> No features available
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>

//         {/* Right Content: Narrative & Images */}
//         <div className="lg:col-span-8 space-y-16">

//           {/* Challenge / Narrative */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
//               The Challenge
//             </h2>
//             <p className="text-white/60 leading-relaxed text-lg md:text-xl">{project.details || "No additional details available."}</p>
//           </motion.div>

//           {/* Project Images / Showcase */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[0, 1].map((i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.05 }}
//                 className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center text-white/10 text-[6vw] font-black select-none"
//               >
//                 {project.images?.[i] ? (
//                   <img src={project.images[i]} alt={`Project ${i}`} className="w-full h-full object-cover"/>
//                 ) : (
//                   i === 0 ? "IMAGE" : "UX"
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           {/* Call to Action */}
//           <div className="pt-12 flex flex-col items-center gap-6 border-t border-white/10">
//             <h3 className="text-2xl md:text-3xl font-light text-white/60">See it live</h3>
//             <div className="flex gap-4">
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 href={project.live || "#"}
//                 target="_blank"
//                 className="px-10 py-4 rounded-full bg-cyan-500 text-black font-bold uppercase text-sm tracking-widest hover:opacity-90 transition"
//               >
//                 Live Project
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 href={project.github || "#"}
//                 target="_blank"
//                 className="px-10 py-4 rounded-full border border-cyan-500 text-cyan-500 font-bold uppercase text-sm tracking-widest hover:bg-cyan-500 hover:text-black transition"
//               >
//                 Source Code
//               </motion.a>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Noise Overlay for Cinematic Effect */}
//       <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-50 bg-[url('https://res.cloudinary.com/dvwth98as/image/upload/v1710234567/noise_pc0qxw.png')]" />
//     </section>
//   );
// };

// export default ProjectDetails;







import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
  MoveUpRight,
} from "lucide-react";

import { projects } from "./data";

/* =========================================================
   ANIMATION
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const viewport = {
  once: true,
  amount: 0.15,
};

/* =========================================================
   MAIN
========================================================= */

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(
    (item) => String(item.id) === String(id)
  );

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "18%"]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#020505] px-6 text-white">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/30">
            404
          </p>

          <h1 className="mb-8 text-4xl font-semibold">
            Project not found
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              px-5
              py-3
              text-sm
              text-white/60
              transition
              hover:border-white/20
              hover:text-white
            "
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
      </div>
    );
  }

  const images = project.images || [];
  const features = project.features || [];
  const techStack = project.techStack || [];

  return (
    <main className="relative overflow-hidden bg-[#020505] text-white">

      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0">

        <div
          className="
            absolute
            left-[50%]
            top-[-250px]
            h-[600px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-cyan-400/[0.045]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            bottom-[-200px]
            right-[-150px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-300/[0.025]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
            [background-size:120px_120px]
          "
        />
      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-10">

        <div className="mx-auto flex max-w-[1500px] items-center justify-between">

          <button
            onClick={() => navigate(-1)}
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/[0.08]
              bg-[#050808]/70
              px-4
              py-2.5
              text-xs
              text-white/50
              backdrop-blur-xl
              transition-all
              hover:border-white/20
              hover:text-white
            "
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />

            All projects
          </button>

          <div
            className="
              hidden
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-white/25
              md:block
            "
          >
            Project / Case Study
          </div>

        </div>

      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          z-10
          min-h-screen
          px-5
          pb-20
          pt-36
          md:px-10
          md:pt-44
          lg:px-14
        "
      >

        <div className="mx-auto max-w-[1500px]">

          {/* PROJECT INDEX */}

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mb-10 flex items-center gap-5"
          >

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-cyan-300/60
              "
            >
              Selected Work
            </span>

            <span className="h-px w-16 bg-white/10" />

            <span className="text-[10px] text-white/25">
              {project.year || "2026"}
            </span>

          </motion.div>

          {/* =================================================
              MASSIVE TITLE
          ================================================= */}

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="relative z-20"
          >

            <h1
              className="
                max-w-[1350px]
                text-[18vw]
                font-semibold
                leading-[0.76]
                tracking-[-0.09em]
                sm:text-[15vw]
                md:text-[12vw]
                lg:text-[10.5vw]
              "
            >
              {project.title}
            </h1>

          </motion.div>

          {/* =================================================
              HERO DESCRIPTION
          ================================================= */}

          <div
            className="
              relative
              z-30
              mt-12
              grid
              gap-8
              md:grid-cols-[1fr_auto]
              md:items-end
              lg:mt-16
            "
          >

            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="
                max-w-[650px]
                text-base
                leading-8
                text-white/40
                md:text-lg
              "
            >
              {project.description ||
                "A modern digital product designed and engineered with a strong focus on performance, usability and thoughtful interaction."}
            </motion.p>

            {project.live && (
              <motion.a
                variants={reveal}
                initial="hidden"
                animate="visible"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  hover:bg-cyan-300
                "
              >
                Explore project

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </motion.a>
            )}

          </div>

          {/* SCROLL */}

          <div className="mt-20 flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
              <ArrowDown size={13} />
            </div>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-white/25
              "
            >
              Discover the build
            </span>

          </div>

        </div>
      </section>

      {/* =====================================================
          IMMERSIVE HERO IMAGE
      ===================================================== */}

      <section className="relative z-10 px-4 md:px-8 lg:px-12">

        <div className="mx-auto max-w-[1500px]">

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={viewport}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              bg-[#080c0c]
              md:rounded-[42px]
            "
          >

            <div className="relative h-[60vh] min-h-[420px] overflow-hidden md:h-[78vh]">

              {project.image ? (
                <motion.img
                  style={{
                    y: heroImageY,
                    scale: heroScale,
                  }}
                  src={project.image}
                  alt={project.title}
                  className="
                    absolute
                    inset-[-8%]
                    h-[116%]
                    w-[116%]
                    object-cover
                  "
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/20">
                    Preview unavailable
                  </span>
                </div>
              )}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/50
                  via-transparent
                  to-black/10
                "
              />

              {/* floating label */}

              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  rounded-full
                  border
                  border-white/10
                  bg-black/30
                  px-4
                  py-2
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/50
                  backdrop-blur-xl
                "
              >
                Product Preview
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          PROJECT INFORMATION
      ===================================================== */}

      <section className="relative z-10 px-5 py-24 md:px-10 md:py-36 lg:px-14">

        <div className="mx-auto max-w-[1250px]">

          <div className="grid gap-16 lg:grid-cols-[0.55fr_1.45fr]">

            {/* LEFT */}

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >

              <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/60">
                01 / Project
              </p>

              <div className="mt-5 h-px w-16 bg-cyan-300/30" />

            </motion.div>

            {/* RIGHT */}

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >

              <h2
                className="
                  text-4xl
                  font-medium
                  leading-[1.05]
                  tracking-[-0.055em]
                  md:text-6xl
                  lg:text-7xl
                "
              >
                Turning an idea into a
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
                  {" "}
                  usable experience.
                </span>
              </h2>

              <p
                className="
                  mt-10
                  max-w-2xl
                  text-base
                  leading-8
                  text-white/35
                  md:text-lg
                "
              >
                {project.challenge ||
                  "The goal was to create a product that balances clean engineering with an interface that feels natural, fast and intuitive."}
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          META STRIP
      ===================================================== */}

      <section className="relative z-10 px-5 pb-32 md:px-10 lg:px-14">

        <div
          className="
            mx-auto
            grid
            max-w-[1250px]
            border-y
            border-white/[0.08]
            md:grid-cols-4
          "
        >

          <Info
            title="Role"
            value={project.client || "Full Stack Developer"}
          />

          <Info
            title="Year"
            value={project.year || "2026"}
          />

          <Info
            title="Type"
            value={project.category || "Web Application"}
          />

          <Info
            title="Status"
            value={project.status || "Completed"}
          />

        </div>

      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      {features.length > 0 && (
        <section className="relative z-10 px-5 pb-36 md:px-10 lg:px-14">

          <div className="mx-auto max-w-[1250px]">

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mb-20"
            >

              <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/60">
                02 / Capabilities
              </p>

              <h2
                className="
                  mt-6
                  max-w-4xl
                  text-5xl
                  font-medium
                  leading-[0.95]
                  tracking-[-0.06em]
                  md:text-7xl
                "
              >
                Designed around
                <span className="text-white/25">
                  {" "}
                  real functionality.
                </span>
              </h2>

            </motion.div>

            <div className="border-t border-white/[0.08]">

              {features.map((feature, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={viewport}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.04,
                  }}
                  className="
                    group
                    grid
                    gap-5
                    border-b
                    border-white/[0.08]
                    py-8
                    md:grid-cols-[100px_1fr_auto]
                    md:items-center
                    md:py-10
                  "
                >

                  <span className="text-xs text-white/20">
                    0{index + 1}
                  </span>

                  <h3
                    className="
                      text-2xl
                      font-medium
                      tracking-[-0.03em]
                      text-white/65
                      transition-colors
                      group-hover:text-white
                      md:text-4xl
                    "
                  >
                    {feature}
                  </h3>

                  <MoveUpRight
                    size={20}
                    className="
                      text-white/15
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-cyan-300
                    "
                  />

                </motion.div>

              ))}

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      {techStack.length > 0 && (
        <section className="relative z-10 overflow-hidden py-20 md:py-28">

          <div className="mb-10 px-5 md:px-10 lg:px-14">

            <div className="mx-auto max-w-[1250px]">

              <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/60">
                03 / Technology
              </p>

            </div>

          </div>

          <div
            className="
              flex
              w-max
              animate-[marquee_30s_linear_infinite]
              gap-4
              px-5
            "
          >

            {[...techStack, ...techStack].map((tech, index) => (

              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  px-7
                  py-4
                  text-sm
                  text-white/45
                  whitespace-nowrap
                "
              >

                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/60" />

                {tech}

              </div>

            ))}

          </div>

          <style>
            {`
              @keyframes marquee {
                from {
                  transform: translateX(0);
                }

                to {
                  transform: translateX(-50%);
                }
              }
            `}
          </style>

        </section>
      )}

      {/* =====================================================
          SCREEN SHOWCASE
      ===================================================== */}

      {images.length > 0 && (
        <section className="relative z-10 px-4 pb-40 md:px-8 lg:px-12">

          <div className="mx-auto max-w-[1500px]">

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mb-20 px-2 md:px-6"
            >

              <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/60">
                04 / Inside the interface
              </p>

              <h2
                className="
                  mt-6
                  text-5xl
                  font-medium
                  tracking-[-0.06em]
                  md:text-8xl
                "
              >
                The details
                <span className="text-white/20">
                  {" "}
                  matter.
                </span>
              </h2>

            </motion.div>

            <div className="space-y-10">

              {images.map((image, index) => {

                const layouts = [
                  "mr-[12%]",
                  "ml-[12%]",
                  "mr-[5%] ml-[5%]",
                  "ml-[18%]",
                ];

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={viewport}
                    transition={{
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`
                      group
                      overflow-hidden
                      rounded-[25px]
                      bg-[#080c0c]
                      ${layouts[index % layouts.length]}
                    `}
                  >

                    <img
                      src={image}
                      alt={`${project.title} screen ${index + 1}`}
                      className="
                        block
                        w-full
                        object-cover
                        transition-transform
                        duration-[1.5s]
                        group-hover:scale-[1.025]
                      "
                    />

                  </motion.div>
                );

              })}

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative z-10 px-5 pb-10 md:px-10 lg:px-14">

        <div className="mx-auto max-w-[1250px]">

          <motion.div
            initial={{
              opacity: 0,
              y: 70,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={viewport}
            transition={{
              duration: 0.9,
            }}
            className="
              relative
              overflow-hidden
              border-t
              border-white/[0.08]
              py-28
              md:py-40
            "
          >

            {/* glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[400px]
                w-[400px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-400/[0.05]
                blur-[130px]
              "
            />

            <div className="relative z-10">

              <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/60">
                05 / What's next
              </p>

              <h2
                className="
                  mt-8
                  max-w-5xl
                  text-6xl
                  font-medium
                  leading-[0.9]
                  tracking-[-0.07em]
                  md:text-8xl
                  lg:text-[9rem]
                "
              >
                Build.
                <span className="text-white/20">
                  {" "}
                  Ship.
                </span>
                <br />
                Repeat.
              </h2>

              <div className="mt-12 flex flex-wrap gap-3">

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-white
                      px-7
                      py-4
                      text-sm
                      font-medium
                      text-black
                      transition-all
                      hover:bg-cyan-300
                    "
                  >
                    View live project

                    <ExternalLink
                      size={15}
                      className="
                        transition-transform
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-white/10
                      px-7
                      py-4
                      text-sm
                      text-white/55
                      transition
                      hover:border-white/25
                      hover:text-white
                    "
                  >
                    <Github size={16} />
                    View source
                  </a>
                )}

              </div>

            </div>

          </motion.div>

          {/* FOOTER */}

          <div
            className="
              flex
              flex-col
              gap-5
              border-t
              border-white/[0.08]
              py-8
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-white/20
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <button
              onClick={() => navigate(-1)}
              className="
                flex
                items-center
                gap-2
                transition
                hover:text-white
              "
            >
              <ArrowLeft size={13} />
              Back to work
            </button>

            <span>
              Amrit Rai / {new Date().getFullYear()}
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}

/* =========================================================
   INFORMATION ITEM
========================================================= */

function Info({ title, value }) {
  return (
    <div
      className="
        border-b
        border-white/[0.08]
        py-7
        md:border-b-0
        md:border-r
        md:px-8
        md:first:pl-0
        md:last:border-r-0
      "
    >
      <p
        className="
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-white/20
        "
      >
        {title}
      </p>

      <p className="mt-3 text-sm text-white/60">
        {value}
      </p>
    </div>
  );
}