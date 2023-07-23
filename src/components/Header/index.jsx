import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";

import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

import data from "../../assets/jsonFiles/navLink.json";
import Logo from "../../assets/images/LKCTC-LOGO.png";
// import approvedIntake from "../../assets/pdf/APPROVED-INTAKE.pdf";
import importantInformation from "../../assets/pdf/Statutory Declaration.pdf";
import sgrc from "../../assets/pdf/SGRC.pdf";
import iccWomen from "../../assets/pdf/IIC-resolution.pdf";
import equalOpp from "../../assets/pdf/Equal Oppertunity Cell.pdf";
import iqac from "../../assets/pdf/IQAC.pdf";
import iicCell from "../../assets/pdf/ICC.pdf";
import scst from "../../assets/pdf/SC ST Committee.pdf";
import antiRagging from "../../assets/pdf/Anti Ragging.pdf";
//import grievance from "../../assets/pdf/SGRC.pdf";
import establishment from "../../assets/pdf/6.1.4-Establishment-of-Internal-Complaint-Committee-ICC-Women-related.pdf";
import internalCommitte from "../../assets/pdf/Internal Committee for disabled.pdf";
// import SVG from "../.././assets/images/62de765b4d21ac26203c3874_Social-follow.svg";

import styles from "./index.module.css";
import DesktopHeader from "./desktopHeader";
import SearchBar from "../SearchBar";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const [dropAnim, setDropAnim] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [color, setcolor] = useState(false);
  const navigate = useNavigate();
  const handelDropDown = ({ e }) => {
    setDropAnim((current) => [...current, e]);
  };

  const listenScrollEvent = (e) => {
    if (window.scrollY > 70) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  let ref = useRef();

  useEffect(() => {
    const handleClickSearchOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropDown(false);
        // if (dropDown && event.target.id !== "usernameButtonId") {
        // }
      }
    };
    if (dropDown)
      document.addEventListener("click", handleClickSearchOutside, true);
    return () => {
      document.removeEventListener("click", handleClickSearchOutside, true);
    };
  }, [dropDown]);

  const navLinks = [
    {
      title: "Affiliation Order",
      url: "/MandatoryDisclosure/AffiliationOrder",
    },
    // {
    //   title: "Approved Intake",
    //   pdf: approvedIntake,
    // },
    {
      title: "IQAC",
      pdf: iqac,
    },
    {
      title: "IIC Cell",
      pdf: iicCell,
    },
    // {
    //   title: "Approval",
    //   url: "/MandatoryDisclosure/Approval",
    // },
    {
      title: "Student Grievance Portal",
      form: "https://docs.google.com/forms/d/e/1FAIpQLSeRPeIFUpwMqLewg13shb9gwndajahos3XbqR_km4gi4_wS3A/viewform",
    },
    {
      //title: "Statutory Declaration",
      //pdf: importantInformation,
    },
    {
      title: "Anti Ragging",
      pdf: antiRagging,
    },
    //{
      //title: "Grievance and OBUDSMAN",
      //pdf: grievance,
    //},
    {
      title: "Establishment Of Internal Complaint",
      pdf: establishment,
    },
    {
      title: "Commitee (ICC)-Women Related",
      pdf: iccWomen,
    },
    {
      title: "Statutory Declaration",
      pdf: importantInformation,
    },
    {
      title: "SC/ST Committee",
      pdf: scst,
    },
    {
      title: "STUDENT GRIEVANCE REDRESSAL COMMITTEE(SGRC)",
      pdf: sgrc,
    },
    {
      title: "Equal Opportunity Cell",
      pdf: equalOpp,
    },
    {
      title: "Internal Commitee for differently abled Students",
      pdf: internalCommitte,
    },
    {
      title: "Women Grievance,Sexual Harassment and Grievance cell",
      url: "/MandatoryDisclosure/WomenGrievance",
    },
  ];
  if (dropDownOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return (
    <div className="fixed z-[80] w-full">
      <div className=" h-full ">
        <div className="primary-bg-color  pt-2">
          {/* _________________Mandatory Popup_____________ */}
          <div className=" md:flex " ref={ref}>
            <div className="md:w-[80%] h-auto">
              <div className="marquee h-5 xs:h-8">
                {/* <div className="marquee--inner text-white ">
                  <h1 className="w-full text-[12px] md:text-lg lg:text-xl">
                    Application invited for admission (Apply Now), vacancy
                    Related.
                  </h1>
                  <h1 className="w-full text-[12px] md:text-lg lg:text-xl">
                    Application invited for admission (Apply Now), vacancy
                    Related.
                  </h1>
  </div>*/}
              </div>
            </div>
            <div className=" pr-3 font-bold z-40">
              <div className="flex justify-between gap-10 lg:gap-4">
                <div
                  className="cursor-pointer text-lg text-white md:text-md pl-5 w-[300px] md:w-[200px] lg:w-[250px] xl:w-[200px]"
                  onClick={() => setDropDown(!dropDown)}
                >
                  Mandatory Disclosure
                </div>
                <div
                  className=" mt-1 cursor-pointer text-white"
                  onClick={() => setDropDown(!dropDown)}
                >
                  <IoIosArrowDown className="text-lg font-bold" />
                </div>
              </div>
            </div>
            {dropDown && (
              <div
                className={`${!dropDown ? "hidden" : "flex flex-col"} ${
                  styles?.sidebar
                } absolute top-14 -right-[25px] z-10 mx-4 my-2 mr-10 w-[300px] bg-white p-6 lg:top-8`}
              >
                <div className="absolute -top-[5px] left-[50%] h-[12px] w-[12px] origin-center rotate-45 bg-white" />
                <h1 className="mb-[10px] text-[17px] font-[700] text-[#213159]">
                  Mandatory Disclosure
                </h1>
                <ul className="flex flex-1 list-none flex-col items-start justify-end">
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className="font-poppins mb-[5px] cursor-pointer text-[13px] font-medium text-[#696969]"
                    >
                      <p
                        className="hover:text-[#081C3A] font-semibold"
                        onClick={() => {
                          if (nav?.pdf) {
                            window.open(nav?.pdf);
                            return;
                          }
                          if (nav?.form) {
                            window.open(nav?.form);
                            return;
                          }
                          nav.url && navigate(nav?.url);
                          window.scroll(0, 0);
                          setDropDown(false);
                        }}
                      >
                        {nav?.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* --------------------------------============Small Screen===============------------------------------ */}
        <div className="lg:hidden">
          <div
            className={`z-20 flex w-full justify-between  border-b-[1px] p-2 pr-4 pl-6 ${
              !color ? "bg-transparent" : "bg-[#081C3A]"
            } border-[rgba(217,217,218,0.2)] `}
          >
            <div className="relative h-16 w-16 ">
              <Link
                to="/"
                onClick={() => {
                  window.scroll(0, 0);
                  setDropDownOpen(false);
                }}
              >
                <img src={Logo} layout="fill" alt="logo" />
              </Link>
            </div>

            <div className="flex flex-row justify-center items-center">
              <div>
                <SearchBar />
              </div>
              <div
                className=" m-1.5 h-min rounded-md bg-white p-3"
                onClick={() => setDropDownOpen(!dropDownOpen)}
              >
                <FaBars className="fill-[#333333] text-2xl" />
              </div>
            </div>
          </div>
          {/* ------------------------------ */}
          <div className=" h-full overflow-hidden ">
            {dropDownOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  translateY: -300,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  height: "100%",
                }}
                transition={{ duratin: 3000 }}
                exit={{ translateY: -300 }}
              >
                {/* -------------------------------- */}
                <div className=" primary-bg-color pb-12 hideScroller   h-[50rem] overflow-y-scroll  py-4 text-white">
                  {data?.map((item, idx) => (
                    <div key={idx} className="">
                      <div className=" px-6 text-lg  font-semibold">
                        <div
                          className=" flex justify-between py-[22px]"
                          onClick={() => {
                            window.scroll(0, 0);
                            if (!dropAnim?.includes(item?.id)) {
                              handelDropDown({ e: `${item?.id}` });
                            } else {
                              setDropAnim((current) =>
                                current?.filter(
                                  (element) => element !== item?.id
                                )
                              );
                            }
                          }}
                        >
                          <div
                            className="cursor-pointer flex justify-between w-full items-center"
                            onClick={() => {
                              setDropDown(false);

                              window.scroll(0, 0);
                              if (item?.id === "Contact") {
                                navigate("/Contact");
                                setDropDownOpen(false);
                              }
                            }}
                          >
                            <div>{item?.title}</div>
                            <div>
                              {item?.id === "Contact" ? null : (
                                <div className="">
                                  <FiChevronDown className="text-2xl" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {item?.subCat?.map((el, idx) => (
                          <div className="" key={idx}>
                            {dropAnim?.includes(item?.id) && (
                              <motion.div
                                initial={{
                                  opacity: 0.6,
                                  translateY: -20,
                                  scaleX: 0.8,
                                  scaleY: 0.6,
                                }}
                                transition={{ duratin: 3000 }}
                                animate={{
                                  opacity: 1,
                                  translateY: 0,
                                  scaleX: 1,
                                  scaleY: 1,
                                }}
                                exit={{
                                  opacity: 0.6,
                                  translateY: -20,
                                  scaleX: 0.8,
                                  scaleY: 0.6,
                                }}
                                className="focus:bg-accent cursor-pointer rounded-xl px-3 py-2 outline-none"
                              >
                                <div
                                  className=" text-md font-medium"
                                  onClick={() => window.scroll(0, 0)}
                                >
                                  <div className="secondary-color mb-4 text-2xl font-semibold ">
                                    {el?.subTitle}
                                  </div>
                                  {el?.SubHeadings?.map((elm) => (
                                    <div
                                      className="primary-bg-color mb-6"
                                      key={elm?.path}
                                      onClick={() => {
                                        if (elm?.redirect) {
                                          window.open(elm?.redirect);
                                          return;
                                        }
                                        setDropDownOpen(false);
                                        navigate(elm?.path || "/");
                                      }}
                                    >
                                      <div className="">{elm?.Link}</div>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
        <div className="hidden lg:block">
          <DesktopHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
