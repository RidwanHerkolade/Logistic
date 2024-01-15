import React from 'react'
import "./confirmation.css"
import EmailIcon from '@mui/icons-material/Email';
import { useForm } from "react-hook-form";
// import { useParams } from "react-router-dom";

const ConfirmationPage = () => {
    // const { id } = useParams();
    
   
        const {
          handleSubmit,
          register,
          formState: { errors },
          watch,
        } = useForm();
        const onSubmit = () => {

        }
  return (
    <div className='confirm__div'>
        <div className='confirm__divs'>
            <div className='verify__icon'><EmailIcon className='verify__icons' /></div>
            
            <h1>Email verification</h1>
            <div className='confirm__content'>enter the 4 digit code we sent to your <span>email</span></div>
            <form onSubmit={handleSubmit(onSubmit)} className='confirm__form'>
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
                {errors.confirm && (
                  <p className="errors">
                    {errors.confirm.message}
                  </p>
                )}
                <div className='btnss'>
                <button type='submit'>Verify</button>
                </div>
                
            </form>

        </div>
    </div>
  )
}

export default ConfirmationPage
 