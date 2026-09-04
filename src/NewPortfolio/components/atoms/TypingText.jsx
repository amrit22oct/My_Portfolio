// import { useEffect, useState } from "react";

// const TypingText = ({ animatedTexts }) => {
//   const [displayText, setDisplayText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(true);

//   useEffect(() => {
//     if (!animatedTexts || animatedTexts.length === 0) return;

//     let timeout;
//     const current = animatedTexts[textIndex];

//     if (isTyping) {
//       if (charIndex < current.length) {
//         timeout = setTimeout(() => {
//           setDisplayText(current.slice(0, charIndex + 1));
//           setCharIndex((prev) => prev + 1);
//         }, 90);
//       } else {
//         timeout = setTimeout(() => setIsTyping(false), 1500);
//       }
//     } else {
//       if (charIndex > 0) {
//         timeout = setTimeout(() => {
//           setDisplayText(current.slice(0, charIndex - 1));
//           setCharIndex((prev) => prev - 1);
//         }, 50);
//       } else {
//         setIsTyping(true);
//         setTextIndex((prev) => (prev + 1) % animatedTexts.length);
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [charIndex, isTyping, textIndex, animatedTexts]);

//   return (
//     // <span className="ml-1 bg-gradient-to-r from-[#00e0ff] to-[#ff4fff] bg-clip-text text-transparent font-semibold">
// <span className="text-transparent" style={{ WebkitTextStroke: "1px #00e0ff" }}> 
//       {displayText}
//       <span className="">|</span>
//     </span>
//   );
// };

// export default TypingText;


import { useEffect, useState } from "react";

const TypingText = ({ animatedTexts = [] }) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!animatedTexts.length) return;

    const currentText = animatedTexts[textIndex];

    let delay = isDeleting ? 45 : 85;

    // Pause after completely typing the word
    if (!isDeleting && charIndex === currentText.length) {
      delay = 1800;
    }

    // Pause before typing the next word
    if (isDeleting && charIndex === 0) {
      delay = 350;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        // Start deleting after complete word
        if (charIndex + 1 === currentText.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1800);
        }
      } else {
        // Deleting
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        // Move to next word
        if (charIndex === 1) {
          setIsDeleting(false);
          setTextIndex(
            (prev) => (prev + 1) % animatedTexts.length
          );
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [
    animatedTexts,
    textIndex,
    charIndex,
    isDeleting,
  ]);

  return (
    <span
      className="
        relative
        inline-flex
        items-center
        min-w-[1ch]
        font-semibold
        tracking-tight
      "
    >
      {/* Animated text */}
      <span
        className="
          relative
          bg-gradient-to-r
          from-cyan-300
          via-cyan-400
          to-white
          bg-clip-text
          text-transparent
          drop-shadow-[0_0_12px_rgba(0,224,255,0.25)]
        "
      >
        {displayText}
      </span>

      {/* Cursor */}
      <span
        className="
          ml-1
          inline-block
          h-[1.1em]
          w-[2px]
          rounded-full
          bg-cyan-300
          shadow-[0_0_8px_rgba(0,224,255,0.9)]
          animate-[cursorBlink_0.8s_ease-in-out_infinite]
        "
      />
    </span>
  );
};

export default TypingText;