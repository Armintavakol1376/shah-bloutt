"use client";

import React, { useContext, useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import PriceSlicer from "../Global/PriceSlicer";
import DatePicker, { DateObject } from "react-multi-date-picker";
import Link from "next/link";
import persian from "react-date-object/calendars/persian";
import Gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import { BASEURL } from "@/app/ReduxState/BaseUrl";
import { useRouter } from 'next/navigation';

const OrderCard = ({ Data }) => {
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

  const PaymentHandle = () => {};
  const router = useRouter();
  return (
    <div
      className={
        darkMode
          ? "flex flex-col items-center rounded-lg bg-darkBgTwo p-0 pb-4 my-2 lg:mx-2 w-full md:w-80"
          : "flex flex-col items-center rounded-lg bg-lightBgTwo p-0 pb-4 my-2 lg:mx-2 w-full md:w-80"
      }
    >
      <div className="px-4 py-2 rounded-t-lg bg-[#ad1037] w-full md:w-80">
        <h1
          className={
            persianLan
              ? "text-darkTxtOne font-modamBo text-right"
              : "text-darkTxtOne font-modamBo text-left"
          }
        >
          {persianLan ? "سفارش خرید" : "Order"}
        </h1>
      </div>

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
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 pb-1 pt-2"
            : "w-full flex flex-row items-center justify-between px-4 pb-1 pt-2"
        }
      >
        {" "}
        <span
          className={
            darkMode
              ? "text-darkTxtTwo font-modamBo text-xs"
              : "text-lightTxtTwo font-modamBo text-xs"
          }
        >
          {persianLan ? ": تاریخ ثبت سفارش" : "Order Created at:"}
        </span>
        <span
          className={
            darkMode
              ? "text-darkTxtTwo font-modamL text-xs"
              : "text-lightTxtTwo font-modamL text-xs"
          }
        >
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
        <span
          className={
            darkMode
              ? "text-darkTxtTwo font-modamBo text-xs"
              : "text-lightTxtTwo font-modamBo text-xs"
          }
        >
          {persianLan ? " :پرداخت شده" : "is Paid:"}
        </span>
        <span
          className={
            darkMode
              ? "text-[#ad1037] font-modamBo text-sm"
              : "text-[#57ad10] font-modamBo text-sm drop-shadow-lg"
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
        <span
          className={
            darkMode
              ? "text-darkTxtTwo font-modamBo text-xs"
              : "text-lightTxtTwo font-modamBo text-xs"
          }
        >
          {persianLan ? " : نحوه پرداخت" : "Payment Method:"}
        </span>
        <span
          className={
            darkMode
              ? "text-darkTxtTwo font-modamL text-xs"
              : "text-lightTxtTwo font-modamL text-xs"
          }
        >
          {Data.paymentMethod}
        </span>
      </div>
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm"
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
          {persianLan ? ":آیتم های سفارش داده شده" : "Order Items:"}
        </span>
        <span
          className={
            darkMode
              ? "text-darkTxtTwo font-modamL text-xs"
              : "text-lightTxtTwo font-modamL text-xs"
          }
        >
          {Data.orderItems.length} Items
        </span>
      </div>

      {Data.orderItems?.map((item, index) => (
        <div
          key={index}
          className={
            darkMode
              ? persianLan
                ? "w-11/12  flex flex-row-reverse p-1 items-center justify-center  rounded-lg mx-4 my-1 bg-[#272342]"
                : "w-11/12  flex flex-row p-1 items-center justify-center rounded-lg mx-4 my-1 bg-[#272342]"
              : persianLan
              ? "w-11/12  flex flex-row-reverse p-1 items-center justify-center  rounded-lg mx-4 my-1 bg-[#e9e9e9]"
              : "w-11/12  flex flex-row p-1 items-center justify-center  rounded-lg mx-4 my-1 bg-[#e9e9e9]"
          }
        >
          <div className="w-3/12 rounded-lg">
            {item.image ? (
              <img
                className="w-full rounded-lg drop-shadow-lg h-32 object-cover"
                src={`${BASEURL}/GettyImages/Products?image=${item.image}`}
              />
            ) : (
              <img
                src={`/icon-192x192.png`}
                className="w-full h-full object-contain  rounded-lg drop-shadow-lg"
              />
            )}
          </div>

          <div className="w-9/12">
            <div
              className={
                persianLan
                  ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm"
                  : "w-full  flex flex-row items-center justify-between px-4 py-1 text-sm"
              }
            >
              <span
                className={
                  darkMode
                    ? "text-darkTxtTwo font-modamBl text-right"
                    : "text-lightTxtTwo font-modamBl text-right"
                }
              >
                {item.productName}
              </span>
            </div>

            <div
              className={
                persianLan
                  ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm"
                  : "w-full flex flex-row items-center justify-between px-4 py-1 text-sm"
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
                    darkMode
                      ? "text-darkTxtTwo font-modamBo text-xs"
                      : "text-lightTxtTwo font-modamBo text-xs"
                  }
                >
                  {persianLan ? ":بسته" : "Package:"}
                </span>
                <span
                  className={
                    darkMode
                      ? "text-darkTxtTwo font-modamL text-xs px-1"
                      : "text-lightTxtTwo font-modamL text-xs px-1"
                  }
                >
                  {item.packageName}
                </span>
              </div>

              {/* <div
                className={
                  persianLan
                    ? "w-1/2 flex flex-row-reverse items-center py-1 text-sm"
                    : "w-1/2 flex flex-row items-center py-1 text-sm"
                }
              >
                <span
                  className={
                    darkMode
                      ? "text-darkTxtTwo font-modamBo text-xs"
                      : "text-lightTxtTwo font-modamBo text-xs"
                  }
                >
                  {persianLan ? ":شناسه" : "Model:"}
                </span>
                <span
                  className={
                    darkMode
                      ? "text-darkTxtTwo font-modamL text-xs px-1"
                      : "text-lightTxtTwo font-modamL text-xs px-1"
                  }
                >
                  {item.productModel}
                </span>
              </div> */}
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
                    ? "w-1/2 flex flex-row-reverse items-center text-sm"
                    : "w-1/2 flex flex-row items-center text-sm"
                }
              >
                <span
                  className={
                    darkMode
                      ? "text-darkTxtTwo font-modamBo text-xs"
                      : "text-lightTxtTwo font-modamBo text-xs"
                  }
                >
                  {persianLan ? ":تعداد" : "Quantity:"}
                </span>
                <span
                  className={
                    darkMode
                      ? "text-darkTxtTwo font-modamL text-xs px-1"
                      : "text-lightTxtTwo font-modamL text-xs px-1"
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
                    darkMode
                      ? "text-darkTxtTwo font-modamBo text-xs"
                      : "text-lightTxtTwo font-modamBo text-xs"
                  }
                >
                  {persianLan ? ":قیمت" : "Price:"}
                </span>
                <span className={"text-[#ad1037] font-modamBl text-xs px-1"}>
                  {PriceSlicer(item.price)}
                </span>
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
                    darkMode
                      ? "text-darkTxtTwo font-modamBo text-xs"
                      : "text-lightTxtTwo font-modamBo text-xs"
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
        <span
          className={
            darkMode
              ? "text-darkTxtTwo font-modamBo text-sm"
              : "text-lightTxtTwo font-modamBo text-sm"
          }
        >
          {persianLan ? " :جمع کل آیتم های سفارش" : "Total Items Price:"}
        </span>
        <span
          className={
            darkMode
              ? "text-[#aa2849] font-modamBl text-sm"
              : "text-[#b12c2c] font-modamBl text-sm"
          }
        >
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
        <span
          className={
            darkMode
              ? "text-darkTxtTwo font-modamBo text-xs"
              : "text-lightTxtTwo font-modamBo text-xs"
          }
        >
          {persianLan ? ":نحوه ارسال" : "Delivery Method:"}
        </span>
        <span
          className={
            darkMode
              ? "text-darkTxtTwo font-modamL text-xs"
              : "text-lightTxtTwo font-modamL text-xs"
          }
        >
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
        <span
          className={
            darkMode
              ? "text-darkTxtTwo font-modamBo text-xs"
              : "text-lightTxtTwo font-modamBo text-xs"
          }
        >
          {persianLan ? ":تحویل داده شده" : "Is Delivered:"}
        </span>
        <span
          className={
            darkMode
              ? "text-[#ad1037] font-modamBo text-sm"
              : "text-[#57ad10] font-modamBo text-sm drop-shadow-lg"
          }
        >
          {persianLan
            ? Data.isDelivered
              ? "بله"
              : "خیر"
            : Data.isDelivered.toString()}
        </span>
      </div>
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm"
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

      {Data.isDelivered && (
        <div
          className={
            persianLan
              ? "w-full flex flex-row-reverse items-center justify-between px-4 pb-1 py-1 "
              : "w-full flex flex-row items-center justify-between px-4 pb-1 py-1"
          }
        >
          <span
            className={
              darkMode
                ? "text-darkTxtTwo font-modamBo text-xs"
                : "text-lightTxtTwo font-modamBo text-xs"
            }
          >
            {persianLan ? ": تاریخ تحویل سفارش" : "Order Delivered at:"}
          </span>
          <span
            className={
              darkMode
                ? "text-darkTxtTwo font-modamL text-xs"
                : "text-lightTxtTwo font-modamL text-xs"
            }
          >
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
            ? "w-full flex flex-row-reverse items-center justify-between px-4 py-1 text-sm"
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
          {persianLan ? " :هزینه ارسال" : "Shipping Price:"}
        </span>
        <span
          className={
            darkMode
              ? "text-[#3a7e2d] font-modamBo text-xs"
              : "text-[#3a7e2d] font-modamBo text-xs"
          }
        >
          {PriceSlicer(Data.shippingPrice)}
        </span>
      </div>
      <img
        src={`/icon-192x192.png`}
        className="w-12 h-12 mt-8 mr-auto ml-4 object-contain drop-shadow-lg"
      />
      <div
        className={
          persianLan
            ? "w-full flex flex-row-reverse items-center justify-between px-4 pt-4 text-sm"
            : "w-full flex flex-row items-center justify-between px-4 pt-4 text-sm"
        }
      >
        <div className="flex flex-row items-center">
          <span
            className={
              darkMode
                ? "text-darkTxtTwo font-modamBl text-md"
                : "text-lightTxtTwo font-modamBl text-md drop-shadow-lg"
            }
          >
            {persianLan ? " :جمع کل سفارش" : "Total Order Price:"}
          </span>
        </div>

        <span
          className={
            darkMode
              ? "text-[#55db3a] font-modamBl text-lg "
              : "text-[#2fbd4e] font-modamBl text-lg drop-shadow-lg"
          }
        >
          {PriceSlicer(Data.totalPrice)}
        </span>
      </div>

      {!Data.isPaid && (
          <Button  onPress={() => router.push(`${BASEURL}/Pay/PaymentRequest?id=${Data._id}`)} color="success" className="w-full  font-modamBo">
            {persianLan ? "پرداخت سفارش" : "Pay Order"}
          </Button>
      )}
    </div>
  );
};

export default OrderCard;
