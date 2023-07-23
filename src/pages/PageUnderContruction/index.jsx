import React from "react";
import Background from "../../assets/images/Home-page-slider-1.png";

const PageUnderConstruction = () => {
  return (
    <div>
      <div
        class="w-full bg-cover h-screen -mb-16"
        style={{
          backgroundImage: `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),url(${Background})`,
        }}
      >
        <div class="relative top-[50%] justify-center text-center flex text-3xl md:text-5xl xl:text-6xl  text-white font-bold">
          <h2>The page is under construction</h2>
        </div>
      </div>
    </div>
  );
};

export default PageUnderConstruction;
