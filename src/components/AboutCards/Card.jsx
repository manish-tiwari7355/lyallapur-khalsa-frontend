// import Image from 'next/image';
import React from "react";
const Card = ({ avatar, title, designation, style, paddingT }) => {
  return (
    <div className="w-[320px]  px-4">
      <div className="relative  rounded-lg bg-[#32727A9C]">
        <div className="h-[80px] rounded-t-lg bg-[#081C3A] md:h-[120px]"></div>
        <div className="-mt-[50px] flex items-center justify-center md:-mt-[80px] ">
          {avatar && (
            <div className="">
              <div
                className="flex h-[100px] w-[100px] items-center justify-center  md:h-[150px] md:w-[150px]"
                style={{
                  borderRadius: "100px",
                  border: "5px solid white",
                  overflow: "hidden",
                }}
              >
                {" "}
                <img
                  src={avatar || ""}
                  alt=""
                  // height='180px'
                  // width='180px'
                  className={`${
                    style ||
                    `rounded-full pt-[30px]  ${
                      paddingT ? "md:pt-0" : "md:pt-[46px]"
                    }`
                  } `}
                />
              </div>
            </div>
          )}
        </div>
        <div className="text-center">
          <div>
            <h1 className="font-semibold text-[#081C3A] md:text-lg uppercase">
              {title}
            </h1>
            <p className="pb-16 text-xs text-white md:text-lg">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
