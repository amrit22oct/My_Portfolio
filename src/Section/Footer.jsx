import React from "react";

const Footer = () => {
  return (
    <footer
      className="relative z-10 w-full text-center py-4 sm:py-5 px-4 sm:px-8"
      style={{
        background: "rgba(20, 20, 20, 0.6)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(0, 224, 255, 0.2)",
        boxShadow:
          "0 0 12px rgba(0, 224, 255, 0.1) inset, 0 0 20px rgba(0, 224, 255, 0.15)",
        animation: "fadeInFooter 1.2s ease-in-out",
      }}
    >
      {/* Branding */}
      <h2
        className="text-2xl font-bold mb-1"
        style={{
          color: "#ff4fff",
          textShadow: "0 0 12px rgba(255,79,255,0.7)",
          animation: "glowText 3s infinite alternate ease-in-out",
        }}
      >
        Amrit Rai
      </h2>
      <p
        className="text-sm mb-3 leading-relaxed"
        style={{
          color: "#d4d4d4",
          opacity: 0.9,
          animation: "fadeInUp 1.5s ease-in-out",
        }}
      >
        Software Developer | Crafting Scalable & User-Friendly Solutions
      </p>

      {/* Divider */}
      <div
        className="mx-auto mb-3 rounded-sm"
        style={{
          width: "60px",
          height: "2px",
          background:
            "linear-gradient(90deg, #00ff90, #00e0ff, #ff4fff)",
          boxShadow: "0 0 10px rgba(0,224,255,0.5)",
          animation: "pulseGlow 2.5s infinite ease-in-out",
        }}
      ></div>

      {/* Copyright */}
      <p
        className="text-xs"
        style={{
          color: "#aaa",
          textShadow: "0 0 6px rgba(0, 224, 255, 0.4)",
          animation: "fadeInUp 2s ease-in-out",
        }}
      >
        © {new Date().getFullYear()} Amrit Rai. All rights reserved.
      </p>

      {/* Keyframes */}
      <style>
        {`
          @keyframes fadeInFooter {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 10px rgba(0,224,255,0.5); }
            50% { box-shadow: 0 0 20px rgba(255,79,255,0.9); }
          }
          @keyframes glowText {
            0% { text-shadow: 0 0 12px rgba(255, 79, 255, 0.7); color: #ff4fff; }
            100% { text-shadow: 0 0 20px rgba(0, 224, 255, 0.9); color: #00e0ff; }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
