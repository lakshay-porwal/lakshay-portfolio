import { Github, ExternalLink, Code2, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import projectsData from "../src/data/Projects";

const Projects = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold">
          My{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Real-world projects demonstrating my skills in full-stack development
          and blockchain.
        </p>
      </div>

      {/* GRID */}
      <div
        className={`
          grid sm:grid-cols-2 lg:grid-cols-3 gap-8
          transition-all duration-700
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

/* ===================== CARD ===================== */
const ProjectCard = ({ project }) => {
  return (
    <div
      className="
        group relative rounded-2xl overflow-hidden
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        hover:-translate-y-2 hover:shadow-xl
        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {project.featured && (
          <span className="
            absolute top-3 right-3 px-3 py-1
            rounded-full text-xs font-semibold
            bg-gradient-to-r from-blue-600 to-purple-600
            text-white flex items-center gap-1
          ">
            <Sparkles className="w-3 h-3" /> Featured
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.github && (
              <IconBtn href={project.github}>
                <Github className="w-4 h-4" />
              </IconBtn>
            )}
            {project.live && (
              <IconBtn href={project.live}>
                <ExternalLink className="w-4 h-4" />
              </IconBtn>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                px-3 py-1 text-xs rounded-full
                bg-blue-50 dark:bg-blue-900/30
                text-blue-700 dark:text-blue-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const IconBtn = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      p-2 rounded-lg
      bg-gray-100 dark:bg-gray-800
      hover:bg-blue-600 hover:text-white
      transition-all
    "
  >
    {children}
  </a>
);

export default Projects;
