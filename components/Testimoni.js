import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
// import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
// import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import { useTranslation } from "next-i18next";

const Testimoni = ({
  // listTestimoni = [
  //   {
  //     name: "employee.1",
  //     image: "/assets/people-3.png",
  //     position: "position.1",
  //     city: "location.city2",
  //     country: "location.name2",
  //   },
  //   {
  //     name: "employee.2",
  //     image: "/assets/people-3.png",
  //     position: "position.2",
  //     city: "location.city1",
  //     country: "location.name1",
  //   },
  //   {
  //     name: "employee.3",
  //     image: "/assets/people-3.png",
  //     position: "position.3",
  //     city: "location.city1",
  //     country: "location.name1",
  //   },
  //   {
  //     name: "employee.4",
  //     image: "/assets/people-3.png",
  //     position: "position.3",
  //     city: "location.city1",
  //     country: "location.name1",
  //   },
  //   {
  //     name: "employee.5",
  //     image: "/assets/people-3.png",
  //     position: "position.3",
  //     city: "location.city1",
  //     country: "location.name1",
  //   },
  //   {
  //     name: "employee.6",
  //     image: "/assets/people-3.png",
  //     position: "position.3",
  //     city: "location.city1",
  //     country: "location.name1",
  //   },
  // ],
}) => {
  const { t } = useTranslation("common");
  // const settings = {
  //   dots: true,
  //   customPaging: function (i) {
  //     return (
  //       <a className="">
  //         <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
  //       </a>
  //     );
  //   },
  //   dotsClass: "slick-dots w-max absolute mt-20  ",
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 2,
  //   responsive: [
  //     {
  //       breakpoint: 770,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  // const [sliderRef, setSliderRef] = useState(null);

  return (
    <> 
    {/* 2xs:grid-flow-col 2xs:grid-rows-3 */}
    <div className="sd">
    <div className="grid grid-flow-row grid-cols-3 gap-2 mx-auto mt-4 ">
      <div className="card-id grid grid-flow-row grid-rows-2">
        <div className="flex justify-center">
        <img className="w-1/2 aspect-square" src="/assets/temp-3.png" />
        </div>
        <div className="em-name">
          <p className="text-blue-500 underline ">
            {t("employee.1")}
          </p>
        </div>
      </div>
      <div className="card-id grid grid-flow-row grid-rows-2">
        <div className="flex justify-center">
        <img className="w-1/2 aspect-square" src="/assets/temp-3.png" />
        </div>
        <div className="em-name">
          <p className="text-blue-500 underline ">
            {t("employee.2")}
          </p>
        </div>
      </div>
      <div className="card-id grid grid-flow-row grid-rows-2">
        <div className="flex justify-center">
        <img className="w-1/2 aspect-square" src="/assets/temp-3.png" />
        </div>
        <div className="em-name">
          <p className="text-blue-500 underline ">
            {t("employee.3")}
          </p>
        </div>
      </div>
      <div className="card-id grid grid-flow-row grid-rows-2">
        <div className="flex justify-center">
        <img className="w-1/2 aspect-square" src="/assets/temp-3.png" />
        </div>
        <div className="em-name">
          <p className="text-blue-500 underline ">
            {t("employee.4")}
          </p>
        </div>
      </div>
      <div className="card-id grid grid-flow-row grid-rows-2">
        <div className="flex justify-center">
        <img className="w-1/2 aspect-square" src="/assets/temp-3.png" />
        </div>
        <div className="em-name">
          <p className="text-blue-500 underline ">
            {t("employee.5")}
          </p>
        </div>
      </div>
      <div className="card-id grid grid-flow-row grid-rows-2">
        <div className="flex justify-center">
        <img className="w-1/2 aspect-square" src="/assets/temp-3.png" />
        </div>
        <div className="em-name ">
          <p className="text-blue-500 underline ">
            {t("employee.6")}
          </p>
        </div>
      </div>
  

    </div>
    </div>

      
      {/* <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      > */}
      {/* {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-green-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                    {t(`${listTestimonis.name}`)}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                    {t(`${listTestimonis.city}`)},{t(`${listTestimonis.country}`)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{t(`${listTestimonis.position}`)}”</p>
            </div>
          </div>
        ))} */}
      {/* </Slider> */}
      {/* <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-green-500 hover:text-white-500 transition-all text-green-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-green-500 hover:text-white-500 transition-all text-green-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Testimoni;
