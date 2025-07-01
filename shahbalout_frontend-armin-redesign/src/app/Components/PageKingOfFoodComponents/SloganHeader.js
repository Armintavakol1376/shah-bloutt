"use client";
import React, { useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";

import Lottison from "../Global/Lottison";
// import foodLover from "../../../../public/assets/lotties/foodloverLottie.json";
// import coffeeBuy from "../../../../public/assets/lotties/coffeeBuy.json";
import coffeeOrbit from "../../../../public/assets/lotties/coffeeOrbit.json";
// import buyMeCoffee from "../../../../public/assets/lotties/buyMeCoffee.json";
// import musicLottie from "../../../../public/assets/lotties/musicLottie.json";

const SloganHeader = () => {
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
          ? "w-full -mt-8 flex pb-10 flex-row-reverse items-center justify-around md:justify-around"
          : "w-full -mt-8 pb-10 flex flex-row items-center justify-around md:justify-around"
      }
    >
      <p
        className={
          persianLan
            ? darkMode
              ? "font-modamBl text-2xl md:text-4xl w-1/2 text-darkTxtOne text-right mt-4"
              : "font-modamBl text-2xl md:text-4xl w-1/2 text-lightxtOne text-right mt-4"
            : darkMode
            ? "font-modamBl text-2xl md:text-4xl w-1/2 text-darkTxtOne text-left mt-4"
            : "font-modamBl text-2xl md:text-4xl w-1/2 text-lightxtOne text-left mt-4"
        }
      >
        {persianLan
          ? "شــــوخی و قهــــوه مـــــا را زنــــــده نگــــــــه می دارد"
          : "Jokes and Coffee keep us alive."}
      </p>

      <div className="w-1/2  md:w-1/3 scale-90 -ml-6">
        <Lottison Anime={coffeeOrbit} Wi={200} He={100} />
      </div>
    </div>
  );
};

export default SloganHeader;
