import { useEffect, useRef, useState, useCallback } from "react";
import {
  GraduationCap,
  Trophy,
  Layers,
  Cpu,
  Database,
  Terminal,
  BookOpen,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { profileData } from "../src/data/profileData";

const About = () => {
  const { education } = profileData;
  const btech = education[0];
  const school = education[1];

  return (
    <div className="space-y-16">
      
      {/* ===================== SECTION HEADING ===================== */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Background & Engineering Focus
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
          Core engineering methodology, academic training, and algorithmic discipline.
        </p>
      </div>

      {/* ===================== THREE ENGINEERING PILLARS ===================== */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* PILLAR 1: FULL-STACK */}
        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 shadow-sm hover:shadow-md transition-all duration-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-900/40 flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            Full-Stack Systems
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I prioritize clean separation between UI components and business logic. Focused on resilient state management, RESTful API contracts, and low-latency rendering across React and modern Node.js runtimes.
          </p>
        </div>

        {/* PILLAR 2: BLOCKCHAIN */}
        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 shadow-sm hover:shadow-md transition-all duration-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center font-bold">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            Smart Contracts & Web3
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Building on Ethereum with Solidity and Hardhat. I focus on tamper-proof smart contract architecture, verifiable ballot/state recording, and gas-cost reductions (achieved ~25% savings on VoteChain).
          </p>
        </div>

        {/* PILLAR 3: APPLIED AI */}
        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 shadow-sm hover:shadow-md transition-all duration-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/40 flex items-center justify-center font-bold">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">
            Applied AI & Real-Time Sync
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Integrating LLMs into production web workflows with streaming token responses, strict context grounding (as with Atom and Garuda AI), and persistent database backends.
          </p>
        </div>

      </div>

      {/* ===================== ACADEMIC FOUNDATION ===================== */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
            Academic Track & Coursework
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* RTU KOTA CARD */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 shadow-sm transition-all duration-200 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  {btech.period}
                </span>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white mt-0.5">
                  {btech.degree} in {btech.field}
                </h4>
                <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                  {btech.institution}, {btech.location}
                </p>
              </div>

              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                CGPA: {btech.score}
              </span>
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {btech.status}
            </p>

            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 space-y-2">
              <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Key Computer Science Coursework:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Data Structures & Algorithms",
                  "Analysis of Algorithms",
                  "Object-Oriented Programming (C++)",
                  "Database Management Systems",
                  "Operating Systems",
                  "Computer Networks",
                  "Blockchain Fundamentals",
                ].map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* SCHOOLING CARD */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 shadow-sm transition-all duration-200 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                  {school.period}
                </span>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white mt-0.5">
                  {school.degree}
                </h4>
                <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                  {school.institution}, {school.location}
                </p>
              </div>

              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 shrink-0">
                Score: {school.score}
              </span>
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Curriculum: {school.field}
            </p>

            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 space-y-2">
              <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Academic Highlights:
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Rigorous preparation in physical sciences and analytical mathematics, providing a quantitative foundation for complexity analysis, algorithmic reasoning, and cryptography.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ===================== PROBLEM-SOLVING & ACHIEVEMENTS GRID ===================== */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
            Verified Problem-Solving Milestones
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 shadow-sm transition-all">
            <AnimatedCounter target={500} suffix="+" label="DSA Problems Solved" colorClass="text-cyan-600 dark:text-cyan-400" />
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5">
              Solved across LeetCode & GeeksforGeeks
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 shadow-sm transition-all">
            <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              AIR 128
            </p>
            <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-0.5">
              AINCAT 2026
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5">
              Naukri Campus among 4,00,000+ participants
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 shadow-sm transition-all">
            <AnimatedCounter target={20} prefix="Top " suffix=" / 2000+" label="College GFG Rank" colorClass="text-emerald-600 dark:text-emerald-400" />
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5">
              Institute ranking across 2,000+ coders
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-sky-500/40 dark:hover:border-sky-500/40 shadow-sm transition-all">
            <p className="text-2xl font-bold text-sky-600 dark:text-sky-400">
              Top 5%
            </p>
            <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-0.5">
              CS Cohort & Hackathons
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5">
              Finalist in 5+ national hackathons
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-amber-500/40 dark:hover:border-amber-500/40 shadow-sm sm:col-span-2 lg:col-span-1 transition-all">
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
              200+
            </p>
            <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-0.5">
              ESC 2023 Coordinator
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5">
              Led technical operations & delegate execution
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

/* ===================== COUNTER WITH SAFE LIFECYCLE ===================== */
const AnimatedCounter = ({ target, label, prefix = "", suffix = "", colorClass = "text-neutral-900 dark:text-white" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  const startAnimation = useCallback(() => {
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 40));
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, 25);
  }, [target]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    const elem = ref.current;
    if (elem) observer.observe(elem);
    return () => {
      if (elem) observer.unobserve(elem);
      observer.disconnect();
    };
  }, [startAnimation]);

  return (
    <div ref={ref}>
      <p className={`text-2xl font-bold ${colorClass}`}>
        {prefix}{count}{suffix}
      </p>
      <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-0.5">
        {label}
      </p>
    </div>
  );
};

export default About;
