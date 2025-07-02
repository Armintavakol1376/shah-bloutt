"use client";
import React, { useState, useEffect, useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import { Avatar, Badge, Button, Chip } from "@nextui-org/react";
import { CheckIcon } from "../Icons/CheckIcon";
import { useSelector } from "react-redux";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import Gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";

import Lottison from "../Global/Lottison";

export default function ProfileCard() {
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

  const { userInfo } = useSelector((state) => state.auth);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={
        darkMode
          ? "w-full relative border-2 border-lightBg border-opacity-10 my-2 z-10 md:mx-0 backdrop-blur rounded-2xl p-4 pt-6 bg-[rgba(200,200,200,0.15)] bg-opacity-10 "
          : "w-full relative border-0 border-lightBg border-opacity-10 my-2 z-10 md:mx-0 backdrop-blur rounded-2xl p-4 pt-6 bg-gradient-to-r from-[rgba(140,130,182,0.2)] to-lightBg shadow-lg"
      }
    >
      <div
        className={
          persianLan ? "flex flex-row-reverse gap-5 px-2" : "flex gap-5"
        }
      >
        <Badge
          content={":)"}
          color="danger"
          placement={"bottom-right"}
          className="text-xs"
        >
          <Avatar
            isBordered
            size="lg"
            radius="lg"
            src="/assets/imgs/icon/userAvatar2.png"
          />
        </Badge>

        <div className="flex flex-col gap-1 items-start justify-center">
          {isClient && userInfo?.user?.name && (
            <h4
              className={
                darkMode
                  ? persianLan
                    ? "text-right font-modamBl leading-none text-darkTxtOne"
                    : "text-left font-modamBl leading-none text-darkTxtOne"
                  : persianLan
                  ? "text-right font-modamBl leading-none text-lightTxtOne"
                  : "font-modamBl leading-none text-lightTxtOne"
              }
            >
              {isClient && userInfo?.user?.name}
            </h4>
          )}
          {/* <h5
            className={
              darkMode
                ? persianLan
                  ? "text-darkTxtOne w-full text-right text-xs"
                  : "text-darkTxtOne w-full text-left text-xs"
                : persianLan
                ? "text-lightTxtOne w-full text-right text-xs"
                : "text-lightTxtOne w-full text-left text-xs"
            }
          >
            {isClient &&
              userInfo?.user?.nickname != "none" &&
              userInfo?.user?.nickname}
          </h5> */}
        </div>
      </div>

      {isClient && userInfo?.user?.name !== "registered by phone" ? (
        <div>
          <div
            className={
              persianLan
                ? "w-full flex flex-row-reverse  items-center pt-4 gap-1 text-sm"
                : "w-full flex flex-row  items-center pt-4 gap-1 text-sm"
            }
          >
            {/* <h5
              className={
                darkMode
                  ? "text-darkTxtOne text-right"
                  : "text-lightTxtOne text-right"
              }
            >
              {persianLan ? ": درباره من" : "About me:"}
            </h5>

            <span
              className={
                darkMode
                  ? "text-darkTxtOne  font-modamR"
                  : "text-lightTxtOne font-modamR"
              }
            >
              {isClient && userInfo?.user?.aboutme}
            </span> */}
          </div>
          <div className="w-full flex flex-row flex-wrap md:flex-col lg:flex-row items-start justify-between">
            <div className="w-full flex flex-col justify-center  py-1  scale-90">
              <div className="flex flex-row w-full flex-wrap items-center">
                {/* <p className="text-default-600 font-modamR text-xs">Email: </p> */}
                {/* <div>
                            <EmailBulkIcon Size={20} Fill={darkMode ? '#ad1037' : '#292D32'} />
                        </div> */}
      
              </div>
              <div className="w-full flex flex-row-reverse justify-start mt-4 gap-2">
                <p className= { darkMode
                      ? "text-xs text-darkTxtTwo font-modamR"
                      : "text-xs text-lightTxtTwo font-modamR"}>:شماره همراه</p>
                <span
                  className={
                    darkMode
                      ? "text-xs text-darkTxtTwo font-modamBo"
                      : "text-xs text-lightTxtTwo font-modamBo"
                  }
                >
                  {isClient && userInfo?.user?.number}
                </span>
              </div>

              <div className="w-full flex flex-row-reverse  gap-2 mt-2">
              <span className= { darkMode
                      ? "text-xs text-darkTxtTwo font-modamR mt-1"
                      : "text-xs text-lightTxtTwo font-modamR mt-1"}>
                {persianLan ? ": تاریخ عضویت" : "Join Us:"}
              </span>
              <span
                className={
                  darkMode
                    ? "text-xs text-darkTxtTwo font-modamBo"
                    : "text-xs text-lightTxtTwo font-modamBo"
                }
              >
                <Chip
                  startContent={<CheckIcon size={14} />}
                  color="success"
                  size="sm"
                  className="scale-90 font-modamEng"
                >
                  {/* format: 'YYYY/MM/DD - HH:mm:ss ' */}
                  {new DateObject({
                    date: `${isClient && userInfo?.user?.createdAt}`,
                    format: "YYYY/MM/DD",
                    calendar: persianLan ? persian : Gregorian,
                    locale: persianLan ? persian_fa : null,
                  }).format()}
                </Chip>
              </span>

              </div>
            </div>

            <div className="w-full flex flex-row justify-end scale-90 mt-2 gap-2">
       
              <span
                className={
                  darkMode
                    ? persianLan
                      ? "scale-90 text-xs text-darkTxtTwo font-modamBo text-right mt-1"
                      : "scale-90 text-xs text-darkTxtTwo font-modamBo text-left mt-1"
                    : persianLan
                    ? "scale-90 text-xs text-lightTxtTwo font-modamR text-right mt-1"
                    : "scale-90 text-xs text-lightTxtTwo font-modamBo text-left mt-1"
                }
              >
                {isClient && userInfo?.user?.address? userInfo?.user?.address : 'آدرس ثبت نشده لطفا از قسمت ویرایش پروفایل اقدام نمایید'  }
              </span>
              <span
                className={
                  persianLan
                    ? "text-default-400 font-modamR text-small"
                    : "text-default-400 font-modamR text-small "
                }
              >
                {persianLan ? ":آدرس" : "Address:"}
              </span>



            </div>


            <div className="w-full flex flex-row justify-end scale-90 mt-2 gap-2">
            <span
                className={
                  darkMode
                    ? persianLan
                      ? "scale-90 text-xs text-darkTxtTwo font-modamBo text-right mt-1"
                      : "scale-90 text-xs text-darkTxtTwo font-modamBo text-left mt-1"
                    : persianLan
                    ? "scale-90 text-xs text-lightTxtTwo font-modamR text-right mt-1"
                    : "scale-90 text-xs text-lightTxtTwo font-modamBo text-left mt-1"
                }
              >
                {isClient && userInfo?.user?.zipCode? userInfo?.user?.zipCode : '   لطفا از قسمت ویرایش پروفایل اقدام نمایید'  }
              </span>
              <span
                className={
                  persianLan
                    ? "text-default-400 font-modamR text-small"
                    : "text-default-400 font-modamR text-small "
                }
              >
                {persianLan ? ":کد پستی" : "Address:"}
              </span>
              </div>
          </div>
        </div>
      ) : (
        <div>
          <Button
            color="danger"
            className="mt-4"
            onPress={() =>
              setModalMission({
                ...modalMission,
                appear: true,
                mission: "EditProfile",
              })
            }
          >
            {persianLan ? "تکمیل پروفایل" : "Complete profile"}
          </Button>
        </div>
      )}
    </div>
  );
}