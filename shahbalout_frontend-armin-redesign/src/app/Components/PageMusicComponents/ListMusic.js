'use client';
import React, { useRef } from 'react';
import Image from 'next/image';

const ListMusic = ({ playList, setCurrentSong, currentSong }) => {
    return (
        <div className="mt-3 w-full flex flex-col space-y-4 overflow-y-scroll px-12">
            {playList.map((itm, index) => (
                <div
                    className="flex w-full items-center space-x-4 border-[#FFFF] border-0 rounded-xl p-1 backdrop-blur"
                    onClick={() => setCurrentSong(index)}
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
            ))}
        </div>
    );
};

export default ListMusic;
