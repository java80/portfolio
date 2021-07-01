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

import Slide from "react-reveal/Slide";
const Skills = () => {

  const skillsImages = [
    {
      img: htmlImg,
      alt: "html",
      height: "7rem",
    },
    {
      img: cssImg,
      alt: "css",
      height: "7rem",
     
    },
    {
      img: jsImg,
      alt: "js",
      height: "8rem",
      
    },
    {
      img: bootstrapImg,
      alt: "bootstrap",
      height: "10.2rem",
      
    },
    {
      img: reactjsImg,
      alt: "reactjs",
      height: "6rem",
      
    },
    {
      img: materialUIImg,
      alt: "materialUI",
      height: "10.2rem",
     
    },
    {
      img: ruby,
      alt: "ruby",
      height: "4.2rem",
      
    },
    {
      img: jquery,
      alt: "jquery",
      height: "10.2rem",
      
    },
    {
      img: mongo,
      alt: "mongo",
      height: "3rem",
      
    },
    {
      img: cS,
      alt: "cS",
      height: "5rem",
      
    },
    {
      img: cPlus,
      alt: "cPlus",
      height: "6rem",
      
    },
    {
      img: express,
      alt: "express",
      height: "10rem",
      
    },
  ];
  return (
    <div>
      <h1>Hello Projects</h1>
    </div>
  );
}

export default Skills
