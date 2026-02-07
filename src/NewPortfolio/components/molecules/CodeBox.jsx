import { useMemo, useCallback } from "react";

const code = `
const portfolio = () => {
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
};
console.log(portfolio());
`;

eval(code);


const CodeBox = () => {
  // Memoized code lines
  const lines = useMemo(() => code.split("\n"), []);

  // Highlight function
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
    <div
      className="flex-1 max-w-3xl w-full bg-[rgba(20,20,20,0.9)] overflow-hidden shadow-lg border border-[rgba(255,255,255,0.08)]"
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
   <div className="flex items-center  bg-[rgba(30,30,30,0.9)] border-b border-[rgba(255,255,255,0.1)]">
   <div className="flex items-center gap-2 px-4 py-2">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
        <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
      </div>
      <p>Portfolio.js</p>
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
  );
};

export default CodeBox;
