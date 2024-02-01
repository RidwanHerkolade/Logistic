import React, { useContext, useState } from "react";
import TableProfile from "./TableProfile";
import "./Profile.css";
import ProfileAd from "./ProfileAd";
import { AddContext } from "../../../Context/AddContext";
import Menu from '@mui/icons-material/Menu';
const ProfileContent = () => {
  const { isPopupVisible, handleChange} = useContext(AddContext);

  return (
    <div className="employee__div">
      <div className="employee__divs">
        <div className="board__header">
          
          <div className="greetings"> <Menu style={{fontSize: "2rem", color: "white"}}/>New Ads </div>
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
      {isPopupVisible && (
        <div className="profile__Adsss">
          <ProfileAd />
        </div>
      )}
    </div>
  );
};

export default ProfileContent;
