import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
// import LockIcon from "@mui/icons-material/Lock";
// import LoginIcon from "@mui/icons-material/Login";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useForm, Controller } from "react-hook-form";
import { tripDestination } from "../../Constants/Constant";
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

  const onSubmit = (data) => {
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
      padding: "0rem",
      border: "0rem",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: " #14161A" }),
  };
  return (
    <div className="record__divs">
      <div className="h4">Logistics</div>
      <div className="record__div">
        <div className="record__header">Add your Ad</div>
        <form className="form__recorddivs" onSubmit={handleSubmit(onSubmit)}>
          <div className="formdivs__record">
            <div className="record__ad">
              <div className="record__inputs">
                <PersonIcon className="iconsize" />
                <div className="record__input">
                  <input
                    type="name"
                    placeholder="First Name"
                    // className=""
                    name="firstName"
                    {...register("firstName", {
                      required: "Please fill out the field",
                    })}
                  />
                </div>
              </div>

              <div className="record__inputs">
                <PersonIcon className="iconsize" />
                <div className="record__input">
                  <input
                    type="name"
                    placeholder="Last Name"
                    name="lastName"
                    {...register("lastName", {
                      required: "Please fill out the field",
                    })}
                  />
                </div>
              </div>

              <div className="record__inputs">
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

            
            </div>

            <div className="record__location">
              <div className="record__inputs">
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
                        required: "chooose your initial destination",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="record__inputs">
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
                        required: "chooose your initial destination",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="record__inputs">
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
                        required: "chooose your initial destination",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="record__btn">
            <button type="submit">Submit an ad</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DriverRecord;
