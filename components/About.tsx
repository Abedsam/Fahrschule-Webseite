import Reveal from "./Reveal";

const TEAM = [
  { name: "M. Yilmaz", role: "Fahrlehrer · Klasse B, BE" },
  { name: "S. Krause", role: "Fahrlehrerin · Klasse B, A" },
  { name: "T. Novak", role: "Fahrlehrer · Klasse A, A1" },
];

export default function About() {
  return (
    <section id="ueber-uns" className="bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Über uns
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Fahren lernen, das sich richtig anfühlt.
          </h2>
          <p className="mt-6 text-white/60">
            Die Fahrschule DriveFit in Eimsbüttel steht für individuellen
            Fahrunterricht, moderne Fahrzeuge und ein Team, das dich bei jedem
            Schritt begleitet – von der ersten Theoriestunde bis zur
            bestandenen Prüfung.
          </p>
          <p className="mt-4 text-white/60">
            Wir nehmen uns Zeit für jeden Fahrschüler und passen das Tempo
            individuell an dein Lerntempo an. Das Ergebnis: entspannte
            Fahrstunden und eine hohe Erfolgsquote bei der Prüfung.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            <div>
              <div className="font-display text-3xl font-semibold text-accent">5,0</div>
              <div className="mt-1 text-xs text-white/50">Google-Bewertung</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-accent">16</div>
              <div className="mt-1 text-xs text-white/50">Rezensionen</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-accent">4</div>
              <div className="mt-1 text-xs text-white/50">Führerscheinklassen</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-4 rounded-2xl border border-line bg-ink p-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display text-xl font-semibold text-accent">
                  {member.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold">{member.name}</div>
                  <div className="text-sm text-white/50">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
