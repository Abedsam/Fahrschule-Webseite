"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import CarSilhouette from "./CarSilhouette";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Bild startet leicht gezoomt (näher dran) und "zoomt raus" beim Runterscrollen.
  const scale = useTransform(scrollYProgress, [0, 1], [1.35, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  return (
    <section id="top" ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(40,40,44,0.6)_0%,_rgba(10,10,10,1)_70%)]" />
          <CarSilhouette className="relative w-[130%] max-w-none translate-y-10 opacity-90 md:w-[70%]" />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/70">
            ★ 5,0 · 16 Google-Bewertungen
          </span>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Fahrschule
            <br />
            <span className="text-accent">DriveFit</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            Sicher, entspannt und mit Erfolg zum Führerschein – in Eimsbüttel.
            Klassen B, A, BE und mehr.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-ink transition hover:bg-white"
            >
              Jetzt anmelden
            </a>
            <a
              href="#leistungen"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/50"
            >
              Leistungen ansehen
            </a>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scrollen</span>
          <span className="h-8 w-px bg-white/30" />
        </motion.div>
      </div>
    </section>
  );
}
