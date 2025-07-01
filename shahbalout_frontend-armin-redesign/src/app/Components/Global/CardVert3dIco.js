'use client';
import React, { useContext } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';

const CardVert3dIco = ({ Title, Ico }) => {
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
        <div className="flex flex-row h-12 select-none md:cursor-pointer transition-all hover:scale-110 hover:ring-2 hover:ring-red-700  mb-10 mx-2 justify-end items-center  pr-0 pl-4 backdrop-blur-lg bg-[rgba(228,228,228,0.4)] rounded-lg">
            <span className="text-xs w-20 text-right font-modamBl text-lightBg mr-2 select-none ">
                {Title}
            </span>
            <img
                src={`${Ico}`}
                className="w-20 h-20 -mt-6  object-contain hover:-translate-y-4 transition-all"
            />
        </div>
    );
};

export default CardVert3dIco;
