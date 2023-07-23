import React from "react";
import bscGraphicCO from "../../../assets/pdf/bscGraphicCO.pdf";

import lateralData from "../../../assets/pdf/BtechLateralEntry.pdf";
import CourseOutcome from "../../../assets/pdf/CSE.pdf";
import CourseOutcomeDip from "../../../assets/pdf/Diploma_CSE.pdf";

export const BtechTab = () => {
  const designation = [
    // {
    //   heading1: "Designations",
    //   heading2: "Sectors",
    //   id: 10,
    // },
    {
      carreer1: "Software Developers",
      carreer2: "Web Designers",
      id: 1,
    },
    {
      carreer1: "Web Developers ",
      carreer2: "Python Specialist",
      id: 2,
    },
    {
      carreer1: "Data Engineer",
      carreer2: "Content Developers",
      id: 3,
    },
    {
      carreer1: "Cloud Managers",
      carreer2: "Information Security Managers",
      id: 4,
    },
    {
      carreer1: "UI/UX Designers",
      carreer2: "Social Media Managers",
      id: 5,
    },
    // {
    //   carreer1: "Simulation in IT companies",
    //   carreer2: "Database Administrator",
    //   id: 6,
    // },
    // {
    //   carreer1: "",
    //   carreer2: "Ethical Hacker",
    //   id: 7,
    // },
    // {
    //   carreer1: "",
    //   carreer2: "Scientific Assistant",
    //   id: 8,
    // },
    // {
    //   carreer1: "",
    //   carreer2: "Technical Associate Engineer",
    //   id: 9,
    // },
  ];
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          <a href={lateralData} target="_blank" rel="noreferrer">
            <div className="mt-16 text-lg font-semibold text-[#003857] cursor-pointer underline">
              B.Tech (CSE) Lateral Entry also available
            </div>
          </a>
          <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-10 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl ">
            B.Tech (Computer Science & Engineering)
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 lg:gap-9">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              Eligibility: 10+2 Non Medical
            </div>
            <div className="secondary-bg-color  h-16 items-center rounded-md p-4 text-center text-lg">
              Duration: 4 years ( 8 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No. of Seats 90
            </div>
          </div>
          <div className=" mt-6">
            <div className="text-2xl font-semibold text-[#003857]">
              Program Specific Outcomes
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO1: <br />
              </span>
              <span className="font-semibold">Basic knowledge : </span> To
              provide the basic knowledge of engineering concepts and
              fundamentals to computer Graduates by logical and practical
              approach for problem solving and function effectively as a skilled
              computer engineer and pursue their higher education or emerge as
              an entrepreneur.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO2: <br />
              </span>
              <span className="font-semibold">Practice : </span> To inculcate
              creative abilities by imparting knowledge and skills to analyze,
              design, test and implement various software applications.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO3: <br />
              </span>
              <span className="font-semibold">Experiments :</span>
              To instill leadership capabilities, social-economic orientation,
              commitment to one’s profession, professional ethics and community
              services for the protection of environment.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO4: <br />
              </span>
              <span className="font-semibold">Team work: </span> Graduate will
              be able to demonstrate the ability to develop, examine, question,
              and explore perspectives or alternatives to problems in
              hospitality operations.
            </div>

            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                {/* Computer Science and Engineering department aims to prepare the
                young engineers by imparting high quality technical education
                coupled with appropriate training and wide exposure in form of
                MOUs, linkages, industry oriented programmes, workshops, expert
                lectures, etc. The department promises to strive ahead to meet
                the future challenges in technological developments and deliver
                the bounties of frontier knowledge for the benefit of human
                kind. */}
                <li>
                  B. Tech CSE program at LKCTC focuses on the foundation of
                  computing and design, developing and testing algorithms and
                  software, and developing practical solutions to computing
                  problems in various social, economic, and organizational
                  domains.{" "}
                </li>
                <li>
                  Moreover, we facilitate our students with the latest
                  technologies during the lab sessions to ensure a hands-on
                  experience. Also, it helps them become industry-ready.
                </li>
                <li>
                  The curriculum also emphasizes project-based learning, wherein
                  the students work on projects as part of the study. In
                  addition, to improve the students’ coding skills, CSE dept. of
                  LKCTC has signed an MoU with. Aptiguide which provides an
                  online competitive coding platform.
                </li>
                {/* • B. Tech CSE program at LKCTC focuses on the foundation of
                computing and design, developing and testing algorithms and
                software, and developing practical solutions to computing
                problems in various social, economic, and organizational
                domains. • Moreover, we facilitate our students with the latest
                technologies during the lab sessions to ensure a hands-on
                experience. Also, it helps them become industry-ready. • The
                curriculum also emphasizes project-based learning, wherein the
                students work on projects as part of the study. In addition, to
                improve the students’ coding skills, CSE dept. of LKCTC has
                signed an MoU with. Aptiguide which provides an online
                competitive coding platform. */}
              </div>
            </div>
            <div className="">
              <a href={CourseOutcome} target="_blank" rel="noreferrer">
                <div className="mt-8 text-2xl font-semibold text-[#003857] underline cursor-pointer">
                  Course Outcome
                </div>
              </a>
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                CAREER OPPORTUNITIES
              </div>
              <div className="mt-1 break-words text-lg tracking-wider">
                Computer science and engineering has revolutionized a world that
                was there only a moment ago, continues to have unparalleled
                impact in today's world, and has a steadily increasing scope
                that is shaping tomorrow's world. There are thousands of
                national and multinational software companies that offer jobs to
                Computer Engineers, some of the famous names are IBM, CISCO,
                TCS, WIPRO, INFOSYS, GOOGLE, MICROSOFT, YAHOO and ORACLE.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 px-10">
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

export const BtechDSTab = () => {
  const designation = [
    // {
    //   heading1: "Designations",
    //   heading2: "Sectors",
    //   id: 10,
    // },
    {
      carreer1: "Data Scientist",
      carreer2: "Machine Learning Engineer",
      id: 1,
    },
    {
      carreer1: "Machine Learning Scientist",
      carreer2: "Applications Architect",
      id: 2,
    },
    {
      carreer1: "Enterprise Architect",
      carreer2: "Data Architect",
      id: 3,
    },
    {
      carreer1: "Infrastructure Architect",
      carreer2: "Data Engineer",
      id: 4,
    },
    {
      carreer1: "Business Intelligence (BI) Developer ",
      carreer2: "Software Developer",
      id: 5,
    },
    // {
    //   carreer1: "Simulation in IT companies",
    //   carreer2: "Software Developer",
    //   id: 6,
    // },
    // {
    //   carreer1: "Graphic Designer",
    //   carreer2: "Mobile Application Developer",
    //   id: 7,
    // },
    // {
    //   carreer1: "Creative Designer",
    //   carreer2: "Cloud Manager",
    //   id: 8,
    // },
    // {
    //   carreer1: "UI/UX Designer",
    //   carreer2: "",
    //   id: 9,
    // },
  ];
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          <a href={lateralData} target="_blank" rel="noreferrer">
            <div className="mt-16 text-lg font-semibold text-[#003857] cursor-pointer underline">
              B.Tech (Data Science) Lateral Entry also available
            </div>
          </a>
          <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-10 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl ">
            B.Tech (Data Science)
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 lg:gap-9">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              Eligibility: 10+2 Non Medical
            </div>
            <div className="secondary-bg-color  h-16 items-center rounded-md p-4 text-center text-lg">
              Duration: 4 years ( 8 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No. of Seats 30
            </div>
          </div>
          <div className=" mt-6">
            <div className="text-2xl font-semibold text-[#003857]">
              Program Specific Outcomes
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO1: <br />
              </span>
              <span className="font-semibold">Basic knowledge : </span>To
              provide the basic knowledge of engineering concepts and
              fundamentals to computer Graduates by logical and practical
              approach for problem solving and function effectively as a skilled
              computer engineer and pursue their higher education or emerge as
              an entrepreneur.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO2: <br />
              </span>
              <span className="font-semibold">Practice : </span>To inculcate
              creative abilities by imparting knowledge and skills to analyze,
              design, test and implement various software applications.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO3: <br />
              </span>
              <span className="font-semibold">Experiments :</span>
              To instill leadership capabilities, social-economic orientation,
              commitment to one’s profession, professional ethics and community
              services for the protection of environment.
            </div>

            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                Computer Science and Engineering department aims to prepare the
                young engineers by imparting high quality technical education
                coupled with appropriate training and wide exposure in form of
                MOUs, linkages, industry oriented programmes, workshops, expert
                lectures, etc. The department promises to strive ahead to meet
                the future challenges in technological developments and deliver
                the bounties of frontier knowledge for the benefit of human
                kind.
              </div>
            </div>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                CAREER OPPORTUNITIES
              </div>
              <div className="mt-1 break-words text-lg tracking-wider">
                Computer science and engineering has revolutionized a world that
                was there only a moment ago, continues to have unparalleled
                impact in today's world, and has a steadily increasing scope
                that is shaping tomorrow's world. There are thousands of
                national and multinational software companies that offer jobs to
                Computer Engineers, some of the famous names are IBM, CISCO,
                TCS, WIPRO, INFOSYS, GOOGLE, MICROSOFT, YAHOO and ORACLE.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 px-10">
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
export const DiplomaCSETab = () => {
  const designation = [
    {
      heading1: "Designations",
      heading2: "Sectors",
      id: 10,
    },
    {
      carreer1: "Software design development.",
      carreer2: "Embedded Systems",
      id: 1,
    },
    {
      carreer1: "Manufacturing, assembling, maintaining software systems.",
      carreer2: "Database management",
      id: 2,
    },
    {
      carreer1: "Web development",
      carreer2: "IT",
      id: 3,
    },
    {
      carreer1: "Web programming.",
      carreer2: "Multimedia",
      id: 4,
    },
    {
      carreer1: "E- commerce specialization.",
      carreer2: "Telecommunication",
      id: 5,
    },
    {
      carreer1: "Telecommunication, Aerospace maintenance.",
      carreer2: "Gaming",
      id: 6,
    },
    {
      carreer1: "PC production.",
      carreer2: "Computer Hardware & Software Maintenance",
      id: 7,
    },
    {
      carreer1: "PC networking.",
      carreer2: "Software Design",
      id: 8,
    },
    {
      carreer1: "PC equipment system design and development.",
      carreer2: "System Testing",
      id: 9,
    },
    {
      carreer1: "",
      carreer2: "Graphics Animation",
      id: 10,
    },
    {
      carreer1: "",
      carreer2: "Programming",
      id: 11,
    },
    {
      carreer1: "",
      carreer2: "Robotics and Artificial Intelligence",
      id: 12,
    },
  ];
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl ">
            Diploma CSE
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 lg:gap-9">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              Eligibility: 10th
            </div>
            <div className="secondary-bg-color  h-16 items-center rounded-md p-4 text-center text-lg">
              Duration: 3 years ( 6 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No. of Seats 30
            </div>
          </div>
          <div className=" mt-6">
            <div className="text-2xl font-semibold text-[#003857]">
              Program Specific Outcomes
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO1: <br />
              </span>
              <span className="font-semibold">Basic knowledge : </span>To
              provide the basic knowledge of engineering concepts and
              fundamentals to computer Graduates by logical and practical
              approach for problem solving and function effectively as a skilled
              computer engineer and pursue their higher education or emerge as
              an entrepreneur.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO2: <br />
              </span>
              <span className="font-semibold">Practice : </span>To inculcate
              creative abilities by imparting knowledge and skills to analyze,
              design, test and implement various software applications.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO3: <br />
              </span>
              <span className="font-semibold">Experiments :</span>
              To instill leadership capabilities, social-economic orientation,
              commitment to one’s profession, professional ethics and community
              services for the protection of environment.
            </div>

            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                Computer Science and Engineering department aims to prepare the
                young engineers by imparting high quality technical education
                coupled with appropriate training and wide exposure in form of
                MOUs, linkages, industry oriented programmes, workshops, expert
                lectures, etc. The department promises to strive ahead to meet
                the future challenges in technological developments and deliver
                the bounties of frontier knowledge for the benefit of human
                kind.
              </div>
            </div>
            <div className="">
              <a href={CourseOutcomeDip} target="_blank" rel="noreferrer">
                <div className="mt-8 text-2xl font-semibold text-[#003857] underline cursor-pointer">
                  Course Outcome
                </div>
              </a>
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                CAREER OPPORTUNITIES
              </div>
              <div className="mt-1 break-words text-lg tracking-wider">
                Diploma holders in Copmuter Science & Engineering can go out for
                multiple higher education options. There are thousands of
                national and multinational software companies that offer jobs to
                Computer Engineers diploma holders, some of the famous names are
                IBM, CISCO, TCS, WIPRO, INFOSYS, GOOGLE, MICROSOFT, YAHOO and
                ORACLE.at a good salary bar.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 px-10">
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
export const BSCGraphicsTab = () => {
  const designation = [
    // {
    //   heading1: "Designations",
    //   heading2: "Sectors",
    //   id: 10,
    // },
    {
      carreer1: "Graphic Designer",
      carreer2: "UI/UX Designer	",
      id: 1,
    },
    {
      carreer1: "Game Designer",
      carreer2: "3D Animator/2D Animator",
      id: 2,
    },
    {
      carreer1: "Audio and Video Editor",
      carreer2: "VFX Artist",
      id: 3,
    },
    {
      carreer1: "Film Critic",
      carreer2: "Website Designer",
      id: 4,
    },
    {
      carreer1: "Freelancer",
      carreer2: "Story Board Artist",
      id: 5,
    },
    // {
    //   carreer1: "Simulation in IT companies",
    //   carreer2: "Project Manager",
    //   id: 6,
    // },
    // {
    //   carreer1: "Software Developers",
    //   carreer2: "Research Scientist and Engineering Consultants",
    //   id: 7,
    // },
    // {
    //   carreer1: "",
    //   carreer2: "Cloud Manager",
    //   id: 8,
    // },
  ];
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl ">
            B.Sc. (Graphics and Web Designing)
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 lg:gap-9">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              Eligibility: +2 (Any Stream)
            </div>
            <div className="secondary-bg-color  h-16 items-center rounded-md p-4 text-center text-lg">
              Duration: 3 years ( 6 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No. of Seats 30
            </div>
          </div>
          <div className=" mt-6">
            <div className="text-2xl font-semibold text-[#003857]">
              Program Specific Outcomes
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO1: <br />
              </span>
              <span className=""></span>To provide the basic knowledge of
              engineering concepts and fundamentals to computer Graduates by
              logical and practical approach for problem solving and function
              effectively as a skilled computer engineer and pursue their higher
              education or emerge as an entrepreneur.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO2: <br />
              </span>
              <span className=""></span>To inculcate creative abilities by
              imparting knowledge and skills to analyze, design, test and
              implement various software applications.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO3: <br />
              </span>
              <span className=""></span>
              To instill leadership capabilities, social-economic orientation,
              commitment to one’s profession, professional ethics and community
              services for the protection of environment.
            </div>

            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                Computer Science and Engineering department aims to prepare the
                young Designers to provide a boost to the Media industry by
                providing skilled Multimedia Professionals. This is a practical
                course that provides the student with the necessary skills and
                techniques for employment in TV Channels, Film Industry,
                Animation Studios, Multimedia, Web Development Companies and
                Advertising Agencies.
              </div>
            </div>
            <div className="">
              <a href={bscGraphicCO} target="_blank" rel="noreferrer">
                <div className="mt-8 text-2xl font-semibold text-[#003857] underline cursor-pointer">
                  Course Outcome
                </div>
              </a>
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                CAREER OPPORTUNITIES
              </div>
              <div className="mt-1 break-words text-lg tracking-wider">
                Computer science and engineering has revolutionized a world that
                was there only a moment ago, continues to have unparalleled
                impact in today's world, and has a steadily increasing scope
                that is shaping tomorrow's world. There are thousands of
                national and multinational companies that offer jobs to Computer
                Engineers and Designers, some of the famous names are ACCENTURE,
                INFOSYS, GOOGLE, PAINTBOX STUDIO, WHIZCRAFT, SAREGAMA, RED
                CHILLIES.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 px-10">
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
export const BVOCSoftwareTab = () => {
  const designation = [
    // {
    //   heading1: "Designations",
    //   heading2: "Sectors",
    //   id: 10,
    // },
    {
      carreer1: "Technical Writer",
      carreer2: "Infrastructure Engineer",
      id: 1,
    },
    {
      carreer1: "Associate CRM",
      carreer2: "Web Developer",
      id: 2,
    },
    {
      carreer1: "Test Engineer",
      carreer2: "Software Engineer",
      id: 3,
    },
    {
      carreer1: "Social Media Manager ",
      carreer2: "Vocational Training Associate",
      id: 4,
    },
    {
      carreer1: "Unit Manager",
      carreer2: "Project Technician",
      id: 5,
    },
    {
      carreer1: "Project Manager",
      carreer2: "QA Engineer",
      id: 6,
    },
    {
      carreer1: "Consultant Network Security",
      carreer2: "Hardware Engineer",
      id: 7,
    },
    // {
    //   carreer1:
    //     "Design Engineers in Web applications, Network Security and management solutions",
    //   carreer2: "Scientific Assistant",
    //   id: 8,
    // },
    // {
    //   carreer1: "",
    //   carreer2: "Technical Associate Engineer",
    //   id: 9,
    // },
  ];
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[100%] lg:text-5xl ">
            B.Voc. SOFTWARE DEVELOPMENT
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 lg:gap-9">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              Eligibility: 10+2 (Any Stream)
            </div>
            <div className="secondary-bg-color  h-16 items-center rounded-md p-4 text-center text-lg">
              Duration: 3 years ( 6 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No. of Seats 30
            </div>
          </div>
          <div className=" mt-6">
            <div className="text-2xl font-semibold text-[#003857]">
              Program Specific Outcomes
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO1: <br />
              </span>
              <span className=""></span>To provide the basic knowledge of
              engineering concepts and fundamentals to computer Graduates by
              logical and practical approach for problem solving and function
              effectively as a skilled computer engineer and pursue their higher
              education or emerge as an entrepreneur.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO2: <br />
              </span>
              <span className=""></span>To inculcate creative abilities by
              imparting knowledge and skills to analyze, design, test and
              implement various software applications.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO3: <br />
              </span>
              <span className=""></span>
              To instill leadership capabilities, social-economic orientation,
              commitment to one’s profession, professional ethics and community
              services for the protection of environment.
            </div>

            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                The domain of Software Development covers a variety of streams
                ranging from operations to education, covering all kinds of
                human activities we could ever think of. In today’s era, the
                growth of any company depends upon its efforts made in Software
                development. It has been a long felt necessity to align higher
                education with the emerging needs of the economy so as to ensure
                that the graduates of higher education system must have adequate
                knowledge and skills for employment and entrepreneurship in
                computer field.
              </div>
            </div>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                CAREER OPPORTUNITIES
              </div>
              <div className="mt-1 break-words text-lg tracking-wider">
                Computer science and engineering has revolutionized a world that
                was there only a moment ago, continues to have unparalleled
                impact in today's world, and has a steadily increasing scope
                that is shaping tomorrow's world. There are thousands of
                national and multinational software and Graphic Design companies
                that offer jobs to Computer Engineers and Designers, some of the
                famous names are IBM, CISCO, TCS, WIPRO, INFOSYS, GOOGLE,
                MICROSOFT, YAHOO and ORACLE
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 px-10">
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
export const BSCAITab = () => {
  const designation = [
    // {
    //   heading1: "Designations",
    //   heading2: "Sectors",
    //   id: 10,
    // },
    {
      carreer1: "Software Developer",
      carreer2: "Video Game Programmer",
      id: 1,
    },
    {
      carreer1: "AI Data Scientist",
      carreer2: "Software Architect",
      id: 2,
    },
    {
      carreer1: "Machine Learning Architect",
      carreer2: "Machine Learning Researcher",
      id: 3,
    },
    {
      carreer1: "Full Stack Developer",
      carreer2: "Business Intelligence Developer",
      id: 4,
    },
    {
      carreer1: "Business/ Data Analyst",
      carreer2: "Cloud Manager",
      id: 5,
    },
    // {
    //   carreer1: "Project Manager",
    //   carreer2: "QA Engineer",
    //   id: 6,
    // },
    // {
    //   carreer1: "Consultant Network Security",
    //   carreer2: "Hardware Engineer",
    //   id: 7,
    // },
    // {
    //   carreer1:
    //     "Design Engineers in Web applications, Network Security and management solutions",
    //   carreer2: "Scientific Assistant",
    //   id: 8,
    // },
    // {
    //   carreer1: "",
    //   carreer2: "Technical Associate Engineer",
    //   id: 9,
    // },
  ];
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl ">
            B.Sc. (Artificial Intelligence & Machine Learning)
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 lg:gap-9">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              Eligibility: +2 Non Medical
            </div>
            <div className="secondary-bg-color  h-16 items-center rounded-md p-4 text-center text-lg">
              Duration: 3 years ( 6 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No. of Seats 30
            </div>
          </div>
          <div className=" mt-6">
            <div className="text-2xl font-semibold text-[#003857]">
              Program Specific Outcomes
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO1: <br />
              </span>
              <span className=""></span>To provide the basic knowledge of
              engineering concepts and fundamentals to computer Graduates by
              logical and practical approach for problem solving and function
              effectively as a skilled computer engineer and pursue their higher
              education or emerge as an entrepreneur.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO2: <br />
              </span>
              <span className=""></span>To inculcate creative abilities by
              imparting knowledge and skills to analyze, design, test and
              implement various software applications.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO3: <br />
              </span>
              <span className=""></span>
              To instill leadership capabilities, social-economic orientation,
              commitment to one’s profession, professional ethics and community
              services for the protection of environment.
            </div>

            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                Artificial Intelligence and Machine Learning is a core field
                that is rapidly growing in the fast-changing world and powering
                for great industrial revolution.
              </div>
            </div>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                CAREER OPPORTUNITIES
              </div>
              <div className="mt-1 break-words text-lg tracking-wider">
                There is a huge demand of AI and robotics in different sectors
                including Manufacturing, Health care, Automobile, E Commerce,
                Education and other emerging sectors.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 px-10">
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
