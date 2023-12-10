import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ErrorIcon from "@mui/icons-material/Error";
import { useForm } from "react-hook-form";

const FilterDriver = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log(data);
  };
  return (
    <div className="driverform__div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input">
          <span className="input__icon">
            <LocationOnIcon className="iconsize" />
          </span>
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
          <button type="submit">Filter</button>
          <span className="input__icon">
            <FilterAltIcon className="iconsearch" />
          </span>
        </div>
      </form>
    </div>
  );
};

export default FilterDriver;
