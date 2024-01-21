import { Routes, Route } from "react-router-dom";
import DriverList from "./DriverList/DriverList";
import Customer from "./CustomerList/Customer";
import Dashboard from "./Dashboard";
const DashboardRoutes = () => {

    return (
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="driverlist" element={<DriverList />} />
          <Route path="customer" element={<Customer />} />
        </Route>
      </Routes>
    );
  };
  
  export default DashboardRoutes;