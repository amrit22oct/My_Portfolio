

const SocialIcon = ({ Icon, link, color, label }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        group/social
        relative
        flex items-center
        gap-2.5
        overflow-hidden
        rounded-xl
        border border-white/[0.08]
        bg-white/[0.025]
        px-3.5 py-2.5
        text-white/50
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.06]
      "
    >
      {/* Background glow */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-xl
          opacity-0
          blur-xl
          transition-opacity
          duration-300
          group-hover/social:opacity-20
        "
        style={{
          background: color,
        }}
      />

      {/* Shine effect */}
      <span
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-full
          w-1/2
          rotate-12
          bg-white/10
          transition-all
          duration-700
          group-hover/social:left-[120%]
        "
      />

      {/* Icon */}
      <Icon
        className="
          relative
          z-10
          text-lg
          sm:text-xl
          transition-all
          duration-300
          group-hover/social:scale-110
        "
        style={{
          color,
          filter: `drop-shadow(0 0 0 ${color})`,
        }}
      />

      {/* Label */}
      <span
        className="
          relative
          z-10
          hidden
          sm:block
          text-xs
          font-medium
          tracking-wide
          text-white/60
          transition-colors
          duration-300
          group-hover/social:text-white
        "
      >
        {label}
      </span>
    </a>
  );
};


export default SocialIcon;