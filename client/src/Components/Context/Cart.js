import React, { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const addToCart = (item) => {
    //console.log(`${item.id}`);
    if (cart.length > 0) {
      const isExist = cart.filter((a) => a.id === item.id);
      if (isExist.length > 0) {
        const c = cart.map((b) => {
          if (b.id === item.id) {
            setTotalPrice(totalPrice + b.price);
            return { ...b, quantity: b.quantity + 1 };
          } else {
            return b;
          }
        });
        setCart(c);
      } else {
        const a = { ...item, quantity: 1 };
        setCart((preValue) => [...preValue, a]);
        setTotalPrice(totalPrice + item.price);
      }
    } else {
      const isNotExist = { ...item, quantity: 1 };
      setCart((preValue) => [...preValue, isNotExist]);
      setTotalPrice(totalPrice + item.price);
    }
  };
  const removeFromCart = (id) => {
    //console.log(id);
    const updateCart = cart.filter((item) => {
      setTotalPrice(totalPrice - item.price * item.quantity);
      return item.id !== id;
    });
    setCart(updateCart);
  };
  const increaseProduct = (id) => {
    const cartItem = cart.filter((item) => item.id === id);
    if (cartItem) {
      const updateCart = cart.map((item) => {
        if (item.id === id) {
          setTotalPrice(totalPrice + item.price);
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(updateCart);
    }
  };
  const decreaseProduct = (id) => {
    const cartItem = cart.filter((item) => item.id === id);
    if (cartItem) {
      const updateCart = cart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          setTotalPrice(totalPrice - item.price);
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(updateCart);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        increaseProduct,
        decreaseProduct,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
