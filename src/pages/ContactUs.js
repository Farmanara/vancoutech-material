import * as React from "react";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <div className="container">
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button href="/">Home</Button>
        <Button href="/services">Services</Button>
        <Button href="/contact-us" variant="contained" color="primary">
          Contact Us
        </Button>
      </ButtonGroup>

      <Link to="/user">Your desired link.</Link>
    </div>
  );
}
