import { useEffect, useRef, useState } from "react";
import { Code2, Briefcase } from "lucide-react";

/* ===================== DATA ===================== */
const experiences = [
  {
    role: "Project Intern – Web Development",
    company: "Kriscent Techno Hub Pvt Ltd",
    type: "On-site",
    duration: "June 2025 – July 2025",
    icon: <Code2 className="w-5 h-5 text-white" />,
    highlights: [
      "Built and deployed responsive web applications using React and JavaScript, improving usability across devices.",
      "Integrated Firebase authentication, real-time database, and cloud functions, reducing manual operations by ~30%.",
      "Optimized UI components and refactored codebase, improving page load speed by ~20%."
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* ===================== HEADER ===================== */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold">
          Work{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Hands-on industry experience applying engineering skills to real-world problems.
        </p>
      </div>

      {/* ===================== TIMELINE ===================== */}
      <div className="relative max-w-4xl mx-auto">
        {/* LINE */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-200 dark:bg-blue-700 -translate-x-1/2 rounded-full" />

        {experiences.map((exp, i) => (
          <ExperienceItem
            key={exp.role}
            exp={exp}
            index={i}
            show={show}
          />
        ))}
      </div>
    </div>
  );
};

/* ===================== EXPERIENCE ITEM ===================== */
const ExperienceItem = ({ exp, index, show }) => {
  return (
    <div
      className={`
        relative grid md:grid-cols-2 gap-10 mb-20
        transition-all duration-700
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* LEFT SPACER */}
      <div className="hidden md:block" />

      {/* CARD */}
      <div className="
        relative p-8 rounded-3xl
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        shadow-md hover:shadow-2xl
        transition-all hover:-translate-y-1
      ">
        {/* ICON */}
        <div className="
          absolute -left-10 top-8
          w-10 h-10 rounded-full
          bg-gradient-to-br from-blue-600 to-purple-600
          flex items-center justify-center
          shadow-lg
        ">
          {exp.icon}
        </div>

        {/* HEADER */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
            {exp.role}
          </h3>
        </div>

        <p className="text-blue-600 dark:text-blue-400 font-medium">
          {exp.company} • {exp.type}
        </p>

        <span className="
          inline-block mt-2 mb-6
          px-3 py-1 text-sm rounded-full
          bg-blue-100 dark:bg-blue-900/30
          text-blue-600 dark:text-blue-400
        ">
          {exp.duration}
        </span>

        {/* HIGHLIGHTS */}
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          {exp.highlights.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-1 text-blue-600 dark:text-blue-400">▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
