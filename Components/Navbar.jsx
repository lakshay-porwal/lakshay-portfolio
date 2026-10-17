import { useState, useEffect, useCallback } from "react";
import { Menu, X, Sun, Moon, Sparkles, Terminal } from "lucide-react";

const Navbar = ({
  navItems = [],
  activeSection = "",
  scrollToSection = () => {},
  darkMode = false,
  setDarkMode = () => {},
}) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ===================== SCROLL LISTENER ===================== */
  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/85 dark:bg-neutral-900/85 shadow-sm backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800"
            : "bg-white/60 dark:bg-neutral-950/60 backdrop-blur-sm border-b border-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* BRAND TITLE ONLY */}
        <button
          onClick={() => handleNavClick("home")}
          className="group cursor-pointer text-left py-1 flex items-center"
          aria-label="Lakshay.Dev - Back to top"
        >
          <span className="text-xl sm:text-2xl font-black tracking-tight font-mono text-neutral-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-200">
            Lakshay<span className="text-cyan-600 dark:text-cyan-400">.Dev</span>
          </span>
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  px-3.5 py-1.5 rounded-lg text-xs font-semibold
                  transition-all duration-150 cursor-pointer
                  ${
                    active
                      ? "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-200/60 dark:border-cyan-800/50"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"
                  }
                `}
              >
                {item.label}
              </button>
            );
          })}

          <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800 mx-1.5" />

          {/* THEME TOGGLE */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="
              p-2 rounded-lg
              text-neutral-600 dark:text-neutral-400
              hover:text-neutral-900 dark:hover:text-white
              hover:bg-neutral-100 dark:hover:bg-neutral-800
              transition
            "
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>
        </nav>

        {/* MOBILE CONTROLS */}
        <div className="md:hidden flex items-center gap-1.5">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>

          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 pt-2 pb-4 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition
                  ${
                    active
                      ? "bg-indigo-50 dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400 font-semibold"
                      : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }
                `}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
