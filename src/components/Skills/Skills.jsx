import React from 'react';
import "./Skills.css";
import Alltech from "./ToolsIUse.json";

 const  Skills = (props) => {
  
  const currentTech = Alltech
  
   const renderTech = currentTech.map(alltech => {
       
     return (
       <div key={alltech.id} className="all-tech">
         <ul>
           <li>
           <img src = {alltech.img_url} alt='tool-icon'/> 
           </li>
           <li>
           <h4>{alltech.title}</h4>
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