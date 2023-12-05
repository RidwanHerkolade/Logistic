import React from 'react'
import './Vehicle.css'
import Available from '../CarAvailable/Available'

const Vehicle = () => {
  return (
    <div className='vehicle__divs'>
         <div className='h1'>All vehicle shown</div>
         <div className='vehicle__div'>
            <div className='vehicle__content'>
                <p>No truck found!! </p>
                
            </div>
             
         </div>
         <Available/>
    </div>
  )
}
export default Vehicle