"use client";
import React, { useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import Link from "next/link";
import ArrowBackIcon from "../Icons/ArrowBackIcon";
import { Badge, Avatar, Button } from "@nextui-org/react";
import { CheckIcon } from "../Icons/CheckIcon";

const HeaderBackExtraNavi = ({ onPressFrom }) => {
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
    <Button variant="light" onPress={onPressFrom} className="z-999">
      <ArrowBackIcon Size={28} Fill={"#ad1037"} />
      <span
        className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}
                                    ${persianLan ? "text-right" : "text-left"}
                                }    font-modamBl  text-sm`}
      >
        {persianLan ? "بازگشت" : "Back"}
      </span>
    </Button>
  );
};

export default HeaderBackExtraNavi;
