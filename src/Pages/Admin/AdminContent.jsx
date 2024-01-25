import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import AddYourAdd from './AddYourAdd';
import {AddContext} from '../../Context/AddContext';
import "./Dashboard.css"


const AdminContent = () => {
    const { handleAddYourAd, addYourAd} = useContext(AddContext)
  return (
    <section className='admincontent__div'>
         <div className='admincontent__divs'>
            <div className='greeting__divs'>
            <div className='greetings'>Good day !!! </div>
            <div className='add'><AddIcon style={{fontSize: "2rem", color: " rgb(54,54,54)"}} onClick={handleAddYourAd}/></div>
             {/* <form><input type='text' name='search' value={inputSearch} onChange={handleChange}/></form> */}
             

            </div>
            {addYourAd && <div className='move__ad'><AddYourAdd/></div>}
            
             {/* <DriverList/> */}

            

        </div>

    </section>
  )
}

export default AdminContent
