import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 w-full text-center py-6 px-4 sm:px-8 bg-[rgba(20,20,20,0.85)] backdrop-blur-md border-t border-[rgba(0,224,255,0.2)] shadow-inner shadow-[0_0_12px_rgba(0,224,255,0.1)]">
      
      {/* Branding with gradient text */}
      <a
  href="#home"
  onClick={() => setIsOpen(false)}
  className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff90] via-[#00e0ff] to-[#ff4fff] hover:scale-105 transition-transform duration-300"
  style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
>
  Amrit Rai
</a>

      {/* Description */}
      <p className="text-sm sm:text-base mb-4 leading-relaxed text-[#d4d4d4] opacity-90 animate-fadeInUp">
        Software Developer | Crafting Scalable & User-Friendly Solutions
      </p>

      {/* Divider */}
      <div className="mx-auto mb-4 sm:mb-5 rounded-sm w-24 sm:w-32 h-[2px] bg-gradient-to-r from-[#00ff90] via-[#00e0ff] to-[#ff4fff] shadow-[0_0_10px_rgba(0,224,255,0.5)] animate-pulseGlow"></div>

      {/* Copyright */}
      <p className="text-xs sm:text-sm text-[#aaa] drop-shadow-[0_0_6px_rgba(0,224,255,0.4)] animate-fadeInUp">
        © {new Date().getFullYear()} Amrit Rai. All rights reserved.
      </p>

   
    </footer>
  );
};

export default Footer;
