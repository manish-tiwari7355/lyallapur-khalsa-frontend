import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

// swiper modules
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AboutLKCTC from "../../components/Home/AboutLKCTC";
import styled from "./index.module.css";
import Card from "../../components/Home/AboutLKCTC/Card";
import MediaCoverage from "../../components/Home/AboutLKCTC/MediaCoverage";
import OurRecruiters from "../../components/OurRecruiters";
import { OurCourses } from "../../components/Home/OurCourses";
import OurProudPlacements from "../OurProudPlacements";
import PopupImage from "../../components/Home/PopupImage";
import ScrollToHeading from "../../components/ScrollToHeading";
import { NoticeboardTab } from "../../components/Home/NoticeboardTab";
import { LiveUrl } from "../../apiUtils";

const Home = () => {
  document.title = "Home";

  const [open, setOpen] = useState(true);
  const [subTabs, setSubTabs] = useState("schoolOfEngineering");
  const [noticeBoard, setNoticeBoard] = useState([]);

  const tawkMessengerRef = useRef();

  const closeModal = () => setOpen(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data) => {
    const body = { ...data };
    axios.post(`${LiveUrl}/api/enquiryForm`, { ...body }).catch((err) => {
      if (err?.response?.status === 500) {
        showToastWarning();
      } else {
        showToastMessage();
        reset();
      }
    });
  };

  const tabhandle = (e) => {
    setSubTabs(e);
  };

  const showToastMessage = () => {
    toast.success("Form submitted successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const showToastWarning = () => {
    toast.warn("Your enquiry already submitted", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const fetchNews = () => {
    axios
      .get(`${LiveUrl}/api/noticeboard`)
      .then((response) => setNoticeBoard(response?.data?.data));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [open]);

  return (
    <div>
      {/* <ScrollToHeading offset="80"> */}
      <div className="relative h-screen min-h-[28rem] overflow-visible">
        <div className="home z-20 h-screen w-full overflow-hidden">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className=" h-screen"
          >
            <SwiperSlide>
              <div className="h-full w-full">
                <div
                  className={`absolute left-0 right-0 top-0 z-10 h-full w-full ${styled.sliderBgOne}`}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full">
                <div
                  className={`absolute left-0 right-0 top-0 z-10 h-full w-full ${styled.sliderBgTwo}`}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full">
                <div
                  className={`absolute left-0 right-0 top-0 z-10 h-full w-full ${styled.sliderBgThree}`}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full">
                <div
                  className={`absolute left-0 right-0 top-0 z-10 h-full w-full ${styled.sliderBgFour}`}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full">
                <div
                  className={`absolute left-0 right-0 top-0 z-10 h-full w-full ${styled.sliderBgFive}`}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full">
                <div
                  className={`absolute left-0 right-0 top-0 z-10 h-full w-full ${styled.sliderBgSix}`}
                ></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full">
                <div
                  className={`absolute left-0 right-0 top-0 z-10 h-full w-full ${styled.sliderBgSeven}`}
                ></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute top-0 z-50 h-full left-[5%] right-[5%]">
          <div className="w-[90%] h-full flex items-center justify-center mx-auto">
            <motion.div
              initial={{ opacity: 0, translateY: +60 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
              key="modal"
            >
              <div className="text-center ">
                <div className=" w-[80%] md:w-[70%] mx-auto">
                  <h1 className="  text-center text-[30px] font-bold  text-white leading-9 xs:leading-[50px] xs:text-[45px] md:leading-[49.5px] lg:text-[68px] lg:leading-[78px]">
                    Lyallpur Khalsa College Technical Campus
                  </h1>
                  <h1 className="mb-10 text-base font-semibold text-white md:text-lg mt-6">
                    Cantt. Road, Jalandhar
                  </h1>
                </div>
                <Link to="/Contact">
                  <button
                    type="button"
                    className="rounded-[5px]  bg-[#32727a] px-[20px] py-[17.5px] text-[10px] font-medium tracking-[3px] text-white hover:bg-white hover:text-black w-[180px]"
                  >
                    CONTACT US
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* _______________ */}

      {/* _________OUR COURSES____________ */}
      <div className="mb-[250px] ">
        <OurCourses subTabs={subTabs} tabhandle={tabhandle} />
      </div>
      {/* _____________Explore the Noticeboard___________ */}
      <div className="mt-10" id="noticeboard">
        <NoticeboardTab />
      </div>
      {/* _____________ABOUT LKCTC___________ */}
      <div className="">
        <AboutLKCTC />
      </div>
      <Card />
      {/* _______________________ */}
      {/* ___________OurProudPlacements____________ */}
      <OurProudPlacements />
      {/* _____________OUR RECRUITERS___________ */}
      <OurRecruiters />
      {/* _______________________ */}
      {/* _____________ENQUIRY FORM___________ */}
      <div className="enquiry">
        <form
          onSubmit={handleSubmit((data) => {
            handleSubmitForm(data);
          })}
        >
          <div className="flex justify-center py-5 relative">
            <div className="w-[95%] md:w-[65%] mx-4 max-w-[1000px] ">
              <div className=" flex gap-20 justify-center">
                <div className="mt-20  pb-10 text-3xl flex justify-center font-bold md:text-5xl">
                  <motion.div
                    initial={{ opacity: 0, translateY: +60 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    key="modal"
                    id="enquiry-form"
                  >
                    <h1 className=" border-l-2 pl-4   text-white">
                      Enquiry Form
                    </h1>
                  </motion.div>
                </div>
              </div>

              <div className="md:gap grid md:grid-cols-2 md:gap-6">
                <div className="group relative z-0 mb-6 w-full">
                  <input
                    id="firstName"
                    placeholder="First name"
                    {...register("firstName", { required: true })}
                    className="border w-full focus:border-none px-1.5 py-4 focus:outline-none focus:ring-0 text-sm "
                    type="text"
                  />
                  {errors.lastName?.type === "required" && (
                    <p className="mt-1 text-[14px] text-red-500" role="alert">
                      FirstName is required
                    </p>
                  )}
                </div>
                <div className="group relative z-0 mb-6 w-full">
                  <input
                    id="lastName"
                    placeholder="Last Name"
                    {...register("lastName", { required: true })}
                    className="border w-full focus:border-none px-1.5 py-4 text-sm focus:outline-none focus:ring-0"
                    type="text"
                  />
                  {errors.lastName?.type === "required" && (
                    <p className="mt-1 text-[14px] text-red-500" role="alert">
                      LastName is required
                    </p>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="group relative z-0 mb-6 w-full">
                  <input
                    type="tel"
                    id="phone"
                    pattern="[0-9]{10}"
                    {...register("phone", { required: true })}
                    className="border w-full focus:border-none px-1.5 py-4 text-sm focus:outline-none focus:ring-0"
                    placeholder="Phone"
                  />
                  {errors.phone?.type === "required" && (
                    <p className="mt-1 text-[14px] text-red-500" role="alert">
                      Phone number is required
                    </p>
                  )}
                </div>
                <div className="group relative z-0 mb-6 w-full">
                  <input
                    type="email"
                    id="emil"
                    {...register("email", { required: true })}
                    className="border w-full focus:border-none px-1.5 py-4 text-sm focus:outline-none focus:ring-0"
                    placeholder="email"
                  />
                  {errors.email?.type === "required" && (
                    <p className="mt-1 text-[14px] text-red-500" role="alert">
                      Email is required
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <select
                  {...register("courseInterested", { required: true })}
                  className="w-full px-1.5 py-4 text-sm text-gray-600"
                >
                  <option value="First Choice" className="text-sm hidden">
                    Course Interested
                  </option>
                  <option value="Second Choice" className="text-sm">
                    First Choice{" "}
                  </option>
                  <option value="Third Choice" className="text-sm">
                    Second Choice{" "}
                  </option>
                  <option value="Fourth Choice" className="text-sm">
                    Third Choice
                  </option>
                </select>
                {errors.courseInterested?.type === "required" && (
                  <p className="mt-1 text-[14px] text-red-500" role="alert">
                    courseInterested is required
                  </p>
                )}
              </div>
              <div className="my-5">
                <textarea
                  rows={4}
                  id="message"
                  {...register("message", { required: true })}
                  className="border focus:border-0 w-full focus:border-none px-1.5  focus:outline-none focus:ring-0"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <input
                  type="submit"
                  // onClick={showToastMessage}
                  className="mb-20 focus:outline-none focus:border-0  rounded-full bg-[#32727A] px-10 py-2.5 text-center text-lg font-normal text-white hover:bg-[#20dcc8]"
                />
                <ToastContainer
                  position="top-center"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            </div>
            {/* _____circle-image____ */}
            <div className=" absolute hidden md:flex w-[150px] h-[150px] md:right-2 xl:right-[10%] rounded-full p-5 justify-center items-center text-white font-bold enquiry2 z-20 text-xl lg:w-[180px] lg:h-[180px] ">
              ADMISSION
            </div>
          </div>
        </form>
      </div>
      {/* _____________MEDIA COVERAGE___________ */}
      <MediaCoverage />
      <div className="">
        {" "}
        {/* <TawkMessengerReact
          propertyId="63c7c6da47425128790e51fe"
          widgetId="1gn261hsl"
          ref={tawkMessengerRef}
        /> */}
        <TawkMessengerReact
          propertyId={process.env.REACT_APP_PROPERTY_ID}
          widgetId={process.env.REACT_APP_WIDGET_ID}
          ref={tawkMessengerRef}
        />
      </div>

      {/* _____________POP-UP IMAGE___________ */}

      <PopupImage
        open={open}
        closeModal={closeModal}
        noticeBoard={noticeBoard}
      />

      {/* {isVisible && noticeBoard?.length > 0 && (
        <div
          onClick={() => {
            setIsVisible(false);
          }}
          className="fixed z-[500]   top-10 left-0 w-full h-screen overflow-hidden backdrop-blur-xs bg-black/30 lg:block"
        >
          <div key={noticeBoard?.[0]?.id} className="mt-auto  ">
            <div className=" mt-28 h-[22rem] md:h-[34rem] lg:h-[36rem] xl:h-[38rem] w-[85%] lg:mt-36 md:w-[80%] lg:w-[70%] 2xl:w-[80%] mx-auto">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScCEWfZ0a0KlfcLL0LGSbjKq9BFN6CDAWaqReIqzhWQv830lQ/viewform"
                target="blank"
                className="h-full w-full"
              >
                <img
                  src={
                    noticeBoard?.[0]?.media[noticeBoard?.[0]?.media.length - 1]
                      ?.url
                  }
                  alt="noticeBord"
                  className="w-full h-full mx-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      )} */}
      {/* </ScrollToHeading> */}
    </div>
  );
};

export default Home;
