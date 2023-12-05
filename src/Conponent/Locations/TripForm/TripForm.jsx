import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchIcon from '@mui/icons-material/Search';
import './TripForm.css'
import Vehicle from '../VehicleAvailable/Vehicle';
import { useForm } from "react-hook-form"

const TripForm = () => {
  const {register,handleSubmit,formState: {errors} } = useForm()
  const onSubmit = (data) => {
     console.log(data)
  }
  return (
    <div className='tripform__div'>
          <form onSubmit={handleSubmit(onSubmit)}>

               <div className='form__input'>
                 {/* <span className='input__icon'><LocationOnIcon className='iconsize'/></span> */}
                   <div className='input'>
                       <input type='text' placeholder='to' name='finalDestination' {...register("final destination", {required:"please fill out the field"})}/>
                   </div>
                   <span className='input__icon'><LocationOnIcon className='iconsize'/></span>
                   {/* {errors.finalDestination && <p className='errors'>{errors.finalDestination.message}</p>} */}
              </div>
              <div className='form__input'>
                   <div className='input'>
                       <input type='text' placeholder='from'name='aboutDestination' {...register("about destination", {required: "please fill out the field"})}/> 
                   </div>
                   <span className='input__icon'><LocationOnIcon className='iconsize'/></span>

                   {/* {errors.aboutDestination && <p className='errors'>{errors.aboutDestination.message}</p>} */}
              </div>
              <div className='form__input'>
                   <div className='input'>
                       <input type='text' placeholder='the type of vehicle' name="vehicle"  {...register("vehicle", {required: "please fill out the field"})}/>
                   </div>
                   <span className='input__icon'><LocalShippingIcon className='iconsize'/></span>
                   {/* {errors.vehicle && <p className='errors'>{errors.vehicle.message}</p>} */}
              </div> 
              <div className='form__input'>
                   <button>Search</button>
                   <span className='input__icon'><SearchIcon className='iconsearch'/></span>
              </div>
              
          </form>

          <Vehicle/>

     </div>
  )
}

export default TripForm