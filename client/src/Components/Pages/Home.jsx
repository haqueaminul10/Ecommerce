import React, { useEffect } from "react";
import Carousel from "./Carousel";
import Product from "./Product";

function Home() {
  return (
    <>
      <div>
        <Carousel />
      </div>
      <div>
        <Product />
      </div>
    </>
  );
}

export default Home;
