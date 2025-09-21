import { useState, useEffect, useMemo } from "react";
import Logo from "../assets/Logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = useMemo(
    () => [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Journey", href: "#journey" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Education", href: "#education" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

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
          : "bg-[rgba(20,24,36,0.85)] h-[70px]"
      }`}
    >
      <div className="flex items-center justify-between h-full px-6 md:px-12">
        {/* Logo */}
        <a href="#home" onClick={() => setIsOpen(false)}>
          <img
            src={Logo}
            alt="Logo"
            className="h-14 md:h-16 w-auto object-contain drop-shadow-[0_0_20px_#ff4fff] hover:scale-105 transition-transform duration-300 animate-neonGlow"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex list-none gap-10">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="text-white text-[0.95rem] font-medium tracking-[0.5px] relative z-10 transition-all duration-300"
              >
                {link.name}
              </a>
              <span className="absolute inset-0 bg-gradient-to-r from-[#00ff90] via-[#00e0ff] to-[#ff4fff] rounded opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#00ff90] via-[#00e0ff] to-[#ff4fff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out rounded shadow-[0_0_6px_#00e0ff,0_0_10px_#ff4fff]"></span>
            </li>
          ))}
        </ul>

        {/* Hamburger - Mobile */}
        <div
          className="flex flex-col gap-2 cursor-pointer md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-7 h-0.5 rounded transition-all duration-300 ${
              isOpen
                ? "rotate-45 translate-y-2 bg-gradient-to-r from-[#00ff90] via-[#00e0ff] to-[#ff4fff] shadow-[0_0_12px_#ff4fff]"
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
                ? "-rotate-45 -translate-y-2 bg-gradient-to-r from-[#00ff90] via-[#00e0ff] to-[#ff4fff] shadow-[0_0_12px_#ff4fff]"
                : "bg-white"
            }`}
          />
        </div>
      </div>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
<ul
  className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-8 bg-[rgba(20,24,36,0.97)] backdrop-blur-[18px] transition-transform duration-300 md:hidden z-40 overflow-y-auto ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {links.map((link) => (
    <li key={link.name}>
      <a
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="text-white text-2xl font-medium transition-all duration-300 hover:text-[#00ff90] hover:scale-110 hover:drop-shadow-[0_0_18px_#00e0ff]"
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>

    </nav>
  );
};

export default Navbar;
