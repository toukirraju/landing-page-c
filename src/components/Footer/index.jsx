import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { footerData } from "./footerData";
const Footer = () => {
  return (
    <footer className="container mx-auto px-4 mt-6">
      <div>
        <div className="flex lg:space-x-7 flex-col lg:flex-row space-y-8 lg:space-y-0">
          <div className=" w-full lg:w-1/4">
            <div>
              <Image
                src="/assets/Logo.svg"
                width={1000}
                height={1000}
                alt=""
                className="w-32 h-12   "
              />
            </div>
            <p className="pt-4 pb-0 m-0 md:text-sm text-xs">
              We are a team of high-performing self-managed engineers and
              leaders delivering purposeful technology solutions for the future.
            </p>
          </div>
          <div className="w-full lg:w-3/4 grid md:grid-cols-4 grid-cols-2 gap-x-6 gap-y-4 md:gap-y-0">
            {/* link come from json  */}
            {footerData?.map((footerSection, index) => (
              <div className="w-full" key={index}>
                <p className=" text-[#AFAFAF] md:text-sm text-xs font-normal pb-3.5 m-0">
                  {footerSection?.label}
                </p>
                <ul className="space-y-2">
                  {footerSection?.item?.map((footerLink, index) => (
                    <li
                      className="text-[#545454] md:text-sm text-xs  "
                      key={index}
                    >
                      {footerLink?.link !== "#" ? (
                        <Link href={footerLink?.link}> {footerLink?.name}</Link>
                      ) : (
                        <span>{footerLink?.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="mt-8 mb-5 text-[#B3B3B3] h-1" />
      </div>
      <FooterEnd />
    </footer>
  );
};

export default Footer;

const FooterEnd = () => {
  return (
    <div className="flex items-center justify-between pb-5">
      <div>
        <span className="text-[#545454] text-xs md:text-sm  font-normal">
          © 2024 Cdda Ltd. All rights reserved.
        </span>
      </div>
      <div className="flex justify-between space-x-6">
        <a
          href="#"
          className="text-gray-600 hover:text-[#2aa7df] hover:bg-[#2aa6df1c] cursor-pointer p-2 rounded-md flex justify-center items-center"
          title="twitter"
        >
          <FaXTwitter />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-[#2aa7df] hover:bg-[#2aa6df1c] cursor-pointer p-2 rounded-md flex justify-center items-center"
          title="linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-[#2aa7df] hover:bg-[#2aa6df1c] cursor-pointer p-2 rounded-md flex justify-center items-center"
          title="facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};
