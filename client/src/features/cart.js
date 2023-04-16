import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartOpen: initialStateValue,
  },
  reducers: {
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    addMultipleToCart: (state, action) => {
      state.cartItems.push(...action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    updateCartQuantity: (state, action) => {
      const { _id, purchaseQuantity } = action.payload;
      state.cartItems = state.cartItems.map((item) => {
        if (item._id === _id) {
          item.purchaseQuantity = purchaseQuantity;
        }
        return item;
      });
    },
  },
});

export const {
  toggleCart,
  addMultipleToCart,
  removeFromCart,
  updateCartQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
