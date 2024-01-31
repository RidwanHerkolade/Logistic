import React, { useContext, useEffect } from "react";
import { TableHeader } from "../../../Constants/Constant";
import { Link } from "react-router-dom";
import { TableData } from "../../../Constants/Constant";
import "./TableProfile.css"
import { AddContext } from "../../../Context/AddContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from "axios";
import { useState } from "react";


const TableProfile = () => {
  const [loading, setLoading] = useState()
  const [ads, setAds] = useState([])
  const [id, setId] = useState()
  const {handleClickPopup, handIdSubmition} = useContext(AddContext)
  useEffect(()=>{
    fetchAds()
   },[])
   const fetchAds = async()=>{
     const api = "https://migro.onrender.com/api/ads/getAds"
     try {
       const result = await axios.get(api)
       setLoading(true)
       if(result.status === 200 ){
        setAds(result.data)
        console.log(typeof(result.data))
         console.log(result.data)
       }
     } catch (error) {
       console.error(error)
       console.log(error)
     }finally{
      setLoading(false)
     }
   }

   const selectId = (id)=>{
    setId(id)
    
    console.log(id)
   }
  return (
    <div className="table">
      {loading ? "Loading..." : "Done loading"}

      <table>
        <thead>
          <tr>
            {TableHeader.map((dataHead) => {
              return [<th>{dataHead.name}</th>];
            })}
          </tr>
        </thead>
        <tbody>
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
  );
};

export default TableProfile;
