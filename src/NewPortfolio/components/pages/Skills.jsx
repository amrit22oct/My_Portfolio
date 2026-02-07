import React from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiGit,
  SiGithub, SiPostman, SiVercel, SiCplusplus, SiPython
} from "react-icons/si";
import { FaJava, FaServer } from "react-icons/fa";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", icon: <SiCplusplus className="text-[#00599c]" /> },
      { name: "Java", icon: <FaJava className="text-[#f89820]" /> },
      { name: "Python", icon: <SiPython className="text-[#3776ab]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#e34c26]" /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#1572b6]" /> },
      { name: "React.js", icon: <SiReact className="text-[#61dbfb]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952b3]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#3c873a]" /> },
      { name: "Express.js", icon: <SiExpress className="text-[#aaa]" /> },
      { name: "REST API", icon: <FaServer className="text-[#00bcd4]" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#49d433]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479a1]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
    ],
  },
  {
    category: "Tools & Deployment",
    items: [
      { name: "Git", icon: <SiGit className="text-[#f1502f]" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-[#ff6c37]" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section text-white font-poppins px-16 py-28 overflow-hidden relative">
      <div className="text-center mb-16 relative z-10">
        <h1 className="inline-block text-5xl font-extrabold border-l-4 border-white pl-4 mb-3 ">
          Technologies I Work With
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Cutting-edge tools and frameworks to build scalable web apps
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 relative z-10">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-[rgba(20,20,20,0.9)] border border-[rgba(0,224,255,0.2)]  p-4 shadow-[0_0_15px_rgba(0,224,255,0.15)] transition-transform duration-300 will-change-transform hover:-translate-y-2 hover:scale-[1.008] hover:border-[#00e0ff] hover:shadow-[0_0_20px_#00e0ff]"
          >
            <h2 className="text-center text-xl sm:text-2xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#ff4fff] to-[#00e0ff] animate-gradientText">
              {skill.category}
            </h2>
            <div className="flex flex-wrap justify-center p-4 gap-6">
              {skill.items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-base sm:text-sm text-gray-300 cursor-pointer transition-transform duration-300 will-change-transform hover:scale-110 hover:text-[#00ff90]"
                  title={item.name}
                >
                  <div className="text-4xl sm:text-3xl mb-2 transition-all duration-300 hover:text-[#ff4fff] hover:scale-[1.008] animate-floatIcon">
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes floatIcon {0%,100%{transform:translateY(0) scale(1);}50%{transform:translateY(-5px) scale(1.05);}}
        .animate-floatIcon{animation:floatIcon 3s ease-in-out infinite;}
        @keyframes gradientText{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}
        .animate-gradientText{background-size:200% 200%;animation:gradientText 6s ease infinite;}
      `}</style>
    </section>
  );
};

export default Skills;
