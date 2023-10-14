import React, { useState } from "react";
//IMPORT LAYOUT
import Layout from "../Components/Layouts/Layout";
//IMPORT INPUTFIELDS
import InputField from "./InputField";
//REACT DOM
import { useNavigate } from "react-router-dom";
//AXOIS
import axios from "axios";
//TOASTFY
import toast from "react-hot-toast";
//CSS FILE
import "../Components/styles/login.css";
function Login() {
  const navigate = useNavigate();
  const inputValue = { email: "", password: "" };
  const [logIn, setLogIn] = useState(inputValue);
  //HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogIn({ ...logIn, [name]: value });
  };
  //HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseLogin = await axios.post(
        `${process.env.REACT_APP_API}api/auth/login`,
        logIn
      );
      if (responseLogin.data.success) {
        toast.success(responseLogin.data.message);
        setLogIn(inputValue);
        navigate("/");
      } else {
        toast.error(responseLogin.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something going wrong");
    }
  };
  return (
    <Layout>
      <div className="loginContainer">
        <form onSubmit={handleSubmit}>
          <h1>LogIn</h1> <hr />
          <p>Welcome back! Sign in to your account</p>
          <InputField
            id="email"
            lable="Email Adress:"
            type="email"
            name="email"
            value={logIn.email}
            placeholder="example@gmail.com"
            onChange={handleChange}
            className="inputField"
          />
          <InputField
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
          <button className="submitButton" type="submit">
            REGISTER
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
