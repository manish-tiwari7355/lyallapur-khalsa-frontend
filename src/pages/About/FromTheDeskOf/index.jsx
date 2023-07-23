import React from "react";
import HeaderBanner from "../../../components/HeaderBanner";

import Card from "./Card";
import TableOfContent from "./TableOfContent";
import OurRecruiters from "../../../components/OurRecruiters";
const FromTheDeskOf = () => {
  document.title = "From the desk of";
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="FromTheDeskOf"
          title="From the desk of"
          currentPage="From the desk of"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="flex pb-10 mt-[60px] text-3xl lg:text-5xl font-bold max-w-[1300px] mx-auto">
        <h1 className=" ml-4 border-l-2 border-[#32727A] pl-4 text-[#081C3A]">
          From The
          <span className=" text-[#32727A]"> Desk Of</span>
        </h1>
      </div>
      <div className="">
        <div className="max-w-[1300px] mx-auto px-[20px] pb-[120px] md:-mt-48">
          <TableOfContent />
          <div className="md:-mt-72">
            <Card />
          </div>
        </div>
        <OurRecruiters />
      </div>
    </div>
  );
};

export default FromTheDeskOf;
