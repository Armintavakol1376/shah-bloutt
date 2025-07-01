import React, { useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import { Progress } from "@nextui-org/react";
import PriceSlicer from "../Global/PriceSlicer";

export const TotalPart = ({ data }) => {
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

  if (data.percent < 5) return null;

  return (
    <div className="w-full flex flex-col justify-center mt-4">
      <div className="flex flex-row items-center mb-4">
        <span
          className={`${
            darkMode
              ? "text-darkTxtOne font-modamR mr-4"
              : "text-lightTxtTwo font-modamR mr-4"
          }`}
        >
          {data.title}
        </span>
        <span
          className={`${
            darkMode
              ? "text-darkTxtOne text-xl font-modamBl"
              : "text-[#04A777] text-xl font-modamBl"
          }`}
        >
          {data.percent}
        </span>

        <span className="text-[#04A777] text-lg">%</span>
        <div className="flex flex-row items-center ml-6">
          <span className="text-[#04A777] text-sm mr-1">تومان</span>
          <span
            className={`${
              darkMode
                ? "text-darkTxtOne text-lg font-modamBl"
                : "text-[#04A777] text-lg font-modamBl"
            }`}
          >
            {PriceSlicer(data.price)}
          </span>
        </div>
      </div>

      <Progress color="danger" aria-label="Loading..." value={data.percent} />
    </div>
  );
};
