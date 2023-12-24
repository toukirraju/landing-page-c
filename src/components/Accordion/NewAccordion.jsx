import { useRouter } from "next/navigation";
import { title } from "process";
import { useEffect, useState } from "react";
const data = [
  {
    id: "accordion-1",
    title: "Digital Product Engineering",
    content:
      "1 With a decade of Product Engineering experience, we help organizations across the product lifecycle bringing expertise on full-stack, cloud platforms, pre-configured tools, and scalable architectures.",
  },
  {
    id: "accordion-2",
    title: "Data",
    content:
      "2 Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
  },
  {
    id: "accordion-3",
    title: "Cloud",
    content:
      "3 Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
  },
  {
    id: "accordion-4",
    title: "Machine Learning",
    content:
      "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
  },
];

export default function NewAccordion() {
  const [state, setState] = useState(1);
  const handleClick = (id) => {
    if (state === id) {
      setState(null);
    } else {
      setState(id);
    }
  };

  return (
    <div className="">
      {data.map((item, index) => (
        <div key={index} className="divide-y-2">
          <div
            onClick={() => {
              handleClick(item.id);
            }}
            // className={`w-full flex items-center mt-1 justify-between  cursor-pointer    `}
            className={`${
              state === item.id ? "border-b-2 border-gray-200" : ""
            } w-full flex items-center justify-between py-1 md:py-2  cursor-pointer duration-300 bg-opacity-60 shadow-10xl `}
          >
            <p className="mb-2 text-lg font-semibold leading-normal">
              {item.title}
            </p>
            {/* icon  */}
            {/* {menu?.children && ( */}
            <span className="pr-2 text-[#2aa7df] text-2xl inline">
              {state === item.id ? "-" : "+"}
            </span>
            {/* )} */}
          </div>

          <div className="overflow-hidden w-full pr-2">
            <div
              className={` w-full  ${
                state === item.id ? "" : "-mt-48"
              } ml-auto duration-150`}
            >
              <p
                className={`select-text text-sm lg:text-base font-normal leading-5 lg:leading-6 text-[#666] `}
              >
                {item.content}
              </p>
            </div>
          </div>
        </div>
      ))}
      {/* {menu?.children && (
        <div className="overflow-hidden w-full pr-2">
          <div
            className={` w-[75%]  ${
              subPages ? "" : "-mt-44"
            } ml-auto duration-150`}
          >
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              delectus quibusdam saepe ducimus, repellat laboriosam asperiores
              ad fugit nemo repellendus aliquam ab velit sint doloremque iure
              natus, quasi, voluptatum illum dolore alias nostrum quia.
              Perspiciatis similique repellendus officiis ad dolore!
            </h1>
          </div>
        </div>
      )} */}
    </div>
  );
}
