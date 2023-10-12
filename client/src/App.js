//IMPORT COMPONENTS
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn"
import Login from "./Pages/Login";
//ROUTING
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<SignIn/>}/>
      <Route path="/login" element={<Login/>}/>
        
    </Routes>
    </>
  );
}

export default App;
