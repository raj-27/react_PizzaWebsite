import React, { useContext, useEffect, useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";
import { commerce } from "../Commerce";
import { ProductData } from "../ProductData";

let steps = ["Address", "Payment"];

const CheckoutForm = () => {
  let { cart} = useContext(ProductData);
  let [activeStep, setActiveStep] = useState(0);
  let [checkoutToken,setCheckoutToken]=useState(null);
  
  console.log(cart);
  
  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
          setCheckoutToken(token);
          console.log(token);
        } 
        catch {
          // if (activeStep !== steps.length) history.push('/');
          console.log("Error");
        }
      };

      generateToken();
    }
  }, [cart]);

  let Form = () => (activeStep === 0 ? <AddressForm token_id={checkoutToken} /> : <PaymentForm />);

  return (
    <>
      <div className="container mt-5 pt-4">
        <main>
          <Paper className="p-2">
            <h2 className="text-center pt-4">chceckout</h2>
            <Stepper activeStep={activeStep}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : <Form />}
          </Paper>
        </main>
      </div>
    </>
  );
};

export default CheckoutForm;
