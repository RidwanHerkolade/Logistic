import React from "react";
import { useLocation } from "react-router-dom";

const DriverAd = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};
  

  return (
    <div className="ad__divs">
      <div className="ad__div">
        <p>Driver Ads: </p>
        {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
        <div className="ads__details">
            <div className="ads__content">email: {formData.email}</div>
            <div className="ads__content">full name: {formData.firstName} {formData.lastName}</div>
            <div className="ads__content">to: {formData.initialDestination.value}</div>
            <div className="ads__content">from: {formData.finalDestination.value}</div>
             <div className="ads__content">vehicle type: {formData.vehicle.value}</div>

        </div>
        
        {/* <ul>
          <li>
            full name: {formData.firstName} {formData.lastName}
          </li>

          <li>email: {formData.email}</li>
          <li>phone number: {formData.phone}</li>
          <li>to: {formData.initialDestination}</li>
          <li>from: {formData.finalDestination}</li>
          <li>vehicle type: {formData.vehicle}</li>
        </ul> */}
      </div>
    </div>
  );
};

export default DriverAd;
