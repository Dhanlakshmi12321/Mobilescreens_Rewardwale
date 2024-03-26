"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isMobileNumberEntered, setIsMobileNumberEntered] = useState(false);

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
    // Check if the mobile number is entered
    setIsMobileNumberEntered(event.target.value.length === 10);
  };

  const handleGetOTP = () => {
    window.location.href = "/main";
  };

  return (
    <div className="md:hidden flex flex-col flex-row justify-center items-center h-screen overflow-hidden bg-[#F0F3FC]">
      <div className="w-full h-full flex flex-col rounded-[15px]">
        <div className="flex justify-center items-center mt-6">
          <img
            src="/logomain.svg"
            alt="Logo"
            className="w-52 mx-auto my-10 mx-[230px] mt-[20px]"
          />
        </div>
        <div className="mb-500px ml-[23px] mr-[23px] justify-center items-center font-medium">
          <p className="text-[#6B6C75] text-md font-medium">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
              Rewardwale
            </span>
          </p>
          <div className="mt-[12px] ">
            <p className="font-bold text-lg">Enter mobile number</p>
            <div className="mt-[8px]">
              <p className="text-[#6B6C75] text-sm">
                We will send you an{" "}
                <b className="text-black">One Time Password</b> on this mobile
                number
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold mt-[47px]">Mobile number</p>
            <div className="flex mt-4">
              <input
                type="tel"
                id="countryCode"
                name="countryCode"
                pattern="[0-9]{1,3}"
                maxLength={3}
                placeholder="+91"
                required
                className="h-12 w-12 rounded-lg border border-[#BFC0C8] mr-2"
              />
              <input
                type="tel"
                id="mobile"
                name="mobile"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="00000 00000"
                required
                onChange={handleMobileNumberChange}
                className="h-12 w-full rounded-lg border border-[#BFC0C8] px-4"
              />
            </div>
          </div>
          <div className="flex justify-center mt-[47px]">
            <button
              onClick={handleGetOTP}
              className={`h-12 w-full text-white font-bold py-2 px-4 rounded-lg ${
                isMobileNumberEntered
                  ? "bg-purple-600"
                  : "bg-gradient-to-r from-purple-400 to-purple-600"
              }`}
            >
              Get OTP
            </button>
          </div>
        </div>
      </div>
      <div className="relative mt-[85px] md-au justify-end items-center w-full ">
        <Image
          src="/cloud.svg"
          alt="bottom"
          width={280}
          height={300}
          className="mb-[4px] w-full relative"
        />
        <p className=" absolute top-[67px] bottom-0 left-0 right-0 text-center items-center text-black-600 cursor-pointer underline  mb-[10px]">
          Continue to User
        </p>
      </div>
    </div>
  );
}
