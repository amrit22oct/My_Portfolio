// src/components/pages/HomeContainer.jsx

import Home from "./Home";
import About from "./About";
import Journey from "./Journey";



import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import CodeBox from "../molecules/CodeBox";
import IntroSection from "../organisms/IntroSection";


const animatedTexts = [
  "Software Developer.",
  "Full-Stack Developer.",
  "MERN Stack Developer.",
  "Node Js Developer.",
];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (typing) {
      if (charIndex < animatedTexts[currentIndex].length) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
          setCurrentText(
            animatedTexts[currentIndex].slice(0, charIndex + 1)
          );
        }, 120);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
          setCurrentText(
            animatedTexts[currentIndex].slice(0, charIndex - 1)
          );
        }, 80);
      } else {
        setTyping(true);
        setCurrentIndex((prev) => (prev + 1) % animatedTexts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, currentIndex]);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 px-4 sm:px-8 lg:px-20 pt-[100px] sm:pt-[120px] pb-12 text-white font-mono overflow-hidden"
    >
      <IntroSection currentText={currentText} />
      <CodeBox />
    </section>
  );
};

export default Hero;


