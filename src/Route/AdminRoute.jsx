// // import React from 'react'
// // import { Route, Routes } from 'react-router-dom';
// // import Admin from '../Pages/Admin/AdminDashboard';

// // const AdminRoute = () => {
// //   return (
// //     <Routes>
// //         <Route path="/" element={<Admin/>}/>
// //         {/* <Route path='driverlist' element={<DriverList/>}/> */}
// //     </Routes>
// //   )
// // }

// // export default AdminRoute

// // // App.js
// // import React from 'react';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import AdminRoutes from './routes/AdminRoutes';
// // import Sidenav from './components/Sidenav'; // Import your Sidenav component
// // import Nav from './components/Navigation/Nav';
// // import DriverAd from './components/Advertisement/DriverAd';
// // import Announcement from './components/Announcement/Announcement';
// // import Home from './components/Homepage/Home';
// // import DriverForm from './components/DriverDetail/DriverForm';
// // import DriverRecord from './components/DriverRecord/DriverRecord';
// // import Register from './components/DriverRecord/Register';
// // import ConfirmationPage from './components/Confirmation/ConfirmationPage';
// // import AddContextProvider from './Context/AddContext';

// // import './App.css';

// // const App = () => {
// //   return (
// //     <>
// //       <AddContextProvider>
// //         <BrowserRouter>
// //           <Routes>
// //             <Route
// //               path="admin/*"
// //               element={
// //                 <>
// //                   <Sidenav />
// //                   <AdminRoutes />
// //                 </>
// //               }
// //             />
// //             <Route
// //               path="*"
// //               element={
// //                 <>
// //                   <Nav />
// //                   <Routes>
// //                     <Route path="driverad" element={<DriverAd />} />
// //                     <Route path="announcement" element={<Announcement />} />
// //                     <Route path="/" element={<Home />} />
// //                     <Route path="driverform" element={<DriverForm />} />
// //                     <Route path="driverrecord" element={<DriverRecord />} />
// //                     <Route path="register" element={<Register />} />
// //                     <Route
// //                       path="confirmationpage"
// //                       element={<ConfirmationPage />}
// //                     />
// //                   </Routes>
// //                 </>
// //               }
// //             />
// //           </Routes>
// //         </BrowserRouter>
// //       </AddContextProvider>
// //     </>
// //   );
// // };

// // export default App;
// // src/routes/adminRoutes.js
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Admin from "../Pages/Admin/Admin";
// import SideNav from "../Pages/Admin/SideNav";
// import Customer from "../Pages/Admin/CustomerList/Customer";
// import Dashboard from "../Pages/Admin/Dashboard";
// // import Admin from "../pages/Admin/Admin";
// // import AdminNav from "../components/Navigation/AdminNav";
// // import Dashboard from "../pages/Admin/Dashboard";
// // import Customer from "../pages/Admin/Customer";

// const AdminRoute = () => {
//   return (
//     <Routes>
//       <Route
//         path="/*"
//         element={
//           <>
//             <SideNav />
//             <Routes>
//               <Route path="admin" element={<Admin />} />
//               <Route path="dashboard" element={<Dashboard />} />
//               <Route path="customer" element={<Customer />} />
//             </Routes>
//           </>
//         }
//       />
//     </Routes>
//   );
// };

// export default AdminRoute;

