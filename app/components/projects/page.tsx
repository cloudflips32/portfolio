"use client";

import {useState} from 'react'

import skillIcon from "../../components/skill-icons/page"

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

export default function Projects() {
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
            Notable <span style={{ color: "#0B6E4F" }}>Works</span>
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