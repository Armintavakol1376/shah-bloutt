"use client";
import React, { useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import CoffeBeansOutlineIcon from "../Icons/CoffeBeansOutlineIcon";

const ShopCategoryMain = ({ children }) => {
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
    <div>
      <div
        className={
          persianLan
            ? "w-full flex flex-row items-center justify-end text-right transition-all"
            : "w-full flex flex-row-reverse items-center justify-end text-left  transition-all"
        }
      >
        <div className="flex flex-col mx-4">
          <span className={` font-modamR text-[#A8763E] text-xl`}>
            {persianLan ? "محصولات " : "Products of "}
          </span>

          <span className={`font-modamBl text-[#850A0A] text-3xl  `}>
            {persianLan ? " شاه بلــــــــوط" : "Shahbalout"}
          </span>
        </div>

        <Image
          src={"/assets/imgs/cups.png"}
          width={100}
          height={100}
          alt="coffee"
        />
      </div>
      <p
        className={
          darkMode
            ? "w-full my-8  text-darkTxtTwo text-right  text-lg  font-modamR"
            : "w-full my-8 text-lightTxtTwo text-right  text-lg  font-modamR"
        }
      >
        علاوه بر محصولات زیر شما می توانید ترکیب دلخواهتون از قهوه ها رو هم در
        ترکیب برنده انتخاب کنید
      </p>

      <Link
      href="/WinnerBlend"
      className={`w-full ml-auto hover:scale-105 md:cursor-pointer  transition-all delay-50 hover:ring-2 hover:ring-red-200 md:w-70 lg:w-80  rounded-lg m-1 mt-4 overflow-hidden  h-32 flex flex-row items-center justify-between shadow  
            ${darkMode ? `bg-darkBgTwo` : `bg-lightBgTwo`}`}

    >
      <div className="w-8/12 h-32 flex flex-col items-center justify-center p-3">
        <span
          className={
            darkMode
              ? "text-darkTxtOne font-modamBl text-center  text-2xl"
              : "text-lightTxtOne font-modamBl text-center  text-2xl"
          }
        >
ترکیب بـــــــــــرنده
        </span>
        {persianLan && (
          <span
            className={
              darkMode
                ? "text-darkTxtTwo text-center w-full text-xl"
                : "text-lightTxtTwo text-center w-full text-xl"
            }
          >
          Winner Blend
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
          src={'/assets/imgs/icon/coffeeBlending1.png'}
          alt="product image"
        />


        <img
          className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-300 ease-in-out  hover:right-0 peer-hover:right-0"
          src={'/assets/imgs/icon/coffeeBlending1.png'}
          alt="product image"
        />

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
    </Link>



  

      {/* <Link href="/WinnerBlend">
        <div className="flex flex-row h-16 bg-darkBgTwo select-none md:cursor-pointer transition-all hover:scale-110 hover:ring-2 hover:ring-red-700 mt-10 mx-2 justify-end items-center  pr-0 pl-4 backdrop-blur-lg rounded-lg">
          <span
            className={
              darkMode
                ? "text-darkTxtTwo text-xs w-20 text-right font-modamBl mr-2 select-none"
                : "text-lightTxtTwo text-xs w-20 text-right font-modamBl mr-2 select-none "
            }
          >
            {persianLan ? " رفـــتن  به ترکیب بـــــــــــرنده" : "Wining Combination"}
          </span>
          <img
            src={"/assets/imgs/icon/coffeeBlending1.png"}
            className="w-24 -mt-10  object-contain hover:-translate-y-4 transition-all"
          />
        </div>
      </Link> */}
      <div className="flex flex-row-reverse mb-32  flex-wrap items-center md:justify-start md:gap-8">
        {children}
      </div>
    </div>
  );
};

export default ShopCategoryMain;
