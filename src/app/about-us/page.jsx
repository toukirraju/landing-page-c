"use client";
// import AboutCard from "@/components/Card/AboutCard";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Teams from "../../components/Teams";
import { FaArrowRight } from "react-icons/fa";
import AboutCard from "../../components/Card/AboutCard";
import { aboutCardData } from "../../dummyData";
import AnimatedCard from "../../components/Card/AnimatedCard";
export default function AboutUs() {
  return (
    <div className="">
      {/* <div className="z-50 sticky container mx-auto px-4  top-0  mt-4">
        <Navbar />
      </div> */}
      <section className="  bg-[url('/assets/BG.svg')] bg-cover bg-center bg-no-repeat mt-12 ">
        <div className="container mx-auto px-4">
          {/* about header  */}
          <div className="flex justify-between flex-col md:flex-row md:gap-40 ">
            <div className="flex justify-center items-center md:lg:items-start text-center flex-col gap-2 flex-1">
              <h3 className="uppertitle text-left">About us</h3>
              <h2 className="title md:text-left relative">
                We’re built for software teams
                {/*info title  underline  */}
                {/* <Image
                  className="product__title__underline absolute "
                  src="/assets/line.svg"
                  alt=""
                  width={500}
                  height={500}
                /> */}
              </h2>
            </div>
            <div className=" my-3 bg-gradient-to-r from-[#e6f3fd] to-transparent flex items-center gap-2 px-3 py-4 self-stretch  border-l-[var(--primary-blue)]  border-l-4 flex-1">
              <p className="text-xs md:text-base lg:text-xl font-normal leading-4 md:leading-5 lg:leading-7 text-[#333]">
                Dedicated to empowering software teams, our framework is
                meticulously designed to enhance collaboration, streamline
                workflows, and fuel innovation. From project management to code
                deployment, our solutions cater to the unique needs of software
                development, ensuring teams can achieve their goals seamlessly
                and with optimal efficiency.
              </p>
            </div>
          </div>
          {/* our values title */}
          <div className="flex flex-col justify-center items-center gap-4 pt-8 lg:pt-14 self-stretch">
            <h3 className="uppertitle">Our values </h3>
            <h1 className="title  text-center">
              We’re an ambitious and smart team with a shared mission
            </h1>
            <p className="text-center lg:px-40 content ">
              Our smart, professional team is united by a common ambitious
              mission, fostering innovation and success collaboratively.
            </p>
          </div>

          {/* about card  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
            {aboutCardData?.map((data, index) => (
              // <AboutCard
              //   key={index}
              //   img={data.img}
              //   title={data.title}
              //   content={data.content}
              // />

              <AnimatedCard />
            ))}
          </div>
        </div>
      </section>

      <section id="teams" className="relative ">
        {/* header  */}
        <Teams />
        {/* <div className="absolute bottom-0 w-full h-28 flex justify-center items-center bg-gradient-to-b from-transparent via-blue-0 to-white rounded-b-md">
          <button className="primary-btn">
            <span>See all Member</span>
            <FaArrowRight />
          </button>
        </div> */}
      </section>

      <section className="gradient-bg py-6">
        <FAQ />
      </section>

      <hr />

      <Footer />
    </div>
  );
}
