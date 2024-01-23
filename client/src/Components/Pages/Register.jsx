import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import { useNavigate } from "react-router-dom";
import TextField from "../Layouts/TextField";

function Register() {
  const navigate = useNavigate();
  const inputData = {
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    contactnumber: "",
    password: "",
  };
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
    alert(`Register successfully`);
  };

  return (
    <>
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
          {/* GENDER SELECTION */}
          <label htmlFor="gender">Choose Gender:</label>
          <select
            id="gender"
            name="gender"
            className="selectField"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
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
    </>
  );
}

export default Register;
