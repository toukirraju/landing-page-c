"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLink from "./NavLink";
import { navLinks } from "./navData";
export default function Navbar({ toggle, setToggle }) {
  return (
    <div className="bg-primary-light rounded-[8px]">
      <div className="flex justify-between items-center border border-[#E6E6E6] shadow-md px-7 py-2 md:py-3  rounded-[8px]">
        {/* logo  */}
        <div>
          <Link href="/">
            <Image
              className="h-12 w-24"
              src="/assets/Logo.svg"
              width={300}
              height={100}
              alt="cdda logo"
            />
          </Link>
        </div>

        <div className="flex justify-between items-center gap-4 text-sm font-medium">
          <div className=" hidden lg:block">
            <ul className="flex items-center gap-1 lg:text-sm  font-medium  ">
              {navLinks.map((link, idx) => (
                <NavLink key={idx} href={link.href} label={link.label} />
              ))}
            </ul>
          </div>
          <div className="hidden sm:flex justify-between items-center gap-4 text-sm font-medium">
            {/* <button className="text-[#1F1F1F]"> Sign in </button> */}
            <hr className=" h-6 w-[.5px]   bg-[#CBCBCB]" />
            <button className="flex justify-center items-center gap-1.5 bg-[#2AA7DF]   text-white font-bold py-2 px-4 rounded">
              <span>Get Started</span>
              <span className="flex items-center   ">
                <FaArrowRight />
              </span>
            </button>
          </div>

          <button
            onClick={() => setToggle(!toggle)}
            className="navbar-menuItem-1 peer  transition flex lg:hidden justify-center items-center gap-1.5   p-2"
          >
            <span className="flex items-center  text-[#2AA7DF]">
              <GiHamburgerMenu />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export const ResponsiveMenubar = ({ toggle, setToggle }) => {
  const pages = usePathname();
  // className=" fixed top-0 -right-[900px] lg:right-0 h-screen w-[200px] lg:hidden bg-white shadow-2xl peer-focus:right-0 peer:transition ease-in-out delay-150 duration-300 z-50"
  return (
    <div
      className={`${
        toggle ? "translate-x-0" : "translate-x-full"
      } transition-all duration-300 absolute w-[200px] h-screen bg-white border-r border-slate-200 top-0 right-0  z-50`}
    >
      <div>
        <button
          onClick={() => setToggle((pre) => !pre)}
          className="  flex lg:hidden  absolute right-5 top-5 gap-1.5 rounded-full border border-gray-600/50 p-2"
        >
          <span className="flex items-center   rounded-full">
            <FaTimes />
          </span>
        </button>
        <ul className="flex flex-col  lg:text-sm px-4  font-medium gap-4 pt-24 ">
          {/* <li className="group flex item-center gap-1.5 relative submenu2 px-2">
            <span>What We Do</span>
            <span className="flex items-center   group-hover:rotate-180">
              <DownArrow />
            </span>
            <div className="group-hover:block hidden shadow-md z-50 bg-white absolute top-5 left-0 rounded-[8px] w-[130px] px-2 py-2 transition-all duration-1000 ease-in-out submenu-item2">
              <ul className="space-y-1 bg-white">
                <li>Item-1</li>
                <li>Item-1</li>
                <li>Item-1</li>
                <li>Item-1</li>
              </ul>
            </div>
          </li> */}
          <Link href="/">
            <li
              className={`${
                pages == "/" ? "bg-[#F2F2F2] " : ""
              } group relative flex item-center gap-1.5 px-2 py-2 hover:bg-[#F2F2F2] cursor-pointer rounded-md submenu`}
            >
              <span>Home</span>
            </li>
          </Link>
          {navLinks.map((link, idx) => (
            <NavLink key={idx} href={link.href} label={link.label} />
          ))}
        </ul>
      </div>
    </div>
  );
};
