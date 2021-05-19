import React from 'react';

const Header = () => {
  return (
    <div>
      <div>
      <img src={process.env.PUBLIC_URL + '/img/linkedIn-icon.png'} alt="LinkInProfile" />
      </div>
      <div>
      <h1>Ikechukwu Ekedede</h1>
      </div>
      <div>
      <h1>Software Engineer</h1>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/img/linkedIn-icon.png'} alt="LinkInProfile" />
        <img src= {process.env.PUBLIC_URL + '/img/github-icon.png'} alt ="GitHubProfile"/>
      </div>
    
    </div>
  );
};

export default Header;   