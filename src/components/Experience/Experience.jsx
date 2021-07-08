import React from 'react'
import htmlImg from "../Skills/SkillsImages/html.png"
import cssImg from "../Skills/SkillsImages/css.png";
import jsImg from "../Skills/SkillsImages/js.png";
import bootstrapImg from "../Skills/SkillsImages/bootstrap2.png";
import reactjsImg from "../Skills/SkillsImages/reactjs.png";
import materialUIImg from "../Skills/SkillsImages/materialUI.png";
import ruby from "../Skills/SkillsImages/ruby.png";
import jquery from "../Skills/SkillsImages/jquery2.png";
import mongo from "../Skills/SkillsImages/mongo.png";
import cS from "../Skills/SkillsImages/cS.png";
import cPlus from "../Skills/SkillsImages/c++.png";
import express from "../Skills/SkillsImages/express2.png";
import "./Experience.scss"
import RubberBand from "react-reveal/RubberBand";
import Flip from "react-reveal/Flip"
import Tilt from "react-parallax-tilt";
import { red, } from '@material-ui/core/colors';
const Experience = () => {
  
 
 const skillsImages = [
   {
     img: htmlImg,
     alt: "Html",
     height: "40 rem",
     backgroundColor: "red",
     borderTopColor: "#F16529",
   },
   {
     img: cssImg,
     alt: "Css",
     height: "5rem",
     backgroundColor: "yellow",
     borderTopColor: "#264de4",
   },
   {
     img: jsImg,
     alt: "Js",
     height: "5rem",
     backgroundColor: "white",
     borderTopColor: "yellow",
   },
   {
     img: bootstrapImg,
     alt: "Bootstrap",
     height: "5.2rem",
     backgroundColor: "blue",
     borderTopColor: "purple",
   },
   {
     img: reactjsImg,
     alt: "Reactjs",
     height: "5rem",
     backgroundColor: "pink",
     borderTopColor: "#61DBFB",
   },
   {
     img: materialUIImg,
     alt: "MaterialUI",
     height: "5.2rem",
     backgroundColor: "pink",
     borderTopColor: "#757ce8",
   },
   {
     img: ruby,
     alt: "Ruby",
     height: "5.2rem",
     backgroundColor: "pink",
     borderTopColor: "red",
   },
   {
     img: jquery,
     alt: "Jquery",
     height: "5.2rem",
     backgroundColor: red,
     borderTopColor: "blue",
   },
   {
     img: mongo,
     alt: "Mongodb",
     height: "5 rem",
     backgroundColor: "pink",
     borderTopColor: "brown",
   },
   {
     img: cS,
     alt: "CS",
     height: "5 rem",
     backgroundColor: "pink",
   },
   {
     img: cPlus,
     alt: "c++",
     height: "5rem",
     backgroundColor: "pink",
     borderTopColor: "yellow",
   },
   {
     img: express,
     alt: "Express",
     height: "5rem",
     backgroundColor: "pink",
     borderTopColor: "yellow",
   },
 ];
  return (
    <div className="experience-container" id="experience">
      <h1> Experience</h1>
      <RubberBand>
       
        <div className="box-container">
           
            {skillsImages.map((skillimage, index) => {
              return (
                <Tilt
                  key={index}
                  className="Tilt"
                  options={{ max: 25, scale: 2.03 }}
                >
                  <div
                    className="item"
                    key={index}
                    style = {{borderTopColor: skillimage.borderTopColor}}
                  >
                    <p>{skillimage.alt}</p>
                    <Flip left>
                      <img
                        className="rotating-image"
                        src={skillimage.img}
                        alt=""
                        style={{ height: skillimage.height }}
                      />
                    </Flip>
                  </div>
                </Tilt>
              );
            })}
          </div>
       
      </RubberBand>
    </div>
  );
}

export default Experience
