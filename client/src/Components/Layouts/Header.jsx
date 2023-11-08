import React, { useContext, useState } from "react";

//IMPORT ICON
import { BsTelephone, BsGlobe } from "react-icons/bs";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

//IMPORT CSS
import "../styles/header.css";
import { NavLink, useNavigate } from "react-router-dom";

//IMPORT CONTEXT
import { AuthContext } from "../Context/Auth";

//IMPORT REACT TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //HANDLE LOGOUT
  const handleLogout = async () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/login");
  };
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

          {/* REGISTER USER */}

          {!auth.user ? (
            <div className="subContainer">
              <AiOutlineUser className="headerIcon" />
              <span onClick={() => navigate(`/login`)}>Sign in</span> or
              <span onClick={() => navigate(`/register`)}>Register</span>
            </div>
          ) : (
            <div className="subContainer">
              <AiOutlineUser className="headerIcon" />

              <div className="dropdown">
                <div onClick={toggleMenu} className="user-name">
                  {auth?.user?.firstname}
                </div>
                {isOpen && (
                  <ul className="dropdown-content">
                    <NavLink
                      className="navlink"
                      to={`/dashboard/${
                        auth?.user?.role === "admin" ? "admin" : "user"
                      }`}
                    >
                      Dashboard
                    </NavLink>
                    <NavLink className="navlink" onClick={handleLogout}>
                      Logout
                    </NavLink>
                  </ul>
                )}
              </div>

              {/* <div onClick={handleLogout}>Logout</div> */}
            </div>
          )}
          <div className="subContainer">
            <BsGlobe className="headerlastIcon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
