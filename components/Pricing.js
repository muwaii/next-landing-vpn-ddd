import React from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import Mapiframe from "./misc/Mapiframe";
import emailjs from "emailjs-com";
import { useTranslation } from "next-i18next";



const Pricing = () => {
  const { t } = useTranslation("common");

    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_ilooy75",
          "template_nnpt0ff",
          e.target,
          "EYfaXNOd-VexzvTrv"
        )
        .then(
          (result) => {
            console.log("result : ", result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        e.target.reset()
    };
  
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            {t("service.intro")}
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Free.png"
                  width={145}
                  height={165}
                  alt="Free Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Free Plan
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  Free
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Free.png"
                  width={145}
                  height={165}
                  alt="Free Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Free Plan
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  Free
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full my-16" >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            {t("about.intro")}{" "}
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            {t("about.para1")}
          </p>
          <p className="leading-normal mx-auto mb-8 mt-2 w-10/12 sm:w-7/12 lg:w-6/12">
            {t("about.para2")}
          </p>
        <Testimoni />
        <div className="w-full h-full my-4" id="testimoni">
          {/* <Mapiframe/> */}
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
          {t("contact.intro")}{" "}
        </h3>
        <div className="flex flex-col w-full my-4">
          <div className="w-full my-8 flex justify-center">
            <Mapiframe/>
            {/* <div>
              <h3>{t("about.name")}</h3>
              <p>{t("location.nameb")}</p>
            </div> */}
          </div>
        </div>
        <div className="w-full lg:pl-40 lg:pr-40 sm:pr-0 sm:pl-0 flex justify-evenly w-full items-center mt-4 flex-wrap lg:flex-nowrap">
          <form onSubmit={handleSubmit} class="rounded-lg shadow-xl flex w-full flex-col px-8 py-8 bg-white dark:bg-blue-500">
            <h3 className="">Email Us</h3>
            <label
              for="name"
              class="text-gray-500 font-light mt-8 dark:text-gray-50"
            >
              {t("contact.name")}<span class="text-red-500 dark:text-gray-50">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder={t("contact.name")}
              class="bg-transparent border-b py-2 pl-4 focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label
              for="email"
              class="text-gray-500 font-light mt-6 dark:text-gray-50"
            >
              {t("contact.email")}<span class="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder={t("contact.email")}
              class="bg-transparent border-b py-2 pl-4 focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label
              for="subject"
              class="text-gray-500 font-light mt-6 dark:text-gray-50"
            >
              {t("contact.subject")}<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              placeholder={t("contact.subject")}
              class="bg-transparent border-b py-2 pl-4 focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label
              for="message"
              class="text-gray-500 font-light mt-6 dark:text-gray-50"
            >
              {t("contact.message")}<span class="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              placeholder={t("contact.message")}
              class="bg-transparent h-24 border-b py-2 pl-4 focus:rounded-lg focus:ring-1 ring-green-500 font-light text-gray-500"
            ></textarea>
            <div class="flex flex-row items-center justify-start">
              <button class="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                <span>{t("contact.send")}</span> 
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="text-cyan-500 ml-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        </div>
 
      </div>
    </div>
  );
};

export default Pricing;
