import React from 'react'
import htmlImg from "./SkillsImages/html.png";
import cssImg from "./SkillsImages/css.png";
import jsImg from "./SkillsImages/js.png";
import bootstrapImg from "./SkillsImages/bootstrap.png";
import reactjsImg from "./SkillsImages/reactjs.png";
import materialUIImg from "./SkillsImages/materialUI.png";
import ruby from "./SkillsImages/ruby.png";
import jquery from "./SkillsImages/jquery.png";
import mongo from "./SkillsImages/mongo.png";
import cS from "./SkillsImages/cS.png";
import cPlus from "./SkillsImages/c++.png";
import express from "./SkillsImages/express.png";
import "./Skills.scss"

import Slide from "react-reveal/Slide";
const Skills = () => {

  const skillsImages = [
    {
      img: htmlImg,
      alt: "html",
      height: "11rem",
    },
    {
      img: cssImg,
      alt: "css",
      height: "11rem",
     
    },
    {
      img: jsImg,
      alt: "js",
      height: "10rem",
      
    },
    {
      img: bootstrapImg,
      alt: "bootstrap",
      height: "13.2rem",
      
    },
    {
      img: reactjsImg,
      alt: "reactjs",
      height: "8rem",
      
    },
    {
      img: materialUIImg,
      alt: "materialUI",
      height: "13.2rem",
     
    },
    {
      img: ruby,
      alt: "ruby",
      height: "5.2rem",
      
    },
    {
      img: jquery,
      alt: "jquery",
      height: "13.2rem",
      
    },
    {
      img: mongo,
      alt: "mongo",
      height: "6rem",
      
    },
    {
      img: cS,
      alt: "cS",
      height: "6rem",
      
    },
    {
      img: cPlus,
      alt: "cPlus",
      height: "10rem",
      
    },
    {
      img: express,
      alt: "express",
      height: "10rem",
      
    },
  ];
  return (
    <div className="skills-container" id="skills">
      <div className="skills-slider">
        <Slide bottom cascade>
          <div className="skills-slide">
            {skillsImages.map((skillimage, index) => {
              return (
                <span>
                  <img
                    src={skillimage.img}
                    alt={skillimage.alt}
                    style={{ height: skillimage.height }}
                  />
                </span>
              );
            })}
          </div>

          <div className="skills-slide">
            {skillsImages.map((skillimage, index) => {
              return (
                <span>
                  <img
                    src={skillimage.img}
                    alt={skillimage.alt}
                    style={{ height: skillimage.height }}
                  />
                </span>
              );
            })}
          </div>
          <div className="skills-slide">
            {skillsImages.map((skillimage, index) => {
              return (
                <span>
                  <img
                    src={skillimage.img}
                    alt={skillimage.alt}
                    style={{ height: skillimage.height }}
                  />
                </span>
              );
            })}
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Skills
