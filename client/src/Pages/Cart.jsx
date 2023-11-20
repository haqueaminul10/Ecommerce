import React, { useContext } from "react";
// IMPORT LAYOUTS
import Layout from "../Components/Layouts/Layout";

//IMPORT COMPONENT
import "../Components/styles/cart.css";

//IMPORT ICON
import { FaRegTrashCan } from "react-icons/fa6";

//IMPORT CONTEX
import { CartContext } from "../Components/Context/CartContex";

function Cart({ item }) {
  const { id, image, price, title, amount } = item;
  const { removeCart, increaseProduct, decreaseButton } =
    useContext(CartContext);

  return (
    <>
      <div className="cartContainer">
        <div className="cartImage">
          <img className="productImage" src={image} alt="" />
        </div>
        <div>
          <p className="cartTitle">{title}</p>

          <div className="cartQuntity">
            <div>
              <p className="cartQuantityTitle">Quantity:</p>
              <span
                className="cartIncrement"
                onClick={() => decreaseButton(id)}
              >
                -
              </span>
              <span className="cartAmount">{amount}</span>
              <span
                className="cartIncrement"
                onClick={() => increaseProduct(id)}
              >
                +
              </span>
            </div>
            <div>
              <p className="cartQuantityTitle">Net Price:</p>
              <span className="cartPrice">{price}$</span>
            </div>
            <div>
              <p className="cartQuantityTitle">Total Price:</p>
              <span className="cartPrice">{amount * price}$</span>
            </div>
          </div>
        </div>
        <div>
          <FaRegTrashCan
            onClick={() => removeCart(id)}
            style={{ fontSize: `20px` }}
          />
        </div>
      </div>
    </>
  );
}

export default Cart;
