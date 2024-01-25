import React, { useState } from "react";
import TableProfile from "./TableProfile";
import "./Profile.css";

const ProfileContent = () => {
   [search, setSearch] = useState("");
  function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="employee__div">
      <div className="employee__divs">
        <div className="board__header">
          <div className="greetings">EMPLOYEES</div>
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
    </div>
  );
};

export default ProfileContent;
