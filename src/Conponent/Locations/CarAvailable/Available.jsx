import React from 'react'
import FilterDriver from './FilterDriver'
import './Available.css'

const Available = () => {
  return (
    <div className='available__div'>
        <h1>Filter available driver's preference</h1>
        <FilterDriver/>
        {/* <DriverForm/> */}

    </div>
  )
}

export default Available