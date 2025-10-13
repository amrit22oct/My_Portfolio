import React from "react";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { FaServer, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Web Career Portal",
    description:
      "A modern job portal connecting students and recruiters, built with MERN stack and Tailwind CSS.",
    tools: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss],
    github: "https://github.com/amrit22oct/Web_career_portal.git",
    live: "https://web-career-portal-5.onrender.com",
  },
  {
    name: "Blog Website",
    description:
      "A sleek blog platform that allows users to create, edit, and comment in real-time.",
    tools: [SiJavascript, SiReact, SiExpress, SiMongodb, FaServer],
    github: "https://github.com/yourusername/blog-app",
    live: "https://blog-app.vercel.app/",
  },
  {
    name: "Chit Chat",
    description:
      "A real-time messaging app using Socket.IO and MERN stack with smooth UI.",
    tools: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss],
    github: "https://github.com/amrit22oct/Chit_chat.git",
    live: "https://chit-chat-y7r4.onrender.com",
  },
  {
    name: "Jarvis Chatbot",
    description:
      "An AI-powered chatbot integrating Gemini API for natural conversations.",
    tools: [SiReact, SiNodedotjs, SiExpress, SiMongodb],
    github: "https://github.com/amrit22oct/jarvis.git",
    live: "https://jarvis-jpyh.onrender.com/",
  },
  {
    name: "Object Detection",
    description:
      "Real-time object detection using Python, OpenCV, and YOLOv5.",
    tools: [SiPython, SiReact, SiNodedotjs, SiExpress],
    github: "https://github.com/amrit22oct/Object_detection.git",
    live: "https://object-detection-live.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-[#0a0a0a] text-white px-6 md:px-12 lg:px-24 py-20"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#00e0ff] tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <p className="text-gray-400 mt-3 text-base md:text-lg">
          A showcase of my recent work — built with modern technologies.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-[#121212] border border-[#1f1f1f] p-6 flex flex-col justify-between shadow-lg cursor-pointer 
            transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.008] hover:drop-shadow-[0_0_6px_#00e0ff]"
          >
            {/* Content */}
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-[#00e0ff] group-hover:text-[#00ff90] transition-colors duration-300">
                {project.name}
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 text-[#00ff90] text-lg mt-2">
                {project.tools.map((Tool, idx) => (
                  <Tool key={idx} className="transition-transform duration-300 hover:scale-110" />
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-[#00e0ff] text-[#00e0ff] hover:bg-[#00e0ff] hover:text-black transition-all duration-200"
              >
                <FaGithub /> Code
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-[#00e0ff] text-black font-semibold hover:bg-[#00bcd4] transition-all duration-200"
              >
                <FaExternalLinkAlt /> Live
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
