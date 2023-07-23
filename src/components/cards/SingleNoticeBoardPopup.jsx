import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export function SingleNoticeBoardPopup({ data, singleNotice }) {
  const { title, description, media } = singleNotice;
  return (
    <div className="container mx-auto my-4 p-2 bg-gray-100 rounded-lg  ">
      <h1 className="text-lg lg:text-3xl font-bold mb-4 pl-4">{title}</h1>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <Swiper
            style={{
              "--swiper-navigation-color": "#081C3A",
              "--swiper-pagination-color": "#fff",
            }}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiperPopup"
          >
            {media?.map((item) => (
              <SwiperSlide>
                <img
                  src={item?.url}
                  alt="img"
                  className="w-full rounded-lg shadow-lg h-[60px] md:h-[100px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* //! Date Section */}
          {/* <div className="inline-block bg-gray-300 rounded-full px-3 py-1 mt-3 text-md font-semibold text-gray-700 mr-2 mb-2">
            <span className="flex flex-row items-center">
              <GoCalendar className="mr-2" />
              11/02/2023
            </span>
          </div> */}
          <p
            className={`text-base mb-3 h-[300px]   border border-gray-300 mt-2 p-2 ${
              description && description.length > 300
                ? "overflow-y-scroll md:h-[200px]"
                : "overflow-hidden h-auto"
            } `}
          >
            {description}
          </p>
        </div>
        {/* <div className="w-full md:w-1/3 px-4">
                <img
                  src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                  alt="Small"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <img
                  src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                  alt="Small"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <img
                  src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                  alt="Small"
                  className="w-full rounded-lg shadow-lg mb-4"
                />
              </div> */}
      </div>
    </div>
  );
}
