import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DriverAd from './Pages/Advertisement/DriverAd';
import Announcement from './Pages/Announcement/Announcement';
import Home from './Pages/Homepage/Home';
import './App.css'

function App() {
  return (
    <>
        <BrowserRouter>
               <Routes>
                      <Route path='/' element={<Home/>}></Route>
                      <Route path='driverad' element={<DriverAd/>}></Route>
                      <Route path='announcement' element={<Announcement/>}></Route>
               </Routes>
        
        
        </BrowserRouter>       
    </>
  )
}

export default App
