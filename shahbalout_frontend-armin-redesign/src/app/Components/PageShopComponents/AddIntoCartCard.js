"use client";

import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import PriceSlicer from "../Global/PriceSlicer";
import { Chip, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { CheckIcon } from "../Icons/CheckIcon";
import { AddBulkIcon } from "../Icons/AddBulkIcon";
import { addToCart } from "@/app/ReduxState/Slices/cartSlice";
import TicketIcon from "../Icons/TicketIcon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddIntoCartCard({
  item,
  Product,
  winningProduct,
  winningProductPersianName,
  winningProductEnglishName,
  winningProductPrice,
}) {
  const [darkMode, setDarkMode, persianLan, setPersianLan, modalMission, setModalMission, cartItems, setCartItems] =
    useContext(ThemeContextExp);

  //const [grindingGrade, setGrindingGrade] = useState("");
  const grindingGradeArr = [
    "دان",
    "آسیاب برای اسپرسوساز صنعتی",
    "آسیاب برای اسپرسوساز خانگی و نانو پرسو و مینی پرسو",
    "آسیاب برای موکاپات",
    "آسیاب برای ماشین دمی",
    "آسیاب برای ابزار دمی",
  ];
  const [error, setError] = useState(false);
  const [packageItem, setPackageItem] = useState({
    productId: Product._id,
    packageId: item._id,
    persianName: winningProduct ? winningProductPersianName : Product.persianName,
    productName: winningProduct ? winningProductPersianName : Product.englishName,
    brand: winningProduct ? "Shahbalout WinProduct" : Product.brand,
    packageName: winningProduct ? "250g" : item.item,
    image: Product?.image ? [0] : null,
    grindingGrade: "",
    qty: 1,
    price: winningProduct ? winningProductPrice : item.priceIrr,
    productModel: winningProduct ? "SKU-WINNING" : Product.productModel,
  });

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    // e.preventDefault();

    if (packageItem.grindingGrade.length < 2&&(Product.category == "Coffee" || Product.category == "winning" || winningProduct) ) {
      setError(true);
      console.log("error");
      toast.error("لطفا نوع آسیاب را انتخاب کنید",{
  position: "bottom-center"
});
      return;
    }
    //console.log('crtItems: ', cart);
    dispatch(addToCart({ packageItem }));
    setModalMission({
      ...modalMission,
      appear: true,
      mission: "SuccessAddToCart",
    });
  };

  return (
    <div className="flex flex-col border border-[#2aaf3c] border-dashed rounded-lg p-2 mt-10 ">
      <ToastContainer />


     {(Product.category == "Coffee" || Product.category == "winning" || winningProduct) && (
        <>
      <Dropdown shouldBlockScroll={false} >
        <DropdownTrigger>
          <Button variant="bordered" className={`mt-10 mx-2 font-modamBl ${error ? " border-[#c9385c]" : ""}`}>
            <span
              className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}
                                    ${persianLan ? "text-right" : "text-left"}
                                }    font-modamBo  m-8`}
            >
              انتخاب نوع آسیاب
            </span>
          </Button>
        </DropdownTrigger>
        <DropdownMenu className="p-1 text-right font-modamBo py-4 px-2">
          {grindingGradeArr.map((item, index) => (
            <DropdownItem
              key={index}
              onPress={() => {
                setError(false);
                setPackageItem((packageItem) => ({
                  ...packageItem,
                  grindingGrade: item,
                }));
              }}
            >
              {" "}
              {item}{" "}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

            </>
      )}
      <div className="w-full flex flex-row items-center justify-between  px-2">
        <div className="flex flex-col items-center">
          <span
            className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}
                                    ${persianLan ? "text-right" : "text-left"}
                                }    font-modamBo  mt-6 md:mt-10 mb-2`}
          >
            {persianLan ? ":بسته" : "Package:"}
          </span>

          <Chip startContent={<CheckIcon size={18} />} variant="bordered" color="success" className="font-modamBl">
            {winningProduct ? "250g" : item.item}
          </Chip>
        </div>

        <div className="flex flex-col items-center">
          <span
            className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}
                                    ${persianLan ? "text-right" : "text-left"}
                                }    font-modamBo  mt-6 md:mt-10 mb-2`}
          >
            {persianLan ? ":قیمت" : "Price:"}
          </span>
          <div className="flex flex-row items-center">
            <span className={"text-[#c9385c] text-xs mx-1"}>{persianLan ? "تومان" : "AED"}</span>
            <span className={"text-[#ad1037] text-lg font-modamBl"}>
              {persianLan
                ? winningProduct
                  ? PriceSlicer(winningProductPrice)
                  : PriceSlicer(item.priceIrr)
                : winningProduct
                ? PriceSlicer(winningProductPrice)
                : PriceSlicer(item.priceAed)}
            </span>
          </div>
        </div>
      </div>

      {(Product.category == "Coffee" || Product.category == "winning" || winningProduct) && (
        <>
          {packageItem.grindingGrade && (
            <div className="px-4  pt-4 gap-1 flex flex-col">
              <span
                className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}
                                    ${persianLan ? "text-right" : "text-left"}
                                }    font-modamL`}
              >
                : انتخاب شما
              </span>

              <span
                className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}
                                    ${persianLan ? "text-right" : "text-left"}
                                }    font-modamBo`}
              >
                {packageItem.grindingGrade}
              </span>
            </div>
          )}
        </>
      )}

      <div className="flex flex-row justify-between mt-8">
        <div className="flex flex-row justify-between items-center">
          <Button
            isIconOnly
            color="danger"
            className="p-0  drop-shadow-xl"
            onPress={() => setPackageItem({ ...packageItem, qty: packageItem.qty + 1 })}
          >
            <span className={"text-darkTxtOne font-modamBl"}>+</span>
          </Button>

          <span className={darkMode ? "text-darkTxtOne px-4 font-modamBl" : "text-lightTxtOne px-4 font-modamBl"}>
            {packageItem.qty}
          </span>
          <Button
            isIconOnly
            color="danger"
            className="p-0  drop-shadow-xl"
            onPress={() => {
              packageItem.qty > 1 &&
                setPackageItem({
                  ...packageItem,
                  qty: packageItem.qty - 1,
                });
            }}
          >
            <span className={"text-darkTxtOne font-modamBl"}>-</span>
          </Button>
        </div>
        {Product.category == "Coffee" || Product.category == "winning" ? (
          true ? (
            <Button color={`${error ? `danger` : `success`}`} onPress={addToCartHandler} className="ml-2">
              <span className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}  font-modamBo`}>
                {persianLan ? " افزودن به سبد خرید" : "Add to Cart"}
              </span>
            </Button>
          ) : (
            <Button color="success" isDisabled className="ml-2">
              <span className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}  font-modamBo`}>
                {persianLan ? " افزودن به سبد خرید" : "Add to Cart"}
              </span>
            </Button>
          )
        ) : (
          <Button color="success" onPress={addToCartHandler} className="ml-2">
            <span className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}  font-modamBo`}>
              {persianLan ? " افزودن به سبد خرید" : "Add to Cart"}
            </span>
          </Button>
        )}
      </div>
    </div>
  );
}
