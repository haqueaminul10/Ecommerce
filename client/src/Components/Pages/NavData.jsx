import React from "react";
import { navData } from "../Data";
import { NavLink } from "react-router-dom";
import "../Style/navbar.css";

function NavData() {
  //console.log(navData);
  return (
    <ul className="navbarUl ">
      {navData.map(({ id, name, url, icon }) => {
        return (
          <li key={id} className="navbarLi ">
            <NavLink to={url} className="navbar_link ">
              {name}
            </NavLink>

            <span className="navbar_link ">{icon}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default NavData;
