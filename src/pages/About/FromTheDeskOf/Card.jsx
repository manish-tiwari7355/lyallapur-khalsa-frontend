import React from "react";
import { arr } from "./Data";

const Card = () => {
  return (
    <div className="">
      {arr?.map((items) => (
        <div
          className="sticky flex w-full justify-center items-center"
          key={items?.key}
        >
          <div className="relative w-full min-h-[60vh] md:w-[100vw] md:min-h-[80vh] mt-[40px] mr-0 md:mt-[80px] md:mr-[30px] grid grid-cols-[0.25fr] md:grid-cols-[0.25fr_1fr] grid-rows-[20vw_auto] gap-y-[16px] gap-x-[16px] xl:gap-x-[50px] auto-cols-[1fr]">
            <div className="hidden md:block row-start-[span_2] row-end-[span_2] col-start-[span_1]"></div>
            {/* _______________________ */}
            <div
              className={`p-[10px] md:p-[50px] h-[60vh] md:h-auto rounded-[20px] bg-[${items?.borderColor}] origin-[100%_0] text-justify sticky md:flex w-full justify-center items-center row-start-[span_2] row-end-[span_2] col-start-[span_2] md:col-start-[span_1] `}
            >
              <div
                className="p-[10px] md:p-[20px] mt-0 bg-white h-full overflow-scroll lg:overflow-hidden relative "
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px 1px 1px 5px",
                  borderColor: "#e7e7e7 #e7e7e7 #e7e7e7 #081c3a",
                }}
              >
                {/* border-l-[5px] border-[1px] border-l-[${items?.borderColor}] */}
                <h2 id={items?.id} className="opacity-0">
                  {items?.title}
                </h2>
                <div className="text-xl md:text-3xl font-bold text-[#081C3A] ">
                  Welcome to LKCTC!
                </div>
                <div className="pb-4 font-bold text-[#081C3A]">
                  Dear Students,
                </div>
                {/* <div className="flex justify-center"> */}
                <div className="w-[9rem] md:w-[12rem] md:h-[15rem] p-3 md:float-right ">
                  <img src={items?.img} alt="" className="rounded-xl" />
                  {/* </div> */}
                </div>
                <div className=" text-md font-normal text-slate-600">
                  {items?.paragraph1}
                </div>
                <div className="text-md font-normal text-slate-600">
                  {items?.paragraph2}
                </div>
                <div className="text-md font-normal text-slate-600">
                  {items?.paragraph3}
                </div>
                <div className="text-md font-normal text-slate-600">
                  {items?.paragraph4}
                </div>
                <div className="text-md font-normal text-slate-600">
                  {items?.paragraph5}
                </div>
                <div className="absolute bottom-0">
                  <div className="font-bold text-[#081C3A]">{items?.bless}</div>
                  <div className="text-xl md:text-[2.25rem] font-bold text-[#081C3A]">
                    {items?.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
