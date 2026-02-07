// components/molecules/HeadingBlock.jsx
import TypingText from "../atoms/TypingText";

const HeadingBlock = ({ currentText }) => {
  return (
    <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-tight">
      Hello,
      <br />
      This is <span className="text-cyan-300">Amrit Rai</span>,
      <br />
      I'm a Professional
      <br />
      <TypingText text={currentText} />
    </h1>
  );
};

export default HeadingBlock;
