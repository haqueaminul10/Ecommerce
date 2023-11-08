//IMPORT COMPONENTS
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from './Pages/Cart'
import DashBoard from "./Pages/user/DashBoard";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import AdminRoute from "./Components/Routes/AdminRoute";
import AdminDashborad from "./Pages/Admin/AdminDashborad";
//ROUTING
import { Routes,Route } from "react-router-dom";




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<PrivateRoute/>}>
          <Route path="user" element={<DashBoard/>}/>
      </Route>
      <Route path="/dashboard" element={<AdminRoute/>}>
          <Route path="admin" element={<AdminDashborad/>}/>
      </Route>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
        
    </Routes>
    </>
  );
}

export default App;
