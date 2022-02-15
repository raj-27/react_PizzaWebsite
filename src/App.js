import React from "react";
import Navbar from "./Components/Home/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Product/Products";
import Addtocart from "./Components/AddToCart/Addtocart";
import Data from "./Components/Data";
import CheckoutForm from "./Components/Checkout/CheckoutForm";
const App = () => {
  return (
    <>
      <Data>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/cart" element={<Addtocart />} />
            <Route exact path="/checkout" element={<CheckoutForm />} />
          </Routes>
        </Router>
      </Data>
    </>
  );
};

export default App;
