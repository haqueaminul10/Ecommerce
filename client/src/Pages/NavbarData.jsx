import React from "react";

//IMPORT NAVBAR DATA
import { navbarData } from "../Data";
import "../Components/styles/navbarData.css";

//REACT ROUTER DOM
import { NavLink } from "react-router-dom";

function NavbarData() {
  return (
    <>
      <ul className="navbarUl">
        {navbarData.map(({ name, link, icon }, index) => {
          return (
            <li key={index} className="navbarLi">
              <NavLink to={link} className="navbar_link">
                {name}
              </NavLink>
              <span>{icon}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default NavbarData;
