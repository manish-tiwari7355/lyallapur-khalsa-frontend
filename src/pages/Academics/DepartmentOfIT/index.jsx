import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { GalleryPopup } from "../../../components/GalleryImagePopup/GalleryPopup";
import HeaderBanner from "../../../components/HeaderBanner/index";
import { Activities } from "../../../components/AcademicsActivities/DepartmentOfIT/Activities";
import {
  BcaTab,
  McaTab,
} from "../../../components/AcademicsActivities/DepartmentOfIT/ProgramsTab";

// import Gallery3 from "../../../assets/images/18527587_278856552576362_7708832162640738418_n.jpg";
// import Gallery1 from "../../../assets/images/18622639_280812329047451_4520635799064393724_n.jpg";
// import Gallery4 from "../../../assets/images/bp3.jpg";
// import Courses3 from "../../../assets/images/IT_LAB1.jpg";
// import Courses4 from "../../../assets/images/IT_LAB2.jpg";
// import Courses2 from "../../../assets/images/IT_LAB3.jpg";
// import Courses1 from "../../../assets/images/IT_LAB4.jpg";
// import Gallery2 from "../../../assets/images/s7-300x225.jpg";
import { ReactComponent as Vision } from "../../../assets/images/vision.svg";
import { ReactComponent as Mission } from "../../../assets/images/mission.svg";
import { useLocation } from "react-router-dom";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const DepartmentOfIT = () => {
  const location = useLocation();
  const query = Object.fromEntries(new URLSearchParams(location?.search));
  // console.log(query);

  const [tabs, setTabs] = useState(query?.type || "Vision");
  const [isVisible, setIsVisible] = useState(false);

  const handelChange = (e) => {
    setTabs(e);
  };
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);
  const [subTabs, setSubTabs] = useState(query?.course || "MCA");
  const tabHandle = (e) => {
    setSubTabs(e);
  };
  document.title = "School of IT";

  // const visionImage = [
  //   {
  //     id: 1,
  //     image: Gallery1,
  //   },
  //   {
  //     id: 2,
  //     image: Gallery2,
  //   },
  //   {
  //     id: 3,
  //     image: Gallery3,
  //   },
  //   {
  //     id: 4,
  //     image: Gallery4,
  //   },
  // ];
  // const courseImage = [
  //   {
  //     id: 1,
  //     image: Courses1,
  //   },
  //   {
  //     id: 2,
  //     image: Courses2,
  //   },
  //   {
  //     id: 3,
  //     image: Courses3,
  //   },
  //   {
  //     id: 4,
  //     image: Courses4,
  //   },
  // ];
  // const amenitiesImage = [
  //   {
  //     id: 1,
  //     image: Courses1,
  //   },
  //   {
  //     id: 2,
  //     image: Courses2,
  //   },
  //   {
  //     id: 3,
  //     image: Courses3,
  //   },
  //   {
  //     id: 4,
  //     image: Courses4,
  //   },
  // ];
  return (
    <div>
      <div className="">
        <div className="">
          <HeaderBanner
            bgImage="Management"
            title="Department Of IT"
            currentPage="Department Of IT"
          />
          <div className="bannerBotttom h-[3.5rem] w-full"></div>
        </div>
        <div className=" md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[18rem]">
          <div id="department-of-it" className=" primary-color container mx-4 mt-8 w-72 border-l-4 border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mt-20 xs:w-[95%]  xs:text-4xl sm:w-[100%] md:mx-0 lg:text-5xl  ">
            Department Of <span className="secondary-color"> IT</span>
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
              } mx-auto w-4/5 rounded-full py-1.5 lg:w-48 cursor-pointer`}
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
                School of Information Technology at LKCTC endeavours to be at
                the forefront of churning out software engineers with high
                caliber of technical expertise. Besides imparting theoretical
                knowledge, importance is laid on hands-on training and all round
                development of the students.
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
                      To set a benchmark in the region in terms of imparting
                      technology oriented learning and to develop competent
                      professionals to serve as a valuable resource for industry
                      & society.
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
                      To produce industry ready technocrats capable of providing
                      practical solutions to the problems of industry and
                      society through practical, analytical and logical
                      reasoning based learning process with emphasis on the
                      aspect of software development.
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
                      <img src={item?.image} alt="" className="h-[200px]" />
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[10rem]">
                <div className="mt-1  px-20 text-center font-semibold md:flex md:justify-between">
                  {/* _____________1__________________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[150px] z-10 ${
                      subTabs === "MCA" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabHandle("MCA")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "MCA" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "MCA" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]">
                      MCA
                    </div>
                  </div>
                  {/* _____________2__________________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[150px] z-10 ${
                      subTabs === "BCA" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabHandle("BCA")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "BCA" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "BCA" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]">
                      BCA
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                {subTabs === "BCA" && <BcaTab />}
                {subTabs === "MCA" && <McaTab />}
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
                      <img src={item?.image} alt="" className="h-[200px]" />
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="">
                <div className="mb-4">
                  <div className=" mt-6 text-2xl font-semibold ">
                    Computer Labs
                  </div>
                  <div className="mt-6 break-words text-justify text-lg tracking-wider ">
                    Our Central computing facility consists of 250 computer
                    systems with latest configuration i.e. i5 with 3.2GHz
                    processors. High speed internet connectivity is provided
                    through leased line from CONNECT and supported with secured
                    LAN across different labs throughout the campus. The Labs at
                    LKCTC help in reinforcing classroom learning by providing
                    actual hands-on-experience. Due to our state-of-the-art
                    infrastructure, TCS officials signed an MoU and now we are
                    official IT Infrastructure partner of TCS (Tata Consultancy
                    Services) where TCS conducts its off campus recruitment
                    drives. In addition to this AIEEE (JEE), CAT, IBPS, LIC,
                    TOEFL IBT and GATE examinations are being held at our campus
                    through TCS.
                  </div>
                </div>

                <ul className="list-disc pl-4 text-justify text-[17px]">
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        COMPUTER NETWORKS LAB
                      </div>
                      <div className="">
                        Course provides knowledge about computer network related
                        hardware and software using a layered architecture. It
                        also highlights the functionality of the different
                        layers of OSI model and TCP/IP model. It also discusses
                        the different types of networks and all the possible
                        topologies, routing fundamental.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        SOFTWARE ENGINEERING LAB
                      </div>
                      <div className="">
                        Course Software Engineering provides knowledge to design
                        and develop software products and estimating the efforts
                        and cost incurred using the various heuristics
                        techniques. The course content also covers the concept
                        of Unified Modeling Language and open sources like open
                        Proj for the realization of the projects which can be
                        correlated to the real world problems. It also
                        emphasizes on the testing techniques and the area of
                        deployment & the selection of various testing
                        techniques.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        OPERATING SYSTEM LAB
                      </div>
                      <div className="">
                        The lab covers recent web technologies which are highly
                        in demand. Students start their learning by developing
                        simple pages in HTML and then apply logic and
                        validations using JavaScript and Java. It also covers
                        XML: Web&apos;s standard for document creation and
                        dataset connectivity. Popular open source technology PHP
                        helps a developer to create webpages and websites.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        SYSTEM PROGRAMMING LAB
                      </div>
                      <div className="">
                        Course System Programming provides knowledge to design
                        various system programs namely editors, assemblers,
                        macro processors, compilers, linkers, loaders and
                        debuggers. The course content also covers the CASE STUDY
                        on LAX and YACC tools thereby making students to
                        understand their use.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        CG LAB
                      </div>
                      <div className="">
                        The lab deals with generation and display of graphics
                        and animations on display devices. Students deal with
                        programs like straight line, circle, ellipse and complex
                        fractals. It covers basic graphic operation like
                        clipping, scaling, rotation, shear, translation and
                        reflection both in 2D and 3D
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        RDBMS LAB
                      </div>
                      <div className="">
                        The RDBMS lab is used to study various concepts of
                        database design and generation of database schemas.
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

export default DepartmentOfIT;
