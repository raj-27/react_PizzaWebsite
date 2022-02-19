import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
const Confirmation = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Your Order is confirmed !!
      </motion.h2>
      <Button variant="contained" component={Link} to="/">
        Go to Home Page
      </Button>
    </>
  );
};

export default Confirmation;
