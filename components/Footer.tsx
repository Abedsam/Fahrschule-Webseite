export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/40 sm:flex-row">
        <span className="font-display text-base font-semibold text-white/70">
          Fahrschule <span className="text-accent">DriveFit</span>
        </span>
        <p>Kieler Str. 639, 22527 Hamburg · 040 31768991</p>
        <p>© {new Date().getFullYear()} Fahrschule DriveFit</p>
      </div>
    </footer>
  );
}
