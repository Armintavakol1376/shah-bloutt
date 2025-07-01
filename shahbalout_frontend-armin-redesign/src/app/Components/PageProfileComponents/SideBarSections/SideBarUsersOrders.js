'use client';

import React, { useContext, useState, useEffect } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMyOrdersMutation } from '@/app/ReduxState/Slices/orderApiSlice';
import Loading from '../../Global/Loading';

import OrderCard from '../OrderCard';

const SideBarUsersOrders = () => {
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

    const [getMyOrders, { isSuccess, isLoading }] = useGetMyOrdersMutation();
    const [myOrders, setMyOrders] = useState(null);

    useEffect(() => {
        console.log('isLoading1:   ', isLoading);

        async function getOrder() {
            const res = await getMyOrders().unwrap();
            // console.log('res:   ', res);
            // console.log('res success:   ', res.success);
            // console.log('isSuccess:   ', isSuccess);
            // console.log('isLoading2:   ', isLoading);
            // console.log('res.orders:   ', res.orders);
            setMyOrders(res.orders);
            //console.log('myorders: ', typeof myOrders, myOrders);
        }

        getOrder();
    }, []);

    return (
        <div
            className={
                persianLan
                    ? 'w-full flex flex-col items-end pb-20'
                    : 'w-full flex flex-col items-start pb-20'
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
                    src="/assets/imgs/drone.png"
                    className="w-24 h-24 object-contain bg-transparent drop-shadow-xl"
                />
                <h1
                    className={
                        darkMode
                            ? 'text-darkTxtOne font-modamBl mt-4 mx-4 text-2xl text-center'
                            : 'text-lightTxtOne font-modamBl mt-4 mx-4 text-2xl text-center'
                    }
                >
                    {persianLan ? 'سفـــارش های شما' : 'Your Orders'}
                </h1>
            </div>

            {myOrders == null && <Loading />}

            {myOrders && myOrders.length == 0 && (
                <Loading
                    Ttl={
                        persianLan
                            ? '.سفارش خرید برای شما ثبت نشده است'
                            : `You don't have any order`
                    }
                />
            )}

            {myOrders?.map((item, index = 0) => (
                <OrderCard Data={item} key={index} />
            ))}
        </div>
    );
};

export default SideBarUsersOrders;
