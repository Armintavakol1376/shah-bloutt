'use client';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';
import CoffeBeansOutlineIcon from '../Icons/CoffeBeansOutlineIcon';

import {
    Chip,
    Button,
    Avatar,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    RadioGroup,
    Radio,
} from '@nextui-org/react';

import ReadFilledIcon from '../Icons/ReadFilledIcon';
import ArrowLeftOutlineIcon from '../Icons/ArrowLeftOutlineIcon';

import TagGreenIcon from '../Icons/TagGreenIcon';

const CoffeeTechBlogCard = ({
    PersianTtl,
    EnglishTtl,
    PersianTag,
    EnglishTag,
    ImgOne,
    ImgTwo,
    onClickFrom,
}) => {
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
            onClick={onClickFrom}
            className={
                persianLan
                    ? darkMode
                        ? 'hover:ring w-full flex bg-darkBgTwo flex-row-reverse md:w-80 lg:w-96 rounded-xl p-1  my-1 cursor-pointer'
                        : 'hover:ring w-full flex bg-lightBgTwo flex-row-reverse md:w-80 lg:w-96 rounded-xl p-1  my-1 cursor-pointer'
                    : darkMode
                    ? 'hover:ring w-full bg-darkBgTwo flex flex-row md:w-80 lg:w-96 rounded-xl p-1  my-1 cursor-pointer'
                    : 'hover:ring w-full bg-lightBgTwo flex flex-row md:w-80 lg:w-96 rounded-xl p-1  my-1 cursor-pointer'
            }
        >
            <img className="w-4/12 h-32 m-1 rounded-lg object-cover shadow-lg" src={`${ImgOne}`} />
            <div className="w-8/12 h-32 flex flex-col justify-between px-1 pt-1 pb-0">
                <p
                    className={
                        persianLan
                            ? darkMode
                                ? 'w-full text-md text-darkTxtTwo font-modamBo text-right pr-2 md:pl-2'
                                : 'w-full text-md text-lightTxtTwo font-modamBo text-right pr-2 md:pl-2'
                            : darkMode
                            ? 'w-full text-md text-darkTxtTwo font-modamBo text-left pl-2 md:pr-2'
                            : 'w-full text-md text-lightTxtTwo font-modamBo text-left pl-2 md:pr-2'
                    } //truncate ...
                >
                    {persianLan ? PersianTtl : EnglishTtl}
                </p>

                <div
                    className={
                        persianLan
                            ? 'flex flex-row justify-between items-center -mb-2'
                            : 'flex flex-row-reverse justify-between items-center -mb-2'
                    }
                >
                    <div className="scale-90">
                        <Button color="danger" variant="shadow" size="sm" isIconOnly>
                            <div className={persianLan ? 'rotate-0 ' : 'rotate-180'}>
                                <ArrowLeftOutlineIcon Size={24} Fill={'#FFFF'} />
                            </div>
                        </Button>
                    </div>

                    <div
                        className={
                            persianLan
                                ? 'flex flex-row-reverse items-center px-2'
                                : 'flex flex-row items-center px-2'
                        }
                    >
                        <TagGreenIcon Size={18} />
                        <span
                            className={
                                darkMode
                                    ? 'text-xs text-darkTxtTwo px-1 m-1'
                                    : 'text-xs text-lightTxtTwo px-1 m-1 border-l'
                            }
                        >
                            {persianLan ? PersianTag : EnglishTag}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeTechBlogCard;
