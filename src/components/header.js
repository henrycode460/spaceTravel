import React from 'react';
import { NavLink } from "react-router-dom";
import mainLogo from "../image/home.png";

function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav>
      <img  src={mainLogo} style={ { width: '50px' } } alt="home"/>
      <NavLink
        to=""
        style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }
        >
        Rockets|
      </NavLink>
      <NavLink
        to=""
        style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }
        >
        Missions|
      </NavLink>
      <NavLink
        to=""
        style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }
        >
        My Profile
      </NavLink>
      
    </nav>
  );
}

export default Header;