import "./Header.css";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
  };

  if (ref.current) {
    for (const i of ref.current.children) {
      i.onclick = () => {
        setOpen(!open);
      };
    }
  }

  // onClick={() => setOpen(!open)}

  return (
    <div className={`header ${open ? "nav-open" : ""}`}>
      <NavLink to="/" className="main">
        Emmanuel Anongba
      </NavLink>
      <div className="right-nav" ref={ref}>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="research">Research</NavLink>
      </div>

      <button className="btn-mobile-nav">
        <ion-icon
          class="icon-mobile-nav"
          name="menu-outline"
          onClick={() => setOpen(true)}
        ></ion-icon>
        <ion-icon
          class="icon-mobile-nav"
          name="close-outline"
          onClick={() => setOpen(false)}
        ></ion-icon>
      </button>
    </div>
  );
};

export default Header;
