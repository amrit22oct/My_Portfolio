

import NeonButton from "../atoms/NeonButton";
import ResumePDF from "../../../assets/Amrit_rai_resume.pdf";

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <NeonButton
        href="#contact"
        color="#00e0ff"
        variant="secondary"
      >
        Contact Me
      </NeonButton>

      <NeonButton
        href={ResumePDF}
        color="#ff4fd8"
        download="Amrit_Rai_Resume.pdf"
        variant="secondary"
      >
        Download Resume
      </NeonButton>
    </div>
  );
};

export default ActionButtons;