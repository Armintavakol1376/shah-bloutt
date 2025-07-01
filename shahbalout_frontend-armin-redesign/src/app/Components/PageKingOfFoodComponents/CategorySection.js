"use client";
import React, { useState, useContext } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { BASEURL } from "@/app/ReduxState/BaseUrl";
import { useGetFoodPostsQuery } from "@/app/ReduxState/Slices/blogSlice";
import EpicReadModal from "../PageCoffeTechnicsComponents/EpicReadModal";
import { Pagination } from "@nextui-org/react";
import Loading from "../Global/Loading";
import IsErroring from "../Global/IsErroring";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import Gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FoodCat } from "./FoodCatQAArr";

const CategorySection = () => {
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

  const [modalOpen, setModalOpen] = React.useState(false);

  const openModalForRead = () => {
    setModalOpen((prevState) => !prevState);
    0;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: foodPosts,
    isLoading,
    isFetching,
    refetch,
    error,
  } = useGetFoodPostsQuery({ pageNumber: currentPage });

  const CategoryCard = ({ Title, Ico }) => {
    return (
      <div
        className={
          darkMode
            ? persianLan
              ? "bg-[rgba(200,200,200,0.25)] flex flex-row-reverse h-20 w-5/12 px-2 border border-[rgba(200,200,200,0.3)]  select-none md:cursor-pointer transition-all mb-6 mx-1 hover:scale-110 hover:ring-2 hover:ring-red-700   justify-start items-center  backdrop-blur-xl rounded-lg"
              : "bg-[rgba(200,200,200,0.25)] flex flex-row h-20 w-5/12 px-2 border border-[rgba(200,200,200,0.3)]  select-none md:cursor-pointer transition-all mb-6 mx-1 hover:scale-110 hover:ring-2 hover:ring-red-700   justify-start items-center  backdrop-blur-xl rounded-lg "
            : persianLan
            ? "bg-[rgba(200,200,200,0.4)] flex flex-row-reverse h-20 w-5/12 px-2  select-none md:cursor-pointer transition-all hover:scale-110 hover:ring-2 hover:ring-red-700 mb-6 mx-1 justify-start items-center   backdrop-blur-lg rounded-lg"
            : "bg-[rgba(200,200,200,0.4)] flex flex-row h-20 w-5/12 px-2 select-none md:cursor-pointer transition-all hover:scale-110 hover:ring-2 hover:ring-red-700  mb-6 mx-1 justify-start items-center   backdrop-blur-lg rounded-lg"
        }
      >
        <img
          src={`${Ico}`}
          className="h-full w-16 object-contain hover:-translate-y-4 transition-all"
        />
        <span
          className={
            darkMode
              ? "text-xs w-full text-center p-2 font-modamBl text-lightBg  select-none "
              : "text-xs w-full text-center p-2 font-modamBl text-lightTxtOne  select-none "
          }
        >
          {Title}
        </span>
      </div>
    );
  };

  const PostCard = ({ Data, onClickFrom }) => {
    return (
      <div class="w-11/12 m-2 relative h-54 mx-auto  bg-opacity-20 bg-cover bg-center  rounded-xl overflow-hidden shadow-lg">
        <img
          className="absolute h-54 w-full object-cover"
          src={`${BASEURL}/GettyImages/CoffeeBlog?image=${Data.Banner}`}
        />

        <div
          class={
            persianLan
              ? "bg-[rgba(100,100,120)] w-48 h-54 ml-auto bg-opacity-50 p-5  backdrop-blur-lg lg:p-12 flex flex-col items-end"
              : "bg-[rgba(100,120,120)] w-48 h-54 mr-auto bg-opacity-50 p-5  backdrop-blur-lg lg:p-12 flex flex-col items-start"
          }
        >
          <p
            className={
              persianLan
                ? "text-sm font-modamL mb-4 text-[rgba(100,100,120)]"
                : "text-sm font-peydablack mb-4 text-[rgba(100,100,120)]"
            }
          >
            {" "}
            {new DateObject({
              date: `${Data.createdAt}`,
              format: "YYYY/MM/DD - HH:mm:ss",
              calendar: persianLan ? persian : Gregorian,
              locale: persianLan ? persian_fa : null,
            }).format()}
          </p>
          <h2
            class={
              persianLan
                ? " text-[#FFFF] font-modamBl mb-4 text-right"
                : " text-[#FFFF] font-modamBl mb-4 text-left"
            }
          >
            {persianLan ? Data.postTitlePersian : Data.postTitleEnglish}
          </h2>

          <Button
            color="default"
            variant="bordered"
            className="px-4"
            onPress={onClickFrom}
          >
            <span className="text-darkTxtOne text-xs">
              {persianLan ? "بزن بریم" : "Read Now"}
            </span>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center -mt-8">
      <span
        className={
          persianLan
            ? darkMode
              ? "mb-6 mx-4 opacity-70 text-right text-darkTxtOne"
              : "mb-6 mx-4 opacity-70 text-right text-lightTxtOne"
            : darkMode
            ? "mb-6 mx-4 opacity-70 text-left text-darkTxtOne"
            : "mb-6 mx-4 opacity-70 text-left text-lightTxtOne"
        }
      >
        {persianLan ? ":دسته بــــــندی" : "Categories:"}
      </span>
      <div className="w-full flex flex-row flex-wrap justify-center items-center">
        {FoodCat.map((item, index = 0) => (
          <CategoryCard
            key={index}
            Title={persianLan ? item.persian : item.eng}
            Ico={item.icon}
          />
        ))}

        {/* <Card
                    Title={persianLan ? 'ایتالیایی ها' : 'Italian'}
                    Ico={'/assets/imgs/KingFoodIcons/rice.png'}
                />

                <Card
                    Title={persianLan ? 'سوشی باز' : 'Sushi'}
                    Ico={'/assets/imgs/KingFoodIcons/sushi.png'}
                />
                <Card
                    Title={persianLan ? 'سیب زمینی' : 'Potato'}
                    Ico={'/assets/imgs/KingFoodIcons/potato.png'}
                /> */}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.9 }}
        className="w-full flex flex-row-reverse mt-10 mb-20  flex-wrap items-center justify-between"
      >
        {(isLoading || isFetching) && <Loading />}
        {error && <IsErroring Ttl={error?.data?.message || error.error} />}

        {!isFetching &&
          foodPosts?.posts.map((item, index = 0) => (
            <div className="w-full flex flex-row flex-wrap" key={index}>
              <PostCard Data={item} onClickFrom={openModalForRead} />
              {modalOpen && (
                <EpicReadModal
                  Openation={modalOpen}
                  onClickFrom={openModalForRead}
                  Data={item}
                />
              )}
            </div>
          ))}

        <div className="w-full flex flex-col gap-5 font-modamBl items-center mt-10">
          {!isLoading && (
            <Pagination
              color="success"
              showControls
              total={foodPosts?.pages}
              initialPage={foodPosts?.page}
              page={currentPage}
              onChange={setCurrentPage}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CategorySection;
