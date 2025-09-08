import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "@tsparticles/react";

const Background = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrollDir, setScrollDir] = useState("down");

  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (y) => {
      if (y > lastScroll) setScrollDir("down");
      else setScrollDir("up");
      setLastScroll(y);
    });
  }, [scrollY, lastScroll]);

  const scaleBlob = useTransform(scrollY, [0, 800], [1, 1.6]);
  const rotateBlob = useTransform(
    scrollY,
    [0, 800],
    [0, scrollDir === "down" ? 360 : -360]
  );

  useEffect(() => {
    const handleMouseMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    const handleClick = (e) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
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
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              push: { quantity: 2 },
              repulse: { distance: 80 },
            },
          },
          particles: {
            number: { value: 120 },
            size: { value: 2 },
            move: { enable: true, speed: 0.3 },
            links: { enable: false },
            opacity: { value: 0.7 },
            color: { value: "#ffffff" },
          },
        }}
      />

      {/* Blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] blur-[120px] opacity-60 animate-morph bg-[radial-gradient(circle_at_center,_#ff6ec7,_#0b0c27)] -top-24 -left-24"
        style={{ scale: scaleBlob, rotate: rotateBlob }}
        animate={{ x: cursor.x / 10, y: cursor.y / 10 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] blur-[120px] opacity-60 animate-morph bg-[radial-gradient(circle_at_center,_#42e695,_#0b0c27)] -bottom-36 -right-36"
        style={{ scale: scaleBlob, rotate: rotateBlob }}
        animate={{ x: -cursor.x / 15, y: -cursor.y / 15 }}
        transition={{ type: "spring", stiffness: 60, damping: 25 }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] blur-[120px] opacity-60 animate-morph bg-[radial-gradient(circle_at_center,_#7873f5,_#0b0c27)] top-[40%] left-1/2 -translate-x-1/2"
        style={{ scale: scaleBlob, rotate: rotateBlob }}
        animate={{ x: cursor.x / 20, y: -cursor.y / 20 }}
        transition={{ type: "spring", stiffness: 40, damping: 30 }}
      />

      {/* Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute w-5 h-5 bg-cyan-400/40 rounded-full pointer-events-none animate-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </div>
  );
};

export default Background;
