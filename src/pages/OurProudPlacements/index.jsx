import React from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { data } from "./Data";
import { Card } from "./Card";

import Background from "../../assets/images/convocation.jpg";
import { motion } from "framer-motion";

const OurProudPlacements = () => {
  return (
    <div
      className="mt-20"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" bg-[rgba(8,28,58)]/95 h-[600px] md:h-[665px] w-[100%]">
        <motion.div
          initial={{ opacity: 0, translateY: +60 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          key="modal"
          id="our-proud-placement"
        >
          <h1 className="flex justify-center text-center w-[98%] ml-1 md:w-[60%] xl:w-[25%] md:mx-auto text-[25px] md:text-[38px] font-bold text-[#fff] relative top-10 border-l-2 border-[#fff]">
            Our Proud Placements
          </h1>
        </motion.div>
        <div className="ourProudPlacement ml-1 mr-1 flex h-[500px]  items-center justify-center xs:mx-5 lg:mb-1 xl:mx-auto max-w-[1400px] pt-[100px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
            rewind={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {data?.map((item) => (
              <SwiperSlide className="" key={item?.id}>
                <Card
                  image={item?.image}
                  name={item?.name}
                  stream={item?.stream}
                  company={item?.company}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurProudPlacements;
