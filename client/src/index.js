import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//REACT ROUTER DOM
import { BrowserRouter } from 'react-router-dom';
//USING CONTEXT
import { AuthProvider } from './Components/Context/Auth';
import {ProductProvider} from "./Components/Context/ProductContext";
import {CartProvider} from "./Components/Context/CartContex"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthProvider>
    
      <CartProvider>
      <ProductProvider>
      <App />
      </ProductProvider>
      </CartProvider>
       
  </AuthProvider>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
