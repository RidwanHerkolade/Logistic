import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import ErrorIcon from "@mui/icons-material/Error";
import "./DriverForm.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const DriverForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="driverform__divs">
      <div className="driverform__grid">
        <div className="driverform__images">
          <div className="form__images">
            <img src="../images/color.png" />
          </div>
          <span>MigRo</span>
        </div>
        <form className="form__group" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__content ">
            <h3>the driver</h3>
            <div className="driver__forminput">
              <div className="input">
                <input
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  {...register("email", {
                    required: "Please fill out the field",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
              </div>
              <span className="input__icon">
                <MailIcon className="iconsize" />
              </span>
              {errors.email && (
                <p className="errors">
                  <ErrorIcon className="error__icon" />
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="driver__forminput">
              <div className="input">
                <input
                  type="password"
                  placeholder="password"
                  name="passWord"
                  {...register("passWord", {
                    required: "Please fill out the field",
                  })}
                />
              </div>
              <span className="input__icon">
                <LockIcon className="iconsize" />
              </span>
            </div>
            <div className="driver__forminput">
              <button type="submit">sign in</button>
              <span className="input__icons">
                <LoginIcon className="iconsearch" />
              </span>
            </div>
            <div className="div">
              <small>Or</small>
              <div className="register" onClick={handleRegister}>
                Register with us
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default DriverForm;
