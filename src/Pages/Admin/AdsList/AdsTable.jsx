import React, { useContext, useState, useEffect} from 'react'
import { TableHeader } from "../../../Constants/Constant";
import { TableData } from "../../../Constants/Constant";
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AddContext } from '../../../Context/AddContext';
import {BeatLoader} from 'react-spinners'
import axios from 'axios';

const AdsTable = () => {
  const [loading, setLoading] = useState(false)
  const [ads, setAds] = useState([])
  const [id, setId] = useState()
  const {handleClickPopup,handIdSubmition} = useContext(AddContext)
 
  useEffect(()=>{
    fetchAds()
   },[])
   const fetchAds = async()=>{
     const api = "https://migro.onrender.com/api/ads/getAds"
     try {
       setLoading(true)
       const result = await axios(api)
       if(result.status === 200){
        setAds(result.data)
         console.log(result.data)
       }
     } catch (error) {
       console.error(error)
     }finally{
      setLoading(false)
     }
   }

  return (
    <div className="table">
    <table>
      <thead>
        <tr>
          {TableHeader.map((dataHead) => {
            return [<th>{dataHead.name}</th>];
          })}
        </tr>
      </thead>
      <tbody>
      {loading && <BeatLoader style={{marginLeft:'auto', marginRight:'auto',}} />}
        {ads.map((data) => {
          return [
            <tr key={data.id} onClick={()=>handIdSubmition(data.id)}>
              <td>
                <Link className="dev" to="" onClick={handleClickPopup}>
                  <div className="dev__img">
                  <AccountCircleIcon style={{fontSize: "3rem", color: "rgb(54,54,54)"}}/>
                  </div>
                  <h3>`{data.firstname} {data.lastname}`</h3>
                </Link>
              </td>
              <td>
                <small className="data__position">{data.email}</small>
              </td>
              <td>
                <div className="media">
                  {data.phone}
                </div>
              </td>
            
            </tr>,
          ];
        })}
      </tbody>
    </table>
  </div>

  )
}

export default AdsTable