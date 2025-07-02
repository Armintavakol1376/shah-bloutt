'use client';
import React, { useContext, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ThemeContextExp } from '../ContextArea/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCard from '../Components/PageProfileComponents/ProfileCard';
import SideBarMenu from '../Components/PageProfileComponents/SideBarMenu';

import ScreenWrapper from '@/app/Components/Global/ScreenWrapper';
import NaviBottom from '@/app/Components/Global/NaviBottom';
import NaviTab from '@/app/Components/Global/NaviTab';
import TransitionEffect1 from '@/app/Components/Global/TransitionEffect1';
import ScreenContainer from '@/app/Components/Global/ScreenContainer';

import AllProducts from '../Components/PageProfileComponents/AdminComponents/AllProducts';
import SideBarOrders from '../Components/PageProfileComponents/SideBarSections/Admin/SideBarOrders';

import SideBarUsersOrders from '../Components/PageProfileComponents/SideBarSections/SideBarUsersOrders';
import SideBarUsers from '../Components/PageProfileComponents/SideBarSections/Admin/SideBarUsers';
import SideBarSupportArea from '../Components/PageProfileComponents/SideBarSections/SideBarSupportArea';

import {
    SideBarMenuTilesArray,
    SideBarMenuTilesArrayByAdmin,
} from '../Components/PageProfileComponents/SideBarMenuTilesArr';
import SideBarMenuTiles from '../Components/PageProfileComponents/SideBarMenuTiles';

import EpicModal from '../Components/Global/Modals/EpicModal';

import { logout } from '../ReduxState/Slices/authSlice';
import { useState } from 'react';

const page = () => {
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

    const router = useRouter();
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);

    const [operation, setOperation] = useState('OrdersArea');

    useEffect(() => {
        !userInfo &&
            setModalMission({
                ...modalMission,
                appear: true,
                mission: 'Login',
            });
    }, [userInfo]);

      const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // Render a fallback or empty div on the server and before mounting on client
    return <ScreenWrapper>Loading...</ScreenWrapper>;
  }

    return (
        <ScreenWrapper>
            <NaviTab activeLink={'Profile'} />

            <TransitionEffect1>
                <ScreenContainer>
                    <div
                        className={
                            persianLan
                                ? 'flex flex-wrap flex-row-reverse relative'
                                : 'flex flex-wrap flex-row relative'
                        }
                    >
                        <div className="w-full md:w-3/12 md:fixed">
                            {userInfo?.user && <ProfileCard userInfo={userInfo} />}

                            <SideBarMenu>
                                {userInfo?.user?.role == 'admin' ? (
                                    SideBarMenuTilesArrayByAdmin.map((item, index) => (
                                        <SideBarMenuTiles
                                            key={index}
                                            Data={item}
                                            OnClickFrom={() => {
                                                item.id == 0 && setOperation('OrdersArea');
                                                item.id == 1 && setOperation('UsersArea');
                                                item.id == 2 && setOperation('SupportArea');
                                                item.id == 3 && setOperation('ProductsArea');
                                                item.id == 4 &&
                                                setModalMission({
                                                    ...modalMission,
                                                    appear: true,
                                                    mission: 'EditProfile',
                                                });
                                                item.id == 5 &&
                                                    (router.push('/'), dispatch(logout()));
                                            }}
                                        />
                                    ))
                                ) : userInfo?.user ? (
                                    SideBarMenuTilesArray.map((item, index) => (
                                        <SideBarMenuTiles
                                            key={index}
                                            Data={item}
                                            OnClickFrom={() => {
                                                item.id == 0 && setOperation('OrdersArea');
                                                item.id == 1 &&
                                                    setModalMission({
                                                        ...modalMission,
                                                        appear: true,
                                                        mission: 'EditProfile',
                                                    });
                                                item.id == 2 && setOperation('SupportArea');
                                                item.id == 3 && setOperation('ProductsArea');
                                                item.id == 4 && setOperation('AboutUs');
                                                item.id == 5 &&
                                                    (router.push('/'), dispatch(logout()));
                                            }}
                                        />
                                    ))
                                ) : (
                                    <>
                                        <img
                                            className="w-40 h-40 object-cover my-2 animate-pulse mx-auto"
                                            src="/assets/imgs/coffeeman.png "
                                        />
                                        <Button
                                            color="danger"
                                            variant="ghost"
                                            className="mt-8 h-16 w-full"
                                            onPress={() =>
                                                setModalMission({
                                                    ...modalMission,
                                                    appear: true,
                                                    mission: 'Login',
                                                })
                                            }
                                        >
                                            <h4
                                                className={
                                                    darkMode
                                                        ? 'font-modamBo text-lg text-darkTxtTwo mx-1'
                                                        : 'font-modamBo text-lg text-lightTxtTwo mx-1'
                                                }
                                            >
                                                {persianLan ? 'ثبت نام/ ورود' : 'Login / Register'}
                                            </h4>
                                        </Button>
                                    </>
                                )}
                            </SideBarMenu>
                        </div>

                        <div
                            className={
                                persianLan
                                    ? 'w-full md:w-7/12 ml-0 md:mr-auto md:px-2 sm:px-0 relative'
                                    : 'w-full md:w-7/12 mr-0 md:ml-auto md:px-2 sm:px-0 relative'
                            }
                        >
                            {userInfo?.user && (
                                <SideBarMenu>
                                    {userInfo && userInfo.user?.role == 'admin' ? (
                                        <>
                                            {operation == 'OrdersArea' && <SideBarOrders />}
                                            {operation == 'UsersArea' && <SideBarUsers />}
                                            {operation == 'SupportArea' && <SideBarSupportArea />}
                                            {operation == 'ProductsArea' && <AllProducts />}
                                        </>
                                    ) : (
                                        <>
                                            {operation == 'OrdersArea' && <SideBarUsersOrders />}
                                            {operation == 'SupportArea' && <SideBarSupportArea />}
                                        </>
                                    )}
                                </SideBarMenu>
                            )}
                        </div>
                    </div>

                    <EpicModal />
                </ScreenContainer>
            </TransitionEffect1>
            <NaviBottom activeLink={'Profile'} />
        </ScreenWrapper>
    );
};

export default page;
