import React, { useState } from "react";
import "../Component Css/Contact.css";
import emailjs from "@emailjs/browser";
export default function Contact() {
  let [inputs, setInputs] = useState({
    name: "",
    email: "",
    query: "",
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ppf4r4a",
        "template_s096gut",
        e.target,
        "user_dTSRnEuymb3xb6u43MLlH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setInputs({
      name: "",
      email: "",
      query: "",
    });
  };

  return (
    <>
      <div className="container-fluid contact-container py-2" id="Contact">
        <h1 className="contact-title">Contact me</h1>
        <div className="row  mx-auto justify-content-center align-items-center ">
          <div className="col-12 col-md-5 col-sm-5 col-lg-4 m-2 rounded userInfo ">
            <ul>
              <li className="text-white  my-3 py-2 px-1">
                <i class="uil uil-user ml-2"></i>
                <span className="mx-2">Raj Vinod Yadav</span>
              </li>
              <li className="text-white  my-3 py-2 px-1">
                <i class="uil uil-envelope-alt ml-2"></i>
                <span className="mx-2">raj819314@gmail.com</span>
              </li>
              <li className="text-white  my-3 py-2 px-1">
                <i class="uil uil-phone ml-1"></i>
                <span className="mx-2">9892603606</span>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-5 col-sm-5 col-lg-4 m-2 rounded formDetail px d-flex  flex-column  justify-content-center">
            <form className="px-2" onSubmit={sendEmail}>
              <div className="form-group ">
                <label hrmlFor="InputEmail1" className="text-white">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="InputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your name"
                  value={inputs.name || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label hrmlFor="InputPassword1" className="text-white">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control mw-100"
                  id="InputPassword1"
                  placeholder="Email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label hrmlFor="FormControlTextarea1" className="text-white">
                  Query
                </label>
                <textarea
                  name="query"
                  className="form-control"
                  id="FormControlTextarea1"
                  rows="3"
                  type="userQuery"
                  onChange={handleChange}
                  value={inputs.query || ""}
                  placeholder="Mention your Query"
                >
                  {inputs.query}
                </textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
