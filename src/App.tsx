import { Navbar, About, Home, Projects, Contact } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    </div>
  );
};

export default App;
