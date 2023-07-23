import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";
import { HiMail } from "@react-icons/all-files/hi/HiMail";
import { IoCall } from "@react-icons/all-files/io5/IoCall";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";

import HeaderBanner from "../../components/HeaderBanner";
import { toast, ToastContainer } from "react-toastify";
import { LiveUrl } from "../../apiUtils";

const Contact = () => {
  const [tabSwitch, setTabSwitch] = useState("SCHOOL OF ENGINEERING"); // by default School of Engineering

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data) => {
    const body = { ...data };
    axios.post(`${LiveUrl}/api/contact`, { ...body }).catch((err) => {
      if (err?.response?.status === 500) {
        showToastWarning();
      } else {
        showToastMessage();
        reset();
      }
    });
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
    toast.warn("Your form already submitted", {
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

  document.title = "Contact";
  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="contact"
          title="Contact Us"
          currentPage="Contact Us"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>

      <div className="md:px-5 lg:pl-[6rem] lg:pr-[4rem]">
        <div className=" primary-color xs container mx-4 mt-8 mb-16  w-72 border-l-2  border-[#32727a] pl-3 text-3xl font-bold xxs:w-[90%] xs:mx-auto xs:mt-20 xs:w-[95%] xs:text-4xl sm:w-[70%] lg:w-[85%] lg:text-5xl xl:w-[65%] 2xl:w-[50%]">
          Get In Touch<span className="text-[#32727a]"> With Us</span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="max-w-[1200px]">
          <div className="mt-[60px ">
            <div className="flex flex-col  items-center justify-center md:flex-row">
              <button
                className={`  ${
                  tabSwitch === "SCHOOL OF ENGINEERING"
                    ? "bg-[#32727a]"
                    : "bg-[#081c3a]"
                }`}
                onClick={() => {
                  setTabSwitch("SCHOOL OF ENGINEERING");
                }}
              >
                <div className="flex h-[75px] w-[250px] md:w-[300px] items-center justify-center border-green-500 text-md md:text-[21px] font-bold text-[#fff]">
                  School of Engineering
                </div>
              </button>
              <button
                className={`mt-[20px] border-purple-500 md:ml-[14px] md:mt-0  ${
                  tabSwitch === "SCHOOL OF MANAGEMENT & IT"
                    ? "bg-[#32727a]"
                    : "bg-[#081c3a]"
                }`}
                onClick={() => {
                  setTabSwitch("SCHOOL OF MANAGEMENT & IT");
                }}
              >
                <div className="flex h-[75px] w-[300px] md:w-[350px] items-center justify-center border-blue-500 text-md md:text-[21px] font-bold text-[#fff]">
                  School of Management, IT & HM
                </div>
              </button>
            </div>
          </div>

          {tabSwitch === "SCHOOL OF MANAGEMENT & IT" && (
            <div className="flex flex-col items-center justify-center gap-x-5 px-[10px] pt-[60px] pb-[40px] lg:flex-row">
              <div className="mt-5 grid w-full justify-center rounded-[18px]  bg-white px-[20px] pt-[37px] pb-[20px] shadow-[0_0_20px_0_hsl(0deg,0%,86%)] md:w-[75%] lg:h-[275px]">
                <div className="flex max-w-[100%] justify-center text-center">
                  <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[3px] border-[#32727a] bg-[#081c3a] ">
                    <HiMail className="stroke-1 text-[30px] text-white" />
                  </div>
                </div>
                <div className="mt-[10px] w-auto text-center lg:mt-0">
                  <h5 className="text-[20px] font-semibold text-[#333]">
                    Send us a message
                  </h5>
                  <div className="mt-[10px] text-[17px]">
                    <div>
                      <a href="mailto:admin.office@kclimt.com?subject=admin.office%40kclimt.com">
                        admin.office@kclimt.com
                      </a>
                    </div>
                    <div>
                      <a href="mailto:kclimtjal@gmail.com?subject=kclimtjal%40gmail.com">
                        kclimtjal@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid w-full justify-center rounded-[18px]  bg-white px-[20px] pt-[37px] pb-[20px] shadow-[0_0_20px_0_hsl(0deg,0%,86%)] md:w-[75%] lg:h-[275px]">
                <div className="flex max-w-[100%] justify-center text-center">
                  <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[3px] border-[#32727a] bg-[#081c3a] ">
                    <IoCall className="stroke-1 text-[30px] text-white" />
                  </div>
                </div>
                <div className="mt-[10px] w-auto text-center lg:mt-0">
                  <h5 className="text-[20px] font-semibold text-[#333]">
                    Call Us
                  </h5>
                  <div className="mt-[10px] text-[17px]">
                    <div>
                      <a href="tel:0181-2350405-06">0181-2350405-06</a>
                      <br />
                      <a href="tel:0181-2350405-06">+91 9646904005</a>
                      <br />
                      <a href="tel:0181-2350405-06">+91 9814610383</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid w-full justify-center rounded-[18px]  bg-white px-[20px] pt-[37px] pb-[20px] shadow-[0_0_20px_0_hsl(0deg,0%,86%)] md:w-[75%] lg:h-[275px]">
                <div className="flex max-w-[100%] justify-center text-center">
                  <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[3px] border-[#32727a] bg-[#081c3a] ">
                    <MdLocationOn className="stroke-1 text-[30px] text-white" />
                  </div>
                </div>
                <div className="mt-[10px] w-auto text-center lg:mt-0">
                  <h5 className="text-[20px] font-semibold text-[#333]">
                    Address
                  </h5>
                  <div className="mt-[10px] text-[17px]">
                    <div>
                      <a href="tel:0181-2350405-06">
                        LKCTC, School of Management & IT Opp. Lyallpur Khalsa
                        College, G.T. Road, Jalandhar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid w-full justify-center rounded-[18px]  bg-white px-[20px] pt-[37px] pb-[20px] shadow-[0_0_20px_0_hsl(0deg,0%,86%)] md:w-[75%] lg:h-[275px]">
                <div className="flex max-w-[100%] justify-center text-center">
                  <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[3px] border-[#32727a] bg-[#081c3a] ">
                    <FaGlobe className="stroke-1 text-[30px] text-white" />
                  </div>
                </div>
                <div className="mt-[10px] w-auto text-center">
                  <h5 className="text-[20px] font-semibold text-[#333]">
                    Quick Links
                  </h5>
                  <div className="mt-[40px] flex text-[17px]">
                    <a
                      href="https://www.facebook.com/LKCTCJAL"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF className="mr-5 text-[34px] text-[#32727a]" />
                    </a>
                    <a
                      href="http://www.lkctc.edu.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGlobe className="text-[34px] text-[#32727a]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {tabSwitch === "SCHOOL OF ENGINEERING" && (
            <div className="flex flex-col items-center justify-center gap-x-5 px-[10px] pt-[60px] pb-[40px] lg:flex-row">
              <div className="mt-5 grid w-full justify-center rounded-[18px]  bg-white px-[20px] pt-[37px] pb-[20px] shadow-[0_0_20px_0_hsl(0deg,0%,86%)] md:w-[75%] lg:h-[275px]">
                <div className="flex max-w-[100%] justify-center text-center">
                  <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[3px] border-[#32727a] bg-[#081c3a] ">
                    <HiMail className="stroke-1 text-[30px] text-white" />
                  </div>
                </div>
                <div className="mt-[10px] w-auto text-center lg:mt-0">
                  <h5 className="text-[20px] font-semibold text-[#333]">
                    Send us a message
                  </h5>
                  <div className="mt-[10px] text-[17px]">
                    <div>
                      <a href="mailto:admin.office@kclimt.com?subject=admin.office%40kclimt.com">
                        admission@lkcengg.edu.in
                      </a>
                    </div>
                    <div>
                      <a href="mailto:kclimtjal@gmail.com?subject=kclimtjal%40gmail.com">
                        info@lkcengg.edu.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid w-full justify-center rounded-[18px]  bg-white px-[20px] pt-[37px] pb-[20px] shadow-[0_0_20px_0_hsl(0deg,0%,86%)] md:w-[75%] lg:h-[275px]">
                <div className="flex max-w-[100%] justify-center text-center">
                  <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[3px] border-[#32727a] bg-[#081c3a] ">
                    <IoCall className="stroke-1 text-[30px] text-white" />
                  </div>
                </div>
                <div className="mt-[10px] w-auto text-center lg:mt-0">
                  <h5 className="text-[20px] font-semibold text-[#333]">
                    Call Us
                  </h5>
                  <div className="mt-[10px] text-[17px]">
                    <div>
                      <a href="tel:0181-2350408">0181-2350408/400/412</a>
                      <br />
                      <a href="tel:9872476060">Mobile: 9872476060</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid w-full justify-center rounded-[18px]  bg-white px-[20px] pt-[37px] pb-[20px] shadow-[0_0_20px_0_hsl(0deg,0%,86%)] md:w-[75%] lg:h-[275px]">
                <div className="flex max-w-[100%] justify-center text-center">
                  <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[3px] border-[#32727a] bg-[#081c3a] ">
                    <MdLocationOn className="stroke-1 text-[30px] text-white" />
                  </div>
                </div>
                <div className="mt-[10px] w-auto text-center lg:mt-0">
                  <h5 className="text-[20px] font-semibold text-[#333]">
                    Address
                  </h5>
                  <div className="mt-[10px] text-[17px]">
                    <div>
                      <a href="tel:0181-2350405-06">
                        LKCTC, School of EngineeringCantt. Road, Jalandhar.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid w-full justify-center rounded-[18px]  bg-white px-[20px] pt-[37px] pb-[20px] shadow-[0_0_20px_0_hsl(0deg,0%,86%)] md:w-[75%] lg:h-[275px]">
                <div className="flex max-w-[100%] justify-center text-center">
                  <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[3px] border-[#32727a] bg-[#081c3a] ">
                    <FaGlobe className="stroke-1 text-[30px] text-white" />
                  </div>
                </div>
                <div className="mt-[10px] w-auto text-center">
                  <h5 className="text-[20px] font-semibold text-[#333]">
                    Quick Links
                  </h5>
                  <div className="mt-[40px] flex text-[17px]">
                    <a
                      href="https://www.facebook.com/LKCEngg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF className="mr-5 text-[34px] text-[#32727a]" />
                    </a>
                    <a
                      href="http://www.lkctc.edu.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGlobe className="text-[34px] text-[#32727a]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="z-[3] flex w-full flex-col items-center justify-center py-[40px] px-[10px] md:px-[20px] md:pb-[80px]">
        <div className="w-full max-w-[1300px] lg:flex lg:flex-row">
          {/* __________________GoogleMap_______________ */}
          <div className="h-[680px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.733475427074!2d75.6004422!3d31.3111108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5bcb2a31a8b7%3A0xa212ba939239a831!2sLyallpur%20Khalsa%20College%20Technical%20Campus%20(%20A%20merge%20entity%20of%20LKC%20Engg.%20%26%20KCLIMT)!5e0!3m2!1sen!2sin!4v1663839188864!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="mapLocation"
            ></iframe>
          </div>
          <div className="form w-full p-[20px] lg:ml-5 lg:px-5 lg:py-[60px]">
            <div className="mb-[40px] mt-[20px] w-full text-[21px] font-bold text-[#081c3a] md:text-[30px] lg:text-[30px]">
              Interested in discussing/Feedback?
            </div>
            {/* __________________Form_______________ */}
            <form
              onSubmit={handleSubmit((data) => {
                handleSubmitForm(data);
              })}
            >
              <div className="md:gap grid md:grid-cols-2 md:gap-6">
                <div className="group relative z-0 mb-6 w-full">
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: true })}
                    className="peer block w-full Contactearance-none border-0 border-b-[1px] border-gray-300 py-2.5 px-0 text-sm text-gray-900 focus:border-[#3898EC] focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
                    placeholder="Name*"
                  />
                </div>
                <div className="group relative z-0 mb-6 w-full">
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                    className="peer block w-full Contactearance-none border-0 border-b-[1px] border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#3898EC] focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
                    placeholder="Email*"
                  />
                  {errors.email?.type === "required" && (
                    <p className="mt-1 text-[14px] text-red-500" role="alert">
                      *Email is required
                    </p>
                  )}
                </div>
              </div>
              {/* =========================================== */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="group relative z-0 mb-6 w-full">
                  <input
                    type="tel"
                    id="phone"
                    pattern="[0-9]{10}"
                    {...register("phone", { required: true })}
                    className="peer block w-full Contactearance-none border-0 border-b-[1px] border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#3898EC] focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
                    placeholder="Phone*"
                  />
                  {errors.phone?.type === "required" && (
                    <p className="mt-1 text-[14px] text-red-500" role="alert">
                      *Phone number is required
                    </p>
                  )}
                </div>
                <div className="group relative z-0 mb-6 w-full">
                  <input
                    type="text"
                    id="subject"
                    {...register("subject", { required: true })}
                    className="peer block w-full Contactearance-none border-0 border-b-[1px] border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#3898EC] focus:outline-none focus:ring-0 dark:border-gray-600  dark:focus:border-blue-500"
                    placeholder="Subject*"
                  />
                </div>
              </div>
              {/* =========================================== */}
              <div>
                <textarea
                  rows={4}
                  id="message"
                  {...register("message", { required: true })}
                  className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-white  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Message*"
                ></textarea>
              </div>
              {/* =========================================== */}
              <input
                type="submit"
                className="mt-[60px] focus:outline-none focus:border-0 w-full bg-[#081c3a] px-5 py-2.5 text-center text-lg font-normal text-white hover:border hover:border-black hover:bg-white hover:text-black "
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
