import React from 'react';

const Banner = () => {
  return (
      <>
      <div className="container-fluid pt-5 mt-2">
          <div className="row mx-auto d-flex justify-content-center align-items-center">
              <div className="col-12 col-sm-5 col-md-5 col-lg-5 banner-img d-flex justify-content-center align-items-center mx-3">
                  <img src="images/bannerImg.png" alt="banner-img" className="img-fluid" />
              </div>
              <div className="col-12 col-sm-5 col-md-5 col-lg-5 banner-text  d-flex  flex-column align-items-center mx-3">
                  <h3><em>Are you hungry?</em></h3>
                  <div><b>Order you favorite Pizaa</b></div>
              </div>
          </div>
      </div>
      </>
  );
};

export default Banner;
