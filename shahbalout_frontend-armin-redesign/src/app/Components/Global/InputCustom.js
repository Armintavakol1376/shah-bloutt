"use client";
import React, { useContext, useState } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";

const InputCustom = ({
  Type,
  Id,
  Name,
  AutoComplete,
  PlaceHolder,
  Value,
  onChangeFrom,
  Title,
  TxtArea,
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
      className={
        persianLan
          ? "flex flex-col items-end my-1 w-full mx-2"
          : "flex flex-col items-start my-1 w-full mx-2"
      }
    >
      <div className="flex flex-row justify-center  pt-2">
        <span
          className={
            darkMode
              ? "font-modamBo text-darkTxtTwo"
              : "font-modamBo text-lightTxtTwo"
          }
        >
          {Title}
        </span>
        {/* {!TxtArea && (
          <span
            className={
              darkMode
                ? "text-darkTxtTwo px-1 font-modamEng"
                : "text-lightTxtTwo px-1 font-modamEng"
            }
          >
            {Value}
          </span>
        )} */}
      </div>
      {TxtArea ? (
        <textarea
          type={Type}
          id={Id}
          name={Name}
          autoComplete={AutoComplete}
          placeholder={PlaceHolder}
          value={Value}
          rows="2"
          cols="35"
          onChange={onChangeFrom}
          className={
            darkMode
              ? persianLan
                ? "w-full font-modamEng  text-darkTxtOne my-2 bg-[rgba(200,200,200,0.2)] backdrop-blur   rounded-xl p-4 text-right"
                : "w-full font-modamEng  text-darkTxtOne my-2 bg-[#F9F9F9] backdrop-blur  bg-opacity-20 rounded-xl p-4"
              : persianLan
              ? "w-full font-modamEng  my-2 bg-[#FFFF] backdrop-blur  bg-opacity-80 rounded-xl p-4 text-right"
              : "w-full font-modamEng  my-2 bg-[#FFFF] backdrop-blur  bg-opacity-80 rounded-xl p-4"
          }
        />
      ) : (
        <input
          type={Type}
          id={Id}
          name={Name}
          autoComplete={AutoComplete}
          placeholder={PlaceHolder}
          value={Value}
          onChange={onChangeFrom}
          className={
            darkMode
              ? persianLan
                ? "w-full font-modamEng text-xl text-darkTxtOne my-2 bg-[rgba(200,200,200,0.2)] backdrop-blur   rounded-xl p-2 pr-4 text-right"
                : "w-full font-modamEng text-xl text-darkTxtOne my-2 bg-[#F9F9F9] backdrop-blur  bg-opacity-20 rounded-xl p-2 pr-4"
              : persianLan
              ? "w-full font-modamEng text-xl my-2 bg-[#FFFF] backdrop-blur  bg-opacity-80 rounded-xl p-2 pr-4 text-right"
              : "w-full font-modamEng text-xl my-2 bg-[#FFFF] backdrop-blur  bg-opacity-80 rounded-xl p-2 pr-4"
          }
        />
      )}
    </div>
  );
};

export default InputCustom;
