// import Image from 'next/image';
import React from "react";

const Cards = ({ image, title, designation }) => {
  return (
    <div className=" relative mt-20 h-[190px] w-[200px] rounded-md border bg-white md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[230px]">
      <div
        className="-mt-20 flex items-center justify-center rounded-full "
        // style={{
        //   borderRadius: '100px',
        //   border: '5px solid white',
        //   overflow: 'hidden',
        // }}
      >
        <div className="flex h-[160px] w-[160px] rounded-full border-[6px] border-[#081c3a] transition delay-75 duration-1000 ease-in-out hover:scale-[1.10] hover:border-[#32727A] lg:h-[180px]  lg:w-[180px]  lg:border-4">
          <img
            src={image || ""}
            alt=""
            // height='180px'
            // width='180px'
            className="overflow-hidden rounded-full w-[175px]"
          />
        </div>
      </div>
      <div>
        <h1 className="pb-2 pt-8 font-bold text-[#081C3A] xl:text-xl">
          {title}
        </h1>
        <p className="absolute bottom-[-10px] w-full pb-8 text-center text-xs text-slate-500 xl:text-lg">
          {designation}
        </p>
      </div>
    </div>
  );
};

export default Cards;
