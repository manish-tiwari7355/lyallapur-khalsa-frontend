import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { Activities } from "../../../components/AcademicsActivities/Management-Department/Activities";
import { GalleryPopup } from "../../../components/GalleryImagePopup/GalleryPopup";
import HeaderBanner from "../../../components/HeaderBanner";
import {
  BbaTab,
  BcomTab,
  MbaTab,
} from "../../../components/AcademicsActivities/Management-Department/ProgramsTab";

import Courses3 from "../../../assets/images/3_1-p-800.jpg";
import Courses1 from "../../../assets/images/16830962_235893863539298_4349787212567067696_n-360x240.jpg";
import Gallery3 from "../../../assets/images/18011035_265116700617014_5287002133511512205_n-1.jpg";
import Gallery4 from "../../../assets/images/18527587_278856552576362_7708832162640738418_n.jpg";
import Gallery2 from "../../../assets/images/18622639_280812329047451_4520635799064393724_n.jpg";
import Gallery1 from "../../../assets/images/21150253_323416978120319_1756975021776350864_n.jpg";
import Courses4 from "../../../assets/images/IMG-20170223-WA0008-300x225.jpg";
import Courses2 from "../../../assets/images/P_20170330_120514-1024x768.jpg";
import { ReactComponent as Vision } from "../../../assets/images/vision.svg";
import { ReactComponent as Mission } from "../../../assets/images/mission.svg";
import { useLocation } from "react-router-dom";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const ManagementDepartment = () => {
  const location = useLocation();
  const query = Object.fromEntries(new URLSearchParams(location?.search));

  const [tabs, setTabs] = useState(query?.type || "Vision");
  const [subTabs, setSubTabs] = useState(query?.course || "MBA");
  const [isVisible, setIsVisible] = useState(false);
  const handelChange = (e) => {
    setTabs(e);
  };
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const tabhandel = (e) => {
    setSubTabs(e);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  document.title = "School of Management";

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
            title="Department of Management"
            currentPage="Department of Management"
          />
          <div className="bannerBotttom h-[3.5rem] w-full"></div>
        </div>
        <div className=" md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[18rem]">
          <div id="department-of-management" className=" primary-color container mx-4 mt-8 w-72 border-l-4 border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mt-20 xs:w-[95%]  xs:text-4xl sm:w-[100%] md:mx-0 lg:text-5xl  ">
            Department Of <span className="secondary-color">Management</span>
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
                Management is an ever widening &amp; ever growing field.
                Management has always been career full of Opportunities for the
                students. Though its basics remain the same even today as these
                were in the past, but its scope and style in this age have
                undergone sea changes. In this Digital Era the opportunities
                have extended to E-Commerce, Data Analyst, Financial Analyst, HR
                Analyst &amp; Digital Marketing. School of Management is
                established with the mission of disseminating quality education
                in the field of commerce, business and management by enhancing
                the theoretical knowledge, creative thinking and implementation
                of ideas.
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
                      To produce business leaders equipped with management and
                      research skills, capable of making high-quality business
                      decisions.
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
                      To achieve excellence by developing leadership skills,
                      innovative solutions among the future budding corporate
                      through responsible business leadership focus by
                      emphasizing modern techniques in teaching and research
                      that caters to actual business requirements and stimulate
                      innovative thinking.
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
                <div className="mt-1 mx-auto  text-center font-semibold md:flex md:justify-between">
                  {/* _____________1__________________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[190px] z-10 ${
                      subTabs === "MBA" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabhandel("MBA")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "MBA" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "MBA" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]" id="mba">
                      MBA
                    </div>
                  </div>
                  {/* ________________2_______________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[190px] z-10 ${
                      subTabs === "BBA" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabhandel("BBA")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "BBA" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "BBA" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]" id="bba">
                      BBA
                    </div>
                  </div>
                  {/* _________________3______________ */}
                  <div
                    className={`pb-5 cursor-pointer mx-auto w-[190px] z-10 ${
                      subTabs === "BCOM" ? "opacity-100" : "opacity-50"
                    }`}
                    onClick={() => tabhandel("BCOM")}
                  >
                    <div className="bg-white z-10 mx-auto w-9 rounded-full border-2 border-[#081c3a] p-3 md:relative md:top-28">
                      <div className="primary-bg-color mx-auto h-2 w-2 rounded-full "></div>
                    </div>
                    {/* _______line_______ */}
                    <motion.div
                      className={`hidden md:relative w-full top-24 h-[2px] bg-black ${
                        subTabs === "BCOM" ? "md:block" : "md:hidden"
                      }`}
                      initial={{ x: 0 }}
                      animate={subTabs === "BCOM" ? "open" : "closed"}
                      variants={variants}
                    ></motion.div>
                    <div className="primary-color mt-4 text-base md:text-lg tracking-[3px] leading-[26px]" id="bcom">
                      B.Com (Hons.)
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                {subTabs === "MBA" && <MbaTab />}
                {subTabs === "BBA" && <BbaTab />}
                {subTabs === "BCOM" && <BcomTab />}
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
                    Five Program Specific Outcomes
                  </div>
                  <div className="mt-6 break-words text-justify text-lg tracking-wider ">
                    Bright, spacious and air conditioned classrooms provide our
                    students a conducive and peaceful environment for learning
                    through teaching & focused discussions. The classrooms have
                    been designed to bring together analysis with action and are
                    augmented with integrated audio-visual teaching aids for
                    lectures, presentations etc. The classrooms are well-lit and
                    ventilated.
                  </div>
                </div>

                <ul className="list-disc pl-4 text-justify text-[17px]">
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        Wi- Fi Campus
                      </div>
                      <div className="">
                        Acquiring knowledge at the speed of light has become the
                        need of modern education delivery system and is of
                        paramount importance in the era of global village
                        concept. Understanding this need and importance of
                        internet, the institute has Wi-Fi facility for the
                        students and faculty members. LKCTC has dedicated leased
                        line <span className="font-semibold"> @ 50Mbps</span>{" "}
                        offering high speed internet facility throughout the
                        campus with very carefully designed content filtering
                        support.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        GD/PI Room
                      </div>
                      <div className="">
                        The institute has a well furnished, fully AC GD/PI room
                        equipped with all modern technological aids to hold
                        group discussions for the students of LKCTC so as to
                        give them a real time experience of the group discussion
                        to be conducted by various companies visiting the campus
                        as part of their recruitment process during placements.
                        It will help students in developing good communication
                        skills, confidence and in understanding the concept of
                        GDs in a practical manner.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        Library
                      </div>
                      <div className="">
                        ‍
                        <p>
                          The Library of LKCTC is a powerhouse of knowledge
                          equipped with more than 7000 books including text and
                          reference books, 50 National & International journals
                          and renowned magazines pertaining to the discipline of
                          Management, Engineering, Hotel Management and
                          information technology & various newspapers to enrich
                          knowledge about diversified areas. ‍
                        </p>{" "}
                        <p>
                          The library has also subscribed to various e-Journals
                          including J-gate and ProQuest and eBook Consortium
                          having more than 40 Lakhs titles. The library also has
                          a mammoth resource of e-books, more than 10 Lakh in
                          all three disciplines. ‍
                        </p>{" "}
                        <p>
                          Being a member of DELNET (Developing Library Network),
                          the library has access to broad range of services to
                          augment education and research in the Institute. It
                          maintains an online catalogue of books, which is
                          continuously updated.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        Book Bank
                      </div>
                      <div className="">
                        The faculty and students of LKCTC donated their personal
                        books to start a Book Bank in the Institute. The purpose
                        of this Book Bank is to help the studious and needy
                        students, who can borrow books from the bank for the
                        entire semester and return the same after end semester
                        exams.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        Seminar Room
                      </div>
                      <div className="">
                        ‍ LKCTC has two Seminar rooms well equipped with modern
                        Audio-Visual aids, and having a capacity of
                        approximately 200 students each. It provides a
                        professional environment to the students where they can
                        participate in various group activities like Quiz, Case
                        presentation, Case Discussions, Group Discussions etc.
                        It is a venue for holding Interactions, Guest Lectures,
                        Seminars, workshops, other academic and co-curricular
                        activities.
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="">
                      <div className="mb-4 text-[17px] font-semibold">
                        Auditorium
                      </div>
                      <div className="">
                        LKCTC houses a state-of-the-art auditorium that acts as
                        a common ground for students, faculty and corporate
                        personalities for regular interface through conferences,
                        job fests, education fairs and various cultural
                        activities.
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

export default ManagementDepartment;
