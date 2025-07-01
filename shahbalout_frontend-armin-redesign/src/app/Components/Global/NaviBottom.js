"use client";
import React, { useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import Link from "next/link";

const NaviBottom = ({ activeLink }) => {
  const [
    darkMode,
    setDarkMode,
    persianLan,
    setPersianLan,
    modalMission,
    setModalMission,
    cartItems,
    setCartItems,
  ] = useContext(ThemeContextExp);
  return (
    <nav className="fixed  lg:hidden bottom-0 left-0 right-0 z-50 shadow-t backdrop-blur-lg bg-[rgba(200,200,200,0.04)]  rounded-t-lg">
      <div className=" w-screen sm:px-3 ">
        <ul className="flex w-full justify-between items-center text-black-500 font-modamBl text-xs/[6px] text-gray-600">
          <Link
          onClick={() => setModalMission({ ...modalMission, appear: false })}
            href="/"
            spy="true"
            smooth="true"
            className={
              "mx-1 sm:mx-2 px-3 mt-3 sm:px-4 pb-2 flex flex-col items-center jusify-around text-xs  transition-all " +
              (activeLink === "Home" && " rounded-full text-[#A50104]")
            }
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M20.0402 6.81994L14.2802 2.78994C12.7102 1.68994 10.3002 1.74994 8.79023 2.91994L3.78023 6.82994C2.78023 7.60994 1.99023 9.20994 1.99023 10.4699V17.3699C1.99023 19.9199 4.06023 21.9999 6.61023 21.9999H17.3902C19.9402 21.9999 22.0102 19.9299 22.0102 17.3799V10.5999C22.0102 9.24994 21.1402 7.58994 20.0402 6.81994Z"
                fill={
                  activeLink === "Home"
                    ? "#ad1037"
                    : darkMode
                    ? "#f9f9f999"
                    : "currentColor"
                }
              />
              <path
                d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
                fill={
                  activeLink === "Home"
                    ? "#ad1037"
                    : darkMode
                    ? "#f9f9f999"
                    : "currentColor"
                }
              />
            </svg>
            {activeLink === "Home" ? (
              <div className=" rounded mt-2 mb-2 h-2 w-2 mx-5 bg-[#A50104] transition-all"></div>
            ) : (
              <span
                className={
                  darkMode
                    ? "scale-90 mt-2 text-xs w-14 text-center transition-all text-darkTxtOne"
                    : "scale-90 mt-2 text-xs w-14 text-center transition-all text-lightTxtOne"
                }
              >
                {persianLan ? "خانه" : "Home"}
              </span>
            )}
          </Link>

          <Link
              onClick={() => setModalMission({ ...modalMission, appear: false })}
            href="/Music"
            spy="true"
            smooth="true"
            className={
              "mx-1 sm:mx-2 px-3 mt-3 sm:px-4 pb-2 flex flex-col items-center jusify-around text-xs  transition-all " +
              (activeLink === "Music" && " rounded-full text-[#A50104]")
            }
          >
            {/* <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-all"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
                fill={
                  activeLink === "Music"
                    ? "#ad1037"
                    : darkMode
                    ? "#f9f9f999"
                    : "currentColor"
                }
              />
              <path
                d="M16.1407 6.7099C15.8007 6.4499 15.2007 6.1999 14.2407 6.4599L11.2507 7.27991C10.3207 7.52991 9.71075 8.31986 9.71075 9.28986V11.0399V13.0699C9.50075 13.0099 9.29073 12.9698 9.06073 12.9698C7.77073 12.9698 6.7207 14.0199 6.7207 15.3099C6.7207 16.5999 7.77073 17.6499 9.06073 17.6499C10.3407 17.6499 11.3808 16.6099 11.4008 15.3399C11.4008 15.3299 11.4107 15.3199 11.4107 15.3099V11.6899L15.1907 10.6599V12.0799C14.9807 12.0199 14.7707 11.9799 14.5407 11.9799C13.2507 11.9799 12.2007 13.0299 12.2007 14.3199C12.2007 15.6099 13.2507 16.6599 14.5407 16.6599C15.8307 16.6599 16.8807 15.6099 16.8807 14.3199V9.55988V8.48987C16.8807 7.48987 16.4707 6.9699 16.1407 6.7099ZM9.06073 15.9599C8.70073 15.9599 8.41071 15.6699 8.41071 15.3099C8.41071 14.9499 8.70073 14.6599 9.06073 14.6599C9.42073 14.6599 9.71075 14.9499 9.71075 15.3099C9.71075 15.6699 9.42073 15.9599 9.06073 15.9599ZM14.5407 14.9599C14.1807 14.9599 13.8907 14.6699 13.8907 14.3099C13.8907 13.9499 14.1807 13.6599 14.5407 13.6599C14.9007 13.6599 15.1907 13.9499 15.1907 14.3099C15.1807 14.6699 14.8907 14.9599 14.5407 14.9599Z"
                fill={
                  activeLink === "Music"
                    ? "#ad1037"
                    : darkMode
                    ? "#f9f9f999"
                    : "currentColor"
                }
              />
            </svg> */}

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M11.9996 21.9302C6.95961 21.9302 2.84961 17.8302 2.84961 12.7802V10.9002C2.84961 10.5102 3.16961 10.2002 3.54961 10.2002C3.92961 10.2002 4.24961 10.5202 4.24961 10.9002V12.7802C4.24961 17.0502 7.71961 20.5202 11.9896 20.5202C16.2596 20.5202 19.7296 17.0502 19.7296 12.7802V10.9002C19.7296 10.5102 20.0496 10.2002 20.4296 10.2002C20.8096 10.2002 21.1296 10.5202 21.1296 10.9002V12.7802C21.1496 17.8302 17.0396 21.9302 11.9996 21.9302Z"
                fill={
                  activeLink === "Music"
                    ? "#ad1037"
                    : darkMode
                    ? "#f9f9f999"
                    : "currentColor"
                }
              />
              <path
                d="M12.0004 2C8.64039 2 5.90039 4.74 5.90039 8.1V12.79C5.90039 16.15 8.64039 18.89 12.0004 18.89C15.3604 18.89 18.1004 16.15 18.1004 12.79V8.1C18.1004 4.74 15.3604 2 12.0004 2ZM14.1804 10.59C14.1104 10.86 13.8604 11.04 13.5904 11.04C13.5404 11.04 13.4804 11.03 13.4304 11.02C12.4104 10.74 11.3304 10.74 10.3104 11.02C9.98039 11.11 9.65039 10.92 9.56039 10.59C9.47039 10.27 9.66039 9.93 9.99039 9.84C11.2204 9.5 12.5204 9.5 13.7504 9.84C14.0804 9.93 14.2704 10.26 14.1804 10.59ZM15.0304 7.82C14.9404 8.07 14.7104 8.22 14.4604 8.22C14.3904 8.22 14.3204 8.21 14.2504 8.18C12.7204 7.62 11.0404 7.62 9.51039 8.18C9.19039 8.3 8.84039 8.14 8.72039 7.82C8.61039 7.51 8.77039 7.16 9.09039 7.04C10.8904 6.39 12.8704 6.39 14.6604 7.04C14.9804 7.16 15.1404 7.51 15.0304 7.82Z"
                fill={
                  activeLink === "Music"
                    ? "#ad1037"
                    : darkMode
                    ? "#f9f9f999"
                    : "currentColor"
                }
              />
            </svg>

            {activeLink === "Music" ? (
              <div className=" rounded mt-2 mb-2 h-2 w-2 mx-5 bg-[#A50104] transition-all"></div>
            ) : (
              <span
                className={
                  darkMode
                    ? "scale-90 mt-2 text-xs w-14 text-center transition-all text-darkTxtOne"
                    : "scale-90 mt-2 text-xs w-14 text-center transition-all text-lightTxtOne"
                }
              >
                {persianLan ? "پادکست" : "Podcast"}
              </span>
            )}
          </Link>
          <Link href="/WinnerBlend" spy="true" smooth="true"     onClick={() => setModalMission({ ...modalMission, appear: false })}>
            <div
              className={
                "-mt-14  border-0 cursor-pointer bg-gradient-to-r w-9 flex items-center justify-center" +
                (activeLink === "Winning Combination"
                  ? "border-2 border-orange-500 rounded-full"
                  : "border-2 border-cyan-400 rounded-full")
              }
            >
              <img
                className="w-9 object-contain"
                src="/assets/logo/logoShape.png"
              />
            </div>
          </Link>
          <Link
              onClick={() => setModalMission({ ...modalMission, appear: false })}
            href={"/Store/Cart"}
            spy="true"
            smooth="true"
            className={
              "mx-1 sm:mx-2 px-3 mt-3 sm:px-4 pb-2 flex flex-col items-center jusify-around text-xs text-center transition-all " +
              (activeLink === "Store" && " rounded-full text-[#A50104]")
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z"
                fill={
                  activeLink === "Store"
                    ? "#ad1037"
                    : darkMode
                    ? "#f9f9f999"
                    : "currentColor"
                }
              />
              <path
                d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z"
                fill={
                  activeLink === "Store"
                    ? "#ad1037"
                    : darkMode
                    ? "#f9f9f999"
                    : "currentColor"
                }
              />
              <path
                opacity="0.4"
                d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.92999 21.55 6.50999C21.68 4.73999 20.33 3.3 18.56 3.3H6.28999C6.18999 2.86 5.98999 2.44 5.67999 2.09C5.18999 1.56 4.49 1.25 3.77 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74001C4.05001 2.75 4.34 2.88001 4.55 3.10001C4.76 3.33001 4.86 3.63 4.84 3.94Z"
                fill={
                  activeLink === "Store"
                    ? "#ad1037"
                    : darkMode
                    ? "#f9f9f999"
                    : "currentColor"
                }
              />
              <path
                d="M20.5101 8.75H5.17006C4.75006 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.53 5.21006 17 6.92006 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.60001C21.3401 9.14001 20.9801 8.75 20.5101 8.75Z"
                fill={
                  activeLink === "Store"
                    ? "#ad1037"
                    : darkMode
                    ? "#f9f9f999"
                    : "currentColor"
                }
              />
            </svg>

            {activeLink === "Store" ? (
              <div className=" rounded mt-2 mb-2 h-2 w-2 mx-5 bg-[#A50104] transition-all"></div>
            ) : (
              <span
                className={
                  darkMode
                    ? "scale-90 mt-2 text-xs w-14 text-center transition-all text-darkTxtOne"
                    : "scale-90 mt-2 text-xs w-14 text-center transition-all text-lightTxtOne"
                }
              >
                {persianLan ? "سبد خرید" : "Cart"}
              </span>
            )}
          </Link>

          <Link
              onClick={() => setModalMission({ ...modalMission, appear: false })}
            href="/Profile"
            spy="true"
            smooth="true"
            className={
              "mx-1 sm:mx-2 px-3 mt-3 sm:px-4 pb-2 flex flex-col items-center jusify-around text-xs  transition-all " +
              (activeLink === "Profile" && " rounded-full text-[#A50104]")
            }
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M17.9496 7.7101L17.8096 7.6301L16.4196 6.8301L13.5496 5.1701C12.6696 4.6601 11.3296 4.6601 10.4496 5.1701L7.57961 6.8301L6.18961 7.6401L6.00961 7.7401C4.21961 8.9401 4.09961 9.1601 4.09961 11.0901V15.7001C4.09961 17.6301 4.21961 17.8501 6.04961 19.0801L10.4496 21.6201C10.8896 21.8801 11.4396 22.0001 11.9996 22.0001C12.5496 22.0001 13.1096 21.8801 13.5496 21.6201L17.9896 19.0501C19.7796 17.8501 19.8996 17.6301 19.8996 15.7001V11.0901C19.8996 9.1601 19.7796 8.9401 17.9496 7.7101Z"
                fill={
                  activeLink === "Profile"
                    ? "#ad1037"
                    : darkMode
                    ? "#f9f9f999"
                    : "currentColor"
                }
              />
              <path
                d="M6.18945 7.64L7.57945 6.83L10.3195 5.25L10.4495 5.17C11.3295 4.66 12.6695 4.66 13.5495 5.17L13.6795 5.25L16.4195 6.83L17.8095 7.63V5.49C17.8095 3.24 16.5695 2 14.3195 2H9.66945C7.41945 2 6.18945 3.24 6.18945 5.49V7.64Z"
                fill={
                  activeLink === "Profile"
                    ? "#ad1037"
                    : darkMode
                    ? "#f9f9f999"
                    : "currentColor"
                }
              />
              <path
                d="M14.8397 13.34L14.2197 14.1C14.1197 14.21 14.0497 14.43 14.0597 14.58L14.1197 15.56C14.1597 16.16 13.7297 16.47 13.1697 16.25L12.2597 15.89C12.1197 15.84 11.8797 15.84 11.7397 15.89L10.8297 16.25C10.2697 16.47 9.83975 16.16 9.87975 15.56L9.93975 14.58C9.94975 14.43 9.87975 14.21 9.77975 14.1L9.15975 13.34C8.76975 12.88 8.93975 12.37 9.51975 12.22L10.4697 11.98C10.6197 11.94 10.7997 11.8 10.8797 11.67L11.4097 10.85C11.7397 10.34 12.2597 10.34 12.5897 10.85L13.1197 11.67C13.1997 11.8 13.3797 11.94 13.5297 11.98L14.4797 12.22C15.0597 12.37 15.2297 12.88 14.8397 13.34Z"
                fill={
                  activeLink === "Profile"
                    ? "#ad1037"
                    : darkMode
                    ? "#f9f9f999"
                    : "currentColor"
                }
              />
            </svg>
            {activeLink === "Profile" ? (
              <div className=" rounded mt-2 mb-2 h-2 w-2 mx-5 bg-[#A50104] transition-all"></div>
            ) : (
              <span
                className={
                  darkMode
                    ? "scale-90 mt-2 text-xs w-14 text-center transition-all text-darkTxtOne"
                    : "scale-90 mt-2 text-xs w-14 text-center transition-all text-lightTxtOne"
                }
              >
                {persianLan ? "پروفایل" : "Profile"}
              </span>
            )}
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NaviBottom;
