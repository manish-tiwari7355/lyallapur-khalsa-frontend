import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Details_1 } from "../../../components/Alumni/AlumniTestimonials/TestimonialDetails";
import { Details_2 } from "../../../components/Alumni/AlumniTestimonials/TestimonialDetails";
import {
  TestimonialCard1,
  TestimonialCard2,
} from "../../../components/cards/AlumniTestimonial";
import HeaderBanner from "../../../components/HeaderBanner";
import OurRecruiters from "../../../components/OurRecruiters";

const AlumniTestimonials = () => {
  document.title = "Alumni Testimonials";
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="Test"
          title="Alumni Testimonials"
          currentPage="Alumni Testimonials"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>

      <div className="md:px-5 lg:pl-[6rem] lg:pr-[4rem]">
        <div className=" primary-color xs container mx-4 mt-8 mb-16  w-72 border-l-2 border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
          Alumni Testimonials
        </div>
      </div>

      <div className=" relative h-[75vh] max-w-[1300px] mx-auto">
        <div className="alumni-testimonials ml-1 mr-1 flex h-auto items-center justify-center lg:mb-1">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            rewind={true}
            navigation={{
              nextEl: ".swiper-navigation-next",
              prevEl: ".swiper-navigation-prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {Details_1.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialCard1
                  imagePath={item?.imagePath}
                  reference={item?.reference}
                  referenceName={item?.referenceName}
                  department={item?.department}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute md:justify-between top-[500px] md:w-full right-0 z-[10] flex px-4 md:top-[225px]">
          <div className="swiper-navigation-prev left-5 mr-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#306d77] md:relative md:left-0 md:h-[50px] md:w-[50px]">
            <IoIosArrowBack className="text-3xl font-thin text-white" />
          </div>
          <div className="swiper-navigation-next left-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#306d77] md:h-[50px] md:w-[50px]">
            <IoIosArrowForward className="cursor-pointer text-3xl font-thin text-white md:justify-end" />
          </div>
        </div>
      </div>
      {/* ____________________ */}
      <div className="btechImg h-[850px] lg:h-[600px] -mt-20">
        <div className="alumni-testimonials_2 lg:pt-[80px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            rewind={true}
            navigation={{
              nextEl: ".swiper-navigation-next_2",
              prevEl: ".swiper-navigation-prev_2",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {Details_2.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialCard2
                  imagePath1={item.imagePath1}
                  imagePath2={item.imagePath2}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" xl:-top[120px] 2xl:-left -top-24 xxs:-top-16 relative flex justify-end px-4 md:-top-10 md:left-[-7%] lg:-top-8 xl:-left-[11%] 2xl:-left-[20%]">
          <div className="swiper-navigation-prev_2 left-5 mr-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-[#306d77] lg:mr-3">
            <IoIosArrowBack className="text-3xl font-thin text-white" />
          </div>
          <div className="swiper-navigation-next_2 left-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-[#306d77]">
            <IoIosArrowForward className="text-3xl font-thin text-white" />
          </div>
        </div>
      </div>
      <OurRecruiters />
    </div>
  );
};

export default AlumniTestimonials;
