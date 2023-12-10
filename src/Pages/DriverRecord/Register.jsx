import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
// import LoginIcon from "@mui/icons-material/Login";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit =(e) => {
    e.prevent.default()
  }
 
  const navigate = useNavigate()
  const handleSignIn = () => {
      navigate('/driverform')
        
  }

  return (
    
    <div className="record__divs">
      <div className="h4">Logistics</div>
      <div className="record__div">
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
            </div>

            <div className="record__location">
              <div className="record__inputs">
                <div className="record__input">
                  <input
                    type="tel"
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

              <div className="record__inputs">
                <div className="record__input">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    {...register("password", {
                      required: "Please fill out the field",
                    })}
                  />
                </div>
                <span className="input__icon">
                  <LockIcon className="iconsize" />
                </span>
              </div>

              <div className="record__inputs">
                <div className="record__input">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    {...register("confirmPassword", {
                      required: "Please fill out the field",
                      validate: (value) => {
                          if (value !== watch('passWord')) {
                            return "Your passwords do not match";
                          }
                      }
                    
                    })}
                    
                  />
                </div>
                <span className="input__icon">
                  <LockIcon className="iconsize" />
                </span>
              </div>
            </div>
          </div>
          <div className="record__btn">
            <button type="submit">Register with us</button>
          </div>
          <small>Or</small>
          <div className="register__btn" onClick={handleSignIn}>Sign in</div>
        </form>
      </div>
    </div>
  )
}
export default Register

