import React from "react";

//IMPORT LAYOUT
import Layout from "../Components/Layouts/Layout";

// IMPORT CAROUSEL
import HomeCarousel from "../Components/Carousel/HomeCarousel";
function Home() {
  return (
    <Layout>
      <HomeCarousel />
    </Layout>
  );
}

export default Home;
