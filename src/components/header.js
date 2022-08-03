import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import mainLogo from "../image/home.png";

function Header() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <nav>
      <img  src={mainLogo} style={ { width: '50px' } } alt="home"/>
      <NavLink
        to="/"
        className={splitLocation[1] === '' ? 'active' : 'inactive'}
        >
        Rockets|
      </NavLink>
      <NavLink
        to="missions"
        className={splitLocation[1] === 'missions' ? 'active' : 'inactive'}
        >
        Missions|
      </NavLink>
      <NavLink
        to="myprofile"
        className={splitLocation[1] === 'myprofile' ? 'active' : 'inactive'}
        >
        My Profile
      </NavLink>
      
    </nav>
  );
}

export default Header;