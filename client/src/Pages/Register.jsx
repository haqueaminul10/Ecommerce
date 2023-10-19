import React from "react";
//IMPORT LAYOUT
import Layout from "../Components/Layouts/Layout";

//IMPORT CSS
import "../Components/styles/register.css";

//IMPORT TEXTFIELDS
import TextField from "./TextField";

//REACT DOM
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="signinContainer">
        <form className="signin-form">
          <h1>Create New Account</h1> <hr />
          {/* FIRST NAME */}
          <TextField
            id="firstname"
            lable="First Name:"
            type="text"
            placeholder="Enter firstname"
            name="firstname"
            // value={formData.firstname}
            // onChange={handleChange}
            className="inputField"
          />
          {/* LAST NAME */}
          <TextField
            id="lastname"
            lable="Last Name:"
            type="text"
            placeholder="Enter lastname"
            name="lastname"
            // value={formData.lastname}
            // onChange={handleChange}
            className="inputField"
          />
          {/* EMAIL */}
          <TextField
            id="email"
            lable="Email Adress:"
            type="email"
            placeholder="example @gmail.com"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            className="inputField"
          />
          {/* PASSWORD */}
          <TextField
            id="password"
            lable="Password:"
            type="password"
            placeholder=""
            name="password"
            // value={formData.password}
            // onChange={handleChange}
            className="inputField"
          />
          {/* CONTACT NUMBER */}
          <TextField
            id="contactnumber"
            lable="Contact Number:"
            type="number"
            placeholder=""
            name="contactnumber"
            // value={formData.contactnumber}
            // onChange={handleChange}
            className="inputField"
          />
          <div>
            <button type="submit" className="submitButton">
              REGISTER
            </button>
            <h3 style={{ fontWeight: 400 }}>
              Sign up today and you'll be able to :
            </h3>
            <li>Speed your way through the checkout</li>
            <li>Track your orders easily</li>
            <li>Keep a record of all your purchases</li>
          </div>
        </form>
        <hr
          className="midLine"
          style={{ borderLeft: `2px solid black`, height: `700px` }}
        />

        <div>
          <h1>LogIn</h1>
          <hr />
          <p>Welcome back! Have an account</p>
          <button className="submitButton" onClick={() => navigate(`/login`)}>
            Login
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
