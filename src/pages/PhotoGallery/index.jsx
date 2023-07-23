import React from 'react'
import HeaderBanner from '../../components/HeaderBanner'
import { FiArrowRight } from "@react-icons/all-files/fi/FiArrowRight";
import { arr } from "./data";

const PhotoGallery = () => {
    return (
        <div>
            <div className="">
                <div>
                    <HeaderBanner
                        bgImage="CarrierBanner"
                        title="Photo Gallery"
                        currentPage="Photo Gallery"
                    />
                    <div className="bannerBotttom h-[3.5rem] w-full"></div>
                </div>
                <div className=" md:px-[2rem] lg:px-[4rem] xl:px-[8rem] 2xl:px-[18rem] mb-[60px]">
                    <div className="  container mx-4 mt-8 w-72 border-l-4 border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mt-20 xs:w-[95%]  xs:text-4xl sm:w-[100%] md:mx-0 lg:text-5xl  ">
                        <h1 className='primary-color'>Photo <span className="secondary-color">Gallery</span></h1>
                        <p className="text-[#696969] text-[16px] md:text-[20px] font-semibold leading-5">Explore our Photo Gallery</p>
                    </div>
                </div>
            </div>
            <div className=" grid grid-cols-1 md:grid  xxs:px-14 xs:px-4 xs:grid-cols-2  sm:px-8 md:px-0 md:grid-cols-3 lg:grid-cols-4 max-w-[1300px] mx-auto my-5 px-5">
                {arr?.map((item) => (
                    <div className="mb-5 px-[10px]" key={item?.id}>
                        <img src={item?.image} className="w-full h-[200px]" alt="" srcset="" />
                        <div className="flex w-full shadow-[0_10px_30px_0_rgb(0,0,0,0.25)] rounded-b-[5px] py-5 px-[10px] justify-between items-center bg-[#fff]">
                            <h1 className="text-[20px] lg:text-[16px] text-[#081c3a] leading-5 font-bold text-center">{item?.heading}</h1>
                            <div className="text-[22px] text-[#32727a] font-semibold text-center"><FiArrowRight /></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PhotoGallery