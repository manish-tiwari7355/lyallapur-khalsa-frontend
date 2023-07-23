import excellence from "../../../assets/images/excellence.png";
import handShake from "../../../assets/images/handshake.png";
import idea from "../../../assets/images/idea.png";
import innovation from "../../../assets/images/innovation.png";
import leadership from "../../../assets/images/leadership.png";
import networking from "../../../assets/images/networking.png";
import rightArrow from "../../../assets/images/right-arrow-3.png";
import rightArrowBlue from "../../../assets/images/right-arrow-4.png";

import React from "react";

import HeaderBanner from "../../../components/HeaderBanner";

const CoreValues = () => {
  document.title = "Core Values";
  const page = [
    {
      key: "excellence",
      image: excellence,
      bgColor: "#081C3A",
      title: "Striving for Excellence",
      paragraph:
        "LKCTC works untiringly to ensure impeccable quality and excellence in Learning, Teaching and Research across varied programmes.",
    },
    {
      key: "handShake",
      image: handShake,
      bgColor: "#32727A",
      title: "Commitment to Society and Environment",
      paragraph:
        "LKCTC is committed to serve the society through its various outreach and extension activities and recognizes that sustainable development is imperative.",
    },

    {
      key: "idea",
      image: idea,
      bgColor: "#081C3A",
      title: "Collaboration",
      paragraph:
        "LKCTC believes in cooperative efforts and seeks input from all stake holders of the college and industrial partners while achieving institute’s goals.",
    },
  ];
  const pages = [
    {
      key: "leadership",
      image: leadership,
      bgColor: "#32727A",
      title: "Fostering Integrity, Diversity and Leadership",
      paragraph:
        "LKCTC upholds integrity, diversity and inclusivity among students, faculty members and staff, fostering value-based leadership in decision making and actions.",
      Img: {},
    },
    {
      key: " networking",
      image: networking,
      bgColor: "#081C3A",
      title: "Nourishing Equity and Cohesion",
      paragraph:
        "LKCTC promotes team work and cohesive environment, in the classrooms and beyond, by ensuring equity irrespective of social background.",
    },
    {
      key: " innovation",
      image: innovation,
      bgColor: "#32727A",
      title: "Technological Innovation and Growth",
      paragraph:
        "LKCTC keeps pace with global advances in technology and incorporates the same in teaching to prepare students for successful careers.",
    },
  ];
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="CoreValueBanner"
          title="Core Values"
          currentPage="Core Values"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="mb-20 ">
        <div className="flex justify-center py-20  text-3xl font-bold ">
          <h1 className=" border-l-2 border-[#32727A] pl-4 text-[#081C3A]  md:text-5xl">
            Core
            <span className="pl-1 text-[#32727A]">Values</span>
          </h1>
        </div>
        <div className=" md:flex  ">
          {/* <div className=''>
          <div>
            <Image src={rightArrowBlue} alt='' className='' />
          </div>
          <div>
            <Image src={rightArrow} alt='' className='' />
          </div>
        </div> */}

          <div className="space-y-10  ">
            {page.map((element) => (
              <div
                className="mx-6 border py-10 text-center xs:flex md:mr-2 md:flex md:flex-row-reverse"
                key={element?.key}
              >
                <div className="flex justify-center">
                  <div
                    className={`bg-[${element?.bgColor}] mr-4 h-[60px] w-[60px] rounded-full p-2`}
                  >
                    <div className="relative flex h-full w-full  ">
                      <img
                        src={element?.image}
                        alt="logo Img"
                        className={`bg-[${element?.bgColor}] rounded-full `}
                      />
                    </div>
                  </div>
                </div>

                <div className="xs:w-3/4">
                  <div className=" mx-6 pt-2 text-2xl font-bold text-[#304975] md:text-right ">
                    {" "}
                    {element.title}
                  </div>
                  <div className=" mx-8 pt-4 text-center text-xl tracking-[0.03rem] text-slate-400 md:text-right">
                    {element.paragraph}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="ml-3 hidden border-l md:block">
            <div className="-ml-4 pt-[6rem] ">
              <img
                src={rightArrowBlue}
                alt=""
                width="30"
                height="30"
                className=""
              />
            </div>
            <div className=" -ml-4 pt-[30rem] lg:pt-[21.5rem] xl:pt-[15.5rem] 2xl:pt-[13.5rem]">
              <img
                src={rightArrow}
                alt=""
                width="30"
                height="30"
                className=" rotate-180"
              />
            </div>
            <div className="2xl:[20rem] -ml-4  pt-[25rem] lg:pt-[19.2rem] 2xl:pt-[13.5rem]">
              <img
                src={rightArrowBlue}
                width="30"
                height="30"
                alt=""
                className=""
              />
            </div>
          </div>
          <div className="mt-10 space-y-10 md:ml-3">
            {pages.map((element) => (
              <div
                className="mx-6 border py-10 text-center xs:flex md:mx-1 md:mr-2 md:flex"
                key={element?.key}
              >
                <div className="flex justify-center">
                  <div
                    className={`bg-[${element?.bgColor}] ml-3 h-[60px] w-[60px] rounded-full p-2`}
                  >
                    <div className="relative flex h-full w-full  ">
                      <img
                        key={element?.key}
                        src={element?.image}
                        alt=""
                        className={` `}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" mx-6 pt-2 text-2xl font-bold text-[#304975] md:text-left">
                    {element.title}
                  </div>
                  <div className=" mx-8 pt-4 text-center text-xl tracking-[0.03rem] text-slate-400 md:text-left ">
                    {element.paragraph}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
