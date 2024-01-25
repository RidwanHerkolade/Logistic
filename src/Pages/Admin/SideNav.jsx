import React, { useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "./Admin.css";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState("driverlist");
  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  return (
    <aside className="aside">
      <nav className="aside__navs">
        <div className="nav__logo">
          <div className="logo__icon">
            <LocalShippingIcon className="icons" />
          </div>
          <span>MigRo</span>
        </div>
        <ul className="aside__links">
          <Link
            to="driverlist"
            className={`li ${selectedLink === "driverlist" ? "selected" : ""}`}
            onClick={() => handleLinkClick("driverlist")}
          >
            Driver
          </Link>
          <Link
            to="adslist"
            className={`li ${selectedLink === "adslist" ? "selected" : ""}`}
            onClick={() => handleLinkClick("adslist")}
          >
            Ads
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
