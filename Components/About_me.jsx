import { useEffect, useRef, useState } from "react";
import { GraduationCap, Trophy } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="
        w-full pt-20 pb-12
        bg-white dark:bg-black
        transition-colors
      "
    >
      {/* ===================== SECTION HEADING ===================== */}
      <div className="text-center mb-14 px-6">
        <h2
          className="
            text-4xl sm:text-5xl lg:text-6xl
            font-extrabold tracking-tight
            bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600
            bg-clip-text text-transparent
          "
        >
          About Me
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Passionate about creating digital experiences that make a difference
        </p>
      </div>

      {/* ===================== MAIN CONTENT ===================== */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* ===================== LEFT : IMAGE ===================== */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/images_project/photo_lakshay.jpeg"
            alt="Profile"
            className="
              w-[260px] sm:w-[300px]
              h-[360px] sm:h-[420px]
              object-cover
              rounded-2xl
              shadow-xl
            "
          />
        </div>

        {/* ===================== RIGHT : CONTENT ===================== */}
        <div className="space-y-8">

          {/* ROLE */}
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Full-Stack & Blockchain Developer
          </h3>

          {/* ABOUT TEXT */}
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed max-w-xl">
            I’m a{" "}
            <span className="font-medium text-gray-900 dark:text-gray-200">
              Computer Science undergraduate
            </span>{" "}
            at{" "}
            <span className="font-medium text-gray-900 dark:text-gray-200">
              Rajasthan Technical University
            </span>
            , focused on building scalable web applications and blockchain-based
            solutions. I enjoy writing clean code, solving real-world problems,
            and continuously improving my engineering skills.
          </p>

          {/* ===================== INFO CARDS ===================== */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4">

            {/* EDUCATION */}
            <div
              className="
                p-6 rounded-2xl
                border border-gray-200 dark:border-gray-800
                bg-gray-50 dark:bg-neutral-900
              "
            >
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-5 h-5 text-emerald-500" />
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Education
                </h4>
              </div>
              <p className="text-sm text-gray-800 dark:text-gray-300">
                B.Tech in Computer Science
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Rajasthan Technical University
              </p>
              <p className="text-sm text-gray-500 mt-2">
                CGPA: 9.10 / 10
              </p>
            </div>

            {/* ACHIEVEMENTS */}
            <div
              className="
                p-6 rounded-2xl
                border border-gray-200 dark:border-gray-800
                bg-gray-50 dark:bg-neutral-900
              "
            >
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-5 h-5 text-purple-500" />
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Achievements
                </h4>
              </div>

              <div className="space-y-4">
                <Counter value={300} suffix="+" label="DSA Problems Solved" />
                <Counter value={30} prefix="Top " label="GFG Rank" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* ===================== COUNTER ===================== */
const Counter = ({ value, label, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate();
        }
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    let current = 0;
    const increment = Math.ceil(value / 50);

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      setCount(current);
    }, 20);
  };

  return (
    <div ref={ref}>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">
        {prefix}{count}{suffix}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {label}
      </p>
    </div>
  );
};

export default About;
