import React, { useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HouseIcon from "@mui/icons-material/House";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Home from "../../Pages/Homepage/Home";
import "./Nav.css";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const handleMobile = () => {
    setMobile(false);
  };
  const handleClick = () => {
    setMobile(!mobile);
  };

  return (
    <div className="nav__div">
      <nav className="nav">
        <div className="nav__contents">
          <div className="nav__content">
            <div className="nav__logo">
              <div className="logo__icon">
                <LocalShippingIcon className="icons" />
              </div>
              <span>MigRo</span>
            </div>
          </div>
          <div
            className={mobile ? "nav__link-mobile" : "nav__link"}
            // onClick={handleClick}
          >
            <Link to="/" className="homepage__link">
              <HouseIcon className="icon" />
              <span>Homepage</span>
            </Link>
            <div className="nav__links">
              <Link to="announcement" className="links" id="announcement">
                Driver advertisements
              </Link>
              <Link to="announcement" className=" links" id="announcement">
                Visitor announcements
              </Link>
              <div className="linkss">
                <Link to="driverrecord" className="drive__ad">
                  Add your ad
                </Link>
                <Link to="driverform" className="drive__logins">
                  Drivers login{" "}
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
