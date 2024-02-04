import React, { useEffect, useContext } from "react";
import "./Profile.css";
import ProfileContent from "./ProfileContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AddContext } from "../../../Context/AddContext";
const Profile = () => {
  const {handleId} = useContext(AddContext);
  const location = useLocation();
  const formData = location.state?.formData || {};
  useEffect(()=>{

  },[])
  return (
    <section className="profile__sections">
      <div className="profile__section">
        <aside className="profile__aside">
          <div className="profile__asideContent">
            <div className="profile__logo">
              <div className="logo__icon">
                <LocalShippingIcon className="icons" />
              </div>
              <Link to="/"><span>MigRo {handleId}</span></Link>
              
            </div>
            <div className="profile__images">
              <AccountCircleIcon style={{ fontSize: "5rem", color: "white" }} />
            </div>
            <div className="profile__discrip">
              <h2 className="profile__name">
                Lasisi Ridwan
                {formData.firstName} {formData.lastName}
              </h2>
              <small className="profile__email">
                {formData.email}
              </small>
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
