import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "@react-icons/all-files/bs/BsArrowRightShort";
import moment from "moment/moment";
import { motion } from "framer-motion";
import { LiveUrl } from "../../../apiUtils";

export const NoticeboardTab = () => {
  const [noticeBoard, setNoticeBoard] = useState([]);

  const fetchNews = () => {
    axios
      .get(`${LiveUrl}/api/noticeboard`)
      .then((response) => setNoticeBoard(response?.data?.data));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  console.log("noticeBoard", noticeBoard?.[0]?._id);

  return (
    <div>
      <div className="mt-20 ml-3 flex justify-center pb-10 text-3xl font-bold md:text-5xl">
        <motion.div
          initial={{ opacity: 0, translateY: +60 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          key="modal"
        >
          <h1
            className=" border-l-2 border-[#32727A] pl-10 xs:pl-4  text-[#081C3A]"
            id="exploreNoticeboard"
          >
            Explore the <span className="pl-1 text-[#32727A]">Noticeboard</span>
          </h1>
        </motion.div>
      </div>
      <div className="noticeboard py-[36px] px-[30px] ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          // centeredSlides={true}
          // loop={true}
          navigation={{
            nextEl: ".swiper-navigation-next2",
            prevEl: ".swiper-navigation-prev2",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {noticeBoard.length > 0 &&
            noticeBoard.map((newsObj, index) => (
              <SwiperSlide
                key={newsObj?._id}
                style={{
                  borderTop: "5px solid #081c3a",
                  marginRight: "4px",
                }}
              >
                <div className="  flex flex-col h-[350px] md:h-[275px] shadow-[1px_1px_3px_0_rgb(0,0,0,0.3)] mr-[1px]">
                  <div className="flex flex-row p-[10px] items-center">
                    <div className="flex flex-col border border-blue-400 w-[65px] sm:w-[82px] h-[80px] justify-center items-center bg-[#32727a]">
                      <h3 className="text-[24px] font-bold text-[#fff]">
                        {moment(newsObj?.date).format("D")}
                      </h3>
                      <h3 className="text-base text-[#a1a1a1] leading-6 uppercase font-bold">
                        {moment(newsObj?.date).format("MMM")}
                      </h3>
                    </div>
                    <div className="text-[20px] font-bold text-[#333] ml-2 ">
                      {newsObj?.title}
                    </div>
                  </div>
                  <div className=" flex p-[10px] ">
                    <p
                      className="font-bold text-justify"
                      style={{
                        color: "rgba(81, 99, 129, 0.82)",
                      }}
                    >
                      {newsObj?.description}
                    </p>
                  </div>

                  {/* Links */}
                  <div
                    className=" flex p-[10px] justify-between"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    <Link to={`/Academics/AllNoticeBoard/${newsObj?._id}`}>
                      <div className="text-sm">Know More</div>
                    </Link>
                    <Link to={`/Academics/AllNoticeBoard/${newsObj?._id}`}>
                      <div className="flex h-full items-center">
                        <BsArrowRightShort className=" flex justify-center items-center text-[22px] text-[#081c3a]" />
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          {/* _______________Buttons_________________ */}
          <div className="relative -top-[42px] z-[1] flex w-[190px] xxs:left-[60px] md:w-[100px] md:-top-[120px] justify-end items-end  md:left-[320px] lg:-top-[118px] lg:left-[50%] xl:-top-[118px] 2xl:left-[49%]">
            <div className="swiper-navigation-prev2 left-5 mr-5 md:-mr-12 xl:-mr-10 flex h-[55px] w-[55px] items-center justify-center md:relative md:-left-[78%] md:h-[60px] md:w-[60px] lg:-left-[88%] xl:-left-[80%] 2xl:-left-[58%] bg-white cursor-pointer">
              <img
                src="https://uploads-ssl.webflow.com/62de2b9c4d21acbaa2386134/62de2b9d4d21acc5b638617b_arrow-left(24x24)%402x%20(1).svg"
                alt=""
                width={16}
              />
            </div>
            <div className="swiper-navigation-next2 left-5 flex h-[55px] w-[55px] items-center justify-center md:h-[60px] md:w-[60px] bg-white cursor-pointer">
              <img
                src="https://uploads-ssl.webflow.com/62de2b9c4d21acbaa2386134/62de2b9d4d21acb65238617f_arrow-right(24x24)%402x%20(1).svg"
                alt=""
                width={16}
              />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
