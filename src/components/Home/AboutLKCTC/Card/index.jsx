import React from "react";
import ImageExperiencedTeachers from "../../../../assets/images/Experienced-teachers.png";
import QualityEducation from "../../../../assets/images/Quality-education.png";
import MoreOpportunity from "../../../../assets/images/Opportunities.png";
import Placements from "../../../../assets/images/Placement-Drive.jpg";
import { motion } from 'framer-motion';

const Card = () => {
  const card = [
    { Image: ImageExperiencedTeachers, title: "Experienced Teachers" },
    { Image: QualityEducation, title: "Quality Education" },
    { Image: MoreOpportunity, title: "More Opportunities" },
    { Image: Placements, title: "Placements" },
  ];
  return (
    <div>
      <h1 className=" text-[#081c3a] text-lg text-center font-bold my-10 lg:text-start max-w-[1400px] lg:mx-auto lg:text-[22px]">
        WHY WE'RE DIFFERENT
      </h1>
      <div className="mx-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:px-2 max-w-[1400px] lg:mx-auto">
        {card.map((item,idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0, transitionDelay: '10' }}
            transition={{ duration: 1.0, delay: idx * 0.2 }}
          >
          <div className="hover:scale-105 transition duration-500">
            <div className="flex justify-center -mb-20 relative z-10 mt-4">
              <img
                src={item?.Image}
                alt=""
                className="rounded-full border h-[180px] w-[180px] border-t-[#081c3a] border-b-[#32727A]  border-l-[#081c3a] border-r-[#32727A]  saturate-200  border-x-4 border-y-4 "
              />
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={item?.Image}
                alt=""
                className="rounded-lg  h-[220px] md:h-[260px]"
              />
              <div className="absolute bottom-0 text-white text-2xl font-bold text-center h-full bg-[#081c3a]/80 w-full flex items-end">
                <p className=" text-center px-10 mb-10">{item?.title}</p>
              </div>
            </div>
          </div></motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;
