import Dot from "../../../assets/images/62b55f32e3bd0513cebb0044_dot-pattern-1-2.png";
import balbir from "../../../assets/images/62bfd1d3926d581a78f4be6c_GB-001.jpg";
import Chatha from "../../../assets/images/62c2cae88758bbd3c2938dc8_Chatha.jpg";
import Deol from "../../../assets/images/62c2cb4e50406e5752692651_CT-003.jpg";
import SK from "../../../assets/images/Director.png";
import Logo from "../../../assets/images/LKCTC-LOGO.png";
import React, { useEffect } from "react";
import Card from "../../../components/AboutCards/Card";
import HeaderBanner from "../../../components/HeaderBanner";
import ScrollToHeading from "../../../components/ScrollToHeading";

const AboutLKCTC = () => {
  document.title = "About Overview";
  const coreTeam = [
    {
      title: "Sardarni Balbir kaur",
      designation: "President",
      avatar: balbir,
      key: "09",
    },
    {
      title: "S. Sukhbir Singh Chatha",
      designation: "Group Director",
      avatar: Chatha,
      style: "pt-0",
      key: "10",
    },
    {
      title: "Dr. S.K Sood",
      designation: "The Director LKCTC",
      avatar: SK,
      key: "12",
      paddingT: "0px",
    },
    {
      title: "Dr. R.S. Deol",
      designation: "Dy. Director (A.A.)",
      avatar: Deol,
      key: "11",
    },
  ];

  return (
    <div className="">
      <div className="">
        <HeaderBanner
          bgImage="AboutBanner"
          title="About Us"
          currentPage="About Us"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="mt-20 flex justify-center pb-10 text-3xl font-bold md:text-5xl">
        <h1 className=" border-l-2 border-[#32727A] pl-4   text-[#081C3A]">
          About
          <span className="pl-1 text-[#32727A]">LKCTC</span>
        </h1>
      </div>
      <div className="xl:mx-20 2xl:mx-52">
        <div className="relative z-20 overflow-hidden">
          <div className="">
            <div className="mx-8 flex flex-wrap justify-center gap-2 md:mx-16 lg:grid lg:grid-cols-2 lg:gap-5">
              {/* in further 2 div have images in global css  */}
              <div className="bgGroup relative h-[280px] w-[550px] overflow-hidden rounded-md saturate-150 md:h-[380px] md:w-[100%] xl:h-[300px] "></div>
              <div className="bgFront relative h-[280px] w-[550px] overflow-hidden rounded-md saturate-150  md:h-[380px] md:w-[100%] xl:h-[300px] "></div>
            </div>
            <div className="absolute top-0 h-full w-full">
              <div className="flex h-full items-center justify-center">
                <div className="rounded-full  relative">
                  <div className="p-2 bg-white rounded-full">
                    {" "}
                    <div
                      style={{ animationDuration: "20s" }}
                      className=" flex h-[150px] w-[150px] rounded-full  items-center justify-center  border-2 border-dashed  border-l-blue-900 border-r-[#32727A] border-t-blue-900 border-b-[#32727A]   animate-spin"
                    />
                  </div>
                  <div className="absolute h-full w-full flex items-center justify-center  bottom-0  ">
                    <div className="rounded-full bg-white ">
                      <img
                        src={Logo}
                        alt=""
                        height="100"
                        width="100"
                        className=""
                      />
                      <h1 className="text-md -mt-1 pl-1 text-center font-semibold text-slate-800">
                        LKCTC
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute my-5 -mt-[26rem] lg:opacity-40 2xl:opacity-100 text-blue-900 xxs:ml-4 md:ml-8 md:-mt-[34rem] lg:mx-20  lg:-mt-[8rem] lg:ml-[-3rem]">
          <img src={Dot} alt="" height="" width="" className="" />
        </div>
      </div>
      <p className="p-4 px-10 text-justify text-lg  text-[#81868A] md:px-14  md:text-[20px] sm:px-20 lg:mx-4 xl:mx-20 2xl:mx-80 mt-8 xl:text-lg">
        The Lyallpur Khalsa College Technical Campus was established with the
        merger of two distinguished colleges of the region viz: Khalsa College
        Lyallpur Institute of Management & Technology established in the year
        2010 and Lyallpur Khalsa College of Engineering established in the year
        2013, under the aegis of Khalsa College Lyallpur Education Charitable
        Trust with more than 100 years of legacy. Lyallpur Khalsa College
        Technical Campus (LKCTC), Jalandhar offers Courses in Engineering,
        Diploma, B Vocational, B.Sc in Medical Laboratory Sciences, Master &
        Bachelor programs in Management & B.COM (H), Computer Application &
        Hotel Management. It has been successfully imparting education to the
        students to make them competent, motivated engineers, scientists,
        administrators and programmers. The Institute not only celebrates
        freedom of thought, cultivates vision and encourages growth but also
        inculcates human values & concern for the environment and the society.
      </p>

      {/* --------span------ */}
      <div
        className=" mb-8 mt-10 flex justify-center pb-10 text-3xl font-bold md:text-5xl scroll-m-10"
        id="our-core-team"
      >
        <h1 className="border-l-2 border-[#32727A]  pl-4 pr-2 text-[#081C3A]">
          Our
        </h1>
        <h1 className=" text-[#32727A] ">Core Team</h1>
      </div>
      <div className=" flex flex-col items-center justify-center  gap-6 pb-10 md:flex-row">
        {coreTeam?.map((item) => (
          <Card {...item} key={item?.key} />
        ))}
      </div>
    </div>
  );
};

export default AboutLKCTC;
