import {
  SiCplusplus,
  SiC,
  SiRust,
  SiJavascript,
  SiSolidity,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaDatabase, FaEthereum } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

/* ===================== ICON MAP ===================== */
const ICONS = {
  "C++": SiCplusplus,
  C: SiC,
  Rust: SiRust,
  JavaScript: SiJavascript,
  Solidity: SiSolidity,
  HTML: SiHtml5,
  CSS: SiCss3,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  MySQL: SiMysql,
  SQL: FaDatabase,
  Firebase: SiFirebase,
  Git: SiGit,
  GitHub: SiGithub,
  "Web3.js": FaEthereum,
  "Ethers.js": FaEthereum,
  MetaMask: FaEthereum,
};

const Skills = ({ skills = {} }) => {
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
          My{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skillset
          </span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          Tools, technologies, and frameworks I use to build real-world products.
        </p>
      </div>

      {/* ===================== SKILL GROUPS ===================== */}
      <div
        className={`
          grid md:grid-cols-2 lg:grid-cols-3 gap-10
          transition-all duration-700
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {Object.entries(skills).map(([category, list]) => (
          <div
            key={category}
            className="
              rounded-3xl overflow-hidden
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              shadow-md hover:shadow-2xl
              transition-all hover:-translate-y-1
            "
          >
            {/* CATEGORY HEADER */}
            <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600">
              <h3 className="text-lg font-semibold text-white">
                {category}
              </h3>
            </div>

            {/* SKILLS */}
            <div className="p-6 grid grid-cols-2 gap-4">
              {list.map((skill) => {
                const Icon = ICONS[skill];

                return (
                  <div
                    key={skill}
                    className="
                      flex items-center gap-3 p-3 rounded-xl
                      bg-gray-50 dark:bg-gray-800
                      border border-gray-200 dark:border-gray-700
                      transition-all
                      hover:shadow-lg hover:scale-[1.03]
                    "
                  >
                    <div className="
                      p-2 rounded-lg
                      bg-blue-100 dark:bg-blue-900/30
                      text-blue-600 dark:text-blue-400
                    ">
                      {Icon && <Icon className="w-5 h-5" />}
                    </div>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
