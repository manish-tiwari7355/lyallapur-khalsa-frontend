import React, { useState } from "react";

import { MdKeyboardArrowUp } from "@react-icons/all-files/md/MdKeyboardArrowUp";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";

import { FaqData } from "./FaqData";

import HeaderBanner from "../../../components/HeaderBanner";

const FAQs = () => {
  const [expand, setExpand] = useState([]);

  document.title = "FAQ";

  return (
    <div>
      <div className="">
        <HeaderBanner bgImage="Faq" title="FAQs" currentPage="FAQs" />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="">
        <div className="md:px-0"></div>
      </div>
      <div className=" primary-color mt-16 ml-3 mb-9 border-l-2 border-[#32727a] pl-2 text-3xl font-bold md:text-5xl xl:ml-[5.75rem] 2xl:ml-[19rem]">
        FAQs
      </div>

      <div className="max-w-[1300px] flex mx-auto px-[20px] flex-col ">
        {/* _________Tabs______________ */}

        {FaqData?.map((element, id) => (
          <div className=" border-2 border-gray-100 border-t-0">
            <div
              className="p-4 text-xl relative font-medium cursor-pointer "
              onClick={() =>
                setExpand((prev) =>
                  prev?.some((ele) => ele === element?.id)
                    ? prev?.filter((item) => item !== element?.id)
                    : [...prev, element?.id]
                )
              }
            >
              <div className="w-5/6 text-[15px] text-[#081c3a] font-extrabold py-6 lg:text-[18px]">
                Q{id + 1}. {element?.que}
              </div>
              <button className="text-2xl font-thin absolute top-0 right-0 p-5 focus:outline-none text-center">
                {expand?.includes(element?.id) ? (
                  <MdKeyboardArrowUp className="w-7" />
                ) : (
                  <MdKeyboardArrowDown className="w-7" />
                )}
              </button>
            </div>
            {expand?.includes(element?.id) ? (
              <div className={`text-[#7e7e7e] p-4 select-none`}>
                <p
                  className="pb-3 text-base pl-4 text-justify  py-[20px] leading-[23px]"
                  dangerouslySetInnerHTML={{
                    __html: element?.answer?.replace(/\n/g, "<br />"),
                  }}
                />
                {element?.image ? (
                  <div className="w-full">
                    <img src={element?.image} alt="allcourses" />
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
