import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { LiveUrl } from "../../../../apiUtils";

const LatestEvents = () => {
  const [events, setEvents] = useState([]);

  const fetchNews = () => {
    axios
      .get(`${LiveUrl}/api/events`)
      .then((response) => setEvents(response?.data?.data[0]));
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <div className="">
        <div className="  m-4 xl:m-8 xs:px-8 sm:px-12 md:px-24 lg:px-6 ">
          <div className="  mx-auto rounded-md bgImage my-16 pt-56 lg:px-6 xl:px-12 xl:w-[520px] xs:p-4 md:px-24  w-full">
            <motion.div
              initial={{ opacity: 0, translateY: +60 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key="modal"
            >
              <div className="h-[33rem] my-8">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2800,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  {events?.media?.map((item, id) => (
                    <SwiperSlide key={id}>
                      <img
                        src={item?.url}
                        alt=""
                        className="h-[20rem] w-full"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
            <div className="-mt-52">
              <motion.div
                initial={{ opacity: 0, translateY: +60 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                key="modal"
              >
                <div key={events?.id}>
                  <div className="pb-3 lg:text-xl font-bold tracking-wider text-[#081C3A] text-center justify-center text-base">
                    LATEST EVENTS FROM LKCTC
                  </div>
                  <div className="pb-6 text-2xl font-bold text-gray-700">
                    {events?.title}
                  </div>
                  <div className="text-lg text-slate-500">
                    {events?.paragraph}
                  </div>
                </div>
              </motion.div>
              <button className="my-6 rounded-md bg-[#32727A] px-8 py-4 text-white hover:bg-teal-400">
                <Link
                  to="/StudentsGallery/AllEvents"
                  onClick={() => window.scroll(0, 0)}
                >
                  Know More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LatestEvents;
