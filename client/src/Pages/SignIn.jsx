import React, { useState } from "react";

//IMPORT LAYOUT
import Layout from "../Components/Layouts/Layout";
//IMPORT TEXTFIELDS
import InputField from "./InputField";
//TOASTFY
import toast from "react-hot-toast";
//AXOIS
import axios from "axios";
function SignIn() {
  const inputData = {
    fname: "",
    lname: "",
    email: "",
    contactnumber: "",
    password: "",
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
        { formData }
      );
      if (responseData && responseData.data.success) {
        toast.success(responseData.data.message);
      } else {
        toast.error(responseData.data.message);
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
      }
      console.log(err.message);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        {/* FIRST NAME */}
        <InputField
          id="fname"
          lable="First Name:"
          type="text"
          placeholder="Enter firstname"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
        />
        {/* LAST NAME */}
        <InputField
          id="lname"
          lable="Last Name:"
          type="text"
          placeholder="Enter lastname"
          name="lname"
          value={formData.lname}
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
        <div>
          <button type="submit">REGISTER</button>
        </div>
      </form>
    </Layout>
  );
}

export default SignIn;
