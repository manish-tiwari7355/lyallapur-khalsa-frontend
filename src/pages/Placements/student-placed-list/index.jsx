import React from "react";
import HeaderBanner from "../../../components/HeaderBanner";
import OurRecruiters from "../../../components/OurRecruiters";

// import PlacementsCards from '@/components/Placements/PlacementsCards';
import PlacementsCards from "../../../components/Placements/PlacementsCards";

// import { data } from '@/pages/student-placed-list/studentsDetails';
import { data } from "../student-placed-list/studentsDetails";
const PlacedListStudents = () => {
  document.title = "Students Placed";
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="StudentPlaced"
          title="Student Placed"
          currentPage="Student Placed"
        />
        <div className="bannerBotttom h-10 w-full"></div>
      </div>
      <div className="mt-20 ">
        <div className=" primary-color xs container mx-4 mt-[60px] mb-[50px] w-72  border-l-2 border-[#32727a]   text-3xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-15 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%] ">
          Students <span className="secondary-color">Placed</span>
        </div>
        <div className="   2xl:px-44   ">
          <div className="grid  items-center gap-4 sm:gap-10 lg:gap-6 sm:px-16 md:px-20 lg:px-22 xl:px-10 2xl:px-54 md:gap-4 base:grid-cols-2 base:gap-6 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 ">
            {data.map((item) => (
              <div className="mx-auto w-72" key={item?.id}>
                <PlacementsCards
                  avatar={item?.image}
                  name={item?.name}
                  qualification={item?.education}
                  head={item?.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <OurRecruiters />
    </div>
  );
};

export default PlacedListStudents;
