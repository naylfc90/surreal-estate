import React from "react";
import "../styles/NavBar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="Logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="url">View Properties</a>
        </li>

        <li className="navbar-links-item">
          <a href="url">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
