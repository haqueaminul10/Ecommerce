import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// IMPORT COMPONENTS
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import LogIn from "./Components/Pages/LogIn";
import About from "./Components/Pages/About";
import Cart from "./Components/Pages/Cart";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Navbar from "./Components/Layouts/Navbar";
import ProductDetails from "./Components/Pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product_details/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
