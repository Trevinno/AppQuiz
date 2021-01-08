import React, { Component } from "react";

import "../css/navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle">
          <i className="fas fa-bars"></i>
        </span>

        <a className="logo">
          Daru Quiz
          <img
            src="https://cdn.iconscout.com/icon/free/png-64/falcon-9-1129253.png"
            alt=""
            width="50"
            height="50"
          />
        </a>

        <ul className="main-nav" id="js-menu"></ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
