import React from 'react';

import { Person, Mail } from '@material-ui/icons';
import MenuIcon from "@material-ui/icons/Menu";

import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="top-bar">
      <div className="left">
        <div className="wrapper">
          <a href = "#intro" className= "logo"> Ike's Portfolio</a>
          <div className="item-container">
            <Person className="icon" />
            <span>8626001706</span>
          </div>
          <div className="item-container">
            <Mail className="mail" />

            <span>ikeekedede@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
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
