import React from "react";

import HeaderBanner from "../../../components/HeaderBanner";
import schoolofeng from "../../../assets/images/schoolofeng.jpg";
import schoolofhm from "../../../assets/images/schoolofhm.jpg";

const AdmissionForm = () => {
  document.title = "Courses Offered";
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="bannerImg"
          title="Courses Offered"
          currentPage="Courses Offered"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="">
        <div className="md:px-0"></div>
      </div>
      {/* <div className=" primary-color mt-16 ml-3 mb-9 border-l-2 border-[#32727a] pl-2 text-3xl font-bold md:text-5xl xl:ml-[5.75rem] 2xl:ml-[19rem]">
        Courses<span className="secondary-color"> Offered</span>
      </div> */}
      {/* <div
        className="mx-auto mt-5 flex justify-center border border-red-500 w-full md:w-2/3 h-[50rem]"
        style={{
          backgroundImage: `url(${AdmissionTab})`,
            width: "100%",
            height: "400px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
      >
        <div className=" relative h-10 bg-blue-500 top-[10%] z-50 left-0 ">
          click
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row gap-4 justify-center lg:mt-10">
        <div className="px-2 mt-4  md:mb-10">
          <div className="w-full md:h-full">
            <img src={schoolofeng} alt="img" className="w-full h-full" />
          </div>
          <div className="mt-5 justify-center flex">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScCEWfZ0a0KlfcLL0LGSbjKq9BFN6CDAWaqReIqzhWQv830lQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1485C8] p-3 rounded-md text-white font-semibold"
            >
              CLICK HERE TO REGISTER
            </a>
          </div>
        </div>
        <div className="px-2 mt-4  md:mb-10">
          <div className="w-full md:h-full">
            <img src={schoolofhm} alt="img2" className="w-full h-full" />
          </div>
          <div className="mt-5 justify-center flex">
            <a
              href="https://forms.gle/C1emHBjrndjniyxR8"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1485C8] p-3 rounded-md text-white font-semibold"
            >
              CLICK HERE TO REGISTER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
