import React, { useContext } from "react";
import { ProductData } from "../ProductData";

const CartItem = ({ item }) => {
  let {handleupdatCartQty,removeCartItem}=useContext(ProductData)
  return (
    <>
      <div className="col-12 col-sm-6 col-md-6 col-lg-3 my-2">
        <div className="card " style={{ width: "100%" }}>
          <img
            className="card-img-top img-fluid"
            src={item.image.url}
            alt="Card_image"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center my-1">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text  mx-2">
                {item.line_total.formatted_with_symbol}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center my-1">
              <span>
                <button className="btn" onClick={()=>handleupdatCartQty(item.id,item.quantity-1)}>
                  <b>-</b>
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button className="btn" onClick={()=>handleupdatCartQty(item.id,item.quantity+1)}>
                  <b>+</b>
                </button>
              </span>
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-danger " onClick={()=>removeCartItem(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
