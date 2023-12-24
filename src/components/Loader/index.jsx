import React from "react";

const index = ({ variant, size = "sm" }) => {
  const variants = {
    primary: "bg-gradient-to-r from-purple-400 via-blue-500 to-red-400",
    secondary: "bg-gradient-to-r from-green-400 to-blue-500",
    success: "bg-gradient-to-r from-green-400 to-blue-500",
    danger: "bg-gradient-to-r from-red-400 via-pink-500 to-yellow-500",
    warning: "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
    info: "bg-gradient-to-r from-blue-600 via-blue-400 to-blue-400",
    light: "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600",
    dark: "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600",
  };
  const sizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-12 h-12",
  };

  const subSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10",
  };

  const sizeClass = sizes[size] || sizes["md"];
  const variantClass = variants[variant] || variants["primary"];
  const classes = `${sizeClass} ${variantClass}`;
  const subClasses = `${subSizes[size]} ${variantClass}`;
  return (
    // <div class="flex justify-center items-center">
    //   <div class="relative w-6 h-6 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
    //     <div class="absolute w-4 h-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   rounded-full border-2 border-white"></div>
    //   </div>
    // </div>
    <div class="flex justify-center items-center">
      <div class={`relative ${classes} animate-spin rounded-full `}>
        <div
          class={`absolute ${subClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   rounded-full border-2 border-white`}
        ></div>
      </div>
    </div>
  );
};

export default index;
