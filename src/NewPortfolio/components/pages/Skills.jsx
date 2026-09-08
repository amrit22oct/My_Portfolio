
import React from "react";
import { motion } from "framer-motion";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiHibernate,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiCplusplus,
  SiPython,
  SiJsonwebtokens,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";

import {
  FaJava,
  FaShieldAlt,
  FaDatabase,
  FaServer,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";

/* =========================================================
   TECHNOLOGY DATA
========================================================= */

const frontend = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    role: "UI ENGINE",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    role: "TYPE SAFETY",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    role: "LANGUAGE",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    role: "STYLING",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#ED8B00",
    role: "SKLETON",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#06B6D4",
    role: "STYLING",
  },
  {
    name: "BootsTrap CSS",
    icon: SiBootstrap,
    color: "#06B6D4",
    role: "STYLING",
  },
];

const backend = [
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
    role: "PRIMARY BACKEND",
    featured: true,
  },
  {
    name: "Spring Security",
    icon: FaShieldAlt,
    color: "#6DB33F",
    role: "SECURITY",
  },
  {
    name: "Hibernate",
    icon: SiHibernate,
    color: "#59666C",
    role: "ORM",
  },
  {
    name: "JPA",
    icon: FaJava,
    color: "#ED8B00",
    role: "PERSISTENCE",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    role: "RUNTIME",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#FFFFFF",
    role: "API",
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
    color: "#FFFFFF",
    role: "AUTH",
  },
];

const databases = [
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    role: "RELATIONAL",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    role: "DOCUMENT",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    role: "RELATIONAL",
  },
];

const programming = [
  {
    name: "Java",
    icon: FaJava,
    color: "#ED8B00",
    role: "BACKEND",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C",
    role: "DSA",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    role: "GENERAL",
  },
];

const tools = [
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    role: "VERSION CONTROL",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
    role: "COLLABORATION",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#FFFFFF",
    role: "DEPLOYMENT",
  },
];

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({ number, title }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono text-s tracking-[0.3em] text-white">
        {number}
      </span>

      <span className="h-px w-7 bg-white" />

      <span
        className=" text-xs uppercase tracking-[0.28em]   bg-gradient-to-r
                    from-white
                    via-cyan-300
                    to-cyan-400
                    bg-clip-text
                    text-transparent font-extrabold "
      >
        {title}
      </span>
    </div>
  );
}

/* =========================================================
   TECH CARD
========================================================= */

function TechCard({ tech, index }) {
  const Icon = tech.icon;

  return (
    <motion.div
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -6,
      }}
      className="group relative"
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-2
          rounded-3xl
          opacity-0
          blur-xl
          transition-all
          duration-500
          group-hover:opacity-20
        "
        style={{
          backgroundColor: tech.color,
        }}
      />

      {/* Card */}

      <div
        className={`
          relative
          overflow-hidden
          rounded-2xl
          border
          bg-[#080a0e]/90
          backdrop-blur-xl
          transition-all
          duration-500
          ${tech.featured ? "border-cyan-400/20" : "border-white/[0.07]"}
          group-hover:border-white/[0.18]
          group-hover:bg-[#0b0f14]
        `}
      >
        {/* Top line */}

        <div
          className="
            absolute
            left-0
            top-0
            h-px
            w-0
            transition-all
            duration-500
            group-hover:w-full
          "
          style={{
            background: `linear-gradient(
              90deg,
              transparent,
              ${tech.color},
              transparent
            )`,
          }}
        />

        {/* Featured badge */}

        {tech.featured && (
          <div className="absolute right-3 top-3">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-2 py-1 font-mono text-[7px] uppercase tracking-[0.2em] text-cyan-400/70">
              Primary
            </span>
          </div>
        )}

        <div className="p-5">
          {/* Icon */}

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              transition-all
              duration-500
              group-hover:scale-110
            "
          >
            <Icon
              size={24}
              color={tech.color}
              className="
                opacity-70
                transition-all
                duration-500
                group-hover:opacity-100
              "
            />
          </div>

          {/* Text */}

          <div className="mt-6">
            <h4
              className="
                text-sm
                tracking-tight
               
                transition-colors
                duration-300 !bg-gradient-to-r
                    from-cyan-100
                    via-cyan-300
                    to-cyan-400
                    bg-clip-text
                    !text-transparent !font-bold
                group-hover:text-white
              "
            >
              {tech.name}
            </h4>

            <p
              className="
                mt-1
                font-mono
                text-[7px]
                uppercase
                tracking-[0.2em]
                !text-white/80
                transition-colors
                duration-300
                !group-hover:text-white
              "
            >
              {tech.role}
            </p>
          </div>

          {/* Indicator */}

          <div className="mt-5 flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: tech.color,
                boxShadow: `0 0 8px ${tech.color}`,
              }}
            />

            <div className="h-px flex-1 bg-cyan-100/[0.68]" />

            <span className="font-mono text-[7px] text-white">ACTIVE</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   ARCHITECTURE NODE
========================================================= */

function ArchitectureNode({ icon: Icon, title, subtitle, color, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="relative flex items-center gap-3"
    >
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-white/[0.08]
          bg-white/[0.025]
        "
      >
        <Icon
          size={17}
          style={{
            color,
          }}
        />
      </div>

      <div>
        <p className="text-[11px] font-medium text-white/70">{title}</p>

        <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.2em] text-white/90">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function SkillsPerspective() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        px-5
        py-32
        sm:px-8
        lg:px-12
      "
    >
      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-8xl p-4">
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mb-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            {/* Heading */}

            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  mb-6
                  flex
                  items-center
                  gap-3
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.45em]
                  text-cyan-400
                "
              >
                <div className="mb-16 flex items-center gap-4">
                  <span className="h-px w-12 bg-white" />

                  <span
                    className="
             text-2xl
             uppercase
             tracking-[0.35em]
             font-extrabold
           
             bg-gradient-to-r
             from-white
             via-cyan-100
             to-cyan-400
             bg-clip-text
             text-transparent
             drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
           "
                  >
                    Expertise / Technology
                  </span>
                </div>
              </motion.div>

              <motion.h2
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
                  max-w-5xl
                 
                  !bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400
                  bg-clip-text
                  !text-transparent
                
                  leading-[0.82]
                  tracking-[-0.075em]
                  
                "
              >
                <span
                  className="
                    bg-gradient-to-r
                    from-white
                    via-cyan-200
                    to-cyan-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  The tools
                </span>

                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-white
                    via-cyan-200
                    to-cyan-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  behind the code.
                </span>
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
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
                  delay: 0.15,
                }}
                className="
                  mt-8
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white
                  md:text-base
                "
              >
                A full-stack toolkit combining modern frontend development,
                Java-based backend architecture, secure APIs, persistence layers
                and production workflows.
              </motion.p>
            </div>

            {/* Right status */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                flex
                items-center
                gap-8
                lg:pb-2
              "
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-white">
                  Technologies
                </p>

                <p
                  className="mt-2 text-2xl  bg-gradient-to-r
                    from-cyan-100
                    via-cyan-300
                    to-cyan-400
                    bg-clip-text
                    text-transparent font-extrabold "
                >
                  20+
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-white">
                  Architecture
                </p>

                <p
                  className="mt-2 text-2xl  bg-gradient-to-r
                    from-white
                    via-cyan-200
                    to-cyan-400
                    bg-clip-text
                    text-transparent font-extrabold"
                >
                  Full Stack
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===================================================
            ARCHITECTURE PANEL
        =================================================== */}

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
            relative
            mb-24
            overflow-hidden
            rounded-[28px]
            border
            border-white/[0.07]
            bg-[#080a0e]/80
            backdrop-blur-2xl
          "
        >
          {/* Header */}

          <div
            className="
              flex
              flex-col
              gap-4
              border-b
              border-white/[0.06]
              px-6
              py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-8
            "
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,224,255,0.8)]" />

              <span
                className=" text-xs uppercase tracking-[0.3em]  bg-gradient-to-r
                    from-cyan-100
                    via-cyan-300
                    to-cyan-400
                    bg-clip-text
                    text-transparent font-extrabold "
              >
                System Architecture
              </span>
            </div>

            <span
              className=" text-xs uppercase tracking-[0.25em]  bg-gradient-to-r
                    from-cyan-100
                    via-cyan-300
                    to-cyan-400
                    bg-clip-text
                    text-transparent font-extrabold "
            >
              DEVELOPMENT STACK / 2026
            </span>
          </div>

          {/* Architecture */}

          <div className="relative px-6 py-10 sm:px-10">
            {/* Connecting line */}

            <div
              className="
                absolute
                left-[50px]
                right-[50px]
                top-1/2
                hidden
                h-px
                bg-gradient-to-r
                from-transparent
                via-cyan-400/20
                to-transparent
                lg:block
              "
            />

            <div
              className="
              relative
              grid
              gap-8
              sm:grid-cols-2
              lg:grid-cols-5
              lg:items-center
            "
            >
              <ArchitectureNode
                index={0}
                icon={FaCode}
                title="Interface"
                subtitle="React / TypeScript"
                color="#61DAFB"
              />

              <ArchitectureNode
                index={1}
                icon={FaServer}
                title="API Layer"
                subtitle="Spring Boot / Node"
                color="#6DB33F"
              />

              <ArchitectureNode
                index={2}
                icon={FaShieldAlt}
                title="Security"
                subtitle="Spring Security / JWT"
                color="#00E0FF"
              />

              <ArchitectureNode
                index={3}
                icon={FaLayerGroup}
                title="Persistence"
                subtitle="JPA / Hibernate"
                color="#ED8B00"
              />

              <ArchitectureNode
                index={4}
                icon={FaDatabase}
                title="Data"
                subtitle="MySQL / MongoDB"
                color="#47A248"
              />
            </div>
          </div>

          {/* Footer */}

          <div
            className="
            flex
            items-center
            justify-between
            border-t
            border-white/[0.06]
            px-6
            py-4
            sm:px-8
          "
          >
            <span
              className=" text-[10px] uppercase tracking-[0.25em]  bg-gradient-to-r
                    from-cyan-100
                    via-cyan-300
                    to-cyan-400
                    bg-clip-text
                    text-transparent font-bold "
            >
              Request
            </span>

            <span
              className="text-[10px] uppercase tracking-[0.25em]  bg-gradient-to-r
                    from-cyan-100
                    via-cyan-300
                    to-cyan-400
                    bg-clip-text
                    text-transparent font-bold"
            >
              UI → API → SECURITY → DATA
            </span>
          </div>
        </motion.div>

        {/* ===================================================
            FRONTEND / BACKEND
        =================================================== */}

        <div
          className="
          grid
          gap-16
          lg:grid-cols-2
        "
        >
          {/* FRONTEND */}

          <div>
            <SectionLabel number="01" title="Frontend ecosystem" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {frontend.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>

          {/* BACKEND */}

          <div>
            <SectionLabel number="02" title="Backend ecosystem" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {backend.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================
            LOWER ECOSYSTEM
        =================================================== */}

        <div
          className="
          mt-20
          grid
          gap-16
          border-t
          border-white/[0.06]
          pt-20
          lg:grid-cols-3
        "
        >
          {/* DATABASE */}

          <div>
            <SectionLabel number="03" title="Data layer" />

            <div className="space-y-3">
              {databases.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>

          {/* PROGRAMMING */}

          <div>
            <SectionLabel number="04" title="Programming" />

            <div className="space-y-3">
              {programming.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>

          {/* TOOLS */}

          <div>
            <SectionLabel number="05" title="Engineering workflow" />

            <div className="space-y-3">
              {tools.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================
            CURRENTLY BUILDING
        =================================================== */}

        <motion.div
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
          className="
            mt-24
            overflow-hidden
            rounded-[24px]
            border
            border-cyan-400/[0.12]
            bg-cyan-400/[0.025]
          "
        >
          <div
            className="
            flex
            flex-col
            gap-6
            px-6
            py-7
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-8
          "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-cyan-400/20
                bg-cyan-400/[0.05]
              "
              >
                <span
                  className="
                  h-2
                  w-2
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_15px_rgba(0,224,255,0.9)]
                "
                />
              </div>

              <div>
                <p
                  className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                 bg-gradient-to-r
                  from-cyan-100
                  via-cyan-300
                  to-cyan-400
                  bg-clip-text
                  text-transparent font-extrabold
                "
                >
                  Currently expanding
                </p>

                <p
                  className="
                  mt-1
                  text-sm
                  font-medium
                   bg-gradient-to-r
                    from-white
                    via-cyan-300
                    to-cyan-400
                    bg-clip-text
                    text-transparent 
                "
                >
                  Java • Spring Boot • Security • JPA
                </p>
              </div>
            </div>

            <div
              className="
              flex
              items-center
              gap-3
              font-mono
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-white/20
            "
            >
              <span
                className=" bg-gradient-to-r
                    from-white
                    via-cyan-300
                    to-cyan-400
                    bg-clip-text
                    text-transparent "
              >
                LEARN
              </span>

              <span className="text-white">→</span>

              <span
                className=" bg-gradient-to-r
                    from-white
                    via-cyan-300
                    to-cyan-400
                    bg-clip-text
                    text-transparent "
              >
                BUILD
              </span>

              <span className="text-white">→</span>

              <span
                className=" bg-gradient-to-r
                    from-white
                    via-cyan-300
                    to-cyan-400
                    bg-clip-text
                    text-transparent "
              >
                SHIP
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div
          className="
          mt-16
          flex
          flex-col
          gap-4
          border-t
          border-white/[0.05]
          pt-6
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
        >
          <span
            className="
          
            text-xs
            uppercase
            tracking-[0.3em]
            bg-gradient-to-r
            from-white
            via-cyan-300
            to-cyan-400
            bg-clip-text
            text-transparent 
          "
          >
            Technology is the tool. Engineering is the craft.
          </span>

          <span
            className="
            text-xs
            uppercase
            tracking-[0.3em]
            bg-gradient-to-r
            from-white
            via-cyan-300
            to-cyan-400
            bg-clip-text
            text-transparent 
          "
          >
            LEARN / BUILD / SHIP
          </span>
        </div>
      </div>
    </section>
  );
}
