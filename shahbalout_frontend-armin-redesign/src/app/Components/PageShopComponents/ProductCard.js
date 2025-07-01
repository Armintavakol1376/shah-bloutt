"use client";
import React, { useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import CoffeBeansOutlineIcon from "../Icons/CoffeBeansOutlineIcon";

const ProductCard = ({ PersianTtl, EnglishTtl, ImgOne, ImgTwo, onClkFrom }) => {
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
    <div
      className={`w-full hover:scale-105 md:cursor-pointer  transition-all delay-50 hover:ring-2 hover:ring-red-200 md:w-70 lg:w-80  rounded-lg m-1 mt-4 overflow-hidden  h-32 flex flex-row items-center justify-between shadow  
            ${darkMode ? `bg-darkBgTwo` : `bg-lightBgTwo`}`}
      onClick={onClkFrom}
    >
      <div className="w-8/12 h-32 flex flex-col items-center justify-center p-3">
        <span
          className={
            darkMode
              ? "text-darkTxtOne font-modamBl text-center  text-2xl"
              : "text-lightTxtOne font-modamBl text-center  text-2xl"
          }
        >
          {persianLan ? PersianTtl : EnglishTtl}
        </span>
        {persianLan && (
          <span
            className={
              darkMode
                ? "text-darkTxtTwo text-center w-full text-xl"
                : "text-lightTxtTwo text-center w-full text-xl"
            }
          >
            {EnglishTtl}
          </span>
        )}
        {/* <span className="text-right"> یکی از پرطرفدارترین سفارش های</span> */}
        {/* <Button color="warning" variant="shadow" className="mt-auto mb-1 z-10">
                    مشاهده
                </Button> */}
      </div>

      <div className="relative m-0 flex w-32 h-32  items-center p-0  rounded-r-lg overflow-hidden">
        <img
          className="rounded-r-lg  peer h-full w-full object-cover transition-all delay-100 duration-300"
          src={ImgOne}
          alt="product image"
        />

        {/* <img
                    className="rounded-r-lg  peer h-full w-full object-cover transition-all delay-100 duration-300"
                    src={`${BASEURL}/GettyImages/Products?image=${item.image[0]}`}
                    alt="product image"
                /> */}

        <img
          className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-300 ease-in-out  hover:right-0 peer-hover:right-0"
          src={ImgTwo}
          alt="product image"
        />

        {/* <div class="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
                        <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                        <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                        <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                    </div> */}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="0.5em"
          height="0.5em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
          />
        </svg>
        {/* <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                        39% OFF
                    </span> */}
      </div>
      <div className="absolute w-32 h-32 opacity-5 ">
        <CoffeBeansOutlineIcon />
      </div>
    </div>
  );
};

export default ProductCard;
