import React, { useState, useEffect, createContext } from "react";

const GetAllProductsContext = createContext();

const GetAllProductsProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredP, setFilteredP] = useState([]);
  useEffect(() => {
    const filterProduct = filteredP.filter((pr) => {
      return pr.title.toLowerCase().includes(searchProduct.toLowerCase());
    });
    setProduct(filterProduct);
  }, [searchProduct]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        const data = await response.json();
        //console.log(data);
        setFilteredP(data.products);
        setProduct(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <GetAllProductsContext.Provider
      value={{ product, setProduct, searchProduct, setSearchProduct }}
    >
      {children}
    </GetAllProductsContext.Provider>
  );
};

export { GetAllProductsContext, GetAllProductsProvider };
