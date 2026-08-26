import Reveal from "./Reveal";

const QUOTES = [
  {
    name: "Jafar. Nejati",
    text: "Ich habe heute meine Führerscheinprüfung Klasse B bestanden und möchte mich herzlich bei der Fahrschule DriveFit bedanken.",
  },
  {
    name: "Sabri Kocaman",
    text: "Ich konnte meinen Führerschein in nur 3 Monaten und 15 Tagen machen, dank der hervorragenden Organisation.",
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

export default function Successes() {
  return (
    <section id="leistungen" className="bg-ink px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Erfolge
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Unsere Schüler, die die Prüfung bestanden haben
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">
            Von der Anmeldung bis zum bestandenen Führerschein – das ist es,
            worauf es ankommt. Ein paar Stimmen von Fahrschülern, die es bei
            uns geschafft haben.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            {QUOTES.map((quote, i) => (
              <Reveal key={quote.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <Stars />
                  <p className="mt-3 text-base text-white/80">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <span className="mt-4 block text-sm font-medium text-white/50">
                    {quote.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="flex aspect-[3/2] items-center justify-center border-b border-line bg-black/30 text-sm text-white/30">
                Personalausweis-Muster folgt
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  Anmeldung leicht gemacht
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Für deine Anmeldung brauchst du nur deinen gültigen
                  Personalausweis oder Reisepass – den Rest übernehmen wir.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
