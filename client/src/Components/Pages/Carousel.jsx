import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/carousel.css";
import im1 from "../images/1.jpg";
import im2 from "../images/2.webp";
import im3 from "../images/3.webp";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
    };
    return (
      <div className="carousel_container">
        <div className="carousel_nav">
          <button
            className="carousel_nav_button prev"
            onClick={() => this.slider.slickPrev()}
          >
            <i className="fas fa-chevron-left">
              <FaCircleArrowLeft />
            </i>
          </button>
          <button
            className="carousel_nav_button next"
            onClick={() => this.slider.slickNext()}
          >
            <i className="fas fa-chevron-right">
              <FaCircleArrowRight />
            </i>
          </button>
        </div>
        <Slider {...settings} ref={(slider) => (this.slider = slider)}>
          <div className="c_image_container">
            <img className="carousel_image" src={im1} alt="" />
          </div>
          <div className="c_image_container">
            <img src={im2} alt="" className="carousel_image" />
          </div>
          <div className="c_image_container">
            <img src={im3} alt="" className="carousel_image" />
          </div>
        </Slider>
      </div>
    );
  }
}
