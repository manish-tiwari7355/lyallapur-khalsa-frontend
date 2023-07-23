import Engineer2 from "../../../assets/images/B-tech-CE.png";
import Engineer3 from "../../../assets/images/B-tech-CSE2.png";
import Engineer4 from "../../../assets/images/B-tech-ECE.png";
import Engineer5 from "../../../assets/images/B-tech-ME.png";
import Engineer9 from "../../../assets/images/1IMG.png";
import Engineer7 from "../../../assets/images/B-tech-cse.png";
import Engineer8 from "../../../assets/images/4IMG.png";
import Engineer10 from "../../../assets/images/5IMG.png";
import Engineer11 from "../../../assets/images/2IMG.png";
import Engineer12 from "../../../assets/images/3IMG.png";
import Engineer13 from "../../../assets/images/4IMG.png";

import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import ProgramsCards from "../../../components/cards/ProgramsCards";
import ProgramsCards from "../../../components/cards/ProgramsCards";
// import './styles.css';
import HeaderBanner from "../../../components/HeaderBanner";

const CoursesOffered = () => {
  const engineeringArr = [
    {
      image: Engineer2,
      title: "B.tech CE",
      readMore: "/Academics/DepartmentOfCivilEngineering",
      description:
        "Civil Engineering is the art of directing the great sources of power in nature for the use and convenience of man. It refers to the practice of organizing the design and construction of any artifice which transforms the physical world around us to meet some recognized need.",
    },
    {
      image: Engineer3,
      title: "B.tech CSE",
      readMore: "/Academics/DepartmentOfComputerScience",
      description:
        "Computer Science and Engineering department aims to prepare the young engineers by imparting high quality technical education coupled with appropriate training and wide exposure in form of MOUs, linkages, industry oriented programmes, workshops, expert lectures, etc.",
    },
    {
      image: Engineer7,
      title: "B.tech CSE-DS",
      readMore: "/Academics/DepartmentOfComputerScience",
      description:
        "This specialization is a new, exponentially growing field which teaches the students how to combine machine learning techniques, algorithms, tools, business acumen and mathematics and apply on raw data to extract useful information from it.",
    },
    {
      image: Engineer4,
      title: "B.tech ECE",
      readMore: "/Academics/DepartmentOfECE",
      description:
        "Electronics Engineering drives our world of new technologies. Devices designed by Electronic Engineers feature in all aspects of modern life, including computers, mobile phones, robotics, the internet, digital television, security systems and sustainable energy.",
    },
    {
      image: Engineer5,
      title: "B.tech ME",
      readMore: "/Academics/SchoolOfMechanicalEngineering",
      description:
        "Mechanical Engineering has been the medium through which the single most important socio-economicrevolution known as the Industrial Revolution had found its expression in the 19 th century.",
    },
  ];

  const graduateStudent = [
    {
      image: Engineer2,
      title: "B.tech CE",
      readMore: "/Academics/DepartmentOfCivilEngineering",
      description:
        "Civil Engineering is the art of directing the great sources of power in nature for the use and convenience of man. It refers to the practice of organizing the design and construction of any artifice which transforms the physical world around us to meet some recognized need.",
    },
    {
      image: Engineer3,
      title: "B.tech CSE",
      readMore: "/Academics/DepartmentOfComputerScience",
      description:
        "Computer Science and Engineering department aims to prepare the young engineers by imparting high quality technical education coupled with appropriate training and wide exposure in form of MOUs, linkages, industry oriented programmes, workshops, expert lectures, etc.",
    },
    {
      image: Engineer7,
      title: "B.tech CSE-DS",
      readMore: "/Academics/DepartmentOfComputerScience",
      description:
        "This specialization is a new, exponentially growing field which teaches the students how to combine machine learning techniques, algorithms, tools, business acumen and mathematics and apply on raw data to extract useful information from it.",
    },
    {
      image: Engineer4,
      title: "B.tech ECE",
      readMore: "/Academics/DepartmentOfECE",
      description:
        "Electronics Engineering drives our world of new technologies. Devices designed by Electronic Engineers feature in all aspects of modern life, including computers, mobile phones, robotics, the internet, digital television, security systems and sustainable energy.",
    },
    {
      image: Engineer8,
      title: "B.tech ME",
      readMore: "/Academics/SchoolOfMechanicalEngineering",
      description:
        "Mechanical Engineering has been the medium through which the single most important socio-economicrevolution known as the Industrial Revolution had found its expression in the 19 th century.",
    },
  ];

  const diplomaCourses = [
    {
      image: Engineer9,
      title: "B.tech CE",
      readMore: "/Academics/DepartmentOfCivilEngineering",
      description:
        "Civil Engineering is the art of directing the great sources of power in nature for the use and convenience of man. It refers to the practice of organizing the design and construction of any artifice which transforms the physical world around us to meet some recognized need.",
    },
    {
      image: Engineer10,
      title: "B.tech CSE",
      readMore: "/Academics/DepartmentOfComputerScience",
      description:
        "Computer Science and Engineering department aims to prepare the young engineers by imparting high quality technical education coupled with appropriate training and wide exposure in form of MOUs, linkages, industry oriented programmes, workshops, expert lectures, etc.",
    },
    {
      image: Engineer11,
      title: "B.tech CSE-DS",
      readMore: "/Academics/DepartmentOfComputerScience",
      description:
        "This specialization is a new, exponentially growing field which teaches the students how to combine machine learning techniques, algorithms, tools, business acumen and mathematics and apply on raw data to extract useful information from it.",
    },
    {
      image: Engineer12,
      title: "B.tech ECE",
      readMore: "/Academics/DepartmentOfECE",
      description:
        "Electronics Engineering drives our world of new technologies. Devices designed by Electronic Engineers feature in all aspects of modern life, including computers, mobile phones, robotics, the internet, digital television, security systems and sustainable energy.",
    },
    {
      image: Engineer13,
      title: "B.tech ME",
      readMore: "/Academics/SchoolOfMechanicalEngineering",
      description:
        "Mechanical Engineering has been the medium through which the single most important socio-economicrevolution known as the Industrial Revolution had found its expression in the 19 th century.",
    },
  ];
  document.title = "Courses Offered";
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="bannerImg"
          title="Courses Offered"
          currentPage="Courses Offered"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="">
        <div className="md:px-0"></div>
      </div>
      <div className=" primary-color mt-16 ml-3 mb-9 border-l-2 border-[#32727a] pl-2 text-3xl font-bold md:text-5xl xl:ml-[5.75rem] 2xl:ml-[19rem]">
        Undergraduate<span className="secondary-color"> Courses</span>
      </div>
      <div className="programs">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper max-w-[1300px]"
        >
          {engineeringArr.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ProgramsCards item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="primary-color mt-16 ml-3 mb-9 border-l-2 border-[#32727a] pl-2 text-3xl  md:text-5xl font-bold md:text-[30px] xl:ml-[5.75rem] 2xl:ml-[19rem]">
          Graduate<span className="secondary-color"> Courses</span>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper max-w-[1300px]"
        >
          {graduateStudent.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ProgramsCards item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="primary-color mt-16 ml-3 mb-9 border-l-2 border-[#32727a] pl-2 text-3xl font-bold md:text-5xl xl:ml-[5.75rem] 2xl:ml-[19rem]">
          Diploma <span className="secondary-color">Courses</span>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper mb-10 max-w-[1300px]"
        >
          {diplomaCourses.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ProgramsCards item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CoursesOffered;
