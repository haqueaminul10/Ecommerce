import React, { useContext } from "react";

//IMPORT LAYOUT
import Layout from "../Components/Layouts/Layout";
import "../Components/styles/productDetails.css";

//REACT ROUTER DOM
import { useParams } from "react-router-dom";

//IMPORT CONTEXT
import { ProductContext } from "../Components/Context/ProductContext";
import { CartContext } from "../Components/Context/CartContex";

function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  console.log(product);
  const { title, category, description, image, price, rating } = product;

  return (
    <Layout>
      <div className="proContainer">
        <section className="proSec1">
          <img className="proImage" src={image} alt="" />
        </section>
        <section className="proSec2">
          <h2 className="title">{title}</h2>
          <p className="">Categoty:{category}</p>
          <span>{description}</span>
          <span>{rating.count}</span>
          <span>{rating.rate}</span>
          <p>Price:{price}</p>
          <button onClick={() => addToCart(product, id)}> Add to cart</button>
        </section>
        <div></div>
      </div>
    </Layout>
  );
}

export default ProductDetails;
