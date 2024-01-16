import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import ErrorIcon from "@mui/icons-material/Error";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { TYPE } from "../../Constants/Constant";
// import LinearProgress from '@mui/material/LinearProgress';
import axios from "axios";

// Values for the validation from react-hook-form
const Register = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    watch,
  } = useForm();

  // Custom styles for react select
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
      textTransform: "uppercase",
      padding: "0rem",
      border: "0rem",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: " #14161A" }),
    input: (provided) => ({
      ...provided,
      textTransform: "uppercase",
    }),
  };

// Submit handler for the registration form 
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const registerUrl = "/v1/register";
      const response = await axios.post(registerUrl, data);
      // Assuming the server responds with user details and token
      const { user, token } = response.data;
      // Send email with the token
      await sendEmail(user.email, token);
      // Navigate to confirmation page
      navigate("/confirmationPage");
    } catch (error) {
      console.error(error.message);
    }
    const sendEmail = async (email, token) => {
      console.log(`Email sent to ${email} with token ${token}`);
    };
    // };
    // try {
    //   const res = await fetch("/v1/register");
    //   const data = await res.json();
    //   console.log(data);
    //   if (!res.ok) throw new Error("something went wrong");
    //   navigate("/confirmationPage");
    // } catch (error) {
    //   console.error(error.message);
    // }
  };

  const handleSignIn = () => {
    navigate("");
  };

  return (
    <div className="record__divs">
      <div className="record___divs">
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
                {errors.email && (
                  <p className="errors">
                    <ErrorIcon className="error__icon" />
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="record__inputs">
                <div className="record__divInp">
                  <div className="record__input" id="order2">
                    <div className="ss">
                      <Controller
                        name="type"
                        control={control}
                        render={({ field }) => (
                          <Select
                            className="select"
                            {...field}
                            options={TYPE}
                            placeholder="Type"
                            isSearchable
                            noOptionsMessage={() => "no location found"}
                            styles={customStyles}
                          />
                        )}
                        defaultValue=""
                        rules={{
                          required: "please select",
                        }}
                      />
                    </div>
                  </div>
                </div>
                {errors.type && (
                  <p className="errors">
                    <ErrorIcon className="error__icon" />
                    {errors.type.message}
                  </p>
                )}
              </div>
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
    </div>
  );
};
export default Register;
