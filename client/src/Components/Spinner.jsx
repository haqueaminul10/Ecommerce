import React, { useEffect, useState } from "react";
//METARIAL UI
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

//REACT ROUTER DOM
import { useNavigate, useLocation } from "react-router-dom";

function Spinner() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preValue) => --preValue);
    }, 1000);
    count == 0 &&
      navigate("/login", {
        state: location.pathname,
      });
    return () => {
      clearInterval(interval);
    };
  }, [count, navigate, location]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: `center`,
          justifyContent: `center`,
          height: `600px`,
        }}
      >
        <h1>Redirecting to you in {count}</h1>
        <CircularProgress />
      </Box>
    </>
  );
}

export default Spinner;
