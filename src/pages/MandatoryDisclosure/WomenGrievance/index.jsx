import React from "react";
import HeaderBanner from "../../../components/HeaderBanner";

const index = () => {
  document.title = "SGRC";
  return (
    <div>
      <div className="">
        <HeaderBanner
          title="AICTE EOA and AO"
          bgImage="CarrierBanner"
          currentPage="AICTE EOA and AO"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="px-6 max-w-[1400px] mx-auto">
        <div className="">
          <div className=" primary-color mt-16 ml-3 mb-9 border-l-2 border-[#32727a] pl-2 text-3xl font-bold md:text-5xl ">
            Women Grievance, Sexual
            <span className="secondary-color">
              {" "}
              Harassment & Grievance Cell
            </span>
          </div>
          <p className="p-3 text-justify tracking-wider text-gray-500">
            The committees have been constituted to consider complaints related
            to any discrimination/harassment of female students & staff, to
            sustain the dignity of women and handling other grievances in
            accordance to the guidelines issued by UGC/AICTE.
          </p>
          <p className=" p-3 py-8 text-xl font-semibold text-[#081C3A]">
            Following are the members of these committee:
          </p>
        </div>
        <div>
          <p className=" p-3 text-[25px] font-bold text-[#081C3A]">
            Internal Complaints Committee
          </p>
          <ul className="ml-3 list-[disc] text-xl">
            <li>Dr. Rajan Dhir (Coordinator)</li>
            <li>Mr. Vikas Verma</li>
            <li>Dr. Sonu Dua</li>
            <li>Mr. Rameshwer Singh</li>
            <li>Ms. Nidhi Chopra</li>
            <li>Ms.Jaskamal Kaur</li>
            <li>Er.Amandeep Sekhon</li>
          </ul>
        </div>
        <div className="py-20">
          <p className="   pb-8 text-[25px] font-bold text-[#081C3A]">
            Women Grievance Committee
          </p>
          <ul className=" ml-3 list-[disc]  text-xl">
            <li>Ms. Mangaldeep Urvashi (Coordinator)</li>
            <li>Dr. Parveen Kalsi</li>
            <li>Ms. Nidhi Chopra</li>
            <li>Ms. Ranjana Bahri</li>
            <li>Ms. Parul Nanda</li>
            <li>Ms. Jaskamal Kaur</li>
            <li>Er. Amandeep Sekhon</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
