import { useState, useEffect, useCallback } from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About_me";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import Contact from "../Components/Get_in_Touch";
import Footer from "../Components/Footer";

/* ===================== REUSABLE SECTION ===================== */

const Section = ({ id, children }) => (
  <section
    id={id}
    className="
      py-16 sm:py-20
      px-4 sm:px-6 lg:px-8
      max-w-7xl mx-auto
    "
  >
    {children}
  </section>
);

const Portfolio = () => {
  /* ===================== THEME ===================== */
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
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

  /* ===================== SCROLL SPY ===================== */
  const handleScroll = useCallback(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
    ];

    const scrollPosition = window.scrollY + 160;

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ===================== UTIL ===================== */
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ===================== DATA ===================== */
  const skills = {
    "Programming Languages": ["C++", "C", "Rust", "JavaScript", "Solidity"],
    "Web Technologies": ["HTML", "CSS", "React", "Bootstrap", "Tailwind CSS"],
    "Core Concepts": ["Data Structures", "Algorithms", "OOP", "Blockchain"],
    Databases: ["MySQL", "SQL", "Firebase"],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "VS Code",
      "Web3.js",
      "Ethers.js",
      "MetaMask",
    ],
    "AI & GenAI": [
      "Prompt Engineering",
      "LLM Integration",
      "OpenAI API",
      "Gemini API",
    ],
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  /* ===================== RENDER ===================== */
  return (
    <div
      className="
        min-h-screen overflow-x-hidden
        bg-gradient-to-b from-white to-gray-100
        dark:from-gray-950 dark:to-black
        text-gray-900 dark:text-gray-100
        transition-colors duration-500
      "
    >
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* 🔥 HERO MUST NOT BE WRAPPED */}
      <Hero scrollToSection={scrollToSection} />

      <Section id="about">
        <About />
      </Section>

      <Section id="skills">
        <Skills skills={skills} />
      </Section>

      <Section id="projects">
        <Projects />
      </Section>

      <Section id="experience">
        <Experience />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>

      <Footer />
    </div>
  );
};

export default Portfolio;
