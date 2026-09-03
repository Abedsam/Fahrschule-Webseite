import Reveal from "./Reveal";
import GoogleLogo from "./GoogleLogo";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Fahrschule+DriveFit/@53.6030132,9.9082851,17z/data=!3m1!4b1!4m6!3m5!1s0x47b187b427224411:0x95fda1eb30bf991!8m2!3d53.60301!4d9.91086!16s%2Fg%2F11ym8052by";

const REVIEWS_ROW_1 = [
  {
    name: "Sabri Kocaman",
    quote: "Ich konnte meinen Führerschein in nur 3 Monaten und 15 Tagen machen.",
  },
  {
    name: "Jafar. Nejati",
    quote: "Mein Fahrlehrer war geduldig, ruhig und sehr kompetent.",
  },
  {
    name: "Albon Az",
    quote: "Eine so dermaßen faire Fahrschule – absolute Empfehlung!",
  },
  {
    name: "Akin Tuncbilek",
    quote: "Preis-Leistungsverhältnis unschlagbar für den Ballungsraum Hamburg.",
  },
];

const REVIEWS_ROW_2 = [
  {
    name: "Alperen Oruc",
    quote: "Top Fahrschule! Professionell und gleichzeitig super entspannt.",
  },
  {
    name: "Özgür Kalayci",
    quote: "Man wird direkt gut aufgenommen und fühlt sich von Anfang an sicher.",
  },
  {
    name: "Maria",
    quote: "Faire Preise, ein Fahrlehrer der seinen Job liebt.",
  },
  {
    name: "Dilara Coban",
    quote: "Sehr kompetent, bringt die Inhalte einfach rüber.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.4 6-5.5-3.2-5.5 3.2 1.4-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

function MarqueeRow({
  items,
  reverse,
}: {
  items: { name: string; quote: string }[];
  reverse?: boolean;
}) {
  const looped = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {looped.map((review, i) => (
          <div
            key={`${review.name}-${i}`}
            className="w-[320px] shrink-0 rounded-2xl border border-line bg-surface px-6 py-5"
          >
            <Stars />
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              &ldquo;{review.quote}&rdquo;
            </p>
            <span className="mt-4 block text-sm font-medium text-white/90">
              {review.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="bewertungen" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
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
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 transition hover:border-white/30"
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
      </div>

      <Reveal delay={0.1} className="mt-14 space-y-4">
        <MarqueeRow items={REVIEWS_ROW_1} />
        <MarqueeRow items={REVIEWS_ROW_2} reverse />
      </Reveal>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal delay={0.2}>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
          >
            Alle 16 Bewertungen auf Google ansehen →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
