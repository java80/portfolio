import React, { Component } from 'react';
import "./Education.css";


class Education extends Component {
  render() {
      
    return (
      <div className="Education-card">
        
        <div className="Educations">
          <div className = "ga-class">
            <img className="ga-image" src={process.env.PUBLIC_URL + '/img/Ga-icon.jpeg'} alt="Ga logo" />
            <h2>General Assembly</h2>
          </div>
          <div className ="st-peters">
          <img className = "st-peters-image" src= {process.env.PUBLIC_URL + '/img/SaintPeter.jpeg'} alt ="Saint Peter's logo"/>
          <h2>Saint Peter's University</h2>
          </div>

      
        </div>



      </div>
    );

    } 
  
 };
 
 export default Education;