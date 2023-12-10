import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SearchIcon from "@mui/icons-material/Search";
import ErrorIcon from "@mui/icons-material/Error";
import "./TripForm.css";
import Vehicle from "../VehicleAvailable/Vehicle";
import { useForm } from "react-hook-form";

const TripForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    
  };
  return (
    <div className="tripform__div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__inputs">
          <div className="form__input">
            {/* <span className='input__icon'><LocationOnIcon className='iconsize'/></span> */}
            <div className="input">
              <input
                type="text"
                placeholder="to"
                name="finalDestination"
                {...register("finalDestination", {
                  required: "Please fill out the field",
                })}
              />
            </div>
            <span className="input__icon">
              <LocationOnIcon className="iconsize" />
            </span>
            <div className="error__edge"></div>
            {errors.finalDestination && (
              <p className="errors">
                <ErrorIcon className="error__icon" />
                {errors.finalDestination.message}
              </p>
            )}
          </div>
        </div>
        <div className="form__input">
          <div className="input">
            <input
              type="text"
              placeholder="from"
              name="aboutDestination"
              {...register("about destination", {
                required: "Please fill out the field",
              })}
            />
          </div>
          <span className="input__icon">
            <LocationOnIcon className="iconsize" />
          </span>
          {errors.locationDestination && (
            <p className="errors">
              <ErrorIcon className="error__icon" />
              {errors.locationDestination.message}
            </p>
          )}
        </div>
        <div className="form__input">
          <div className="input">
            <input
              type="text"
              placeholder="the type of vehicle"
              name="vehicle"
              {...register("vehicle", {
                required: "Please fill out the field",
              })}
            />
          </div>
          <span className="input__icon">
            <LocalShippingIcon className="iconsize" />
          </span>
          {/* {errors.vehicle && <p className='errors'>{errors.vehicle.message}</p>} */}
        </div>
        <div className="form__input">
          <button type="submit">Search</button>
          <span className="input__icon">
            <SearchIcon className="iconsearch" />
          </span>
        </div>
      </form>

      <Vehicle />
    </div>
  );
};

export default TripForm;
