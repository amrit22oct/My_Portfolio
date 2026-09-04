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
      {/* TOP AMBIENT GLOW */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[120px] z-[900] pointer-events-none hidden md:block">
        <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-purple-500 blur-[100px] opacity-20 dark:opacity-30" />
      </div>

      {/* MAIN NAV */}
      <header
  className={`
    fixed -top-3 md:-top-6 left-1/2 -translate-x-1/2 
    z-[1000]
    w-[95%] md:w-fit
    transition-all duration-500 ease-in-out
    ${show ? "translate-y-2 md:translate-y-6 opacity-100" : "-translate-y-32 opacity-0"}
  `}
>
<nav
  className="
    relative flex items-center
    h-[58px] md:h-[64px]
    px-4 md:px-8
    rounded-full md:mt-0 mt-2
   bg-transparent

  
    md:shadow-[0_10px_40px_rgba(0,0,0,0.15)]
  "
>
  {/* Desktop Logo */}
  {/* <div className="hidden lg:flex items-center mr-6">
    <span
      onClick={() => navigate("/")}
      className="
        text-transparent bg-clip-text
        bg-gradient-to-r from-emerald-400 to-cyan-500
        font-black tracking-tight text-xl
        cursor-pointer
      "
    >
      AM.
    </span>
  </div> */}

  {/* Desktop Links */}
  <div className="hidden md:flex items-center">
    <NavLinks links={links} onNavigate={() => setIsOpen(false)} />
  </div>

  {/* Desktop Theme Toggle */}
  <div className="hidden md:flex items-center ml-auto">
    <NavControls
      theme={theme}
      toggleTheme={toggleTheme}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  </div>

  {/* Mobile Hamburger Only */}
  <div className="flex md:hidden ml-auto">
    <NavControls
      theme={theme}
      toggleTheme={toggleTheme}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      mobileOnly
    />
  </div>
</nav>
</header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-[1100] md:hidden
          flex flex-col items-center justify-center gap-10
          backdrop-blur-3xl
          bg-black/90 dark:bg-[#02040a]/95
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-white text-4xl hover:rotate-90 transition-transform duration-300"
        >
          &times;
        </button>

        {/* MOBILE LINKS */}
        {links.map((link, index) => (
          <button
            key={link.name}
            onClick={() => {
              navigate(link.path);
              setIsOpen(false);
            }}
            className="
              group relative text-4xl font-extrabold tracking-tight
              text-white/70 hover:text-white
              transition-all duration-300
            "
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-5 h-[2px] bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            {link.name}
          </button>
        ))}

        <div className="mt-16 pt-6 border-t border-white/10 text-white/40 text-[10px] tracking-widest uppercase">
          System Interface v4.0
        </div>
      </div>
    </>
  );
};

export default Navbar;