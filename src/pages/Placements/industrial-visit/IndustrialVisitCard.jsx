import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

export function IVCard({ arr }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {arr?.map((item, id) => (
        <SwiperSlide key={id}>
          <img
            src={item.img}
            alt=""
            className="mb-0 pb-0 lg:h-[600px] xl:w-full"
            layout="fill"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
