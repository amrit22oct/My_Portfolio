
// import React from "react";
// import { Globe, Zap, ChevronUp, Github, Linkedin, Mail } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="w-full  ">
//       {/* Single Bento Box Container */}
//       <div className="w-full p-6 bg-[#050505] border-top border-white/5 flex flex-col md:flex-row justify-between items-center gap-6  transition-all duration-500 group relative overflow-hidden">
        
//         {/* Left Section: Identity */}
//         <div className="flex flex-col items-center md:items-start">
//           <h2 
//             className="text-3xl md:text-4xl font-black tracking-tighter text-transparent select-none transition-all duration-500 group-hover:opacity-100 opacity-70"
//             style={{ WebkitTextStroke: "1px rgba(0, 224, 255, 0.8)" }}
//           > 
//             AMRIT RAI
//           </h2>
//           <div className="flex items-center gap-2 mt-2">
//             <Zap size={12} className="text-[#00ff90] fill-[#00ff90]" />
//             <span className="text-[10px] text-white font-mono tracking-[0.2em] uppercase">
//               Fullstack Developer
//             </span>
//           </div>
//         </div>

//         {/* Middle Section: Status & Socials */}
//         <div className="flex flex-col items-center gap-4">
//           <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ff90]/5 border border-[#00ff90]/10 backdrop-blur-md">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#00ff90] shadow-[0_0_10px_#00ff90] animate-pulse"></span>
//             <span className="text-[9px] text-[#00ff90] font-bold uppercase tracking-widest text-center">Available for projects</span>
//           </div>
          
//           {/* <div className="flex gap-6 text-[#00e0ff] ">
//             <a href="#" className="hover:text-[#00e0ff]  transition-colors"><Github size={18} /></a>
//             <a href="#" className="hover:text-[#00e0ff] transition-colors"><Linkedin size={18} /></a>
//             <a href="#" className="hover:text-[#00e0ff] transition-colors"><Mail size={18} /></a>
//           </div> */}
//         </div>

//         {/* Right Section: Copyright & Back to Top */}
//         <div className="flex flex-col items-center md:items-end gap-3">
//           <button 
//             onClick={scrollToTop}
//             className="group/btn flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-[#00e0ff]  transition-all duration-300"
//           >
//             <span className="text-[10px] text-white hover:text-black font-bold uppercase tracking-widest">Back to top</span>
//             <ChevronUp size={16} className="group-hover/btn:-translate-y-1 transition-transform" />
//           </button>
          
//           <div className="inline-flex items-center justify-center gap-2 text-white text-[10px] sm:text-[11px] font-medium tracking-widest uppercase whitespace-nowrap">
//   <span>© {currentYear}</span>
//   <span className="opacity-30">|</span>
//   <Globe size={12} className="transition-transform duration-500 hover:rotate-12 text-cyan-400" />
// </div>
//         </div>

//         {/* Decorative Background Flare */}
//         <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00e0ff]/10 blur-[80px] rounded-full pointer-events-none"></div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import React from "react";
import {
  ArrowUpRight,
  ChevronUp,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/amrit22oct",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/amrit-rai9335014143/",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:amritrai22oct@gmail.com",
    },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-[#010303] text-white">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Top glow */}
        <div className="absolute left-1/2 top-0 h-[280px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/[0.035] blur-[120px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-180px] left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/[0.025] blur-[130px]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Side fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#010303_90%)]" />
      </div>

      {/* =========================================================
          TOP LINE
      ========================================================= */}

      <div className="relative  px-6 md:px-[6%]">
        <div className="relative h-px w-full overflow-hidden bg-white/[0.06]">
          <div className="absolute left-1/2 h-px w-[30%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        </div>
      </div>

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div className="relative  px-6 pb-8 pt-16 md:px-[6%] md:pb-10 md:pt-20">
        {/* =====================================================
            BRAND AREA
        ===================================================== */}

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {/* Terminal label */}
            <div className="mb-7 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600">
              <Terminal size={13} className="text-cyan-400/60" />

              <span>~/portfolio</span>

              <span className="text-zinc-800">/</span>

              <span className="text-emerald-400/50">
                session_complete
              </span>
            </div>

            {/* Big brand */}
            <div className="relative inline-block">
              <h2 className="select-none text-[clamp(4rem,10vw,9rem)] font-black leading-[0.78] tracking-[-0.085em] text-white">
                AMRIT
              </h2>

              <div className="flex items-center gap-4 pl-1 md:gap-6">
                <span className="font-mono text-[clamp(2rem,4vw,4rem)] font-light leading-none text-cyan-400">
                  /
                </span>

                <span className="text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.8] tracking-[-0.075em] text-white/[0.22]">
                  RAI
                </span>
              </div>

              {/* Accent line */}
              <div className="mt-7 flex items-center gap-3 pl-1">
                <span className="h-px w-12 bg-cyan-400/50" />

                <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-zinc-600">
                  Full Stack Developer
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT SIDE
          =================================================== */}

          <div className="flex flex-col items-start gap-6 lg:items-end">
            <p className="max-w-[330px] text-left text-sm leading-7 text-zinc-500 lg:text-right">
              Building modern digital experiences with clean
              architecture, thoughtful design, and scalable code.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === "Email" ? undefined : "_blank"}
                    rel={
                      social.name === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.name}
                    className="
                      group
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      text-zinc-500
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-400/30
                      hover:bg-cyan-400/[0.06]
                      hover:text-cyan-400
                    "
                  >
                    <Icon
                      size={15}
                      className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================
            DIVIDER
        ========================================================= */}

        <div className="my-14 h-px w-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

        {/* =========================================================
            LOWER NAVIGATION
        ========================================================= */}

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-700">
            <span>React</span>

            <span className="text-zinc-900">•</span>

            <span>Tailwind</span>

            <span className="text-zinc-900">•</span>

            <span>Framer Motion</span>

            <span className="text-zinc-900">•</span>

            <span>Java</span>

            <span className="text-zinc-900">•</span>

            <span>Spring Boot</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="
              group
              flex
              items-center
              gap-3
              self-start
              font-mono
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-zinc-600
              transition-colors
              duration-300
              hover:text-cyan-400
              md:self-auto
            "
          >
            <span>Return to top</span>

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-white/[0.07]
                bg-white/[0.025]
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:border-cyan-400/30
                group-hover:bg-cyan-400/[0.06]
              "
            >
              <ChevronUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </button>
        </div>

        {/* =========================================================
            TERMINAL STATUS BAR
        ========================================================= */}

        <div className="mt-10 overflow-hidden rounded-xl border border-white/[0.06] bg-[#050909]/80">
          {/* Terminal header */}
          <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.05] px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/50" />

            <span className="ml-3 font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-700">
              terminal — bash
            </span>
          </div>

          {/* Terminal content */}
          <div className="flex flex-col gap-3 px-4 py-4 font-mono text-[8px] uppercase tracking-[0.16em] sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400/50">amrit@dev</span>
              <span className="text-zinc-800">:</span>
              <span className="text-cyan-400/40">~</span>
              <span className="text-zinc-700">$</span>

              <span className="text-zinc-600">
                system.shutdown
              </span>

              <span className="ml-1 inline-block h-2.5 w-1 animate-pulse bg-cyan-400/50" />
            </div>

            <div className="flex items-center gap-3 text-zinc-700">
              <span>status</span>

              <span className="flex items-center gap-1.5 text-emerald-400/50">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                operational
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            COPYRIGHT
        ========================================================= */}

        <div className="mt-6 flex flex-col gap-3 font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <span>© {currentYear} Amrit Rai</span>

          <div className="flex items-center gap-3">
            <span>Designed & Built with intention</span>

            <ArrowUpRight size={11} />
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM ACCENT
      ========================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[45%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
    </footer>
  );
};

export default Footer;