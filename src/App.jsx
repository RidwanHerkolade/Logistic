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

import "./App.css";
import ShareLayout from "./sharedLayout/ShareLayout";
import AdminSharedLayout from "./sharedLayout/AdminSharedLayout";

function App() {
  return (
    <>
      <AddContextProvider>
        <BrowserRouter>

          <Routes>
              <Route path="admin" element={<Admin />}></Route>
              <Route path="admin/dashboard" element={<AdminSharedLayout/>}>
                  <Route index element={<Dashboard />}></Route>
                  <Route index element={<Customer />}></Route>

            </Route>
            <Route path="/" element={<ShareLayout />}>
              <Route path="addyouradd" element={<AddYourAdd />}></Route>
              <Route path="announcement" element={<Announcement />}></Route>
              <Route index element={<Home />}></Route>
              <Route path="driverad" element={<DriverAd />}></Route>
              <Route path="driverform" element={<DriverForm />}></Route>
              <Route path="driverrecord" element={<DriverRecord />}></Route>
              <Route path="register" element={<Register />}></Route>
              <Route
                path="confirmationpage"
                element={<ConfirmationPage />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AddContextProvider>
    </>
  );
}

export default App;
