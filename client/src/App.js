//IMPORT COMPONENTS
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from './Pages/Cart'

//ROUTING
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
        
    </Routes>
    </>
  );
}

export default App;
