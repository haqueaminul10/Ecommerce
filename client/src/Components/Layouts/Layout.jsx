import React from "react";

//IMPORT COMPONENTS
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

//IMPORT REACT TOASTIFY
import { ToastContainer } from "react-toastify";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <ToastContainer position="top-center" />
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
