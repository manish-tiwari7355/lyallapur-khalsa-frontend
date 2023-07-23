import React, { useEffect, useState } from "react";

import { GalleryPopup } from "../../../components/GalleryImagePopup/GalleryPopup";
import HeaderBanner from "../../../components/HeaderBanner/index";
import { Activities } from "../../../components/AcademicsActivities/DepartmentOfAppliedScience/Activities";
import { AppliedScienceTab } from "../../../components/AcademicsActivities/DepartmentOfAppliedScience/ProgramsTab";

import Gallery3 from "../../../assets/images/18527587_278856552576362_7708832162640738418_n.jpg";
import Gallery1 from "../../../assets/images/18622639_280812329047451_4520635799064393724_n.jpg";
import Gallery4 from "../../../assets/images/bp3.jpg";
import Courses3 from "../../../assets/images/IT_LAB1.jpg";
import Courses4 from "../../../assets/images/IT_LAB2.jpg";
import Courses2 from "../../../assets/images/IT_LAB3.jpg";
import Courses1 from "../../../assets/images/IT_LAB4.jpg";
import Gallery2 from "../../../assets/images/s7-300x225.jpg";
import { ReactComponent as Vision } from "../../../assets/images/vision.svg";
import { ReactComponent as Mission } from "../../../assets/images/mission.svg";
import { useLocation } from "react-router-dom";

const DepartmentOfAppliedScience = () => {
  const location = useLocation();
  const query = Object.fromEntries(new URLSearchParams(location?.search));
  console.log(query);

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
  const [subTabs, setSubTabs] = useState(query?.course || "AppliedSci");
  const tabHandle = (e) => {
    setSubTabs(e);
  };
  document.title = "School of Engineering";

  return (
    <div>
      <div className="">
        <div className="">
          <HeaderBanner
            bgImage="Management"
            title="Department Of Applied Science"
            currentPage="Department Of Applied Science"
          />
          <div className="bannerBotttom h-[3.5rem] w-full"></div>
        </div>
        <div className=" md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[18rem]">
          <div id="department-of-applied-science" className=" primary-color container mx-4 mt-8 w-72 border-l-4 border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mt-20 xs:w-[95%]  xs:text-4xl sm:w-[100%] md:mx-0 lg:text-5xl  ">
            Department Of
            <span className="secondary-color"> Applied Science</span>
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
              <div className="mx-4 mt-5 text-justify tracking-wider">
                Applied science is the application of existing scientific
                knowledge to practical applications, like technology or
                inventions. Within natural science, disciplines that are basic
                science develop basic information to predict and perhaps explain
                and understand phenomena in the natural world. Applied science
                is the use of scientific processes and knowledge as the means to
                achieve a particular practical or useful result. This includes a
                broad range of applied science related fields, including
                engineering and medicine.
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
              <div className="md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[10rem]">
                <div className="mt-1  px-20 text-center font-semibold md:flex md:justify-between">
                  {/* _____________1__________________ */}
                  {/* <div
                    className={`pb-5 cursor-pointer mx-auto w-[150px] z-10 ${
                      subTabs === "MCA" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabHandle("MCA")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
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
                  </div> */}
                </div>
              </div>
              <div className="">
                {subTabs === "AppliedSci" && <AppliedScienceTab />}
              </div>
            </div>
          )}
          {/* tab-3  */}
          {tabs === "Amenities" && (
            <div className="">
              <div className="">
                <div className="mb-4">
                  <div className=" mt-6 text-2xl font-semibold ">
                    Basic Electrical & Electronics Engineering Lab
                  </div>
                  <div className="mt-6 break-words text-justify text-lg tracking-wider ">
                    The electrical and electronics engineering course prepares
                    students for a variety of careers in technology, such as
                    computing, networking, communications, process control &
                    automation, robotics, biomedical, energy management and
                    transportation. The course develops knowledgeable and
                    skilled technologists who can work with engineers and
                    technicians to implement electronic designs and perform
                    engineering tasks such as collecting, analyzing, and
                    interpreting data, installing, maintaining and
                    troubleshooting various electronic systems. The dynamics of
                    technology changing by leaps & bound and to keep our
                    students ahead of these changes, the BEEE Lab at LKCE offers
                    unique opportunity & allows practical overview of
                    theoretical concepts of basic Electrical and Electronics
                    engineering skills. The lab is equipped with latest panels
                    like single and three phase transformers, DC Motor, LVDT and
                    basic electronic components.
                  </div>
                </div>

                <ul className="list-disc pl-4 text-justify text-[17px]">
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        Physics Lab
                      </div>
                      <div className="">
                        The purpose of the Physics Laboratory is to develop
                        scientific temper, analytical capability among the
                        engineering students and to understand the general
                        scientific concepts required for technology and apply
                        the concepts in solving engineering problems. This
                        laboratory also explains scientifically the new
                        developments in engineering and technology and to
                        familiarize with the concepts, theories and models
                        behind many technological applications. Students can
                        perform experiments on Uniform Bending, Torsion
                        Pendulum, Spectrometer, Lasers, Optical Fiber,
                        Potentiometer and general electronic circuits.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        Chemistry Lab
                      </div>
                      <div className="">
                        The Engineering Chemistry Lab has a wide range of
                        equipments. The lab is aptly prepared to impart
                        education in Chemistry in a neatly designed, spacious
                        and well-ventilated laboratory. The facilities available
                        in the laboratories include gas chromatograph,
                        UV-visible spectrophotometer, electrochemical work
                        station, flame photometer, melting point apparatus, high
                        temperature programmable-furnace and high pressure
                        reactor. It provides students with a practical approach
                        towards the various techniques used in engineering
                        application. Practical awareness is inculcated and
                        students are trained both quantitatively and
                        qualitatively during the lab sessions so that their
                        understanding and problem solving abilities can be
                        enhanced.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        Communication Skills Lab
                      </div>
                      <div className="">
                        Keeping pace with the present era of globalization and
                        need for proficiency in English Language, the Institute
                        has designed communication lab with twenty five
                        terminals fully equipped with state of the art
                        interactive learning tools with internet connectivity.
                        It is extremely beneficial for language learning and
                        enhancement of effective communication skills, which are
                        required to compete with the highly competitive
                        professional environment.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        Computer Labs
                      </div>
                      <div className="">
                        Our Central computing facility consists of 200 computer
                        systems with latest configuration i.e. i5 with 3.2GHz
                        processors. High speed internet connectivity is provided
                        through leased line from BSNL and supported with secured
                        LAN across different labs throughout the campus. Due to
                        our state-of-the-art infrastructure, TCS officials
                        signed an MoU and now we are official IT Infrastructure
                        partner of TCS (Tata Consultancy Services). We feel
                        proud to share that ours is the only campus in Punjab
                        where TCS conducts its off campus recruitment drive. In
                        addition to this AIEEE (JEE), CAT, IBPS, LIC and GATE
                        examinations are being held at our campus through TCS.
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

export default DepartmentOfAppliedScience;
