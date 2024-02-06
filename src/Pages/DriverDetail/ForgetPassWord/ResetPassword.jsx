import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate
  const onSubmit= ()=> {
      console.log(data)
      navigate("/driverform")
      
  }

  return (
    <div className="forgetPassWord__div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2
          style={{
            display: "flex",
            color: " rgb(54,54,54)",
            justifyContent: "center",
            fontSize: "1.5rem",
            fontFamily: "Montserrat",
            margin: "2rem 0rem",
            fontWeight: "600",
          }}
        >
          Reset Password
        </h2>
        <label htmlFor="otp" className="fgt__label">
          OTP:
        </label>
        {errors.otp && <p className="errors">{errors.otp.message}</p>}
        <div className="fgtpassword__div">
          <input
            type="text"
            placeholder=""otp
            name="otp"
            {...register("otp", {
              required: "Please enter your otp",
            })}
          />
        </div>
        {errors.passWord && <p className="errors">{errors.passWord.message}</p>}
        <label htmlFor="password" className="fgt__label">
          New Password:
        </label>
        <div className="fgtpassword__div">
          <input
            type="password"
            placeholder="Password"
            name="passWord"
            {...register("passWord", {
              required: "Please enter your new password",
            })}
          />
        </div>

        <div style={{ margin: "1rem 0rem" }}>
          {errors.confirmPassword && (
            <p className="errors">{errors.confirmPassword.message}</p>
          )}
          <label htmlFor="password" className="fgt__label">
            New Password:
          </label>
          <div className="fgtpassword__div">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: "Please fill out the field",
                validate: (value) => {
                  if (value !== watch("passWord")) {
                    return "Your passwords do not match";
                  }
                },
              })}
            />
          </div>
        </div>
        <button className="fgt__submit" type="submit">submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;
