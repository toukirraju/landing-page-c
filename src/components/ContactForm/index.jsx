"use client";
import Image from "next/image";
import FormComponent from "./FormComponent";
import { CiLocationOn } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 p-4 md:p-10 bg-[#FFF]  shadow-lg  rounded-lg">
      <div className="w-full">
        <h1 className=" text-2xl lg:text-4xl text-[#1A1A1A] m-0 pb-4 font-semibold">
          Send us a message
        </h1>
        <p className="lg:text-[16px] text-sm m-0 p-0 font-semibold pb-6">
          <span className="text-[#4D4D4D]">You can reach us anytime via</span>
          <span className="text-[#2AA7DF]  "> inquiry@cdda.io</span>
        </p>
        {/* form  */}
        <FormComponent />
      </div>
      {/* modal second part code here  */}
      <div className="w-full flex flex-col space-y-3.5 ">
        <h1 className="m-0 p-0 text-2xl lg:text-4xl font-semibold text-[#1A1A1A]  lg:w-10/12">
          Talk to our product analytics expert
        </h1>
        <span className="text-sm lg:text-[16px] text-[#4D4D4D] font-normal">
          Consult our product analytics expert for insights tailored to your
          needs. Elevate decision-making with data-driven strategies. Talk to us
          now!
        </span>
        <span className="m-0 p-0 lg:text-3xl text-xl  text-[#1A1A1A] font-medium">
          Our office
        </span>
        <Image
          src="/assets/meet.png"
          width={1000}
          height={1000}
          alt=""
          className="object-cover  rounded-[12px] h-[300px]"
        />
        <span className="text-sm lg:text-[16px] font-normal text-[#4D4D4D] ">
          have questions about pricing, plans, or Growthy? Fill out the form our
          product analytics expert will be in touch directly.
        </span>
        <p className="text-[#1A1A1A] lg:text-lg text-[16px] font-medium">
          Our Location
        </p>
        <div className="flex justify-between space-x-9">
          <div className="flex space-x-2.5 w-1/2 items-start">
            <span className="mt-1 text-[#4D4D4D]">
              <CiLocationOn className="h-5 w-5 text-[#4D4D4D]" />
            </span>
            <span className="text-sm lg:text-[16px] font-normal text-[#4D4D4D] ">
              C/26, Main Road, Block# C Aftab Nagar, Dhaka-1212, Bangladesh
            </span>
          </div>
          <div className="w-1/2 flex flex-col items-end space-y-3">
            <div className="flex  space-x-2.5">
              <span>
                <IoCall className="h-5 w-5 text-[#4D4D4D]" />
              </span>
              <span className="text-sm lg:text-[16px] text-[#4D4D4D]">
                +880 1711 000 000
              </span>
            </div>
            <div className="flex justify-end space-x-4">
              <span>
                <FaFacebook className="h-5 w-5 text-[#4D4D4D]" />
              </span>
              <span>
                <FaLinkedin className="h-5 w-5 text-[#4D4D4D]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
