import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  cartItems: [],
  cartOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateValue,
  reducers: {
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    addMultipleToCart: (state, action) => {
      state.cartItems.push(action.payload);
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
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    clearCart: (state) => {
      state.cartOpen = false;
      state.cartItems = [];
    },
  },
});

export const {
  toggleCart,
  addMultipleToCart,
  removeFromCart,
  updateCartQuantity,
  addToCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
