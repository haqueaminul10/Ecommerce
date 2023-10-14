import React, { useState } from "react";

//IMPORT LAYOUT
import Layout from "../Components/Layouts/Layout";
//IMPORT TEXTFIELDS
import InputField from "./InputField";
//TOASTFY
import toast from "react-hot-toast";
//AXOIS
import axios from "axios";
//REACT DOM
import { useNavigate } from "react-router-dom";
//CSS FILE
import "../Components/styles/signin.css";
function SignIn() {
  const navigate = useNavigate();
  const inputData = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    contactnumber: "",
  };
  const [formData, setFormData] = useState(inputData);
  //HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formData);
    try {
      const responseData = await axios.post(
        `${process.env.REACT_APP_API}api/auth/register`,
        formData
      );
      if (responseData.data.success) {
        toast.success(responseData.data.message);
        setFormData(inputData);
        navigate("/login");
      } else {
        toast.error(responseData.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something is wrong");
    }
  };
  return (
    <Layout>
      <div className="signinContainer">
        <form onSubmit={handleSubmit} className="signin-form">
          <h1>Create New Account</h1> <hr />
          {/* FIRST NAME */}
          <InputField
            id="firstname"
            lable="First Name:"
            type="text"
            placeholder="Enter firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="inputField"
          />
          {/* LAST NAME */}
          <InputField
            id="lastname"
            lable="Last Name:"
            type="text"
            placeholder="Enter lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="inputField"
          />
          {/* EMAIL */}
          <InputField
            id="email"
            lable="Email Adress:"
            type="email"
            placeholder="example @gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="inputField"
          />
          {/* PASSWORD */}
          <InputField
            id="password"
            lable="Password:"
            type="password"
            placeholder=""
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="inputField"
          />
          {/* CONTACT NUMBER */}
          <InputField
            id="contactnumber"
            lable="Contact Number:"
            type="number"
            placeholder=""
            name="contactnumber"
            value={formData.contactnumber}
            onChange={handleChange}
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

export default SignIn;
