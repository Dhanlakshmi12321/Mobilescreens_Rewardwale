"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Dashboard() {
  const logoUrl = "/logomain.svg";
  const imageUrl = "/Group 19704.png";
  const vectorImageUrl = "/vector.png";
  const firstcenterImageUrl = "/1stcenter.png";
  const secondcenterImageUrl = "/2ndpage.png";
  const vectImageUrl = "/vect.png";
  const thirdcenterImageUrl = "/3rdpage.png";

  const handlearrowClick = () => {
    window.location.href = "/settings";
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="md:hidden flex flex-col justify-between h-screen bg-white">
      <div className="flex justify-center items-start mt-6">
        <img src={logoUrl} alt="Logo" className="w-32 md:w-48 mx-auto" />

        <img
          src={vectorImageUrl}
          alt="Vector"
          className="w-12 h-2px max-w-xs mb-[-12px] ml-auto"
        />
      </div>
      <Slider {...settings} className="w-full">
        <div className="flex justify-center items-center">
          <img src={firstcenterImageUrl} alt="1st center" className="w-29" />
          <h3
            className="text-center font-serif text-1xl"
            style={{ fontFamily: "Inria Serif" }}
          >
            Share your thoughts on products, services, and experiences
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <img src={secondcenterImageUrl} alt="1st center" className="w-29" />
          <h3
            className="text-center font-serif text-1xl"
            style={{ fontFamily: "Inria Serif" }}
          >
            Keep Track of your wallet balance in real time
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <img src={thirdcenterImageUrl} alt="1st center" className="w-29" />
          <h3
            className="text-center font-serif text-1xl"
            style={{ fontFamily: "Inria Serif" }}
          >
            Engage & earn exciting rewards
          </h3>
        </div>
      </Slider>

      <div className="flex justify-center items-center relative">
        <img
          src={imageUrl}
          alt="Image"
          className="w-full md:max-w-xs cursor-pointer"
        />

        <img
          src="/arrow.png"
          alt="Arrow"
          className="absolute bottom-0 right-0 mb-4 mr-4 w-8 cursor-pointer"
          style={{ marginBottom: "90px" }}
          onClick={handlearrowClick}
        />
      </div>
    </div>
  );
}
