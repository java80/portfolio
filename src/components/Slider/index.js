import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html from "./html.jpeg";
import react from "./react.jpg";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      pauseOnHover: false,
      fade: true,
      autoplay: true,
      lazyLoad: "progressive",
    };

    const img = {
      height: "650px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div className="slider" style={{ padding: "30px 30px" }}>
        <Slider {...settings} style={{ zIndex: "5", overflow: "hidden" }}>
          <div>
            <div style={{ backgroundImage: `url(${html})`, ...img }}></div>
          </div>

          <div>
            <div style={{ backgroundImage: `url(${react})`, ...img }}></div>
          </div>
        </Slider>
      </div>
    );
  }
}
