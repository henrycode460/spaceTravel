import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav>
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