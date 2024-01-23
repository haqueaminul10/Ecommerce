import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/productDetails.css";
import { FaFacebookF, FaTwitter, FaRegHeart, FaCartPlus } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import ProductImage from "./ProductImage";
import { CartContext } from "../Context/Cart";

export default function () {
  const { id } = useParams();
  const [productD, setProductD] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, decreaseProduct, increaseProduct } =
    useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      //console.log(data);
      setProductD(data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {productD ? (
        <>
          <div className="product_container">
            <section className="product_images">
              <ProductImage images={productD.images} />
            </section>
            <section className="product_details">
              <div className="p_brand-c">
                Brand: <span className="p_brand">{productD.brand}</span>
              </div>
              <div className="p_brand-c">
                Title: <span className="p_brand">{productD.title}</span>
              </div>
              <div className="p_brand-c">
                Category: <span className="p_brand">{productD.category}</span>
              </div>

              <span className="p_description">{productD.description}</span>

              <span className="p_rate">Rating: {productD.rating}</span>
              <span className="p_price">${productD.price}</span>
              <span className="p_discount">
                Discount: {productD.discountPercentage}%
              </span>
              <span>
                Available: <span className="p_stock">In stock</span>
              </span>
              <span className="p_available">
                In stock: <span className="p_stock">{productD.stock}</span>
              </span>
              <div className="p_social">
                <button className="p_share">
                  <FaFacebookF />
                  <span>Share</span>
                </button>
                <button className="p_tweet">
                  <FaTwitter />
                  <span>Tweet</span>
                </button>
              </div>
              <div className="p_social">
                <button className="p_compare">
                  <IoMdGitCompare />
                  Compare
                </button>
                <button className="p_compare">
                  <FaRegHeart />
                  Wishlist
                </button>
              </div>
              <p>Quantity:</p>
              <div className="p_social">
                <div className="p_quantity">
                  <strong className="quantity">{quantity}</strong>
                  <strong
                    className="increment"
                    onClick={() => increaseProduct(productD.id)}
                  >
                    +
                  </strong>
                  <strong
                    className="decrement"
                    onClick={() => decreaseProduct(productD.id)}
                  >
                    -
                  </strong>
                </div>
                <button className="p_cart" onClick={() => addToCart(productD)}>
                  <FaCartPlus />
                  <span>Add to Cart</span>
                </button>
              </div>
              <button className="p_buy">Buy it now</button>
            </section>
          </div>
        </>
      ) : (
        <>NO Product Selected</>
      )}
    </>
  );
}
