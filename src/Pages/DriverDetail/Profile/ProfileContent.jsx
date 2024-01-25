import React, { useContext, useState } from "react";
import TableProfile from "./TableProfile";
import "./Profile.css";
import ProfileAd from "./ProfileAd";
import { AddContext } from "../../../Context/AddContext";
const ProfileContent = () => {
  const {isPopupVisible} = useContext(AddContext)
   const [search, setSearch] = useState("");
  function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
    
    <div className="employee__div">
      <div className="employee__divs">
        <div className="board__header">
          <div className="greetings">Welcome !!! </div>
          <div className="search">
            <div className="label">
              <label htmlFor="search">search</label>
              <input type="text" onChange={handleChange} />
              <img src="./img/Search.png" alt="" />
            </div>
            <img src="./img/Logout.png" alt="" />
          </div>
        </div>
      </div>
      <div className="employees__detail">
        <TableProfile />
        
      </div>
      {isPopupVisible && <div className="profile__Adsss"><ProfileAd/></div>}
     
    </div>
  );
};

export default ProfileContent;
