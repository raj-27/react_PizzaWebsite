import React from "react";
import "../Component Css/About.css";
export default function About() {
  return (
    <>
      <div className="container-fluid about-container " id="About">
        <h1 className="about-title py-2">About</h1>
        <div className="row  justify-content-center align-items-center ">
          <div className="about-pic col-md-5 col-lg-5 col-sm-5 col-12 d-flex justify-content-center align-items-center mx-1 ">
            <img
              src="/images/profile_pic.jpg"
              className="img-fluid"
              alt=""
              srcSet=""
            />
          </div>
          <div className="about-info col-12 col-sm-5 col-md-5 col-lg-5 mx-1 d-inline-block">
            <p className="d-inline-block">
              Hii, My name is Raj . I am hardworking BCA undergraduate students
              and pursing my bachelor degree with Chikitsak Samuha's Sir Sitaram
              and Lady Shantabai Patkar College of Arts and Science and V.P.
              Varde College of Commerce and Economics with currently CGPA 8.25
              During my course I have learned  frontend
              technologies HTML,CSS,JAVASCRIPT,REACT,BOOTSTRAP and many Other which help
              me design better mobile responsve Website and I want to contribute my skills to make better UI/UX Design
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
