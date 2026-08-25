import CountUp from "../countup/page"



// ─── About ──────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section
      id="about"
      className="relative flex items-center overflow-hidden"
      style={{ backgroundColor: "#0C0910", minHeight: "100svh", borderTop: "1px solid rgba(245,236,205,0.06)" }}
    >
      {/* Green side panel — desktop only */}
      <div
        className="hidden lg:block absolute left-0 top-0 bottom-0 w-1/3"
        style={{ backgroundColor: "#0B6E4F" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(12,9,16,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(12,9,16,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-between p-12">
          <span className="font-mono-label text-xs uppercase tracking-widest" style={{ color: "rgba(245,236,205,0.5)" }}>
            §01
          </span>
          <p className="font-display text-6xl font-light leading-none" style={{ color: "rgba(245,236,205,0.12)" }}>
            About
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 overflow-hidden">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQHb_qRXMo_65Q/profile-displayphoto-scale_400_400/B4EZy2Jtj8JEAg-/0/1772582532522?e=1788998400&v=beta&t=BCx1tQtXE_gHKbbYbdChsnGEokP6YjoOKtsNnAm0sxs"
            alt="Adam Standish, frontend developer"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5) brightness(0.65)", mixBlendMode: "multiply" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0B6E4F 0%, transparent 30%)" }} />
        </div>
      </div>

      {/* Tablet green panel — visible on md, hidden on lg+ */}
      <div
        className="hidden md:block lg:hidden absolute left-0 top-0 bottom-0 w-1/3"
        style={{ backgroundColor: "#0B6E4F" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(12,9,16,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(12,9,16,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-2/3 overflow-hidden">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQHb_qRXMo_65Q/profile-displayphoto-scale_400_400/B4EZy2Jtj8JEAg-/0/1772582532522?e=1788998400&v=beta&t=BCx1tQtXE_gHKbbYbdChsnGEokP6YjoOKtsNnAm0sxs"
            alt="Adam Standish, frontend developer"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.5) brightness(0.65)", mixBlendMode: "multiply" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0B6E4F 0%, transparent 30%)" }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-0 w-full">
        <div className="md:ml-[36%]">
          {/* Section label — visible on mobile/tablet */}
          <p className="font-mono-label text-xs uppercase tracking-widest mb-3 lg:hidden" style={{ color: "rgba(245,236,205,0.3)" }}>
            §01
          </p>
          <p className="font-mono-label text-xs uppercase tracking-widest mb-6 md:mb-8" style={{ color: "#E6AF2E" }}>
            About Me
          </p>

          <h2
            className="font-display leading-none mb-7 md:mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", color: "#F5ECCD" }}
          >
            Building the web,
            <br />
            <span style={{ fontStyle: "italic", color: "rgba(245,236,205,0.5)" }}>
              one pixel at a time.
            </span>
          </h2>

          <div
            className="space-y-4 text-sm md:text-base leading-relaxed mb-8 md:mb-12"
            style={{ color: "rgba(245,236,205,0.65)", maxWidth: "520px" }}
          >
            <p>
              I&apos;m a frontend developer building interfaces that sit at the
              intersection of engineering rigor and visual craft. My work spans
              full-stack apps, AI integrations, payment systems, and real-time
              data products.
            </p>
            <p>
              I care deeply about the details — clean code, accessible design,
              and shipping things that actually work. Good interfaces feel
              inevitable; getting there takes discipline.
            </p>
          </div>

          <div
            className="grid grid-cols-3 gap-4 md:gap-8 border-t pt-6 md:pt-8"
            style={{ borderColor: "rgba(245,236,205,0.1)" }}
          >
            {[
              { label: "Repos Shipped", target: 30, suffix: "+" },
              { label: "Tech Stacks", target: 10, suffix: "+" },
              { label: "Languages", target: 6, suffix: "" },
            ].map(({ label, target, suffix }) => (
              <div key={label}>
                <CountUp target={target} suffix={suffix} />
                <p className="font-mono-label text-xs uppercase tracking-wider" style={{ color: "rgba(245,236,205,0.4)" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}