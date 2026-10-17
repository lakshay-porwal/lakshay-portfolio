import { useState } from "react";
import { Briefcase } from "lucide-react";
import AtomChat from "./AtomChat";

const FloatingActions = ({ scrollToSection = () => {} }) => {
  const [atomOpen, setAtomOpen] = useState(false);

  return (
    <>
      {/* ===================== COORDINATED FLOATING STACK ===================== */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none select-none">
        
        {/* ATOM LAUNCHER ICON (DIRECTLY ABOVE HIRE ME) */}
        <div className="relative group pointer-events-auto">
          {/* HOVER TOOLTIP */}
          <div className="
            pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2
            px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap
            bg-neutral-900/95 dark:bg-neutral-800/95 text-white
            shadow-lg border border-neutral-700/60
            opacity-0 group-hover:opacity-100 transition-opacity duration-200
            hidden sm:flex items-center gap-1.5 backdrop-blur-sm
          ">
            <span>Ask Atom AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setAtomOpen((prev) => !prev);
            }}
            aria-label="Toggle Atom AI Assistant"
            aria-expanded={atomOpen}
            className={`
              relative
              w-12 h-12 sm:w-13 sm:h-13
              rounded-full
              flex items-center justify-center
              shadow-xl backdrop-blur-md
              transition-all duration-200
              hover:scale-105 active:scale-95
              ${
                atomOpen
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-cyan-500/35 ring-2 ring-cyan-400"
                  : "bg-neutral-900/95 dark:bg-neutral-900/95 text-white hover:bg-neutral-800 dark:hover:bg-neutral-800 border border-neutral-700/60 shadow-black/30"
              }
            `}
          >
            {/* ATOM ORBITAL SVG ICON */}
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                atomOpen ? "rotate-90 text-white" : "text-cyan-400 group-hover:text-cyan-300"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Central Nucleus */}
              <circle cx="12" cy="12" r="2.2" fill="currentColor" />
              {/* Electron Orbit 1 */}
              <ellipse cx="12" cy="12" rx="9" ry="3.8" />
              {/* Electron Orbit 2 (rotated 60 deg) */}
              <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
              {/* Electron Orbit 3 (rotated 120 deg) */}
              <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
            </svg>

            {/* PULSE STATUS DOT */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 ring-2 ring-white dark:ring-neutral-900"></span>
            </span>
          </button>
        </div>

        {/* HIRE ME BUTTON (BELOW ATOM) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            scrollToSection("contact");
          }}
          aria-label="Contact Lakshay - Hire Me"
          className="
            pointer-events-auto
            flex items-center gap-2 px-5 py-2.5 sm:px-5 sm:py-3
            rounded-full font-semibold text-xs sm:text-sm text-white
            bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500
            shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40
            hover:-translate-y-0.5
            active:translate-y-0
            transition-all duration-200
          "
        >
          <Briefcase className="w-4 h-4" />
          <span>Hire Me</span>
        </button>
      </div>

      {/* ===================== ATOM CHAT PANEL ===================== */}
      <AtomChat isOpen={atomOpen} setIsOpen={setAtomOpen} />
    </>
  );
};

export default FloatingActions;
