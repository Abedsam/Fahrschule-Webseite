import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Successes from "@/components/Successes";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Successes />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
