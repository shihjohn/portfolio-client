import { Element } from "react-scroll";
import Preloader from "../components/Preloader/Preloader";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import CaseStudy from "../components/CaseStudy/CaseStudy";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <Preloader />
      <Header />
      <Element name="hero" className="element">
        <Hero />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="experience" className="element">
        <Experience />
      </Element>
      <Element name="work" className="element">
        <CaseStudy />
        <Projects />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
