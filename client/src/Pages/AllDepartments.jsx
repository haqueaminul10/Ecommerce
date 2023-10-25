import React, { useState } from "react";

//IMPORT ICON
import { AiOutlineMenuUnfold } from "react-icons/ai";

//IMPORT FILE
import { deparmentData } from "../Data";
import "../Components/styles/allDepartments.css";
//REACT ROUTER DOM
import { NavLink } from "react-router-dom";

function AllDepartments() {
  const [deparment, setDepartment] = useState(false);

  //HANDLE CHANGE
  const handleChange = () => {
    setDepartment(!deparment);
  };
  return (
    <>
      <div className="departmentContainer">
        <button className="departmentButton" onClick={handleChange}>
          <AiOutlineMenuUnfold />
          All Departments
        </button>
        {deparment && (
          <ul className=" departmentUl">
            {deparmentData.map(({ name, url }, index) => {
              return (
                <li key={index} className="departmentList">
                  <NavLink to={url} className="nav_link">
                    <span>{name}</span>
                    <hr style={{ color: `whitesmoke` }} />
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

export default AllDepartments;
