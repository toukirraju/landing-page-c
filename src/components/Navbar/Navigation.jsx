"use client";
import React, { useState } from "react";
import Button from "../Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import NavLink from "./NavLink";
import { navLinks } from "./navData";
import { FaArrowRight } from "react-icons/fa6";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-50 w-full   fixed top-0 left-0">
      <div className="container mx-auto px-5 md:flex bg-white py-3.5  shadow-md justify-between rounded-b-md">
        <div className="">
          <Image
            className="h-12 w-24"
            width={500}
            height={500}
            src="/assets/Logo.svg"
            alt="logo"
          />
        </div>
        {/* toggle button  */}
        <div
          className={`navbar-toggle ${
            open ? "toggle__border__on" : "toggle__border__off"
          } text-xl absolute right-8 top-6 cursor-pointer md:hidden  p-2 rounded-md  transition-all  duration-300`}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FaTimes className="text-red-500 hover:text-red-700 " />
          ) : (
            <GiHamburgerMenu className="text-sky-700 hover:text-sky-900 " />
          )}
        </div>
        <ul
          className={`lg:text-sm  font-medium md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 px-9 transition-all duration-500 ease-in ${
            open
              ? "top-16 border-b-4 border-sky-300 rounded-md shadow-lg"
              : "top-[-450px]"
          }`}
        >
          {navLinks?.map((item, idx) => (
            <NavLink
              setOpen={setOpen}
              key={idx}
              label={item.label}
              href={item.href}
            />
          ))}
          <div className="flex  gap-2 justify-center items-center">
            <hr className="hidden md:block h-6 w-[.5px]   bg-[#CBCBCB]" />
            <Button>
              <span>Get Started</span>
              <span className="flex items-center   ">
                <FaArrowRight />
              </span>
            </Button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
