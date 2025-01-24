// src/components/Navbar.js
import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-title">
          <h2>
            Portfolio Of <span className="highlight">Divya Nagaraj</span>
          </h2>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="introduction" smooth={true} duration={500} offset={-70}>
              Introduction
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-70}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-70}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
