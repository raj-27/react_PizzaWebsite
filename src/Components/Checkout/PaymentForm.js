import React, { useContext } from "react";
import { Button, Divider } from "@material-ui/core";

import Review from "./Review";
import { ProductData } from "../ProductData";


const PaymentForm = ({ token_id, backStep, nextStep }) => {
  let { refreshCart,orderDetail,setOrderDetail} = useContext(ProductData);
  let proceed = async (e)=>{ 
    nextStep()
    refreshCart()
    setOrderDetail(orderDetail)
  }
  

  
  return (
    <>
      <Review token_id={token_id} />
      <Divider />
      <div className="d-flex justify-content-between mt-2">
        <Button variant="outlined" onClick={backStep}>
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary" onClick={proceed}>
          Proceed
        </Button>
      </div>
     
    </>
  );
};

export default PaymentForm;
