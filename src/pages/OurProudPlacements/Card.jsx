import React from "react";

export function Card({ image, name, stream, company }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col mx-5 h-full">
        <div className="flex justify-center mx-auto w-[240px] h-[230px]">
          <img
            src={image}
            alt=""
            className="w-[200px] h-[230px] flex rounded-[50%] hover:scale-110 transition duration-700  "
          />
        </div>
        <div className=" flex flex-col p-[15px] justify-center text-center">
          <h1 className="text-[20px] leading-[28px] font-bold text-[#fff] mb-[15px]">
            {name}
          </h1>
          <p className="text-[15px] font-semibold text-[#e6e6f3] mb-[5px]">
            {stream}
          </p>
          <p className="text-[15px] text-[#32727a] font-semibold">{company}</p>
        </div>
      </div>
    </div>
  );
}
