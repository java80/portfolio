import React, { Component } from 'react';
import Tools from "./myToolBox.json";
import "./Aboutme.css";
class Aboutme extends Component {
  render() {
      
    return (
      <div className="aboutme-card">
        
        <div className="language">
          {
            Tools.map(tool => {
              return (
                <div key={tool.id}>
                  <h2> About me</h2>
                  <h3> {this.props.headings.language} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span> <span> {tool.language} </span>  
                  </h3>
                  <h3> {this.props.headings.os} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span>  <span> {tool.os} </span>
                  </h3>
                  <h3> {this.props.headings.framework}<span>&nbsp; &nbsp;&nbsp;&nbsp;</span> <span> {tool.framework}  </span>
                  </h3>
                  <h3> {this.props.headings.tools} <span>&nbsp; &nbsp;&nbsp;&nbsp;</span> <span> {tool.tools}  </span> 
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
 
 export default Aboutme;
