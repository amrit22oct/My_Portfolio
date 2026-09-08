import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const journey = [
  {
    year: "2021",
    label: "THE BEGINNING",
    title: "Started Computer Science",
    description:
      "Began my B.E. in Computer Science & Engineering at IET, building the fundamentals of programming, problem solving and software engineering.",
    tech: ["CSE", "Programming", "Problem Solving"],
    type: "foundation",
  },
  {
    year: "2022",
    label: "FIRST BREAKTHROUGH",
    title: "TalentPool @ IET",
    description:
      "Started exploring development beyond academics, strengthening technical thinking through projects, challenges and hands-on learning.",
    tech: ["Logic Building", "Projects", "Learning"],
    type: "growth",
  },
  {
    year: "2023",
    label: "LEVEL UP",
    title: "TalentHunt @ IET",
    description:
      "Participated in coding activities and technical workshops while developing a stronger foundation in algorithms and software development.",
    tech: ["DSA", "Coding", "Algorithms"],
    type: "growth",
  },
  {
    year: "2024",
    label: "FULL STACK",
    title: "Going Deep Into Web Development",
    description:
      "Focused heavily on modern web development, building applications with JavaScript, React, Node.js, Express and MongoDB.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    type: "development",
  },
  {
    year: "2025",
    label: "PROFESSIONAL",
    title: "Full Stack Developer Intern",
    description:
      "Joined Tycho Technology Pvt. Ltd. as a Full Stack Developer Intern and worked on real-world applications, APIs, authentication, databases and scalable application architecture.",
    tech: ["MERN", "REST APIs", "JWT", "MongoDB"],
    type: "professional",
  },
  {
    year: "2026",
    label: "EXPANDING THE STACK",
    title: "MERN + Spring Boot",
    description:
      "Expanded beyond the JavaScript ecosystem into Java and Spring Boot, working with Spring Security, SQL and real-time communication to build more robust backend systems.",
    tech: ["Java", "Spring Boot", "Spring Security", "MySQL"],
    type: "current",
  },
];

const typeStyles = {
  foundation: {
    accent: "from-white to-white",
    dot: "bg-white",
  },
  growth: {
    accent: "from-purple-400 to-indigo-500",
    dot: "bg-purple-400",
  },
  development: {
    accent: "from-yellow-300 to-orange-500",
    dot: "bg-yellow-300",
  },
  professional: {
    accent: "from-cyan-400 to-blue-500",
    dot: "bg-cyan-400",
  },
  current: {
    accent: "from-cyan-400 to-fuchsia-500",
    dot: "bg-cyan-400",
  },
};

function TechPill({ children }) {
  return (
    <span
      className="
        rounded-full
        border border-white/[0.08]
        bg-white/[0.035]
        px-3 py-1.5
        text-[10px]
        font-medium
        tracking-wide
        text-white/70
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-cyan-400/[0.08]
        hover:text-cyan-300
        group-hover:border-white/[0.14]
        group-hover:text-white/75
      "
    >
      {children}
    </span>
  );
}

function JourneyCard({ item, index }) {
  const style = typeStyles[item.type];
  const isCurrent = item.type === "current";

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        grid
        grid-cols-[28px_1fr]
        gap-5

        md:grid-cols-[1fr_80px_1fr]
        md:gap-0
      "
    >
      {/* =====================================================
          YEAR
      ====================================================== */}

      <div
        className={`
          hidden
          md:block
          md:row-start-1
          md:self-center

          ${isLeft ? "md:col-start-3 md:text-left md:pl-8" : ""}
          ${!isLeft ? "md:col-start-1 md:text-right md:pr-8" : ""}
        `}
      >
        {/* Large faded year */}

        <div
          className={`
            select-none
            bg-gradient-to-br
            ${style.accent}
            bg-clip-text
            text-[clamp(4rem,7vw,6.5rem)]
            font-black
            leading-none
            tracking-[-0.08em]
            text-transparent
            opacity-[0.13]
            transition-all
            duration-500
            group-hover:opacity-30

            ${isLeft ? "md:text-left" : "md:text-right"}
          `}
        >
          {item.year}
        </div>

        {/* Small year */}

        {/* <div
          className={`
            -mt-12
            relative
            z-10

            font-mono
            text-xs
            font-bold
            tracking-[0.35em]
            text-white/35

            ${isLeft ? "text-left" : "text-right"}
          `}
        >
          {item.year}
        </div> */}
      </div>

      {/* =====================================================
          TIMELINE NODE
      ====================================================== */}

      <div
        className="
          relative
          z-20
          col-start-1
          row-start-1

          flex
          justify-center

          md:col-start-2
          md:row-start-1
          md:items-center
        "
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="
            relative
            mt-8
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#07090c]
            shadow-[0_0_30px_rgba(0,224,255,0.08)]
            cursor-pointer

            md:mt-0
          "
        >
          <div
            className={`
              h-2.5
              w-2.5
              rounded-full
              ${style.dot}
              ${isCurrent ? "animate-pulse" : ""}
            `}
          />

          {isCurrent && (
            <div
              className="
                absolute
                inset-0
                animate-ping
                rounded-full
                border
                border-cyan-400/30
              "
            />
          )}
        </motion.div>
      </div>

      {/* =====================================================
          MOBILE YEAR
      ====================================================== */}

      <div
        className="
          absolute
          left-[53px]
          top-[-25px]
          z-10

          md:hidden
        "
      >
        <span
          className={`
            font-mono
            text-[10px]
            font-bold
            tracking-[0.3em]
            ${style.dot.replace("bg-", "text-")}
          `}
        >
          {item.year}
        </span>
      </div>

      {/* =====================================================
          CONTENT CARD
      ====================================================== */}

      <div
        className={`
          group
          relative
          col-start-2
          row-start-1

          mb-14
          overflow-hidden
          rounded-[28px]
          border
          border-white/[0.07]
          bg-white/[0.025]
          p-7
          backdrop-blur-xl

          transition-all
          duration-500

          hover:-translate-y-1.5
          hover:scale-[1.01]
          hover:border-white/[0.18]
          hover:bg-white/[0.04]
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]

          md:mb-20
          md:p-8

          ${
            isLeft
              ? "md:col-start-1 md:row-start-1 md:mr-8"
              : "md:col-start-3 md:row-start-1 md:ml-8"
          }
        `}
      >
        {/* ===================================================
            GLOW
        ==================================================== */}

        <div
          className={`
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-48
            w-48
            rounded-full
            bg-gradient-to-br
            ${style.accent}
            opacity-[0.07]
            blur-3xl

            transition-all
            duration-700

            group-hover:scale-150
            group-hover:opacity-[0.22]
          `}
        />

        {/* secondary glow */}

        <div
          className={`
            pointer-events-none
            absolute
            -bottom-24
            -left-24
            h-40
            w-40
            rounded-full
            bg-gradient-to-br
            ${style.accent}
            opacity-[0.025]
            blur-3xl

            transition-all
            duration-700

            group-hover:opacity-[0.12]
          `}
        />

        {/* ===================================================
            TOP
        ==================================================== */}

        <div
          className="
            relative
            mb-6
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <div className="flex items-center gap-2">
            <span
              className={`
                h-1.5
                w-1.5
                rounded-full
                ${style.dot}
              `}
            />

            <span
              className="
                
                text-xs
                font-extrabold
                tracking-[0.25em]
                !bg-gradient-to-r
                from-white
                via-cyan-100
                to-cyan-400
                !bg-clip-text
                !text-transparent
                transition-colors
                duration-300
                group-hover:text-white/60
              "
            >
              {item.label}
            </span>
          </div>

          {isCurrent && (
            <span
              className="
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/[0.06]
                px-3
                py-1
                font-mono
                text-[8px]
                font-bold
                tracking-[0.2em]
                text-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,0.2)]
              "
            >
              CURRENT
            </span>
          )}
        </div>

        {/* ===================================================
            TITLE
        ==================================================== */}

        <h3
          className="
            relative
            max-w-lg
            text-2xl
            font-bold
            leading-tight
            tracking-[-0.03em]
            !bg-gradient-to-r
            from-white
            via-cyan-200
            to-cyan-400
            bg-clip-text
            !text-transparent

            transition-colors
            duration-300

           

            md:text-[28px]
          "
        >
          {item.title}
        </h3>

        {/* ===================================================
            DESCRIPTION
        ==================================================== */}

        <p
          className="
            relative
            mt-4
            max-w-xl
            text-sm
            leading-7
            text-white/70

            transition-colors
            duration-300

            group-hover:text-white/85
          "
        >
          {item.description}
        </p>

        {/* ===================================================
            TECH
        ==================================================== */}

        <div
          className="
            relative
            mt-7
            flex
            flex-wrap
            gap-2
          "
        >
          {item.tech.map((tech) => (
            <TechPill key={tech}>{tech}</TechPill>
          ))}
        </div>

        {/* ===================================================
            BOTTOM ACCENT
        ==================================================== */}

        <div
          className={`
            absolute
            bottom-0
            left-0
            h-[2px]
            w-0
            bg-gradient-to-r
            ${style.accent}

            transition-all
            duration-700

            group-hover:w-full
          `}
        />
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const containerRef = useRef(null);

  // Smooth scroll progress beam
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="journey"
      ref={containerRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-transparent
        px-5
        py-24
        text-white

      
      "
    >
      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-8xl p-10
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.header
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-24"
        >
          {/* section marker */}

          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-white" />

            <span
              className="
             text-2xl
             uppercase
             tracking-[0.35em]
             font-extrabold
           
             !bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             !bg-clip-text
             !text-transparent
             drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
           "
            >
              MY JOURNEY
            </span>
          </div>

          {/* heading */}

          {/* <div className="max-w-4xl">
            <h2
              className="
                text-[clamp(3.2rem,8vw,7.5rem)]
               
                !leading-[0.88]
                tracking-[-0.07em]
                !bg-gradient-to-r
                from-white
                via-cyan-100
                to-cyan-400 
                 !bg-clip-text
                !text-transparent
              "
            >
               <span
                className="
                bg-gradient-to-r
                from-white
                via-cyan-100
                to-cyan-400 bg-clip-text
                !text-transparent
                "
              >
                 Built over
              </span>
             
              <br />

              <span
                className="
                bg-gradient-to-r
                from-white
                via-cyan-100
                to-cyan-400 bg-clip-text
                !text-transparent
                "
              >
                time.
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-white

                md:text-lg
              "
            >
              From learning the fundamentals to building
              production-ready applications — every stage has
              shaped the way I think, build and solve problems.
            </p>
          </div> */}

          {/* metadata */}

          {/* <div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <div
              className="
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-5
                py-2.5
                font-mono
                text-[10px]
                tracking-[0.2em]
                text-white/40
              "
            >
              2021 — PRESENT
            </div>

            <div
              className="
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/[0.05]
                px-5
                py-2.5
                font-mono
                text-[10px]
                tracking-[0.2em]
                text-cyan-400
              "
            >
              CONTINUOUSLY BUILDING
            </div>
          </div> */}

          <div className="flex items-end justify-between gap-10">
            {/* LEFT CONTENT */}
            <div className="max-w-4xl">
              <h2
                className="
        text-[clamp(3.2rem,8vw,7.5rem)]
        !leading-[0.88]
        tracking-[-0.07em]
        !bg-gradient-to-r
        from-white
        via-cyan-100
        to-cyan-400
        !bg-clip-text
        !text-transparent
      "
              >
                <span
                  className="  !bg-gradient-to-r
        from-white
        via-cyan-100
        to-cyan-400
        !bg-clip-text
        !text-transparent"
                >
                  Built over
                </span>
                <br />
                <span
                  className="  !bg-gradient-to-r
        from-white
        via-cyan-100
        to-cyan-400
        !bg-clip-text
        !text-transparent"
                >
                  time.
                </span>
              </h2>

              <p
                className="
        mt-8
        max-w-2xl
        text-base
        leading-8
        text-white
        md:text-lg
      "
              >
                From learning the fundamentals to building production-ready
                applications — every stage has shaped the way I think, build and
                solve problems.
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="hidden shrink-0 items-center gap-10 pb-2 md:flex">
              <div className="text-right">
                <div className="text-xs font-medium uppercase tracking-[0.25em] text-white">
                  Journey
                </div>

                <div
                  className="mt-2 text-sm font-medium tracking-[0.12em]   !bg-gradient-to-r
        from-white
        via-cyan-100
        to-cyan-400
        !bg-clip-text
        !text-transparent "
                >
                  2021 — PRESENT
                </div>
              </div>

              <div className="h-10 w-px bg-cyan-200" />

              <div className="text-right">
                <div className="text-xs font-medium uppercase tracking-[0.25em] text-white">
                  Status
                </div>

                <div
                  className="mt-2 text-sm font-medium tracking-[0.12em]   !bg-gradient-to-r
        from-white
        via-cyan-100
        to-cyan-400
        !bg-clip-text
        !text-transparent"
                >
                  CONTINUOUSLY BUILDING
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* ===================================================
            TIMELINE
        ==================================================== */}

        <div className="relative">
          {/* Main timeline background track */}

          <div
            className="
              absolute
              bottom-5
              left-[14px]
              top-5
              w-px
              bg-white/10

              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* Animated interactive scroll progress beam */}

          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="
              absolute
              bottom-5
              left-[14px]
              top-5
              w-px
             

              bg-gradient-to-r
              from-cyan-100
              via-cyan-200
              to-cyan-400
             
              shadow-[0_0_12px_rgba(34,211,238,0.8)]

              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* Items */}

          <div className="space-y-0">
            {journey.map((item, index) => (
              <JourneyCard
                key={`${item.year}-${item.title}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ===================================================
            FOOTER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-28
            border-t
            border-white/[0.07]
            pt-12
          "
        >
          <div
            className="
              grid
              gap-10

              md:grid-cols-[1fr_auto]
              md:items-end
            "
          >
            <div>
              <span
                className="
                  
                  text-xs
                  tracking-[-0.04em]
                  uppercase
                  bg-gradient-to-r
                  from-white
                  via-cyan-100
                  to-cyan-400 bg-clip-text
                  !text-transparent font-extrabold
                "
              >
                Still writing the story
              </span>

              <h3
                className="
                  mt-4
                  max-w-3xl
                  text-3xl
                  font-bold
                  tracking-[-0.04em]
                  bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400 bg-clip-text
                  !text-transparent
                  md:text-5xl
                "
              >
                The journey isn't finished.That's the point.
                {/* <span className="   bg-gradient-to-r
                  from-white
                  via-cyan-100
                  to-cyan-400 bg-clip-text
                  !text-transparent ">
                  {" "}
                  That's the point.
                </span> */}
              </h3>
            </div>

            <div
              className="
                font-mono
                text-xs
               

                md:text-right
              "
            >
              <span
                className=" !bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400 bg-clip-text
                  !text-transparent"
              >
                STATUS
              </span>

              <div
                className="mt-1  bg-gradient-to-r
              from-white
              via-cyan-100
              to-cyan-400
              bg-clip-text
              text-transparent font-bold"
              >
                BUILDING / LEARNING / SHIPPING
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
