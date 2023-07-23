import { ImCancelCircle } from "@react-icons/all-files/im/ImCancelCircle";
import React, { useState } from "react";
import Popup from "reactjs-popup";

const PopupImage = (props) => {
  const [height, setHeight] = useState(null);
  console.log("height", height);

  const handleImageLoad = (event) => {
    const { height } = event.target;
    setHeight(height);
  };
  return (
    <Popup open={props.open} closeOnDocumentClick onClose={props.closeModal}>
      <div className="modal">
        <div className="close2" onClick={props.closeModal}>
          <ImCancelCircle className="text-xl md:text-2xl hover:text-blue-800" />
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScCEWfZ0a0KlfcLL0LGSbjKq9BFN6CDAWaqReIqzhWQv830lQ/viewform"
          target="blank"
          className="h-full w-full "
          onClick={props.closeModal}
        >
          <img
            src={
              props.noticeBoard?.[0]?.media[
                props.noticeBoard?.[0]?.media.length - 1
              ]?.url
            }
            onLoad={handleImageLoad}
            alt="noticeBord"
            className={`w-full h-auto  ${
              height > 1000 ? "sm:h-[90vh]" : "h-full"
            }`}
            // className="w-full h-auto sm:h-[90vh]"
          />
        </a>
      </div>
    </Popup>
  );
};

export default PopupImage;
