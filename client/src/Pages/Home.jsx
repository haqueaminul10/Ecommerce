import React, { useContext, useState } from "react";

//IMPORT LAYOUT
import Layout from "../Components/Layouts/Layout";
// IMPORT CAROUSEL
import HomeCarousel from "../Components/Carousel/HomeCarousel";
//IMPORT CONTEXT
import { AuthContext } from "../Components/Context/Auth";

function Home() {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <Layout>
      <HomeCarousel />
      <div>
        <p>{JSON.stringify(auth)}</p>
      </div>
    </Layout>
  );
}

export default Home;
