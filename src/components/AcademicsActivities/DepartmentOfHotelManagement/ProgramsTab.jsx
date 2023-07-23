import * as React from "react";

import BHMCT from "../../../assets/pdf/HMpos.pdf";
import Bvoc from "../../../assets/pdf/BVOCpos.pdf";

export const BhmctTab = () => {
  const designation = [
    {
      heading1: "Designations",
      heading2: "Sectors",
      id: 10,
    },
    {
      carreer1: "Hotel Managers",
      carreer2: "Hotel & Tourism",
      id: 1,
    },
    {
      carreer1: "Front office manager",
      carreer2: "Airline",
      id: 2,
    },
    {
      carreer1: "Executive Chefs",
      carreer2: "Club Management",
      id: 3,
    },
    {
      carreer1: "Assistant Managers",
      carreer2: "Cruise Ship Hotel Management",
      id: 4,
    },
    {
      carreer1: "Junior Officer",
      carreer2: "Guest Houses",
      id: 5,
    },
    {
      carreer1: "Food and Beverage Manager",
      carreer2: "Resorts etc.",
      id: 6,
    },
    {
      carreer1: "Restaurant and Food Service Managers",
      carreer2: "",
      id: 7,
    },
    {
      carreer1: "Banquet Managers",
      carreer2: "",
      id: 8,
    },
    {
      carreer1: "Entrepreneur",
      carreer2: "",
      id: 9,
    },
  ];
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
            BHMCT
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 lg:gap-9">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              Eligibility :10+2 (Any Stream)
            </div>
            <div className="secondary-bg-color  h-16 items-center rounded-md p-4 text-center text-lg">
              Duration :4 years (8 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No. of Seats 60
            </div>
          </div>
          <div className=" mt-6">
            <div className=" mt-6 text-2xl font-semibold text-[#003857] lg:mt-[250px] 2xl:mt-6">
              Program Specific Outcomes
            </div>

            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO1: <br />
              </span>
              <span className="font-semibold">Basic knowledge : </span> To
              inculcate knowledge in students with experiential learning and
              prepare the for advance study and life long learning.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO2: <br />
              </span>
              <span className="font-semibold">Practice : </span> Graduate will
              be able to perform various tasks, duties and other activities in
              the operation of the hotels, restaurants, in accordance with the
              Standard Operating Procedures.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO3: <br />
              </span>
              <span className="font-semibold">Experiments :</span>
              Graduate will have the ability to analyse the situation or
              identifies problems, and be able to formulate a suitable solution
              & implement the same in Food & Beverage Service and accommodation
              operations.
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
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO5: <br />
              </span>
              <span className="font-semibold">Communication: </span>
              Graduate will be able to use professional written and oral
              communication skills to communicate effectively.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO6: <br />
              </span>
              <span className="font-semibold">Skills enrichment : </span>
              Graduate will be able to pursue entrepreneurial endeavors.
            </div>
            <a href={BHMCT} target="_blank" rel="noreferrer">
              <div className="mt-6 break-words text-justify text-lg tracking-wider underline cursor-pointer font-medium">
                Program & Course Outcomes BHMCT (AICTE and UGC)
              </div>
            </a>

            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                BHMCT is a 4-year (8-Semesters) undergraduate course which aims
                to impart the modern necessary artifice and attributes required
                by a passionate student who wishes to develop and enhance skills
                of guest satisfaction in hospitality sector. The candidate
                learns the art and science of cooking, baking, and serving the
                guests. The course is framed to inculcate talents which are
                required at various stages in sectors like Hotels, Hospitals,
                Airlines, Cruise, Railways, Banks, Clubs and many more.
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

export const BVocHospitalityTab = () => {
  const designation = [
    {
      heading1: "Designations",
      heading2: "Sectors",
      id: 10,
    },
    {
      carreer1: "Sous Chef",
      carreer2: "Hotels",
      id: 1,
    },
    {
      carreer1: "Event Organiser",
      carreer2: "Fine Dining Restaurants",
      id: 2,
    },
    {
      carreer1: "Commis",
      carreer2: "Railways",
      id: 3,
    },
    {
      carreer1: "Service Stewards",
      carreer2: "Airlines Catering",
      id: 4,
    },
    {
      carreer1: "Airlines Ground Staff",
      carreer2: "Cruiseliners",
      id: 5,
    },
  ];
  return (
    <div>
      <div className="xs:px-4">
        <div className="md:px-[24px] lg:px-0">
          <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl ">
            B.Voc. Hospitality and Catering Management
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 lg:gap-9">
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              Duration: 10+2 (Any Stream)
            </div>
            <div className="secondary-bg-color  h-16 items-center rounded-md p-4 text-center text-lg">
              Eligibility: 3 years (6 Semesters)
            </div>
            <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
              No. of Seats 30
            </div>
          </div>
          <div className=" mt-6">
            <div className=" mt-6 text-2xl font-semibold text-[#003857] lg:mt-[250px] 2xl:mt-6">
              Four Program Specific Outcomes
            </div>

            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO1: <br />
              </span>
              <span className="font-semibold">Basic knowledge : </span> To
              inculcate knowledge in students with experiential learning and
              prepare the for advance study and life long learning.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO2: <br />
              </span>
              <span className="font-semibold">Practice : </span> Graduate will
              be able to perform various tasks, duties and other activities in
              the operation of the hotels, restaurants, in accordance with the
              Standard Operating Procedures.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO3: <br />
              </span>
              <span className="font-semibold">Experiments :</span>
              Graduate will have the ability to analyse the situation or
              identifies problems, and be able to formulate a suitable solution
              & implement the same in Food & Beverage Service and accommodation
              operations.
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
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO5: <br />
              </span>
              <span className="font-semibold">Communication: </span>
              Graduate will be able to use professional written and oral
              communication skills to communicate effectively.
            </div>
            <div className="mt-6 break-words text-justify text-lg tracking-wider">
              <span className=" font-semibold">
                PSO6: <br />
              </span>
              <span className="font-semibold">Skills enrichment : </span>
              Graduate will be able to pursue entrepreneurial endeavors.
            </div>
            <a href={Bvoc} target="_blank" rel="noreferrer">
              <div className="mt-6 break-words text-justify text-lg tracking-wider underline cursor-pointer font-medium">
                Program & Course Outcomes B.Voc. Hospitality and Catering
                Management
              </div>
            </a>

            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                Course Rationale
              </div>
              <div className=" mt-1 break-words text-justify text-lg tracking-wider">
                A blended training methodology is comprising of theory sessions,
                and hands-on practical training in industry simulated labs for
                intentionally creating real-life working experience, helping
                students to familiarize themselves with their future workplace.
              </div>
            </div>
            <div className="">
              <div className="mt-8 text-2xl font-semibold text-[#003857]">
                CAREER OPPORTUNITIES
              </div>
              <div className="mt-1 break-words text-lg tracking-wider">
                B.VOC in Hospitality & Catering Management carefully takes you
                through the basics of the food services industry and involves
                the planning and organization of food and beverage services for
                various types of events.
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

// export const BVocTourismTab = () => {
//   const designation = [
//     {
//       heading1: "Designations",
//       heading2: "Sectors",
//       id: 10,
//     },
//     {
//       carreer1: "Event Manager",
//       carreer2: "Travel Agency",
//       id: 1,
//     },
//     {
//       carreer1: "Tour Operators",
//       carreer2: "Airlines",
//       id: 2,
//     },
//     {
//       carreer1: "Ground Staff",
//       carreer2: "Railways",
//       id: 3,
//     },
//     {
//       carreer1: "Airline Crew Members",
//       carreer2: "Hospitals Administration",
//       id: 4,
//     },
//     {
//       carreer1: "Teacher",
//       carreer2: "Education",
//       id: 5,
//     },
//     {
//       carreer1: "Travel Agents",
//       carreer2: "Hotels",
//       id: 6,
//     },
//   ];
//   return (
//     <div>
//       <div className="xs:px-4">
//         <div className="md:px-[24px] lg:px-0">
//           <div className="primary-color container mt-8 ml-0 w-72  border-l-4 border-[#32727a]  pl-3 text-3xl font-bold xxs:w-[90%]  xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[80%] lg:w-[85%] lg:text-5xl ">
//             B. Voc. (Tourism & Hospitality Management)
//           </div>
//           <div className="mt-14 grid grid-cols-1 gap-4 text-white sm:px-10  md:px-0 lg:grid-cols-3 lg:gap-9">
//             <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
//               Duration: 10+2 (Any Stream)
//             </div>
//             <div className="secondary-bg-color  h-16 items-center rounded-md p-4 text-center text-lg">
//               Eligibility: 3 years (6 Semesters)
//             </div>
//             <div className="secondary-bg-color  h-16 rounded-md p-4 text-center text-lg">
//               No. of Seats 30
//             </div>
//           </div>
//           <div className=" mt-6">
//             <div className="text-2xl font-semibold text-[#003857]">
//               Affiliated to IKG PTU, Jalandhar & Approved by AICTE and UGC
//               Approved
//             </div>
//             <div className="mt-6 break-words text-justify text-lg tracking-wider">
//               <span className=" font-semibold">
//                 PSO1: <br />
//               </span>
//               <span className="font-semibold">Basic knowledge : </span> To
//               inculcate knowledge in students with experiential learning and
//               prepare the for advance study and life long learning.
//             </div>
//             <div className="mt-6 break-words text-justify text-lg tracking-wider">
//               <span className=" font-semibold">
//                 PSO2: <br />
//               </span>
//               <span className="font-semibold">Practice : </span> Graduate will
//               be able to perform various tasks, duties and other activities in
//               the operation of the hotels, restaurants, in accordance with the
//               Standard Operating Procedures.
//             </div>
//             <div className="mt-6 break-words text-justify text-lg tracking-wider">
//               <span className=" font-semibold">
//                 PSO3: <br />
//               </span>
//               <span className="font-semibold">Experiments :</span>
//               Graduate will have the ability to analyse the situation or
//               identifies problems, and be able to formulate a suitable solution
//               & implement the same in Food & Beverage Service and accommodation
//               operations.
//             </div>
//             <div className="mt-6 break-words text-justify text-lg tracking-wider">
//               <span className=" font-semibold">
//                 PSO4: <br />
//               </span>
//               <span className="font-semibold">Team work: </span> Graduate will
//               be able to demonstrate the ability to develop, examine, question,
//               and explore perspectives or alternatives to problems in
//               hospitality operations.
//             </div>
//             <div className="mt-6 break-words text-justify text-lg tracking-wider">
//               <span className=" font-semibold">
//                 PSO5: <br />
//               </span>
//               <span className="font-semibold">Communication: </span>
//               Graduate will be able to use professional written and oral
//               communication skills to communicate effectively.
//             </div>
//             <div className="mt-6 break-words text-justify text-lg tracking-wider">
//               <span className=" font-semibold">
//                 PSO6: <br />
//               </span>
//               <span className="font-semibold">Skills enrichment : </span>
//               Graduate will be able to pursue entrepreneurial endeavors.
//             </div>

//             <div className="">
//               <div className="mt-8 text-2xl font-semibold text-[#003857]">
//                 Course Rationale
//               </div>
//               <div className=" mt-1 break-words text-justify text-lg tracking-wider">
//                 Bachelor in Vocational (Tourism & Hospitality Management)
//                 programme is projected to make candidate acquire the knowledge
//                 required in Tourism division .This course covers both practical
//                 and theoretical aspects of managing the operations of Hotels and
//                 Airlines. This curriculum benefits the aspirant to learn the
//                 overall handiness required in the Hospitality sector.
//               </div>
//             </div>
//             <div className="">
//               <div className="mt-8 text-2xl font-semibold text-[#003857]">
//                 CAREER OPPORTUNITIES
//               </div>
//               <div className="mt-1 break-words text-lg tracking-wider">
//                 Students undergo On Job training during each semester to keep
//                 themselves modernised with the recent trends in Travel and
//                 Tourism .
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:px-[4rem] ">
//           <div className="bannerBotttom  py-4 text-white ">
//             {designation?.map((item) => (
//               <div className="text-center" key={item?.id}>
//                 <div className="text-2xl font-bold ">{item?.heading1}</div>
//                 <p className="mt-6">{item?.carreer1}</p>
//               </div>
//             ))}
//           </div>
//           <div className="bannerBotttom  py-4 text-white ">
//             {designation?.map((item) => (
//               <div className="text-center" key={item?.id}>
//                 <div className="text-2xl font-bold ">{item?.heading2}</div>
//                 <p className="mt-6">{item?.carreer2}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
