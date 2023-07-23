// import Image from 'next/image';
import React from "react";
// import Placement from "../../pages/Placements/PlacementCell";

const PlacementsCards = ({ avatar, name, qualification, head }) => {
  return (
    <div className=" shadow-xl  sm:w-[100%]">
      <div className="relative mx-auto rounded-lg shadow-lg ">
        {/* <div className='h-[100px] rounded-t-lg '></div> */}
        <div className="flex h-56 items-center justify-center border-red-400">
          {/* <div className="absolute border border-blue-500 top-[-65%] w-[400px] bg-[#081c3a] h-[345px] rounded-[50%] overflow-hidden -z-50"></div> */}
          <div
            className="flex justify-center"
            style={{
              borderRadius: "100px",
              // border: '5px solid white',
              overflow: "hidden",
            }}
          >
            <img
              src={avatar}
              alt=""
              height="100px"
              width="100px"
              className="rounded-full "
            />
          </div>
        </div>
        <div className=" text-center z-50">
          <div className=" pb-2">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className=" text-xs ">{qualification}</p>
            <h1 className="text-red-600 font-bold  text-1xl ">{head}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlacementsCards;
