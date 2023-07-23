import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import "./styles.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/zoom";

// swiper modules
import { Navigation, Autoplay, Zoom } from "swiper";

import { arr1 } from "./CourseData";
import { OurCourseCard } from "./OurCourseCard";
import { HiArrowLeft } from "@react-icons/all-files/hi/HiArrowLeft";
import { HiArrowRight } from "@react-icons/all-files/hi/HiArrowRight";

export const SchoolOfEngineeringTab = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <div className="homeCourse h-[600px] mt-[100px] ">
      <Swiper
        onActiveIndexChange={({ realIndex }) => {
          setActiveStep(realIndex);
        }}
        navigation={{
          nextEl: ".swiper-navigation-next",
          prevEl: ".swiper-navigation-prev",
        }}
        initialSlide={2}
        autoHeight={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={100}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Zoom, Autoplay]}
        className=" hightClass "
        style={{ height: "724px" }}
      >
        {arr1?.map((item, i) => (
          <SwiperSlide key={item?.id} className="mb-28">
            <OurCourseCard item={item} indxz={i} activState={activeStep} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative -top-[35px] z-[1] flex w-[280px] xxs:w-[380px] md:w-[100px] justify-end items-end md:top-[4rem] md:left-[80%] lg:-top-[15rem] lg:left-[85%] xl:-top-[15rem]  2xl:left-[80%]">
        <div className="hover:scale-105 hover:bg-[#008FE9] swiper-navigation-prev left-5 mr-5 md:-mr-12 xl:-mr-10 flex h-[55px] w-[55px] cursor-pointer items-center justify-center rounded-full bg-[grey] md:relative md:-left-[78%] md:h-[60px] md:w-[60px] lg:-left-[88%] xl:-left-[80%] 2xl:-left-[58%]">
          <HiArrowLeft className="text-3xl font-thin text-white" />
        </div>
        <div className="hover:scale-105 hover:bg-[#008FE9] swiper-navigation-next left-5 flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[grey] md:h-[60px] md:w-[60px]">
          <HiArrowRight className="cursor-pointer text-3xl font-thin text-white" />
        </div>
      </div>
    </div>
  );
};

// export const SchoolOfHealthScienceTab = () => {
//   const [activeStep, setActiveStep] = React.useState(0);
//   return (
//     <div className="homeCourse h-[900px] mt-[100px] ">
//       <Swiper
//         navigation={{
//           nextEl: ".swiper-navigation-next",
//           prevEl: ".swiper-navigation-prev",
//         }}
//         onActiveIndexChange={({ realIndex }) => {
//           setActiveStep(realIndex);
//         }}
//         initialSlide={2}
//         autoHeight={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: true,
//         }}
//         loop={true}
//         centeredSlides={true}
//         slidesPerView={1}
//         spaceBetween={30}
//         breakpoints={{
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 60,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//           },
//           1440: {
//             slidesPerView: 4,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Navigation, Zoom, Autoplay]}
//         className="mySwiper"
//       >
//         {arr2?.map((item, i) => (
//           <SwiperSlide key={item?.id} className="mb-28">
//             <OurCourseCard item={item} indxz={i} activState={activeStep} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="relative top-[35px] z-[1] flex w-[280px] xxs:w-[380px] md:w-[100px] justify-end items-end md:top-[2rem] md:left-[80%] lg:-top-[5rem] lg:left-[85%] xl:-top-[10rem]  2xl:left-[80%]">
//         <div className="hover:scale-105 hover:bg-[#008FE9] swiper-navigation-prev left-5 mr-5 md:-mr-12 xl:-mr-10 flex h-[55px] w-[55px] cursor-pointer items-center justify-center rounded-full bg-[grey] md:relative md:-left-[78%] md:h-[60px] md:w-[60px] lg:-left-[88%] xl:-left-[80%] 2xl:-left-[58%]">
//           <HiArrowLeft className="text-3xl font-thin text-white" />
//         </div>
//         <div className="hover:scale-105 hover:bg-[#008FE9] swiper-navigation-next left-5 flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[grey] md:h-[60px] md:w-[60px]">
//           <HiArrowRight className="cursor-pointer text-3xl font-thin text-white" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export const SchoolOfMGMTTab = () => {
//   const [activeStep, setActiveStep] = React.useState(0);

//   return (
//     <div className="homeCourse h-[900px] mt-[100px] ">
//       <Swiper
//         navigation={{
//           nextEl: ".swiper-navigation-next",
//           prevEl: ".swiper-navigation-prev",
//         }}
//         onActiveIndexChange={({ realIndex }) => {
//           setActiveStep(realIndex);
//         }}
//         initialSlide={2}
//         autoHeight={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: true,
//         }}
//         loop={true}
//         centeredSlides={true}
//         slidesPerView={1}
//         spaceBetween={30}
//         breakpoints={{
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 60,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//           },
//           1440: {
//             slidesPerView: 4,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Navigation, Zoom, Autoplay]}
//         className="mySwiper "
//       >
//         {arr3?.map((item, i) => (
//           <SwiperSlide key={item?.id} className="mb-28">
//             <OurCourseCard item={item} indxz={i} activState={activeStep} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="relative top-[35px] z-[1] flex w-[280px] xxs:w-[380px] md:w-[100px] justify-end items-end md:top-[2rem] md:left-[80%] lg:-top-[5rem] lg:left-[85%] xl:-top-[10rem]  2xl:left-[80%]">
//         <div className="hover:scale-105 hover:bg-[#008FE9] swiper-navigation-prev left-5 mr-5 md:-mr-12 xl:-mr-10 flex h-[55px] w-[55px] cursor-pointer items-center justify-center rounded-full bg-[grey] md:relative md:-left-[78%] md:h-[60px] md:w-[60px] lg:-left-[88%] xl:-left-[80%] 2xl:-left-[58%]">
//           <HiArrowLeft className="text-3xl font-thin text-white" />
//         </div>
//         <div className="hover:scale-105 hover:bg-[#008FE9] swiper-navigation-next left-5 flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[grey] md:h-[60px] md:w-[60px]">
//           <HiArrowRight className="cursor-pointer text-3xl font-thin text-white" />
//         </div>
//       </div>
//     </div>
//   );
// };
