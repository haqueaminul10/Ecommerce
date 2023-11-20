import React, { useContext } from "react";
//REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";
//IMPORT ICON
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
//IMPORT CSS
import "../Components/styles/Product.css";
//IMPORT CONTEXT
import { CartContext } from "../Components/Context/CartContex";

function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  //console.log(useContext(CartContext));
  const navigate = useNavigate();
  //console.log(product);
  const { category, description, id, image, price, title, rating } = product;
  //console.log(product.id);
  return (
    <div style={{ display: `flex`, justifyContent: `space-between` }}>
      <section>
        <img
          src={image}
          alt=""
          style={{ height: `150px`, width: `200px`, objectFit: `contain` }}
        />
      </section>
      <section>
        <span style={{ display: `block` }}> Title:{title}</span>
        <span style={{ display: `block` }}> Price:{price}$</span>
        <div style={{ margin: `10px ` }}>
          <BsFillArrowRightSquareFill
            style={{ fontSize: `30px ` }}
            onClick={() => navigate(`/product/${id}`)}
          />
          <AiOutlineShoppingCart
            style={{ fontSize: `30px `, float: `right`, background: `yellow` }}
            onClick={() => addToCart(product, id)}
          />
        </div>
      </section>
    </div>
  );
}

export default Product;
