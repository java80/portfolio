import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index';
import Intro from './components/Intro/index';
import Aboutme from './components/Aboutme/index';
import RecentProjects from "./components/RecentProjects"
import Crousel from './components/Slider/index';
import Skills from './components/Skills';
import Education from './components/Education';


function App() {
  return (
    <div className="App">
     <Header/>
     <Intro/>
     <Crousel/>
     <Aboutme/>
     <RecentProjects/>
     <Education/>
     <Skills/>
    </div>
  );
}

export default App;
