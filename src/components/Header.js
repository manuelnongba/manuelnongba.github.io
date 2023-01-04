import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="main">
        Emmanuel Anongba
      </NavLink>
      <div className="right-nav">
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="research">Research</NavLink>
      </div>
    </div>
  );
};

export default Header;
