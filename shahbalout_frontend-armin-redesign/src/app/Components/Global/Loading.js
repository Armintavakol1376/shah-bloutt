' use client';

import React, { useContext } from 'react';
import Lottison from './Lottison';
import coffeeLoad from '../../../../public/assets/lotties/coffeeLoad.json';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';

const Loading = ({ Ttl }) => {
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
        <div className="w-full flex flex-col items-center">
            <div className="flex flex-col w-48">
                <Lottison Anime={coffeeLoad} />
            </div>
            <p
                className={
                    darkMode
                        ? 'text-darkTxtTwo font-modamBo -mt-8 text-center w-full'
                        : 'text-lightTxtTwo font-modamBo -mt-8 text-center w-full'
                }
            >
                {Ttl
                    ? Ttl
                    : persianLan
                    ? '...شـــــاه بلوط در حال فکر کردن است '
                    : 'ShahBalout is thinking...'}
            </p>
        </div>
    );
};

export default Loading;
