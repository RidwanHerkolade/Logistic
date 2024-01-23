import React from "react";
import AdminContent from "./AdminContent";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="admin__section">
      <div className="admin__content">
        <div className="admin__content1"></div>
        <div className="admin__content2">
          <AdminContent />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
