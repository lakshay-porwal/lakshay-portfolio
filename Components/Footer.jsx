import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

/* ===================== CONSTANTS ===================== */
const SOCIAL_LINKS = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/lakshay-porwal",
    color: "text-gray-800 dark:text-gray-200",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/lakshay-porwal",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:lakshayporwal28@gmail.com",
    color: "text-red-500",
  },
];

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  /* ===================== FADE-IN ===================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ===================== SUBSCRIBE ===================== */
  const handleSubscribe = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) return setError("Please enter your email");
    if (!/\S+@\S+\.\S+/.test(email))
      return setError("Please enter a valid email");

    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer
      ref={sectionRef}
      className={`
        pt-12 pb-8
        bg-gradient-to-r from-blue-50 to-purple-50
        dark:from-gray-900 dark:to-gray-950
        border-t border-gray-200 dark:border-gray-800
        transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">

        {/* ===================== SOCIAL ===================== */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Connect with Me
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Let’s collaborate on impactful projects and opportunities.
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-3 rounded-full
                  bg-gray-100 dark:bg-gray-800
                  transition-all hover:scale-110 hover:shadow-lg
                  ${item.color}
                `}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ===================== QUICK LINKS ===================== */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ===================== NEWSLETTER ===================== */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Stay in Touch
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Subscribe for updates and new projects.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <div className="flex gap-2">
             <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Your Email"
  className="
    flex-1 px-4 py-2 rounded-lg
    bg-gray-50 dark:bg-gray-700
    border border-gray-300 dark:border-gray-600
    placeholder:text-gray-500 dark:placeholder:text-gray-400
    focus:ring-2 focus:ring-blue-500 outline-none
    transition-all
  "
/>

              <button
                type="submit"
                className="
                  px-4 py-2 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-blue-600 to-purple-600
                  transition-all hover:scale-105
                "
              >
                Subscribe
              </button>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}
            {subscribed && (
              <p className="text-sm text-green-500">
                ✅ Subscribed successfully!
              </p>
            )}
          </form>
        </div>

      </div>

      {/* ===================== COPYRIGHT ===================== */}
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Lakshay Porwal
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
