import React ,{useState}from "react";
import "./ForgetPassWord.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../../LoadingOverlay/Loading";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const[isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const onSubmit = async(data) => {
    try {
      setIsLoading(true)
      const result = await axios.post('https://migro.onrender.com/api/v1/forgot-password',data)
      console.log(data);
      if(result.status === 200){
        toast.success('email verified otp sent!')
        setTimeout(()=>{
        navigate("/driverform/forgetpassword/resetpassword", { state: { formData: data } })
        }, 3000)
      }
    } catch (error) {
      if (error.request.status === 409) {
      toast.error("Email not found!")
    }else if(error.code == 'ERR_NETWORK'){
      toast.error("no internet connection or server error!")
      }
      console.log(error)
    } finally{
      setIsLoading(false)
    }
  }
  return (
    <div className="forgetPassWord__div">
      {isLoading && <Loading />}
      <ToastContainer />
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
            autoComplete="off"
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
