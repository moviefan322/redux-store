import React from "react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./features/cart";
import categoryReducer from "./features/category";
import productReducer from "./features/products";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoryReducer,
    products: productReducer,
  },
});
store.subscribe(() => {
  console.log(store.getState());
});
console.log(store.getState());

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

serviceWorker.register();
