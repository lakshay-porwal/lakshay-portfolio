import {
  SiCplusplus,
  SiC,
  SiRust,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiSolidity,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiLinux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVite,
  SiVercel,
  SiOpenai,
  SiSocketdotio,
} from "react-icons/si";
import { FaDatabase, FaEthereum } from "react-icons/fa";
import { profileData } from "../src/data/profileData";

const ICON_MAP = {
  "C++": SiCplusplus,
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  C: SiC,
  Rust: SiRust,
  Solidity: SiSolidity,
  "React.js": SiReact,
  React: SiReact,
  "Next.js": SiNextdotjs,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Express: SiExpress,
  "Socket.IO": SiSocketdotio,
  Firebase: SiFirebase,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  SQL: FaDatabase,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Prisma: SiPrisma,
  Ethereum: FaEthereum,
  "Web3.js": FaEthereum,
  "Ethers.js": FaEthereum,
  Hardhat: FaEthereum,
  MetaMask: FaEthereum,
  "OpenAI API": SiOpenai,
  Docker: SiDocker,
  Postman: SiPostman,
  Linux: SiLinux,
  Git: SiGit,
  GitHub: SiGithub,
  Vite: SiVite,
  Vercel: SiVercel,
};

const Skills = ({ skills = profileData.skillCategories }) => {
  return (
    <div className="space-y-12">
      {/* ===================== HEADER ===================== */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Technical Skills & Technologies
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
          Tools, languages, and architectures verified across production code, hackathons, and projects.
        </p>
      </div>

      {/* ===================== CATEGORIES GRID ===================== */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, list]) => (
          <div
            key={category}
            className="
              rounded-2xl p-5
              bg-white dark:bg-neutral-900
              border border-neutral-200 dark:border-neutral-800
              hover:border-cyan-500/40 dark:hover:border-cyan-400/40
              shadow-sm hover:shadow-lg hover:shadow-cyan-500/5
              transition-all duration-300
            "
          >
            {/* CATEGORY TITLE */}
            <div className="border-b border-neutral-100 dark:border-neutral-800 pb-3 mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                {category}
              </h3>
            </div>

            {/* BADGES / LIST */}
            <div className="flex flex-wrap gap-2">
              {list.map((skill) => {
                const Icon = ICON_MAP[skill];

                return (
                  <div
                    key={skill}
                    className="
                      inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                      bg-neutral-50 dark:bg-neutral-800
                      border border-neutral-200/70 dark:border-neutral-700/60
                      text-xs font-medium text-neutral-800 dark:text-neutral-200
                      hover:bg-neutral-100 dark:hover:bg-neutral-700
                      hover:border-cyan-500/30 dark:hover:border-cyan-400/30
                      hover:text-cyan-600 dark:hover:text-cyan-300
                      transition-colors
                    "
                  >
                    {Icon ? (
                      <Icon className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 shrink-0" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                    )}
                    <span>{skill}</span>
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
