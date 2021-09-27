// NPM Package
import { Route } from "react-router-dom";

// Local files
import Menu from "./components/Menu";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tech from "./sections/Tech";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="App">
      <Menu />
      <Route exact path="/" component={Hero} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/tech" component={Tech} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
