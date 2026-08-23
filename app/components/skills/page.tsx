"use client";

import React, { useState, useEffect, useRef } from "react";

const SKILLS = [
  { category: "Languages",    items: ["TypeScript", "Python", "C#", "Java"] },
  { category: "Frameworks",   items: ["React", "Next.js", "Express", "FastAPI"] },
  { category: "Styling",      items: ["Tailwind CSS", "CSS3", "Lucide React", "Responsive Design"] },
  { category: "Backend & DB", items: ["Node.js", "MongoDB", "PostgreSQL", "Neon", "Firebase", "Firestore"] },
  { category: "Tools & APIs", items: ["Vite", "Stripe", "Spotify API", "GitHub API", "Puppeteer", "Google GenAI"] },
  { category: "Practices",    items: ["Full-Stack Dev", "REST APIs", "AI / ADK", "Auth & Payments", "Web Scraping", "MERN Stack"] },
];

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative flex items-center overflow-hidden"
      style={{ backgroundColor: "#0C0910", minHeight: "100svh", borderTop: "1px solid rgba(245,236,205,0.06)" }}
    >
      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-16 w-full">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:gap-16 mb-8 md:mb-10">
          <div className="mb-6 mt-2 md:mb-0 md:w-64 shrink-0">
            <span className="font-mono-label text-xs uppercase tracking-widest block mb-3" style={{ color: "rgba(245,236,205,0.3)" }}>
              §02
            </span>
            <h2
              className="font-display leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5ECCD" }}
            >
              Skills &amp;<br />
              <span style={{ color: "#0B6E4F" }}>Stack</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed md:pb-2" style={{ color: "rgba(245,236,205,0.45)", maxWidth: "360px" }}>
            Tools I reach for daily, and the ones I pull out when the job demands it.
          </p>
        </div>

        {/* Grid — 2 cols on mobile, 3 on md+ */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-px"
          style={{ backgroundColor: "rgba(245,236,205,0.06)" }}
        >
          {SKILLS.map(({ category, items }, idx) => (
            <div
              key={category}
              className="p-4 md:p-6 transition-all duration-500"
              style={{
                backgroundColor: "#0C0910",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <p className="font-mono-label text-xs uppercase tracking-widest mb-3 md:mb-4" style={{ color: "#E6AF2E" }}>
                {category}
              </p>
              <ul className="space-y-1.5">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="font-display cursor-pointer transition-colors duration-150"
                    style={{
                      fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
                      color: hovered === skill ? "#F5ECCD" : "rgba(245,236,205,0.55)",
                    }}
                    onMouseEnter={() => setHovered(skill)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}