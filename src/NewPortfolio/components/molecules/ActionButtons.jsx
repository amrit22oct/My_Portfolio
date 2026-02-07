// components/molecules/ActionButtons.jsx
import NeonButton from "../atoms/NeonButton";
import ResumePDF from "../../../assets/Amrit_rai_resume.pdf"

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      <NeonButton href="#contact" color="#00e0ff">
        Contact Me
      </NeonButton>

      <NeonButton
        href={ResumePDF}
        color="#ff4fff"
        download="Amrit_Rai_Resume.pdf"
      >
        Resume
      </NeonButton>
    </div>
  );
};

export default ActionButtons;
