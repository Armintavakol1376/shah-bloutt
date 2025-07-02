'use client';
import React, { useContext } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';
import { DarkColors, LightColors } from '@/app/ContextArea/ColorsPalette';

const ScreenWrapper = ({ children }) => {
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
            className={`w-full min-h-screen overflow-x-hidden ${
                darkMode ? `bg-darkBg` : `bg-lightBg`
            } `}
        >
            {children}
        </div>
    );
};

export default ScreenWrapper;
