import * as React from "react";
import MBAPos from "../../../assets/pdf/MBAPos.pdf";
import BBAPos from "../../../assets/pdf/BBAPos.pdf";
import BCOM from "../../../assets/pdf/BcomPos.pdf";

export const MbaTab = () => {
  const designation = [
    {
      heading1: "Designations",
      heading2: "Sectors",
      id: 10,
    },
    {
      carreer1: "Business Manager",
      carreer2: "Retail",
      id: 1,
    },
    {
      carreer1: "Business Manager",
      carreer2: "Banking & Insurance",
      id: 2,
    },
    {
      carreer1: "Management Trainee",
      carreer2: "Hospitality",
      id: 3,
    },
    {
      carreer1: "Portfolio Manager",
      carreer2: "Aviation",
      id: 4,
    },
    {
      carreer1: "Relationship Manager",
      carreer2: "FMCG",
      id: 5,
    },
    {
      carreer1: "Business development Manager",
      carreer2: "Manufacturing",
      id: 6,
    },
    {
      carreer1: "Research Analyst",
      carreer2: "BPO",
      id: 7,
    },
    {
      carreer1: "Entrepreneur",
      carreer2: "Hospitality",
      id: 8,
    },
    {
      carreer1: "",
      carreer2: "Hospitality",
      id: 9,
    },
  ];
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
            MBA
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 lg:gap-9">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              Duration: 2 Years (4 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 items-center rounded-md p-4 text-center text-lg">
              Eligibility: Graduation in any stream
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No of seats: 120
            </div>
          </div>
          <div className=" mt-6">
            <div className="text-2xl font-semibold text-[#003857]">
              Six Program Specific Outcomes
            </div>

            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO1: </span>To inculcate
              knowledge in students with experiential learning and prepare for
              advance study and life long learning.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO2: </span>To develop strategic
              understanding of fundamental principles of business and
              competencies in the area of accounts, marketing, interpersonal
              skills, human resource management and entrepreneurship.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO3: </span>To train the
              students for dynamic business environment and apply their
              perspectives through innovation and creativity.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO4: </span>To develop
              competencies in qualitative and quantitative techniques to analyse
              the business data as well as developing an understanding of
              economic, legal and social environment of Indian business.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className="font-semibold">PSO5: </span>To inculcate
              leadership skills, professionalism, effective communication
              skills, interpersonal skills and team work in students so as to
              enable them to manage and collaborate in diverse work
              environments.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO6: </span>To develop
              responsiveness to social issues and ability to identify business
              solutions to address the same. Students will also be able to
              understand the issues of business ethics.
            </div>
            <a href={MBAPos} target="_blank" rel="noreferrer">
              <div className="mt-6 break-words text-justify text-lg tracking-wider underline cursor-pointer font-medium">
                Program & Course Outcomes MBA
              </div>
            </a>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                MBA is an intensive 24 months journey that opens up students
                mind by bringing them out of comfort zone and completely
                extending their capabilities. It introduces the student to a new
                range of skills and tools, which is necessary to manage all kind
                of business activities. The students by the end of this
                programme are ready to take all type of challenges of the new
                competitive world.
              </div>
            </div>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                CAREER OPPORTUNITIES
              </div>
              <div className="mt-1 break-words text-lg tracking-wider">
                The scope for an MBA graduate is unparalleled in every sector.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:px-[4rem] ">
          <div className="bannerBotttom py-4 text-white ">
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
export const BbaTab = () => {
  const designation = [
    {
      heading1: "Designations",
      heading2: "Sectors",
      id: 10,
    },
    {
      carreer1: "Sales Executive",
      carreer2: "Retail",
      id: 1,
    },
    {
      carreer1: "Marketing Executive",
      carreer2: "Banking & Insurance",
      id: 2,
    },
    {
      carreer1: "Office Assistant",
      carreer2: "Hospitality",
      id: 3,
    },
    {
      carreer1: "Project Assistant",
      carreer2: "Aviation",
      id: 4,
    },
    {
      carreer1: "Junior Officer",
      carreer2: "FMCG",
      id: 5,
    },
    {
      carreer1: "Sales Representative",
      carreer2: "Manufacturing",
      id: 6,
    },
    {
      carreer1: "Research Assistant",
      carreer2: "BPO",
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
            BBA
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 ">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              3 years (6 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              10+2 (Any Stream)
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No of seats: 60
            </div>
          </div>
          <div className="">
            <div className=" mt-6 text-2xl font-semibold text-[#003857]">
              Five Program Specific Outcomes
            </div>

            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO1: </span>To develop expertise
              in the area of accounts, marketing, interpersonal skills, human
              resource management and entrepreneurship amongst the graduates.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO2: </span>To develop
              competencies in qualitative and quantitative techniques to analyse
              the business data.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO3: </span>To develop an
              understanding of economic, legal and social environment of Indian
              business.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO4: </span>To develop
              responsiveness to social issues and identify business solutions to
              address these social issues .
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className="font-semibold">PSO5: </span>To understand the
              issues of business ethics.
            </div>
            <a href={BBAPos} target="_blank" rel="noreferrer">
              <div className="mt-6 break-words text-justify text-lg tracking-wider underline cursor-pointer font-medium">
                Program & Course Outcomes BBA
              </div>
            </a>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                The objective of Business administration is to organize people
                and resources in an efficient manner so as to achieve common
                goals and objectives of a company. The principles of business
                administration are of use in an individually run business entity
                as well as a Fortune 500 company. It has many specialized fields
                like marketing, human resource management & Finance. Graduation
                in business administration gives an early start to a rewarding
                management career.
              </div>
            </div>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                CAREER OPPORTUNITIES
              </div>
              <div className="mt-1 break-words text-lg tracking-wider">
                The course provides the aspiring students a knowhow about the
                competitive business environment, which in turn enables the
                students to work in both public and private sector.
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
export const BcomTab = () => {
  const designation = [
    {
      heading1: "Designations",
      heading2: "Sectors",
      id: 10,
    },
    {
      carreer1: "Office Accountant",
      carreer2: "Retail",
      id: 1,
    },
    {
      carreer1: "Office Assistant",
      carreer2: "Banking & Insurance",
      id: 2,
    },
    {
      carreer1: "Tax Consultant",
      carreer2: "Hospitality",
      id: 3,
    },
    {
      carreer1: "Project Officer",
      carreer2: "Aviation",
      id: 4,
    },
    {
      carreer1: "Junior Officer",
      carreer2: "FMCG",
      id: 5,
    },
    {
      carreer1: "Auditors",
      carreer2: "Manufacturing",
      id: 6,
    },
    {
      carreer1: "Research Assistant",
      carreer2: "BPO",
      id: 7,
    },
    {
      carreer1: "Entrepreneur",
      carreer2: "Consultancy",
      id: 8,
    },
    {
      carreer1: "",
      carreer2: "PR Agencies",
      id: 8,
    },
  ];
  return (
    <div>
      <div className="">
        <div className="md:px-[24px] lg:px-0">
          <div className=" primary-color container ml-0 mt-8 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
            B.COM (Hons.)
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              3 years (6 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              10+2 (Any Stream)
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No of seats: 60
            </div>
          </div>
          <div className="">
            <div className="mt-6 text-2xl font-semibold text-[#003857]">
              Four Program Specific Outcomes
            </div>

            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO1: </span> TO develop
              systematic and subject skills within various disciplines of
              finance, auditing and taxation, accounting, management,
              communication, computer.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO2: </span> To acquire the
              knowledge, skill in different areas of communication, decision
              making, innovations and problem solving in day to day business
              activities.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO3: </span>Apply critical
              thinking which improves cognitive skills and logical decision
              making as business leaders.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO4: </span>Commerce being the
              life blood of an organization has gained tremendous momentum in
              the recent years. It has also thrown open multiple job
              opportunities in both the government as well as private sector.
            </div>
            <a href={BCOM} target="_blank" rel="noreferrer">
              <div className="mt-6 break-words text-justify text-lg tracking-wider underline cursor-pointer font-medium">
                Program & Course Outcomes BCOM (Hons.)
              </div>
            </a>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                The objective of Business administration is to organize people
                and resources in an efficient manner so as to achieve common
                goals and objectives of a company. The principles of business
                administration are of use in an individually run business entity
                as well as a Fortune 500 company. It has many specialized fields
                like marketing, human resource management & Finance. Graduation
                in business administration gives an early start to a rewarding
                management career.
              </div>
            </div>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                CAREER OPPORTUNITIES
              </div>
              <div className="mt-1 break-words text-lg tracking-wider">
                The course provides the aspiring students a knowhow about the
                competitive business environment, which in turn enables the
                students to work in both public and private sector.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:px-[4rem]">
          <div className="bannerBotttom  py-4 text-white ">
            {designation?.map((item) => (
              <div className="text-center" key={item?.id}>
                <div className="text-2xl font-bold ">{item?.heading1}</div>
                <p className="mt-6">{item?.carreer1}</p>
              </div>
            ))}
          </div>
          <div className="bannerBotttom py-4 text-white ">
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
