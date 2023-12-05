import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchIcon from '@mui/icons-material/Search';

const DriverForm = () => {
  return (
    <div className='driverform__div'>
          <form>
               <div className='form__input'>
                 <span className='input__icon'><LocationOnIcon className='iconsize'/></span>
                   <div className='input'>
                       <input type='text' placeholder='to'/>
                   </div>
                   <span className='input__icon'><LocationOnIcon className='iconsize'/></span>
              </div>
              <div className='form__input'>
                   <div className='input'>
                       <input type='text' placeholder='from'/>
                   </div>
                   <span className='input__icon'><LocationOnIcon className='iconsize'/></span>
              </div>
              <div className='form__input'>
                   <button>Search</button>
                   <span className='input__icon'><SearchIcon className='iconsearch'/></span>
              </div>
              
          </form>
    </div>
  )
}

export default DriverForm