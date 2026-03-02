import { useEffect, useState, useRef } from "react";

const logs = [
  "Initializing identity...",
  "Loading React ecosystem...",
  "Injecting Node runtime...",
  "Connecting MongoDB cluster...",
  "Creativity module online...",
  "System ready ✔",
];

export default function About() {
  const [visibleLogs, setVisibleLogs] = useState([]);
  const wrapRef = useRef(null);

  // typing logs
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleLogs((prev) => [...prev, logs[i]]);
      i++;
      if (i === logs.length) clearInterval(interval);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  // parallax using CSS variables (IMPORTANT FIX)
  useEffect(() => {
    const handleMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;

      wrapRef.current?.querySelectorAll(".parallax").forEach((el) => {
        const speed = el.dataset.speed;
        el.style.setProperty("--x", `${x * speed}px`);
        el.style.setProperty("--y", `${y * speed}px`);
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    // <section
    //   ref={wrapRef}
    //   className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-6 "
    // >
    <section
  ref={wrapRef}
  className="
    relative
    min-h-screen
    
    flex flex-col
    md:flex md:flex-row
    
    md:items-center md:justify-center
    
    items-center
    justify-start
    
    overflow-hidden
    text-white
    px-6
  "
>
      {/* Grid background */}
      {/* <div className="absolute inset-0 -z-30 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

      {/* Glow */}
      {/* <div className="absolute inset-0 -z-20 blur-[140px] bg-[radial-gradient(circle_at_30%_30%,#00e0ff33,transparent_40%),radial-gradient(circle_at_70%_70%,#ff4fff33,transparent_40%)]" /> */}

      {/* Center Identity */}
      {/* <div
        className="parallax absolute top-[30%] right-[30%] fade-in z-10 text-center backdrop-blur-3xl px-16 py-14 rounded-[30px] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] max-w-4xl"
        data-speed="1.2"
        style={{ transform: "translate(var(--x,0), var(--y,0))" }}
      > */}
      <div
  className="
    parallax
    absolute md:absolute
    md:top-[30%] md:right-[30%]
    
    static
    top-auto right-auto
    
    mx-auto
    text-center
    backdrop-blur-3xl
    px-8 md:px-16
    py-10 md:py-14
    rounded-[30px]
    border border-white/10
    shadow-[0_30px_100px_rgba(0,0,0,0.6)]
    max-w-4xl
    z-10
    fade-in
  "
  data-speed="1.2"
  style={{ transform: "translate(var(--x,0), var(--y,0))" }}
>
        <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold">
          I'm{" "}
          {/* <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"> */}
          <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> 
            Amrit Rai
          </span>
        </h1>

        <p className="mt-4 text-white/70">
          Full Stack Developer • Problem Solver • Creator
        </p>

        {/* <p className="mt-6 max-w-xl mx-auto text-white/50">
          I transform ideas into real, scalable, immersive web applications
          focused on performance, design, and experience.
        </p> */}
        <p>
          Apassionate Full Stack Web Developer skilled in{" "}
          <span className="text-[#00e0ff] font-semibold drop-shadow-[0_2_3px_#00e0ff]">
            JavaScript
          </span>
          ,{" "}
          <span className="text-[#00e0ff] font-semibold drop-shadow-[0_2_3px_#00e0ff]">
            React
          </span>
          ,{" "}
          <span className="text-[#00e0ff] font-semibold drop-shadow-[0_2_3px_#00e0ff]">
            Node.js
          </span>
          , and{" "}
          <span className="text-[#00e0ff] font-semibold drop-shadow-[0_2_3px_#00e0ff]">
            Mongo Db
          </span>
          . I love turning ideas into real-world applications and continuously
          improving my skills. With a{" "}
          <span className="text-[#ff4fff] font-semibold drop-shadow-[0_2_3px_#ff4fff]">
            problem-solving mindset
          </span>{" "}
          and a drive to learn, I strive to build{" "}
          <span className="text-[#00ff90] font-semibold drop-shadow-[0_2_3px_#00ff90]">
            user-friendly
          </span>{" "}
          and{" "}
          <span className="text-[#00ff90] font-semibold drop-shadow-[0_2_3px_#00ff90]">
            scalable solutions
          </span>
        </p>
      </div>

      {/* Skill cards */}
      <SkillCard text="React" pos="top-[12%] left-[18%]" speed="2" />
      <SkillCard text="Node.js" pos="top-[20%] right-[16%]" speed="3" />
      <SkillCard text="Tailwind" pos="bottom-[18%] left-[20%]" speed="2" />
      <SkillCard text="Express" pos="bottom-[22%] right-[18%]" speed="3" />
      <SkillCard text="JavaScript" pos="top-[45%] left-[6%]" speed="4" />
      <SkillCard text="MongoDB" pos="top-[50%] right-[6%]" speed="4" />

      {/* Console */}
      <div
        className="parallax absolute bottom-[13%] max-h-36 right-[20%] -translate-x-1/2 w-[380px] p-4 font-mono text-[13px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-cyan-300 fade-in hidden md:block"
        data-speed="1.5"
        style={{ transform: "translate(calc(-50% + var(--x,0)), var(--y,0))" }}
      >
        {visibleLogs.map((l, i) => (
          <div key={i}>➜ {l}</div>
        ))}
      </div>

      {/* Stats */}
      <div
  className="
    parallax
    
    absolute md:absolute
    md:top-[10%] md:right-[45%]
    md:-translate-x-1/2
    
    static
    top-auto right-auto translate-x-0
    
    mt-10
    mx-auto
    
    flex gap-6 md:gap-10
    px-6 md:px-8
    py-4
    rounded-2xl
    border border-white/10
    bg-white/5
    backdrop-blur-xl
    fade-in
    overflow-hidden
  "
  data-speed="1"
  style={{ transform: "translate(calc(-50% + var(--x,0)), var(--y,0))" }}
>
  <Stat label="Projects" value="5+" />
  <Stat label="Experience" value="9+ months" />
  <Stat label="Status" value="Active" green />
</div>
    </section>
  );
}

function SkillCard({ text, pos, speed }) {
  return (
    <div
      className={`parallax absolute ${pos} px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-sm transition hover:scale-110 hover:shadow-[0_10px_30px_rgba(0,224,255,0.4)] fade-in hidden md:block `}
      data-speed={speed}
      style={{ transform: "translate(var(--x,0), var(--y,0))" }}
    >
      {text}
    </div>
  );
}

function Stat({ label, value, green }) {
  return (
    <div className="text-center">
      <span className="block text-xs text-white/40">{label}</span>
      <b className={green ? "text-green-400" : ""}>{value}</b>
    </div>
  );
}
