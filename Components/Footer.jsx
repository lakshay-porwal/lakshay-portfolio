import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { profileData } from "../src/data/profileData";

const Footer = ({ scrollToSection = () => {} }) => {
  const { personal } = profileData;

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About & Education", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* UPPER ROW */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-black tracking-tight font-mono text-neutral-900 dark:text-white">
              Lakshay<span className="text-cyan-600 dark:text-cyan-400">.Dev</span>
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              B.Tech Computer Science Engineering • Rajasthan Technical University, Kota
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-3">
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personal.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-amber-500 dark:hover:text-amber-400 transition"
              title="LeetCode (500+ Solved)"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Send direct email"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={() => scrollToSection("home")}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800 text-xs">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* COPYRIGHT & CREDIBILITY */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-[11px] text-neutral-500">
          <p>
            © {new Date().getFullYear()} Lakshay Porwal. Built with React & Tailwind CSS.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Verified Engineering Portfolio</span>
            <span>•</span>
            <span>Atom AI Guarded</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
