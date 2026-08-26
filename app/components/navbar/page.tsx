"use client";

import {useState, useEffect} from 'react'

const NAV_ITEMS = ["About", "Skills", "Projects", "Contact"];

export default function NavBar({ activeSection, goToSlide }: { activeSection: string; goToSlide: (section: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor:
            menuOpen ? "rgba(12,9,16,0.96)" : "rgba(12,9,16,0.96)",
          backdropFilter: menuOpen ? "blur(12px)" : "blur(12px)",
          borderBottom:
            !menuOpen ? "1px solid rgba(245,236,205,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-8 ml-auto">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <li key={item}>
                  <button
                    onClick={() => goToSlide(item.toLowerCase())}
                    className="font-mono-label text-xs uppercase tracking-widest transition-colors duration-200"
                    style={{ color: isActive ? "#E6AF2E" : "rgba(245,236,205,0.5)" }}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 ml-auto"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-px transition-all duration-300 origin-center"
              style={{
                backgroundColor: "#F5ECCD",
                transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "#F5ECCD",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300 origin-center"
              style={{
                backgroundColor: "#F5ECCD",
                transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center gap-10 transition-all duration-400"
        style={{
          backgroundColor: "#0C0910",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {NAV_ITEMS.map((item, i) => (
          <button
            key={item}
            onClick={() => { goToSlide(item.toLowerCase()); setMenuOpen(false); }}
            className="font-display transition-colors duration-200"
            style={{
              fontSize: "clamp(2.5rem, 12vw, 4rem)",
              color: activeSection === item.toLowerCase() ? "#E6AF2E" : "rgba(245,236,205,0.85)",
              transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(12px)",
              transition: "color 0.2s, transform 0.35s, opacity 0.35s",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            {item}
          </button>
        ))}
        <p
          className="font-mono-label text-xs absolute bottom-10"
          style={{ color: "rgba(245,236,205,0.2)" }}
        >
          adamjstandishcoder@gmail.com
        </p>
      </div>
    </>
  );
}