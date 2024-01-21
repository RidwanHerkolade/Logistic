// src/routes/otherRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
// import DriverAd from "./Pages/Advertisement/DriverAd";
import Announcement from "./Pages/Announcement/Announcement";
// import Admin from "./Pages/Admin/Admin";
import DriverForm from "./Pages/DriverDetail/DriverForm";
import DriverRecord from "./Pages/DriverRecord/DriverRecord";
// import Announcement from "../pages/Other/Announcement";
// import DriverAd from "../pages/Other/DriverAd";
// import DriverForm from "../pages/Other/DriverForm";
// import Home from "../pages/Other/Home";
// import Register from "../pages/Other/Register";
// import ConfirmationPage from "../pages/Other/ConfirmationPage";
import Nav from "../Conponent/Navigation/Nav";
const MainRoute = () => {
  return (
    <Routes>
       <Route
            path="/*=="
            element={
              <>
                <Nav />
                <Routes>
                  {/* <Route index element={<Home />} /> */}
                  <Route path="announcement" element={<Announcement />} />
                  <Route path="driverad" element={<DriverAd />} />
                  <Route path="driverform" element={<DriverForm />} />
                  <Route path="register" element={<Register />} />
                  <Route path="confirmationpage" element={<ConfirmationPage />} />
                </Routes>
              </>
            }
          />
        </Routes>
  )
}
// const MainRoute = () => {
//   return (
//     <Routes>
//       <Route
//         path="/*"
//         element={
//           <>
//             <Nav />
//             {/* <Routes> */}
//               {/* <Route index element={<Home />} /> */}
//               <Route path="announcement" element={<Announcement />} />
//               <Route path="driverad" element={<DriverAd />} />
//               <Route path="driverform" element={<DriverForm />} />
//               <Route path="register" element={<Register />} />
//               <Route path="confirmationpage" element={<ConfirmationPage />} />
//             {/* </Routes> */}
//           </>
//         }
//       />
//     </Routes>
//   );
// };

// export default MainRoute;
