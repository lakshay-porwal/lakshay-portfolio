import { useState, useEffect, useCallback } from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About_me";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import Contact from "../Components/Get_in_Touch";
import Footer from "../Components/Footer";
import FloatingActions from "../Components/FloatingActions";

/* ===================== REUSABLE SECTION WRAPPER ===================== */
const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`
      py-16 sm:py-20 lg:py-24
      px-4 sm:px-6 lg:px-8
      max-w-6xl mx-auto
      scroll-mt-16
      ${className}
    `}
  >
    {children}
  </section>
);

const App = () => {
  /* ===================== THEME ===================== */
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [activeSection, setActiveSection] = useState("home");

  /* ===================== APPLY THEME ===================== */
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* ===================== SCROLL SPY (OPTIMIZED RAF) ===================== */
  const handleScroll = useCallback(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
    ];

    const scrollPosition = window.scrollY + 180;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;

      const { offsetTop, offsetHeight } = el;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        setActiveSection(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  /* ===================== SMOOTH SCROLL ===================== */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className="
        min-h-screen overflow-x-hidden
        bg-white dark:bg-neutral-950
        text-neutral-900 dark:text-neutral-100
        transition-colors duration-200
        font-sans antialiased selection:bg-indigo-500/20 selection:text-indigo-600
      "
    >
      {/* STICKY NAVBAR */}
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* HERO SECTION */}
      <Hero scrollToSection={scrollToSection} />

      {/* ABOUT & EDUCATION */}
      <Section id="about">
        <About />
      </Section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-neutral-200/70 dark:border-neutral-800/80" />
      </div>

      {/* SKILLS */}
      <Section id="skills">
        <Skills />
      </Section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-neutral-200/70 dark:border-neutral-800/80" />
      </div>

      {/* PROJECTS */}
      <Section id="projects">
        <Projects />
      </Section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-neutral-200/70 dark:border-neutral-800/80" />
      </div>

      {/* EXPERIENCE */}
      <Section id="experience">
        <Experience />
      </Section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-neutral-200/70 dark:border-neutral-800/80" />
      </div>

      {/* CONTACT */}
      <Section id="contact">
        <Contact />
      </Section>

      {/* FOOTER */}
      <Footer scrollToSection={scrollToSection} />

      {/* COORDINATED FLOATING STACK: ATOM ABOVE, HIRE ME BELOW */}
      <FloatingActions scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
