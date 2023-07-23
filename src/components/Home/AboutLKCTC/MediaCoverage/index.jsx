import React, { useEffect, useState } from "react";
import LatestEvents from "../../../../components/Home/AboutLKCTC/LatestEvents";
import { motion } from "framer-motion";
import axios from "axios";
import { LiveUrl } from "../../../../apiUtils";
const MediaCoverage = () => {
  const [mediaImg, setMediaImg] = useState([]);
  // const localUrl = "http://localhost:5000";
  // const liveUrl = "https://api-lkctc.simbaquartz.com";

  const fetchMedia = () => {
    axios
      .get(`${LiveUrl}/api/media`)
      .then((response) => setMediaImg(response?.data?.data));
  };
  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div className="mb-12  ">
      <div className="lg:flex ">
        <div className="lg:w-[44%] xl:pl-8 2xl:pl-36">
          <LatestEvents />
        </div>
        <div className="relative lg:w-[55%] xl:m-8 xs:px-8 sm:px-12 md:px-24 lg:px-6 h-[116vh] scrollbar-hide  overflow-y-auto">
          <div className="flex">
            <div className="absolute hidden lg:block mt-10 bg-[#081C3A] w-[3px] h-[150%] " />
            <div className="ml-8 ">
              <h1 className="text-[#081C3A] text-lg  pl-2 mt-10 mb-5 tracking-wider font-bold ">
                MEDIA COVERAGE
              </h1>
              <div className="mx-4 xxxs:mx-0  mr-16 space-y-20 xl:w-[520px] 2xl:w-[620px] ">
                {mediaImg?.map((item, id) => (
                  <div className="border" key={id}>
                    <div className="-ml-10 ">
                      {" "}
                      <motion.div
                        initial={{
                          opacity: 0,
                          translateY: +90,
                          translateX: -16,
                        }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        key="modal"
                      >
                        <CirclePointer />
                      </motion.div>
                    </div>
                    <div className="" key={item?.title}>
                      <motion.div
                        initial={{ opacity: 0, translateY: +90 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        key="modal"
                      >
                        <div className="text-[#081C3A] text-2xl font-semibold ">
                          <h1 className="py-4 px-6 text-xl">{item?.title}</h1>
                          <div>
                            <div className="py-8 md:grid md:grid-cols-2 space-y-10 md:space-y-0">
                              {item?.media?.map((elm) => (
                                <div
                                  className="shadow-lg border rounded-br-[100px] overflow-hidden rounded-tl-[100px] p-48px mx-8 drop-shadow-lg flex justify-center"
                                  style={{
                                    borderRadius: "100px 0px 100px 0px",
                                    borderRight: "2px solid #32727A ",
                                    borderLeft: "2px solid #32727A ",
                                    padding: "42px",
                                  }}
                                >
                                  <img
                                    src={elm?.url}
                                    alt=""
                                    className="w-[175.97px] h-[118.03px]"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;

export const CirclePointer = () => {
  return (
    <div className=" hidden lg:block  ">
      <div className=" absolute left-0  lg:flex border-2 rounded-full border-[#081C3A] w-12 h-12 bg-white items-center justify-center ">
        <div className="bg-[#32727A] rounded-full w-2 h-2" />
      </div>
    </div>
  );
};
