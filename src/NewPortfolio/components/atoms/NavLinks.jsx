

import { useLocation, useNavigate } from "react-router-dom";

const NavLinks = ({ links, onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    onNavigate?.();
  };

  return (
    <ul className="hidden md:flex items-center gap-1">
      {links.map((link) => {
        const active =
          location.pathname === link.path ||
          (link.path !== "/" &&
            location.pathname.startsWith(link.path));

        return (
          <li key={link.name}>
            <button
              type="button"
              onClick={() => handleClick(link.path)}
              className={
                "group relative overflow-hidden rounded-xl px-5 py-2.5 " +
                "text-sm font-medium tracking-wide " +
                "transition-all duration-500 ease-out " +
                "focus:outline-none " +
                (active
                  ? "text-white"
                  : "text-neutral-400 hover:text-white")
              }
            >
              {/* Background */}
              <span
                className={
                  "absolute inset-0 rounded-xl transition-all duration-500 " +
                  (active
                    ? "bg-white/[0.07] opacity-100"
                    : "bg-white/[0.03] opacity-0 group-hover:opacity-100")
                }
              />

              {/* Top light */}
              <span
                className={
                  "absolute left-1/2 top-0 h-px -translate-x-1/2 " +
                  "bg-gradient-to-r from-transparent via-cyan-300 to-transparent " +
                  "transition-all duration-500 " +
                  (active
                    ? "w-3/4 opacity-100"
                    : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-70")
                }
              />

              {/* Text */}
              <span className="relative z-10">
                {link.name}
              </span>

              {/* Bottom light beam */}
              <span
                className={
                  "absolute bottom-0 left-1/2 h-[2px] " +
                  "-translate-x-1/2 rounded-full " +
                  "bg-gradient-to-r from-transparent via-cyan-300 to-transparent " +
                  "shadow-[0_0_12px_rgba(103,232,249,0.8)] " +
                  "transition-all duration-500 " +
                  (active
                    ? "w-10 opacity-100"
                    : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-70")
                }
              />

              {/* Corner glow */}
              {active && (
                <span
                  className="
                    absolute
                    -right-4
                    -top-4
                    h-10
                    w-10
                    rounded-full
                    bg-cyan-300/20
                    blur-xl
                  "
                />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
