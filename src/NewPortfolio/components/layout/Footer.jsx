
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