import React, { useContext, useState } from "react";
import "../Style/navbar.css";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../Context/Cart";
import "../Style/cart.css";

function CartAsidebar() {
  const [showCart, setShowCart] = useState(false);
  const { cart, removeFromCart, decreaseProduct, increaseProduct, totalPrice } =
    useContext(CartContext);
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <>
      <div>
        <div className="cart_container">
          <span className="cart_length">{cart.length}</span>
          <AiOutlineShoppingCart className="icon" onClick={toggleCart} />
        </div>
        {showCart && (
          <div className="cartSidebar">
            <div className="cartClose">
              <AiOutlineClose onClick={toggleCart} />
            </div>
            <div>
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
                            <span className="cart_price">
                              ${items.price * items.quantity}
                            </span>

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
              <p style={{ textAlign: `center` }}>
                Total: <span style={{ color: `green` }}>${totalPrice}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartAsidebar;
