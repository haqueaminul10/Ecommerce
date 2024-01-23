import React, { useContext, useState } from "react";
import "../Style/navbar.css";
import { CartContext } from "../Context/Cart";
import "../Style/cart.css";

function Cart() {
  const { cart, removeFromCart, decreaseProduct, increaseProduct } =
    useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <div>
            {cart.map((items, index) => {
              return (
                <div key={index} className="cart_card">
                  <div className="cart_image">
                    <img src={items.thumbnail} alt="" />
                  </div>
                  <div>
                    <span className="cart_brand">{items.brand}</span>
                    <span className="cart_title">{items.title}</span>
                    <span className="cart_price">${items.price}</span>

                    <div>
                      <div className="cart_quantity">
                        Quantity:
                        <div>
                          <span className="quantity_number">
                            {items.quantity}
                          </span>
                          <span
                            onClick={() => increaseProduct(items.id)}
                            className="quantity_number_in"
                          >
                            +
                          </span>
                          <span
                            onClick={() => decreaseProduct(items.id)}
                            className="quantity_number_de"
                          >
                            -
                          </span>
                        </div>
                        <span
                          className="cart_remove"
                          onClick={() => removeFromCart(items.id)}
                        >
                          remove
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div>
          <p style={{ textAlign: `center` }}>No Items in here</p>
        </div>
      )}
    </>
  );
}

export default Cart;
