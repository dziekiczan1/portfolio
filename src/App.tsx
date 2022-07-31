import { Navbar, About, Home, Projects, Contact, Social } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app__container">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Social />
    </div>
  );
};

export default App;
