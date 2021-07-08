import React from 'react'
import "./Menu.scss"
const Menu = (props) => {
  const { menuOpen, setMenuOpen } = props;
  return (
    <div className={`menu ${menuOpen && "active"}`}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Porfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact-container">Contact</a>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
