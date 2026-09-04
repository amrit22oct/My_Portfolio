// import { useEffect, useState, useRef } from "react";

// const logs = [
//   "Initializing identity...",
//   "Loading React ecosystem...",
//   "Injecting Node runtime...",
//   "Connecting MongoDB cluster...",
//   "Creativity module online...",
//   "System ready ✔",
// ];

// export default function About() {
//   const [visibleLogs, setVisibleLogs] = useState([]);
//   const wrapRef = useRef(null);

//   // typing logs
//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setVisibleLogs((prev) => [...prev, logs[i]]);
//       i++;
//       if (i === logs.length) clearInterval(interval);
//     }, 600);
//     return () => clearInterval(interval);
//   }, []);

//   // parallax using CSS variables (IMPORTANT FIX)
//   useEffect(() => {
//     const handleMove = (e) => {
//       const x = (window.innerWidth / 2 - e.clientX) / 40;
//       const y = (window.innerHeight / 2 - e.clientY) / 40;

//       wrapRef.current?.querySelectorAll(".parallax").forEach((el) => {
//         const speed = el.dataset.speed;
//         el.style.setProperty("--x", `${x * speed}px`);
//         el.style.setProperty("--y", `${y * speed}px`);
//       });
//     };

//     window.addEventListener("mousemove", handleMove);
//     return () => window.removeEventListener("mousemove", handleMove);
//   }, []);

//   return (
//     // <section
//     //   ref={wrapRef}
//     //   className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-6 "
//     // >
//     <section
//   ref={wrapRef}
//   className="
//     relative
//     min-h-screen
    
//     flex flex-col
//     md:flex md:flex-row
    
//     md:items-center md:justify-center
    
//     items-center
//     justify-start
    
//     overflow-hidden
//     text-white
//     px-6
//   "
// >
//       {/* Grid background */}
//       {/* <div className="absolute inset-0 -z-30 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

//       {/* Glow */}
//       {/* <div className="absolute inset-0 -z-20 blur-[140px] bg-[radial-gradient(circle_at_30%_30%,#00e0ff33,transparent_40%),radial-gradient(circle_at_70%_70%,#ff4fff33,transparent_40%)]" /> */}

//       {/* Center Identity */}
//       {/* <div
//         className="parallax absolute top-[30%] right-[30%] fade-in z-10 text-center backdrop-blur-3xl px-16 py-14 rounded-[30px] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] max-w-4xl"
//         data-speed="1.2"
//         style={{ transform: "translate(var(--x,0), var(--y,0))" }}
//       > */}
//       <div
//   className="
//     parallax
//     absolute md:absolute
//     md:top-[30%] md:right-[30%]
    
//     static
//     top-auto right-auto
    
//     mx-auto
//     text-center
//     backdrop-blur-3xl
//     px-8 md:px-16
//     py-10 md:py-14
//     rounded-[30px]
//     border border-white/10
//     shadow-[0_30px_100px_rgba(0,0,0,0.6)]
//     max-w-4xl
//     z-10
//     fade-in
//   "
//   data-speed="1.2"
//   style={{ transform: "translate(var(--x,0), var(--y,0))" }}
// >
//         <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold">
//           I'm{" "}
//           {/* <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"> */}
//           <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> 
//             Amrit Rai
//           </span>
//         </h1>

//         <p className="mt-4 text-white/70">
//           Full Stack Developer • Problem Solver • Creator
//         </p>

//         {/* <p className="mt-6 max-w-xl mx-auto text-white/50">
//           I transform ideas into real, scalable, immersive web applications
//           focused on performance, design, and experience.
//         </p> */}
//         <p>
//           Apassionate Full Stack Web Developer skilled in{" "}
//           <span className="text-[#00e0ff] font-semibold drop-shadow-[0_2_3px_#00e0ff]">
//             JavaScript
//           </span>
//           ,{" "}
//           <span className="text-[#00e0ff] font-semibold drop-shadow-[0_2_3px_#00e0ff]">
//             React
//           </span>
//           ,{" "}
//           <span className="text-[#00e0ff] font-semibold drop-shadow-[0_2_3px_#00e0ff]">
//             Node.js
//           </span>
//           , and{" "}
//           <span className="text-[#00e0ff] font-semibold drop-shadow-[0_2_3px_#00e0ff]">
//             Mongo Db
//           </span>
//           . I love turning ideas into real-world applications and continuously
//           improving my skills. With a{" "}
//           <span className="text-[#ff4fff] font-semibold drop-shadow-[0_2_3px_#ff4fff]">
//             problem-solving mindset
//           </span>{" "}
//           and a drive to learn, I strive to build{" "}
//           <span className="text-[#00ff90] font-semibold drop-shadow-[0_2_3px_#00ff90]">
//             user-friendly
//           </span>{" "}
//           and{" "}
//           <span className="text-[#00ff90] font-semibold drop-shadow-[0_2_3px_#00ff90]">
//             scalable solutions
//           </span>
//         </p>
//       </div>

//       {/* Skill cards */}
//       {/* <SkillCard text="React" pos="top-[12%] left-[18%]" speed="2" />
//       <SkillCard text="Node.js" pos="top-[20%] right-[16%]" speed="3" />
//       <SkillCard text="Tailwind" pos="bottom-[18%] left-[20%]" speed="2" />
//       <SkillCard text="Express" pos="bottom-[22%] right-[18%]" speed="3" />
//       <SkillCard text="JavaScript" pos="top-[45%] left-[6%]" speed="4" />
//       <SkillCard text="MongoDB" pos="top-[50%] right-[6%]" speed="4" /> */}

//       {/* Console */}
//       <div
//         className="parallax absolute bottom-[13%] max-h-36 right-[20%] -translate-x-1/2 w-[380px] p-4 font-mono text-[13px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-cyan-300 fade-in hidden md:block"
//         data-speed="1.5"
//         style={{ transform: "translate(calc(-50% + var(--x,0)), var(--y,0))" }}
//       >
//         {visibleLogs.map((l, i) => (
//           <div key={i}>➜ {l}</div>
//         ))}
//       </div>

//       {/* Stats */}
//       <div
//   className="
//     parallax
    
//     absolute md:absolute
//     md:top-[10%] md:right-[45%]
//     md:-translate-x-1/2
    
//     static
//     top-auto right-auto translate-x-0
    
//     mt-10
//     mx-auto
    
//     flex gap-6 md:gap-10
//     px-6 md:px-8
//     py-4
//     rounded-2xl
//     border border-white/10
//     bg-white/5
//     backdrop-blur-xl
//     fade-in
//     overflow-hidden
//   "
//   data-speed="1"
//   style={{ transform: "translate(calc(-50% + var(--x,0)), var(--y,0))" }}
// >
//   <Stat label="Projects" value="5+" />
//   <Stat label="Experience" value="9+ months" />
//   <Stat label="Status" value="Active" green />
// </div>
//     </section>
//   );
// }

// function SkillCard({ text, pos, speed }) {
//   return (
//     <div
//       className={`parallax absolute ${pos} px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-sm transition hover:scale-110 hover:shadow-[0_10px_30px_rgba(0,224,255,0.4)] fade-in hidden md:block `}
//       data-speed={speed}
//       style={{ transform: "translate(var(--x,0), var(--y,0))" }}
//     >
//       {text}
//     </div>
//   );
// }

// function Stat({ label, value, green }) {
//   return (
//     <div className="text-center">
//       <span className="block text-xs text-white/40">{label}</span>
//       <b className={green ? "text-green-400" : ""}>{value}</b>
//     </div>
//   );
// }





import { useEffect, useRef, useState } from "react";

const technologies = [
  "Java",
  "JavaScript",
  "React",
  "Node.js",
  "Spring Boot",
  "MongoDB",
  "MySQL",
  "Git",
  "Github",
  "Tailwind css",
  "Redux",
];

const stats = [
  { value: "5+", label: "Projects" },
  { value: "6", label: "Months Experience" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const [activeTech, setActiveTech] = useState("React");

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;

    if (!section || !card) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      card.style.transform = `
        perspective(1200px)
        rotateY(${x * 4}deg)
        rotateX(${y * -4}deg)
        translateY(-4px)
      `;

      section.style.setProperty("--mx", `${x * 100}%`);
      section.style.setProperty("--my", `${y * 100}%`);
    };

    const handleMouseLeave = () => {
      card.style.transform = `
        perspective(1200px)
        rotateY(0deg)
        rotateX(0deg)
        translateY(0)
      `;
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-transparent
        px-5
        py-28
        text-white
        sm:px-8
        lg:px-12
      "
    >
   
    

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto px-20">

        {/* section indicator */}
        <div className="mb-16 flex items-center gap-4">
         

          <span className="h-px w-12 bg-white/90" />

          <span
            className="
              text-2xl
              uppercase
              tracking-[0.35em]
              font-extrabold
              bg-gradient-to-r
              from-cyan-300
              via-cyan-400
              to-white
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
            "
          >
            About Me
          </span>
        </div>

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-24
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div>

            {/* eyebrow */}
            {/* <div
              className="
                mb-7
                flex
                items-center
                gap-3
                text-xs
                text-white/30
              "
            >
              <span className="h-px w-6 bg-cyan-400/50" />

              <span>
                Software Development Engineer
              </span>
            </div> */}

            {/* Main heading */}
            <h1
              className="
                text-[clamp(3.5rem,7vw,7.2rem)]
                font-semibold
                leading-[0.88]
                tracking-[-0.065em]
              "
            >
              I build

             

              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-cyan-100
                  to-cyan-400 px-2
                  bg-clip-text
                  text-transparent
                "
              >
                things
              </span>

              <br />

              <span className="
               bg-gradient-to-r
               from-white
               via-cyan-100
               to-cyan-400 px-2
               bg-clip-text
               text-transparent
               drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]">
                that matter.
              </span>
            </h1>

            {/* Main description */}
            <div className="mt-10 max-w-[650px]">

              <p
                className="
                  text-[16px]
                  leading-8
                  text-white/80
                  sm:text-[17px]
                "
              >
                I'm{" "}
                <span className="font-extrabold  bg-gradient-to-r
               from-white
               via-cyan-100
               to-cyan-400 px-2
               bg-clip-text
               text-transparent
               drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]">
                  Amrit Rai
                </span>
                , a Full Stack Developer who enjoys turning
                ideas into modern, reliable and scalable web
                applications.
              </p>

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-white/80
                  sm:text-[15px]
                "
              >
                I work across the frontend and backend,
                combining thoughtful interfaces with clean
                architecture, APIs, authentication, databases
                and real-world application logic. I'm especially
                interested in building software that is not only
                functional, but also fast, maintainable and
                enjoyable to use.
              </p>

            </div>

            {/* =================================================
                TECH STACK
            ================================================== */}

            <div className="mt-10">

              <div
                className="
                  mb-4
                  text-[20px]
                  uppercase
                  tracking-[0.3em]
                  font-extrabold  bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400 px-2
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
                "
              >
                Technologies I work with
              </div>

              <div className="flex flex-wrap gap-2">

                {technologies.map((tech) => (
                  <button
                    key={tech}
                    onMouseEnter={() => setActiveTech(tech)}
                    className={`
                      rounded-full
                      border
                      px-4
                      py-2
                      text-xs
                      transition-all
                      duration-300 font-bold
                      
                      ${
                        activeTech === tech
                          ? "border-cyan-400/30 bg-cyan-400/[0.07]    bg-gradient-to-r from-white via-cyan-200 to-cyan-400 px-2 bg-clip-text  text-transparent drop-shadow-[0_0_12px_rgba(0,224,255,0.25)] "
                          : "border-white/[0.07] bg-white/[0.02] text-white/35 hover:border-white/15 hover:text-white/60"
                      }
                    `}
                  >
                    {tech}
                  </button>
                ))}

              </div>
            </div>

            {/* =================================================
                STATUS
            ================================================== */}

            <div className="mt-10 flex flex-wrap items-center gap-6">

              <div className="flex items-center gap-3">

                <span className="relative flex h-2.5 w-2.5">

                  <span
                    className="
                      absolute
                      inset-0
                      animate-ping
                      rounded-full
                      bg-cyan-400
                      opacity-50
                    "
                  />

                  <span
                    className="
                      relative
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-cyan-400
                    "
                  />

                </span>

                <span className="text-xs  font-extrabold  bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400 px-2
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]">
                  Open to opportunities
                </span>

              </div>

              <span className="h-4 w-px bg-white/10" />

              <span className="text-xs  font-extrabold  bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400 px-2
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]">
                Delhi, India
              </span>

            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div className="relative">

            {/* decorative vertical line */}
            <div
              className="
                absolute
                -left-8
                top-10
                hidden
                h-[75%]
                w-px
                bg-gradient-to-b
                from-transparent
                via-cyan-400/80
                to-transparent
                lg:block
              "
            />

            {/* =================================================
                PROFILE CARD
            ================================================== */}

            <div
              ref={cardRef}
              className="
                relative
                transition-transform
                duration-300
                ease-out
                will-change-transform
              "
            >

              {/* glow behind card */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[10%]
                  rounded-[40px]
                  bg-cyan-400/80
                  blur-[80px]
                "
              />

              {/* card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/[0.09]
                  bg-[#0a0d11]/90
                  shadow-[0_50px_120px_rgba(0,0,0,0.55)]
                  backdrop-blur-2xl
                "
              >

                {/* top light */}
                <div
                  className="
                    absolute
                    left-[15%]
                    right-[15%]
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-400/50
                    to-transparent
                  "
                />

                {/* card header */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/[0.06]
                    px-6
                    py-5
                  "
                >

                  <div className="flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-white" />
                    <span className="h-2 w-2 rounded-full bg-cyan-200" />
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />

                  </div>

                  <span
                    className="
                      font-mono
                      text-xl
                      tracking-widest
                      font-extrabold  bg-gradient-to-r
                      from-white
                      via-cyan-200
                      to-cyan-400 px-2
                      bg-clip-text
                      text-transparent
                      drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
                    "
                  >
                    PROFILE
                  </span>

                </div>

                {/* card body */}
                <div className="p-7 sm:p-9">

                  {/* identity */}
                  <div className="flex items-center gap-5">

                    {/* avatar */}
                    <div
                      className="
                        relative
                        flex
                        h-20
                        w-20
                        shrink-0
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-[24px]
                        border
                        border-cyan-400/20
                        bg-gradient-to-br
                        from-cyan-400/[0.12]
                        to-white/[0.02]
                        shadow-[0_0_50px_rgba(0,224,255,0.08)]
                      "
                    >

                      <span
                        className="
                          text-xl
                          font-semibold
                          tracking-tight bg-gradient-to-r
                          from-white
                          via-cyan-200
                          to-cyan-400 px-2
                          bg-clip-text
                          text-transparent
                          drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
                        "
                      >
                        AR
                      </span>

                      <div
                        className="
                          absolute
                          bottom-2
                          right-2
                          h-2
                          w-2
                          rounded-full
                          bg-green-400
                          shadow-[0_0_12px_rgba(74,222,128,0.8)]
                        "
                      />

                    </div>

                    <div className="flex flex-col items-start justify-center ">

                      <p className=" flex justify-center text-2xl font-semibold tracking-tight    bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400 px-2
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_12px_rgba(0,224,255,0.25)] m-0 ">
                        Amrit Rai
                      </p>

                      <p className=" flex justify-center m-0 text-md  font-extrabold  bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400 px-2
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]">
                      Software Development Engineer
                      </p>

                    </div>

                  </div>

                  {/* quote */}
                  <div
                    className="
                      mt-9
                      rounded-2xl
                      border
                      border-white/[0.06]
                      bg-white/[0.02]
                      p-4
                    "
                  >

                  
                    <p
                      className="
                        text-sm
                        leading-7
                        text-white m-0
                      "
                    >
                    
                      I don't just want to make applications
                      work. I want to understand how they work,
                      make them better, and keep improving with
                      every project.
                     
                    </p>
                   

                  </div>

                  {/* stats */}
                  <div className="mt-5 grid grid-cols-3 gap-2">

                    {stats.map((stat, index) => (
                      <div
                        key={stat.label}
                        className="
                          rounded-2xl
                          border
                          border-white/[0.06]
                          bg-white/[0.02]
                          px-3
                          py-2
                          text-center
                        "
                      >

                        <div
                          className={`
                            text-xl
                            font-semibold
                            tracking-tight
                            ${
                              index === 1
                                ? "text-cyan-300"
                                : "text-white/80"
                            }
                          `}
                        >
                          {stat.value}
                        </div>

                        <div
                          className="
                            mt-2
                            text-[8px]
                            uppercase
                            tracking-[0.18em]
                            font-extrabold  bg-gradient-to-r
                            from-white
                            via-cyan-200
                            to-cyan-400 px-2
                            bg-clip-text
                            text-transparent
                            drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
                          "
                        >
                          {stat.label}
                        </div>

                      </div>
                    ))}

                  </div>

                  {/* separator */}
                  <div className="my-7 h-px bg-white/[0.06]" />

                  {/* current focus */}
                  <div>

                    <div className="flex items-center justify-between">

                      <span
                        className="
                          text-sm
                          uppercase
                          tracking-[0.25em] font-extrabold  bg-gradient-to-r
                          from-white
                          via-cyan-200
                          to-cyan-400 px-2
                          bg-clip-text
                          text-transparent
                          drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
                        "
                      >
                        Current focus
                      </span>

                      <span className="text-sm  font-semibold  bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400 px-2
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]">
                        {activeTech}
                      </span>

                    </div>

                    <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.05]">

                      <div
                        className="
                          h-full
                          w-[78%]
                          rounded-full
                          bg-gradient-to-r
                          from-white
                          via-cyan-200
                          to-cyan-400
                          shadow-[0_0_15px_rgba(0,224,255,0.5)]
                        "
                      />

                    </div>

                    <div className="mt-3 flex justify-between text-[9px] ">
                      <span className=" font-extrabold  bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400 px-2
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
                  ">Learning</span>
                      <span className=" font-extrabold  bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400 px-2
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
                  ">Building</span>
                      <span className=" font-extrabold  bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400 px-2
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
                  ">Improving</span>
                    </div>

                  </div>

                </div>
              </div>
            </div>

        

          </div>
        </div>

        {/* =====================================================
            BOTTOM PRINCIPLES
        ====================================================== */}

        <div className="mt-32">

          <div className="mb-8 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <span className="h-px w-7 bg-white" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  font-extrabold  bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400 px-2
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
                "
              >
                What drives me
              </span>

            </div>

            <span className=" text-[10px] font-extrabold  bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400 px-2
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]">
              03 / PRINCIPLES
            </span>

          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <Principle
              number="01"
              title="Build with purpose"
              description="Every feature should solve a real problem, create value and make the product better."
            />

            <Principle
              number="02"
              title="Keep it maintainable"
              description="Clean structure, readable code and good architecture matter just as much as getting the job done."
            />

            <Principle
              number="03"
              title="Never stop learning"
              description="Technology changes constantly. I believe becoming a better developer is a continuous process."
            />

          </div>

        </div>

      </div>
    </section>
  );
}


/* ============================================================
   PRINCIPLE CARD
============================================================ */

function Principle({ number, title, description }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-white/[0.06]
        
        p-7
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-cyan-400/15
        hover:bg-white/[0.05]
      "
    >

      {/* hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-cyan-400
          blur-[50px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="flex items-center gap-4">

        <span
          className="
            font-mono
            text-sm
            text-cyan-300
          "
        >
          {number}
        </span>

        <div className="h-px flex-1 bg-cyan-200/[0.2]" />

      </div>

      <h3 className="mt-7 text-sm font-medium   !text-transparent  !bg-gradient-to-r from-white via-cyan-200 to-cyan-400 px-2
                  bg-clip-text
                 
                  drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]">
        {title}
      </h3>

      <p
        className="
          mt-3
          max-w-sm
          text-xs
          leading-6
          text-white
        "
      >
        {description}
      </p>

    </div>
  );
}