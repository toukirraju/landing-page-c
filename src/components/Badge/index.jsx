import React from "react";

const Badge = ({ icon, content, style, isInCurrentSet }) => {
  return (
    <div
      // style={style}
      // className={`absolute bg-primary-light  flex items-center gap-[6px] py-1 px-3 rounded-3xl shadow-md transition-all duration-500 ${
      //   isInCurrentSet ? "opacity-100" : "opacity-0 transition-opacity"
      // }`}
      className={`${style} absolute bg-primary-light  flex items-center gap-[6px] py-1 px-3 rounded-3xl shadow-md transition-all duration-700 ease-in-out `}
    >
      {icon}
      <span>{content}</span>
    </div>
  );
};

export default Badge;
