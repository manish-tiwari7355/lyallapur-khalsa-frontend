import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import HeaderBanner from "../../../components/HeaderBanner/index";

import { GalleryPopup } from "../../../components/GalleryImagePopup/GalleryPopup";

// _____Vision & Courses Images______
import Courses1 from "../../../assets/images/16830962_235893863539298_4349787212567067696_n-360x240.jpg";
import img5 from "../../../assets/images/IMG_9268-min.JPG";
import Gallery4 from "../../../assets/images/IMG_9296-min.JPG";
import Courses4 from "../../../assets/images/IMG_9296-min.JPG";
import img4 from "../../../assets/images/IMG_9296-min.JPG";
import img6 from "../../../assets/images/IMG_9302-min.JPG";
import Courses3 from "../../../assets/images/IMG_9314-min.JPG";
import Gallery3 from "../../../assets/images/IMG_9314-min.JPG";
import img3 from "../../../assets/images/IMG_9314-min.JPG";
import Gallery2 from "../../../assets/images/IMG_9316-min.JPG";
import img2 from "../../../assets/images/IMG_9316-min.JPG";
import Gallery1 from "../../../assets/images/IMG_9482-min.JPG";
import Courses2 from "../../../assets/images/IMG_9482-min.JPG";
import img1 from "../../../assets/images/IMG_9482-min.JPG";
import { ReactComponent as Vision } from "../../../assets/images/vision.svg";
import { ReactComponent as Mission } from "../../../assets/images/mission.svg";
import {
  BscMLS,
  OperationalTab,
  RadiologyTab,
} from "../../../components/AcademicsActivities/DepartmentOfHealthScience/ProgramsTab";
import { useLocation } from "react-router-dom";

const Activities = [
  { id: 1, Avatar: img1 },
  { id: 2, Avatar: img2 },
  { id: 3, Avatar: img3 },
  { id: 4, Avatar: img4 },
  { id: 5, Avatar: img5 },
  { id: 6, Avatar: img6 },
];
const DepartmentOfHealthScience = () => {
  const location = useLocation();
  const query = Object.fromEntries(new URLSearchParams(location?.search));

  const [tabs, setTabs] = useState(query?.type || "Vision");
  const [isVisible, setIsVisible] = useState(false);
  const [subTabs, setSubTabs] = useState(query?.course || "BscMLS");

  const handelChange = (e) => {
    setTabs(e);
  };

  const tabhandel = (e) => {
    setSubTabs(e);
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
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
            bgImage="Management"
            title="Department of Paramedical Lab Science"
            currentPage="Department of Paramedical Lab Science"
          />
          <div className="bannerBotttom h-[3.5rem] w-full"></div>
        </div>
        <div className=" md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[18rem]">
          <div  id="department-of-paramedical-lab-sci" className=" primary-color container mx-4 mt-8 w-72 border-l-4 border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mt-20 xs:w-[95%]  xs:text-4xl sm:w-[100%] md:mx-0 lg:text-5xl  ">
            Department of
            <span className="secondary-color"> Paramedical Lab Science</span>
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
                Modern health care has become increasingly dependent on complex
                laboratory tests the results of which aid in the diagnosis,
                monitoring and treatment of disease. You will gain fundamental
                knowledge and skills in biological, physical and health
                sciences. Medical Laboratory Science includes laboratory
                analysis in five different disciplines: Clinical Biochemistry,
                Haematology, Histotechnology, Microbiology and Transfusion
                Science. Medical laboratory science combines the use of
                sophisticated instruments and techniques with the application of
                theoretical knowledge to perform complex procedures on tissue
                specimens, blood samples and other body fluids. The tests and
                procedures that Medical Laboratory Technologists perform provide
                critical information enabling physicians to diagnose, treat and
                monitor a patient condition.
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
                      Paramedical program aspires to be recognized nationally
                      and internationally for quality education, excellence in
                      research and innovative practice. This program envisions
                      developing leaders in medical laboratory education whose
                      actions, discoveries and voices strengthen and transform
                      the healthcare of individuals and communities worldwide.
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
                          Advance the profession of medical laboratory sciences/
                          Radio Imaging/ Medical Anesthesia & OTT in INDIA as
                          well as globally by graduating medical professionals
                          who will demonstrate highly competent, evidence based
                          practice and professional behavior in a dynamic health
                          care environment.
                        </li>
                        <li>
                          Prepare highly skilled and competent medical
                          professionals Scientists who demonstrate the highest
                          quality of technical, clinical and professional
                          competence that fosters respect for diversity,
                          teamwork and professional growth.
                        </li>
                        <li>
                          Educate future medical professionals / Scientists who
                          will respond ethically to the needs and use the
                          critical thinking skills in the workplace to
                          strengthen the professional environment.
                        </li>
                        <li>
                          Promote the graduating medical professionals /
                          Scientists into lifelong learning with leadership
                          qualities in the healthcare team in an ever changing
                          society.
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
              <div className="mx-auto  text-center font-semibold md:flex md:justify-between">
                {/* _____________1__________________ */}
                <div
                  className={`pb-5 cursor-pointer mx-auto w-[150px] z-10 ${
                    subTabs === "BscMLS" ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => tabhandel("BscMLS")}
                >
                  <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                    <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                  </div>
                  {/* _______line_______ */}
                  <motion.div
                    className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                      subTabs === "BscMLS" ? "md:block" : "md:hidden"
                    }`}
                    initial={{ x: 0 }}
                    animate={subTabs === "BscMLS" ? "open" : "closed"}
                    variants={variants}
                  ></motion.div>
                  <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]">
                    B.Sc. MLS
                  </div>
                </div>
                {/* ________________2_______________ */}
                <div
                  className={`pb-5 cursor-pointer mx-auto w-[250px] z-10 ${
                    subTabs === "BtechOperational"
                      ? "opacity-100"
                      : "opacity-50"
                  }`}
                  onClick={() => tabhandel("BtechOperational")}
                >
                  <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                    <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                  </div>
                  {/* _______line_______ */}
                  <motion.div
                    className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                      subTabs === "BtechOperational" ? "md:block" : "md:hidden"
                    }`}
                    initial={{ x: 0 }}
                    animate={subTabs === "BtechOperational" ? "open" : "closed"}
                    variants={variants}
                  ></motion.div>
                  <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]">
                    B.Sc. Operational Theatre & Anesthesia
                  </div>
                </div>
                {/* ________________3_______________ */}
                <div
                  className={`pb-5 cursor-pointer mx-auto w-[250px] z-10 ${
                    subTabs === "RadiologyTab" ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => tabhandel("RadiologyTab")}
                >
                  <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                    <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                  </div>
                  {/* _______line_______ */}
                  <motion.div
                    className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                      subTabs === "RadiologyTab" ? "md:block" : "md:hidden"
                    }`}
                    initial={{ x: 0 }}
                    animate={subTabs === "RadiologyTab" ? "open" : "closed"}
                    variants={variants}
                  ></motion.div>
                  <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]">
                    B.Sc. Radiology & Imaging Technology
                  </div>
                </div>
              </div>

              <div className="primary-color  mt-1">
                {subTabs === "BscMLS" && <BscMLS />}
                {subTabs === "BtechOperational" && <OperationalTab />}
                {subTabs === "RadiologyTab" && <RadiologyTab />}
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
                        Lab Scientist
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Lab Supervisor
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Laboratory Manager
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Laboratory Assistant
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Laboratory Analyst
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Laboratory Officer
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Research Analyst
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Food Inspector
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Food Safety Officer
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Specialist on Subject Matter
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Quality Assurance officer
                      </div>
                    </li>
                    <li className="mb-4">
                      <div className="mb-4 text-[17px] font-bold">
                        Assistant Professor
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {/* tab-3  */}
          {tabs === "Gallery" && (
            <div
              className=""
              style={{ overflow: isVisible === true ? "hidden" : "none" }}
            >
              <div className="">
                <div className="">
                  <div className="primary-color text-2xl font-semibold">
                    ACTIVITES
                  </div>
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
                          <img
                            src={item?.Avatar}
                            alt=""
                            className="h-[200px]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
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

export default DepartmentOfHealthScience;
