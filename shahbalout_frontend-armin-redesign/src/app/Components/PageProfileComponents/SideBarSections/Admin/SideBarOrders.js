"use client";

import React, { useContext, useState, useEffect } from "react";
import { ThemeContextExp } from "@/app/ContextArea/ThemeContext";

import {
  useGetAdminOrdersQuery,
  useIsDeliveredOrderMutation,
  useIsPaidOrderByAdminMutation,
  usePayOrderQuery,
  useDeleteOrderByAdminMutation
} from "@/app/ReduxState/Slices/orderApiSlice";

import Loading from "@/app/Components/Global/Loading";
import IsErroring from "@/app/Components/Global/IsErroring";
import { Button, Pagination, PaginationCursor } from "@nextui-org/react";
import AdminOrderCard from "./AdminOrderCard";

const SideBarOrders = () => {
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

  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: orders,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetAdminOrdersQuery({ pageNumber: currentPage });

  const [isDeliveredOrder, { isLoading: isDeliverLoading, error: deliverErr }] =
    useIsDeliveredOrderMutation();

  const [isPaidOrderByAdmin, { isLoading: isPaidLoading, error: paidErr }] =
    useIsPaidOrderByAdminMutation();

    const [deleteOrder, { isLoading: isDeletingLoading, error: delErr }] =
    useDeleteOrderByAdminMutation();
  

  const { data: payOrder } = usePayOrderQuery();

  const deliveredHandle = async (id) => {
    await isDeliveredOrder({ id: id });
    //deliverErr && console.log(deliverErr);
    refetch();
  };

  const paidHandle = async (id) => {
    await isPaidOrderByAdmin({ id: id });

    refetch();
  };

  const deleteHandle = async (id) => {
    await deleteOrder({ id: id });

    refetch();
  };

  const paymentHandle = async (id) => {
    await isPayOrder({ id: id });
    refetch();
  };

  // useEffect(() => {
  //     refetch();
  // }, [currentPage]);

  return (
    <div
      className={
        persianLan
          ? "w-full flex flex-col items-end pb-20"
          : "w-full flex flex-col items-start pb-20"
      }>
      <div
        className={
          persianLan
            ? "flex flex-row-reverse items-center mb-4"
            : "flex flex-row items-center mb-4"
        }>
        <img
          src="/assets/imgs/drone.png"
          className="w-24 h-24 object-contain bg-transparent drop-shadow-xl"
        />
        <h1
          className={
            darkMode
              ? "text-darkTxtOne font-modamBl mt-4 mx-4 text-2xl text-center"
              : "text-lightTxtOne font-modamBl mt-4 mx-4 text-2xl text-center"
          }>
          {persianLan ? "سفـــارش های کاربران" : "Users Orders"}
        </h1>
      </div>

      {(isLoading || isFetching) && <Loading />}
      {error && <IsErroring Ttl={error?.data?.message || error.error} />}

      <div className="w-full flex md:flex-row flex-wrap lg:justify-center">
        {!isFetching &&
          orders?.orders?.map((item, index = 0) => (
            <AdminOrderCard
              Data={item}
              key={index}
              onPressDeliver={() => deliveredHandle(item._id)}
              isDeliverLoading={isDeliverLoading}
              isDeliverLoadingId={orders.orders[index]._id}
              onPressDelete={() => deleteHandle(item._id)}
              onPressPaid={() => paidHandle(item._id)}
              onPressPayment={() => paymentHandle(item._id)}
              isPaidLoading={isPaidLoading}
              isPaidLoadingId={orders.orders[index]._id}
            />
          ))}
      </div>

      <div className="w-full flex flex-col gap-5 font-modamBl items-center mt-10">
        {!isLoading && (
          <Pagination
            color="success"
            showControls
            total={orders?.pages}
            initialPage={orders?.page}
            page={currentPage}
            onChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default SideBarOrders;
