import React from "react";
import SideNav from "../Pages/Admin/SideNav";
import { Outlet } from "react-router-dom";

const AdminSharedLayout = () => {
  return (
    <section className="admin__section">
        <div className="admin__content1">
          <SideNav />
        </div>
        <div className="admin__content2">
          <Outlet />
        </div>
    </section>
  );
};

export default AdminSharedLayout;
