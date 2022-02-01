import React from 'react';
import { Person, Mail } from '@material-ui/icons';

import "./Navbar.scss";
const Navbar = (props) => {
  const { menuOpen, setMenuOpen } = props;
  return (
    <div className={`top-bar ${menuOpen && "active"}`}>
      <div className="left">
        <div className="wrapper">
          <a href="#intro" className="logo">
            {" "}
            Ike's Portfolio
          </a>
          <div className="item-container">
            <Person className="icon" />
            <span>8626001706</span>
          </div>
          <div className="item-container">
            <Mail className="mail" />

            <span>
              <a href="mailto:ikeekedede@gmail.com">Email Me</a>
            </span>
          </div>
          <div className="item-container">
            <Mail className="resume" />
            <a
              href="https://portfolioike.s3.us-east-2.amazonaws.com/IkeEkededeGAResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span> Download Resume </span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
