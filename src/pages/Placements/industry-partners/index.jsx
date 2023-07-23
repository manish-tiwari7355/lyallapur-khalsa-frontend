/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";

import HeaderBanner from "../../../components/HeaderBanner";
import OurRecruiters from "../../../components/OurRecruiters";
import { arr1, arr2, arr3 } from "./data";

import "./industry.css";

const IndustoryPartners = () => {
  document.title = "Industry Partners";

  return (
    <div>
      <div className="">
        <div className="">
          <HeaderBanner
            bgImage="IndustryBanner"
            title="Industry Partners "
            currentPage="Industry Partners "
          />
          <div className="bannerBotttom h-10 w-full"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-5 py-[90px] max-w-[1300px] mx-auto">
        <div className="w-full md:w-2/3 lg:w-8/12">
          <div id="industry-partners" className="primary-color mt-4 w-full border-l-2 border-[#32727a] pl-3 text-3xl font-bold xs:mt-15  xs:text-4xl   lg:text-5xl ">
            {" "}
            Industry <span className="secondary-color">Partners</span>
          </div>
          <div className="sm:mt-5 mt-4 text-lg text-[#333] lg:text-xl md:pr-4 text-justify">
            Our industry partners are an integral part of our success. They
            provide valuable resources, expertise, and opportunities for our
            students and faculty. Through our partnerships with industry
            leaders, we are able to offer students hands-on experience and
            real-world insights that prepare them for successful careers.
          </div>
        </div>
        <div className="flex mt-10 w-full marquee-container h-[50vw]">
          <div className=" relative h-[50vw] md:h-[600px] w-full bg-white shadow-lg   overflow-hidden  ">
            <marquee
              direction="up"
              className="marquee3"
              scrollamount="9"
              scrolldelay="0"
            >
              {arr1.map((item) => (
                <div className="flex justify-center" key={item.id}>
                  <img
                    src={item.img}
                    alt="logos"
                    style={{ width: "90%" }}
                    className="w-[100px] bg-white shadow-lg my-5"
                  />
                </div>
              ))}
            </marquee>
          </div>
          <div className=" relative h-[50vw] md:h-[600px] w-full bg-white shadow-lg   overflow-hidden">
            <marquee
              direction="down"
              className="marquee3"
              scrollamount="8"
              scrolldelay="0"
            >
              {arr2.map((item) => (
                <div className="flex justify-center" key={item.id}>
                  <img
                    src={item.img}
                    alt="logos"
                    style={{ width: "90%" }}
                    className="w-[100px] bg-white shadow-lg my-5"
                  />
                </div>
              ))}
            </marquee>
          </div>
          <div className=" relative h-[50vw] md:h-[600px] w-full bg-white shadow-lg   overflow-hidden">
            <marquee
              direction="up"
              className="marquee3"
              scrollamount="9"
              scrolldelay="0"
            >
              {arr3.map((item) => (
                <div className="flex justify-center" key={item.id}>
                  <img
                    src={item.img}
                    alt="logos"
                    style={{ width: "90%" }}
                    className="w-[100px] bg-white shadow-lg my-5"
                  />
                </div>
              ))}
            </marquee>
          </div>

          {/* <div className=" w-[100px] bg-white shadow-lg   lg:shadow-lg">
            {arr2.map((item1) => (
              <div
                key={item1.id}
                className="ralative mx-auto h-[20px] w-[80px] pt-3 md:h-[100px] md:w-[70px] lg:h-[100px]"
              >
                <img src={item1.img} alt="img" />
              </div>
            ))}
          </div>
          <div className="h-[80px] w-[100px] bg-white shadow-lg   ">
            {arr3.map((item2) => (
              <div
                key={item2.id}
                className="ralative mx-auto h-[20px] w-[80px] pt-3 lg:h-[100px] lg:w-[70px]"
              >
                <img src={item2.img} alt="img" />
              </div>
            ))}
          </div> */}
        </div>
      </div>
      <OurRecruiters />
    </div>
  );
};

export default IndustoryPartners;
