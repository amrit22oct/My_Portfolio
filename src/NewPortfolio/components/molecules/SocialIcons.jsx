// // components/molecules/SocialIcons.jsx
// import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
// import SocialIcon from "../atoms/SocialIcon";

// const links = [
//   "https://www.linkedin.com/in/amrit-rai9335014143/",
//   "https://github.com/amrit22oct",
//   "https://leetcode.com/u/amrit22oct/",
//   "https://www.instagram.com/_its_amrit._/",
// ];

// const colors = ["#00ffff", "#ff4fff", "#00ff90", "#ffb700"];
// const icons = [FaLinkedin, FaGithub, SiLeetcode, FaInstagram];

// const SocialIcons = () => {
//   return (
//     <div className="flex gap-6">
//       {icons.map((Icon, i) => (
//         <SocialIcon key={i} Icon={Icon} link={links[i]} color={colors[i]} />
//       ))}
//     </div>
//   );
// };

// export default SocialIcons;



import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import SocialIcon from "../atoms/SocialIcon";

const links = [
  "https://www.linkedin.com/in/amrit-rai9335014143/",
  "https://github.com/amrit22oct",
  "https://leetcode.com/u/amrit22oct/",
  "https://www.instagram.com/_its_amrit._/",
];

const colors = ["#00ffff", "#ff4fff", "#00ff90", "#ffb700"];
const icons = [FaLinkedin, FaGithub, SiLeetcode, FaInstagram];

const SocialIcons = () => {
  return (
    <div className="flex flex-wrap gap-4 sm:gap-6">
      {icons.map((Icon, i) => (
        <SocialIcon key={i} Icon={Icon} link={links[i]} color={colors[i]} />
      ))}
    </div>
  );
};

export default SocialIcons;