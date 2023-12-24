import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [state, setState] = useState(1);
  const handleClick = (id) => {
    if (state === id) {
      setState(null);
    } else {
      setState(id);
    }
  };

  return (
    // <div className=" flex flex-wrap -m-1">
    //   {data.map((item, index) => (
    //     <div key={item.id} className="w-full p-1 ">
    //       <div
    //         onClick={() => handleClick(item.id)}
    //         // className={`${
    //         //   state === item.id ? "border-gray-600 " : ""
    //         // }  pb-1 lg:px-8 cursor-pointer duration-300  bg-opacity-60    shadow-10xl`}
    //         className={`${
    //           state === item.id ? "border-b-2 border-gray-200" : ""
    //         } pb-1  cursor-pointer duration-300 bg-opacity-60 shadow-10xl ${
    //           index === data.length - 1 ? "" : "border-b-2 border-gray-200"
    //         }`}
    //       >
    //         {/* title  */}
    //         <div className="flex flex-wrap justify-between py-1 md:py-2 -m-2">
    //           <div
    //             className={`${
    //               state === item.id ? "h-auto" : ""
    //             } flex-1 overflow-hidden p-2 duration-300 ease-in-out`}
    //           >
    //             <h3 className="mb-2 text-lg font-semibold leading-normal">
    //               {item.title}
    //             </h3>
    //           </div>
    //           <span className="pr-4 text-[#2aa7df] text-2xl inline">
    //             {state === item.id ? "-" : "+"}
    //           </span>
    //         </div>
    //         {/* container  */}
    //         <div
    //           // style={{
    //           //   maxHeight: state === item.id ? "1000px" : "0",
    //           //   transition: "max-height 1s ease-in-out",
    //           // }}
    //           // className="nav-scrollbar  ease-in-out overflow-hidden "

    //           className={`${
    //             state === item.id ? "h-auto" : "h-0 overflow-hidden"
    //           } transition-all  duration-300 ease-in-out `}
    //         >
    //           <p
    //             className={`select-text text-sm lg:text-base font-normal leading-5 lg:leading-6 text-[#666]`}
    //           >
    //             {item.content}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div>
      <NewAccordion data={data} />
    </div>
  );
};

export default Accordion;

function NewAccordion({ data }) {
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
            className={` w-full flex items-center justify-between py-1 md:py-2  cursor-pointer duration-300 bg-opacity-60 shadow-10xl `}
          >
            <p className="mb-2 text-lg font-semibold leading-normal">
              {item.title}
            </p>
            {/* icon  */}
            <span className="pr-2 text-[#2aa7df] text-2xl inline">
              {state === item.id ? "-" : "+"}
            </span>
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
    </div>
  );
}
