import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { profileData } from "../src/data/profileData";

const Experience = () => {
  const experiences = profileData.experience;

  return (
    <div className="space-y-12">
      {/* ===================== HEADER ===================== */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Work & Industry Experience
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
          Professional engineering roles and hands-on software development outcomes.
        </p>
      </div>

      {/* ===================== TIMELINE / CARDS ===================== */}
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className="
              relative rounded-2xl p-6 sm:p-8
              bg-white dark:bg-neutral-900
              border border-neutral-200 dark:border-neutral-800
              hover:border-cyan-500/40 dark:hover:border-cyan-500/40
              shadow-sm hover:shadow-md
              transition-all duration-300
            "
          >
            {/* ROLE HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-neutral-100 dark:border-neutral-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-900/30">
                    <Briefcase className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400 pl-8">
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                    {exp.company}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    {exp.type} ({exp.location})
                  </span>
                </div>
              </div>

              {/* DURATION BADGE */}
              <div className="sm:text-right pl-8 sm:pl-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                  <Calendar className="w-3 h-3 text-cyan-500" />
                  {exp.duration}
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="pt-4 space-y-4">
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {exp.description}
              </p>

              {/* HIGHLIGHT BULLETS */}
              <ul className="space-y-2.5">
                {exp.highlights.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* TECH USED */}
              <div className="pt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mr-1">
                  Technologies:
                </span>
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
