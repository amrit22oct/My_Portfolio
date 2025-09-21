import React, { useState, useEffect } from "react";
import Particles from "@tsparticles/react";

const Background = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      // Randomize ripple size between 20 and 50px based on click
      const size = 20 + Math.random() * 30;

      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY, size };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1200); // duration same as animation
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden -z-10">
      {/* Starry background */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: false }, onClick: { enable: false } },
          },
          particles: {
            number: { value: 80 },
            size: { value: 1.5 },
            move: { enable: true, speed: 0.2 },
            opacity: { value: 0.7 },
            color: { value: "#ffffff" },
          },
        }}
      />

      {/* Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            border: "2px solid #00ffff80",
            boxShadow: "0 0 8px 2px #00ffff60",
            transform: "translate(-50%, -50%) scale(0)",
            animation: "waterRipple 1.2s ease-out forwards",
          }}
        />
      ))}

      {/* Ripple keyframes */}
      <style>{`
        @keyframes waterRipple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Background;
