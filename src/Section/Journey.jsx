import React, { useEffect, useRef } from "react";

const achievements = [
  { year: "2022", title: "TalentPool@IET", description: "Gained exposure to projects and enhanced technical skills." },
  { year: "2023", title: "TalentHunt@IET", description: "Participated in coding competitions and workshops." },
  { year: "2024", title: "Full Stack Dev Internship Program – Edureka", description: "Learned MERN stack: MongoDB, Express, React.js, Node.js. Built real-time apps." },
  { year: "2024", title: "JavaScript – HackerRank", description: "Practiced advanced JS concepts including ES6+, DOM manipulation, async programming." },
  { year: "2025", title: "Node.js (Intermediate) – HackerRank", description: "Built backend APIs, worked with Express, and connected to MongoDB." },
  { year: "2025", title: "Web Development Certification – Internshala", description: "Score: 84%. Learned HTML, CSS, JavaScript, and responsive web design." },
];

const Journey = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".timeline-item");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 } // Trigger when 20% of item is visible
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative w-full py-20 px-4 sm:px-8 lg:px-20 text-white"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="inline-block border-l-6 border-white pl-4 text-4xl md:text-5xl font-bold text-white animate-glowTitle drop-shadow-lg">
          My Engineering Journey
        </h1>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-[850px] mx-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-full 
          bg-gradient-to-b from-cyan-400 via-pink-500 to-green-400 
          rounded-full shadow-[0_0_20px_rgba(0,224,255,0.7),0_0_30px_rgba(255,79,255,0.6),0_0_25px_rgba(0,255,144,0.6)]">
        </div>

        {/* Timeline Items */}
        {achievements.map((item, index) => (
          <div
            key={index}
            className={`timeline-item relative mb-16 opacity-0 transform translate-y-10 scale-95 transition-all duration-700 
            flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
          >
            {/* Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-1/2 sm:top-5 
              w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-400 via-pink-500 to-green-400 
              shadow-[0_0_20px_rgba(0,224,255,0.8),0_0_30px_rgba(255,79,255,0.7),0_0_40px_rgba(0,255,144,0.6)] 
              animate-pulse animate-floatDot">
            </div>

            {/* Content Box */}
            <div
              className={`relative sm:w-[45%] w-full mt-10 sm:mt-0 
              bg-[rgba(15,15,15,0.85)] p-6 rounded-3xl border border-[rgba(0,224,255,0.3)] 
              backdrop-blur-sm hover:-translate-y-4 hover:scale-105 
              hover:shadow-[0_10px_28px_rgba(0,224,255,0.35),0_8px_20px_rgba(255,79,255,0.3),0_12px_30px_rgba(0,255,144,0.25)] 
              transition-all duration-500 z-10 ${index % 2 === 0 ? "sm:ml-[55%]" : "sm:mr-[55%]"}`}
            >
              {item.year && (
                <span className="block mb-2 text-cyan-400 font-bold text-lg drop-shadow-[0_0_12px_rgba(0,224,255,0.9)] tracking-wide">
                  {item.year}
                </span>
              )}
              <h3 className="text-pink-500 font-semibold text-xl mb-3 drop-shadow-[0_0_12px_rgba(255,79,255,0.85)]">
                {item.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed tracking-wide transition-colors duration-400 hover:text-white">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulse {
          0%,100% { box-shadow:0 0 15px rgba(0,224,255,0.6),0 0 25px rgba(255,79,255,0.6);}
          50% { box-shadow:0 0 35px rgba(0,224,255,0.9),0 0 45px rgba(255,79,255,0.9),0 0 25px rgba(0,255,144,0.7);}
        }
        @keyframes floatDot { 
          from { transform: translateX(-50%) translateY(0); } 
          to { transform: translateX(-50%) translateY(-12px); } 
        }
        @keyframes glowTitle { 
          0% { text-shadow:0 0 12px rgba(0,224,255,0.6),0 0 18px rgba(255,79,255,0.6);} 
          100% { text-shadow:0 0 22px rgba(0,224,255,0.9),0 0 28px rgba(255,79,255,0.9),0 0 32px rgba(0,255,144,0.7);} 
        }
        .animate-glowTitle { animation: glowTitle 3s ease-in-out infinite alternate; }
        .animate-pulse { animation: pulse 2s infinite; }
        .animate-floatDot { animation: floatDot 6s ease-in-out infinite alternate; }
        .timeline-item.show { opacity: 1 !important; transform: translateY(0) scale(1) !important; }
      `}</style>
    </section>
  );
};

export default Journey;
