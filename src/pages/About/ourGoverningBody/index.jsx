// import Image from 'next/image';
import Balbir from "../../../assets/images/62bfd1d3926d581a78f4be6c_GB-001.jpg";
import Urmiljeet from "../../../assets/images/GB-002.jpg";
import Jaspal from "../../../assets/images/GB-003.jpg";
import Deepinder from "../../../assets/images/GB-004.jpg";
import Kartar from "../../../assets/images/GB-005.jpg";
import Paramjit from "../../../assets/images/GB-006.jpg";
import Sangha from "../../../assets/images/GB-007.jpg";
import Resham from "../../../assets/images/GB-008.jpg";
import LBalbir from "../../../assets/images/S-Balbir-Sir.png";
import React from "react";

import OurRecruiters from "../../../components/OurRecruiters";

import Cards from "./Cards ";
import HeaderBanner from "../../../components/HeaderBanner";

const ourGoverningBody = () => {
  document.title = "Our Governing Body";
  const governing = [
    {
      title: "Sardarni Balbir Kaur",
      designation: "President",
      image: Balbir,
      key: "1",
    },
    {
      title: "Sardarni Urmiljeet Kaur",
      designation: "Hon. Secretary",
      image: Urmiljeet,
      key: "2",
    },
    {
      title: "S. Jaspal Singh Waraich",
      designation: "Hon. Jt. Secretary",
      image: Jaspal,
      key: "3",
    },
  ];
  const body = [
    {
      title: "S. Deepinder Singh Purewal",
      designation: "Member",
      image: Deepinder,
      key: "4",
    },
    {
      title: "Sardarni Kartar Kaur",
      designation: "Member",
      image: Kartar,
      key: "5",
    },
    {
      title: "Dr. Paramjit Kaur Panag",
      designation: "Member",
      image: Paramjit,
      key: "6",
    },

    {
      title: "S. Gurdeep Singh Sangha",
      designation: "Member",
      image: Sangha,
      key: "7",
    },
    {
      title: "S. Resham Singh",
      designation: "Member",
      image: Resham,
      key: "8",
    },
  ];
  return (
    <div className="">
      <div className="">
        <HeaderBanner
          bgImage="GoverningBanner"
          title="Our Governing Body"
          currentPage="Programs"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="mb-20">
        <h1 className="text-center text-4xl font-bold text-[#081C3A] lg:text-5xl">
          Our <span className=" text-[#32727A]">Governing Body</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 text-center ">
        {governing?.map((item) => (
          <Cards {...item} key={item?.key} />
        ))}
      </div>
      <div className="m-6 md:m-14 mt-16 mb-28 border p-2 py-6 text-justify lg:mx-[8rem] xl:mx-[12rem] text-base shadow-md  xl:text-[20px]">
      {/* <div className="m-6 mt-16 mb-28 border p-2 py-6 shadow-md xl:text-[20px] lg:text-[16px]  xl:mx-[15rem] "> */}
        <p className="pb-2 text-slate-700 ">
          The Khalsa College Lyallpur Education Charitable Trust has a glorious
          past of serving the society especially in the field of education.
        </p>
        <p className="pb-2  text-slate-700">
          The seeds of the legacy were sown before partition-at Lyallpur
          (Pakistan) in the year 1908 with the establishment of organizations
          first educational institute by the great sage, a kindred soul{" "}
          <strong>Sant Attar Singh Ji Mastuana.</strong>
        </p>
        <p className="pb-2 text-slate-700 ">
          After partition, the governing council of the Trust established its
          roots at Jalandhar during the year <strong>1948</strong> through
          ardent efforts of{" "}
          <strong>S. Swaran Singh Ji, Union Cabinet Minister</strong> and
          thereafter the Trust was headed by the renowned educationist &
          administrator S. Balbir Singh Ji, Member Parliament under whose able
          leadership and guidance the institutions run by the Trust have become
          a force to be reckoned with, in the field of education.
        </p>
        <p className="pb-2 text-slate-700 ">
          Presently under the leadership of{" "}
          <strong>Sardarni Balbir Kaur</strong>, the distinguished members of
          the Trust are successfully running a number of multi-disciplinary
          educational institutions with strength of nearly nine thousand
          students in the areas ranging from Arts & Literature to Management, IT
          & Engineering.
        </p>
      </div>

      <div className="text-center md:flex md:flex-wrap md:items-center  md:justify-center md:gap-4 lg:mx-auto lg:flex-wrap">
        {body?.map((item) => (
          <Cards {...item} key={item?.key} />
        ))}

        {/* {Our?.map((item) => (
            <Cards {...item} key={item?.key} />
          ))} */}
      </div>
      <div className="m-4 mt-16 border p-4  shadow-lg lg:flex xl:mx-[20rem]">
        <div className="">
          <div className="mx-auto mb-4 h-[350px] w-[250px] overflow-hidden rounded-md  border-l-[6px] border-b-[6px] border-[#081C3A] md:mx-auto md:h-[400px] md:w-[350px] lg:mx-4 lg:h-[500px] lg:w-[280px] xl:h-[400px]  ">
            <img
              src={LBalbir}
              alt=""
              width="350px"
              height="650px"
              className=""
            />
          </div>
        </div>
        <div className="">
          <div className=" text-2xl font-bold md:text-3xl lg:text-xl">
            <p className=" text-[#081C3A]">
              A Great Visionary-{" "}
              <span className=" text-[#32727A]">S. Balbir Singh Ji</span>{" "}
            </p>
          </div>
          <div className="text-2xl font-bold md:text-3xl lg:text-xl ">
            <p className=" text-[#081C3A]">
              Architect of our success-
              <span className=" text-[#32727A]"> S. Balbir Singh Ji</span>
            </p>
          </div>
          <p className="mt-5 text-justify text-lg text-slate-700 md:text-md lg:text-xl ">
            Sardar Balbir Singh Ji was born into the patriotic family which had
            played a vital role in the freedom struggle of India and thereafter
            enriched the democratic principles of Indian polity. While acquiring
            the higher education at Lyallpur Khalsa College he was profoundly
            active in the social spheres and was elected as member of state
            legislative assembly at a young age and was member of the Punjab
            cabinet from the year 1972 till 1977. During this period of service
            to the state of Punjab, he was elected as President of our governing
            council in the year 1973 and continued to guide and steer the group
            to its pinnacle till the year 2008. It was under his dynamic
            leadership that the various institutions of the trust gained
            prominence in the field of education. Apart from being an active
            parliamentarian as member Rajya Sabha (1992-1998) and member Lok
            Sabha (1999-2004), he was also devoted to the social causes of all
            strata of society and was patron of NRI Sabha and also Chairperson
            of Amateur Kabbadi Federation of India.
          </p>
        </div>
      </div>
      <OurRecruiters />
    </div>
  );
};

export default ourGoverningBody;
