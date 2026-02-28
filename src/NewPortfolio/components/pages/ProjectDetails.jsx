


import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "./data";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find project or fallback
  const project = projects.find((p) => p.id === id) || {
    name: "Project Not Found",
    image: "https://via.placeholder.com/1200x600?text=No+Image",
    details: "No details available for this project.",
    techStack: ["N/A"],
    features: ["No features available"],
    github: "#",
    live: "#",
    year: "N/A",
    status: "N/A",
    client: "Internal",
  };

  return (
    <section className="min-h-screen bg-[#0b0f19] text-white selection:bg-cyan-500 selection:text-black">
      
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src={project.image || "https://via.placeholder.com/1200x600?text=No+Image"}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-6 max-w-4xl"
        >
          <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
            Case Study / {project.year}
          </span>
          <h1 className="text-[10vw] md:text-[6vw] font-black uppercase tracking-tighter leading-none">
            {project.name}
          </h1>
        </motion.div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-6 md:left-12 z-30 flex items-center gap-2 text-sm text-white/50 hover:text-white transition-all group"
        >
          <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" />
          <span>Back</span>
        </button>
      </div>

      {/* Sticky Metadata Bar */}
      <div className="border-y border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4 text-[10px] font-mono uppercase text-white/60">
          <span><strong className="text-cyan-400">Category:</strong> {project.category}</span>
          <span><strong className="text-cyan-400">Status:</strong> {project.status}</span>
          <span><strong className="text-cyan-400">Client:</strong> {project.client}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Sidebar: Tech Stack & Features */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-12">
          
          {/* Tech Stack */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-500 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tool, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="px-4 py-2 text-[10px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold cursor-default"
                >
                  {tool}
                </motion.span>
              )) || (
                <span className="px-4 py-2 rounded-full bg-gray-700 text-white text-[10px]">N/A</span>
              )}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-500 mb-4">Features</h2>
            <ul className="space-y-3">
              {project.features?.map((feat, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-2 text-sm text-white/70"
                >
                  <FaCheckCircle className="text-cyan-400 mt-1" />
                  <span>{feat}</span>
                </motion.li>
              )) || (
                <li className="flex items-start gap-2 text-sm text-white/50">
                  <FaCheckCircle className="text-gray-500 mt-1" /> No features available
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Right Content: Narrative & Images */}
        <div className="lg:col-span-8 space-y-16">

          {/* Challenge / Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              The Challenge
            </h2>
            <p className="text-white/60 leading-relaxed text-lg md:text-xl">{project.details || "No additional details available."}</p>
          </motion.div>

          {/* Project Images / Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center text-white/10 text-[6vw] font-black select-none"
              >
                {project.images?.[i] ? (
                  <img src={project.images[i]} alt={`Project ${i}`} className="w-full h-full object-cover"/>
                ) : (
                  i === 0 ? "IMAGE" : "UX"
                )}
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="pt-12 flex flex-col items-center gap-6 border-t border-white/10">
            <h3 className="text-2xl md:text-3xl font-light text-white/60">See it live</h3>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.live || "#"}
                target="_blank"
                className="px-10 py-4 rounded-full bg-cyan-500 text-black font-bold uppercase text-sm tracking-widest hover:opacity-90 transition"
              >
                Live Project
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.github || "#"}
                target="_blank"
                className="px-10 py-4 rounded-full border border-cyan-500 text-cyan-500 font-bold uppercase text-sm tracking-widest hover:bg-cyan-500 hover:text-black transition"
              >
                Source Code
              </motion.a>
            </div>
          </div>

        </div>
      </div>

      {/* Noise Overlay for Cinematic Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-50 bg-[url('https://res.cloudinary.com/dvwth98as/image/upload/v1710234567/noise_pc0qxw.png')]" />
    </section>
  );
};

export default ProjectDetails;
