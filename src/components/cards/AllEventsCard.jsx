import React, { useState } from "react";

import { AllEventsPopup } from "./AllEventsPopup";
import { useEffect } from "react";
import Popup from "reactjs-popup";
import { ImCancelCircle } from "@react-icons/all-files/im/ImCancelCircle";

const AllEventsCard = ({ data }) => {
  const { title, description, media } = data;

  // console.log("data", data);
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);

    // setPopupData({});
  };

  function truncateString(str, n) {
    if (str.length > n) {
      return str.substring(0, n) + "...";
    } else {
      return str;
    }
  }

  const truncatedTitle = truncateString(title, 50);
  const truncatedDescription = truncateString(description, 100);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [open]);

  return (
    <>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg mt-5 border-2 mx-auto overflow"
        key={title}
      >
        <img
          className="w-full h-[350px] md:h-[384px]"
          src={media[0]?.url}
          alt={media[0]?.url}
        />
        {/* //! Date section */}
        {/* <div className="px-6 pt-4">
          <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2">
            <span className="flex flex-row items-center">
              <GoCalendar className="mr-2" />
              11/02/2023
            </span>
          </div>
        </div> */}
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2">{truncatedTitle}</div>
          <p className="text-gray-700 text- text-justify text-sm">
            {truncatedDescription}
          </p>
        </div>
        <div className=" flex justify-end mb-2">
          <div>
            <button
              type="button"
              className="text-white bg-[#081C3A] hover:bg-[#0a3a81] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => setOpen((o) => !o)}
            >
              Read More
            </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
              <div className="modal">
                <div className="close" onClick={closeModal}>
                  <ImCancelCircle className="text-xl md:text-2xl hover:text-blue-800" />
                </div>
                <AllEventsPopup data={data} />
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEventsCard;
