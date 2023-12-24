import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import Image from "next/image";
import { managementTeam, leaders, teamData } from "../../dummyData";
import TeamHeading from "./TeamHeading";
import { useRouter, usePathname } from "next/navigation";
import { FaArrowDown, FaArrowRight, FaArrowUp } from "react-icons/fa";

const Teams = () => {
  const [showLess, setShowLess] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);

  // const handleShowMore = () => {
  //   setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  // };

  // const handleShowLess = () => {
  //   setVisibleCards((prevVisibleCards) =>
  //     prevVisibleCards > 4 ? 4 : prevVisibleCards
  //   );
  // };
  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
    setShowLess(false);
  };

  const handleShowLess = () => {
    setVisibleCards((prevVisibleCards) =>
      prevVisibleCards > 4 ? 4 : prevVisibleCards
    );
    setShowLess(true);
  };

  useEffect(() => {
    if (showLess) {
      // Get the position of the div relative to the viewport
      const teamContainerHeight = document.getElementById(
        "team__card__container"
      );
      const rect = teamContainerHeight.getBoundingClientRect();
      const distanceToTop = rect.top + window.scrollY - 200;
      window.scrollTo(teamContainerHeight, distanceToTop);
    }
  }, [showLess]);

  // Toggle key to force re-mount and trigger transition
  const height = (visibleCards / 4) * 502;
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center py-8 lg:py-14 self-stretch">
          <h3 className="uppertitle">Meet Our Teams</h3>
          <h1 className="title lg:px-40 text-center relative">
            Meet our team of Creators, Designers, and world-class Problem
            Solvers
            {/*teams title  underline  */}
            <Image
              className="team__title__underline absolute "
              src="/assets/line.svg"
              alt=""
              width={500}
              height={500}
            />
          </h1>
        </div>

        {/* leader heading  */}

        <TeamHeading
          title="Management Team"
          subtitle="Our team is Dedicated to helping world-class professional Software build
        and improve their business with our industry-leading software."
        />

        {/* leader carousal  */}
        <div>
          <Carousel data={managementTeam} />
        </div>

        {/* leader heading  */}

        <TeamHeading
          title="Meet Our Leader"
          subtitle="Our team is Dedicated to helping world-class professional Software build
        and improve their business with our industry-leading software."
        />

        {/* leader carousal  */}
        <div>
          <Carousel data={leaders} />
        </div>

        {/* Member heading  */}

        <TeamHeading
          title="Meet Our Member"
          subtitle="Our team is Dedicated to helping world-className professional Software
        build and improve their business with our industry-leading software."
        />
        {/* member cards */}
        <div
          id="team__card__container"
          className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 overflow-hidden  relative ${
            visibleCards === 4 ? "h-[598px] " : `h-[${height}px]`
          } duration-500 transition-all ease-in-out `}
        >
          {teamData?.slice(0, visibleCards).map((cardItem, index) => (
            <Card item={cardItem} key={index} />
          ))}

          {/* <div>
            {teamData.length > visibleCards && (
              <button onClick={handleShowMore}>Show More</button>
            )}
            {visibleCards > 4 && (
              <button onClick={handleShowLess}>Show Less</button>
            )}
          </div> */}

          <div className="absolute bottom-2 w-full h-28 flex justify-center items-center gap-3  rounded-b-md">
            {visibleCards > 4 && (
              <button onClick={handleShowLess} className="primary-btn">
                <span>Show Less</span>
                <FaArrowUp />
              </button>
            )}

            {teamData.length > visibleCards && (
              <button onClick={handleShowMore} className="primary-btn">
                <span>Show More</span>
                <FaArrowDown />
              </button>
            )}
          </div>

          {/*       
        {teamData?.map((item, index) => (
          <Card item={item} key={index} />
        ))} */}
        </div>
      </div>
    </div>
  );
};

export default Teams;
