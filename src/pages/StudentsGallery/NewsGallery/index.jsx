import axios from "axios";
import React, { useEffect, useState } from "react";
import { LiveUrl } from "../../../apiUtils";
import { GalleryPopup } from "../../../components/GalleryImagePopup/GalleryPopup";

import HeaderBanner from "../../../components/HeaderBanner";

const NewsGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);
  const [newsGallery, setNewsGallery] = useState([]);

  const fetchNews = () => {
    axios
      .get(`${LiveUrl}/api/new`)
      .then((response) => setNewsGallery(response?.data?.data));
  };

  useEffect(() => {
    fetchNews();
  }, []);
  document.title = "News Gallery";

  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="NewsGallery"
          title="News Gallery"
          currentPage="News Gallery"
        />
        <div className="bannerBotttom h-10 w-full"></div>
      </div>
      <div className="md:px-[2rem] lg:px-[6rem]">
        <div
          id="news-gallery"
          className=" primary-color xs container mx-4 mt-8 mb-16  w-72 border-l-2  border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]"
        >
          News Gallery
        </div>
      </div>

      <div className="p-5 ">
        {newsGallery?.map((elm) => (
          <div key={elm?.id}>
            <div className=" p-[10px] md:ml-16 lg:ml-6 2xl:ml-[10%] primary-color text-2xl font-bold border-l-2 mt-8 border-[#32727a]">
              {elm?._id}
            </div>
            <div className="grid max-w-7xl grid-cols-1 gap-5 p-[10px] xs:grid-cols-2 md:px-16  lg:px-0 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:ml-auto xl:mr-auto 2xl:ml-auto 2xl:mr-auto">
              {elm?.data?.map((item) => (
                <div key={item?._id}>
                  <div className="    ">
                    <div
                      className="border h-[200px] w-[200px] mx-auto"
                      onClick={() => setIsVisible(true)}
                      style={{
                        border: "5px solid",
                        borderColor: "#081c3a #32727a #32727a #081c3a",
                      }}
                    >
                      <img
                        src={item?.media[0]?.url}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {isVisible && (
          <div
            onClick={() => setIsVisible(false)}
            className="backdrop-blur-xs fixed top-0 left-0 z-50 h-screen w-full overflow-hidden bg-black/80"
          >
            <GalleryPopup
              Activities={newsGallery?.map((item) => item?.data)?.flat()}
              setIsVisible={setIsVisible}
              thumbsSwiper={thumbsSwiper}
              setThumbsSwiper={setThumbsSwiper}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsGallery;
