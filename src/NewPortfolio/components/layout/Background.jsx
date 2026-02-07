import React, { useEffect, useState } from "react";

const NUM_STARS = { far: 100, mid: 70, near: 50 };

const random = (min, max) => Math.random() * (max - min) + min;

const generateStars = (count, depthFactor) =>
  Array.from({ length: count }, () => ({
    top: random(0, 100),
    left: random(0, 100),
    size: random(0.5, 1.5),
    opacity: random(0.3, 1),
    depth: depthFactor,
  }));

const Background = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const farStars = generateStars(NUM_STARS.far, 0.02);
  const midStars = generateStars(NUM_STARS.mid, 0.05);
  const nearStars = generateStars(NUM_STARS.near, 0.1);

  useEffect(() => {
    const handleMouse = (e) => setCursor({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallax = (depth) => ({
    x: (cursor.x - window.innerWidth / 2) * depth,
    y: (cursor.y - window.innerHeight / 2 + scrollY) * depth,
  });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#05060a]">
      {[...farStars, ...midStars, ...nearStars].map((star, idx) => {
        const offset = parallax(star.depth);
        return (
          <div
            key={idx}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `calc(${star.top}% + ${offset.y}px)`,
              left: `calc(${star.left}% + ${offset.x}px)`,
              opacity: star.opacity,
            }}
          />
        );
      })}
    </div>
  );
};

export default Background;
