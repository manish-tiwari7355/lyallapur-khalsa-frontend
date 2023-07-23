import React from "react";

import HeaderBanner from "../../../components/HeaderBanner";
import { MouData } from "./MouData";

const IndustryMOUs = () => {
  document.title = "Industry MOUs";

  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="IndustryBanner"
          title="MOU / Industry Partners"
          currentPage="MOU / Industry Partners"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-5">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-x-1 gap-y-5">
          {MouData?.map((item, index) => (
            <div key={index}>
              <img
                src={item?.image}
                alt="images"
                className="border border-red-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryMOUs;
