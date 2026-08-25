export default function Footer() {
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