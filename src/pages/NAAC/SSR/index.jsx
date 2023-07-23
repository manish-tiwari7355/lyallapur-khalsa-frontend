import React from "react";
//import React, { Component } from 'react';  
// import ReactTable from "react-table";np
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
  
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="mt-20 flex justify-center pb-10 text-3xl font-bold md:text-5xl">
        <h1 className=" border-l-2 border-[#32727A] pl-4 text-[#081C3A]">
          Criterion I (SSR CLICK HERE )<span className="pl-1 text-[#32727A]"></span>
        </h1>
        
      </div>
      <div className="criterion-table">
      <table width="1000px" align="center" border={2} id="table-alt">
        <tbody><tr bgcolor="cornflowerblue">
            <td><div align="center"><strong><font color="white">Criteria Number</font></strong></div></td>
            <td><div align="center"><strong><font color="white"><span style={{fontSize: '16px'}}>Criteria Name</span></font></strong></div></td>
            <td><div align="center"><strong><font color="white">Link to Download&nbsp;&nbsp;<img src="images/2.gif" width={25} height={25} /></font></strong></div></td>
          </tr>
          <tr bgcolor="cornflowerblue">
            <td><div align="center"><strong><font color="white"></font></strong></div></td>
            <td><div align="center"><strong><font color="white"><span style={{fontSize: '16px'}}>Criterion 1 – Curricular Aspects</span></font></strong></div></td>
            <td><div align="center"><strong><font color="white"></font></strong></div></td>
          </tr>
          <tr><td><div align="center">1.1</div></td> <td align="center" valign="middle"><font color="blue"><b>Curricular Planning and Implementation
</b></font></td><td>&nbsp;</td></tr>

          
          <tr><td><div align="center">1.1.1</div></td> <td align="left" valign="middle">The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment. </td><td><a href="https://www.scholastic.com/hpread/HP_Book1_Chapter_Excerpt.pdf" target="_blank&quot;">Click Here</a></td></tr>
         
          <tr><td><div align="center">1.2</div></td> <td align="center" valign="middle"><font color="blue"><b>Academic Flexibility</b></font></td><td /></tr>
          <tr><td><div align="center">1.2.1</div></td> <td align="left" valign="middle">Number of Add on /Certificate/Value added programs offered during the last five years </td><td /></tr>
          <tr><td><div align="center">1.2.2</div></td> <td align="left" valign="middle">Percentage of students enrolled in Certificate/ Add-on/Value added programs as against the total number of students during the last five years 
</td><td><a href="C1/C1_2_1_1.pdf" target="_blank&quot;">Click Here</a></td></tr>
          <tr><td><div align="center">1.3</div></td> <td align="center" valign="middle"><font color="blue"><b>Curriculum Enrichment (30)</b></font></td><td>&nbsp;</td></tr>
          <tr><td><div align="center">1.3.1</div></td> <td align="left" valign="middle">Institution integrates crosscutting issues relevant to Professional Ethics,  Gender, Human Values, Environment and Sustainability into the Curriculum</td><td><a href="C1/C1_3_1.pdf" target="_blank">Click Here</a></td></tr>
          <tr><td><div align="center">1.3.2</div></td> <td align="left" valign="middle">Percentage of students undertaking project work/field work/ internships (Data for the latest completed academic year) </td><td>&nbsp;</td></tr>
          <tr><td><div align="center">&nbsp;</div></td> <td align="left" valign="middle">i) Programme / Curriculum/ Syllabus of the courses</td><td><a href="C1/C1_3_2_1_i.pdf" target="_blank">Click Here</a></td></tr>
         
          <tr><td><div align="center">1.4</div></td> <td align="center" valign="middle"><font color="blue"><b>Feedback System (20)

</b></font></td><td>&nbsp;</td></tr>

          <tr><td><div align="center">1.4.1</div></td> <td align="left" valign="middle">Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on the feedback is made available on  institutional website(Yes or No)</td><td>&nbsp;</td></tr>
          <tr bgcolor="cornflowerblue">
            <td><div align="center"><strong><font color="white"></font></strong></div></td>
            <td><div align="center"><strong><font color="white"><span style={{fontSize: '16px'}}>Criterion 2 – Teaching- Learning and Evaluation (350)
</span></font></strong></div></td>
            <td><div align="center"><strong><font color="white"></font></strong></div></td>
          </tr>
          <tr><td><div align="center">2.1</div></td> <td align="center" valign="middle"><font color="blue"><b>Curricular Planning and Implementation
</b></font></td><td>&nbsp;</td></tr>
<tr><td><div align="center">2.1.1</div></td> <td align="left" valign="middle">Enrolment percentage </td><td>&nbsp;</td></tr>
<tr><td><div align="center">2.1.2</div></td> <td align="left" valign="middle">Percentage of seats filled against seats reserved for various categories (SC, ST, OBC, Divyangjan, etc. as per applicable reservation policy during the last five years
(Exclusive of supernumerary seats) </td><td>&nbsp;</td></tr>

<tr><td><div align="center">2.2</div></td> <td align="center" valign="middle"><font color="blue"><b>Student Teacher Ratio (40)

</b></font></td><td>&nbsp;</td></tr>
<tr><td><div align="center">2.2.1</div></td> <td align="left" valign="middle">Student – Full time Teacher Ratio
(Data for the latest completed academic year)	</td><td>&nbsp;</td></tr>
<tr><td><div align="center">2.2.2</div></td> <td align="left" valign="middle">Percentage of students enrolled in Certificate/ Add-on/Value added programs as against the total number of students during the last five years 
(Data for the latest completed academic year)	</td><td>&nbsp;</td></tr>
<tr><td><div align="center">2.2</div></td> <td align="center" valign="middle"><font color="blue"><b>Student Teacher Ratio (40)

</b></font></td><td>&nbsp;</td></tr>
<tr><td><div align="center">2.2.1</div></td> <td align="left" valign="middle">Student – Full time Teacher Ratio
(Data for the latest completed academic year)	</td><td>&nbsp;</td></tr>
<tr><td><div align="center">2.2.2</div></td> <td align="left" valign="middle">Percentage of students enrolled in Certificate/ Add-on/Value added programs as against the total number of students during the last five years 
(Data for the latest completed academic year)	</td><td>&nbsp;</td></tr>

    
           </tbody></table>
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
