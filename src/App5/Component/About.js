import React from "react";
import "../Component Css/About.css";
export default function About() {
  return (
    <>
      <div className="container-fluid about-container " id="About">
        <h1 className="about-title py-2">About</h1>
        <div className="row  justify-content-center align-items-center ">
        
          <div className="about-info col-12 col-sm-8 col-md-8 col-lg-8 mx-1 d-inline-block">
            <p className="d-inline-block">
              Currently I’m pursuing BCA with S.S & L. S PATKAR & V.P VARDE
              COLLEGE GOREGAON with 8.25 CGPA During my course curriculum I have learned
              frontend technologies HTML,CSS,JAVASCRIPT,REACT,BOOTSTRAP and many
              Other which help me design better mobile responsve Website and I
              want to contribute my skills to make better UI/UX Design
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
