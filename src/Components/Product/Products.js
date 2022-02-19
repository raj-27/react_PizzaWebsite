import React, { useContext } from "react";
import Banner from "../Home/Banner";
import { ProductData } from "../ProductData";
import Product from "./Product";
const Products = () => {
  let { products } = useContext(ProductData);
  return (
    <>
    <Banner/>
      <div className="container mt-3 ">
        <div className="row  mx-auto  justify-content-center align-items-center">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
