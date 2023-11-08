import React, { useContext, useState } from "react";

//IMPORT LAYOUT
import Layout from "../Components/Layouts/Layout";
// IMPORT CAROUSEL
import HomeCarousel from "../Components/Carousel/HomeCarousel";

function Home() {
  return (
    <Layout>
      <HomeCarousel />
      <div></div>
    </Layout>
  );
}

export default Home;
