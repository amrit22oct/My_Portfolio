import { Sun, Moon } from "lucide-react";

const NavControls = ({ theme, toggleTheme, isOpen, setIsOpen }) => {
  return (
    <div className="flex items-center gap-4 rounded-full! ">
      {/* ================= Theme Toggle ================= */}
      <button
        onClick={toggleTheme}
        className="
          relative w-[72px] h-[36px]
          flex items-center
          bg-white/20 dark:bg-white/10
          backdrop-blur-2xl
          px-1
          rounded-full!
          transition-all duration-500
          hover:scale-105
        "
      >
        {/* Background icons */}
        <div className="absolute inset-0 flex items-center justify-between px-3 opacity-50">
          <Sun size={16} className="text-yellow-600" />
          <Moon size={16} className="text-blue-800" />
        </div>

        {/* Sliding knob */}
        <div
          className={`
            relative z-10
            w-[28px] h-[28px]
            rounded-full!
            flex items-center justify-center
          
            bg-gradient-to-br from-[#00ff90] via-[#00e0ff] to-[#ff4fff]
            shadow-[0_0_12px_#00e0ff,0_0_20px_#ff4fff]
            transition-all duration-500
            ${theme === "dark" ? "translate-x-[36px]" : "translate-x-0"}
          `}
        >
          {theme === "dark" ? (
            <Moon size={14} className="text-black" />
          ) : (
            <Sun size={14} className="text-black" />
          )}
        </div>
      </button>

      {/* ================= Hamburger ================= */}
      <div
        className="flex flex-col justify-center gap-[6px] cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`w-8 h-[3px] rounded-full bg-black dark:bg-white transition-all duration-300 origin-center ${
            isOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        />
        <span
          className={`w-8 h-[3px] rounded-full bg-black dark:bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-8 h-[3px] rounded-full bg-black dark:bg-white transition-all duration-300 origin-center ${
            isOpen ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default NavControls;
