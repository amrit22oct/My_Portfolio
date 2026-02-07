import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

import NavControls from "../atoms/NavControls";
import NavLinks from "../atoms/NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true); // navbar visibility
  const [lastScroll, setLastScroll] = useState(0);

  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const links = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Journey", path: "/journey" },
      { name: "Skills", path: "/skills" },
      { name: "Projects", path: "/projects" },
      { name: "Education", path: "/education" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
    []
  );

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[60%] h-[80px] z-[900] pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-[#00ff90] via-[#00e0ff] to-[#ff4fff] blur-3xl opacity-20" />
      </div>

      <nav
        className={`
          fixed top-0 right-2 z-[1000]
          w-[95%] md:w-[80%] lg:w-[60%]
          h-[72px] px-6 md:px-10
          flex items-center justify-between
          rounded-full border backdrop-blur-3xl
          bg-white/20 dark:bg-white/5
          border-white/20
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
          transition-transform duration-500 ease-in-out
          ${show ? "translate-y-6 opacity-100" : "-translate-y-24 opacity-0"}
        `}
      >
        {/* Left Spacer */}
        <div className="flex-1" />

        {/* Center Links */}
        <div className="flex justify-center flex-1">
          <NavLinks links={links} onNavigate={() => setIsOpen(false)} />
        </div>

        {/* Right Controls */}
        <div className="flex-1 flex justify-end">
          <NavControls
            theme={theme}
            toggleTheme={toggleTheme}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed inset-0 z-[900] md:hidden
          flex flex-col items-center justify-center gap-10
          backdrop-blur-3xl bg-black/70
          transition-transform duration-500
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => {
              navigate(link.path);
              setIsOpen(false);
            }}
            className="text-3xl text-white/90 hover:text-[#00ff90] transition"
          >
            {link.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
