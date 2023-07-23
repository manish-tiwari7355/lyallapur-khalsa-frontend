import React, { useEffect, useState } from "react";

import { Btech } from "../../../components/AcademicsActivities/DepartmentOfECE/ProgramsTab";
import { GalleryPopup } from "../../../components/GalleryImagePopup/GalleryPopup";
import HeaderBanner from "../../../components/HeaderBanner/index";

import { Activities } from "../../../components/AcademicsActivities/DepartmentOfECE/Activities";

import Gallery1 from "../../../assets/images/IMG_9571-min.JPG";
import Courses1 from "../../../assets/images/IMG_9571-min.JPG";
import Gallery3 from "../../../assets/images/IMG_9578-min.JPG";
import Courses3 from "../../../assets/images/IMG_9578-min.JPG";
import Gallery2 from "../../../assets/images/IMG_9621-min.JPG";
import Courses2 from "../../../assets/images/IMG_9621-min.JPG";
import { ReactComponent as Vision } from "../../../assets/images/vision.svg";
import { ReactComponent as Mission } from "../../../assets/images/mission.svg";
import { useLocation } from "react-router-dom";

const SchoolOfECE = () => {
  const location = useLocation();
  const query = Object.fromEntries(new URLSearchParams(location?.search));

  const [tabs, setTabs] = useState(query?.type || "Vision");
  const [isVisible, setIsVisible] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handelChange = (e) => {
    setTabs(e);
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
            title="School of ECE"
            currentPage="School of Electronics and Communication Engineering"
          />
          <div className="bannerBotttom h-[3.5rem] w-full"></div>
        </div>
        <div className=" md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[18rem]">
          <div id="school-of-ece" className=" primary-color container mx-4 mt-8 w-72 border-l-4 border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mt-20 xs:w-[95%]  xs:text-4xl sm:w-[100%] md:mx-0 lg:text-5xl  ">
            School Of <span className="secondary-color">ECE</span>
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
                Electronics Engineering drives our world of new technologies.
                Devices designed by Electronic Engineers feature in all aspects
                of modern life, including computers, mobile phones, robotics,
                the internet, digital television, satellites, aerospace, medical
                scanners, security systems and sustainable energy. The
                Department fully recognizes the vital nature of this kind of
                supervised study to prepare students for the world of work. The
                vision of the department is to meet global standards of
                excellence in academic activities related to Electronics &
                Communication Engineering through innovative and effective
                teaching practices, industry tie-ups & to produce creative
                solutions to societal needs. It inculcates a spirit of
                scientific temper, analytical thinking and trains the students
                in contemporary technologies..
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
                      To meet global standards of excellence in academic
                      activities related to Electronics & Communication
                      Engineering through innovative and effective teaching
                      practices, industry tie-ups & to produce creative
                      solutions to societal needs.
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
                          To provide a vibrant & dynamic academic environment
                          through industry collaborations, usage of modern
                          tools, innovative teaching learning aids & experienced
                          faculty.
                        </li>
                        <li>
                          To achieve global recognition by providing ethical and
                          value based education aiming at enhancing
                          employability of graduates through proper career
                          guidance, skill development and promotion of
                          entrepreneurship.
                        </li>
                        <li>
                          To inculcate human or moral values in students through
                          an honest & scientific approach making them socially
                          responsible citizens.
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

              <div className="primary-color text- mt-4">
                <Btech />
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
                        Digital System Design Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Analog Circuits Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Signal and Systems Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Digital Signal Processing Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Analog and Digital Communication Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Microprocessors and Microcontroller Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Linear Integrated Circuits Lab
                      </div>
                    </li>
                    {/* <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Electronic Measurements and Instrumentation Lab
                      </div>
                    </li> */}
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Microwave Engineering Lab
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">VLSI lab</div>
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
                  ACTIVITES
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

export default SchoolOfECE;
