import Reveal from "./Reveal";
import GoogleLogo from "./GoogleLogo";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Fahrschule+DriveFit+Kieler+Str.+639+22527+Hamburg";

const REVIEWS = [
  {
    name: "Lena K.",
    initial: "L",
    text: "Sehr entspannte Fahrstunden und top vorbereitet auf die Prüfung. Kann ich nur empfehlen!",
  },
  {
    name: "David M.",
    initial: "D",
    text: "Freundliches Team, faire Preise und flexible Termine. Beim ersten Versuch bestanden.",
  },
  {
    name: "Aylin S.",
    initial: "A",
    text: "Geduldige Fahrlehrer, moderne Autos und immer erreichbar bei Fragen. Absolute Empfehlung.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.4 6-5.5-3.2-5.5 3.2 1.4-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="bewertungen" className="bg-ink px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Bewertungen
              </span>
              <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
                Das sagen unsere Fahrschüler
              </h2>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4"
            >
              <GoogleLogo className="h-8 w-8" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-xl font-semibold">5,0</span>
                  <Stars />
                </div>
                <div className="text-xs text-white/50">16 Google-Rezensionen</div>
              </div>
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <Stars />
                <p className="mt-4 flex-1 text-sm text-white/70">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
                    {review.initial}
                  </div>
                  <span className="text-sm font-medium">{review.name}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-xs text-white/40">
            Beispielhafte Rezensionen – echte Bewertungstexte können jederzeit
            über die Google-Business-API oder manuell ergänzt werden.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
