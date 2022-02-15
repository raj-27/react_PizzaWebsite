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
import FormInput from "../Checkout/TextField";

const AddressForm = (props) => {
  let [shippingCountries, setShippingCountries] = useState([]);
  let [shippingCountry, setShippingCountry] = useState("");
  let [shippingSubDivisions, setShippingSubdivisons] = useState([]);
  let [shippingSubDivision, setShippingSubdivison] = useState("");
  let [shippingOptions, setShippingOptions] = useState("");
  let [shippingOption, setShippingOption] = useState("");
  const methods = useForm();
  let { token_id } = props;

  let countrys = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  console.log(countrys);

  let subdivisions = Object.entries(shippingSubDivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );
  // let options = shippingOptions.map((so) => ({
  //   id: so.id,
  //   label: `${so.description}- ((${so.price.formatted_with_symbol}))`,
  // }));

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

  let fetchShippingOptions = async (checkoutToken, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutToken, {
      country,
      region: region,
    });
    console.log(options);
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    token_id && fetchShippingCountries(token_id.id);
  }, []);

  useEffect(() => {
    shippingCountry && fetchSubdivisions(token_id.id, shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    shippingSubDivision &&
      token_id &&
      fetchShippingOptions(token_id.id, shippingCountry, shippingSubDivision);
  }, [shippingSubDivision]);

  return (
    <>
      <h4 gutterbottom="true" className="text-center">
        Shipping address
      </h4>
      <FormProvider {...methods}>
        <form>
          <div className="container-flui">
            <div className="row mx-auto d-flex justify-content-center align-items-center ">
              <TextField
                required
                name="firstname"
                label="First Name"
                className="col-12 col-sm-5 col-md-5 mx-3 my-2 "
              />
              <TextField
                required
                name="lastname"
                label="Last Name"
                className="col-12 col-sm-5 col-md-5 mx-3 my-2 "
              />
              <TextField
                required
                name="email"
                label="Email"
                className="col-12 col-sm-5 col-md-5 mx-3 my-2 "
              />
              <TextField
                required
                name="city"
                label="City"
                className="col-12 col-sm-5 col-md-5 mx-3 my-2 "
              />
              <TextField
                required
                name="address"
                label="Address"
                className="col-12 col-sm-5 col-md-5 mx-3 my-2 "
              />
              <TextField
                required
                name="zip"
                label="ZIP/Postal code"
                className="col-12 col-sm-5 col-md-5 mx-3 my-2 "
              />

              <Grid item xs={12} sm={6} className="mx-1 col-12 col-sm-5 col-md-5 col-lg-5 my-2">
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
                xs={12}
                sm={6}
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

              {/* <Grid
                item
                xs={12}
                sm={6}
                className="mx-1 col-12 col-sm-6 col-md-6 col-lg-5 my-2"
              >
                <InputLabel>Shipping Option</InputLabel>
                <Select
                  value={shippingOption}
                  fullWidth
                  onChange={(e) => setShippingSubdivison(e.target.value)}
                >
                  {options.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid> */}
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
