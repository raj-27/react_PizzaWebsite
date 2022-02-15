import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import { ProductData } from "../ProductData";
const Navbar = () => {
  let {cart}=useContext(ProductData)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
        <Link className="navbar-brand" to="/">
          Navbar
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto d-flex justify-content-center align-lg-items-center ">
            <li className="nav-item ">
              <Link className="nav-link mt-lg-1" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <button type="button" className="btn btn-warning">
                  <i className="uil uil-shopping-cart-alt"></i>{" "}
                  <span className="badge badge-light">{cart.total_unique_items}</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
