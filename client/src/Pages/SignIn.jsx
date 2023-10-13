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
      <form onSubmit={handleSubmit}>
        {/* FIRST NAME */}
        <InputField
          id="firstname"
          lable="First Name:"
          type="text"
          placeholder="Enter firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
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
        />
        <div>
          <button type="submit">REGISTER</button>
        </div>
      </form>
    </Layout>
  );
}

export default SignIn;
