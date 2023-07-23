import React from "react";

import { FaLink } from "@react-icons/all-files/fa/FaLink";

import HeaderBanner from "../../components/HeaderBanner";
import officeCircular from "../../assets/pdf/office-circular.pdf";
import notice from "../../assets/pdf/swa-notice.pdf";

const SWA = () => {
  document.title = "SWA";

  const serviceData = [
    {
      name: "Notice",
      link: notice,
    },
    {
      name: "Office Circular",
      link: officeCircular,
    },
  ];

  return (
    // <ScrollToHeading offset={140}>
    <div className="">
      <div className="">
        <HeaderBanner
          bgImage="AboutBanner"
          title="Student Committee (SWA )"
          currentPage="SWA"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="mt-20 flex justify-center pb-10 text-3xl font-bold md:text-5xl">
        <h1 className=" border-l-2 border-[#32727A] pl-4 text-[#081C3A]">
          Student Committee (SWA )<span className="pl-1 text-[#32727A]"></span>
        </h1>
      </div>
      <div className="max-w-[1300px] mx-auto">
        <div className="primary-bg-color p-3 rounded-lg text-white text-xl font-semibold hover:bg-[#32727a] cursor-pointer m-2 mb-5">
          + Links
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
      </div>
    </div>
    // </ScrollToHeading>
  );
};

export default SWA;
