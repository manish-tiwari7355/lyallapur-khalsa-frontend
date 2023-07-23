import React from "react";

import { FaLink } from "@react-icons/all-files/fa/FaLink";

import HeaderBanner from "../../components/HeaderBanner";
import datesheet from "../../assets/pdf/datesheet.pdf";
import notice from "../../assets/pdf/notice.pdf";
import studentInstruction from "../../assets/pdf/studentInstruction.pdf";


const Examination = () => {
  document.title = "Examination";

  const serviceData = [
    {
      name: "Examination Notice",
      link: notice,
    },
    {
      name: "Instructions to Students",
      link: studentInstruction,
    },
  ];
  const datesheetData = [
    {
      name: "Date Sheet",
      link: datesheet,
    },
  ];

  return (
    // <ScrollToHeading offset={140}>
    <div className="">
      <div className="">
        <HeaderBanner
          bgImage="AboutBanner"
          title="Examination"
          currentPage="Examination"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div id="examination" className="mt-20 flex justify-center pb-10 text-3xl font-bold md:text-5xl">
        <h1 className=" border-l-2 border-[#32727A] pl-4   text-[#081C3A]">
          Examination
          <span className="pl-1 text-[#32727A]"></span>
        </h1>
      </div>
      <div className="max-w-[1300px] mx-auto">
        <div className="primary-bg-color p-3 rounded-lg text-white text-xl font-semibold hover:bg-[#32727a] cursor-pointer m-2 mb-5">
          + Services
        </div>
        <ul className="list-disc ml-12 text-lg">
          {serviceData?.map((value) => (
            <li key={value} className="py-2 hover:text-[#32727a] font-semibold">
              <a href={value?.link} target="_blank" rel="noreferrer">
                <span className="flex">
                  {value?.name}
                  <FaLink className="item-center flex mt-1 ml-2" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="primary-bg-color p-3 rounded-lg text-white text-xl font-semibold hover:bg-[#32727a] cursor-pointer m-2 mb-5">
          + Exam Date Sheet
        </div>
        <ul className="list-disc ml-12 text-lg">
          {datesheetData?.map((value) => (
            <li key={value} className="py-2 hover:text-[#32727a] font-semibold">
              <a href={value?.link} target="_blank" rel="noreferrer">
                <span className="flex">
                  {value?.name}
                  <FaLink className="item-center flex mt-1 ml-2" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    // </ScrollToHeading>
  );
};

export default Examination;
