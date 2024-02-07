import React, { useContext, useState,useEffect } from 'react'
import { AddContext } from '../../../Context/AddContext'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const AdsLists = () => {
  const {handleClosePopup,handleId} = useContext(AddContext)
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
    <div style={{position: "relative"}}>
    <div className="Ads__list">
    <CloseIcon onClick={handleClosePopup} style={{color: "rgb{54, 54, 54}",cursor: "pointer", position: "absolute", top:"2rem", right: "6rem"} } />
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
          <input value={adsInfo?.lastname} />
          </div>
        </div>
      </div>
      <div className="grids">
        <div className="value__input">
          <label htmlFor="email">email</label>
          <div className="record__inputValue">
            <input value={adsInfo?.email} />
          </div>
        </div>
      </div>
      <div className="grids">
        <div className="value__input">
          <label htmlFor="phone">Phone num</label>
          <div className="record__inputValue">
            <input value={adsInfo?.phone} />
          </div>
        </div>
      </div>
      <div className="grids">
        <div className="value__input">
          <label htmlFor="vehicle">Type of vehicle</label>
          <div className="record__inputValue">
            <input value={adsInfo?.truck_type} />
          </div>
        </div>
      </div>
      <div className="grids">
        <div className="value__input">
          <label htmlFor="type of load">type of load</label>
          <div className="record__inputValue">
            <input value={adsInfo?.type_of_load} />
          </div>
        </div>
      </div>
      </div>
     
      <div className="value__location">
      <div className="grids">
        <div className="value__input">
          <label htmlFor="from city">from city</label>
          <div className="record__inputValue">
            <input value={adsInfo?.from_city} />
          </div>
        </div>
      </div>
      <div className="grids">
        <div className="value__input">
          <label htmlFor="to city">to city</label>
          <div className="record__inputValue">
            <input value={adsInfo?.to_city} />
          </div>
        </div>
      </div>
     
     
      <div className="grids">
        <div className="value__input">
          <label htmlFor="province">from province</label>
          <div className="record__inputValue">
            <input value={adsInfo?.from_province} />
          </div>
        </div>
      </div>
      <div className="grids">
        <div className="value__input">
          <label htmlFor="to province">to province</label>
          <div className="record__inputValue">
            <input value={adsInfo?.to_province} />
          </div>
        </div>
      </div>
      <div className="grids">
        <div className="value__input">
          <label htmlFor="from neighborhood">from neighborhood</label>
          <div className="record__inputValue">
            <input value={adsInfo?.from_neighborhood} />
          </div>
        </div>
      </div>
      <div className="grids">
        <div className="value__input">
          <label htmlFor="to neighborhood">to neigborhood</label>
          <div className="record__inputValue">
            <input value={adsInfo?.to_neighborhood} />
          </div>
        </div>
      </div>
    </div>
    </div>
    <div style={{display: "flex", justifyContent:"end", }}><button className="authorize" onClick={handleClosePopup}>Authorize</button></div>
    </form>
  </div>
  </div>
  )
}

export default AdsLists