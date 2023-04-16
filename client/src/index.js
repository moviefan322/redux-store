import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
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

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

serviceWorker.register();
