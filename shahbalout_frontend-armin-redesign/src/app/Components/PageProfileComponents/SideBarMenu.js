'use client';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';

const SideBarMenu = ({ children }) => {
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

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div
            className={
                darkMode
                    ? persianLan
                        ? 'w-full  overflow-y-auto  flex flex-col items-end relative border-2 mb-2 border-lightBg border-opacity-10  z-10 md:mx-0 backdrop-blur rounded-xl px-3 pt-2 bg-[rgba(200,200,200,0.15)]  pb-auto'
                        : 'w-full  overflow-y-auto flex flex-col items-start relative border-2 mb-2 border-lightBg border-opacity-10  z-10 md:mx-0 backdrop-blur rounded-xl px-3 pt-2 bg-[rgba(200,200,200,0.15)]  pb-auto'
                    : persianLan
                    ? 'w-full  overflow-y-auto flex flex-col items-end relative border-0 mb-2 border-lightBg border-opacity-10  z-10 md:mx-0 backdrop-blur rounded-2xl px-3 pt-2 bg-gradient-to-r from-[rgba(140,130,182,0.2)] to-lightBg shadow-lg  pb-auto'
                    : 'w-full  overflow-y-auto flex flex-col items-start relative border-0 mb-2 border-lightBg border-opacity-10  z-10 md:mx-0 backdrop-blur rounded-2xl px-3  pt-2 bg-gradient-to-r from-[rgba(140,130,182,0.2)] to-lightBg shadow-lg  pb-auto'
            }
        >
            {isClient && children}
        </div>
    );
};

export default SideBarMenu;
