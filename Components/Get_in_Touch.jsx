import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Send, Copy, Check } from "lucide-react";
import emailjs from "emailjs-com";

/* ===================== CONSTANTS ===================== */
const EMAIL = "lakshayporwal28@gmail.com";
const PHONE = "+91 9376389275";

const Contact = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const hasAnimated = useRef(false);

  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  /* ===================== SCROLL ANIMATION ===================== */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  /* ===================== COPY EMAIL ===================== */
  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  /* ===================== VALIDATION ===================== */
  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Invalid email";
    if (!formData.message.trim()) e.message = "Message is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ===================== SUBMIT ===================== */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await emailjs.send(
        "service_wwt7izc",
        "template_z66k44e",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "7qRIn_pF6bhMGFyfX"
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      alert("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`
        py-16 sm:py-20 lg:py-24
        px-4 sm:px-6 lg:px-8
        bg-gradient-to-b from-gray-50 to-white
        dark:from-gray-900 dark:to-gray-950
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Let’s talk about internships, collaborations, or cool ideas 🚀
          </p>
        </div>

        {success && (
          <div className="mb-6 text-center text-green-600 font-semibold animate-pulse">
            ✅ Message sent successfully!
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

          {/* INFO CARD */}
          <div className="p-6 sm:p-7 lg:p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Info
            </h3>

            <InfoRow
              icon={<Mail className="w-6 h-6 text-blue-600" />}
              label="Email"
              value={EMAIL}
              action={
                <button
                  onClick={copyEmail}
                  className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              }
            />

            <InfoRow
              icon={<Phone className="w-6 h-6 text-purple-600" />}
              label="Phone"
              value={PHONE}
            />
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-7 lg:p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <div className="space-y-5">
              <Input
                placeholder="Your Name"
                value={formData.name}
                error={errors.name}
                onChange={(v) => setFormData({ ...formData, name: v })}
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                error={errors.email}
                onChange={(v) => setFormData({ ...formData, email: v })}
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                error={errors.message}
                onChange={(v) => setFormData({ ...formData, message: v })}
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full py-4 sm:py-3 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-blue-600 to-purple-600
                  flex items-center justify-center gap-2
                  hover:scale-105 transition-all
                  disabled:opacity-70
                "
              >
                <Send className="w-5 h-5" />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ===================== SUB COMPONENTS ===================== */

const InfoRow = ({ icon, label, value, action }) => (
  <div className="flex items-start sm:items-center gap-4 mb-6">
    <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <div className="flex items-center gap-2">
        <p className="text-gray-700 dark:text-gray-300 break-all sm:break-normal">
          {value}
        </p>
        {action}
      </div>
    </div>
  </div>
);

const Input = ({ type = "text", placeholder, value, error, onChange }) => (
  <div>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full px-4 py-3 rounded-xl
        bg-gray-50 dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        border border-gray-300 dark:border-gray-700
        focus:ring-2 focus:ring-blue-500 focus:outline-none
        placeholder:text-gray-500 dark:placeholder:text-gray-400
        transition-all
      "
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

const Textarea = ({ placeholder, value, error, onChange }) => (
  <div>
    <textarea
      rows={5}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full px-4 py-3 rounded-xl
        bg-gray-50 dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        border border-gray-300 dark:border-gray-700
        focus:ring-2 focus:ring-blue-500 focus:outline-none
        placeholder:text-gray-500 dark:placeholder:text-gray-400
        transition-all
      "
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default Contact;
