// import Image from 'next/image';
import Front from "../../../assets/images/DSC00216-p-1080.png";
import Home from "../../../assets/images/Home-page-slider-2-p-500.jpg";
import Mission from "../../../assets/images/mission.svg";
import VSN from "../../../assets/images/vision.svg";
import HeaderBanner from "../../../components/HeaderBanner";

import React from "react";
const Vision = () => {
  document.title = "Vision & Mission";
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="VisionBanner "
          title="Vision & Mission"
          currentPage="Vision & Mission"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="px-[15px] max-w-[1300px] mx-auto ">
        <div className=" py-8 text-3xl font-bold md:text-5xl mb-8">
          <h1 className=" border-l-2 border-[#32727A] pl-4  text-[#081C3A]">
            Vision &<span className="pl-2 pb-4 text-[#32727A]"> Mission</span>
          </h1>
        </div>

        <div className=" lg:flex ">
          <div className=" mx-auto w-full xs:w-[440px] xs:h-[290px] h-auto md:h-[330px] md:w-[500px] lg:flex lg:h-[23rem] lg:w-[500px] mb-16">
            <img
              src={Home}
              alt=""
              style={{ boxShadow: "-5px 6px 0 0 #081c3a" }}
              className="rounded-3xl"
            />
          </div>
          <div className="lg:w-1/2 lg:mx-auto">
            <div className="m-4 my-5 flex justify-center gap-2 text-4xl font-bold lg:flex lg:justify-start">
              <div className=" rounded-full border bg-white p-2 shadow-2xl lg:p-3">
                <img
                  src={VSN}
                  alt=""
                  className="h-[26px] w-[26px] lg:h-[42px] lg:w-[42px] "
                />
              </div>
              <div className="text-[#081C3A]">
                Our <span className="text-[#32727A]">Vision</span>
              </div>
            </div>

            <p className=" px-6 text-justify text-xl leading-tight ">
              To contribute to the region & the country at large by grooming
              students in science, technology & management through experiment
              based learning to make them globally competent technocrats,
              professionals, managers & entrepreneurs with good human values &
              ethics to serve the society.
            </p>
          </div>
        </div>
        <div className=" lg:flex lg:flex-row-reverse  mt-14 lg:mt-0">
          <div className=" mx-auto w-full xs:w-[440px] xs:h-[290px] h-auto md:h-[330px] md:w-[500px] lg:flex lg:h-[23rem] lg:w-[500px] mb-16">
            <img
              src={Front}
              alt=""
              style={{ boxShadow: "-5px 6px 0 0 #081c3a" }}
              className="rounded-3xl"
            />
          </div>
          <div className="lg:w-1/2 lg:mx-auto  -mt-10 lg:mt-0 ">
            <div className="m-4 my-5 flex justify-center gap-2 text-4xl font-bold lg:flex lg:justify-start">
              <div className=" rounded-full border bg-white p-2 shadow-2xl lg:p-3">
                <img
                  src={Mission}
                  alt=""
                  className="h-[26px] w-[26px] lg:h-[42px] lg:w-[42px] "
                />
              </div>
              <div className="text-[#081C3A]">
                Our <span className="text-[#32727A]">Mission</span>
              </div>
            </div>

            <ul className="lg:mx-auto ml-6 list-[square] px-3 pb-8  text-lg md:px-10 md:text-xl leading-snug lg:leading-relaxed">
          <li className="">
          To maintain state-of-the-art infrastructure in campus.
              </li>
              <li>
              Cultivate leadership skills, teamwork ethics and entrepreneurial
                skills in students through corporate and industry collaborations
              </li>
              <li>
                To blend theoretical knowledge with practical training programs{" "}
              </li>
              <li>
                To encourage the faculty and staff in pursuing their own
                academic upliftment through training programmes, seminars,
                workshops, etc.
              </li>
              <li>
                To inculcate moral, ethical and spiritual values in education at
                all levels to cater societal needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
