import React, { useContext } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { AddContext } from '../../Context/AddContext';

const SuccessPage = () => {
    const {handleSuccessPage} = useContext(AddContext)
  return (
    <section className='success__session'>
         <div className='success__div'>
               <div className='check'><CheckCircleIcon style={{fontSize:"5rem", color: "rgb(230,156,49)"}}/></div>
               <h1>Yeah !!</h1>
               <p>Your Advert is successfully placed</p>
               <button className='success__btn' onClick={handleSuccessPage}>Done</button>
        
        </div>

    </section>
  )
}

export default SuccessPage