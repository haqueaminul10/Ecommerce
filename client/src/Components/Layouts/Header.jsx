import React from "react";

//IMPORT ICON
import { BsTelephone, BsGlobe } from "react-icons/bs";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

//IMPORT CSS
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="headerContainer">
        <div className="section">
          <div className="subContainer">
            <BsTelephone className="headerIcon" />
            (+800) 123 456 7890
          </div>
          <div className="subContainer">
            <AiOutlineMail className="headerIcon" />
            sample@email.com
          </div>
        </div>
        <div className="section">
          <div className="subContainer">
            <IoLocationOutline className="headerIcon" />
            Store Location
          </div>
          <div className="subContainer">
            <AiOutlineUser className="headerIcon" />
            <span onClick={() => navigate(`/login`)}>Sign in</span> or
            <span onClick={() => navigate(`/register`)}>Register</span>
          </div>
          <div className="subContainer">
            <BsGlobe className="headerlastIcon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
