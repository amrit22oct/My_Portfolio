// components/organisms/IntroSection.jsx
import HeadingBlock from "../molecules/HeadingBlock";
import SocialIcons from "../molecules/SocialIcons";
import ActionButtons from "../molecules/ActionButtons";

const IntroSection = ({ currentText }) => {
  return (
    <div className="flex-1 max-w-[650px] w-full flex flex-col items-start gap-6">
      <HeadingBlock currentText={currentText} />
      <SocialIcons />
      <ActionButtons />
    </div>
  );
};

export default IntroSection;
