import React from 'react';
import "../Component Css/Footer.css"
export default function Footer() {
  return (
      <>
        <div className="container-fluid footer py-4 fixed-bottom">
            <div className="conatiner">
                <div className="row mx-auto  justify-content-between align-items-center ">
                    <div className="col-12 col-sm-5 col-md-5 col-lg-5 d-flex justify-center align-items-center"><span class="mx-auto form-text text-muted">&#169; We'll never share your email with anyone else.</span></div>
                    <div className="col-12 col-sm-5 col-md-5 col-lg-5">
                      <a className="text-muted">Privacy Policy</a> | <a className="text-muted">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}
