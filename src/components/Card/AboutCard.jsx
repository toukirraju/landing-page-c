import Image from "next/image";
import React from "react";

const AboutCard = ({ img, title, content }) => {
  return (
    <div className="bg-white rounded-xl p-5 md:p-9  flex flex-col gap-2 justify-start border hover:shadow  ">
      <div className="h-10 w-10 p-3 bg-[#F5FAFF] border border-blue-100 rounded-md flex justify-center items-center">
        <Image
          className="h-5 w-7"
          src={img}
          height={300}
          width={300}
          alt={title}
        />
      </div>
      <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-[#1A1A1A]">
        {title}
      </h3>
      <p className="text-sm md:text-base lg:text-lg font-normal text-[#4D4D4D]">
        {content}
      </p>
    </div>
  );
};

export default AboutCard;
