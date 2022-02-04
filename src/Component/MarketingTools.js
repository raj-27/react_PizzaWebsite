import "../Component Css/Marketing.css";
import React,{ useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
export default function MarketingTools() {
  const Ref = useRef(null);


  return (
    <>
      <div className="container-fluid marketing">
        <img src="images/marketBanner.svg" alt="banner-img" />
        <h1 className="text-center mt-3 mb-2">Marketing Tools</h1>
        <div className="container container-1 mw-100 ">
          <div   className="row my-3 first-row justify-content-center align-items-center ">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 mx-1">
              <img src="images/bannerGrp1.svg" alt="work-img" />
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 mx-sm-1">
              <div className="content ">
                <h3>
                  Want to be a part of{" "}
                  <h2>
                    <b>TRIO ACE INTERNATIONAL?</b>
                  </h2>{" "}
                </h3>
                <ul>
                  <li className="my-2 ">
                    <i class="uil uil-check mr-1"></i>Download the TrioAce
                    Wallet App
                  </li>
                  <li className="my-2">
                    <i class="uil uil-check mr-1"></i>Sign up on the platform
                  </li>
                  <li className="my-2">
                    <i class="uil uil-check mr-1"></i>Make a Deposit on the
                    platform
                  </li>
                  <li className="my-2">
                    <i class="uil uil-check mr-1"></i>Complete the Profile & KYC
                  </li>
                  <li className="my-2">
                    <i class="uil uil-check mr-1"></i>Complete the Starter board
                  </li>
                </ul>
              </div>
            </div>
            <div  className="row second-row my-3 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center " >
              <div className="col-12 col-sm-12 col-md-5 col-lg-5 mx-sm-1">
                <div className="content ">
                  <h3>
                    Want to be a part of{" "}
                    <h2>
                      <b>TRIO ACE INTERNATIONAL?</b>
                    </h2>{" "}
                  </h3>
                  <ul>
                    <li className="my-2 ">
                      <i class="uil uil-check mr-1"></i>Distribute payment for 4 levels
                    </li>
                    <li className="my-2">
                      <i class="uil uil-check mr-1"></i>Placement of new sign up
                    </li>
                    <li className="my-2">
                      <i class="uil uil-check mr-1"></i>Move the completed accounts to a higher board
                      platform
                    </li>
                    <li className="my-2">
                      <i class="uil uil-check mr-1"></i>Auto fill for 2nd board onwards
                    </li>
                    <li className="my-2">
                      <i class="uil uil-check mr-1"></i>Allocate reborn accounts
                      board
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-5 col-lg-5 mx-1">
                <img src="images/bannerGrp2.svg" alt="work-img" />
              </div>
            </div>
          </div>
        </div>
      {/* <div className="container ">
        <div className="row">
          <div className="col-12">
            <div className="col-3 mx-1"><img src="images/Avast_Antivirus.png" style={{height:"5rem"}} alt="" /></div>
            <div className="col-3 mx-1"></div>
            <div className="col-3 mx-1"></div>
          </div>
          <div className="col-12">
            <div className="col-3 mx-1"><img src="images/logo-design2.png" style={{height:"5rem"}} alt="" /></div>
            <div className="col-3 mx-1"></div>
            <div className="col-3 mx-1"></div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}
