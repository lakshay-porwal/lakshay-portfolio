import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  X,
  Eye,
  ChevronDown,
  Briefcase,
} from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "Blockchain Engineer",
  "Web3 Enthusiast",
];

const Hero = ({ scrollToSection = () => {} }) => {
  const [openResume, setOpenResume] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  /* ===================== LOOP TYPING ===================== */
  useEffect(() => {
    let i = 0;
    setTypedText("");

    const interval = setInterval(() => {
      i++;
      setTypedText(ROLES[roleIndex].slice(0, i));
      if (i >= ROLES[roleIndex].length) {
        clearInterval(interval);
        setTimeout(
          () => setRoleIndex((prev) => (prev + 1) % ROLES.length),
          1200
        );
      }
    }, 80);

    return () => clearInterval(interval);
  }, [roleIndex]);

  return (
    <>
      <section
        id="home"
        className="
          relative min-h-screen flex items-center overflow-hidden
          bg-white dark:bg-gray-950
        "
      >
        {/* BACKGROUND BLOBS */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-8 animate-fadeUp">
            <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase">
              Hello, I’m
            </p>

            {/* NAME */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight relative inline-block">
              Lakshay{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Porwal
              </span>

              <span
                className="
                  absolute left-0 -bottom-3 w-full h-[3px]
                  bg-gradient-to-r from-blue-600 to-purple-600
                  animate-underline
                "
              />
            </h1>

            {/* ROLE */}
            <p className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300 min-h-[3rem]">
              {typedText}
              <span className="ml-1 animate-pulse text-blue-600">|</span>
            </p>

            {/* DESCRIPTION */}
            <p className="max-w-xl text-lg text-gray-600 dark:text-gray-400">
              I design and build scalable web & blockchain applications with
              clean architecture, strong fundamentals, and real-world impact.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-5 pt-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="
                  px-9 py-3 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-blue-600 to-purple-600
                  hover:scale-105 transition
                "
              >
                Let’s Work Together
              </button>

              <button
                onClick={() => setOpenResume(true)}
                className="
                  px-9 py-3 rounded-xl font-semibold flex items-center gap-2
                  border border-gray-300 dark:border-gray-600
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  transition
                "
              >
                <Eye className="w-5 h-5" /> View Resume
              </button>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-5 pt-6">
              <Social href="https://github.com/lakshay-porwal">
                <Github />
              </Social>
              <Social href="https://www.linkedin.com/in/lakshay-porwal">
                <Linkedin />
              </Social>
              <Social href="mailto:lakshayp987@gmail.com">
                <Mail />
              </Social>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR (HIDDEN ON MOBILE ✅) */}
        <button
          onClick={() => scrollToSection("about")}
          className="
            hidden sm:flex
            absolute bottom-8 left-1/2 -translate-x-1/2
            flex-col items-center gap-2
            text-gray-500 dark:text-gray-400
            hover:text-blue-600 dark:hover:text-blue-400
            transition
          "
        >
          <div className="h-8 w-[2px] bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse" />
          <ChevronDown className="w-7 h-7 animate-bounce" />
        </button>
      </section>

      {/* FLOATING HIRE ME */}
      <button
        onClick={() => scrollToSection("contact")}
        className="
          fixed bottom-6 right-6 z-40
          flex items-center gap-2 px-5 py-3
          rounded-full font-semibold text-white
          bg-gradient-to-r from-blue-600 to-purple-600
          hover:scale-110 transition
        "
      >
        <Briefcase className="w-5 h-5" />
        Hire Me
      </button>

      {/* RESUME MODAL */}
      {openResume && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenResume(false)}
              className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              <X />
            </button>
            <iframe
              src="/lakshayResume_new.pdf"
              title="Resume"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

/* ===================== SOCIAL ===================== */
const Social = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      p-3 rounded-full
      bg-gray-100 dark:bg-gray-800
      hover:bg-blue-600 hover:text-white
      transition-all hover:scale-110
    "
  >
    {children}
  </a>
);

export default Hero;
