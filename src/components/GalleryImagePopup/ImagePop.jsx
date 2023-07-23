import React from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export function ImagePopup({ Activities, isVisible, ...props }) {
  console.log(
    "Activities",
    Activities?.find((element) => element?._id === isVisible)?.media
  );
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="gallery-popup sticky left-0 right-0  top-32 mx-0 h-[84vh] w-full bg-white bg-opacity-0 lg:mx-auto lg:w-[70%]"
    >
      <Swiper
        spaceBetween={0}
        navigation={true}
        thumbs={{
          swiper:
            props.thumbsSwiper && !props.thumbsSwiper.destroyed
              ? props.thumbsSwiper
              : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {Activities?.find((element) => element?._id === isVisible)?.media?.map(
          (item, id) => (
            <SwiperSlide key={id}>
              {/* <div className="" > */}
              <div
                key={id}
                onClick={() => props.setIsVisible(false)}
                className="flex border h-[500px] w-[500px]"
              >
                <img src={item?.url} alt="" className=" h-96 w-96" />
              </div>
              {/* </div> */}
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}
