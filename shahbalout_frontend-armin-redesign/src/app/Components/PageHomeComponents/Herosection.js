"use client";
import React, { useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import CardVert3dIco from "../Global/CardVert3dIco";
import Link from "next/link";
import MapSection from "./MapSection";

import Lottison from "../Global/Lottison";
//import crown from './assets/lotties/crown.json';

const Herosection = () => {
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
        "w-full flex justify-center top-0 left-0 right-0 p-0 mx-0 -mt-4"
      }
    >
    <img
                className="p-0 m-0 h-screen w-screen object-cover opacity-90 z-0"
                src="/assets/imgs/bgEforia.jpg"
              />

{/* <img
                className="p-0 m-0 w-screen object-cover opacity-90 z-0"
                src="/assets/imgs/bgTwoMainW.jpg"
              /> */}

              <div className="absolute w-screen hidden  md:block opacity-10 bg-lightTxtTwo z-0" />
      {/* <video className="videoTag md:hidden p-0 m-0  w-full" autoPlay loop muted>
        <source src={"/assets/videos/videoVert33.mp4"} type="video/mp4" />
      </video> */}

      {/* <video
        className="videoTag hidden  md:block p-0 m-0 w-full"
        autoPlay
        loop
        muted
      >
        <source src={"/assets/videos/videoHor1.mp4"} type="video/mp4" />
      </video> */}

      <div className="w-full flex flex-col md:flex-row-reverse flex-wrap justify-center px-4 items-end md:items-center top-40  absolute">
        <Link href="/Store">
          <CardVert3dIco
            Title={
              persianLan ? "سفارش آنلاین قهــــــــــوه" : "Order a Coffee"
            }
            Ico={"/assets/imgs/icon/coffeeGooni.png"}
          />
        </Link>
        <Link href="/WinnerBlend">
          <CardVert3dIco
            Title={persianLan ? "ترکیب بـــــــــــرنده" : "Wining Combination"}
            Ico={"/assets/imgs/icon/coffeeBlending1.png"}
          />
        </Link>
        <Link href="/CoffeeTechnics">
          <CardVert3dIco
            Title={persianLan ? "انتخاب قهــــــــوه ساز" : "Coffee Technics"}
            Ico={"/assets/imgs/icon/kemeks.png"}
          />
        </Link>
        <Link href="/Music">
          <CardVert3dIco
            Title={persianLan ? "پادکســت ٪51" : "Podcast 51%"}
            Ico={"/assets/imgs/icon/podcastIco.png"}
          />
        </Link>

        {/* <Link href="/WinnerBlend">
                    <CardVert3dIco
                        Title={'پادشـــاهان مــــــــزه ها'}
                        Ico={'/assets/imgs/icon/donut.png'}
                    />
                </Link> */}
      </div>

      <div className="top-1/2 mt-40 backdrop-blur-lg rounded-lg  md:top-60  absolute p-4 pt-8 mx-auto flex flex-col justify-center items-center">
        <img
          src={"./assets/imgs/icon/crown.png"}
          className="h-16 object-contain absolute -mt-28 md:-mt-32"
        />
        <p className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-tight font-modamBl text-lightBg text-3xl md:text-4xl  text-center">
          {persianLan ? "پادشــــــاه سـرزمین قـــهوه" : "King of Coffee Land"}
        </p>

        <p className="cursor-pointer پف-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-tight  font-modamEl text-lightBg text-sm md:text-md  text-center">
          {persianLan
            ? "خریــــد روزانـــه قــــهوه راحــت تر از همیــشه"
            : "Buying daily coffee is easier than ever"}
        </p>
      </div>

      <div className="top-1/2 mt-40 backdrop-blur-lg rounded-lg  md:top-60  absolute p-4 pt-8 mx-auto flex flex-col justify-center items-center">
        <img
          src={"./assets/imgs/icon/crown.png"}
          className="h-16 object-contain absolute -mt-28 md:-mt-32"
        />
        <p className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-tight font-modamBl text-lightBg text-3xl md:text-4xl  text-center">
          {persianLan ? "پادشــــــاه سـرزمین قـــهوه" : "King of Coffee Land"}
        </p>

        <p className="cursor-pointer پف-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 tracking-tight  font-modamEl text-lightBg text-sm md:text-md  text-center">
          {persianLan
            ? "خریــــد روزانـــه قــــهوه راحــت تر از همیــشه"
            : "Buying daily coffee is easier than ever"}
        </p>
      </div>
    </div>
  );
};

export default Herosection;
