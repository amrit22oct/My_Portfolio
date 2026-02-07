import { useLocation, useNavigate } from "react-router-dom";

const NavLinks = ({ links, onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    onNavigate?.(); // closes mobile menu if passed
  };

  return (
    <ul className="hidden md:flex items-center justify-center gap-6 m-0! px-2">
      {links.map((link) => {
        const active = location.pathname === link.path;

        return (
          <li key={link.name} className="relative group">
            <button
              onClick={() => handleClick(link.path)}
              className={`
                relative z-10
                px-4 py-2 text-sm tracking-wide rounded-full
                transition-all duration-300
                ${
                  active
                    ? "text-white"
                    : "text-black/70 dark:text-white/70 group-hover:text-white"
                }
              `}
            >
              {link.name}
            </button>

            {/* Glass pill background */}
            <span
              className={`
                absolute inset-0 rounded-full
                transition-all duration-500
                ${
                  active
                    ? "bg-gradient-to-r from-[#00ff90]/20 via-[#00e0ff]/20 to-[#ff4fff]/20 backdrop-blur-md scale-100"
                    : "scale-0 group-hover:scale-100 bg-white/10 dark:bg-white/10 backdrop-blur-md"
                }
              `}
            />

            {/* Gradient underline */}
            {/* <span
              className={`
                absolute left-3 right-3 -bottom-1 h-[2px]
                bg-gradient-to-r from-[#00ff90] via-[#00e0ff] to-[#ff4fff]
                origin-left transition-all duration-500
                ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
              `}
            /> */}
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
