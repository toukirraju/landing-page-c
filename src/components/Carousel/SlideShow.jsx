// "use client";

import React from "react";
import style from "./styles/slideshow.module.css";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Slideshow = ({ data }) => {
  const v = Pagination;
  return (
    <div>
      {" "}
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletClass: `swiper-pagination-bullet swiper-pagination-testClass ${style.btn}`,
        }}
        modules={[Pagination, Autoplay]}
        className={style.mySwipers}
        autoplay={true}
        speed={2000}
        loop={true}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className={style.slides}>
            <Image
              src={item}
              height={1000}
              width={1000}
              alt=""
              className="carousel__img rounded-[8px] object-cover "
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slideshow;
