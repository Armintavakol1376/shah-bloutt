'use client';
import React, { useContext } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';

import { Button, Chip, Avatar } from '@nextui-org/react';

import CategoryBulkIcon from '../Icons/CategoryBulkIcon';

import { CoffeeCat } from './CoffeeCatQAArr';

const CoffeeTechCategorySection = () => {
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

    const Card = ({ Title, Ico }) => {
        return (
            <div className={persianLan ? 'ml-1 my-1' : 'mr-1 my-1'}>
                <Chip radius="sm" variant="flat" avatar={<Avatar name="JW" src={`${Ico}`} />}>
                    <span
                        className={
                            darkMode
                                ? 'text-xs font-modamBo text-darkTxtTwo select-none '
                                : 'text-xs font-modamBo text-lightTxtTwo  select-none '
                        }
                    >
                        {Title}
                    </span>
                </Chip>
            </div>
        );
    };

    return (
        <div className="w-full flex flex-col justify-center gap-2">
            <div
                className={
                    persianLan
                        ? 'flex flex-row-reverse items-center w-full'
                        : 'flex flex-row w-full'
                }
            >
                <CategoryBulkIcon Size={22} Fill={darkMode ? '#ad1037' : '#8E9AAF'} />
                <span
                    className={
                        persianLan
                            ? darkMode
                                ? 'mx-2 opacity-70 text-right text-darkTxtOne'
                                : 'mx-2 opacity-70 text-right text-lightTxtOne'
                            : darkMode
                            ? 'mx-2 opacity-70 text-left text-darkTxtOne'
                            : 'mx-2 opacity-70 text-left text-lightTxtOne'
                    }
                >
                    {persianLan ? ':دسته بــــــندی' : 'Categories:'}
                </span>
            </div>
            {/* bg-[#ffff] pt-2 rounded-xl overflow-x-scroll */}
            <div
                className={
                    persianLan
                        ? 'w-full flex flex-row flex-wrap justify-end p-0'
                        : 'w-full flex flex-row flex-wrap justify-start p-0'
                }
            >
                {CoffeeCat?.map((item, index = 0) => (
                    <Card
                        key={index}
                        Title={persianLan ? item.persian : item.eng}
                        Ico={'/assets/imgs/king.png'}
                    />
                ))}

                {/* <Card
                    Title={persianLan ? 'قهوه از کجا اومد؟' : 'Coffee from?'}
                    Ico={'/assets/imgs/KingFoodIcons/sushi.png'}
                />

                <Card
                    Title={persianLan ? '...اسپرسو ساز ها و ' : 'Espresso machines'}
                    Ico={'/assets/imgs/KingFoodIcons/sushi.png'}
                />
                <Card
                    Title={persianLan ? 'قهوه و تاثیر بر سلامتی' : 'Coffee & Health'}
                    Ico={'/assets/imgs/KingFoodIcons/sushi.png'}
                /> */}

                {/* <Card
                    Title={persianLan ? 'قهوه خوبو کجا پیدا کنم' : 'How to find a good coffee'}
                    Ico={'/assets/imgs/KingFoodIcons/fastfood.png'}
                />

                <Card
                    Title={persianLan ? 'هنر قهوه ای:)' : 'Coffee Art :)'}
                    Ico={'/assets/imgs/KingFoodIcons/fastfood.png'}
                /> */}
            </div>
        </div>
    );
};

export default CoffeeTechCategorySection;
