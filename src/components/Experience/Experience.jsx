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
import styled from 'styled-components';
const Experience = () => {

 const skillsImages = [
   {
     img: htmlImg,
     alt: "Html",
     height: "40 rem",
     backgroundcolor: "red",
   },
   {
     img: cssImg,
     alt: "Css",
     height: "5rem",
     backgroundcolor: "red",
   },
   {
     img: jsImg,
     alt: "Js",
     height: "5rem",
     backgroundcolor: "red",
   },
   {
     img: bootstrapImg,
     alt: "Bootstrap",
     height: "5.2rem",
     backgroundcolor: "red",
   },
   {
     img: reactjsImg,
     alt: "Reactjs",
     height: "5rem",
     backgroundcolor: "red",
   },
   {
     img: materialUIImg,
     alt: "MaterialUI",
     height: "5.2rem",
     backgroundcolor: "red",
   },
   {
     img: ruby,
     alt: "Ruby",
     height: "5.2rem",
     backgroundcolor: "red",
   },
   {
     img: jquery,
     alt: "Jquery",
     height: "5.2rem",
     backgroundcolor: "red",
   },
   {
     img: mongo,
     alt: "Mongodb",
     height: "5 rem",
     backgroundcolor: "red",
   },
   {
     img: cS,
     alt: "CS",
     height: "5 rem",
     backgroundcolor: "red",
   },
   {
     img: cPlus,
     alt: "c++",
     height: "5rem",
     backgroundcolor: "yellow"
   },
   {
     img: express,
     alt: "Express",
     height: "5rem",
     backgroundcolor: "blue"
   },
 ];
  return (
    <div className ="experience-container" id = "experience">
       {/* <h1> Experience</h1> */}
      <div className = "box-container">
      {
        skillsImages.map((skillimage, index) => {
          
          return (
            <div className="item" key={index}>
              <p>{skillimage.alt}</p>
              <img
                src={skillimage.img}
                alt=""
               style={{height:skillimage.height}}
              />
            </div>
          ); 
          

        })
      }
      </div>
      </div>
    
  )
}

export default Experience
