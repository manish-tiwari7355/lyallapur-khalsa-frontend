import React from "react";

import { FaLink } from "@react-icons/all-files/fa/FaLink";

import HeaderBanner from "../../components/HeaderBanner";
import { nccImageData } from "./nccImageData";
import nccNotice from "../../../src/assets/images/ncc-notice.png";

const NCCWing = () => {
  document.title = "NCC Wing";

  return (
    // <ScrollToHeading offset={140}>
    <div className="">
      <div className="">
        <HeaderBanner
          bgImage="AboutBanner"
          title="NCC Wing"
          currentPage="NCC Wing"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="mt-20 flex justify-center pb-10 text-3xl font-bold md:text-5xl">
        <h1 className=" border-l-2 border-[#32727A] pl-4 text-[#081C3A]">
          NCC Wing
          <span className="pl-1 text-[#32727A]"></span>
        </h1>
      </div>
      <div className="max-w-[1300px] mx-auto px-2 xs:px-3">
        <div className="p-3 rounded-lg text-lg lg:text-xl font-semibold m-2 mb-5">
          Lyallpur Khalsa College Technical Campus ,Jalandhar has been allotted
          NCC Girls wing from March 2022 onwards whose coordinator is
          <span className="underline px-1">Ms. Harbinder Kaur (AP, AS)</span>.
          The main purpose of establishment of NCC wing is to develop character,
          commandership, discipline , leadership, secular outlook , spirit of
          adventure and the ideals of selfless service amongst the students.
          Trials regarding the same were conducted on 15th March 2022 in the
          campus of LKCTC. After scrutinous selection , 18 cadets were selected.
          In 2022, new enrollment was done in 2022 in which 19 new cadets were
          selected . In total NCC Girls wing of LKCTC has 37 girl cadets
          <span className="inline-block pl-2">
            <a href={nccNotice} target="_blank" rel="noreferrer">
              <FaLink />
            </a>
          </span>
          .
        </div>
        <div className="flex flex-wrap sm:px-8 md:px-0 my-5 px-5 gap-2">
          {nccImageData?.map((value, i) => (
            <div
              key={i}
              className="border h-[210px] w-[210px] md:h-[250px] md:w-[250px] mx-auto mb-5"
              style={{
                border: "5px solid",
                borderColor: "#081c3a #32727a #32727a #081c3a",
              }}
            >
              <img src={value?.img} alt="" className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
    // </ScrollToHeading>
  );
};

export default NCCWing;
