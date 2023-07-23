import * as React from "react";

import lateralData from "../../../assets/pdf/BtechLateralEntry.pdf";
import CourseOutcome from "../../../assets/pdf/outcomeCE.pdf";
import CourseOutcomeDip from "../../../assets/pdf/Diploma_CE.pdf";

export const BtechCivil = () => {
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          <a href={lateralData} target="_blank" rel="noreferrer">
            <div className="mt-16 text-lg font-semibold text-[#003857] cursor-pointer underline">
              B.TECH (CE) Lateral Entry also available
            </div>
          </a>
          <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-10 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
            B.Tech. Civil Engineering
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 lg:gap-9">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              Duration: 4 years ( 8 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 items-center rounded-md p-4 text-center text-lg">
              Eligibility: 10 + 2 (NON-MEDICAL)
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No of seats: 30
            </div>
          </div>
          <div className=" mt-6">
            <div className="text-2xl font-semibold text-[#003857]">
              Five Program Specific Outcomes
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO1: </span>Graduates will have
              thorough knowledge in sub fields of Civil Engineering so that they
              can expertize themselves in the field of Civil Engineering. The
              programme covers the design as well as field knowledge of Civil
              Engineering.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO2: </span>Graduates would be
              motivated to works collaboratively on various disciplinary
              projects so as to engage them in practical learning process that
              will help them to achieve their professional goals.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO3: </span>Graduates would be
              motivated to works collaboratively on various disciplinary
              projects so as to engage them in practical learning process that
              will help them to achieve their professional goals.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO4: </span>Graduates will have
              good communication skills so that they can able to express their
              ideas clearly and confidently.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className="font-semibold">PSO5: </span>To create the
              curiosity, desire and ability to learn throughout the life among
              Graduates so that they will be competent enough to pursue-higher
              education in technical or management field.
            </div>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                Civil Engineering is the art of directing the great sources of
                power in nature for the use and convenience of man. It refers to
                the practice of organizing the design and construction of any
                artifice which transforms the physical world around us to meet
                some recognized need. It is a branch with lot of diversity,
                right from structural to transportation engineering,
                environmental to hydrology to hydraulics engineering, geology to
                geo-technical to earth quake engineering.
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
                Civil Engineering is the key to several issues affecting our
                lives today. Civil engineers solve problems, design, build and
                maintain our living and working spaces. They design a new
                stadium, work on a local by-pass or railway line, assess a
                damaged structure and manage a multi-million pound construction
                project.
              </div>
              <ul className="list-disc pl-4 text-justify text-[17px]">
                <li>Civil Engineering Consultants/Contractors.</li>
                <li>
                  Constructions of Bridges, Dams, Roads, Harbors, Sewer,
                  Pipelines & Other Structures.
                </li>
                <li>
                  Survey, Design, Costing, Estimating, Traffic Studies,
                  Draughting, Materials Investigation and testing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const DiplomaCivilTab = () => {
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:text-5xl  ">
            Diploma (Civil Engineering)
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 lg:gap-9">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              Duration: 3 years ( 6 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 items-center rounded-md p-4 text-center text-lg">
              Eligibility: 10th
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No of seats: 30
            </div>
          </div>
          <div className=" mt-6">
            <div className="text-2xl font-semibold text-[#003857]">
              Five Program Specific Outcomes
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO1: </span>Graduates will have
              thorough knowledge in sub fields of Civil Engineering so that they
              can expertize themselves in the field of Civil Engineering. The
              programme covers the design as well as field knowledge of Civil
              Engineering.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO2: </span>Graduates would be
              motivated to works collaboratively on various disciplinary
              projects so as to engage them in practical learning process that
              will help them to achieve their professional goals.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO3: </span>Graduates would be
              motivated to works collaboratively on various disciplinary
              projects so as to engage them in practical learning process that
              will help them to achieve their professional goals.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO4: </span>Graduates will have
              good communication skills so that they can able to express their
              ideas clearly and confidently.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className="font-semibold">PSO5: </span>To create the
              curiosity, desire and ability to learn throughout the life among
              Graduates so that they will be competent enough to pursue-higher
              education in technical or management field.
            </div>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                Civil Engineering is the art of directing the great sources of
                power in nature for the use and convenience of man. It refers to
                the practice of organizing the design and construction of any
                artifice which transforms the physical world around us to meet
                some recognized need. It is a branch with lot of diversity,
                right from structural to transportation engineering,
                environmental to hydrology to hydraulics engineering, geology to
                geo-technical to earth quake engineering.
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
                1. Diploma holders in Civil engineering can go out for multiple
                higher education options. They can pursue advanced diplomas,
                degrees, certifications and in addition can be hired by public
                sector, state firms, private companies and even government
                companies at a good salary bar. 2. Diploma holders are directly
                appointed as Junior Engineer/Technical supervisors in Government
                (Central or State) or their allied Public Sector Units and
                Supervisor/Technicians/Engineers in Private Sector. 3. Diploma
                holders are having various job opportunities in the field of:
              </div>
              <ul className="list-disc pl-4 text-justify text-[17px]">
                <li> Rain water harvesting system</li>
                <li>Construction of tunnels</li>
                <li>Surveying</li>
                <li>Construction of sewage systems</li>
                <li>Power generation firms</li>
                <li>Construction of buildings</li>
                <li>Estimation</li>
                <li>Gas and Oil plants</li>
                <li>Construction of bridges</li>
                <li>Water mains</li>
                <li>Preparation of civil drawings</li>
                <li>Construction of pipelines</li>
                <li>Construction of dams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
