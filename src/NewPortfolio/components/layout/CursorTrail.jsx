// import React, { useRef, useEffect, useState } from "react";

// class Leaf {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.life = 0;
//     this.size = 2.5 + Math.random() * 1.5; // smaller, varied leaves
//     this.rotation = Math.random() * 360;
//     this.rotationSpeed = (Math.random() - 0.5) * 2;
//     this.color = `hsl(${Math.random() * 50 + 90}, 70%, 50%)`; // green tones
//     this.offsetX = (Math.random() - 0.5) * 2; // horizontal drift
//     this.offsetY = (Math.random() - 0.5) * 1.5; // vertical drift
//   }
// }

// const CanvasLeafTrail = () => {
//   const canvasRef = useRef(null);
//   const animationRef = useRef(null);
//   const leavesRef = useRef([]);
//   const cursorRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

//   const [dimensions, setDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     // Handle resize
//     const handleResize = () => {
//       setDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener("resize", handleResize);

//     // Mouse tracking
//     const handleMouseMove = (e) => {
//       cursorRef.current.x = e.clientX;
//       cursorRef.current.y = e.clientY;
//       addLeaf(e.clientX, e.clientY);
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     if (window.matchMedia("(pointer:fine)").matches) {
//       startAnimation();
//     }

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       document.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationRef.current);
//     };
//   }, []);

//   const addLeaf = (x, y) => {
//     const leaves = leavesRef.current;
//     leaves.push(new Leaf(x, y));
//     if (leaves.length > 120) leaves.shift(); // cap leaves
//   };

//   const startAnimation = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       leavesRef.current.forEach((leaf, i) => {
//         leaf.life++;

//         if (leaf.life > 150) {
//           leavesRef.current.splice(i, 1);
//           return;
//         }

//         // flutter + drift
//         leaf.x += leaf.offsetX + Math.sin(leaf.life / 10) * 0.5;
//         leaf.y += leaf.offsetY + Math.cos(leaf.life / 10) * 0.5;
//         leaf.rotation += leaf.rotationSpeed;

//         const alpha = 1 - leaf.life / 150;

//         ctx.save();
//         ctx.translate(leaf.x, leaf.y);
//         ctx.rotate((leaf.rotation * Math.PI) / 180);

//         ctx.beginPath();
//         ctx.ellipse(0, 0, leaf.size, leaf.size / 2, 0, 0, 2 * Math.PI);
//         ctx.fillStyle = leaf.color;
//         ctx.globalAlpha = alpha;
//         ctx.fill();
//         ctx.restore();
//       });

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animate();
//   };

//   return (
//     <canvas
//       ref={canvasRef}
//       width={dimensions.width}
//       height={dimensions.height}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         pointerEvents: "none",
//         zIndex: 9999,
//         background: "transparent",
//       }}
//     />
//   );
// };

// export default CanvasLeafTrail;






import React, { useRef, useEffect, useState } from "react";

class Fragment {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.life = 0;
    this.maxLife = 40 + Math.random() * 20;
    this.size = 2 + Math.random() * 8; // Varied rectangular sizes
    this.width = this.size * (Math.random() > 0.5 ? 4 : 1); // Some are long lines
    this.height = 2;
    this.vx = (Math.random() - 0.5) * 4; // Velocity X
    this.vy = (Math.random() - 0.5) * 4; // Velocity Y
    
    // Using your theme colors: Cyan, Neon Green, Purple
    const colors = ["#00e0ff", "#00ff90", "#ff4fff"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
}

const CanvasDigitalTrail = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const fragmentsRef = useRef([]);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleMouseMove = (e) => {
      // Add multiple fragments per move for a "spark" effect
      for (let i = 0; i < 2; i++) {
        addFragment(e.clientX, e.clientY);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove);

    startAnimation();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const addFragment = (x, y) => {
    const fragments = fragmentsRef.current;
    fragments.push(new Fragment(x, y));
    if (fragments.length > 100) fragments.shift();
  };

  const startAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fragmentsRef.current.forEach((frag, i) => {
        frag.life++;

        if (frag.life > frag.maxLife) {
          fragmentsRef.current.splice(i, 1);
          return;
        }

        // Kinetic movement
        frag.x += frag.vx;
        frag.y += frag.vy;
        
        // Add a "jitter" effect
        frag.x += (Math.random() - 0.5) * 2;

        const alpha = 1 - frag.life / frag.maxLife;

        ctx.save();
        ctx.translate(frag.x, frag.y);
        
        // Draw the fragment
        ctx.beginPath();
        ctx.rect(-frag.width / 2, -frag.height / 2, frag.width, frag.height);
        
        // Outer Glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = frag.color;
        
        ctx.fillStyle = frag.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        background: "transparent",
      }}
    />
  );
};

export default CanvasDigitalTrail;
