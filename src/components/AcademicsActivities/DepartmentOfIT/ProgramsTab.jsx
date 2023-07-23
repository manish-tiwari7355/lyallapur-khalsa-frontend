import React, { useState } from "react";

import img1 from "../../../assets/images/IT2.jpg";
import MCA from "../../../assets/pdf/MCApos.pdf";
import BCA from "../../../assets/pdf/BCApos.pdf";

// __________MCA TAB___________
export const McaTab = () => {
  const [item, setItem] = useState("Duration");
  const itemHandle = (e) => {
    setItem(e);
  };
  const designation = [
    {
      heading1: "Designations",
      heading2: "Sectors",
      id: 10,
    },
    {
      carreer1: "Web Developer",
      carreer2: "Web Technology",
      id: 1,
    },
    {
      carreer1: "Programmer",
      carreer2: "Software Development",
      id: 2,
    },
    {
      carreer1: "Data Entry Operator",
      carreer2: "Mobile & Communication",
      id: 3,
    },
    {
      carreer1: "Network Administrator",
      carreer2: "Project Management",
      id: 4,
    },
    {
      carreer1: "Project Officer",
      carreer2: "Banking & Insurance",
      id: 5,
    },
    {
      carreer1: "Office Assistant",
      carreer2: "BPO",
      id: 6,
    },
    {
      carreer1: "Research Assistants",
      carreer2: "Consultancy",
      id: 7,
    },
    {
      carreer1: "Entrepreneur",
      carreer2: "",
      id: 8,
    },
    {
      carreer1: "",
      carreer2: "",
      id: 9,
    },
  ];
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
            MCA
          </div>
          {/* _________________Sub-Items________________ */}
          <div className="flex flex-col lg:flex-row">
            <div className="mt-2 flex flex-col gap-4 text-white md:px-0 lg:mt-7 lg:w-[50%] lg:flex-row">
              <div
                className="flex items-center justify-center pt-5 lg:items-start lg:pt-0"
                onClick={() => itemHandle("Duration")}
              >
                <div
                  className={`flex h-16 w-[70%] p-4 text-center text-lg lg:h-auto lg:w-auto cursor-pointer ${
                    item === "Duration"
                      ? "primary-bg-color"
                      : "secondary-bg-color"
                  }`}
                >
                  Duration
                </div>
              </div>
              <div
                className="flex items-center justify-center lg:items-start"
                onClick={() => itemHandle("Eligibility")}
              >
                <div
                  className={`flex h-16 w-[70%] p-4 text-center text-lg lg:h-auto lg:w-auto cursor-pointer ${
                    item === "Eligibility"
                      ? "primary-bg-color"
                      : "secondary-bg-color"
                  }`}
                >
                  Eligibility
                </div>
              </div>
              <div
                className="mb-10 flex items-center justify-center lg:mb-0 lg:items-start lg:justify-self-start"
                onClick={() => itemHandle("No of seats")}
              >
                <div
                  className={`flex h-16 w-[70%] p-4 text-center text-lg lg:h-auto lg:w-auto cursor-pointer ${
                    item === "No of seats"
                      ? "primary-bg-color"
                      : "secondary-bg-color"
                  }`}
                >
                  No of seats
                </div>
              </div>
            </div>
            <div className="lg:absolute lg:mt-28">
              {item === "Duration" && (
                <div className="mt-2 text-justify text-lg">
                  2 years ( 4 Semesters)
                </div>
              )}
              {item === "Eligibility" && (
                <div className="lg:block lg:w-[37%]">
                  <ul className="list-disc pl-4 text-justify text-[17px]">
                    <li>
                      <div className="mt-2 text-justify text-md font-semibold">
                        Eligibility: Passed BCA/B.Sc(CS/IT)/B.Voc with Computer
                        as a major subject/Bachelor&apos;s Degree in CSE/IT or
                        equivalent degree of minimum three years duration. Or
                        Passed B.Sc./ B.Com./ B.A. with Mathematics at l0+2
                        Level or at Graduation Level (With additional bridge
                        course as per norms of IKG PTU Jalandhar)/ Bridge course
                        will be exempted if the candidate apart from above
                        qualification has passed PGDCA or minimum One Year
                        Diploma in Computer Application/Science/IT or equivalent
                        from any recognized University/Institution. Note: The
                        candidate must have obtained at least 50% marks (45%
                        marks in case of candidates belonging to reserved
                        category) in the qualifying Examination.
                      </div>
                    </li>
                  </ul>
                </div>
              )}
              {item === "No of seats" && <div className="">30</div>}
            </div>
            <div className=" mt-10 lg:flex lg:w-[40%]">
              <img src={img1} alt="" />
            </div>
          </div>
          {/* __________________________________________ */}
          <div className="">
            <div className=" mt-6 text-2xl font-semibold text-[#003857] lg:mt-[250px] 2xl:mt-6">
              Five Program Specific Outcomes
            </div>

            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO1: </span>To prepare the
              successful professionals for Industry, Government sectors,
              Academia, Research, Entrepreneurial Pursuit and Consultancy firms.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO2: </span>To prepare the
              students with Ethical Attitude, Effective Communication Skills and
              admit themselves as ethical and responsible citizens with social
              commitments.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO3: </span>To prepare the post
              graduates with excellent computing ability so that to Comprehend,
              Analyze, Design and Create computing solutions for the real-time
              problems.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO4: </span>To prepare the post
              graduates to adapt themselves for life-long learning through
              professional activities on latest technology and trends needed for
              a successful career.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO5: </span>To prepare post
              graduates the ability to gain multidisciplinary knowledge through
              real-time projects and industry internship training and providing
              a sustainable competitive edge in R&D and meeting industry needs.
            </div>
            <a href={MCA} target="_blank" rel="noreferrer">
              <div className="mt-6 break-words text-justify text-lg tracking-wider underline cursor-pointer font-medium">
                Program & Course Outcomes MCA
              </div>
            </a>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                The Master of Computer Application program addresses advanced
                topics in IT through a dual focus approach. This approach aims
                to combine the application of research–based knowledge with the
                real world challenges experienced by working professionals in
                the field of Information Technology (IT). The program caters to
                the needs of IT academicians and professionals alike. MCA
                program explores various ways in which the integration and
                customization of new and existing technologies can meet the
                needs of a wide gamut of users.
              </div>
            </div>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                CAREER OPPORTUNITIES
              </div>
              <div className="mt-1 break-words text-lg tracking-wider">
                In the upcoming digitized market space, students have tremendous
                scope in the field of software and hardware industry besides
                setting up their own entrepreneurial ventures.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:px-[4rem]  ">
          <div className="bannerBotttom  py-4 text-white ">
            {designation?.map((item) => (
              <div className="text-center" key={item?.id}>
                <div className="text-2xl font-bold ">{item?.heading1}</div>
                <p className="mt-6">{item?.carreer1}</p>
              </div>
            ))}
          </div>
          <div className="bannerBotttom  py-4 text-white ">
            {designation?.map((item) => (
              <div className="text-center" key={item?.id}>
                <div className="text-2xl font-bold ">{item?.heading2}</div>
                <p className="mt-6">{item?.carreer2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// __________BCA TAB___________
export const BcaTab = () => {
  const [item, setItem] = useState("Duration");
  const itemHandle = (e) => {
    setItem(e);
  };
  const designation = [
    {
      heading1: "Designations",
      heading2: "Sectors",
      id: 10,
    },
    {
      carreer1: "Web Developer",
      carreer2: "Web Technology",
      id: 1,
    },
    {
      carreer1: "Programmer",
      carreer2: "Software Development",
      id: 2,
    },
    {
      carreer1: "Data Entry Operator",
      carreer2: "Mobile & Communication",
      id: 3,
    },
    {
      carreer1: "Network Administrator",
      carreer2: "Project Management",
      id: 4,
    },
    {
      carreer1: "Project Officer",
      carreer2: "Banking & Insurance",
      id: 5,
    },
    {
      carreer1: "Office Assistant",
      carreer2: "BPO",
      id: 6,
    },
    {
      carreer1: "Research Assistants",
      carreer2: "Consultancy",
      id: 7,
    },
    {
      carreer1: "Entrepreneur",
      carreer2: "",
      id: 8,
    },
    {
      carreer1: "",
      carreer2: "",
      id: 9,
    },
  ];
  return (
    <div>
      <div className="">
        <div className="md:px-[24px] lg:px-0">
          <div className=" primary-color container ml-0 mt-8 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
            BCA
          </div>
          {/* ____________________ */}
          <div className="flex flex-col lg:flex-row">
            <div className="mt-2 flex flex-col gap-4 text-white md:px-0 lg:mt-7 lg:w-[50%] lg:flex-row">
              <div
                className="flex items-center justify-center pt-5 lg:items-start lg:pt-0"
                onClick={() => itemHandle("Duration")}
              >
                <div
                  className={`flex h-16 cursor-pointer w-[70%] p-4 text-center text-lg lg:h-auto lg:w-auto  ${
                    item === "Duration"
                      ? "primary-bg-color"
                      : "secondary-bg-color"
                  }`}
                >
                  Duration
                </div>
              </div>
              <div
                className="flex items-center justify-center lg:items-start"
                onClick={() => itemHandle("Eligibility")}
              >
                <div
                  className={`flex h-16 cursor-pointer w-[70%] p-4 text-center text-lg lg:h-auto lg:w-auto ${
                    item === "Eligibility"
                      ? "primary-bg-color"
                      : "secondary-bg-color"
                  }`}
                >
                  Eligibility
                </div>
              </div>
              <div
                className="mb-10 flex items-center justify-center lg:mb-0 lg:items-start lg:justify-self-start"
                onClick={() => itemHandle("No of seats")}
              >
                <div
                  className={`flex h-16 cursor-pointer w-[70%] p-4 text-center text-lg lg:h-auto lg:w-auto ${
                    item === "No of seats"
                      ? "primary-bg-color"
                      : "secondary-bg-color"
                  }`}
                >
                  No of seats
                </div>
              </div>
            </div>
            <div className="lg:absolute lg:mt-28">
              {item === "Duration" && (
                <div className="mt-6 text-justify text-lg">
                  3 years ( 6 Semesters)
                </div>
              )}
              {item === "Eligibility" && (
                <div className="lg:block lg:w-[35%]">
                  <ul className="list-disc pl-4 text-justify text-[17px]">
                    <li>
                      <div className="mt-6 text-justify text-lg ">
                        All those candidates who have passed Matriculation
                        examination AND have also passed 3 Year Diploma in any
                        Trade from Punjab State Board of Technical Education &
                        Industrial Training, Chandigarh or such Examination from
                        any other recognized State Board of Technical Education,
                        or Sant Longowal Institute of Engineering & Technology,
                        Longowal.
                      </div>
                    </li>
                    <li>
                      <div className="mt-6 text-justify text-lg">
                        10+2 with 1-year Diploma in Computer Application / IT
                        (or equivalent) from a recognized University with
                        Mathematics as course at 10+2 or DIT / DCA level.
                      </div>
                    </li>
                  </ul>
                </div>
              )}
              {item === "No of seats" && <div className="">60</div>}
            </div>
            <div className=" mt-10 lg:flex lg:w-[40%]">
              <img src={img1} alt="" />
            </div>
          </div>
          {/* ____________________ */}
          <div className="">
            <div className=" mt-6 text-2xl font-semibold text-[#003857] lg:mt-[250px] 2xl:mt-6">
              Four Program Specific Outcomes
            </div>

            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO1: </span>Ability to analyze,
              interpret and present findings effectively using mathematical and
              communication skills.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO2: </span>Understand the
              fundamentals and applications of programming, data structures,
              databases, networking, mobile computing, information security and
              data analysis.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO3: </span>Amalgamate knowledge
              of information technology and computational tools for simulation.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO4: </span>Ability to
              effectively apply the computer science concepts to analyze, design
              and develop cost effective, efficient and secure solutions to the
              societal problems.
            </div>
            <a href={BCA} target="_blank" rel="noreferrer">
              <div className="mt-6 break-words text-justify text-lg tracking-wider underline cursor-pointer font-medium">
                Program & Course Outcomes BCA
              </div>
            </a>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                Fast growing information technology and communication systems
                have become critical components of almost every company’s
                strategic plan. Companies which want to take advantage of the
                new information technologies and communication systems require
                professionals, who can apply principles to solve problems
                produced by the interface between business and technology. This
                is an undergraduate program where students are exposed to
                various areas of computer applications including the latest
                developments to keep pace with the industry.
              </div>
            </div>

            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                CAREER OPPORTUNITIES
              </div>
              <div className="mt-1 break-words text-lg tracking-wider">
                In the upcoming digitized market space, students have tremendous
                scope in the field of software and hardware industry besides
                setting up their own entrepreneurial ventures.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:px-[4rem] ">
          <div className="bannerBotttom  py-4 text-white ">
            {designation?.map((item) => (
              <div className="text-center" key={item?.id}>
                <div className="text-2xl font-bold ">{item?.heading1}</div>
                <p className="mt-6">{item?.carreer1}</p>
              </div>
            ))}
          </div>
          <div className="bannerBotttom  py-4 text-white ">
            {designation?.map((item) => (
              <div className="text-center" key={item?.id}>
                <div className="text-2xl font-bold ">{item?.heading2}</div>
                <p className="mt-6">{item?.carreer2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
