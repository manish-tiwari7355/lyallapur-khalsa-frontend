import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function OurCourseCard({activState,...props}) {

  return (
    <div
      className={`flex flex-col h-full w-[300px] mx-auto ${
        props?.indxz === activState
          ? `mt-20 scale-125 transition ease-in-out duration-400 `
          : ` mt-20 ease-in-out scale-100`
      }  `}
    >
      <div
        className={` relative flex rounded-[20px] object-cover overflow-hidden mx-auto ${
          props?.indxz === activState ? `h-[200px] w-[200px] xs:h-[260px] xs:w-[260px]  ` : `h-[240px] w-[240px]`
        }`}
      >
        <img src={props?.item?.image} alt="" className="w-full imgGradent " />
        <div
          className="w-full h-full absolute opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle farthest-corner at 100% 0%, rgba(8, 28, 58, 0.8) 31%, rgba(50, 114, 122, 0.8))",
          }}
        />
      </div>
      {props?.indxz === activState && (
        <div className="max-w-[500px] pt-[15px]">
          <div className="flex flex-col h-[220px]">
            <motion.div
              initial={{ opacity: 0, rotate: 5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              // viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key="1"
            >
              <div className={ `${props?.item?.style||`text-[22px]` } text-center px-10 items-center  my-[15px] text-[#333] font-bold`}>
                {props?.item?.heading}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              key="2"
            >
              <div className="  transform: rotate(20deg) text-[12px] mb-[20px] flex justify-center items-center px-10 text-center text-[grey] font-semibold ">
                {props?.item?.para}
              </div>
            </motion.div>
          </div>
          <div className="flex px-10 flex-row md:justify-between">
            <Link
              to={props?.item?.moreDetails ||'#'}
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              <div
                className=" px-2 h-[40px]  py-[20px] flex justify-center items-center rounded-[30px] text-white font-bold text-sm mr-5 md:mr-0"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #081c3a 40%, #32727a)",
                }}
              >
                More details
              </div>
            </Link>
            <motion.div
              initial={{ opacity: 0, rotate: 5, scale: 0.6 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              key="3"
            >
              <div>
                <Link
                  to={props?.item?.viewAll||'#'}
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <div className=" h-[40px] px-[8px] py-[20px] flex justify-center items-center  text-sm font-semibold">
                    View All
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
