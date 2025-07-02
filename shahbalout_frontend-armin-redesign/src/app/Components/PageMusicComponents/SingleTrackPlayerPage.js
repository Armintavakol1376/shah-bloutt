"use client";
import React, { useState, useContext, useRef, useEffect } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import Image from "next/image";
import { motion } from "framer-motion";
import ListMusic from "./ListMusic";
import AudioProgressBar from "./AudioProgressBar";
import AudioControlers from "./AudioControlers";
import { Button } from "@nextui-org/react";

//https://github.com/anhthii/Echo
//https://github.com/anijitsao/react-app-simple-music-app
//https://dev.to/ryhenness/nodejs--express-server-setup-6ch
//https://dev.to/ryhenness/making-a-node-js-soundcloud-music-player-315d
//https://www.analyticsvidhya.com/blog/2022/11/creating-a-music-streaming-backend-like-spotify-using-mongodb

const boxVariants = {
  checked: { rotateY: 360 },
};

const SingleTrackPlayerPage = ({ switchFrom, Song }) => {
  console.log("song: ", Song);

  const musicList = [
    {
      title: "چرا تو جنگی",
      singer: "Shadmehr",
      srcMusic: "./assets/music/Shadmehr Aghili - Chera Too Jangi [128].mp3",
      imgSrc: "/assets/music/cheratoojangicover.jpg",
      Album: "shadmehr - -",
    },

    {
      title: "Popcorn",
      singer: "Shadmehr",
      srcMusic: "./assets/music/05. Shadmehr Aghili - Popcorn.mp3",
      imgSrc: "/assets/imgs/musiccover.jpg",
      Album: "shadmehr",
    },

    {
      title: "To Be Man",
      singer: "Shadmehr",
      srcMusic: "./assets/music/Shadmehr Aghili - To Bi Man [320].mp3",
      imgSrc: "/assets/music/tobemancover.png",
      Album: "eshgh",
    },

    {
      title: "من",
      singer: "Shadmehr",
      srcMusic: "./assets/music/sharomin.mp3",
      imgSrc: "/assets/imgs/musiccover.jpg",
      Album: "شارومین",
    },
  ];

  const podcastList = [
    {
      title: "51% پادکست",
      singer: "Pourya Bayat",
      srcMusic: "./assets/music/Podcasts/Padcast51EP1.mp3",
      imgSrc: "/assets/music/cheratoojangicover.jpg",
      Album: "Podcast 51%",
    },
  ];

  const [playList, setPlayList] = useState(Song.Album);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [currentSong, setCurrentSong] = useState(Song.SongIndex);
  const [repeatSong, setReapeatSong] = useState(false);
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(0);
  const [playPause, setPlayPause] = useState(false);

  const audioPlayer = useRef();
  const playAnimationRef = useRef();
  const progressBarRef = useRef(null);

  const repeat = () => {
    const currentTimeNow = audioPlayer.current?.currentTime;
    setTime(currentTimeNow);
    if (duration) {
      progressBarRef.current != null &&
        (progressBarRef.current.value = currentTimeNow);
      progressBarRef.current != null &&
        progressBarRef.current.style.setProperty(
          "--range-progress",
          `${(progressBarRef.current.value / duration) * 100}%`
        );

      if (duration === audioPlayer.current?.currentTime) {
        if (repeatSong) {
          setCurrentSong(currentSong);
        } else {
          if (currentSong != Song.Album.length - 1) {
            setCurrentSong(currentSong + 1);
          } else {
            setCurrentSong(0);
          }
        }
      }
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  };

  const isPlayMusic = () => {
    setPlayPause(!playPause);
  };

  const onLoadedMetadataCreation = () => {
    const seconds = audioPlayer.current?.duration;
    setDuration(seconds);
    progressBarRef.current != null && (progressBarRef.current.max = seconds);
  };

  useEffect(() => {
    if (audioPlayer.current && playPause === true) {
      audioPlayer.current.play();
    }

    if (audioPlayer.current && playPause === false) {
      audioPlayer.current.pause();
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioPlayer.current, playPause, repeat]);
  return (
    <div>
      {playList[currentSong].srcMusic != undefined && (
        <audio
          ref={audioPlayer}
          src={playList[currentSong].srcMusic}
          onLoadedMetadata={onLoadedMetadataCreation}
        />
      )}
      <div className="absolute top-0 -z-1">
        <Image
          className="fixed h-full w-full scale-[1.1] object-cover blur-md"
          loading="lazy"
          src={playList[currentSong].imgSrc}
          alt={"all music is here for coffe lovers"}
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>

      <motion.div
        transition={{ duration: 0.3 }}
        animate={open ? { height: 700 } : { height: 110 }}
        initial={{ height: 110 }}
        className="fixed inset-x-0 top-0 flex flex-col items-center rounded-b-[50px]
                border-x border-b border-[#FFFF] bg-lightBg bg-opacity-30 pb-8 backdrop-blur-sm">
        <div className="flex w-full items-center  px-7 py-4 mb-6">
          {/* <div className="  flex w-14 h-14 items-center justify-center rounded-full bg-opacity-50 bg-lightBg">
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.2599 16.2802C13.0699 16.2802 12.8799 16.2102 12.7299 16.0602L9.19992 12.5302C8.90992 12.2402 8.90992 11.7602 9.19992 11.4702L12.7299 7.94016C13.0199 7.65016 13.4999 7.65016 13.7899 7.94016C14.0799 8.23016 14.0799 8.71016 13.7899 9.00016L10.7899 12.0002L13.7899 15.0002C14.0799 15.2902 14.0799 15.7702 13.7899 16.0602C13.6499 16.2102 13.4599 16.2802 13.2599 16.2802Z"
                                fill="#292D32"
                            />
                        </svg>
                    </div> */}

          <div
            className="flex h-14 w-14 items-center justify-center rounded-3xl bg-lightBg
                    bg-opacity-20 backdrop-blur-md">
            <Button isIconOnly variant="light" onPress={switchFrom}>
              <motion.svg
                initial={false}
                animate={dark ? "checked" : "unchecked"}
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                className="focus:outline-none">
                {!dark ? (
                  <motion.path
                    transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
                    d="M13.2599 16.2802C13.0699 16.2802 12.8799 16.2102 12.7299 16.0602L9.19992 12.5302C8.90992 12.2402 8.90992 11.7602 9.19992 11.4702L12.7299 7.94016C13.0199 7.65016 13.4999 7.65016 13.7899 7.94016C14.0799 8.23016 14.0799 8.71016 13.7899 9.00016L10.7899 12.0002L13.7899 15.0002C14.0799 15.2902 14.0799 15.7702 13.7899 16.0602C13.6499 16.2102 13.4599 16.2802 13.2599 16.2802Z"
                    fill="#292D32"
                    variants={boxVariants}
                  />
                ) : (
                  <motion.path
                    transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
                    d="M13.2599 16.2802C13.0699 16.2802 12.8799 16.2102 12.7299 16.0602L9.19992 12.5302C8.90992 12.2402 8.90992 11.7602 9.19992 11.4702L12.7299 7.94016C13.0199 7.65016 13.4999 7.65016 13.7899 7.94016C14.0799 8.23016 14.0799 8.71016 13.7899 9.00016L10.7899 12.0002L13.7899 15.0002C14.0799 15.2902 14.0799 15.7702 13.7899 16.0602C13.6499 16.2102 13.4599 16.2802 13.2599 16.2802Z"
                    fill="#292D32"
                    variants={boxVariants}
                  />
                )}
              </motion.svg>
            </Button>
          </div>

          <div className="flex flex-col items-center ml-6">
            <span className="font-modamBl text-[rgba(50,50,50)] drop-shadow-lg text-xl">
              {playList[currentSong].title}{" "}
            </span>
            {playList[currentSong].Album != "single track" && (
              <span>{playList[currentSong].singer}</span>
            )}
          </div>
        </div>
        {open && (
          <ListMusic
            playList={playList}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
          />
        )}

        <Button
          isIconOnly
          variant="light"
          className="absolute bottom-2"
          onClick={() => setOpen(!open)}>
          <motion.svg
            initial={false}
            animate={open ? "open" : "close"}
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="focus:outline-none transition-all ">
            <motion.path
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
              fill="#292D32"
              variants={{ open: { rotate: 180 } }}
            />
          </motion.svg>
        </Button>
      </motion.div>
      {!open && (
        <div className="mt-36 flex justify-center">
          <Image
            className="w-3/5 md:w-60 rounded-3xl object-contain shadow-xl z-10 "
            loading="lazy"
            src={playList[currentSong].imgSrc}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}

      {!open ? (
        <div
          className="fixed inset-x-0 bottom-0 flex flex-col items-center rounded-t-[50px] border-x border-t border-[#FFFF]
          bg-lightBg  bg-opacity-30 pb-5 backdrop-blur-lg">
          <div className=" mt-2 h-[4px] w-14 rounded-full bg-darkBg bg-opacity-50 backdrop-blur" />
          <div className=" mt-4 mb-4 flex w-full  items-center justify-between px-12 ">
            <div className="z-10 flex flex-col items-start text-lightBg">
              <span className="z-10 text-left text-xl font-modamBl drop-shadow-lg">
                {playList[currentSong].title}
              </span>
              <div className="mt-1">
                <span className="text-sm opacity-50">Album: </span>{" "}
                <span className="text-sm font-modamEl opacity-70 drop-shadow-2xl">
                  {playList[currentSong].Album}
                </span>
              </div>
            </div>

            <Image
              className="w-16  rounded-xl object-contain shadow-lg "
              loading="lazy"
              src={playList[currentSong].imgSrc}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
          <AudioProgressBar
            progressBarRef={progressBarRef}
            audioPlayer={audioPlayer}
            musicList={Song.Album}
            setPlayList={setPlayList}
            repeatSong={repeatSong}
            setCurrentSong={setCurrentSong}
            currentSong={currentSong}
            playAnimationRef={playAnimationRef}
            setReapeatSong={setReapeatSong}
            duration={duration}
            setTime={setTime}
            time={time}
            small={true}
          />
          <AudioControlers
            playPause={playPause}
            isPlayMusic={isPlayMusic}
            audioPlayer={audioPlayer}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            musicList={Song.Album}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SingleTrackPlayerPage;
