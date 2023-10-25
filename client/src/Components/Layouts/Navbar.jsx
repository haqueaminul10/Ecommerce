import React from "react";
//IMPORT ICON
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";

//IMPORT COMPONENTS
import AllDepartments from "../../Pages/AllDepartments";
import NavbarData from "../../Pages/NavbarData";
import "../styles/navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div>
          <span>
            EcoHub<span>.</span>
          </span>
        </div>
        <div>
          <input type="text" placeholder="Search here ..." />
          <AiOutlineSearch />
        </div>
        <div>
          <BiGitCompare />
          <AiOutlineHeart />
          <AiOutlineShoppingCart />
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
    </>
  );
}

export default Navbar;
