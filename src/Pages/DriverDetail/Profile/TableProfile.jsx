import React, { useContext, useEffect } from "react";
import { TableHeader } from "../../../Constants/Constant";
import { Link } from "react-router-dom";
import { TableData } from "../../../Constants/Constant";
import "./TableProfile.css"
import { AddContext } from "../../../Context/AddContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from "axios";
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const TableProfile = () => {
  const [loading, setLoading] = useState()
  const [pages, setPages] = useState(1);
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

  //  pagination
  const itemsPerPage = 5;
  const startIndex = (pages - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const nextPage = () => {
    setPages(pages + 1);
  };

  const prevPage = () => {
    if (pages > 1) {
      setPages(pages - 1);
    }
  };
  return (
    <div className="profile_table">
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
        {ads.slice(startIndex, endIndex).map((data) => {
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
              
              </tr>
            ];
          })}
          
          
        </tbody>

      </table>
      <div className="pagination">
        <button className="pagination-btn" onClick={prevPage} disabled={pages === 1} style={{padding: "0.2rem 0.5rem", borderRadius: "1rem", border:"none", outline: "none", backgroundColor: "rgb(54,54,54)", color: "white"}}>
            <ArrowBackIosIcon style={{fontSize: "0.5rem", }}/>
        </button>
        <button className="pagination-btn" onClick={nextPage} disabled={ads.length <= endIndex} style={{padding: "0.2rem 0.5rem", borderRadius: "1rem", border:"none", outline: "none", backgroundColor: "rgb(54,54,54)", color: "white"}}>
         <ArrowForwardIosIcon style={{fontSize: "0.5rem"}}/>
        </button>
      </div>
    </div>
  );
};

export default TableProfile;
