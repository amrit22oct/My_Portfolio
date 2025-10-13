import { useState, useEffect, useMemo, useCallback } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ResumePDF from "../assets/Amrit_rai_resume.pdf";

// Static arrays (not recreated on each render)
const animatedTexts = [
  "Software Developer.",
  "Full-Stack Developer.",
  "MERN Stack Developer.",
];

const links = [
  "https://www.linkedin.com/in/amrit-rai9335014143/",
  "https://github.com/amrit22oct",
  "https://leetcode.com/u/amrit22oct/",
  "https://www.instagram.com/_its_amrit._/",
];

const neonColors = ["#00ffff", "#ff4fff", "#00ff90", "#ffb700"];

const code = `function portfolio() {
  const name = "Amrit Rai";

  const skills = [
    "JavaScript", "React", "Node.js", "MongoDB", "Express.js",
    "Bootstrap", "Tailwind CSS", "PostgreSQL", "Git", "GitHub",
    "REST API", "MySQL", "C++", "Python", "Java", "Postman",
    "API Integration"
  ];

  const traits = [
    "Hardworking", "Quick Learner",
    "Critical Thinking", "Problem Solver",
    "Teamwork", "Adaptability"
  ];

  return { name, skills, traits };
}

portfolio();`;

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIndex < animatedTexts[currentIndex].length) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
          setCurrentText(animatedTexts[currentIndex].slice(0, charIndex + 1));
        }, 120);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
          setCurrentText(animatedTexts[currentIndex].slice(0, charIndex - 1));
        }, 80);
      } else {
        setTyping(true);
        setCurrentIndex((prev) => (prev + 1) % animatedTexts.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, currentIndex]);

  // Memoized code lines
  const lines = useMemo(() => code.split("\n"), []);

  // Highlight function with memoization
  const highlight = useCallback((line) => {
    let s = line
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    s = s.replace(/"([^"\\]|\\.)*"/g, '<span style="color:#00ff90;">$&</span>');
    s = s.replace(
      /\b(function|const|return)\b/g,
      '<span style="color:#00e0ff;">$1</span>'
    );
    s = s.replace(
      /\b(portfolio)\b(?=\s*\()/g,
      '<span style="color:#ff4fff;">$1</span>'
    );
    s = s.replace(/\b\d+(\.\d+)?\b/g, '<span style="color:#d4d4d4;">$&</span>');
    return s;
  }, []);

  return (
    <section
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 px-4 sm:px-8 lg:px-20 pt-[100px] sm:pt-[120px] pb-12 text-white font-mono overflow-hidden"
      id="home"
    >
      {/* Intro */}
      <div className="flex-1 max-w-[650px] w-full flex flex-col items-start text-left gap-6">
        <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-tight ">
          Hello,
          <br />
          This is{" "}
          <span className="text-cyan-300 ">
            Amrit Rai
          </span>
          ,<br />
          I'm a Professional
          <br />
          <span
            style={{
              color: "#FF4FFF",
              
              display: "inline-block",
              marginLeft: "2px",
              animation: "steps(1) infinite",
            }}
          >
            {currentText}
          </span>
        </h1>

        {/* Social Icons */}
        <div className="flex gap-6 justify-start">
          {[FaLinkedin, FaGithub, SiLeetcode, FaInstagram].map((Icon, idx) => (
            <a
              key={idx}
              href={links[idx]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-2xl relative transition-transform duration-300 hover:-translate-y-1 hover:scale-125"
              style={{
                color: neonColors[idx],
                textShadow: `
                  0 0 5px ${neonColors[idx]},
                  0 0 10px ${neonColors[idx]},
                  0 0 20px ${neonColors[idx]},
                  0 0 30px ${neonColors[idx]}
                `,
                animation: "neonPulse 1.5s infinite alternate",
              }}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-start mt-4">
          <a
            href="#contact"
            className="no-underline relative px-6 py-2 rounded-full font-semibold border-2 border-[#00e0ff] bg-[rgba(15,15,15,0.8)] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.008] hover:bg-[rgba(20,20,20,0.9)] hover:shadow-[0_0_10px_#00e0ff,0_0_0_#00e0ff]"
          >
            Contact Me
            <span className="absolute -inset-1 rounded-full bg-[#00e0ff] opacity-20 blur-md animate-pulse"></span>
          </a>

          <a
            href={ResumePDF}
            download="Amrit_Rai_Resume.pdf"
            className="no-underline relative px-6 py-2 rounded-full font-semibold border-2 border-[#ff4fff] bg-[rgba(15,15,15,0.8)] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.008] hover:bg-[rgba(20,20,20,0.9)] hover:shadow-[0_0_10px_#ff4fff,0_0_0_#ff4fff]"
          >
            Resume
            <span className="absolute -inset-1 rounded-full bg-[#ff4fff] opacity-20 blur-md animate-pulse"></span>
          </a>
        </div>
      </div>

      {/* Code Box */}
      <div
        className="flex-1 max-w-[600px] w-full bg-[rgba(20,20,20,0.9)]  overflow-hidden shadow-lg border border-[rgba(255,255,255,0.08)]"
        style={{ animation: "float 6s ease-in-out infinite" }}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-[rgba(30,30,30,0.9)] border-b border-[rgba(255,255,255,0.1)]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
          <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
        </div>

        <pre className="p-4 sm:p-6 text-[#d4d4d4] leading-relaxed whitespace-pre overflow-auto max-h-[500px] text-[clamp(0.78rem,2vw,0.95rem)]">
          {lines.map((ln, i) => (
            <div
              key={i}
              style={{
                animation: `lineReveal 0.6s ease forwards`,
                animationDelay: `${i * 60}ms`,
                opacity: 0,
              }}
              dangerouslySetInnerHTML={{ __html: highlight(ln) }}
            />
          ))}
        </pre>

        <style>{`
          @keyframes blinkCursor {
            0%,50% { opacity: 1; }
            50.1%,100% { opacity: 0; }
          }
          @keyframes float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          @keyframes lineReveal {
            from { opacity: 0; transform: translateY(3px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Home;
