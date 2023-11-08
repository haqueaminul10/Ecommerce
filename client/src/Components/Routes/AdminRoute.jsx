import React, { useState, useContext, useEffect } from "react";

//IMPORT CONTEXT
import { AuthContext } from "../Context/Auth";
//REACT DOM
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

function AdminRoute() {
  const { auth, setAuth } = useContext(AuthContext);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      const resposnse = await axios.get(
        `http://localhost:7000/auth/api/admin-auth`,
        { headers: { Authorization: auth?.token } }
      );

      if (resposnse.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);
  return ok ? <Outlet /> : <Spinner />;
}

export default AdminRoute;
