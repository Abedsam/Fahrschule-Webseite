import Reveal from "./Reveal";
import GoogleLogo from "./GoogleLogo";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Fahrschule+DriveFit/@53.6030132,9.9082851,17z/data=!3m1!4b1!4m6!3m5!1s0x47b187b427224411:0x95fda1eb30bf991!8m2!3d53.60301!4d9.91086!16s%2Fg%2F11ym8052by";

const REVIEWS = [
  {
    name: "Sabri Kocaman",
    date: "vor 5 Monaten",
    text: "Diese Fahrschule kann ich nur ans Herz legen. Von Beginn an war alles sehr gut organisiert und verlief ohne Probleme. Theorie- und Praxistermine wurden rasch angesetzt, wodurch lange Wartezeiten vermieden wurden. Mein Fahrlehrer Naci Gökce war stets freundlich und geduldig. Ich konnte meinen Führerschein in nur 3 Monaten und 15 Tagen machen.",
  },
  {
    name: "Jafar. Nejati",
    date: "vor 5 Monaten",
    text: "Ich habe heute meine Führerscheinprüfung Klasse B bestanden und möchte mich herzlich bei der Fahrschule DriveFit bedanken. Ein besonderes Dankeschön geht an meinen Fahrlehrer Naci Gökce – geduldig, ruhig und sehr kompetent. Auch ein großes Lob an die netten Sekretärinnen Nasrin und Rüya.",
  },
  {
    name: "Albon Az",
    date: "vor einem Monat",
    text: "Eine so dermaßen faire Fahrschule mit extrem kompetenten und freundlichen Mitarbeitern ist extrem selten! Hier werden keine unnötigen Stunden aufgebrummt, sondern absolut fair beurteilt und so schnell es geht auf die Prüfung vorbereitet. Mein Sohn ist vollends glücklich – absolute Empfehlung!",
  },
  {
    name: "Akin Tuncbilek",
    date: "vor 9 Monaten",
    text: "Eine wunderbare Fahrschule mit familiärer Atmosphäre, das Preis-Leistungsverhältnis ist unschlagbar für den Ballungsraum Hamburg. Zudem eine Top-Ausstattung. Herr Gökce ist ein sehr pflichtbewusster und ruhiger Fahrlehrer.",
  },
  {
    name: "Alperen Oruc",
    date: "vor 5 Monaten",
    text: "Top Fahrschule! Das Team von DriveFit ist absolut professionell und gleichzeitig super entspannt. Die Ausbildung ist strukturiert, der Fahrlehrer hat extrem viel Geduld und bereitet einen perfekt auf die Prüfungen vor.",
  },
  {
    name: "Özgür Kalayci",
    date: "vor 9 Monaten",
    text: "Das Team ist herzlich und man wird direkt gut aufgenommen. Der Fahrlehrer erklärt alles ruhig und verständlich, sodass man sich von Anfang an sicher fühlt. Auch die Organisation und Terminvergabe klappt problemlos.",
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

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={(i % 3) * 0.1} className="mb-6 break-inside-avoid">
              <div className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="text-xs text-white/40">{review.date}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
                    {review.name[0]}
                  </div>
                  <span className="text-sm font-medium">{review.name}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
          >
            Alle 16 Bewertungen auf Google ansehen →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
