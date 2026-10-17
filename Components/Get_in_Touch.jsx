import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  Linkedin,
  Github,
  ExternalLink,
  Loader2,
  MessageCircle,
  AlertCircle,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import emailjs from "emailjs-com";
import { profileData } from "../src/data/profileData";

const Contact = () => {
  const { personal } = profileData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [showFallbacks, setShowFallbacks] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  /* ===================== COPY HANDLERS ===================== */
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personal.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // Fallback
    }
  };

  const copyDraftMessage = async () => {
    try {
      const textToCopy = `From: ${formData.name || "Portfolio Visitor"} (${formData.email || "No email"})\n\nMessage:\n${formData.message}`;
      await navigator.clipboard.writeText(textToCopy);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2000);
    } catch {
      // Fallback
    }
  };

  /* ===================== VALIDATION ===================== */
  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Your name is required";
    if (!formData.email.trim()) e.email = "Your email address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Please enter a valid email address";
    if (!formData.message.trim()) e.message = "Message cannot be empty";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ===================== SUBMIT VIA EMAILJS ===================== */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatusMessage("");
    setShowFallbacks(false);

    try {
      const res = await emailjs.send(
        "service_wwt7izc",
        "template_z66k44e",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        "7qRIn_pF6bhMGFyfX"
      );

      if (res.status === 200 || res.text === "OK") {
        setSuccess(true);
        setStatusMessage("Message sent successfully! Lakshay will reply promptly.");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 6000);
      } else {
        throw new Error(res.text || "Failed to send");
      }
    } catch (err) {
      console.warn("EmailJS delivery notice:", err);
      setSuccess(false);
      setShowFallbacks(true);
      setStatusMessage(
        "Notice: Web dispatch encountered a provider authorization error. Your message is safe — send it directly below using your mail app or WhatsApp!"
      );
    } finally {
      setLoading(false);
    }
  };

  // Helper mailto URL
  const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || "Visitor"}`
  )}&body=${encodeURIComponent(
    `${formData.message || ""}\n\n---\nSender: ${formData.name || "Visitor"}\nEmail: ${
      formData.email || ""
    }`
  )}`;

  // Helper WhatsApp URL (clean international number digits)
  const phoneDigits = personal.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
    `Hi Lakshay, I am ${formData.name || "reaching out from your portfolio"} (${
      formData.email || ""
    }):\n\n${formData.message || "I would like to connect regarding an opportunity."}`
  )}`;

  return (
    <div className="space-y-12">
      {/* ===================== HEADER ===================== */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
          Interested in hiring, internship opportunities, or engineering collaboration? Let’s connect.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-start">
        
        {/* ===================== CONTACT DETAILS ===================== */}
        <div className="md:col-span-5 space-y-6 p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              Contact Information
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Direct channels to reach Lakshay Porwal.
            </p>
          </div>

          {/* EMAIL */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
              Email Address
            </span>
            <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200/70 dark:border-neutral-700/60">
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:text-cyan-600 dark:hover:text-cyan-400 truncate"
                  title="Send email to Lakshay"
                >
                  {personal.email}
                </a>
              </div>
              <button
                onClick={copyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email"
                className="p-1 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition shrink-0 cursor-pointer"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* PHONE & WHATSAPP */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
              Phone & WhatsApp
            </span>
            <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200/70 dark:border-neutral-700/60">
              <div className="flex items-center gap-2.5 min-w-0">
                <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <a
                  href={`tel:${personal.phone}`}
                  className="text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:text-cyan-600 dark:hover:text-cyan-400 truncate"
                  title="Direct phone call"
                >
                  {personal.phone}
                </a>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded-md text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition"
                  title="Open in WhatsApp"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={copyPhone}
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                  className="p-1 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition cursor-pointer"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* PROFILES */}
          <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 space-y-2">
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
              Professional Profiles
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl text-xs font-medium bg-neutral-50 dark:bg-neutral-800/80 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> LinkedIn Profile
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl text-xs font-medium bg-neutral-50 dark:bg-neutral-800/80 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-neutral-800 dark:text-neutral-200" /> GitHub Repositories
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <a
                href={personal.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl text-xs font-medium bg-neutral-50 dark:bg-neutral-800/80 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-amber-500 dark:hover:text-amber-400 transition"
              >
                <span className="flex items-center gap-2">
                  <SiLeetcode className="w-4 h-4 text-amber-500" /> LeetCode (500+ Solved)
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <a
                href={personal.links.geeksforgeeks}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl text-xs font-medium bg-neutral-50 dark:bg-neutral-800/80 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition"
              >
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-600 flex items-center justify-center">G</span> GeeksforGeeks (Top 20 Rank)
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>
        </div>

        {/* ===================== MESSAGE FORM ===================== */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-7 p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4"
        >
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              Send a Direct Message
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Delivered straight to Lakshay’s inbox via EmailJS or direct email client.
            </p>
          </div>

          {statusMessage && (
            <div
              className={`p-3.5 rounded-xl text-xs space-y-2.5 ${
                success
                  ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/50"
                  : "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-900/50"
              }`}
            >
              <div className="flex items-start gap-2">
                {success ? (
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                )}
                <span className="leading-relaxed font-medium">{statusMessage}</span>
              </div>

              {/* DUAL-ACTION FALLBACK BUTTONS IF WEB DISPATCH NEEDS AUTHORIZATION */}
              {showFallbacks && (
                <div className="flex flex-wrap gap-2 pt-1 border-t border-amber-200/50 dark:border-amber-900/40">
                  <a
                    href={mailtoUrl}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1.5 transition shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" /> Open in Email App
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Send on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={copyDraftMessage}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 transition flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedDraft ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> Copied Draft
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy Draft
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* NAME */}
          <div className="space-y-1">
            <label htmlFor="contact-name" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={formData.name}
              placeholder="e.g. Sarah Jenkins"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="
                w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm
                bg-neutral-50 dark:bg-neutral-800/80
                text-neutral-900 dark:text-neutral-100
                border border-neutral-300 dark:border-neutral-700
                focus:border-cyan-500 dark:focus:border-cyan-400
                focus:outline-none transition
              "
            />
            {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
          </div>

          {/* EMAIL */}
          <div className="space-y-1">
            <label htmlFor="contact-email" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              Your Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              placeholder="e.g. sarah@company.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="
                w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm
                bg-neutral-50 dark:bg-neutral-800/80
                text-neutral-900 dark:text-neutral-100
                border border-neutral-300 dark:border-neutral-700
                focus:border-cyan-500 dark:focus:border-cyan-400
                focus:outline-none transition
              "
            />
            {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
          </div>

          {/* MESSAGE */}
          <div className="space-y-1">
            <label htmlFor="contact-message" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={formData.message}
              placeholder="Write your note, role opening, or collaboration proposal..."
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="
                w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm
                bg-neutral-50 dark:bg-neutral-800/80
                text-neutral-900 dark:text-neutral-100
                border border-neutral-300 dark:border-neutral-700
                focus:border-cyan-500 dark:focus:border-cyan-400
                focus:outline-none transition
              "
            />
            {errors.message && <p className="text-[11px] text-red-500">{errors.message}</p>}
          </div>

          {/* SUBMIT BUTTON */}
          <div className="space-y-2 pt-1">
            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-white
                bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600
                hover:from-cyan-500 hover:to-indigo-500
                shadow-md shadow-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/40
                flex items-center justify-center gap-2
                transition-all disabled:opacity-60 cursor-pointer
              "
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message via EmailJS</span>
                </>
              )}
            </button>

            {/* DIRECT ONE-CLICK EMAIL LINK */}
            <div className="flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400 px-1">
              <span>Prefer email client?</span>
              <a
                href={mailtoUrl}
                className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium flex items-center gap-1"
              >
                Send via default mail app <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Contact;
