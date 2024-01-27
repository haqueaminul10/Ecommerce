import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../Style/navbar.css";
import { GetAllProductsContext } from "../Context/Product";
export default function Search() {
  const { searchProduct, setSearchProduct } = useContext(GetAllProductsContext);
  return (
    <>
      <input
        type="text"
        id="search"
        name="search"
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
        placeholder="Search here ..."
        className="search_input"
      />

      <AiOutlineSearch className="search_icon" />
    </>
  );
}
