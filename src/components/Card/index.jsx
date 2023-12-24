import Image from "next/image";
import React from "react";
import { FaGithub, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Card = ({ item }) => {
  const { name, position, github, twitter, img, linkedin } = item;
  return (
    <div className="bg-[#d1ccce] border border-gray-300  relative h-[300px] md:h-[300px] lg:h-[380px] xl:h-[400px]  rounded-[8px] overflow-hidden  ">
      <Image
        className="h-full w-full object-cover  "
        src={img}
        width={1000}
        height={1000}
        alt=""
      />
      <div className="px-6 py-4 w-full flex flex-col items-start gap-2  bg-[#d1ccce57] backdrop-blur-lg   absolute bottom-0  border-t border-orange-[#E2E2E2] ">
        <div className="flex justify-between  items-center w-full   ">
          <h1 className="text-[#1A1A1A] md:text-2xl text-lg font-semibold leading-8 truncate capitalize">
            {name}
          </h1>
          <div className="flex gap-3">
            <a
              target="_blank"
              href={linkedin}
              rel="noopener noreferrer"
              className="p-1 bg-white rounded-full hover:text-white hover:bg-[#2aa7df] duration-300  text-[#2aa7df] cursor-pointer hover:shadow-lg"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              target="_blank"
              href={github}
              rel="noopener noreferrer"
              className="p-1 bg-white rounded-full hover:text-white hover:bg-[#2aa7df] duration-300  text-[#2aa7df] cursor-pointer hover:shadow-lg"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              target="_blank"
              href={twitter}
              rel="noopener noreferrer"
              className="p-1 bg-white rounded-full hover:text-white hover:bg-[#2aa7df] duration-300  text-[#2aa7df] cursor-pointer hover:shadow-lg"
            >
              {" "}
              <FaXTwitter className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="text-[#4D4D4D] font-normal leading-6 md:text-[16px]  text-sm">
          <span> {position}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
