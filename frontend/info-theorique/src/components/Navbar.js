import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Accueil", to: "/" },
  { label: "Bibliothèque", to: "/bibliotheque" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 bg-sky-700  left-0 right-0 z-50 backdrop-blur-md transition-all duration-300
        ${scrolled
          ? " shadow-lg shadow-black/30 border-b border-white/10"
          : " border-b border-white/5"
        }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2 text-white text-sm font-semibold tracking-widest uppercase">
          Info-Théorique
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  `relative px-4 py-1.5 text-xs font-medium tracking-widest uppercase transition-colors duration-200
                  after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px
                  after:bg-white after:transition-transform after:duration-300 after:origin-left
                  ${isActive
                    ? "text-white after:scale-x-100"
                    : "text-gray-400 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-full h-px bg-white transition-transform duration-300 origin-center ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`} />
          <span className={`block w-full h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-full h-px bg-white transition-transform duration-300 origin-center ${menuOpen ? "-translate-y-[9px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64 border-t border-white/10" : "max-h-0"}`}>
        <div className="px-6 py-2 flex flex-col">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between py-3 text-xs font-medium tracking-widest
                uppercase border-b border-white/5 last:border-none transition-all duration-200
                ${isActive ? "text-white pl-2" : "text-gray-400 hover:text-white hover:pl-2"}`
              }
            >
              {link.label}
              <span className="text-white text-xs">→</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}