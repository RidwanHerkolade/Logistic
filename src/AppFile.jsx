// import React, {useEffect} from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DriverAd from "./Pages/Advertisement/DriverAd";
// import Announcement from "./Pages/Announcement/Announcement";
// import Admin from "./Pages/Admin/Admin";
// import DriverForm from "./Pages/DriverDetail/DriverForm";
// import DriverRecord from "./Pages/DriverRecord/DriverRecord";
// import Home from "./Pages/Homepage/Home";
// import Register from "./Pages/DriverRegister/Register";
// import AddYourAdd from "./Pages/Admin/AddYourAdd";
// import AddContextProvider from "./Context/AddContext";
// import AdsList from "./Pages/Admin/AdsList/AdsList";
// import Profile from "./Pages/DriverDetail/Profile/Profile";
// import "./App.css";
// import ShareLayout from "./sharedLayout/ShareLayout";
// import AdminSharedLayout from "./sharedLayout/AdminSharedLayout";
// import DriverList from "./Pages/Admin/DriverList/DriverList";
// import ForgetPassword from "./Pages/DriverDetail/ForgetPassWord/ForgetPassword";
// import ResetPassword from "./Pages/DriverDetail/ForgetPassWord/ResetPassword";
// import HomePages from './Pages/HomePages/HomePages';
// // import Homes from "./Pages/HomePages/Homes";
// import ProfileAd from "./Pages/DriverDetail/Profile/ProfileAd";

// const AppFile = () => {
//   return (
//     <div>
//         <AddContextProvider>
        
//         <BrowserRouter>
//           <Routes>
//             <Route path="admin" element={<Admin />}></Route>
//             <Route path="admin/dashboard" element={<AdminSharedLayout />}>
//               <Route path="driverlist" element={<DriverList />} />
//               <Route path="adslist" element={<AdsList />} />
//             </Route>

//             <Route path="/" element={<ShareLayout />}>
//               <Route path="addyouradd" element={<AddYourAdd />}></Route>
//               <Route path="announcement" element={<Announcement />}></Route>
//               <Route index element={<Home />}></Route>
//               <Route path="driverad" element={<DriverAd />}></Route>
//               <Route path="/driverform" element={<DriverForm />}>
                   

//               </Route>
              
//               <Route path="driverrecord" element={<DriverRecord />}></Route>
//               <Route path="register" element={<Register />}></Route>
//             </Route>
//             <Route path="profile" element={<Profile />}>
          

           

//             </Route>
//             <Route path='home' element={<Home/>}></Route>
//             <Route path="/driverform/forgetpassword" element={<ForgetPassword/>}></Route>
//             <Route path="/driverform/forgetpassword/resetpassword" element={<ResetPassword/>}></Route>
//             <Route path='homepages' element={<HomePages/>}></Route>
            
            
//           </Routes>
//         </BrowserRouter>
//       </AddContextProvider> 
//     </div>
//   )
// }

// export default AppFile