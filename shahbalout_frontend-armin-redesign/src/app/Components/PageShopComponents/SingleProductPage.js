"use client";
import React, { useContext, useState } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import Image from "next/image";
import HeaderBackExtraNavi from "@/app/Components/Global/HeaderBackExtraNavi";
import { useSelector, useDispatch } from "react-redux";
import { setAddCartItems } from "@/app/ReduxState/Slices/authSlice";
import TransitionEffect1 from "@/app/Components/Global/TransitionEffect1";
import ScreenContainer from "@/app/Components/Global/ScreenContainer";
import PriceSlicer from "../Global/PriceSlicer";
import { Avatar, Button, Chip , Select , SelectItem } from "@nextui-org/react";
import { CheckIcon } from "@/app/Components/Icons/CheckIcon";
import DoubleCoffeeBeanIcon from "@/app/Components/Icons/DoubleCoffeeBeanIcon";
import { BASEURL } from "@/app/ReduxState/BaseUrl";
import { AddBulkIcon } from "@/app/Components/Icons/AddBulkIcon";
import EpicModal from "../Global/Modals/EpicModal";
import AddIntoCartCard from "./AddIntoCartCard";

export const SingleProductPage = ({ Product, onCloseFrom }) => {
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

  const { addCartItems } = useSelector((state) => state.auth);
  const ImgExtra = [
    {
      ImgOne: "/assets/imgs/products/coffeeSample.jpg",
    },
    {
      ImgOne: "/assets/imgs/products/hot.jpeg",
    },
  
  ]

  return (
    <TransitionEffect1>
      <HeaderBackExtraNavi onPressFrom={onCloseFrom} />
      <ScreenContainer>
        {/* <section className="w-full bg-lightBgTwo p-6 rounded-xl"></section> */}

        <section className="w-full flex flex-row flex-wrap rounded-xl py-1 mt-6">
          <div className="w-full h-60 flex flex-col items-center justify-center p-4 rounded-xl bg-opacity-10 ">
            <div className="w-full h-60 flex flex-row justify-between items-center rounded-xl overflow-hidden">
              {/* <Button isIconOnly size="sm" variant="light">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                    fill={darkMode ? "#F3F3F3" : "#292D32"}
                  />
                  <path
                    d="M13.2599 16.2802C13.0699 16.2802 12.8799 16.2102 12.7299 16.0602L9.19992 12.5302C8.90992 12.2402 8.90992 11.7602 9.19992 11.4702L12.7299 7.94016C13.0199 7.65016 13.4999 7.65016 13.7899 7.94016C14.0799 8.23016 14.0799 8.71016 13.7899 9.00016L10.7899 12.0002L13.7899 15.0002C14.0799 15.2902 14.0799 15.7702 13.7899 16.0602C13.6499 16.2102 13.4599 16.2802 13.2599 16.2802Z"
                    fill={darkMode ? "#F3F3F3" : "#292D32"}
                  />
                </svg>
              </Button> */}

        {   Product.image[0] ?   <img
                //src={'/assets/imgs/coffeeBag1.png'}
                src={`${BASEURL}/GettyImages/Products?image=${Product.image[0]}`}
                alt="coffee"
                className="w-full object-contain rounded-xl overflow-hidden"
              />  :  
              
              
              <img
               
                src={ Product.category == 'Coffee' ?  ImgExtra[0].ImgOne : ImgExtra[1].ImgOne}
                alt="coffee"
                className="w-full object-contain rounded-xl overflow-hidden"
              /> 
              
              }

              {/* <Button isIconOnly variant="light" size="sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                    fill={darkMode ? "#F3F3F3" : "#292D32"}
                  />
                  <path
                    d="M10.7397 16.2802C10.5497 16.2802 10.3597 16.2102 10.2097 16.0602C9.91969 15.7702 9.91969 15.2902 10.2097 15.0002L13.2097 12.0002L10.2097 9.00016C9.91969 8.71016 9.91969 8.23016 10.2097 7.94016C10.4997 7.65016 10.9797 7.65016 11.2697 7.94016L14.7997 11.4702C15.0897 11.7602 15.0897 12.2402 14.7997 12.5302L11.2697 16.0602C11.1197 16.2102 10.9297 16.2802 10.7397 16.2802Z"
                    fill={darkMode ? "#F3F3F3" : "#292D32"}
                  />
                </svg>
              </Button> */}
            </div>
            <div className="absolute w-full h-60  flex flex-row flex-wrap items-center justify-center -z-9">
              <div className="w-32 h-32 bg-opacity-20  m-1 ">
                <DoubleCoffeeBeanIcon Fill={"rgba(200,200,200, 0.1)"} />
              </div>

              <div className="w-32 h-32 bg-opacity-20  m-1 ">
                <DoubleCoffeeBeanIcon Fill={"rgba(200,200,200, 0.1)"} />
              </div>

              <div className="w-32 h-32 bg-opacity-20  m-1 ">
                <DoubleCoffeeBeanIcon Fill={"rgba(200,200,200, 0.1)"} />
              </div>

              <div className="w-32 h-32 bg-opacity-20  m-1 ">
                <DoubleCoffeeBeanIcon Fill={"rgba(200,200,200, 0.1)"} />
              </div>

              <div className="w-32 h-32 bg-opacity-20  m-1 ">
                <DoubleCoffeeBeanIcon Fill={"rgba(200,200,200, 0.1)"} />
              </div>

              <div className="w-32 h-32 bg-opacity-20  m-1 ">
                <DoubleCoffeeBeanIcon Fill={"rgba(200,200,200, 0.1)"} />
              </div>
            </div>

            {/* <div className="w-full m-2 -mb-10 flex flex-row items-center justify-center ">
                            <Button variant="light" isIconOnly size="lg" className="m-1">
                                <Avatar
                                    isBordered
                                    color="success"
                                    radius="md"
                                    src={'/assets/imgs/coffeeBag1.png'}
                                    className="p-1 "
                                />
                            </Button>

                            <Button variant="light" isIconOnly size="lg">
                                <Avatar
                                    radius="md"
                                    src={'/assets/imgs/coffeeBag1.png'}
                                    className="p-1 "
                                />
                            </Button>

                            <Button variant="light" isIconOnly size="lg">
                                <Avatar
                                    radius="md"
                                    src={'/assets/imgs/coffeeBag1.png'}
                                    className="p-1 "
                                />
                            </Button>

                            <Button variant="light" isIconOnly size="lg">
                                <Avatar
                                    radius="md"
                                    src={'/assets/imgs/coffeeBag1.png'}
                                    className="p-1 "
                                />
                            </Button>

                            <Button variant="light" isIconOnly size="lg">
                                <Avatar
                                    radius="md"
                                    src={'/assets/imgs/coffeeBag1.png'}
                                    className="p-1 "
                                />
                            </Button>
                        </div> */}
          </div>
          <div className="w-full flex flex-col   px-1 py-6 md:p-6 lg:p-10 mt-8  rounded-lg">
            <span
              className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}
                                    ${persianLan ? "text-right" : "text-left"}
                                }    font-modamBl   text-4xl`}
            >
              {persianLan ? Product.persianName : Product.englishName}
            </span>
            <span
              className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}
                                    ${persianLan ? "text-right" : "text-left"}
                                }    font-modamBo  mt-6 md:mt-10`}
            >
              {persianLan ? ":توضیحات" : "Details:"}
            </span>
            <span
              className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}
                                    ${persianLan ? "text-right" : "text-left"}
                                }    font-modamEl  mt-2`}
            >
              {persianLan
                ? Product.persianDescription
                : Product.englishDescription}
            </span>
            <span
              className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}
                                    ${persianLan ? "text-right" : "text-left"}
                                }    font-modamBo  mt-6 md:mt-10 mb-2`}
            >
              {persianLan ? ":شناسه کالا" : "Product Id:"}
            </span>
            <Chip
              startContent={<CheckIcon size={18} />}
              variant="bordered"
              color="success"
              className="font-modamBl"
            >
              {Product.productModel}
            </Chip>
            <span
              className={`${darkMode ? "text-darkTxtOne" : "text-lightTxtOne"}
                                    ${persianLan ? "text-right" : "text-left"}
                                }    font-modamBo  mt-6 md:mt-10 mb-2`}
            >
              {persianLan ? ":بسته بندی های موجود " : "Available Packages:"}
            </span>
            <div className="flex flex-col justify-between ">

          
    


              {Product.package.map((item, index = 0) => (
                <AddIntoCartCard item={item} Product={Product} key={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full p-6 mt-12 rounded-xl"></section>

        {modalMission && <EpicModal onCloseFrom={onCloseFrom}/>}
      </ScreenContainer>
    </TransitionEffect1>
  );
};


