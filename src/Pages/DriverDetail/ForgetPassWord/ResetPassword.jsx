import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "../../../LoadingOverlay/Loading";
import {ToastContainer, toast} from 'react-toastify'

const ResetPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();
  const[isLoading, setIsLoading] = useState(false)
  const location = useLocation();
  const userEmail = location.state?.formData || {};

  
  
  const navigate = useNavigate()

  const onSubmit= async(data)=> {
    try {
      console.log(data)
      console.log(userEmail,'fromreset')
      setIsLoading(true)
      const api = 'https://migro.onrender.com/api/v1/reset-password'
      const result = await axios.post('https://migro.onrender.com/api/v1/reset-password',
      {
        "email":userEmail.email,
        "otp": data?.otp,
        "newPassword": data?.passWord
      },
        {
          headers:{'Content-Type': 'application/json'}
        }
      )
      if(result.status === 200){
        console.log(data)
        toast.success("password reset succefully")
        setTimeout(()=>{
          navigate("/driverform")
          
        },3000)
      }
    } catch (error) {
      toast.error("unable to reset password")
      console.log(error)
    }finally{
      setIsLoading(false)
    }
   
  }

  return (
    <div className="forgetPassWord__div">
       {isLoading && <Loading />}
       <ToastContainer />
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
              maxLength: { value: 7, message: "you exceed the max length" },
              minLength: 6,
              required: "Please enter your new password",
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,7}$/,
                message: "Password must contain at least one digit, and one special character",
              },
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
