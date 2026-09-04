


import HeadingBlock from "../molecules/HeadingBlock";
import SocialIcons from "../molecules/SocialIcons";
import ActionButtons from "../molecules/ActionButtons";

const IntroSection = ({ currentText }) => {
  return (
    <section className="relative w-full max-w-4xl">
      {/* Ambient glow */}
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[100px]" />

      {/* Main card */}
      <div
        className="
          group relative overflow-hidden
          rounded-[28px]
          border border-white/[0.08]
          bg-white/[0.025]
          p-7 sm:p-9 lg:p-12
          backdrop-blur-2xl
          shadow-[0_30px_100px_rgba(0,0,0,0.45)]
        "
      >
        {/* Top gradient line */}
        <div
          className="
            absolute left-0 top-0 h-px w-full
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
            opacity-70
          "
        />

        {/* Inner subtle gradient */}
        <div
          className="
            pointer-events-none absolute
            inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(0,224,255,0.07),transparent_35%)]
          "
        />

        <div className="relative z-10">
          <HeadingBlock currentText={currentText} />

          <div className="mt-8 sm:mt-10">
            <SocialIcons />
          </div>

          <div className="mt-8 sm:mt-10">
            <ActionButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;