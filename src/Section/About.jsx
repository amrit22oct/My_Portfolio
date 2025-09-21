import CodingGif from "../assets/Coding Develio.gif";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 px-6 sm:px-10 py-16 text-white overflow-hidden"
    >
      {/* About Text */}
      <div className="flex-1 max-w-[650px] flex flex-col items-start text-left gap-6 z-10 lg:ml-[150px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_15px_#00e0ff] transition-transform duration-700 hover:scale-105">
          Who I Am
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#d4d4d4] leading-relaxed tracking-wide transition-colors duration-500 hover:text-white">
          Hi, I’m{" "}
          <span className="text-[#ff4fff] font-semibold drop-shadow-[0_0_6px_#ff4fff]">
            Amrit Rai
          </span>
          , a passionate Full Stack Web Developer skilled in{" "}
          <span className="text-[#00e0ff] font-semibold drop-shadow-[0_0_6px_#00e0ff]">
            JavaScript
          </span>
          ,{" "}
          <span className="text-[#00e0ff] font-semibold drop-shadow-[0_0_6px_#00e0ff]">
            React
          </span>
          ,{" "}
          <span className="text-[#00e0ff] font-semibold drop-shadow-[0_0_6px_#00e0ff]">
            Node.js
          </span>
          , and{" "}
          <span className="text-[#00e0ff] font-semibold drop-shadow-[0_0_6px_#00e0ff]">
            MySQL
          </span>
          . I love turning ideas into real-world applications and continuously
          improving my skills. With a{" "}
          <span className="text-[#ff4fff] font-semibold drop-shadow-[0_0_6px_#ff4fff]">
            problem-solving mindset
          </span>{" "}
          and a drive to learn, I strive to build{" "}
          <span className="text-[#00ff90] font-semibold drop-shadow-[0_0_6px_#00ff90]">
            user-friendly
          </span>{" "}
          and{" "}
          <span className="text-[#00ff90] font-semibold drop-shadow-[0_0_6px_#00ff90]">
            scalable solutions
          </span>
          .
        </p>
      </div>

      {/* Coding GIF */}
      <div className="flex-1 flex justify-center lg:justify-end z-10 mt-6 lg:mt-0 lg:mr-[150px]">
        <img
          src={CodingGif}
          alt="Coding GIF"
          loading="lazy"
          className="w-[80%] sm:w-[70%] md:w-[450px] max-w-[480px] rounded-2xl transition-transform duration-700 animate-[float_6s_ease-in-out_infinite] shadow-[0_0_20px_rgba(0,224,255,0.4)] hover:scale-105"
        />
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
};

export default About;
