import React, { useContext, useEffect, useState } from "react";
import "../Style/product.css";
import { FaCartPlus } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { GetAllProductsContext } from "../Context/Product";
import { CartContext } from "../Context/Cart";

export default function () {
  const navigate = useNavigate();
  const { product, setProduct } = useContext(GetAllProductsContext);
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="card">
        {product.map((item) => {
          return (
            <div key={item.id} className="card_container">
              <div className="card_img">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="card_title">
                <span>{item.title}</span>
              </div>
              <div className="card_des">
                <span>{item.description}</span>
              </div>
              <div className="card_rp">
                <span>Rate: {item.rating}</span>
                <span className="card_price">${item.price}</span>
              </div>
              <div>
                <div className="card_details">
                  <button
                    className="card_button"
                    onClick={() => navigate(`/product_details/${item.id}`)}
                  >
                    <FaEye className="card_icon" />
                    <span className="button_text">View Details</span>
                  </button>
                  <button
                    className="card_button"
                    onClick={() => addToCart(item)}
                  >
                    <FaCartPlus className="card_icon" />
                    <span className="button_text">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
