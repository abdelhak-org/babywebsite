import React, { Component } from "react";
import Slider from "react-slick";
import { babyone  , babytwo , babythree , babyfour , babyfive , babydog} from "../assets";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots:true,
      infinite: true,
      slidesToShow:4,
      slidesToScroll: 1,
      autoplay: true,
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="bg-white h-[80vh] w-sceen items-start ">
  
        <Slider {...settings}>
          <div className='  text-white mx-4 border font-bold text-center   '>
            <img src ={babyone} alt="img"  className="h-[80vh] w-auto  "   />
          </div>
          <div className='  text-white mx-4 border font-bold text-center    '>
            <img src ={babytwo} alt="img" className="h-[80vh] w-auto " />
          </div>
          <div className='  text-white mx-4 border font-bold text-center    '>
            <img src ={babythree} alt="img" className="h-[80vh] w-auto " />
          </div>
          <div className='  text-white mx-4 border font-bold text-center    '>
            <img src ={babyfour} alt="img"  className="h-[80vh] w-auto "/>
          </div>
          <div className='  text-white mx-4 border font-bold text-center    '>
            <img src ={babyfive} alt="img"  className="h-[80vh] w-auto "/>
          </div>
          <div className='  text-white mx-4 border font-bold text-center    '>
            <img src ={babydog} alt="img"  className="h-[80vh] w-auto "/>
          </div>
       
        </Slider>
      </div>
    );
  }
}