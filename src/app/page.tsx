import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Safety from "@/components/Safety";
import Testimonials from "@/components/Testimonials";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <WhyUs />
        <Services />
        <Safety />
        <Testimonials />
        <Coverage />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
