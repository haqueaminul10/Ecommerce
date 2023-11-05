import React, { useContext, useState } from "react";
import axios from "axios";
//IMPORT LAYOUT
import Layout from "../Components/Layouts/Layout";

//IMPORT CSS
import "../Components/styles/login.css";

//IMPORT TEXTFIELDS
import TextField from "./TextField";

//IMPORT REACT TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//REACT DOM
import { useNavigate } from "react-router-dom";
//IMPORT CONTEXT
import { AuthContext } from "../Components/Context/Auth";

function Login() {
  const navigate = useNavigate();
  const [logIn, setLogIn] = useState({ email: "", password: "" });
  const { auth, setAuth } = useContext(AuthContext);

  //HANGLE CHANGE FUNCTION
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogIn({
      ...logIn,
      [name]: value,
    });
  };

  //HANDLE SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:7000/auth/api/login`,
        logIn
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(response.data));
        navigate("/");
      } else if (response.status === 401) {
        toast.error(response.data.message);
      } else if (response.status === 402) {
        toast.error(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Login Faild");
    }
  };
  return (
    <Layout>
      <div className="loginContainer">
        <form onSubmit={handleSubmit}>
          <h1>LogIn</h1> <hr />
          <p>Welcome back! Sign in to your account</p>
          <TextField
            id="email"
            lable="Email Adress:"
            type="email"
            name="email"
            value={logIn.email}
            placeholder="example@gmail.com"
            onChange={handleChange}
            className="inputField"
          />
          <TextField
            id="password"
            lable="Password:"
            type="password"
            name="password"
            value={logIn.password}
            placeholder=""
            onChange={handleChange}
            className="inputField"
          />
          <p className="forgetPass">Forgotten Password?</p>
          <button type="submit" className="submitButton">
            LogIn
          </button>
        </form>
        <hr
          className="midLine"
          style={{ borderLeft: `2px solid black`, height: `450px` }}
        />
        <div>
          <h1>Create New Account</h1>
          <hr />
          <span>Create your own Account</span>
          <p>Sign up today and you'll be able to :</p>
          <li>Speed your way through the checkout</li>
          <li>Track your orders easily</li>
          <li>Keep a record of all your purchases</li>
          <button
            onClick={() => navigate("/register")}
            className="submitButton"
            type="submit"
          >
            REGISTER
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
