// import Image from 'next/image';
import React from "react";

export function TestimonialCard1({
  imagePath,
  reference,
  referenceName,
  department,
}) {
  return (
    <div>
      <div className="flex flex-col items-center px-4 xs:flex-row xs:justify-end xs:pt-40 xs:pb-10 lg:justify-center">
        <div className="z-10 my-7 flex h-[160px] w-[144px] bg-white xs:absolute xs:top-14 xs:left-[11%] xs:h-[200px] xs:rounded-md xs:py-4 xs:px-4 xs:shadow-[-2px_-2px_10px_0_rgba(216,216,216,1)] lg:left-[16%] lg:h-[200px] lg:w-[180px]">
          <img
            src={imagePath}
            alt="img.png"
            width={200}
            height={300}
            style={{ borderRadius: "100px" }}
          />
        </div>
        <div className="alumniImg flex max-h-72 xs:max-h-80 flex-col overflow-scroll rounded-tr-[10px] p-5 text-center italic text-white xs:w-[80%] xs:rounded-[10px] xs:pt-12 xs:pb-12 xs:pl-24 xs:text-lg md:text-start lg:relative lg:-right-16 lg:w-[60%] lg:overflow-auto">
          {reference}
          <p className="pt-2 text-start font-bold ">{referenceName}</p>
          <p className=" text-start font-semibold ">{department}</p>
        </div>
      </div>
    </div>
  );
}

export const TestimonialCard2 = ({ imagePath1, imagePath2 }) => {
  return (
    <div>
      <div className="flex h-[90vh] max-w-md flex-col items-center px-4 pt-[40px] pb-11 lg:h-[46vh] lg:max-w-5xl lg:flex-row">
        <div className="mb-10 w-[100%] pl-[28px] lg:mr-20">
          <div className=" relative mb-[20px] xxs:h-[300px] xxs:w-[100%] flex h-[260px] w-[100%]">
            <img
              src={imagePath1}
              alt="img.png"
              // layout='fill'
              width={500}
              height={400}
              // objectFit="fill"
              style={{
                borderTopLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            />
            <div className="absolute left-[-6%] top-[5%] -z-10 h-[260px] w-[260px] xxs:h-[300px] xxs:w-[100%] rounded-tl-[20px] rounded-br-[20px] bg-[#306d77]"></div>
          </div>
        </div>
        <div className="mb-10 w-[100%] pl-[28px]">
          <div className="relative mb-[20px] xxs:h-[300px] xxs:w-[100%] flex h-[260px] w-[100%]">
            <img
              src={imagePath2}
              alt="img.png"
              // layout='fill'
              width={500}
              height={400}
              style={{
                borderTopLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            />
            <div className="absolute left-[-6%] top-[5%] -z-10 h-[260px] w-[260px] xxs:h-[300px] xxs:w-[100%] rounded-tl-[20px] rounded-br-[20px] bg-[#306d77]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
