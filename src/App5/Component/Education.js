import React from "react";
import "../Component Css/Education.css";
export default function Education() {
  return (
    <>
      <div className="container-fluid education-container pt-4" id="Education">
        <h1 className="education-title ">Education</h1>
        <div className="row   justify-content-center align-items-center py-4">
          <ul className="list-group p-2 col-sm-10 col-md-10 col-lg-10 col-12 mw-100 ">
            <li className="list-group-item my-2 rounded">
              <div className="col-12">
                <h5> Bachelors in Computer Application.</h5>
                <p>
                  Chikitsak Samuha's Sir Sitaram and Lady Shantabai Patkar
                  College of Arts and Science and V.P. Varde College of Commerce
                  and Economics
                </p>
                <span>Aug 2019-Aug 2022</span>
              </div>
            </li>
            <li className="list-group-item my-2 rounded">
              <div className="col-12">
                <h5>HSC (XII) Science </h5>
                <p>
                  P.D. Turakhia Junior College of Commerce and Science, Mumbai
                </p>
                <span>Year of completion Feb-2019</span>
              </div>
            </li>
            <li className="list-group-item my-2 rounded">
                <div className="col-12">

                <h5>SSC</h5>
                <p>ST. FRANCIS ENGLISH HIGH SCHOOL</p>
                <span>Year of completion March-2017</span>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
