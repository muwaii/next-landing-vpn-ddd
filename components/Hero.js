import React from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  return (
    <div
      className="max-w-screen-xl mt-40 mb-96 px-8 xl:px-16 mx-auto relative"
      id="about"
    >
      <div className="grid grid-flow-row py-6 sm:py-16 ">
        {/* <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            Want anything to be easy with <strong>LaslesVPN</strong>.
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
          <ButtonPrimary>Get Started</ButtonPrimary>
        </div> */}
        <div className="justify-center flex w-full">
          <div className="items-center h-full z-10 xl:max-w-lg xl:max-h-lg lg:max-w-lg lg:max-h-lg md:max-h-sm md:max-w-sm sm:max-w-sm sm:max-h-sm w-full absolute xl:top-12 lg:top-12 md-12">
            <Image
              className="zcreen"
              src="/assets/temp-3.png"
              alt="VPN Illustrasi"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className="w-full xl:max-w-lg xl:max-h-lg lg:max-w-lg lg:max-h-lg md:max-h-sm md:max-w-sm sm:max-w-sm sm:max-h-sm z-20 xl:-bottom-96 xl:right-36 lg:-bottom-96 lg:right-5 md:-bottom-72 md:right-4 sm:-bottom-72 sm:right-0 
          absolute animate-beat">
            <Image
              className="mouze"
              src="/assets/temp-6.png"
              alt="VPN Illustrasi"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className="w-full xl:max-w-lg xl:max-h-lg lg:max-w-lg lg:max-h-lg md:max-h-sm md:max-w-sm sm:max-w-xs sm:max-h-xs z-5 xl:right-24 xl:-top-20 lg:-top-16 lg:-right-8 md:right-0 md:-top-4 sm:-top-8 sm:right-0 
          absolute animate-wiggle">
            <Image
              className="colorplate"
              src="/assets/temp-7.png"
              alt="VPN Illustrasi"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className="w-full xl:max-w-md xl:max-h-md lg:max-h-md lg:max-w-md md:max-h-xs md:max-w-xs sm:max-w-xs sm:max-h-xs z-20 xl:-bottom-72 xl:left-32 lg:-bottom-72 lg:left-0 md:-bottom-56 md:left-4 sm:-bottom-56 sm:-left-4 
          absolute animate-beatin">
            <Image
              className="book"
              src="/assets/temp-4.png"
              alt="VPN Illustrasi"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className="w-full xl:max-w-md xl:max-h-md lg:max-w-md lg:max-h-md md:max-h-xs md:max-w-xs sm:max-w-xs sm:max-h-xs z-20 xl:-top-32 xl:right-56 lg:-top-32 lg:right-24 md:-top-16 md:right-20 sm:-top-16 sm:right-16 
          absolute  animate-bounce ">
            <Image
              className="bulb"
              src="/assets/temp-8.png"
              alt="VPN Illustrasi"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className="w-full xl:max-w-lg xl:max-h-lg lg:max-w-lg lg:max-h-lg md:max-h-sm md:max-w-sm sm:max-w-sm sm:max-h-sm z-20 xl:-top-24 xl:left-40 lg:-top-24 lg:left-8 md:-top-12 md:left-8 sm:-top-12 sm:-left-8 
          absolute animate-wiggle">
            <Image
              className="stik"
              src="/assets/temp-5.png"
              alt="VPN Illustrasi"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className="w-full xl:max-w-lg xl:max-h-lg lg:max-w-lg lg:max-h-lg md:max-h-sm md:max-w-sm sm:max-w-sm sm:max-h-sm z-20 xl:-top-24 xl:left-40 lg:-top-24 lg:left-8 md:-top-12 md:left-8 sm:-top-12 sm:-left-8 
          absolute animate-wiggle">
            <Image
              className="stik"
              src="/assets/temp-5.png"
              alt="VPN Illustrasi"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      {/* <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div> */}
    </div>
  );
};

export default Hero;
