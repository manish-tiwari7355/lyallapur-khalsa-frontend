import { ImFacebook } from "@react-icons/all-files/im/ImFacebook";
import { ImTwitter } from "@react-icons/all-files/im/ImTwitter";
import LKCTCLogo from "../../assets/images/LKCTC-LOGO.png";
import { ImPhone } from "@react-icons/all-files/im/ImPhone";
import { IoIosMail } from "@react-icons/all-files/io/IoIosMail";
import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { ImLinkedin2 } from "@react-icons/all-files/im/ImLinkedin2";
import React from "react";
import { Link } from "react-router-dom";

import locSchoolOfEngineering from "../../assets/pdf/locSchoolOfEngineering.pdf";

const Footer = () => {
  const icons = [
    {
      svgs: <ImFacebook className=" text-white w-5 h-auto" />,
      id: "facebook",
      links: "https://www.facebook.com/LKCEngg",
    },
    { svgs: <ImTwitter className=" text-white w-5 h-auto" />, id: "twitter" },
    {
      svgs: <ImLinkedin2 className=" fill-white w-5 h-auto" />,
      id: "linkedin",
    },
    {
      svgs: <AiOutlineInstagram className=" text-white  w-5 h-auto" />,
      id: "instagram",
    },
  ];
  const word = {
    INFORMATION: [
      { title: "Home", id: "1", url: "/" },
      { title: "About Us", id: "2", url: "/About/AboutLKCTC" },
      { title: "Gallery", id: "3", url: "/PhotoGallery" },
      { title: "Academics", id: "4", url: "/academics/listOfCourses" },
      {
        title: "Admissions",
        id: "5",
        redirect:
          "https://docs.google.com/forms/d/e/1FAIpQLScCEWfZ0a0KlfcLL0LGSbjKq9BFN6CDAWaqReIqzhWQv830lQ/viewform",
      },
      { title: "Contact Us", id: "6", url: "/Contact" },
    ],

    COURSES: [
      {
        title: "School Of Engineering & Paramedical Science",
        id: "1",
        url: "/Academics/DepartmentOfCivilEngineering",
      },
      {
        title: "School of Health Science",
        id: "2",
        url: "/Academics/DepartmentOfHealthScience",
      },
      {
        title: "School of Management",
        id: "3",
        url: "/Academics/ManagementDepartment",
      },
      { title: "School of IT", id: "4", url: "/Academics/DepartmentOfIT" },
      {
        title: "School of Hotel Management ",
        id: "5",
        url: "/Academics/DepartmentOfHotelManagement",
      },
      {
        id: "6",
        title: "List of Committees",
        url: "",
      },
      {
        id: "7",
        title: "School of Engineering",
        pdf: locSchoolOfEngineering,
      },
      {
        id: "8",
        title: "KCLIMT",
        url: "",
      },
    ],

    ADDRESS: [
      {
        title: `Lyallpur Khalsa College Technical Campus Cantt Road, Jalandhar (Pb)-144001`,
        id: "1",
        svg: <AiFillHome className="w-6 h-auto" />,
      },
      {
        title: "info@lkcengg.edu.in",
        id: "2",
        svg: <IoIosMail className="w-6 h-auto" />,
      },
      {
        title: "+91-181-2350400/402/403",
        id: "3",
        svg: <ImPhone className="w-6 h-auto" />,
      },
    ],
  };

  return (
    <div className="bannerBotttom mt-16 border pb-2 pt-10">
      <div className="mx-auto grid w-[95%] grid-cols-1 gap-5 xl:gap-10 pb-16 px-3 md:grid-cols-2 lg:grid-cols-5 xl:px-5">
        <div className="">
          <div className="relative h-[60px] w-[60px] md:h-[80px] md:w-[80px] xl:h-[120px] xl:w-[120px]">
            <img src={LKCTCLogo} alt="" layout="fill" />
          </div>
          <div>
            <p className="py-4 text-start text-white text-sm md:text-md">
              The Lyallpur Khalsa College Technical Campus was established with
              the merger of two distinguished colleges in the region, namely,
              the Khalsa College Lyallpur Institute of Management & Technology.
            </p>
          </div>
          <div className="flex gap-1 md:gap-2 lg:gap-0 xl:gap-4">
            {icons?.map((item) => (
              <a
                href={item?.links}
                target="_blank"
                key={item?.id}
                rel="noreferrer"
              >
                <div className="rounded-full border border-blue-600 from-[#081C3A] to-[#32727A] p-2 hover:bg-gradient-to-b  ">
                  {item?.svgs}
                </div>
              </a>
            ))}
          </div>
        </div>

        {Object.keys(word)?.map((item) => (
          <div key={item} className=" border-red-500 ">
            <div className="pb-6 text-lg xl:text-xl font-semibold uppercase text-white">
              {item}
            </div>
            <ul className="space-y-2 ">
              {word[item]?.map((items) => (
                <li
                  className="flex gap-3 xl:gap-4 lg:text-lg text-white text-sm md:text-lg "
                  key={items?.title}
                >
                  {items?.svg && <div>{items?.svg}</div>}

                  {item === "ADDRESS" ? (
                    <div className=" xxs:text-sm md:text-md">
                      {items?.title}
                    </div>
                  ) : items?.redirect ? (
                    <a
                      className="hover:text-[#32727A] text-sm md:text-lg lg:text-start"
                      href={items?.redirect}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {items?.title}
                    </a>
                  ) : items?.title === "List of Committees" ? (
                    <div className="py-2 text-lg xl:text-xl font-semibold uppercase text-white">
                      {items?.title}
                    </div>
                  ) : (
                    <button
                      className="hover:text-[#32727A] text-sm md:text-lg lg:text-start"
                      onClick={() => window.scroll(0, 0)}
                    >
                      <a href={items?.pdf} target="_blank" rel="noreferrer">
                        {items?.title}
                      </a>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="hidden lg:block xl:hidden">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLKCEngg&tabs=timeline&width=200&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="200"
            height="500"
            className="relative  border-red-500 w-full"
            title="facebook"
            loading="lazy"
          ></iframe>
        </div>
        <div className="lg:hidden xl:block">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLKCEngg&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="260"
            height="500"
            className="relative  border-red-500 w-full"
            title="facebook"
            loading="lazy"
          ></iframe>
        </div>
      </div>{" "}
      <div className="">
        <div className="w-full border-t pt-2" />
      </div>
      <footer className="text-center text-white xxs:text-sm">
        <p>
          Copyright &copy; {new Date().getFullYear()} Lyallpur Khalsa College
          Technical Campus
        </p>
      </footer>
    </div>
  );
};
export default Footer;
