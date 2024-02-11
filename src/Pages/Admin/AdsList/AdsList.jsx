import React, { useContext } from "react";
import AdsLists from "./AdsLists";
import AdsTable from "./AdsTable";
import { AddContext } from "../../../Context/AddContext";
import "./Ads.css";
import AdminContent from "../AdminContent";

const AdsList = () => {
  const {isPopupVisible} = useContext(AddContext)
  return (
    <div style={{position: "relative"}}>
      <AdminContent />
      {isPopupVisible &&
      <div className="ads__modify">
        <div className="ads__modifies">  <AdsLists/></div>
      </div>
      }
      <AdsTable/>

     
    </div>
  );
};

export default AdsList;
