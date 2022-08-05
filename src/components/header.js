import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import mainLogo from "../image/home.png";
import './header.css';

function Header() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <nav>
      <div className='home'>
        <img  src={mainLogo} style={ { width: '50px' } } alt="home"/>
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <div className='links'>
        <NavLink
          to="/"
          className={splitLocation[1] === '' ? 'active' : 'inactive'}
          >
          Rockets
        </NavLink>
        <NavLink
          to="missions"
          className={splitLocation[1] === 'missions' ? 'active' : 'inactive'}
          >
          Missions
        </NavLink>
        |
        <NavLink
          to="myprofile"
          className={splitLocation[1] === 'myprofile' ? 'active' : 'inactive'}
          >
          My Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;