'use client';

import React, { useContext, useState, useEffect } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';
import Lottison from '../../Global/Lottison';
import callUs from '../../../../../public/assets/lotties/callUs.json';

const SideBarSupportArea = () => {
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
            className={
                persianLan ? 'w-full flex flex-col items-end' : 'w-full flex flex-col items-start'
            }
        >
            <div
                className={
                    persianLan
                        ? 'flex flex-row-reverse items-center mb-4'
                        : 'flex flex-row items-center mb-4'
                }
            >
                <img
                    src="/assets/imgs/support.png"
                    className="w-20 h-20 object-contain bg-transparent drop-shadow-xl"
                />
                <h1
                    className={
                        darkMode
                            ? 'text-darkTxtOne font-modamBl mt-4 mx-4 text-2xl text-center'
                            : 'text-lightTxtOne font-modamBl mt-4 mx-4 text-2xl text-center'
                    }
                >
                    {persianLan ? 'پشتیبـانی مشتریان' : 'Customer Support'}
                </h1>
            </div>

            <div
                className={
                    persianLan
                        ? 'flex flex-col items-center justify-center m-4 mb-32 border border-dashed border-[rgba(200,200,200,0.6)] rounded-lg w-11/12 py-2 cursor-help'
                        : 'flex flex-col items-center m-4 mb-32 border border-dashed border-[rgba(200,200,200,0.6)] rounded-lg w-11/12 py-2 pl-2 cursor-help'
                }
            >
                <div className='flex flex-row items-center'>


               
         
                <a
                    className={
                        darkMode
                            ? 'text-darkTxtOne text-xs font-modamBo m-2'
                            : 'text-lightTxtOne text-xs font-modamBo m-2'
                    }
                    href="tel:+989389459503"
                >
                    {persianLan
                        ? '(.فقط اینجا کلیک نمایید) تماس با ما'
                        : 'Call us! just click here. '}
                </a>

                <div className="w-12">
                    <Lottison Anime={callUs} />
                </div>
                </div>
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtOne text-sm font-modamL '
                            : 'text-lightTxtOne text-sm font-modamL '
                    }
                >
                    +989389459503
                </span>
            </div>
        </div>
    );
};

export default SideBarSupportArea;
