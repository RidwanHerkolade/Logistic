import React, { useContext } from "react";
import "./DriverRecord.css";
import DriverRecordAd from "./DriverRecordAd";
import SuccessPage from "./SuccessPage";
import { AddContext } from "../../Context/AddContext";



const DriverRecord = () => {
 const{isShow} = useContext(AddContext)

  return (
    <div className="record__divs">
      <div className="record___divs">
      {isShow &&<div className="record__success"><SuccessPage/> </div>}
       <div className="record__div">
        <div className="record__header">Add your Ad</div>
        
         <DriverRecordAd/>
      </div>
      </div>
    </div>
  );
};

export default DriverRecord;
