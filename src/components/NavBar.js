import React from "react";
import logo from "../images/logo.png";
import "../styles/NavBar.css";
import "../styles/App.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="Logo" />
      <ul className="navbar__links">
        <li className="navbar__links-item">
          <a className="navbar__links-link" href="/">
            View Properties
          </a>
        </li>

        <li className="navbar__links-item">
          <a className="navbar__links-link" href="/add-property">
            Add a Property
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
