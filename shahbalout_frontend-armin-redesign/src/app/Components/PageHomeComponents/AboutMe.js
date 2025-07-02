"use client";
import React, { useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import instagram from "../../../../public/assets/lotties/instagram.json";
import Lottison from "../Global/Lottison";
import Link from "next/link";

const AboutMe = () => {
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
    <div className="flex flex-col select-none md:cursor-pointer transition-all mb-32 mx-2 justify-center items-center  backdrop-blur-lg rounded-lg">
      {/* <span
        className={`${
          darkMode
            ? "text-darkTxtOne text-center text-lg  font-modamR mb-8 select-none"
            : "text-lightTxtOne text-center text-lg font-modamR mb-8 select-none"
        }`}
      >
        Follow us on Instagram | صفحه فروشگاه ما
      </span>

      <span
        className={
          darkMode
            ? "text-darkTxtOne text-xs font-modamL mx-2"
            : "text-lightTxtOne text-xs font-modamL mx-2"
        }
        href="mailto: Afshari.kasra@gmail.com"
      >
        لطفا روی لوگو زیر کلیک کنید:
      </span>

      <Link href="https://www.instagram.com/shaahbalout/profilecard/?igsh=MXUyNjM3NHFhcnp4MA==">
        <Lottison Anime={instagram} Wi={50} />
      </Link> */}

      {/* <a
        className={
          darkMode
            ? "text-darkTxtOne text-xs font-modamR mx-2"
            : "text-lightTxtOne text-xs font-modamR mx-2"
        }
        href="mailto: Afshari.kasra@gmail.com"
      >
        - Made with coffee & JavaScript By Alfa Team: Arash Iranpoor , Kasra
        Afshari , Mina Elyasi / feel free to contact us: Afshari.kasra@gmail.com
        -
      </a> */}
    </div>
  );
};

export default AboutMe;
