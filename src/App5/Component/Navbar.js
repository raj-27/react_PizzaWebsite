import React from "react";
import "../Component Css/Navbar.css";
import Header from "./Header";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active ml-2">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item active ml-2">
                <a className="nav-link" href="#About">
                  About
                </a>
              </li>
              <li className="nav-item active ml-2">
                <a className="nav-link" href="#Education">
                  Education
                </a>
              </li>
              <li className="nav-item active ml-2">
                <a className="nav-link" href="#Skills">
                  Skills
                </a>
              </li>
              <li className="nav-item active ml-2">
                <a className="nav-link" href="#Project">
                  Project
                </a>
              </li>
              <li className="nav-item active ml-2">
                <a className="nav-link" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
