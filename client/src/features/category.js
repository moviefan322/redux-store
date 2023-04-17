import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  currentCategory: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    updateCategories: (state, action) => {
      console.log("updateCategories", action.payload);
      state.categories = action.payload;
    },
    updateCurrentCategory: (state, action) => {
      console.log("updateCurrentCategory", action.payload);
      state.currentCategory = action.payload;
    },
  },
});

export const { updateCategories, updateCurrentCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
