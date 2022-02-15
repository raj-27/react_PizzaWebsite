import React, { useContext } from "react";
import { Link } from "react-router-dom";
import EmptyPage from "../EmptyPage";
import { ProductData } from "../ProductData";
import CartItem from "./CartItem";
const Addtocart = () => {
  let { cart, handleEmptyCart } = useContext(ProductData);
  return (
    <>
      {cart.total_items ? (
        <>
          <div className="container mt-4 pt-4">
            <h1 className="text-center pt-4">Your shopping cart</h1>
            <div className="row py-2 mx-auto ">
              {cart.line_items &&
                cart.line_items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
            </div>
          </div>
          <div className="container">
            <div className="row mx-auto justify-content-center align-items-center">
              <div className="col-12 col-sm-5 col-md-5 col-5">
                <h5>
                  Total : <b>{cart.subtotal.formatted_with_symbol}</b>
                </h5>
              </div>
              <div className="col-12 col-sm-5 col-md-5 col-5 d-flex justify-content-center align-item-center my-2">
                <button
                  className="btn btn-danger mx-2"
                  onClick={(e) => {
                    handleEmptyCart();
                  }}
                >
                  Empty cart
                </button>
                <Link to="/checkout">
                  <button className="btn btn-warning mx-2">Checkout out</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <EmptyPage />
      )}
    </>
  );
};

export default Addtocart;
