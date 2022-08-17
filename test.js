import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [lang, setLang] = useState("");
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
    handleChangeLanguage(locale, locale !== i18n.language ? true : false);
  }, []);

  const handleChangeLanguage = (lng, isReload) => {
    i18n.changeLanguage(lng);
    handleRoute(i18n.language);
  };

  const handleRoute = (locale) => {
    router.push(`${locale}${router.asPath}`, `${locale}${router.asPath}`, {
      locale: false,
    });
  };

  return (
    <>

      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <img src="/assets/Logo.png" className="w-10 h-10" />
            <span className="lg:text-xl text-sm px-4 py-2 mx-2 font-medium animation-hover inline-block relative text-black-500 hover:text-green-200">
              {t("header")}
            </span>
          </div>
          {i18n.language === "th" && (
            <div onClick={() => handleChangeLanguage("en")}>
              <span className="lg:hidden block text-sm p-2 animation-hover inline-block relative text-black-500 hover:text-green-200 border-2 border-green-200 rounded-lg">
                {i18n.language.toLocaleUpperCase()}
              </span>
            </div>
          )}
          {i18n.language === "en" && (
            <div onClick={() => handleChangeLanguage("th")}>
              <span className="lg:hidden block text-sm p-2 animation-hover inline-block relative text-black-500 hover:text-green-200 border-2 border-green-200 rounded-lg">
                {i18n.language.toLocaleUpperCase()}
              </span>
            </div>
          )}
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center justify-end">





            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-green-200 animation-active "
                  : " text-black-500 hover:text-green-200")
              }
            >
              {t("about")}
            </LinkScroll>





            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-green-200 animation-active "
                  : " text-black-500 hover:text-green-200 ")
              }
            >
              {t("service")}
            </LinkScroll>





            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-green-200 animation-active "
                  : " text-black-500 hover:text-green-200 ")
              }
            >
              {t("work")}
            </LinkScroll>





            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-green-200 animation-active "
                  : " text-black-500 hover:text-green-200 ")
              }
            >
              {t("contact_us")}
            </LinkScroll>





            {i18n.language === "th" && (
              <button
                className={
                  "px-4 py-2 mx-2 cursor-pointer inline-block relative border-2 border-green-200 rounded-lg"
                }
                onClick={() => handleChangeLanguage("en")}
              >
                {i18n.language.toLocaleUpperCase()}
              </button>
            )}
            {i18n.language === "en" && (
              <button
                className={
                  "px-4 py-2 mx-2 cursor-pointer inline-block relative border-2 border-green-200 rounded-lg"
                }
                onClick={() => handleChangeLanguage("th")}
              >
                {i18n.language.toLocaleUpperCase()}
              </button>
            )}
          </ul>
        </nav>
      </header>
      {/* Mobile Navigation */}






      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">





            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {t("about")}
            </LinkScroll>






            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              {t("service")}
            </LinkScroll>






            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {t("work")}
            </LinkScroll>





            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all whitespace-nowrap" +
                (activeLink === "testimoni"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              {t("contact_us")}
            </LinkScroll>






          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
You have unread notifications