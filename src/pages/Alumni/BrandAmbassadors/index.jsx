import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import {
  CivilDepartment,
  ComputerScienceDepartment,
  ElectronicsDepartment,
  ITDepartment,
  ManagementDepartment,
  MechanicalDepartment,
} from "../../../components/Alumni/BrandAmbassadors/DepartmentDetails";
import DepartmentCard from "../../../components/cards/BrandAmbassadors";
import HeaderBanner from "../../../components/HeaderBanner";
import OurRecruiters from "../../../components/OurRecruiters";

const BrandAmbassadors = () => {
  document.title = "Brand Ambassadors";
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="Brand"
          title="Brand Ambassadors"
          currentPage="Events"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>

      <div className="flex justify-center">
        <div id="computer-science" className=" primary-color xs container mx-4 mt-16 mb-8  w-72 text-center text-2xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-[38px] xl:w-[65%] 2xl:w-[50%]">
          COMPUTER SCIENCE <span className="text-[#32727a]">DEPARTMENT</span>
        </div>
      </div>

      <div className="brand-ambassadors ml-5 mr-5 flex h-auto max-w-[1300px] items-center justify-center  xl:mx-auto">
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {ComputerScienceDepartment.map((item) => (
            <SwiperSlide key={item.id}>
              <DepartmentCard
                imagePath={item.imagePath}
                Name={item?.Name}
                Designation={item?.Designation}
                Company={item?.Company}
                Mail={item?.Mail}
                Phone={item?.Phone}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center">
        <div id="civil-department" className=" primary-color xs container mx-4 mt-16 mb-8  w-72 text-center text-2xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-[38px] xl:w-[65%] 2xl:w-[50%]">
          CIVIL <span className="text-[#32727a]">DEPARTMENT</span>
        </div>
      </div>
      <div className="brand-ambassadors ml-5 mr-5 flex h-auto max-w-[1300px] items-center justify-center lg:ml-auto lg:mr-auto ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {CivilDepartment.map((item) => (
            <SwiperSlide key={item.id}>
              <DepartmentCard
                imagePath={item.imagePath}
                Name={item?.Name}
                Designation={item?.Designation}
                Company={item?.Company}
                Mail={item?.Mail}
                Phone={item?.Phone}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center">
        <div id="electronics-department" className=" primary-color xs container mx-4 mt-16 mb-8  w-72 text-center text-2xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-[38px] xl:w-[65%] 2xl:w-[50%]">
          ELECTRONICS <span className="text-[#32727a]">DEPARTMENT</span>
        </div>
      </div>
      <div className="brand-ambassadors ml-5 mr-5 flex h-auto max-w-[1300px] items-center justify-center lg:ml-auto lg:mr-auto ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {ElectronicsDepartment.map((item) => (
            <SwiperSlide key={item.id}>
              <DepartmentCard
                imagePath={item.imagePath}
                Name={item?.Name}
                Designation={item?.Designation}
                Company={item?.Company}
                Mail={item?.Mail}
                Phone={item?.Phone}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center">
        <div id="mechanical-department" className=" primary-color xs container mx-4 mt-16 mb-8  w-72 text-center text-2xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-[38px] xl:w-[65%] 2xl:w-[50%]">
          MECHANICAL <span className="text-[#32727a]">DEPARTMENT</span>
        </div>
      </div>
      <div className="brand-ambassadors ml-5 mr-5 flex h-auto max-w-[1300px] items-center justify-center lg:ml-auto lg:mr-auto ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {MechanicalDepartment.map((item) => (
            <SwiperSlide key={item.id}>
              <DepartmentCard
                imagePath={item.imagePath}
                Name={item?.Name}
                Designation={item?.Designation}
                Company={item?.Company}
                Mail={item?.Mail}
                Phone={item?.Phone}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center">
        <div id="it-department" className=" primary-color xs container mx-4 mt-16 mb-8  w-72 text-center text-2xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-[38px] xl:w-[65%] 2xl:w-[50%]">
          IT <span className="text-[#32727a]">DEPARTMENT</span>
        </div>
      </div>
      <div className="brand-ambassadors ml-5 mr-5 flex h-auto max-w-[1300px] items-center justify-center lg:ml-auto lg:mr-auto ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {ITDepartment.map((item) => (
            <SwiperSlide key={item.id}>
              <DepartmentCard
                imagePath={item.imagePath}
                Name={item?.Name}
                Designation={item?.Designation}
                Company={item?.Company}
                Mail={item?.Mail}
                Phone={item?.Phone}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center">
        <div id="management&hm-department" className=" primary-color xs container mx-4 mt-16 mb-8  w-72 text-center text-2xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-[38px] xl:w-[65%] 2xl:w-[50%]">
          Management & HM  <span className="text-[#32727a]">DEPARTMENT</span>
        </div>
      </div>
      <div className="brand-ambassadors ml-5 mr-5 flex h-auto max-w-[1300px] items-center justify-center lg:ml-auto lg:mr-auto ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {ManagementDepartment.map((item) => (
            <SwiperSlide key={item.id}>
              <DepartmentCard
                imagePath={item.imagePath}
                Name={item?.Name}
                Designation={item?.Designation}
                Company={item?.Company}
                Mail={item?.Mail}
                Phone={item?.Phone}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <OurRecruiters />
    </div>
  );
};

export default BrandAmbassadors;
