import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wedding1 from '../assets/wedding1.png'
import wedding2 from '../assets/wedding2.png'
import show1 from '../assets/show1.png'
import show2 from '../assets/show2.png'
import seminar1 from '../assets/seminar1.png'
import seminar2 from '../assets/seminar2.png'

const ImgSlider = () => {
 
  var settings = {
  
    // dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <div className="slider-container m-5">
      <h1  className='text-center mb-5 mt-5'>Gallery</h1>
      <Slider {...settings}>
        <div>
          <img style={{width:"500px"}} className='ms-2 me-2' src={wedding1} alt="" />
        </div>
        <div>
        <img style={{width:"500px"}} className='ms-2 me-2' src={show1} alt="" />
        </div>
        <div>
        <img style={{width:"500px"}} className='ms-2 me-2' src={seminar1} alt="" />
        </div>
        <div>
        <img style={{width:"500px"}} className='ms-2 me-2' src={wedding2} alt="" />
        </div>
        <div>
        <img style={{width:"500px"}} className='ms-2 me-2' src={show2} alt="" />
        </div>
        <div>
        <img style={{width:"500px"}} className='ms-2 me-2' src={seminar2} alt="" />
        </div>
      </Slider>
    </div>)
}

export default ImgSlider