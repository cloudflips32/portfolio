"use client";

import React, { useState, useRef     } from "react"
import        { Swiper, SwiperSlide  } from "swiper/react"
import type   { SwiperClass          } from "swiper/react"
import        { Mousewheel, Keyboard } from "swiper/modules"

import About  from "./components/about/page"
import Hero   from "./components/hero/page"
import NavBar from "./components/navbar/page"
import skillIcon from "./components/skill-icons/page"
import Skills from "./components/skills/page"


import "swiper/css"

const PROJECTS = [
  {
    index:       "01",
    title:       "TrueAid",
    tech:        ["React", "TypeScript", "Express", "Stripe", "Neon", "Tailwind"],
    description: "Full-stack platform integrating Stripe payments, Neon Postgres, and a React frontend. Built with Vite and Lucide-React for a polished, production-ready experience.",
    year:        "2024",
    role:        "Full-Stack Engineer",
    color:       "#0B6E4F",
    href:        "https://github.com/cloudflips32/TrueAid",
  },
  {
    index:       "02",
    title:       "Whiskerion Chatbot",
    tech:        ["React", "TypeScript", "Google GenAI", "Tailwind", "Vite"],
    description: "AI-powered chatbot built with Google Generative AI. Clean React + TypeScript frontend with real-time streaming responses and a warm, polished UI.",
    year:        "2024",
    role:        "Frontend Engineer",
    color:       "#E6AF2E",
    href:        "https://github.com/cloudflips32/whiskerion-chatbot",
  },
  {
    index:       "03",
    title:       "Club Template",
    tech:        ["Next.js", "React", "Firebase", "Firestore", "Tailwind"],
    description: "Reusable club/organization site template with Firebase Auth, Firestore database, and a Next.js frontend. Ready to deploy for any team or community.",
    year:        "2023",
    role:        "Full-Stack Engineer",
    color:       "#F5ECCD",
    href:        "https://github.com/cloudflips32/club-template",
  },
];


// ─── Projects ───────────────────────────────────────────────────────────────

function Projects() {
  const [active, setActive] = useState(0);
  const project = PROJECTS[active];

  return (
    <section
      id="projects"
      className="relative flex items-center overflow-hidden"
      style={{ backgroundColor: "#0C0910", minHeight: "100svh", borderTop: "1px solid rgba(245,236,205,0.06)" }}
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-16 w-full">

        {/* Mobile: stacked cards */}
        <div className="md:hidden">
          <span className="font-mono-label text-xs uppercase tracking-widest block mb-3" style={{ color: "rgba(245,236,205,0.3)" }}>
            §03
          </span>
          <h2
            className="font-display leading-none mb-8"
            style={{ fontSize: "clamp(2rem, 8vw, 3rem)", color: "#F5ECCD" }}
          >
            Selected <span style={{ color: "#0B6E4F" }}>Work</span>
          </h2>
          <div className="flex flex-col gap-4">
            {PROJECTS.map((p) => (
              <a
                key={p.index}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block border transition-all duration-200 active:scale-[0.98]"
                style={{ borderColor: "rgba(245,236,205,0.08)", borderTopWidth: "2px", borderTopColor: p.color }}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-mono-label text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(245,236,205,0.3)" }}>
                        {p.year} — {p.role}
                      </p>
                      <h3 className="font-display text-xl" style={{ color: "#F5ECCD" }}>
                        {p.title}
                      </h3>
                    </div>
                    <span className="font-display text-3xl font-light opacity-15 leading-none" style={{ color: p.color }}>
                      {p.index}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(245,236,205,0.55)" }}>
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono-label text-xs px-2 py-0.5 border inline-flex items-center gap-1"
                        style={{ color: "rgba(245,236,205,0.45)", borderColor: "rgba(245,236,205,0.1)" }}
                      >
                        {skillIcon(t)}
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Tablet + Desktop: sidebar + detail */}
        <div className="hidden md:flex md:items-start gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="w-52 lg:w-64 shrink-0">
            <span className="font-mono-label text-xs uppercase tracking-widest block mb-4" style={{ color: "rgba(245,236,205,0.3)" }}>
              §03
            </span>
            <h2
              className="font-display leading-none mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5ECCD" }}
            >
              Selected
              <br />
              <span style={{ color: "#0B6E4F" }}>Work</span>
            </h2>
            <ul className="space-y-1">
              {PROJECTS.map((p, i) => (
                <li key={p.index}>
                  <button
                    onClick={() => setActive(i)}
                    className="w-full text-left flex items-center gap-3 py-3 px-4 transition-all duration-200 border-l-2"
                    style={{
                      borderLeftColor: active === i ? "#E6AF2E" : "transparent",
                      backgroundColor: active === i ? "rgba(230,175,46,0.06)" : "transparent",
                    }}
                  >
                    <span
                      className="font-mono-label text-xs"
                      style={{ color: active === i ? "#E6AF2E" : "rgba(245,236,205,0.3)" }}
                    >
                      {p.index}
                    </span>
                    <span
                      className="font-display text-sm"
                      style={{ color: active === i ? "#F5ECCD" : "rgba(245,236,205,0.45)" }}
                    >
                      {p.title.split(" ")[0]}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Detail panel */}
          <div className="flex-1 border" style={{ borderColor: "rgba(245,236,205,0.08)" }}>
            <div className="h-1 w-full" style={{ backgroundColor: project.color }} />
            <div className="p-7 lg:p-12">
              <div className="flex items-start justify-between mb-6 md:mb-8">
                <div>
                  <p className="font-mono-label text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(245,236,205,0.35)" }}>
                    {project.year} — {project.role}
                  </p>
                  <h3
                    className="font-display leading-tight"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.8rem)", color: "#F5ECCD" }}
                  >
                    {project.title}
                  </h3>
                </div>
                <span
                  className="font-display font-light opacity-10 leading-none"
                  style={{ fontSize: "clamp(3rem, 5vw, 5rem)", color: project.color }}
                >
                  {project.index}
                </span>
              </div>

              <p
                className="text-sm md:text-base leading-relaxed mb-6 md:mb-8"
                style={{ color: "rgba(245,236,205,0.6)", maxWidth: "540px" }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono-label text-xs px-3 py-1 border inline-flex items-center gap-1"
                    style={{ color: "rgba(245,236,205,0.55)", borderColor: "rgba(245,236,205,0.12)" }}
                  >
                    {skillIcon(t)}
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-mono-label text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ color: "#E6AF2E" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F5ECCD")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#E6AF2E")}
              >
                View on GitHub
                <span className="text-base leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ────────────────────────────────────────────────────────────────

function Contact() {
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

// ─── Footer ─────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="py-6 px-6 md:px-8 border-t"
      style={{ backgroundColor: "#0C0910", borderColor: "rgba(245,236,205,0.06)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-mono-label text-xs" style={{ color: "rgba(245,236,205,0.25)" }}>
          © 2026 Adam Standish
        </p>
        <p className="font-mono-label text-xs" style={{ color: "rgba(245,236,205,0.25)" }}>
          Designed &amp; built with care
        </p>
      </div>
    </footer>
  );
}

// ─── App ────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const swiperRef = useRef<SwiperClass | null>(null);

  const goToSlide = (section: string) => {
    const sections = ["hero", "about", "skills", "projects", "contact"];
    const idx = sections.indexOf(section);
    if (idx !== -1) swiperRef.current?.slideTo(idx);
  };

  return (
    <div style={{ backgroundColor: "#0C0910" }}>
      <NavBar activeSection={activeSection} goToSlide={goToSlide} />
      <Swiper
        onSwiper={(s) => { swiperRef.current = s; }}
        direction="vertical"
        modules={[Mousewheel, Keyboard]}
        mousewheel
        keyboard
        speed={800}
        onSlideChange={(swiper) => {
          const sections = ["hero", "about", "skills", "projects", "contact"];
          setActiveSection(sections[swiper.activeIndex] ?? "hero");
        }}
        className="h-svh w-full"
      >
        <SwiperSlide className="h-svh!"><Hero goToSlide={goToSlide} /></SwiperSlide>
        <SwiperSlide className="h-svh!"><About /></SwiperSlide>
        <SwiperSlide className="h-svh!"><Skills /></SwiperSlide>
        <SwiperSlide className="h-svh!"><Projects /></SwiperSlide>
        <SwiperSlide className="h-svh!"><Contact /></SwiperSlide>
      </Swiper>
      <Footer />
    </div>
  );
}
