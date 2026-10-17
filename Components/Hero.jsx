import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  X,
  FileText,
  Download,
  ArrowRight,
  Sparkles,
  MapPin,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { profileData } from "../src/data/profileData";

const Hero = ({ scrollToSection = () => {} }) => {
  const [openResume, setOpenResume] = useState(false);
  const { personal } = profileData;

  return (
    <>
      <section
        id="home"
        className="
          relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28
          bg-neutral-50/50 dark:bg-neutral-950
          border-b border-neutral-200/60 dark:border-neutral-900
          transition-colors duration-300
        "
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* ===================== LEFT: IDENTITY & COPY ===================== */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* NAME & HEADLINE */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
                  Lakshay <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent">Porwal</span>
                </h1>

                <p className="text-lg sm:text-xl font-medium text-neutral-700 dark:text-neutral-300">
                  Software Engineer • Full-Stack & Blockchain Developer
                </p>
              </div>

              {/* AUTHENTIC BIO */}
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                Computer Science undergraduate at <span className="font-semibold text-neutral-800 dark:text-neutral-200">Rajasthan Technical University, Kota</span> (B.Tech CSE ’27) with a <span className="font-semibold text-cyan-600 dark:text-cyan-400">9.30 CGPA</span>. I engineer resilient full-stack applications, decentralized smart contracts on Ethereum, and AI-enabled systems with clean architecture, 500+ solved algorithmic challenges, and production focus.
              </p>

              {/* CALL TO ACTIONS */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* PRIMARY CTA: PROJECTS */}
                <button
                  onClick={() => scrollToSection("projects")}
                  className="
                    px-6 py-3 rounded-xl font-semibold text-sm text-white
                    bg-gradient-to-r from-cyan-600 via-cyan-500 to-indigo-600
                    hover:from-cyan-500 hover:via-sky-400 hover:to-indigo-500
                    shadow-md shadow-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/40
                    transition-all flex items-center gap-2 cursor-pointer
                  "
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* SECONDARY CTA: CONTACT ME */}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="
                    px-6 py-3 rounded-xl font-semibold text-sm
                    bg-white dark:bg-neutral-900
                    text-neutral-800 dark:text-neutral-200
                    border border-neutral-300 dark:border-neutral-700
                    hover:border-cyan-500/50 dark:hover:border-cyan-400/50
                    hover:text-cyan-600 dark:hover:text-cyan-400
                    hover:bg-cyan-50/40 dark:hover:bg-neutral-800
                    transition-all cursor-pointer
                  "
                >
                  Contact Me
                </button>

                {/* RESUME ACTION */}
                <button
                  onClick={() => setOpenResume(true)}
                  className="
                    px-4.5 py-3 rounded-xl font-medium text-sm
                    text-neutral-600 dark:text-neutral-400
                    hover:text-neutral-900 dark:hover:text-white
                    hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50
                    transition-all flex items-center gap-1.5 cursor-pointer
                  "
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </button>
              </div>

              {/* SOCIAL & VERIFIED PROFILES */}
              <div className="flex items-center gap-3 pt-2 text-neutral-600 dark:text-neutral-400">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mr-1">
                  Profiles:
                </span>
                
                <a
                  href={personal.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lakshay Porwal GitHub profile"
                  className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personal.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lakshay Porwal LinkedIn profile"
                  className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personal.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lakshay Porwal LeetCode profile"
                  className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-amber-500 dark:hover:text-amber-400 transition"
                  title="LeetCode (500+ Solved)"
                >
                  <SiLeetcode className="w-4 h-4" />
                </a>

                <a
                  href={personal.links.geeksforgeeks}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lakshay Porwal GeeksforGeeks profile"
                  className="px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-xs font-semibold text-emerald-600 dark:text-emerald-400 transition"
                  title="GeeksforGeeks (Top 20 Rank)"
                >
                  GFG
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Email Lakshay Porwal"
                  className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* ===================== RIGHT: PHOTOGRAPH WITH AESTHETIC CYAN AURA ===================== */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-[280px] sm:max-w-[320px] w-full">
                
                {/* AMBIENT RADIANT CYAN LIGHT AURA (CLEAN, BRIGHT, PROFESSIONAL) */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 opacity-60 blur-md group-hover:opacity-90 group-hover:blur-lg transition-all duration-500 pointer-events-none" />
                <div className="absolute -inset-5 rounded-3xl bg-cyan-400/20 dark:bg-cyan-400/30 blur-2xl group-hover:bg-cyan-400/40 group-hover:blur-3xl transition-all duration-700 pointer-events-none" />

                {/* LUMINOUS AESTHETIC CYAN BORDER FRAME */}
                <div className="relative p-[2px] rounded-2xl bg-gradient-to-b from-cyan-300 via-cyan-400 to-sky-500 shadow-[0_0_25px_rgba(34,211,238,0.35)] dark:shadow-[0_0_35px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_50px_rgba(34,211,238,0.7)] transition-all duration-300">
                  
                  {/* PHOTO WRAPPER */}
                  <div className="relative rounded-[14px] overflow-hidden bg-white dark:bg-neutral-900 transition-all">
                    <img
                      src={personal.photo}
                      alt="Photograph of Lakshay Porwal"
                      className="w-full aspect-square object-cover object-center transition-all duration-300"
                      width={320}
                      height={320}
                      loading="eager"
                    />
                    
                    {/* FOOTER CAPTION - SLEEK & PROFESSIONAL */}
                    <div className="px-3.5 py-2.5 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-t border-cyan-500/20 dark:border-cyan-500/30 text-left flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-neutral-900 dark:text-white">
                          Lakshay Porwal
                        </p>
                        <p className="text-[11px] font-medium text-cyan-600 dark:text-cyan-400 mt-0.5">
                          Software Engineer • Full-Stack
                        </p>
                      </div>
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== RESUME MODAL & DOWNLOAD ===================== */}
      {openResume && (
        <div
          role="dialog"
          aria-labelledby="resume-modal-title"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-neutral-200 dark:border-neutral-800">
            {/* MODAL HEADER */}
            <div className="px-5 py-3.5 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-500" />
                <h3 id="resume-modal-title" className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Lakshay Porwal — Resume (PDF)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={personal.resume}
                  download="Lakshay_Porwal_Resume.pdf"
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </a>
                <button
                  onClick={() => setOpenResume(false)}
                  aria-label="Close Resume viewer"
                  className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* IFRAME VIEWER */}
            <div className="flex-1 bg-neutral-100 dark:bg-neutral-950">
              <iframe
                src={personal.resume}
                title="Lakshay Porwal Resume"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
