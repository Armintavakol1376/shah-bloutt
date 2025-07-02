'use client';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';
import ChatBulkIcon from '../Icons/ChatBulkIcon';
import BoxCubeBulkIcon from '../Icons/BoxCubeBulkIcon';
import EditBulkIcon from '../Icons/EditBulkIcon';
import LogoutBulkIcon from '../Icons/LogoutBulkIcon';
import AboutBulkIcon from '../Icons/AboutBulkIcon';
import TicketIcon from '../Icons/TicketIcon';

const SideBarMenuTiles = ({ Data, OnClickFrom }) => {
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
        <Button
            color="danger"
            variant="light"
            onPress={OnClickFrom}
            className={
                persianLan
                    ? 'w-full mb-4 py-2 flex flex-row-reverse items-center'
                    : 'w-full mb-4 py-2 flex flex-row items-center'
            }
        >
            <div
                className={
                    persianLan
                        ? 'w-full flex flex-row-reverse items-center py-2'
                        : 'w-full flex flex-row items-center py-2'
                }
            >
                <div>
                    {isClient && Data.id == 0 && <BoxCubeBulkIcon Size={44} Fill={'#ad1037'} />}
                    {isClient && Data.id == 1 && <AboutBulkIcon Size={44} Fill={'#ad1037'} />}
                    {isClient && Data.id == 2 && <ChatBulkIcon Size={44} Fill={'#ad1037'} />}
                    {isClient && Data.id == 3 && <BoxCubeBulkIcon Size={44} Fill={'#ad1037'} />}
                    {isClient && Data.id == 4 && <EditBulkIcon Size={44} Fill={'#ad1037'} />}
                    {isClient && Data.id == 5 && <LogoutBulkIcon Size={44} Fill={'#ad1037'} />}
                </div>
                <span
                    className={
                        darkMode
                            ? 'font-modamBo text-darkTxtTwo px-2'
                            : 'font-modamBo text-lightTxtTwo px-2'
                    }
                >
                    {isClient && persianLan ? Data.persianTtl : Data.englishTtl}
                </span>
            </div>
        </Button>
    );
};

export default SideBarMenuTiles;
