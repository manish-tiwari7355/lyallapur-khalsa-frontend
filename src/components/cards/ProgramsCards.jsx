import React from "react";
import { Link } from "react-router-dom";

import Button from "../buttons/Button";

const ProgramsCards = ({ item }) => {
  return (
    <div className="">
      <div className={`${item?.bottomPad|| `pb-20` } mx-auto shadow-md flex flex-col h-full px-2 w-[300px]`}>
        <div className="h-[260px] w-[260px] mx-auto">
          <img src={item.image} alt="" className="saturate-150 w-full" />
        </div>
        <div className="mx-3 xl:mx-10">
          <div className="primary-color mt-4 w-56  text-lg font-bold h-[50px]">
            {item.title}
          </div>
          <div className={`${item?.style || `mt-3`} text-justify text-sm leading-5 text-[#696969] h-[180px]`}>
            {item.description}
          </div>
          <Link
            to={item?.readMore}
            onClick={() => {
              window.scroll(0, 0);
            }}
            className="ml-8"
          >
            <Button btn="READ MORE" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramsCards;
