import React, { useContext, useEffect, useState } from "react";
import { ProductData } from "../ProductData";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { commerce } from "../Commerce";
import { Link } from "react-router-dom";

const AddressForm = (props) => {
  let [shippingCountries, setShippingCountries] = useState([]);
  let [shippingCountry, setShippingCountry] = useState("");
  let [shippingSubDivisions, setShippingSubdivisons] = useState([]);
  let [shippingSubDivision, setShippingSubdivison] = useState("");
  let [shippingOptions, setShippingOptions] = useState("");
  let [shippingOption, setShippingOption] = useState("");
  const { register, handleSubmit } = useForm();
  let { token_id, next } = props;
  let { cart } = useContext(ProductData);

  let countrys = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  let subdivisions = Object.entries(shippingSubDivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );

  let fetchShippingCountries = async (checkoutTokenID) => {
    let { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenID
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  let fetchSubdivisions = async (token, countrycode) => {
    const { subdivisions } =
      await commerce.services.localeListShippingSubdivisions(
        token,
        countrycode
      );
    setShippingSubdivisons(subdivisions);
    setShippingSubdivison(Object.keys(subdivisions)[0]);
  };

  useEffect(() => {
    token_id && fetchShippingCountries(token_id.id);
  }, []);

  useEffect(() => {
    shippingCountry && fetchSubdivisions(token_id.id, shippingCountry);
  }, [shippingCountry]);

  return (
    <>
      <h4 gutterbottom="true" className="text-center">
        Shipping address
      </h4>
      <FormProvider>
        <form
          onSubmit={handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubDivision,
              product: cart.line_items,
            })
          )}
        >
          <div className="container-flui">
            <div className="row mx-auto d-flex justify-content-center align-items-center ">
              <TextField
                required
                name="firstname"
                {...register("firstname")}
                label="First Name"
                className="col-12 col-sm-5 col-md-5 mx-3 my-2 "
              />
              <TextField
                required
                name="lastname"
                {...register("lastname")}
                label="Last Name"
                className="col-12 col-sm-5 col-md-5 mx-3 my-2 "
              />
              <TextField
                required
                name="email"
                {...register("email")}
                label="Email"
                className="col-12 col-sm-5 col-md-5 mx-3 my-2 "
              />
              <TextField
                required
                name="city"
                {...register("city")}
                label="City"
                className="col-12 col-sm-5 col-md-5 mx-3 my-2 "
              />
              <TextField
                required
                name="address"
                {...register("address")}
                label="Address"
                className="col-12 col-sm-5 col-md-5 mx-3 my-2 "
              />
              <TextField
                required
                name="zip"
                {...register("zip")}
                label="ZIP/Postal code"
                className="col-12 col-sm-5 col-md-5 mx-3 my-2 "
              />

              <Grid
                item
                className="mx-1 col-12 col-sm-5 col-md-5 col-lg-5 my-2"
              >
                <InputLabel>Shipping Country</InputLabel>
                <Select
                  value={shippingCountry}
                  fullWidth
                  onChange={(e) => setShippingCountry(e.target.value)}
                >
                  {countrys.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid
                item
                className="mx-1 col-12 col-sm-5 col-md-5 col-lg-5 my-2"
              >
                <InputLabel>Subdivision</InputLabel>
                <Select
                  value={shippingSubDivision}
                  fullWidth
                  onChange={(e) => setShippingSubdivison(e.target.value)}
                >
                  {subdivisions.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <br />
              <div className="d-flex justofy-content-between">
                <Button
                  component={Link}
                  to="/cart"
                  variant="outlined"
                  className="mx-2 my-3"
                >
                  Cart
                </Button>
                <Button
                  type="submit"
                  className="mx-2 my-3"
                  variant="contained"
                  color="primary"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
