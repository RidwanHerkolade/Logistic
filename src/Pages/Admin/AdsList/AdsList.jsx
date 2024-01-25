import React from "react";
import DriverHead from "../DriverList/DriverHead";
import "./Ads.css";

const AdsList = () => {
  return (
    <div>
      <DriverHead />
      <div className="Ads__list">
        <form className="form__adslist">
        
        <div className="grid">
            <div className="value__name">
          <div className="grids">
            <div className="value__input">
              <label htmlFor="firstName">first name</label>
              <div className="record__inputValue">
                <input value="ridwanulla" />
              </div>
            </div>
          </div>
          <div className="grids">
            <div className="value__input">
              <label htmlFor="lastName">last name</label>
              <div className="record__inputValue">
              <input value="ridwanulla" />
              </div>
            </div>
          </div>
          <div className="grids">
            <div className="value__input">
              <label htmlFor="email">email</label>
              <div className="record__inputValue">
                <input value="ridwanulla" />
              </div>
            </div>
          </div>
          <div className="grids">
            <div className="value__input">
              <label htmlFor="phone">Phone num</label>
              <div className="record__inputValue">
                <input value="ridwanulla" />
              </div>
            </div>
          </div>
          <div className="grids">
            <div className="value__input">
              <label htmlFor="vehicle">Type of vehicle</label>
              <div className="record__inputValue">
                <input value="ridwanulla" />
              </div>
            </div>
          </div>
          <div className="grids">
            <div className="value__input">
              <label htmlFor="type of load">type of load</label>
              <div className="record__inputValue">
                <input value="ridwanulla" />
              </div>
            </div>
          </div>
          </div>
         
          <div className="value__location">
          <div className="grids">
            <div className="value__input">
              <label htmlFor="from city">from city</label>
              <div className="record__inputValue">
                <input value="ridwanulla" />
              </div>
            </div>
          </div>
          <div className="grids">
            <div className="value__input">
              <label htmlFor="to city">to city</label>
              <div className="record__inputValue">
                <input value="ridwanulla" />
              </div>
            </div>
          </div>
         
         
          <div className="grids">
            <div className="value__input">
              <label htmlFor="province">from province</label>
              <div className="record__inputValue">
                <input value="ridwanulla" />
              </div>
            </div>
          </div>
          <div className="grids">
            <div className="value__input">
              <label htmlFor="to province">to province</label>
              <div className="record__inputValue">
                <input value="ridwanulla" />
              </div>
            </div>
          </div>
          <div className="grids">
            <div className="value__input">
              <label htmlFor="from neighborhood">from neighborhood</label>
              <div className="record__inputValue">
                <input value="ridwanulla" />
              </div>
            </div>
          </div>
          <div className="grids">
            <div className="value__input">
              <label htmlFor="to neighborhood">to neigborhood</label>
              <div className="record__inputValue">
                <input value="ridwanulla" />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div style={{display: "flex", justifyContent:"end", }}><button className="authorize">Authorize</button></div>
       
        </form>
      </div>
     
    </div>
  );
};

export default AdsList;
