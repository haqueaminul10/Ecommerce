import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search() {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search here ..."
        className="search_input"
      />
      <AiOutlineSearch className="search_icon" />
    </>
  );
}
