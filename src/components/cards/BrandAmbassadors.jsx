import React from "react";

const DepartmentCard = ({
  Name,
  Designation,
  Company,
  Mail,
  Phone,
  imagePath,
}) => {
  return (
    <div className="">
      <div className="flex w-full justify-center">
        <div className="flex justify-center z-10 h-[160px] w-[150px]  rounded-lg  ">
          <img
            src={imagePath}
            alt={imagePath}
            width={200}
            height={200}
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
      <div className="relative items-center justify-center text-white ">
        <div className="mb-[10px] mt-[50px] flex justify-center text-xl font-bold">
          {Name}
        </div>
        <div className="mb-[10px] flex justify-center text-sm">
          {Designation}
        </div>
        <div className="mb-[10px] flex justify-center text-sm">{Company}</div>
        {/* <div className="mb-[10px] flex justify-center text-sm">{Mail}</div> */}
        {/* <div className="flex justify-center pb-9 text-sm">{Phone}</div> */}
      </div>
    </div>
  );
};

export default DepartmentCard;
