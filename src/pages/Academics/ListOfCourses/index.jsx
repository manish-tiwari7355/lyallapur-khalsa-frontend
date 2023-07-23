import React from "react";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Engineer6 from "../../../assets/images/B.Voc.-Auto-mobile.png";
import Engineer2 from "../../../assets/images/B-tech-CE.png";
import Engineer3 from "../../../assets/images/B-tech-CSE2.png";
import Engineer4 from "../../../assets/images/B-tech-ECE.png";
import Engineer5 from "../../../assets/images/B-tech-ME.png";
import Engineer7 from "../../../assets/images/IT_LAB3.jpg";
import Engineer8 from "../../../assets/images/applied4.jpg";
import Engineer9 from "../../../assets/images/B-tech-cse.png";
import Engineer10 from "../../../assets/images/Diploma-CSE.png";
import Engineer11 from "../../../assets/images/IMG_9438.JPG";
import Engineer12 from "../../../assets/images/BSc-OT.png";
import Engineer13 from "../../../assets/images/BSc-MLS.png";
import Management4 from "../../../assets/images/BBA.png";
import Management5 from "../../../assets/images/BCOM.png";
import Management3 from "../../../assets/images/BHMCT.png";
import Engineer1 from "../../../assets/images/BSc-MLS2.png";
import Management6 from "../../../assets/images/BCA.png";
import Diploma1 from "../../../assets/images/Diploma-CE.png";
import Diploma2 from "../../../assets/images/Diploma-CSE.png";
import Diploma3 from "../../../assets/images/Diploma-ME.png";
import Management8 from "../../../assets/images/hospitality--Catering.png";
import Management1 from "../../../assets/images/MBA.png";
import Management2 from "../../../assets/images/MCA.png";

import ProgramsCards from "../../../components/cards/ProgramsCards";
import HeaderBanner from "../../../components/HeaderBanner";

const ListOfCourses = () => {
  const engineeringArr = [
    {
      image: Engineer1,
      title: "B.Sc. (Medical Lab Sciences)",
      readMore:
        "/Academics/DepartmentOfHealthScience?course=BscMLS&type=Courses",
      description:
        "B.Sc (Medical Lab Sciences) is concerned with the treatment, diagnosis and prevention of disease through the use of clinical laboratory tests.",
    },
    {
      image: Engineer2,
      title: "B.Tech CE",
      readMore:
        "/Academics/DepartmentOfCivilEngineering?course=BtechCivil&type=Courses",
      description:
        "Civil Engineering is the art of directing the great sources of power in nature for the use and convenience of man. It refers to the practice of organizing the design and construction of any artifice which transforms the physical world around us to meet some recognized need.",
    },
    {
      image: Engineer3,
      title: "B.Tech CSE",
      readMore:
        "/Academics/DepartmentOfComputerScience?course=Btech&type=Courses",
      description:
        "Computer Science and Engineering department aims to prepare the young engineers by imparting high quality technical education coupled with appropriate training and wide exposure in form of MOUs, linkages, industry oriented programmes, workshops, expert lectures, etc.",
    },
    {
      image: Engineer4,
      title: "B.Tech ECE",
      readMore: "/Academics/DepartmentOfECE?type=Courses",
      description:
        "Electronics Engineering drives our world of new technologies. Devices designed by Electronic Engineers feature in all aspects of modern life, including computers, mobile phones, robotics, the internet, digital television, security systems and sustainable energy.",
    },
    {
      image: Engineer5,
      title: "B.Tech ME",
      readMore:
        "/Academics/SchoolOfMechanicalEngineering?course=BtechME&type=Courses",
      description:
        "Mechanical Engineering has been the medium through which the single most important socio-economicrevolution known as the Industrial Revolution had found its expression in the 19 th century.",
    },
    {
      image: Engineer6,
      title: "B.Voc (Automobile Services)",
      readMore:
        "/Academics/SchoolOfMechanicalEngineering?course=BVOCAutomobile&type=Courses",
      style: "mt-6",
      bottomPad: "pb-[68px]",
      description:
        "Vocational or skill based education is becoming more significant with the passing time. It is an emerging course in India that aims in providing adequate skills required for a particular trade to candidates.",
    },
    {
      image: Engineer9,
      title: "B.Sc. (AI & ML)",
      readMore:
        "/Academics/DepartmentOfComputerScience?course=BSCAI&type=Courses",
      description:
        "B.Sc. (AI & ML) course focuses on artificial intelligence and machine learning technologies.It is an ideal course for people who want to use technology to create innovative solutions and make an impact on the world.",
    },
    {
      image: Engineer10,
      title: "B.VOC (Software Development)",
      readMore:
        "/Academics/DepartmentOfComputerScience?course=BVOCSoftware&type=Courses",
      description:
        "B.Voc or Bachelor of Vocational Studies in Software Development is a 3 years undergraduate degree course that aims at improving the skills of the candidates by concentrating on theoretical knowledge as well as practical training.",
    },
    {
      image: Engineer12,
      title: "B.Sc. Operational Theatre & Anesthesia",
      readMore:
        "/Academics/DepartmentOfHealthScience?course=BtechOperational&type=Courses",
      description:
        "B.Sc. Operational Theatre and Anesthesia Science is a three year undergraduate course that provides students with comprehensive knowledge about the equipment, care, principles and practices of anesthesia, operation theatre technique and related sciences.",
    },
    {
      image: Engineer13,
      title: "B.Sc. Radiology & Imaging Technology",
      readMore:
        "/Academics/DepartmentOfHealthScience?course=RadiologyTab&type=Courses",
      description:
        "B.Sc Radiology & Imaging Technology is a 3-year course in the field of medical sciences and technology. It provides training in the use of X-rays and other forms of radiation for diagnostic and therapeutic purposes.",
    },
    {
      image: Engineer7,
      title: "B.Sc Graphics & Web Design",
      readMore:
        "/Academics/DepartmentOfComputerScience?course=BSCGraphics&type=Courses",
      description:
        "Computer Science and Engineering department aims to prepare the young engineers by imparting high quality technical education coupled with appropriate training and wide exposure in form of MOUs, linkages, industry oriented programmes, workshops, expert lectures, etc.",
    },
    {
      image: Engineer8,
      title: "Department Of Applied Science",
      readMore: "/Academics/DepartmentOfAppliedScience?type=Courses",
      description:
        "Applied science is the application of existing scientific knowledge to practical applications, like technology or inventions.",
    },
    {
      image: Engineer11,
      title: "B Tech CSE-DS",
      readMore:
        "/Academics/DepartmentOfComputerScience?course=BtechDS&type=Courses",
      description:
        "Computer Science and Engineering department aims to prepare the young engineers by imparting high quality technical education coupled with appropriate training and wide exposure in form of MOUs, linkages, industry oriented programmes, workshops, expert lectures, etc.",
    },
  ];
  const diplomaArr = [
    {
      image: Diploma2,
      title: "Diploma CSE",
      readMore:
        "/Academics/DepartmentOfComputerScience?course=DiplomaCSE&type=Courses",
      description:
        "Computer Science and Engineering department aims to prepare the young engineers by imparting high quality technical education coupled with appropriate training and wide exposure in form of MOUs, linkages, industry oriented programmes, workshops, expert lectures, etc.",
    },
    {
      image: Diploma1,
      title: "Diploma CE",
      readMore:
        "/Academics/DepartmentOfCivilEngineering?course=DiplomaCivil&type=Courses",
      description:
        "Civil Engineering is the art of directing the great sources of power in nature for the use and convenience of man. It refers to the practice of organizing the design and construction of any artifice which transforms the physical world around us to meet some recognized need.",
    },
    {
      image: Diploma3,
      title: "Diploma ME",
      readMore:
        "/Academics/SchoolOfMechanicalEngineering?course=DiplomaME&type=Courses",
      description:
        "Mechanical Engineering has been the medium through which the single most important socio-economicrevolution known as the Industrial Revolution had found its expression in the 19 th century.",
    },
  ];
  const ManagementArr = [
    {
      image: Management1,
      title: "MBA",
      readMore: "/Academics/ManagementDepartment?course=MBA&type=Courses",
      description:
        "MBA is an intensive 24 months journey that opens up students mind by bringing them out of comfort zone and completely extending their capabilities. It introduces the student to a new range of skills and tools, which is necessary to ma",
    },
    {
      image: Management2,
      title: "MCA",
      readMore: "/Academics/DepartmentOfIT?course=MCA&&type=Courses",
      description:
        "The Master of Computer Application program addresses advanced topics in IT through a dual focus approach. This approach aims to combine the application of research–based knowledge with the real world challenges experienced by working professionals in the field of Information Technology (IT).",
    },
    {
      image: Management3,
      title: "BHMCT",
      readMore:
        "/Academics/DepartmentOfHotelManagement?course=BHMCT&type=Courses",
      description:
        "BHMCT is a 4-year (8-Semesters) undergraduate course which aims to impart the modern necessary artifice and attributes required by a passionate student who wishes to develop and enhance skills of guest satisfaction in hospitality sector. The candidate learns the art and science of cooking, baking, and serving the guests.",
    },
    {
      image: Management4,
      title: "BBA",
      readMore: "/Academics/ManagementDepartment?course=BBA&type=Courses",
      description:
        "The objective of Business administration is to organize people and resources in an efficient manner so as to achieve common goals and objectives of a company. The principles of business administration are of use in an individually run business entity as well as a Fortune 500 company.",
    },
    {
      image: Management5,
      title: "B.Com (Hons.)",
      readMore: "/Academics/ManagementDepartment?course=BCOM&type=Courses",
      description:
        "The objective of Business administration is to organize people and resources in an efficient manner so as to achieve common goals and objectives of a company. The principles of business administration are of use in an individually run business entity as well as a Fortune 500 company",
    },
    {
      image: Management6,
      title: "BCA",
      readMore: "/Academics/DepartmentOfIT?course=BCA&&type=Courses",
      description:
        "Fast growing information technology and communication systems have become critical components of almost every company’s strategic plan. This is an undergraduate program where students are exposed to various areas of computer applications including the latest developments to keep pace with the industry.",
    },
    // {
    //   image: Management7,
    //   title: "B.Voc.Tourism & Hospitality Management",
    //   readMore:
    //     "/Academics/DepartmentOfHotelManagement?course=BVocTourism&type=Courses",
    //   description:
    //     "Bachelor of Vocation (B.Voc.) Tourism and Hospitality Management is a graduate-level program with the objective to provide adequate knowledge and skills related to Tourism, Travel, and Hospitality Management for employment and entrepreneurship.",
    // },
    {
      image: Management8,
      title: "B.Voc. Hospitality and Catering Management",
      readMore:
        "/Academics/DepartmentOfHotelManagement?course=BVocHospitality&type=Courses",
      description:
        "School of Hotel Management & Catering Technology at KCL-IMT aims at producing professionals capable of being absorbed in more than half a trillion dollar industry comprising of various sectors like travel, tourism and entertainment. There are plenty of opportunities in this dynamic and continuously growing industry.",
    },
  ];
  document.title = "Programs";
  return (
    <div>
      <div className="">
        <HeaderBanner
          title="Programs"
          bgImage="bannerImg"
          currentPage="Program"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="">
        <div className="md:px-0">
          <div id="programs" className=" primary-color xs container mx-4 mt-8 mb-12  w-72 border-l-2  border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mt-20 xs:w-[95%] xs:text-4xl md:text-[45px] lg:text-5xl xl:ml-[5.75rem] 2xl:ml-[19rem] 2xl:w-[50%]">
            Programs
          </div>
        </div>
      </div>
      <div id="school-of-engineering-and-paramedical-science" className=" primary-color ml-3 mb-9 border-l-2 border-[#32727a] pl-2 text-[20px] font-bold md:text-[30px] xl:ml-[5.75rem] 2xl:ml-[19rem]">
        School OF{" "}
        <span className="secondary-color">
          {" "}
          Engineering and Paramedical Science
        </span>
      </div>
      <div className="programs md:px-20 lg:px-14 xl:px-0 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1250: {
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

        <div id="school-of-management-hm" className="primary-color mt-10 ml-3 mb-9 border-l-2 border-[#32727a] pl-2 text-[20px] font-bold md:text-[30px] xl:ml-[5.75rem] 2xl:ml-[19rem]">
          School of{" "}
          <span className="secondary-color"> Management, IT & HM</span>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper mb-10 max-w-[1300px]"
        >
          {ManagementArr.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ProgramsCards item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div id="diploma-courses" className="primary-color mt-5 ml-3 mb-9 border-l-2 border-[#32727a] pl-2 text-[20px] font-bold md:text-[30px] xl:ml-[5.75rem] 2xl:ml-[19rem]">
          Diploma <span className="secondary-color"> Courses</span>
        </div>
        <div className="programs  ">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1250: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper max-w-[1300px] mx-auto"
          >
            {diplomaArr.map((item, idx) => (
              <SwiperSlide key={idx}>
                <ProgramsCards item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ListOfCourses;
