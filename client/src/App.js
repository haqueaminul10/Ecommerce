//IMPORT COMPONENTS
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

//ROUTING
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
        
    </Routes>
    </>
  );
}

export default App;
