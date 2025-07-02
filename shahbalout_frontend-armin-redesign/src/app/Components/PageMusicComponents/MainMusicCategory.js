"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import { Link, Button } from "@nextui-org/react";

import SingleTrackPlayerPage from "./SingleTrackPlayerPage";
import MainMusicHeader from "./MainMusicHeader";

const MainMusicCategory = ({ switchFrom, switchPage }) => {
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

  const [singleSong, setSingleSong] = useState({ Album: [], SongIndex: null });

  const musicList = [
    {
      title: "چرا تو جنگی",
      singer: "Shadmehr",
      srcMusic: "./assets/music/Shadmehr Aghili - Chera Too Jangi [128].mp3",
      imgSrc: "/assets/music/cheratoojangicover.jpg",
      Album: "shadmehr - -",
    },

    // {
    //     title: 'Popcorn',
    //     singer: 'Shadmehr',
    //     srcMusic: './assets/music/05. Shadmehr Aghili - Popcorn.mp3',
    //     imgSrc: '/assets/imgs/musiccover.jpg',
    //     Album: 'shadmehr',
    // },

    // {
    //     title: 'To Be Man',
    //     singer: 'Shadmehr',
    //     srcMusic: './assets/music/Shadmehr Aghili - To Bi Man [320].mp3',
    //     imgSrc: '/assets/music/tobemancover.png',
    //     Album: 'eshgh',
    // },

    // {
    //     title: 'من',
    //     singer: 'Shadmehr',
    //     srcMusic: './assets/music/sharomin.mp3',
    //     imgSrc: '/assets/imgs/musiccover.jpg',
    //     Album: 'شارومین',
    // },
  ];

  const podcastList = [
    {
      title: "Podcast 51% - Ep01",
      ep: "مسئله منشی",
      singer: "Pourya Bayat",
      srcMusic: "./assets/music/Podcasts/Padcast51EP1.mp3",
      imgSrc: "/assets/music/Podcasts/podcast51ep1.png",
      Album: "Podcast 51%",
    },

    {
      title: "Podcast 51% - Ep02",
      ep: "اثر پروانه ای",
      singer: "Pourya Bayat",
      srcMusic: "./assets/music/Podcasts/Padcast51EP2.mp3",
      imgSrc: "/assets/music/Podcasts/podcast51ep2.png",
      Album: "Podcast 51%",
    },
  ];
  return (
    <>
      {switchPage ? (
        <SingleTrackPlayerPage switchFrom={switchFrom} Song={singleSong} />
      ) : (
        <div className="w-full flex flex-col">
          <MainMusicHeader />

          <span
            className={
              darkMode
                ? "text-darkTxtOne text-right  py-6"
                : "text-lightTxtOne text-right py-6"
            }
          >
            ما در اینجا توسعه ی افکارمان را به اشتراک می‌گذاریم و سعی می‌کنیم یک
            درصد بیشتر از گذشته بدانیم. اعتقاد داریم تنها یک درصد و مستمر بهتر
            از میانگین بودن کافیست برای بهترین شدن و همچنین معتقدیم برای کامیابی
            بیت ها و پیکسل ها تعیین کننده هستند و هیچ موفقیتی یکباره و یکجا ممکن
            نیست. پس گوش کردن به این پادکست بهتر از گوش نکردن به آن است، اندکی
            بهتر
          </span>
          {/* <div className="w-full gap-2 flex flex-row items-center justify-between">
            <div
              // onClick={() => {
              //     setSingleSong({ Album: musicList, SongIndex: 0 }), switchFrom();
              // }}
              className="p-6 w-1/2 flex flex-col backdrop-blur-xl bg-[rgba(200,200,200,0.1)] items-center justify-between  rounded-xl transition-all hover:ring md:cursor-pointer"
            >
              <img
                src="/assets/imgs/icon/musicIcon.png"
                className="w-32 h-32 mb-4 object-contain drop-shadow-xl hover:scale-110 hover:-rotate-30 transition-all"
              />
              <span
                className={
                  darkMode
                    ? "text-darkTxtOne text-2xl font-modamBl"
                    : "text-lightTxtOne text-2xl font-modamBl"
                }
              >
                {persianLan ? "موزیـــــک ها" : "Musics"}
              </span>
            </div>
            <div
              onClick={() => {
                setSingleSong({ Album: podcastList, SongIndex: 0 }),
                  switchFrom();
              }}
              className="p-6 w-1/2 flex flex-col backdrop-blur-xl bg-[rgba(200,200,200,0.1)] items-center justify-between  rounded-xl transition-all hover:ring md:cursor-pointer"
            >
              <img
                src="/assets/imgs/icon/podcastIcon.png"
                className="w-32 h-32 mb-4 object-contain drop-shadow-xl hover:scale-110 hover:-rotate-30 transition-all"
              />

              <span
                className={
                  darkMode
                    ? "text-darkTxtOne text-2xl font-modamBl"
                    : "text-lightTxtOne text-2xl font-modamBl"
                }
              >
                {persianLan ? "پادکســت ها" : "Podcasts"}
              </span>
            </div>
          </div> */}

          {podcastList.map((itm, index) => (
            <div
              key={index}
              className="flex w-full items-center space-x-4 border-[#FFFF] border-0 rounded-xl p-1 my-1 backdrop-blur bg-[rgba(200,200,200,0.15)]"
              onClick={() => {
                setSingleSong({ Album: podcastList, SongIndex: index }),
                  switchFrom();
              }}
            >
              <Image
                className="w-16 rounded-lg object-contain"
                loading="lazy"
                src={itm.imgSrc}
                alt=""
                width="0"
                height="0"
                sizes="100vw"
              />

              <div className="flex flex-col text-left text-lightTxtOne">
                <span
                  className={
                    darkMode
                      ? "text-darkTxtOne font-modamBl text-xl "
                      : "text-lightTxtOne font-modamBl text-xl"
                  }
                >
                  {itm.title}
                </span>
                <span
                  className={
                    darkMode
                      ? "text-darkTxtTwo font-modamL"
                      : "text-lightTxtTwo font-modamL"
                  }
                >
                  {itm.ep}
                </span>
              </div>
            </div>
          ))}

          <span
            className={
              darkMode
                ? "text-darkTxtOne text-right text-sm  py-6"
                : "text-lightTxtOne text-right text-sm py-6"
            }
          >
            ادامه پادکست ها در کست باکس و همچنین در پایین از طریق دریچه آی فریم
            در دسترس شماست
          </span>

          <Button
            href="https://castbox.fm/vh/5737763"
            as={Link}
            color="warning"
            showAnchorIcon
            variant="solid"
            className="mt-4"
          >
            لینک ما در کست باکس
          </Button>
          <div className="w-full flex flex-col pt-6 pb-16 gap-1 items-center ">
            <span
              className={
                darkMode
                  ? "text-darkTxtOne p-2 font-modamR"
                  : "text-lightTxtOne p-2 font-modamR"
              }
            >
              {persianLan
                ? ":در کست باکس با پادکســـت %51"
                : "Latest 51٪Podcasts in CastBox:"}
            </span>

            <iframe
              src="https://castbox.fm/app/castbox/player/id5737763?v=8.22.11&autoplay=0"
              frameborder={10}
              width="100%"
              height="500"
            ></iframe>

            {/* <span
                            className={
                                darkMode
                                    ? 'text-darkTxtOne p-2 font-modamR'
                                    : 'text-lightTxtOne p-2 font-modamR'
                            }
                        >
                            {persianLan
                                ? 'آخرین رمیکس های کافه ای و جدید'
                                : 'Latest Music & Podcasts:'}
                        </span>
                        {musicList.map((itm, index) => (
                            <div
                                className="flex w-full items-center space-x-4 border-[#FFFF] border-0 rounded-xl p-1 my-1 backdrop-blur bg-[rgba(200,200,200,0.15)]"
                                onClick={() => {
                                    setSingleSong({ Album: musicList, SongIndex: index }),
                                        switchFrom();
                                }}
                            >
                                <Image
                                    className="w-16 rounded-lg object-contain"
                                    loading="lazy"
                                    src={itm.imgSrc}
                                    alt=""
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                />

                                <div className="flex flex-col text-left text-[lightTxtOne]">
                                    <span className="font-modamBl text-xl text-[rgba(70,70,60)]">
                                        {itm.title}
                                    </span>{' '}
                                    <span>{itm.Album}</span>
                                </div>
                            </div>
                        ))} */}
          </div>
        </div>
      )}
    </>
  );
};

export default MainMusicCategory;
