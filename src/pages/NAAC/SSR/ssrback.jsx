import React from "react";
//import React, { Component } from 'react';  
// import ReactTable from "react-table";
import { FaLink } from "@react-icons/all-files/fa/FaLink";
//import Gallery2 from "../../../assets/PDF/tutorial";
import HeaderBanner from "../../../components/HeaderBanner";
//import officeCircular from "../../assets/pdf/office-circular.pdf";
 import HeaderBanner1 from "../../../assets/pdf/tutorial.pdf";

const SSR = () => {
  document.title = "SSR";
 const serviceData = [
    {
      name: "Notice",
      // link: notice,
    },
    {
      name: "Office Circular",
      // link: officeCircular,
    },
  ];
  return (
    // <ScrollToHeading offset={140}>
    <div className="">
      <div className="">
        <HeaderBanner
          bgImage="AboutBanner"
          title="SSR"
          currentPage="FIRST PAGE"
        />
         <table width="700px" align="center" border={1} id="table-alt">
        <tbody><tr bgcolor="cornflowerblue">
            <td><div align="center"><strong><font color="white">Criteria Number</font></strong></div></td>
            <td><div align="center"><strong><font color="white"><span style={{fontSize: '16px'}}>Criteria Name</span></font></strong></div></td>
            <td><div align="center"><strong><font color="white">Link to Download&nbsp;&nbsp;<img src="images/2.gif" width={25} height={25} /></font></strong></div></td>
          </tr>
          <tr><td><div align="center">1.1</div></td> <td align="center" valign="middle"><font color="blue"><b>Curriculum Planning and Implementation</b></font></td><td>&nbsp;</td></tr>
          <tr><td><div align="center">1.1.1</div></td> <td align="left" valign="middle">Institution has the mechanism for well planned curriculum delivery and documentation</td><td><a href="C1/C1_1_1.pdf" target="_blank&quot;">Click Here</a></td></tr>
          <tr><td><div align="center">1.1.2</div></td> <td align="left" valign="middle">The institution adheres to the Academic calendar including for the conduct of CIE</td><td><a href="C1/C1_1_2.pdf" target="_blank&quot;">Click Here</a></td></tr>
          <tr><td><div align="center">1.1.3</div></td> <td align="left" valign="middle">Teachers of the Institution participate in following activities related to curriculum development and assessment of the affiliating University and/are represented on the following academic bodies during the last five years </td><td><a href="C1/C1_1_3.pdf" target="_blank&quot;">Click Here</a></td></tr>
          <tr><td><div align="center">1.2</div></td> <td align="center" valign="middle"><font color="blue"><b>Academic Flexibility</b></font></td><td /></tr>
          <tr><td><div align="center">1.2.1</div></td> <td align="left" valign="middle">Percentage of Programmes in which Choice Based Credit System (CBCS)/ elective course system has been implemented </td><td /></tr>
          <tr><td><div align="center">1.2.1.1</div></td> <td align="left" valign="middle">Number of Programmes in which CBCS/ Elective course system implemented</td><td><a href="C1/C1_2_1_1.pdf" target="_blank&quot;">Click Here</a></td></tr>
          <tr><td><div align="center">1.2.2</div></td> <td align="left" valign="middle">Number of Add on /Certificate programs offered during the last five years</td><td>&nbsp;</td></tr>
          <tr><td><div align="center">1.2.2.1</div></td> <td align="left" valign="middle">How many Add on /Certificate programs are added within the last 5 years</td><td><a href="C1/C1_2_2_1.pdf" target="_blank">Click Here</a></td></tr>
          <tr><td><div align="center">1.2.3</div></td> <td align="left" valign="middle">Average percentage of students enrolled in Add-on/Certificate programs as against the total number of students during the last five years </td><td>&nbsp;</td></tr>
          <tr><td><div align="center">1.2.3.1</div></td> <td align="left" valign="middle">Number of students enrolled in subject related Certificate or Add-on programs year wise during last five years</td><td><a href="C1/C1_2_3_1.pdf" target="_blank">Click Here</a></td></tr>
          <tr><td><div align="center">1.3</div></td> <td align="center" valign="middle"><font color="blue"><b>Curriculum Enrichment</b></font></td><td>&nbsp;</td></tr>
          <tr><td><div align="center">1.3.1</div></td> <td align="left" valign="middle">Institution integrates crosscutting issues relevant to Professional  Ethics,  Gender, Human Values, Environment and Sustainability into the Curriculum</td><td><a href="C1/C1_3_1.pdf" target="_blank">Click Here</a></td></tr>
          <tr><td><div align="center">1.3.2</div></td> <td align="left" valign="middle">Average percentage of courses that include experiential learning through project work/field work/internship during last five years </td><td>&nbsp;</td></tr>
          <tr><td><div align="center">1.3.2.1</div></td> <td align="left" valign="middle">Number of courses that include experiential learning through project work/field work/internship year wise durin4g last five years</td><td><a href="C1/C1_3_2_1.pdf" target="_blank">Click Here</a></td></tr>
          <tr><td><div align="center">&nbsp;</div></td> <td align="left" valign="middle">i) Programme / Curriculum/ Syllabus of the courses</td><td><a href="C1/C1_3_2_1_i.pdf" target="_blank">Click Here</a></td></tr>
          <tr><td><div align="center">1.3.3</div></td> <td align="left" valign="middle">Percentage of  students undertaking project work/field work / internship</td><td>&nbsp;</td></tr>
          <tr><td><div align="center">1.3.3.1</div></td> <td align="left" valign="middle">Number of students undertaking project work/field work / internships</td><td><a href="C1/C1_3_3_1.pdf" target="_blank">Click Here</a></td></tr>
          <tr><td><div align="center">1.4</div></td> <td align="center" valign="middle"><font color="blue"><b>Feedback System</b></font></td><td>&nbsp;</td></tr>
          <tr><td><div align="center">1.4.1</div></td> <td align="left" valign="middle">Institution obtains  feedback on the syllabus and its transaction at the institution from the following  stakeholders</td><td><a href="C1/C1_4_1.pdf" target="_blank">Click Here</a></td></tr>
          <tr><td><div align="center">1.4.2</div></td> <td align="left" valign="middle">Feedback process of the Institution</td><td><a href="C1/C1_4_2.pdf" target="_blank">Click Here</a></td></tr>
        </tbody></table>
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="mt-20 flex justify-center pb-10 text-3xl font-bold md:text-5xl">
        <h1 className=" border-l-2 border-[#32727A] pl-4 text-[#081C3A]">
          Criterion I (SSR CLICK HERE )<span className="pl-1 text-[#32727A]"></span>
        </h1>
      </div>
      <div className="max-w-[1300px] mx-auto">
        <div className="primary-bg-color p-3 rounded-lg text-white text-xl font-semibold hover:bg-[#32727a] cursor-pointer m-2 mb-5">
          + Links
          <a href={HeaderBanner1} target="_blank" rel="noreferrer">LINK1</a>
        </div>
        <ul className="list-disc ml-12 text-lg">
          {serviceData?.map((value) => (
            <li key={value} className="py-2 hover:text-[#32727a] font-semibold">
              <a href={value?.link} target="_blank" rel="noreferrer">
                <span className="flex">
                  {value?.name}
                  <FaLink className="item-center flex mt-1 ml-2" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    // </ScrollToHeading>
  );
};
export default SSR;
