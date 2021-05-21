import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "./RecentProject.css";
const  RecentProject= () => {
  
  const slider = (
    <AwesomeSlider
      media={[
        {
          source: 'img/RecentProject.png',
        },
        {
          source: 'img/RecentProject.png',
        },
        {
          source: 'img/RecentProject.png',
        },
      ]}
    />
  );
  


  return (
    <div className = "recent-project-card">
      <h1> Recent Projects</h1>
      <h3> You Teach App</h3>
      <h4> Elearning Platform</h4>
      <div className="recent-project" >
       { slider }
      </div>
      
    </div>
  );
};

export default RecentProject;