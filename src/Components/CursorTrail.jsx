import React from "react";

class Leaf {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.life = 0;
    this.size = 8 + Math.random() * 6; // smaller leaves
    this.rotation = Math.random() * 360;
    this.rotationSpeed = (Math.random() - 0.5) * 4;
    this.color = `hsl(${Math.random() * 50 + 90}, 70%, 50%)`; // green tones
    this.offsetX = (Math.random() - 0.5) * 2; // drift X
    this.offsetY = (Math.random() - 0.5) * 1.5; // drift Y
  }
}

class CanvasLeafTrail extends React.Component {
  state = {
    cHeight: 0,
    cWidth: 0,
  };

  canvas = React.createRef();
  leaves = [];
  cursor = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  componentDidMount = () => {
    this.setState({
      cHeight: document.body.clientHeight,
      cWidth: document.body.clientWidth,
    });

    window.addEventListener("resize", () => {
      this.setState({
        cHeight: document.body.clientHeight,
        cWidth: document.body.clientWidth,
      });
    });

    if (matchMedia("(pointer:fine)").matches) {
      this.startAnimation();
    }

    document.addEventListener("mousemove", (e) => {
      this.cursor.x = e.clientX;
      this.cursor.y = e.clientY;
      this.addLeaf(e.clientX, e.clientY);
    });
  };

  addLeaf = (x, y) => {
    this.leaves.push(new Leaf(x, y));
    if (this.leaves.length > 200) this.leaves.shift();
  };

  startAnimation = () => {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext("2d");

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.leaves.forEach((leaf, i) => {
        leaf.life++;

        if (leaf.life > 150) {
          this.leaves.splice(i, 1);
        } else {
          // flutter and drift
          leaf.x += leaf.offsetX + Math.sin(leaf.life / 10) * 0.5;
          leaf.y += leaf.offsetY + Math.cos(leaf.life / 10) * 0.5;
          leaf.rotation += leaf.rotationSpeed;

          const alpha = 1 - leaf.life / 150;

          ctx.save();
          ctx.translate(leaf.x, leaf.y);
          ctx.rotate((leaf.rotation * Math.PI) / 180);

          // draw leaf ellipse
          ctx.beginPath();
          ctx.ellipse(0, 0, leaf.size, leaf.size / 2, 0, 0, 2 * Math.PI);
          ctx.fillStyle = leaf.color;
          ctx.globalAlpha = alpha;
          ctx.fill();
          ctx.restore();
        }
      });

      // NOTE: No black dot for cursor — leave cursor as default

      requestAnimationFrame(animate);
    };

    animate();
  };

  render() {
    const { cHeight, cWidth } = this.state;
    return (
      <canvas
        ref={this.canvas}
        width={cWidth}
        height={cHeight}
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
  }
}

export default CanvasLeafTrail;
