'use client';
import React, { useContext } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';

import Lottison from '../Global/Lottison';
import coffeeOrbit from '../../../../public/assets/lotties/coffeeOrbit.json';

const CoffeeSloganSection = () => {
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
    <div className="pt-20">

        <div
            className={
                persianLan
                    ? 'w-full flex mb-4 flex-row-reverse items-center justify-between md:justify-around'
                    : 'w-full mb-4 flex flex-row items-center justify-between md:justify-around'
            }
        >
            <div className="w-2/3 flex flex-col">
                <span
                    className={
                        persianLan
                            ? darkMode
                                ? 'w-full font-modamBl text-2xl md:text-4xl  text-darkTxtOne text-right mt-4'
                                : 'w-full font-modamBl text-2xl md:text-4xl text-lightxtOne text-right mt-4'
                            : darkMode
                            ? 'w-full font-modamBl text-2xl md:text-4xl text-darkTxtOne text-left mt-4'
                            : 'w-full font-modamBl text-2xl md:text-4xl text-lightxtOne text-left mt-4'
                    }
                >
                    {persianLan
                        ? 'تا زمانی که قهوه در جهان وجود دارد، اوضاع مگر می‌شود بد باشد؟'
                        : 'As long as there was coffee in the world, how bad could things be?'}
                </span>

                <span
                    className={
                        persianLan
                            ? darkMode
                                ? 'w-full text-xs opacity-90 text-darkTxtOne text-right mt-1'
                                : 'w-full text-xs opacity-90 text-lightxtOne text-right mt-1'
                            : darkMode
                            ? 'w-full text-xs opacity-90 text-darkTxtOne text-left mt-1'
                            : 'w-full text-xs opacity-90 text-lightxtOne text-left mt-1'
                    }
                >
                    {persianLan ? ` "کاساندار کلـــــر"` : `"Cassandra Clare"`}
                </span>
            </div>

            <div className="w-1/3  md:w-1/3 scale-90">
                <Lottison Anime={coffeeOrbit} Wi={200} He={100} />
            </div>
        </div>

    </div>
);

}

export default CoffeeSloganSection;
