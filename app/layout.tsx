import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Fahrschule DriveFit | Eimsbüttel",
  description:
    "Fahrschule DriveFit in Eimsbüttel – 5,0 Sterne bei Google (16 Bewertungen). Führerscheinklassen B, A, BE und mehr. Jetzt anmelden.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
