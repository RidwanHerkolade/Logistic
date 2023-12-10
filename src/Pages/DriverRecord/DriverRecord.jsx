import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
// import LockIcon from "@mui/icons-material/Lock";
// import LoginIcon from "@mui/icons-material/Login";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useForm } from "react-hook-form";
import './DriverRecord.css'
const DriverRecord = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit =(e) => {
    e.prevent.default()
  }
  return (
    <div className="record__divs">
      <div className="h4">Logistics</div>
      <div className="record__div">
        <div className="record__header">Add your Ad</div>
        <form className="form__recorddivs" onSubmit={handleSubmit(onSubmit)}>

           <div className="formdivs__record">

          
          <div className="record__ad">
             <div className="record__inputs">
             <div className="record__input">
                <input
                  type="name"
                  placeholder="First Name"
                  name="firstName"
                  {...register("name", {
                    required: "Please fill out the field",
                  })}
                />
                
              </div>
              <span className="input__icon">
                  <PersonIcon className="iconsize" />
                </span>
                
                
             </div>

             <div className="record__inputs">
                  <div className="record__input">
                  <input
                  type="name"
                  placeholder="Family Name"
                  name="familyName"
                  {...register("familyName", {
                    required: "Please fill out the field",
                  })}
              
                />
                       
                  </div>
                  <span className="input__icon">
                  <PersonIcon className="iconsize" />
                </span>
              </div>

              <div className="record__inputs">
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
                   <span className="input__icon">
                  <MailIcon className="iconsize" />
                </span>
               </div>

               <div className="record__inputs">
              <div className="record__input">
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  {...register("phone", {
                    required: "Please fill out the field",
                  })}
                />
               
              </div>
              <span className="input__icon">
                  <CallIcon className="iconsize" />
                </span>
            </div>
            </div>


          <div className="record__location">
          <div className="record__inputs">
             <div className="record__input" id="order2">
                <input
                  type="name"
                  placeholder="Starting city"
                  name="startingCity"
                  {...register("starting city", {
                    required: "Please fill out the field",
                  })}
                />
                
              </div>
              <span className="input__icon">
                  <LocationOnIcon className="iconsize" />
                </span>
                
                
             </div>

             <div className="record__inputs">
                  <div className="record__input">
                  <input
                  type="text"
                  placeholder="Arrival City"
                  name="arrivalCity"
                  {...register("arrivalCity", {
                    required: "Please fill out the field",
                  })}
                />

                  </div>
                  <span className="input__icon">
                  <LocationOnIcon className="iconsize" />
                </span>
              </div>

              <div className="record__inputs">
              <div className="record__input">
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
