import React from "react";

const Footer = () => {
  return (
    <footer
      className="relative z-10 w-full text-center py-4 sm:py-5 px-4 sm:px-8 bg-[rgba(20,20,20,0.6)] backdrop-blur-md border-t border-[rgba(0,224,255,0.2)] shadow-inner shadow-[0_0_12px_rgba(0,224,255,0.1)]"
    >
      {/* Branding */}
      <h2 className="text-2xl font-bold mb-1 text-[#ff4fff] animate-glowText">
        Amrit Rai
      </h2>

      <p className="text-sm mb-3 leading-relaxed text-[#d4d4d4] opacity-90 animate-fadeInUp">
        Software Developer | Crafting Scalable & User-Friendly Solutions
      </p>

      {/* Divider */}
      <div className="mx-auto mb-3 rounded-sm w-16 h-[2px] bg-gradient-to-r from-[#00ff90] via-[#00e0ff] to-[#ff4fff] shadow-[0_0_10px_rgba(0,224,255,0.5)] animate-pulseGlow"></div>

      {/* Copyright */}
      <p className="text-xs text-[#aaa] drop-shadow-[0_0_6px_rgba(0,224,255,0.4)] animate-fadeInUp">
        © {new Date().getFullYear()} Amrit Rai. All rights reserved.
      </p>

      {/* Keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 10px rgba(0,224,255,0.5); }
            50% { box-shadow: 0 0 20px rgba(255,79,255,0.9); }
          }
          @keyframes glowText {
            0% { text-shadow: 0 0 12px rgba(255,79,255,0.7); color: #ff4fff; }
            100% { text-shadow: 0 0 20px rgba(0,224,255,0.9); color: #00e0ff; }
          }
          .animate-fadeInUp { animation: fadeInUp 1.5s ease-in-out forwards; }
          .animate-pulseGlow { animation: pulseGlow 2.5s infinite ease-in-out; }
          .animate-glowText { animation: glowText 3s infinite alternate ease-in-out; }
        `}
      </style>
    </footer>
  );
};

export default Footer;
