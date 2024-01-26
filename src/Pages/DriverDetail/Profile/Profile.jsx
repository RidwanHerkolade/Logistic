import React from "react";
import "./Profile.css";
import ProfileContent from "./ProfileContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useLocation } from "react-router-dom";
const Profile = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};
  return (
    <section className="profile__sections">
      <div className="profile__section">
     
        <aside className="profile__aside">
         
          <div className="profile__asideContent">
          <div className="profile__logo">
            <div className="logo__icon">
           
              <LocalShippingIcon className="icons" />
            </div>
            <span>MigRo</span>
          </div>
            <div className="profile__images">
              <AccountCircleIcon style={{ fontSize: "5rem" }} />
            </div>
            <div className="profile__discrip">
               
              <h2 className="profile__name">
                {formData.firstName} {formData.lastName}
              </h2>
              <small className="profile__email">{formData.email}</small>
            </div>
          </div>
        </aside>
        <div className="profilecon__bg">
          <ProfileContent />
        </div>
      </div>
    </section>
  );
};

export default Profile;
