"use client";

export default function Hero({ goToSlide }: { goToSlide?: (section: string) => void }) {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ backgroundColor: "#0C0910", minHeight: "100svh" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,236,205,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,236,205,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-px h-full hidden md:block"
        style={{ backgroundColor: "#0B6E4F", opacity: 0.4 }}
      />

      {/* Corner label — desktop only */}
      <div className="hidden md:block absolute top-8 right-12 text-right">
        <p className="font-mono-label text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(245,236,205,0.3)" }}>
          Portfolio
        </p>
        <p className="font-mono-label text-xs" style={{ color: "rgba(245,236,205,0.2)" }}>
          2026
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pb-16 md:pb-20 pt-28 md:pt-0 w-full">
        <div className="mb-5 md:mb-6">
          <span
            className="font-mono-label text-xs uppercase tracking-widest px-3 py-1 border"
            style={{ color: "#E6AF2E", borderColor: "rgba(230,175,46,0.3)", backgroundColor: "rgba(230,175,46,0.06)" }}
          >
            Available for work
          </span>
        </div>

        <h1
          className="font-display leading-none mb-6 md:mb-8"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)", color: "#F5ECCD" }}
        >
          Adam
          <br />
          <span style={{ color: "#0B6E4F" }}>Standish</span>
          <span style={{ color: "#E6AF2E" }}>.</span>
        </h1>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-16">
          <p
            className="font-display italic leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
              color: "rgba(245,236,205,0.65)",
              maxWidth: "520px",
            }}
          >
            Frontend developer crafting precise, performant interfaces — from
            design systems to data-dense dashboards. Let&apos;s build something great.
          </p>

          {/* Buttons — stacked on mobile, inline on md+ */}
          <div className="flex flex-col sm:flex-row gap-3 md:ml-auto md:pb-1 shrink-0">
            <button
              onClick={() => goToSlide?.("projects")}
              className="px-6 py-3 font-mono-label text-xs uppercase tracking-widest text-center transition-all duration-200"
              style={{ backgroundColor: "#0B6E4F", color: "#F5ECCD" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#094f39")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0B6E4F")}
            >
              View Work
            </button>
            <button
              onClick={() => goToSlide?.("contact")}
              className="px-6 py-3 font-mono-label text-xs uppercase tracking-widest text-center border transition-all duration-200"
              style={{ borderColor: "rgba(245,236,205,0.25)", color: "rgba(245,236,205,0.7)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,236,205,0.6)";
                e.currentTarget.style.color = "#F5ECCD";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,236,205,0.25)";
                e.currentTarget.style.color = "rgba(245,236,205,0.7)";
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono-label text-xs tracking-widest uppercase" style={{ color: "rgba(230,175,46,0.4)" }}>
          Swipe
        </span>
        <div className="w-px h-8 md:h-10 animate-pulse" style={{ backgroundColor: "rgba(230,175,46,0.4)" }} />
      </div>
    </section>
  );
}