"use client";
import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../CartUtils";

const initialState =
  typeof window !== "undefined" &&
  (localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : { cartItems: [], shippingAddress: "", paymentMethod: null });

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // in the cart

      const { packageItem } = action.payload;

      console.log("packageItem: ", packageItem);
      const existItem = state.cartItems.find(
        (x) => x.packageId === packageItem.packageId
      );

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.packageId === existItem.packageId ? packageItem : x
        );
      } else {
        state.cartItems = [...state.cartItems, packageItem];
      }

      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
    removeFromCart: (state, action) => {
      const packageItem = action.payload;
      console.log("packageItem: ", packageItem);
      state.cartItems = state.cartItems.filter(
        (x) => x.packageId !== packageItem.packageId
      );

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }

      return state;
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(state));
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCartItems: (state, action) => {
      state.cartItems = [];
      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(state));
    },
    // NOTE: here we need to reset state for when a user logs out so the next
    // user doesn't inherit the previous users cart and shipping
    resetCart: (state) => (state = initialState),
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
