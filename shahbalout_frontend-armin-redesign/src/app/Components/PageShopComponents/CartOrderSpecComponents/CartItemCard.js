"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import { removeFromCart } from "@/app/ReduxState/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { BASEURL } from "@/app/ReduxState/BaseUrl";
import DoubleCoffeeBeanIcon from "../../Icons/DoubleCoffeeBeanIcon";
import PriceSlicer from "../../Global/PriceSlicer";

const CartItemCard = ({ Item }) => {
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

  const dispatch = useDispatch();

  const removeFromCartHandle = () => {
    //dispatch(removeFromCart(Item));
    dispatch(removeFromCart({ ...Item }));
  };

  return (
    <div
      className={
        persianLan
          ? darkMode
            ? "w-full flex bg-darkBgTwo flex-row-reverse md:w-80 lg:w-96 rounded-xl p-1  my-1 cursor-pointer"
            : "w-full flex bg-lightBgTwo flex-row-reverse md:w-80 lg:w-96 rounded-xl p-1  my-1 cursor-pointer"
          : darkMode
          ? "w-full bg-darkBgTwo flex flex-row md:w-80 lg:w-96 rounded-xl p-1  my-1 cursor-pointer"
          : "w-full bg-lightBgTwo flex flex-row md:w-80 lg:w-96 rounded-xl p-1  my-1 cursor-pointer"
      }
    >
      {!Item.image && (
        <img
          src={`${BASEURL}/GettyImages/Products?image=${Item.image}`}
          className="w-3/12  m-1 rounded-lg object-cover shadow-lg bg-[#adadad]"
        />
      )}

      <div className="w-full flex flex-col justify-between p-4">
        <p
          className={
            persianLan
              ? darkMode
                ? " text-darkTxtTwo font-modamBo text-right  md:pl-2 text-sm mb-3"
                : " text-lightTxtTwo font-modamBo text-right md:pl-2 text-sm mb-3"
              : darkMode
              ? "text-md text-darkTxtTwo font-modamBo text-left pl-2  mb-3"
              : "text-md text-lightTxtTwo font-modamBo text-left pl-2  mb-3"
          } //truncate ...
        >
          {Item.productName}
        </p>
        <div
          className={
            persianLan
              ? "w-full flex flex-row-reverse items-center gap-8"
              : "w-full flex flex-row items-center"
          }
        >
          <div
            className={
              persianLan
                ? "flex flex-row-reverse items-center "
                : "flex flex-row items-center"
            }
          >
            <span
              className={
                darkMode
                  ? "text-sm text-darkTxtTwo font-modamM"
                  : "text-sm text-lightTxtTwo font-modamM"
              }
            >
              {persianLan ? ": بسته" : "Package:"}
            </span>

            <span
              className={
                darkMode
                  ? "text-md text-[#b32d4e] font-modamM mx-1"
                  : "text-md text-[#d82b56] font-modamM mx-1"
              }
            >
              {Item.packageName}
            </span>
          </div>

          <div
            className={
              persianLan
                ? "w-1/2 flex flex-row-reverse items-center"
                : "w-1/2 flex flex-row items-center"
            }
          >
            <span
              className={
                darkMode
                  ? "text-sm text-darkTxtTwo font-modamM"
                  : "text-sm text-lightTxtTwo font-modamM"
              }
            >
              {persianLan ? ": تعداد" : "Qty:"}
            </span>

            <span className={"text-md text-[#0c0] font-modamBl mx-1"}>
              {Item.qty}
            </span>
          </div>
        </div>

        {Item.grindingGrade && (
          <>
            <span
              className={
                darkMode
                  ? "text-sm text-darkTxtTwo font-modamM text-right mt-4"
                  : "text-sm text-lightTxtTwo font-modamM text-right mt-4"
              }
            >
              {persianLan ? ": آسیاب" : "Grinding grade:"}
            </span>
            <div
              className={
                persianLan
                  ? "w-full flex flex-row-reverse items-center"
                  : "w-full flex flex-row items-center"
              }
            >
              <span
                className={
                  darkMode
                    ? "text-sm text-darkTxtTwo font-modamT text-right mb-4"
                    : "text-sm text-lightTxtTwo font-modamT text-right mb-4"
                }
              >
                {Item.grindingGrade}
              </span>
            </div>
          </>
        )}

<div
            className={
              persianLan
                ? "flex flex-row-reverse items-center"
                : "flex flex-row items-center"
            }
          >
            <span
              className={
                darkMode
                  ? "text-sm text-darkTxtTwo  font-modamR"
                  : "text-sm text-lightTxtTwo font-modamR"
              }
            >
              {persianLan ? ":قیمت واحد" : "Price:"}
            </span>

            <span
              className={
                darkMode
                  ? "text-md text-darkTxtTwo  mx-3"
                  : "text-md text-lightTxtTwo mx-3"
              }
            >
              {PriceSlicer(Item.price)}
            </span>
          </div>

        <div
          className={
            persianLan
              ? "flex flex-row-reverse items-center justify-between"
              : "flex flex-row items-center justify-between"
          }
        >
          <div
            className={
              persianLan
                ? "flex flex-row-reverse items-center"
                : "flex flex-row items-center"
            }
          >
            <span
              className={
                darkMode
                  ? "text-sm text-darkTxtTwo  font-modamR"
                  : "text-sm text-lightTxtTwo font-modamR"
              }
            >
              {persianLan ? ":قیمت کل" : "Price:"}
            </span>

            <span
              className={
                darkMode
                  ? "text-md text-darkTxtTwo  mx-3 font-modamBo"
                  : "text-md text-lightTxtTwo mx-3 font-modamBo"
              }
            >
              {PriceSlicer((Item.price)*Item.qty)}
            </span>
          </div>


          <Button
            color="danger"
            variant="bordered"
            size="sm"
            radius="sm"
            className="shadow h-6 mr-auto"
            onPress={removeFromCartHandle}
          >
            {persianLan ? "حذف" : "Delete"}
          </Button>
    
        </div>

        
        <div className="w-full flex justify-end"></div>
      </div>
    </div>
  );
};

export default CartItemCard;
