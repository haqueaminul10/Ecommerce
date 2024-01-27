import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { GetAllProductsProvider } from "./Components/Context/Product";
import { CartProvider } from "./Components/Context/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <GetAllProductsProvider>
      <App />
    </GetAllProductsProvider>
  </CartProvider>
);
