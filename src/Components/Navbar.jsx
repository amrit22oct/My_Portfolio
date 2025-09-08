import { useState, useEffect } from "react";
import Logo from "../assets/Logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[1000] font-poppins transition-all duration-400 backdrop-blur-[15px] border-b border-white/10 ${
        scrolled
          ? "bg-[rgba(15,18,30,0.95)] h-[65px] shadow-[0_8px_30px_rgba(0,0,0,0.7)]"
          : "bg-[rgba(20,24,36,0.5)]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-10 h-[75px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home" onClick={() => setIsOpen(false)}>
            <img
              src={Logo}
              alt="Logo"
              className="h-14 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_#ff4fff] hover:scale-110 transition-transform duration-300 animate-neonGlow"
            />
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex list-none gap-10">
          {links.map((link) => (
            <li key={link.name} className="group relative">
              <a
                href={link.href}
                className="text-white text-[1rem] font-medium tracking-[0.5px] transition-all duration-300 hover:text-[#ff4fff] hover:drop-shadow-[0_0_12px_#ff4fff]"
              >
                {link.name}
              </a>
              {/* Neon underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff4fff] rounded transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#ff4fff,0_0_15px_#ff4fff]"></span>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          className="flex flex-col gap-2 cursor-pointer md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-7 h-0.5 rounded transition-all duration-300 ${
              isOpen
                ? "rotate-45 translate-y-2 bg-[#ff4fff] shadow-[0_0_12px_#ff4fff]"
                : "bg-white"
            }`}
          />
          <span
            className={`w-7 h-0.5 rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : "bg-white"
            }`}
          />
          <span
            className={`w-7 h-0.5 rounded transition-all duration-300 ${
              isOpen
                ? "-rotate-45 -translate-y-2 bg-[#ff4fff] shadow-[0_0_12px_#ff4fff]"
                : "bg-white"
            }`}
          />
        </div>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-0 left-0 w-full h-screen bg-[rgba(20,24,36,0.97)] backdrop-blur-[18px] flex flex-col justify-center items-center gap-12 transform transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-xl font-medium transition-all duration-300 hover:text-[#ff4fff] hover:scale-110 hover:drop-shadow-[0_0_15px_#ff4fff]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
