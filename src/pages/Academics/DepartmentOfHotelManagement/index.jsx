import React, { useEffect, useState } from "react";

import { GalleryPopup } from "../../../components/GalleryImagePopup/GalleryPopup";
import HeaderBanner from "../../../components/HeaderBanner/index";

import { Activities } from "../../../components/AcademicsActivities/DepartmentOfHotelManagement/Activities";
import {
  BhmctTab,
  BVocHospitalityTab,
} from "../../../components/AcademicsActivities/DepartmentOfHotelManagement/ProgramsTab";

import Courses3 from "../../../assets/images/3_1-p-800.jpg";
import Courses1 from "../../../assets/images/16830962_235893863539298_4349787212567067696_n-360x240.jpg";
import Gallery3 from "../../../assets/images/18011035_265116700617014_5287002133511512205_n-1.jpg";
import Gallery4 from "../../../assets/images/18527587_278856552576362_7708832162640738418_n.jpg";
import Gallery2 from "../../../assets/images/DSC_1623.jpg";
import Gallery1 from "../../../assets/images/HM_VISION_MISSION.jpg";
import Courses4 from "../../../assets/images/IMG-20170223-WA0008-300x225.jpg";
import Courses2 from "../../../assets/images/P_20170330_120514-1024x768.jpg";
import { ReactComponent as Vision } from "../../../assets/images/vision.svg";
import { ReactComponent as Mission } from "../../../assets/images/mission.svg";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const SchoolOfHotelManagement = () => {
  const location = useLocation();
  const query = Object.fromEntries(new URLSearchParams(location?.search));

  const [tabs, setTabs] = useState(query?.type || "Vision");
  const [subTabs, setSubTabs] = useState(query?.course || "BHMCT");
  const [isVisible, setIsVisible] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handelChange = (e) => {
    setTabs(e);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  document.title = "School of Hotel Management";

  const tabHandle = (e) => {
    setSubTabs(e);
  };

  const visionImage = [
    {
      id: 1,
      image: Gallery1,
    },
    {
      id: 2,
      image: Gallery2,
    },
    {
      id: 3,
      image: Gallery3,
    },
    {
      id: 4,
      image: Gallery4,
    },
  ];
  const courseImage = [
    {
      id: 1,
      image: Courses1,
    },
    {
      id: 2,
      image: Courses2,
    },
    {
      id: 3,
      image: Courses3,
    },
    {
      id: 4,
      image: Courses4,
    },
  ];
  const amenitiesImage = [
    {
      id: 1,
      image: Courses1,
    },
    {
      id: 2,
      image: Courses2,
    },
    {
      id: 3,
      image: Courses3,
    },
    {
      id: 4,
      image: Courses4,
    },
  ];

  return (
    <div>
      <div className="">
        <div className="">
          <HeaderBanner
            bgImage="CarrierBanner"
            title="School of Hotel Management"
            currentPage="School of Hotel Management"
          />
          <div className="bannerBotttom h-[3.5rem] w-full"></div>
        </div>
        <div className=" md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[18rem]">
          <div id="school-of-hotel-management" className=" primary-color container mx-4 mt-8 w-72 border-l-4 border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mt-20 xs:w-[95%]  xs:text-4xl sm:w-[100%] md:mx-0 lg:text-5xl  ">
            School Of Hotel <span className="secondary-color">Management</span>
          </div>
        </div>
      </div>
      <div className=" mb-[80px] md:w-full md:px-[2.5rem] lg:px-[2.5rem] xl:px-[10rem] 2xl:px-[18rem]">
        <div className="mx-4 mt-8 md:mx-0 lg:mt-16">
          <div className="bannerBotttom mb- rounded-t-3xl  py-10 px-8 pb-16 pt-4 text-center text-[20px] font-semibold text-white lg:mb-4 lg:flex lg:pb-8">
            <div
              className={`${
                tabs === "Vision"
                  ? ` primary-color bg-white hover:bg-white `
                  : `cursor-pointer hover:bg-[#dddddd18] `
              }mx-auto w-4/5 rounded-full py-1.5  lg:w-48 `}
              onClick={() => {
                handelChange("Vision");
              }}
            >
              Vision & Mission
            </div>
            <div
              className={`${
                tabs === "Courses"
                  ? ` primary-color bg-white hover:bg-white `
                  : ` cursor-pointer hover:bg-[#dddddd18] `
              } mx-auto w-4/5 rounded-full py-1.5   lg:w-48 `}
              onClick={() => {
                handelChange("Courses");
              }}
            >
              Courses
            </div>
            <div
              className={`${
                tabs === "Amenities"
                  ? ` primary-color bg-white hover:bg-white `
                  : ` cursor-pointer  hover:bg-[#dddddd18] `
              } mx-auto w-4/5  rounded-full py-1.5  lg:w-48  `}
              onClick={() => {
                handelChange("Amenities");
              }}
            >
              Labs/Amenities
            </div>
            <div
              className={`${
                tabs === "Gallery"
                  ? ` primary-color bg-white `
                  : ` hover:bg-[#dddddd18] `
              } mx-auto w-4/5 rounded-full py-1.5 lg:w-48 `}
              onClick={() => {
                handelChange("Gallery");
              }}
            >
              Gallery
            </div>
          </div>
          <div className="-mt-9 h-10 rounded-t-3xl  bg-white"></div>
        </div>
        <div className="mx-4">
          {/* tab-1  */}
          {tabs === "Vision" && (
            <div className="">
              {/* <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
                {visionImage?.map((item) => (
                  <div className="m-3" key={item?.id}>
                    <div
                      className="relative w-full p-2  h-[220px] justify-center flex"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      }}
                    >
                      <img src={item?.image} alt="" className="h-[200px]  " />
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="mx-4 text-justify tracking-wider">
                School of Hotel Management at KCL-IMT aims at producing
                professionals capable of being absorbed in more than half a
                trillion dollar industry comprising of various sectors like
                travel, tourism, leisure, entertainment and even sports. There
                are plenty of opportunities in this dynamic and continuously
                growing industry.
              </div>
              <div className="">
                <div className="">
                  <div className="mt-8 rounded-2xl bg-[#081C3AD6] py-6 text-white">
                    <div className=" flex justify-center gap-2 text-3xl font-bold ">
                      <Vision className=" mt-2 h-12 w-12 rounded-full bg-white  p-2 " />
                      <h2 className="mt-2">Our </h2>
                      <h2 className="mt-2">Vision</h2>
                    </div>
                    <div className="mx-4 mt-6 text-justify text-lg tracking-wider ">
                      To achieve excellence in the field of Hospitality
                      Education by moulding the students from all cross sections
                      of the society and enhancing their skills to meet the
                      challenges of the dynamic business environment.
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="mt-8 rounded-2xl bg-[#081C3AD6] py-6 text-white">
                    <div className=" flex justify-center gap-2 text-3xl font-bold ">
                      <Mission className=" mt-2 h-12 w-12 rounded-full bg-white  p-2 " />
                      <div className="mt-2">Our </div>
                      <div className="mt-2">Mission</div>
                    </div>
                    <div className="mx-4 mt-6 text-justify text-lg tracking-wider">
                      School of Hotel Management & Catering Technology at
                      KCL-IMT is committed to provide creativity oriented
                      atmosphere for continual improvement and development of
                      the students & faculty to keep them abreast with the
                      latest trends in the Hospitality Industry, to Ensure best
                      quality of Infrastructure and Resources, Holistic
                      development of the students for better career prospects
                      and ultimately to be the most preferred hospitality
                      education Institute amongst the aspirants.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* tab-2  */}
          {tabs === "Courses" && (
            <div className="">
              <div className=" lg:px-[3rem] xl:px-[6rem] 2xl:px-[7rem]">
                <div className="mt-1  px-2 text-center font-semibold md:flex md:justify-between">
                  {/* _____________1__________________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[150px] z-10 ${
                      subTabs === "BHMCT" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabHandle("BHMCT")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "BHMCT" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "BHMCT" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]">
                      BHMCT
                    </div>
                  </div>
                  {/* _____________2__________________ */}
                  {/* <div
                    className={`pb-5 cursor-pointer mx-auto w-[300px] z-10 ${
                      subTabs === "BVocTourism" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabHandle("BVocTourism")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "BVocTourism" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "BVocTourism" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]">
                      B.Voc. (Tourism & Hospitality Management)
                    </div>
                  </div> */}
                  {/* _____________3__________________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[290px] z-10 ${
                      subTabs === "BVocHospitality"
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                    onClick={() => tabHandle("BVocHospitality")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "BVocHospitality" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={
                        subTabs === "BVocHospitality" ? "open" : "closed"
                      }
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]">
                      B.Voc. Hospitality and Catering Management
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                {subTabs === "BHMCT" && <BhmctTab />}
                {/* {subTabs === "BVocTourism" && <BVocTourismTab />} */}
                {subTabs === "BVocHospitality" && <BVocHospitalityTab />}
              </div>
            </div>
          )}
          {/* tab-3  */}
          {tabs === "Amenities" && (
            <div className="">
              {/* <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
                {amenitiesImage?.map((item) => (
                  <div className="m-3" key={item?.id}>
                    <div
                      className="relative w-full p-2  h-[220px] justify-center flex"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      }}
                    >
                      <img src={item?.image} alt="" className="h-[200px] " />
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="">
                <div className="mb-4">
                  <div className=" mt-6 text-2xl font-semibold ">
                    Classrooms - The Focused Learning Space
                  </div>
                  <div className="mt-6 break-words text-justify text-lg tracking-wider ">
                    School of Hotel Management & Catering Technology is having
                    the world class infrastructure to help ascertain budding
                    hoteliers get well verse with the Hospitality Operations.
                  </div>
                </div>

                <ul className="list-disc pl-4 text-justify text-[17px]">
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        Training Food Outlets
                      </div>
                      <div className="">
                        Restaurant , Bar & Lounges. Multi Cuisine Restaurant &
                        Bar for learning Food & Beverage Service skills.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        Training Housekeeping Labs
                      </div>
                      <div className="">
                        Mock Guest RoomsFully equipped with all room supplies ,
                        tools and equipments required for cleaning and enhancing
                        the upkeep of all the Public areas.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        Front Office Lab
                      </div>
                      <div className="">
                        <p>
                          Reception, Reservations & ConciergeLearning the art &
                          Skills of making the guest feel like Home away From
                          Home
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        Fully furnished AC class rooms
                      </div>
                      <div className="">
                        The New Block has attractive, spacious classrooms with
                        provision for central cooling to cope with the heat of
                        the summer .
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        SMART ROOM- e
                      </div>
                      <div className="">
                        Equipped with smart board & audio visual aids.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        LANGUAGE LAB
                      </div>
                      <div className="">
                        For improving communication skills of students.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {/* tab-3  */}
          {tabs === "Gallery" && (
            <div className="">
              <div className="">
                <div className="primary-color text-2xl font-semibold">
                  ACTIVITES
                </div>
                <div className="grid w-full grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
                  {Activities?.map((item) => (
                    <div className="m-3" key={item?.id}>
                      <div
                        className="relative w-full p-2  h-[220px] justify-center flex"
                        onClick={() => setIsVisible(true)}
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        }}
                      >
                        <img src={item?.Avatar} alt="" className="h-[200px]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {isVisible && (
                <div
                  onClick={() => setIsVisible(false)}
                  className="backdrop-blur-xs fixed top-0 left-0 z-50 h-screen w-full overflow-hidden bg-black/80"
                >
                  <GalleryPopup
                    Activities={Activities}
                    setIsVisible={setIsVisible}
                    thumbsSwiper={thumbsSwiper}
                    setThumbsSwiper={setThumbsSwiper}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolOfHotelManagement;
