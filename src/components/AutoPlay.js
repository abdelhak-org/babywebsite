import React from "react";
import Slider from "react-slick";
import { babyone, babytwo, babythree, babyfour, babyfive, babydog } from "../assets";
//import "./AutoPlay.css"; // You can create a CSS file for styling

const AutoPlay = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderSlides = (images) =>
    images.map((image, index) => (
      <div key={index} className="slider-item ">
        <img src={image} alt={`img${index + 1}`} className="slider-image w-full rounded-md " />
      </div>
    ));

  const images = [babyone, babytwo, babythree, babyfour, babyfive, babydog];

  return (
    <div className="slider-container max-w-[1536px] mx-auto ">
      <Slider {...settings}>{renderSlides(images)}</Slider>
    </div>
  );
};

export default AutoPlay;
