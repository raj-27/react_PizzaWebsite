import Commerce from "@chec/commerce.js";

export const commerce=new Commerce(process.env.REACT_APP_public_key);

console.log(commerce);