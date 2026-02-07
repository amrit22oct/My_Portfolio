// components/atoms/NeonButton.jsx
const NeonButton = ({ href, color, children, download }) => {
  return (
    <a
      href={href}
      download={download}
      className="no-underline relative px-6 py-2 rounded-full font-semibold border-2 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.008]"
      style={{
        borderColor: color,
        background: "rgba(15,15,15,0.8)",
      }}
    >
      {children}
      <span
        className="absolute -inset-1 rounded-full opacity-20 blur-md animate-pulse"
        style={{ background: color }}
      />
    </a>
  );
};

export default NeonButton;
