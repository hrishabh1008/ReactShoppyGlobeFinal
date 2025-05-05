import { configureStore } from "@reduxjs/toolkit";
import productsListSlice from "./productsListSlice";
import cartSlice from "./cartSlice";

const mainStore = configureStore({
  reducer: {
    productsListSlice,
    cartSlice,
  },
});

export default mainStore;
