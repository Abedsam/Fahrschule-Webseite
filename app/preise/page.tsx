import type { Metadata } from "next";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Preise | Fahrschule DriveFit",
  description:
    "Alle Preise der Fahrschule DriveFit in Eimsbüttel im Überblick – Klassen B, BE, A und A1.",
};

export default function PreisePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
