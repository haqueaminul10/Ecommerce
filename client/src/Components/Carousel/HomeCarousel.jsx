import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//IMPORT STYLE
import "../styles/homeCarousel.css";

// IMPORT IMAGES

import s1 from "../../images/image-slide-1.webp";
import s2 from "../../images/slide-2.png";

const HomeCarousel = () => {
  //NEXT BUTTON
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  };

  //PREVIOUS BUTTON
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slideContainer">
      <Slider {...settings}>
        {/* FIRST SLIDE */}
        <div className="slider">
          <div className="slide1">
            <div className="slide_text">
              <h3 className="first_line">SHOP TO GET WHAT YOU LOVE</h3>
              <h1 className="last_line">
                TIMEPIECES THAT MAKE A STATEMENT UP TO 40% OFF{" "}
              </h1>
              <button className="C_button">START BUYING</button>
            </div>
            <div>
              <img src={s1} alt="Image 1" />
            </div>
          </div>
        </div>
        {/* SECOND SLIDE */}
        <div className="slider">
          <div className="slide1">
            <div className="slide_text">
              <h3 className="first_line">SHOP TO GET WHAT YOU LOVE</h3>
              <h1 className="last_line">THE NEW STANDARD UP TO 40% OFF</h1>
              <button className="C_button">START BUYING</button>
            </div>
            <div>
              <img src={s2} alt="Image 1" style={{ height: `500px` }} />
            </div>
          </div>
        </div>
        {/* THIRD SLIDE */}
        <div className="slider_last">
          <div className="slide1">
            <div className="slide_text">
              <h3 className="first_line">SHOP TO GET WHAT YOU LOVE</h3>
              <h1 className="last_line">DON'T MISS AMAZING GROCERY DEALS</h1>
              <input
                className="C_input"
                type="text"
                placeholder="Enter your email"
              ></input>
              <input className="C_submit" type="Submit" value="Subscribe" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeCarousel;
