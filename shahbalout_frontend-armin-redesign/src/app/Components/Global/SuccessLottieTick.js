"use client";
import React, { useContext, useState } from "react";
//import Fade from "react-reveal/Fade";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import { Button } from "@nextui-org/react";
import Lottison from "./Lottison";

import coffeeOrbit from "../../../../public/assets/lotties/coffeeOrbit.json";
import coffeebuy from "../../../../public/assets/lotties/coffeebuy.json";
import coffeeTick from "../../../../public/assets/lotties/coffeeTick.json";

const SuccessLottieTick = ({ OnClickFrom, PersianTtl, EngTtl, Anime }) => {
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
    <>
      <div className="w-28 h-28">
        <Lottison Anime={coffeeTick} />
      </div>
      {/* <Fade top> */}
      <span
        className={
          darkMode
            ? "font-modamBo text-darkTxtTwo px-2 pt-2 pb-4"
            : "font-modamBo text-lightTxtTwo px-2 pt-2 pb-4"
        }
      >
        {persianLan ? PersianTtl : EngTtl}
      </span>
      {/* </Fade> */}
      <Button
        color="success"
        className="w-full py-8 my-2 text-lg mb-44"
        onClick={OnClickFrom}
      >
        {persianLan ? "بستن" : "close"}
      </Button>
    </>
  );
};

export default SuccessLottieTick;
