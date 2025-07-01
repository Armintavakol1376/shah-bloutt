"use client";

import React, { useContext, useState, useEffect } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import { Button } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import CloseBulkIcon from "../../Icons/CloseBulkIcon";
import Link from "next/link";
import { redirect } from "next/navigation";
import { clearCartItems } from "@/app/ReduxState/Slices/cartSlice";
import { useRouter } from "next/navigation";

const SuccessOrder = () => {
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

  const closeHandle = () => {
    dispatch(clearCartItems());
    setModalMission({ ...modalMission, appear: false });
    router.push("/Profile");
    //href={`${BASEURL}/Pay/PaymentRequest?id=${Data._id}`}
  };

  return (
    <div
      className={
        darkMode
          ? "w-screen flex flex-col items-center md:w-96 h-[40rem] md:h-[34rem] mt-auto mb-0 rounded-t-3xl border-3 border-lightBg border-opacity-30 my-2 z-10 md:mx-0 backdrop-blur rounded-2xl p-4 pt-6 bg-darkBg bg-opacity-80 "
          : "w-screen flex flex-col items-center md:w-96 h-[40rem] md:h-[34rem] mt-auto mb-0 rounded-t-3xl  gp-5 z-50 border-0 border-lightBg border-opacity-10 my-2  md:mx-0 backdrop-blur rounded-2xl p-4 pt-6 bg-lightBg"
      }>
      {/* Header Register or Login */}

      <img
        src="/assets/imgs/tick.png"
        className="w-32 h-32 -mt-20 object-contain bg-transparent rounded-xl drop-shadow-xl "
      />

      <span
        className={
          darkMode
            ? "text-darkTxtTwo font-modamBo pt-1 text-xl mt-16 "
            : "text-lightTxtTwo font-modamBo text-xl mt-16 "
        }>
        {persianLan
          ? ".سفارش شما با موفقیت ثبت شد"
          : "Your Order is placed successfully"}
      </span>

      <span
        className={
          darkMode
            ? "text-darkTxtOne font-modamBl  text-xl mt-8 text-center"
            : "text-lightTxtOne font-modamBl text-xl mt-8 text-center"
        }>
 تا چند لحظه دیگر به درگاه پرداخت بانک متصل می شوید
      </span>

      <span
        className={
          darkMode
            ? "text-darkTxtOne font-modamL pt-1 text-xl mt-4 text-center"
            : "text-lightTxtOne font-modamL text-xl mt-4 drop-shadow-xl text-center"
        }>
        {persianLan
          ? "از اینکه شاه بلوط را انتخاب کردیم سپاسگذاریم عزیز"
          : "Thanks for choosing Shahbalout."}
      </span>

      <Button
        color="success"
        className="w-full mt-10 mb-24"
        onPress={closeHandle}>
        {persianLan ? "بستن" : "Ok Close"}
      </Button>
    </div>
  );
};

export default SuccessOrder;
