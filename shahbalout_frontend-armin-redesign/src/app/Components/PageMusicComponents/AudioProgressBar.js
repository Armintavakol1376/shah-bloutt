'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';

const AudioProgressBar = ({
    progressBarRef,
    audioPlayer,
    musicList,
    setPlayList,
    repeatSong,
    setReapeatSong,
    setCurrentSong,
    currentSong,
    playAnimationRef,
    duration,
    setTime,
    time,
    small,
}) => {
    const [shuffle, setShuffle] = useState(false);
    const handleProgressRange = () => {
        if (audioPlayer.current?.currentTime != undefined) {
            audioPlayer.current.currentTime = progressBarRef.current?.value;
        }
    };

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }

        return '00:00';
    };

    useEffect(() => {
        if (shuffle) {
            const randomizeArray = [...musicList].sort(() => 0.5 - Math.random());
            setPlayList(randomizeArray.slice(0, musicList.length));
        } else {
            setPlayList(musicList);
        }
    }, [shuffle]);

    return (
        <div className="mt-1 flex w-10/12 flex-col space-y-2">
            {!small && (
                <div className="mb-1 flex justify-between">
                    {' '}
                    <Button isIconOnly variant="light" onClick={() => setReapeatSong(!repeatSong)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 -960 960 960"
                            width="24"
                        >
                            <path
                                d="M366-534 186-714q-13-13-13-30t13-30q13-13 30-13t30 13l180 180-60 60Zm234 378q-18 0-31-13t-13-31q0-18 13-31t31-13h56L534-366l60-60 122 122v-56q0-18 13-31t31-13q18 0 31 13t13 31v152q0 22-15 37t-37 15H600Zm-414-30q-13-13-13-30t13-30l470-470h-56q-18 0-31-13t-13-31q0-18 13-31t31-13h152q22 0 37 15t15 37v152q0 18-13 31t-31 13q-18 0-31-13t-13-31v-56L246-186q-13 13-30 13t-30-13Z"
                                className={`${repeatSong ? 'fill-[#ad1037]' : 'fill-[#ffff]'}`}
                            />
                        </svg>
                    </Button>
                    <Button isIconOnly variant="light" onClick={() => setShuffle(!shuffle)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 -960 960 960"
                            width="24"
                        >
                            <path
                                d="M677-284v-110q0-22 15.5-37.5T730-447q23 0 38 15t15 37v165q0 22-15 37t-37 15H296l13 13q16 16 16.5 38T310-89q-16 16-38 16t-37-15L129-194q-16-16-16-37t16-37l105-105q15-15 37-14.5t39 14.5q17 14 16.5 36.5T310-298l-14 14h381ZM284-677v110q0 22-15.5 37.5T231-514q-23 0-38-15t-15-37v-165q0-22 15-37t37-15h435l-13-13q-16-16-15.5-37.5T652-872q15-16 36.5-16.5T726-873l106 106q16 16 16 37t-16 37L727-588q-16 16-37.5 16T652-588q-16-16-16-38t15-37l14-14H284Z"
                                className={`${shuffle ? 'fill-[#ad1037]' : 'fill-[#ffff]'}`}
                            />
                        </svg>
                    </Button>
                </div>
            )}
            <input
                id="input"
                type="range"
                ref={progressBarRef}
                defaultValue="0"
                onChange={handleProgressRange}
                className="accent-[#ffff]"
            />
            <div className="flex justify-between font-modamBo text-xs text-lightBg drop-shadow">
                <span>{formatTime(time)}</span>
                <span>{formatTime(duration)}</span>
            </div>
        </div>
    );
};

export default AudioProgressBar;
