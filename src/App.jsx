// NPM Package
import { useState } from "react";
// Local files
import Menu from "./components/Menu";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tech from "./sections/Tech";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./styles/styles.scss";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(null);
  return (
    <div className="App">
      <Menu />
      <Hero />
      <About />
      <Projects setModal={setModal} />
      <Modal state={[modal, setModal]} />
      <Tech />
      <Contact />
    </div>
  );
}

export default App;
