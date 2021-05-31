import React from 'react';
import { Typography, AppBar, Card, Grid, CssBaseline, Toolbar, Container, CardContent } from '@material-ui/core';
 import "./Header.css"
const Header = () => {
  return (
    <Card >
           <CardContent>
    <div>
    <div className="header-container">
      <div className = 'job-title'>
      <Typography variant ="h4">Ikechukwu Ekedede</Typography>
        <Typography variant ="h5">Software Engineer</Typography>
      </div>
            <div className = "profile-picture">
      <img className = "profile-image" src={process.env.PUBLIC_URL + '/img/linkedin.jpg'} alt="LinkInProfile" />
       
      </div>
      </div>
      <div className = "social-container">
      <div className = "social-github">
      <a href="https://github.com/java80">
            <img className="github-image" src={process.env.PUBLIC_URL + '/img/github-icon.png'} alt="GitHubProfile" />
            </a>
      </div>
      <div className = "social-linkin">
      <a href="https://www.linkedin.com/in/ikechukwu-ekedede-20b12b209/">
        <img className = "linkin-image" src={process.env.PUBLIC_URL + '/img/linkedIn-icon.png'} alt="LinkInProfile" />
        </a>
        </div>
        </div>
      </div>
 </CardContent>
      </Card>
  );
};

export default Header;   
