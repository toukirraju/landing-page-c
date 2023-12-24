import React, { useState } from "react";
import Accordion from "../Accordion";
import ProjectIdeaCard from "../Card/ProjectIdeaCard";
import Image from "next/image";
import { FAQData } from "../../dummyData";

const FAQ = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="pb-16 flex flex-col justify-center items-center py-4 md:py-7 lg:py-[7rem] self-stretch">
        <h3 className="uppertitle">Frequently Asked Questions</h3>
        <h1 className="title lg:mx-56 text-center relative">
          If you have anything else you want to ask, reach out to us.
          {/*FAQ title  underline  */}
          <Image
            className="FAQ__title__underline absolute "
            src="/assets/line.svg"
            alt=""
            width={500}
            height={500}
          />
        </h1>
      </div>

      {/* accordion */}
      <Accordion data={FAQData} />

      {/* contact us card  */}
      <ProjectIdeaCard />
    </div>
  );
};

export default FAQ;
