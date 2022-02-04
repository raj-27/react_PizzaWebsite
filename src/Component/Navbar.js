import React ,{useState}from "react";
import { Link } from "react-router-dom";
import "../Component Css/Navbar.css";
export default function Navbar() {
  let [navbar,setNavbar]=useState(false)

  let  changeNav=()=>{
    if (window.scrollY>=70){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll',changeNav)

  return (
    <>
      <div className={`container-fluid   p-0 fixed-top my-nav ${navbar?'active':''}`}>
        <div className="row px-1 px-sm-4 px-md-5">
          <nav className=" col-12  navbar navbar-expand-lg navbar-light m-0">
            <Link className="navbar-brand ml-lg-3" style={{width:"4.5rem"}}  to="/">
              <img src="images/logo.png" className="img-fluid" alt="" srcSet="" />
            </Link>
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mr-lg-3">
                <li className="nav-item">
                  <Link className="nav-link mt-2 d-inline-block btn btn-primary px-2 text-white" to="/marketing">
                    Marketing Tools
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
