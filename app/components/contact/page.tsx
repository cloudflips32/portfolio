"use client"

import { useState } from 'react'

// ─── Contact ────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // ── Sanitize: strip HTML/script tags ──────────────────────────────────
  const sanitize = (val: string) =>
    val.replace(/<[^>]*>/g, "").replace(/[<>]/g, "");

  // ── Validate a single field ────────────────────────────────────────────
  const validate = (field: "name" | "email" | "message", value: string) => {
    const clean = sanitize(value);
    switch (field) {
      case "name":
        if (!clean.trim()) return "Name is required.";
        if (clean.trim().length < 2) return "Name must be at least 2 characters.";
        if (clean.trim().length > 100) return "Name must be under 100 characters.";
        if (!/^[a-zA-Z\s\-'.]+$/.test(clean.trim())) return "Name contains invalid characters.";
        return "";
      case "email":
        if (!clean.trim()) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.trim())) return "Please enter a valid email address.";
        if (clean.trim().length > 254) return "Email is too long.";
        return "";
      case "message":
        if (!clean.trim()) return "Message is required.";
        if (clean.trim().length < 10) return "Message must be at least 10 characters.";
        if (clean.trim().length > 2000) return "Message must be under 2000 characters.";
        // Block injection-only symbols while allowing normal punctuation
        if (/[<>{}[\]\\$%`|=~^]/.test(clean)) return "Message contains invalid characters.";
        return "";
    }
  };

  // ── Handle input change with live validation ───────────────────────────
  const handleChange = (field: "name" | "email" | "message", value: string) => {
    const clean = sanitize(value);
    setForm((prev) => ({ ...prev, [field]: clean }));
    setErrors((prev) => ({ ...prev, [field]: validate(field, clean) }));
  };

  // ── Handle form submit ─────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameErr = validate("name", form.name);
    const emailErr = validate("email", form.email);
    const messageErr = validate("message", form.message);
    setErrors({ name: nameErr, email: emailErr, message: messageErr });
    if (nameErr || emailErr || messageErr) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message.");
      }

      setSent(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setSubmitError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    backgroundColor: "rgba(245,236,205,0.04)",
    border: "1px solid rgba(245,236,205,0.12)",
    color: "#F5ECCD",
    outline: "none",
  };

  const errorStyle = {
    color: "#E6AF2E",
    fontSize: "0.7rem",
    marginTop: "4px",
  };

  const LINKS = [
    {
      label: "Email",
      value: "adamjstandishcoder@gmail.com",
      href: "mailto:adamjstandishcoder@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/cloudflips32",
      href: "https://github.com/cloudflips32",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path d="M12 0C5.374 0 0 5.373 0 11.999c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 11.999 24 5.372 18.627 0 12 0z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/adam-standish",
      href: "https://linkedin.com/in/adam-standish",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex items-center overflow-hidden"
      style={{ backgroundColor: "#0C0910", minHeight: "100svh", borderTop: "1px solid rgba(245,236,205,0.06)" }}
    >
      <div
        className="absolute right-0 top-0 bottom-0 w-px hidden md:block"
        style={{ backgroundColor: "#E6AF2E", opacity: 0.15 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 w-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-24 md:justify-center md:items-center">

          {/* Info column */}
          <div className="md:w-72 lg:w-80 shrink-0 md:flex md:flex-col">
            <span className="font-mono-label text-xs uppercase tracking-widest block mb-2 md:mb-3" style={{ color: "rgba(245,236,205,0.3)" }}>
              §04
            </span>
            <h2
              className="font-display leading-none mb-3 md:mb-6"
              style={{ fontSize: "clamp(1.6rem, 4vw, 3.5rem)", color: "#F5ECCD" }}
            >
              Let&apos;s
              <br />
              <span style={{ color: "#E6AF2E" }}>Work</span>
              <br />
              Together
            </h2>
            <p className="text-xs md:text-sm leading-relaxed mb-4 md:mb-10" style={{ color: "rgba(245,236,205,0.45)", maxWidth: "320px" }}>
              Open to new opportunities — freelance projects, full-time roles, and long-term collaborations.
            </p>

            {/* Links — icons on mobile, text on md+ */}
            <div className="flex flex-wrap gap-3 md:flex-col md:gap-4 md:flex-1 md:justify-end md:mt-auto">
              {LINKS.map(({ label, value, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {/* Icon — visible on mobile only */}
                  <span className="md:hidden block p-2 rounded-lg transition-colors duration-150" style={{ color: "rgba(245,236,205,0.5)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E6AF2E")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,236,205,0.5)")}
                  >
                    {icon}
                  </span>
                  {/* Text — visible on md+ only */}
                  <div className="hidden md:block">
                    <p className="font-mono-label text-xs uppercase tracking-widest mb-0.5" style={{ color: "rgba(245,236,205,0.3)" }}>
                      {label}
                    </p>
                    <p
                      className="font-display text-sm transition-colors duration-150"
                      style={{ color: "rgba(245,236,205,0.65)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#E6AF2E")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,236,205,0.65)")}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 max-w-lg flex flex-col">
            {sent ? (
              <div
                className="border p-10 text-center flex-1 flex flex-col items-center justify-center"
                style={{ borderColor: "rgba(11,110,79,0.4)", backgroundColor: "rgba(11,110,79,0.06)" }}
              >
                <p className="font-display text-3xl md:text-4xl mb-4" style={{ color: "#0B6E4F" }}>
                  Message sent.
                </p>
                <p className="text-sm" style={{ color: "rgba(245,236,205,0.5)" }}>
                  I&apos;ll be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-3 md:space-y-0 md:flex md:flex-col md:flex-1 md:gap-4">
                {[
                  { id: "name" as const, label: "Name", type: "text", placeholder: "Your full name" },
                  { id: "email" as const, label: "Email", type: "email", placeholder: "you@example.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="md:shrink-0">
                    <label className="font-mono-label text-xs uppercase tracking-widest block mb-1.5 md:mb-2" style={{ color: "rgba(245,236,205,0.4)" }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      required
                      maxLength={id === "email" ? 254 : 100}
                      value={form[id]}
                      onChange={(e) => handleChange(id, e.target.value)}
                      className="w-full px-3 py-2.5 md:mb-5 md:px-4 md:py-3 text-sm transition-colors duration-200"
                      style={{
                        ...inputStyle,
                        borderColor: errors[id]
                          ? "rgba(230,175,46,0.6)"
                          : "rgba(245,236,205,0.12)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(230,175,46,0.4)")}
                      onBlur={(e) => {
                        if (!errors[id])
                          e.currentTarget.style.borderColor = "rgba(245,236,205,0.12)";
                      }}
                      placeholder={placeholder}
                    />
                    {errors[id] && <p style={errorStyle}>{errors[id]}</p>}
                  </div>
                ))}
                <div className="md:flex-1 md:flex md:flex-col">
                  <label className="font-mono-label text-xs uppercase tracking-widest block mb-1.5 md:mb-2" style={{ color: "rgba(245,236,205,0.4)" }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    maxLength={2000}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm resize-none transition-colors duration-200 md:flex-1"
                    style={{
                      ...inputStyle,
                      borderColor: errors.message
                        ? "rgba(230,175,46,0.6)"
                        : "rgba(245,236,205,0.12)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(230,175,46,0.4)")}
                    onBlur={(e) => {
                      if (!errors.message)
                        e.currentTarget.style.borderColor = "rgba(245,236,205,0.12)";
                    }}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p style={errorStyle}>{errors.message}</p>}
                </div>
                {submitError && (
                  <p className="text-xs text-center" style={{ color: "#E6AF2E" }}>{submitError}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting || !!(errors.name || errors.email || errors.message)}
                  className="w-full py-3 md:py-4 font-mono-label text-xs uppercase tracking-widest transition-all duration-200 disabled:opacity-40 md:shrink-0"
                  style={{
                    backgroundColor: "#E6AF2E",
                    color: "#0C0910",
                    cursor: submitting || errors.name || errors.email || errors.message ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting && !errors.name && !errors.email && !errors.message)
                      e.currentTarget.style.backgroundColor = "#d49d25";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#E6AF2E";
                  }}
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}