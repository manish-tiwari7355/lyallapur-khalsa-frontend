import React from "react";
import HeaderBanner from "../../../components/HeaderBanner";

// import AffiliationCards from "@/pages/MandatoryDisclosure/AffiliationOrder/AffiliationCards";
import AffiliationCards from "../AffiliationOrder/AffiliationCards";

// import AffiliationCard from '../../../assets/pdf/LKCTC-2022-23.PDF'
const Approval = () => {
  const arr = [
    {
      id: 1,
      docName: "LKCTC-2022-23.PDF",
      name: "LKCTC EOA 2022-23",
      url: "../../../assets/pdf/LKCTC-2022-23.PDF",
    },
    {
      id: 2,
      docName: "LKCE-2019-20.pdf",
      name: "LKCTC EOA 2021-22",
    },
    {
      id: 3,
      docName: "LKCTC-2020-21.pdf",
      name: "LKCTC EOA 2020-21",
    },
    {
      id: 4,
      docName: "KCLIMT-2019-20.pdf",
      name: "KCL-IMT EOA 2019-20",
    },
    {
      id: 5,
      docName: "LKCTC-2021-22.pdf",
      name: "KCL-IMT EOA 2018-19",
    },
    {
      id: 6,
      docName: "KCLIMT-2017-18.pdf",
      name: "KCL-IMT EOA 2017-18",
    },
    {
      id: 7,
      docName: "KCLIMT-2016-17.pdf",
      name: "KCL-IMT EOA 2016-17",
    },
    {
      id: 8,
      docName: "KCLIMT-2015-16.pdf",
      name: "KCL-IMT EOA 2015-16",
    },
    {
      id: 9,
      docName: "LKCE-2016-17.pdf",
      name: "LKCE EOA 2019-20",
    },
    {
      id: 10,
      docName: "LKCE-2015-16.pdf",
      name: "LKCE EOA 2018-19",
    },
    {
      id: 11,
      docName: "LKCE-2016-17.pdf",
      name: "LKCE EOA 2017-18",
    },
    {
      id: 12,
      docName: "LKCE-2017-18.pdf",
      name: "LKCE EOA 2016-17",
    },
    {
      id: 13,
      docName: "LKCTC-2022-23.PDF",
      name: "LKCE EOA 2015-16",
    },
  ];

  // ---------Next Array------------

  const order = [
    {
      id: 14,
      docName: "LKCTC-2022-23.PDF",
      name: "AO 2021-2022 LKCTC",
    },
    {
      id: 15,
      docName: "LKCTC-2022-23.PDF",
      name: "AO 2020-2021 LKCTC",
    },
    {
      id: 16,
      docName: "",
      name: "AO 2019-2020 LKCE",
    },
    {
      id: 17,
      docName: "",
      name: "AO 2019-2020 KCL-IMT",
    },
    {
      id: 18,
      docName: "",
      name: "AO 2018-2019 LKCE",
    },
    {
      id: 19,
      docName: "",
      name: "AO 2018-2019 KCL-IMT",
    },
    {
      id: 20,
      docName: "",
      name: "AO 2017-2018 LKCE",
    },
    {
      id: 21,
      docName: "",
      name: "AO 2017-2018 KCL-IMT",
    },
    {
      id: 22,
      docName: "",
      name: "AO 2016-2017 LKCE",
    },
    {
      id: 23,
      docName: "",
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
        <div className="py-16">
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

export default Approval;
