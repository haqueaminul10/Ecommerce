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
      <form onSubmit={handleSubmit}>
        <InputField
          id="email"
          lable="Email Adress:"
          type="email"
          name="email"
          value={logIn.email}
          placeholder="example@gmail.com"
          onChange={handleChange}
        />
        <InputField
          id="password"
          lable="Password:"
          type="password"
          name="password"
          value={logIn.password}
          placeholder=""
          onChange={handleChange}
        />
        <button type="submit">LogIn</button>
      </form>
    </Layout>
  );
}

export default Login;
