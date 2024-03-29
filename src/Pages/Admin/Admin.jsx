import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Loading from "../../LoadingOverlay/Loading";

function Admin() {
  // GETTING THE INPUT VALUE
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //  Password effect
  const [showPassword, setShowPassword] = useState(false);
  //  loading effect
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();
  const onSubmit = (data) => {
    setLoading(true)
    navigate("/admin/dashboard/driverlist", { state: { ...register } });
  };
  console.log("errors", errors);

  // FUNCTIONALITY FOR VISIBILITY OF PASSWORD
  function handleShow() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="form__group">
      <div className="form__logo" style={{display:"flex", alignItems:"center"}}>
        <div className="logo__icon">
          <LocalShippingIcon className="icons" styles={{ fontSize: "3rem" }} />
        </div>
        <span style={{fontSize: "2rem"}}>MigRo</span>
      </div>
      <form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <h1>admin login</h1>
        {errors.userName && <p className="errors">{errors.userName.message}</p>}
        <div className="forminput__input">
          <input
            type="text"
            placeholder="username"
            name="userName"
            autoComplete="off"

            {...register("userName", {
                required: "username is required",
                pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Username must contain only letters.",
              }
               })}
          />
          <img src="./img/vector4.png" alt="" />
        </div>
        {errors.passWord && <p className="errors">{errors.passWord.message}</p>}
        <div className="forminput__input">
          <input
            type={!showPassword ? "password" : "text"}
            placeholder="password"
            name="passWord"
            autoComplete="off"
            {...register("passWord", {
              required: "password is required",
              maxLength: { value: 7, message: "you exceed the max length" },
              minLength: 6,
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,7}$/,
                message: "Password must contain at least one digit, and one special character",
              },
            })}
          />
          <img src="./img/vector6.png" alt="" />
          <div className="show" onClick={handleShow}>
            {showPassword ? (
              <VisibilityIcon className="left" />
            ) : (
              <VisibilityOffIcon className="left" />
            )}
          </div>
        </div>
        <button type="submit" className="submit__btn">
          login
        </button>
        <Link to="./" className="password">
          forgot password?
        </Link>
      </form>
    </div>
  );
}
export default Admin;
