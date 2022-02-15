import React from 'react';
import { Link } from "react-router-dom";
import '../Component css/Emptypage.css'

const EmptyPage = () => {
  return (
      <>
        <div className="container-fluid  d-flex justify-content-center align-items-center empty-page">
            <div className="row d-flex flex-column justify-content-center align-items-center">
                <h1>Your cart is empty</h1>
                <Link className="link" to="/">Go to Homepage to add Item</Link>
            </div>
        </div>
      </>
  );
};

export default EmptyPage;
