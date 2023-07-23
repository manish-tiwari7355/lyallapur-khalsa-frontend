import React from "react";

import Card from "../../../components/Placements/card";

import avtar5 from "../../../assets/images/image-32.png";
import avtar1 from "../../../assets/images/PC-01.jpg";
import avtar2 from "../../../assets/images/PC-02.jpg";
import avtar3 from "../../../assets/images/PC-03.jpg";
import avtar4 from "../../../assets/images/PC-04.jpg";
import avtar6 from "../../../assets/images/Ranjana_MCA-Dept_upload-with-placement-drive.jpeg";
import avtar7 from "../../../assets/images/tarunjit-singh.jpg";

import HeaderBanner from "../../../components/HeaderBanner/index";
const Placement = () => {
  document.title = "Placement Cell";
  const arr = [
    {
      id: 2,
      imag: avtar2,
      name: "Er.Lovedeep Singh",
      role: "Placement Co-ordinator ECE Department",
      email: "lovedeepsingh@lkcengg.edu.in",
      phoneNumber: 9464060944,
    },
    {
      id: 3,
      imag: avtar3,
      name: "Mr.Harsh Kakkar",
      role: "Placement Co-ordinator CE Department",
      email: "hashkakkar@lkcengg.edu.in",
      phoneNumber: 9876502401,
    },

    {
      id: 4,
      imag: avtar4,
      name: "Mr.Sarbinder Singh Randhawa",
      email: "sarbinderpalsingh@lkcengg.edu",
      role: "Placement Co-ordinator ME Department",
      phoneNumber: 9878484488,
    },

    {
      id: 5,
      imag: avtar6,
      name: "Ms.Ranjana Bahari",
      email: "ranjana.bahari@kclimt.com",
      role: "Placement Co-ordinator IT Department",
      phoneNumber: 8360834447,
    },
    {
      id: 6,
      imag: avtar7,
      name: "Dr. Tarunjit Singh",
      email: "tarunjit.singh@kclimt.com",
      role: "Placement Co-ordinator Mgmt Department",
      phoneNumber: 9988600663,
    },
    {
      id: 7,
      imag: avtar5,
      name: "Dr. Rajindervir",
      email: "rajindervir@lkcengg.edu.in",
      role: "Placement Co-ordinator CSE Department",
      phoneNumber: 8427700836,
    },
  ];

  const data = [
    {
      id: 1,
      imag: avtar1,
      style:
        "bg-[#42727A6E] md:rounded-r-[4rem] overflow-hidden lg:w-[100rem] ",
      name: "Mr. Arun Dutta",
      role: "Deputy Director Training & Placement",
      email: "tpo@lkcengg.edu.in",
      phoneNumber: (
        <div>
          <p>7837045220</p>
          <p>1815066414</p>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="">
        <div className="">
          <HeaderBanner
            bgImage="PlacementBanner"
            title=" Placements Cell"
            currentPage=" Placements Cell"
          />
          <div className="bannerBotttom h-10 w-full"></div>
        </div>
      </div>
      <div className="px-3 md:px-5 max-w-[1300px] mx-auto">
        <div className="primary-color xs container mx-4 mt-8 w-72  border-l-2 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%] xl:ml-[30rem] lg:mb-10">
          Our <span className="secondary-color"> Placements Cell</span>
        </div>
        <div className="mt-2 mb-8 xs:mt-4 text-justify lg:mt-5  xl:mb-[5rem] ">
          The goal of Training & Placement Cell is to provide employment
          opportunities & world class training to LKCTC students in leading
          organizations. In terms of training and placement, LKCTC has
          established good rapport with leading corporate houses, R&D
          organizations, public undertakings to private sector MNC's. The
          institute has an active Placement Cell with the objective of providing
          guidance, assistance and facilitation to graduate & postgraduate
          students in enhancing their acumen to harmonize their technical and
          interpersonal skills.Activities of Training and Placement Department
          include Campus Recruitment Programme, Summer & Industrial Training
          Programme and Industry-Institute Interaction. <br />
          <span className="">
            Apart from that, in order to assist Training and Placement
            department and to build a good image of the institute in public and
            corporate sector, a Brand Management Cell is also operating under
            the dynamic leadership of Mr. Anil Gangta, Assistant Director.
          </span>
        </div>

        <div className="mx-auto mt-3 lg:mt-4 xl:flex xl:w-[40rem]">
          {data.map((item) => (
            <div key={item?.id} className="">
              <Card item={item} firstCard />
            </div>
          ))}
        </div>
        <div className="  border-blue-600  xl:grid xl:grid-cols-2 lg:gap-4 xl:gap-10">
          {arr.map((item) => (
            <div key={item?.id} className="mx-auto xl:w-[40rem]">
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Placement;
