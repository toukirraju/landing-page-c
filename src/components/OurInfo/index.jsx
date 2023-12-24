import React from "react";
import Accordion from "../Accordion";
import Image from "next/image";
import { serviceData } from "../../dummyData";

const OurInfo = () => {
  return (
    <div className="container mx-auto px-4 flex items-start justify-between gap-2 flex-col lg:flex-row py-5 md:py-10 lg:py-20">
      {/* left side  */}
      <div className="">
        <div className="flex lg:w-[532px] pr-6 flex-col items-start gap-4">
          <h2 className="title relative">
            What We do?
            {/*info title  underline  */}
            <Image
              className="info__title__underline absolute "
              src="/assets/line.svg"
              alt=""
              width={500}
              height={500}
            />
          </h2>
          <p className="content ">
            At Cdda, we build mission-critical software systems using the power
            of Digital, Data, Cloud & AI – that help organizations adapt to the
            changing IT landscape and surpass the competition.
          </p>
        </div>
      </div>
      {/* right side */}
      <div className="lg:w-[632px] ">
        {/* right side */}

        {/* accordion  */}
        <Accordion data={serviceData} />

        {/* <NewAccordion /> */}
      </div>
    </div>
  );
};

export default OurInfo;
