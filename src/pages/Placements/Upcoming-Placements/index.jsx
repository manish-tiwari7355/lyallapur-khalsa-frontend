import React from "react";
import HeaderBanner from "../../../components/HeaderBanner";

import UpcomingCard from "../../../components/Placements/upcomingCard";

import { arr } from "./data";

const UpcomingPlacements = () => {
  document.title = "Upcoming Placements";
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="PlacementBanner"
          title="Upcoming Placements"
          currentPage="Upcoming Placements"
        />
        <div className="bannerBotttom h-10 w-full"></div>
      </div>
      <div className=" primary-color xs container mx-4 mt-[60px] mb-[50px] w-72  border-l-2 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-15 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%] lg:ml-[10rem] xl:ml-[22rem]">
        Upcoming <span className="secondary-color">Placements</span>
      </div>
      <div className="md:px-[4rem] lg:px-[2rem] xl:px-[10rem] 2xl:px-[18rem]">
        {arr?.map((values) => (
          <UpcomingCard key={values?.date} values={values} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingPlacements;
