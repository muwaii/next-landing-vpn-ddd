import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex bg-white-300 pt-4 pb-4">
      <div className="flex max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex gap-4 columns-3 items-start ">
        <div className="flex" >
        <img src="assets/Logo1.png"  className="h-8 w-auto px-2"/>
        <h2 className="mt-2 pb-4 text-black-500">{t("about.name")}</h2>
        </div>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <div className="" >
          <p className="text-gray-400">Copyright ©2021, The Best NP Technologies. All Right Reserved</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;