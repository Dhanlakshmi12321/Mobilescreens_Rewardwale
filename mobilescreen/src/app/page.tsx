"use client";
import React, { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false); 

  const groupImageUrl = "/Group 2496.png";
  const handleClick = () => {
    window.location.href = "/dashboard";
  };

  const handleModeToggle = () => { 
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`md:hidden flex flex-col justify-between h-screen ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="flex justify-center items-center mt-6">
        <img
          src={darkMode ? "/dark_mode_icon.png" : "/light_mode_icon.png"}
          alt="Mode Toggle"
          className="w-8 h-8 cursor-pointer ml-2 rounded-full"
          onClick={handleModeToggle}
        />

        <img
          src="/logo.png"
          alt="Logo"
          className="w-32"
          style={{ marginLeft: "70px", marginTop: "-14px" }}
        />

        <img
          src={groupImageUrl}
          alt="Vector"
          className="w-10 h-4px max-w-xs mb-[-10px] ml-auto"
        />
     
      </div>
      <div className="flex justify-center items-center">
        <img src="/main.png" alt="Main" className="w-full max-w-xs mt-[35px]" />
      </div>
      <div className="flex justify-center items-center relative">
        <img
          src="/Group 19704.png"
          alt="Image"
          className="w-full max-w-xs cursor-pointer"
         
        />
        <img
          src="/arrow.png"
          alt="Arrow"
          className="absolute bottom-0 right-0 mb-12 mr-4 w-8 cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}