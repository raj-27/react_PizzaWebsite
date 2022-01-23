import React from 'react';
import '../Component Css/Skills.css'
export default function Skills() {
  return (
      <>
        <div className="container-fluid skill-container py-3 " id="Skills">
            <h1 className="skill-title">
                Skills
            </h1>
            <div className="row mx-auto  justify-content-center py-3 my-2">
                <span className="col-md-4 col-sm-5 col-lg-3 col-12 mx-1 my-2 p-2 text-center rounded ">HTML</span>
                <span className="col-md-4 col-sm-5 col-lg-3 col-12 mx-1 my-2 p-2 text-center rounded ">CSS</span>
                <span className="col-md-4 col-sm-5 col-lg-3 col-12 mx-1 my-2 p-2 text-center rounded ">JAVASCRIPT</span>
                <span className="col-md-4 col-sm-5 col-lg-3 col-12 mx-1 my-2 p-2 text-center rounded ">SCSS</span>
                <span className="col-md-4 col-sm-5 col-lg-3 col-12 mx-1 my-2 p-2 text-center rounded ">BOOTSTRAP</span>
                <span className="col-md-4 col-sm-5 col-lg-3 col-12 mx-1 my-2 p-2 text-center rounded ">REACT JS</span>
                <span className="col-md-4 col-sm-5 col-lg-3 col-12 mx-1 my-2 p-2 text-center rounded ">GIT</span>
                <span className="col-md-4 col-sm-5 col-lg-3 col-12 mx-1 my-2 p-2 text-center rounded ">GITHUB</span>
                <span className="col-md-4 col-sm-5 col-lg-3 col-12 mx-1 my-2 p-2 text-center rounded ">FIGMA</span>
                <span className="col-md-4 col-sm-5 col-lg-3 col-12 mx-1 my-2 p-2 text-center rounded ">TEACHING</span>
            </div>
        </div>
      </>
  );
}
