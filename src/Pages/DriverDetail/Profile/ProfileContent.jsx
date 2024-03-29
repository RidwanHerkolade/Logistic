import React, { useContext, useState } from "react";
import TableProfile from "./TableProfile";
import "./Profile.css";
import ProfileAd from "./ProfileAd";
import { AddContext } from "../../../Context/AddContext";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
const ProfileContent = () => {
  const { isPopupVisible, handleChange, handleClick, mobile } =
    useContext(AddContext);

  return (
    <div className="employee__div">
      <div className="employee__divs">
        <div className="board__header">
          <div className="greetings">
            {" "}
            {mobile ? (
              <Close
                style={{ fontSize: "2rem", color: "white" }}
                onClick={handleClick}
                className="menus"
              />
            ) : (
              <Menu
                style={{ fontSize: "2rem", color: "white" }}
                onClick={handleClick}
                className="menus"
              />
            )}
            New Ads{" "}
          </div>
          <div className="search">
            <div className="label">
              <input type="text" onChange={handleChange} placeholder="search" />
              <img src="./img/Search.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="employees__detail">
        <TableProfile />
      </div>
      {isPopupVisible &&
      <div className="ads__modify">
        <div className="ads__modifies"><ProfileAd /></div>
      </div>
       }
    </div>
 
  );
};

export default ProfileContent;
