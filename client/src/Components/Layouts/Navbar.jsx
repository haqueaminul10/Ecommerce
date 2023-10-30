import React, { useState } from "react";
//REACT ROUTER DOM

import { NavLink, useNavigate } from "react-router-dom";
//IMPORT ICON
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMail,
} from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { BsPerson, BsTelephone } from "react-icons/bs";

//IMPORT COMPONENTS
import AllDepartments from "../../Pages/AllDepartments";
import NavbarData from "../../Pages/NavbarData";
import { navbarData } from "../../Data";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      {/* UP TO 1080PPX DISPLAY */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo_name" onClick={() => navigate(`/`)}>
            Eco<span className="logo_names">Hub</span>
            <span className="logo_dot">.</span>
          </span>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search here ..."
            className="search_input"
          />
          <AiOutlineSearch className="search_icon" />
        </div>
        <div className="icons">
          <div>
            <BiGitCompare className="icon" />
          </div>
          <div>
            <AiOutlineHeart className="icon" />
          </div>
          <div>
            <div>
              <AiOutlineShoppingCart className="icon" onClick={toggleCart} />
            </div>
            {showCart && (
              <div className="cartSidebar">
                <div className="cartClose">
                  <AiOutlineClose onClick={toggleCart} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <AllDepartments />
        </div>
        <div>
          <NavbarData />
        </div>
        <div>
          <p>Free Shipping on Orders $500+</p>
        </div>
      </nav>

      {/* MOBILE,TAB OR SMALL DEVICE */}

      <nav className="responsive_navbar">
        <div className="nav_container">
          <section className="nav_left">
            <div className="icons">
              <AiOutlineMenu className="icon" onClick={toggleSidebar} />
            </div>
            {showSidebar && (
              <div className="sidebar">
                <AiOutlineClose
                  className="icon-close"
                  onClick={toggleSidebar}
                />
                <BiGitCompare className="side_icon1" />
                <AiOutlineHeart className="side_icon2" />

                <div>
                  <ul className="res_navbarUl">
                    {navbarData.map(({ name, link, icon }, index) => {
                      return (
                        <li key={index} className="res_navbarLi">
                          <NavLink to={link} className="res_navbar_link">
                            {name}
                          </NavLink>
                          <span>{icon}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="res_contact">
                  <div className="subContainer">
                    <BsTelephone className="headerIcon" />
                    (+800) 123 456 7890
                  </div>
                  <div className="subContainer">
                    <AiOutlineMail className="headerIcon" />
                    sample@email.com
                  </div>
                </div>
              </div>
            )}

            <div className="logo">
              <span className="logo_name" onClick={() => navigate(`/`)}>
                Eco<span className="logo_names">Hub</span>
                <span className="logo_dot">.</span>
              </span>
            </div>
          </section>
          <section className="nav_left">
            <div className="icons">
              <AiOutlineSearch
                className="res_searchicon"
                onClick={toggleInput}
              />
              {showInput && (
                <input
                  className="res_search_input"
                  type="text"
                  placeholder="Search here ..."
                />
              )}
            </div>
            <div className="icons">
              <BsPerson className="icon" onClick={() => navigate(`/login`)} />
            </div>
            <div className="icons">
              <AiOutlineShoppingCart
                className="icon"
                onClick={() => navigate(`/cart`)}
              />
            </div>
          </section>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
