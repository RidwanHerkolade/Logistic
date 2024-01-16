import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useForm, Controller } from "react-hook-form";
import { tripDestination } from "../../Constants/Constant";
import ErrorIcon from "@mui/icons-material/Error";
import Select from "react-select";
import { vehicleType } from "../../Constants/Constant";
import "./DriverRecord.css";
import { useNavigate } from "react-router-dom";

const DriverRecord = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const navigate = useNavigate();

  const onSubmit  =  (data) => {
    navigate("/driverad", { state: { formData: data } });
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
      color: "rgb(219,219,219)",
      // textTransform: "upperCase",
      padding: "0rem",
      border: "0rem",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: " #14161A" }),
  };
  return (
    <div className="record__divs">
      <div className="record___divs">
      <div className="h4">Logistics</div>
      <div className="record__div">
        <div className="record__header">Add your Ad</div>
        <form className="form__recorddivs" onSubmit={handleSubmit(onSubmit)}>
          <div className="formdivs__record">
            <div className="record__ad">
            <div className="record__inputs">
                <div className="record__divInp">
                
                <PersonIcon className="iconsize" />
                <div className="record__input">
                  <input
                    type="name"
                    placeholder="First Name"
                    name="firstName"
                    {...register("firstName", {
                      required: "Please fill out the field",
                    })}
                  />
                </div>
              
                </div>
                {errors.firstName && (
                  <p className="errors">
                    <ErrorIcon className="error__icon" />
                    {errors.firstName.message}
                  </p>
                )}
                
              </div>

              <div className="record__inputs">
              <div className="record__divInp">
                <PersonIcon className="iconsize" />
                <div className="record__input">
                  <input
                    type="name"
                    placeholder="last Name"
                    name="lastName"
                    {...register("lastName", {
                      required: "Please fill out the field",
                    })}
                  />
                </div>
              </div>
                {errors.lastName && (
                  <p className="errors">
                    <ErrorIcon className="error__icon" />
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div className="record__inputs">
               <div className="record__divInp">
                <MailIcon className="iconsize" />
                <div className="record__input">
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    {...register("email", {
                      required: "Please fill out the field",
                    })}
                  />
                </div>
               
              </div>
              {errors.lastName && (
                  <p className="errors">
                    <ErrorIcon className="error__icon" />
                    {errors.lastName.message}
                  </p>
                )}
             
              </div>

            
            </div>

            <div className="record__location">
              <div className="record__inputs">
              <div className="record__divInp">
                <LocationOnIcon className="iconloc" />
                <div className="record__input" id="order2">
                  <div className="ss">
                    <Controller
                      name="initialDestination"
                      control={control}
                      render={({ field }) => (
                        <Select
                          className="select"
                          {...field}
                          options={tripDestination}
                          placeholder="To"
                          isSearchable
                          noOptionsMessage={() => "no location found"}
                          styles={customStyles}
                        />
                      )}
                      defaultValue=""
                      rules={{
                        required: "please select",
                      }}
                    />
                  </div>
                </div>
                </div>
                {errors.initialDestination && (
                  <p className="errors">
                    <ErrorIcon className="error__icon" />
                    {errors.initialDestination.message}
                  </p>
                )}
              </div>

              <div className="record__inputs">
              <div className="record__divInp">
                <LocationOnIcon className="iconloc" />
                <div className="record__input">
                  <div className="ss">
                    <Controller
                      name="finalDestination"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={tripDestination}
                          placeholder="From"
                          // name="finalDestination"
                          isSearchable
                          noOptionsMessage={() => "no location found"}
                          styles={customStyles}
                        />
                      )}
                      defaultValue=""
                      rules={{
                        required: "please select",
                      }}
                    />
                  </div>
                </div>
              </div>
              {errors.finalDestination && (
                  <p className="errors">
                    <ErrorIcon className="error__icon" />
                    {errors.finalDestination.message}
                  </p>
                )}
              </div>
              <div className="record__inputs">
              <div className="record__divInp">
                <LocalShippingIcon className="iconloc" />
                <div className="record__input">
                  <div className="ss">
                    <Controller
                      name="vehicle"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={vehicleType}
                          placeholder="Type of vehicle"
                          // name="vehicle"
                          isSearchable
                          noOptionsMessage={() => "no location found"}
                          styles={customStyles}
                        />
                      )}
                      defaultValue=""
                      rules={{
                        required: "please select",
                      }}
                    />
                  </div>
                </div>
              </div>
              {errors.vehicle && (
                  <p className="errors">
                    <ErrorIcon className="error__icon" />
                    {errors.vehicle.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="record__btn">
            <button type="submit">Submit an ad</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default DriverRecord;
