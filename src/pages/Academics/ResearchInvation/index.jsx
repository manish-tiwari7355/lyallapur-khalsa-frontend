import { FaRegCheckCircle } from "@react-icons/all-files/fa/FaRegCheckCircle";
// import Image from 'next/image';
// import avtar2 from "public/images/Untitled-1.jpg";
import avtar2 from "../../../assets/images/Untitled-1.jpg";
import avtar1 from "../../../assets/images/Untitled-1_1.jpg";
import avtar3 from "../../../assets/images/image.png";
import React from "react";

import HeaderBanner from "../../../components/HeaderBanner";

const ResearchInvation = () => {
  document.title = "Research and Innovation";
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="Management"
          title="Research and Innovation"
          currentPage="Research and Innovation"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="md:px-[4rem] lg:px-[12rem]">
        <div className=" primary-color xs /Academics/EResourcesmx-4 container mt-8 w-72  border-l-2 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
          Research and <span className="secondary-color"> Innovation</span>
        </div>
        <div className="mt-12 break-all px-4">
          <div className="  text-2xl font-semibold uppercase">
            research paper publication
          </div>
          <div className="mt-6 leading-7 text-[17px] text-[#686363]">
            Students at LKCTC are more inclined towards research oriented
            activities. They have participated in different national &
            international conferences and presented meaningful research papers.
          </div>
        </div>
        {/* ------------------------- */}
        <div className=" lg:flex">
          <div className="mt-8 break-all px-4 lg:mt-20 lg:w-1/2">
            <div className="text-2xl font-semibold">
              Research & Incubation Center{" "}
            </div>
            <div className="mt-6 leading-7 text-[17px] text-[#686363]">
              Research & Incubation Center has been established at LKCTC. In
              order to Promote Research & Entrepreneurship among students &
              faculty, Department of Management of KCL Institute of Management &
              Technology inaugurated Research & Incubation Center. The Centre is
              fully equipped with on line Data base such as ProQuest, J-Gate &
              Dell Net as well as Magazines, Journals, Newspapers, Research
              reports; Training Reports etc. along with computers with internet
              facility & students can have free access to these for enriching
              their research aptitude & knowledge.
            </div>
          </div>
          {/* ------------------------------ */}
          {/* <div className='mt-16 ml-4 h-[14rem] w-[95%] px-4 xs:h-[18rem]'> */}
          <div className="mt-6 lg:mt-[6rem] lg:w-1/2">
            {/* <div className='secondary-bg-color relative h-full w-full '> */}
            <div className="relative mx-auto h-full w-4/5 lg:w-full xl:w-4/5 ">
              <img
                src={avtar1}
                alt="img"
                style={{ boxShadow: " 14px 14px 0px 4px rgba(46,106,116,1)" }}
              />
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* ============================ */}
        <div className="lg:flex lg:flex-row-reverse">
          <div className="mt-8 break-all px-4 lg:mt-20 lg:w-1/2">
            <div className="text-2xl font-semibold">
              Entrepreneurship & Incubation Cell
            </div>
            <div className="mt-6 leading-7 text-[17px] text-[#686363]">
              LKCTC, one of the most forward thinking and innovative educational
              institutions, is proud to start an incubation center to enable its
              students to get first-hand experience in entrepreneurship, promote
              innovation driven activities at the institute and provide
              comprehensive and integrated range of technical support including
              App Development, Website Development, Website Designing, Software
              Development and Social Media Marketing. The main objective of the
              cell is to promote and propagate entrepreneurial culture amongst
              students & to play the critical role in blending their technical
              inputs with entrepreneurial and managerial skills in their
              academic programmes and train them for entrepreneurial challenges.
              Some of the projects accomplished by our students are: Ocean Notes
              App (Question Bank with Answers), Mind Freaks (MCQ based Website),
              SMM for ‘The Solution Hub’, KCLIMT App (Notice board for
              students), Kids App (For Preschool & Kindergarten kids), Insta
              Saloon, Library Management System, Fabric Plaza, Teacher ERP,
              Lyf@LKCE and many more.
            </div>
          </div>
          {/* ------------------------------ */}
          {/* <div className='mt-16 ml-4 h-[14rem] w-[95%] px-4 xs:h-[18rem]'> */}
          <div className="mt-6 lg:mt-[8rem] lg:w-1/2">
            {/* <div className='secondary-bg-color relative h-full w-full '> */}
            <div className="relative mx-auto h-full w-4/5 lg:w-full xl:w-4/5 lg:-ml-4 xl:ml-4 2xl:ml-8">
              <img
                src={avtar2}
                alt="img"
                style={{ boxShadow: " 14px 14px 0px 4px rgba(46,106,116,1)" }}
              />
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* ------------------------------ */}

        <div className="mt-28 break-all px-4">
          <div className="  text-2xl font-semibold">NEWS LETTER</div>
          <div className="mt-6 leading-7">
            At LKCTC, this is our first stride towards bringing in the much
            cherished synergy in our activities, so that together we can make
            brand LKCTC a big binding force for us, and ultimately one of the
            most admired educational brands in India. Like the proverbial
            ‘little drops of water making the mighty ocean’ each of the small
            events, initiatives, happenings, and moments of truth would be
            recorded at monthly News Letter Initiative taken up by the
            Institution.
          </div>
        </div>
        <div className="mt-8 break-all px-4">
          <div className="  text-2xl font-semibold">NEWSPAPER</div>
          <div className="mt-6 leading-7 text-[17px] text-[#686363]">
            At LKCTC, this is our first stride towards bringing in the much
            cherished synergy in our activities, so that together we can make
            brand LKCTC a big binding force for us, and ultimately one of the
            most admired educational brands in India. Like the proverbial
            ‘little drops of water making the mighty ocean’ each of the small
            events, initiatives, happenings, and moments of truth would be
            recorded at monthly News Letter Initiative taken up by the
            Institution.
          </div>
        </div>
        <div className="mt-8 break-all px-4">
          <div className="  text-2xl font-semibold">INNOVATION CLUB</div>
          <div className="mt-6 leading-7 text-[17px] text-[#686363]">
            Innovation Club has been formed to encourage the young minds to come
            up with innovative & useful ideas. The objective is to enable the
            students to be aware of their inner potential and cultivate
            creativity as well as innovative thinking through proactive academic
            activities and research. To encourage the innovative minds,
            Mechanical Engineering Deptt. has an independent collegiate Club
            under International Society of Automobile Engineers (SAE). Under
            this club, the following Innovative projects were undertaken by
            various engineering departments such as Internal Combustion Engine
            of two stroke and four stroke vehicles, Water level indicator,
            Traffic Light Controller, Mosquito Repellers, Dual Tone Multi
            frequency Decoder, Lie Detector, Project Based on Free Energy
            Concept, Hybrid Vehicles and non-conventional energy generation
            prototype.
          </div>
        </div>
        {/* ------------------------------ARTICALS down V ------------------------------- */}
        <div className="mt-8 break-all px-4">
          <div className="  text-2xl font-semibold">
            FACULTY DEVELOPMENT PROGRAMMS
          </div>
          <div className="mt-6 leading-7">
            <div className="flex ">
              <div className="mr-4  mt-1 text-2xl xs:block">
                <FaRegCheckCircle className="fill-[#32727a]" />
              </div>
              <div className="text-[17px] text-[#686363] ">
                LKCTC organized a FDP on Research Writing and Publication to
                acquaint its faculty members with the art of writing quality
                research papers and getting them published in Renowned
                International Journals. Prof (Dr.) Gurwinder Singh Shergill
                (Massey University New Zealand) acted as Resource Person.
              </div>
            </div>
          </div>
          <div className="mt-6 leading-7">
            <div className="flex">
              <div className="mr-4 mt-1   text-2xl xs:block">
                <FaRegCheckCircle className="fill-[#32727a]" />
              </div>
              <div className="text-[17px] text-[#686363]">
                LKCTC organized a six day Faculty Development Programme on
                ‘Latest trends in Teaching Pedagogy’ in association with IKG-PTU
                Kapurthala, Netsmartz, Red Hat, Network Nuts and Computer
                Society of India. The major thrust of this Faculty Development
                programme was to explore latest pedagogical skills to guide
                teachers and policy makers for quality concerns in higher
                education for an academic world.
              </div>
            </div>
          </div>
          <div className="mt-6 leading-7">
            <div className="flex">
              <div className="mr-4  mt-1 text-2xl xs:block">
                <FaRegCheckCircle className="fill-[#32727a]" />
              </div>
              <div className="text-[17px] text-[#686363]">
                LKCTC organized a seven day Faculty Development Programme on
                “Emerging Trends and Challenges in Management & IT Education” in
                collaboration with IRD India & Indo Global Chamber of Commerce,
                Industries & Agriculture. The objective of this programme was to
                hone the teaching and research skills of faculty members of
                Management and Information Technology departments. The major
                focus of the FDP is upgrading the teaching, training, and
                research skills of the teachers with recent developments and
                advancements.
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:flex    ">
          <div className="mt-8 break-all px-4 lg:mt-20 lg:w-1/2">
            <div className="text-2xl font-semibold">
              Research and Innovation{" "}
            </div>
            <div className="mt-6 leading-7 text-[17px] text-[#686363]">
              LKCTC in collaboration with SCRS Publications has successfully
              launched it First Conference Proceedings Book with following
              details:
              <div className="mt-6 leading-7 text-[17px] text-[#686363]">
                Computing and Intelligent Systems
              </div>
              <div className="mt-6 leading-7 font-semibold text-black text-[17px]">
                Emerging Trends in Engineering and Management
              </div>
              <div>
                <span className="font-semibold text-black">Editors:</span>{" "}
                Vikram Dhiman and Pooja Dhand
              </div>
            </div>
            <div>
              <span className="font-semibold text-black">ISBN: </span>{" "}
              978-81-955020-3-5
            </div>
            <div>
              <span className="font-semibold text-black">DOI:</span>{" "}
              <a
                href="https://doi.org/10.56155/978-81-955020-3-5"
                rel="noreferrer"
                target="blank"
                className=" text-sky-600"
              >
                https://doi.org/10.56155/978-81-955020-3-5
              </a>
            </div>

            <div className="">
              {" "}
              You may access the published chapters<br></br>
              <div>
                at{" "}
                <a
                  href="https://www.publications.scrs.in/title/978-81-955020-3-5"
                  rel="noreferrer"
                  target="blank"
                  className=" text-sky-600"
                >
                  https://www.publications.scrs.in/title/978-81-955020-3-5
                </a>
              </div>
            </div>
          </div>
          {/* ------------------------------ */}
          {/* <div className='mt-16 ml-4 h-[14rem] w-[95%] px-4 xs:h-[18rem]'> */}
          <div className="mt-6 lg:mt-[6rem] lg:w-1/2  ">
            {/* <div className='secondary-bg-color relative h-full w-full '> */}
            <div className=" mx-auto h-full w-4/5 lg:w-full xl:w-4/5  flex justify-end ">
              <img src={avtar3} alt="img" style={{ height: 450, width: 400 }} />
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* ------------------------------ARTICALS end A ------------------------------- */}
        <div className="mt-8 break-all px-4">
          <div className="  text-2xl font-semibold">
            ICETEM -INTERNATIONAL CONFERENCE ON EMERGING TRENDS IN ENGINEERING
            AND MANAGEMENT
          </div>
          <div className="mt-6 leading-7 text-[17px] text-[#686363]">
            LKCTC successfully organized an International Conference on
            “Emerging Trends in Engineering and Management”. The main aim of the
            ICETEM was to bring scholars, researchers, educators, students,
            professionals and experts from industries, R& D institutions & other
            interested groups to present their work on recent developments in
            the fields of engineering, sciences and management. The purpose of
            this conference was to provide a forum for exchange of innovative
            ideas among faculty members, researchers, corporates and students
            about engineering & management related topics. There were four
            Tracks; Track 1: CSE, ECE & IT, and Track 2: Management, Track 3:
            Applied Sciences, Track 4: Mechanical Engineering. More than 150
            papers were presented during the conference.
          </div>
        </div>

        <div className="mt-8 break-all px-4">
          <div className="  text-2xl font-semibold">
            TIE CHANDIGARH AND IKG PTU BUSINESS PLAN COMPETITION, 2020-21
          </div>
          <div className="mt-6 leading-7 text-[17px] text-[#686363]">
            The Indus Entrepreneurs (TIE’s) is the world’s largest community of
            entrepreneurs & startups. Its mission is to foster and advance
            entrepreneurship across the globe and especially in our region. Its
            principal objective is to provide a platform on which people with
            entrepreneurial spirit and those interested in economic value
            creation can come together to share ideas. Under the initiative of
            TIE Chandigarh and IKG PTU Business Plan Competition, 2020-21, five
            teams from School of Engineering and six teams from School of
            Management and IT submitted their proposal of a business plan. Out
            of them, six teams got shortlisted for the second phase. One team
            from School of Management comprising of Rahul Dadwal, Tarun Dadwal,
            Bhawna and Shifali of MBA 4th Sem. secured second runner-up position
            in TIE Business Plan Competition. The team also won a cash prize of
            Rs. 20,000 and competed against over 160 teams from various IKG-PTU
            affiliated colleges across Punjab.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchInvation;
