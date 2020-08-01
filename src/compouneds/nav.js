// react import
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="header" className="header">
      <div id="logo" className="logo">
        <span/>
      </div>
      <nav id="navigation" className="navigation" align="center">
        <a href="#">&#9776;</a>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href={`${process.env.PUBLIC_URL}/resume.pdf`}>Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// react export
export default Nav;
