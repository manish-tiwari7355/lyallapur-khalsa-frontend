import React, { useState } from "react";
import CourseOutcome from "../../../assets/pdf/CO_dept of applied science.pdf";

export const AppliedScienceTab = () => {
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          {/* <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
            AppliedScienceTab
          </div> */}
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 lg:gap-9">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              Duration: 3 Years (6 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 items-center rounded-md p-4 text-center text-lg">
              Eligibility: 10+2
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No of seats: 30
            </div>
          </div>
          <div className=" mt-6">
            <div className="text-2xl font-semibold text-[#003857]">
              Six Program Specific Outcomes
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO1: </span>To support
              university education outputs for education, health, industrial,
              and commercial sectors with academic cadres that serve growth
              plans
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO2: </span>To link college
              specialties to job market needs through cooperation with public
              and private sectors for workshops
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO3: </span>To develop human
              resources and qualify them for applied sciences education to
              provide community with specialists with diploma or bachelor's
              degree.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO4: </span>To collaborate with
              colleges of applied sciences in national and international
              universities
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className="font-semibold">PSO5: </span>To develop behavioral
              skills (communication) for college students
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO6: </span>To evaluate training
              programs in light of latest developments, job market requirements
              and international experience
            </div>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                Applied science is the application of existing scientific
                knowledge to practical applications, like technology or
                inventions. Within natural science, disciplines that are basic
                science develop basic information to predict and perhaps explain
                and understand phenomena in the natural world. Applied science
                is the use of scientific processes and knowledge as the means to
                achieve a particular practical or useful result. This includes a
                broad range of applied science related fields, including
                engineering and medicine.
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
              <ul className="list-disc pl-4 text-justify text-[17px]">
                <li> Acoustic consultant</li>
                <li>Actuarial analyst</li>
                <li>Actuary</li>
                <li>Astronomer</li>
                <li>Chartered accountant</li>
                <li>Chartered certified accountant</li>
                <li>Data analyst</li>
                <li>Data scientist</li>
                <li>Investment analyst</li>
                <li>CAD technician</li>
                <li>Civil Service fast streamer</li>
                <li>Financial manager</li>
                <li>Financial trader</li>
              </ul>
              <div className="mt-8 text-xl font-semibold text-[#003857]">
                SCOPE OF EMPLOYMENT STUDYING CHEMISTRY
              </div>
              <ul className="list-disc pl-4 text-justify text-[17px]">
                <li> Analytical Chemist</li>
                <li>Chemical Engineer</li>
                <li>Chemistry Teacher</li>
                <li>Forensic Scientist</li>
                <li>Geochemist</li>
                <li>Hazardous Waste Chemist</li>
                <li>Materials Scientist</li>
                <li>Pharmacologist</li>
                <li>Toxicologist</li>
                <li>Water Chemist</li>
              </ul>
              <div className="mt-8 text-xl font-semibold text-[#003857]">
                SCOPE OF EMPLOYMENT STUDYING PHYSICS
              </div>
              <ul className="list-disc pl-4 text-justify text-[17px]">
                <li> Accelerator Operator</li>
                <li>Applications Engineer</li>
                <li>Data Analyst</li>
                <li>Design Engineer</li>
                <li>High School Physics Teacher</li>
                <li>IT Consultant</li>
                <li>Lab Technician</li>
                <li>Laser Engineer</li>
                <li>Optical Engineer</li>
                <li>Research Associate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
