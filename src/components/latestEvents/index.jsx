// import Image from 'next/image';
import React from "react";

// import convocation from "@/../public/images/convocation.jpg";
import convocation from "../../assets/images/convocation.jpg";
const Events = () => {
  const leftContent = [
    {
      id: 1,
      Img: convocation,
      title: "LATEST EVENTS FROM LKCTC",
      heading:
        "Overwhelming Response in #Admissions in #Hotel #Management at #Lyallpur #Khalsa #College #Technical #Campus Jalandhar",
      paragraph:
        "School of Hotel Management at Lyallpur Khalsa College Technical Campus Jalandhar is receiving an overwhelming response in admissions. Students are showing tremendous interest in BHMCT (AICTE), BHMCT (UGC/IKGPTU) & B. Voc. (HMCT) courses. Celebration of such moment is captured by cake cutting ceremony. Director Academic Affairs, S.S.S. Chatha, Director Dr. SK Sood congratulated the Hotel Management team for commendable efforts. The Management looks forward for achieving all set targets on the path of Vision and Mission of the School of  Hotel Management.",
    },
  ];
  return (
    <div className="mx-auto w-[52%] rounded-md border bg-gray-100 p-10">
      {leftContent?.map((item) => (
        <div key={item?.id}>
          <div>
            <img src={item?.Img} alt="" className="w-426 h-264" />
          </div>
          <div className="pb-3 text-xl font-bold tracking-wider text-[#081C3A]">
            {item?.title}
          </div>
          <div className="pb-6 text-2xl font-bold text-gray-700">
            {item?.heading}
          </div>
          <div className="text-lg text-slate-500">{item?.paragraph}</div>
        </div>
      ))}
      <button className="my-6 rounded-md bg-[#32727A] px-8 py-4 text-white hover:bg-teal-400">
        Know More
      </button>
    </div>
  );
};

export default Events;
