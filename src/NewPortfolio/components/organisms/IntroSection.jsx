// // components/organisms/IntroSection.jsx
// import HeadingBlock from "../molecules/HeadingBlock";
// import SocialIcons from "../molecules/SocialIcons";
// import ActionButtons from "../molecules/ActionButtons";

// const IntroSection = ({ currentText }) => {
//   return (
//     <div className="flex-1 max-w-[650px] w-full flex flex-col items-start gap-6">
//       <HeadingBlock currentText={currentText} />
//       <SocialIcons />
//       <ActionButtons />
//     </div>
//   );
// };

// export default IntroSection;


import HeadingBlock from "../molecules/HeadingBlock";
import SocialIcons from "../molecules/SocialIcons";
import ActionButtons from "../molecules/ActionButtons";

const IntroSection = ({ currentText }) => {
 
  return (
    <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl min-w-3xl ">
      <HeadingBlock currentText={currentText} />
      <div className="mt-8">
        <SocialIcons />
      </div>
      <div className="mt-8">
        <ActionButtons />
      </div>
    </div>
  );
};

export default IntroSection;
