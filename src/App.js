import React from "react";

import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import PortfolioList from "./components/PortfolioList/PortfolioList";
import Projects from "./components/Projects/Projects";
import "./App.css" 
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
