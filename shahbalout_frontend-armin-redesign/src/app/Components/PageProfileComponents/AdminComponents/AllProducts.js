"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";
import {
  useGetProductsMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} from "@/app/ReduxState/Slices/productApiSlice";

import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
//import { Fade } from 'react-reveal';
import { Button, Chip, Code } from "@nextui-org/react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import Gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import { BASEURL } from "@/app/ReduxState/BaseUrl";
import ProductEdit from "../../Global/Modals/ProductEdit";
import { PackageCard } from "./PackageCard";

const AllProducts = () => {
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

  const [getProducts, { isLoading, isSuccess, isError, error, data }] =
    useGetProductsMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [createProduct] = useCreateProductMutation();


  const [productEdit, setProductEdit] = useState(false);
  const [productForEdit, setProductForEdit] = useState(null);

  const [products, setProducts] = useState(null);

  const router = useRouter()

  async function fetchProducts() {
    const res = await getProducts().unwrap();
    setProducts(res);
    console.log("products: ", products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (item) => {
    setProductEdit(!productEdit);
    setProductForEdit(item);
  };

  return (
    <div className="w-full flex flex-row flex-wrap">
      {productEdit && (
        <ProductEdit
          onCloseFrom={() => setProductEdit(!productEdit)}
          Product={productForEdit}
        />
      )}
  {  !productEdit &&  <Button
        color="danger"
        //variant="flat"
        className="m-4"
        onPress={() =>
        {  createProduct({
            productObj: {
              persianName: "sample",
              englishName: "sample",
              package: {
                item: "250",
                countInStock: 0,
                priceIrr: 0,
                priceAed: 0,
                priceDollar: 0,
                discountIrr: 0,
                discountAed: 0,
                discountDollar: 0,
              },
              brand: "Shahbalout",
              category: "Coffee",
              persianDescription: "",
              englishDescription: "",
              productModel: "SKU-",
            },
          })
          router.push('/Store')}
        }
      >
        Create Product | ایجاد محصول جدید
      </Button>}

      {isSuccess &&
        products &&
        !productEdit &&
        products.products.map((item, index) => (
          <div
            key={index}
            className={
              persianLan
                ? darkMode
                  ? "hover:ring w-full flex bg-darkBgTwo flex-col md:w-80 lg:w-80 rounded-xl p-1  m-1 cursor-pointer"
                  : "hover:ring w-full flex bg-lightBgTwo flex-col md:w-80 lg:w-80 rounded-xl p-1  m-1 cursor-pointer"
                : darkMode
                ? "hover:ring w-full bg-darkBgTwo flex flex-col md:w-80 lg:w-96 rounded-xl p-1  my-1 cursor-pointer"
                : "hover:ring w-full bg-lightBgTwo flex flex-col md:w-80 lg:w-96 rounded-xl p-1  my-1 cursor-pointer"
            }
          >
            <div className="flex flex-col w-full">
              {/* <div>
                <img
                  className="w-full  rounded-lg bg-[#ddd2d5] shadow-lg"
                  src={`${BASEURL}/GettyImages/Products?image=${item.image[0]}`}
                />
              </div> */}
              <div className="w-full  rounded-lg flex flex-col p-1 mt-4">
                <p
                  className={
                    darkMode
                      ? "text-darkTxtOne font-modamBl mx-auto"
                      : "text-lightTxtOne font-modamBl mx-auto drop-shadow-xl"
                  }
                >
                  {persianLan ? item.persianName : item.englishName}
                </p>

                <p
                  className={
                    darkMode
                      ? "text-darkTxtOne font-modamBl mx-auto"
                      : "text-lightTxtOne font-modamBl mx-auto drop-shadow-xl"
                  }
                >
                  {persianLan ? item.englishName : item.persianName}
                </p>

                <div className="flex flex-row w-full items-center justify-center px-4 mb-4">
                  <span
                    className={
                      darkMode
                        ? "text-darkTxtOne text-xs"
                        : "text-lightTxtOne text-xs drop-shadow-xl"
                    }
                  >
                    Admin:
                  </span>

                  <span className={"mx-1 text-[#ad1037]"}>
                    {item.adminName}
                  </span>
                </div>
                <div className="w-full flex flex-row text-xs mt-8">
                  <div className="w-1/2 h-32 rounded-lg flex flex-col p-1">
                    <div className="flex flex-row w-full items-center px-2">
                      <span
                        className={
                          darkMode
                            ? "text-darkTxtOne text-xs"
                            : "text-lightTxtOne text-xs drop-shadow-xl"
                        }
                      >
                        category:
                      </span>

                      <span
                        className={
                          darkMode
                            ? "text-darkTxtOne text-xs font-modamBo mx-1"
                            : "text-lightTxtOne text-xs font-modamBo drop-shadow-xl mx-1"
                        }
                      >
                        {item.category}
                      </span>
                    </div>

                    {/* <div className="flex flex-row w-full items-center px-2">
                      <span
                        className={
                          darkMode
                            ? "text-darkTxtOne text-xs"
                            : "text-lightTxtOne text-xs drop-shadow-xl"
                        }
                      >
                        brand:
                      </span>

                      <span
                        className={
                          darkMode
                            ? "text-darkTxtOne text-xs font-modamBo mx-1"
                            : "text-lightTxtOne text-xs font-modamBo drop-shadow-xl mx-1"
                        }
                      >
                        {item.brand}
                      </span>
                    </div> */}

                    {/* <div className="flex flex-row w-full items-center px-2">
                      <span
                        className={
                          darkMode
                            ? "text-darkTxtOne text-xs"
                            : "text-lightTxtOne text-xs drop-shadow-xl"
                        }
                      >
                        rate:
                      </span>

                      <span className={"mx-1 text-[#ffd446]"}>
                        {item.rating}
                      </span>
                    </div>

                    <div className="flex flex-row w-full items-center px-2">
                      <span
                        className={
                          darkMode
                            ? "text-darkTxtOne text-xs"
                            : "text-lightTxtOne text-xs drop-shadow-xl"
                        }
                      >
                        reviews:
                      </span>

                      <span className={"font-modamBo mx-1 text-[#4bd339]"}>
                        {item.numReviews}
                      </span>
                    </div> */}
                  </div>

                  <div className="w-1/2 h-32 rounded-lg flex flex-col p-1">
                    <div className="flex flex-row w-full items-center px-2">
                      <span
                        className={
                          darkMode
                            ? "text-darkTxtOne text-xs"
                            : "text-lightTxtOne text-xs drop-shadow-xl"
                        }
                      >
                        edit:
                      </span>

                      <span className="font-modamBl text-xs mx-1 scale-90 text-[#ff7843]">
                        {/* format: 'YYYY/MM/DD - HH:mm:ss ' */}
                        {new DateObject({
                          date: `${item.updatedAt}`,
                          format: "YYYY/MM/DD ",
                          calendar: persianLan ? persian : Gregorian,
                          locale: persianLan ? persian_fa : null,
                        }).format()}
                      </span>
                    </div>
                    <div className="flex flex-row w-full items-center px-2">
                      <span
                        className={
                          darkMode
                            ? "text-darkTxtOne text-xs"
                            : "text-lightTxtOne text-xs drop-shadow-xl"
                        }
                      >
                        added:
                      </span>

                      <span className="font-modamBl text-xs mx-1 scale-90 text-[#ad1010]">
                        {/* format: 'YYYY/MM/DD - HH:mm:ss ' */}
                        {new DateObject({
                          date: `${item.createdAt}`,
                          format: "YYYY/MM/DD ",
                          calendar: persianLan ? persian : Gregorian,
                          locale: persianLan ? persian_fa : null,
                        }).format()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-row flex-wrap px-4">
              {item.package.map((item, index = 0) => (
                <PackageCard Data={item} key={index} />
              ))}
            </div>

            <Button
              color="danger"
              //variant="flat"
              className="m-4"
              onPress={() => handleEdit(item)}
            >
              Edit
            </Button>
          </div>
        ))}
    </div>
  );
};

export default AllProducts;
