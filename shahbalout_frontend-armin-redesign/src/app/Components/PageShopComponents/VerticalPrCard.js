'use client';
import React, { useContext } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';
import Image from 'next/image';

import CoffeBeanFillIcon from '../Icons/CoffeBeanFillIcon';
import DoubleCoffeeBeanIcon from '../Icons/DoubleCoffeeBeanIcon';
import { AddBulkIcon } from '../Icons/AddBulkIcon';
import { Button } from '@nextui-org/react';

const VerticalPrCard = ({ Size }) => {
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
            className={`w-36 pt-12 backdrop-blur
             m-1 flex flex-col items-center rounded-lg hover:scale-102 transition-all duration-150`}
        >
            <div
                className={`w-36 h-56 relative flex backdrop-blur flex-col items-center justify-start p-2 rounded-lg hover:ring-1 md:cursor-pointer ${
                    darkMode ? 'bg-[rgba(200,200,200,0.2)]' : 'bg-[#FFFF]'
                }`}
            >
                <div className="absolute w-full p-4 flex flex-row flex-wrap items-center justify-center -z-1">
                    <div className="w-16 h-16 bg-opacity-20  m-1 ">
                        <DoubleCoffeeBeanIcon Fill={'#AD1037'} />
                    </div>
                </div>
                <div className={`w-32  h-32 relative flex justify-center  rounded-lg  z-10 `}>
                    <Image
                        src={'/assets/imgs/coffeeBag1.png'}
                        width={120}
                        height={200}
                        alt="coffee"
                        className="-mt-12 drop-shadow-xl z-10"
                    />

                    <div className="absolute flex flex-row flex-wrap w-full h-full p-1 -z-1 overflow-hidden">
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />

                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />

                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />

                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />

                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />

                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />

                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />

                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />

                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                        <DoubleCoffeeBeanIcon Size={24} Fill={'rgba(200 , 200 , 200 , 0.3)'} />
                    </div>
                </div>

                <span
                    className={`${darkMode ? 'text-darkTxtOne' : 'text-lightTxtOne'}
                                    ${persianLan ? 'text-right' : 'text-left'}
                                }    font-modamBl  w-full p-1 text-sm `}
                >
                    {persianLan ? 'اسپرسو مدیوم' : 'Espresso Medium'}
                </span>

                <span
                    className={`${darkMode ? 'text-darkTxtOne' : 'text-lightTxtOne'}
                                    ${persianLan ? 'text-right' : 'text-left'}
                                }    font-modamRe  w-full px-1 text-sm `}
                >
                    {persianLan ? 'بسته 250' : '250 Pocket'}
                </span>
                <div className="w-full flex flex-row items-center justify-center mt-auto">
                    <div className="flex flex-row items-center justify-center mr-auto">
                        <span
                            className={`${
                                darkMode ? 'text-darkTxtOne' : 'text-lightTxtOne'
                            } 'text-left'
                    font-modamR  w-full ml-1 text-xs tracking-tighter scale-75`}
                        >
                            {persianLan ? 'تومان' : '$'}
                        </span>

                        <span
                            className={`${
                                darkMode ? 'text-[#AD1037]' : 'text-[#AD1037]'
                            } 'text-left'
                    font-modamBl  w-full pl-1 `}
                        >
                            {persianLan ? '225,000' : '6.3'}
                        </span>
                    </div>

                    <Button isIconOnly variant="light" className="p-0 -mr-1 drop-shadow-xl">
                        <AddBulkIcon Size={28} Fill={'#AD1037'} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default VerticalPrCard;
