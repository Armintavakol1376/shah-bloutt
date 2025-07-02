'use client';

import React, { useContext, useState, useEffect } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';
import { Button } from '@nextui-org/react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import CloseBulkIcon from '../../Icons/CloseBulkIcon';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { usePathname } from 'next/navigation'
const SuccessAddToCart = ({onCloseFrom}) => {
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
  const pathname = usePathname()
    return (
        <div
            className={
                darkMode
                    ? 'w-screen flex flex-col items-center md:w-96 h-[40rem] md:h-[34rem] mt-auto mb-0 rounded-t-3xl border-3 border-lightBg border-opacity-30 my-2 z-10 md:mx-0 backdrop-blur rounded-2xl p-4 pt-6 bg-darkBg bg-opacity-80 '
                    : 'w-screen flex flex-col items-center md:w-96 h-[40rem] md:h-[34rem] mt-auto mb-0 rounded-t-3xl z-50 border-0 border-lightBg border-opacity-10 my-2  md:mx-0 backdrop-blur rounded-2xl p-4 pt-6 bg-lightBg'
            }
        >
            {/* Header Register or Login */}

            <img
                src="/assets/imgs/bascet.png"
                className="w-32 h-32 -mt-16 object-contain bg-transparent rounded-xl drop-shadow-xl "
            />

            <span
                className={
                    darkMode
                        ? 'text-darkTxtOne font-modamBl pt-1  mt-16 text-center'
                        : 'text-lightTxtOne font-modamBl mt-16 text-center'
                }
            >
                {persianLan
                    ? 'سفارش شما با موفقیت به سبد خرید افزوده شد'
                    : 'Successfully add into Cart'}
            </span>

            <Button
                color="success"
                className="w-full mt-10 "
                onPress={() => {
                    router.push('/Store/Cart'), setModalMission({ ...modalMission, appear: false });
                }}
            >
                {persianLan ? 'رفتن به سبد خرید' : 'select other products'}
            </Button>

            <Button
                color="danger"
                className="w-full mt-2 mb-24"
                          onPress={() => {

                            console.log("router.pathname");
console.log(pathname);
  if (pathname !== '/Store') {
    router.push('/Store');
  } else {
  onCloseFrom();
  }

  setModalMission({ ...modalMission, appear: false });
}}
            >
                {persianLan ? 'انتخاب محصولات دیگر' : 'Ok Close'}
            </Button>
        </div>
    );
};

export default SuccessAddToCart;
