import React, { useContext, useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { AddContext } from "../../../Context/AddContext";
import axios from "axios";

const ProfileAd = () => {
  const {handleClosePopup, handleId} = useContext(AddContext)
  const [adsInfo, setAdsInfo] = useState({})
  
  useEffect(()=>{
    displayAdsInfo()
  },[handleId])
  const displayAdsInfo = async()=>{
    try {
      const result = await axios.get(`https://migro.onrender.com/api/ads/getAdById/${handleId}`)
      if (result.status == 200) {
        setAdsInfo(result.data)
        console.log(result.data)

      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <div className="Ads__list">
      <CloseIcon style={{cursor: "pointer", color: "red", position: "absolute", top: "1rem", right: "2rem"}} onClick={handleClosePopup}/>
        <form className="form__adslist">
          <div className="grid">
            <div className="value__name">
              <div className="grids">
                <div className="value__input">
                  <label htmlFor="firstName">first name</label>
                  <div className="record__inputValue">
                    <input value={adsInfo?.firstname} />
                  </div>
                </div>
              </div>
              <div className="grids">
                <div className="value__input">
                  <label htmlFor="lastName">last name</label>
                  <div className="record__inputValue">
                    {adsInfo?.lastname}
                  </div>
                </div>
              </div>
              <div className="grids">
                <div className="value__input">
                  <label htmlFor="email">email</label>
                  <div className="record__inputValue">
                    {adsInfo?.email}
                  </div>
                </div>
              </div>
              <div className="grids">
                <div className="value__input">
                  <label htmlFor="phone">Phone</label>
                  <div className="record__inputValue">
                  {adsInfo?.phone}
                  </div>
                </div>
              </div>
              <div className="grids">
                <div className="value__input">
                  <label htmlFor="vehicle">Type of vehicle</label>
                  <div className="record__inputValue">
                  {adsInfo?.truck_type}
                  </div>
                </div>
              </div>
              <div className="grids">
                <div className="value__input">
                  <label htmlFor="type of load">type of load</label>
                  <div className="record__inputValue">
                    {adsInfo?.type_of_load}
                  </div>
                </div>
              </div>
            </div>

            <div className="value__location">
              <div className="grids">
                <div className="value__input">
                  <label htmlFor="from city">from city</label>
                  <div className="record__inputValue">
                    {adsInfo?.from_city}
                  </div>
                </div>
              </div>
              <div className="grids">
                <div className="value__input">
                  <label htmlFor="to city">to city</label>
                  <div className="record__inputValue">
                  {adsInfo?.to_city}
                  </div>
                </div>
              </div>

              <div className="grids">
                <div className="value__input">
                  <label htmlFor="province">from province</label>
                  <div className="record__inputValue">
                  {adsInfo?.from_province}
                  </div>
                </div>
              </div>
              <div className="grids">
                <div className="value__input">
                  <label htmlFor="to province">to province</label>
                  <div className="record__inputValue">
                  {adsInfo?.to_province}
                  </div>
                </div>
              </div>
              <div className="grids">
                <div className="value__input">
                  <label htmlFor="from neighborhood">from neighborhood</label>
                  <div className="record__inputValue">
                  {adsInfo?.from_neighborhood}
                  </div>
                </div>
              </div>
              <div className="grids">
                <div className="value__input">
                  <label htmlFor="to neighborhood">to neigborhood</label>
                  <div className="record__inputValue">
                  {adsInfo?.to_neighborhood}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button className="authorize" disabled style={{opacity: "0.8"}}>
              Authorize
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileAd;
