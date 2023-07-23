import React from "react";

import Merit from "./Merit";
const AcademicsAchievement = () => {
  return (
    <div>
      <div className="justify-center pb-24 text-3xl font-bold">
        <h1 className=" ml-4 border-l-2 border-[#32727A] pl-4 text-[#081C3A]">
          Academic
        </h1>
        <h1 className="pl-8 text-[#32727A]"> Achievements</h1>
      </div>
      <div className="mx-4 border bg-white shadow-lg ">
        {" "}
        <Merit />
      </div>
    </div>
  );
};

export default AcademicsAchievement;
