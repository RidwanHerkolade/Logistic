import React,{useEffect, useState} from "react";
import "./confirmation.css";
import EmailIcon from "@mui/icons-material/Email";
import { useForm } from "react-hook-form";
import { useLocation, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import Loading from "../../LoadingOverlay/Loading";

const ConfirmationPage = () => {

  const navigate = useNavigate()
  // React hook form validation
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const [otploading, setOtpLoadin] = useState()

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const emailParam = queryParams.get("email");


  useEffect(() => {
    
  }, [emailParam]);

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      console.log("otp here",data)
      const response = await axios.post(`https://migro.onrender.com/api/v1/otp/verify-otp?email=${emailParam}&otp=${data.confirm}`,
      {
        headers:{
          'Content-Type':'application/json'
        }
      });
      console.log("OTP registration successfull:", response.data)
      navigate('/driverform')

    } catch (error) {
      console.error("Error during OTP verification:", error.message);
    }finally{
      setLoading(false)
    }
  };

  const resendOtp = async () => {
    try {
      
      setOtpLoadin('otp will be sent to your email');
      const api = `https://migro.onrender.com/api/v1/otp/resend-otp?email=${emailParam}`;
      const result = await axios.post(api);
  
      if (result.status === 200) {
        setOtpLoadin("sent success")
        console.log("Resent successfully");
      }
    } catch (error) {
      console.error("Error during OTP resend:", error.message);
    } finally {
      setTimeout(()=>{
        setOtpLoadin('');

      }, 3000)
    }
  };
  
  return (
    <div className="confirm__div">
      <div className="confirm__divs">
        <div className="verify__icon">
        {loading && <Loading/>}
          <EmailIcon className="verify__icons" style={{fontSize: "3rem"}}  />
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
                required: "Please fill in the field",
              })}
            />
          </div>
          {errors.confirm && <p className="errors">{errors.confirm.message}</p>}
          <div className="btnss">
            <button type="submit">Verify</button>
          </div>
          <small><span onClick={resendOtp}>resend</span> the otp code</small>
          {otploading}
        </form>
      </div>
    </div>
  );
};
export default ConfirmationPage;
