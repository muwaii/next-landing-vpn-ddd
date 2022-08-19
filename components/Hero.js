import React from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import styles from './HeroCss.module.css';

const Hero = ({
}) => {
  return (
    <div
      className="max-w-screen-xl mt-40 mb-48 px-8 xl:px-16 mx-auto relative"
      id="home"
    >
      {/* <div className={styles.bg}>hjkhkjh</div> */}
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
          <div className={styles.screen}>
            <Image
              className="screen"
              src="/assets/temp-3.png"
              alt="Intro-Grafity"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className={styles.mouse}>
            <Image
              className="mouse animate-beat"
              src="/assets/temp-6.png"
              alt="Intro-Grafity"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className={styles.palatte}>
            <Image
              className="palatte animate-wiggle"
              src="/assets/temp-7.png"
              alt="Intro-Grafity"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className={styles.book}>
            <Image
              className="book animate-beatin"
              src="/assets/temp-4.png"
              alt="Intro-Grafity"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className={styles.bulb}>
            <Image
              className="bulb animate-bounce"
              src="/assets/temp-8.png"
              alt="Intro-Grafity"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className={styles.stick}>
            <Image
              className="stick animate-wiggle"
              src="/assets/temp-5.png"
              alt="Intro-Grafity"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className={styles.bgh}>
            <Image
              className="bgh"
              src="/assets/bg-h-1.png"
              alt="Intro-Grafity"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className={styles.beatbox1}>
            <Image
              className="beatbox1 animate-wiggle"
              src="/assets/beatbox-1.png"
              alt="Intro-Grafity-bb1"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className={styles.beatbox2}>
            <Image
              className="beatbox2 animate-wiggle"
              src="/assets/beatbox-2.png"
              alt="Intro-Grafity-bb2"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className={styles.beatbox3}>
            <Image
              className="beatbox3 animate-wiggle"
              src="/assets/beatbox-3.png"
              alt="Intro-Grafity-bb3"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className={styles.beatbox4}>
            <Image
              className="beatbox4 animate-beat"
              src="/assets/beatbox-4.png"
              alt="Intro-Grafity-bb4"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className={styles.beatbox5}>
            <Image
              className="beatbox5 animate-wiggle"
              src="/assets/beatbox-5.png"
              alt="Intro-Grafity-bb5"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className={styles.beatbox6}>
            <Image
              className="beatbox6 animate-beatin"
              src="/assets/beatbox-6.png"
              alt="Intro-Grafity-bb6"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
          <div className={styles.beatbox7}>
            <Image
              className="beatbox7 animate-beatin"
              src="/assets/beatbox-7.png"
              alt="Intro-Grafity-bb7"
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
