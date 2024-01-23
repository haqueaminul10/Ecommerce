import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import TextField from "../Layouts/TextField";
import "../Style/login.css";
import "../Style/register.css";
import { useNavigate } from "react-router-dom";
function LogIn() {
  const navigate = useNavigate();
  const inputData = { email: "", password: "" };
  const [formData, setFormData] = useState(inputData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    alert(`Login succssfully`);
  };
  return (
    <>
      <div className="loginContainer">
        <form onSubmit={handleSubmit}>
          <h1>LogIn</h1> <hr />
          <p>Welcome back! Sign in to your account</p>
          <TextField
            id="email"
            lable="Email Adress:"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="inputField"
          />
          <TextField
            id="password"
            lable="Password:"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=""
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
            className="submitButton"
            type="submit"
            onClick={() => navigate(`/register`)}
          >
            REGISTER
          </button>
        </div>
      </div>
    </>
  );
}

export default LogIn;
