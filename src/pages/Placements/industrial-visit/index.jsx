import React from "react";

import HeaderBanner from "../../../components/HeaderBanner";

import "swiper/css";
import "swiper/css/pagination";

import OurRecruiters from "../../../components/OurRecruiters";
import { IVCard } from "./IndustrialVisitCard";
import { TilesData } from "./TilesData";

const IndustrialVisit = () => {
  document.title = "Industrial Visit";
  return (
    <div>
      <div className="">
        <div className="">
          <HeaderBanner
            bgImage="IndustrialVisit"
            title="Industrial Visit"
            currentPage="Industrial Visit"
          />
          <div className="bannerBotttom h-10 w-full"></div>
        </div>
        <div className=" primary-color xs container mx-4 mt-[60px] mb-[50px] w-72  border-l-2 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-15 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%] lg:ml-[10rem]">
          Industrial<span className="secondary-color"> Visits</span>
        </div>
      </div>
      <div className=" ">
        {TilesData?.map((item) => (
          <div
            key={item?.id}
            className={`mt- lg:flex lg:h-[600px] ${
              item?.id % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="relative -mt-2 space-y-0 lg:-[600px] lg:w-[50%]">
              <IVCard arr={item?.images} />
            </div>
            <div className=" primary-bg-color  lg:pt-22 -mt-2 h-[350px] w-[100%] py-5 my-2 px-3 text-white  lg:h-full lg:w-1/2 lg:px-12 lg:pt-28">
              <div className="ml-3 text-sm font-bold lg:text-lg ">
                {item?.date}
              </div>
              <div className="mt-4 ml-3 text-xl md:text-3xl font-bold leading-8 " id={item?.scrollid}>
                {item?.heading}
              </div>
              <section
                className={`mt-3 px-3 lg:mt-10 text-justify ${
                  item?.description.length > 500
                    ? "overflow-y-scroll"
                    : "overflow-hidden"
                } h-[9rem] lg:h-[15rem] pb-4`}
              >
                {item?.description}
              </section>
            </div>
          </div>
        ))}
      </div>
      <OurRecruiters />
    </div>
  );
};

export default IndustrialVisit;
