import React from "react";

//IMPORT COMPONENTS
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
//REACT TOSTER
import { Toaster } from "react-hot-toast";
function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <Toaster />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
