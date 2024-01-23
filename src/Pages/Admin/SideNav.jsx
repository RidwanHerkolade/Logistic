import React from 'react'
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "./Admin.css"
import { Link} from 'react-router-dom';

const SideNav = () => {
  return (
    <aside>
      <nav className="aside__navs">
        <div className="nav__logo">
          <div className="logo__icon">
            <LocalShippingIcon className="icons" />
          </div>
          <span>MigRo</span>
        </div>
        <ul className="aside__links">
            <Link to="" className='li'>Driver</Link>
            <Link to="customer" className='li'>Customer</Link>
        </ul>
       
       
      </nav>
    </aside>
  );
}

export default SideNav
