'use client';
import React, { useContext, useState } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';

import SingleTrackPlayerPage from './SingleTrackPlayerPage';

import NaviBottom from '../Global/NaviBottom';
import NaviTab from '../Global/NaviTab';
import TransitionEffect1 from '../Global/TransitionEffect1';
import ScreenContainer from '../Global/ScreenContainer';
import MainMusicCategory from './MainMusicCategory';

const MainMusicPage = () => {
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

    const [switchPage, setSwitchPage] = useState(false);

    const switchPageHandle = () => {
        setSwitchPage((prevState) => !prevState);
    };

    return (
        <>
            {!switchPage && <NaviTab activeLink={'Music'} />}
            <ScreenContainer>
                <MainMusicCategory switchFrom={switchPageHandle} switchPage={switchPage} />
            </ScreenContainer>
            {!switchPage && <NaviBottom activeLink={'Music'} />}
        </>
    );
};

export default MainMusicPage;
