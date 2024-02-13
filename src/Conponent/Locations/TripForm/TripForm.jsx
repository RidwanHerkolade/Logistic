import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SearchIcon from "@mui/icons-material/Search";
import "./TripForm.css";
import Vehicle from "../VehicleAvailable/Vehicle";
import { tripDestination, vehicleType } from "../../../Constants/Constant";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const TripForm = () => {
  const { control, handleSubmit, formState:{errors} } = useForm({});
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/driverform");
  };

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#212529" : "white",
      backgroundColor: state.isSelected ? "rgb(255,224,138)" : "#212529",
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#fffff",
      padding: "0rem",
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "  #14161A" }),
  };

  return (
    <div className="tripform__div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input">
          <div className="input">
          
          <div className="display__loc">
          <LocationOnIcon className="color"/>
         
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
                    noOptionsMessage={() => 'no location found.'}
                    styles={customStyles}
                  />
                )}
               
                defaultValue=""
                rules={{
                  required: "choose your initial destination"
                }}
              />
            </div>
            </div>
            {errors.initialDestination && (<p className="errors_trip">{errors.initialDestination.message}</p>)}
          </div>
        </div>

        <div className="form__input">
          <div className="input">
          <div className="display__loc">
          <LocationOnIcon className="color"/>
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
            {errors.finalDestination && (<p className="errors_trip">{errors.finalDestination.message}</p>)}
          </div>
        </div>

        <div className="form__input">
          <div className="input">
          <div className="display__loc">
          <LocalShippingIcon className="color"/>
            <div className="ss">
              <Controller
                name="vehicle"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={vehicleType}
                    placeholder="type of vehicle....."
                    styles={customStyles}
                  />
                )}
             
                defaultValue=""
                rules={{
                  required: "chooose your type of vehicle"
                }}
              />
            </div>
            </div>
            {errors.vehicle && (<p className="errors_trip">{errors.vehicle.message}</p>)}
          </div>
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
