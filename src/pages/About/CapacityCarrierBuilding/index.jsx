// import Image from 'next/image';
import Img9 from "../../../assets/images/alumniinter.jpg";
import Img7 from "../../../assets/images/augmenting.jpg";
import Img13 from "../../../assets/images/awareness.jpg";
import Img10 from "../../../assets/images/bootcampcse.jpg";
import Img11 from "../../../assets/images/bootcampece.jpg";
import Img2 from "../../../assets/images/convo2021.jpg";
import Img4 from "../../../assets/images/diwali2021.jpg";
import Img3 from "../../../assets/images/diwali2021n.jpg";
import Img12 from "../../../assets/images/efoto.jpg";
import Img5 from "../../../assets/images/fdp2.jpg";
import Img8 from "../../../assets/images/fiestadearte.jpg";
import Img1 from "../../../assets/images/TechSymphonic.jpg";
import Img6 from "../../../assets/images/Tobacco.jpg";
import React from "react";

import HeaderBanner from "../../../components/HeaderBanner";

const CapacityCarrierBuilding = () => {
  document.title = "Events";
  const Capacity = [
    {
      ImgUrl: Img1,
      title: "Tech-Symphonic, 2022",
      paragraph:
        "Lyallpur Khalsa College Technical Campus organizes Tech-Symphonic, 2022 on 25th Mar. 2022.",
      btn: "Read More",
      key: "Symphonic",
    },
    {
      ImgUrl: Img2,
      title: "Convocation-2021",
      paragraph:
        "LKCTC organizes Convocation 2021 for 2019 & 2020 pass-out students on 10th Dec 2021.",
      btn: "Read More",
      key: "Convocation",
    },
    {
      ImgUrl: Img3,
      title: "Notice",
      paragraph:
        "The institute shall remain closed on 4th Nov. & 5th Nov. 2021 on the occassion of Diwali & Vishawkarma Pujan respectively.The institute shall also remain closed on 1st Saturday i.e. 06/11/2021 in lieu of 2nd Saturday i.e. 13/11/2021.",
      btn: "Read More",
      key: "Diwali",
    },
    {
      ImgUrl: Img4,
      title: "Diwali Fest-2021",
      paragraph:
        "LKCTC is going to organise Diwali Fest-2021 for its students. The below is google form for registration in competitions on Diwali Fest 2021 . The Team for any event can have Maximum 2 participants .In case of team events one student should fill the particulars on behalf of his/her team mate also. Class wise multiple teams are allowed for various events",
      btn: "Read More",
      key: "lkctc",
    },
    {
      ImgUrl: Img5,
      title: "One Week FDP",
      paragraph:
        "Lyallpur Khalsa College Technical Campus organizes 2nd Faculty Development Programme on Paradigm shift in Teaching Pedagogy due to Covid-19 from 21st June 2021 to 28th June 2021.Kindly refer to the poster and brochure.",
      btn: "Read More",
      key: "FDP",
    },
    {
      ImgUrl: Img6,
      title: "World No Tobacco Day",
      paragraph:
        "LKCTC, Jalandhar has taken initiative to celebrate World No Tobacco Day (WNTD) on 31st May, 2021. An online session is planned to raise the awareness on the harmful and deadly effects of tobacco use.During the session, apledge taking ceremony is planned to motivate the participants against the use of tobacco products.",
      btn: "Read More",
      key: "Tobacco",
    },
    {
      ImgUrl: Img7,
      title: " Expert Talk",
      paragraph:
        "The Research Committee oF LKCTC is ORGANIZING Expert talk on Augmenting writing skills for Articulating Research SCHEDULE ON 28/05/2021 AT 10:00 AM ONWARDS.coordinator: Er Vikam Dhiman (8283877786) co-coordinator: Er. Gurnam Singh (9417388535)",
      btn: "Read More",
      key: "Talk",
    },
    {
      ImgUrl: Img8,
      title: " Fiesta De Arte",
      paragraph:
        "The Department of Applied Science, Lyallpur Khalsa College Technical Campus, is organising an online cultural event, Fiesta De Arte. Given the difficult times the world is facing owing to Covid-19, the theme of Humanity in the time of Pandemic has been chosen to celebrate the human spirit and unity. The event includes poster making, rangoli making and poetry writing contests. Online entries are invited from various branches. The names of the winners will be announced on May 24, 2021.",
      btn: "Read More",
      key: "Fiesta",
    },
    {
      ImgUrl: Img9,
      title: "Alumni interaction cum Webinar",
      paragraph:
        "The ECE department is organising an Alumni interaction cum Webinar on Automation and its Types on 5th May 2021which will help the students to have a practical understanding about automation and related job opportunities. The resource person will be Er. Rohit Duggal, Alumni ECE Department LKCTC Jalandhar and Automation Engineer at Guru Kirpa Automation, Mandi Gobindgarh, Fatehgarh Sahib.",
      btn: "Read More",
      key: "Webinar",
    },
    {
      ImgUrl: Img10,
      title: "BootCamp",
      paragraph:
        "The CSE department in Collaboration with the Training and Placement Cell is organising a bootcamp in collaboration with FUEL to enhance the employability skills of the students and enable them to start their successful career. Under this camp a 60Hrs skill-based training shall be provided to the students encompassing the domain knowledge in artificial intelligence, Soft skills as well as Aptitude skills.",
      btn: "Read More",
      key: "Camp",
    },
    {
      ImgUrl: Img11,
      title: "BootCamp",
      paragraph:
        "The ECE department in Collaboration with the Training and Placement Cell is organising a bootcamp in collaboration with FUEL to enhance the employability skills of the students and enable them to start their successful career. Under this camp a 60Hrs skill-based training shall be provided to the students encompassing the domain knowledge in artificial intelligence,Soft skills as well as Aptitude skills.",
      btn: "Read More",
      key: "Camp2",
    },
    {
      ImgUrl: Img12,
      title: "E-FOTOPEDIA",
      paragraph:
        "The ECE department organizes an event on E-FOTOPEDIA (Digital Collage Design Contest). The date for the event is 8th May, 2021.Eligibility Criteria: All students of age group 15 years and above can participate. Themes of the event: 1. Green Living 2. Role of Engineering in combating COVID-19",
      btn: "Read More",
      key: "ECE",
    },
    {
      ImgUrl: Img13,
      title: "Awareness Session",
      paragraph:
        "The Department of Applied Science of School of Engineering, Lyallpur Khalsa College Technical Campus is going to organize an awareness session on how to â€œBuild your profile to be industry readyâ€ for first year students (B.Tech. Regular, B.Tech LEET, B.Sc. MLS and B.Voc.). The session will be addressed by Dr. Dharamvir Uppal (a leading Business Coach and Certified Master NLP) on April 30, 2021, 10:00 a.m. onwards. The session will help students gain knowledge about appearing in interviews and getting placements.",
      btn: "Read More",
      key: "Session",
    },
  ];
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="CarrierBanner"
          title="Events"
          currentPage="Events"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="  md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[18rem]">
        <div className=" mt-6 flex text-3xl font-bold">
          <h1 className="ml-2 border-l-4 border-[#32727A] pl-4 text-[#081C3A] md:text-5xl ">
            Events
          </h1>
        </div>
        <div className="">
          {Capacity?.map((element) => (
            <div
              className="mx-[20px] my-8 items-center text-center md:flex  "
              key={element?.key}
            >
              <div className="flex ">
                <div className=" flex h-[380px] w-[300px] mx-auto md:h-[380px] md:w-[300px]">
                  <img
                    key={element?.key}
                    src={element?.ImgUrl}
                    alt=""
                    className="w-[300px] border-2 border-[#32727A]"
                  />
                </div>
              </div>
              <div className=" md:h-80  w-[300px] pb-3 md:pb-0 md:w-full mx-auto md:pt-16" style={{boxShadow: "rgba(0, 0, 0, 0.20) 0px 5px 15px"}}>
                <div className=" mx-6 pt-2  text-xl font-bold text-[#081C3A] md:text-justify md:text-2xl">
                  {element.title}
                </div>
                <div className="  mx-6 pt-4 text-justify  leading-5">
                  {element.paragraph}
                </div>
                <div className="mx-20 mb-4 md:mx-[18px]">
                  {" "}
                  <div className=" mt-2  bg-[#32727A] py-2 text-white md:mt-4 md:w-max md:px-6">
                    {element.btn}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapacityCarrierBuilding;
