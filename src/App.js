import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import MarketingTools from "./Component/MarketingTools";
import Navbar from "./Component/Navbar";
import PageNotFound from "./Component/PageNotFound";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketing" element={<MarketingTools />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
