import React from "react";
import SideNav from "./SideNav";
import AdminContent from "./AdminContent";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="admin__section">
      {/* <div className="admin__content"> */}
      {/* <div className="admin__content1">
        <SideNav />
      </div> */}
      <div className="admin__content2">
        <AdminContent />
        {/* <Outlet/> */}
      
      </div>
      {/* </div> */}
    </section>
  );
};

export default Dashboard;
