import { useEffect, useState } from "react";

const TypingText = ({ animatedTexts }) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!animatedTexts || animatedTexts.length === 0) return;

    let timeout;
    const current = animatedTexts[textIndex];

    if (isTyping) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 90);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 1500);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 50);
      } else {
        setIsTyping(true);
        setTextIndex((prev) => (prev + 1) % animatedTexts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, textIndex, animatedTexts]);

  return (
    <span className="ml-1 bg-gradient-to-r from-[#00e0ff] to-[#ff4fff] bg-clip-text text-transparent font-semibold">
      {displayText}
      <span className="">|</span>
    </span>
  );
};

export default TypingText;
