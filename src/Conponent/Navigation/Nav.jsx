import React, { useContext, useState, useEffect } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HouseIcon from "@mui/icons-material/House";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
// import Home from "../../Pages/Homepage/Home";
import "./Nav.css";
import { AddContext } from "../../Context/AddContext";

const Nav = () => {
  const {mobile, handleNavClick, handleMobile, handleClick,loggedIn,handleLoggedIn} = useContext(AddContext)
  useEffect(() => {
    const storedLoggedIn = sessionStorage.getItem("userData");

    if (storedLoggedIn !== null) {
      handleLoggedIn()
    }
  }, []);

 
  return (
    <div className="nav__div">
      <nav className="nav">
        <div className="nav__contents">
          <div className="nav__content">
            <div className="nav__logo">
              <div className="logo__icon">
                <LocalShippingIcon className="icons" />
              </div>
              <span>Diver</span>
            </div>
          </div>
          <div
            className={mobile ? "nav__link-mobile" : "nav__link" }
            // onClick={handleClick}
          >
            <Link to="home" className="homepage__link" onClick={handleNavClick}>
              <HouseIcon className="icon" />
              <span>Homepage</span>
            </Link>
            <div className="nav__links">
              <Link to="announcement" className="links" id="announcement" onClick={handleNavClick}>
                Driver advertisements
              </Link>
              <Link to="announcememnt" className=" links" id="announcement">
                Visitor announcements
              </Link>
              <div className="linkss">
                <Link to="driverrecord" className="drive__ad" onClick={handleNavClick} >
                  Add your ad
                </Link>
                <Link to="driverform" className="drive__logins" onClick={handleNavClick}>
                  {loggedIn? "view profile":"Driver Login"}
                </Link>
              </div>
            </div>
          </div>

          <div className="menu" onClick={handleClick}>
            {mobile ? (
              <CloseIcon style={{ color: "white" }} onClick={handleMobile} />
            ) : (
              <MenuIcon style={{ color: "white" }} onClick={handleMobile} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
