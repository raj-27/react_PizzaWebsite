import React, { useContext, useState } from 'react';
import { ProductData } from '../ProductData';
import { motion } from "framer-motion"

const Product = ({product}) => {

  let {handleAddToCart} = useContext(ProductData);
    

    let [btnDisable,setBtnDisabled]=useState(false)
  
    return (
      <>
         <motion.div whileHover={{scale: 1.03}} className="col-12 col-sm-5 col-md-5 col-lg-3 my-2 px-1">
              <div className="card " style={{ width: "100%" }}>
                <img className="card-img-top" src={product.image.url} height="170" width="200" alt="Card_image" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                      {product.description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                  <button  className="btn btn-secondary" disabled={btnDisable} onClick={()=>{handleAddToCart(product.id,); setBtnDisabled(true) ;setTimeout(()=>{setBtnDisabled(false)},500)}}>
                  <i className="uil uil-shopping-cart-alt mx-1"></i>
                  {btnDisable?"Added":""}
                  </button>
                  <h6>{product.price.formatted_with_symbol}</h6>
                  </div>
                </div>
              </div>

            </motion.div>
      </>
  );
};

export default Product;
