// import Image from 'next/image';
import staff1 from "../../../assets/images/non-teaching-staff.png";
// import staff2 from "../../../assets/images/Teaching-staff.png";
import React from "react";

import {
  AccountStaff,
  LabStaff,
  Library,
  NonteachingStaff,
  TeachingStaff,
} from "../../../components/AcademicsActivities/Faculty/StaffDetals";
import FacultyCard from "../../../components/cards/Faculty";
import HeaderBanner from "../../../components/HeaderBanner/index";
const Faculty = () => {
  document.title = "Faculty";
  return (
    <div>
      <div className=" ">
        <HeaderBanner
          bgImage="Management"
          title="Faculty"
          currentPage="Faculty"
        />
        <div className="bannerBotttom h-[3.5rem] w-full "></div>
      </div>
      <div className="xl:pl-[5rem] 2xl:pl-[20rem] ">
        <div className=" primary-color container mx-4 mt-8 w-72    border-l-2 border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
          Faculty
        </div>
      </div>
      <div className="px-4">
        <div className="mt-8 gap-5 sm:flex sm:justify-center">
          {/* xs:flex xs:justify-center */}
          <div className="mb-4 sm:mb-0  ">
            <img src={staff1} alt="img" width={500} />
          </div>
          {/* <div className="">
            <img src={staff2} alt="img" />
          </div> */}
        </div>
        <div className="xl:pl-[5rem] 2xl:pl-[20rem] ">
          <div className="primary-color container mx-4 mt-8 w-72   border-l-2 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%] xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
            Our <span className="secondary-color">Leaders</span>
          </div>
          <div className="mt-4 ml-3 text-[20px] text-[#333333]">
            The institute is reaching new heights under the able guidance of:
          </div>
        </div>
      </div>
      {/* -------------------------cards start here--------------------------------- */}
      <div className="">
        <div className="my-12 mx-6 border-emerald-600  sm:flex">
          <div className="sm:ml-4 sm:w-1/2 ">
            <FacultyCard
              newClass="w-full py-4 relative px-4"
              Fletter="S"
              Name="S. Sukhbir Singh Chatha"
              Role="Group Director"
            />
          </div>
          <div className="sm:w-1/2">
            <FacultyCard
              newClass="w-full py-4 relative  px-3"
              Fletter="S"
              Name="Dr.S.K. Sood "
              Role="Director"
            />
          </div>
          <div className="sm:ml-4 sm:w-1/2 ">
            <FacultyCard
              newClass="w-full py-4 relative px-4"
              Fletter="R"
              Name="Dr. Ramandeep S.Deol "
              Role="Dy. Director-AA"
            />
          </div>
        </div>
        <div className="mt-8">
          <div className="md:px-[4rem] lg:px-[12rem]">
            <div id="teaching-staff" className=" primary-color xs container mx-4 mt-8 w-72  border-l-2 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
              Teaching <span className="secondary-color">staff</span>{" "}
            </div>
          </div>
          <div className="xl:px[rem] mx-auto mt-4 h-[44rem] w-[99%] gap-3 overflow-y-auto px-4 pb-4 sm:grid sm:grid-cols-2 md:grid-cols-2 md:px-[4rem] lg:grid-cols-3 lg:px-[4rem] xl:grid-cols-4">
            {TeachingStaff?.map((item, idk) => (
              <div key={idk} className="">
                <FacultyCard
                  Fletter={item?.Letter}
                  Name={item?.Name}
                  Role={item?.Role}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <div className="md:px-[4rem] lg:px-[12rem]">
            <div id="lab-staff" className=" primary-color xs container mx-4 mt-8 w-72  border-l-2 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%] xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
              Lab  <span className="secondary-color">staff</span>
            </div>
          </div>
          <div className="xl:px[rem] mx-auto mt-4 h-[44rem] w-[99%] gap-3 overflow-y-auto px-4 pb-4 sm:grid sm:grid-cols-2 md:grid-cols-2 md:px-[4rem] lg:grid-cols-3 lg:px-[4rem] xl:grid-cols-4">
            {LabStaff?.map((item, idk) => (
              <div key={idk} className="">
                <FacultyCard
                  Fletter={item?.Letter}
                  Name={item?.Name}
                  Role={item?.Role}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <div className="md:px-[4rem] lg:px-[12rem]">
            <div id="non-Teaching-staff" className=" primary-color xs container mx-4   mt-8 w-72 border-l-2 border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
              Non-Teaching <span className="secondary-color">staff</span>
            </div>
            <div className="primary-color mt-5 text-center text-2xl font-bold ">
              Administration
            </div>
          </div>
          <div className="xl:px[rem] hideScroller mx-auto mt-4 h-[44rem] w-[99%] gap-3 overflow-y-auto px-4 pb-4 sm:grid sm:grid-cols-2 md:grid-cols-2 md:px-[4rem] lg:grid-cols-3 lg:px-[4rem] xl:grid-cols-4 ">
            {NonteachingStaff?.map((item, idk) => (
              <div key={idk} className="">
                <FacultyCard
                  Fletter={item?.Letter}
                  Name={item?.Name}
                  Role={item?.Role}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <div className="md:px-[4rem] lg:px-[12rem] ">
            <div id="account" className="primary-color mt-5 text-center text-2xl font-bold">
              Accounts
            </div>
          </div>
          <div className="xl:px[rem] hideScroller  mx-auto mt-4 h-[10rem] w-[99%] gap-3 overflow-y-auto px-4 pb-4 sm:grid sm:grid-cols-2 md:grid-cols-2 md:px-[4rem] lg:grid-cols-3 lg:px-[4rem] xl:grid-cols-4 ">
            {AccountStaff?.map((item, idk) => (
              <div key={idk} className="">
                <FacultyCard
                  Fletter={item?.Letter}
                  Name={item?.Name}
                  Role={item?.Role}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <div className="md:px-[4rem] lg:px-[12rem]">
            <div id="library" className="primary-color mt-5 text-center text-2xl font-bold">
              Library
            </div>
          </div>
          <div className="xl:px[rem] hideScroller mx-auto mt-4 h-[10rem] w-[99%] gap-3 overflow-y-auto px-4 pb-4 sm:grid sm:grid-cols-2 md:grid-cols-2 md:px-[4rem] lg:grid-cols-3 lg:px-[4rem] xl:grid-cols-4">
            {Library?.map((item, idk) => (
              <div key={idk} className="">
                <FacultyCard
                  Fletter={item?.Letter}
                  Name={item?.Name}
                  Role={item?.Role}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <div className="faculty">
          <div className="our-team">
            <div className="pic">
              <img src={staff1} alt="" />
            </div>
            <div className="contents">
              <h3 className="title">Jagjeet Kaur</h3>
              <span className="post">Head of Department in Commerce</span>
            </div>
            <div className="details">
              <p>M.COM., M.phil. Ugc-Net •Jagjeetkaur@gmail.com</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Faculty;
