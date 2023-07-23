// import Image from 'next/image';
import Acme from "../../assets/images/001_1.jpg";
import Avis from "../../assets/images/002_2.jpg";
import Axis from "../../assets/images/003_1.jpg";
import Birla from "../../assets/images/004_1.jpg";
import Cmc from "../../assets/images/005_2.jpg";
import Correl from "../../assets/images/006_2.jpg";
import Dlf from "../../assets/images/007_2.jpg";
import Icici from "../../assets/images/008_2.jpg";
import Eespl from "../../assets/images/009_1.jpg";
import Hdfc from "../../assets/images/010_1.jpg";
import Hyundai from "../../assets/images/011_2.jpg";
import Beta from "../../assets/images/012_1.jpg";
import Impinge from "../../assets/images/013_2.jpg";
import Markted from "../../assets/images/014_2.jpg";
import Samsung from "../../assets/images/015_2.jpg";
// import Iniz from "../../assets/images/016_2.jpg";
import AdvanceSol from "../../assets/images/advance solutions.png"; 
import JaroEdu from "../../assets/images/Jaro_Education_Logo.png"; 
import WiproPrimary from "../../assets/images/Wipro_Primary_Logo_Color.png"; 
import Topper from "../../assets/images/Toppr_logo.png"; 
import Infosys from "../../assets/images/logo-infosys.png"; 
import NetSmartz from "../../assets/images/netsmartz.png"; 
import React from "react";
import { motion } from "framer-motion";


const OurRecruiters = () => {
  const Recruiters = [
    { img: Acme, key: "1" },
    { img: Avis, key: "2" },
    { img: Axis, key: "3" },
    { img: Birla, key: "4" },
    { img: Cmc, key: "5" },
    { img: JaroEdu, key: "17" },
    { img: Topper, key: "19" },
    { img: Correl, key: "6" },
    { img: Dlf, key: "7" },
    { img: Infosys, key: "20" },
    { img: Icici, key: "8" },
    { img: Eespl, key: "9" },
    { img: Hdfc, key: "10" },
    { img: Hyundai, key: "11" },
    { img: Beta, key: "12" },
    { img: WiproPrimary, key: "18" },
    { img: Impinge, key: "13" },
    { img: NetSmartz, key: "21" },
    { img: Markted, key: "14" },
    { img: Samsung, key: "15" },
    { img: AdvanceSol, key: "16" },
  

  ];
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, translateY: +60 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        key="modal"
      >
        <div className="mt-20 ml-3 flex justify-center pb-10 text-3xl font-bold md:text-5xl">
          <motion.div
            initial={{ opacity: 0, translateY: +60 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            key="modal"
          >
            <h1 className=" border-l-4 border-[#32727A] pl-10 xs:pl-4  text-[#081C3A]">
              Our <span className="pl-1 text-[#32727A]">Recruiters</span>
            </h1>
          </motion.div>
        </div>
      </motion.div>
      <div className="marquee h-[200px]">
        <div className="marquee--inner ">
          <div className="flex gap-x-10  ">
            {Recruiters.map((item) => (
              <div
                key={item?.key}
                className="mspan h-[80px] w-[150px] border-8 border-white  shadow-lg  md:h-[110px] md:w-[200px] "
              >
                <img
                  src={item.img}
                  alt=""
                  className="rounded-full lg:rounded-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRecruiters;
