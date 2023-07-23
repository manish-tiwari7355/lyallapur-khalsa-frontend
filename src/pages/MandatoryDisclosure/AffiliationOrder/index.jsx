import React from "react";
import HeaderBanner from "../../../components/HeaderBanner";

import pdf1 from "../../../assets/pdf/LKCTC-2022-23.PDF";
import pdf2 from "../../../assets/pdf/LKCTC-2021-22.pdf";
import pdf3 from "../../../assets/pdf/LKCTC-2020-21.pdf";
import pdf4 from "../../../assets/pdf/2019-2020-KCLIMT.pdf";
import pdf5 from "../../../assets/pdf/2018-19-EOA.pdf";
import pdf6 from "../../../assets/pdf/2017-2018-KCLIMT.pdf";
import pdf7 from "../../../assets/pdf/2016-2017-KCLIMT.pdf";
// import pdf8 from "../../../assets/pdf/KCLIMT-2015-16.pdf";
import pdf9 from "../../../assets/pdf/EOA 2019-20-EOA.pdf";
import pdf10 from "../../../assets/pdf/2018-2019-LKCE.pdf";
import pdf11 from "../../../assets/pdf/2017-2018-LKCE.pdf";
import pdf12 from "../../../assets/pdf/2016-17-EOA-LKCE.pdf";
import pdf13 from "../../../assets/pdf/AO22-2023.pdf";

import pdf14 from "../../../assets/pdf/AO-2021-2022-LKCTC.pdf";
import pdf15 from "../../../assets/pdf/2020-2021-LKCTC.pdf";
import pdf16 from "../../../assets/pdf/2019-2020-LKCE.pdf";
import pdf17 from "../../../assets/pdf/2019-2020-KCLIMT.pdf";
import pdf18 from "../../../assets/pdf/2018-2019-LKCE.pdf";
import pdf19 from "../../../assets/pdf/2017-2018-KCLIMT.pdf";
import pdf20 from "../../../assets/pdf/2017-2018-LKCE.pdf";
import pdf21 from "../../../assets/pdf/2017-2018-KCLIMT.pdf";

import pdf23 from "../../../assets/pdf/2016-2017-KCLIMT.pdf";

import AffiliationCards from "./AffiliationCards";

const AffiltiationOrder = () => {
  document.title = "AICTE EOA and AO";
  const arr = [
    {
      id: 1,
      docName: pdf1,
      name: "LKCTC EOA 2022-23",
    },
    
    {
      id: 2,
      docName: pdf2,
      name: "LKCTC EOA 2021-22",
    },
    {
      id: 3,
      docName: pdf3,
      name: "LKCTC EOA 2020-21",
    },
    {
      id: 9,
      docName: pdf9,
      name: "LKCE EOA 2019-20",
    },
    {
      id: 4,
      docName: pdf4,
      name: "KCL-IMT EOA 2019-20",
    },
    {
      id: 10,
      docName: pdf10,
      name: "LKCE EOA 2018-19",
    },
    {
      id: 5,
      docName: pdf5,
      name: "KCL-IMT EOA 2018-19",
    },
     
    {
      id: 11,
      docName: pdf11,
      name: "LKCE EOA 2017-18",
    },
     
    {
      id: 6,
      docName: pdf6,
      name: "KCL-IMT EOA 2017-18",
    },
     
    {
      id: 12,
      docName: pdf12,
      name: "LKCE EOA 2016-17",
    },
    
    {
      id: 7,
      docName: pdf7,
      name: "KCL-IMT EOA 2016-17",
    },
  
  
   
   
    // {
    //   id: 8,
    //   docName: pdf8,
    //   name: "KCL-IMT EOA 2015-16",
    // },
   
  
    
  ];

  // ---------Next Array------------

  const order = [
    {
      id: 13,
      docName: pdf13,
      name: "AO 2022-2023 LKCTC",
    },
    {
      id: 14,
      docName: pdf14,
      name: "AO 2021-2022 LKCTC",
    },
    {
      id: 15,
      docName: pdf15,
      name: "AO 2020-2021 LKCTC",
    },
    {
      id: 16,
      docName: pdf16,
      name: "AO 2019-2020 LKCE",
    },
    {
      id: 17,
      docName: pdf17,
      name: "AO 2019-2020 KCL-IMT",
    },
    {
      id: 18,
      docName: pdf18,
      name: "AO 2018-2019 LKCE",
    },
    {
      id: 19,
      docName: pdf19,
      name: "AO 2018-2019 KCL-IMT",
    },
    {
      id: 20,
      docName: pdf20,
      name: "AO 2017-2018 LKCE",
    },
    {
      id: 21,
      docName: pdf21,
      name: "AO 2017-2018 KCL-IMT",
    },
   
    {
      id: 23,
      docName: pdf23,
      name: "AO 2016-2017 KCL-IMT",
    },
  ];
  return (
    <div>
      <div className="">
        <HeaderBanner
          title="AICTE EOA and AO"
          bgImage="affiliationOrder"
          currentPage="AICTE EOA and AO"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="p-6 lg:mx-[2rem] xl:mx-[20rem] ">
        <div>
          <div className="primary-color text-center text-3xl font-bold lg:text-5xl">
            AICTE EOA
            <span className=" pb-6 text-3xl text-[#32727a] lg:text-5xl">
              {" "}
              and AO
            </span>
          </div>
          <div className=" mt-3 pb-6 text-center text-[32px] font-semibold text-[#081C3A] lg:text-3xl">
            -AICTE Extension of approval (EOA)
          </div>
          <div className="md:mx-auto md:flex md:flex-wrap md:justify-center md:gap-4 lg:gap-6">
            {arr?.map((item) => (
              <div className="" key={item.id}>
                <AffiliationCards item={item} />
              </div>
            ))}
          </div>
        </div>
        <div
        id="  affiliation-order" className="py-16">
          <h1 className=" pt-16 pb-6 text-center text-3xl font-semibold text-[#081C3A]">
            Affiliation Order (AO)
          </h1>
          <div className="md:mx-auto md:flex md:flex-wrap md:justify-center md:gap-4 lg:gap-6">
            {order?.map((items) => (
              <div className="" key={items.id}>
                <AffiliationCards item={items} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiltiationOrder;
