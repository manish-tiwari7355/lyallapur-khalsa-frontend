import React from "react";

const UpcomingCard = ({ values }) => {
  const {
    date,
    heading,
    eligibility,
    designation,
    location,
    lastDate,
    onlineAssessment,
    Package,
    image,
  } = values;
  return (
    <div className="p-2 ">
      <div className="flex flex-col-reverse border border-gray-300 bg-[#f7f9ff] py-4 px-4 lg:px-8 lg:flex-row lg:gap-6  ">
        <div className="pl-5 lg:w-3/4">
          <div className="text-lg font-bold text-[#32727a]">{date}</div>
          <div>
            <div className="primary-color mt-2 text-2xl font-bold uppercase">
              {heading}
            </div>
            {/* <p className="text-md lg:mt-2">
              &quot;Lyallpur Khalsa College Technical Campus&rdquo;, Jalandhar,
              Recruitment drive by &quot;LG Software&quot;for batch 2022.
            </p> */}
            <p className="text-md lg:mt-2">
              <span className="font-bold lg:mt-2">Eligibility - </span>
              {eligibility}
            </p>
            <p className="text-md lg:mt-2">
              <span className="font-bold lg:mt-2">Designation - </span>
              <span
                className=""
                dangerouslySetInnerHTML={{
                  __html: designation?.replace(/\n/g, "<br />"),
                }}
              />
            </p>
            <p className="text-md lg:mt-2">
              <span className="font-bold lg:mt-2">
                {location ? "Location - " : ""}
              </span>
              {location}
            </p>
            <p className="text-md lg:mt-2">
              <span className="font-bold lg:mt-2">
                {lastDate ? "Registration Last Date -" : ""}
              </span>
              {lastDate}
            </p>
            <p className="text-md lg:mt-2">
              <span className="mt-2 font-bold lg:mt-2">
                {onlineAssessment ? "Online Assessment -" : ""}
              </span>
              {onlineAssessment}
            </p>
            <p className="text-md lg:mt-2">
              <span className=" font-bold">Package - </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: Package?.replace(/\n/g, "<br />"),
                }}
              />
            </p>
          </div>
        </div>
        <div className="lg:w-1/4 flex justify-center">
          {/* <div className="flex justify-center h-52 w-52 rounded-full bg-white"> */}
          <div className="h-38 w-38 relative mt-10 lg:pt-8">
            <img src={image} alt="gkj" />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
