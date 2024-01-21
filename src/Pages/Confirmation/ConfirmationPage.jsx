import React,{useEffect} from "react";
import "./confirmation.css";
import EmailIcon from "@mui/icons-material/Email";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ConfirmationPage = () => {
  // React hook form validation
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const emailParam = queryParams.get("email");

  useEffect(() => {
  }, [emailParam]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://truckapp-main-production.up.railway.app/api/v1/verify-otp", {
        email: emailParam,
        otp: data.confirm,
      });
      console.log("OTP registration successfull:", response.data)
     
    } catch (error) {
      console.error("Error during OTP verification:", error.message);
    }
  };

  return (
    <div className="confirm__div">
      <div className="confirm__divs">
        <div className="verify__icon">
          <EmailIcon className="verify__icons" />
        </div>
        <h1>Email verification</h1>
        <div className="confirm__content">
          enter the 4 digit code we sent to your <span>{emailParam}</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="confirm__form">
          <div className="confirm__input">
            <input
              type="text"
              placeholder=""
              name="confirm"
              {...register("confirm", {
                required: "Please fill out the field",
              })}
            />
          </div>
          {errors.confirm && <p className="errors">{errors.confirm.message}</p>}
          <div className="btnss">
            <button type="submit">Verify</button>
          </div>
          <small><span>resend</span> the otp code</small>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationPage;
