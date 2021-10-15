import { Link } from "react-router-dom";

import * as React from "react";
import Button from "@mui/material/Button";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import SectionCard from "../components/SectionCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ButtonGroup, CardActionArea, CardActions } from "@mui/material";
import contentmarketing from "../contentmarketing.jpg";
import "../App.css";
// import webdesign from "webdesign.jpg";

export default function HomePage() {
  return (
    <div className="container">
      <div className="navbar">
        <ButtonGroup
          id="button_group"
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button href="#" variant="contained" color="primary">
            Home
          </Button>
          <Button href="/services" variant="contained" color="secondary">
            Services
          </Button>
          <Button href="/contact-us" variant="contained" color="secondary">
            Contact Us
          </Button>
        </ButtonGroup>
      </div>

      <SectionCard
        className="item"
        title="Web Design"
        text="We do Web design!"
        img_link={contentmarketing}
        btn_text="Read More"
        btn_href="#"
      />
      <SectionCard
        className="item"
        title="Content Marketing"
        text="We do Content Marketing!"
        img_link={contentmarketing}
        btn_text="Read More"
        btn_href="#"
      />
      <SectionCard
        className="item"
        title="WordPress Development"
        text="We do WordPress Development!"
        img_link={contentmarketing}
        btn_text="Read More"
        btn_href="#"
      />
      <div className="section" id="about-us"></div>
      <div className="section" id="contact-us">
        Contact Us
        <div>Info</div>
        <form></form>
      </div>

      <Link to="/user">Your desired link.</Link>
    </div>
  );
}
