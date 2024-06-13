import React, { useState } from "react";
import "./HomeHeader.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const HomeHeader = () => {
  return (
    <div className="homeHeader">
      <div className="home__headerLogo">
        <div className="headerLogo__img">
          <img src="./img/divers.png" />
        </div>
      </div>
      <div className="homeHeader__paragraph">
        <p>Diver is the best platform for drivers to make their timely and desired trips from  updated customer advertisements.</p>
        <div className="waitlist">
          <Link to="home" className="button">Get started <ArrowForwardIcon style={{ color: "white"}}/></Link>
        </div>
      </div>
      
    </div>
  );
};

export default HomeHeader;
