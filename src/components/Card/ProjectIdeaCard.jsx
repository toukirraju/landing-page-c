import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
const ProjectIdeaCard = () => {
  const route = useRouter();
  return (
    <div
      className="bg-cover bg-center bg-no-repeat rounded-lg p-8   bg-[#2AA7DF] my-9"
      style={{ backgroundImage: 'url("/assets/BG.svg")' }}
    >
      <div className="flex flex-col gap-3 items-start justify-center self-stretch ">
        <h1 className="title text-white">Have Any Project idea</h1>
        <p className=" text-white text-sm md:text-base lg:text-xl font-medium">
          Lets discuss about your offshore project. We can Help you by our
          skillful Global team. You can take a free counciling by taking a
          schedule
        </p>
        <button
          className="primary-btn bg-white hover:bg-gray-50 text-[#2aa7df]"
          onClick={() => route.push("/contact-us")}
        >
          <span>Contact us</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectIdeaCard;
