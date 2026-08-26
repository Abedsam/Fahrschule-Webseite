import Reveal from "./Reveal";

const CLASSES = [
  {
    code: "Klasse B",
    title: "PKW-Führerschein",
    price: "500 €",
    priceLabel: "Grundbetrag",
    note: "+ 70 € je Fahrstunde (45 Min.)",
    desc: "Der Klassiker für Auto & Alltag. Grundbetrag inkl. Theorieunterricht.",
    featured: true,
  },
  {
    code: "Klasse BE",
    title: "PKW mit Anhänger",
    price: "ab 449 €",
    desc: "Erweiterung für Anhänger über 750 kg – ideal für Wohnwagen & Trailer.",
    featured: false,
  },
  {
    code: "Klasse A",
    title: "Motorrad",
    price: "550 €",
    priceLabel: "Grundbetrag",
    desc: "Für alle Krafträder – inklusive Grundbetrag und Sonderfahrten.",
    featured: false,
  },
  {
    code: "Klasse A1",
    title: "Leichtkrafträder",
    price: "ab 649 €",
    desc: "Einstieg auf zwei Rädern ab 16 Jahren bis 125 ccm.",
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-ink px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Leistungen &amp; Preise
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Dein Weg zum Führerschein
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">
            Transparente Preise, moderne Fahrzeuge und ein Team, das dich
            wirklich sicher zum Ziel bringt. Alle Preise als Richtwert – dein
            individuelles Angebot besprechen wir im kostenlosen Erstgespräch.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CLASSES.map((item, i) => (
            <Reveal key={item.code} delay={i * 0.08}>
              <div
                className={`group h-full rounded-2xl border p-6 transition ${
                  item.featured
                    ? "border-accent bg-accent/10"
                    : "border-line bg-surface hover:border-white/30"
                }`}
              >
                <span className="font-display text-lg font-semibold text-accent">
                  {item.code}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-white/60">{item.desc}</p>
                <div className="mt-6">
                  <div className="font-display text-3xl font-semibold">
                    {item.price}
                  </div>
                  {"priceLabel" in item && item.priceLabel && (
                    <div className="mt-1 text-xs text-white/40">{item.priceLabel}</div>
                  )}
                  {"note" in item && item.note && (
                    <div className="mt-2 text-xs text-accent">{item.note}</div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
