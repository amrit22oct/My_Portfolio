// components/atoms/TypingText.jsx
const TypingText = ({ text }) => {
  return (
    <span
      style={{
        color: "#FF4FFF",
        display: "inline-block",
        marginLeft: "2px",
      }}
    >
      {text}
    </span>
  );
};

export default TypingText;
