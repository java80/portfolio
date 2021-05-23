
import React, { Component } from 'react';
import "./Projects.css";
import AllProjects from "./ListofProject.json";

class Projects extends Component {
  render() {
      
    return (
      <div className="project-card">
        
        <div className="projects">
          {
            AllProjects.map(allproject => {
              return (
                <div key={allproject.id}>
                  <h3> {this.props.listOfProjects.title} {allproject.id} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span>
                  <span> {allproject.title} </span>
                  </h3>
                  <h3> {this.props.listOfProjects.description} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span>
                  <span> {allproject.description} </span>
                  </h3>
                  <h3> {this.props.listOfProjects.tools} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span>
                  <span> {allproject.tools} </span>
                  </h3>
                  <h3> {this.props.listOfProjects.livesite} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span>
                  <span> {allproject.livesite} </span>
                  </h3>
                  <h3> {this.props.listOfProjects.github} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span>
                  <span> {allproject.github} </span>
                  </h3>
                 
        
                </div>
             )
           })
              
          }

          </div>
      </div>
    );

    } 
  
 };
 
 export default Projects;
