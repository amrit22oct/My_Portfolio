


const NeonButton = ({
  href,
  color,
  children,
  download,
  variant = "primary",
}) => {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      download={download}
      className="
        group/button
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        px-6 sm:px-7
        py-3
        text-sm
        font-semibold
        tracking-wide
        transition-all
        duration-300
        hover:-translate-y-1
        active:translate-y-0
      "
      style={{
        border: `1px solid ${color}`,
        color: isPrimary ? "#050505" : "#fff",
        background: isPrimary
          ? color
          : "rgba(255,255,255,0.025)",
        boxShadow: isPrimary
          ? `0 0 25px ${color}35`
          : "none",
      }}
    >
      {/* Hover glow */}
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-white/20
          skew-x-[-20deg]
          transition-transform
          duration-700
          group-hover/button:translate-x-full
        "
      />

      {/* Background glow */}
      {!isPrimary && (
        <span
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300
            group-hover/button:opacity-10
          "
          style={{ background: color }}
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}

        <span
          className="
            text-base
            transition-transform
            duration-300
            group-hover/button:translate-x-1
          "
        >
          →
        </span>
      </span>
    </a>
  );
};

export default NeonButton;