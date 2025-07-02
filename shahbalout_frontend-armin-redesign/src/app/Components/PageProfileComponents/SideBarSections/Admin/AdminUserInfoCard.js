'use client';

import React, { useContext, useState, useEffect } from 'react';
import { ThemeContextExp } from '@/app/ContextArea/ThemeContext';
import PriceSlicer from '../../../Global/PriceSlicer';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import Gregorian from 'react-date-object/calendars/gregorian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Button } from '@nextui-org/react';

const AdminUserInfoCard = ({ Data }) => {
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
                darkMode
                    ? 'flex flex-col items-center rounded-lg bg-darkBgTwo p-0 pb-4 my-2 lg:mx-2 w-full md:w-80'
                    : 'flex flex-col items-center rounded-lg bg-lightBgTwo p-0 pb-4 my-2 lg:mx-2 w-full md:w-80'
            }
        >
            <div className="px-4 py-2 rounded-t-lg bg-[#ad1037] w-full md:w-80">
                <h1
                    className={
                        persianLan
                            ? 'text-darkTxtOne font-modamBo text-right'
                            : 'text-darkTxtOne font-modamBo text-left'
                    }
                >
                    {Data._id}
                </h1>
            </div>

            {Data.avatar ? (
                <img
                    src="/assets/imgs/icon/userAvatar.png"
                    className="w-16 h-16 mt-2 ml-auto mr-2 object-contain bg-transparent drop-shadow-xl"
                />
            ) : (
                <img
                    src="/assets/imgs/icon/userAvatar.png"
                    className="w-16 h-16 mt-2 ml-auto mr-2 object-contain bg-transparent drop-shadow-xl"
                />
            )}

            <div
                className={
                    persianLan
                        ? 'w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm '
                        : 'w-full flex flex-row items-center justify-between px-4 py-1 text-sm'
                }
            >
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamBo text-xs'
                            : 'text-lightTxtTwo font-modamBo text-xs'
                    }
                >
                    {persianLan ? ':نام کاربر' : 'User Name:'}
                </span>
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamL text-xs'
                            : 'text-lightTxtTwo font-modamL text-xs'
                    }
                >
                    {Data.name}
                </span>
            </div>
            <div
                className={
                    persianLan
                        ? 'w-full flex flex-row-reverse items-center justify-between px-4 pb-1 pt-2'
                        : 'w-full flex flex-row items-center justify-between px-4 pb-1 pt-2'
                }
            >
                {' '}
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamBo text-xs'
                            : 'text-lightTxtTwo font-modamBo text-xs'
                    }
                >
                    {persianLan ? ': تاریخ عضویت' : 'User Join Us at:'}
                </span>
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamL text-xs'
                            : 'text-lightTxtTwo font-modamL text-xs'
                    }
                >
                    {/* format: 'YYYY/MM/DD - HH:mm:ss ' */}
                    {new DateObject({
                        date: `${Data.createdAt}`,
                        format: 'YYYY/MM/DD - HH:mm:ss',
                        calendar: persianLan ? persian : Gregorian,
                        locale: persianLan ? persian_fa : null,
                    }).format()}
                </span>
            </div>

            <div
                className={
                    persianLan
                        ? 'w-full flex flex-row-reverse items-center justify-between px-4 pb-1 pt-2'
                        : 'w-full flex flex-row items-center justify-between px-4 pb-1 pt-2'
                }
            >
                {' '}
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamBo text-xs'
                            : 'text-lightTxtTwo font-modamBo text-xs'
                    }
                >
                    {persianLan ? ': تاریخ ویرایش پروفایل' : 'User Update Profile at:'}
                </span>
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamL text-xs'
                            : 'text-lightTxtTwo font-modamL text-xs'
                    }
                >
                    {/* format: 'YYYY/MM/DD - HH:mm:ss ' */}
                    {new DateObject({
                        date: `${Data.updatedAt}`,
                        format: 'YYYY/MM/DD - HH:mm:ss',
                        calendar: persianLan ? persian : Gregorian,
                        locale: persianLan ? persian_fa : null,
                    }).format()}
                </span>
            </div>

            <div
                className={
                    persianLan
                        ? 'w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm '
                        : 'w-full flex flex-row items-center justify-between px-4 py-1 text-sm'
                }
            >
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamBo text-xs'
                            : 'text-lightTxtTwo font-modamBo text-xs'
                    }
                >
                    {persianLan ? ':همراه کاربر' : 'User Phone:'}
                </span>
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-peydablack text-xs flex flex-row items-center '
                            : 'text-lightTxtTwo font-peydablack text-xs flex flex-row items-center '
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 mx-1 -mt-1"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                            clipRule="evenodd"
                        />
                    </svg>

                    {Data.number ? <a href={'tel:' + Data.number}>{Data.number}</a> : 'None!'}
                </span>
            </div>

            <div
                className={
                    persianLan
                        ? 'w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm'
                        : 'w-full flex flex-row items-center justify-between px-4 py-1 text-sm'
                }
            >
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamBo text-xs'
                            : 'text-lightTxtTwo font-modamBo text-xs'
                    }
                >
                    {persianLan ? ': شماره همراه تایید شده' : 'Is Number OTP Verify:'}
                </span>
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamL text-xs'
                            : 'text-lightTxtTwo font-modamL text-xs'
                    }
                >
                    {persianLan
                        ? Data.numberVerify
                            ? 'بله'
                            : 'خیر'
                        : Data.numberVerify.toString()}
                </span>
            </div>

            <div
                className={
                    persianLan
                        ? 'w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm '
                        : 'w-full flex flex-row items-center justify-between px-4 py-1 text-sm'
                }
            >
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamBo text-xs'
                            : 'text-lightTxtTwo font-modamBo text-xs'
                    }
                >
                    {persianLan ? ':ایمیل کاربر' : 'User Email:'}
                </span>
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamR text-xs'
                            : 'text-lightTxtTwo font-modamR text-xs'
                    }
                >
                    {Data.email ? Data.email : 'None!'}
                </span>
            </div>

            <div
                className={
                    persianLan
                        ? 'w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm'
                        : 'w-full flex flex-row items-center justify-between px-4 py-1 text-sm'
                }
            >
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamBo text-xs'
                            : 'text-lightTxtTwo font-modamBo text-xs'
                    }
                >
                    {persianLan ? ':ایمیل تایید شده' : 'Is Email OTP Verify:'}
                </span>
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamL text-xs'
                            : 'text-lightTxtTwo font-modamL text-xs'
                    }
                >
                    {persianLan ? (Data.emailVerify ? 'بله' : 'خیر') : Data.emailVerify.toString()}
                </span>
            </div>
            <div
                className={
                    persianLan
                        ? 'w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm'
                        : 'w-full flex flex-row items-center justify-between px-4 py-1 text-sm'
                }
            >
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamBo text-xs'
                            : 'text-lightTxtTwo font-modamBo text-xs'
                    }
                >
                    {persianLan ? ':آدرس کاربر' : 'User Address:'}
                </span>
            </div>

            <span
                className={
                    darkMode
                        ? persianLan
                            ? 'w-11/12 text-darkTxtTwo font-modamL text-xs p-2 bg-[#272342] rounded-lg mx-4 my-2 text-right'
                            : 'w-11/12 text-darkTxtTwo font-modamL text-xs p-2 bg-[#272342] rounded-lg mx-4 my-2'
                        : persianLan
                        ? 'w-11/12 text-lightTxtTwo font-modamL text-xs p-2 bg-[#dddddd] rounded-lg mx-4 m-1 text-right'
                        : 'w-11/12 text-lightTxtTwo font-modamL text-xs p-2 bg-[#dddddd] rounded-lg mx-4 m-1'
                }
            >
                {Data.address}
            </span>

            {/* <div
                className={
                    persianLan
                        ? 'w-full flex flex-row-reverse items-center justify-between px-4 pt-4 text-sm'
                        : 'w-full flex flex-row items-center justify-between px-4 pt-4 text-sm'
                }
            >
                <span
                    className={
                        darkMode
                            ? 'text-darkTxtTwo font-modamBl text-md'
                            : 'text-lightTxtTwo font-modamBl text-md drop-shadow-lg'
                    }
                >
                    {persianLan ? ' :جمع کل سفارش' : 'Total Order Price:'}
                </span>
                <span
                    className={
                        darkMode
                            ? 'text-[#55db3a] font-modamBl text-lg '
                            : 'text-[#2fbd4e] font-modamBl text-lg drop-shadow-lg'
                    }
                >
                    {PriceSlicer(Data.totalPrice + Data.shippingPrice)}
                </span>
            </div> */}

            {/* {!Data.isDelivered && isDeliverLoading
                ? isDeliverLoadingId == Data._id && (
                      <Button
                          color="warning"
                          className="w-11/12 my-2 font-modamBl"
                          isLoading
                          spinner={
                              <svg
                                  className="animate-spin h-5 w-5 text-current"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                  />
                                  <path
                                      className="opacity-75"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                      fill="currentColor"
                                  />
                              </svg>
                          }
                      >
                          Procecing
                      </Button>
                  )
                : !Data.isDelivered && (
                      <Button
                          color="success"
                          onPress={onPressFrom}
                          className="w-11/12 my-2 font-modamBl"
                      >
                          Orders
                      </Button>
                  )} */}
        </div>
    );
};

export default AdminUserInfoCard;
