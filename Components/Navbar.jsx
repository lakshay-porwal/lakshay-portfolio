import { useState, useEffect, useCallback } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = ({
  navItems = [],
  activeSection = "",
  scrollToSection = () => {},
  darkMode = false,
  setDarkMode = () => {},
}) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ===================== SCROLL ===================== */
  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  /* ===================== CLOSE MOBILE ===================== */
  useEffect(() => {
    setOpen(false);
  }, [activeSection]);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50
        transition-all duration-300
        ${scrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-xl"
          : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md"}
        border-b border-gray-200/50 dark:border-gray-800/50
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

      <button
  onClick={() => scrollToSection("home")}
  className="text-xl font-extrabold tracking-tight cursor-pointer"
>
  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    Lakshay
  </span>
  <span className="text-gray-900 dark:text-white">.dev</span>
</button>


        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const active = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium
                  transition-all
                  ${active
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}
                `}
              >
                {item.label}
              </button>
            );
          })}

          {/* THEME TOGGLE */}
          <button
            onClick={() => setDarkMode((p) => !p)}
            className="
              ml-2 p-2 rounded-full
              bg-gray-100 dark:bg-gray-800
              hover:scale-110 transition
            "
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </nav>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode((p) => !p)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>

          <button
            onClick={() => setOpen((p) => !p)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-4 pb-4 space-y-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl">
          {navItems.map((item) => {
            const active = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  block w-full text-left px-4 py-3 rounded-xl
                  transition-all
                  ${active
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}
                `}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
