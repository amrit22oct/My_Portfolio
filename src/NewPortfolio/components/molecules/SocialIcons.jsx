

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import SocialIcon from "../atoms/SocialIcon";

const links = [
  "https://www.linkedin.com/in/amrit-rai9335014143/",
  "https://github.com/amrit22oct",
  "https://leetcode.com/u/amrit22oct/",
  "https://www.instagram.com/_its_amrit._/",
];

const icons = [
  FaLinkedin,
  FaGithub,
  SiLeetcode,
  FaInstagram,
];

const labels = [
  "LinkedIn",
  "GitHub",
  "LeetCode",
  "Instagram",
];

const colors = [
  "#00e0ff",
  "#ffffff",
  "#00ff9d",
  "#ff4fd8",
];

const SocialIcons = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {icons.map((Icon, index) => (
        <SocialIcon
          key={labels[index]}
          Icon={Icon}
          link={links[index]}
          color={colors[index]}
          label={labels[index]}
        />
      ))}
    </div>
  );
};

export default SocialIcons;