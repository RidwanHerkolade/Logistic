import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DriverAd from './Pages/Advertisement/DriverAd';
import Announcement from './Pages/Announcement/Announcement';
import DriverForm from './Pages/DriverDetail/DriverForm'
import DriverRecord from './Pages/DriverRecord/DriverRecord';
import Home from './Pages/Homepage/Home';
import Nav from './Conponent/Navigation/Nav';
import Register from './Pages/DriverRecord/Register';
import './App.css'

function App() {
  return (
    <>
        <BrowserRouter>
              <Nav/>
               <Routes>
                      <Route path='/' element={<Home/>}></Route>
                      <Route path='driverad' element={<DriverAd/>}></Route>
                      <Route path='announcement' element={<Announcement/>}></Route>
                      <Route path='driverform' element={<DriverForm/>}></Route>
                      <Route path='driverrecord' element={<DriverRecord/>}></Route>
                      <Route path='register' element={<Register/>}></Route>
               </Routes>

        </BrowserRouter>       
    </>
  )
}

export default App

