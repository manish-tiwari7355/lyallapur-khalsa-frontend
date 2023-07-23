import React from "react";
import { Link } from "react-router-dom";
import Dot from "../../../assets/images/62b55f32e3bd0513cebb0044_dot-pattern-1-2.png";
import AboutImg from "../../../assets/images/HomeAbout.jpg";
import Logo from "../../../assets/images/LKCTC-LOGO.png";
import { motion } from "framer-motion";

const AboutLKCTC = () => {
  return (
    <div className="max-w-[1400px] mx-auto z-10">
      <div className="mt-20 flex justify-center pb-10 text-3xl font-bold md:text-5xl  md:justify-start md:flex md:ml-4">
        <motion.div
          initial={{ opacity: 0, translateY: +60 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          key="1"
        >
          <h1 className=" border-l-2 border-[#32727A] pl-4  md:pl-6 text-[#081C3A]">
            About
            <span className="pl-1 text-[#32727A]">LKCTC</span>
          </h1>
        </motion.div>
      </div>
      <div className="lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, translateY: +60 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          key="2"
        >
          <p className="text-slate-500 text-md text-justify mx-6 font-semibold   ">
            The Lyallpur Khalsa College Technical Campus was established with
            the merger of two distinguished colleges of the region, namely,
            Khalsa College Lyallpur Institute of Management & Technology,
            established in the year 2010 and Lyallpur Khalsa College of
            Engineering, established in the year 2013, under the aegis of Khalsa
            College Lyallpur Educational Charitable Trust which has a legacy of
            50 years and counting.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: +60 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          key="3"
        >
          <div className=" my-6 flex justify-center  md:justify-start md:flex md:ml-6">
            <Link to="/About/AboutLKCTC">
              <button
                className="bg-[#32727A] text-white text-xs tracking-wide px-14 py-4 rounded-lg "
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                KNOW MORE
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center lg:relative lg:-top-[28rem] lg:-mb-[370px] lg:justify-end -z-10">
        <div className="relative top-0">
          <div className="overflow-hidden border-4 border-[#32727A] h-[250px] absolute right-2 w-[250px] md:right-5 rounded-full md:h-[450px] md:w-[450px] lg:h-[520px] lg:w-[500px]" />
          <div className="absolute h-[200px] w-[200px] -top-[20px] right-0">
            <img
              src={Dot}
              alt=""
              // objectFit="cover"
              className="flex h-[200px] w-[200px]"
            />
          </div>
          <div className="    saturate-200 ">
            <img
              src={AboutImg}
              alt=""
              className="h-[240px] w-[240px] ml-4  rounded-full md:h-[450px] md:w-[450px] md:ml-10 md:mt-1 lg:h-[520px] lg:w-[500px]"
            />
          </div>
          <div className="absolute md:-mt-28 -mt-16">
            <div className="rounded-full  relative w-max ">
              <div className="md:p-2 bg-white rounded-full">
                <div
                  style={{ animationDuration: "20s" }}
                  className=" flex h-[80px] w-[80px] md:h-[150px] md:w-[150px] rounded-full  items-center justify-center  border-2 border-dashed  border-l-blue-900 border-r-[#32727A] border-t-blue-900 border-b-[#32727A]   animate-spin"
                />
              </div>
              <div className="absolute h-full w-full flex items-center justify-center  bottom-0  ">
                <div className="rounded-full bg-white  ">
                  <img
                    src={Logo}
                    alt=""
                    className="md:h-[120px] md:w-[120px] h-[48px] w-[48px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLKCTC;
