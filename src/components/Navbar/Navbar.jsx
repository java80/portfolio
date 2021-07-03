import React from 'react';

import { Person, Mail } from '@material-ui/icons';
import MenuIcon from "@material-ui/icons/Menu";

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

            <span>ikeekedede@gmail.com</span>
          </div>
          <div className="item-container">
            <Mail className="resume" />
            <a
              href="https://docs.google.com/document/d/1voxeid5y03Vp2qtAIhJvU1W81BbXgPCgaW_4Y9-qSbI/edit"
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
