import React from "react";
import { motion } from "framer-motion";
import web_career_portal from "../assets/web_career_portal.png";
import chit_chat from "../assets/chat_app.png"
import Jarvish_chatbot from "../assets/chatbot.png"
import object_detection from "../assets/object_detection.png"
import Blog_app from "../assets/Blog.png"
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
    name: "Web_Career_Portal",
    image: web_career_portal,
    description:
      "A full-stack MERN web career portal for recruiters and students to manage job postings, applications, resumes, and scheduling efficiently.",
    tools: [
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongo" />,
      <SiTailwindcss key="tailwind" />,
    ],
    github: "https://github.com/amrit22oct/Web_career_portal.git",
    live: "https://web-career-portal-5.onrender.com",
  },
  {
    name: "Blog Website",
    image: Blog_app,
    description:
      "A modern blog platform with real-time features allowing users to post, comment, like, and interact seamlessly.",
    tools: [
      <SiJavascript key="js" />,
      <SiReact key="react" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongo" />,
      <FaServer key="rest" />,
    ],
    github: "https://github.com/yourusername/blog-app",
    live: "https://blog-app.vercel.app/",
  },
  {
    name: "Chit_Chat",
    image: chit_chat,
    description:
      "A full-stack chat application using MERN and Socket.IO for real-time communication, messaging, and media sharing.",
    tools: [
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongo" />,
      <SiTailwindcss key="tailwind" />,
    ],
    github: "https://github.com/amrit22oct/Chit_chat.git",
    live: "https://chit-chat-y7r4.onrender.com",
  },
  {
    name: "Jarvis_Chatbot",
    image: Jarvish_chatbot,
    description:
      "A conversational AI chatbot integrating Gemini API to provide intelligent responses, built with MERN stack for web interaction.",
    tools: [
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongo" />,
      <SiTailwindcss key="tailwind" />,
    ],
    github: "https://github.com/amrit22oct/jarvis.git",
    live: "https://jarvis-jpyh.onrender.com/",
  },
  {
    name: "Object Detection using Python & OpenCV",
    image: object_detection ,
    description:
      "A Python-based real-time object detection system using OpenCV and YOLOv5. Detects, counts, and tracks objects in live video streams with high accuracy.",
    tools: [
      <SiPython key="python" />,
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiExpress key="express" />,
      <SiTailwindcss key="tailwind" />,
    ],
    github: "https://github.com/amrit22oct/Object_detection.git",
    live: "https://object-detection-live.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      className="projects-section relative w-full min-h-screen text-white px-8 md:px-16 py-20 overflow-hidden"
      id="projects"
    >
      {/* Title */}
      <div className="projects-title-wrapper text-center mb-16">
        <motion.h1
          className="projects-title inline-block text-4xl sm:text-5xl font-bold border-l-4 border-white pl-4 mb-4 drop-shadow-[0_0_15px_#00e0ff]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>
      </div>

      {/* Projects Container */}
      <div className="projects-container flex flex-col gap-16">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card flex flex-col md:flex-row items-center gap-8 bg-[rgba(20,20,20,0.9)] border border-[rgba(0,224,255,0.2)] rounded-2xl p-6 md:p-12 shadow-[0_0_12px_rgba(0,224,255,0.15)] transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#ff4fff] hover:shadow-[0_0_20px_#ff4fff,0_0_40px_#00e0ff]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Left Side - Image */}
            <div className="project-image-container w-full md:w-[40%] flex justify-center md:justify-start">
              <div className="w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden flex items-center justify-center bg-gray-900 hover:scale-105 hover:shadow-[0_0_18px_#00e0ff] transition-transform duration-300">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="project-content w-full md:w-[65%] flex flex-col gap-4">
              <h2 className="project-name text-2xl md:text-3xl font-semibold text-[#ff4fff] drop-shadow-[0_0_10px_#ff4fff]">
                {project.name}
              </h2>
              <p className="project-desc text-gray-300 text-base md:text-lg leading-relaxed">
                {project.description}
              </p>

              {/* Tools */}
              <div className="project-tools flex flex-wrap gap-3 mt-2 text-[#00ff90] text-xl drop-shadow-[0_0_8px_#00ff90]">
                {project.tools.map((tool, idx) => (
                  <span key={idx}>{tool}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="project-buttons flex flex-nowrap gap-4 mt-4">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="btn github-btn flex flex-row items-center gap-2 px-5 py-2 rounded-md text-white border border-[#00e0ff] bg-[rgba(255,255,255,0.1)] font-semibold transition-all duration-300 hover:bg-[#00e0ff] hover:text-black hover:shadow-[0_0_18px_#00e0ff] whitespace-nowrap"
  >
    <FaGithub className="text-lg" /> GitHub
  </a>
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="btn live-btn flex flex-row items-center gap-2 px-5 py-2 rounded-md font-semibold bg-gradient-to-r from-[#00e0ff] to-[#ff4fff] text-black transition-all duration-300 hover:shadow-[0_0_20px_#ff4fff,0_0_30px_#00e0ff] whitespace-nowrap"
  >
    <FaExternalLinkAlt className="text-lg" /> Live
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
