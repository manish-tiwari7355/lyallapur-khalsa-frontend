import React, { useState } from "react";
import HeaderBanner from "../../../components/HeaderBanner";
import OurRecruiters from "../../../components/OurRecruiters";
import { Meet2017, Convo2017 } from "./data";

const AlumniMeet = () => {
  const [tab, setTab] = useState("Meet2017");
  const itemHandle = (e) => {
    setTab(e);
  };
  document.title = "Alumni Meet";

  const dateArr=[
    {
      date:"6 June 2021",
      dateArg:"16June2021"
    },
    {
      date:"16 June 2021",
      dateArg:"6June2021"
    },
    {
      date:" 6 Nov 2021",
      dateArg:"6Nov2021"
    },
    {
      date:"Convo 2017",
      dateArg:"Convo2017"
    },
    {
      date:"Meet 2017",
      dateArg:"Meet2017"
    },
  ]
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="AlumniMeet"
          title="Alumni Meet"
          currentPage="Alumni Meet"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="">
        <div className="md:px-0"></div>
      </div>
      <div className=" primary-color mt-16 ml-3 mb-9 border-l-2 border-[#32727a] pl-2 text-3xl font-bold md:text-5xl xl:ml-[5.75rem] 2xl:ml-[19rem]">
        Alumni<span className="secondary-color"> Meet</span>
      </div>
      <div className="mt-6 leading-7 break-all px-4 max-w-[1300px] mx-auto text-[#333333] mb-[80px]">
        Lyallpur Khalsa College Technical Campus organized an Alumni Meet in
        which LKCTC faculty, staff and students welcomed the guests with love
        and warm smiles. It was a moment of re-living experiences, remembering
        the anecdotes and laughing once again on the stories that the college
        campus walls spoke of in silence. The event was a huge success with an
        overwhelming number of alumni turning up, thus making it a memorable
        event.
      </div>
      {/* __________________________________________ */}
      <div className="flex flex-col relative max-w-[1300px] h-[800px] mx-auto p-3">
        {/* tab1________ */}
        {dateArr?.map((item)=>(
        <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] m-3">
          <div
            className={`flex cursor-pointer w-full h-full mb-[30px] justify-center p-3 items-center rounded-full bg-[#32727a] ${
              item?.dateArg === tab ? "secondary-bg-color" : "primary-bg-color"
            }`}
            onClick={() => itemHandle(`${item?.dateArg}`)}
          >
            <h1 className="flex justify-center text-center text-white items-center font-bold text-[20px]">
            {item?.date}
            </h1>
          </div>
        </div>))}
        {/* _________Convo2017___________ */}
        {tab === "Convo2017" && (
          <div>
            <div className="absolute top-0 left-[170px] mr-2">
              <div className="grid -ml-4 md:ml-0  scrollbar-hide overflow-scroll grid-cols-1 sm:grid-cols-2 p-4 md:grid-cols-3 gap-5 lg:justify-start lg:gap-7 ">
                {Convo2017?.map((item) => (
                  <div key={item?.id} >
                    <img
                      src={item?.images}
                      alt=""
                      className="  xs:w-[250px] sm:w-[240px] md:w-[250px] lg:w-[300px] xl:w-[320px]"
                      style={{ boxShadow: "7px 7px 0 0 #081c3a" }}
                      width={200}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* ________Meet2017____________ */}
        {tab === "Meet2017" && (
          <div>
            <div className="absolute top-0 left-[170px] mr-2 ">
              <div className="grid grid-cols-1  -ml-4 md:ml-0 sm:grid-cols-2 p-4 md:grid-cols-3 scrollbar-hide gap-5 overflow-scroll h-[800px] md:h-auto lg:overflow-hidden lg:justify-start lg:gap-7">
                {Meet2017?.map((item) => (
                  <div key={item?.id}>
                    <img
                      src={item?.images}
                      alt=""
                      className= "xs:w-[250px]  sm:w-[240px] md:w-[250px] lg:w-[300px] xl:w-[320px]"
                      style={{ boxShadow: "7px 7px 0 0 #081c3a" }}
                      width={200}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* ____________________ */}
      </div>
      <OurRecruiters />
      {/* ________________________ */}
    </div>
  );
};

export default AlumniMeet;
