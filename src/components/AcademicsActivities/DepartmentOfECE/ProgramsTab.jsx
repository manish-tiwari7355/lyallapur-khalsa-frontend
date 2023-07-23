import * as React from "react";

import lateralData from "../../../assets/pdf/BtechLateralEntry.pdf";

export const Btech = () => {
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          <a href={lateralData} target="_blank" rel="noreferrer">
            <div className="mt-8 text-lg font-semibold text-[#003857] cursor-pointer underline">
              B.TECH (ECE) Lateral Entry also available
            </div>
          </a>
          <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-10 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
            B.Tech ECE
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
              Program Specific Outcomes
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO1: </span>To acquire the
              knowledge of Mathematics, Science and Engineering fundamentals to
              solve complex engineering problems in analog/digital electronic
              system/subsystems.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO2: </span>To achieve
              professional excellence through industry-oriented learning.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO3: </span>To Promote best
              teaching practices to enhance the technical, logical, & managerial
              skills in graduates so that the students communicate effectively
              and manage resources skillfully as members and leaders of the
              profession.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">PSO4: </span>Ethically and
              socially responsible for the development of country and community
            </div>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                Electronics Engineering drives our world of new technologies.
                Devices designed by Electronic Engineers feature in all aspects
                of modern life, including computers, mobile phones, robotics,
                the internet, digital television, satellites, aerospace, medical
                scanners, security systems and sustainable energy. The
                Department fully recognizes the vital nature of this kind of
                supervised study to prepare students in the areas ranging from
                Microelectronics, Mobile Communications to VLSI design
                automation.
              </div>
            </div>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                CAREER OPPORTUNITIES
              </div>
              <div className="mt-1 break-words text-lg tracking-wider">
                The developments of various fields like nanotechnology,
                robotics, high speed automated processors in embedded systems
                and image processors provides budding engineers a wide range of
                opportunities. An electronic engineer can be hired in Consumer
                electronics manufacturing organization, Telecommunication & IT
                industries, Health care equipment manufacturing, Mobile
                communication, Internet technologies, Power Electronics, and
                other industries like steel, petroleum and chemical industry,
                directing control and testing production process.
              </div>
              <ul className="list-disc pl-4 text-justify text-[17px]">
                <li>Biomedical Instrumentation</li>
                <li>Mobile Communication</li>
                <li>Defence Industry</li>
                <li>Space and research organizations</li>
                <li>Manufacturing- PCB, IC etc</li>
                <li>
                  Electronic industries – Design and fabrication of devices,
                  embedded systems etc.
                </li>
                <li>Instrumentation in Automobile Industry</li>
                <li>IT Companies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
