'use client';
import { Button } from '@nextui-org/react';
import React from 'react';

const AudioControlers = ({
    playPause,
    isPlayMusic,
    audioPlayer,
    currentSong,
    setCurrentSong,
    musicList,
}) => {
    const handleTime = (ele) => {
        if (audioPlayer?.current.currentTime != undefined) {
            if (ele === 'back') {
                audioPlayer.current.currentTime = audioPlayer.current.currentTime - 10;
            } else {
                audioPlayer.current.currentTime = audioPlayer.current.currentTime + 10;
            }
        }
    };

    const handleMusic = (ele) => {
        if (ele === 'next') {
            if (currentSong != musicList.length - 1) {
                setCurrentSong(currentSong + 1);
            } else {
                setCurrentSong(0);
            }
        }

        if (ele === 'back') {
            if (currentSong != 0) {
                setCurrentSong(currentSong - 1);
            } else {
                setCurrentSong(musicList.length - 1);
            }
        }
    };
    return (
        <div className="mt-3 flex w-3/5 items-center justify-between">
            <Button
                className="relative"
                isIconOnly
                variant="light"
                onClick={() => handleMusic('back')}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.4"
                        d="M20.2409 7.22005V16.7901C20.2409 18.7501 18.111 19.98 16.411 19L12.261 16.61L8.11094 14.21C6.41094 13.23 6.41094 10.78 8.11094 9.80004L12.261 7.40004L16.411 5.01006C18.111 4.03006 20.2409 5.25005 20.2409 7.22005Z"
                        fill="#ad1037"
                    />
                    <path
                        d="M3.75977 18.9298C3.34977 18.9298 3.00977 18.5898 3.00977 18.1798V5.81982C3.00977 5.40982 3.34977 5.06982 3.75977 5.06982C4.16977 5.06982 4.50977 5.40982 4.50977 5.81982V18.1798C4.50977 18.5898 4.16977 18.9298 3.75977 18.9298Z"
                        fill="#ad1037"
                    />
                </svg>
            </Button>

            {playPause ? (
                <Button
                    isIconOnly
                    variant="light"
                    onClick={isPlayMusic}
                    size="lg"
                    //className="box-content h-[36px] w-2 border-x-8 border-x-[#ad1037]"
                >
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shadow-xl p-2"
                    >
                        <path
                            opacity="0.4"
                            d="M13.5 4.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1Z"
                            fill="#ad1037"
                        />
                        <path
                            d="M2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1Z"
                            fill="#ad1037"
                        />
                    </svg>
                </Button>
            ) : (
                <Button
                    isIconOnly
                    variant="light"
                    onClick={isPlayMusic}
                    size="lg"
                    //className="box-content h-[36px] w-2 border-x-8 border-x-[#ad1037]"
                >
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shadow-xl animate-pulse"
                    >
                        <path
                            d="M18.7 8.97989L4.14 17.7099C4.05 17.3799 4 17.0299 4 16.6699V7.32989C4 4.24989 7.33 2.32989 10 3.86989L14.04 6.19989L18.09 8.53989C18.31 8.66989 18.52 8.80989 18.7 8.97989Z"
                            fill="#ad1037"
                        />
                        <path
                            opacity="0.4"
                            d="M18.0907 15.4598L14.0407 17.7998L10.0007 20.1298C8.0907 21.2298 5.8407 20.5698 4.7207 18.9598L5.1407 18.7098L19.5807 10.0498C20.5807 11.8498 20.0907 14.3098 18.0907 15.4598Z"
                            fill="#ad1037"
                        />
                    </svg>
                </Button>
            )}

            <Button
                className="relative"
                isIconOnly
                variant="light"
                onClick={() => handleMusic('next')}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.4"
                        d="M3.75977 7.22005V16.7901C3.75977 18.7501 5.88975 19.98 7.58975 19L11.7397 16.61L15.8898 14.21C17.5898 13.23 17.5898 10.78 15.8898 9.80004L11.7397 7.40004L7.58975 5.01006C5.88975 4.03006 3.75977 5.25005 3.75977 7.22005Z"
                        fill="#ad1037"
                    />
                    <path
                        d="M20.2402 18.9298C19.8302 18.9298 19.4902 18.5898 19.4902 18.1798V5.81982C19.4902 5.40982 19.8302 5.06982 20.2402 5.06982C20.6502 5.06982 20.9902 5.40982 20.9902 5.81982V18.1798C20.9902 18.5898 20.6602 18.9298 20.2402 18.9298Z"
                        fill="#ad1037"
                    />
                </svg>
            </Button>
        </div>
    );
};

export default AudioControlers;
