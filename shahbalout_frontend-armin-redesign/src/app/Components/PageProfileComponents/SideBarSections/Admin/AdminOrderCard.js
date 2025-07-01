"use client";

import React, { useContext, useState, useEffect } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import PriceSlicer from "../../../Global/PriceSlicer";
import DatePicker, { DateObject } from "react-multi-date-picker";
import Link from "next/link";
import { useRouter } from "next/router";
import persian from "react-date-object/calendars/persian";
import Gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import { BASEURL } from "@/app/ReduxState/BaseUrl";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const AdminOrderCard = ({
  Data,
  onPressDeliver,
  isDeliverLoading,
  isDeliverLoadingId,
  onPressPaid,
  isPaidLoading,
  isPaidLoadingId,
  onPressDelete,
}) => {
  const [darkMode, setDarkMode, persianLan, setPersianLan, modalMission, setModalMission, cartItems, setCartItems] =
    useContext(ThemeContextExp);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function numberToPersian(number) {
     const persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 
     8: '۸', 9: '۹' };
     number = number.toString().split('');
     let persianNumber = ''
     for (let i = 0; i < number.length; i++) {
          number[i] = persian[number[i]];
     }
     for (let i = 0; i < number.length; i++) {
          persianNumber += number[i];
     }
     return persianNumber;
}

  return (
    <div
      className={
        darkMode
          ? "flex flex-col items-center rounded-lg bg-darkBgTwo p-0 pb-4 my-2 lg:mx-2 w-full md:w-80 relative"
          : "flex flex-col items-center rounded-lg bg-lightBgTwo p-0 pb-4 my-2 lg:mx-2 w-full md:w-80 relative"
      }
    >
      <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-shiraz">Delete Order!</ModalHeader>
                <ModalBody>
                  <p className="font-modalBo text-right">از پاک کردن این سفارش مطمعن هستید؟</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    خیر
                  </Button>
                  <Button color="danger" onPress={onPressDelete}>
                    بله
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>

      <div className="px-4 py-2 rounded-t-lg bg-[#ad1037] w-full md:w-80 flex items-center justify-between">
        <img src={`/assets/logo/logoType.png`} className="w-10 h-10  object-contain drop-shadow-lg" />
        <h1
          className={persianLan ? "text-darkTxtOne font-modamBo text-right" : "text-darkTxtOne font-modamBo text-left"}
        >
          {persianLan ? "سفارش خرید" : "Order"}
        </h1>
      </div>
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 pb-1 pt-2"
            : "w-full flex flex-row items-center justify-between px-4 pb-1 pt-2"
        }
      >
        {Data.isDelivered ? (
          <img
            src="/assets/imgs/deliveredBox.png"
            className="w-16 h-16 mt-2 ml-auto mr-2 object-contain bg-transparent drop-shadow-xl"
          />
        ) : (
          <img
            src="/assets/imgs/unDeliveredBox.png"
            className="w-16 h-16 mt-2 ml-auto mr-2 object-contain bg-transparent drop-shadow-xl"
          />
        )}
      </div>
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 pb-1 pt-2"
            : "w-full flex flex-row items-center justify-between px-4 pb-1 pt-2"
        }
      >
        {" "}
        <span className={darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"}>
          {persianLan ? ": تاریخ ثبت سفارش" : "Order Created at:"}
        </span>
        <span className={darkMode ? "text-darkTxtTwo font-modamL text-xs" : "text-lightTxtTwo font-modamL text-xs"}>
          {/* format: 'YYYY/MM/DD - HH:mm:ss ' */}
          {new DateObject({
            date: `${Data.createdAt}`,
            format: "YYYY/MM/DD - HH:mm:ss",
            calendar: persianLan ? persian : Gregorian,
            locale: persianLan ? persian_fa : null,
          }).format()}
        </span>
      </div>
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm"
            : "w-full flex flex-row items-center justify-between px-4 py-1 text-sm"
        }
      >
        <span className={darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"}>
          {persianLan ? " :پرداخت شده" : "is Paid:"}
        </span>
        <span
          className={
            darkMode ? "text-[#ad1037] font-modamBo text-sm" : "text-[#57ad10] font-modamBo text-sm drop-shadow-lg"
          }
        >
          {persianLan ? (Data.isPaid ? "بله" : "خیر") : Data.isPaid.toString()}
        </span>
      </div>
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm"
            : "w-full flex flex-row items-center justify-between px-4 py-1 text-sm"
        }
      >
        <span className={darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"}>
          {persianLan ? " : نحوه پرداخت" : "Payment Method:"}
        </span>
        <span className={darkMode ? "text-darkTxtTwo font-modamL text-xs" : "text-lightTxtTwo font-modamL text-xs"}>
          {Data.paymentMethod}
        </span>
      </div>
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm mt-4"
            : "w-full flex flex-row items-center justify-between px-4 py-1 text-sm mt-4"
        }
      >
        <span className={darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"}>
          {persianLan ? ":نام کاربر" : "User Name:"}
        </span>

        <span className={darkMode ? "text-darkTxtTwo font-modamL text-xs" : "text-lightTxtTwo font-modamL text-xs"}>
          {Data.userName}
        </span>
      </div>
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm "
            : "w-full flex flex-row items-center justify-between px-4 py-1 text-sm"
        }
      >
        <span className={darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"}>
          {persianLan ? ":همراه کاربر" : "User Phone:"}
        </span>
        <span
          className={
            darkMode
              ? "text-darkTxtTwo font-peydablack text-xs flex flex-row items-center "
              : "text-lightTxtTwo font-peydablack text-xs flex flex-row items-center "
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

          {Data.userNumber ? <a href={"tel:" + Data.userNumber}>{numberToPersian(Data.userNumber)}</a> : "None!"}
        </span>
      </div>
      {/* <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm "
            : "w-full flex flex-row items-center justify-between px-4 py-1 text-sm"
        }
      >
        <span
          className={
            darkMode
              ? "text-darkTxtTwo font-modamBo text-xs"
              : "text-lightTxtTwo font-modamBo text-xs"
          }
        >
          {persianLan ? ":ایمیل کاربر" : "User Email:"}
        </span>
        <span
          className={
            darkMode
              ? "text-darkTxtTwo font-modamR text-xs"
              : "text-lightTxtTwo font-modamR text-xs"
          }
        >
          {Data.userEmail ? Data.userEmail : "None!"}
        </span>
      </div> */}
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm"
            : "w-full flex flex-row items-center justify-between px-4 py-1 text-sm"
        }
      >
        <span className={darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"}>
          {persianLan ? ":آیتم های سفارش داده شده" : "Order Items:"}
        </span>
        <span
          className={darkMode ? "text-darkTxtTwo text-xs font-peydablack" : "text-lightTxtTwo font-peydablack text-xs"}
        >
          {numberToPersian(Data.orderItems.length)}
        </span>
      </div>
      {Data.orderItems?.map((item, index) => (
        <div
          key={index}
          className={
            darkMode
              ? persianLan
                ? "w-11/12 flex flex-row-reverse p-1 items-center justify-start rounded-lg mx-4 my-1 bg-[#272342]"
                : "w-11/12 flex flex-row p-1 items-center justify-start  rounded-lg mx-4 my-1 bg-[#272342]"
              : persianLan
              ? "w-11/12 flex flex-row-reverse p-1 items-center justify-start  rounded-lg mx-4 my-1 bg-[#e9e9e9]"
              : "w-11/12 flex flex-row p-1 items-center justify-start rounded-lg mx-4 my-1 bg-[#e9e9e9]"
          }
        >
          {item.image && (
            <div className="w-2/12 h-full  rounded-lg drop-shadow-lg">
              {item.image ? (
                <img
                  src={`${BASEURL}/GettyImages/Products?image=${item.image}`}
                  className="w-full h-full object-cover  rounded-lg drop-shadow-lg"
                />
              ) : // <img
              //   src={`/icon-192x192.png`}
              //   className="w-14 pr-2 h-full object-contain  rounded-lg drop-shadow-lg"
              // />
              null}
            </div>
          )}

          <div className="w-9/12">
            <div
              className={
                persianLan
                  ? "w-full flex flex-row-reverse items-center justify-between p-4 text-sm"
                  : "w-full flex flex-row items-center justify-between p-4 text-sm"
              }
            >
              <span
                className={
                  darkMode ? "text-darkTxtTwo font-modamBl text-right" : "text-lightTxtTwo font-modamBl text-right"
                }
              >
                {item.productName}
              </span>
            </div>

            <div
              className={
                persianLan
                  ? "w-full flex flex-row-reverse items-center justify-between px-4  text-sm"
                  : "w-full flex flex-row items-center justify-between px-4 text-sm"
              }
            >
              <div
                className={
                  persianLan
                    ? "w-full flex flex-row-reverse items-center py-1 text-sm"
                    : "w-full flex flex-row items-center py-1 text-sm"
                }
              >
                <span
                  className={
                    darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"
                  }
                >
                  {persianLan ? ":شناسه" : "Model:"}
                </span>
                <span
                  className={
                    darkMode ? "text-darkTxtTwo font-modamL text-xs px-1" : "text-lightTxtTwo font-modamL text-xs px-1"
                  }
                >
                  {item.productModel}
                </span>
              </div>
            </div>
            <div
              className={
                persianLan
                  ? "w-full flex flex-row-reverse items-center justify-between px-4 text-sm"
                  : "w-full flex flex-row items-center justify-between px-4 text-sm"
              }
            >
              <div
                className={
                  persianLan
                    ? "w-1/2 flex flex-row-reverse items-center   py-1 text-sm"
                    : "w-1/2 flex flex-row items-center  py-1 text-sm"
                }
              >
                <span
                  className={
                    darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"
                  }
                >
                  {persianLan ? ":بسته" : "Package:"}
                </span>
                <span
                  className={
                    darkMode ? "text-darkTxtTwo font-modamL text-xs px-1" : "text-lightTxtTwo font-modamL text-xs px-1"
                  }
                >
                  {item.packageName}
                </span>
              </div>
            </div>

            <div
              className={
                persianLan
                  ? "w-full flex flex-row-reverse items-center justify-between px-4 text-sm mb-2"
                  : "w-full flex flex-row items-center justify-between px-4 text-sm mb-2"
              }
            >
              <div
                className={
                  persianLan
                    ? "w-1/2 flex flex-row-reverse items-center text-sm"
                    : "w-1/2 flex flex-row items-center text-sm"
                }
              >
                <span
                  className={
                    darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"
                  }
                >
                  {persianLan ? ":تعداد" : "Quantity:"}
                </span>
                <span
                  className={
                    darkMode ? "text-darkTxtTwo font-modamL text-xs px-1" : "text-lightTxtTwo font-modamL text-xs px-1"
                  }
                >
                  {item.qty}
                </span>
              </div>

              <div
                className={
                  persianLan
                    ? "w-1/2 flex flex-row-reverse items-center text-sm"
                    : "w-1/2 flex flex-row items-center text-sm"
                }
              >
                <span
                  className={
                    darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"
                  }
                >
                  {persianLan ? ": قیمت" : "Price:"}
                </span>
                <span className={"text-[#ad1037] font-modamBl text-xs px-1"}>{PriceSlicer(item.price)}</span>
              </div>
            </div>

            {item.grindingGrade && item.grindingGrade.length > 2 && (
              <div
                className={
                  persianLan
                    ? "w-full flex flex-row-reverse text-sm px-4 my-2"
                    : "w-full flex flex-row   text-sm px-4 my-2"
                }
              >
                <span
                  className={
                    darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"
                  }
                >
                  {persianLan ? ":آسیاب" : "Grinding Grade:"}
                </span>
                <span
                  className={
                    darkMode
                      ? "text-darkTxtTwo font-modamL text-xs px-1 text-right"
                      : "text-lightTxtTwo font-modamL text-xs px-1 text-right"
                  }
                >
                  {item.grindingGrade}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm  mt-2 rounded-lg"
            : "w-full flex flex-row items-center justify-between px-4 py-1 text-sm  mt-2 rounded-lg"
        }
      >
        <span className={darkMode ? "text-darkTxtTwo font-modamBo text-sm" : "text-lightTxtTwo font-modamBo text-sm"}>
          {persianLan ? " :جمع کل آیتم های سفارش" : "Total Items Price:"}
        </span>
        <span className={darkMode ? "text-[#aa2849] font-modamBl text-sm" : "text-[#b12c2c] font-modamBl text-sm"}>
          {PriceSlicer(Data.itemsPrice)}
        </span>
      </div>
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 pb-1 pt-4 text-sm"
            : "w-full flex flex-row items-center justify-between px-4 pb-1 pt-4 text-sm"
        }
      >
        <span className={darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"}>
          {persianLan ? ":نحوه ارسال" : "Delivery Method:"}
        </span>
        <span className={darkMode ? "text-darkTxtTwo font-modamL text-xs" : "text-lightTxtTwo font-modamL text-xs"}>
          {Data.deliveryMethod}
        </span>
      </div>
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm"
            : "w-full flex flex-row items-center justify-between px-4 py-1 text-sm"
        }
      >
        <span className={darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"}>
          {persianLan ? ":تحویل داده شده" : "Is Delivered:"}
        </span>
        <span
          className={
            darkMode ? "text-[#ad1037] font-modamBo text-sm" : "text-[#57ad10] font-modamBo text-sm drop-shadow-lg"
          }
        >
          {persianLan ? (Data.isDelivered ? "بله" : "خیر") : Data.isDelivered.toString()}
        </span>
      </div>
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 mt-4 text-sm"
            : "w-full flex flex-row items-center justify-between px-4 py-1 mt-4 text-sm"
        }
      >
        <span className={darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"}>
          {persianLan ? ":آدرس گیرنده" : "Delivery Address:"}
        </span>
      </div>

      <span
        className={
          darkMode
            ? persianLan
              ? "w-11/12 text-darkTxtTwo font-modamL text-xs p-2 bg-[#272342] rounded-lg mx-4 my-2 text-right"
              : "w-11/12 text-darkTxtTwo font-modamL text-xs p-2 bg-[#272342] rounded-lg mx-4 my-2"
            : persianLan
            ? "w-11/12 text-lightTxtTwo font-modamL text-xs p-2 bg-[#dddddd] rounded-lg mx-4 m-1 text-right"
            : "w-11/12 text-lightTxtTwo font-modamL text-xs p-2 bg-[#dddddd] rounded-lg mx-4 m-1"
        }
      >
        {Data.shippingAddress}
      </span>

      {Data.zipCode && (
        <>
          <div
            className={
              persianLan
                ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 mt-4 text-sm"
                : "w-full flex flex-row items-center justify-between px-4 py-1 mt-4 text-sm"
            }
          >
            <span
              className={darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"}
            >
              {persianLan ? ":کد پستی" : "zipCode:"}
            </span>
          </div>

          <span
            className={
              darkMode
                ? persianLan
                  ? "w-11/12 text-darkTxtTwo font-modamR  p-2 bg-[#272342] rounded-lg mx-4 my-2 text-right"
                  : "w-11/12 text-darkTxtTwo font-modamR  p-2 bg-[#272342] rounded-lg mx-4 my-2"
                : persianLan
                ? "w-11/12 text-lightTxtTwo font-modamR  p-2 bg-[#dddddd] rounded-lg mx-4 m-1 text-right"
                : "w-11/12 text-lightTxtTwo font-modamR  p-2 bg-[#dddddd] rounded-lg mx-4 m-1"
            }
          >
            {Data.zipCode}
          </span>
        </>
      )}

      {Data.isDelivered && (
        <div
          className={
            persianLan
              ? "w-full flex flex-row-reverse items-center justify-between px-4 pb-1 py-1 "
              : "w-full flex flex-row items-center justify-between px-4 pb-1 py-1"
          }
        >
          {" "}
          <span className={darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"}>
            {persianLan ? ": تاریخ تحویل سفارش" : "Order Delivered at:"}
          </span>
          <span className={darkMode ? "text-darkTxtTwo font-modamL text-xs" : "text-lightTxtTwo font-modamL text-xs"}>
            {/* format: 'YYYY/MM/DD - HH:mm:ss ' */}
            {new DateObject({
              date: `${Data.deliveredAt}`,
              format: "YYYY/MM/DD - HH:mm:ss",
              calendar: persianLan ? persian : Gregorian,
              locale: persianLan ? persian_fa : null,
            }).format()}
          </span>
        </div>
      )}
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 mt-8 text-sm"
            : "w-full flex flex-row items-center justify-between px-4 mt-8 text-sm"
        }
      >
        <span className={darkMode ? "text-darkTxtTwo font-modamBo text-xs" : "text-lightTxtTwo font-modamBo text-xs"}>
          {persianLan ? " :هزینه ارسال" : "Shipping Price:"}
        </span>
        <span className={darkMode ? "text-[#3a7e2d] font-modamBo text-xs" : "text-[#3a7e2d] font-modamBo text-xs"}>
          {PriceSlicer(Data.shippingPrice)}
        </span>
      </div>

      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 pt-4 text-sm"
            : "w-full flex flex-row items-center justify-between px-4 pt-4 text-sm"
        }
      >
        <span
          className={
            darkMode ? "text-darkTxtTwo font-modamBl text-md" : "text-lightTxtTwo font-modamBl text-md drop-shadow-lg"
          }
        >
          {persianLan ? " :جمع کل سفارش" : "Total Order Price:"}
        </span>
        <span
          className={
            darkMode ? "text-[#55db3a] font-modamBl text-lg " : "text-[#2fbd4e] font-modamBl text-lg drop-shadow-lg"
          }
        >
          {PriceSlicer(Data.totalPrice)}
        </span>
      </div>

      <span
        className={
          darkMode
            ? "text-darkTxtTwo font-modamBo text-xs text-right w-full px-4 mt-4 mb-2"
            : "text-lightTxtTwo font-modamBo text-xs text-right w-full px-4 mt-4 mb-2"
        }
      >
        {persianLan ? " : کپی کردن" : "Shipping Price:"}
      </span>
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center  px-4 pb-8 text-sm gap-2 flex-wrap"
            : "w-full flex flex-row items-center  px-4 pb-8 text-sm gap-2 flex-wrap"
        }
      >
        <Button size="sm" onPress={() => navigator.clipboard.writeText(Data.shippingAddress)}>
          آدرس
        </Button>
        <Button size="sm" onPress={() => navigator.clipboard.writeText(Data.zipCode)}>
          کد پستی
        </Button>
        <Button size="sm" onPress={() => navigator.clipboard.writeText(Data.userName)}>
          نام
        </Button>
        <Button size="sm" onPress={() => navigator.clipboard.writeText(Data.userNumber)}>
          شماره تماس
        </Button>
        <Button
          size="sm"
          onPress={() =>
            navigator.clipboard.writeText(
              "نام: " +
                Data.userName +
                "\n" +
                "شماره تماس: " +
                Data.userNumber +
                "\n" +
                "آدرس: " +
                Data.shippingAddress +
                "\n" +
                "کد پستی: " +
                Data.zipCode
            )
          }
        >
          همه
        </Button>
        <Button
          color="danger"
          variant="bordered"
          onPress={onOpen}
          size="sm"
          //className="w-11/12 mt-8 mb-1 font-modamBo"
          //isIconOnly
        >
          Delete
        </Button>
      </div>
      {!Data.isPaid && (
        <Button
          as="a" // or component="a" depending on your UI lib
          href={`${BASEURL}/Pay/PaymentRequest?id=${Data._id}`}
          color="warning"
          className="w-full font-modamBo"
        >
          {persianLan ? "پرداخت سفارش" : "Pay Order"}
        </Button>
      )}

      {!Data.isPaid && isPaidLoading
        ? isPaidLoadingId == Data._id && (
            <Button
              color="warning"
              className="w-11/12 mt-4 font-modamBl"
              isLoading
              spinner={
                <svg
                  className="animate-spin h-5 w-5 text-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="currentColor"
                  />
                </svg>
              }
            >
              Paid Procecing...
            </Button>
          )
        : !Data.isPaid && (
            <Button color="danger" onPress={onPressPaid} className="w-11/12 mt-8 mb-1 font-modamBo">
              {persianLan ? "قبول کردن پرداخت" : "Payment Accept"}
            </Button>
          )}
      {!Data.isDelivered && isDeliverLoading
        ? isDeliverLoadingId == Data._id && (
            <Button
              color="warning"
              className="w-11/12 my-2 font-modamBo"
              isLoading
              spinner={
                <svg
                  className="animate-spin h-5 w-5 text-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="currentColor"
                  />
                </svg>
              }
            >
              Delivering
            </Button>
          )
        : !Data.isDelivered && (
            <Button color="success" onPress={onPressDeliver} className="w-11/12 my-2 font-modamBo">
              {persianLan ? "تحویل داده شد" : "Delivered"}
            </Button>
          )}
    </div>
  );
};

export default AdminOrderCard;
