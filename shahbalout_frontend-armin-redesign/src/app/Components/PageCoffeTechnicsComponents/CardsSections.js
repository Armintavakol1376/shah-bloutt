"use client";
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import CoffeeTechBlogCard from "./CoffeeTechBlogCard";
import { Pagination } from "@nextui-org/react";
import { useGetCoffeePostsQuery } from "@/app/ReduxState/Slices/blogSlice";
import EpicReadModal from "./EpicReadModal";
import Loading from "../Global/Loading";
import IsErroring from "../Global/IsErroring";
import { BASEURL } from "@/app/ReduxState/BaseUrl";

const CardsSections = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const openModalForRead = () => {
    setModalOpen((prevState) => !prevState);
  };

  const [currentPage, setCurrentPage] = React.useState(1);

  const {
    data: posts,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetCoffeePostsQuery({ pageNumber: currentPage });
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.9 }}
      className="flex flex-row-reverse mt-10 mb-20  flex-wrap items-center justify-between"
    >
      {(isLoading || isFetching) && <Loading />}
      {error && <IsErroring Ttl={error?.data?.message || error.error} />}

      {!isFetching &&
        posts?.posts?.map((item, index = 0) => (
          <div key={index}>
            <CoffeeTechBlogCard
              onClickFrom={openModalForRead}
              PersianTtl={item.postTitlePersian}
              EnglishTtl={item.postTitleEnglish}
              PersianTag={item.tagPersian}
              EnglishTag={item.tagEnglish}
              ImgOne={`${BASEURL}/GettyImages/CoffeeBlog?image=${item.banner}`}
            />

            {modalOpen && (
              <EpicReadModal
                Openation={modalOpen}
                onClickFrom={openModalForRead}
                Data={item}
              />
            )}
          </div>
        ))}

      {/* <CoffeeTechBlogCard
                onClickFrom={openModalForRead}
                PersianTtl={'اسپرسوی تخصصی ما پررنگ و تیره با طعمی دودی تر ...و'}
                EnglishTtl={'Our specialty Espresso Coffee is bold and dark with a smokier...'}
                PersianTag={'PersianTag'}
                EnglishTag={'EnglishTag'}
                ImgOne={'/assets/imgs/products/espressoSpec1.jpg'}
            />

            <CoffeeTechBlogCard
                onClickFrom={openModalForRead}
                PersianTtl={'کاپوچینو و خاستگاه آن در ایتالیای کبیر'}
                EnglishTtl={'Cuppocini & origin from old Italian Country'}
                PersianTag={'PersianTag'}
                EnglishTag={'EnglishTag'}
                ImgOne={'/assets/imgs/products/frenchCoffee1.jpg'}
            />

            <CoffeeTechBlogCard
                onClickFrom={openModalForRead}
                PersianTtl={' ...قهوه ترک سبکی از قهوه است که با استفاده از'}
                EnglishTtl={'Turkish coffee is a style of coffee prepared in a cezve ...'}
                PersianTag={'PersianTag'}
                EnglishTag={'EnglishTag'}
                ImgOne={'/assets/imgs/products/turkishCoffee2.jpg'}
            /> */}

      {/* <div className="mx-auto mt-8 font-modamBl">
                <Pagination loop showControls color="success" total={5} initialPage={1} />
            </div> */}

      {/* <div className="w-full flex flex-col gap-5 font-modamBl items-center mt-10">
                {!isLoading && (
                    <Pagination
                        color="success"
                        showControls
                        total={posts?.pages}
                        initialPage={posts?.page}
                        page={currentPage}
                        onChange={setCurrentPage}
                    />
                )}
            </div> */}
    </motion.div>
  );
};

export default CardsSections;

// Coffee-related categorization:
// Main title
// - The secrets of coffee and their effects on health, mood, and performance.
// Subcategories
// 1- Art and technique of coffee
// 2- Science of coffee
// 3- Vital knowledge about coffee

// Here are the four important questions you asked:

// 1- What is the difference between espresso, French press, and Turkish coffee?
// 2- Why doesn't an espresso produce crema?
// 3- What is the most important criterion for choosing coffee?
// 4- Which coffee is more suitable for weight loss?

// Note: The translations provided are general translations and may not accurately capture the full context or nuances of the original text.
