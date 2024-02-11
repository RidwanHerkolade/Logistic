import React, { useEffect, useContext } from "react";
import "./Profile.css";
import ProfileContent from "./ProfileContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AddContext } from "../../../Context/AddContext";
const Profile = () => {
  const {  handleId, mobile, userEmail} = useContext(AddContext);
  const location = useLocation();
  const formData = location.state?.formData || {};
  const navigate = useNavigate()
  useEffect(() => {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      // Consider the user as authenticated and redirect to the profile page
      navigate("/profile");
    }else{
      navigate('/driverform')
    }
  }, [userEmail]);
  console.log(userEmail);
  return (
    <section className="profile__sections">
      <div className="profile__section">
        <aside className={mobile ? "profile__aside-mobile" : "profile__aside"}>
          <div className="profile__asideContent">
            <div className="profile__logo">
              <div className="logo__icon">
                <LocalShippingIcon className="icons" />
              </div>
              <Link to="/"><span>MigRo</span></Link>
              
            </div>
            <div className="profile__images">
              <AccountCircleIcon style={{ fontSize: "5rem", color: "white" }} />
            </div>
            <div className="profile__discrip">
              <h2 className="profile__name">
                {/* Lasisi Ridwan */}
                {formData.firstName} {formData.lastName}
              </h2>
              <small className="profile__email">
                {userEmail}
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
