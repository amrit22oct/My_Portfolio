// import { useState, useEffect, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTheme } from "../../context/ThemeContext";

// import NavControls from "../atoms/NavControls";
// import NavLinks from "../atoms/NavLinks";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [show, setShow] = useState(true);
//   const [lastScroll, setLastScroll] = useState(0);

//   const { theme, toggleTheme } = useTheme();
//   const navigate = useNavigate();

//   const links = useMemo(
//     () => [
//       { name: "Home", path: "/" },
//       { name: "About", path: "/about" },
//       { name: "Journey", path: "/journey" },
//       { name: "Skills", path: "/skills" },
//       { name: "Projects", path: "/projects" },
//       { name: "Contact", path: "/contact" },
//     ],
//     []
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;
//       if (currentScroll > lastScroll && currentScroll > 80) {
//         setShow(false);
//       } else {
//         setShow(true);
//       }
//       setLastScroll(currentScroll);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScroll]);

//   return (
//     <>
//       {/* TOP AMBIENT GLOW */}
//       <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[120px] z-[900] pointer-events-none hidden md:block">
//         <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-purple-500 blur-[100px] opacity-20 dark:opacity-30" />
//       </div>

//       {/* MAIN NAV */}
//       <header
//   className={`
//     fixed -top-3 md:-top-6 left-1/2 -translate-x-1/2
//     z-[1000]
//     w-[95%] md:w-fit
//     transition-all duration-500 ease-in-out
//     ${show ? "translate-y-2 md:translate-y-6 opacity-100" : "-translate-y-32 opacity-0"}
//   `}
// >
// <nav
//   className="
//     relative flex items-center
//     h-[58px] md:h-[64px]
//     px-4 md:px-8
//     rounded-full md:mt-0 mt-2
//    bg-transparent

//     md:shadow-[0_10px_40px_rgba(0,0,0,0.15)]
//   "
// >
//   {/* Desktop Logo */}
//   {/* <div className="hidden lg:flex items-center mr-6">
//     <span
//       onClick={() => navigate("/")}
//       className="
//         text-transparent bg-clip-text
//         bg-gradient-to-r from-emerald-400 to-cyan-500
//         font-black tracking-tight text-xl
//         cursor-pointer
//       "
//     >
//       AM.
//     </span>
//   </div> */}

//   {/* Desktop Links */}
//   <div className="hidden md:flex items-center">
//     <NavLinks links={links} onNavigate={() => setIsOpen(false)} />
//   </div>

//   {/* Desktop Theme Toggle */}
//   <div className="hidden md:flex items-center ml-auto">
//     <NavControls
//       theme={theme}
//       toggleTheme={toggleTheme}
//       isOpen={isOpen}
//       setIsOpen={setIsOpen}
//     />
//   </div>

//   {/* Mobile Hamburger Only */}
//   <div className="flex md:hidden ml-auto">
//     <NavControls
//       theme={theme}
//       toggleTheme={toggleTheme}
//       isOpen={isOpen}
//       setIsOpen={setIsOpen}
//       mobileOnly
//     />
//   </div>
// </nav>
// </header>

//       {/* MOBILE MENU */}
//       <div
//         className={`
//           fixed inset-0 z-[1100] md:hidden
//           flex flex-col items-center justify-center gap-10
//           backdrop-blur-3xl
//           bg-black/90 dark:bg-[#02040a]/95
//           transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
//           ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}
//         `}
//       >
//         {/* CLOSE BUTTON */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-8 right-8 text-white text-4xl hover:rotate-90 transition-transform duration-300"
//         >
//           &times;
//         </button>

//         {/* MOBILE LINKS */}
//         {links.map((link, index) => (
//           <button
//             key={link.name}
//             onClick={() => {
//               navigate(link.path);
//               setIsOpen(false);
//             }}
//             className="
//               group relative text-4xl font-extrabold tracking-tight
//               text-white/70 hover:text-white
//               transition-all duration-300
//             "
//             style={{ transitionDelay: `${index * 60}ms` }}
//           >
//             <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-5 h-[2px] bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
//             {link.name}
//           </button>
//         ))}

//         <div className="mt-16 pt-6 border-t border-white/10 text-white/40 text-[10px] tracking-widest uppercase">
//           System Interface v4.0
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import NavControls from "../atoms/NavControls";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);

  const lastScrollRef = useRef(0);

  const navigate = useNavigate();
  const location = useLocation();

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

  /* -----------------------------
     Scroll Navbar
  ----------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const previousScroll = lastScrollRef.current;

      if (currentScroll <= 30) {
        setShow(true);
      } else if (currentScroll > previousScroll && currentScroll > 100) {
        setShow(false);
      } else if (currentScroll < previousScroll) {
        setShow(true);
      }

      lastScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -----------------------------
     Close menu on navigation
  ----------------------------- */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* -----------------------------
     Prevent background scrolling
  ----------------------------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* =====================================================
          DESKTOP NAVBAR
      ===================================================== */}
      <header
        className={`
          fixed
          left-1/2
          top-0
          z-[1000]

          hidden
          -translate-x-1/2
          md:block

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${show ? "translate-y-5 opacity-100" : "-translate-y-24 opacity-0"}
        `}
      >
        <nav
          className="
            flex
            h-[58px]
            items-center

            rounded-2xl

            border
            border-slate-200

            bg-transparent

            px-2

            shadow-[0_10px_35px_rgba(15,23,42,0.08)]

            backdrop-blur-xl

            dark:border-slate-800
            dark:bg-[#080c12]
            dark:shadow-[0_10px_35px_rgba(0,0,0,0.35)]
          "
        >
          <div className="flex items-center gap-1">
            {links.map((link, index) => {
              const active = isActive(link.path);

              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleNavigate(link.path)}
                  className={`
                    group
                    relative
                    flex
                    h-[42px]
                    items-center
                    justify-center
                    overflow-hidden

                    rounded-xl

                    px-3.5

                    text-[13px]
                    font-medium

                    transition-all
                    duration-300

                    ${
                      active
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    }
                  `}
                  style={{
                    animationDelay: `${index * 60}ms`,
                  }}
                >
                  {/* Existing color coding */}
                  <span
                    className={`
                      absolute
                      inset-0
                      rounded-xl

                      transition-all
                      duration-300

                      ${
                        active
                          ? "scale-100 bg-slate-100 opacity-100 dark:bg-slate-800"
                          : "scale-90 bg-slate-100 opacity-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-slate-800"
                      }
                    `}
                  />

                  <span className="relative z-10">{link.name}</span>

                  {/* Your original gradient */}
                  <span
                    className={`
                      absolute
                      bottom-[5px]
                      left-1/2

                      h-[2px]

                      -translate-x-1/2

                      rounded-full

                      bg-gradient-to-r
                      from-emerald-400
                      via-cyan-400
                      to-purple-500

                      transition-all
                      duration-500

                      ${active ? "w-5 opacity-100" : "w-0 opacity-0"}
                    `}
                  />
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* =====================================================
          MOBILE NAVBAR
          ONLY HAMBURGER
      ===================================================== */}
      <header
        className={`
          fixed
          left-0
          top-0
          z-[1400]

          w-full
          px-3
          pt-3

          md:hidden

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${show ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}
        `}
      >
        <nav
          className="
            flex
            h-[54px]
            w-full
            items-center
            justify-between

            rounded-2xl

            border
            border-slate-200

            bg-transparent

            px-4
            py-1.5

            shadow-[0_8px_30px_rgba(15,23,42,0.08)]

            backdrop-blur-xl

            dark:border-slate-800
            dark:bg-[#080c12]
            dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          "
        >
          <span className="text-cyan-300 font-bold iflex items-center justify-center text-2xl">
            {" "}
            A R
          </span>
          {/* ONLY BUTTON */}
          <NavControls isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      <div
        className={`
          fixed
          inset-0
          z-[1300]

          flex
          flex-col

          bg-black/70

          dark:bg-[#05070b]

          md:hidden

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isOpen
              ? "visible translate-x-0 opacity-100"
              : "invisible translate-x-full opacity-0"
          }
        `}
      >
        {/* ---------------------------------
            Header
        --------------------------------- */}
        {/* <div
          className={`
            flex
            h-[68px]
            shrink-0
            items-center
            justify-between
            border-b
            border-slate-200

            px-5

            !bg-transparent

            dark:border-slate-800

            transition-all
            duration-500

            ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0"
            }
          `}
        >
          <div>
            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.28em]
          

                text-white

                dark:text-slate-400
              "
            >
              Explore
            </p>

            <div
              className="
                mt-1
                h-[2px]
                w-7
                rounded-full

                bg-gradient-to-r
                from-emerald-400
                to-cyan-400
              "
            />
          </div>
        </div> */}

        {/* ---------------------------------
            Links
        --------------------------------- */}
        <div
          className="
            flex
            flex-1
            flex-col
            justify-center

            overflow-y-auto

            px-5
            py-8
          "
        >
          <div className="mx-auto w-full max-w-[500px]">
            {links.map((link, index) => {
              const active = isActive(link.path);

              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleNavigate(link.path)}
                  className={`
                    group
                    relative

                    flex
                    w-full
                    items-center

                    border-b
                    border-slate-200

                    py-[17px]

                    text-left

                    transition-all
                    duration-500

                    dark:border-slate-800

                    ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${100 + index * 70}ms`,
                  }}
                >
                  {/* Number */}
                  <span
                    className={`
                      mr-5
                      w-5

                      font-mono
                      text-[10px]

                      ${
                        active
                          ? "text-emerald-500 dark:text-emerald-400"
                          : "text-slate-400 dark:text-slate-600"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Name */}
                  <span
                    className={`
                      text-[clamp(24px,7vw,32px)]
                      font-bold
                      tracking-tight

                      transition-all
                      duration-300

                      ${
                        active
                          ? "translate-x-1 text-slate-900 dark:text-white"
                          : "text-slate-400 group-hover:translate-x-1 group-hover:text-slate-900 dark:text-slate-500 dark:group-hover:text-white"
                      }
                    `}
                  >
                    {link.name}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`
                      ml-auto

                      text-lg

                      transition-all
                      duration-300

                      ${
                        active
                          ? "translate-x-0 text-emerald-500 opacity-100 dark:text-emerald-400"
                          : "-translate-x-2 text-emerald-500 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 dark:text-emerald-400"
                      }
                    `}
                  >
                    →
                  </span>

                  {/* Active dot */}
                  <span
                    className={`
                      absolute
                      left-0
                      top-1/2

                      h-1.5
                      w-1.5

                      -translate-y-1/2

                      rounded-full

                      bg-emerald-500

                      shadow-[0_0_10px_rgba(16,185,129,0.7)]

                      transition-all
                      duration-300

                      dark:bg-emerald-400

                      ${active ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ---------------------------------
            Footer
        --------------------------------- */}
        <div
          className={`
            flex
            shrink-0
            items-center
            justify-between

            border-t
            border-slate-200

            px-5
            py-4

            dark:border-slate-800

            transition-all
            duration-700

            ${isOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
          `}
          style={{
            transitionDelay: "500ms",
          }}
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.22em]

              text-slate-400

              dark:text-slate-500
            "
          >
            Full Stack Developer
          </span>

          <div className="flex items-center gap-2">
            <span
              className="
                h-1.5
                w-1.5

                animate-pulse

                rounded-full

                bg-emerald-500

                shadow-[0_0_10px_rgba(16,185,129,0.7)]

                dark:bg-emerald-400
              "
            />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.18em]

                text-slate-400

                dark:text-slate-500
              "
            >
              Online
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
