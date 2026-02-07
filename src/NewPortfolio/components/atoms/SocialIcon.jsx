// components/atoms/SocialIcon.jsx
const SocialIcon = ({ Icon, link, color }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl md:text-2xl transition-transform duration-300 hover:-translate-y-1 hover:scale-125"
      style={{
        color,
        textShadow: `
          0 0 5px ${color},
          0 0 10px ${color},
          0 0 20px ${color},
          0 0 30px ${color}
        `,
        animation: "neonPulse 1.5s infinite alternate",
      }}
    >
      <Icon />
    </a>
  );
};

export default SocialIcon;
