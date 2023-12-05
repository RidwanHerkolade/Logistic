import React,{useState} from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HouseIcon from "@mui/icons-material/House";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Home from "../../Pages/Homepage/Home";
import "./Nav.css";

const Nav = () => {
const [show, setShow] = useState(true)
const[hide, setIsHide] = useState(true)

const handleClick =() => {
     setIsHide(!hide)
}

  return (
    <div className="nav__div">
      <nav className="nav">
        <div className="nav__contents">
          <div className="nav__content">
            <div className="nav__logo">
              <div className="logo__icon">
                <LocalShippingIcon className="icons" />
              </div>
              <span>MigRo</span>
            </div>
            {/* <Link to='/' className='homepage__link'><HouseIcon className='icon'/><span>Homepage</span></Link> */}
          </div>
          {hide && <div className="nav__link">
            <Link to="/" className="homepage__link">
              <HouseIcon className="icon" />
              <span>Homepage</span>
            </Link>
            <div className="nav__links">
              <Link to="announcement" className="links" id="announcement">
                Driver advertisements
              </Link>
              <Link to="announcement" className=" links" id="announcement">
                Visitor announcements
              </Link>
              <div className="linkss">
                <Link to="driverad" className="drive__ad">
                  Add your ad
                </Link>
                <Link to="announcement" className="drive__logins">
                  Drivers login{" "}
                </Link>
              </div>
            </div>
          </div>
}
          <div className='menu'>
                       {show ? <CloseIcon onClick={handleClick}/> : <MenuIcon onClick={handleClick}/>}  
           </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
