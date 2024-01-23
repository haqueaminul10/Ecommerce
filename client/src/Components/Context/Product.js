import React, { useState, useEffect, createContext } from "react";

const GetAllProductsContext = createContext();

const GetAllProductsProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        const data = await response.json();
        //console.log(data);

        setProduct(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <GetAllProductsContext.Provider value={{ product, setProduct }}>
      {children}
    </GetAllProductsContext.Provider>
  );
};

export { GetAllProductsContext, GetAllProductsProvider };
