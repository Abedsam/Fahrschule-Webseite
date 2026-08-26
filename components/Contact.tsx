"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="kontakt" className="bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Kontakt
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Jetzt Platz sichern
          </h2>
          <p className="mt-4 max-w-md text-white/60">
            Schreib uns kurz dein Anliegen – wir melden uns in der Regel
            innerhalb eines Werktags zurück.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-white/40">Adresse</dt>
              <dd className="mt-1">Kieler Str. 639, 22527 Hamburg (Eimsbüttel)</dd>
            </div>
            <div>
              <dt className="text-white/40">Telefon</dt>
              <dd className="mt-1">
                <a href="tel:+494031768991" className="hover:text-accent">
                  040 31768991
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/40">Öffnungszeiten</dt>
              <dd className="mt-1 space-y-1">
                <div className="flex justify-between gap-8 max-w-xs">
                  <span>Montag – Freitag</span>
                  <span className="text-white/60">12:00 – 19:00</span>
                </div>
                <div className="flex justify-between gap-8 max-w-xs">
                  <span>Samstag</span>
                  <span className="text-white/60">nach Vereinbarung</span>
                </div>
                <div className="flex justify-between gap-8 max-w-xs">
                  <span>Sonntag</span>
                  <span className="text-white/60">geschlossen</span>
                </div>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.15}>
          {submitted ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-line bg-ink p-8 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-2xl text-accent">
                ✓
              </div>
              <h3 className="font-display text-2xl font-semibold">Danke!</h3>
              <p className="mt-2 text-white/60">
                Deine Nachricht ist angekommen. Wir melden uns bald bei dir.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 rounded-2xl border border-line bg-ink p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs text-white/50" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-sm outline-none transition focus:border-accent"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-white/50" htmlFor="phone">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-sm outline-none transition focus:border-accent"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs text-white/50" htmlFor="email">
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-sm outline-none transition focus:border-accent"
                  placeholder="du@beispiel.de"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs text-white/50" htmlFor="license">
                  Gewünschte Führerscheinklasse
                </label>
                <select
                  id="license"
                  name="license"
                  className="w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-sm outline-none transition focus:border-accent"
                  defaultValue="B"
                >
                  <option value="B">Klasse B – PKW</option>
                  <option value="BE">Klasse BE – PKW mit Anhänger</option>
                  <option value="A">Klasse A – Motorrad</option>
                  <option value="A1">Klasse A1 – Leichtkrafträder</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs text-white/50" htmlFor="message">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-line bg-surface px-4 py-2.5 text-sm outline-none transition focus:border-accent"
                  placeholder="Erzähl uns kurz von dir..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Nachricht senden
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
