import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

import NavControls from "../atoms/NavControls";
import NavLinks from "../atoms/NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
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
      { name: "Contact", path: "/contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 80) {
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
      {/* 1. TOP GLOW ORB (Centered) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[100px] z-[900] pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-purple-500 blur-[80px] opacity-20 dark:opacity-30" />
      </div>

      {/* 2. MAIN NAV BAR */}
      <header
        className={`
          fixed top-0 left-1/2 z-[1000] 
          w-[92%] md:w-fit
          transition-all duration-500 ease-in-out
          ${show ? "translate-y-6 opacity-100" : "-translate-y-24 opacity-0"}
          -translate-x-1/2
        `}
      >
        <nav
          className={`
            relative flex items-center justify-between gap-8
            h-[64px] px-6 md:px-8
            rounded-full border backdrop-blur-xl
            bg-white/40 dark:bg-black/20
            border-white/20 dark:border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.1)]
            after:absolute after:inset-0 after:rounded-full after:p-[1px] 
            after:bg-gradient-to-r after:from-white/20 after:to-transparent after:-z-10
          `}
        >
          {/* Logo / Brand (Optional - added for balance) */}
          <div className="hidden lg:flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 font-black tracking-tighter text-xl cursor-pointer" onClick={() => navigate("/")}>
              AM.
            </span>
          </div>

          {/* Desktop Links (Hidden on mobile) */}
          <div className="hidden md:flex items-center justify-center">
            <NavLinks links={links} onNavigate={() => setIsOpen(false)} />
          </div>

          {/* Controls (Theme toggle & Mobile burger) */}
          <div className="flex items-center gap-2">
            <NavControls
              theme={theme}
              toggleTheme={toggleTheme}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </nav>
      </header>

      {/* 3. MOBILE MENU (Full Screen Overlay) */}
      <div
        className={`
          fixed inset-0 z-[1100] md:hidden
          flex flex-col items-center justify-center gap-8
          backdrop-blur-2xl bg-black/90 dark:bg-[#02040a]/95
          transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}
        `}
      >
        {/* Close button inside NavControls handles closing, but let's map links */}
        <div className="absolute top-8 right-8">
           <button onClick={() => setIsOpen(false)} className="text-white text-4xl">&times;</button>
        </div>

        {links.map((link, index) => (
          <button
            key={link.name}
            onClick={() => {
              navigate(link.path);
              setIsOpen(false);
            }}
            className="group relative text-4xl font-bold text-white/70 hover:text-white transition-all"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            {link.name}
          </button>
        ))}
        
        <div className="mt-10 p-4 border-t border-white/10 text-white/40 text-[10px] tracking-widest uppercase">
          System Interface v4.0
        </div>
      </div>
    </>
  );
};

export default Navbar;