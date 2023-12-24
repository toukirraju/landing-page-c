import React from "react";

const Button = (props) => {
  return (
    <button className="flex justify-center items-center gap-1.5 bg-[#2AA7DF] hover:bg-[#2a91dfe2] hover:drop-shadow-lg duration-300  text-white font-bold py-2 px-4 rounded">
      {props.children}
    </button>
  );
};

export default Button;
