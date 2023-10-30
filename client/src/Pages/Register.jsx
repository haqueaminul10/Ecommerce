import React, { useState } from "react";
import axios from "axios";
//IMPORT LAYOUT
import Layout from "../Components/Layouts/Layout";

//IMPORT CSS
import "../Components/styles/register.css";

//IMPORT REACT TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//IMPORT TEXTFIELDS
import TextField from "./TextField";

//REACT DOM
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const inpuData = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    contactnumber: "",
  };
  const [formData, setFormData] = useState(inpuData);

  //HANDLE CHANGE FUNCTION
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //HANDLE SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        `http://localhost:7000/auth/api/register`,
        formData
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate(`/login`);
      } else if (response.status === 401) {
        toast.error(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.log("Error:", err);
      toast.error("Registation Failed");
    }
    console.log(process.env.REACT_APP_API);
  };
  return (
    <Layout>
      <div className="signinContainer">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h1>Create New Account</h1> <hr />
          {/* FIRST NAME */}
          <TextField
            id="firstname"
            lable="First Name:"
            type="text"
            placeholder="Enter firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="inputField"
            required
          />
          {/* LAST NAME */}
          <TextField
            id="lastname"
            lable="Last Name:"
            type="text"
            placeholder="Enter lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="inputField"
            required
          />
          {/* EMAIL */}
          <TextField
            id="email"
            lable="Email Adress:"
            type="email"
            placeholder="example @gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="inputField"
            required
          />
          {/* PASSWORD */}
          <TextField
            id="password"
            lable="Password:"
            type="password"
            placeholder=""
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="inputField"
            required
          />
          {/* CONTACT NUMBER */}
          <TextField
            id="contactnumber"
            lable="Contact Number:"
            type="number"
            placeholder=""
            name="contactnumber"
            value={formData.contactnumber}
            onChange={handleChange}
            className="inputField"
            required
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
