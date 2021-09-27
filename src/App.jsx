// NPM Package

// Local files
import Menu from "./components/Menu";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tech from "./sections/Tech";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <About />
      <Projects />
      <Tech />
      <Contact />
    </div>
  );
}

export default App;
