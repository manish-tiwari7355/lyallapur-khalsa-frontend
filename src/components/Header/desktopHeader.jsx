import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

import data from "../../assets/jsonFiles/navLink.json";
import AboutImage from "../.././assets/images/62d7ea86dd2e6292bbd5493c_62cd2648b6d104ffb2a6067f_DSC00211.jpg";
import academics from "../.././assets/images/admission.png";
import { useNavigate } from "react-router-dom";
import Logo from "../.././assets/images/LKCTC-LOGO.png";

import pdf1 from "../../assets/pdf/InformationBrochure.pdf";
import pdf2 from "../../assets/pdf/IQAC.pdf";
import SearchBar from "../SearchBar";

const DesktopHeader = () => {
  const [popUp, setPopUp] = useState("");
  const [header, setHeader] = useState(false);
  const [color, setcolor] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handleClickSearchOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setHeader(false);
      }
    };
    if (header)
      document.addEventListener("click", handleClickSearchOutside, true);
    return () => {
      document.removeEventListener("click", handleClickSearchOutside, true);
    };
  }, [header]);

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
  const navigate = useNavigate();
  const navIamges = {
    about: AboutImage,
    Academics: academics,
  };

  const allPdfs = {
    InformationBrochure: pdf1,
    Iqac: pdf2,
  };
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const location = useLocation();
  useEffect(() => {
    // console.log("location", location.pathname);
    if (location.pathname === "/Contact") {
      bottomToTop();
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="relative border-t border-slate-600">
        <div
          className={` z-20 flex w-full justify-between border-b-[1px] ${
            !color ? "bg-transparent" : "bg-[#081C3A]"
          }  border-[rgba(217,217,218,0.2)] p-2 px-4 xl:px-24 2xl:px-64 `}
          ref={ref}
        >
          <div className="relative h-24 w-24 cursor-pointer">
            <img
              src={Logo}
              layout="fill"
              alt="logo"
              onClick={() => {
                navigate("/");
                bottomToTop();
                setHeader(false);
              }}
            />
          </div>
          {data?.map((item) => (
            <div className="" key={item?.id}>
              <div
                className="mt-8 flex cursor-pointer text-[16px] font-semibold text-white"
                onClick={() => setPopUp(item?.id)}
              >
                <>
                  <div
                    id={item?.id}
                    onClick={() => {
                      // bottomToTop();
                      if (item?.path) {
                        return navigate(item?.path);
                      }
                      if (popUp === item?.id) {
                        setHeader(!header);
                      } else {
                        setHeader(true);
                      }
                    }}
                    className="flex"
                  >
                    {item?.title}
                    <div
                      className={`mt-px ml-1 ${
                        item?.title === "Contact" ? "hidden" : ""
                      } `}
                      // onClick={bottomToTop}
                    >
                      <FiChevronDown className=" text-2xl font-semibold " />
                    </div>
                  </div>
                </>
              </div>
              <div className="">
                {popUp === item?.id && header && (
                  <div
                    className={`${
                      item?.id === "Academics" && "mr-10 "
                    } absolute max-w-[1400px] h-auto mt-12 bg-white`}
                  >
                    <div className="relative flex">
                      <div
                        className={`  grid ${
                          item?.subCat?.length > 1 &&
                          "grid-rows-2 grid-flow-col"
                        } ${item?.id === "Academics" && "h-[550px] "}`}
                      >
                        {item?.subCat?.map((el, idx) => (
                          <div className="w-[310px] px-6" key={idx}>
                            <div className="absolute -top-[5px] left-[5%] h-[12px] w-[12px] origin-center rotate-45 bg-white" />
                            <div className=" pb-1 pt-4 font-bold text-[#081C3A] text-lg">
                              {el?.subTitle}
                            </div>
                            <div className="p-1 font-semibold cursor-pointer text-[#696969] h-auto">
                              {el?.SubHeadings?.map((elm, idx) => (
                                <div className="pb-2" key={idx}>
                                  {elm?.pdf ? (
                                    <a
                                      href={allPdfs[elm?.pdf]}
                                      target="_blank"
                                      rel="noreferrer"
                                      onClick={() => setHeader(false)}
                                    >
                                      {elm?.Link}
                                    </a>
                                  ) : elm?.redirect ? (
                                    <a
                                      className="hover:text-[#081c3a]"
                                      href={elm?.redirect}
                                      target="_blank"
                                      rel="noreferrer"
                                      onClick={() => setHeader(false)}
                                    >
                                      {elm?.Link}
                                    </a>
                                  ) : (
                                    <Link
                                      to={elm?.path || "/"}
                                      onClick={() => {
                                        bottomToTop();
                                        setHeader(false);
                                      }}
                                    >
                                      <div className="hover:text-[#081c3a]">
                                        {elm?.Link}
                                      </div>
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      {item?.id !== "Academics" && (
                        <div className="">
                          {navIamges[item?.id] && (
                            <img
                              src={navIamges[item?.id]}
                              alt=""
                              // width="400px"
                              height="320px"
                              className="saturate-200  lg:w-[400px] h-full"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* -----Search Bar----- */}
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
