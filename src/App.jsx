import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import SectionWrapper from "./components/SectionWrapper";

function App() {
  return (
    <>
      <CursorGlow />

      <ScrollProgress />

      <Navbar />

      <Hero />

      <SectionWrapper>
        <LogoStrip />
      </SectionWrapper>

      <SectionWrapper>
        <About />
      </SectionWrapper>

      <SectionWrapper>
        <Services />
      </SectionWrapper>

      <SectionWrapper>
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper>
        <Pricing />
      </SectionWrapper>

      <SectionWrapper>
        <FAQ />
      </SectionWrapper>

      <SectionWrapper>
        <Contact />
      </SectionWrapper>

      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </>
  );
}

export default App;