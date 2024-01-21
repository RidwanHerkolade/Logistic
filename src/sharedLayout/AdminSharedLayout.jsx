import React from "react";
import SideNav from "../Pages/Admin/SideNav";
import { Outlet } from "react-router-dom";


const AdminSharedLayout = () => {
  return (
    <div className="admin__content">
      <SideNav />
      <Outlet />
    </div>
  );
};

export default AdminSharedLayout;
