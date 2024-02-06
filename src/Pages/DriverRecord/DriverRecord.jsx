import React, { useContext } from "react";
import "./DriverRecord.css";
import DriverRecordAd from "./DriverRecordAd";
import SuccessPage from "./SuccessPage";
import ErrorPage from "./ErrorPage";
import { AddContext } from "../../Context/AddContext";

const DriverRecord = () => {
  const { submissionSuccessful, submissionError } = useContext(AddContext);

  return (
    <div className="record__divs">
      <div className="driverrecord-divss">
      {submissionError && !submissionSuccessful && (
          <div className="record__success">
            <ErrorPage />
          </div>
        )}
      {submissionSuccessful && !submissionError && <div className="record__success"><SuccessPage/> </div>}
       <div className="driverrecordform__div">
        <div className="record__header">Add your Ad</div>

         <DriverRecordAd/>
      </div>
      </div>
    </div>
  );
};

export default DriverRecord;
