import React from "react";
import { Link } from "react-router-dom";
const HeaderBanner = ({ title, currentPage, bgImage }) => {
  return (
    <div className="">
      <div>
        <div className={`${bgImage} h-[24rem] md:h-[30rem] w-full`}>
          <div className=" max-w-[1300px] md:mx-1 flex flex-col px-[20px] xxs:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[120px] 2xl:px-[240px] text-white absolute top-[30%] md:top-[44%] xl:top-[38%]">
            <div className="flex mb-[10px] text-[30px] md:text-[45px] lg:text-[50px] leading-[38px] items-center font-bold ">
              {title}
            </div>
            <div className="flex text-[14px] md:text-[18px] font-semibold">
              <Link to="/">Home&nbsp;</Link> &gt;&gt; {currentPage}
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------- */}
    </div>
  );
};
export default HeaderBanner;
