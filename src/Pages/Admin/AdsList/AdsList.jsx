import React, { useContext } from "react";
// import DriverHead from "../DriverList/DriverHead";
import AdsLists from "./AdsLists";
import AdsTable from "./AdsTable";
import { AddContext } from "../../../Context/AddContext";
import "./Ads.css";
import AdminContent from "../AdminContent";

const AdsList = () => {
  const {isPopupVisible} = useContext(AddContext)
  return (
    <div>
      <AdminContent />
      {isPopupVisible && <AdsLists/>}
      <AdsTable/>

     
    </div>
  );
};

export default AdsList;
