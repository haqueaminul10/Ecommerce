import React, { useContext } from "react";

//IMPORT LAYOUTS
import Layout from "../Components/Layouts/Layout";

//IMPORT CAROUSEL
import HomeCarousel from "../Components/Carousel/HomeCarousel";

//IMPORT PRODUCT
import Product from "./Product";

//IMPORT CONTEXT
import { ProductContext } from "../Components/Context/ProductContext";

function Home() {
  const { products } = useContext(ProductContext);
  //console.log(products);
  return (
    <Layout>
      <div>
        <HomeCarousel />
      </div>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr 1fr`,
        }}
      >
        {products.map((product) => {
          return (
            <div style={{ border: `1px solid green`, margin: `20px` }}>
              <Product key={product.id} product={product} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Home;
