// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="relative z-10 w-full text-center py-6 px-4 sm:px-8 bg-[rgba(20,20,20,0.85)] backdrop-blur-md border-t border-[rgba(0,224,255,0.2)] shadow-inner shadow-[0_0_12px_rgba(0,224,255,0.1)]">
      
//       {/* Branding with gradient text */}
//       <a
//   href="#home"
//   onClick={() => setIsOpen(false)}
//   className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff90] via-[#00e0ff] to-[#ff4fff] hover:scale-105 transition-transform duration-300"
//   style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
// >
//   Amrit Rai
// </a>

//       {/* Description */}
//       <p className="text-sm sm:text-base mb-4 leading-relaxed text-[#d4d4d4] opacity-90 animate-fadeInUp">
//         Software Developer | Crafting Scalable & User-Friendly Solutions
//       </p>

//       {/* Divider */}
//       <div className="mx-auto mb-4 sm:mb-5 rounded-sm w-24 sm:w-32 h-[2px] bg-gradient-to-r from-[#00ff90] via-[#00e0ff] to-[#ff4fff] shadow-[0_0_10px_rgba(0,224,255,0.5)] animate-pulseGlow"></div>

//       {/* Copyright */}
//       <p className="text-xs sm:text-sm text-[#aaa] drop-shadow-[0_0_6px_rgba(0,224,255,0.4)] animate-fadeInUp">
//         © {new Date().getFullYear()} Amrit Rai. All rights reserved.
//       </p>

   
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { Globe, Zap, ChevronUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full  ">
      {/* Single Bento Box Container */}
      <div className="w-full p-6 bg-[#050505] border-top border-white/5 flex flex-col md:flex-row justify-between items-center gap-6  transition-all duration-500 group relative overflow-hidden">
        
        {/* Left Section: Identity */}
        <div className="flex flex-col items-center md:items-start">
          <h2 
            className="text-3xl md:text-4xl font-black tracking-tighter text-transparent select-none transition-all duration-500 group-hover:opacity-100 opacity-70"
            style={{ WebkitTextStroke: "1px rgba(0, 224, 255, 0.8)" }}
          > 
            AMRIT RAI
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <Zap size={12} className="text-[#00ff90] fill-[#00ff90]" />
            <span className="text-[10px] text-white font-mono tracking-[0.2em] uppercase">
              Fullstack Developer
            </span>
          </div>
        </div>

        {/* Middle Section: Status & Socials */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ff90]/5 border border-[#00ff90]/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff90] shadow-[0_0_10px_#00ff90] animate-pulse"></span>
            <span className="text-[9px] text-[#00ff90] font-bold uppercase tracking-widest text-center">Available for projects</span>
          </div>
          
          {/* <div className="flex gap-6 text-[#00e0ff] ">
            <a href="#" className="hover:text-[#00e0ff]  transition-colors"><Github size={18} /></a>
            <a href="#" className="hover:text-[#00e0ff] transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-[#00e0ff] transition-colors"><Mail size={18} /></a>
          </div> */}
        </div>

        {/* Right Section: Copyright & Back to Top */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button 
            onClick={scrollToTop}
            className="group/btn flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-[#00e0ff]  transition-all duration-300"
          >
            <span className="text-[10px] text-white hover:text-black font-bold uppercase tracking-widest">Back to top</span>
            <ChevronUp size={16} className="group-hover/btn:-translate-y-1 transition-transform" />
          </button>
          
          <div className="inline-flex items-center justify-center gap-2 text-white text-[10px] sm:text-[11px] font-medium tracking-widest uppercase whitespace-nowrap">
  <span>© {currentYear}</span>
  <span className="opacity-30">|</span>
  <Globe size={12} className="transition-transform duration-500 hover:rotate-12 text-cyan-400" />
</div>
        </div>

        {/* Decorative Background Flare */}
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00e0ff]/10 blur-[80px] rounded-full pointer-events-none"></div>
      </div>
    </footer>
  );
};

export default Footer;