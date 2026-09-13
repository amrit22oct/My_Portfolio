import { Sun, Moon } from "lucide-react";

// const NavControls = ({ theme, toggleTheme, isOpen, setIsOpen }) => {
//   return (
//     <div className="flex items-center gap-4 rounded-full! ">
//       {/* ================= Theme Toggle ================= */}
//       {/* <button
//         onClick={toggleTheme}
//         className="
//           relative w-[72px] h-[36px]
//           flex items-center
//           bg-white/20 dark:bg-white/10
//           backdrop-blur-2xl
//           px-1
//           rounded-full!
//           transition-all duration-500
//           hover:scale-105
//         "
//       >
     
//         <div className="absolute inset-0 flex items-center justify-between px-3 opacity-50">
//           <Sun size={16} className="text-yellow-600" />
//           <Moon size={16} className="text-blue-800" />
//         </div>

 
//         <div
//           className={`
//             relative z-10
//             w-[28px] h-[28px]
//             rounded-full!  
//             flex items-center justify-center
          
//             bg-gradient-to-br from-[#00ff90] via-[#00e0ff] to-[#ff4fff]
//             shadow-[0_0_12px_#00e0ff,0_0_20px_#ff4fff]
//             transition-all duration-500
//             ${theme === "dark" ? "translate-x-[36px]" : "translate-x-0"}
//           `}
//         >
//           {theme === "dark" ? (
//             <Moon size={14} className="text-black" />
//           ) : (
//             <Sun size={14} className="text-black" />
//           )}
//         </div>
//       </button> */}

//       {/* ================= Hamburger ================= */}
//       <div
//         className="flex flex-col justify-center gap-[6px] cursor-pointer md:hidden"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span
//           className={`w-8 h-[3px] rounded-full bg-cyan-400 dark:bg-cyan-400 transition-all duration-300 origin-center ${
//             isOpen ? "rotate-45 translate-y-[8px]" : ""
//           }`}
//         />
//         <span
//           className={`w-8 h-[3px] rounded-full bg-cyan-400 dark:bg-cyan-400 transition-all duration-300 ${
//             isOpen ? "opacity-0" : ""
//           }`}
//         />
//         <span
//           className={`w-8 h-[3px] rounded-full bg-cyan-400 dark:bg-cyan-400 transition-all duration-300 origin-center ${
//             isOpen ? "-rotate-45 -translate-y-[8px]" : ""
//           }`}
//         />
//       </div>
//     </div>
//   );
// };
const NavControls = ({ isOpen, setIsOpen }) => {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={() => setIsOpen((prev) => !prev)}
      className="
        relative
        z-[1500]

        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center

        rounded-xl

        transition-all
        duration-300

        active:scale-95

        md:hidden
      "
    >
      <span className="relative flex h-[20px] w-8 items-center justify-center">

        {/* TOP */}
        <span
          className={`
            absolute
            left-0

            h-[3px]
            w-8

            rounded-full

            bg-cyan-400

            transition-all
            duration-300
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              isOpen
                ? "top-1/2 rotate-45"
                : "top-0 rotate-0"
            }
          `}
        />

        {/* MIDDLE */}
        <span
          className={`
            absolute
            left-0
            top-1/2

            h-[3px]
            w-8

            -translate-y-1/2

            rounded-full

            bg-cyan-400

            transition-all
            duration-200

            ${
              isOpen
                ? "translate-x-4 opacity-0"
                : "translate-x-0 opacity-100"
            }
          `}
        />

        {/* BOTTOM */}
        <span
          className={`
            absolute
            left-0

            h-[3px]
            w-8

            rounded-full

            bg-cyan-400

            transition-all
            duration-300
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              isOpen
                ? "top-1/2 -rotate-45"
                : "bottom-0 rotate-0"
            }
          `}
        />
      </span>
    </button>
  );
};

export default NavControls;