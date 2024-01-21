import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DriverAd from "./Pages/Advertisement/DriverAd";
import Announcement from "./Pages/Announcement/Announcement";
import Admin from "./Pages/Admin/Admin";
import DriverForm from "./Pages/DriverDetail/DriverForm";
import DriverRecord from "./Pages/DriverRecord/DriverRecord";
// import DriverList from "./Pages/Admin/DriverList/DriverList";
import Home from "./Pages/Homepage/Home";
import Nav from "./Conponent/Navigation/Nav";
import Register from "./Pages/DriverRecord/Register";
import ConfirmationPage from "./Pages/Confirmation/ConfirmationPage";
import AddYourAdd from "./Pages/Admin/AddYourAdd";
import Dashboard from "./Pages/Admin/Dashboard";
import AddContextProvider from "./Context/AddContext";
import Customer from "./Pages/Admin/CustomerList/Customer";
import { useLocation } from "react-router-dom";


import "./App.css";


function App() {
  return (
    <>
      <AddContextProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="admin" element={<Admin />}></Route>
            <Route path="dashboard" element={<Dashboard/>}></Route>

            <Route path="/admin/dashboard/*" element={<Dashboard />}>
                <Route path="customer" element={<Customer />}/>

            </Route>
            {/* <Route path="/admin/dashboard" element={<DriverList />}></Route> */}

            <Route path="addyouradd" element={<AddYourAdd />}></Route>
            <Route path="announcement" element={<Announcement />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="driverad" element={<DriverAd />}></Route>
            <Route path="driverform" element={<DriverForm />}></Route>
            <Route path="driverrecord" element={<DriverRecord />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route
              path="confirmationpage"
              element={<ConfirmationPage />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </AddContextProvider>
    </>
  );
}

export default App;

