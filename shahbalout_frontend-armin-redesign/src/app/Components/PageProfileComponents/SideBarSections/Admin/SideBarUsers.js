'use client';

import React, { useContext, useState, useEffect } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMyOrdersMutation } from '@/app/ReduxState/Slices/orderApiSlice';
import Loading from '@/app/Components/Global/Loading';
import IsErroring from '@/app/Components/Global/IsErroring';
import { Pagination } from '@nextui-org/react';
import OrderCard from '../../OrderCard';
import AdminUserInfoCard from './AdminUserInfoCard';

import { useGetAllUsersByAdminQuery } from '@/app/ReduxState/Slices/userApiSlice';

const SideBarUsers = () => {
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

    const [currentPage, setCurrentPage] = useState(1);

    const {
        data: users,
        isLoading,
        isFetching,
        refetch,
        error,
    } = useGetAllUsersByAdminQuery({ pageNumber: currentPage });

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
                    src="/assets/imgs/coffeeStore.png"
                    className="w-24 h-24 object-contain bg-transparent drop-shadow-xl"
                />
                <h1
                    className={
                        darkMode
                            ? 'text-darkTxtOne font-modamBl mt-4 mx-4 text-2xl text-center'
                            : 'text-lightTxtOne font-modamBl mt-4 mx-4 text-2xl text-center'
                    }
                >
                    {persianLan ? 'کاربرهای شما' : 'Your Users'}
                </h1>
            </div>

            {(isLoading || isFetching) && <Loading />}
            {error && <IsErroring Ttl={error?.data?.message || error.error} />}
            <div className="w-full flex flex-row flex-wrap lg:justify-center">
                {!isFetching &&
                    users?.users.map((item, index = 0) => <AdminUserInfoCard Data={item} />)}
            </div>

            <div className="w-full flex flex-col gap-5 font-modamBl items-center mt-10">
                {!isLoading && (
                    <Pagination
                        color="success"
                        showControls
                        total={users?.pages}
                        initialPage={users?.page}
                        page={currentPage}
                        onChange={setCurrentPage}
                    />
                )}
            </div>
        </div>
    );
};

export default SideBarUsers;
