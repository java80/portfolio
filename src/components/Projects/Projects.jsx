
import React, { Component } from 'react';
import "./Projects.css";
import AllProjects from "./ListofProject.json";
import Button from 'react-bootstrap/Button';

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
                  <div className="git-live-button">
                    <div>
                  <h3> <span>&nbsp; &nbsp;&nbsp;&nbsp;</span>
                    <Button variant = "primary" type="button" onClick={(e) => {
                                     e.preventDefault();
                    window.location.href = allproject.livesite;
                     }}> Live Site</Button>
                      </h3>
                    </div>
                    <div>
                  <h3> <span>&nbsp; &nbsp;&nbsp;&nbsp;</span>
                    <Button variant = "primary" type="button" onClick={(e) => {
                                     e.preventDefault();
                    window.location.href = allproject.github;
                     }}> Github</Button>
                    </h3>
                    </div>
                  </div>
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
