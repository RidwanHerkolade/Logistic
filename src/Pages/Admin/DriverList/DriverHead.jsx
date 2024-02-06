import React, { useContext } from 'react'
import { AddContext } from '../../../Context/AddContext'

const DriverHead = () => {
  const {handleChange}=useContext(AddContext)
  return (
  
    <div>
      <div className="employee__divs">
        <div className="board__header">
          <div className="greetings"> DRIVERS</div>
          <div className="search">
            <div className="label">
             
              <input type="text" onChange={handleChange} placeholder='search' />
              <img src="./img/Search.png" alt="" />
            </div>
            
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default DriverHead