import React from "react";

import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import PortfolioList from "./components/PortfolioList/PortfolioList";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import "./App.css" 
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        {/* <Skills /> */}
        <Experience/>

        <Contact />
      </div>
    </div>
  );
}

export default App;
