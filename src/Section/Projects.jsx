import React from "react";
import { motion } from "framer-motion";
import {
  SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiPython
} from "react-icons/si";
import { FaServer, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import web_career_portal from "../assets/web_career_portal.png";
import chit_chat from "../assets/chat_app.png";
import Jarvish_chatbot from "../assets/chatbot.png";
import object_detection from "../assets/object_detection.png";
import Blog_app from "../assets/Blog.png";

const projects = [
  {
    name: "Web_Career_Portal",
    image: web_career_portal,
    description: "A full-stack MERN web career portal for recruiters and students.",
    tools: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss],
    github: "https://github.com/amrit22oct/Web_career_portal.git",
    live: "https://web-career-portal-5.onrender.com",
  },
  {
    name: "Blog Website",
    image: Blog_app,
    description: "A modern blog platform with real-time features allowing user interaction.",
    tools: [SiJavascript, SiReact, SiExpress, SiMongodb, FaServer],
    github: "https://github.com/yourusername/blog-app",
    live: "https://blog-app.vercel.app/",
  },
  {
    name: "Chit_Chat",
    image: chit_chat,
    description: "A full-stack chat app using MERN and Socket.IO for real-time messaging.",
    tools: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss],
    github: "https://github.com/amrit22oct/Chit_chat.git",
    live: "https://chit-chat-y7r4.onrender.com",
  },
  {
    name: "Jarvis_Chatbot",
    image: Jarvish_chatbot,
    description: "Conversational AI chatbot integrating Gemini API built with MERN stack.",
    tools: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss],
    github: "https://github.com/amrit22oct/jarvis.git",
    live: "https://jarvis-jpyh.onrender.com/",
  },
  {
    name: "Object Detection using Python & OpenCV",
    image: object_detection,
    description: "Python-based real-time object detection using OpenCV & YOLOv5.",
    tools: [SiPython, SiReact, SiNodedotjs, SiExpress, SiTailwindcss],
    github: "https://github.com/amrit22oct/Object_detection.git",
    live: "https://object-detection-live.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full min-h-screen text-white px-4 sm:px-8 md:px-16 py-20 overflow-hidden">
      <div className="text-center mb-16">
        <motion.h1
          className="inline-block text-4xl sm:text-5xl font-bold border-l-4 border-white pl-4 mb-4 drop-shadow-[0_0_15px_#00e0ff]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="flex flex-col md:flex-row items-center gap-6 bg-[rgba(20,20,20,0.9)] border border-[rgba(0,224,255,0.2)] rounded-2xl p-4 md:p-8 shadow-[0_0_12px_rgba(0,224,255,0.15)] transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:scale-[1.02] hover:border-[#ff4fff] hover:shadow-[0_0_20px_#ff4fff,0_0_40px_#00e0ff]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image */}
            {/* Image */}
<div className="w-full md:w-2/5 flex justify-center md:justify-start">
  <div className="w-full aspect-[16/9] md:aspect-auto rounded-xl overflow-hidden flex items-center justify-center bg-gray-900 transition-transform duration-300 will-change-transform hover:scale-105 hover:shadow-[0_0_18px_#00e0ff]">
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-full object-contain"
    />
  </div>
</div>


            {/* Content */}
            <div className="w-full md:w-3/5 flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#ff4fff] drop-shadow-[0_0_10px_#ff4fff]">
                {project.name}
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">{project.description}</p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mt-2 text-[#00ff90] text-xl drop-shadow-[0_0_8px_#00ff90]">
                {project.tools.map((Tool, idx) => (
                  <span key={idx}><Tool /></span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md text-white border border-[#00e0ff] bg-[rgba(255,255,255,0.1)] font-semibold transition-all duration-300 will-change-transform hover:bg-[#00e0ff] hover:text-black hover:shadow-[0_0_18px_#00e0ff]">
                  <FaGithub /> GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#00e0ff] to-[#ff4fff] text-black transition-all duration-300 hover:shadow-[0_0_20px_#ff4fff,0_0_30px_#00e0ff]">
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
