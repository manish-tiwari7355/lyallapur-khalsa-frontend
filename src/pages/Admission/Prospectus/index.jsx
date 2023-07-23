import React from "react";
import BookImg from "../../../assets/images/open-book.png";
import Arrow from "../../../assets/images/fast-forward-1.png";
import HeaderBanner from "../../../components/HeaderBanner";
import pdf2022 from "../../../assets/pdf/Prospectus_2021-22.pdf";

const Arr = [
  { year: "LKCTC 2022-2023", pdf: "" },
  {
    year: "LKCE 2021 - 2022",
    pdf: pdf2022,
  },
  // { year: "LKCE 2020 - 2021" },
  // { year: "KCL-IMT 2020 - 2021" },
  // { year: "KCL-IMT 2019 - 2020 (Part - A)" },
  // { year: "KCL-IMT 2019 - 2020 (Part - B)" },
  // { year: "KCL-IMT 2018 - 2019" },
  // { year: "KCL-IMT 2017 - 2018 (Part - A)" },
  // { year: "KCL-IMT 2017 - 2018 (Part - B)" },
  // { year: "LKCE 2019 - 2020" },
  // { year: "LKCE 2018 - 2019" },
  // { year: "LKCE 2017 - 2018" },
];
const index = () => {
  document.title = "Prospectus";
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="AboutBanner"
          title="Prospectus"
          currentPage="Prospectus"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="flex justify-center">
        {" "}
        <h1 className="border-l-4 mt-16 border-[#32727A] pl-4 text-3xl text-center  font-bold text-[#081C3A] md:text-5xl">
          Prospectus
        </h1>
      </div>
      <div className="prospects grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 sm:px-5 lg:px-32 xl:grid xl:grid-cols-4 xl:px-10 2xl:px-[12rem] 3xl:px-[18rem] 4xl:px-[22rem]">
        {Arr.map((item, id) => (
          <div
            key={id}
            className="border-b-4  w-72 mx-auto cursor-pointer hover:scale-105 transition duration-600 border-b-sky-600 py-6 rounded-2xl md:w-56 xl:w-72 "
          >
            <div className="flex justify-center">
              <img src={BookImg} alt="" className="h-[64px] w-auto" />
            </div>
            {/* <Link to={item?.pdf}> */}
            <a href={item?.pdf}>
              <div className="flex pb-8 justify-center">
                <p className="text-lg font-bold pt-4 text-gray-700">
                  {item.year}
                </p>
                <img src={Arrow} alt="" width="20" className="" />
              </div>
              {/* </Link> */}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
