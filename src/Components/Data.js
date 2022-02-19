import React, { useEffect, useState } from "react";
import { ProductData } from "../Components/ProductData";
import { commerce } from "./Commerce";
const Data = (props) => {
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState({});

 

  let fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  let fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  let handleAddToCart = async (productId, quantity) => {
    let { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  let handleupdatCartQty = async (productId, quantity) => {
    let { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  let removeCartItem = async (productId) => {
    let { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  let handleEmptyCart = async () => {
    let { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <>
      <ProductData.Provider
        value={{
          products,
          handleAddToCart,
          cart,
          handleEmptyCart,
          handleupdatCartQty,
          removeCartItem,
          refreshCart,
         
        }}
      >
        {props.children}
      </ProductData.Provider>
    </>
  );
};

export default Data;
