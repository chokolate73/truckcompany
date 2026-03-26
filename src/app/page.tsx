import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Safety from "@/components/Safety";
import Testimonials from "@/components/Testimonials";
import Coverage from "@/components/Coverage";
import FleetPreview from "@/components/FleetPreview";
import FAQ from "@/components/FAQ";
import CareersPreview from "@/components/CareersPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Safety />
        <Testimonials />
        <Coverage />
        <FleetPreview />
        <FAQ />
        <CareersPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
