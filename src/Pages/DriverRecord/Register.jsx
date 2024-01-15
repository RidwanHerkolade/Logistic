import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import ErrorIcon from "@mui/icons-material/Error";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import LinearProgress from '@mui/material/LinearProgress';
import axios from "axios";
// import ConfirmationPage from "../Confirmation/ConfirmationPage";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const onSubmit = async (data) => {
    // setIsLoading(true);

    try {
      const registerUrl =
        "https://truckapp-main-production.up.railway.app/v1/register";
      const response = await axios.post(registerUrl, data);

      //  successfull response
      const responseData = response.data;
      console.log("Form submission successful:", responseData);
      navigate("/driverform");

      
    

    } catch (error) {
      console.error("Error submitting form:", error.message);
    } finally {
      // setIsLoading(false);
    }
  };
  // const onSubmit =  (data) => {
  //     navigate('/ConfirmationPage')
  // }
 
  // const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("");
  };

  return (
    <div className="record__divs">
      <div className="h4">Logistics</div>
      <div className="record__div">
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
             
              </div>
              {errors.email && (
                <p className="errors">
                  <ErrorIcon className="error__icon" />
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="record__location">
              <div className="record__inputs">
                <div className="record__divInp">
                <CallIcon className="iconsize" />
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
                </div>
                {errors.phone && (
                  <p className="errors">
                    <ErrorIcon className="error__icon" />
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="record__inputs">
              <div className="record__divInp">
                <LockIcon className="iconsize" />
                <div className="record__input">
                  <input
                    type="password"
                    placeholder="Password"
                    name="passWord"
                    {...register("passWord", {
                      required: "Please fill out the field",
                    })}
                  />
                </div>
                
                </div>
                {errors.passWord && (
                  <p className="errors">
                    <ErrorIcon className="error__icon" />
                    {errors.passWord.message}
                  </p>
                )}
              </div>

              <div className="record__inputs">
                <div className="record__divInp">
                <LockIcon className="iconsize" />
                <div className="record__input">
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
                {errors.confirmPassword && (
                  <p className="errors">
                    <ErrorIcon className="error__icon" />
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="record__btn">
            <button type="submit">Register with us</button>
          </div>
          <small>Or</small>
          <div className="register__btn" onClick={handleSignIn}>
            Sign in
          </div> 
        </form>
      </div>
    </div>
  );
};
export default Register;
