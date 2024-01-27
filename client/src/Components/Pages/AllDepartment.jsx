import React, { useState } from "react";
import "../Style/navbar.css";
import { departmentData } from "../Data";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink } from "react-router-dom";
function AllDepartment() {
  const [department, setDepartment] = useState(false);

  const handleOpen = () => {
    setDepartment(!department);
  };
  return (
    <>
      <div>
        <button className="departmentButton" onClick={handleOpen}>
          <AiOutlineMenuUnfold />
          All Departments
        </button>
        {department && (
          <ul className="departmentUl">
            {departmentData.map(({ id, name, url }) => {
              return (
                <li key={id} className="departmentList">
                  <NavLink to={url} className="nav_link">
                    <span>{name}</span> <hr style={{ color: `whitesmoke` }} />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
export default AllDepartment;
