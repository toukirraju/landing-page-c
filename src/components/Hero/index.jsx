import Image from "next/image";
import React, { useEffect, useState } from "react";
import Badge from "../Badge";
import { IoSparkles } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { BiSolidStoreAlt } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiBriefcase } from "react-icons/pi";
import { heroSliderData } from "../../dummyData";
import Slideshow from "../Carousel/SlideShow";

const Hero = () => {
  const [currentBadges, setCurrentBadges] = useState([]);
  const badgges = [
    [
      {
        icon: <HiOutlineLightBulb />,
        content: "scss",
        style:
          "top-[-40px] left-[240px] md:left-[440px]  lg:top-[-20px] lg:left-[300px] z-20  xl:top-[-40px] xl:left-[450px]",
      },
      {
        icon: <BiSolidStoreAlt />,
        content: "E-commerce",
        style:
          "bottom-[160px] left-[-10px] md:bottom-[160px] md:left-[-20px]  lg:bottom-[360px] lg:left-[-10px] z-20 ",
      },
      {
        icon: <PiBriefcase />,
        content: "Job Board",
        style:
          "bottom-[-16px] right-[60px]  md:bottom-[-16px] md:right-[60px]  lg:bottom-[216px] lg:right-[20px] xl:bottom-[135px] xl:right-[20px] 2xl:bottom-[30px] 2xl:right-[20px] z-20",
      },
    ],
    [
      {
        icon: <HiOutlineLightBulb />,
        content: "scss 2",
        style:
          "top-[-40px] left-[80px] md:left-[200px]  lg:top-[-20px] lg:left-[150px] z-20  xl:top-[-40px] xl:left-[250px]",
      },
      {
        icon: <BiSolidStoreAlt />,
        content: "E-commerce 2",
        style:
          "bottom-[15px] left-[-10px] md:bottom-[100px] md:left-[-20px] lg:bottom-[320px] lg:left-[-10px]  xl:bottom-[220px] xl:left-[-10px] 1xl:bottom-[90px] 1xl:left-[-10px] z-20 ",
      },
      {
        icon: <PiBriefcase />,
        content: "Job Board 2",
        style:
          "bottom-[236px] right-[-10px]  md:bottom-[350px] md:right-[-30px]  lg:bottom-[616px] lg:right-[20px] xl:bottom-[500px] 1xl:bottom-[450px] xl:right-[20px] 2xl:bottom-[330px] 2xl:right-[20px] z-20",
      },
    ],
    [
      {
        icon: <HiOutlineLightBulb />,
        content: "scss 3",
        style:
          "top-[140px] left-[-10px] md:left-[-50px]  lg:top-[70px] lg:left-[10px] z-20  xl:top-[40px] xl:left-[50px]",
      },
      {
        icon: <BiSolidStoreAlt />,
        content: "E-commerce 3",
        style:
          "bottom-[-5px] left-[200px] md:bottom-[-6px] md:left-[450px] lg:bottom-[250px] lg:left-[310px]  xl:bottom-[150px] xl:left-[350px] 1xl:bottom-[-10px] 1xl:left-[450px] z-20 ",
      },
      {
        icon: <PiBriefcase />,
        content: "Job Board 3",
        style:
          "bottom-[290px] right-[-10px] sm:bottom-[460px]  md:bottom-[450px] md:right-[-30px]  lg:bottom-[726px] lg:right-[20px] xl:bottom-[650px] 1xl:bottom-[520px] xl:right-[20px] 2xl:bottom-[450px] 2xl:right-[20px] z-20",
      },
    ],
  ];
  useEffect(() => {
    setCurrentBadges(badgges[0]);
    const intervalId = setInterval(() => {
      const randomSetIndex = Math.floor(Math.random() * badgges.length);
      const randomBadgesSet = badgges[randomSetIndex];
      setCurrentBadges(randomBadgesSet);
    }, 5000);
    // let currentIndex = 0;

    // setCurrentBadges(badges[currentIndex]);

    // const intervalId = setInterval(() => {
    //   // Increment the index to move to the next set of badges
    //   setCurrentBadges(badges[currentIndex]);
    // }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="bg-[url('/assets/BG.svg')] bg-cover bg-center bg-no-repeat mt-12 "
      // style={{ backgroundImage: 'url("/assets/BG.svg")' }}
    >
      {/* hero section */}
      <div className="container mx-auto px-4 flex lg:flex-row justify-between flex-col md:justify-center gap-14 mb-14">
        {/* left side */}
        <div className=" flex flex-col items-start self-stretch  md:w-full lg:w-1/2 gap-4">
          {/* product badge  */}
          <div className="bg-primary-light flex items-center gap-2 text-sm font-medium rounded-2xl px-3 py-[6px] shadow-md">
            <span className="flex items-center gap-2 ">
              <IoSparkles className="text-[#2AA7DF]" />
              Meet Pyreactor
            </span>
            <span className="flex items-center ">
              <BsDot className="text-[#2AA7DF] h-6 w-6" />
              Our new CMS Software
            </span>
          </div>
          {/* hero title  */}
          <p className="text-primary-text-black text-left text-[30px] md:text-[60px] lg:text-[70px] font-semibold leading-[36px] md:leading-[72px] lg:leading-[87px]  relative">
            Resilient technology solutions{" "}
            <span className="text-[#2AA7DF]">
              for growth-focused businesses
            </span>
            {/*hero title  underline  */}
            <Image
              className="hero__title__underline absolute "
              src="/assets/line.svg"
              alt=""
              width={500}
              height={500}
            />
          </p>
          {/* hero sut-title  */}
          <div className="bg-gradient-to-r from-[#e6f3fd] to-transparent flex items-center gap-2 px-3 py-4 self-stretch  border-l-[var(--primary-blue)]  border-l-4 ">
            <p className="text-xs md:text-base lg:text-xl font-normal leading-4 md:leading-5 lg:leading-7 text-[#666]">
              We are trusted partners for realizing digital-at-the-core success
              strategies for businesses across the world and across industries.
            </p>
          </div>
          <button className="bg-primary-btn rounded-md flex items-center gap-2 px-6 py-3 shadow-md text-primary-btn-text">
            <span>Get Started</span>
            <FaArrowRight />
          </button>
        </div>
        {/* right side */}
        <div className="single__carousal md:w-full lg:w-1/2 lg:px-16 xl:px-36 relative">
          {/* carousal */}
          <Slideshow data={heroSliderData} />
          {currentBadges?.map((badge, index) => (
            <Badge
              key={index}
              content={badge.content}
              style={badge.style}
              icon={badge.icon}
            />
          ))}
        </div>
      </div>

      {/* footer section nav */}
      <div className="hero-footer ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="container mx-auto px-3 md:px-7 lg:px-16 flex justify-center items-center flex-wrap divide-gray-700 divide-x-2 text-[10px] font-medium  md:text-[14px] md:font-medium  lg:text-[20px] lg:font-semibold ">
            <span className="px-1 py-0.1 md:px-4 md:py-1">Extended Team</span>
            <span className="px-1 py-0.1 md:px-4 md:py-1">
              Custom Software Development
            </span>
            <span className="px-1 py-0.1 md:px-4 md:py-1">
              Capability Burst To Meet Timeline
            </span>
            <span className="px-1 py-0.1 md:px-4 md:py-1">
              Accelerate Digital Innovation
            </span>
            <span className="px-1 py-0.1 md:px-4 md:py-1">Extended Team</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
