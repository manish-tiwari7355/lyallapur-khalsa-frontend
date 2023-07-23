import React from "react";
// import issue1 from './KKK.pdf';

const AffiliationCards = ({ item }) => {
  return (
    <div className="mt-4 flex justify-center">
      <div className="primary-bg-color h-max w-[200px] p-2 lg:w-[280px] xl:w-[360px] ">
        <div className="  border border-dashed border-white py-6  text-white ">
          <div className="mx-[10px] text-center text-xl font-bold text-white">
            {item?.name}
          </div>
          <div className="mt-2 flex  justify-center   ">
            <a
              className=" rounded-md bg-[#32727a]  px-6 py-1 text-xl"
              href={item?.docName}
              target="_blank"
              // download='pdf'
              rel="noreferrer"
            >
              {" "}
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliationCards;
