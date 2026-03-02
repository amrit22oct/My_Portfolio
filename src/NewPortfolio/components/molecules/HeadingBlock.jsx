// // // components/molecules/HeadingBlock.jsx
// // import TypingText from "../atoms/TypingText";

// // const HeadingBlock = ({ currentText }) => {
// //   return (
// //     <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
// //       Hello,
// //       <br />
// //       This is <span className="text-cyan-300">Amrit Rai</span>,
// //       <br />
// //       I'm a Professional
// //       <br />
// //       <TypingText text={currentText} />
// //     </h1>
// //   );
// // };

// // export default HeadingBlock;


// import TypingText from "../atoms/TypingText";

// const HeadingBlock = ({ currentText }) => {
//   return (
//     <div className="max-w-5xl">
//       <p className="text-sm uppercase tracking-[6px] text-white/40 mb-6">
//         Portfolio
//       </p>

//       <h1 className="text-[clamp(2.6rem,6vw,4rem)] leading-[1.1] font-bold">
//         Hello, I’m{" "}
//         {/* <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"> */}
//         <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> 
//           Amrit Rai
//         </span>
//       </h1>

//       <h2 className="mt-6 text-[clamp(1.2rem,2.5vw,1.8rem)] text-white/70 font-medium">
//         A Professional{" "}
//         {/* <span className="text-white"> */}
//         <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> 
//           <TypingText animatedTexts={currentText} />
//         </span>
//       </h2>

//       <p className="mt-8 text-white/50 text-lg leading-relaxed max-w-xl">
//         I build modern, interactive and performance-focused web applications
//         with clean architecture and thoughtful design.
//       </p>
//     </div>
//   );
// };

// export default HeadingBlock;



import TypingText from "../atoms/TypingText";

const HeadingBlock = ({ currentText }) => {
  return (
    <div className="max-w-5xl">
      <p className="text-xs sm:text-sm uppercase tracking-[4px] sm:tracking-[6px] text-white/40 mb-4 sm:mb-6">
        Portfolio
      </p>

      <h1 className="text-[clamp(2rem,6vw,4rem)] leading-[1.1] font-bold">
        Hello, I’m{" "}
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "1px #00e0ff" }}
        >
          Amrit Rai
        </span>
      </h1>

      <h2 className="mt-4 sm:mt-6 text-[clamp(1rem,3vw,1.8rem)] text-white/70 font-medium">
        A Professional{" "}
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "1px #00e0ff" }}
        >
          <TypingText animatedTexts={currentText} />
        </span>
      </h2>

      <p className="mt-6 sm:mt-8 text-white/50 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
        I build modern, interactive and performance-focused web applications
        with clean architecture and thoughtful design.
      </p>
    </div>
  );
};

export default HeadingBlock;