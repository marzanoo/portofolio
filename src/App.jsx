import { motion as Motion } from "framer-motion";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Baru
import About from "./components/About";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme}`}>
      <Navbar />
      <Motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 py-8"
      >
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Experience />
        <Contact />
      </Motion.main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
