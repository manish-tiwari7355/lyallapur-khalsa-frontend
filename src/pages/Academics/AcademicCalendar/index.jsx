import React from "react";
import HeaderBanner from "../../../components/HeaderBanner";
import Calendar from "../../../assets/images/calendar-interface-symbol-tool.png";
// import ACADEMICCALENDERS1 from "../../../assets/pdf/ACADEMICCALENDERS1";
import calendar1 from "../../../assets/pdf/ACADEMICCALENDERS1.pdf";
import calendar2 from "../../../assets/pdf/ACADEMICCALENDERS2.pdf";
import calendar3 from "../../../assets/pdf/ACADEMIC CALENDAR -JAN- TO J_2022 -2023.pdf"
const AcademicCalender = () => {
  const card = [
    {
      imgUrl: Calendar,
      title: " Academic Calender ",
      title2: "2022-23",
      btn: "Click Here",
      pdf: calendar3,
    },
    {
      imgUrl: Calendar,
      title: " Academic Calender ",
      title2: "2021-22",
      btn: "Click Here",
      pdf: calendar2,
    },
 
    {
      imgUrl: Calendar,
      title: " Academic Calender",
      title2: "2020-21",
      btn: "Click Here",
      pdf: calendar1,
    },
 
  ];
  document.title = "Calender Page";
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="CarrierBanner"
          title=" Academic Calender"
          currentPage=" Academic Calender"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="px-[15px] max-w-[1300px] mx-auto">
        <div className="mt-20 flex justify-center pb-10 text-3xl font-bold md:text-5xl">
          <h1 className=" border-l-2 border-[#32727A] pl-4 text-[#081C3A]">
            Academic
            <span className="pl-2 text-[#32727A]">Calender</span>
          </h1>
        </div>
        <div className="md:grid md:grid-cols-3 my-10 space-y-10 md:space-y-0 lg:mx-32 ">
          {card?.map((item) => (
            <div className="">
              <div className="flex justify-center">
                <img src={item?.imgUrl} alt="" className="" />
              </div>
              <p className="text-[#32727A] text-xl flex justify-center my-4 md:text-2xl md:font-bold text-center">
                {item?.title} <br /> {item?.title2}
              </p>
              <div className="  rounded-full text-white py-2 px-6 bg-gradient-to-r from-[#081C3A] to-[#32727A]  text-center border border-green-400 w-[200px] mx-auto ">
                <a href={item?.pdf} target="_blank" rel="noreferrer">
                  {" "}
                  {item?.btn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicCalender;
