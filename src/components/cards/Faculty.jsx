import React from "react";

// import dotedImg from "../../assets/images/62b55f32e3bd0513cebb0044_dot-pattern-1-2.png";
const FacultyCard = ({ newClass, Role, Fletter, Name }) => {
  return (
    <div
      className={`${
        newClass ? newClass : " relative mx-auto mt-8 w-72 py-4 px-2 "
      }`}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        overflow: "hidden",
      }}
    >
      <div className="dotedIm">
        <div className="flex">
          <div className="secondary-bg-color w-12 rounded-full text-center  text-[32px] font-bold text-white">
            {Fletter}
          </div>
          <div className="primary-color mt-4 ml-2 font-semibold">{Name}</div>
        </div>
        <div className="mt-1 text-lg text-[#5b6c88] ">{Role}</div>
      </div>
      {/* <div className="absolute top-0 right-0 opacity-25">
        <img src={dotedImg} alt="img" height="100" width="100" />
      </div> */}
    </div>
  );
};
export default FacultyCard;
