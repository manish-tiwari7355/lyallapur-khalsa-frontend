import { BiPhoneCall } from "@react-icons/all-files/bi/BiPhoneCall";
import { IoIosMail } from "@react-icons/all-files/io/IoIosMail";
// import Image from 'next/image';
import React from "react";

const Card = ({ item, firstCard }) => {
  return (
    <div
      className="border-r-rounded-full mx-auto mb-20 h-[360px] w-[250px] text-center md:flex md:h-[350px] md:w-[620px]"
      style={{
        overflow: "hidden",
      }}
    >
      {/* upper part  */}
      <div className="bg-[#081C3A] py-4 px-2 md:flex md:items-center">
        <div className="mx-auto flex h-[72px] w-[72px] rounded-full border-2 border-white md:h-[200px] md:w-[200px] md:overflow-hidden md:border-[4px]">
          <img src={item?.imag} className="rounded-full w-full" alt="" />
        </div>
      </div>
      {/* lower part  */}
      <div
        className={` ${item?.style} md:bg-[#32727A6E] md:px-10 md:py-8`}
        style={{
          overflow: "hidden",
        }}
      >
        <div className="md:text-justfy text-xl font-bold text-[#081C3A] md:mb-6 md:text-[27px]">
          <div className="flex justify-center overflow-hidden text-lg font-bold xs:text-3xl lg:mt-[-10px]">
            {item?.name}
          </div>
          <div className="font-mono text-base font-semibold  md:my-2  md:text-lg md:font-bold">
            {item.role}
          </div>
        </div>
        <div className="w-[20%] border-t-[3px] border-[#00000047]"></div>
        <div className="  mt-8  px-5 text-center">
          <div className="flex  pl-2 pr-2 text-right">
            <div className=" mr-2">
              <IoIosMail className="lg:primary-bg-color xs:bg-primary-color mt-3 rounded-full fill-[#32727a] p-1 lg:text-5xl xs:mt-[-10px] xs:text-[30px] lg:mt-[-10px] text-3xl" />
            </div>
            <div className="break-words text-sm xs:text-lg mt-3 md:-mt-2 lg:mt-0">
              {item.email}
            </div>
          </div>
          <div className="mx-auto mt-4 flex pl-2 pr-3">
            <div className="mr-2 fill-[#32727a]">
              <BiPhoneCall className=" xs:primary-bg-color lg:bg-primary-color mt-[-5px] rounded-full fill-[#32727a] p-1 lg:text-5xl xs:mt-[-10px] xs:text-[30px] lg:mt-[-10px] text-3xl" />
            </div>
            <div className="-mt-2">{item.phoneNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
