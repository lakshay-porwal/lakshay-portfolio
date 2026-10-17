import { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Sparkles,
  Info,
  X,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  TrendingDown,
} from "lucide-react";
import { profileData } from "../src/data/profileData";

const CATEGORIES = ["All", "Full Stack", "AI / ML", "Blockchain"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const projects = profileData.projects;

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Close modal on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && activeProjectModal) {
        setActiveProjectModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProjectModal]);

  return (
    <div className="space-y-12">
      
      {/* ===================== HEADER ===================== */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Featured Engineering Projects
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
          Decentralized systems, full-stack applications, and AI integrations with verified metrics.
        </p>
      </div>

      {/* ===================== CATEGORY FILTERS ===================== */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer
                ${
                  active
                    ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-500/25"
                    : "bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ===================== PROJECTS GRID ===================== */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDetails={() => setActiveProjectModal(project)}
          />
        ))}
      </div>

      {/* ===================== CASE STUDY / DETAILS MODAL ===================== */}
      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}
    </div>
  );
};

/* ===================== CARD COMPONENT ===================== */
const ProjectCard = ({ project, onOpenDetails }) => {
  return (
    <div
      className="
        group flex flex-col rounded-2xl overflow-hidden
        bg-white dark:bg-neutral-900
        border border-neutral-200/90 dark:border-neutral-800
        hover:border-cyan-500/50 dark:hover:border-cyan-400/50
        hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300
      "
    >
      {/* CARD IMAGE / HEADER */}
      <div className="relative h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-950">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-300"
          loading="lazy"
        />

        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-neutral-900/85 text-white backdrop-blur-md border border-white/10">
            {project.category}
          </span>

          {project.featured && (
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-200" /> Featured
            </span>
          )}
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-0.5">
                {project.tagline}
              </p>
            </div>
          </div>

          <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* METRICS BADGE (IF VERIFIED) */}
        {project.metrics && (
          <div className="px-3 py-1.5 rounded-lg bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-200/60 dark:border-cyan-800/50 text-[11px] text-cyan-800 dark:text-cyan-300 flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
            <span className="truncate">{project.metrics}</span>
          </div>
        )}

        {/* TECH STACK TAGS */}
        <div className="space-y-3 pt-1">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
              >
                {t}
              </span>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-800">
            <button
              onClick={onOpenDetails}
              className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition flex items-center gap-1 cursor-pointer"
            >
              <Info className="w-3.5 h-3.5" /> Case Details
            </button>

            <div className="flex items-center gap-1.5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code on GitHub`}
                  className="p-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                  title="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live deployment`}
                  className="p-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition flex items-center gap-1"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ===================== DETAILS MODAL ===================== */
const ProjectModal = ({ project, onClose }) => {
  return (
    <div
      role="dialog"
      aria-labelledby="modal-project-title"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 max-h-[90vh] flex flex-col">
        {/* HEADER */}
        <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-[10px] px-2 py-0.5 rounded font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  Featured
                </span>
              )}
            </div>
            <h3
              id="modal-project-title"
              className="text-xl font-bold text-neutral-900 dark:text-white mt-0.5"
            >
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project details"
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {/* OVERVIEW */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
              Overview
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* PROBLEM ADDRESSED */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
              The Problem It Solves
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* LAKSHAY'S ACTUAL CONTRIBUTION */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
              Lakshay’s Actual Contribution
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.contribution}
            </p>
          </div>

          {/* VERIFIED OUTCOMES / METRICS */}
          {project.metrics && (
            <div className="p-3.5 rounded-xl bg-cyan-50/60 dark:bg-cyan-950/30 border border-cyan-200/60 dark:border-cyan-800/50">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-1">
                Verified Outcome
              </h4>
              <p className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                {project.metrics}
              </p>
            </div>
          )}

          {/* TECH STACK */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              Verified Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* MODAL FOOTER */}
        <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-end gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" /> View GitHub Repo
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition flex items-center gap-1.5"
            >
              <ExternalLink className="w-4 h-4" /> Open Live Application
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
