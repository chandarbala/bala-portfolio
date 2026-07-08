import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Github from "./sections/Github/Github";
import Contact from "./sections/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <main className="bg-[#050816] text-white">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Github />
      <Contact />
    </main>
  );
}

export default App;