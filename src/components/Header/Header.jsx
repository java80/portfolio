import React from 'react';

import "./Header.css"
const Header = () => {
  return (
    <>
    <div className="header-container">
      <div className = 'job-title'>
      <h1>Ikechukwu Ekedede</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className = "profile-picture">
      <img className = "profile-image" src={process.env.PUBLIC_URL + '/img/linkedin.jpg'} alt="LinkInProfile" />
       
      </div>
      </div>
      <div className = "social-container">
      <div className = "social-github">
       <img className = "github-image" src= {process.env.PUBLIC_URL + '/img/github-icon.png'} alt ="GitHubProfile"/>
      </div>
      <div className = "social-linkin">
        <img className = "linkin-image" src={process.env.PUBLIC_URL + '/img/linkedIn-icon.png'} alt="LinkInProfile" />
        
        </div>
        </div>
      </>
  );
};

export default Header;   