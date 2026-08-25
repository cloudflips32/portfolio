"use client"

import { useState } from 'react'

// ─── Contact ────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameErr = validate("name", form.name);
    const emailErr = validate("email", form.email);
    const messageErr = validate("message", form.message);
    setErrors({ name: nameErr, email: emailErr, message: messageErr });
    if (nameErr || emailErr || messageErr) return;
    setSent(true);
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
    { label: "Email", value: "adamjstandishcoder@gmail.com",     
      href:  "mailto:adamjstandishcoder@gmail.com" },
    { label: "GitHub", value: "github.com/cloudflips32",         
      href:  "https://github.com/cloudflips32" },
    { label: "LinkedIn", value: "linkedin.com/in/adam-standish", 
      href:  "https://linkedin.com/in/adam-standish" },
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

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-16 w-full">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24">

          {/* Info column */}
          <div className="md:w-72 lg:w-80 shrink-0">
            <span className="font-mono-label text-xs uppercase tracking-widest block mb-3" style={{ color: "rgba(245,236,205,0.3)" }}>
              §04
            </span>
            <h2
              className="font-display leading-none mb-5 md:mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5ECCD" }}
            >
              Let&apos;s
              <br />
              <span style={{ color: "#E6AF2E" }}>Work</span>
              <br />
              Together
            </h2>
            <p className="text-sm leading-relaxed mb-8 md:mb-10" style={{ color: "rgba(245,236,205,0.45)", maxWidth: "320px" }}>
              Open to new opportunities — freelance projects, full-time roles, and long-term collaborations.
            </p>

            {/* Links — horizontal chips on mobile, vertical list on md+ */}
            <div className="flex flex-wrap gap-3 md:flex-col md:gap-4">
              {LINKS.map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group block"
                >
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
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 max-w-lg">
            {sent ? (
              <div
                className="border p-10 text-center"
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
              <form onSubmit={handleSubmit} noValidate className="space-y-4 md:space-y-5">
                {[
                  { id: "name" as const, label: "Name", type: "text", placeholder: "Your full name" },
                  { id: "email" as const, label: "Email", type: "email", placeholder: "you@example.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="font-mono-label text-xs uppercase tracking-widest block mb-2" style={{ color: "rgba(245,236,205,0.4)" }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      required
                      maxLength={id === "email" ? 254 : 100}
                      value={form[id]}
                      onChange={(e) => handleChange(id, e.target.value)}
                      className="w-full px-4 py-3 text-sm transition-colors duration-200"
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
                <div>
                  <label className="font-mono-label text-xs uppercase tracking-widest block mb-2" style={{ color: "rgba(245,236,205,0.4)" }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    maxLength={2000}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="w-full px-4 py-3 text-sm resize-none transition-colors duration-200"
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
                <button
                  type="submit"
                  disabled={!!(errors.name || errors.email || errors.message)}
                  className="w-full py-4 font-mono-label text-xs uppercase tracking-widest transition-all duration-200 disabled:opacity-40"
                  style={{
                    backgroundColor: "#E6AF2E",
                    color: "#0C0910",
                    cursor: errors.name || errors.email || errors.message ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!errors.name && !errors.email && !errors.message)
                      e.currentTarget.style.backgroundColor = "#d49d25";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#E6AF2E";
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}