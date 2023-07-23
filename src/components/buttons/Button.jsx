import React from "react";

const Button = ({ btn }) => {
  return (
    <div className=" cursor-pointer w-36 primary-bg-color mt-6  lg:text-base rounded-r-full py-3 px-6 text-white md:text-[10px]">
      {btn}
    </div>
  );
};

export default Button;
