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
            <a href="/">About</a>
          </li>
          <li>
            <a href="portfolio">Portfolio</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="resume.pdf">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// react export
export default Nav;
