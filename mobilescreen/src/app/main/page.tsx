"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [otpEntered, setOtpEntered] = useState(false);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
  
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  
    if (value !== "") {
      if (index < 5) {
        refs[index + 1].current.focus();
      }
    } else {
      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
  };
  

  const handleKeyDown = (index, e) => {
    if (e.key === "ArrowLeft") {
      if (index > 0) {
        refs[index - 1].current.focus();
      }
    } else if (e.key === "ArrowRight") {
      if (index < 5) {
        refs[index + 1].current.focus();
      }
    } else if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (newOtp[index] === "" && index > 0) {
        
        setTimeout(() => {
          refs[index - 1].current.focus();
        }, 10);
      } else {
        
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }

    const isOtpEntered = refs.every(
      (field) => field.current.value.length === 1
    );
    setOtpEntered(isOtpEntered);
  };

  const handleGetOTP = () => {
    // Handle OTP verification
  };
  return (
    <div className="md:hidden flex flex-col flex-row justify-center items-center h-screen overflow-hidden bg-[#F0F3FC]">
      <div className="w-full h-full mx-auto ml-[23px] mr-[23px] item-center flex justify-top flex-col   rounded-[15px]">
        <div className="flex justify-center items-center mt-6">
          <div className="ml-[23px] mr-[23px] ">
            <img
              src="/arrow-left.svg"
              alt="arrow"
              className="w-[24px] h-[24px] ml-auto"
            />
          </div>
          <img
            src="/logomain.svg"
            alt="Logo"
            className="w-52 h-10 mx-auto my-10 mx-[230px] mt-[20px] flex justify-center item-center"
          />
        </div>
        <div className="mb-500px ml-[23px] mr-[23px] justify-center items-center font-medium">
          <p className="text-[#6B6C75] text-sm font-medium">OTP verification</p>
          <div className="mt-[12px] ">
            <p className="font-bold text-[#6B6C75] text-xl">
              Enter the OTP send to
            </p>
            <div className="flex item-center mt-[8px] ">
              <img src="mobile.svg" alt="Mobile Icon" className="w-5 h-8" />
              <p className="mt-[8px] text-md font-bold ml-[7px] flrx justify-center ">
                +91 99999 99999
              </p>
            </div>
          </div>

          <div className="mt-[32px] flex justify-center items-center ml-[23px] mr-[23px]">
            {refs.map((ref, index) => (
              <input
                key={index}
                type="text"
                ref={ref}
                value={otp[index]}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                maxLength={1}
                placeholder="0"
                required
                className="h-12 w-12 rounded-lg border border-[#C8A7FF] mr-1 text-center"
              />
            ))}
          </div>

          <div className="mt-[18px] items-center flex justify-center ">
            <p className=" text-[#6B6C75] text-sm font-medium">
              {" "}
              Didn't receive the OTP?{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
                RESEND
              </span>{" "}
              in 00:30 Sec
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-[200px] md-auto justify-center items-center w-full ">
        <Image
          src="/cloud.svg"
          alt="bottom"
          width={280}
          height={324}
          className="mb-[4px] w-full relative"
        />

        <div className="ml-[23px] mr-[23px] absolute top-[px] bottom-8 left-0 right-0 text-center items-center text-black-600 cursor-pointer justify-center">
          <p className="text-[#6B6C75] text-sm font-medium">
            By continuing you agree to the{" "}
            <b className="text-black">Terms of services</b> and{" "}
            <b className="text-black">Privacy Policy</b>
          </p>
          <button
            className={`h-11 w-full mb-5 text-white font-bold py-2 px-4 rounded-lg ${
              otpEntered
                ? "bg-gradient-to-r from-purple-400 to-purple-600"
                : "bg-gradient-to-r from-purple-300 to-purple-400"
            }`}
            onClick={handleGetOTP}
            disabled={!otpEntered}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
