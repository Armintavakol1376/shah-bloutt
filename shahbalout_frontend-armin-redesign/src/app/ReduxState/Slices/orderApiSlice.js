import { apiSlice } from "./apiSlice";
const PRODUCTS_URL = "/Order";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: "/Order",
        method: "POST",
        body: order,
      }),
    }),

    getMyOrders: builder.mutation({
      query: (data) => ({
        url: "/Order/MyOrders",
        method: "GET",
        body: data,
      }),
    }),

    getAdminOrders: builder.query({
      query: ({ pageNumber, keyword }) => ({
        url: `/Order/AdminOrders`,
        params: { pageNumber, keyword },
      }),

      providesTags: ["AdminOrders"],
      keepUnusedDataFor: 5,
    }),

    getAdminUserOrders: builder.query({
      query: (id) => ({
        url: `/Order/AdminGetUserOrder`,
        params: id,
      }),

      providesTags: ["AdminOrders"],
      keepUnusedDataFor: 5,
    }),

    isDeliveredOrder: builder.mutation({
      query: (id) => ({
        url: "/Order/AdminDelivered",
        method: "PUT",
        body: id,
      }),
    }),

    isPaidOrderByAdmin: builder.mutation({
      query: (id) => ({
        url: "/Order/AdminPaid",
        method: "PUT",
        body: id,
      }),
    }),

    deleteOrderByAdmin: builder.mutation({
      query: (id) => ({
        url: "/Order/AdminDeleteOrder",
        method: "DELETE",
        body: id,
      }),
    }),

    payOrder: builder.query({
      query: (id) => ({
        url: `/Pay/PaymentRequest`,
        params: id,
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetMyOrdersMutation,
  useGetAdminOrdersQuery,
  useGetAdminUserOrdersQuery,
  useIsDeliveredOrderMutation,
  useIsPaidOrderByAdminMutation,
  useDeleteOrderByAdminMutation,
  usePayOrderQuery,
} = orderApiSlice;
