"use client";
import React, { useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";

import Lottison from "../Global/Lottison";
import musicLottie from "../../../../public/assets/lotties/musicLottie.json";
import podcast from "../../../../public/assets/lotties/podcast.json";

const MainMusicHeader = () => {
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
      className={
        persianLan
          ? "w-full flex flex-row-reverse items-center py-4 -mt-8 "
          : "w-full flex flex-row items-center pb-4"
      }
    >
      <div className="w-28 h-28 rounded-xl overflow-hidden">
        <Lottison Anime={podcast} />
      </div>
      <span
        className={
          darkMode
            ? "text-darkTxtOne font-modamBl text-2xl pr-4 pt-6"
            : "text-lightTxtOne font-modamBl text-2xl pr-4 pt-6"
        }
      >
        {persianLan ? "پادکـــــست   %۵۱" : "Shahbalout Music"}
      </span>
    </div>
  );
};

export default MainMusicHeader;
