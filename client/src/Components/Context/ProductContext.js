import React, { createContext, useEffect, useState } from "react";

const ProductContext=createContext();

const ProductProvider =({children})=>{

    const [products,setProduct]=useState([])
    const fetchProduct =async()=>{
        const response =await fetch(`https://fakestoreapi.com/products`)
        const data=await response.json()
        // console.log(data);
        setProduct(data)
    }

    useEffect(()=>{
        fetchProduct()
    },[])

    return(
        <ProductContext.Provider value={{products}}> {children}</ProductContext.Provider>
    )
}

export{ProductContext,ProductProvider}