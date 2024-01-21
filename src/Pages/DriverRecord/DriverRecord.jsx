import React from "react";
import "./DriverRecord.css";
import DriverRecordAd from "./DriverRecordAd";


const DriverRecord = () => {

  return (
    <div className="record__divs">
      <div className="record___divs">
      <div className="h4">Logistics</div>
       <div className="record__div">
        <div className="record__header">Add your Ad</div>
        <DriverRecordAd/>
      </div>
      </div>
    </div>
  );
};

export default DriverRecord;
