import React from "react";
import "../Component Css/Header.css";
import { Typewriter } from "react-simple-typewriter";
export default function Header() {
  return (
    <>
      <div className="container-fluid header-container">
        <div className="row d-flex flex-column-reverse flex-sm-row  justify-content-center align-items-center p-3 bg-dark">
          <div className="header-text col-md-5 col-lg-5 col-sm-5 col-12 d-flex flex-column  justify-content-center align-items-center m-1">
            <h1>Hii,</h1>
            <h3>I'm Raj Yadav</h3>
            <h2
              style={{
                paddingTop: "1rem",
                margin: "auto 0",
                fontWeight: "normal",
              }}
            >
              <span
                style={{ color: "#eb3b5a", fontWeight: "bold" }}
                className="d-inline-block"
              >
                <Typewriter
                  words={["Web Developer", "Web Designer", "Tutor"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <ul className="d-flex">
              <li className="m-2 text-white">
                <a href="https://www.linkedin.com/in/rajyadav27/" target="_blank">
                  <i class="uil uil-linkedin"></i>
                </a>
              </li>
              <li className="m-2 text-white">
                <a href="https://codepen.io/raj-27" target="_blank">
                <i class="uil uil-pen"></i>
                </a>
              </li>
              <li className="m-2 text-white">
                <a href="https://github.com/raj-27" target="_blank">
                <i class="uil uil-github"></i>
                </a>
              </li>
              <li className="m-2 text-white">
                <a href="https://wa.me/919892603606" target="_blank">
                <i class="uil uil-whatsapp"></i>
                </a>
              </li>
            </ul>
            <span>

            <a href="#Contact" className="btn">
              Contact
            </a>
            </span>
          </div>
          <div className="header-img col-md-5 col-lg-5 col-sm-5 col-12 d-flex justify-content-center align-items-center m-1">
            <img src="/images/header-pic1.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
