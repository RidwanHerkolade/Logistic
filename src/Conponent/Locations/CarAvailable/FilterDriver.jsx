import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ErrorIcon from "@mui/icons-material/Error";
import { tripDestination, vehicleType } from "../../../Constants/Constant";
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';

const FilterDriver = () => {
  const { control, handleSubmit, formState:{errors} } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
  };
  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      // color: state.isSelected ? "#212529" : "#fff",
      // backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      // rgb(230,156,49)
      // backgroundColor: "#212529",
      color: "rgb(219,219,219)",
      padding: "0",
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };
  return (
    <div className="driverform__div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input">
          <span className="input__icon">
            <LocationOnIcon className="iconsize" />
          </span>
          <div className="input">
          <div className="display__loc">
          <LocalShippingIcon className="color"/>
            <div className="ss">
            <Controller
                name="initialDestination"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={tripDestination}
                    placeholder="to"
                    isSearchable
                    noOptionsMessage={() => 'no location found'}
                    styles={customStyles}
                  />
                )}
               
                defaultValue=""
                rules={{
                  required: "chooose your initial destination"
                }}
              />
              
            </div>
            </div>
            {errors.initialDestination && (<p className="errors">{errors.initialDestination.message}</p>)}
            {/* <input
              type="text"
              placeholder="to"
              name="finalDestination"
              {...register("finalDestination", {
                required: "Please fill out the field",
              })}
            /> */}
          </div>
          {/* <span className="input__icon">
            <LocationOnIcon className="iconsize" />
          </span> */}
          {/* <div className="error__edge"></div> */}
          {/* {errors.finalDestination && (
            <p className="errors">
              <ErrorIcon className="error__icon" />
              {errors.finalDestination.message}
            </p>
          )} */}
        </div>
        <div className="form__input">
          <div className="input">
          <div className="display__loc">
          <LocalShippingIcon className="color"/>
            <div className="ss">
            <Controller
                name="finalDestination"
                 control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={tripDestination}
                    placeholder="from"
                    isSearchable
                    noOptionsMessage={() => 'no location found'}
                    styles={customStyles}
                  />
                )}
                // control={control}
                defaultValue=""
                rules={{
                  required: "chooose your final destination"
                }}
              />
            </div>
            </div>
            {errors.finalDestination && (<p className="errors">{errors.finalDestination.message}</p>)}
            {/* <input
              type="text"
              placeholder="from"
              name="aboutDestination"
              {...register("about destination", {
                required: "Please fill out the field",
              })}
            /> */}
          </div>
          {/* <span className="input__icon">
            <LocationOnIcon className="iconsize" />
          </span> */}
          {/* {errors.locationDestination && (
            <p className="errors">
              <ErrorIcon className="error__icon" />
              {errors.locationDestination.message}
            </p>
          )} */}
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
