"use client";
import React, { useState, useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import Loading from "../Global/Loading";
import IsErroring from "../Global/IsErroring";
import TransitionEffect1 from "../Global/TransitionEffect1";
import RangeSelectioner from "./RangeSelectioner";
import AddIntoCartCard from "../PageShopComponents/AddIntoCartCard";
import EpicModal from "../Global/Modals/EpicModal";
import ProductCard from "./ProductCard";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { TotalPart } from "./TotalPart";

import {
  useGetProductsMutation,
  useGetAllProductsQuery,
} from "@/app/ReduxState/Slices/productApiSlice";
import PriceSlicer from "../Global/PriceSlicer";

const WinningCategory = () => {
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

  const keyword = "";
  const pageNumber = 1;

  //   const [getProducts, { isError, isSuccess }] = useGetProductsMutation();

  //   async function fetchProducts() {
  //     const res = await getProducts().unwrap();
  //     setProducts(res);
  //   }

  const { data, isLoading, error } = useGetAllProductsQuery({
    keyword,
    pageNumber,
  });

  const [selection, setSelection] = useState([
    { id: 0, title: "", percent: 0, price: 0 },
    { id: 1, title: "", percent: 0, price: 0 },
    { id: 2, title: "", percent: 0, price: 0 },
    { id: 3, title: "", percent: 0, price: 0 },
  ]);

  const getItemValue = (value, indexId, itemPrice) => {
    const nextSelection = [...selection];
    nextSelection[indexId].percent = value;
    nextSelection[indexId].price = (value * itemPrice) / 100;
    setSelection(nextSelection);
  };

  const getItemTitle = (title, indexId) => {
    const nextSelection = selection.map((item) => {
      if (indexId === item.id) {
        return { ...item, title: title };
      } else {
        return item;
      }
    });

    setSelection(nextSelection);
  };

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <TransitionEffect1>
      {isLoading && <Loading />}

      {error && <IsErroring />}

      {data != null && (
        <div className="pb-96">
          {/* <p
            className={
              darkMode
                ? "w-full mb-8  text-darkTxtTwo text-right  text-lg  font-modamR"
                : "w-full mb-8 text-lightTxtTwo text-right  text-lg  font-modamR"
            }
          >
            با ترکیب و انتخاب هر کدام از قهوه ها ترکیب با طعم مدنظرتون رو انتخاب
            کنید
          </p> */}

          <div
            className={
              darkMode
                ? `bg-darkBgTwo w-full rounded-xl border-2 border-darkTxtTwo text-right pt-4`
                : `bg-lightBgOne w-full rounded-xl border-2 border-lightTxtTwo text-right pt-4`
            }
          >
            <span
              className={
                darkMode
                  ? "text-darkTxtTwo  mt-8 mr-4 font-modamBo"
                  : "text-lightTxtTwo mt-8 mr-4 font-modamBo"
              }
            >
              👇 مشـــاهده عنوان قهوه ها و ویژگی هر کدام
            </span>
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="مشاهده عنوان قهوه ها و ویژگی هر کدام"
                title=""
                className={
                  darkMode
                    ? "text-darkTxtTwo text-center w-full text-xl"
                    : "text-lightTxtTwo text-center w-full text-xl"
                }
              >
                <div className="w-full flex flex-row flex-wrap justify-between">
                  {data.products.map(
                    (item, index) =>
                      item.englishName !== "sample" &&
                      item.category == "winning" && (
                        <ProductCard
                          PersianTtl={item.persianName}
                          EnglishTtl={item.englishName}
                          description={item.persianDescription}
                        />
                      )
                  )}
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <h1
              className={
                darkMode
                  ? "text-darkTxtTwo mt-8 mr-4 font-modamBo text-right text-lg"
                  : "text-lightTxtTwo mt-8 mr-4 font-modamBo text-right"
              }
            >
          :توصیه ها

</h1>


<p
              className={
                darkMode
                  ? "text-darkTxtTwo mt-2 mr-4 font-modamR text-right text-xs"
                  : "text-lightTxtTwo mt-2 mr-4 font-modamR text-right text-xs"
              }
            >

 .حداکثر از ۳ قهوه استفاده کنید

</p>


<p
              className={
                darkMode
                  ? "text-darkTxtTwo mt-1 mr-4 font-modamR text-right text-xs" 
                  : "text-lightTxtTwo mt-1 mr-4 font-modamR text-right text-xs"
              }
            >

.⁠اگر تپش قلب دارید، ربوستا انتخاب نکنید

</p>

<p
              className={
                darkMode
                  ? "text-darkTxtTwo mt-1 mr-4 font-modamR text-right text-xs"
                  : "text-lightTxtTwo mt-1 mr-4 font-modamR text-right text-xs"
              }
            >

.⁠برای روش‌های دمی عربیکا انتخاب کنید

</p>


<p
              className={
                darkMode
                  ? "text-darkTxtTwo mt-1 mr-4 font-modamR text-right text-xs"
                  : "text-lightTxtTwo mt-1 mr-4 font-modamR text-right text-xs"
              }
            >

.⁠برای اسپرسو از ترکیب ربوستا و عربیکا استفاده کنید

</p>
<p
              className={
                darkMode
                  ? "text-darkTxtTwo mt-1 mr-4 font-modamR text-right text-xs"
                  : "text-lightTxtTwo mt-1 mr-4 font-modamR text-right text-xs"
              }
            >
.⁠اگر معده حساس دارید از قهوه های ترش کمتر انتخاب کنید

</p>


<p
              className={
                darkMode
                  ? "text-darkTxtTwo mt-1 mr-4 font-modamR text-right text-xs"
                  : "text-lightTxtTwo mt-1 mr-4 font-modamR text-right text-xs"
              }
            >

.⁠ربوستای خالص استفاده نکنید 

</p>


<p
              className={
                darkMode
                  ? "text-darkTxtTwo mt-1 mr-4 font-modamR text-right text-xs"
                  : "text-lightTxtTwo mt-1 mr-4 font-modamR text-right text-xs"
              }
            >

.⁠سعی کنید ترکیبتان کافئین بالا نداشته باشد 

</p>


            <span
              className={
                darkMode
                  ? "text-darkTxtTwo text-center text-sm font-modamBo justify-center mt-10 inline-flex w-full"
                  : "text-lightTxtTwo text-center text-sm font-modamBo justify-center mt-10 inline-flex w-full"
              }
            >
 (هر ترکیبی که درست می کنید مجموعا صد درصد و یک یه بسته 250 گرمی است)
            </span>

          {selection.map((item, index) => (
            <RangeSelectioner
              key={index}
              selection={selection}
              setItemValue={getItemValue}
              setItemTitle={getItemTitle}
              titleItems={data}
              indexId={index}
            />
          ))}
          <div className="w-full flex flex-col rounded-lg p-4">
            <div className="w-full flex flex-row flex-wrap rounded-lg gap-4">
              {selection.map((item, index) => (
                <TotalPart data={item} key={index} />
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col justify-end text-right items-center mt-8 gap-2">
            <span
              className={
                darkMode
                  ? "text-darkTxtTwo text-center text-sm font-modamBo"
                  : "text-lightTxtTwo text-center text-sm font-modamBo"
              }
            >
              مجموع درصد قهوه های انتخابی شما باید صد باشد تا امکان ثبت سفارش
              داشته باشید
            </span>

            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-row items-center gap-2">
                <span
                  className={
                    darkMode
                      ? "text-darkTxtTwo text-right text-sm font-modamL"
                      : "text-lightTxtTwo text-right text-sm font-modamL"
                  }
                >
                  تومان
                </span>
                <span
                  className={
                    darkMode
                      ? "text-darkTxtTwo text-right text-xl font-modamBo"
                      : "text-lightTxtTwo text-right text-xl font-modamBo"
                  }
                >
                  {PriceSlicer(
                    selection.reduce((acc, obj) => acc + Number(obj.price), 0)
                  )}
                </span>
              </div>
              <span
                className={
                  darkMode
                    ? "text-darkTxtTwo text-right text-xl font-modamBo"
                    : "text-lightTxtTwo text-right text-xl font-modamBo"
                }
              >
                -
              </span>
              <span
                className={
                  darkMode
                    ? "text-[#ad1037] text-right text-xl font-modamBo"
                    : "text-[#ad1037] text-right text-xl font-modamBo"
                }
              >
                {selection.reduce((acc, obj) => acc + Number(obj.percent), 0)} ٪{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between ">
            {selection.reduce((acc, obj) => acc + Number(obj.percent), 0) ==
              100 &&
              data.products[randomIntFromInterval(11, 19)].package.map(
                (item, index) => (
                  <AddIntoCartCard
                    item={item}
                    Product={data.products[data.products.length - 1]}
                    key={index}
                    winningProduct={true}
                    winningProductPersianName={selection
                      .map((item) =>
                        item.percent > 4
                          ? item.title +
                            " % " +
                            item.percent +
                            " / " +
                            " گرم " +
                            (item.percent * 250) / 100 +
                            "      "
                          : " "
                      )
                      .toString()}
                    winningProductEnglishName={selection
                      .map((item) =>
                        item.percent > 4
                          ? item.title +
                            " % " +
                            item.percent +
                            " / " +
                            " گرم " +
                            (item.percent * 250) / 100 +
                            "      "
                          : " "
                      )
                      .toString()}
                    winningProductPrice={selection.reduce(
                      (acc, obj) => acc + Number(obj.price),
                      0
                    )}
                  />
                )
              )}
          </div>

          {modalMission && <EpicModal />}
        </div>
      )}
    </TransitionEffect1>
  );
};

export default WinningCategory;
