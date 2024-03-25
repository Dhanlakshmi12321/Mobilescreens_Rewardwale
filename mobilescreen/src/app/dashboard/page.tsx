"use client";
import React from "react";

export default function Dashboard() {
  const logoUrl = "/logo.png";
  const imageUrl = "/Group 19704.png";
  const vectorImageUrl = "/vector.png";
  const firstcenterImageUrl = "/1stcenter.png";
  const vectImageUrl = "/vect.png";

  const handlearrowClick = () => {
    window.location.href = "/settings";
  };

  return (
    <div className="md:hidden flex flex-col justify-between h-screen bg-white">
      <div className="flex justify-center items-start mt-6">
        {/* Logo image */}
        <img
          src={logoUrl}
          alt="Logo"
          className="w-32"
          style={{ marginLeft: "90px", marginRight: "auto" }}
        />

        {/* New vector image */}
        <img
          src={vectorImageUrl}
          alt="Vector"
          className="w-14 h-4px max-w-xs mb-[-10px] ml-auto"
        />
      </div>
      <div className="flex justify-center items-center mt-[-150px]">

        <img src={vectImageUrl} alt="Vect" className="w-10 mr-4 mr-auto" />
  
        <img
          src={firstcenterImageUrl}
          alt="1st center"
          className="w-29 mx-auto mb-350px"
          style={{ marginTop: "125px" }}
        />
      </div>

      <h3
        className="text-center font-serif text-1xl"
        style={{ fontFamily: "Inria Serif" }}
      >
        Share your thoughts on products, services, and experiences
      </h3>

      <div className="flex justify-center items-center relative">
      
        <img
          src={imageUrl}
          alt="Image"
          className="w-full max-w-xs mt-[38px] mb-[42px]"
          style={{ marginTop: "30px" }}
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