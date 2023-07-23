import React from "react";

import { motion } from "framer-motion";

import {
  SchoolOfEngineeringTab,
} from "./OurCoursesTab";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
export function OurCourses(props) {
  return (
    <div>
      <div className="z-20 relative -mt-[90px] bg-[#081c3a] py-[60px] md:py-[40px]  max-w-[1400px] mx-auto leading-5 rounded-t-[5px]">
        <div className="flex justify-center text-center flex-col">
          <div className="text-[25px] md:text-[35px] lg:text-[38px] font-bold text-white">
            Our Courses
          </div>
          <div className="text-base font-bold text-[#cacaca] mt-[25px] opacity-100">
            Explore our major courses
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto pt-[50px] md:pt-0 md:px-[48px] px-[15px]">
        <div className="">
          <div className="mt-10 md:mt-0 text-center font-extrabold md:flex md:justify-between">
            <div
              className={`pb-5 cursor-pointer hidden  ${
                props.subTabs === "schoolOfEngineering"
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              onClick={() => props.tabhandle("schoolOfEngineering")}
            >
              <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
              </div>
              {/* _______line_______ */}
              <motion.div
                className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                  props.subTabs === "schoolOfEngineering"
                    ? "md:block"
                    : "md:hidden"
                }`}
                initial={{ x: 0 }}
                animate={
                  props.subTabs === "schoolOfEngineering" ? "open" : "closed"
                }
                variants={variants}
              ></motion.div>
              <div
                className="primary-color mt-4 text-[13px] tracking-[3px] leading-[26px]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                SCHOOL OF ENGINEERING
              </div>
            </div>
            {/* <div
              onClick={() => props.tabhandle("schoolOfHealthScience")}
              className={`pb-5 cursor-pointer  ${
                props.subTabs === "schoolOfHealthScience"
                  ? "opacity-100"
                  : "opacity-50"
              }`}
            >
              <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
              </div>
              <motion.div
                className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                  props.subTabs === "schoolOfHealthScience"
                    ? "md:block"
                    : "md:hidden"
                }`}
                initial={{ x: 0 }}
                animate={
                  props.subTabs === "schoolOfHealthScience" ? "open" : "closed"
                }
                variants={variants}
              ></motion.div>
              <div className="primary-color mt-4 text-[13px] tracking-[3px] ">
                SCHOOL OF HEALTH SCIENCE
              </div>
            </div>
            <div
              className={`pb-5 cursor-pointer  ${
                props.subTabs === "schoolOfMGMT" ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => props.tabhandle("schoolOfMGMT")}
            >
              <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
              </div>
              <motion.div
                className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                  props.subTabs === "schoolOfMGMT" ? "md:block" : "md:hidden"
                }`}
                initial={{ x: 0 }}
                animate={props.subTabs === "schoolOfMGMT" ? "open" : "closed"}
                variants={variants}
              ></motion.div>
              <div className="primary-color mt-4 text-[13px] tracking-[3px] ">
                SCHOOL OF MGMT, IT & HM
              </div>
            </div> */}
          </div>
        </div>
        <div className="">
          {props.subTabs === "schoolOfEngineering" && (
            <SchoolOfEngineeringTab />
          )}
          {/* {props.subTabs === "schoolOfHealthScience" && (
            <SchoolOfHealthScienceTab />
          )}
          {props.subTabs === "schoolOfMGMT" && <SchoolOfMGMTTab />} */}
        </div>
      </div>
    </div>
  );
}
