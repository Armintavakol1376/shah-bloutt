"use client";
import React, { useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import CoffeBeansOutlineIcon from "../Icons/CoffeBeansOutlineIcon";
import { Button } from "@nextui-org/react";

const ProductCard = ({
  PersianTtl,
  EnglishTtl,
  onClkFrom = null,
  description,
}) => {
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
// console.log(description);
  return (
    <div
      className={`w-full hover:scale-105 md:cursor-pointer  transition-all delay-50 hover:ring-2 hover:ring-red-200 md:w-70 lg:w-80  rounded-2xl m-1 mt-4 overflow-hidden  flex flex-col items-center justify-between shadow  
            ${darkMode ? `bg-darkBgTwo` : `bg-lightBgTwo`}`}
      onClick={onClkFrom}
    >
      <div className="w-full flex flex-col items-center justify-center p-5">
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
        <p
          className={
            darkMode
              ? "text-darkTxtTwo text-right mt-8"
              : "text-lightTxtTwo text-right mt-8"
          }
        >
        <FeatureList description={description} darkMode={darkMode} />
        </p>
      </div>

      <div className="absolute w-32 h-32 opacity-5 ">
        <CoffeBeansOutlineIcon />
      </div>
    </div>
  );
};

export default ProductCard;


const FeatureList = ({ description, darkMode }) => {
  // پارس کردن ویژگی‌ها
  const parseDescription = (text) => {
    const lines = text.split("***");
    return lines
      .map((line) => {
        const match = line.match(/\((.*?)\):\s*(.*)/);
        if (match) {
          return {
            label: match[1].trim(),
            value: match[2].trim(),
          };
        }
        return null;
      })
      .filter(Boolean); // حذف nullها
  };

  const features = parseDescription(description);

  return (
    <div
      className={`mt-8 p-4 rounded-2xl shadow-md ${
        darkMode ? "bg-darkBg text-darkTxtTwo" : "bg-lightBg text-lightTxtTwo"
      }`}
    >
      <h3 className="text-xl font-bold mb-4 text-right">ویژگی‌های قهوه</h3>
      <div className="grid grid-cols-1 gap-2 text-right">
        {features.map((item, index) => (
          <div key={index}>
            <span className="font-semibold">{item.label}:</span> {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

