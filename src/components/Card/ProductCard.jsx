import Image from "next/image";
import React from "react";

import { GoArrowUpRight } from "react-icons/go";

const ProductCard = ({ data }) => {
  const { id, img, title, desc, href } = data || {};
  return (
    <div className="w-[389px] bg-primary-light block  rounded-lg  border border-gray-100">
      <div
        className="flex justify-center items-center py-[43px] px-[80px] bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: 'url("/assets/BG.svg")' }}
      >
        <span>
          <Image
            className="h-[100px] w-[100px]"
            src={img || "/assets/Pyreactor.svg"}
            alt=""
            width={500}
            height={500}
          />
        </span>
      </div>
      <div className="flex  lg:justify-start flex-col gap-3 p-5 ">
        <div className="flex justify-between items-center">
          <span className="text-[18px] md:text-[20px] lg:text-[24px] font-medium text-primary-dark">
            {title}
          </span>
          <span className="h-8 w-8 rounded-full flex justify-center items-center bg-gray-200">
            <GoArrowUpRight />
          </span>
        </div>
        <div className="h-[84px] items-stretch overflow-hidden ">
          <p className="text-ellipsis whitespace-no-wrap  text-[#666] text-[14px] lg:text-[16px] font-normal leading-5">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
