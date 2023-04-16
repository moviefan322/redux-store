import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { updateProducts } = productSlice.actions;

export default productSlice.reducer;
