import React from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export function GalleryPopup({ Activities, ...props }) {
  // console.log('Activities', Activities)

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="gallery-popup sticky left-0 right-0  top-32 mx-0 h-[84vh] w-full bg-white bg-opacity-0 lg:mx-auto lg:w-[70%]"
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={50}
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
        {Activities?.map((item) => (
          <SwiperSlide key={item?.id || item?._id}>
            <div className="" key={item?.id || item?._id}>
              <div
                onClick={() => props.setIsVisible(false)}
                className="flex border h-[500px] w-[500px]"
              >
                <img
                  src={item?.media?.[0]?.url || item?.Avatar || item?.url}
                  alt=""
                  className="h-20 w-20 md:h-96 md:w-96"
                  // layout="fill"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={props.setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        // className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        {Activities?.map((item) => (
          <SwiperSlide
            key={item?.id || item?._id}
            style={{
              cursor: "pointer",
            }}
          >
            {/* <div className="">
              <div className="mx-5"> */}
            <img
              src={item?.media?.[0]?.url || item?.Avatar}
              alt=""
              height="400px"
              width="400px"
              // layout="fill"
              className="p-3 mb-5"
            />
            {/* </div>
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
