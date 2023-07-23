import React, { useEffect, useState } from "react";

import {
  BtechME,
  BVOCAutomobileTab,
  DiplomaME,
} from "../../../components/AcademicsActivities/SchoolOfMechanicalEngineering/ProgramsTab";
import { GalleryPopup } from "../../../components/GalleryImagePopup/GalleryPopup";
import HeaderBanner from "../../../components/HeaderBanner";

import { Activities } from "../../../components/AcademicsActivities/SchoolOfMechanicalEngineering/Activities";

import Gallery1 from "../../../assets/images/IMG_9079-vision.JPG";
import Courses1 from "../../../assets/images/IMG_9079-vision.JPG";
import Gallery3 from "../../../assets/images/IMG_9093-min.JPG";
import Courses3 from "../../../assets/images/IMG_9093-min.JPG";
import Gallery2 from "../../../assets/images/IMG_9161-min.JPG";
import Courses2 from "../../../assets/images/IMG_9161-min.JPG";
import { ReactComponent as Vision } from "../../../assets/images/vision.svg";
import { ReactComponent as Mission } from "../../../assets/images/mission.svg";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const SchoolOfMechanicalEngineering = () => {
  const location = useLocation();
  const query = Object.fromEntries(new URLSearchParams(location?.search));

  const [tabs, setTabs] = useState(query?.type || "Vision");
  const [subTabs, setSubTabs] = useState(query?.course || "BtechME");
  const [isVisible, setIsVisible] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handelChange = (e) => {
    setTabs(e);
  };

  const tabHandle = (e) => {
    setSubTabs(e);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  document.title = "School of Engineering";

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
  ];

  return (
    <div>
      <div className="">
        <div className="">
          <HeaderBanner
            bgImage="Management"
            title="School of ME"
            currentPage="School Of Mechanical Engineering"
          />
          <div className="bannerBotttom h-[3.5rem] w-full"></div>
        </div>
        <div className=" md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[18rem]">
          <div id="school-of-mechanical-engineering" className=" primary-color container mx-4 mt-8 w-72 border-l-4 border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mt-20 xs:w-[95%]  xs:text-4xl sm:w-[100%] md:mx-0 lg:text-5xl  ">
            School Of{" "}
            <span className="secondary-color">Mechanical Engineering</span>
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
              <div className="mx-4 text-justify tracking-wider">
                Mechanical Engineering has been the medium through which the
                single most important socio-economic revolution known as the
                Industrial Revolution had found its expression in the 19th
                century. The steam engine of James Watt and associated influx of
                mechanical devices and machines have changed the mode of life
                all over the world from the agrarian to the industrial. Over the
                last century Mechanical Engineering has ushered in enormous
                convenience and facilities for mankind. Because of the higher
                level of instrumentation, automation and computerization of the
                products and processes there has been an enormous development
                and refinement in manufacturing technology.Mechanical
                engineering is a diverse subject that derives its breadth from
                the need to design and manufacture everything from small
                individual parts to large systems.
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
                      To build up finest graduates from the Department of
                      Mechanical Engineering by achieving better-quality
                      performance together in current and upcoming technologies
                      and to make them ethically strong to contribute to the
                      region and the country.
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
                      <ul className="list-disc pl-4 text-justify text-[17px]">
                        <li>
                          To impart best technical knowledge to the students to
                          gain the finest practical and professional skills.
                        </li>
                        <li>
                          To collaborate with the industries and research
                          centres of repute to improve the technical and
                          practical skills of the students.
                        </li>
                        <li>
                          To provide friendly environment to the faculty for
                          participation in academic and research activities in
                          order to help the students to accomplish their desired
                          objective.
                        </li>
                        <li>
                          To provide the excellent infrastructure facilities
                          pertaining to Mechanical Engineering.
                        </li>
                      </ul>
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
                      subTabs === "BtechME" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabHandle("BtechME")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "BtechME" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "BtechME" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]">
                      B.Tech ME
                    </div>
                  </div>
                  {/* _____________2__________________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[300px] z-10 ${
                      subTabs === "BVOCAutomobile"
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                    onClick={() => tabHandle("BVOCAutomobile")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "BVOCAutomobile" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "BVOCAutomobile" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]">
                      B.VOC (Automobile Services)
                    </div>
                  </div>
                  {/* _____________3__________________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[290px] z-10 ${
                      subTabs === "DiplomaME" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabHandle("DiplomaME")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "DiplomaME" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "DiplomaME" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]">
                      Diploma (Mechanical Engineering)
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                {subTabs === "BtechME" && <BtechME />}
                {subTabs === "BVOCAutomobile" && <BVOCAutomobileTab />}
                {subTabs === "DiplomaME" && <DiplomaME />}
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
                <div className="mb-4">
                  <div className=" mt-6 text-2xl font-semibold ">
                    Laboratories
                  </div>
                </div>
                <div className="">
                  <ul className="list-disc pl-4 text-justify text-[17px]">
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Manufacturing Processes Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Theory of Machines Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Strength of Materials Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Fluid Mechanics Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Applied Thermodynamics Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Engineering Materials and Metallurgy Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Automobile Engineering Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Heat Transfer Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Computer Aided Design and Manufacturing Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Mechanical Measurements and Metrology Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Industrial Automation and Robotics Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Fluid Machinery Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Refrigeration and Air Conditioning Lab
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {/* tab-3  */}
          {tabs === "Gallery" && (
            <div className="">
              <div className="">
                {/* <div className="primary-color text-2xl font-semibold">
                  ACTIVITIES
                </div> */}
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

export default SchoolOfMechanicalEngineering;
