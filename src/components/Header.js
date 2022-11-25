import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="main">
        Emmanuel Anongba
      </Link>
      <div className="right-nav">
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="research">Research</Link>
      </div>
    </div>
  );
};

export default Header;
