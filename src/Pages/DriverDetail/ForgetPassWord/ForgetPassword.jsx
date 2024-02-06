import React from "react";
import "./ForgetPassWord.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()
  const onSubmit = (data) => {
      console.log(data)
      navigate("/driverform/forgetpassword/resetpassword")
      
  }
  return (
    <div className="forgetPassWord__div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 style={{ display: "flex", color: " rgb(54,54,54)", justifyContent: "center", fontSize: "1.5rem", fontFamily: "Montserrat", margin: "2rem 0rem", fontWeight: "600"}}>Forget Password</h2>
        {errors.email && (
          <p className="errors">
            {/* <ErrorIcon className="error__icon" /> */}
            {errors.email.message}
          </p>
        )}
        <label htmlFor="email" className="fgt__label">
          Email:
        </label>
        <div className="fgtpassword__div">
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
        </div>
        <button className="fgt__submit" type="submit">submit</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
