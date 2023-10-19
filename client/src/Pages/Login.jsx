import React from "react";

//IMPORT LAYOUT
import Layout from "../Components/Layouts/Layout";

//IMPORT CSS
import "../Components/styles/login.css";

//IMPORT TEXTFIELDS
import TextField from "./TextField";

//REACT DOM
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="loginContainer">
        <form>
          <h1>LogIn</h1> <hr />
          <p>Welcome back! Sign in to your account</p>
          <TextField
            id="email"
            lable="Email Adress:"
            type="email"
            name="email"
            // value={logIn.email}
            placeholder="example@gmail.com"
            // onChange={handleChange}
            className="inputField"
          />
          <TextField
            id="password"
            lable="Password:"
            type="password"
            name="password"
            // value={logIn.password}
            placeholder=""
            // onChange={handleChange}
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
