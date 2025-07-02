"use client";
import React, { useState } from "react";
import ShopCategoryMain from "./ShopCategoryMain";
import TransitionEffect1 from "../Global/TransitionEffect1";
import { SingleProductPage } from "./SingleProductPage";

import ProductCard from "./ProductCard";
import {
  useGetProductsMutation,
  useGetAllProductsQuery,
} from "@/app/ReduxState/Slices/productApiSlice";
import Loading from "../Global/Loading";
import IsErroring from "../Global/IsErroring";


export default function MainSwitcher  () {
  const [switcher, setSwitcher] = useState("Main");
  const [productObj, setProductObj] = useState(null);


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

  // React.useEffect(() => {
  //     fetchProducts();
  // }, []);

  const ImgExtra = [
    {
      ImgOne: "/assets/imgs/products/coffeeSample.jpg",
      ImgTwo: "/assets/imgs/products/coffeeSample.jpg",
    },
    {
      ImgOne: "/assets/imgs/products/hot.jpeg",
      ImgTwo: "/assets/imgs/products/hot.jpeg",
    },
  
  ]

  const ImgSrcs = [
    {
      ImgOne: "/assets/imgs/products/mocacino.png",
      ImgTwo: "/assets/imgs/products/mocacino2.png",
    },

    {
      ImgOne: "/assets/imgs/products/espressoSpec2.jpg",
      ImgTwo: "/assets/imgs/products/espressoSpec1.jpg",
    },

    {
      ImgOne: "/assets/imgs/products/espressoMedium2.jpg",
      ImgTwo: "/assets/imgs/products/espressoMedium1.jpg",
    },

    {
      ImgOne: "/assets/imgs/products/espressoFull2.jpg",
      ImgTwo: "/assets/imgs/products/espressoFull1.jpg",
    },

    {
      ImgOne: "/assets/imgs/products/cuppocino1.png",
      ImgTwo: "/assets/imgs/products/espressoFull1.jpg",
    },

    {
      ImgOne: "/assets/imgs/products/nicaraguaCoffee2.jpg",
      ImgTwo: "/assets/imgs/products/nicaraguaCoffee1.jpg",
    },

    {
      ImgOne: "/assets/imgs/products/MasalaChai1.jpg",
      ImgTwo: "/assets/imgs/products/MasalaChai2.jpg",
    },

    {
      ImgOne: "/assets/imgs/products/turkishCoffee1.jpg",
      ImgTwo: "/assets/imgs/products/turkishCoffee2.jpg",
    },

    {
      ImgOne: "/assets/imgs/products/frenchCoffee1.jpg",
      ImgTwo: "/assets/imgs/products/frenchCoffee2.jpg",
    },
    {
      ImgOne: "/assets/imgs/products/crack.JPG",
      ImgTwo: "/assets/imgs/products/MasalaChai2.jpg",
    },
    {
      ImgOne: "/assets/imgs/products/goldCoffee1.PNG",
      ImgTwo: "/assets/imgs/products/goldCoffee2.JPG",
    },
    {
      ImgOne: "/assets/imgs/products/crack.JPG",
      ImgTwo: "/assets/imgs/products/MasalaChai2.jpg",
    },
    {
      ImgOne: "/assets/imgs/products/crack.JPG",
      ImgTwo: "/assets/imgs/products/MasalaChai2.jpg",
    },
    {
      ImgOne: "/assets/imgs/products/crack.JPG",
      ImgTwo: "/assets/imgs/products/MasalaChai2.jpg",
    },
    {
      ImgOne: "/assets/imgs/products/crack.JPG",
      ImgTwo: "/assets/imgs/products/MasalaChai2.jpg",
    },
    {
      ImgOne: "/assets/imgs/products/crack.JPG",
      ImgTwo: "/assets/imgs/products/MasalaChai2.jpg",
    },
    {
      ImgOne: "/assets/imgs/products/crack.JPG",
      ImgTwo: "/assets/imgs/products/MasalaChai2.jpg",
    },
    {
      ImgOne: "/assets/imgs/products/crack.JPG",
      ImgTwo: "/assets/imgs/products/MasalaChai2.jpg",
    },
    {
      ImgOne: "/assets/imgs/products/crack.JPG",
      ImgTwo: "/assets/imgs/products/MasalaChai2.jpg",
    },
    {
      ImgOne: "/assets/imgs/products/crack.JPG",
      ImgTwo: "/assets/imgs/products/MasalaChai2.jpg",
    },
    {
      ImgOne: "/assets/imgs/products/crack.JPG",
      ImgTwo: "/assets/imgs/products/MasalaChai2.jpg",
    },
  ];

  return (
    <>
      {switcher == "Main" && (
        <TransitionEffect1>
          <ShopCategoryMain>
            {isLoading && <Loading />}
            {error && <IsErroring />}

            {data != null &&
              data.products.map(
                (item, index = 0) =>
                  item.englishName !== "sample" &&
                item.category !== "winning" && 
                  item.package[0]?.countInStock !== 0 &&
                 (
               
                    <ProductCard
                      onClkFrom={() => {
                        setProductObj(item), setSwitcher("Product");
                      }}
                      key={index}
                      PersianTtl={item.persianName}
                      EnglishTtl={item.englishName}
                      //{console.log("ImgSrcs[index].ImgOne": ImgSrcs[index].ImgOne)}
                      
                      ImgOne={
                        ImgSrcs[index]?.ImgOne
                          ? ImgSrcs[index].ImgOne
                          :  item.category == 'Coffee' ?  ImgExtra[0].ImgOne :ImgExtra[1].ImgOne
                      }
                      ImgTwo={
                        ImgSrcs[index]?.ImgTwo
                          ? ImgSrcs[index].ImgTwo
                          : item.category == 'Coffee' ?  ImgExtra[0].ImgTwo :ImgExtra[1].ImgTwo
                      }
                    />
                   
                  )
              )}
          </ShopCategoryMain>
        </TransitionEffect1>
      )}
      {switcher == "Product" && (
        <>
        
          <SingleProductPage
            onCloseFrom={() => setSwitcher("Main")}
            Product={productObj}
          />
        </>
      )}
    </>
  );
};

