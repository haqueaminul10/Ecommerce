import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/navbar.css";
import NavData from "../Pages/NavData";
import AllDepartment from "../Pages/AllDepartment";
import Cart from "../Pages/Cart";
//IMPORT ICON
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { IoIosPerson } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import Search from "../Pages/Search";
import CartAsidebar from "../Pages/CartAsidebar";
import { CartContext } from "../Context/Cart";

function Navbar() {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);
  const { cart } = useContext(CartContext);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <>
      {/* UP TO 1080PPX DISPLAY */}
      <nav className="navbar">
        <div className="logo fixed-items">
          <span className="logo_name" onClick={() => navigate(`/`)}>
            Eco<span className="logo_names">Hub</span>
            <span className="logo_dot">.</span>
          </span>
        </div>
        <div className="search fixed-items">
          <Search />
        </div>
        <div className="icons fixed-items">
          <div>
            <BiGitCompare className="icon" />
          </div>
          <div>
            <AiOutlineHeart className="icon" />
          </div>

          <div>
            <div>
              <CartAsidebar />
            </div>
          </div>
        </div>
        <div>
          <AllDepartment />
        </div>
        <div>
          <NavData />
        </div>
        <div>
          <p>Free Shipping on Orders $500+</p>
        </div>
      </nav>

      {/* MOBILE,TAB OR SMALL DEVICE */}
      <nav className="responsive_navbar">
        <div className="nav_container">
          <div className="icons">
            <AiOutlineMenu className="icon" onClick={toggleSideBar} />
          </div>
          <div className="logo">
            <span className="logo_name" onClick={() => navigate(`/`)}>
              Eco<span className="logo_names">Hub</span>
              <span className="logo_dot">.</span>
            </span>
          </div>
          <div className="icons">
            <div className="cart_container">
              <span className="cart_length">{cart.length}</span>
              <AiOutlineShoppingCart
                className="icon"
                onClick={() => navigate(`/cart`)}
              />
            </div>

            <IoIosPerson className="icon" onClick={() => navigate(`/login`)} />
          </div>
          {sideBar && (
            <div className="sidebar">
              <div className="sidebar_container">
                <div className="res_header">
                  <div className="logo">
                    <span className="logo_name" onClick={() => navigate(`/`)}>
                      Eco<span className="logo_names">Hub</span>
                      <span className="logo_dot">.</span>
                    </span>
                  </div>
                  <div>
                    <AiOutlineClose
                      className="close_icon"
                      onClick={toggleSideBar}
                    />
                  </div>
                </div>
                <hr style={{ color: `red` }} />
                <div className="search fixed-items">
                  <Search />
                </div>
                <div>
                  <NavData />
                </div>
                <div className="res_info">
                  <div className="subContainer">
                    <BsTelephone className="headerIcon" />
                    (+800) 123 456 7890
                  </div>
                  <div className="subContainer">
                    <AiOutlineMail className="headerIcon" />
                    sample@email.com
                  </div>
                  <div className="subContainer">
                    <IoLocationOutline className="headerIcon" />
                    Store Location
                  </div>
                </div>
                <div>
                  <h3>Follow Us</h3>
                  <div>
                    <FaFacebookF className="footer_two_left_icon" />
                    <AiOutlineWhatsApp className="footer_two_left_icon" />
                    <AiFillInstagram className="footer_two_left_icon" />
                    <AiOutlineTwitter className="footer_two_left_icon" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
