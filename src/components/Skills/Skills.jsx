import React from 'react';
import "./Skills.css";
import Alltech from "./ToolsIUse.json";

 const  Skills = (props) => {
  
  const currentTech = Alltech
  
   const renderTech = currentTech.map(alltech => {
       
     return (
       <div className="all-tech">
         <ul>
           <li>
           <img src = {alltech.img_url} alt='tool-icon'/> 
           </li>
           <li>
           <h2>{alltech.title}</h2>
           </li>
         </ul>
       </div>

     );
     
   })
  return (
    <div className="Skills-card">
      {
        renderTech
       }
    </div>
  );
}



export default Skills;