import React, { useRef, useEffect } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import Thumbnail from "./BackgroundImage/thumbnail.png";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { init } from "ityped";
import "./Intro.scss";

const Intro = () => {
  const textRef = useRef();
  const portfolioBackgroud = {
    backgroundImage: `url(${Thumbnail})`,
  };
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Software Engineer",
        "React Developer",
        "Mastering the MERN Stack",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="wrapper" style={portfolioBackgroud}>
        <h2> Hi There, I'm</h2>
        <h1>Ikechukwu Ekedede</h1>
        <h3>
          Freelance <span ref={textRef}></span>
        </h3>
        <div className="porfolio-icons">
          <a
            className="github-icon"
            target="blank"
            href="https://github.com/java80"
          >
            <GitHubIcon />
          </a>
          <a
            className="linkedin-icon"
            target="blank"
            href="https://www.linkedin.com/in/ikechukwu-ekedede-20b12b209/"
          >
            <LinkedInIcon />
          </a>
          <a
            className="mail-icon"
            target="blank"
            href="mailto:ikeekedede@gmail.com"
          >
            <MailIcon />
          </a>
          <a
            className="pdf-icon"
            target="blank"
            href="https://docs.google.com/document/d/1voxeid5y03Vp2qtAIhJvU1W81BbXgPCgaW_4Y9-qSbI/edit"
          >
            <PictureAsPdfIcon/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
