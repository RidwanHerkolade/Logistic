import React from 'react'
import Drivers from './Drivers';
import DriverHead from './DriverHead';


const DriverList = () => {
  return (
    <section className='admincontent__div'>
       <div className="employee__div">
       <DriverHead/>
       <Drivers/>    
       </div>

    </section>
  )

  }

export default DriverList
