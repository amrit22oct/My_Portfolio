

import TypingText from "../atoms/TypingText";

const HeadingBlock = ({ currentText }) => {
  return (
    <div className="max-w-3xl">
      {/* Label */}
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-cyan-400" />

        <p
          className="
            text-[11px] sm:text-2xl
            uppercase 
            tracking-[0.35em]
           
            bg-gradient-to-r
            from-cyan-300
            via-cyan-400
            to-white
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
            font-extrabold
          "
        >
          Portfolio
        </p>
      </div>

      {/* Main heading */}
      <h1
        className="
          text-[clamp(2.5rem,7vw,5rem)]
          leading-[0.98]
          tracking-[-0.04em]
          font-bold
          text-white
        "
      >
        Hello, I’m{" "}
        <span
          className="
            relative
            inline-block
            text-transparent
            font-extrabold 
            bg-clip-text
            bg-gradient-to-r
            from-cyan-300
            via-cyan-400
            to-white
          "
        >
          Amrit Rai
        </span>
        <span className="text-cyan-400">.</span>
      </h1>

      {/* Role */}
      <div className="mt-2 sm:mt-7">
        <h2
          className="
            flex flex-wrap
            items-center
            gap-x-2
            gap-y-1
            text-[clamp(1.1rem,3vw,1.75rem)]
            leading-relaxed
            font-medium
            text-white/60
          "
        >
          <span>A Professional</span>

          <span
            className="
              font-semibold
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-cyan-300
              to-fuchsia-400
            "
          >
            <TypingText animatedTexts={currentText} />
          </span>
        </h2>
      </div>

      {/* Description */}
      <p
        className="
          mt-6 sm:mt-7
          max-w-2xl
          text-md sm:text-base lg:text-lg
          leading-7 sm:leading-8
        font-extrabold
          bg-gradient-to-r
          from-cyan-300
          via-cyan-100
          to-white
          bg-clip-text
          text-transparent

          drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
        "
      >
      I’m a Full Stack Developer who builds modern, interactive, and scalable web applications with clean architecture, efficient code, and thoughtful design.

      </p>

      {/* Availability */}
      {/* <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-white/40">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>

        <span>Available for opportunities</span>
      </div> */}
    </div>
  );
};

export default HeadingBlock;