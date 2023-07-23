import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import HeaderBanner from "../../../components/HeaderBanner/index";

import {
  BtechDSTab,
  BtechTab,
  DiplomaCSETab,
  BSCGraphicsTab,
  BVOCSoftwareTab,
  BSCAITab,
} from "../../../components/AcademicsActivities/DepartmentOfComputerScience/ProgramsTab";
import { GalleryPopup } from "../../../components/GalleryImagePopup/GalleryPopup";

import img1 from "../../../assets/images/comp_sci.JPG";
import img2 from "../../../assets/images/IMG_9922-min.JPG";
import img3 from "../../../assets/images/IMG_9922-min_1.JPG";
import { ReactComponent as Vision } from "../../../assets/images/vision.svg";
import { ReactComponent as Mission } from "../../../assets/images/mission.svg";
import { useLocation } from "react-router-dom";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Activities = [
  { id: 1, Avatar: img1 },
  { id: 2, Avatar: img2 },
  { id: 3, Avatar: img3 },
];

const DepartmentOfComputerScience = () => {
  const location = useLocation();
  const query = Object.fromEntries(new URLSearchParams(location?.search));

  const [tabs, setTabs] = useState(query?.type || "Vision");
  const [subTabs, setSubTabs] = useState(query?.course || "Btech");
  const [isVisible, setIsVisible] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handelChange = (e) => {
    setTabs(e);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  const tabhandel = (e) => {
    setSubTabs(e);
  };
  document.title = "School of Engineering";

  return (
    <div>
      <div className="">
        <div className="">
          <HeaderBanner
            bgImage="Management"
            title="Department Of CSE"
            currentPage="Department Of CSE"
          />
          <div className="bannerBotttom h-[3.5rem] w-full "></div>
        </div>
        <div className=" md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[18rem]">
          <div id="department-of-cse" className=" primary-color container mx-4 mt-8 w-72 border-l-4 border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mt-20 xs:w-[95%]  xs:text-4xl sm:w-[100%] md:mx-0 lg:text-5xl  ">
            Department Of <span className="secondary-color"> CSE</span>
          </div>
        </div>
      </div>
      <div className=" mb-[80px] md:w-full md:px-[2.5rem] lg:px-[1rem] xl:px-[5rem] 2xl:px-[15rem]">
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
              <div className="mx-4 mt-5 text-justify tracking-wider">
                Computer Science and Engineering department aims to prepare the
                young engineers by imparting high quality technical education
                coupled with appropriate training and wide exposure in form of
                MOUs, linkages, industry oriented programmes, workshops, expert
                lectures, etc. The department promises to go ahead with the
                future challenges in technological developments and deliver the
                bounties of frontier knowledge for the benefit of human kind.
                The fundamental objective of Computer Science program is to
                provide the opportunity for students to develop a firm
                foundation in Mathematics, Science and design methodology of
                computing systems. Our course covers all fundamentals, working
                and expert subjects that provide a holistic learning environment
                where students understand and are able to apply the most
                contemporary and essential tools needed in the breadth and depth
                of Computer Science & Engineering.
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
                      To groom students into competent engineers and
                      entrepreneurs, by inculcating technical education, ethical
                      and moral values through measurable and continuous
                      improvement methods.
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
                      To model students ready for industry by grooming their
                      employability skills using academia and corporate
                      collaboration. To blend theoretical knowledge and
                      practical applications with the aid of trainings, peer
                      learning and sound academic practices. Cultivate
                      leadership skills, social awareness and responsibility
                      among the students through various co-curriculum and extra
                      curriculum activities. To encourage the involvement of
                      faculty in pursuing their own academic excellence through
                      the aid of faculty development programmes, short term
                      training programmes, seminars, workshops, etc.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* tab-2  */}
          {tabs === "Courses" && (
            <div className="">
              {/* <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
                {courseImage?.map((item) => (
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
              <div className=" ">
                <div className="mt-12 mx-auto text-center font-semibold lg:flex lg:justify-between">
                  {/* ________________1_______________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[250px] z-10 ${
                      subTabs === "Btech" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabhandel("Btech")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "Btech" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "Btech" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base xl:text-lg tracking-[3px] leading-[26px]">
                      B.Tech (CSE)
                    </div>
                  </div>
                  {/* _____________2__________________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[300px] z-10 ${
                      subTabs === "BtechDS" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabhandel("BtechDS")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "BtechDS" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "BtechDS" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base xl:text-lg tracking-[3px] leading-[26px]">
                      B.Tech (Data Science)
                    </div>
                  </div>

                  {/* ________________3_______________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[300px] md:w-[350px] z-10 ${
                      subTabs === "BVOCSoftware" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabhandel("BVOCSoftware")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "BVOCSoftware" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "BVOCSoftware" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base xl:text-lg tracking-[3px] leading-[26px]">
                      B.Voc (Software Development)
                    </div>
                  </div>
                  {/* ________________4_______________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[300px] md:w-[350px] z-10 ${
                      subTabs === "BSCGraphics" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabhandel("BSCGraphics")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "BSCGraphics" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "BSCGraphics" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base xl:text-lg tracking-[3px] leading-[26px]">
                      B.Sc Graphics & Web Designing
                    </div>
                  </div>
                  {/* ________________5_______________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[300px] z-10 ${
                      subTabs === "BSCAI" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabhandel("BSCAI")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "BSCAI" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "BSCAI" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base xl:text-lg tracking-[3px] leading-[26px]">
                      B.Sc. (AI & ML)
                    </div>
                  </div>
                  {/* ________________6_______________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[300px] z-10 ${
                      subTabs === "DiplomaCSE" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabhandel("DiplomaCSE")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "DiplomaCSE" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "DiplomaCSE" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base xl:text-lg tracking-[3px] leading-[26px]">
                      Diploma CSE
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                {subTabs === "Btech" && <BtechTab />}
                {subTabs === "BtechDS" && <BtechDSTab />}
                {subTabs === "BVOCSoftware" && <BVOCSoftwareTab />}
                {subTabs === "BSCGraphics" && <BSCGraphicsTab />}
                {subTabs === "BSCAI" && <BSCAITab />}
                {subTabs === "DiplomaCSE" && <DiplomaCSETab />}
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
                      <img src={item?.image} alt="" className="h-[200px]  " />
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="">
                <ul className="list-disc pl-4 text-justify text-[17px]">
                  <li className="mb-4">
                    <div className="mb-4 text-[17px] font-bold">
                      Computer Networks Lab
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="mb-4 text-[17px] font-bold">
                      Programming Language Lab
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="mb-4 text-[17px] font-bold">
                      Operating System Lab
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="mb-4 text-[17px] font-bold">
                      System Programming Lab
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="mb-4 text-[17px] font-bold">
                      Data Structures Lab
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="mb-4 text-[17px] font-bold">RDBMS Lab</div>
                  </li>
                  <li className="mb-4">
                    <div className="mb-4 text-[17px] font-bold">
                      Open Source Lab
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="mb-4 text-[17px] font-bold">
                      Incubation Lab
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
                {/* <div className="primary-color text-2xl font-semibold">
                  ACTIVITES
                </div> */}
                <div className="grid w-full grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
                  {Activities?.map((item) => (
                    <div className="m-3" key={item?.id}>
                      <div
                        onClick={() => setIsVisible(true)}
                        className="relative w-full p-2  h-[220px] justify-center flex"
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

export default DepartmentOfComputerScience;
